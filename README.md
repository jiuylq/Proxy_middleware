# Proxy_middleware
web代理 Proxy_middleware

### 使用指南

**环境准备**

```bash
# 依赖安装
npm install

# 启动服务
node index.js
```



#### 结合pm2一起使用

```bash
# 安装pm2
npm install -g pm2

# 开启代理
pm2 start ecosystem.config.js

# 查看启动的代理
pm2 list

# 停止(id,name是在pm2 list中可以看到)
pm2 stop id
or
pm2 stop name 

# 删除pm2中的服务列表
pm2 delete id
or
pm2 delete name

# 重启服务
pm2 restart 0

# 重启所有
pm2 reload all
```

### 目录结构

```bash
Proxy_middleware
  // 源码目录
    |- logs        // 日志文件，所有代理的请求都会得到对应的日志包含请求的数据
    |- settings    // 全局设置，可设置代理服务的端口和代理的目标等
    |- public      // 打包后的html文件
    |- utils 	  // 工具脚本
    |- ecosystem.config.js // pm2配置
    |- index.js   // 主要入口
 	   ...
```

