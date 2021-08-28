const Dotenv = require("dotenv-webpack");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { EntryOptionPlugin } = require("webpack");

const isProduction = process.env.NODE_ENV === "production";
const isDevelopment = !isProduction;

const devServer = {
  compress: true,
  port: 3000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers":
      "X-Requested-With, content-type, Authorization",
  },
  hot: true,
  historyApiFallback: true,
};

module.exports = {
  entry: "./src/index.tsx",
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    modules: ["node_modules"],
  },
  output: {
    path: isProduction ? `${__dirname}/../root` : `${__dirname}/dist`,
    filename: "taro-website.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: { cacheDirectory: true },
          },
        ],
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    isDevelopment && new Dotenv(),
    isProduction && new EntryOptionPlugin(["ENTRY_KEY", "VERSION"]),
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ].filter(Boolean),
  devServer,
};
