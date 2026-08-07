/**
 * Prepends Vite's BASE_URL to any public-folder asset path.
 * In dev: BASE_URL = '/'  → '/images/logo.jpg'
 * In prod (GitHub Pages): BASE_URL = '/kalaimahal_School/' → '/kalaimahal_School/images/logo.jpg'
 *
 * @param {string} path - Asset path starting with '/' (e.g. '/images/logo.jpg')
 * @returns {string} Correct absolute URL for the current environment
 */
const BASE = import.meta.env.BASE_URL; // trailing slash guaranteed by Vite

export const assetPath = (path) =>
  `${BASE}${path.replace(/^\//, '')}`;

export default assetPath;
