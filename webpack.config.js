const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const autoprefixer = require('autoprefixer');
const path = require('path');

const browserConfig = {
  context: path.join(__dirname, '/src'),
  entry: '../src/browser/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist')
  },
  resolve: {
    alias: {
      react: path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: [/\.jpe?g$/,/\.png$/,/\.pdf$/],
        loader: 'file-loader',
        options: {
          name: 'public/media/[name].[ext]',
          publicPath: url => url.replace(/public/,'')
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: { importLoaders: 1 }
            },
            {
              loader: 'postcss-loader',
              options: { plugins: [autoprefixer()] }
            }
          ]
        })
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: ['react'] }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'css/[name].css'
    })
  ]
};

const serverConfig = {
  context: path.join(__dirname, '/src'),
  entry: '../src/server/index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    filename: 'server.js',
    path: path.join(__dirname, '/dist'),
    libraryTarget: 'commonjs2'
  },
  resolve: {
    alias: {
      react: path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: [/\.jpe?g$/,/\.png$/,/\.pdf$/],
        loader: 'file-loader',
        options: {
          name: 'public/media/[name].[ext]',
          publicPath: url => url.replace(/public/,''),
          emit: false
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader/locals'
          }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: ['react'] }
      }
    ]
  }
};

module.exports = [browserConfig, serverConfig];