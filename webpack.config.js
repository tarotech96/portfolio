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
  entry: ["babel-polyfill", "./src/index.tsx"],
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    modules: ["node_modules"],
  },
  output: {
    path: isProduction ? `${__dirname}/build` : `${__dirname}/dist`,
    filename: "bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(tsx|jsx|ts|js)$/,
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
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  ignoreWarnings: [/Failed to parse source map/], //keeps source maps, and just removes the spam warning
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    isProduction && new EntryOptionPlugin(["ENTRY_KEY", "VERSION"]),
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    isDevelopment &&
      new Dotenv({
        path: ".env",
      }),
  ].filter(Boolean),
  devServer,
};
