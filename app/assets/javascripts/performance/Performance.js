import React from 'react'

export default class Performance extends React.Component {

  constructor(props, context) {
    super(props, context);
  };

  render() {
    return (
      <section className="performance-container">
        <img src="/static/images/performance.png" />
      </section>
    )
  }
}