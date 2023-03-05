const { resolve } = require('node:path');

const commonConfig = {
  target: ['web', 'browserslist'],
  entry: {
    main: resolve(__dirname, '../src/index.js'),
  },
};

module.exports = commonConfig;