module.exports = {
  port: 9999,
  https: false,
  httpsCert: {
    key: '',
    cert: '',
    ca: []
  },
  useHistory: true, // 使用history模式
  useStatic: false, // 是否使用本地服务
  staticProxy: {// 静态写死只有一个
    target: 'http://192.168.31.227:8080', // 本地项目跑的地址
    path: '/'
  },
  // host: '0.0.0.0', // default 0.0.0.0
  logName: 'v4_h5_dev',
  proxy: {
    '/api': {
      target: 'https://test.com',
      setHeader: true, // 是否设置请求头
      secure: true,
      // ws: true, // 代理websocket
      changeOrigin: true, // 虚拟站点必须
      // pathRewrite: {
      //   '^/api': ''
      // },
      // router: {
      //   // when request.headers.host == 'dev.localhost:3000',
      //   // override target 'http://www.example.org' to 'http://localhost:8000'
      //   'dev.localhost:3000': 'http://localhost:8000',
      //   'integration.localhost:3000' : 'http://localhost:8001',  // host only
      //   'staging.localhost:3000'     : 'http://localhost:8002',  // host only
      //   'localhost:3000/api'         : 'http://localhost:8003',  // host + path
      //   '/rest'                      : 'http://localhost:8004'   // path only
      // },
    }
  }  
}