import { predictionGraphConstants } from '../constants/predictionGraphConstants';

const predictionGraph = (state = {}, action) => {
  switch (action.type) {

    case predictionGraphConstants.REQUEST:
      return Object.assign({}, state, {
        predictionGraph: {
          isFetching: true,
          isFailed: false
        }
      });

    case predictionGraphConstants.RECEIVE:
      return Object.assign({}, state, {
        predictionGraph: {
          data: action.data,
          isFetching: false,
          isFailed: false
        }
      });

    case predictionGraphConstants.FAILURE:
      return Object.assign({}, state, {
        predictionGraph: {
          isFailed: true,
          isFetching: false
        }
      });

    default:
      return state
  }
};

export default predictionGraph;