import React from 'react';

import ApiContainer from '../../../common/components/ApiContainer';
let ReactHighcharts = require('react-highcharts');

const PredictionGraph = ({predictionGraph}) => {
  let element,
    data = predictionGraph.data;

  if (data) {
    let closingPrices = data.map((item) => {
        return item.closingPrice
      }),
      actualPastClosingPrices = closingPrices.slice(0, closingPrices.length - 1);

    let config = {
      title: {
        enabled: false
      },
      xAxis: {
        categories: data.map((item) => {
          return item.date
        })
      },
      colors: ['#96D9F4'],
      series: [{
        type: 'area',
        fillOpacity: 0.4,
        data: actualPastClosingPrices,
        marker: {
          enabled: false
        }
      }, {
        type: 'line',
        data: closingPrices,
        dashStyle: 'dot',
        zoneAxis: 'x',
        zones: [{
          value: data.length - 2
        }, {
          color: '#FD965A'
        }, {
          dashStyle: 'dot'
        }]
      }],
      credits: {
        enabled: false
      },
      legend: {
        enabled: false
      }
    };
    element = <div>
      <ReactHighcharts config={config}></ReactHighcharts>
      <h1>
        <span className="pull-right">Tomorrow's Predicted Value is: {closingPrices[closingPrices.length - 1]}</span>
      </h1>
    </div>
  }

  return <ApiContainer {...{
    isFetching: predictionGraph.isFetching,
    isFailed: predictionGraph.isFailed,
    element: element
  }}></ApiContainer>

};

export default PredictionGraph;