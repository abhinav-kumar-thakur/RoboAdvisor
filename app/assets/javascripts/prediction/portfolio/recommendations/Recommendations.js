import React from 'react';

import ApiContainer from '../../../common/components/ApiContainer';

const Recommendations = ({ recommendations }) => {

  let element,
    data = recommendations.data;

  if (data) {

    element = <ul>
      { data.map((item, index) =>

        <li key={index}>
          <label
            className={"btn-label " + (item.action === 'sell' ? 'btn-label--sell' : 'btn-label--buy')}>{item.action.toUpperCase()}</label>
          <span>{item.asset}</span>
        </li>
      )}
    </ul>
  }

  return <ApiContainer {...{
    isFetching: recommendations.isFetching,
    isFailed: recommendations.isFailed,
    element: element
  }}></ApiContainer>
};

export default Recommendations;