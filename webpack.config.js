var webpack = require('webpack');

module.exports = {
  entry:{
      terminal:'./webpack-js/terminal.js'
  },
  output:{
      path:'./public/state/js',
      filename:'[name].js'
  },
  module: {
      loaders: [
          {
              loader: 'babel',
              include: /webpack-js/,
              exclude: /node_modules/,
              test: /\.jsx?$/,
              query: {
                  presets: ['react','es2015']
              }
        }
        ]
  },
    resolve:{
        extensions:['','.js']
    }
};