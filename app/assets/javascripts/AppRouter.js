import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import MainLayout from './common/components/MainLayout';
import PredictionContainer from './prediction/PredictionContainer';

const RoboAdvisorAppRouter = () => (

  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={PredictionContainer}/>
      <Route name="predictions" path="predictions" component={PredictionContainer}/>
    </Route>
  </Router>

);

export default RoboAdvisorAppRouter;