import { newsConstants } from './NewsConstants';
import { urlConstants } from '../../../common/UrlConstants';
import httpGet from '../../../common/Utils';

let requestNews = () => {
    return {
      type: newsConstants.REQUEST
    }
  },

  successNews = (data) => {
    return {
      type: newsConstants.RECEIVE,
      data: data
    }
  },

  failureNews = () => {
    return {
      type: newsConstants.FAILURE
    }
  },

  getNews = () => {
    return function (dispatch) {
      dispatch(requestNews());

      httpGet(urlConstants.PORTFOLIO.NEWS)
        .then(data => dispatch(successNews(data)))
        .catch(error => dispatch(failureNews()))
    };
  };

export default getNews;