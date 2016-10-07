var React = require('react'),
  ReactDOM = require('react-dom'),
  graphApi = require('./utils/graphApi'),
  RoboAdvisorApp = require('./components/RoboAdvisorApp');

graphApi.getGraphData();

// Render RoboAdvisorApp Controller View
ReactDOM.render(
  <RoboAdvisorApp />,
  document.getElementById('main_container')
);
