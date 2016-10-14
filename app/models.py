from django.contrib.postgres.fields import JSONField
from django.db import models


class Portfolio(models.Model):
    id = models.AutoField(primary_key=True)
    userId = models.IntegerField()

    class Meta:
        db_table = "portfolio"


class Asset(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    symbol = models.CharField(max_length=50)
    type = models.CharField(max_length=50)
    sector = models.CharField(max_length=50)
    subSector = models.CharField(max_length=50)

    class Meta:
        db_table = "asset"


class AssetData(models.Model):
    asset = models.ForeignKey(Asset)
    timestamp = models.DateTimeField()
    price = models.FloatField()
    prediction = models.FloatField(null=True)
    errorMargin = models.FloatField()

    class Meta:
        db_table = "assetdata"


class PortfolioAssetMapping(models.Model):
    id = models.AutoField(primary_key=True)
    portfolio = models.ForeignKey(Portfolio)
    asset = models.ForeignKey(Asset)
    currentCount = models.IntegerField()

    class Meta:
        db_table = "portfolio_asset_mapping"


class Transaction(models.Model):
    mapping = models.ForeignKey(PortfolioAssetMapping)
    timeStamp = models.DateTimeField()
    trade = models.CharField(max_length=50)
    initialCount = models.IntegerField()
    finalCount = models.IntegerField()
    tradeCount = models.IntegerField()
    price = models.FloatField()

    class Meta:
        db_table = "transaction"


class TimeSeriesModel(models.Model):
    asset = models.ForeignKey(Asset)
    coefficients = JSONField()

    class Meta:
        db_table = "timeSeries_model"


class MinimumSpanningTreeModel(models.Model):
    assetIdOne = models.ForeignKey(Asset)
    assetIdTwo = models.IntegerField()
    slope = models.FloatField()
    intercept = models.FloatField()

    class Meta:
        db_table = "minimum_spanning_tree_model"


class NewsGroup(models.Model):
    id = models.AutoField(primary_key=True)
    assetId = models.ForeignKey(Asset)
    effect = models.FloatField()

    class Meta:
        db_table = "news_group"


class News(models.Model):
    id = models.AutoField(primary_key=True)
    timestamp = models.DateTimeField()
    group = models.ForeignKey(NewsGroup)
    headline = models.CharField(max_length=100)
    url = models.CharField(max_length=100)
    sentiment = models.FloatField()

    class Meta:
        db_table = "news"


class Recommendation(models.Model):
    id = models.AutoField(primary_key=True)
    timestamp = models.DateTimeField()
    mapping = models.ForeignKey(PortfolioAssetMapping)
    recommendedAsset = models.ForeignKey(Asset)
    trade = models.CharField(max_length=50)

    class Meta:
        db_table = "recommendation"
