from app.models import NewsGroup

class NewsGroupApi():
    def mapNews(self):
        newsGroup = NewsGroup()
        newsGroup.save()


if __name__ == '__main__':
    NewsGroupApi.mapNews();
