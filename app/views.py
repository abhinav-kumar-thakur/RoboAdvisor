from app.models import Portfolio
from django.http import HttpResponse
from django.shortcuts import render


def home(request):
    return render(request, "index.html")


def accessPortfolio(request):
    portfolio = Portfolio(
        id=1, user_id=1
    )

    portfolio.save()
    res = Portfolio.objects.get(id=1)
    return HttpResponse("id : " + res.id + "user :" + res.user_id )
