(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-discovery-index"],{"0517":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{bgColor:{type:String,default:uni.$u.props.statusBar.bgColor}}};e.default=a},"1eba":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-status-bar",style:[t.style]},[t._t("default")],2)},r=[]},2417:function(t,e,n){"use strict";n.r(e);var a=n("902c"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"3ff3":function(t,e,n){var a=n("ea87");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("920f4b96",a,!0,{sourceMap:!1,shadowMode:!1})},4938:function(t,e,n){"use strict";n.r(e);var a=n("4e96"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"49a7":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */uni-view[data-v-08e2d71f], uni-scroll-view[data-v-08e2d71f], uni-swiper-item[data-v-08e2d71f]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-navbar--fixed[data-v-08e2d71f]{position:fixed;left:0;right:0;top:0;z-index:11}.u-navbar__content[data-v-08e2d71f]{display:flex;flex-direction:row;align-items:center;height:44px;background-color:#9acafc;position:relative;justify-content:center}.u-navbar__content__left[data-v-08e2d71f], .u-navbar__content__right[data-v-08e2d71f]{padding:0 %?26?%;position:absolute;top:0;bottom:0;display:flex;flex-direction:row;align-items:center}.u-navbar__content__left[data-v-08e2d71f]{left:0}.u-navbar__content__left--hover[data-v-08e2d71f]{opacity:.7}.u-navbar__content__left__text[data-v-08e2d71f]{font-size:%?30?%;margin-left:%?6?%}.u-navbar__content__title[data-v-08e2d71f]{text-align:center;font-size:16px;color:#333;font-weight:500}.u-navbar__content__right[data-v-08e2d71f]{right:0}.u-navbar__content__right__txet[data-v-08e2d71f]{font-size:%?30?%;margin-left:%?6?%}',""]),t.exports=e},"4e96":function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("0517")),r={name:"u-status-bar",mixins:[uni.$u.mpMixin,uni.$u.mixin,i.default],data:function(){return{}},computed:{style:function(){var t={};return t.height=uni.$u.addUnit(uni.$u.sys().statusBarHeight,"px"),t.backgroundColor=this.bgColor,uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))}}};e.default=r},"902c":function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("a07a")),r={name:"u-navbar",mixins:[uni.$u.mpMixin,uni.$u.mixin,i.default],data:function(){return{}},methods:{leftClick:function(){this.$emit("leftClick"),this.autoBack&&uni.navigateBack()},rightClick:function(){this.$emit("rightClick")}}};e.default=r},9875:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={uStatusBar:n("a75c").default,uIcon:n("82f1").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-navbar"},[t.fixed&&t.placeholder?n("v-uni-view",{staticClass:"u-navbar__placeholder",style:{height:t.$u.addUnit(t.$u.getPx(t.height)+t.$u.sys().statusBarHeight)}}):t._e(),n("v-uni-view",{class:[t.fixed&&"u-navbar--fixed"]},[t.safeAreaInsetTop?n("u-status-bar",{attrs:{bgColor:t.bgColor}}):t._e(),n("v-uni-view",{staticClass:"u-navbar__content",class:[t.border&&"u-border-bottom"],style:{height:t.$u.addUnit(t.height),backgroundColor:t.bgColor}},[n("v-uni-view",{staticClass:"u-navbar__content__left",attrs:{"hover-class":"u-navbar__content__left--hover","hover-start-time":"150"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.leftClick.apply(void 0,arguments)}}},[t._t("left",[t.leftIcon?n("u-icon",{attrs:{name:t.leftIcon,size:t.leftIconSize,color:t.leftIconColor}}):t._e(),t.leftText?n("v-uni-text",{staticClass:"u-navbar__content__left__text",style:{color:t.leftIconColor}},[t._v(t._s(t.leftText))]):t._e()])],2),t._t("center",[n("v-uni-text",{staticClass:"u-line-1 u-navbar__content__title",style:{width:t.$u.addUnit(t.titleWidth)}},[t._v(t._s(t.title))])]),t.$slots.right||t.rightIcon||t.rightText?n("v-uni-view",{staticClass:"u-navbar__content__right",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.rightClick.apply(void 0,arguments)}}},[t._t("right",[t.rightIcon?n("u-icon",{attrs:{name:t.rightIcon,size:"20px"}}):t._e(),t.rightText?n("v-uni-text",{staticClass:"u-navbar__content__right__text"},[t._v(t._s(t.rightText))]):t._e()])],2):t._e()],2)],1)],1)},r=[]},"9a74":function(t,e,n){"use strict";var a=n("3ff3"),i=n.n(a);i.a},"9c2d":function(t,e,n){var a=n("49a7");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("c37de994",a,!0,{sourceMap:!1,shadowMode:!1})},a07a:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{safeAreaInsetTop:{type:Boolean,default:uni.$u.props.navbar.safeAreaInsetTop},placeholder:{type:Boolean,default:uni.$u.props.navbar.placeholder},fixed:{type:Boolean,default:uni.$u.props.navbar.fixed},border:{type:Boolean,default:uni.$u.props.navbar.border},leftIcon:{type:String,default:uni.$u.props.navbar.leftIcon},leftText:{type:String,default:uni.$u.props.navbar.leftText},rightText:{type:String,default:uni.$u.props.navbar.rightText},rightIcon:{type:String,default:uni.$u.props.navbar.rightIcon},title:{type:[String,Number],default:uni.$u.props.navbar.title},bgColor:{type:String,default:uni.$u.props.navbar.bgColor},titleWidth:{type:[String,Number],default:uni.$u.props.navbar.titleWidth},height:{type:[String,Number],default:uni.$u.props.navbar.height},leftIconSize:{type:[String,Number],default:uni.$u.props.navbar.leftIconSize},leftIconColor:{type:String,default:uni.$u.props.navbar.leftIconColor},autoBack:{type:Boolean,default:uni.$u.props.navbar.autoBack}}};e.default=a},a75c:function(t,e,n){"use strict";n.r(e);var a=n("1eba"),i=n("4938");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("9a74");var u,o=n("f0c5"),c=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"201cd527",null,!1,a["a"],u);e["default"]=c.exports},be66:function(t,e,n){"use strict";var a=n("9c2d"),i=n.n(a);i.a},c0fd:function(t,e,n){"use strict";n.r(e);var a=n("d9b5"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},c591:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={uNavbar:n("e6e5").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"discovery"},[n("v-uni-view",{staticClass:"navbar"},[n("u-navbar",{attrs:{"left-icon-size":"0",title:"朴食健康",fixed:!0}})],1)],1)},r=[]},cf70:function(t,e,n){"use strict";n.r(e);var a=n("c591"),i=n("c0fd");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);var u,o=n("f0c5"),c=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"07c77cbc",null,!1,a["a"],u);e["default"]=c.exports},d9b5:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{}},onLoad:function(t){},onShow:function(){},mounted:function(){},methods:{}};e.default=a},e6e5:function(t,e,n){"use strict";n.r(e);var a=n("9875"),i=n("2417");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("be66");var u,o=n("f0c5"),c=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"08e2d71f",null,!1,a["a"],u);e["default"]=c.exports},ea87:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */.u-status-bar[data-v-201cd527]{width:100%}',""]),t.exports=e}}]);