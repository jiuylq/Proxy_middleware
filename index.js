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

// --------- 看这里 ↓ -------------------------


let dataLog = {}
const options = {
  target: 'http://cashier-v4.debug.packertec.com',
  changeOrigin: true, // 虚拟站点必须
  selfHandleResponse: true, // res.end() will be called internally by responseInterceptor()
  onProxyReq: (proxyReq, req, res) => { // web
    let uid = uuidv4();
    proxyReq.setHeader('uid', uid);
    req.headers.uid = uid
    dataLog[uid] = "\n"+"==========================================================="+"\n\n"
    dataLog[uid] += "uid: "+ uid +"\n";
    dataLog[uid] += "time: "+ utils.parseTime(new Date()) +"\n";
    let params = []
    req.on('data', chunk => {
        params.push(chunk)
      });
      req.on('end', () => {
        try{
          dataLog[uid] += 'params: ' + params.toString() + "\n"
        }catch(e){
          console.log('err')
          //TODO handle the exception
        }
        
      })
    // or log the req
  },
  onProxyRes: responseInterceptor(async (responseBuffer, proxyRes, req, res) => {
    // console.log(req.headers.uid)
    let uid = req.headers.uid
    const response = responseBuffer.toString('utf8'); // convert buffer to string
    const parsedUrl = url.parse(req.url)
    dataLog[uid] += 'url: ' + parsedUrl.path + "\n"
    dataLog[uid] += 'method: ' + req.method + "\n"
    dataLog[uid] += 'protocol: ' + req.protocol + "\n"
    dataLog[uid] += 'res_headers: ' + JSON.stringify(req.headers) + "\n"
    dataLog[uid] += 'response: ' + response.toString() + "\n";
    utils.appendFile("./logs/proxy_log_"+utils.parseTime(new Date(), '{y}-{m}-{d}')+".log", dataLog[uid]);
    delete dataLog[uid];
    return response // manipulate response and return the result
  }),
  // onProxyReqWs: onProxyReqWs,
  // onOpen: onOpen,
  // onClose: onClose,
  // onError: onError
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

// --------- 看这里 ↑ -------------------------

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