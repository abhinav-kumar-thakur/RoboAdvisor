from django.db import models
from app.models.model_asset import Asset

class AssetData(models.Model):
    asset = models.ForeignKey(Asset)
    timestamp = models.DateTimeField()
    price = models.FloatField()
    prediction = models.FloatField()
    errorMargin = models.FloatField()
    neteffect = models.FloatField()
    arimaeffect = models.FloatField()

    class Meta:
        db_table = "assetdata"
        app_label = "app"
