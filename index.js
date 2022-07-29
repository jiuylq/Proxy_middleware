const express = require('express');
const { createProxyMiddleware, responseInterceptor, RequestHandler  } = require('http-proxy-middleware');
const history = require('connect-history-api-fallback'); // vue history解决
const fs = require('fs');
const path = require('path')
const url = require('url');
const https = require('https');
const { v4: uuidv4 } = require('uuid');
const internalIp = require('internal-ip');

const utils = require('./utils/index.js');

const config = require('./settings/index.js');

const app = express();

//这句代码需要在express.static上面
app.use(history());

// 设置静态资源目录
app.use(express.static(path.join(__dirname, 'public'))) // 默认目录为'/'
app.use('/static', express.static(path.join(__dirname, 'public')))

// --------- 看这里 ↓ -------------------------



let dataLog = {}

function setOptions (opts) {
  let defaultOptions = {
    // target: 'http://cashier-v4.debug.packertec.com',
    // changeOrigin: true, // 虚拟站点必须
    selfHandleResponse: true, // res.end() will be called internally by responseInterceptor()
    onProxyReq: (proxyReq, req, res) => { // web
      let uid = uuidv4();
      proxyReq.setHeader('uid', uid);
      if (opts.setHeader) {
        proxyReq.setHeader('Host', opts.target);
        proxyReq.setHeader('Origin', opts.target);
        proxyReq.setHeader('Referer', opts.target);
      }
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
      dataLog[uid] += 'req_headers: ' + JSON.stringify(req.headers) + "\n"
      dataLog[uid] += 'res_headers: ' + JSON.stringify(proxyRes.headers) + "\n"
      dataLog[uid] += 'response: ' + response.toString() + "\n";
      utils.appendFile("./logs/proxy_log_"+ config.logName + '_' +utils.parseTime(new Date(), '{y}-{m}-{d}')+".log", dataLog[uid]);
      console.log('url', req.url)
      console.log('time', utils.parseTime(new Date()))
      console.log('headers req', JSON.stringify(req.headers))
      console.log('headers res', JSON.stringify(proxyRes.headers))
      console.log("===========================================================")
      delete dataLog[uid];
      return response // manipulate response and return the result
    }),
    // onProxyReqWs: onProxyReqWs,
    // onOpen: onOpen,
    // onClose: onClose,
    // onError: onError
  }
  if (opts.setHeader !== undefined) {
    delete opts.setHeader
  }
  return {
    ...opts,
    ...defaultOptions
  }
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

// 创建代理
Object.keys(config.proxy).forEach(key => {
  const options = setOptions(config.proxy[key])
  const httpProxy = createProxyMiddleware(options)
  // 使用代理
  app.use(key, httpProxy);
})

if (config.https) {
  const httpsoptions = {
    key: fs.readFileSync(path.join(__dirname, config.httpsCert.key)),
    cert: fs.readFileSync(path.join(__dirname, config.httpsCert.cert))
    // 双向验证的添加ca
    // key: fs.readFileSync(path.join(__dirname, './keys/privkey.pem')),
    // cert: fs.readFileSync(path.join(__dirname, './keys/fullchain.pem')),
    // ca: [fs.readFileSync(path.join(__dirname, './keys/fullchain.cer'))]
  }
  if (config.httpsCert.ca && config.httpsCert.ca.length) {
    httpsoptions.ca = config.httpsCert.ca.map(ca_path => {
      return fs.readFileSync(path.join(__dirname, ca_path))
    })
  }
  const httpsServer = https.createServer(httpsoptions, app);
  if (config.port) {
    httpsServer.listen(config.port, config.host, listenCallback(true, config.port));
  } else { // 如果开启了https但没指定端口，则同时启动默认https和http服务
    httpsServer.listen(443, config.host, listenCallback(true));
    app.listen(80, config.host, listenCallback);
  }
} else {
  if (config.port) {
    app.listen(config.port, config.host, listenCallback(false, config.port));
  } else {
    app.listen(80, config.host, listenCallback);
  }
}


function listenCallback(https, port) {
  port = port ? (':' + port) : ''
  let ip = ''
  if (config.host && config.host!=='0.0.0.0') {
    ip = config.host
  } else {
    ip = internalIp.v4.sync()
  }
  console.log("\n")
  console.log('\x1B[32m', https?'https':'http')
  console.log('\x1B[32m', `local：${https?'https':'http'}://localhost${port}`)
  console.log('\x1B[32m', `local：${https?'https':'http'}://${ip + port}`)
  console.log("===========================================================\n")
}