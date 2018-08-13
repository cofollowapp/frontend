const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const { rewireEmotion } = require('react-app-rewire-emotion');

module.exports = function override(config, env) {
  config = rewireEmotion(rewireReactHotLoader(config, env), env, {
    inline: true
  });
  return config;
};
