import { combineReducers } from 'redux'

import navigation from './navigation/NavigationReducer';
import portfolio from './portfolio/PortfolioReducer';
import asset from './asset/AssetReducer';

const prediction = combineReducers({
  navigation,
  portfolio,
  asset
});

export default prediction;