import React from 'react'

import PersonalHolding from './personalHolding/PersonalHolding';
import PredictionGraph from '../predictionGraph/PredictionGraph';
import ImpactingAssets from './impactingAssets/ImpactingAssets';
import News from '../news/News';
import Recommendations from './recommendations/Recommendations';

import getPersonalHolding from './personalHolding/PersonalHoldingActions';
import getPredictionGraph from './predictionGraph/PredictionGraphActions';
import getNews from './news/NewsActions';

export default class Prediction extends React.Component {

  constructor(props, context) {
    super(props, context);
  };

  componentDidMount() {
    let props = this.props;

    if (!props.portfolio.personalHolding.data) {
      props.dispatch(getPersonalHolding());
      props.dispatch(getPredictionGraph());
      props.dispatch(getNews());
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
            <span>Portfolio Value</span>
          </h3>

          <div className="prediction-graph-container">
            <PredictionGraph {...{predictionGraph: this.props.portfolio.predictionGraph}}/>
          </div>
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

              <News {...{news: this.props.portfolio.news}} />
            </div>
          </div>
        </div>

        <div className="container">
          <h3 className="container__heading">
            <strong>Recommended Actions</strong>
            <span>for maximising profits</span>
          </h3>

          <Recommendations {...{recommendations: this.props.portfolioAssets}} />
        </div>
      </section>
    </div>
  }
}