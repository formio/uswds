const path = require('path');

module.exports = {
  entry: path.join(path.resolve(__dirname, 'lib'), 'index.js'),
  output: {
    library: 'uswds',
    libraryTarget: 'umd',
    libraryExport: 'default',
    path: path.resolve(__dirname, 'dist'),
    filename: 'uswds.js',
    environment: {
      arrowFunction: false
    },
  },
  mode: 'development',
  target: 'es5',
  performance: { hints: false },
  externals: {
    '@formio/js': 'Formio'
  },
};
