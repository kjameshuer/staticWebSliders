path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: './src/js/app.js',
  output: {
    path: __dirname + '/dist/',
    filename: 'bundle.min.js',
    publicPath: 'dist/'
  },
  mode: 'development',
  module: {
    rules: [


      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(svg|gif|jpg|png|eot|woff|ttf)$/,
        loaders: [
          'url-loader',
          'file-loader'
        ]
      },
      {
        test: /\.js$/,
        use: 'babel-loader?presets[]=es2015',
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules/foundation-sites')
        ]
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin({
    filename: 'styles.min.css',
  }),]
}