const webpack = require('webpack'),
  paths = {
    app: {
      js: './app/assets/javascripts/app.js'
    }
  };

module.exports = {
  entry: {
    'vendor': ['react', 'react-dom', 'recharts', 'lodash', 'jquery'],
    'app': paths.app.js
  },

  plugins: [new webpack.optimize.CommonsChunkPlugin(['app', 'vendor'], 'bundle-[name].js')],

  output: {
    path: './app/static',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['jsx-loader']
      }
    ]
  }
};