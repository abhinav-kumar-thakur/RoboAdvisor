from urllib.request import urlopen
from lxml.html import parse
from app.models import Asset


class AssetApi:
    def addAsset(self, assetName, assetSymbol, assetType):
        sector, subSector = self.GFinSectorIndustry(assetSymbol)
        portfolio = Asset(name=assetName, symbol=assetSymbol, type=assetType, sector=sector, subSector=subSector)
        portfolio.save()

    def GFinSectorIndustry(self, assetSymbol):
        try:
            tree = parse(urlopen('http://www.google.com/finance?&q=' + assetSymbol))
            return tree.xpath("//a[@id='sector']")[0].text, tree.xpath("//a[@id='sector']")[0].getnext().text
        except Exception as e:
            return ["",""]