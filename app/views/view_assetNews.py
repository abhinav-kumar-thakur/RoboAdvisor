import json
import operator

from django.http import HttpResponse

from app.models import Asset
from app.models import News


def assetNewsApi(request, assetSymbol):
    assetNewsData = []

    asset = Asset.objects.get(symbol=assetSymbol)
    date = (News.objects.filter(asset=asset).latest('timestamp')).timestamp

    try:
        for news in News.objects.filter(asset=asset, timestamp=date):
            impact = "Positive" if news.sentiment > 0 else "Negative"
            assetNewsData.append(
                {"headline": news.headline, "url": news.url, "sentiment": str(abs(news.sentiment)), "impact": impact})
    except:
        pass

    assetNewsData.sort(key=operator.itemgetter('sentiment'), reverse=True)

    return HttpResponse(json.dumps(assetNewsData[:3]), content_type="application/json")
