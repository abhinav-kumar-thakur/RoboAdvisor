var AppDispatcher = require('../dispatcher/AppDispatcher');
var GraphConstants = require('../constants/GraphConstants');

var GraphActions = {

  getGraph: function (data) {
    AppDispatcher.handleAction({
      actionType: GraphConstants.RECEIVE_DATA,
      data: data
    })
  },

  filterGraph: function(data) {
    AppDispatcher.handleAction({
      actionType: GraphConstants.FILTER_DATA,
      data: data
    })
  }

};

module.exports = GraphActions;