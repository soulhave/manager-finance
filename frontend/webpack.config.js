var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: __dirname + '/src',
    entry: './index.js',
    output: {
        path: __dirname + '/static',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' }, 
            { test: /\.html$/, use: { loader: 'html-loader'} }
        ]
    },

    plugins: [
        new CopyWebpackPlugin([
            { from: 'assets/**/*.+(jpe?g|png|gif|svg)' },
            { from: 'app/index.html' }
        ])
    ]
};