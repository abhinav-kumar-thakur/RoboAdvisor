import React from 'react'
import Header from './common/components/Header';
import PredictionGraphContainer from './predictionGraph/PredictionGraphContainer';
import NavigationContainer from './navigation/NavigationContainer';

const RoboAdvisorApp = () => (
  <div>
    <Header />
    <NavigationContainer />

    <section className="main-container">
      <PredictionGraphContainer />
    </section>
  </div>
);

export default RoboAdvisorApp;