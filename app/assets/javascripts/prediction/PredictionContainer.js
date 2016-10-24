import { connect } from 'react-redux';
import Prediction from './Prediction';

const mapStateToProps = function (state) {
  return {
    prediction: state.prediction
  }
};

const PredictionContainer = connect(
  mapStateToProps
)(Prediction);

export default PredictionContainer;