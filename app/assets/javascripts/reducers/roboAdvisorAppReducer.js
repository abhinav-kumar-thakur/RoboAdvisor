import { combineReducers } from 'redux'
import predictionGraph from './predictionGraphReducer';
import navigation from './navigationReducer';

const roboAdvisorAppReducer = combineReducers({
  predictionGraph,
  navigation
});

export default roboAdvisorAppReducer;