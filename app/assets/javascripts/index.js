import React from 'react';
import { render } from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import roboAdvisorApp from './AppReducer';
import RoboAdvisorAppRouter from './AppRouter';

import getNavigation from './prediction/navigation/navigationActions';
import getPersonalHolding from './prediction/personalHolding/PersonalHoldingActions';
import getPredictionGraph from './prediction/predictionGraph/PredictionGraphActions';

const store = createStore(
  roboAdvisorApp,
  applyMiddleware(
    thunkMiddleware // lets us dispatch() functions
  )
);

store.dispatch(getNavigation());
store.dispatch(getPersonalHolding());
store.dispatch(getPredictionGraph());

render(
  <Provider store={store}>
    <RoboAdvisorAppRouter />
  </Provider>,

  document.getElementById('app_container')
);