import React from 'react';
import { render } from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import roboAdvisorAppReducer from './RoboAdvisorAppReducer';
import getPredictionGraph from './predictionGraph/predictionGraphActions';
import getNavigation from './navigation/navigationActions';
import RoboAdvisorApp from './RoboAdvisorApp';

const store = createStore(
  roboAdvisorAppReducer,
  applyMiddleware(
    thunkMiddleware // lets us dispatch() functions
  )
);

store.dispatch(getPredictionGraph());
store.dispatch(getNavigation());

render(
  <Provider store={store}>
    <RoboAdvisorApp />
  </Provider>,
  document.getElementById('app_container')
);