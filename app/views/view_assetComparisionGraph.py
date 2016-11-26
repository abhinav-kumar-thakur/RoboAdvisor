import json
from datetime import timedelta

from django.http import HttpResponse

from app.models import Asset
from app.models import AssetData


def assetComparisionGraphDataApi(request, assetSymbol):
    comparisionGraphData = []

    asset = Asset.objects.get(symbol=assetSymbol)

    assetData = AssetData.objects.filter(asset=asset).latest('timestamp')
    latestDay = assetData.timestamp
    endDate = latestDay
    startDate = (AssetData.objects.filter(prediction=0).latest('timestamp')).timestamp + timedelta(2)

    date = startDate
    while (date <= endDate):

        if date.strftime("%w") == '1':
            predictionDate = date - timedelta(3)
        else:
            predictionDate = date - timedelta(1)

        priceFromYahoo = 0.0
        priceFromRobo = 0.0

        try:
            dataForYahoo = AssetData.objects.get(asset=asset, timestamp=date)
            priceFromYahoo = dataForYahoo.price

            dataForRobo = AssetData.objects.get(asset=asset, timestamp=predictionDate)
            priceFromRobo = dataForRobo.prediction

        except:
            pass
        if priceFromYahoo != 0.0 or priceFromRobo != 0.0:
            comparisionGraphData.append(
                {"date": str(date.date()), "priceFromYahoo": priceFromYahoo, "priceFromRobo": priceFromRobo})
        date = date + timedelta(1)

    return HttpResponse(json.dumps(comparisionGraphData), content_type="application/json")
