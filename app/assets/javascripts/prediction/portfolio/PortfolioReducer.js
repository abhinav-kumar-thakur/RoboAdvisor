import { combineReducers } from 'redux'

import personalHolding from './personalHolding/PersonalHoldingReducer';
import predictionGraph from './predictionGraph/PredictionGraphReducer';
import impactingAssets from './impactingAssets/ImpactingAssetsReducer';
import recommendations from './recommendations/RecommendationsReducer';

const portfolio = combineReducers({
  personalHolding,
  predictionGraph,
  impactingAssets,
  recommendations
});

export default portfolio;