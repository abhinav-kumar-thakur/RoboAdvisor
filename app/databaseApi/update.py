import os
import sys
from datetime import datetime, timedelta

path = os.path.split(os.path.split(os.path.dirname(os.path.abspath(__file__)))[0])[0]
sys.path.append(path)
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "app.settings")

import django

django.setup()

from app.databaseApi.assetData import AssetDataApi
from app.models import Status

status = Status.objects.all()[0]
yesterday = (datetime.today() - timedelta(1)).date()
lastUpdateDate = status.lastUpdateDate.date()
startUpdateDate = lastUpdateDate + timedelta(1)
if yesterday != lastUpdateDate:
    AssetDataApi().addDetails(prediction=0.0, errorMargin=0.1, neteffect=0.0, startDate=str(startUpdateDate),
                              endDate=str(yesterday),
                              arimaeffect=0.0)
    status.lastUpdateDate = yesterday
    status.save()
