import React from 'react';
import { render } from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import roboAdvisorAppReducer from './reducers/roboAdvisorAppReducer';
import createPredictionGraph from './actions/predictionGraphActions';
import createNavigation from './actions/navigationAction';
import RoboAdvisorApp from './components/roboAdvisorApp';

const store = createStore(
  roboAdvisorAppReducer,
  applyMiddleware(
    thunkMiddleware // lets us dispatch() functions
  )
);

store.dispatch(createPredictionGraph());
store.dispatch(createNavigation());

render(
  <Provider store={store}>
    <RoboAdvisorApp />
  </Provider>,
  document.getElementById('main_container')
);