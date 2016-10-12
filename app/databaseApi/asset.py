from urllib.request import urlopen
from lxml.html import parse
from app.models import Asset


class AssetApi:
    def addAsset(self, assetName, assetSymbol):
        sector, subSector = self.GFinSectorIndustry(assetSymbol)
        portfolio = Asset(name=assetName, symbol=assetSymbol, type="stock", sector=sector, subSector=subSector)
        portfolio.save()

    def GFinSectorIndustry(self, assetSymbol):
        tree = parse(urlopen('http://www.google.com/finance?&q=' + assetSymbol))
        return tree.xpath("//a[@id='sector']")[0].text, tree.xpath("//a[@id='sector']")[0].getnext().text