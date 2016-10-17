import React from 'react'
import PersonalHolding from './personalHolding/PersonalHolding';
import PredictionGraph from './predictionGraph/PredictionGraph';
import Navigation from './navigation/Navigation';

const Prediction = ({prediction}) => (
  <div>
    <Navigation {...{navigation: prediction.navigation}} />

    <section className="main-container">
      <PersonalHolding {...{personalHolding: prediction.personalHolding}}/>
      <PredictionGraph {...{predictionGraph: prediction.predictionGraph}}/>
    </section>
  </div>
);

export default Prediction;