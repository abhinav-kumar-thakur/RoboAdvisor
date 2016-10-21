import React from 'react'

import Navigation from './navigation/Navigation';
import getNavigation from './navigation/NavigationActions';
import getPortfolioAssets from './portfolioAssets/PortfolioAssetsActions';

export default class Prediction extends React.Component {

  constructor(props, context) {
    super(props, context);
  };

  componentDidMount() {
    let dispatch = this.props.dispatch;

    dispatch(getNavigation());
    dispatch(getPortfolioAssets());
  }

  render() {
    return (
      <div>
        <Navigation {...{navigation: this.props.prediction.navigation}} />
        {this.props.children}
      </div>
    )
  }
}