import json
from datetime import timedelta

from django.http import HttpResponse

from app.models import AssetData
from app.models import PortfolioAssetMapping


def portfolioComparisionGraphDataApi(request):
    comparisionGraphData = []

    startDate = (AssetData.objects.filter(prediction=0).first()).timestamp
    endDate = (AssetData.objects.all().last()).timestamp

    print(startDate.date())
    print(endDate.date())
    date = startDate
    while (date <= endDate):

        if date.strftime("%w") == '1':
            predictionDate = date - timedelta(3)
        else:
            predictionDate = date - timedelta(1)

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
        if priceFromRobo != 0.0:
            comparisionGraphData.append(
                {"date": str(date.date()), "priceFromYahoo": priceFromYahoo, "priceFromRobo": priceFromRobo})
        date = date + timedelta(1)

    return HttpResponse(json.dumps(comparisionGraphData), content_type="application/json")
