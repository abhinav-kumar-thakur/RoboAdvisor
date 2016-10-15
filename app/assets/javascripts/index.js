import React from 'react';
import { render } from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import roboAdvisorAppReducer from './RoboAdvisorAppReducer';
import fetchPredictionGraph from './predictionGraph/predictionGraphActions';
import fetchNavigation from './navigation/navigationActions';
import RoboAdvisorApp from './RoboAdvisorApp';

const store = createStore(
  roboAdvisorAppReducer,
  applyMiddleware(
    thunkMiddleware // lets us dispatch() functions
  )
);

store.dispatch(fetchPredictionGraph());
store.dispatch(fetchNavigation());

render(
  <Provider store={store}>
    <RoboAdvisorApp />
  </Provider>,
  document.getElementById('main_container')
);