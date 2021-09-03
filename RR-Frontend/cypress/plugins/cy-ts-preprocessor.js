const wp = require('@cypress/webpack-preprocessor')
const path = require('path')

const webpackOptions = {
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@enums': path.resolve(__dirname, '../../src/app/core/enums'),
      '@models': path.resolve(__dirname, '../../src/app/core/models'),
      '@environments': path.resolve(__dirname, '../../src/environments')
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      }
    ]
  }
}

const options = {
  webpackOptions
}

module.exports = wp(options)
