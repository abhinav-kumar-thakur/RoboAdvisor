import React from 'react';
var Recharts = require('recharts');

var {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} = Recharts;

const PredictionGraph = ({ predictionGraphData }) => (

  <AreaChart width={600} height={400} data={predictionGraphData}
             margin={{top: 10, right: 30, left: 0, bottom: 0}}>
    <XAxis dataKey="name"/>
    <YAxis tickCount={10}/>
    <CartesianGrid strokeDasharray="3 3"/>
    <Tooltip/>
    <Area type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8'/>
  </AreaChart>
);

export default PredictionGraph;