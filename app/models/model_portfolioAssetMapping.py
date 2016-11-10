from django.db import models
from app.models import Asset
from app.models import Portfolio


class PortfolioAssetMapping(models.Model):
    id = models.AutoField(primary_key=True)
    portfolio = models.ForeignKey(Portfolio)
    asset = models.ForeignKey(Asset)
    currentCount = models.IntegerField()

    class Meta:
        db_table = "portfolio_asset_mapping"
        app_label = "app"
