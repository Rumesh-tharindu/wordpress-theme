let tailwindcss = require("tailwindcss");
let mix = require("laravel-mix");
require("laravel-mix-tailwind");

mix
  .js("./client/js/app.js", "./dist/js/app.min.js")

  .copy("./client/images", "./dist/images")
  .copy("./client/fonts", "./dist/fonts")
  .sass("./client/scss/base.scss", "./dist/css/base.css")
  .sass("./client/scss/global.scss", "./dist/css/global.css")
  .sass("./client/scss/app.scss", "./dist/css/app.css")
  .tailwind()

  // Options
  .sourceMaps()
  .options({
    processCssUrls: false,
    postCss: [
      require("autoprefixer"), // auto prefix
      require("postcss-pxtorem")({
        // convert all pixel values to rem
        rootValue: 16,
        propList: ["*"],
      }),
    ],
    clearConsole: true,
    publicPath: "",
  });
