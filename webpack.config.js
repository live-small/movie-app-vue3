const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");
const env = dotenv.config().parsed;

module.exports = {
  resolve: {
    extensions: [".vue", ".js"],
    alias: {
      src: path.resolve(__dirname, "src"),
    },
  },
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.s?css$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlPlugin({
      template: "src/index.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "static" }],
    }),
    new webpack.DefinePlugin({
      VUE_APP_API_KEY: JSON.stringify(env.VUE_APP_API_KEY),
      VUE_APP_API_END_POINT: JSON.stringify(env.VUE_APP_API_END_POINT),
    }),
  ],

  devServer: {
    port: 8080,
  },
};
