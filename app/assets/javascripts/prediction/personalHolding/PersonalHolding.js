import React from 'react';
import ApiContainer from '../../common/components/ApiContainer';

const PersonalHolding = ({ personalHolding }) => {

  let element;

  if (personalHolding.data) {
    element = <div>
      <h1>{personalHolding.data.name}</h1>
      <h1>{personalHolding.data.value}</h1>
      <h1>{personalHolding.data.assetCount}</h1>
    </div>
  }

  return <ApiContainer {...{
    isFetching: personalHolding.isFetching,
    isFailed: personalHolding.isFailed,
    element: element
  }}></ApiContainer>
};

export default PersonalHolding;