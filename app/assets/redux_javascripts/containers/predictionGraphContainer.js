import { connect } from 'react-redux';
import PredictionGraph from '../components/predictionGraphComponent';

const mapStateToProps = function (state) {
  return {
    predictionGraphData: state.predictionGraphData
  }
};

const PredictionGraphContainer = connect(
  mapStateToProps
)(PredictionGraph);

export default PredictionGraphContainer;