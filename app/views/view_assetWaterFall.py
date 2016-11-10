import json

from django.http import HttpResponse

from app.models import Asset
from app.models import AssetData
from app.models import NewsGroup
from app.models import RippleEffect


def assetWaterFallApi(request, assetSymbol):
    assetWaterFallData = {}

    asset = Asset.objects.get(symbol=assetSymbol)

    try:
        assetData = AssetData.objects.filter(asset=asset).latest('timestamp')

        newseffectOnCurrentPrice = pow(10, 0.01 * ((NewsGroup.objects.get(asset=asset)).effect)) * assetData.price
        newsEffect = newseffectOnCurrentPrice - assetData.price

        arimaEffectOnNewsEffectPrice = pow(10, assetData.arimaeffect) * newseffectOnCurrentPrice
        arimaEffect = arimaEffectOnNewsEffectPrice - newseffectOnCurrentPrice

        rippleEffectOnArimaEffectPrice = 0.0

        for data in RippleEffect.objects.filter(asset_id_two=asset.id, timestamp=assetData.timestamp):
            rippleEffectOnArimaEffectPrice = rippleEffectOnArimaEffectPrice + data.result

        rippleEffectOnArimaEffectPrice = pow(10, 0.01 * rippleEffectOnArimaEffectPrice) * arimaEffectOnNewsEffectPrice
        rippleEffect = rippleEffectOnArimaEffectPrice - arimaEffectOnNewsEffectPrice

        assetWaterFallData["currentValue"] = assetData.price
        assetWaterFallData["newsEffect"] = newsEffect
        assetWaterFallData["arimaEffect"] = arimaEffect
        assetWaterFallData["rippleEffect"] = rippleEffect

    except:
        pass

    return HttpResponse(json.dumps(assetWaterFallData), content_type="application/json")