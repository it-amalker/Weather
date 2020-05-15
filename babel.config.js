module.exports = {
  presets: [
    '@babel/typescript',
    '@babel/preset-react',
    '@babel/preset-env',
  ],

  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread'],
};
