import json
import operator

from django.http import HttpResponse

from app.models import Asset
from app.models import AssetData
from app.models import PortfolioAssetMapping


def portfolioPredictionApi(request):
    portfolioPredictions = []

    for mapping in PortfolioAssetMapping.objects.filter(portfolio=1):
        assetData = AssetData.objects.filter(asset=mapping.asset).latest('timestamp')
        asset = Asset.objects.get(id=assetData.asset.id)

        prediction = float("{0:.2f}".format(((assetData.prediction - assetData.price) / assetData.price) * 100))
        trade = "hold"
        if prediction > 1.0:
            trade = "buy"
        if prediction < -1.0:
            trade = "sell"
        portfolioPredictions.append(
            {"asset": asset.name, "symbol": asset.symbol, "prediction": abs(prediction), "trade": trade})

    portfolioPredictions.sort(key=operator.itemgetter('prediction'), reverse=True)

    return HttpResponse(json.dumps(portfolioPredictions), content_type="application/json")