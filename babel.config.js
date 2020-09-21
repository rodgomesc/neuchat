module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@components': './src/components',
          '@common': './src/common',
          '@assets': './src/assets',
        },
      },
    ],
  ],
};
