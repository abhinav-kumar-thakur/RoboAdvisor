from app.models import News


class NewsApi():
    def addHeadline(self):
        news = News()
        news.save()


if __name__ == '__main__':
    NewsApi.addHeadline();
