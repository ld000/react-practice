const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const project = require('./project.config')
const path = require('path')

const __DEV__ = project.globals.__DEV__
const __PROD__ = project.globals.__PROD__
const __TEST__ = project.globals.__TEST__

const webpackConfig = {
  name: 'client',
  target: 'web',
  resolve : {
    modules: [project.paths.client()],
    extensions: ['', '.js', '.jsx', '.json']
  },
  entry: {
    app: project.paths.client('main.js'),
    vendor : project.compiler_vendors
  },
  module : {},
  output: {
    filename: `[name].[${project.compiler_hash_type}].js`,
    path: project.paths.dist(),
    publicPath: project.compiler_public_path
  }
}

// ----------------------------------
// Plugins
// ----------------------------------
webpackConfig.plugins = [
  new webpack.DefinePlugin(project.globals),
  new HtmlWebpackPlugin({
    template : project.paths.client('index.html'),
    hash     : false,
    favicon  : project.paths.public('favicon.ico'),
    filename : 'index.html',
    inject   : 'body',
    minify   : {
      collapseWhitespace : true
    }
  })
];

// Don't split bundles during testing, since we only want import one bundle
if (!__TEST__) {
  webpackConfig.plugins.push(
    new webpack.optimize.CommonsChunkPlugin({
      names : ['vendor']
    })
  )
}

// ------------------------------------
// Loaders
// ------------------------------------
// JavaScript / JSON
// webpackConfig.module.rules = [{
//   test    : /\.(js|jsx)$/,
//   exclude : /node_modules/,
//   use: [{
//     loader: 'babel-loader',
//     options: project.compiler_babel
//   }]
// }, {
//   test   : /\.json$/,
//   use: [{loader : 'json-loader'}]
// }]

webpackConfig.module.loaders = [{
  test    : /\.(js|jsx)$/,
  exclude : /node_modules/,
  loader  : 'babel',
  query   : project.compiler_babel
}, {
  test   : /\.json$/,
  loader : 'json'
}]

module.exports = webpackConfig
