"use strict";(self["webpackChunkmy_portfolio"]=self["webpackChunkmy_portfolio"]||[]).push([[8360,268,1576,7330,6845],{77330:function(e,t,l){var a;l.r(t),l.d(t,{dutyFreeAllowances:function(){return n}}),function(e){e["KG"]="kg",e["LITRE"]="litre",e["GRAMME"]="gramme",e["UNIT"]="unit"}(a||(a={}));const n=[{name:"Meat and meat products",description:"Meat and meat products derived from all animal species, excluding wild animals, fish, crustaceans, molluscs and other aquatic invertebrates.",category:"Animal products",note:"Included are:\n      all parts of animal carcasses fit for consumption (with or without bones)\n      sausages containing meat or blood\n      other meat products\n      food preparations with sausage, meat or blood content of over 20 percent by weight\n      This does not include bone marrow, bones for stock, and dog and cat food in individual packets marked as animal feed.",units:[a.KG],allowedQuantityPerPerson:1,dutyUptoPerUnit:[{upTo:10,duty:17},{upTo:1/0,duty:23}],dutyPerUnit:23},{name:"Butter and cream",description:"Butter and cream with a fat content of 15 % or more",category:"Animal products",units:[a.LITRE,a.KG],allowedQuantityPerPerson:1,dutyPerUnit:16,dutyUptoPerUnit:[{upTo:1/0,duty:16}]},{name:"Oils, fats, margarine",description:"Oils, fats, margarine for human consumption",category:"Animal products",units:[a.LITRE,a.KG],allowedQuantityPerPerson:5,dutyPerUnit:2,dutyUptoPerUnit:[{upTo:1/0,duty:2}]},{name:"Alcoholic beverages > 18%",description:"Alcoholic beverages with an alcohol content by volume of over 18%",category:"Alcoholic beverages",units:[a.LITRE],allowedQuantityPerPerson:1,dutyPerUnit:15,dutyUptoPerUnit:[{upTo:1/0,duty:15}]},{name:"Alcoholic beverages < 18%",description:"Alcoholic beverages with an alcohol content by volume of under 18%",category:"Alcoholic beverages",units:[a.LITRE],allowedQuantityPerPerson:5,dutyPerUnit:2,dutyUptoPerUnit:[{upTo:1/0,duty:2}]},{name:"cigarettesIcigars",category:"Tabacco products",units:[a.UNIT],allowedQuantityPerPerson:250,dutyPerUnit:.25,dutyUptoPerUnit:[{upTo:1/0,duty:.25}]},{name:"other tabacco products",category:"Tabacco products",units:[a.GRAMME],allowedQuantityPerPerson:250,dutyPerUnit:.1,dutyUptoPerUnit:[{upTo:1/0,duty:.1}]}]},6845:function(e,t,l){l.r(t),l.d(t,{VAT_RATE_2:function(){return n},VAT_RATE_7:function(){return a}});const a=.077,n=.025},80268:function(e,t,l){l.r(t),l.d(t,{default:function(){return F}});var a=l(73396),n=l(49242),o=l(87139),u=l(44870),i=l(11476),r=l(6845);const s=e=>((0,a.dD)("data-v-07c293bb"),e=e(),(0,a.Cn)(),e),d=s((()=>(0,a._)("h4",{class:"title",style:{"margin-bottom":"10px"}},"Duties by person",-1))),c={style:{"margin-left":"10px"}},p=s((()=>(0,a._)("label",{for:"people"},[(0,a._)("span",{class:"mdi mdi-account-group label-icon"}),(0,a.Uk)(" People number:")],-1))),v=s((()=>(0,a._)("br",null,null,-1))),y=s((()=>(0,a._)("label",{for:"total-value"},[(0,a._)("span",{class:"mdi mdi-hospital-box label-icon"}),(0,a.Uk)("Goods total value (CHF):")],-1))),m={style:{position:"relative"}},f=s((()=>(0,a._)("label",{for:"total-value-eur"},[(0,a._)("span",{class:"mdi mdi-currency-eur label-icon"}),(0,a.Uk)("Goods total value (EUR):")],-1))),g={class:"exchange-rate"},w=s((()=>(0,a._)("label",{for:"exchange-rate"},"Exchange rate:",-1))),_=s((()=>(0,a._)("br",null,null,-1))),b=s((()=>(0,a._)("hr",{style:{margin:"5px 0px"}},null,-1))),h=s((()=>(0,a._)("label",{for:"total-value"},"Goods with VAT 7.7%:",-1))),U=s((()=>(0,a._)("label",{for:"total-value"},"Goods with VAT 2.5%:",-1))),P={class:"results"},k=s((()=>(0,a._)("label",{class:"semibold"},"Amount to tax:",-1))),T=s((()=>(0,a._)("br",null,null,-1))),x=s((()=>(0,a._)("hr",{style:{margin:"5px 0px"}},null,-1))),D=s((()=>(0,a._)("label",{class:"semibold"},"Tax to pay:",-1))),A=(0,a.Uk)();var z;(function(e){e["EUR"]="EUR",e["CHF"]="CHF"})(z||(z={}));var E=(0,a.aZ)({emits:["changeNumberOfPeople","changePersonDuty"],setup(e,{emit:t}){const l=(0,u.iH)(1),s=(0,u.iH)(0),z=(0,u.iH)(0),E=(0,u.iH)(!1),H=(0,u.iH)(1),C=(0,u.iH)(0),F=(0,u.iH)(0),K=(0,u.iH)(0),I=(0,a.Fl)((()=>0===C.value?0:F.value*r.VAT_RATE_2+K.value*r.VAT_RATE_7));(0,a.YP)((()=>I.value),(()=>{t("changePersonDuty",I.value)}));const O=()=>{t("changeNumberOfPeople",l.value||1),Q()},R=()=>{s.value=z.value/H.value,K.value=s.value,F.value=0,Q()},q=()=>{z.value=s.value*H.value,K.value=s.value,F.value=0,Q()},Q=()=>{let e=(s.value||0)-300*(l.value||1);e>0&&(e+=300),C.value=e>0?e:0};return(e,t)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[d,(0,a._)("div",c,[p,(0,a.wy)((0,a._)("input",{type:"number",onKeyup:O,id:"people",default:"1",min:"1",required:"",onBlur:t[0]||(t[0]=()=>{l.value||(l.value=1)}),"onUpdate:modelValue":t[1]||(t[1]=e=>l.value=e)},null,544),[[n.nr,l.value]]),v,y,(0,a.wy)((0,a._)("input",{type:"number",onKeyup:q,id:"total-value","onUpdate:modelValue":t[2]||(t[2]=e=>s.value=e)},null,544),[[n.nr,s.value]]),(0,a._)("div",m,[f,(0,a.wy)((0,a._)("input",{type:"number",id:"total-value-eur",onKeyup:R,"onUpdate:modelValue":t[3]||(t[3]=e=>z.value=e)},null,544),[[n.nr,z.value]]),(0,a._)("span",g,[(0,a.Uk)(" [ Exchange rate: "+(0,o.zw)(H.value)+" ] ",1),(0,a._)("span",{class:"mdi mdi-pencil edit-icon",onClick:t[4]||(t[4]=e=>E.value=!E.value)})]),(0,a.Wm)(i.Z,{show:E.value,left:333},{default:(0,a.w5)((()=>[(0,a._)("span",{class:"mdi mdi-close close-icon",onClick:t[5]||(t[5]=e=>E.value=!1)}),w,_,(0,a.wy)((0,a._)("input",{type:"number",id:"exchange-rate",onKeyup:q,"onUpdate:modelValue":t[6]||(t[6]=e=>H.value=e)},null,544),[[n.nr,H.value]])])),_:1},8,["show"])]),b,(0,a._)("div",null,[(0,a._)("div",null,[h,(0,a.wy)((0,a._)("input",{type:"number",onKeyup:t[7]||(t[7]=()=>{K.value<=s.value?F.value=s.value-K.value:(K.value=s.value,F.value=0)}),id:"total-value","onUpdate:modelValue":t[8]||(t[8]=e=>K.value=e)},null,544),[[n.nr,K.value]])]),(0,a._)("div",null,[U,(0,a.wy)((0,a._)("input",{type:"number",onKeyup:t[9]||(t[9]=()=>{F.value<=s.value?K.value=s.value-F.value:(F.value=s.value,K.value=0)}),id:"total-value","onUpdate:modelValue":t[10]||(t[10]=e=>F.value=e)},null,544),[[n.nr,F.value]])])])]),(0,a._)("div",P,[(0,a._)("small",null,[k,(0,a.Uk)(" "+(0,o.zw)(C.value.toFixed(2))+" .-",1)]),T,x,D,A,(0,a._)("strong",null,(0,o.zw)((0,u.SU)(I).toFixed(2))+" .-",1)])],64))}}),H=l(40089);const C=(0,H.Z)(E,[["__scopeId","data-v-07c293bb"]]);var F=C},71576:function(e,t,l){l.r(t),l.d(t,{default:function(){return K}});var a=l(73396),n=l(44870),o=l(87139),u=l(11476),i=l(77330);const r=e=>((0,a.dD)("data-v-d43277d6"),e=e(),(0,a.Cn)(),e),s=r((()=>(0,a._)("h4",{class:"title",style:{"margin-bottom":"10px"}},"Duties by quantity",-1))),d={style:{position:"relative"}},c=["onClick"],p={class:"item-info"},v={key:0},y=(0,a.Uk)(" Allowed quantity pp: "),m=r((()=>(0,a._)("br",null,null,-1))),f={key:1},g=(0,a.Uk)(" Duty per excess unit up to: "),w=r((()=>(0,a._)("br",null,null,-1))),_={key:0},b={key:1},h={key:2},U=(0,a.Uk)(" Duty per excess unit: "),P=["for"],k={style:{position:"relative"}},T={class:"unit"},x=["onKeyup"],D={class:"note-text"},A=r((()=>(0,a._)("br",null,null,-1))),z={class:"results"},E=r((()=>(0,a._)("label",{class:"semibold"},"Total quantity duty to pay:",-1)));var H=(0,a.aZ)({props:{numberOfPeople:null},emits:["changeQuantityDuty"],setup(e,{emit:t}){const l=e,r=(0,n.iH)(""),H=(0,n.iH)([]),C=(0,n.qj)({}),F=(0,a.Fl)((()=>Object.values(C).reduce(((e,t)=>e+t.duty),0))),K=(0,a.Fl)((()=>{const e={};return i.dutyFreeAllowances.forEach((t=>{e[t.category]?e[t.category].push(t):e[t.category]=[t]})),Object.entries(e)}));(0,a.YP)((()=>F.value),(()=>{t("changeQuantityDuty",F.value)})),(0,a.YP)((()=>l.numberOfPeople),(()=>{I()}));const I=()=>{Object.entries(C).forEach((e=>{const t=i.dutyFreeAllowances.find((t=>t.name===e[0]));t&&O(e[1].quantity,t)}))},O=(e,t)=>{let a=0;const n=e-t.allowedQuantityPerPerson*l.numberOfPeople;if(n>0){const e=t.dutyUptoPerUnit.sort(((e,t)=>e.upTo-t.upTo));for(let t=0;t<e.length;t++){const l=e[t],o=t>0?e[t-1].upTo:0;if(n<=l.upTo){a+=(n-o)*l.duty;break}a+=(l.upTo-o)*l.duty}}C[t.name]={duty:a,quantity:e}},R=e=>{let t=!1;H.value.forEach((l=>{l&&l.contains(e.target)&&(t=!0)})),t||(r.value="")};return(0,a.wF)((()=>{window.addEventListener("click",R)})),(0,a.Ah)((()=>{window.removeEventListener("click",R)})),(e,t)=>((0,a.wg)(),(0,a.iD)("div",null,[s,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,n.SU)(K),((e,t)=>((0,a.wg)(),(0,a.iD)("div",{style:{"margin-left":"10px"},key:t},[(0,a._)("small",null,[(0,a._)("strong",null,(0,o.zw)(e[0]),1)]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e[1],((e,t)=>((0,a.wg)(),(0,a.iD)("div",{key:t,style:{display:"flex","align-items":"center"}},[(0,a._)("div",d,[(0,a._)("span",{class:"mdi mdi-information info-icon",ref_for:!0,ref:e=>{H.value.push(e)},onClick:t=>r.value=e.name},null,8,c),(0,a.Wm)(u.Z,{show:r.value===e.name},{default:(0,a.w5)((()=>[(0,a._)("div",p,[(0,a.Uk)((0,o.zw)(e.description)+" ",1),e.description?((0,a.wg)(),(0,a.iD)("br",v)):(0,a.kq)("",!0),(0,a._)("div",null,[y,(0,a._)("strong",null,(0,o.zw)(e.allowedQuantityPerPerson)+" "+(0,o.zw)(e.units.join("/")),1)]),m,e.dutyUptoPerUnit.length>1?((0,a.wg)(),(0,a.iD)("div",f,[g,w,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.dutyUptoPerUnit,((t,l)=>((0,a.wg)(),(0,a.iD)("div",{key:`${l}-${e.name}-upto`},[t.upTo!==1/0?((0,a.wg)(),(0,a.iD)("li",_,[(0,a.Uk)(" up to "+(0,o.zw)(t.upTo)+" "+(0,o.zw)(e.units.join("/"))+": ",1),(0,a._)("strong",null,(0,o.zw)(t.duty)+" .-",1)])):((0,a.wg)(),(0,a.iD)("li",b,[(0,a.Uk)(" more than "+(0,o.zw)(e.dutyUptoPerUnit[e.dutyUptoPerUnit.length-2].upTo)+" "+(0,o.zw)(e.units.join("/"))+": ",1),(0,a._)("strong",null,(0,o.zw)(e.dutyUptoPerUnit[e.dutyUptoPerUnit.length-1].duty)+".-",1)]))])))),128))])):1===e.dutyUptoPerUnit.length?((0,a.wg)(),(0,a.iD)("div",h,[U,(0,a._)("strong",null,(0,o.zw)(e.dutyUptoPerUnit[e.dutyUptoPerUnit.length-1].duty)+".-",1)])):(0,a.kq)("",!0)])])),_:2},1032,["show"])]),(0,a._)("label",{for:e.name},(0,o.zw)(e.name),9,P),(0,a._)("div",k,[(0,a._)("div",T,(0,o.zw)(e.units.join("/")),1),(0,a._)("input",{onKeyup:t=>O(t.target.value,e),type:"number",id:"people"},null,40,x)]),(0,a._)("span",D," [ "+(0,o.zw)((0,n.SU)(C)[e.name]?(0,n.SU)(C)[e.name].duty.toFixed(2):0)+".- ] ",1),A])))),128))])))),128)),(0,a._)("div",z,[E,(0,a._)("strong",null,(0,o.zw)((0,n.SU)(F).toFixed(2))+" .-",1)])]))}}),C=l(40089);const F=(0,C.Z)(H,[["__scopeId","data-v-d43277d6"]]);var K=F},78360:function(e,t,l){l.r(t),l.d(t,{default:function(){return w}});var a=l(73396),n=l(87139),o=l(44870),u=l(80268),i=l(71576);const r=e=>((0,a.dD)("data-v-dce81954"),e=e(),(0,a.Cn)(),e),s=r((()=>(0,a._)("h3",null,"Duties calculator",-1))),d=(0,a.Uk)("To have more information about the calculation click "),c={style:{"margin-bottom":"50px"}},p={class:"total-duties"},v=(0,a.Uk)(" Total duties to pay: "),y={style:{"margin-left":"10px"}};var m=(0,a.aZ)({props:{itemDialog:{type:Object,required:!0},height:{type:Number,required:!0}},setup(e){const t="https://www.bazg.admin.ch/bazg/en/home/information-individuals/travel-and-purchases--allowances-and-duty-free-limit/importation-into-switzerland/duty-free-allowances--foodstuffs--alcohol-and-tobacco.html",l=(0,o.iH)(1),r=(0,o.iH)(0),m=(0,o.iH)(0);return(o,f)=>((0,a.wg)(),(0,a.iD)("div",{style:(0,n.j5)(`height: ${e.height-4}px; width: calc(100% -4px); `),class:"duties-calculator"},[(0,a._)("div",{style:{"margin-bottom":"30px"}},[s,(0,a._)("small",null,[(0,a._)("span",null,[d,(0,a._)("a",{href:t,target:"_blank"},"here")])])]),(0,a._)("div",c,[(0,a.Wm)(u["default"],{onChangePersonDuty:f[0]||(f[0]=e=>r.value=e),onChangeNumberOfPeople:f[1]||(f[1]=e=>l.value=e)})]),(0,a.Wm)(i["default"],{onChangeQuantityDuty:f[2]||(f[2]=e=>m.value=e),numberOfPeople:l.value},null,8,["numberOfPeople"]),(0,a._)("div",p,[v,(0,a._)("strong",y,(0,n.zw)((r.value+m.value).toFixed(2))+" .-",1)])],4))}}),f=l(40089);const g=(0,f.Z)(m,[["__scopeId","data-v-dce81954"]]);var w=g},11476:function(e,t,l){l.d(t,{Z:function(){return r}});var a=l(73396),n=l(87139),o=(0,a.aZ)({props:{show:Boolean,left:Number,width:Number},setup(e){return(t,l)=>e.show?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"tooltip",style:(0,n.j5)(e.left?`left: ${e.left}px`:"left:0px")},[(0,a.WI)(t.$slots,"default")],4)):(0,a.kq)("",!0)}}),u=l(40089);const i=(0,u.Z)(o,[["__scopeId","data-v-0a5c1179"]]);var r=i}}]);
//# sourceMappingURL=8360.f923bd8e.js.map