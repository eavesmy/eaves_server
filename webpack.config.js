var webpack = require('webpack');

module.exports = {
  entry:{
      eaves:'./webpack-js/eaves.js',
      terminal:'./webpack-js/terminal.js'
  },
  output:{
      path:'./public/js',
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