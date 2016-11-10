from django.db import models

class Status(models.Model):
    lastUpdateDate = models.DateTimeField()

    class Meta:
        db_table = "status"
        app_label = "app"
