/* eslint-env node */
import * as dotenv from 'dotenv';
import {Plugins} from '@shopify/sewing-kit';
import {ip, port} from './config/server';

// @ts-ignore
import BundleAnalyzerPlugin from '@bundle-analyzer/webpack-plugin';

dotenv.config();

module.exports = function sewingKitConfig(plugins: Plugins) {
  return {
    name: 'your-app-name',
    plugins: [
      plugins.devServer({
        ip,
        port,
      }),
      plugins.cdn('http://localhost:8080/assets/'),
      plugins.vendors([
        '@shopify/network',
        '@shopify/polaris',
        '@shopify/react-effect',
        '@shopify/react-html',
        '@shopify/react-i18n',
        '@shopify/react-network',
        'react',
        'react-dom',
        'react-router',
        'react-router-dom',
      ]),
      plugins.webpack((config) => {
        config.plugins.push(
          new BundleAnalyzerPlugin({token: process.env.BUNDLE_ANALYZER_TOKEN}),
        );

        return config;
      }),
    ],
  };
};
