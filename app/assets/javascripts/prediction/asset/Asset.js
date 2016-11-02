import React from 'react'
import {Link} from 'react-router';

import PersonalHolding from './personalHolding/PersonalHolding';
import PredictionGraph from '../predictionGraph/PredictionGraph';
import News from '../news/News';
import Recommendations from './recommendations/Recommendations';
import ImpactingAssets from './impactingAssets/ImpactingAssets';

import getPersonalHolding from './personalHolding/PersonalHoldingActions';
import getPredictionGraph from './predictionGraph/PredictionGraphActions';
import getNews from './news/NewsActions';
import getImpactingAssets from './impactingAssets/ImpactingAssetsActions';

export default class Asset extends React.Component {

  constructor(props, context) {
    super(props, context);
  };

  dispatchActions(props, symbolParam) {
    props.dispatch(getPersonalHolding(symbolParam));
    props.dispatch(getPredictionGraph(symbolParam));
    props.dispatch(getNews(symbolParam));
    props.dispatch(getImpactingAssets(symbolParam));
  }

  componentDidMount() {
    let props = this.props,
      symbolParam = props.params.symbol;

    this.dispatchActions(props, symbolParam);
  }

  componentWillReceiveProps(nextProps) {
    let props = this.props,
      newParams = nextProps.params;

    if (newParams.symbol !== props.params.symbol) {
      this.dispatchActions(props, newParams.symbol);
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
            <strong>Asset</strong>
            <span>Value</span>
          </h3>

          <div className="graph-container">
            <PredictionGraph {...{predictionGraph: this.props.asset.predictionGraph}}/>
          </div>
        </div>

        <div className="container">
          <div className="flex-row">
            <div className="flex-row__item">

              <h3 className="container__heading">
                <strong>Asset</strong>
                <span>Impacting Portfolio Prediction</span>
              </h3>

              <div className="graph-container">
                <ImpactingAssets {...{impactingAssets: this.props.asset.impactingAssets}} />
              </div>
            </div>

            <div className="flex-row__item">

              <h3 className="container__heading">
                <strong>Stories</strong>
                <span>Impacting Portfolio Prediction</span>
              </h3>
              <News {...{news: this.props.asset.news}} />

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