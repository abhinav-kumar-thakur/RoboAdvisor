import { impactingAssetsConstants } from './ImpactingAssetsConstants';
import { urlConstants } from '../../../common/UrlConstants';
import httpGet from '../../../common/Utils';

let requestImpactingAssets = () => {
    return {
      type: impactingAssetsConstants.REQUEST
    }
  },

  successImpactingAssets = (data) => {
    return {
      type: impactingAssetsConstants.RECEIVE,
      data: data
    }
  },

  failureImpactingAssets = () => {
    return {
      type: impactingAssetsConstants.FAILURE
    }
  },

  getImpactingAssets = () => {
    return function (dispatch) {
      dispatch(requestImpactingAssets());

      httpGet(urlConstants.PORTFOLIO.ROOT + urlConstants.PORTFOLIO.IMPACTING_ASSETS)
        .then(data => dispatch(successImpactingAssets(data)))
        .catch(error => dispatch(failureImpactingAssets()))
    };
  };

export default getImpactingAssets;