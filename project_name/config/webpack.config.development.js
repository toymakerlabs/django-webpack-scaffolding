var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
var config = require('./webpack.config.base.js')

/**
 Good article for your css
 http://jamesknelson.com/writing-happy-stylesheets-with-webpack/
 */


// Use webpack dev server
config.entry = [
  'webpack-dev-server/client?http://localhost:3000',
  '../../static_src/js/index'
]

// override django's STATIC_URL for webpack bundles
config.output.publicPath = 'http://localhost:3000/static_src/bundles/'

// Add HotModuleReplacementPlugin and BundleTracker plugins
config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new BundleTracker({filename: './webpack-stats.json'}),
  new webpack.SourceMapDevToolPlugin({filename: '[file].map'}),
])

// Add a loader for JSX files with react-hot enabled
config.module.loaders.push(
  { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel'] },
  
  //Probably a good idea to pick one
  //vanilla CSS
  {test: /\.css$/, loader: "style-loader!css-loader?root=."},

  //sass
  { test: /\.scss$/, loader: "style!css!postcss-loader!sass" }

)

module.exports = config