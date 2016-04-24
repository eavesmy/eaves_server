var webpak = require('webpack');

module.exports = {
    entry: {
        react: './webpack-js/plugin.jsx',
        eaves: ['./webpack-js/eaves.js']
    },
    output: {
        path: './public/',
        filename: '[name].js'
    },
    externals: {        
        "jquery": "jQuery"    
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }, {
            test: /\.jsx$/,
            loader: 'babel-loader!jsx-loader?harmony'
        }]
    }
};