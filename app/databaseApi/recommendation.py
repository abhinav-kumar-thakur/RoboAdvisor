from app.models import Recommendation, PortfolioAssetMapping
from datetime import datetime


class RecommendationApi():
    def assetRecommendation(self, assetId, recommendedAssetId, trade):
        for portfolioAssetMapping in PortfolioAssetMapping.objects.all():
            recommendation = Recommendation(timeStamp=datetime.now(), mappingId=portfolioAssetMapping, assetId=assetId,
                                            recommendedAsset=recommendedAssetId, trade=trade)
            recommendation.save()
