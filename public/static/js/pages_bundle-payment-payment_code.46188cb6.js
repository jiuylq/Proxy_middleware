(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_bundle-payment-payment_code"],{"019c":function(e,t,r){"use strict";r.r(t);var n=r("14cf"),o=r("79e7");for(var a in o)"default"!==a&&function(e){r.d(t,e,(function(){return o[e]}))}(a);r("b3d7");var i,u=r("f0c5"),c=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,"66140864",null,!1,n["a"],i);t["default"]=c.exports},"14cf":function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){return n}));var n={uqrcode:r("5c48").default},o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"payment_code"},[n("v-uni-view",{staticClass:"container ls-card"},[n("v-uni-view",{staticClass:"header xxl f-w-500 white flex flex-center"},[e._v("朴食健康小程序付款码")]),n("v-uni-view",{staticClass:"section bg-white flex flex-col flex-center"},[n("v-uni-view",{staticClass:"md normal m-b-15"},[e._v("向商家展示付款码进行付款")]),n("v-uni-view",{staticClass:"code"},[e.qrcode?n("uqrcode",{ref:"uQRCode",attrs:{text:e.qrcode,size:185}}):e._e()],1),n("v-uni-view",{staticClass:"refresh nr p-t-20 flex flex-center"},[n("v-uni-view",{staticClass:"muted flex flex-center"},[n("v-uni-image",{attrs:{src:r("e189")}}),n("v-uni-text",{staticClass:"m-l-10"},[e._v("付款码")])],1),n("v-uni-view",{staticClass:"primary m-l-20",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.generateEaccountCode()}}},[e._v("刷新")])],1)],1)],1)],1)},a=[]},"358c":function(e,t,r){var n=r("6397");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=r("4f06").default;o("3f5e12bc",n,!0,{sourceMap:!1,shadowMode:!1})},"36cd":function(e,t,r){"use strict";var n=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.getApicardEnable=t.queryOrderInfo=t.getThirdSetting=t.thirdLogin=t.createApiThirdRecharge=t.getApiCardUnbind=t.getApiCardLoss=t.getApiCancelLogoutRecord=t.getApiAddLogoutRecord=t.getApiLogoutRecord=t.apiGetUserInfoList=t.getApiUserSwitchFacepay=t.getApiUploadUserFace=t.getApiUploadFileGetOssToken=t.getApiUserWalletList=t.apiReservationGetOrderPay=t.apiGetPayMethodList=t.getApiGenerateEaccountCode=t.apiGetCanteenList=t.apiReservationOrderCreate=t.apiProjectList=t.apiMonthReservationOrderDetailInfo=t.apiMonthReservationOrder=t.apiGetWechatUserInfo=t.apiGetReservationStallFood=t.apiGenerateEaccountCode=t.apiCreateCardInfo=t.apiCollectionReservationOrder=t.apiCardUserOrWechatUserInfoSave=t.apiBindProjectPoint=t.apiQueryUserinfo=t.getApiRechargeOrderQuery=t.getApiRechargeOrderCreate=t.getApiRechargeGetSettings=t.getApiRechargeWalletList=void 0;var o=n(r("3c62")),a=function(e){return o.default.post("/booking/recharge/wallet_list",e)};t.getApiRechargeWalletList=a;var i=function(e){return o.default.post("/booking/recharge/get_settings",e)};t.getApiRechargeGetSettings=i;var u=function(e){return o.default.post("/booking/recharge/order_create",e)};t.getApiRechargeOrderCreate=u;var c=function(e){return o.default.post("/booking/recharge/order_query",e)};t.getApiRechargeOrderQuery=c;var s=function(e){return o.default.post("/booking/login/query_userinfo",e)};t.apiQueryUserinfo=s;var d=function(e){return o.default.post("/booking/user/bind_project_point",e)};t.apiBindProjectPoint=d;var p=function(e){return o.default.post("/booking/user/card_user_or_wechat_user_info_save",e)};t.apiCardUserOrWechatUserInfoSave=p;var f=function(e){return o.default.post("/booking/reservation/collection_reservation_order",e)};t.apiCollectionReservationOrder=f;var l=function(e){return o.default.post("/booking/user/create_card_info",e)};t.apiCreateCardInfo=l;var g=function(e){return o.default.post("/booking/user/generate_eaccount_code",e)};t.apiGenerateEaccountCode=g;var v=function(e){return o.default.post("/booking/reservation/get_reservation_stall_food",e)};t.apiGetReservationStallFood=v;var _=function(e){return o.default.post("/booking/user/get_wechat_user_info",e)};t.apiGetWechatUserInfo=_;var h=function(e){return o.default.post("/booking/reservation/month_reservation_order",e)};t.apiMonthReservationOrder=h;var b=function(e){return o.default.post("/booking/reservation/month_reservation_order_detail_info",e)};t.apiMonthReservationOrderDetailInfo=b;var A=function(e){return o.default.post("/booking/user/project_list",e)};t.apiProjectList=A;var k=function(e){return o.default.post("/booking/reservation/reservation_order_create",e)};t.apiReservationOrderCreate=k;var y=function(e){return o.default.post("/booking/user/get_canteen_list",e)};t.apiGetCanteenList=y;var C=function(e){return o.default.post("/booking/user/generate_eaccount_code",e)};t.getApiGenerateEaccountCode=C;var m=function(e){return o.default.post("/booking/user/get_pay_method_list",e)};t.apiGetPayMethodList=m;var O=function(e){return o.default.post("/booking/reservation/reservation_order_pay",e)};t.apiReservationGetOrderPay=O;var L=function(e){return o.default.post("/booking/user/get_user_wallet_list",e)};t.getApiUserWalletList=L;var w=function(e){return o.default.post("/booking/upload_file/get_oss_token",e)};t.getApiUploadFileGetOssToken=w;var G=function(e){return o.default.post("/booking/user/upload_user_face",e)};t.getApiUploadUserFace=G;var R=function(e){return o.default.post("/booking/user/switch_facepay",e)};t.getApiUserSwitchFacepay=R;var U=function(e){return o.default.post("/booking/user/get_user_info_list",e)};t.apiGetUserInfoList=U;var x=function(e){return o.default.post("/booking/user/logout_record",e)};t.getApiLogoutRecord=x;var S=function(e){return o.default.post("/booking/user/add_logout_record",e)};t.getApiAddLogoutRecord=S;var I=function(e){return o.default.post("/booking/user/cancel_logout_record",e)};t.getApiCancelLogoutRecord=I;var B=function(e){return o.default.post("/booking/user/card_loss",e)};t.getApiCardLoss=B;var D=function(e){return o.default.post("/booking/user/card_unbind",e)};t.getApiCardUnbind=D;var E=function(e){return o.default.post("/booking/user_order/order_create",e)};t.createApiThirdRecharge=E;var P=function(e){return o.default.post("/booking/user_order/h5_login_verify",e)};t.thirdLogin=P;var j=function(e){return o.default.post("/booking/user_order/get_settings",e)};t.getThirdSetting=j;var Q=function(e){return o.default.post("/booking/user_order/get_order_info",e)};t.queryOrderInfo=Q;var q=function(e){return o.default.post("/booking/user/card_enable",e)};t.getApicardEnable=q},6397:function(e,t,r){var n=r("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/* 颜色变量 */.payment_code[data-v-66140864]{padding:%?40?%}.payment_code .ls-card[data-v-66140864]{border-radius:%?20?%}.payment_code .container[data-v-66140864]{width:100%;height:%?760?%;overflow:hidden}.payment_code .container .header[data-v-66140864]{height:%?108?%;letter-spacing:%?4?%;background:#38ccc6 linear-gradient(90deg,#a9fed5,#11e69e 0,#11e69e 0,#11e6c5 100%,#11e6c5 0)}.payment_code .container .section[data-v-66140864]{height:%?652?%}.payment_code .container .section .code[data-v-66140864]{width:185px;height:185px;position:relative}.payment_code .container .section .code .invalid[data-v-66140864]{width:100%;height:100%;left:0;top:0;z-index:100;padding:%?138?% %?86?%;font-weight:700;color:#57595c;position:absolute;opacity:.8;background-color:#fff}.payment_code .container .section .refresh uni-image[data-v-66140864]{width:%?24?%;height:%?24?%}',""]),e.exports=t},"79e7":function(e,t,r){"use strict";r.r(t);var n=r("c9b7"),o=r.n(n);for(var a in n)"default"!==a&&function(e){r.d(t,e,(function(){return n[e]}))}(a);t["default"]=o.a},b3d7:function(e,t,r){"use strict";var n=r("358c"),o=r.n(n);o.a},c9b7:function(e,t,r){"use strict";var n=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r("36cd"),a=n(r("da0c")),i={data:function(){return{isInvalid:!1,screenBrightness:"",userinfo:{},qrcode:""}},methods:{generateEaccountCode:function(){var e=this;this.$showLoading({title:"获取中....",mask:!0}),(0,o.apiGenerateEaccountCode)({company_id:this.userinfo.company_id,person_no:this.userinfo.person_no}).then((function(t){uni.hideLoading(),0==t.code?e.qrcode=t.data:uni.$u.toast(t.msg)})).catch((function(e){uni.hideLoading(),uni.$u.toast(e.data.msg)}))}},onLoad:function(){this.userinfo=a.default.get("userInfo"),this.generateEaccountCode()},onUnload:function(){}};t.default=i},e189:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAyCAYAAAAayliMAAAD7ElEQVR4Ae2aA7BDSwyG82zbtm3btm3bZm83u8lmn23btm3btpWZi/O23Z7emfZ130y/mVzfs/lPs2k2OdBKvPdjGQqLIcnm6MIB6OSEf8z2fj7IkmxnmZdj5ikgF3qYp0cX9kSSay3JR0jyV5lZkp+Q5DEkXzUky0InQJK1kfwd5Q6XmyH/ArIcgnjKBNBujPOrIckTunAb7EdkqSDi6JCAiCZGlnuQ5DXDYXtolspJJ42LJBeXOPAakr/GUDjKsOxonF8DKayEHFZHF7ZFlsOQ5DK94yXX+cRw2DDxyl9R/FtoBnUASb5OLPaeblJDJ80LgwBRZrfkD0aSV9JCwmm1vsjDgxJgKRyautuWZJtTTjllmBaE5frI8lT9/SEP/LPGiNBLvO8aO+/kpLrOsxx9+OGHDwktxpDshSS/1VnzZSIatTeE7k0KKHfev1OlMD+0kar301qSJ+uIeLVX5KmlAjSl1bnAgyeccMYo/2GavqrGBye3WpKbGgpwzi9Vx/n7OvRec2lZ6oUiulmQ5IcoE7x+6aWXDgUdQl/5pgVYDhfFf1AVmQQ6SKVSGQlJvikVUCWarTbm/CaQAci8eKkAfXuOUuU9kBGpKgAUwzxL/AtNZ5ARWqonBSCFc6Ny9ybIEOv8mQkB8vu/BHi/DGSInj1SAn4tHjb++uuvISBTkOT5GgF6zEOSj/+xd631i0LGIMoMvRXst1rNQh/GmBH+KdCGhv8Jxpw+JnTp0qVLly59hBDGUIOciU6PxfpiIz31qFnmtSBjeryfrLdr8al2wPsE/FEskLSsyLiYu7voa10BlmRTyBDtXqfK6e+jXzwDGWIonBj5+UpKwF+5ldWHn3XW8EjycxQp26UEqL2cWeyfHPn3rfarGghQ87tncoiZvcY3F3YBpaEANZQZoIPoXUaW9yO/3gUlJSCyz3pb2x3BktxZuz9lnlIB8RCOiIaD9lPa6tTZBChpAeFp48LldYQ8d6LI+B1sr6vdCEpDASwvptRrOCGFpaGNMPOE8RysN2U+BCmiEPo6MY8qXqynHSGF5LdMdKLvazjSimYCn2tLu/C7yxJ7412d07ZCiHGyfLHGiexSKCP6h5+1mGtyUqn2ITqxyLwQDALnTppZh3oNh+Ys+za7YT4v/ONb2lpM9OifKxn5vP2PXW+dHGdJdtbSXAfdOt1H57fW2Vvv3nqm0XV0D0SpsuxuyILqnNbZVTppjiZGoR/qQm2wd5H8DtBuNMQs+V2R5NkWOf64Pppw+OGXDtuJ8c9CyFLRNBclg0b2tb7DakgZ5rnzOu5xWFUfQdAHPpC8NyRO63hNBPpz5LCC5npoEX8De8mempdHrjAAAAAASUVORK5CYII="}}]);