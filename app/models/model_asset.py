from django.db import models

class Asset(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    symbol = models.CharField(max_length=50)
    type = models.CharField(max_length=50)
    sector = models.CharField(max_length=50)
    subSector = models.CharField(max_length=50)

    class Meta:
        db_table = "asset"
        app_label = 'app'