(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-health_center-health_center~pages-index-index~pages-login-login~pages-login-mp_login~pages-log~276d6aee"],{"0ab4":function(e,t,r){"use strict";var n=r("4ea4");r("c975");var o=n(r("da0c")),i="https://h5-v4.debug.packertec.com";i=window.location.origin;var a={development:"https://h5-v4.debug.packertec.com",production:i},s=a["production"];if(location&&location.href.indexOf("debug")>-1){var u=o.default.get("BASEURL");u&&(s=u)}e.exports={version:"1.0.0",baseURL:s}},"3c62":function(e,t,r){"use strict";var n=r("4ea4");r("c975"),r("d3b7"),r("ac1f"),r("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r("5530")),i=n(r("bca5")),a=n(r("f5d1")),s=r("8123"),u=(r("8527"),r("0ab4")),c=(r("8b30"),r("2b62")),f=(n(r("da0c")),"");console.log("platform",f);var p=i.default.create({withCredentials:!0,baseURL:u.baseURL+"/api/",timeout:3e4,crossDomain:!0,headers:{"content-type":"application/json"}});p.interceptors.request.use((function(e){return a.default.getters.baseUrl&&(e.baseURL=a.default.getters.baseUrl+"/api/"),f&&(e.data=(0,o.default)((0,o.default)({},e.data),{},{ua:f})),(window.location.href.indexOf("recharge")>0||window.location.href.indexOf("payment")>0)&&(e.headers.Referer=window.location.origin),e}),(function(e){console.log(e),Promise.reject(e)})),p.interceptors.response.use((function(e){var t=e.data,r=t.code;t.msg;switch(r){case-1:a.default.dispatch("setLogOut"),"/pages_third/scan/recharge"!==location.pathname&&c.miRouter.replace({path:"/pages/login/login"});default:return e.data}return Promise.reject(e)}),(function(e){return(0,s.toast)({title:"系统错误，请稍候再试"}),console.log("err"+e),Promise.reject(e)}));var d=p;t.default=d},"82da":function(e,t,r){var n=r("23e7"),o=r("ebb5"),i=o.NATIVE_ARRAY_BUFFER_VIEWS;n({target:"ArrayBuffer",stat:!0,forced:!i},{isView:o.isView})},bca5:function(e,t,r){(function(t){r("a4d3"),r("e01a"),r("99af"),r("4160"),r("c975"),r("fb6a"),r("c19f"),r("82da"),r("ace4"),r("f4b3"),r("d3b7"),r("4d63"),r("ac1f"),r("25f0"),r("3ca3"),r("466d"),r("5319"),r("841c"),r("1276"),r("498a"),r("159b"),r("ddb0"),r("2b3d"),r("bf19"),function(t,r){e.exports=r()}(0,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}return r.m=e,r.c=t,r.p="",r(0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){var n=r(2),o=n.utils,i=n.bind,a=n.mergeConfig,s=r(24),u=r(26);function c(e){var t=new u(e),r=i(u.prototype.request,t);return o.extend(r,u.prototype,t),o.extend(r,t),r}var f=c(s);f.Axios=u,f.create=function(e){return c(a(f.defaults,e))},e.exports=f,e.exports.default=f},function(e,t,r){e.exports={utils:r(3),bind:r(4),Axios:r(6),mergeConfig:r(23),dispatchRequest:r(9),buildURL:r(7),settle:r(15),InterceptorManager:r(8)}},function(e,t,r){"use strict";var n=r(4),o=r(5),i=Object.prototype.toString;function a(e){return"[object Array]"===i.call(e)}function s(e){return"[object ArrayBuffer]"===i.call(e)}function u(e){return"undefined"!==typeof FormData&&e instanceof FormData}function c(e){var t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer,t}function f(e){return"string"===typeof e}function p(e){return"number"===typeof e}function d(e){return"undefined"===typeof e}function l(e){return null!==e&&"object"===typeof e}function h(e){return"[object Date]"===i.call(e)}function m(e){return"[object File]"===i.call(e)}function g(e){return"[object Blob]"===i.call(e)}function y(e){return"[object Function]"===i.call(e)}function v(e){return l(e)&&y(e.pipe)}function b(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams}function x(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function w(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function R(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),a(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}function E(){var e={};function t(t,r){"object"===typeof e[r]&&"object"===typeof t?e[r]=E(e[r],t):e[r]=t}for(var r=0,n=arguments.length;r<n;r++)R(arguments[r],t);return e}function S(){var e={};function t(t,r){"object"===typeof e[r]&&"object"===typeof t?e[r]=S(e[r],t):e[r]="object"===typeof t?S({},t):t}for(var r=0,n=arguments.length;r<n;r++)R(arguments[r],t);return e}function j(e,t,r){return R(t,(function(t,o){e[o]=r&&"function"===typeof t?n(t,r):t})),e}e.exports={isArray:a,isArrayBuffer:s,isBuffer:o,isFormData:u,isArrayBufferView:c,isString:f,isNumber:p,isObject:l,isUndefined:d,isDate:h,isFile:m,isBlob:g,isFunction:y,isStream:v,isURLSearchParams:b,isStandardBrowserEnv:w,forEach:R,merge:E,deepMerge:S,extend:j,trim:x}},function(e,t){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},function(e,t){
/*!
       * Determine if an object is a Buffer
       *
       * @author   Feross Aboukhadijeh <https://feross.org>
       * @license  MIT
       */
e.exports=function(e){return null!=e&&null!=e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},function(e,t,r){"use strict";var n=r(3),o=r(7),i=r(8),a=r(9),s=r(23);function u(e){this.defaults=e,this.interceptors={request:new i,response:new i}}u.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=s(this.defaults,e),e.method=e.method?e.method.toLowerCase():"get";var t=[a,void 0],r=Promise.resolve(e);this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));while(t.length)r=r.then(t.shift(),t.shift());return r},u.prototype.getUri=function(e){return e=s(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(e){u.prototype[e]=function(t,r){return this.request(n.merge(r||{},{method:e,url:t}))}})),n.forEach(["post","put","patch"],(function(e){u.prototype[e]=function(t,r,o){return this.request(n.merge(o||{},{method:e,url:t,data:r}))}})),e.exports=u},function(e,t,r){"use strict";var n=r(3);function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var i;if(r)i=r(t);else if(n.isURLSearchParams(t))i=t.toString();else{var a=[];n.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),a.push(o(t)+"="+o(e))})))})),i=a.join("&")}if(i){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},function(e,t,r){"use strict";var n=r(3);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},function(e,t,r){"use strict";var n=r(3),o=r(10),i=r(11),a=r(12),s=r(21),u=r(22);function c(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){c(e),e.baseURL&&!s(e.url)&&(e.url=u(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]}));var t=e.adapter||a.adapter;return t(e).then((function(t){return c(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(c(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},function(e,t,r){"use strict";var n=r(3);e.exports=function(e,t,r){return n.forEach(r,(function(r){e=r(e,t)})),e}},function(e,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,r,n){"use strict";var o=n(3),i=n(13),a={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function u(){var e;return("undefined"!==typeof t&&"[object process]"===Object.prototype.toString.call(t)||"undefined"!==typeof XMLHttpRequest)&&(e=n(14)),e}var c={adapter:u(),transformRequest:[function(e,t){return i(t,"Accept"),i(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(s(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};o.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),o.forEach(["post","put","patch"],(function(e){c.headers[e]=o.merge(a)})),e.exports=c},function(e,t,r){"use strict";var n=r(3);e.exports=function(e,t){n.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}},function(e,t,r){"use strict";var n=r(3),o=r(15),i=r(7),a=r(18),s=r(19),u=r(16);e.exports=function(e){return new Promise((function(t,c){var f=e.data,p=e.headers;n.isFormData(f)&&delete p["Content-Type"];var d=new XMLHttpRequest;if(e.auth){var l=e.auth.username||"",h=e.auth.password||"";p.Authorization="Basic "+btoa(l+":"+h)}if(d.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in d?a(d.getAllResponseHeaders()):null,n=e.responseType&&"text"!==e.responseType?d.response:d.responseText,i={data:n,status:d.status,statusText:d.statusText,headers:r,config:e,request:d};o(t,c,i),d=null}},d.onabort=function(){d&&(c(u("Request aborted",e,"ECONNABORTED",d)),d=null)},d.onerror=function(){c(u("Network Error",e,null,d)),d=null},d.ontimeout=function(){c(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",d)),d=null},n.isStandardBrowserEnv()){var m=r(20),g=(e.withCredentials||s(e.url))&&e.xsrfCookieName?m.read(e.xsrfCookieName):void 0;g&&(p[e.xsrfHeaderName]=g)}if("setRequestHeader"in d&&n.forEach(p,(function(e,t){"undefined"===typeof f&&"content-type"===t.toLowerCase()?delete p[t]:d.setRequestHeader(t,e)})),e.withCredentials&&(d.withCredentials=!0),e.responseType)try{d.responseType=e.responseType}catch(y){if("json"!==e.responseType)throw y}"function"===typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){d&&(d.abort(),c(e),d=null)})),void 0===f&&(f=null),d.send(f)}))}},function(e,t,r){"use strict";var n=r(16);e.exports=function(e,t,r){var o=r.config.validateStatus;!o||o(r.status)?e(r):t(n("Request failed with status code "+r.status,r.config,null,r.request,r))}},function(e,t,r){"use strict";var n=r(17);e.exports=function(e,t,r,o,i){var a=new Error(e);return n(a,t,r,o,i)}},function(e,t){"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,r){"use strict";var n=r(3),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,i,a={};return e?(n.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=n.trim(e.substr(0,i)).toLowerCase(),r=n.trim(e.substr(i+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([r]):a[t]?a[t]+", "+r:r}})),a):a}},function(e,t,r){"use strict";var n=r(3);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=o(window.location.href),function(t){var r=n.isString(t)?o(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return function(){return!0}}()},function(e,t,r){"use strict";var n=r(3);e.exports=n.isStandardBrowserEnv()?function(){return{write:function(e,t,r,o,i,a){var s=[];s.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),n.isString(o)&&s.push("path="+o),n.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(e,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,r){"use strict";var n=r(3);e.exports=function(e,t){t=t||{};var r={};n.forEach(["url","method","params","data"],(function(e){"undefined"!==typeof t[e]&&(r[e]=t[e])})),n.forEach(["headers","auth","proxy"],(function(o){n.isObject(t[o])?r[o]=n.deepMerge(e[o],t[o]):"undefined"!==typeof t[o]?r[o]=t[o]:n.isObject(e[o])?r[o]=n.deepMerge(e[o]):"undefined"!==typeof e[o]&&(r[o]=e[o])}));var o=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];return n.forEach(o,(function(n){"undefined"!==typeof t[n]?r[n]=t[n]:"undefined"!==typeof e[n]&&(r[n]=e[n])})),r}},function(e,t,r){var n={adapter:r(25),validateStatus:function(e){return e>=200&&e<300},dataType:"json",responseType:"text",sslVerify:!0};e.exports=n},function(e,t,r){var n=r(2),o=n.buildURL,i=n.settle;e.exports=function(e){return new Promise((function(t,r){console.log("uni.request"),uni.request({method:e.method.toUpperCase(),url:o(e.url,e.params,e.paramsSerializer),header:e.headers,data:e.data,dataType:e.dataType,responseType:e.responseType,sslVerify:e.sslVerify,complete:function(n){n={data:n.data,status:n.statusCode,errMsg:n.errMsg,header:n.header,config:e},i(t,r,n)}})}))}},function(e,t,r){var n=r(2),o=n.Axios,i=n.utils,a=n.InterceptorManager;function s(e){console.log("UniAxios"),o.call(this,e),this.interceptors.first=new a,this.interceptors.last=new a}s.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{};var t=Promise.resolve(e);this.interceptors.first.forEach((function(e){t=t.then(e.fulfilled,e.rejected)}));var r=this;t=t.then((function(e){return o.prototype.request.call(r,e)}));return this.interceptors.last.forEach((function(r){t=t.then((function(t){return r.fulfilled(e),t}),(function(t){return r.fulfilled(e),Promise.reject(t)}))})),t},i.forEach(["get","delete","connect","head","options","trace"],(function(e){s.prototype[e]=function(t,r){return this.request(i.merge(r||{},{method:e,url:t}))}})),i.forEach(["post","put"],(function(e){s.prototype[e]=function(t,r,n){return this.request(i.merge(n||{},{method:e,url:t,data:r}))}})),e.exports=s}])}))}).call(this,r("4362"))}}]);