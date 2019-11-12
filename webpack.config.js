const path = require('path');

module.exports = {
  entry: path.join(path.resolve(__dirname, 'lib'), 'index.js'),
  output: {
    library: 'uswds',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    filename: 'uswds.js',
  },
  mode: 'production',
  performance: { hints: false },
};
