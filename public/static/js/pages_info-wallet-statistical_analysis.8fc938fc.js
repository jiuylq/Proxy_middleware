(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_info-wallet-statistical_analysis"],{"0e56":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */.statistical-analysis .example-body .uni-calendar-item--after-checked[data-v-d9c823d4]{background:#11e69e!important}.statistical-analysis .example-body .uni-calendar-item--checked[data-v-d9c823d4]{background:#11e69e!important}.statistical-analysis .example-body .uni-datetime-picker--btn[data-v-d9c823d4]{background:#11e69e!important}.statistical-analysis .line-charts .charts[data-v-d9c823d4]{width:%?650?%;height:%?400?%}.statistical-analysis .header[data-v-d9c823d4]{padding:%?36?% %?40?% %?22?%}.statistical-analysis .header .header-left[data-v-d9c823d4]{border-radius:%?10?%;overflow:hidden}.statistical-analysis .header .header-left .header-left-item[data-v-d9c823d4]{height:%?46?%;width:%?46?%;background:#e6e6e6;text-align:center;color:#999}.statistical-analysis .header .header-left .header-left-item-select[data-v-d9c823d4]{background-color:#11e69e;color:#fff}.statistical-analysis .statistical-all[data-v-d9c823d4]{padding:%?44?% 0 %?54?%;background:#e6fff3 linear-gradient(90deg,#a9fed5,#ebfef5 0,#ebfef5 0,#d3fcf5 100%,#d3fcf5 0)}.statistical-analysis .statistical-analysis-item[data-v-d9c823d4]{background-color:#fff;padding:%?58?% %?50?% %?28?%}.statistical-analysis .statistical-analysis-item[data-v-d9c823d4]:not(:last-of-type){border-bottom:%?1?% solid #efefef}.statistical-analysis .statistical-analysis-item .statistical-analysis-title[data-v-d9c823d4]{font-size:%?30?%;font-weight:700;padding-bottom:%?10?%}.statistical-analysis .wallet-ranking .wallet-ranking-item[data-v-d9c823d4]{height:%?80?%}.statistical-analysis .wallet-ranking .wallet-ranking-item[data-v-d9c823d4]:not(:last-of-type){border-bottom:%?1?% solid #efefef}.statistical-analysis .take-meal .take-meal-item[data-v-d9c823d4]{height:%?80?%}.statistical-analysis .take-meal .take-meal-item-name[data-v-d9c823d4]{min-width:%?96?%}.statistical-analysis .take-meal .take-meal-item .item-progress[data-v-d9c823d4]{width:%?360?%}.statistical-analysis .take-meal .take-meal-item .item-progress-time[data-v-d9c823d4]{width:%?360?%}.statistical-analysis .consumption-ranking .consumption-ranking-item[data-v-d9c823d4]{height:%?100?%}.statistical-analysis .consumption-ranking .consumption-ranking-item .top-block[data-v-d9c823d4]{height:%?38?%;line-height:%?38?%;width:%?38?%;text-align:center;border-radius:%?5?%}.statistical-analysis .consumption-ranking .consumption-ranking-item .top-block-1[data-v-d9c823d4]{background:#11e69e linear-gradient(87deg,#ef7641,#ef7641 0,#e94732 100%,#e94732 0)}.statistical-analysis .consumption-ranking .consumption-ranking-item .top-block-2[data-v-d9c823d4]{background:#11e69e linear-gradient(87deg,#e1a837,#e1a837 0,#ff6524 100%,#ff6524 0)}.statistical-analysis .consumption-ranking .consumption-ranking-item .top-block-3[data-v-d9c823d4]{background:#11e69e linear-gradient(87deg,#ffdd60,#ffdd60 0,#f2b73f 100%,#f2b73f 0)}.statistical-analysis .consumption-ranking .consumption-ranking-item .top-block-4[data-v-d9c823d4]{background:#11e69e linear-gradient(87deg,#cdb79f,#cdb79f 0,#d4b297 100%,#d4b297 0)}.statistical-analysis .consumption-ranking .consumption-ranking-item .top-block-5[data-v-d9c823d4]{background:#11e69e linear-gradient(87deg,#cdb79f,#cdb79f 0,#d4b297 100%,#d4b297 0)}.statistical-analysis .consumption-ranking .consumption-ranking-item[data-v-d9c823d4]:not(:last-of-type){border-bottom:%?1?% solid #efefef}',""]),t.exports=e},"17e3":function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(a("f0b0")),n={name:"u-line-progress",mixins:[uni.$u.mpMixin,uni.$u.mixin,s.default],data:function(){return{lineWidth:0}},watch:{percentage:function(t){this.resizeProgressWidth()}},computed:{progressStyle:function(){var t={};return t.width=this.lineWidth,t.backgroundColor=this.activeColor,t.height=uni.$u.addUnit(this.height),t},innserPercentage:function(){return uni.$u.range(0,100,this.percentage)}},mounted:function(){this.init()},methods:{init:function(){var t=this;uni.$u.sleep(20).then((function(){t.resizeProgressWidth()}))},getProgressWidth:function(){return this.$uGetRect(".u-line-progress__background")},resizeProgressWidth:function(){var t=this;this.getProgressWidth().then((function(e){var a=e.width;t.lineWidth=a*t.innserPercentage/100+"px"}))}}};e.default=n},"1c7e3":function(t,e,a){"use strict";a.r(e);var i=a("a2f9"),s=a("455c");for(var n in s)"default"!==n&&function(t){a.d(e,t,(function(){return s[t]}))}(n);var r,l=a("f0c5"),o=Object(l["a"])(s["default"],i["b"],i["c"],!1,null,"2b64a2e0",null,!1,i["a"],r);e["default"]=o.exports},"287b":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{newPrice:0,subscriptSize:""}},components:{},props:{size:{type:[String,Number],default:28},color:{type:String},weight:{type:[String,Number],default:400},price:{type:[String,Number],default:""},showSubscript:{type:Boolean,default:!0},lineThrough:{type:Boolean,default:!1}},created:function(){this.priceFormat()},watch:{price:function(t){this.priceFormat()}},methods:{priceFormat:function(){var t=this.price;null!==t&&""!==t&&void 0!==t&&(t=Number(t)/100,t=t.toFixed(2),this.newPrice=t)}}};e.default=i},4019:function(t,e,a){t.exports=a.p+"static/img/icon_waimai.fccfdf30.png"},"455c":function(t,e,a){"use strict";a.r(e);var i=a("287b"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a},4838:function(t,e){t.exports="data:image/png;base64,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"},"48b4":function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.apiGetCompanyWalletList=e.apiGetUserWalletInfo=e.apiGetUserWalletStatistical=e.apiGetUserWalletList=void 0;var s=i(a("3c62")),n=function(t){return s.default.post("/booking/user/get_user_wallet_list",t)};e.apiGetUserWalletList=n;var r=function(t){return s.default.post("/booking/user/get_user_wallet_statistical",t)};e.apiGetUserWalletStatistical=r;var l=function(t){return s.default.post("/booking/user/get_user_wallet_info",t)};e.apiGetUserWalletInfo=l;var o=function(t){return s.default.post("/booking/user/get_user_company_wallet_list",t)};e.apiGetCompanyWalletList=o},5757:function(t,e,a){"use strict";a.r(e);var i=a("636b"),s=a("e98c");for(var n in s)"default"!==n&&function(t){a.d(e,t,(function(){return s[t]}))}(n);a("7914");var r,l=a("f0c5"),o=Object(l["a"])(s["default"],i["b"],i["c"],!1,null,"d9c823d4",null,!1,i["a"],r);e["default"]=o.exports},"636b":function(t,e,a){"use strict";a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var i={uIcon:a("82f1").default,priceFormat:a("1c7e3").default,uImage:a("36c7").default,uLineProgress:a("8e7f").default},s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"statistical-analysis"},[a("v-uni-view",{staticClass:"header flex row-between bg-white"},[a("v-uni-view",{staticClass:"header-left sm flex"},[a("v-uni-view",{staticClass:"header-left-item flex flex-center",class:"week"==t.timeType?"header-left-item-select":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTimeType("week")}}},[t._v("周")]),a("v-uni-view",{staticClass:"header-left-item flex flex-center",class:"month"==t.timeType?"header-left-item-select":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTimeType("month")}}},[t._v("月")]),a("v-uni-view",{staticClass:"header-left-item flex flex-center",class:"year"==t.timeType?"header-left-item-select":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTimeType("year")}}},[t._v("年")])],1),a("v-uni-view",{staticClass:"header-right xs f-w-500 flex flex-center"},[a("u-icon",{attrs:{name:"arrow-left",size:"24"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.timeChange("pre")}}}),a("v-uni-text",{staticClass:"m-r-10 m-l-10"},[t._v(t._s(t.date)),"year"==t.timeType?a("v-uni-text",[t._v("年")]):t._e()],1),a("u-icon",{attrs:{name:"arrow-right",size:"24"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.timeChange("next")}}})],1)],1),a("v-uni-view",{staticClass:"flex statistical-all row-between"},[a("v-uni-view",{staticClass:"flex-col flex-1 text-center"},[a("v-uni-view",{staticClass:"sm f-w-500"},[t._v("消费"),a("span",{staticClass:"mini f-w-500 m-l-16"},[t._v("(共"+t._s(t.totalPayCount)+"笔)")])]),a("v-uni-view",{staticClass:"f-w-500 m-t-22"},[a("price-format",{attrs:{price:t.totalPayFee,size:42}})],1)],1),a("v-uni-view",{staticClass:"flex-col flex-1 text-center"},[a("v-uni-view",{staticClass:"sm f-w-500"},[t._v("充值"),a("span",{staticClass:"mini f-w-500 m-l-16"},[t._v("(共"+t._s(t.totalChargeCount)+"笔)")])]),a("v-uni-view",{staticClass:"font-size-42 f-w-500 m-t-22"},[a("price-format",{attrs:{price:t.totalChargeFee,size:42}})],1)],1)],1),this.walletRank.length?a("v-uni-view",{staticClass:"statistical-analysis-item"},[a("v-uni-view",{staticClass:"statistical-analysis-title"},[t._v("钱包使用排行")]),a("v-uni-view",{staticClass:"wallet-ranking sm"},t._l(t.walletRank,(function(e,i){return a("v-uni-view",{staticClass:"wallet-ranking-item flex flex-center row-between"},[a("v-uni-view",{staticClass:"flex flex-center"},[a("u-image",{attrs:{width:"34rpx",height:"34rpx",src:e.img}}),a("v-uni-view",{staticClass:"m-l-18 xs f-w-500"},[t._v(t._s(e.wallet_org))])],1),a("v-uni-view",{staticClass:"text-left xs f-w-500"},[a("price-format",{attrs:{price:e.pay_fee,size:24}})],1)],1)})),1)],1):t._e(),this.takeMealRank.length?a("v-uni-view",{staticClass:"statistical-analysis-item"},[a("v-uni-view",{staticClass:"statistical-analysis-title"},[t._v("取餐方式")]),a("v-uni-view",{staticClass:"take-meal sm"},t._l(t.takeMealRank,(function(e,i){return a("v-uni-view",{staticClass:"take-meal-item flex flex-center row-between"},[a("v-uni-view",{staticClass:"flex flex-center"},[a("u-image",{attrs:{width:"34rpx",height:"34rpx",src:e.img}}),a("v-uni-view",{staticClass:"m-l-20 m-r-24 xs f-w-500 take-meal-item-name"},[t._v(t._s(e.take_meal_type))]),a("v-uni-view",{staticClass:"item-progress"},[a("u-line-progress",{attrs:{percentage:e.percentage,showText:!1,inactiveColor:"#FFFFFF",activeColor:"#12E294"}})],1)],1),a("v-uni-view",{staticClass:"text-left xs f-w-500"},[a("price-format",{attrs:{price:e.fee,size:24}})],1)],1)})),1)],1):t._e(),t.payFeeRank.categories.length?a("v-uni-view",{staticClass:"statistical-analysis-item"},[a("v-uni-view",{staticClass:"statistical-analysis-title"},[t._v("消费金额")]),a("v-uni-view",{staticClass:"line-charts"},[a("v-uni-canvas",{staticClass:"charts",attrs:{"canvas-id":"RiefOWcpYoQAZVkBOKWmMMtPeSDpeCdB",id:"RiefOWcpYoQAZVkBOKWmMMtPeSDpeCdB"},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.touchstart.apply(void 0,arguments)},touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.touchmove.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.touchend.apply(void 0,arguments)}}})],1)],1):t._e(),t.mealTypeRank.length?a("v-uni-view",{staticClass:"statistical-analysis-item"},[a("v-uni-view",{staticClass:"statistical-analysis-title"},[t._v("消费餐段")]),a("v-uni-view",{staticClass:"take-meal sm"},t._l(t.mealTypeRank,(function(e,i){return a("v-uni-view",{key:i,staticClass:"take-meal-item flex flex-center row-between"},[a("v-uni-view",{staticClass:"flex flex-center"},[a("v-uni-view",{staticClass:"m-r-24 xs f-w-500 take-meal-item-name"},[t._v(t._s(e.meal_type))]),a("v-uni-view",{staticClass:"item-progress-time"},[a("u-line-progress",{attrs:{percentage:e.percentage,showText:!1,inactiveColor:"#FFFFFF",activeColor:"#12E294"}})],1)],1),a("v-uni-view",{staticClass:"text-left xs f-w-500"},[a("price-format",{attrs:{price:e.fee,size:24}})],1)],1)})),1)],1):t._e(),t.payOrgRank.length?a("v-uni-view",{staticClass:"statistical-analysis-item"},[a("v-uni-view",{staticClass:"statistical-analysis-title"},[t._v("消费排行榜TOP5")]),a("v-uni-view",{staticClass:"consumption-ranking bg-white sm"},t._l(t.payOrgRank,(function(e,i){return a("v-uni-view",{key:i,staticClass:"consumption-ranking-item flex flex-center row-between",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toWalletDetails(e)}}},[a("v-uni-view",{staticClass:"flex flex-center"},[a("v-uni-view",{staticClass:"top-block white",class:"top-block-"+(i+1)},[t._v(t._s(i+1))]),a("v-uni-view",{staticClass:"xs m-l-20 f-w-500"},[t._v(t._s(e.organization))])],1),a("v-uni-view",{staticClass:"flex flex-center"},[a("v-uni-view",{staticClass:"text-left xs f-w-500"},[a("price-format",{attrs:{price:e.fee,size:24}})],1),a("u-icon",{attrs:{color:"inherit",name:"arrow-right",size:"24rpx"}})],1)],1)})),1)],1):t._e()],1)},n=[]},"63f0":function(t,e,a){var i=a("0e56");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=a("4f06").default;s("18742157",i,!0,{sourceMap:!1,shadowMode:!1})},7914:function(t,e,a){"use strict";var i=a("63f0"),s=a.n(i);s.a},"865c":function(t,e,a){"use strict";var i=a("ce01"),s=a.n(i);s.a},"8e7f":function(t,e,a){"use strict";a.r(e);var i=a("c198"),s=a("9c6d");for(var n in s)"default"!==n&&function(t){a.d(e,t,(function(){return s[t]}))}(n);a("865c");var r,l=a("f0c5"),o=Object(l["a"])(s["default"],i["b"],i["c"],!1,null,"55361bc0",null,!1,i["a"],r);e["default"]=o.exports},"9c6d":function(t,e,a){"use strict";a.r(e);var i=a("17e3"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a},a06d:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */uni-view[data-v-55361bc0], uni-scroll-view[data-v-55361bc0], uni-swiper-item[data-v-55361bc0]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-line-progress[data-v-55361bc0]{align-items:stretch;position:relative;display:flex;flex-direction:row;flex:1;overflow:hidden}.u-line-progress__background[data-v-55361bc0]{background-color:#ececec;flex:1}.u-line-progress__line[data-v-55361bc0]{position:absolute;top:0;left:0;bottom:0;align-items:center;display:flex;flex-direction:row;color:#fff;transition:width .5s ease;justify-content:flex-end}.u-line-progress__text[data-v-55361bc0]{font-size:%?20?%;align-items:center;text-align:right;color:#fff;margin-right:%?10?%;-webkit-transform:scale(.9);transform:scale(.9)}',""]),t.exports=e},a2f9:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-text",{class:(t.lineThrough?"line-through":"")+" price-format",style:{color:t.color,"font-weight":t.weight,"font-size":t.size+"rpx"}},[t.showSubscript?a("v-uni-text",{style:{"font-size":t.subscriptSize+"rpx","margin-right":"2rpx"}},[t._v("¥")]):t._e(),a("v-uni-text",[t._v(t._s(t.newPrice))])],1)},n=[]},a914:function(t,e,a){"use strict";var i=a("4ea4");a("d81d"),a("13d5"),a("a9e3"),a("d3b7"),a("07ac"),a("ac1f"),a("25f0"),a("4d90"),a("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;i(a("da0c"));var s=a("48b4"),n=a("d558"),r=i(a("3e32")),l={},o={data:function(){return{timeType:"week",date:"",startDate:"",endDate:"",totalPayCount:"",totalPayFee:"",totalChargeCount:"",totalChargeFee:"",walletRank:[],takeMealRank:[],payFeeRank:{categories:[],series:[]},mealTypeRank:[],payOrgRank:[],columnOpts:{color:["#12E294"],enableScroll:!1,xAxis:{disableGrid:!0,itemCount:7,scrollShow:!0,scrollAlign:"right"},yAxis:{disableGrid:!0},legend:{show:!1},extra:{column:{width:20}}},cWidth:750,cHeight:500}},created:function(){this.cWidth=uni.upx2px(650),this.cHeight=uni.upx2px(400),this.$nextTick((function(){this.drawCharts("RiefOWcpYoQAZVkBOKWmMMtPeSDpeCdB",this.payFeeRank)}))},methods:{toWalletDetails:function(t){this.$miRouter.push({query:{data:t},path:"/pages_info/wallet/wallet_details"})},getWalletStatistical:function(){var t=this;this.$showLoading({title:"获取中....",mask:!0}),(0,s.apiGetUserWalletStatistical)({company_id:this.companyId,start_date:this.startDate,end_date:this.endDate,date_type:this.timeType}).then((function(e){if(uni.hideLoading(),0==e.code){t.totalPayCount=e.data.total_pay_count,t.totalPayFee=e.data.total_pay_fee,t.totalChargeCount=e.data.total_charge_count,t.totalChargeFee=e.data.total_charge_fee,e.data.wallet_name_rank.map((function(t){var e=t.wallet_org.split("-")[1];"储值钱包"===e?t.img=a("0dab"):"赠送钱包"===e?t.img=a("8327"):"补贴钱包"===e&&(t.img=a("f210"))})),t.walletRank=e.data.wallet_name_rank;var i,s=Object.values(e.data.take_meal_type);for(var n in s.length&&(i=s.reduce((function(t,e){return t>e?t:e}))),t.takeMealRank=[],e.data.take_meal_type){var r=void 0;r=a("外卖"===n?"4019":"4838"),t.takeMealRank.push({take_meal_type:n,fee:e.data.take_meal_type[n],percentage:e.data.take_meal_type[n]/i*100,img:r})}t.payFeeRank.categories=e.data.pay_fee_day_alias;var o=[];e.data.pay_fee_day.map((function(t){t=(Number(t)/100).toFixed(2),o.push(t)})),t.payFeeRank.series[0]={name:"金额",data:o};var c=!1,u="left";"week"!==t.timeType&&o.length>7&&(c=!0,u="right"),l["RiefOWcpYoQAZVkBOKWmMMtPeSDpeCdB"]&&l["RiefOWcpYoQAZVkBOKWmMMtPeSDpeCdB"].updateData({categories:t.payFeeRank.categories,series:t.payFeeRank.series,enableScroll:c,scrollPosition:u});var d,f=Object.values(e.data.meal_type);for(var v in f.length&&(d=f.reduce((function(t,e){return t>e?t:e}))),t.mealTypeRank=[],e.data.meal_type)t.mealTypeRank.push({meal_type:v,fee:e.data.meal_type[v],percentage:e.data.meal_type[v]/d*100});t.payOrgRank=e.data.pay_org_rank}else uni.$u.toast(e.msg)})).catch((function(t){uni.hideLoading(),uni.$u.toast(t.msg)}))},changeTimeType:function(t){if(this.timeType=t,"week"===this.timeType)this.getWeekData((new Date).getTime()),this.columnOpts.enableScroll=!1;else if("month"===this.timeType){var e=(new Date).getFullYear(),a=(new Date).getMonth()+1;this.getMonthData(e,a),this.columnOpts.enableScroll=!0}else"year"===this.timeType&&(this.date=(new Date).getFullYear(),this.startDate=this.date+"-01-01",this.endDate=this.date+"-12-31",this.columnOpts.enableScroll=!0);this.getWalletStatistical()},timeChange:function(t){var e;if("week"===this.timeType)"pre"===t?e=new Date(this.startDate).getTime()-6048e5:"next"===t&&(e=new Date(this.startDate).getTime()+6048e5),this.getWeekData(e);else if("month"===this.timeType){var a,i=Number(this.date.split("-")[0]);"pre"===t?(a=Number(this.date.split("-")[1])-1,a||(a=12,i-=1)):"next"===t&&(a=Number(this.date.split("-")[1])+1,13===a&&(a=1,i+=1)),this.getMonthData(i,a)}else"year"===this.timeType&&("pre"===t?this.date=Number(this.date)-1:"next"===t&&(this.date=Number(this.date)+1),this.startDate=this.date+"-01-01",this.endDate=this.date+"-12-31");this.getWalletStatistical()},getWeekData:function(t){var e=new Date(t).getDay(),a=t-864e5*(e-1),i=t+864e5*(7-e);this.startDate=(0,n.timeFormat)(a,"yyyy-mm-dd"),this.endDate=(0,n.timeFormat)(i,"yyyy-mm-dd"),this.date=this.startDate.substring(5)+" 至 "+this.endDate.substring(5)},getMonthData:function(t,e){this.startDate=t+"-"+e.toString().padStart(2,0)+"-01",this.endDate=(0,n.timeFormat)(new Date(t,e,0)),this.date=t+"-"+e.toString().padStart(2,0)},drawCharts:function(t,e){var a=uni.createCanvasContext(t,this);l[t]=new r.default({type:"column",context:a,width:this.cWidth,height:this.cHeight,categories:e.categories,series:e.series,animation:!0,background:"#FFFFFF",color:["#12E294"],enableScroll:!1,padding:[15,15,0,5],xAxis:{disableGrid:!0,itemCount:7,scrollShow:!0,scrollAlign:"right"},yAxis:{disableGrid:!0},legend:{show:!1},extra:{column:{width:20}}})},touchend:function(t){l[t.target.id].scrollEnd(t),l[t.target.id].touchLegend(t),l[t.target.id].showToolTip(t)},touchstart:function(t){l[t.target.id].scrollStart(t)},touchmove:function(t){l[t.target.id].scroll(t)}},onShow:function(){this.companyId=this.$Route.query.companyId?this.$Route.query.companyId:"",this.timeType="week",this.getWeekData((new Date).getTime()),this.getWalletStatistical()}};e.default=o},c198:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"u-line-progress",style:[t.$u.addStyle(t.customStyle)]},[a("v-uni-view",{ref:"u-line-progress__background",staticClass:"u-line-progress__background",style:[{backgroundColor:t.inactiveColor,height:t.$u.addUnit(t.height)}]}),a("v-uni-view",{staticClass:"u-line-progress__line",style:[t.progressStyle]},[t._t("default",[t.showText&&t.percentage>=10?a("v-uni-text",{staticClass:"u-line-progress__text"},[t._v(t._s(t.innserPercentage+"%"))]):t._e()])],2)],1)},n=[]},ce01:function(t,e,a){var i=a("a06d");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=a("4f06").default;s("e7b639a8",i,!0,{sourceMap:!1,shadowMode:!1})},d558:function(t,e,a){"use strict";a("a9e3"),a("d3b7"),a("4d63"),a("ac1f"),a("25f0"),a("4d90"),a("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.dateLengthInfo=e.timeFormat=void 0;var i=["日","一","二","三","四","五","六"],s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-mm-dd";t||(t=Number(new Date)),10==t.toString().length&&(t*=1e3);var a,s=new Date(t),n={"y+":s.getFullYear().toString(),"m+":(s.getMonth()+1).toString(),"d+":s.getDate().toString(),"h+":s.getHours().toString(),"M+":s.getMinutes().toString(),"s+":s.getSeconds().toString(),"w+":i[s.getDay()]};for(var r in n)a=new RegExp("("+r+")").exec(e),a&&(e=e.replace(a[1],1==a[1].length?n[r]:n[r].padStart(a[1].length,"0")));return e};e.timeFormat=s;var n=function(t,e){for(var a=[],i=t-864e5,n=t+864e5*(e-1),r=i;r<n;)r+=864e5,a.push(s(r,"yyyy-mm-dd"));return a};e.dateLengthInfo=n},e98c:function(t,e,a){"use strict";a.r(e);var i=a("a914"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a},f0b0:function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{activeColor:{type:String,default:uni.$u.props.lineProgress.activeColor},inactiveColor:{type:String,default:uni.$u.props.lineProgress.color},percentage:{type:[String,Number],default:uni.$u.props.lineProgress.inactiveColor},showText:{type:Boolean,default:uni.$u.props.lineProgress.showText},height:{type:[String,Number],default:uni.$u.props.lineProgress.height}}};e.default=i}}]);