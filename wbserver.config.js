const path= require('path')
const nodeExternals = require('webpack-node-externals')

module.exports=
{
  target: 'node',
  externals: [nodeExternals()],
  entry:'./server.js',
  module:
  {
    rules:
    [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:
        {
          loader: "babel-loader"
        }
      }
    ]
  }
}
