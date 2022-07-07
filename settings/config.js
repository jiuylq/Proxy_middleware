module.exports = {
  port: 80,
  https: true,
  // host: '0.0.0.0', // default 0.0.0.0
  proxy: {
    '/api': {
      target: 'http://cashier-v4.debug.packertec.com',
      // ws: true, // 代理websocket
      changeOrigin: true // 虚拟站点必须
      // pathRewrite: {
      //   '/api': '/'
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