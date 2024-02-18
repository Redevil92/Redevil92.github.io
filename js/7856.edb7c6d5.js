"use strict";(self["webpackChunkmy_portfolio"]=self["webpackChunkmy_portfolio"]||[]).push([[7856,687,5121,7330,6845],{77330:function(e,t,l){var a;l.r(t),l.d(t,{dutyFreeAllowances:function(){return n}}),function(e){e["KG"]="kg",e["LITRE"]="litre",e["GRAMME"]="gramme",e["UNIT"]="unit"}(a||(a={}));const n=[{name:"Meat and meat products",description:"Meat and meat products derived from all animal species, excluding wild animals, fish, crustaceans, molluscs and other aquatic invertebrates.",category:"Animal products",note:"Included are:\n      all parts of animal carcasses fit for consumption (with or without bones)\n      sausages containing meat or blood\n      other meat products\n      food preparations with sausage, meat or blood content of over 20 percent by weight\n      This does not include bone marrow, bones for stock, and dog and cat food in individual packets marked as animal feed.",units:[a.KG],allowedQuantityPerPerson:1,dutyUptoPerUnit:[{upTo:10,duty:17},{upTo:1/0,duty:23}],dutyPerUnit:23},{name:"Butter and cream",description:"Butter and cream with a fat content of 15 % or more",category:"Animal products",units:[a.LITRE,a.KG],allowedQuantityPerPerson:1,dutyPerUnit:16,dutyUptoPerUnit:[{upTo:1/0,duty:16}]},{name:"Oils, fats, margarine",description:"Oils, fats, margarine for human consumption",category:"Animal products",units:[a.LITRE,a.KG],allowedQuantityPerPerson:5,dutyPerUnit:2,dutyUptoPerUnit:[{upTo:1/0,duty:2}]},{name:"Alcoholic beverages > 18%",description:"Alcoholic beverages with an alcohol content by volume of over 18%",category:"Alcoholic beverages",units:[a.LITRE],allowedQuantityPerPerson:1,dutyPerUnit:15,dutyUptoPerUnit:[{upTo:1/0,duty:15}]},{name:"Alcoholic beverages < 18%",description:"Alcoholic beverages with an alcohol content by volume of under 18%",category:"Alcoholic beverages",units:[a.LITRE],allowedQuantityPerPerson:5,dutyPerUnit:2,dutyUptoPerUnit:[{upTo:1/0,duty:2}]},{name:"cigarettesIcigars",category:"Tabacco products",units:[a.UNIT],allowedQuantityPerPerson:250,dutyPerUnit:.25,dutyUptoPerUnit:[{upTo:1/0,duty:.25}]},{name:"other tabacco products",category:"Tabacco products",units:[a.GRAMME],allowedQuantityPerPerson:250,dutyPerUnit:.1,dutyUptoPerUnit:[{upTo:1/0,duty:.1}]}]},6845:function(e,t,l){l.r(t),l.d(t,{VAT_RATE_2:function(){return n},VAT_RATE_7:function(){return a}});const a=.077,n=.025},50687:function(e,t,l){l.r(t),l.d(t,{default:function(){return H}});var a=l(73396),n=l(49242),o=l(87139),u=l(44870),i=l(11476),r=l(6845);const s=e=>((0,a.dD)("data-v-eda2b418"),e=e(),(0,a.Cn)(),e),d=s((()=>(0,a._)("h4",{class:"title",style:{"margin-bottom":"10px"}},"Duties by person",-1))),c={style:{"margin-left":"10px"}},p=s((()=>(0,a._)("label",{for:"people"},[(0,a._)("span",{class:"mdi mdi-account-group label-icon"}),(0,a.Uk)(" People number:")],-1))),v=s((()=>(0,a._)("br",null,null,-1))),y=s((()=>(0,a._)("label",{for:"total-value"},[(0,a._)("span",{class:"mdi mdi-hospital-box label-icon"}),(0,a.Uk)("Goods total value (CHF):")],-1))),m={style:{position:"relative"}},g=s((()=>(0,a._)("label",{for:"total-value-eur"},[(0,a._)("span",{class:"mdi mdi-currency-eur label-icon"}),(0,a.Uk)("Goods total value (EUR):")],-1))),_={class:"exchange-rate"},f=s((()=>(0,a._)("label",{for:"exchange-rate"},"Exchange rate:",-1))),h=s((()=>(0,a._)("br",null,null,-1))),w=s((()=>(0,a._)("hr",{style:{margin:"5px 0px"}},null,-1))),b=s((()=>(0,a._)("label",{for:"total-value"},"Goods with VAT 7.7%:",-1))),U=s((()=>(0,a._)("label",{for:"total-value"},"Goods with VAT 2.5%:",-1))),P={class:"results"},k=s((()=>(0,a._)("label",{class:"semibold"},"Amount to tax:",-1))),T=s((()=>(0,a._)("br",null,null,-1))),x=s((()=>(0,a._)("hr",{style:{margin:"5px 0px"}},null,-1))),D=s((()=>(0,a._)("label",{class:"semibold"},"Tax to pay:",-1)));var A;(function(e){e["EUR"]="EUR",e["CHF"]="CHF"})(A||(A={}));var C=(0,a.aZ)({__name:"DutiesByPerson",emits:["changeNumberOfPeople","changePersonDuty"],setup(e,{emit:t}){const l=t,s=(0,u.iH)(1),A=(0,u.iH)(0),C=(0,u.iH)(0),z=(0,u.iH)(!1),E=(0,u.iH)(1),H=(0,u.iH)(0),F=(0,u.iH)(0),K=(0,u.iH)(0),I=(0,a.Fl)((()=>0===H.value?0:F.value*r.VAT_RATE_2+K.value*r.VAT_RATE_7));(0,a.YP)((()=>I.value),(()=>{l("changePersonDuty",I.value)}));const O=()=>{l("changeNumberOfPeople",s.value||1),j()},R=()=>{F.value<=A.value?K.value=A.value-F.value:(F.value=A.value,K.value=0)},q=()=>{K.value<=A.value?F.value=A.value-K.value:(K.value=A.value,F.value=0)},Q=()=>{A.value=C.value/E.value,K.value=A.value,F.value=0,j()},V=()=>{C.value=A.value*E.value,K.value=A.value,F.value=0,j()},j=()=>{let e=(A.value||0)-300*(s.value||1);e>0&&(e+=300),H.value=e>0?e:0};return(e,t)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[d,(0,a._)("div",c,[p,(0,a.wy)((0,a._)("input",{type:"number",onKeyup:O,onChange:O,id:"people",default:"1",min:"1",required:"",onBlur:t[0]||(t[0]=()=>{s.value||(s.value=1)}),"onUpdate:modelValue":t[1]||(t[1]=e=>s.value=e)},null,544),[[n.nr,s.value]]),v,y,(0,a.wy)((0,a._)("input",{type:"number",onKeyup:V,onChange:V,id:"total-value","onUpdate:modelValue":t[2]||(t[2]=e=>A.value=e)},null,544),[[n.nr,A.value]]),(0,a._)("div",m,[g,(0,a.wy)((0,a._)("input",{type:"number",id:"total-value-eur",onKeyup:Q,onChange:Q,"onUpdate:modelValue":t[3]||(t[3]=e=>C.value=e)},null,544),[[n.nr,C.value]]),(0,a._)("span",_,[(0,a.Uk)(" [ Exchange rate: "+(0,o.zw)(E.value)+" ] ",1),(0,a._)("span",{class:"mdi mdi-pencil edit-icon",onClick:t[4]||(t[4]=e=>z.value=!z.value)})]),(0,a.Wm)(i.Z,{show:z.value,left:333},{default:(0,a.w5)((()=>[(0,a._)("span",{class:"mdi mdi-close close-icon",onClick:t[5]||(t[5]=e=>z.value=!1)}),f,h,(0,a.wy)((0,a._)("input",{type:"number",id:"exchange-rate",onKeyup:V,onChange:V,"onUpdate:modelValue":t[6]||(t[6]=e=>E.value=e)},null,544),[[n.nr,E.value]])])),_:1},8,["show"])]),w,(0,a._)("div",null,[(0,a._)("div",null,[b,(0,a.wy)((0,a._)("input",{type:"number",onKeyup:q,onChange:q,id:"total-value","onUpdate:modelValue":t[7]||(t[7]=e=>K.value=e)},null,544),[[n.nr,K.value]])]),(0,a._)("div",null,[U,(0,a.wy)((0,a._)("input",{type:"number",onKeyup:R,onChange:R,id:"total-value","onUpdate:modelValue":t[8]||(t[8]=e=>F.value=e)},null,544),[[n.nr,F.value]])])])]),(0,a._)("div",P,[(0,a._)("small",null,[k,(0,a.Uk)(" "+(0,o.zw)(H.value.toFixed(2))+" .-",1)]),T,x,D,(0,a.Uk)(),(0,a._)("strong",null,(0,o.zw)(I.value.toFixed(2))+" .-",1)])],64))}}),z=l(40089);const E=(0,z.Z)(C,[["__scopeId","data-v-eda2b418"]]);var H=E},95121:function(e,t,l){l.r(t),l.d(t,{default:function(){return E}});var a=l(73396),n=l(87139),o=l(11476),u=l(44870),i=l(77330);const r=e=>((0,a.dD)("data-v-39f67be9"),e=e(),(0,a.Cn)(),e),s=r((()=>(0,a._)("h4",{class:"title",style:{"margin-bottom":"10px"}},"Duties by quantity",-1))),d=["for"],c={style:{position:"relative"}},p=["onClick"],v={class:"item-info"},y={key:0},m=r((()=>(0,a._)("br",null,null,-1))),g={key:1},_=r((()=>(0,a._)("br",null,null,-1))),f={key:0},h={key:1},w={key:2},b={style:{position:"relative"}},U={class:"unit"},P=["onKeyup","onChange"],k={class:"note-text"},T=r((()=>(0,a._)("br",null,null,-1))),x={class:"results"},D=r((()=>(0,a._)("label",{class:"semibold"},"Total quantity duty to pay:",-1)));var A=(0,a.aZ)({__name:"DutiesByQuantity",props:{numberOfPeople:{}},emits:["changeQuantityDuty"],setup(e,{emit:t}){const l=t,r=(0,u.iH)(""),A=(0,u.iH)([]),C=e,z=(0,u.qj)({}),E=(0,a.Fl)((()=>Object.values(z).reduce(((e,t)=>e+t.duty),0))),H=(0,a.Fl)((()=>{const e={};return i.dutyFreeAllowances.forEach((t=>{e[t.category]?e[t.category].push(t):e[t.category]=[t]})),Object.entries(e)}));(0,a.YP)((()=>E.value),(()=>{l("changeQuantityDuty",E.value)})),(0,a.YP)((()=>C.numberOfPeople),(()=>{F()}));const F=()=>{Object.entries(z).forEach((e=>{const t=i.dutyFreeAllowances.find((t=>t.name===e[0]));t&&K(e[1].quantity,t)}))},K=(e,t)=>{let l=0;const a=e-t.allowedQuantityPerPerson*C.numberOfPeople;if(a>0){const e=t.dutyUptoPerUnit.sort(((e,t)=>e.upTo-t.upTo));for(let t=0;t<e.length;t++){const n=e[t],o=t>0?e[t-1].upTo:0;if(a<=n.upTo){l+=(a-o)*n.duty;break}l+=(n.upTo-o)*n.duty}}z[t.name]={duty:l,quantity:e}},I=e=>{let t=!1;A.value.forEach((l=>{l&&l.contains(e.target)&&(t=!0)})),t||(r.value="")};return(0,a.wF)((()=>{window.addEventListener("click",I)})),(0,a.Ah)((()=>{window.removeEventListener("click",I)})),(e,t)=>((0,a.wg)(),(0,a.iD)("div",null,[s,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(H.value,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{style:{"margin-left":"10px"},key:t},[(0,a._)("small",null,[(0,a._)("strong",null,(0,n.zw)(e[0]),1)]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e[1],((e,t)=>((0,a.wg)(),(0,a.iD)("div",{key:t,style:{display:"flex","align-items":"center"}},[(0,a._)("label",{for:e.name},[(0,a._)("div",c,[(0,a._)("span",{class:"mdi mdi-information info-icon",ref_for:!0,ref:e=>{A.value.push(e)},onClick:t=>r.value=e.name},null,8,p),(0,a.Wm)(o.Z,{show:r.value===e.name},{default:(0,a.w5)((()=>[(0,a._)("div",v,[(0,a.Uk)((0,n.zw)(e.description)+" ",1),e.description?((0,a.wg)(),(0,a.iD)("br",y)):(0,a.kq)("",!0),(0,a._)("div",null,[(0,a.Uk)(" Allowed quantity pp: "),(0,a._)("strong",null,(0,n.zw)(e.allowedQuantityPerPerson)+" "+(0,n.zw)(e.units.join("/")),1)]),m,e.dutyUptoPerUnit.length>1?((0,a.wg)(),(0,a.iD)("div",g,[(0,a.Uk)(" Duty per excess unit up to: "),_,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.dutyUptoPerUnit,((t,l)=>((0,a.wg)(),(0,a.iD)("div",{key:`${l}-${e.name}-upto`},[t.upTo!==1/0?((0,a.wg)(),(0,a.iD)("li",f,[(0,a.Uk)(" up to "+(0,n.zw)(t.upTo)+" "+(0,n.zw)(e.units.join("/"))+": ",1),(0,a._)("strong",null,(0,n.zw)(t.duty)+" .-",1)])):((0,a.wg)(),(0,a.iD)("li",h,[(0,a.Uk)(" more than "+(0,n.zw)(e.dutyUptoPerUnit[e.dutyUptoPerUnit.length-2].upTo)+" "+(0,n.zw)(e.units.join("/"))+": ",1),(0,a._)("strong",null,(0,n.zw)(e.dutyUptoPerUnit[e.dutyUptoPerUnit.length-1].duty)+".-",1)]))])))),128))])):1===e.dutyUptoPerUnit.length?((0,a.wg)(),(0,a.iD)("div",w,[(0,a.Uk)(" Duty per excess unit: "),(0,a._)("strong",null,(0,n.zw)(e.dutyUptoPerUnit[e.dutyUptoPerUnit.length-1].duty)+".-",1)])):(0,a.kq)("",!0)])])),_:2},1032,["show"])]),(0,a.Uk)(" "+(0,n.zw)(e.name),1)],8,d),(0,a._)("div",b,[(0,a._)("div",U,(0,n.zw)(e.units.join("/")),1),(0,a._)("input",{onKeyup:t=>K(t.target.value,e),onChange:t=>K(t.target.value,e),type:"number",id:"people"},null,40,P)]),(0,a._)("span",k," [ "+(0,n.zw)(z[e.name]?z[e.name].duty.toFixed(2):0)+".- ] ",1),T])))),128))])))),128)),(0,a._)("div",x,[D,(0,a._)("strong",null,(0,n.zw)(E.value.toFixed(2))+" .-",1)])]))}}),C=l(40089);const z=(0,C.Z)(A,[["__scopeId","data-v-39f67be9"]]);var E=z},37856:function(e,t,l){l.r(t),l.d(t,{default:function(){return w}});var a=l(73396),n=l(87139),o=l(44870),u=l(50687),i=l(95121);const r=e=>((0,a.dD)("data-v-05180218"),e=e(),(0,a.Cn)(),e),s={style:{"margin-bottom":"30px"}},d={style:{display:"flex"}},c=["src"],p=r((()=>(0,a._)("h3",null,"Duties calculator",-1))),v={style:{"margin-bottom":"50px"}},y={class:"total-duties"},m={style:{"margin-left":"10px"}},g="https://www.bazg.admin.ch/bazg/en/home/information-individuals/travel-and-purchases--allowances-and-duty-free-limit/importation-into-switzerland/duty-free-allowances--foodstuffs--alcohol-and-tobacco.html";var _=(0,a.aZ)({__name:"DutiesCalculator",props:{itemDialog:{type:Object,required:!0},height:{type:Number,required:!0}},setup(e){const t=(0,o.iH)(1),r=(0,o.iH)(0),_=(0,o.iH)(0);return(o,f)=>((0,a.wg)(),(0,a.iD)("div",{style:(0,n.j5)(`height: ${e.height-4}px; width: calc(100% -4px); `),class:"duties-calculator"},[(0,a._)("div",s,[(0,a._)("div",d,[(0,a._)("img",{src:l(54639),style:{height:"25px","margin-right":"10px"}},null,8,c),(0,a._)("div",null,[p,(0,a._)("small",null,[(0,a._)("span",null,[(0,a.Uk)(" To have more information about the calculation click "),(0,a._)("a",{href:g,target:"_blank"},"here")])])])])]),(0,a._)("div",v,[(0,a.Wm)(u["default"],{onChangePersonDuty:f[0]||(f[0]=e=>r.value=e),onChangeNumberOfPeople:f[1]||(f[1]=e=>t.value=e)})]),(0,a.Wm)(i["default"],{onChangeQuantityDuty:f[2]||(f[2]=e=>_.value=e),numberOfPeople:t.value},null,8,["numberOfPeople"]),(0,a._)("div",y,[(0,a.Uk)(" Total duties to pay: "),(0,a._)("strong",m,(0,n.zw)((r.value+_.value).toFixed(2))+" .-",1)])],4))}}),f=l(40089);const h=(0,f.Z)(_,[["__scopeId","data-v-05180218"]]);var w=h},11476:function(e,t,l){l.d(t,{Z:function(){return r}});var a=l(73396),n=l(87139),o=(0,a.aZ)({__name:"BaseTooltip",props:{show:Boolean,left:Number,width:Number},setup(e){return(t,l)=>e.show?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"tooltip",style:(0,n.j5)(e.left?`left: ${e.left}px`:"left:0px")},[(0,a.WI)(t.$slots,"default")],4)):(0,a.kq)("",!0)}}),u=l(40089);const i=(0,u.Z)(o,[["__scopeId","data-v-0a5c1179"]]);var r=i}}]);
//# sourceMappingURL=7856.edb7c6d5.js.map