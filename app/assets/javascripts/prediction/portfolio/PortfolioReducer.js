import { combineReducers } from 'redux'

import personalHolding from './personalHolding/PersonalHoldingReducer';
import predictionGraph from './predictionGraph/PredictionGraphReducer';
import recommendations from './recommendations/RecommendationsReducer';

const portfolio = combineReducers({
  personalHolding,
  predictionGraph,
  recommendations
});

export default portfolio;