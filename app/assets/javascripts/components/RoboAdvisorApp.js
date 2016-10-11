var React = require('react'),
  GraphStore = require('../stores/GraphStore'),
  Header = require('./Header'),
  Graph = require('./Graph');

// Method to retrieve state from Stores
function getGraphState() {
  return {
    graphData: GraphStore.getGraphData()
  };
}

// Define main Controller View
var RoboAdvisorApp = React.createClass({

  // Get initial state from stores
  getInitialState: function () {
    return getGraphState();
  },

  // Add change listeners to stores
  componentDidMount: function () {
    GraphStore.addChangeListener(this._onChange);
  },

  // Remove change listers from stores
  componentWillUnmount: function () {
    GraphStore.removeChangeListener(this._onChange);
  },

  // Render our child components, passing state via props
  render: function () {
    return (
      <div className="robo-advisor-app">
        <Header />
        <Graph graphData={this.state.graphData}/>
      </div>
    );
  },

  // Method to setState based upon Store changes
  _onChange: function () {
    this.setState(getGraphState());
  }

});

module.exports = RoboAdvisorApp;