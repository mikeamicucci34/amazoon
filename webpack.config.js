const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/amazoon.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      }
    ]
  },
  devtool: 'eval-source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};