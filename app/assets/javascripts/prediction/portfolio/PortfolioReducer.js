import { combineReducers } from 'redux'

import personalHolding from './personalHolding/PersonalHoldingReducer';
import predictionGraph from './predictionGraph/PredictionGraphReducer';
import impactingAssets from './impactingAssets/ImpactingAssetsReducer';

const portfolio = combineReducers({
  personalHolding,
  predictionGraph,
  impactingAssets
});

export default portfolio;