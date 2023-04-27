"use strict";(self["webpackChunkmy_portfolio"]=self["webpackChunkmy_portfolio"]||[]).push([[5121,7330],{77330:function(t,e,n){var o;n.r(e),n.d(e,{dutyFreeAllowances:function(){return i}}),function(t){t["KG"]="kg",t["LITRE"]="litre",t["GRAMME"]="gramme",t["UNIT"]="unit"}(o||(o={}));const i=[{name:"Meat and meat products",description:"Meat and meat products derived from all animal species, excluding wild animals, fish, crustaceans, molluscs and other aquatic invertebrates.",category:"Animal products",note:"Included are:\n      all parts of animal carcasses fit for consumption (with or without bones)\n      sausages containing meat or blood\n      other meat products\n      food preparations with sausage, meat or blood content of over 20 percent by weight\n      This does not include bone marrow, bones for stock, and dog and cat food in individual packets marked as animal feed.",units:[o.KG],allowedQuantityPerPerson:1,dutyUptoPerUnit:[{upTo:10,duty:17},{upTo:1/0,duty:23}],dutyPerUnit:23},{name:"Butter and cream",description:"Butter and cream with a fat content of 15 % or more",category:"Animal products",units:[o.LITRE,o.KG],allowedQuantityPerPerson:1,dutyPerUnit:16,dutyUptoPerUnit:[{upTo:1/0,duty:16}]},{name:"Oils, fats, margarine",description:"Oils, fats, margarine for human consumption",category:"Animal products",units:[o.LITRE,o.KG],allowedQuantityPerPerson:5,dutyPerUnit:2,dutyUptoPerUnit:[{upTo:1/0,duty:2}]},{name:"Alcoholic beverages > 18%",description:"Alcoholic beverages with an alcohol content by volume of over 18%",category:"Alcoholic beverages",units:[o.LITRE],allowedQuantityPerPerson:1,dutyPerUnit:15,dutyUptoPerUnit:[{upTo:1/0,duty:15}]},{name:"Alcoholic beverages < 18%",description:"Alcoholic beverages with an alcohol content by volume of under 18%",category:"Alcoholic beverages",units:[o.LITRE],allowedQuantityPerPerson:5,dutyPerUnit:2,dutyUptoPerUnit:[{upTo:1/0,duty:2}]},{name:"cigarettesIcigars",category:"Tabacco products",units:[o.UNIT],allowedQuantityPerPerson:250,dutyPerUnit:.25,dutyUptoPerUnit:[{upTo:1/0,duty:.25}]},{name:"other tabacco products",category:"Tabacco products",units:[o.GRAMME],allowedQuantityPerPerson:250,dutyPerUnit:.1,dutyUptoPerUnit:[{upTo:1/0,duty:.1}]}]},95121:function(t,e,n){n.r(e),n.d(e,{default:function(){return j}});var o=n(73396),i=n(44870),a=n(87139),u=n(11476),r=n(77330);const l=t=>((0,o.dD)("data-v-39f67be9"),t=t(),(0,o.Cn)(),t),s=l((()=>(0,o._)("h4",{class:"title",style:{"margin-bottom":"10px"}},"Duties by quantity",-1))),d=["for"],c={style:{position:"relative"}},y=["onClick"],p={class:"item-info"},m={key:0},g=(0,o.Uk)(" Allowed quantity pp: "),w=l((()=>(0,o._)("br",null,null,-1))),f={key:1},U=(0,o.Uk)(" Duty per excess unit up to: "),v=l((()=>(0,o._)("br",null,null,-1))),h={key:0},P={key:1},b={key:2},k=(0,o.Uk)(" Duty per excess unit: "),_={style:{position:"relative"}},T={class:"unit"},D=["onKeyup","onChange"],A={class:"note-text"},z=l((()=>(0,o._)("br",null,null,-1))),E={class:"results"},I=l((()=>(0,o._)("label",{class:"semibold"},"Total quantity duty to pay:",-1)));var x=(0,o.aZ)({props:{numberOfPeople:null},emits:["changeQuantityDuty"],setup(t,{emit:e}){const n=t,l=(0,i.iH)(""),x=(0,i.iH)([]),Q=(0,i.qj)({}),q=(0,o.Fl)((()=>Object.values(Q).reduce(((t,e)=>t+e.duty),0))),j=(0,o.Fl)((()=>{const t={};return r.dutyFreeAllowances.forEach((e=>{t[e.category]?t[e.category].push(e):t[e.category]=[e]})),Object.entries(t)}));(0,o.YP)((()=>q.value),(()=>{e("changeQuantityDuty",q.value)})),(0,o.YP)((()=>n.numberOfPeople),(()=>{K()}));const K=()=>{Object.entries(Q).forEach((t=>{const e=r.dutyFreeAllowances.find((e=>e.name===t[0]));e&&F(t[1].quantity,e)}))},F=(t,e)=>{let o=0;const i=t-e.allowedQuantityPerPerson*n.numberOfPeople;if(i>0){const t=e.dutyUptoPerUnit.sort(((t,e)=>t.upTo-e.upTo));for(let e=0;e<t.length;e++){const n=t[e],a=e>0?t[e-1].upTo:0;if(i<=n.upTo){o+=(i-a)*n.duty;break}o+=(n.upTo-a)*n.duty}}Q[e.name]={duty:o,quantity:t}},O=t=>{let e=!1;x.value.forEach((n=>{n&&n.contains(t.target)&&(e=!0)})),e||(l.value="")};return(0,o.wF)((()=>{window.addEventListener("click",O)})),(0,o.Ah)((()=>{window.removeEventListener("click",O)})),(t,e)=>((0,o.wg)(),(0,o.iD)("div",null,[s,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,i.SU)(j),((t,e)=>((0,o.wg)(),(0,o.iD)("div",{style:{"margin-left":"10px"},key:e},[(0,o._)("small",null,[(0,o._)("strong",null,(0,a.zw)(t[0]),1)]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t[1],((t,e)=>((0,o.wg)(),(0,o.iD)("div",{key:e,style:{display:"flex","align-items":"center"}},[(0,o._)("label",{for:t.name},[(0,o._)("div",c,[(0,o._)("span",{class:"mdi mdi-information info-icon",ref_for:!0,ref:t=>{x.value.push(t)},onClick:e=>l.value=t.name},null,8,y),(0,o.Wm)(u.Z,{show:l.value===t.name},{default:(0,o.w5)((()=>[(0,o._)("div",p,[(0,o.Uk)((0,a.zw)(t.description)+" ",1),t.description?((0,o.wg)(),(0,o.iD)("br",m)):(0,o.kq)("",!0),(0,o._)("div",null,[g,(0,o._)("strong",null,(0,a.zw)(t.allowedQuantityPerPerson)+" "+(0,a.zw)(t.units.join("/")),1)]),w,t.dutyUptoPerUnit.length>1?((0,o.wg)(),(0,o.iD)("div",f,[U,v,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.dutyUptoPerUnit,((e,n)=>((0,o.wg)(),(0,o.iD)("div",{key:`${n}-${t.name}-upto`},[e.upTo!==1/0?((0,o.wg)(),(0,o.iD)("li",h,[(0,o.Uk)(" up to "+(0,a.zw)(e.upTo)+" "+(0,a.zw)(t.units.join("/"))+": ",1),(0,o._)("strong",null,(0,a.zw)(e.duty)+" .-",1)])):((0,o.wg)(),(0,o.iD)("li",P,[(0,o.Uk)(" more than "+(0,a.zw)(t.dutyUptoPerUnit[t.dutyUptoPerUnit.length-2].upTo)+" "+(0,a.zw)(t.units.join("/"))+": ",1),(0,o._)("strong",null,(0,a.zw)(t.dutyUptoPerUnit[t.dutyUptoPerUnit.length-1].duty)+".-",1)]))])))),128))])):1===t.dutyUptoPerUnit.length?((0,o.wg)(),(0,o.iD)("div",b,[k,(0,o._)("strong",null,(0,a.zw)(t.dutyUptoPerUnit[t.dutyUptoPerUnit.length-1].duty)+".-",1)])):(0,o.kq)("",!0)])])),_:2},1032,["show"])]),(0,o.Uk)(" "+(0,a.zw)(t.name),1)],8,d),(0,o._)("div",_,[(0,o._)("div",T,(0,a.zw)(t.units.join("/")),1),(0,o._)("input",{onKeyup:e=>F(e.target.value,t),onChange:e=>F(e.target.value,t),type:"number",id:"people"},null,40,D)]),(0,o._)("span",A," [ "+(0,a.zw)((0,i.SU)(Q)[t.name]?(0,i.SU)(Q)[t.name].duty.toFixed(2):0)+".- ] ",1),z])))),128))])))),128)),(0,o._)("div",E,[I,(0,o._)("strong",null,(0,a.zw)((0,i.SU)(q).toFixed(2))+" .-",1)])]))}}),Q=n(40089);const q=(0,Q.Z)(x,[["__scopeId","data-v-39f67be9"]]);var j=q},11476:function(t,e,n){n.d(e,{Z:function(){return l}});var o=n(73396),i=n(87139),a=(0,o.aZ)({props:{show:Boolean,left:Number,width:Number},setup(t){return(e,n)=>t.show?((0,o.wg)(),(0,o.iD)("div",{key:0,class:"tooltip",style:(0,i.j5)(t.left?`left: ${t.left}px`:"left:0px")},[(0,o.WI)(e.$slots,"default")],4)):(0,o.kq)("",!0)}}),u=n(40089);const r=(0,u.Z)(a,[["__scopeId","data-v-0a5c1179"]]);var l=r}}]);
//# sourceMappingURL=5121.a8a4c158.js.map