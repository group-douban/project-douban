const path = require('path')

module.exports = {
    chainWebpack(config) {
        config.resolve.alias
          .set('@', path.resolve(__dirname, './src/'))
          .set('@c', path.resolve(__dirname, './src/components/'))
          .set('@u', path.resolve(__dirname, './src/utils'))
          .set('@v', path.resolve(__dirname, './src/views'))
          .set('@a', path.resolve(__dirname, './src/assets'))
          /* .set('#', path.resolve(__dirname, './public/'))
          .set('#i', path.resolve(__dirname, './public/images')) */
      },
    devServer: {
        // 反向代理: http-proxy-middleware
        proxy: {
          // 暗号: 当在浏览器地址栏里输入/api字符串的时候，http-proxy-middleware会将请求拦下来
          '/apia': {
            target: 'https://frodo.douban.com',
            // 将localhost:8080 请求 替换为目标地址
            changeOrigin: true,
            pathRewrite: {
              '^/apia': '' 
              // 会识别你的路径中api，然后将你的api暗号去掉，再在上面target地址后拼接
              // /api/mmdb/movie/v2/list/hot.json -> /mmdb/movie/v2/list/hot.json
            }
          } 
        }
      },
}