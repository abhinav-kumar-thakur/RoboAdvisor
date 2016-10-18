from app.models import *
import json
from django.http import HttpResponse
from django.shortcuts import render


def home(request):
    return render(request, "index.html")


def portfolioPersonalHoldingApi(request):
    portfolioPersonalHolding = {}

    portfolioShare = 0.0
    for mapping in PortfolioAssetMapping.objects.filter(portfolio=1):
        asset = AssetData.objects.filter(asset=mapping.asset).latest('timeStamp')
        portfolioShare += asset.price
    portfolioPersonalHolding["value"] = portfolioShare
    portfolioPersonalHolding["assets"] = PortfolioAssetMapping.objects.filter(portfolio=1).count()

    return HttpResponse(json.dumps(portfolioPersonalHolding), content_type="application/json")


def portfolioPredictionApi(request):
    portfolioPrediction = []

    for mapping in PortfolioAssetMapping.objects.filter(portfolio=1):
        assetData = AssetData.objects.filter(asset=mapping.asset).latest('timeStamp')
        asset = Asset.objects.get(id=assetData.asset.id)
        if assetData.prediction is None:
            assetData.prediction = 0.0
        prediction = assetData.price - assetData.prediction
        portfolioPrediction.append({"asset": asset.name, "prediction": prediction})
    return HttpResponse(json.dumps(portfolioPrediction), content_type="application/json")


def navigationApi(request):
    navigationData = []

    assets = Asset.objects.all()
    categories = set([asset.sector for asset in assets])

    for category in categories:
        navigationData.append(
            {"category": category, "stocks": [{"name":asset.name,"symbol":asset.symbol} for asset in assets if asset.sector == category]})
    return HttpResponse(json.dumps(navigationData), content_type="application/json")


def assetRecommendationApi(request, assetSymbol):
    recommendationData = {}

    try:
        mapping = PortfolioAssetMapping.objects.get(portfolio=1, asset=Asset.objects.get(symbol=assetSymbol))

        recommendation = Recommendation.objects.filter(mapping=mapping).latest('timeStamp')
        recommendationData["asset"] = recommendation.recommendedAsset
        recommendationData["trade"] = recommendation.trade
    except:
        pass

    return HttpResponse(json.dumps(recommendationData), content_type="application/json")


def assetPersonalHoldingApi(request, assetSymbol):
    assetPersonalHolding = {}
    try:
        asset = Asset.objects.get(symbol=assetSymbol)

        mapping = PortfolioAssetMapping.objects.get(portfolio=1, asset=asset)
        unitsHeld = mapping.currentCount

        assetData = AssetData.objects.filter(asset=asset).latest('timeStamp')
        shareValue = unitsHeld * assetData.price
        assetPersonalHolding["asset"] = asset.name
        assetPersonalHolding["assetSymbol"] = assetSymbol
        assetPersonalHolding["unitsHeld"] = unitsHeld
        assetPersonalHolding["shareValue"] = shareValue
    except:
        pass

    return HttpResponse(json.dumps(assetPersonalHolding), content_type="application/json")
