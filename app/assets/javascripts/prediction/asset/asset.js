import React from 'react'
import { Link } from 'react-router';

import PersonalHolding from './personalHolding/PersonalHolding';
import getPersonalHolding from './personalHolding/PersonalHoldingActions';

export default class Asset extends React.Component {

  constructor(props, context) {
    super(props, context);
  };

  componentDidMount() {
    let props = this.props;

    props.dispatch(getPersonalHolding(props.params.symbol));
  }

  componentWillReceiveProps(nextProps) {
    let props = this.props,
      newParams = nextProps.params;

    if (newParams.symbol !== props.params.symbol) {
      props.dispatch(getPersonalHolding(newParams.symbol));
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
      </section>
    </div>
  }
}