const express = require('express');
const { createProxyMiddleware, responseInterceptor, RequestHandler  } = require('http-proxy-middleware');
const history = require('connect-history-api-fallback'); // vue history解决
const fs = require('fs');
const path = require('path')
const url = require('url');
const { v4: uuidv4 } = require('uuid');

const utils = require('./utils/index.js');

const config = require('./settings/config.js');

const app = express();

//这句代码需要在express.static上面
app.use(history());

// 设置静态资源目录
app.use(express.static(path.join(__dirname, 'public'))) // 默认目录为'/'
app.use('/static', express.static(path.join(__dirname, 'public')))

// uid用于区别并发请求的数据
const { v4: uuidv4 } = require('uuid');

// --------- 看这里 ↓ -------------------------

// 凡是以 '/prod-api' 开头的都认定为 xhr 请求 
// app.use('api', createProxyMiddleware({
//   target: 'https://api.juejin.cn', // 这一行是你的服务端地址
//   changeOrigin: true,
//   // pathRewrite: {
//   //   '^/prod-api': '' // 在向服务端发起请求时，去掉标识xhr的前缀
//   // }
// }));

// // 其他请求则认定为前端资源请求，如：html/js/css 等
// app.use('/', createProxyMiddleware({
//   target: 'https://juejin.cn/',
//   changeOrigin: true
// }));
// --------- 看这里 ↑ -------------------------
let dataLog = {}
const options = {
  // target: 'http://packer-buffet.debug.packertec.com', // 目标地址
  // target: 'http://yst.view868.vip/funny-booking', // 目标地址
  // target: 'http://192.168.50.144:8080', // 目标地址
  // target: 'http://192.168.50.29:8000', // tree
  // target: 'https://background.debug.packertec.com', // background debug
  target: 'http://cashier-v4.debug.packertec.com',
  // target: 'http://wechat-app.debug.packertec.com',
  changeOrigin: true, // 虚拟站点必须
  // ws: true, // 代理websocket
  // pathRewrite: {
  //   '^/api/': '/api/', // 重写路径
  // },
  router: {
    // when request.headers.host == 'dev.localhost:3000',
    // override target 'http://www.example.org' to 'http://localhost:8000'
    // 'dev.localhost:3000': 'http://localhost:8000'
  //   'integration.localhost:3000' : 'http://localhost:8001',  // host only
  //   'staging.localhost:3000'     : 'http://localhost:8002',  // host only
  //   'localhost:3000/api'         : 'http://localhost:8003',  // host + path
  //   '/rest'                      : 'http://localhost:8004'   // path only
  // }
  },
  selfHandleResponse: true, // res.end() will be called internally by responseInterceptor()
  onProxyReq: onProxyReq,
  // onProxyRes: onProxyRes,
  onProxyRes: responseInterceptor(async (responseBuffer, proxyRes, req, res) => {
    const response = responseBuffer.toString('utf8'); // convert buffer to string
    const parsedUrl = url.parse(req.url)
    dataLog += 'url: ' + parsedUrl.path + "\n"
    dataLog += 'method: ' + req.method + "\n"
    dataLog += 'protocol: ' + req.protocol + "\n"
    dataLog += 'res_headers: ' + JSON.stringify(req.headers) + "\n"
    dataLog += 'response: ' + response.toString() + "\n";
    utils.appendFile("./logs/proxy_log_"+utils.parseTime(new Date(), '{y}-{m}-{d}')+".log", dataLog) 
    return response // manipulate response and return the result
  }),
  // onProxyReqWs: onProxyReqWs,
  // onOpen: onOpen,
  // onClose: onClose,
  // onError: onError
}

// web
function onProxyReq(proxyReq, req, res) {
  res.setHeader('x-proxyReq', 'proxyReq');
  dataLog = "\n"+"==========================================================="+"\n\n"
  dataLog += "time: "+ utils.parseTime(new Date())+"\n";
  let params = []
  req.on('data', chunk => {
      params.push(chunk)
    });
    req.on('end', () => {
      try{
        dataLog += 'params: ' + params.toString() + "\n"
      }catch(e){
        console.log('err')
        //TODO handle the exception
      }
      
    })
  // or log the req
}
function onProxyRes(proxyRes, req, res) {
  proxyRes.headers['content-type'] = 'onProxyRes'; // add new header to response
  // delete proxyRes.headers['x-added']; // remove header from response
  // console.log(proxyRes)
}

// ws
function onProxyReqWs(proxyReq, req, socket, options, head) {
  // add custom header
  proxyReq.setHeader('X-Special-Proxy-Header', 'foobar');
}
function onOpen(proxySocket) {
  // listen for messages coming FROM the target here
  // proxySocket.on('data', hybiParseAndLogMessage);
  console.log(proxySocket)
}
function onClose(res, socket, head) {
  // view disconnected websocket connections
  console.log('Client disconnected');
}

function onError(err, req, res) {
  res.writeHead(500, {
    'Content-Type': 'text/plain',
  });
  res.end({err:'error'});
}

const httpProxy = createProxyMiddleware(options)



// 设置跨域访问
app.all("*", function (req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers", "*"); // "Origin, X-Requested-With, Content-Type, Accept"
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  //修改程序信息与版本
  // res.header('X-Powered-By', ' 3.2.1');
  //内容类型
  // res.header('Content-Type', 'application/json;charset=utf-8');

  if (req.method.toLowerCase() == "options") res.send(200);
  //让options尝试请求快速结束
  else next();
});


// 使用代理
app.use('/api', httpProxy);

app.listen(3000);