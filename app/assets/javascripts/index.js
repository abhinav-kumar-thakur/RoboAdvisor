import React from 'react';
import { render } from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import predictionGraphReducer from './reducers/predictionGraphReducer';
import createPredictionGraph from './actions/predictionGraphActions';
import RoboAdvisorApp from './components/roboAdvisorApp';

const store = createStore(
  predictionGraphReducer,
  applyMiddleware(
    thunkMiddleware // lets us dispatch() functions
  )
);

store.dispatch(createPredictionGraph());

render(
  <Provider store={store}>
    <RoboAdvisorApp />
  </Provider>,
  document.getElementById('main_container')
);