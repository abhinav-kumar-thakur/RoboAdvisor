import json
from django.http import HttpResponse

from app.models import Asset


def navigationApi(request):
    navigationData = []

    assets = Asset.objects.all()
    categories = set([asset.sector for asset in assets])

    for category in categories:
        navigationData.append(
            {"category": category,
             "stocks": [{"name": asset.name, "symbol": asset.symbol} for asset in assets if asset.sector == category]})
    return HttpResponse(json.dumps(navigationData), content_type="application/json")
