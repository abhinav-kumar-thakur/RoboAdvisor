from app.models import *
import json
from django.http import HttpResponse
from django.shortcuts import render
from django.http import Http404


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


def navigationApi(request):
    navigationData = []

    assets = Asset.objects.all()
    categories = set([asset.sector for asset in assets])

    for category in categories:
        navigationData.append(
            {"name": category, "stocks": [asset.name for asset in assets if asset.sector == category]})
    return HttpResponse(json.dumps(navigationData), content_type="application/json")


def recommendationApi(request, assetName):
    recommendationData = {}

    try:
        mapping = PortfolioAssetMapping.objects.get(portfolio=1, asset=Asset.objects.get(symbol=assetName))
    except:
        raise Http404

    recommendation = Recommendation.objects.filter(mapping=mapping).latest('timeStamp')
    recommendationData['asset'] = [recommendation.recommendedAsset]
    recommendationData['trade'] = [recommendation.trade]

    return HttpResponse(json.dumps(recommendationData), content_type="application/json")


def assetPersonalHoldingApi(request, assetName):
    assetPersonalHolding = {}
    try:
        asset = Asset.objects.get(name=assetName)
    except:
        raise Http404

    mapping = PortfolioAssetMapping.objects.get(portfolio=1, asset=asset)
    unitsHeld = mapping.currentCount

    assetData = AssetData.objects.filter(asset=asset).latest('timeStamp')
    shareValue = unitsHeld * assetData.price
    assetPersonalHolding["asset"] = [assetName]
    assetPersonalHolding["assetSymbol"] = [asset.symbol]
    assetPersonalHolding["unitsHeld"] = [unitsHeld]
    assetPersonalHolding["shareValue"] = [shareValue]

    return HttpResponse(json.dumps(assetPersonalHolding), content_type="application/json")
