import path from 'path';

// "@/*": ["src/*"],
// "@hooks/*": ["src/hooks/*"],
// "@assets/*": ["src/assets/*"],
// "@components/*": ["src/components/*"],
// "@pages/*": ["src/pages/*"],
// "@styles/*": ["src/styles/*"]

module.exports = {
  resolve: {
    alias: {
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
    },
  },
};
