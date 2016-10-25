import React from 'react';

import ApiContainer from '../../../common/components/ApiContainer';

const ImpactingAssets = ({impactingAssets}) => {

  let element,
    data = impactingAssets.data;

  if (data) {

    element = <h1>Ripple Effect will be shown here.</h1>
  }

  return <ApiContainer {...{
    isFetching: impactingAssets.isFetching,
    isFailed: impactingAssets.isFailed,
    element: element
  }}></ApiContainer>
};

export default ImpactingAssets;