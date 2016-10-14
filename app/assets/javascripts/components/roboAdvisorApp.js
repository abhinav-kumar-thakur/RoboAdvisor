import React from 'react'
import Header from './headerComponent'
import PredictionGraphContainer from '../containers/predictionGraphContainer';
import NavigationContainer from '../containers/navigationContainer';

const RoboAdvisorApp = () => (
  <div>
    <Header />
    <PredictionGraphContainer />
    <NavigationContainer />
  </div>
);

export default RoboAdvisorApp