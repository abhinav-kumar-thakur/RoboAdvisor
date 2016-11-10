from django.db import models
from app.models.model_asset import Asset

class News(models.Model):
    id = models.AutoField(primary_key=True)
    asset = models.ForeignKey(Asset)
    timestamp = models.DateTimeField()
    headline = models.CharField(max_length=200)
    url = models.URLField(max_length=200)
    sentiment = models.DecimalField(default=0.0, max_digits=5, decimal_places=2)

    class Meta:
        db_table = "news"
        app_label = "app"

