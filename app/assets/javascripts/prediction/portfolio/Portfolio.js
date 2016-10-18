import React from 'react'

import PersonalHolding from './personalHolding/PersonalHolding';
import PredictionGraph from './predictionGraph/PredictionGraph';

import getPersonalHolding from './personalHolding/PersonalHoldingActions';
import getPredictionGraph from './predictionGraph/PredictionGraphActions';

export default class Prediction extends React.Component {

  constructor(props, context) {
    super(props, context);
  };

  componentDidMount() {
    let dispatch = this.props.dispatch;

    dispatch(getPersonalHolding());
  };

  render() {
    return <div>
      <section className="main-container">
        <PersonalHolding {...{personalHolding: this.props.portfolio.personalHolding}}/>
      </section>
    </div>
  }
}