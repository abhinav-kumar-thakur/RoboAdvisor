from app.models import Portfolio


class PortfolioApi():
    def mapUser(self, userId):
        portfolio = Portfolio(userId=userId)
        portfolio.save()
