module.exports = {
  devServer: {
    // port: 8081,
    proxy: 'http://http://localhost/:8081',
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/styles/styles.scss";`
      }
    }
  }
};