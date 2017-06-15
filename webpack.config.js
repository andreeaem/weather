var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry:"./src/js/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  module: {
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
           'css-loader'
          ]
      }
    ]
  }
  // plugins:[
  //   new webpack.optimize.UglifyJsPlugin({
  //     //..
  //   })
  // ]
};
