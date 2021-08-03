const path = require('path');

const paths = {
  SRC_DIR: path.resolve(__dirname, '../../src'),
  BUILD_DIR: path.resolve(__dirname, '../../build'),
  PUBLIC_DIR: path.resolve(__dirname, '../../public'),

};

module.exports = paths;

// module.exports = {
//   src: path.resolve(__dirname, '../src'),
//   dist: path.resolve(__dirname, '../dist'),
//   public: path.resolve(__dirname, '../public'),
// };
