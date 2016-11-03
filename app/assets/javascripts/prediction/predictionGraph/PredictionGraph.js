import React from 'react';
import Utils from '../../common/Utils';
import ApiContainer from '../../common/components/ApiContainer';
let ReactHighcharts = require('react-highcharts');

const PredictionGraph = ({predictionGraph}) => {
  let element,
    data = predictionGraph.data;

  if (data) {
    let closingPrices = data.map((item) => {
        return item.closingPrice;
      }),
      actualPastClosingPrices = closingPrices.slice(0, closingPrices.length - 1),
      yesterdayClosingPrice = actualPastClosingPrices[actualPastClosingPrices.length - 1],
      predictedClosingPrice = closingPrices[closingPrices.length - 1],
      predictedValueColor = (predictedClosingPrice > yesterdayClosingPrice) ? '#72AC4D' : '#FC0D1B',
      styleColor = {
        color: predictedValueColor
      };

    let config = {
      title: {
        text: ''
      },
      xAxis: {
        categories: data.map((item) => {
          return Utils.formatDate(item.date);
        })
      },
      yAxis: {
        title: {
          text: 'Closing Price in $'
        }
      },
      tooltip: {
        formatter: function () {
          return 'Date: ' + Utils.formatDate(this.x) + '<br /> Closing Price: $' + Utils.formatPrice(this.y);
        },
        crosshairs: [true]
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
          color: predictedValueColor
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
      <h1 className="predicted-value">
        <strong className="pull-right">
          Predicted Value:
          <span
            style={styleColor}>${Utils.formatPrice(predictedClosingPrice)}</span>
        </strong>
      </h1>
      <ReactHighcharts config={config}></ReactHighcharts>
    </div>
  }

  return <ApiContainer {...{
    isFetching: predictionGraph.isFetching,
    isFailed: predictionGraph.isFailed,
    element: element
  }}></ApiContainer>

};

export default PredictionGraph;