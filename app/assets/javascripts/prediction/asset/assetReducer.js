import { combineReducers } from 'redux'

import personalHolding from './personalHolding/PersonalHoldingReducer';
import predictionGraph from './predictionGraph/PredictionGraphReducer';

const asset = combineReducers({
  personalHolding,
  predictionGraph
});

export default asset;