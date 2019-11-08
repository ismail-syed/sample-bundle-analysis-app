/* eslint-disable no-process-env */
// localhost:40081 is the sewing-kit default for dev server
export const ip = process.env.IP || 'localhost';
export const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 40081;

// export const assetPrefix = process.env.CDN_URL || 'localhost/webpack/assets/';
