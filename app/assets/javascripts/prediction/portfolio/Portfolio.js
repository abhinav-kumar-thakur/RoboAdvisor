import React from 'react'

import PersonalHolding from './personalHolding/PersonalHolding';
import PredictionGraph from './predictionGraph/PredictionGraph';
import ImpactingAssets from './impactingAssets/ImpactingAssets';
import Recommendations from './recommendations/Recommendations';

import getPersonalHolding from './personalHolding/PersonalHoldingActions';
import getPredictionGraph from './predictionGraph/PredictionGraphActions';
import getRecommendations from './recommendations/RecommendationsActions';

export default class Prediction extends React.Component {

  constructor(props, context) {
    super(props, context);
  };

  componentDidMount() {
    let props = this.props;

    if (!props.portfolio.personalHolding.data) {
      props.dispatch(getPersonalHolding());
      props.dispatch(getPredictionGraph());
      props.dispatch(getRecommendations());
    }
  };

  render() {
    return <div>
      <section className="main-container">

        <div className="container">
          <PersonalHolding {...{personalHolding: this.props.portfolio.personalHolding}}/>
        </div>

        <div className="container">
          <h3 className="container__heading">
            <strong>Predicted</strong>
            <span>Stock Value</span>
          </h3>

          <PredictionGraph {...{predictionGraph: this.props.portfolio.predictionGraph}}/>
        </div>

        <div className="container">
          <div className="flex-row">
            <div className="flex-row__item">

              <h3 className="container__heading">
                <strong>Stocks</strong>
                <span>Impacting Portfolio Prediction</span>
              </h3>
              <ImpactingAssets {...{impactingAssets: this.props.portfolioAssets}} />
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

          <Recommendations {...{recommendations: this.props.portfolio.recommendations}} />
        </div>
      </section>
    </div>
  }
}