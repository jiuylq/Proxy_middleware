(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_bundle-payment-payment"],{"000a":function(t,e,a){var i=a("d1af");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("2aef3c1c",i,!0,{sourceMap:!1,shadowMode:!1})},"05ff":function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var i={payWayCard:a("317d").default,priceFormat:a("1c7e3").default,uCountDown:a("485d").default,uModal:a("85fc").default},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"payment"},[a("v-uni-view",{staticClass:"header bg-primary lg white flex col-center row-between"},[a("v-uni-view",{},[t._v("取餐方式")]),a("v-uni-view",{staticClass:"lg"},["on_scene"==t.takeMealType?a("v-uni-text",[t._v("堂食")]):"waimai"==t.takeMealType?a("v-uni-text",[t._v("外卖")]):"bale"==t.takeMealType?a("v-uni-text",[t._v("堂食自提")]):"cupboard"==t.takeMealType?a("v-uni-text",[t._v("取餐柜")]):t._e()],1)],1),a("v-uni-view",{staticClass:"section"},[a("pay-way-card",{attrs:{showPay:t.showPay},on:{select:function(e){arguments[0]=e=t.$handleEvent(e),t.selectPayWay.apply(void 0,arguments)},showPayClose:function(e){arguments[0]=e=t.$handleEvent(e),t.showPayClose.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"list m-t-20 ls-card bg-white md"},[a("v-uni-view",{staticClass:"item bb flex row-between"},[a("v-uni-view",{staticClass:"md muted"},[t._v("订单金额")]),a("price-format",{attrs:{price:t.orderInfo.total_fee,size:36}})],1),a("v-uni-view",{staticClass:"item bb flex row-between"},[a("v-uni-view",{staticClass:"md muted"},[t._v("线上支付金额")]),a("price-format",{attrs:{price:t.orderInfo.online_total_fee,size:36}})],1),a("v-uni-view",{staticClass:"offline flex row-between"},[a("v-uni-view",{staticClass:"md muted"},[a("v-uni-text",[t._v("线下支付金额")]),a("v-uni-view",{staticClass:"tips xxs"},[t._v("线下支付的订单不参与线上优惠活动")])],1),a("price-format",{attrs:{price:t.orderInfo.offline_total_fee,size:36}})],1)],1),a("v-uni-view",{staticClass:"list m-t-20 ls-card bg-white md"},[a("v-uni-view",{staticClass:"item bb flex row-between"},[a("v-uni-view",{staticClass:"md muted"},[t._v("就餐人：")]),a("v-uni-view",{staticClass:"md black"},[t._v(t._s(t.orderInfo.payer_name))])],1)],1),a("v-uni-view",{staticClass:"list m-t-20 ls-card bg-white md"},[a("v-uni-view",{staticClass:"item flex row-between"},[a("v-uni-view",{staticClass:"md muted"},[t._v("备注：")]),a("v-uni-view",{staticClass:"flex flex-center text-right"},[a("v-uni-input",{staticClass:"m-r-10",attrs:{type:"text",placeholder:"例: 不要香菜, 谢谢"},model:{value:t.remark,callback:function(e){t.remark=e},expression:"remark"}})],1)],1)],1),a("v-uni-view",{staticClass:"list m-t-20 ls-card bg-white md"},[a("v-uni-view",{staticClass:"item flex row-between"},[a("v-uni-view",{staticClass:"md muted"},[t._v("支付时间：")]),a("v-uni-view",{staticClass:"flex flex-center text-right"},[a("u-count-down",{attrs:{time:9e5,format:"DD:HH:mm:ss",autoStart:!0,millisecond:!0},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onTimeChange.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"time md"},[a("v-uni-text",{staticClass:"time__item"},[t._v("剩余")]),a("v-uni-text",{staticClass:"time__item"},[t._v(t._s(t.timeData.minutes)+" 分")]),a("v-uni-text",{staticClass:"time__item"},[t._v(t._s(t.timeData.seconds)+" 秒")]),a("v-uni-text",{staticClass:"time__item"},[t._v("自动关闭")])],1)],1)],1)],1)],1)],1),a("v-uni-view",{staticClass:"footer bg-white"},[a("v-uni-view",{staticClass:"footer--warpper flex row-between"},[a("v-uni-view",{staticClass:"muted flex col-center"},[a("v-uni-text",{staticClass:"m-r-20 md"},[t._v("需支付")]),a("v-uni-view",{staticClass:"black"},[a("price-format",{attrs:{weight:500,price:t.orderInfo.total_fee,size:36}})],1)],1),a("v-uni-view",{staticClass:"submit-btn white flex flex-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlePrepay.apply(void 0,arguments)}}},[t._v("支付")])],1)],1),a("u-modal",{attrs:{show:t.showTimeEnd,title:"提示"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.timeEndConfirm.apply(void 0,arguments)}}},[a("v-uni-view",{attrs:{slots:"default"}},[t._v("支付时间已结束,请重新提交订单")])],1)],1)},n=[]},"0b2d":function(t,e,a){"use strict";function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,a="".concat(t);while(a.length<e)a="0".concat(a);return a}a("c975"),a("ac1f"),a("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.parseTimeData=d,e.parseFormat=u,e.isSameSecond=c;var o=1e3,n=60*o,r=60*n,s=24*r;function d(t){var e=Math.floor(t/s),a=Math.floor(t%s/r),i=Math.floor(t%r/n),d=Math.floor(t%n/o),u=Math.floor(t%o);return{days:e,hours:a,minutes:i,seconds:d,milliseconds:u}}function u(t,e){var a=e.days,o=e.hours,n=e.minutes,r=e.seconds,s=e.milliseconds;return-1===t.indexOf("DD")?o+=24*a:t=t.replace("DD",i(a)),-1===t.indexOf("HH")?n+=60*o:t=t.replace("HH",i(o)),-1===t.indexOf("mm")?r+=60*n:t=t.replace("mm",i(n)),-1===t.indexOf("ss")?s+=1e3*r:t=t.replace("ss",i(r)),t.replace("SSS",i(s,3))}function c(t,e){return Math.floor(t/1e3)===Math.floor(e/1e3)}},1391:function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var i={uIcon:a("82f1").default,uPopup:a("0a49").default,priceFormat:a("1c7e3").default},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"pay_way"},[a("v-uni-view",{staticClass:"main ls-card",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.show=!0}}},[a("v-uni-view",{staticClass:"flex row-between md"},[a("v-uni-view",{staticClass:"muted"},[t._v("支付方式：")]),a("v-uni-view",{staticClass:"flex row-right"},[a("v-uni-view",{staticClass:"name line-1"},[t._v(t._s(t.selectInfo.payway_alias+" "+t.selectInfo.name))]),a("u-icon",{attrs:{color:"#999",name:"arrow-right",size:"24rpx"}})],1)],1)],1),a("u-popup",{attrs:{show:t.show,round:10,closeable:!0},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.showClose.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"title f-w-500 text-center"},[a("v-uni-text",[t._v("支付方式")])],1),a("v-uni-scroll-view",{staticStyle:{height:"700rpx"},attrs:{"scroll-y":!0}},[a("v-uni-radio-group",{staticClass:"p-t-30 reason",on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.radioChange.apply(void 0,arguments)}},model:{value:t.num,callback:function(e){t.num=e},expression:"num"}},t._l(t.walletData,(function(e,i){return a("v-uni-view",{key:i},[a("v-uni-label",{staticClass:"reason-item flex row-between",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showPop=!1}}},[a("v-uni-view",{staticClass:"black lg f-w-500"},[t._v(t._s(t.funPayName(e)))]),a("v-uni-radio",{staticStyle:{transform:"scale(0.7)"},attrs:{color:"#11E69E",value:String(e.index),checked:t.num==String(e.index)}})],1),String(e.index)==t.num&&"WechatPay"!=e.payway&&"AliPay"!=e.payway?a("v-uni-view",{},[a("v-uni-view",{staticClass:"m-t-50 m-b-28 xs muted"},[t._v("请选择钱包类型")]),t._l(e.wallet_list,(function(e,i){return[a("v-uni-view",{key:i+"_0",staticClass:"item flex flex-col flex-center",class:{active:t.currentIndex==e.balance_type,cannot:0==e.blance},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.selectWalletType(e)}}},[a("price-format",{attrs:{price:e.blance,size:36,weight:500}}),a("v-uni-view",{staticClass:"name nr"},[t._v(t._s(e.name))])],1)]}))],2):t._e()],1)})),1)],1)],1)],1)],1)},n=[]},"1c7e3":function(t,e,a){"use strict";a.r(e);var i=a("a2f9"),o=a("455c");for(var n in o)"default"!==n&&function(t){a.d(e,t,(function(){return o[t]}))}(n);var r,s=a("f0c5"),d=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"2b64a2e0",null,!1,i["a"],r);e["default"]=d.exports},"1f8e":function(t,e,a){"use strict";var i=a("4ea4");a("d3b7"),a("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(a("5810")),n=a("0b2d"),r={name:"u-count-down",mixins:[uni.$u.mpMixin,uni.$u.mixin,o.default],data:function(){return{timer:null,timeData:(0,n.parseTimeData)(0),formattedTime:"0",runing:!1,endTime:0,remainTime:0}},watch:{time:function(t){this.reset()}},mounted:function(){this.init()},methods:{init:function(){this.reset()},start:function(){this.runing||(this.runing=!0,this.endTime=Date.now()+this.remainTime,this.toTick())},toTick:function(){this.millisecond?this.microTick():this.macroTick()},macroTick:function(){var t=this;this.clearTimeout(),this.timer=setTimeout((function(){var e=t.getRemainTime();(0,n.isSameSecond)(e,t.remainTime)&&0!==e||t.setRemainTime(e),0!==t.remainTime&&t.macroTick()}),30)},microTick:function(){var t=this;this.clearTimeout(),this.timer=setTimeout((function(){t.setRemainTime(t.getRemainTime()),0!==t.remainTime&&t.microTick()}),50)},getRemainTime:function(){return Math.max(this.endTime-Date.now(),0)},setRemainTime:function(t){this.remainTime=t;var e=(0,n.parseTimeData)(t);this.$emit("change",e),this.formattedTime=(0,n.parseFormat)(this.format,e),t<=0&&(this.pause(),this.$emit("finish"))},reset:function(){this.pause(),this.remainTime=this.time,this.setRemainTime(this.remainTime),this.autoStart&&this.start()},pause:function(){this.runing=!1,this.clearTimeout()},clearTimeout:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){clearTimeout(this.timer),this.timer=null}))},beforeDestroy:function(){this.clearTimeout()}};e.default=r},"22b9":function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.reportMealOrderMonthDetail=e.reportMealOrderRefund=e.reportMealOrderDetailInfo=e.reportMealCollectionOrder=e.reportMealMonthOrder=e.reportMealOrderPay=e.reportMealOrderCreate=e.reportMealOrgDelete=e.reportShopcardList=e.reportShopcardClean=e.reportShopcardDelete=e.reportShopcardAdd=e.getReportMealStall=e.reportMealGetMealType=void 0;var o=i(a("3c62")),n=function(t){return o.default.post("/booking/report_meal/get_meal_type",t)};e.reportMealGetMealType=n;var r=function(t){return o.default.post("/booking/report_meal/get_report_meal_stall",t)};e.getReportMealStall=r;var s=function(t){return o.default.post("/booking/shopcard/report_add",t)};e.reportShopcardAdd=s;var d=function(t){return o.default.post("/booking/shopcard/report_delete",t)};e.reportShopcardDelete=d;var u=function(t){return o.default.post("/booking/shopcard/report_clean",t)};e.reportShopcardClean=u;var c=function(t){return o.default.post("/booking/shopcard/report_meal_calc_list",t)};e.reportShopcardList=c;var l=function(t){return o.default.post("/booking/shopcard/report_meal_org_delete",t)};e.reportMealOrgDelete=l;var f=function(t){return o.default.post("/booking/report_meal/report_meal_order_create",t)};e.reportMealOrderCreate=f;var p=function(t){return o.default.post("/booking/report_meal/report_meal_order_pay",t)};e.reportMealOrderPay=p;var v=function(t){return o.default.post("/booking/report_meal/month_report_meal_order",t)};e.reportMealMonthOrder=v;var m=function(t){return o.default.post("/booking/report_meal/collection_report_meal_order",t)};e.reportMealCollectionOrder=m;var h=function(t){return o.default.post("/booking/report_meal/month_report_meal_order_detail_info",t)};e.reportMealOrderDetailInfo=h;var g=function(t){return o.default.post("/booking/report_meal/report_meal_order_refund",t)};e.reportMealOrderRefund=g;var _=function(t){return o.default.post("/booking/report_meal/month_order_meal_detail_info",t)};e.reportMealOrderMonthDetail=_},"24d6":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */uni-view[data-v-056816d4], uni-scroll-view[data-v-056816d4], uni-swiper-item[data-v-056816d4]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-count-down__text[data-v-056816d4]{color:#666;font-size:%?30?%;line-height:%?44?%}',""]),t.exports=e},"287b":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{newPrice:0,subscriptSize:""}},components:{},props:{size:{type:[String,Number],default:28},color:{type:String},weight:{type:[String,Number],default:400},price:{type:[String,Number],default:""},showSubscript:{type:Boolean,default:!0},lineThrough:{type:Boolean,default:!1}},created:function(){this.priceFormat()},watch:{price:function(t){this.priceFormat()}},methods:{priceFormat:function(){var t=this.price;null!==t&&""!==t&&void 0!==t&&(t=Number(t)/100,t=t.toFixed(2),this.newPrice=t)}}};e.default=i},"2e54":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{show:{type:Boolean,default:uni.$u.props.loadingIcon.show},color:{type:String,default:uni.$u.props.loadingIcon.color},textColor:{type:String,default:uni.$u.props.loadingIcon.textColor},vertical:{type:Boolean,default:uni.$u.props.loadingIcon.vertical},mode:{type:String,default:uni.$u.props.loadingIcon.mode},size:{type:[String,Number],default:uni.$u.props.loadingIcon.size},textSize:{type:[String,Number],default:uni.$u.props.loadingIcon.textSize},text:{type:[String,Number],default:uni.$u.props.loadingIcon.text},timingFunction:{type:String,default:uni.$u.props.loadingIcon.timingFunction},duration:{type:[String,Number],default:uni.$u.props.loadingIcon.duration},inactiveColor:{type:String,default:uni.$u.props.loadingIcon.inactiveColor}}};e.default=i},"317d":function(t,e,a){"use strict";a.r(e);var i=a("1391"),o=a("aed3");for(var n in o)"default"!==n&&function(t){a.d(e,t,(function(){return o[t]}))}(n);a("da40");var r,s=a("f0c5"),d=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"2eaa9322",null,!1,i["a"],r);e["default"]=d.exports},"36cd":function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getApicardEnable=e.queryOrderInfo=e.getThirdSetting=e.thirdLogin=e.createApiThirdRecharge=e.getApiCardUnbind=e.getApiCardLoss=e.getApiCancelLogoutRecord=e.getApiAddLogoutRecord=e.getApiLogoutRecord=e.apiGetUserInfoList=e.getApiUserSwitchFacepay=e.getApiUploadUserFace=e.getApiUploadFileGetOssToken=e.getApiUserWalletList=e.apiReservationGetOrderPay=e.apiGetPayMethodList=e.getApiGenerateEaccountCode=e.apiGetCanteenList=e.apiReservationOrderCreate=e.apiProjectList=e.apiMonthReservationOrderDetailInfo=e.apiMonthReservationOrder=e.apiGetWechatUserInfo=e.apiGetReservationStallFood=e.apiGenerateEaccountCode=e.apiCreateCardInfo=e.apiCollectionReservationOrder=e.apiCardUserOrWechatUserInfoSave=e.apiBindProjectPoint=e.apiQueryUserinfo=e.getApiRechargeOrderQuery=e.getApiRechargeOrderCreate=e.getApiRechargeGetSettings=e.getApiRechargeWalletList=void 0;var o=i(a("3c62")),n=function(t){return o.default.post("/booking/recharge/wallet_list",t)};e.getApiRechargeWalletList=n;var r=function(t){return o.default.post("/booking/recharge/get_settings",t)};e.getApiRechargeGetSettings=r;var s=function(t){return o.default.post("/booking/recharge/order_create",t)};e.getApiRechargeOrderCreate=s;var d=function(t){return o.default.post("/booking/recharge/order_query",t)};e.getApiRechargeOrderQuery=d;var u=function(t){return o.default.post("/booking/login/query_userinfo",t)};e.apiQueryUserinfo=u;var c=function(t){return o.default.post("/booking/user/bind_project_point",t)};e.apiBindProjectPoint=c;var l=function(t){return o.default.post("/booking/user/card_user_or_wechat_user_info_save",t)};e.apiCardUserOrWechatUserInfoSave=l;var f=function(t){return o.default.post("/booking/reservation/collection_reservation_order",t)};e.apiCollectionReservationOrder=f;var p=function(t){return o.default.post("/booking/user/create_card_info",t)};e.apiCreateCardInfo=p;var v=function(t){return o.default.post("/booking/user/generate_eaccount_code",t)};e.apiGenerateEaccountCode=v;var m=function(t){return o.default.post("/booking/reservation/get_reservation_stall_food",t)};e.apiGetReservationStallFood=m;var h=function(t){return o.default.post("/booking/user/get_wechat_user_info",t)};e.apiGetWechatUserInfo=h;var g=function(t){return o.default.post("/booking/reservation/month_reservation_order",t)};e.apiMonthReservationOrder=g;var _=function(t){return o.default.post("/booking/reservation/month_reservation_order_detail_info",t)};e.apiMonthReservationOrderDetailInfo=_;var y=function(t){return o.default.post("/booking/user/project_list",t)};e.apiProjectList=y;var b=function(t){return o.default.post("/booking/reservation/reservation_order_create",t)};e.apiReservationOrderCreate=b;var w=function(t){return o.default.post("/booking/user/get_canteen_list",t)};e.apiGetCanteenList=w;var x=function(t){return o.default.post("/booking/user/generate_eaccount_code",t)};e.getApiGenerateEaccountCode=x;var k=function(t){return o.default.post("/booking/user/get_pay_method_list",t)};e.apiGetPayMethodList=k;var C=function(t){return o.default.post("/booking/reservation/reservation_order_pay",t)};e.apiReservationGetOrderPay=C;var T=function(t){return o.default.post("/booking/user/get_user_wallet_list",t)};e.getApiUserWalletList=T;var P=function(t){return o.default.post("/booking/upload_file/get_oss_token",t)};e.getApiUploadFileGetOssToken=P;var M=function(t){return o.default.post("/booking/user/upload_user_face",t)};e.getApiUploadUserFace=M;var S=function(t){return o.default.post("/booking/user/switch_facepay",t)};e.getApiUserSwitchFacepay=S;var $=function(t){return o.default.post("/booking/user/get_user_info_list",t)};e.apiGetUserInfoList=$;var O=function(t){return o.default.post("/booking/user/logout_record",t)};e.getApiLogoutRecord=O;var I=function(t){return o.default.post("/booking/user/add_logout_record",t)};e.getApiAddLogoutRecord=I;var R=function(t){return o.default.post("/booking/user/cancel_logout_record",t)};e.getApiCancelLogoutRecord=R;var L=function(t){return o.default.post("/booking/user/card_loss",t)};e.getApiCardLoss=L;var D=function(t){return o.default.post("/booking/user/card_unbind",t)};e.getApiCardUnbind=D;var A=function(t){return o.default.post("/booking/user_order/order_create",t)};e.createApiThirdRecharge=A;var E=function(t){return o.default.post("/booking/user_order/h5_login_verify",t)};e.thirdLogin=E;var W=function(t){return o.default.post("/booking/user_order/get_settings",t)};e.getThirdSetting=W;var U=function(t){return o.default.post("/booking/user_order/get_order_info",t)};e.queryOrderInfo=U;var z=function(t){return o.default.post("/booking/user/card_enable",t)};e.getApicardEnable=z},"43b3":function(t,e,a){"use strict";a.r(e);var i=a("05ff"),o=a("dcb3");for(var n in o)"default"!==n&&function(t){a.d(e,t,(function(){return o[t]}))}(n);a("b31f");var r,s=a("f0c5"),d=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"404f0892",null,!1,i["a"],r);e["default"]=d.exports},"455c":function(t,e,a){"use strict";a.r(e);var i=a("287b"),o=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=o.a},"485d":function(t,e,a){"use strict";a.r(e);var i=a("aaad"),o=a("8d32");for(var n in o)"default"!==n&&function(t){a.d(e,t,(function(){return o[t]}))}(n);a("fe54");var r,s=a("f0c5"),d=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"056816d4",null,!1,i["a"],r);e["default"]=d.exports},5810:function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{time:{type:[String,Number],default:uni.$u.props.countDown.time},format:{type:String,default:uni.$u.props.countDown.format},autoStart:{type:Boolean,default:uni.$u.props.countDown.autoStart},millisecond:{type:Boolean,default:uni.$u.props.countDown.millisecond}}};e.default=i},"70fc":function(t,e,a){"use strict";a.r(e);var i=a("cbb9"),o=a("d511");for(var n in o)"default"!==n&&function(t){a.d(e,t,(function(){return o[t]}))}(n);a("ee6c");var r,s=a("f0c5"),d=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"facddb46",null,!1,i["a"],r);e["default"]=d.exports},"7d2f":function(t,e,a){"use strict";var i=a("4ea4");a("ac1f"),a("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var o=i(a("1da1")),n=i(a("ade3")),r=i(a("5530")),s=a("36cd"),d=a("26cb"),u=a("22b9"),c=i(a("da0c")),l=a("feba"),f=a("8123"),p=(a("ad93"),{data:function(){return{paramsData:{},orderInfo:{},payWay:{},remark:"",takeMealType:"",paymentOrderType:"",isLoading:!1,showPay:!1,timeData:{},showTimeEnd:!1,platform:(0,f.checkClient)(),tradeNo:""}},methods:(0,r.default)((0,r.default)({},(0,d.mapMutations)(["SET_SELECT"])),{},{onTimeChange:function(t){this.timeData=t},timeEndConfirm:function(){this.$miRouter.back()},handlePrepay:function(){var t,e=this;if(this.tradeNo="",this.isLoading)return uni.$u.toast("请不要多次点击！");if(!this.timeData.minutes&&!this.timeData.seconds)return this.showTimeEnd=!0;if(!this.payWay.payinfo_id||!this.payWay.wallet_id&&"PushiPay"==this.payWay.payway)return this.showPay=!0;var a;if(!this.payWay.payinfo_id)return uni.$u.toast("请选择支付方式");if(!this.payWay.wallet_id&&"PushiPay"==this.payWay.payway)return uni.$u.toast("请选择钱包");this.$showLoading({title:"支付中...",mask:!0}),this.isLoading=!0;var i=(t={balance_type:this.payWay.balance_type,wallet_id:this.payWay.wallet_id,payinfo_id:this.payWay.payinfo_id},(0,n.default)(t,"balance_type",this.payWay.balance_type),(0,n.default)(t,"unified_trade_no",this.orderInfo.unified_trade_no),(0,n.default)(t,"remark",this.remark),(0,n.default)(t,"take_meal_type",this.paramsData.take_meal_type),(0,n.default)(t,"payment_order_type",this.paramsData.payment_order_type),(0,n.default)(t,"company_id",c.default.get("userInfo").company_id),(0,n.default)(t,"user_id",c.default.get("userInfo").user_id),(0,n.default)(t,"return_url",window.location.origin+"/pages_bundle/payment/payment_result"),t);"reservation"===this.paymentOrderType?a=s.apiReservationGetOrderPay:"report_meal"===this.paymentOrderType&&(a=u.reportMealOrderPay),a(i).then((function(t){if(0==t.code){if(e.SET_SELECT({key:"cupboard",data:{}}),e.tradeNo=t.data.trade_no,t.data.pay_result&&"ORDER_SUCCESS"===t.data.pay_result.order_status)return void uni.showToast({title:"支付成功",icon:"success",success:function(){e.gotoPayResult()}});"WechatPay"===t.data.pay_result.payway||"AliPay"==t.data.pay_result.payway&&"miniapp"===t.data.pay_result.sub_payway?e.jsapiChooseWXPay(t.data.pay_result.extra):"AliPay"===t.data.pay_result.payway&&"h5"===t.data.pay_result.sub_payway?(uni.hideLoading(),e.isLoading=!1,window.location.href=t.data.pay_result.extra):uni.showToast({title:"支付成功",icon:"success",duration:2e3,success:function(){e.gotoPayResult()}})}else uni.hideLoading(),e.isLoading=!1,uni.$u.toast(t.msg)})).catch((function(t){e.isLoading=!1,uni.$u.toast(t.message),uni.hideLoading()}))},selectPayWay:function(t){this.payWay=t},showPayClose:function(t){this.showPay=t},jsapiChooseWXPay:function(t){var e=this;this.$store.state.appoint.select.payment_order_type;(0,l.payWxJssdkRequest)(t).then((function(t){t.res;uni.showToast({title:"支付成功",icon:"success",success:function(){uni.hideLoading(),e.isLoading=!1,e.gotoPayResult()}})})).catch((function(t){t.res;uni.showToast({title:"支付失败",icon:"none",success:function(){e.isLoading=!1,uni.hideLoading()}})}))},gotoPayResult:function(t,e){var a=this;return(0,o.default)(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(!e){i.next=3;break}return i.next=3,a.$sleep(1e3);case 3:a.isLoading=!1,uni.hideLoading(),a.$miRouter.replace({path:"/pages_bundle/payment/payment_result",query:{trade_no:t||a.tradeNo}});case 6:case"end":return i.stop()}}),i)})))()}}),onShow:function(){},onLoad:function(){if(this.paramsData=this.$store.state.appoint.select,this.orderInfo=this.$Route.query.data,this.takeMealType=this.$store.state.appoint.select.take_meal_type,this.paymentOrderType=this.$store.state.appoint.select.payment_order_type,this.$Route.query.out_trade_no)return this.$showLoading({title:"支付中....",mask:!0}),void this.gotoPayResult(this.$Route.query.out_trade_no,!0)}});e.default=p},8904:function(t,e,a){var i=a("bb05");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("c2aaf41e",i,!0,{sourceMap:!1,shadowMode:!1})},"8d32":function(t,e,a){"use strict";a.r(e);var i=a("1f8e"),o=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=o.a},a2f9:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-text",{class:(t.lineThrough?"line-through":"")+" price-format",style:{color:t.color,"font-weight":t.weight,"font-size":t.size+"rpx"}},[t.showSubscript?a("v-uni-text",{style:{"font-size":t.subscriptSize+"rpx","margin-right":"2rpx"}},[t._v("¥")]):t._e(),a("v-uni-text",[t._v(t._s(t.newPrice))])],1)},n=[]},aaad:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"u-count-down"},[t._t("default",[a("v-uni-text",[t._v(t._s(t.formattedTime))])])],2)},n=[]},aed3:function(t,e,a){"use strict";a.r(e);var i=a("bd48"),o=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=o.a},b31f:function(t,e,a){"use strict";var i=a("dde7"),o=a.n(i);o.a},bb05:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */uni-view[data-v-facddb46], uni-scroll-view[data-v-facddb46], uni-swiper-item[data-v-facddb46]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-loading-icon[data-v-facddb46]{flex-direction:row;align-items:center;justify-content:center;color:#c8c9cc}.u-loading-icon__text[data-v-facddb46]{margin-left:%?8?%;color:#666;font-size:%?28?%;line-height:%?40?%}.u-loading-icon__spinner[data-v-facddb46]{width:%?60?%;height:%?60?%;position:relative;box-sizing:border-box;max-width:100%;max-height:100%;-webkit-animation:u-rotate-data-v-facddb46 1s linear infinite;animation:u-rotate-data-v-facddb46 1s linear infinite}.u-loading-icon__spinner--semicircle[data-v-facddb46]{border-width:%?4?%;border-color:transparent;border-top-right-radius:%?200?%;border-top-left-radius:%?200?%;border-bottom-left-radius:%?200?%;border-bottom-right-radius:%?200?%;border-style:solid}.u-loading-icon__spinner--circle[data-v-facddb46]{border-top-right-radius:%?200?%;border-top-left-radius:%?200?%;border-bottom-left-radius:%?200?%;border-bottom-right-radius:%?200?%;border-width:%?4?%;border-top-color:#e5e5e5;border-right-color:#e5e5e5;border-bottom-color:#e5e5e5;border-left-color:#e5e5e5;border-style:solid}.u-loading-icon--vertical[data-v-facddb46]{flex-direction:column}[data-v-facddb46]:host{font-size:%?0?%;line-height:1}.u-loading-icon__spinner--spinner[data-v-facddb46]{-webkit-animation-timing-function:steps(12);animation-timing-function:steps(12)}.u-loading-icon__text[data-v-facddb46]:empty{display:none}.u-loading-icon--vertical .u-loading-icon__text[data-v-facddb46]{margin:%?12?% 0 0;color:#666}.u-loading-icon__dot[data-v-facddb46]{position:absolute;top:0;left:0;width:100%;height:100%}.u-loading-icon__dot[data-v-facddb46]:before{display:block;width:%?4?%;height:25%;margin:0 auto;background-color:currentColor;border-radius:40%;content:" "}.u-loading-icon__dot[data-v-facddb46]:nth-of-type(1){-webkit-transform:rotate(30deg);transform:rotate(30deg);opacity:1}.u-loading-icon__dot[data-v-facddb46]:nth-of-type(2){-webkit-transform:rotate(60deg);transform:rotate(60deg);opacity:.9375}.u-loading-icon__dot[data-v-facddb46]:nth-of-type(3){-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:.875}.u-loading-icon__dot[data-v-facddb46]:nth-of-type(4){-webkit-transform:rotate(120deg);transform:rotate(120deg);opacity:.8125}.u-loading-icon__dot[data-v-facddb46]:nth-of-type(5){-webkit-transform:rotate(150deg);transform:rotate(150deg);opacity:.75}.u-loading-icon__dot[data-v-facddb46]:nth-of-type(6){-webkit-transform:rotate(180deg);transform:rotate(180deg);opacity:.6875}.u-loading-icon__dot[data-v-facddb46]:nth-of-type(7){-webkit-transform:rotate(210deg);transform:rotate(210deg);opacity:.625}.u-loading-icon__dot[data-v-facddb46]:nth-of-type(8){-webkit-transform:rotate(240deg);transform:rotate(240deg);opacity:.5625}.u-loading-icon__dot[data-v-facddb46]:nth-of-type(9){-webkit-transform:rotate(270deg);transform:rotate(270deg);opacity:.5}.u-loading-icon__dot[data-v-facddb46]:nth-of-type(10){-webkit-transform:rotate(300deg);transform:rotate(300deg);opacity:.4375}.u-loading-icon__dot[data-v-facddb46]:nth-of-type(11){-webkit-transform:rotate(330deg);transform:rotate(330deg);opacity:.375}.u-loading-icon__dot[data-v-facddb46]:nth-of-type(12){-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:.3125}@-webkit-keyframes u-rotate-data-v-facddb46{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes u-rotate-data-v-facddb46{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]),t.exports=e},bd48:function(t,e,a){"use strict";var i=a("4ea4");a("4160"),a("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a("36cd"),n=i(a("da0c")),r={name:"address-card",props:{showPay:{type:Boolean,default:!1}},data:function(){return{show:!1,num:"",walletData:{},currentIndex:"",walletType:[{money:"560.00",name:"账户钱包",type:1},{money:"322.00",name:"农行电子账户钱包",type:1},{money:"50.00",name:"赠送钱包",type:0},{money:"366.00",name:"赠送钱包",type:1}],formData:{org_id:"101"},selectInfo:{payway:"",payway_alias:"",name:"",balance_type:"",wallet_type:""}}},methods:{funPayName:function(t){var e="";return e="WechatPay"==t.payway||"AliPay"==t.payway?t.payway_alias:t.name+"-"+t.payway_alias,e},radioChange:function(t){var e=this;this.num=t.detail.value,this.walletData.forEach((function(a){String(a.index)==t.detail.value&&(e.selectInfo.payway_alias=a.payway_alias,e.selectInfo.payinfo_id=a.payinfo_id,e.selectInfo.payway=a.payway)})),"WechatPay"!==this.selectInfo.payway&&"AliPay"!==this.selectInfo.payway||(this.show=!1,this.$emit("showPayClose",!1))},selectWalletType:function(t,e){0!=t.blance&&(this.currentIndex=t.balance_type,this.selectInfo.name=t.name,this.selectInfo.wallet_type=t.wallet_type,this.selectInfo.balance_type=t.balance_type,this.selectInfo.wallet_id=t.wallet_id,this.show=!1,this.$emit("showPayClose",!1))},getPayMethodList:function(){var t=this;(0,o.apiGetPayMethodList)(this.formData).then((function(e){0==e.code?(t.walletData=e.data,e.data.length<=1&&(t.num=e.data[0].index,t.selectInfo.payway_alias=e.data[0].payway_alias,t.selectInfo.payinfo_id=e.data[0].payinfo_id,t.selectInfo.payway=e.data[0].payway,"WechatPay"!==t.selectInfo.payway&&"AliPay"!==t.selectInfo.payway||(t.show=!1,t.$emit("showPayClose",!1)))):console.log(e)})).catch((function(t){console.log("err",t)}))},showClose:function(){this.show=!1,this.$emit("showPayClose",!1)}},watch:{selectInfo:{handler:function(t){this.$emit("select",t)},deep:!0},showPay:function(t){this.show=t}},created:function(){this.formData.user_id=n.default.get("userInfo").user_id||"",this.formData.person_no=this.$store.state.appoint.select.person.person_no,this.formData.company_id=n.default.get("userInfo").company_id||"",this.formData.org_id=this.$store.state.appoint.select.org.org_id,this.getPayMethodList(),console.log("this.$store.state.appoint.select",this.$store.state.appoint.select)}};e.default=r},c2c4:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */.payment .ls-card[data-v-404f0892]{border-radius:%?20?%}.payment .header[data-v-404f0892]{height:%?90?%;padding:0 %?40?%}.payment .section[data-v-404f0892]{padding:%?40?%;padding-bottom:calc(%?100?% + env(safe-area-inset-bottom))}.payment .section .bb[data-v-404f0892]{border-bottom:1px solid #efefef}.payment .section .list[data-v-404f0892]{padding:0 %?30?%}.payment .section .list .item[data-v-404f0892]{padding:%?32?% 0;box-sizing:border-box}.payment .section .list .offline[data-v-404f0892]{padding:%?20?% 0}.payment .section .list .offline .tips[data-v-404f0892]{color:#f8a63c}.payment .footer[data-v-404f0892]{width:100%;position:fixed;bottom:0;left:0;padding-left:%?38?%;border-top:1px solid #eaecee;padding-bottom:env(safe-area-inset-bottom)}.payment .footer--warpper[data-v-404f0892]{height:%?100?%}.payment .footer .submit-btn[data-v-404f0892]{width:%?200?%;height:100%;background-color:#11e69e}',""]),t.exports=e},cbb9:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.show?a("v-uni-view",{staticClass:"u-loading-icon",class:[t.vertical&&"u-loading-icon--vertical"],style:[t.$u.addStyle(t.customStyle)]},[t.webviewHide?t._e():a("v-uni-view",{ref:"ani",staticClass:"u-loading-icon__spinner",class:["u-loading-icon__spinner--"+t.mode],style:{color:t.color,width:t.$u.addUnit(t.size),height:t.$u.addUnit(t.size),borderTopColor:t.color,borderBottomColor:t.otherBorderColor,borderLeftColor:t.otherBorderColor,borderRightColor:t.otherBorderColor,"animation-duration":t.duration+"ms","animation-timing-function":"semicircle"===t.mode||"circle"===t.mode?t.timingFunction:""}},["spinner"===t.mode?t._l(t.array12,(function(t,e){return a("v-uni-view",{key:e,staticClass:"u-loading-icon__dot"})})):t._e()],2),t.text?a("v-uni-text",{staticClass:"u-loading-icon__text",style:{fontSize:t.$u.addUnit(t.textSize),color:t.textColor}},[t._v(t._s(t.text))]):t._e()],1):t._e()},n=[]},d1af:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */.pay_way .ls-card[data-v-2eaa9322]{border-radius:%?20?%;background-color:#fff}.pay_way .main[data-v-2eaa9322]{padding:%?32?% %?30?%;box-sizing:border-box}.pay_way .main .name[data-v-2eaa9322]{width:%?400?%}.pay_way .container[data-v-2eaa9322]{padding:0 %?40?%}.pay_way .container .title[data-v-2eaa9322]{padding:%?30?% 0}.pay_way .container .reason .reason-item[data-v-2eaa9322]:first-child{border-bottom:1px solid #efefef;margin-bottom:%?20?%;padding-bottom:%?20?%}.pay_way .container .active[data-v-2eaa9322]{color:#11e69e!important;border:1px solid #11e69e!important}.pay_way .container .item[data-v-2eaa9322]:nth-child(2n){margin-left:0}.pay_way .container .item[data-v-2eaa9322]{display:inline-block;width:%?320?%;padding:%?46?% 0;border-radius:%?8?%;margin-left:%?30?%;margin-bottom:%?30?%;border:1px solid #efefef;text-align:center}.pay_way .container .cannot[data-v-2eaa9322]{color:#999!important;position:relative}.pay_way .container .cannot[data-v-2eaa9322]::after{content:"无法选择";position:absolute;top:0;right:0;padding:%?6?% %?14?%;font-size:%?22?%;background-color:#f0f3f5;border-radius:%?0?% %?8?%}',""]),t.exports=e},d511:function(t,e,a){"use strict";a.r(e);var i=a("e4ba"),o=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=o.a},da40:function(t,e,a){"use strict";var i=a("000a"),o=a.n(i);o.a},dcb3:function(t,e,a){"use strict";a.r(e);var i=a("7d2f"),o=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=o.a},dde7:function(t,e,a){var i=a("c2c4");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("29d44d2c",i,!0,{sourceMap:!1,shadowMode:!1})},e4ba:function(t,e,a){"use strict";var i=a("4ea4");a("a630"),a("3ca3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(a("2e54")),n={name:"u-loading-icon",mixins:[uni.$u.mpMixin,uni.$u.mixin,o.default],data:function(){return{array12:Array.from({length:12}),aniAngel:360,webviewHide:!1,loading:!1}},computed:{otherBorderColor:function(){var t=uni.$u.colorGradient(this.color,"#ffffff",100)[80];return"circle"===this.mode?this.inactiveColor?this.inactiveColor:t:"transparent"}},watch:{show:function(t){}},mounted:function(){this.init()},methods:{init:function(){setTimeout((function(){}),20)},addEventListenerToWebview:function(){var t=this,e=getCurrentPages(),a=e[e.length-1],i=a.$getAppWebview();i.addEventListener("hide",(function(){t.webviewHide=!0})),i.addEventListener("show",(function(){t.webviewHide=!1}))}}};e.default=n},ee6c:function(t,e,a){"use strict";var i=a("8904"),o=a.n(i);o.a},fe54:function(t,e,a){"use strict";var i=a("fef6"),o=a.n(i);o.a},fef6:function(t,e,a){var i=a("24d6");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("89d618f2",i,!0,{sourceMap:!1,shadowMode:!1})}}]);