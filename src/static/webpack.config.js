const context = __dirname + "/lib";

module.exports = {
  entry: [
    context + "/init",
    context + "/inputDeal"
  ],
  output: {
    path: context + "/../",
    filename: "terminal.js"
  },
  resolve: {
    extensions: [".js", ".json"]
  },
  devtool: "source-map"
};
