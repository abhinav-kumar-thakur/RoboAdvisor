from django.db import models
from app.models.model_asset import Asset

class RippleEffect(models.Model):
    asset_id_one = models.ForeignKey(Asset)
    asset_id_two = models.IntegerField()
    timestamp = models.DateTimeField(auto_now_add=True)
    result = models.FloatField()

    class Meta:
        db_table = "ripple_effect"
        app_label = "app"

