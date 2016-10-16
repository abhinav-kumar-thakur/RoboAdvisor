from app.models import *
import json
from django.http import HttpResponse
from django.shortcuts import render
from datetime import datetime

today = datetime.now().date()


def home(request):
    return render(request, "index.html")


def hamburgerApi(request):
    hamburgerData = []

    assets = Asset.objects.all()
    categories = set([asset.sector for asset in assets])

    for category in categories:
        hamburgerData.append({"name": category, "stocks": [asset.name for asset in assets if asset.sector == category]})
    return HttpResponse(json.dumps(hamburgerData), content_type="application/json")


def recommendationApi(request, assetSymbol):
    recommendationData = {}

    mapping = PortfolioAssetMapping.objects.get(portfolio=1, asset=Asset.objects.get(symbol=assetSymbol))

    for recommendation in Recommendation.objects.filter(mapping=mapping):
        if recommendation.timeStamp.date == today:
            recommendationData['asset'] = [recommendation.recommendedAsset]
            recommendationData['trade'] = [recommendation.trade]
        else:
            pass
    return HttpResponse(json.dumps(recommendationData), content_type="application/json")


def personalHoldingInformationApi(request, assetSymbol):
    holdingInformationData = {}

    asset = Asset.objects.get(symbol=assetSymbol)
    mapping = PortfolioAssetMapping.objects.get(portfolio=1, asset=asset)
    unitsHeld = mapping.currentCount

    shareValue = 0.0
    for assetData in AssetData.objects.filter(asset=asset):
        if assetData.timeStamp.date == today:
            shareValue = unitsHeld * assetData.price

    holdingInformationData["asset"] = [asset.name]
    holdingInformationData["assetSymbol"] = [assetSymbol]
    holdingInformationData["unitsHeld"] = [unitsHeld]
    holdingInformationData["shareValue"] = [shareValue]

    return HttpResponse(json.dumps(holdingInformationData), content_type="application/json")
