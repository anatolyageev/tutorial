module.exports = {
  devServer: {
    // port: 8081,
    proxy: 'http://localhost:8081/ping',
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/styles/styles.scss";`
      }
    }
  }
};