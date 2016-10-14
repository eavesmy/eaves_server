var webpack = require('webpack');

module.exports = {
  entry:{
      //terminal:'./webpack-js/terminal.js',
      //home:'./webpack-js/home.js',
      center:'./webpack-js/center.js'
  },
  output:{
      path:'./public/state/js',
      filename:'[name].js'
  },
  module: {
      loaders: [
/*          {
              loader: 'babel-core',
              include: /webpack-js/,
              exclude: /node_modules/,
              test: /\.jsx?$/,
              query: {
                  presets: ['react','es2015']
              }
        }*/
        ]
  },
    resolve:{
        extensions:['','.js']
    },
    externals:{
      "velocity.min":"Velocity"
    }
};