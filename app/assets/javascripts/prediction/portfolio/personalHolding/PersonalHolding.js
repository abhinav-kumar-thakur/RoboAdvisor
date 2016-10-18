import React from 'react';

import ApiContainer from '../../../common/components/ApiContainer';
import KeyValue from '../../../common/components/KeyValue';

const PersonalHolding = ({ personalHolding }) => {

  let element,
    data = personalHolding.data;

  if (personalHolding.data) {

    element =
      <div className="key-value-container">
        <KeyValue {...{name: '', value: 'Portfolio ABCDE'}}/>
        <KeyValue {...{name: 'VALUE', value: '$ ' + data.value}}/>
        <KeyValue {...{name: 'INDIVIDUAL ASSETS', value: data.assets}}/>
      </div>
  }

  return <ApiContainer {...{
    isFetching: personalHolding.isFetching,
    isFailed: personalHolding.isFailed,
    element: element
  }}></ApiContainer>
};

export default PersonalHolding;