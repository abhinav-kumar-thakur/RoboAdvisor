import { combineReducers } from 'redux'

import personalHolding from './personalHolding/PersonalHoldingReducer';
import predictionGraph from './predictionGraph/PredictionGraphReducer';

const portfolio = combineReducers({
  personalHolding,
  predictionGraph
});

export default portfolio;