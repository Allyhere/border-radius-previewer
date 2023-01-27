const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
  plugins: [
    postcssPresetEnv({
      stage: 0,
      autoprefixer: true,
      enableClientSidePolyfills: false,
    }),
  ],
};
