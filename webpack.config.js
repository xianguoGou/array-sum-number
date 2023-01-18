const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: {
    'array-sum-number': './src/index.js',
    'array-sum-number.min': './src/index.js',
  },
  output: {
    filename: '[name].js',
    library: 'array-sum-number',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  mode: 'none',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/
      })
    ]
  }
}