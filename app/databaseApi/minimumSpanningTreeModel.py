from app.models import MinimumSpanningTreeModel, Asset


class MinimumSpanningTreeApi:
    def effect(self, slope, intercept):
        for assetOne in Asset.objects.all():
            for assetTwo in Asset.objects.all():
                if (assetOne != assetTwo):
                    minimumSpanningTree = MinimumSpanningTreeModel(assetOne=assetOne, assetTwo=assetTwo, slope=slope,
                                                                   intercept=intercept)
        minimumSpanningTree.save()
