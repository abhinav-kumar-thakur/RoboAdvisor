import React from 'react'
import Header from './common/components/Header';
import PredictionContainer from './prediction/predictionContainer';
import NavigationContainer from './navigation/NavigationContainer';

const RoboAdvisorApp = () => (
  <div>
    <Header />
    <NavigationContainer />

    <section className="main-container">
      <PredictionContainer />
    </section>
  </div>
);

export default RoboAdvisorApp;