import os
from datetime import datetime

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "app.settings")
import sys

sys.path.append("/Users/nayana/PycharmProjects/RoboAdvisor")
import django

django.setup()
from app.models import AssetData
from app.models import Asset
from yahoo_finance import Share


class AssetDataApi():
    def addDetails(self, prediction, errorMargin, startDate, endDate):
        date_format = "%Y-%m-%d"
        for asset in Asset.objects.all():
            symbol = asset.symbol
            assetInfo = Share(symbol)
            historicalData = assetInfo.get_historical(startDate, endDate)
            for dailyData in historicalData:
                print(datetime.strptime(dailyData['Date'], date_format).timestamp())
                data = AssetData(assetId=asset, errorMargin=errorMargin, prediction=prediction,
                                 price=dailyData['Close'],
                                 timestamp=datetime.strptime(dailyData['Date'], date_format))
                data.save()


if __name__ == '__main__':
    AssetDataApi().addDetails(None, 0.1, "2016-01-01", "2016-10-02")
