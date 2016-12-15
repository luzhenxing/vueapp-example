const path = require('path'),
  webpack = require('webpack'),
  CleanPlugin = require('clean-webpack-plugin');
module.exports = {
  entry: ['babel-polyfill', './src/main.js'],
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'build.js',
    publicPath: '/dist/'
  },
  resolve: {
    alias: {
      'vue$': '../node_modules/vue/dist/vue.common.js'
    }
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.vue/,
      loader: 'vue'
    }]
  },
  vue: {
    loaders: {
      js: 'babel'
    }
  },
  devServer: {
    inline: true,
    hot: true
  },
  // devtool: 'eval-source-map',
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin('common.js'),
    // 压缩丑化
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // }),
    new CleanPlugin('dist')
  ]
};
