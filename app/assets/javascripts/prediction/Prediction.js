import React from 'react'
import PersonalHolding from './personalHolding/PersonalHolding';
import PredictionGraph from './predictionGraph/PredictionGraph';

const Prediction = ({prediction}) => (
  <div>
    <PersonalHolding {...{personalHolding: prediction.personalHolding}}/>
    <PredictionGraph {...{predictionGraph: prediction.predictionGraph}}/>
  </div>
);

export default Prediction;