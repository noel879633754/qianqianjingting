module.exports = {
  devServer: {
    proxy: {
      '/baidu_music_api': {
        target: 'http://tingapi.ting.baidu.com/v1/restserver/ting',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/baidu_music_api': '/', // rewrite path
        }
      }
    }
  }
}