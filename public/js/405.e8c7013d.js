"use strict";(self["webpackChunkartistica"]=self["webpackChunkartistica"]||[]).push([[405],{5405:function(t,e,i){i.r(e),i.d(e,{default:function(){return w}});var s=i(1828),a=i(4437),o=i(1200),n=i(9868),r=i(3651),l=i(8574),c=i(4987),p=i(1050),u=(0,c.Z)(n.Z,(0,r.Z)("footer",["height","inset"]),l.Z).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty(){return this.inset?"insetFooter":"footer"},classes(){return{...n.Z.options.computed.classes.call(this),"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset}},computedBottom(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned(){return Boolean(this.absolute||this.fixed||this.app)},styles(){const t=parseInt(this.height);return{...n.Z.options.computed.styles.call(this),height:isNaN(t)?t:(0,p.kb)(t),left:(0,p.kb)(this.computedLeft),right:(0,p.kb)(this.computedRight),bottom:(0,p.kb)(this.computedBottom)}}},methods:{updateApplication(){const t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render(t){const e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}}),d=i(5057),h=i(2469),f=i(5294),g=function(){var t=this,e=t._self._c;return e(u,{class:{"d-none":"/home-two"==t.$route.path},attrs:{dark:"",color:"secondary"}},[e(o.Z,[e(f.Z,[e(a.Z,{attrs:{cols:"12",xl:"4",lg:"9",md:"12",sm:"9"}},[e(h.Z,{staticClass:"me-2 logo d-md-block d-none",attrs:{width:"100",src:i(9218),alt:""}}),e("p",{staticClass:"footer-text mb-5"},[t._v("Somos una tienda de productos")])],1),e(a.Z,{attrs:{cols:"12",xl:"3",lg:"3",md:"3",sm:"6"}},[e("h2",{staticClass:"mb-5"},[t._v("Contacta con nosotros")]),e("p",{staticClass:"footer-text"},[t._v(" Uyustus entre la Galeria multicentro y Galeria arcangel. ")]),e("p",{staticClass:"footer-text mb-5"},[t._v("Teléfono: 68004995")]),t._l(t.social,(function(i){return e(s.Z,{key:i.icon,staticClass:"me-2 white--text",attrs:{target:"_blank",href:i.url,elevation:"0","x-small":"",fab:"",dark:"",color:"secondary darken-1"}},[e(d.Z,{attrs:{small:"",size:"24px"}},[t._v(" "+t._s(i.icon)+" ")])],1)}))],2)],1)],1)],1)},m=[],y={name:"FooterComponent",data:()=>({social:[{icon:"mdi-facebook",url:"https://www.facebook.com/Artistica.La.Paz/"},{icon:"mdi-instagram",url:"https://www.instagram.com/artistica.la.paz/"},{icon:"mdi-whatsapp",url:"https://l.instagram.com/?u=https%3A%2F%2Fchat.whatsapp.com%2FJVMXLnJR5jOCXHDPJIszIr&e=ATOxae3UcwuuPO7LyULcMxChWHfgZwSRITlsgqAmsbD77DlSn9g4qi6Ty16fs38NtWwD56MNeVAeTA8cqUyWVQ&s=1"}],aboutUs:["Careers","Our Stores","Our Cares","Terms & Conditions","Privacy Policy"],customerCare:["Help Center","How to Buy","Track Your Order","Corporate & Bulk Purchasing","Returns & Funds"]})},v=y,b=i(1001),C=(0,b.Z)(v,g,m,!1,null,"367f749d",null),w=C.exports},5294:function(t,e,i){i(7658),i(1884);var s=i(144),a=i(2653),o=i(1050);const n=["sm","md","lg","xl"],r=["start","end","center"];function l(t,e){return n.reduce(((i,s)=>(i[t+(0,o.jC)(s)]=e(),i)),{})}const c=t=>[...r,"baseline","stretch"].includes(t),p=l("align",(()=>({type:String,default:null,validator:c}))),u=t=>[...r,"space-between","space-around"].includes(t),d=l("justify",(()=>({type:String,default:null,validator:u}))),h=t=>[...r,"space-between","space-around","stretch"].includes(t),f=l("alignContent",(()=>({type:String,default:null,validator:h}))),g={align:Object.keys(p),justify:Object.keys(d),alignContent:Object.keys(f)},m={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,i){let s=m[t];if(null!=i){if(e){const i=e.replace(t,"");s+=`-${i}`}return s+=`-${i}`,s.toLowerCase()}}const v=new Map;e.Z=s["default"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...p,justify:{type:String,default:null,validator:u},...d,alignContent:{type:String,default:null,validator:h},...f},render(t,{props:e,data:i,children:s}){let o="";for(const a in e)o+=String(e[a]);let n=v.get(o);if(!n){let t;for(t in n=[],g)g[t].forEach((i=>{const s=e[i],a=y(t,i,s);a&&n.push(a)}));n.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),v.set(o,n)}return t(e.tag,(0,a.ZP)(i,{staticClass:"row",class:n}),s)}})},3651:function(t,e,i){i.d(e,{Z:function(){return o}});var s=i(8386),a=i(4987);function o(t,e=[]){return(0,a.Z)((0,s.d)(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty(){return t}},watch:{app(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated(){this.callUpdate()},created(){for(let t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted(){this.callUpdate()},deactivated(){this.removeApplication()},destroyed(){this.removeApplication()},methods:{callUpdate(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication(t=!1){(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:()=>0}})}},8574:function(t,e,i){var s=i(144);e.Z=s["default"].extend({name:"ssr-bootable",data:()=>({isBooted:!1}),mounted(){window.requestAnimationFrame((()=>{this.$el.setAttribute("data-booted","true"),this.isBooted=!0}))}})},9218:function(t,e,i){t.exports=i.p+"img/logo.8f64c26e.jpg"}}]);
//# sourceMappingURL=405.e8c7013d.js.map