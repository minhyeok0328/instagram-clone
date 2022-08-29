const CracoAlias = require('craco-alias');
const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      paths.appBuild = webpackConfig.output.path =
        path.resolve('../backend/static');
      return webpackConfig;
    },
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'options',
        baseUrl: './',
        aliases: {
          '@hooks': './src/hooks',
          '@assets': './src/assets',
          '@components': './src/components',
          '@pages': './src/pages',
          '@styles': './src/styles',
        },
      },
    },
  ],
};
