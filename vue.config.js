module.exports = {
  publicPath: '/',
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true,
    public: 'development.local:3000'
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/vue/import.scss";'
      }
    }
  },
  configureWebpack: {
    entry: {
      app: './src/vue/main.ts'
    }
  }
};
