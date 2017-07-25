const webpack = require('webpack');
const path = require('path');
const packageJson = require('./package.json');

const nodeModules = {};
for (var key in packageJson.dependencies) {
    nodeModules[key] = 'commonjs ' + key;
}

module.exports = {
    entry: {
        client: './client.js',
        server: './server.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: path.resolve(__dirname, '.cache'),
                            presets: ['es2015']
                        }
                    }
                ]
            },
            {
                test: /\.vdt$/,
                use: [
                    {
                        loader: 'vdt-loader',
                        options: {
                            delimiters: ['{{', '}}'],
                            skipWhitespace: true
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vdt'],
        mainFields: ['main', 'module', 'browserify', 'browser']
    },
    recordsInputPath: path.resolve(__dirname, '.cache/recordsInputPath.json'),
    recordsOutputPath: path.resolve(__dirname, '.cache/recordsOutputPath.json'),
    target: 'node',
    externals: nodeModules,
    node: {
        __dirname: false 
    }
};
