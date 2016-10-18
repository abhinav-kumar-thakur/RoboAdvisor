import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import MainLayout from './common/components/MainLayout';
import PredictionContainer from './prediction/PredictionContainer';
import PortfolioContainer from './prediction/portfolio/PortfolioContainer';

const RoboAdvisorAppRouter = () => (

  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={PredictionContainer}>
        <IndexRoute component={PortfolioContainer}/>
        <Route path="predictions" component={PortfolioContainer}/>
      </Route>
    </Route>
  </Router>

);

export default RoboAdvisorAppRouter;