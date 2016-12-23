from datetime import datetime, timedelta

from app.models import AssetData
from app.models import Asset
from yahoo_finance import Share

from app.models import Status


class AssetDataApi():
    def addDetails(self, prediction, errorMargin, neteffect, startDate, endDate, arimaeffect):
        status = Status.objects.all()
        date_format = "%Y-%m-%d"
        historicalData = fetch_asset_data(startDate, endDate)
        for dailyData in historicalData:
            for asset in dailyData:
                status_date = datetime.strptime(asset[0]['Date'], date_format)
                symbol = Asset.objects.get(symbol=asset[0]['Symbol'])
                db = AssetData(asset=symbol, errorMargin=errorMargin, prediction=prediction,
                               price=asset[0]['Close'],
                               timestamp=datetime.strptime(asset[0]['Date'], date_format), neteffect=neteffect,
                               arimaeffect=arimaeffect)
                db.save()
        status.lastUpdateDate = status_date
        status.save()


def fetch_asset_data(start_date, endDate):
    date_format = "%Y-%m-%d"
    current_date = start_date
    historicalData = []
    while (current_date <= endDate):
        print(current_date)
        data = []
        for asset in Asset.objects.all():
            symbol = asset.symbol
            assetInfo = Share(symbol)
            data.append(assetInfo.get_historical(str(current_date), str(current_date)))
        print(len(data))
        if len(data) != 10:
            return historicalData
        else:
            if any(data):
                historicalData.append(data)
            if type(current_date) == str:
                tempDate = (datetime.strptime(current_date, date_format)).date()
                current_date = str(tempDate + timedelta(1))
            if type(current_date) == datetime:
                current_date = current_date + timedelta(1)
    return historicalData
