const { getDefaultConfig } = require('expo/metro-config')

module.exports = (() => {
  const config = getDefaultConfig(__dirname)

  const { transformer, resolver } = config

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer/expo'),
  }
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...resolver.sourceExts, 'svg'],
    extraNodeModules: {
      'react-dom': require.resolve('react-native'), // Redireciona `react-dom` para `react-native`
    },
  }

  return config
})()