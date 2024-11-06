const webpack = require('@nativescript/webpack');
const path = require('path');

module.exports = (env) => {
  webpack.init(env);

  // Add custom rules here
  webpack.chainWebpack((config) => {
    config.resolve.alias.set('@', path.resolve(__dirname, 'app'));
  });

  return webpack.resolveConfig();
};