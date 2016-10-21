import { combineReducers } from 'redux'

import navigation from './navigation/NavigationReducer';
import portfolioAssets from './portfolioAssets/PortfolioAssetsReducer';
import portfolio from './portfolio/PortfolioReducer';
import asset from './asset/AssetReducer';

const prediction = combineReducers({
  navigation,
  portfolioAssets,
  portfolio,
  asset
});

export default prediction;