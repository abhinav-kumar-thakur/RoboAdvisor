import React from 'react'
import Header from './common/components/Header';
import PredictionGraphContainer from './predictionGraph/PredictionGraphContainer';
import NavigationContainer from './navigation/NavigationContainer';

const RoboAdvisorApp = () => (
  <div>
    <Header />
    <PredictionGraphContainer />
    <NavigationContainer />
  </div>
);

export default RoboAdvisorApp;