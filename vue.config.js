module.exports = {
  devServer: {
    proxy: {
      '/try': {
        target: `https://www.runoob.com/`,
        changeOrigin: true
      },
      '/app': {
        target: `https://www.huidiancloud.com/`,
        changeOrigin: true
      }
    }
  }
}