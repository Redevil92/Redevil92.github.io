"use strict";(self["webpackChunkmy_portfolio"]=self["webpackChunkmy_portfolio"]||[]).push([[252,6845],{6845:function(e,l,a){a.r(l),a.d(l,{VAT_RATE:function(){return u}});const u=.77},20252:function(e,l,a){a.r(l),a.d(l,{default:function(){return V}});var u=a(73396),n=a(49242),t=a(87139),o=a(44870),s=a(11476),i=a(6845);const r=e=>((0,u.dD)("data-v-7f9eb6af"),e=e(),(0,u.Cn)(),e),c=r((()=>(0,u._)("h4",{class:"title",style:{"margin-bottom":"10px"}},"Duties by person",-1))),p={style:{"margin-left":"10px"}},v=r((()=>(0,u._)("label",{for:"people"},[(0,u._)("span",{class:"mdi mdi-account-group label-icon"}),(0,u.Uk)(" People number:")],-1))),d=r((()=>(0,u._)("br",null,null,-1))),m=r((()=>(0,u._)("label",{for:"total-value"},[(0,u._)("span",{class:"mdi mdi-hospital-box label-icon"}),(0,u.Uk)("Goods total value (CHF):")],-1))),_={style:{position:"relative"}},f=r((()=>(0,u._)("label",{for:"total-value-eur"},[(0,u._)("span",{class:"mdi mdi-currency-eur label-icon"}),(0,u.Uk)("Goods total value (EUR):")],-1))),b={class:"exchange-rate"},y=r((()=>(0,u._)("label",{for:"exchange-rate"},"Exchange rate:",-1))),h=r((()=>(0,u._)("br",null,null,-1))),w={class:"results"},g=r((()=>(0,u._)("label",{class:"semibold"},"Amount to tax:",-1))),k=r((()=>(0,u._)("br",null,null,-1))),x=r((()=>(0,u._)("hr",{style:{margin:"5px 0px"}},null,-1))),U=r((()=>(0,u._)("label",{class:"semibold"},"Tax to pay:",-1))),H=(0,u.Uk)();var C;(function(e){e["EUR"]="EUR",e["CHF"]="CHF"})(C||(C={}));var E=(0,u.aZ)({emits:["changeNumberOfPeople","changePersonDuty"],setup(e,{emit:l}){const a=(0,o.iH)(1),r=(0,o.iH)(0),C=(0,o.iH)(0),E=(0,o.iH)(!1),D=(0,o.iH)(1),P=(0,o.iH)(0);(0,u.YP)((()=>P.value),(()=>{l("changePersonDuty",V)}));const V=(0,u.Fl)((()=>P.value*i.VAT_RATE)),Z=e=>{F()},A=()=>{l("changeNumberOfPeople",a.value||1),F()},R=()=>{r.value=C.value/D.value,F()},T=()=>{C.value=r.value*D.value},F=()=>{let e=(r.value||0)-300*(a.value||1);e>0&&(e+=300),P.value=e>0?e:0};return(e,l)=>((0,u.wg)(),(0,u.iD)(u.HY,null,[c,(0,u._)("div",p,[v,(0,u.wy)((0,u._)("input",{type:"number",onKeyup:A,id:"people",default:"1",min:"1",required:"",onBlur:l[0]||(l[0]=()=>{a.value||(a.value=1)}),"onUpdate:modelValue":l[1]||(l[1]=e=>a.value=e)},null,544),[[n.nr,a.value]]),d,m,(0,u.wy)((0,u._)("input",{type:"number",onKeyup:l[2]||(l[2]=e=>{T(),Z(e)}),id:"total-value","onUpdate:modelValue":l[3]||(l[3]=e=>r.value=e)},null,544),[[n.nr,r.value]]),(0,u._)("div",_,[f,(0,u.wy)((0,u._)("input",{type:"number",id:"total-value-eur",onKeyup:R,"onUpdate:modelValue":l[4]||(l[4]=e=>C.value=e)},null,544),[[n.nr,C.value]]),(0,u._)("span",b,[(0,u.Uk)(" [ Exchange rate: "+(0,t.zw)(D.value)+" ] ",1),(0,u._)("span",{class:"mdi mdi-pencil edit-icon",onClick:l[5]||(l[5]=e=>E.value=!E.value)})]),(0,u.Wm)(s.Z,{show:E.value,left:333},{default:(0,u.w5)((()=>[(0,u._)("span",{class:"mdi mdi-close close-icon",onClick:l[6]||(l[6]=e=>E.value=!1)}),y,h,(0,u.wy)((0,u._)("input",{type:"number",id:"exchange-rate",onKeyup:T,"onUpdate:modelValue":l[7]||(l[7]=e=>D.value=e)},null,544),[[n.nr,D.value]])])),_:1},8,["show"])])]),(0,u._)("div",w,[(0,u._)("small",null,[g,(0,u.Uk)(" "+(0,t.zw)(P.value)+" .-",1)]),k,x,U,H,(0,u._)("strong",null,(0,t.zw)((0,o.SU)(V))+" .-",1)])],64))}}),D=a(40089);const P=(0,D.Z)(E,[["__scopeId","data-v-7f9eb6af"]]);var V=P},11476:function(e,l,a){a.d(l,{Z:function(){return i}});var u=a(73396),n=a(87139),t=(0,u.aZ)({props:{show:Boolean,left:Number,width:Number},setup(e){return(l,a)=>e.show?((0,u.wg)(),(0,u.iD)("div",{key:0,class:"tooltip",style:(0,n.j5)(e.left?`left: ${e.left}px`:"left:0px")},[(0,u.WI)(l.$slots,"default")],4)):(0,u.kq)("",!0)}}),o=a(40089);const s=(0,o.Z)(t,[["__scopeId","data-v-0a5c1179"]]);var i=s}}]);
//# sourceMappingURL=252.3176f134.js.map