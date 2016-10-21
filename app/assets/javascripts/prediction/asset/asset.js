import React from 'react'
import { Link } from 'react-router';

import PersonalHolding from './personalHolding/PersonalHolding';
import PredictionGraph from './predictionGraph/PredictionGraph';
import Recommendations from './recommendations/Recommendations';

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

        <div className="container">
          <div className="flex-row">
            <div className="flex-row__item">

              <h3 className="container__heading">
                <strong>Stocks</strong>
                <span>Impacting Portfolio Prediction</span>
              </h3>
              <h1>Ripple effect will be shown here</h1>
            </div>

            <div className="flex-row__item">

              <h3 className="container__heading">
                <strong>Stories</strong>
                <span>Impacting Portfolio Prediction</span>
              </h3>
              <h1>News will go here</h1>

            </div>
          </div>
        </div>

        <div className="container">
          <h3 className="container__heading">
            <strong>Recommended Actions</strong>
            <span>for maximising profits</span>
          </h3>

          <Recommendations {...{recommendations: this.props.portfolioAssets, currentAsset: this.props.params.symbol}} />
        </div>

      </section>
    </div>
  }
}