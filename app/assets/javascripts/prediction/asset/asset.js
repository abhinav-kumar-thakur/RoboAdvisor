import React from 'react'
import { Link } from 'react-router';

import PersonalHolding from './personalHolding/PersonalHolding';
import PredictionGraph from './predictionGraph/PredictionGraph';
import getPersonalHolding from './personalHolding/PersonalHoldingActions';
import getPredictionGraph from './predictionGraph/PredictionGraphActions';

export default class Asset extends React.Component {

  constructor(props, context) {
    super(props, context);
  };

  componentDidMount() {
    let props = this.props;

    props.dispatch(getPersonalHolding(props.params.symbol));
    props.dispatch(getPredictionGraph(props.params.symbol));
  }

  componentWillReceiveProps(nextProps) {
    let props = this.props,
      newParams = nextProps.params;

    if (newParams.symbol !== props.params.symbol) {
      props.dispatch(getPersonalHolding(newParams.symbol));
      props.dispatch(getPredictionGraph(newParams.symbol));
    }
  };

  render() {
    return <div>
      <section className="main-container">
        <Link to={'/predictions'} className="link-back">
          <i className="fa fa-angle-left"></i>
          <span>Back to Portfolio Predictions</span>
        </Link>

        <div className="container">
          <PersonalHolding {...{personalHolding: this.props.asset.personalHolding}}/>
        </div>

        <div className="container">
          <h3 className="container__heading">
            <strong>Predicted</strong>
            <span>Stock Value</span>
          </h3>

          <PredictionGraph {...{predictionGraph: this.props.asset.predictionGraph}}/>
        </div>
      </section>
    </div>
  }
}