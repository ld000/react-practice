const webpack = require('webpack')
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
    extensions: ['.js', '.jsx', '.json']
  },
  entry: {
    app: project.paths.client('main.js'),
    vendor : project.compiler_vendors
  },
  output: {
    filename: `[name].[${project.compiler_hash_type}].js`,
    path: project.paths.dist(),
    publicPath: project.compiler_public_path
  }
}

// ----------------------------------
// Plugins
// ----------------------------------
webpackConfig.plugins = [];

// Don't split bundles during testing, since we only want import one bundle
if (!__TEST__) {
  webpackConfig.plugins.push(
    new webpack.optimize.CommonsChunkPlugin({
      names : ['vendor']
    })
  )
}

module.exports = webpackConfig
