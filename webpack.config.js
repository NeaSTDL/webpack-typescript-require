var path = require('path'),
    ROOT = path.resolve(__dirname, '.');

module.exports = {
  context: path.resolve(ROOT, 'app'),
  entry: 'app.ts',
  output: {
    path: path.resolve(ROOT, 'dist'),
    filename: '[name]-[hash].js'
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'awesome-typescript-loader' }
    ]
  },
  resolve: {
    root: [
      path.resolve(__dirname, 'app')
    ],
    extensions: [
      '', '.ts', '.js'
    ]
  }
};