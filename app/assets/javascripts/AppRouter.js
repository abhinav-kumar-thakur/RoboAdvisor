import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import MainLayout from './common/components/MainLayout';
import PredictionContainer from './prediction/PredictionContainer';
import PortfolioContainer from './prediction/portfolio/PortfolioContainer';
import AssetContainer from './prediction/asset/AssetContainer';

const RoboAdvisorAppRouter = () => (

  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={PredictionContainer}>
        <IndexRoute component={PortfolioContainer}/>
        <Route path="predictions" component={PortfolioContainer}/>

        <Route path="predictions">
          <Route path="portfolio" component={PortfolioContainer}/>
          <Route path="asset/:symbol" component={AssetContainer}/>
        </Route>
      </Route>
    </Route>
  </Router>

);

export default RoboAdvisorAppRouter;