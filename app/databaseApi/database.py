import os
import sys
from datetime import datetime

path = os.path.split(os.path.split(os.path.dirname(os.path.abspath(__file__)))[0])[0]
sys.path.append(path)
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "app.settings")

import django

django.setup()

from app.databaseApi.portfolio import PortfolioApi
from app.databaseApi.asset import AssetApi
from app.databaseApi.assetData import AssetDataApi
from app.databaseApi.portfolioAssetMapping import PortfolioAssetMappingApi
from app.databaseApi.transaction import TransactionApi
from app.models import Portfolio, Asset, Status

PortfolioApi().mapUser(1)

AssetApi().addAsset(assetName="Vanguard large cap index adm", assetSymbol="VLCAX", assetType="commodity")
AssetApi().addAsset(assetName="US aggregate bond", assetSymbol="AGG", assetType="commodity")
AssetApi().addAsset(assetName="SPDR Gold Shares", assetSymbol="GLD", assetType="commodity")
AssetApi().addAsset(assetName="United States oil", assetSymbol="USO", assetType="commodity")
AssetApi().addAsset(assetName="Chevron Corporation", assetSymbol="CVX", assetType="stock")
AssetApi().addAsset(assetName="Apple Inc", assetSymbol="AAPL", assetType="stock")
AssetApi().addAsset(assetName="Valero energy corporation", assetSymbol="VLO", assetType="stock")
AssetApi().addAsset(assetName="Berkshire Hathaway", assetSymbol="BRK-A", assetType="stock")
AssetApi().addAsset(assetName="Facebook", assetSymbol="FB", assetType="stock")
AssetApi().addAsset(assetName="Alphabet Inc", assetSymbol="GOOG", assetType="stock")

date = "2016-10-10"
date_format = "%Y-%m-%d"
AssetDataApi().addDetails(prediction=0.0, errorMargin=0.1, startDate="2012-01-01", endDate=date, netEffect=0.0)

for asset in Asset.objects.all():
    PortfolioAssetMappingApi().mapAsset(portfolio=Portfolio.objects.all()[0], asset=asset, currentCount=0)

TransactionApi().addTransaction(trade="buy", tradeCount=344, assetSymbol="VLCAX")
TransactionApi().addTransaction(trade="buy", tradeCount=150, assetSymbol="AGG")
TransactionApi().addTransaction(trade="buy", tradeCount=299, assetSymbol="GLD")
TransactionApi().addTransaction(trade="buy", tradeCount=87, assetSymbol="USO")
TransactionApi().addTransaction(trade="buy", tradeCount=5, assetSymbol="CVX")
TransactionApi().addTransaction(trade="buy", tradeCount=56, assetSymbol="AAPL")
TransactionApi().addTransaction(trade="buy", tradeCount=71, assetSymbol="VLO")
TransactionApi().addTransaction(trade="buy", tradeCount=22, assetSymbol="BRK-A")
TransactionApi().addTransaction(trade="buy", tradeCount=46, assetSymbol="FB")
TransactionApi().addTransaction(trade="buy", tradeCount=540, assetSymbol="GOOG")

Status(lastUpdateDate=datetime.strptime(date, date_format)).save()
