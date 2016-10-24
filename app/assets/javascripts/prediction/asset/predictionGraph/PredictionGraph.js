import React from 'react';

import ApiContainer from '../../../common/components/ApiContainer';
let ReactHighcharts = require('react-highcharts');

const PredictionGraph = ({ predictionGraph }) => {
  let element,
    data = predictionGraph.data;

  if (data) {
    let config = {
      xAxis: {
        categories: data.map((item) => {
          return item.date
        })
      },
      series: [{
        data: data.map((item) => {
          return item.closingPrice
        }),
        zoneAxis: 'x',
        zones: [{
          value: 0,
          dashStyle: 'dot'
        }]
      }],
      credits: {
        enabled: false
      },
      plotOptions: {
        line: {
          marker: {
            enabled: false
          }
        }
      }
    };
    element = <ReactHighcharts config={config}></ReactHighcharts>
  }

  return <ApiContainer {...{
    isFetching: predictionGraph.isFetching,
    isFailed: predictionGraph.isFailed,
    element: element
  }}></ApiContainer>

};

export default PredictionGraph;