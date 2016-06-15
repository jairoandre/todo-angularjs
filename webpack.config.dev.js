var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './client/app'
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        BROWSER: JSON.stringify(true)
      }
    })
  ],
  resolve: {
    modulesDirectories: ['node_modules', 'shared'],
    extensions: ['', '.js', '.html']
  },
  module: {
    loaders: [
      {
        test: /\.css?$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.less?$/,
        loader: 'style-loader!css-loader!postcss-loader!less-loader'
      },
      { test: /\.html$/, loader: 'raw' },
      {
        test: /\.js?$/,
        loader: 'babel',
        exclude: [/node_modules/, /static/]
      }
    ]
  }
};
