import React from 'react';

const Pi = ({piType}) => {

  let arrowType = () => {
    return piType === 'down' ? 'fa-arrow-down' : 'fa-arrow-up';
  };

  return (
    <span className="pi">
      <i className={"fa " + arrowType() }></i>
    </span>
  )
};

export default Pi;