const webpackMerge = require('webpack-merge');
const loadSharedConfig = require('./configs/common');

const loadModeConfig = env => require(`./configs/${env.mode}`)(env);

module.exports = env =>
  webpackMerge(loadSharedConfig(env), loadModeConfig(env));
