var GraphActions = require('../actions/GraphActions'),
  $ = require('jquery');


function $http(url, method, successCallback, errorCallback) {
  $.ajax({
      url: url,
      method: method
    })
    .done(function (data) {
      successCallback(data);
    })
    .fail(function (err) {
      errorCallback(err);
    })
}

module.exports = {

  getGraphData: function () {
    function getGraph(data) {
      GraphActions.getGraph(data);
    }

    $http('static/data/graphData.json', 'GET', getGraph);
  }
};