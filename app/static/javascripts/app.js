var React = require('react'),
  ReactDOM = require('react-dom'),
  Recharts = require('recharts');

const {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} = Recharts;
const data = [
  {name: 'Page A', uv: 4000},
  {name: 'Page B', uv: 3000},
  {name: 'Page C', uv: 2000},
  {name: 'Page D', uv: 2780},
  {name: 'Page E', uv: 1890},
  {name: 'Page F', uv: 2390},
  {name: 'Page G', uv: 3490}
];
const SimpleAreaChart = React.createClass({
  render () {
    return (
      <AreaChart width={600} height={400} data={data}
                 margin={{top: 10, right: 30, left: 0, bottom: 0}}>
        <XAxis dataKey="name"/>
        <YAxis tickCount={10}/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Area type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8'/>
      </AreaChart>
    );
  }
});

ReactDOM.render(
  <SimpleAreaChart />,
  document.getElementById('main_container')
);