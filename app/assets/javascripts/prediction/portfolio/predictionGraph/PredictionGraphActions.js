import { predictionGraphConstants } from './PredictionGraphConstants';
import { urlConstants } from '../../../common/UrlConstants';
import httpGet from '../../../common/Utils';

let requestPredictionGraph = () => {
    return {
      type: predictionGraphConstants.REQUEST
    }
  },

  successPredictionGraph = (data) => {
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

  getPredictionGraph = () => {
    return function (dispatch) {
      dispatch(requestPredictionGraph());

      httpGet(urlConstants.PREDICTION_GRAPH)
        .then(data => dispatch(successPredictionGraph(data)))
        .catch(error => dispatch(failurePredictionGraph()))
    };
  };

export default getPredictionGraph;