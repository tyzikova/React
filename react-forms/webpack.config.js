const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: path.join(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
  },
  devServer: { open: true },
  devtool: isDev ? 'inline-source-map' : 'source-map',
  mode: isDev ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.?jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|webp)$/i,
        type: 'asset',
      },
    ],
  },
  resolve: {
    modules: [path.join(__dirname, 'node_modules'), path.join(__dirname, 'src')],
    extensions: ['.js', '.jsx'],
  },
  plugins: [new HtmlWebpackPlugin({ template: path.join(__dirname, 'src', 'index.html') })],
};
