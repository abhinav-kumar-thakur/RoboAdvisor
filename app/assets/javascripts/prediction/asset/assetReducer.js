import { combineReducers } from 'redux'

import personalHolding from './personalHolding/PersonalHoldingReducer';
import predictionGraph from './predictionGraph/PredictionGraphReducer';
import news from './news/NewsReducer';

const asset = combineReducers({
  personalHolding,
  predictionGraph,
  news
});

export default asset;