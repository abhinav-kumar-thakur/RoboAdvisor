import { navigationConstants } from './NavigationConstants';
import { urlConstants } from '../../common/UrlConstants';
import Utils from '../../common/Utils';

let requestNavigation = () => {
    return {
      type: navigationConstants.REQUEST
    }
  },

  successNavigation = (data) => {
    return {
      type: navigationConstants.RECEIVE,
      data: data
    }
  },

  failureNavigation = () => {
    return {
      type: navigationConstants.FAILURE
    }
  },

  getNavigation = () => {
    return function (dispatch) {
      dispatch(requestNavigation());

      Utils.httpGet(urlConstants.NAVIGATION)
        .then(data => dispatch(successNavigation(data)))
        .catch(error => dispatch(failureNavigation()))
    };
  };

export default getNavigation;