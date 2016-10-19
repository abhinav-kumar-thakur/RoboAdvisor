import React from 'react';
import { render } from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import roboAdvisorApp from './AppReducer';
import RoboAdvisorAppRouter from './AppRouter';

const store = createStore(
  roboAdvisorApp,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware // lets us dispatch() functions
    ))
);

render(
  <Provider store={store}>
    <RoboAdvisorAppRouter />
  </Provider>,

  document.getElementById('app_container')
);