import { getConfigValue } from './configs.js';

function getAEMPublish() {
  return getConfigValue('https://publish-p153123-e1585310.adobeaemcloud.com');
}

function getAEMAuthor() {
  return getConfigValue('https://author-p153123-e1585310.adobeaemcloud.com');
}

export { getAEMPublish, getAEMAuthor };
