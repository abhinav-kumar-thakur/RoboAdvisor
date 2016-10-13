from app.models import Recommendation, PortfolioAssetMapping
from datetime import datetime


class RecommendationApi():
    def assetRecommendation(self, assetId, trade):
        for portfolioAssetMapping in PortfolioAssetMapping.objects.all():
            recommendation = Recommendation(timestamp=datetime.now(), mappingId=portfolioAssetMapping, assetId=assetId,
                                            trade=trade)
        recommendation.save()
