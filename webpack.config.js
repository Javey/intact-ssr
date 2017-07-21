const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        client: './client.js'
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
        mainFields: ['browserify', 'browser', 'module', 'main']
    },
    recordsInputPath: path.resolve(__dirname, '.cache/recordsInputPath.json'),
    recordsOutputPath: path.resolve(__dirname, '.cache/recordsOutputPath.json')
};
