const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const WebpackBar = require('webpackbar');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const ImageminWebpWebpackPlugin= require("imagemin-webp-webpack-plugin");
const webpack = require('webpack');



const paths = require('../utils/paths');
const path = require('path');

module.exports = env => ({
  mode: env.mode,
  context: paths.SRC_DIR,
  entry: './index.js',
  output: {
    path: paths.BUILD_DIR,
          },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: paths.SRC_DIR,
        use: ['babel-loader'],
      },
           {
        test: /\.(?:ico|png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[path]/[name].[ext]',
              limit: 8192,
              esModule: false,
              presets: [
            ['@babel/preset-env', { targets: "defaults" }]
          ]
            },
          },

          // 'raw-loader',
          'img-loader',
        ],
      },
      {
        test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
              limit: 10000,
              mimetype: 'application/font-woff',
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          }
        ]
      },
    //   {
    //   test: /\.html$/,
    //   use: [ {
    //     loader: 'html-loader',
    //     options: {
    //       interpolate: true
    //     }
    //   }],
    // },
      {
        test: /\.hbs$/,
        use: 'handlebars-loader',
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    new WebpackBar(),
    new WriteFilePlugin(),
    // new CopyWebpackPlugin(),
    new HtmlWebpackPlugin(),
    new ImageminWebpWebpackPlugin(),
    new webpack.ProvidePlugin({
    $: "jquery",
    jQuery:"jquery"
  })

  ],
  resolve: {
    modules: [paths.SRC_DIR, 'node_modules'],
    extensions: ['.js', '.json'],
  },
});
