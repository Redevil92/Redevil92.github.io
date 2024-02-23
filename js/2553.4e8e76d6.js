"use strict";(self["webpackChunkmy_portfolio"]=self["webpackChunkmy_portfolio"]||[]).push([[2553,821],{10821:function(e,l,a){a.r(l),a.d(l,{VAT_RATE_2:function(){return o},VAT_RATE_7:function(){return u}});const u=.077,o=.025},72553:function(e,l,a){a.r(l),a.d(l,{default:function(){return U}});var u=a(56768),o=a(45130),n=a(24232),t=a(90144),v=a(84413),s=a(10821);const i=e=>((0,u.Qi)("data-v-422688de"),e=e(),(0,u.jt)(),e),r=i((()=>(0,u.Lk)("h4",{class:"title",style:{"margin-bottom":"10px"}},"Duties by person",-1))),p={style:{"margin-left":"10px"}},d=i((()=>(0,u.Lk)("label",{for:"people"},[(0,u.Lk)("span",{class:"mdi mdi-account-group label-icon"}),(0,u.eW)(" People number:")],-1))),c=i((()=>(0,u.Lk)("br",null,null,-1))),m=i((()=>(0,u.Lk)("label",{for:"total-value"},[(0,u.Lk)("span",{class:"mdi mdi-hospital-box label-icon"}),(0,u.eW)("Goods total value (CHF):")],-1))),k={style:{position:"relative"}},b=i((()=>(0,u.Lk)("label",{for:"total-value-eur"},[(0,u.Lk)("span",{class:"mdi mdi-currency-eur label-icon"}),(0,u.eW)("Goods total value (EUR):")],-1))),L={class:"exchange-rate"},f=i((()=>(0,u.Lk)("label",{for:"exchange-rate"},"Exchange rate:",-1))),h=i((()=>(0,u.Lk)("br",null,null,-1))),y=i((()=>(0,u.Lk)("hr",{style:{margin:"5px 0px"}},null,-1))),_=i((()=>(0,u.Lk)("label",{for:"total-value"},"Goods with VAT 7.7%:",-1))),g=i((()=>(0,u.Lk)("label",{for:"total-value"},"Goods with VAT 2.5%:",-1))),x={class:"results"},R=i((()=>(0,u.Lk)("label",{class:"semibold"},"Amount to tax:",-1))),A=i((()=>(0,u.Lk)("br",null,null,-1))),C=i((()=>(0,u.Lk)("hr",{style:{margin:"5px 0px"}},null,-1))),K=i((()=>(0,u.Lk)("label",{class:"semibold"},"Tax to pay:",-1)));var T;(function(e){e["EUR"]="EUR",e["CHF"]="CHF"})(T||(T={}));var E=(0,u.pM)({__name:"DutiesByPerson",emits:["changeNumberOfPeople","changePersonDuty"],setup(e,{emit:l}){const a=l,i=(0,t.KR)(1),T=(0,t.KR)(0),E=(0,t.KR)(0),V=(0,t.KR)(!1),w=(0,t.KR)(1),U=(0,t.KR)(0),F=(0,t.KR)(0),W=(0,t.KR)(0),J=(0,u.EW)((()=>0===U.value?0:F.value*s.VAT_RATE_2+W.value*s.VAT_RATE_7));(0,u.wB)((()=>J.value),(()=>{a("changePersonDuty",J.value)}));const P=()=>{a("changeNumberOfPeople",i.value||1),H()},B=()=>{F.value<=T.value?W.value=T.value-F.value:(F.value=T.value,W.value=0)},G=()=>{W.value<=T.value?F.value=T.value-W.value:(W.value=T.value,F.value=0)},D=()=>{T.value=E.value/w.value,W.value=T.value,F.value=0,H()},N=()=>{E.value=T.value*w.value,W.value=T.value,F.value=0,H()},H=()=>{let e=(T.value||0)-300*(i.value||1);e>0&&(e+=300),U.value=e>0?e:0};return(e,l)=>((0,u.uX)(),(0,u.CE)(u.FK,null,[r,(0,u.Lk)("div",p,[d,(0,u.bo)((0,u.Lk)("input",{type:"number",onKeyup:P,onChange:P,id:"people",default:"1",min:"1",required:"",onBlur:l[0]||(l[0]=()=>{i.value||(i.value=1)}),"onUpdate:modelValue":l[1]||(l[1]=e=>i.value=e)},null,544),[[o.Jo,i.value]]),c,m,(0,u.bo)((0,u.Lk)("input",{type:"number",onKeyup:N,onChange:N,id:"total-value","onUpdate:modelValue":l[2]||(l[2]=e=>T.value=e)},null,544),[[o.Jo,T.value]]),(0,u.Lk)("div",k,[b,(0,u.bo)((0,u.Lk)("input",{type:"number",id:"total-value-eur",onKeyup:D,onChange:D,"onUpdate:modelValue":l[3]||(l[3]=e=>E.value=e)},null,544),[[o.Jo,E.value]]),(0,u.Lk)("span",L,[(0,u.eW)(" [ Exchange rate: "+(0,n.v_)(w.value)+" ] ",1),(0,u.Lk)("span",{class:"mdi mdi-pencil edit-icon",onClick:l[4]||(l[4]=e=>V.value=!V.value)})]),(0,u.bF)(v.A,{show:V.value,left:333},{default:(0,u.k6)((()=>[(0,u.Lk)("span",{class:"mdi mdi-close close-icon",onClick:l[5]||(l[5]=e=>V.value=!1)}),f,h,(0,u.bo)((0,u.Lk)("input",{type:"number",id:"exchange-rate",onKeyup:N,onChange:N,"onUpdate:modelValue":l[6]||(l[6]=e=>w.value=e)},null,544),[[o.Jo,w.value]])])),_:1},8,["show"])]),y,(0,u.Lk)("div",null,[(0,u.Lk)("div",null,[_,(0,u.bo)((0,u.Lk)("input",{type:"number",onKeyup:G,onChange:G,id:"total-value","onUpdate:modelValue":l[7]||(l[7]=e=>W.value=e)},null,544),[[o.Jo,W.value]])]),(0,u.Lk)("div",null,[g,(0,u.bo)((0,u.Lk)("input",{type:"number",onKeyup:B,onChange:B,id:"total-value","onUpdate:modelValue":l[8]||(l[8]=e=>F.value=e)},null,544),[[o.Jo,F.value]])])])]),(0,u.Lk)("div",x,[(0,u.Lk)("small",null,[R,(0,u.eW)(" "+(0,n.v_)(U.value.toFixed(2))+" .-",1)]),A,C,K,(0,u.eW)(),(0,u.Lk)("strong",null,(0,n.v_)(J.value.toFixed(2))+" .-",1)])],64))}}),V=a(71241);const w=(0,V.A)(E,[["__scopeId","data-v-422688de"]]);var U=w},84413:function(e,l,a){a.d(l,{A:function(){return s}});var u=a(56768),o=a(24232),n=(0,u.pM)({__name:"BaseTooltip",props:{show:Boolean,left:Number,width:Number},setup(e){return(l,a)=>e.show?((0,u.uX)(),(0,u.CE)("div",{key:0,class:"tooltip",style:(0,o.Tr)(e.left?`left: ${e.left}px`:"left:0px")},[(0,u.RG)(l.$slots,"default")],4)):(0,u.Q3)("",!0)}}),t=a(71241);const v=(0,t.A)(n,[["__scopeId","data-v-0a5c1179"]]);var s=v}}]);
//# sourceMappingURL=2553.4e8e76d6.js.map