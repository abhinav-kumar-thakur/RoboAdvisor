from app.models import *
import json
from django.http import HttpResponse
from django.shortcuts import render
from django.http import Http404


def home(request):
    return render(request, "index.html")


def navigationApi(request):
    hamburgerData = []

    assets = Asset.objects.all()
    categories = set([asset.sector for asset in assets])

    for category in categories:
        hamburgerData.append({"name": category, "stocks": [asset.name for asset in assets if asset.sector == category]})
    return HttpResponse(json.dumps(hamburgerData), content_type="application/json")


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


def personalHoldingInformationApi(request, assetName):
    holdingInformationData = {}
    try:
        asset = Asset.objects.get(name=assetName)
    except:
        raise Http404

    mapping = PortfolioAssetMapping.objects.get(portfolio=1, asset=asset)
    unitsHeld = mapping.currentCount

    assetData = AssetData.objects.filter(asset=asset).latest('timeStamp')
    shareValue = unitsHeld * assetData.price
    holdingInformationData["asset"] = [assetName]
    holdingInformationData["assetSymbol"] = [asset.symbol]
    holdingInformationData["unitsHeld"] = [unitsHeld]
    holdingInformationData["shareValue"] = [shareValue]

    return HttpResponse(json.dumps(holdingInformationData), content_type="application/json")
