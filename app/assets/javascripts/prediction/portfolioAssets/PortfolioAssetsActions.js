import { portfolioAssetsConstants } from './PortfolioAssetsConstants';
import { urlConstants } from '../../common/UrlConstants';
import Utils from '../../common/Utils';

let requestPortfolioAssets = () => {
    return {
      type: portfolioAssetsConstants.REQUEST
    }
  },

  successPortfolioAssets = (data) => {
    return {
      type: portfolioAssetsConstants.RECEIVE,
      data: data
    }
  },

  failurePortfolioAssets = () => {
    return {
      type: portfolioAssetsConstants.FAILURE
    }
  },

  getPortfolioAssets = () => {
    return function (dispatch) {
      dispatch(requestPortfolioAssets());

      Utils.httpGet(urlConstants.PORTFOLIO.ROOT + urlConstants.PORTFOLIO.ASSETS)
        .then(data => dispatch(successPortfolioAssets(data)))
        .catch(error => dispatch(failurePortfolioAssets()))
    };
  };

export default getPortfolioAssets;