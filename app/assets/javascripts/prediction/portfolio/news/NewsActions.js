import { newsConstants } from './NewsConstants';
import { urlConstants } from '../../../common/UrlConstants';
import Utils from '../../../common/Utils';

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

      Utils.httpGet(urlConstants.PORTFOLIO.ROOT + urlConstants.PORTFOLIO.NEWS)
        .then(data => dispatch(successNews(data)))
        .catch(error => dispatch(failureNews()))
    };
  };

export default getNews;