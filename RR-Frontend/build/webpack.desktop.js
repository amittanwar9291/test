/**
 * Custom angular webpack configuration for electron
 */

module.exports = (config, options) => {
  config.target = 'electron-renderer';

  return config;
}
