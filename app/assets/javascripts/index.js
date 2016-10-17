import React from 'react';
import { render } from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import roboAdvisorAppReducer from './RoboAdvisorAppReducer';
import getNavigation from './navigation/navigationActions';
import getPersonalHolding from './prediction/personalHolding/PersonalHoldingActions';
import getPredictionGraph from './prediction/predictionGraph/PredictionGraphActions';
import RoboAdvisorApp from './RoboAdvisorApp';

const store = createStore(
  roboAdvisorAppReducer,
  applyMiddleware(
    thunkMiddleware // lets us dispatch() functions
  )
);

store.dispatch(getNavigation());
store.dispatch(getPersonalHolding());
store.dispatch(getPredictionGraph());

render(
  <Provider store={store}>
    <RoboAdvisorApp />
  </Provider>,
  document.getElementById('app_container')
);