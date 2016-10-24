from datetime import timedelta
from app.models import *
import json
from django.http import HttpResponse
from django.shortcuts import render
import operator


def home(request):
    return render(request, "index.html")


def navigationApi(request):
    navigationData = []

    assets = Asset.objects.all()
    categories = set([asset.sector for asset in assets])

    for category in categories:
        navigationData.append(
            {"category": category,
             "stocks": [{"name": asset.name, "symbol": asset.symbol} for asset in assets if asset.sector == category]})
    return HttpResponse(json.dumps(navigationData), content_type="application/json")


# Portfolio

def portfolioPersonalHoldingApi(request):
    portfolioPersonalHolding = {}

    portfolioShare = 0.0
    for mapping in PortfolioAssetMapping.objects.filter(portfolio=1):
        asset = AssetData.objects.filter(asset=mapping.asset).latest('timeStamp')
        portfolioShare += asset.price
    portfolioPersonalHolding["value"] = portfolioShare
    portfolioPersonalHolding["assets"] = PortfolioAssetMapping.objects.filter(portfolio=1).count()

    return HttpResponse(json.dumps(portfolioPersonalHolding), content_type="application/json")


def portfolioPredictionGraphDataApi(request):
    portfolioPredictionGraphData = []

    mapping = PortfolioAssetMapping.objects.filter(portfolio=1).first()
    assetData = AssetData.objects.filter(asset=mapping.asset).latest('timeStamp')
    latestDay = assetData.timeStamp
    endDate = latestDay
    startDate = latestDay - timedelta(180)

    date = startDate
    while (date <= endDate):
        price = 0.0
        for mapping in PortfolioAssetMapping.objects.filter(portfolio=1):
            try:
                data = AssetData.objects.get(asset=mapping.asset, timeStamp=date)
                price += data.price
            except:
                pass
        if price != 0.0:
            portfolioPredictionGraphData.append({"date": str(date.date()), "closingPrice": price})
        date = date + timedelta(1)

    if latestDay.day == 5:
        predictionDate = latestDay + timedelta(3)
    else:
        predictionDate = latestDay + timedelta(1)

    predictionPrice = 0.0
    for mapping in PortfolioAssetMapping.objects.filter(portfolio=1):
        assetData = AssetData.objects.get(asset=mapping.asset, timeStamp=latestDay)
        predictionPrice += assetData.prediction
    portfolioPredictionGraphData.append(
        {"date": str(predictionDate.date()), "closingPrice": predictionPrice})

    return HttpResponse(json.dumps(portfolioPredictionGraphData), content_type="application/json")


def portfolioPredictionApi(request):
    portfolioPredictions = []

    for mapping in PortfolioAssetMapping.objects.filter(portfolio=1):
        assetData = AssetData.objects.filter(asset=mapping.asset).latest('timeStamp')
        asset = Asset.objects.get(id=assetData.asset.id)

        prediction = float("{0:.2f}".format(((assetData.prediction - assetData.price) / assetData.price) * 100))
        trade = "hold"
        if prediction > 2.5:
            trade = "buy"
        if prediction < -2.5:
            trade = "sell"
        portfolioPredictions.append(
            {"asset": asset.name, "symbol": asset.symbol, "prediction": abs(prediction), "trade": trade})

    portfolioPredictions.sort(key=operator.itemgetter('prediction'), reverse=True)

    return HttpResponse(json.dumps(portfolioPredictions[:3]), content_type="application/json")


# Asset

def assetPersonalHoldingApi(request, assetSymbol):
    assetPersonalHolding = {}
    try:
        asset = Asset.objects.get(symbol=assetSymbol)

        mapping = PortfolioAssetMapping.objects.get(portfolio=1, asset=asset)
        unitsHeld = mapping.currentCount

        assetData = AssetData.objects.filter(asset=asset).latest('timeStamp')
        shareValue = unitsHeld * assetData.price

        transaction = Transaction.objects.filter(mapping=mapping).latest('timeStamp')
        purchaseDate = transaction.timeStamp

        assetPersonalHolding["asset"] = asset.name
        assetPersonalHolding["unitsHeld"] = unitsHeld
        assetPersonalHolding["shareValue"] = shareValue
        assetPersonalHolding["purchaseDate"] = str(purchaseDate.date())
    except:
        pass

    return HttpResponse(json.dumps(assetPersonalHolding), content_type="application/json")


def assetPredictionGraphDataApi(request, assetSymbol):
    assetPredictionGraphData = []

    asset = Asset.objects.get(symbol=assetSymbol)

    assetData = AssetData.objects.filter(asset=asset).latest('timeStamp')
    latestDay = assetData.timeStamp
    endDate = latestDay
    startDate = latestDay - timedelta(180)

    date = startDate
    while (date <= endDate):
        price = 0.0
        try:
            data = AssetData.objects.get(asset=asset, timeStamp=date)
            price = data.price
        except:
            pass
        if price != 0.0:
            assetPredictionGraphData.append({"date": str(date.date()), "closingPrice": price})
        date = date + timedelta(1)

    if latestDay.day == 5:
        predictionDate = latestDay + timedelta(3)

    else:
        predictionDate = latestDay + timedelta(1)

    assetPredictionGraphData.append({"date": str(predictionDate.date()),
                                     "closingPrice": (
                                         AssetData.objects.get(asset=asset, timeStamp=latestDay)).prediction})

    return HttpResponse(json.dumps(assetPredictionGraphData), content_type="application/json")


def assetNewsApi(request, assetSymbol):
    assetNewsData = []

    asset = Asset.objects.get(symbol=assetSymbol)
    try:
        for news in News.objects.filter(asset=asset).latest('timeStamp'):
            impact = "Positive" if news.sentiment > 0 else "Negative"
            assetNewsData.append(
                {"headline": news.headline, "url": news.url, "sentiment": abs(news.sentiment), "impact": impact})
        assetNewsData.sort(key=operator.itemgetter('sentiment'), reverse=True)

    except:
        pass

    return HttpResponse(json.dumps(assetNewsData[:3]), content_type="application/json")
