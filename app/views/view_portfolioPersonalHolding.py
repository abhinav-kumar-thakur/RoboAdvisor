import json

from django.http import HttpResponse

from app.models import AssetData
from app.models import PortfolioAssetMapping


def portfolioPersonalHoldingApi(request):
    portfolioPersonalHolding = {}

    portfolioShare = 0.0
    for mapping in PortfolioAssetMapping.objects.filter(portfolio=1):
        asset = AssetData.objects.filter(asset=mapping.asset).latest('timestamp')
        portfolioShare += asset.price * mapping.currentCount
    portfolioPersonalHolding["value"] = portfolioShare
    portfolioPersonalHolding["assets"] = PortfolioAssetMapping.objects.filter(portfolio=1).count()

    return HttpResponse(json.dumps(portfolioPersonalHolding), content_type="application/json")
