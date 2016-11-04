import {impactingAssetsConstants} from './ImpactingAssetsConstants';
import {urlConstants} from '../../../common/UrlConstants';
import Utils from '../../../common/Utils';

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

  getImpactingAssets = (asset) => {
    return function (dispatch) {
      dispatch(requestImpactingAssets());

      Utils.httpGet(urlConstants.ASSET.ROOT + '/' + asset + urlConstants.ASSET.IMPACTING_ASSETS)
        .then(data => dispatch(successImpactingAssets(data)))
        .catch(error => dispatch(failureImpactingAssets()))
    };
  };

export default getImpactingAssets;