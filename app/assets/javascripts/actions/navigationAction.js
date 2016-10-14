import fetch from 'isomorphic-fetch';
import { navigationConstants } from '../constants/navigationConstants';
import { urlConstants } from '../constants/urlConstants';

let requestNavigation = () => {
    return {
      type: navigationConstants.REQUEST
    }
  },

  receiveNavigation = (data) => {
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

  createNavigation = () => {

    return function (dispatch) {
      dispatch(requestNavigation());

      return fetch(urlConstants.NAVIGATION)
        .then(response => {
          if (response.status >= 400) {
            dispatch(failureNavigation());
          }
          return response.json();
        })
        .then(data =>
          dispatch(receiveNavigation(data))
        );
    }
  };

export default createNavigation;