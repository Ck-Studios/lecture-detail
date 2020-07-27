const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withSourceMaps = require("@zeit/next-source-maps");
const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["swiper", "dom7"]);

module.exports = withPlugins([
  [withCSS],
  [withTM],
  [withSass, {
    cssModules: true,
  }],
  [withSourceMaps({
    webpack: config => {
      config.node = {
        fs: "empty"
      };
      return config;
    }
  })]
]);
