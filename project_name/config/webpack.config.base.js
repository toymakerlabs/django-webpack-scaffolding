
var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  context: __dirname,

  entry: '../../static_src/js/index',

  output: {
      path: path.resolve('./static_src/bundles/'),
      filename: "[name]-[hash].js"
  },

  plugins: [
    // add all common plugins here
  ], 

  module: {
    loaders: [
      // common loaders
    ]
  },

  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx']
  },
}