var webpack = require('webpack');
var VendorChunkPlugin = require('webpack-vendor-chunk-plugin');
module.exports = {
  entry: {
    app: './src/index.js',
    vendor: [
      'jquery'
    ]
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendors.js'),
    new VendorChunkPlugin('vendor'),
  ],
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    contentBase: './'
  }
};
