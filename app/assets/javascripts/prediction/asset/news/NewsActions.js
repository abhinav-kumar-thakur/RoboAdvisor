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

  getNews = (asset) => {
    return function (dispatch) {
      dispatch(requestNews());

      Utils.httpGet(urlConstants.ASSET.ROOT + '/' + asset + urlConstants.ASSET.NEWS)
        .then(data => dispatch(successNews(data)))
        .catch(error => dispatch(failureNews()))
    };
  };

export default getNews;