from app.models import News, NewsGroup
from datetime import datetime


class NewsApi():
    def addHeadline(self, headline, url, sentiment):
        for group in NewsGroup.objects.all():
            news = News(timeStamp=datetime.now(), groupId=group, headline=headline, url=url, sentiment=sentiment)
        news.save()
