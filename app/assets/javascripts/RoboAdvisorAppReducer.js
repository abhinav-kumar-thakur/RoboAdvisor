import { combineReducers } from 'redux'
import predictionGraph from './predictionGraph/PredictionGraphReducer';
import navigation from './navigation/NavigationReducer';

const roboAdvisorAppReducer = combineReducers({
  predictionGraph,
  navigation
});

export default roboAdvisorAppReducer;