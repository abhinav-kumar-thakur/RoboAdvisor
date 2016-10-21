import React from 'react';

import ApiContainer from '../../../common/components/ApiContainer';

const Recommendations = ({ recommendations, currentAsset }) => {

  let element,
    data = recommendations.data;

  if (data) {

    let labelType = (trade) => {
        return trade === 'sell' ? 'btn-label--sell' : 'btn-label--buy';
      },

      assetRecommendation = data.filter((asset) => {
        return asset.symbol === currentAsset
      })[0];

    element = <ul>
      <li>
        <label
          className={"btn-label " + labelType(assetRecommendation.trade)}>{assetRecommendation.trade.toUpperCase()}</label>
        <span>{assetRecommendation.asset}</span>
      </li>
    </ul>
  }


  return <ApiContainer {...{
    isFetching: recommendations.isFetching,
    isFailed: recommendations.isFailed,
    element: element
  }}></ApiContainer>
};

export default Recommendations;