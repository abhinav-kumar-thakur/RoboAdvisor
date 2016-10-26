import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import MainLayout from './common/components/MainLayout';
import PredictionContainer from './prediction/PredictionContainer';
import PortfolioContainer from './prediction/portfolio/PortfolioContainer';
import AssetContainer from './prediction/asset/AssetContainer';

import Performance from './performance/Performance.js';

const RoboAdvisorAppRouter = () => (
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
        <Route path="predictions" component={PredictionContainer}>
            <IndexRoute component={PortfolioContainer}/>
            <Route path="portfolio" component={PortfolioContainer}/>
            <Route path="asset/:symbol" component={AssetContainer}/>
        </Route>

        <Route path="performance" component={Performance} />
    </Route>
  </Router>

);

export default RoboAdvisorAppRouter;