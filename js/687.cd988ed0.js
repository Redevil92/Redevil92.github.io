"use strict";(self["webpackChunkmy_portfolio"]=self["webpackChunkmy_portfolio"]||[]).push([[687,6845],{6845:function(e,l,a){a.r(l),a.d(l,{VAT_RATE_2:function(){return n},VAT_RATE_7:function(){return u}});const u=.077,n=.025},50687:function(e,l,a){a.r(l),a.d(l,{default:function(){return P}});var u=a(73396),n=a(49242),t=a(87139),o=a(44870),v=a(11476),i=a(6845);const s=e=>((0,u.dD)("data-v-eda2b418"),e=e(),(0,u.Cn)(),e),r=s((()=>(0,u._)("h4",{class:"title",style:{"margin-bottom":"10px"}},"Duties by person",-1))),p={style:{"margin-left":"10px"}},d=s((()=>(0,u._)("label",{for:"people"},[(0,u._)("span",{class:"mdi mdi-account-group label-icon"}),(0,u.Uk)(" People number:")],-1))),c=s((()=>(0,u._)("br",null,null,-1))),_=s((()=>(0,u._)("label",{for:"total-value"},[(0,u._)("span",{class:"mdi mdi-hospital-box label-icon"}),(0,u.Uk)("Goods total value (CHF):")],-1))),m={style:{position:"relative"}},b=s((()=>(0,u._)("label",{for:"total-value-eur"},[(0,u._)("span",{class:"mdi mdi-currency-eur label-icon"}),(0,u.Uk)("Goods total value (EUR):")],-1))),y={class:"exchange-rate"},f=s((()=>(0,u._)("label",{for:"exchange-rate"},"Exchange rate:",-1))),h=s((()=>(0,u._)("br",null,null,-1))),g=s((()=>(0,u._)("hr",{style:{margin:"5px 0px"}},null,-1))),w=s((()=>(0,u._)("label",{for:"total-value"},"Goods with VAT 7.7%:",-1))),x=s((()=>(0,u._)("label",{for:"total-value"},"Goods with VAT 2.5%:",-1))),U={class:"results"},k=s((()=>(0,u._)("label",{class:"semibold"},"Amount to tax:",-1))),C=s((()=>(0,u._)("br",null,null,-1))),H=s((()=>(0,u._)("hr",{style:{margin:"5px 0px"}},null,-1))),T=s((()=>(0,u._)("label",{class:"semibold"},"Tax to pay:",-1)));var V;(function(e){e["EUR"]="EUR",e["CHF"]="CHF"})(V||(V={}));var A=(0,u.aZ)({__name:"DutiesByPerson",emits:["changeNumberOfPeople","changePersonDuty"],setup(e,{emit:l}){const a=l,s=(0,o.iH)(1),V=(0,o.iH)(0),A=(0,o.iH)(0),E=(0,o.iH)(!1),D=(0,o.iH)(1),P=(0,o.iH)(0),R=(0,o.iH)(0),F=(0,o.iH)(0),K=(0,u.Fl)((()=>0===P.value?0:R.value*i.VAT_RATE_2+F.value*i.VAT_RATE_7));(0,u.YP)((()=>K.value),(()=>{a("changePersonDuty",K.value)}));const Z=()=>{a("changeNumberOfPeople",s.value||1),I()},B=()=>{R.value<=V.value?F.value=V.value-R.value:(R.value=V.value,F.value=0)},G=()=>{F.value<=V.value?R.value=V.value-F.value:(F.value=V.value,R.value=0)},N=()=>{V.value=A.value/D.value,F.value=V.value,R.value=0,I()},z=()=>{A.value=V.value*D.value,F.value=V.value,R.value=0,I()},I=()=>{let e=(V.value||0)-300*(s.value||1);e>0&&(e+=300),P.value=e>0?e:0};return(e,l)=>((0,u.wg)(),(0,u.iD)(u.HY,null,[r,(0,u._)("div",p,[d,(0,u.wy)((0,u._)("input",{type:"number",onKeyup:Z,onChange:Z,id:"people",default:"1",min:"1",required:"",onBlur:l[0]||(l[0]=()=>{s.value||(s.value=1)}),"onUpdate:modelValue":l[1]||(l[1]=e=>s.value=e)},null,544),[[n.nr,s.value]]),c,_,(0,u.wy)((0,u._)("input",{type:"number",onKeyup:z,onChange:z,id:"total-value","onUpdate:modelValue":l[2]||(l[2]=e=>V.value=e)},null,544),[[n.nr,V.value]]),(0,u._)("div",m,[b,(0,u.wy)((0,u._)("input",{type:"number",id:"total-value-eur",onKeyup:N,onChange:N,"onUpdate:modelValue":l[3]||(l[3]=e=>A.value=e)},null,544),[[n.nr,A.value]]),(0,u._)("span",y,[(0,u.Uk)(" [ Exchange rate: "+(0,t.zw)(D.value)+" ] ",1),(0,u._)("span",{class:"mdi mdi-pencil edit-icon",onClick:l[4]||(l[4]=e=>E.value=!E.value)})]),(0,u.Wm)(v.Z,{show:E.value,left:333},{default:(0,u.w5)((()=>[(0,u._)("span",{class:"mdi mdi-close close-icon",onClick:l[5]||(l[5]=e=>E.value=!1)}),f,h,(0,u.wy)((0,u._)("input",{type:"number",id:"exchange-rate",onKeyup:z,onChange:z,"onUpdate:modelValue":l[6]||(l[6]=e=>D.value=e)},null,544),[[n.nr,D.value]])])),_:1},8,["show"])]),g,(0,u._)("div",null,[(0,u._)("div",null,[w,(0,u.wy)((0,u._)("input",{type:"number",onKeyup:G,onChange:G,id:"total-value","onUpdate:modelValue":l[7]||(l[7]=e=>F.value=e)},null,544),[[n.nr,F.value]])]),(0,u._)("div",null,[x,(0,u.wy)((0,u._)("input",{type:"number",onKeyup:B,onChange:B,id:"total-value","onUpdate:modelValue":l[8]||(l[8]=e=>R.value=e)},null,544),[[n.nr,R.value]])])])]),(0,u._)("div",U,[(0,u._)("small",null,[k,(0,u.Uk)(" "+(0,t.zw)(P.value.toFixed(2))+" .-",1)]),C,H,T,(0,u.Uk)(),(0,u._)("strong",null,(0,t.zw)(K.value.toFixed(2))+" .-",1)])],64))}}),E=a(40089);const D=(0,E.Z)(A,[["__scopeId","data-v-eda2b418"]]);var P=D},11476:function(e,l,a){a.d(l,{Z:function(){return i}});var u=a(73396),n=a(87139),t=(0,u.aZ)({__name:"BaseTooltip",props:{show:Boolean,left:Number,width:Number},setup(e){return(l,a)=>e.show?((0,u.wg)(),(0,u.iD)("div",{key:0,class:"tooltip",style:(0,n.j5)(e.left?`left: ${e.left}px`:"left:0px")},[(0,u.WI)(l.$slots,"default")],4)):(0,u.kq)("",!0)}}),o=a(40089);const v=(0,o.Z)(t,[["__scopeId","data-v-0a5c1179"]]);var i=v}}]);
//# sourceMappingURL=687.cd988ed0.js.map