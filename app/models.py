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
    prediction = models.FloatField()
    errorMargin = models.FloatField()
    neteffect = models.FloatField()

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
    timestamp = models.DateTimeField()
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
        db_table = "time_series_model"


class MinimumSpanningTreeModel(models.Model):
    assetIdOne = models.ForeignKey(Asset)
    assetIdTwo = models.IntegerField()
    slope = models.FloatField()
    intercept = models.FloatField()

    class Meta:
        db_table = "minimum_spanning_tree_model"


class NewsGroup(models.Model):
    id = models.AutoField(primary_key=True)
    asset = models.ForeignKey(Asset)
    effect = models.FloatField()

    class Meta:
        db_table = "news_group"

class News(models.Model):
    id = models.AutoField(primary_key=True)
    asset = models.ForeignKey(Asset)
    timestamp = models.DateTimeField()
    headline = models.CharField(max_length=200)
    url = models.URLField(max_length=200)
    sentiment = models.DecimalField(default=0.0, max_digits=5, decimal_places=2)

    class Meta:
        db_table = "news"


class Status(models.Model):
    lastUpdateDate = models.DateTimeField()

    class Meta:
        db_table = "status"


class RippleEffect(models.Model):
    asset = models.ForeignKey(Asset)
    result = models.FloatField()

    class Meta:
        db_table = "ripple_effect"
