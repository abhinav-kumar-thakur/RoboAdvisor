from datetime import datetime
from app.models import AssetData
from app.models import Asset
from yahoo_finance import Share
from collections import OrderedDict


class AssetDataApi():
    def addDetails(self, prediction, errorMargin, neteffect, startDate, endDate, arimaeffect, historicalData=None,
                   endDateData=None):
        date_format = "%Y-%m-%d"
        for asset in Asset.objects.all():
            symbol = asset.symbol
            assetInfo = Share(symbol)
            historicalData.append(assetInfo.get_historical(startDate, endDate))

        for data in historicalData:
            if data['Date'] == endDate:
                endDateData.append(data)
            if len(endDateData) != 10:
                raise Exception
            else:
                historicalData.reverse()
                for dailyData in historicalData:
                    data = AssetData(asset=asset, errorMargin=errorMargin, prediction=prediction,
                                     price=dailyData['Close'],
                                     timestamp=datetime.strptime(dailyData['Date'], date_format), neteffect=neteffect,
                                     arimaeffect=arimaeffect)

                data.save()
