import json

from django.http import HttpResponse

from app.models import Asset
from app.models import AssetData
from app.models import PortfolioAssetMapping
from app.models import Transaction


def assetPersonalHoldingApi(request, assetSymbol):
    assetPersonalHolding = {}
    try:
        asset = Asset.objects.get(symbol=assetSymbol)

        mapping = PortfolioAssetMapping.objects.get(portfolio=1, asset=asset)
        unitsHeld = mapping.currentCount

        assetData = AssetData.objects.filter(asset=asset).latest('timestamp')
        shareValue = unitsHeld * assetData.price

        transaction = Transaction.objects.filter(mapping=mapping).latest('timestamp')
        purchaseDate = transaction.timestamp

        assetPersonalHolding["asset"] = asset.name
        assetPersonalHolding["unitsHeld"] = unitsHeld
        assetPersonalHolding["shareValue"] = shareValue
        assetPersonalHolding["purchaseDate"] = str(purchaseDate.date())
    except:
        pass

    return HttpResponse(json.dumps(assetPersonalHolding), content_type="application/json")