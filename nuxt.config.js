export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "ultratech",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
           { rel: "apple-touch-icon", type: "image/x-icon", sizes:"180x180" , href:"/apple-touch-icon.png" },
           { rel: "manifest", href: "/site.webmanifest" },
           { rel:"preconnect" ,href:"https://fonts.gstatic.com"},
           { rel:"stylesheet" ,href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500&display=swap"},
          ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["bootstrap-vue/nuxt"],
  bootstrapVue: {
    bootstrapCSS: false, 
    bootstrapVueCSS: false
  },
  css: ['@/assets/scss/custom.scss'],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
