var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var GraphConstants = require('../constants/GraphConstants');
var _ = require('lodash');

var graphData = {};

var loadGraphData = function (data) {
  graphData = data;
};

var GraphStore = _.extend({}, EventEmitter.prototype, {

  getGraphData: function () {
    return graphData;
  },

  emitChange: function () {
    this.emit('change');
  },

  addChangeListener: function (callback) {
    this.on('change', callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener('change', callback);
  }

});

AppDispatcher.register(function (payload) {
  var action = payload.action;

  switch (action.actionType) {

    case GraphConstants.RECEIVE_DATA:
      loadGraphData(action.data);
      break;
  }

  GraphStore.emitChange();

  return true;

});

module.exports = GraphStore;