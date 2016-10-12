import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE","app.settings")
import sys
sys.path.append("/Users/nayana/PycharmProjects/RoboAdvisor")
import django
django.setup()
from app.models import Portfolio

class PortfolioApi():
    def mapUser(self, userId):
        portfolio = Portfolio(userId=userId)
        portfolio.save()


if __name__ == '__main__':
    PortfolioApi().mapUser(1)
