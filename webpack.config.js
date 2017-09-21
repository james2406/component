const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: 'main.css',
});

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            exclude: /node_modules/,
        }, {
            test: /\.scss$/,
            exclude: /(node_modules|bower_components)/,
            use: extractSass.extract({
                use: ['css-loader', 'sass-loader'],
            }),
        }],
    },
    plugins: [
        extractSass,
    ],
    // devServer: {
    //     historyApiFallback: true,
    // },
}
