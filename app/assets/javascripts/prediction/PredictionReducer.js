import { combineReducers } from 'redux'
import personalHolding from './personalHolding/PersonalHoldingReducer';
import predictionGraph from './predictionGraph/PredictionGraphReducer';

const prediction = combineReducers({
  personalHolding,
  predictionGraph
});

export default prediction;