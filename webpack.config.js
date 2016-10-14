const webpack = require('webpack'),
  paths = {
    app: {
      js: './app/assets/javascripts/index.js'
    }
  };

module.exports = {
  entry: {
    'vendor': ['react', 'react-dom', 'redux', 'react-redux', 'redux-thunk', 'recharts', 'lodash', 'jquery'],
    'app': paths.app.js
  },

  plugins: [new webpack.optimize.CommonsChunkPlugin(['app', 'vendor'], 'bundle-[name].js')],

  output: {
    path: './app/static/javascripts',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};