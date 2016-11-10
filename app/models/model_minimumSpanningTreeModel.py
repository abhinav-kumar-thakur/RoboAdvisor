from django.db import models
from app.models.model_asset import Asset


class MinimumSpanningTreeModel(models.Model):
    assetIdOne = models.ForeignKey(Asset)
    assetIdTwo = models.IntegerField()
    slope = models.FloatField()
    intercept = models.FloatField()

    class Meta:
        db_table = "minimum_spanning_tree_model"
        app_label = "app"

