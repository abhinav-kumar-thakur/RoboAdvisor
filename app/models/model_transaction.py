from django.db import models
from app.models import PortfolioAssetMapping

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
        app_label = "app"

