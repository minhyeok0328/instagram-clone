const CracoAlias = require('craco-alias');

module.exports = {
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
