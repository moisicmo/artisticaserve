"use strict";(self["webpackChunkartistica"]=self["webpackChunkartistica"]||[]).push([[163],{3891:function(t,e,o){o.r(e),o.d(e,{default:function(){return $}});o(7658);var r=o(9868),s=o(2469),i=o(1050),l=o(6596),n=r.Z.extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:()=>({isExtended:!1}),computed:{computedHeight(){const t=this.computedContentHeight;if(!this.isExtended)return t;const e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes(){return{...r.Z.options.computed.classes.call(this),"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent}},isCollapsed(){return this.collapse},isProminent(){return this.prominent},styles(){return{...this.measurableStyles,height:(0,i.kb)(this.computedHeight)}}},created(){const t=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,l.fK)(t,e,this)}))},methods:{genBackground(){const t={height:(0,i.kb)(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(s.Z,{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:(0,i.kb)(this.computedContentHeight)}},(0,i.z9)(this))},genExtension(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:(0,i.kb)(this.extensionHeight)}},(0,i.z9)(this,"extension"))}},render(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;const e=[this.genContent()],o=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,o,e)}}),a=o(8998),c=o(3651),h=o(480),d=o(8574),p=o(6470),u=o(4987);const v=(0,u.Z)(n,h.Z,d.Z,p.Z,(0,c.Z)("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));var m=v.extend({name:"v-app-bar",directives:{Scroll:a.Z},provide(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data(){return{isActive:this.value}},computed:{applicationProperty(){return this.bottom?"bottom":"top"},canScroll(){return h.Z.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes(){return{...n.options.computed.classes.call(this),"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll}},scrollRatio(){const t=this.computedScrollThreshold;return Math.max((t-this.currentScroll)/t,0)},computedContentHeight(){if(!this.shrinkOnScroll)return n.options.computed.computedContentHeight.call(this);const t=this.dense?48:56,e=this.computedOriginalHeight;return t+(e-t)*this.scrollRatio},computedFontSize(){if(!this.isProminent)return;const t=1.25,e=1.5;return t+(e-t)*this.scrollRatio},computedLeft(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop(){return this.app?this.$vuetify.application.bar:0},computedOpacity(){if(this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight(){let t=n.options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;const t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed(){return this.collapseOnScroll?this.currentScroll>0:n.options.computed.isCollapsed.call(this)},isProminent(){return n.options.computed.isProminent.call(this)||this.shrinkOnScroll},styles(){return{...n.options.computed.styles.call(this),fontSize:(0,i.kb)(this.computedFontSize,"rem"),marginTop:(0,i.kb)(this.computedMarginTop),transform:`translateY(${(0,i.kb)(this.computedTransform)})`,left:(0,i.kb)(this.computedLeft),right:(0,i.kb)(this.computedRight)}}},watch:{canScroll:"onScroll",computedTransform(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll(t){this.isActive=!t||0!==this.currentScroll},hideOnScroll(t){this.isActive=!t||this.currentScroll<this.computedScrollThreshold}},created(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground(){const t=n.options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render(t){const e=n.options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}}),g=o(7720),S=o(1828),f=o(4437),b=o(1200),x=o(5057),T=o(5251);const C=(0,i.Ji)("v-toolbar__title");(0,i.Ji)("v-toolbar__items");var y=function(){var t=this,e=t._self._c;return e("div",[e(m,{staticClass:"sub-topbar",attrs:{height:"100",app:"",color:"white py-1"}},[e(b.Z,[e("div",{staticClass:"d-flex justify-space-between align-center"},[e(C,{staticClass:"d-flex align-center"},[e("div",{staticClass:"logo"},[e("router-link",{attrs:{to:"/"}},[e(s.Z,{staticClass:"me-2 logo d-md-block d-none",attrs:{width:"100",src:o(9218),alt:""}})],1)],1)]),e(f.Z,{attrs:{cols:"12",md:"7"}},[e("div",{staticClass:"search-bar d-flex p-relative"},[e(T.Z,{attrs:{"on-change":"",placeholder:t.textSearch,filled:"",rounded:"","hide-details":"",dense:"","prepend-inner-icon":"mdi-magnify"},model:{value:t.textSearchVar,callback:function(e){t.textSearchVar=e},expression:"textSearchVar"}}),e(S.Z,{staticClass:"text-capitalize search-bar-dropdown px-10 font-600",attrs:{color:"primary"}},[t._v(" Buscar ")])],1)]),e("div",{staticClass:"d-md-block d-none"},[e(g.Z,{attrs:{bordered:"",color:"error",content:0==t.getCartProducts.length?"0":t.getCartProducts.length,overlap:""}},[e(S.Z,{attrs:{elevation:"0",fab:"",color:"grey lighten-2",small:""},on:{click:function(e){t.drawer=!0}}},[e(x.Z,{attrs:{color:""}},[t._v("mdi-cart")])],1)],1)],1)],1)])],1),e("drawerNav",{attrs:{visible:t.drawer},on:{close:function(e){t.drawer=!1}}})],1)},k=[],O=o(629),w=o(5463),B=o(598),_={name:"BaseAppBar",directives:{onClickaway:w.XM},components:{drawerNav:B.Z},computed:{...(0,O.Se)(["getCartProducts"]),cartTotal(){let t=0;return this.getCartProducts.forEach((e=>{t+=e.precio*e.cantidadInit})),t},textSearch:{get(){return this.addTextSearch(this.textSearchVar),this.textSearchVar}}},data:()=>({textSearchVar:"",cartCount:0,colorNav:!1,dialog:!1,isToggleNavbar:!1,itemTwo:["Foo","Bar","Fizz","Buzz"],drawer:!1,group:null}),methods:{...(0,O.nv)(["addCart","removeCart","addTextSearch"]),orden(){console.log("MI ORDEN ES")},toggleNavbar(){"/"==this.$route.path?this.isToggleNavbar=!1:this.isToggleNavbar=!this.isToggleNavbar},away(){this.isToggleNavbar=!1},removeCartx(t){this.removeCart(t)},addCartx(t){this.addCart(t)}}},E=_,Z=o(1001),H=(0,Z.Z)(E,y,k,!1,null,"2ddcecd2",null),$=H.exports},8998:function(t,e,o){function r(t,e,o){const{self:r=!1}=e.modifiers||{},s=e.value,i="object"===typeof s&&s.options||{passive:!0},l="function"===typeof s||"handleEvent"in s?s:s.handler,n=r?t:e.arg?document.querySelector(e.arg):window;n&&(n.addEventListener("scroll",l,i),t._onScroll=Object(t._onScroll),t._onScroll[o.context._uid]={handler:l,options:i,target:r?void 0:n})}function s(t,e,o){var r;if(!(null===(r=t._onScroll)||void 0===r?void 0:r[o.context._uid]))return;const{handler:s,options:i,target:l=t}=t._onScroll[o.context._uid];l.removeEventListener("scroll",s,i),delete t._onScroll[o.context._uid]}o.d(e,{X:function(){return i}});const i={inserted:r,unbind:s};e.Z=i},480:function(t,e,o){var r=o(8998),s=o(6596),i=o(144);e.Z=i["default"].extend({name:"scrollable",directives:{Scroll:r.X},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:()=>({currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}),computed:{canScroll(){return"undefined"!==typeof window},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp(){this.savedScroll=this.savedScroll||this.currentScroll},isActive(){this.savedScroll=0}},mounted(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||(0,s.Kd)(`Unable to locate element with identifier ${this.scrollTarget}`,this))},methods:{onScroll(){this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((()=>{Math.abs(this.currentScroll-this.savedScroll)>this.computedScrollThreshold&&this.thresholdMet()})))},thresholdMet(){}}})},5463:function(t,e,o){var r=o(144);r="default"in r?r["default"]:r;var s="2.2.2",i=/^2\./.test(r.version);i||r.util.warn("VueClickaway "+s+" only supports Vue 2.x, and does not support Vue "+r.version);var l="_vue_clickaway_handler";function n(t,e,o){a(t);var r=o.context,s=e.value;if("function"===typeof s){var i=!1;setTimeout((function(){i=!0}),0),t[l]=function(e){var o=e.path||(e.composedPath?e.composedPath():void 0);if(i&&(o?o.indexOf(t)<0:!t.contains(e.target)))return s.call(r,e)},document.documentElement.addEventListener("click",t[l],!1)}}function a(t){document.documentElement.removeEventListener("click",t[l],!1),delete t[l]}var c={bind:n,update:function(t,e){e.value!==e.oldValue&&n(t,e)},unbind:a},h={directives:{onClickaway:c}};e.XM=c},9218:function(t,e,o){t.exports=o.p+"img/logo.8f64c26e.jpg"}}]);
//# sourceMappingURL=163.a4f7d13e.js.map