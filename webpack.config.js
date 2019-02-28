const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const WebpackBar = require("webpackbar");

const handler = (percentage, message, ...args) => {
  console.info(percentage, message, ...args);
};
module.exports = {
  entry: "./src/index.tsx",
  devtool: "eval-source-map",
  devServer: {
    contentBase: "./dist"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      src: path.resolve(__dirname, "src"),
      components: path.resolve(__dirname, "src/components")
    }
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "Code challenge application",
      template: "./index.html"
    }),
    new WebpackBar()
  ],
  output: {
    filename: "[name],[chunkhash]js",
    path: path.resolve(__dirname, "dist")
  }
};
