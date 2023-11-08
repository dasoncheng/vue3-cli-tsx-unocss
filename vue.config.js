const path = require("path");
const UnoCSS = require("@unocss/webpack").default;
const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [UnoCSS()],
    optimization: {
      realContentHash: true,
    },
    resolve: {
      alias: {
        "@": path.join(__dirname, "./src/"),
      },
    },
  },
  css: {
    extract: true,
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
});
