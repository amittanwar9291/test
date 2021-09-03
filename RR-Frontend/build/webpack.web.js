module.exports = (config, options) => {
  config.target = 'web';
  config.node = Object.assign({}, config.node, { fs: 'empty', path: 'empty' });

  return config;
}
