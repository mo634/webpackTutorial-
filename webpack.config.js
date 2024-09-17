const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  mode: 'development',
  entry: {
    index: './src/main.js',
    print: './src/print.js',
    log: './src/log.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],


};