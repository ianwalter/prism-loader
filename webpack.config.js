const { join } = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const entry = join(__dirname, 'tests/fixtures/test.html')

module.exports = {
  mode: 'none',
  entry,
  plugins: [
    new HtmlWebpackPlugin({ template: entry })
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: ['html-loader', __dirname]
      }
    ]
  }
}
