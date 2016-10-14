from app.models import *
import json
from django.http import HttpResponse
from django.shortcuts import render


def home(request):
    return render(request, "index.html")


def hamburger(request):
    hamburger_data = {}
    assets = Asset.objects.all()
    categories = set([asset.sector for asset in assets])
    for category in categories:
        hamburger_data[category] = [asset.name for asset in assets if asset.sector == category]
    return HttpResponse(json.dumps(hamburger_data), content_type="application/json")
