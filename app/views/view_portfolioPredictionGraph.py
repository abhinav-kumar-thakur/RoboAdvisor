import json
from datetime import timedelta

from django.http import HttpResponse

from app.models import AssetData
from app.models import PortfolioAssetMapping


def portfolioPredictionGraphDataApi(request):
    portfolioPredictionGraphData = []

    mapping = PortfolioAssetMapping.objects.filter(portfolio=1).first()
    assetData = AssetData.objects.filter(asset=mapping.asset).latest('timestamp')
    latestDay = assetData.timestamp
    endDate = latestDay
    startDate = latestDay - timedelta(30)

    date = startDate
    while (date <= endDate):
        price = 0.0
        for mapping in PortfolioAssetMapping.objects.filter(portfolio=1):
            try:
                data = AssetData.objects.get(asset=mapping.asset, timestamp=date)
                price += data.price * mapping.currentCount
            except:
                pass
        if price != 0.0:
            portfolioPredictionGraphData.append({"date": str(date.date()), "closingPrice": price})
        date = date + timedelta(1)

    if latestDay.strftime("%w") == "5":
        print("here")
        predictionDate = latestDay + timedelta(3)
    else:
        predictionDate = latestDay + timedelta(1)

    predictionPrice = 0.0
    for mapping in PortfolioAssetMapping.objects.filter(portfolio=1):
        assetData = AssetData.objects.get(asset=mapping.asset, timestamp=latestDay)
        predictionPrice += assetData.prediction * mapping.currentCount
    portfolioPredictionGraphData.append(
        {"date": str(predictionDate.date()), "closingPrice": predictionPrice})

    return HttpResponse(json.dumps(portfolioPredictionGraphData), content_type="application/json")
