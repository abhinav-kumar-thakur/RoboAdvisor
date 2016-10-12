from app.models import PortfolioAssetMapping


class PortfolioAssetMappingApi():
    def mapAsset(self, portfolio, asset, currentCount):
        portfolioAssetMapping = PortfolioAssetMapping(portfolio=portfolio, asset=asset,
                                                      currentCount=currentCount)
        portfolioAssetMapping.save()
