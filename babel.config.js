const plugins = [
  ['react-native-reanimated/plugin'],
  ['babel-plugin-module-resolver', {alias: {'@app': './app'}}],
];
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins,
};
