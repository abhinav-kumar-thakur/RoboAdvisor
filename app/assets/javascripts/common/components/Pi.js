import React from 'react';

const Pi = ({value}) => {

  let arrowType = () => {
    return Number.parseInt(value) > 0 ? 'fa-arrow-up' : 'fa-arrow-down';
  };

  return (
    <span className="pi">
      <span className="pi__value">{Math.abs(value)}%</span>
      <i className={"fa " + arrowType() }></i>
    </span>
  )
};

export default Pi;