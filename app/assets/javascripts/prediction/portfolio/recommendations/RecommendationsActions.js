import { recommendationsConstants } from './RecommendationsConstants';
import { urlConstants } from '../../../common/UrlConstants';
import httpGet from '../../../common/Utils';

let requestRecommendations = () => {
    return {
      type: recommendationsConstants.REQUEST
    }
  },

  successRecommendations = (data) => {
    return {
      type: recommendationsConstants.RECEIVE,
      data: data
    }
  },

  failureRecommendations = () => {
    return {
      type: recommendationsConstants.FAILURE
    }
  },

  getRecommendations = () => {
    return function (dispatch) {
      dispatch(requestRecommendations());

      httpGet(urlConstants.PORTFOLIO.RECOMMENDATIONS)
        .then(data => dispatch(successRecommendations(data)))
        .catch(error => dispatch(failureRecommendations()))
    };
  };

export default getRecommendations;