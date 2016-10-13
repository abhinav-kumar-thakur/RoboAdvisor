from app.models import NewsGroup, Asset


class NewsGroupApi():
    def mapNews(self, effect):
        for asset in Asset.objects.all():
            newsGroup = NewsGroup(asset=asset, effect=effect)
        newsGroup.save()
