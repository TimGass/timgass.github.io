const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
    client: {
      overlay: true,
      progress: true,
    }
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader:'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime', 'react-refresh/babel'],
            }
          }],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        type: 'asset'
      }
    ],
  },
  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        test: /\.(png|jpg|jpeg|gif)$/i,
        minimizer: {
          implementation: ImageMinimizerPlugin.sharpMinify,
          options: {
            encodeOptions: {
              quality: 70,
            },
          },
        },
      }),
    ]
  },
  plugins: [
    new ErrorOverlayPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve('./index.html'),
      filename: 'index.html',
      hash: true,
      favicon: path.resolve(__dirname, './src/assets/TimGass.png'),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
  mode: "development",
};
