from app.models import Recommendation

class RecommendationApi():
    def assetRecommendation(self):
        recommendation = Recommendation()
        recommendation.save()


if __name__ == '__main__':
    RecommendationApi.assetRecommendation();
