import { predictionGraphConstants } from './PredictionGraphConstants';

const predictionGraph = (state = {}, action) => {
  debugger;

  switch (action.type) {

    case predictionGraphConstants.REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isFailed: false
      });

    case predictionGraphConstants.RECEIVE:
      return Object.assign({}, state, {
        data: action.data,
        isFetching: false,
        isFailed: false
      });

    case predictionGraphConstants.FAILURE:
      return Object.assign({}, state, {
        isFailed: true,
        isFetching: false
      });

    default:
      return state
  }
};

export default predictionGraph;