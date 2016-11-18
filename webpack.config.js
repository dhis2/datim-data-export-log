var webpack = require('webpack');
var path = require('path');

var DEVELOPMENT_SERVER_ADDRESS = 'http://localhost:8080/dhis';

module.exports = {
    context: __dirname,
    entry: './src/app.js',
    devtool: 'source-map',
    output: {
        path: __dirname + '/build',
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader"
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: "'development'",
                DEVELOPMENT_SERVER_ADDRESS: "'" + DEVELOPMENT_SERVER_ADDRESS + "'",
            }
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
    ],
    devServer: {
        contentBase: './src',
        port: 8081,
        inline: true,
    }
};
