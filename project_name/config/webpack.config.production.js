var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
var config = require('./webpack.config.base.js')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

config.output.path = require('path').resolve('./static/dist/')

config.plugins = config.plugins.concat([
  //stats file is used to determine static files location
  new BundleTracker({filename: './webpack-stats-prod.json'}),
  
  //sets the node env to production
  new webpack.DefinePlugin({'process.env': {'NODE_ENV': JSON.stringify('production')}}),

  // keeps hashes consistent between compilations
  new webpack.optimize.OccurenceOrderPlugin(),
  // minifies your code
  new webpack.optimize.UglifyJsPlugin({compressor: {warnings: false}}),

  //builds a css file
  new ExtractTextPlugin('styles/[name].css', {allChunks: true})
])

config.module.loaders.push(
  { test: /\.css$/,  loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
  { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader") },
  { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' }
)

module.exports = config