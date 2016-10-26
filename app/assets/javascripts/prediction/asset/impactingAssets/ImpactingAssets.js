import React from 'react';
import Utils from '../../../common/Utils';
import ApiContainer from '../../../common/components/ApiContainer';

const ReactHighcharts = require('react-highcharts');
require('highcharts/highcharts-more')(ReactHighcharts.Highcharts);

const ImpactingAssets = ({impactingAssets}) => {

  let element,
    data = impactingAssets.data;

  if (data) {

    let config = {
      chart: {
        type: 'waterfall'
      },

      title: {
        text: ''
      },

      xAxis: {
        type: 'category'
      },

      yAxis: {
        title: {
          enabled: false
        }
      },

      series: [{
        upColor: '#72AC4D',
        color: '#FC0D1B',

        data: [...Object.keys(data).map((key, index) => {
          return index == 0 ? {name: key, y: data[key], color: "#96D9F4"} : {name: key, y: data[key]}
        }), {name: 'Predicted value', isSum: true, color: "#FD965A"}],

        dataLabels: {
          enabled: true
        }
      }],

      tooltip: {
        enabled: false
      },

      credits: {
        enabled: false
      },

      legend: {
        enabled: false
      }
    };

    element = <div>
      <ReactHighcharts config={config}></ReactHighcharts>
    </div>

  }

  return <ApiContainer {...{
    isFetching: impactingAssets.isFetching,
    isFailed: impactingAssets.isFailed,
    element: element
  }}></ApiContainer>
};

export default ImpactingAssets;