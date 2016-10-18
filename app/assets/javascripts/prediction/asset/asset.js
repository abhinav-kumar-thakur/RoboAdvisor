import React from 'react'

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
        <PersonalHolding {...{personalHolding: this.props.asset.personalHolding}}/>
      </section>
    </div>
  }
}