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
    // import文でファイル拡張子を書かずに名前解決するための設定
    extensions:['.ts','.js'] // Reactの.tsxや.jsxの拡張子も扱いたい場合は配列内に追加する
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