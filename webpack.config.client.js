const webpack = require('webpack');
const path = require('path');
const webpackConfig = require('./webpack.config');
const _ = require('lodash');

module.exports = _.defaultsDeep({
    entry: {
        client: './client.js'
    },
    resolve: {
        mainFields: ['module', 'browserify', 'browser', 'main']
    },
}, webpackConfig);

module.exports.module.rules[2].use.unshift({
    loader: 'style-loader'
});
