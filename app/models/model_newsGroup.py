from django.db import models
from app.models.model_asset import Asset

class NewsGroup(models.Model):
    id = models.AutoField(primary_key=True)
    asset = models.ForeignKey(Asset)
    effect = models.FloatField()

    class Meta:
        db_table = "news_group"
        app_label = "app"
