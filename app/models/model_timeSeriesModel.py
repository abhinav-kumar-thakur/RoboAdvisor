from django.contrib.postgres.fields import JSONField
from django.db import models
from app.models.model_asset import Asset


class TimeSeriesModel(models.Model):
    asset = models.ForeignKey(Asset)
    coefficients = JSONField()

    class Meta:
        db_table = "time_series_model"
        app_label = "app"
