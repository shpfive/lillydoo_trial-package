// vue.config.js
const autoprefixer = require("autoprefixer");
const plugin = autoprefixer({ grid: true });

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/scss/_variables.scss";`
      }
    }
  },
  configureWebpack: config => {
    // Define autoprefixer for vue files
    let index = config.module.rules.findIndex(item => item.test.test("*.vue"));
    let rule = config.module.rules[index];
    rule.use[0].options = {
      ...rule.use[0].options,
      postcss: {
        plugins: [plugin]
      }
    };
  }
};
