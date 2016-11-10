import json
from datetime import timedelta

from django.http import HttpResponse

from app.models import Asset
from app.models import AssetData


def assetPredictionGraphDataApi(request, assetSymbol):
    assetPredictionGraphData = []

    asset = Asset.objects.get(symbol=assetSymbol)

    assetData = AssetData.objects.filter(asset=asset).latest('timestamp')
    latestDay = assetData.timestamp
    endDate = latestDay
    startDate = latestDay - timedelta(30)

    date = startDate
    while (date <= endDate):
        price = 0.0
        try:
            data = AssetData.objects.get(asset=asset, timestamp=date)
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
                                         AssetData.objects.get(asset=asset, timestamp=latestDay)).prediction})

    return HttpResponse(json.dumps(assetPredictionGraphData), content_type="application/json")