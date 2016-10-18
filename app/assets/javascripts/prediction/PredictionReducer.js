import { combineReducers } from 'redux'

import navigation from './navigation/NavigationReducer';
import portfolio from './portfolio/PortfolioReducer';

const prediction = combineReducers({
  navigation,
  portfolio
});

export default prediction;