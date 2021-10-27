const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    assetModuleFilename: 'images/[hash:6][ext][query]',
  },
  module: {
    rules: [{
      test: /\.html$/,
      loader: 'html-loader',
    },
    // css and sass loader
    {
      test: /\.(sc|c)ss$/,
      use: [{
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: '',
        },
      }, 'css-loader', 'sass-loader'],
    },
    {
      test: /\.(png|svg|jpe?g|gif)$/i,
      type: 'asset/resource',
    },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
};
