// var webpack = require('webpack');
// var path = require('path');

module.exports = {
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
      }
    ],
    // entry:[
    //   './src'
    // ]
  }
};
