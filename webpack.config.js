const path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
        {
         test: /\.css$/i,
         use: [MiniCssExtractPlugin.loader, 'style-loader', 'css-loader'],
        },
        {
         test: /\.html$/i,
         use: [
           {
           loader: 'html-loader',
           options: {
             minimize:true,
           },
           }
          ],
        },
        {
         test: /\.(png|svg|jpg|jpeg|gif)$/i,
         use: ["file-loader?name=assets/[name].[ext]"], 
         type: 'asset/resource',
        },
        {
         test: /\.(woff|woff2|eot|ttf|otf)$/i,
         type: 'asset/resource',
        }, 
    ]  
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:"./src/template.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
}; 