import { combineReducers } from 'redux'

import navigation from './navigation/NavigationReducer';
import personalHolding from './personalHolding/PersonalHoldingReducer';
import predictionGraph from './predictionGraph/PredictionGraphReducer';

const prediction = combineReducers({
  navigation,
  personalHolding,
  predictionGraph
});

export default prediction;