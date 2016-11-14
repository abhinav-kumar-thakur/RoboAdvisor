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

        data: [
          {
            name: 'Current value',
            y: data['currentValue'],
            color: "#96D9F4"
          },
          {
            name: 'Trends',
            y: data['arimaEffect']
          },
          {
            name: 'News',
            y: data['newsEffect']
          },
          {
            name: 'Ripple effect',
            y: data['rippleEffect']
          },
          {
            name: 'Predicted Value',
            isSum: true,
            color: "#FD965A"
          }
        ],
        dataLabels: {
          enabled: true,
          formatter: function () {
          var newPrice = Utils.formatPrice(this.y);
          if(newPrice.charAt(0)==='-'){
          newPrice = newPrice.toString().split('-')[1];
          return "-$" + newPrice;
          }
            else{
            return '$' + Utils.formatPrice(this.y);
            }
          },
          y: -10,
          style: {
            color: "#000000",
            fontSize: "14px"
          }
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