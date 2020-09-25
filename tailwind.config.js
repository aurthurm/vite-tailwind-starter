module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './index.html',
    './public/**/*.html',
    './src/**/*.vue',
  ],
  target: 'relaxed',
  prefix: '',
  important: false,
  separator: ':',
  corePlugins: {},
  plugins: [],
}
