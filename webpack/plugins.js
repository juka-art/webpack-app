var NODE_ENV = process.env.NODE_ENV;

var port = 8080;

var path = require('path'),
    webpack = require('webpack');

var HtmlPlugin = require('html-webpack-plugin');

var NpmInstallPlugin = require('npm-install-webpack-plugin');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var plugins, entry;

if(NODE_ENV === 'dev'){
  plugins = [
    new HtmlPlugin({
      filename: 'index.html',
      title: 'Development App',
      template: './client/templates/index.jade',
      favicon: './client/favicon.ico',
      // chunks: ['client', 'vendors'],
    }),
    new ExtractTextPlugin(),
    new NpmInstallPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.[hash].js')
  ], entry = [
    'webpack-dev-server/client?http://localhost:' + port,
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    './client/scripts/index.js'
  ];
}else if(NODE_ENV === 'prod'){
  plugins = [
    new HtmlPlugin({
      filename: 'index.html',
      title: 'Production App',
      template: './client/templates/index.jade',
      favicon: './client/favicon.ico',
      // chunks: ['client', 'vendors'],
    }),
    new ExtractTextPlugin('bundle.[hash].css', { allChunks: true }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({compressor: {warnings: false}}),
    new NpmInstallPlugin(),
    // new webpack.noErrorsPlugin()
  ], entry = ['babel-polyfill','./client/scripts/index.js'];
}

module.exports.plugins = plugins;
module.exports.entry = entry;