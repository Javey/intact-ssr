const webpack = require('webpack');
const path = require('path');

module.exports = {
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        publicPath: '/'
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
            },
            {
                test: /\.(styl|css)$/,
                use: [
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'stylus-loader',
                        options: {
                            'include css': true
                        }
                    },
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
};
