from app.models import *
import json
from django.http import HttpResponse
from django.shortcuts import render
from datetime import datetime


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
    print(assetSymbol + "in views")
    recommendationData = {}
    today = datetime.now().date()
    mappingId = PortfolioAssetMapping.objects.get(asset=Asset.objects.get(symbol=assetSymbol))
    for recommendation in Recommendation.objects.all():
        transactionDate = (recommendation.timestamp).date
        if recommendation.mapping == mappingId & transactionDate == today:
            recommendationData['asset'] = [recommendation.recommendedAsset]
            recommendationData['trade'] = [recommendation.trade]
        else:
            pass
    return HttpResponse(json.dumps(recommendationData), content_type="application/json")
