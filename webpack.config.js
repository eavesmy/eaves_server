var Wp = require('webpack');

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
  }

};