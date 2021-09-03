const envKey = 'env';
const baseUrlKey = 'baseUrl';
const trackingKey = 'tracking';
const customerLogoKey = 'customerLogo';
const instituteIdKey = 'instituteId';
export const environment = {
  production: true,
  name: 'docker',
  baseUrl: window[envKey][baseUrlKey] || 'localhost',
  tracking: window[envKey][trackingKey] || false,
  customerLogo: window[envKey][customerLogoKey] || '',
  instituteId: window[envKey][instituteIdKey] || ''
};
