const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "bundle[hash].js"
  },
  devServer: {
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
         template: path.resolve(__dirname, 'public', 'index.html')
      }
    ),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: [path.resolve(__dirname, "node_modules")]
      }
    ]
  }
}
