const path = require('path');

module.exports = {
  entry: './index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'bundle.js'
  },
  resolve: { extensions: [".ts", ".js"], 
  modules: [path.resolve('./src'), 'node_modules'] },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  mode: 'development',
  devServer: {
    inline: true
  },
  devtool: "source-map"
}