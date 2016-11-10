from django.db import models

class Portfolio(models.Model):
    id = models.AutoField(primary_key=True)
    userId = models.IntegerField()

    class Meta:
        db_table = "portfolio"
        app_label = "app"

