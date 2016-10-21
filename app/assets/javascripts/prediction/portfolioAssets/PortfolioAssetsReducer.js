import { portfolioAssetsConstants } from './PortfolioAssetsConstants';

const portfolioAssets = (state = {}, action) => {

  switch (action.type) {

    case portfolioAssetsConstants.REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isFailed: false
      });

    case portfolioAssetsConstants.RECEIVE:
      return Object.assign({}, state, {
        data: action.data,
        isFetching: false,
        isFailed: false
      });

    case portfolioAssetsConstants.FAILURE:
      return Object.assign({}, state, {
        isFailed: true,
        isFetching: false
      });

    default:
      return state
  }
};

export default portfolioAssets;