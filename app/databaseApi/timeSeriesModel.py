from app.models import TimeSeriesModel


class TimeSeriesModelApi():
    def addCoefficient(self):
        timeSeriesModel = TimeSeriesModel()
        timeSeriesModel.save()


if __name__ == '__main__':
    TimeSeriesModelApi.addCoefficient();
