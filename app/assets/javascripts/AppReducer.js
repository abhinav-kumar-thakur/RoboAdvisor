import { combineReducers } from 'redux'
import prediction from './prediction/PredictionReducer';

const roboAdvisorApp = combineReducers({
  prediction
});

export default roboAdvisorApp;