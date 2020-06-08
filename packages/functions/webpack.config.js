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
  // aws-sdk and aws-lambda are available in the AWS Lambda runtime environment
  // newrelic is a binary and can't be bundled
  externals: ['aws-sdk', 'aws-lambda', 'newrelic'],
  output: {
    libraryTarget: 'commonjs',
    filename: 'entrypoint.js',
    path: path.resolve(__dirname),
  },
};
