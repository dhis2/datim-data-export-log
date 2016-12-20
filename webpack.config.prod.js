var webpack = require('webpack');
var path = require('path');

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
				test: /\.css$/,
				loader: "style-loader!css-loader"
            },
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader"
            },
            {
                  test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                  loader: 'url-loader?limit=100000',
            },
        ]
    },
    plugins: [
        // Replace any occurance of process.env.NODE_ENV with the string 'production'
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '\'production\'',
            },
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            sourceMap: true,
        }),
        //new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
    ],
    devServer: {
        contentBase: './src',
        progress: true,
        colors: true,
        port: 8081,
        inline: true,
    }
};
