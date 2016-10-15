import fetch from 'isomorphic-fetch';
import { predictionGraphConstants } from './PredictionGraphConstants';
import { urlConstants } from '../common/UrlConstants';

let requestPredictionGraph = () => {
    return {
      type: predictionGraphConstants.REQUEST
    }
  },

  receivePredictionGraph = (data) => {
    return {
      type: predictionGraphConstants.RECEIVE,
      data: data
    }
  },

  failurePredictionGraph = () => {
    return {
      type: predictionGraphConstants.FAILURE
    }
  },

  fetchPredictionGraph = () => {
    return function (dispatch) {
      dispatch(requestPredictionGraph());

      return fetch(urlConstants.PREDICTION_GRAPH)
        .then(response => {
          if (response.status >= 400) {
            dispatch(failurePredictionGraph());
          }
          return response.json();
        })
        .then(data =>
          dispatch(receivePredictionGraph(data))
        );
    }
  };

export default fetchPredictionGraph;