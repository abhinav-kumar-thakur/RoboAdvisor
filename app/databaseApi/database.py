import os
import sys

path = os.path.split(os.path.split(os.path.dirname(os.path.abspath(__file__)))[0])[0]
sys.path.append(path)
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "app.settings")

import django

django.setup()

from app.databaseApi.portfolio import PortfolioApi
from app.databaseApi.asset import AssetApi
from app.databaseApi.assetData import AssetDataApi
from app.databaseApi.portfolioAssetMapping import PortfolioAssetMappingApi
from app.models import Portfolio, Asset

PortfolioApi().mapUser(1)

AssetApi().addAsset("yahoo", "YHOO")
AssetApi().addAsset("google", "GOOG")
AssetApi().addAsset("ibm", "IBM")

AssetDataApi().addDetails(None, 0.1, "2012-01-01", "2016-10-02")

for asset in Asset.objects.all():
    PortfolioAssetMappingApi().mapAsset(portfolio=Portfolio.objects.all()[0], asset=asset, currentCount=1000)
