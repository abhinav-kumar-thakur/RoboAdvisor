var React = require('react'),
  GraphActions = require('../actions/GraphActions'),
  Recharts = require('recharts');

const {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} = Recharts;

var Graph = React.createClass({

  filterGraph: function () {
    GraphActions.filterGraph(3000);
  },

  render: function () {
    return (
      <div>
        <AreaChart width={600} height={400} data={this.props.graphData}
                   margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <XAxis dataKey="name"/>
          <YAxis tickCount={10}/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Area type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8'/>
        </AreaChart>

        <button onClick={this.filterGraph}>Filter Graph</button>
      </div>
    );
  }
});

module.exports = Graph;