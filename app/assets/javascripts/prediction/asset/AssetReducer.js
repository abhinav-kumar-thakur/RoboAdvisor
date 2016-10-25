import { combineReducers } from 'redux'

import personalHolding from './personalHolding/PersonalHoldingReducer';
import predictionGraph from './predictionGraph/PredictionGraphReducer';
import news from './news/NewsReducer';
import impactingAssets from './impactingAssets/ImpactingAssetsReducer'

const asset = combineReducers({
  personalHolding,
  predictionGraph,
  news,
  impactingAssets
});

export default asset;