const path = require('path');

module.exports = {
  target: 'node',
  mode: 'production',
  optimization: {
    minimize: true,
    sideEffects: false,
  },
  context: path.resolve(__dirname),
  entry: './index.js',
  externals: ['aws-sdk', 'aws-lambda'],
  output: {
    libraryTarget: 'commonjs',
    filename: 'entrypoint.js',
    path: path.resolve(__dirname),
  },
};
