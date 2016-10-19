import { personalHoldingConstants } from './PersonalHoldingConstants';
import { urlConstants } from '../../../common/UrlConstants';
import httpGet from '../../../common/Utils';

let requestPersonalHolding = () => {
    return {
      type: personalHoldingConstants.REQUEST
    }
  },

  successPersonalHolding = (data) => {
    return {
      type: personalHoldingConstants.RECEIVE,
      data: data
    }
  },

  failurePersonalHolding = () => {
    return {
      type: personalHoldingConstants.FAILURE
    }
  },

  getPersonalHolding = (asset) => {
    return function (dispatch) {
      dispatch(requestPersonalHolding());

      httpGet(urlConstants.ASSET.ROOT + '/' + asset + urlConstants.ASSET.PERSONAL_HOLDING)
        .then(data => dispatch(successPersonalHolding(data)))
        .catch(error => dispatch(failurePersonalHolding()))
    };
  };

export default getPersonalHolding;