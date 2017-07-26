const webpack = require('webpack');
const path = require('path');
const packageJson = require('./package.json');
const webpackConfig = require('./webpack.config');
const _ = require('lodash');

const nodeModules = {};
for (var key in packageJson.dependencies) {
    nodeModules[key] = 'commonjs ' + key;
}

module.exports = _.defaultsDeep({
    entry: {
        server: './server.js'
    },
    resolve: {
        mainFields: ['main', 'module', 'browserify', 'browser']
    },
    target: 'node',
    externals: nodeModules,
    node: {
        __dirname: false 
    }
}, webpackConfig);

module.exports.module.rules[2].use.unshift({
    loader: 'node-style-loader'
});
