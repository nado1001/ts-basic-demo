const path = require('path')

module.exports = {
  entry: {
    // index.tsをバンドルする
    bundle: './src/index.ts'
  },
  output: {
    // distディレクトリにbundleする
    path: path.join(__dirname, 'dist'),
    // bundle.js
    filename: '[name].js'
  },
  resolve: {
    // import exportの時拡張子を除く
    extenstions: ['.ts', '.js']
  },
  devServer: {
    // ローカルサーバーが参照するディレクトリ
    contentBase: path.join(__dirname, 'dist'),
    open: true
  },
  module: {
    rules: [
      {
        // .tsの拡張子をts-loaderでコンパイルする
        loader: 'ts-loader',
        test: /\.ts$/
      }
    ]
  }
}