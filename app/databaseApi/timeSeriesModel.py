from app.models import TimeSeriesModel, Asset


class TimeSeriesModelApi():
    def addCoefficient(self, coefficients):
        for asset in Asset.objects.all():
            timeSeriesModel = TimeSeriesModel(asset=asset, coefficients=coefficients)
        timeSeriesModel.save()
