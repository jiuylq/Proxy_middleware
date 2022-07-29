# Proxy_middleware
web代理 Proxy_middleware

### 使用指南

**环境准备**

```bash
# 依赖安装
npm install

# 启动服务
node index.js

# 打包后的前端静态文件请放到public，启动服务即可访问
```



#### 结合pm2一起使用

```bash
# 安装pm2
npm install -g pm2

# 开启代理，使用ecosystem.config.js的配置可以自动监听当前代理的配置和代码的变化并自动重启
pm2 start ecosystem.config.js
#or
pm2 start index.js

# 查看启动的代理
pm2 list

# 停止(id,name是在pm2 list中可以看到)
pm2 stop id
#or
pm2 stop name 

# 删除pm2中的服务列表
pm2 delete id
#or
pm2 delete name

# 重启服务
pm2 restart 0

# 重启所有
pm2 reload all

# 监视代理情况
pm2 monit
```

### 目录结构

```bash
Proxy_middleware
	|-APK 安卓包
		|- Hosts Go_2.1.9.apk // 安卓无root配置host，使用的是开启vpn的方式进行代理
  // 源码目录
    |- logs        // 日志文件，所有代理的请求都会得到对应的日志包含请求的数据
    |- settings    // 全局设置，可设置代理服务的端口和代理的目标等
    |- public      // 打包后的html文件
    |- utils 	  // 工具脚本
    |- ecosystem.config.js // pm2配置
    |- index.js   // 主要入口
 	   ...
 	   
# settings参数说明
{
  port: 800, // 启动服务的端口，如不填写则默认80，https默认443
  // https: true, // 是否开启https服务，开启后台如果不填端口会默认把http的端口也开启
  // httpsCert: { // https证书
  //   key: '',
  //   cert: '',
  //   ca: [],
  // },
  // host: '0.0.0.0', // default 0.0.0.0，自定义host
  logName: 'v4_h5', // 日志文件的前缀名，日志文件包含请求头，请求参数，响应报文等，文件上传file这种不会包含在日志中
  proxy: { // 代理配置，可配置多个
    '/api': {
      target: 'https://v4.cdtlas.com', // 代理的地址
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
更多配置请参考http-proxy-middleware
```

