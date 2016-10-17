import { combineReducers } from 'redux'
import prediction from './prediction/PredictionReducer';
import navigation from './navigation/NavigationReducer';

const roboAdvisorAppReducer = combineReducers({
  navigation,
  prediction
});

export default roboAdvisorAppReducer;