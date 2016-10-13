import predictionGraphActions from '../actions/predictionGraphActions';
import predictionGraphConstants from '../constants/predictionGraphConstants';

const predictionGraph = (state = {}, action) => {
  switch (action.type) {

    case predictionGraphConstants.RECEIVE_GRAPH_DATA:

      return Object.assign({}, state, {
        predictionGraphData: [
          {
            "name": "Page A",
            "uv": 4000
          },
          {
            "name": "Page B",
            "uv": 3000
          },
          {
            "name": "Page C",
            "uv": 2000
          },
          {
            "name": "Page D",
            "uv": 2780
          },
          {
            "name": "Page E",
            "uv": 1890
          },
          {
            "name": "Page F",
            "uv": 2390
          },
          {
            "name": "Page G",
            "uv": 3490
          }
        ]
      });

    default:
      return state
  }
};

export default predictionGraph;