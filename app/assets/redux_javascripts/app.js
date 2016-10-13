import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import predictionGraphReducer from './reducers/predictionGraphReducer'
import createPredictionGraph from './actions/predictionGraphActions'
import PredictionGraphContainer from './containers/predictionGraphContainer'

let store = createStore(predictionGraphReducer);

store.dispatch(createPredictionGraph());

render(
  <Provider store={store}>
    <PredictionGraphContainer />
  </Provider>,
  document.getElementById('main_container')
);