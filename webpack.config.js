const paths = {
  app: {
    js: './app/static/javascripts/app.js'
  }
};

module.exports = {
  entry: paths.app.js,
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