import predictionGraphConstants from '../constants/predictionGraphConstants'

function createPredictionGraph() {
  return {
    type: predictionGraphConstants.RECEIVE_GRAPH_DATA
  }
}

export default createPredictionGraph;