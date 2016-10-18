import React from 'react'

import PersonalHolding from './personalHolding/PersonalHolding';
import PredictionGraph from './predictionGraph/PredictionGraph';
import Navigation from './navigation/Navigation';

import getNavigation from './navigation/NavigationActions';
import getPersonalHolding from './personalHolding/PersonalHoldingActions';
import getPredictionGraph from './predictionGraph/PredictionGraphActions';

export default class Prediction extends React.Component {

  constructor(props, context) {
    super(props, context);
  };

  componentDidMount() {
    let dispatch = this.props.dispatch;

    dispatch(getNavigation());
    dispatch(getPersonalHolding());
    dispatch(getPredictionGraph());
  };

  render() {
    return <div>
      <Navigation {...{navigation: this.props.prediction.navigation}} />

      <section className="main-container">
        <PersonalHolding {...{personalHolding: this.props.prediction.personalHolding}}/>
      </section>
    </div>
  }
}