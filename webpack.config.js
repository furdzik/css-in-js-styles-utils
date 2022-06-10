const { resolve } = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = () => ({
  entry: resolve(__dirname, 'src/index.js'),
  mode: 'production',
  resolve: {
    extensions: ['.js', '.json'],
    modules: [resolve('./'), 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [],
  externals: [
    nodeExternals({
      modulesDir: resolve(__dirname, 'node_modules')
    })
  ],
  output: {
    libraryTarget: 'umd',
    umdNamedDefine: true,
    library: 'index',
    filename: 'index.js',
    globalObject: 'this'
  }
});
