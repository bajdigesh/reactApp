const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "app.bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  devServer: {
    port: 3031,
    open: true,
    historyApiFallback: true,
    compress: true,
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(dotenv.parsed),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};
