module.exports = {
  configureWebpack: {   // 配置webpack的config
    resolve: {   // 路径相关的问题
      extensions:[],   // 配置文件后缀名
      alias: {  // 起别名
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}
