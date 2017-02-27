var Wp = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const _path = "./public/state/";

module.exports = {

  entry: [
    _path + "init",
    _path + "inputDeal",
  ],

  output: {
    path: "./public/state/",
    filename: "terminal.js"
  },

  resolve: {
    extensions: ['.js', '.json']
  },

  devtool: "source-map", // any "source-map"-like devtool is possible

};