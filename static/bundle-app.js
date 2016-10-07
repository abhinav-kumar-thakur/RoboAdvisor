webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1),
	  ReactDOM = __webpack_require__(34),
	  graphApi = __webpack_require__(172),
	  RoboAdvisorApp = __webpack_require__(180);

	graphApi.getGraphData();

	// Render RoboAdvisorApp Controller View
	ReactDOM.render(
	  React.createElement(RoboAdvisorApp, null),
	  document.getElementById('main_container')
	);


/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	var GraphActions = __webpack_require__(173),
	  $ = __webpack_require__(179);


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

	    $http('../../../../graphData.json', 'GET', getGraph);
	  }
	};

/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	var AppDispatcher = __webpack_require__(174);
	var GraphConstants = __webpack_require__(178);

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

/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	var Dispatcher = __webpack_require__(175).Dispatcher;

	var AppDispatcher = new Dispatcher();

	AppDispatcher.handleAction = function (action) {
	  this.dispatch({
	    source: 'VIEW_ACTION',
	    action: action
	  });
	};

	module.exports = AppDispatcher;

/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	module.exports.Dispatcher = __webpack_require__(176);


/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Dispatcher
	 * 
	 * @preventMunge
	 */

	'use strict';

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var invariant = __webpack_require__(177);

	var _prefix = 'ID_';

	/**
	 * Dispatcher is used to broadcast payloads to registered callbacks. This is
	 * different from generic pub-sub systems in two ways:
	 *
	 *   1) Callbacks are not subscribed to particular events. Every payload is
	 *      dispatched to every registered callback.
	 *   2) Callbacks can be deferred in whole or part until other callbacks have
	 *      been executed.
	 *
	 * For example, consider this hypothetical flight destination form, which
	 * selects a default city when a country is selected:
	 *
	 *   var flightDispatcher = new Dispatcher();
	 *
	 *   // Keeps track of which country is selected
	 *   var CountryStore = {country: null};
	 *
	 *   // Keeps track of which city is selected
	 *   var CityStore = {city: null};
	 *
	 *   // Keeps track of the base flight price of the selected city
	 *   var FlightPriceStore = {price: null}
	 *
	 * When a user changes the selected city, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'city-update',
	 *     selectedCity: 'paris'
	 *   });
	 *
	 * This payload is digested by `CityStore`:
	 *
	 *   flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'city-update') {
	 *       CityStore.city = payload.selectedCity;
	 *     }
	 *   });
	 *
	 * When the user selects a country, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'country-update',
	 *     selectedCountry: 'australia'
	 *   });
	 *
	 * This payload is digested by both stores:
	 *
	 *   CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       CountryStore.country = payload.selectedCountry;
	 *     }
	 *   });
	 *
	 * When the callback to update `CountryStore` is registered, we save a reference
	 * to the returned token. Using this token with `waitFor()`, we can guarantee
	 * that `CountryStore` is updated before the callback that updates `CityStore`
	 * needs to query its data.
	 *
	 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       // `CountryStore.country` may not be updated.
	 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
	 *       // `CountryStore.country` is now guaranteed to be updated.
	 *
	 *       // Select the default city for the new country
	 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
	 *     }
	 *   });
	 *
	 * The usage of `waitFor()` can be chained, for example:
	 *
	 *   FlightPriceStore.dispatchToken =
	 *     flightDispatcher.register(function(payload) {
	 *       switch (payload.actionType) {
	 *         case 'country-update':
	 *         case 'city-update':
	 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
	 *           FlightPriceStore.price =
	 *             getFlightPriceStore(CountryStore.country, CityStore.city);
	 *           break;
	 *     }
	 *   });
	 *
	 * The `country-update` payload will be guaranteed to invoke the stores'
	 * registered callbacks in order: `CountryStore`, `CityStore`, then
	 * `FlightPriceStore`.
	 */

	var Dispatcher = (function () {
	  function Dispatcher() {
	    _classCallCheck(this, Dispatcher);

	    this._callbacks = {};
	    this._isDispatching = false;
	    this._isHandled = {};
	    this._isPending = {};
	    this._lastID = 1;
	  }

	  /**
	   * Registers a callback to be invoked with every dispatched payload. Returns
	   * a token that can be used with `waitFor()`.
	   */

	  Dispatcher.prototype.register = function register(callback) {
	    !!this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.register(...): Cannot register in the middle of a dispatch.') : invariant(false) : undefined;
	    var id = _prefix + this._lastID++;
	    this._callbacks[id] = callback;
	    return id;
	  };

	  /**
	   * Removes a callback based on its token.
	   */

	  Dispatcher.prototype.unregister = function unregister(id) {
	    !!this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.unregister(...): Cannot unregister in the middle of a dispatch.') : invariant(false) : undefined;
	    !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.unregister(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
	    delete this._callbacks[id];
	  };

	  /**
	   * Waits for the callbacks specified to be invoked before continuing execution
	   * of the current callback. This method should only be used by a callback in
	   * response to a dispatched payload.
	   */

	  Dispatcher.prototype.waitFor = function waitFor(ids) {
	    !this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Must be invoked while dispatching.') : invariant(false) : undefined;
	    for (var ii = 0; ii < ids.length; ii++) {
	      var id = ids[ii];
	      if (this._isPending[id]) {
	        !this._isHandled[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Circular dependency detected while ' + 'waiting for `%s`.', id) : invariant(false) : undefined;
	        continue;
	      }
	      !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
	      this._invokeCallback(id);
	    }
	  };

	  /**
	   * Dispatches a payload to all registered callbacks.
	   */

	  Dispatcher.prototype.dispatch = function dispatch(payload) {
	    !!this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.') : invariant(false) : undefined;
	    this._startDispatching(payload);
	    try {
	      for (var id in this._callbacks) {
	        if (this._isPending[id]) {
	          continue;
	        }
	        this._invokeCallback(id);
	      }
	    } finally {
	      this._stopDispatching();
	    }
	  };

	  /**
	   * Is this Dispatcher currently dispatching.
	   */

	  Dispatcher.prototype.isDispatching = function isDispatching() {
	    return this._isDispatching;
	  };

	  /**
	   * Call the callback stored with the given id. Also do some internal
	   * bookkeeping.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._invokeCallback = function _invokeCallback(id) {
	    this._isPending[id] = true;
	    this._callbacks[id](this._pendingPayload);
	    this._isHandled[id] = true;
	  };

	  /**
	   * Set up bookkeeping needed when dispatching.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._startDispatching = function _startDispatching(payload) {
	    for (var id in this._callbacks) {
	      this._isPending[id] = false;
	      this._isHandled[id] = false;
	    }
	    this._pendingPayload = payload;
	    this._isDispatching = true;
	  };

	  /**
	   * Clear bookkeeping used for dispatching.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._stopDispatching = function _stopDispatching() {
	    delete this._pendingPayload;
	    this._isDispatching = false;
	  };

	  return Dispatcher;
	})();

	module.exports = Dispatcher;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	function invariant(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 178:
/***/ function(module, exports) {

	module.exports = {
	  RECEIVE_DATA: 'RECEIVE_DATA', //load the initial graph data
	  FILTER_DATA: 'FILTER_DATA' //filter the graph data
	};

/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var GraphStore = __webpack_require__(181);
	var Graph = __webpack_require__(185);

	// Method to retrieve state from Stores
	function getGraphState() {
	  return {
	    graphData: GraphStore.getGraphData()
	  };
	}

	// Define main Controller View
	var RoboAdvisorApp = React.createClass({displayName: "RoboAdvisorApp",

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
	      React.createElement("div", {className: "robo-advisor-app"}, 
	        React.createElement(Graph, {graphData: this.state.graphData})
	      )
	    );
	  },

	  // Method to setState based upon Store changes
	  _onChange: function () {
	    this.setState(getGraphState());
	  }

	});

	module.exports = RoboAdvisorApp;

/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

	var AppDispatcher = __webpack_require__(174);
	var EventEmitter = __webpack_require__(182).EventEmitter;
	var GraphConstants = __webpack_require__(178);
	var _ = __webpack_require__(183);

	var graphData = [];

	var loadGraphData = function (data) {
	  graphData = data;
	};

	var filterGraphData = function (data) {
	  graphData = graphData.filter(function (d) {
	    return d.uv < data;
	  });
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

	    case GraphConstants.FILTER_DATA:
	      filterGraphData(action.data);
	      break;
	  }

	  GraphStore.emitChange();

	  return true;

	});

	module.exports = GraphStore;

/***/ },

/***/ 185:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1),
	  GraphActions = __webpack_require__(173),
	  Recharts = __webpack_require__(186);

	const {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} = Recharts;

	var Graph = React.createClass({displayName: "Graph",

	  filterGraph: function () {
	    GraphActions.filterGraph(3000);
	  },

	  render () {
	    return (
	      React.createElement("div", null, 
	        React.createElement(AreaChart, {width: 600, height: 400, data: this.props.graphData, 
	                   margin: {top: 10, right: 30, left: 0, bottom: 0}}, 
	          React.createElement(XAxis, {dataKey: "name"}), 
	          React.createElement(YAxis, {tickCount: 10}), 
	          React.createElement(CartesianGrid, {strokeDasharray: "3 3"}), 
	          React.createElement(Tooltip, null), 
	          React.createElement(Area, {type: "monotone", dataKey: "uv", stroke: "#8884d8", fill: "#8884d8"})
	        ), 

	        React.createElement("button", {onClick: this.filterGraph}, "Filter Graph")
	      )
	    );
	  }
	});

	module.exports = Graph;

/***/ }

});