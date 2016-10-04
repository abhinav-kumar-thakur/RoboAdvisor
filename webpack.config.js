const webpack = require('webpack'),
  glob = require('glob'),
  paths = {
    app: {
      js: './app/static/javascripts/app.js'
    }
  };

module.exports = {
  entry: {
    'vendor': ['react', 'react-dom'],
    'app': paths.app.js
  },

  plugins: [new webpack.optimize.CommonsChunkPlugin(['app', 'vendor'], 'bundle-[name].js')],

  output: {
    path: 'dist',
    filename: "bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["jsx-loader"]
      }
    ]
  }
};