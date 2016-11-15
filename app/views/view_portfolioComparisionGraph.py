import json
from datetime import timedelta

from django.http import HttpResponse

from app.models import AssetData
from app.models import PortfolioAssetMapping


def portfolioComparisionGraphDataApi(request):
    comparisionGraphData = []

    mapping = PortfolioAssetMapping.objects.filter(portfolio=1).first()
    assetData = AssetData.objects.filter(asset=mapping.asset).lcatest('timestamp')

    latestDay = assetData.timestamp
    endDate = latestDay
    startDate = (AssetData.objects.filter(prediction=0).latest('timestamp')).timestamp + timedelta(2)

    if latestDay.strftime("%w") == '1':
        predictionDate = latestDay - timedelta(3)
    else:
        predictionDate = latestDay - timedelta(1)

    date = startDate
    while (date <= endDate):
        priceFromYahoo = 0.0
        priceFromRobo = 0.0

        for mapping in PortfolioAssetMapping.objects.filter(portfolio=1):
            try:
                dataForYahoo = AssetData.objects.get(asset=mapping.asset, timestamp=date)
                priceFromYahoo += dataForYahoo.price * mapping.currentCount

                dataForRobo = AssetData.objects.get(asset=mapping.asset, timestamp=predictionDate)
                priceFromRobo += dataForRobo.prediction * mapping.currentCount

            except:
                pass
        if priceFromYahoo != 0.0:
            comparisionGraphData.append(
                {"date": str(date.date()), "priceFromYahoo": priceFromYahoo, "priceFromRobo": priceFromRobo})
        date = date + timedelta(1)

    return HttpResponse(json.dumps(comparisionGraphData), content_type="application/json")
