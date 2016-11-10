import json
import operator

from django.http import HttpResponse

from app.models import Asset
from app.models import News


def portfolioNewsApi(request):
    portfolioNewsData = []

    for asset in Asset.objects.all():
        try:
            news = News.objects.filter(asset=asset).order_by('timestamp')[0]
            impact = "Positive" if news.sentiment > 0 else "Negative"
            portfolioNewsData.append(
                {"headline": news.headline, "url": news.url, "sentiment": str(abs(news.sentiment)), "impact": impact})
        except:
            pass
    portfolioNewsData.sort(key=operator.itemgetter('sentiment'), reverse=True)

    return HttpResponse(json.dumps(portfolioNewsData), content_type="application/json")