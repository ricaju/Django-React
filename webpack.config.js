const path = require('path')
const BundleTracker = require('webpack-bundle-tracker');


module.exports = {
  mode: 'development',

  entry: {
    main: './Frontend/src/index.js',  //ulaz
    server: 'webpack-dev-server/client?http://localhost:3000' 
  },

  output: {
    filename: "[name].js",
    path: path.resolve('./Frontend/static/frontend/bundles/'), //izlaz, stvara file bundles
    publicPath: 'http://localhost:3000/Frontend/static/frontend/bundles/',  //ovo bi trebalo overridati static_url iz djanga
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },

  plugins: [  
    new BundleTracker({filename: './Frontend/webpack-stats.json'}),
  ],

  devServer: {
    contentBase: './Frontend/static/frontend/bundles/',
  },
};