"""RoboAdvisor URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from app.views import *
from django.conf.urls import url
from django.contrib import admin
from django.views.generic import TemplateView

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', home, name='home'),
    url(r'^getNavigation/', navigationApi, name="getNavigation"),

    # Portfolio
    url(r'^portfolio/getPersonalHolding/', portfolioPersonalHoldingApi, name="getPortfolioPersonalHolding"),
    url(r'^portfolio/getPrediction/', portfolioPredictionApi, name="getPortfolioPersonalHolding"),

    # Asset
    url(r'^asset/([A-Z]+)/getRecommendation/', assetRecommendationApi, name="getRecommendations"),
    url(r'^asset/([A-Z]+)/getPersonalHolding/', assetPersonalHoldingApi,
        name="getPersonalHolding"),
    url(r'^(%s)?$' % '|'.join(['predictions', 'performance']), TemplateView.as_view(template_name='index.html'))
]
