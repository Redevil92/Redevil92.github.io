"use strict";(self["webpackChunkmy_portfolio"]=self["webpackChunkmy_portfolio"]||[]).push([[5651],{15651:function(e,t,o){o.r(t),o.d(t,{default:function(){return c}});o(37467),o(44732),o(79577),o(26280),o(27913),o(47801);var a=o(56768),n=o(90144),l=(0,a.pM)({__name:"AudioAnalyzer",props:{audioElement:Object},setup(e){const t=e,o=(0,n.KR)(),l=(0,n.KR)(null),u=(0,n.KR)(new window.AudioContext);function i(){if(o.value&&l.value){const e=l.value.frequencyBinCount,t=new Uint8Array(e),a=o.value.getContext("2d");a?.clearRect(0,0,o.value.width,o.value.height),l.value?.getByteFrequencyData(t),c(e,t,a,o.value)}requestAnimationFrame(i)}const c=(e,t,o,a)=>{const n=getComputedStyle(document.body);let l;o.fillStyle=n.getPropertyValue("--font-color");const u=a.width/2/e;let i=0,c=e*u;o.clearRect(0,0,a.width,a.height),r();const d=255;for(let r=0;r<e;r++)l=t[r]/d*a.height,s(o,a.width/2-i,(a.height-l)/2,u/1.7,l,30),s(o,c,(a.height-l)/2,u/1.7,l,30),i+=u,c+=u},r=()=>{const e=window.devicePixelRatio;if(o.value){const t=+getComputedStyle(o.value).getPropertyValue("height").slice(0,-2),a=+getComputedStyle(o.value).getPropertyValue("width").slice(0,-2);o.value.setAttribute("height",(t*e).toString()),o.value.setAttribute("width",(a*e).toString())}},s=function(e,t,o,a,n,l){a<2*l&&(l=a/2),n<2*l&&(l=n/2);const u=getComputedStyle(document.body).getPropertyValue("--font-color");e.fillStyle=u,e.beginPath(),e.moveTo(t+l,o),e.arcTo(t+a,o,t+a,o+n,l),e.arcTo(t+a,o+n,t,o+n,l),e.arcTo(t,o+n,t,o,l),e.arcTo(t,o,t+a,o,l),e.closePath(),e.fill()},d=()=>{if(t.audioElement&&o.value){const e=u.value.createMediaElementSource(t.audioElement);l.value=u.value.createAnalyser(),e.connect(l.value),l.value.connect(u.value.destination),l.value.smoothingTimeConstant=.9,l.value.fftSize=32,i()}};return(0,a.sV)((async()=>{d()})),(e,t)=>((0,a.uX)(),(0,a.CE)("canvas",{id:"canvas-audio",ref_key:"canvasRef",ref:o,class:"audio-canvas"},null,512))}}),u=o(71241);const i=(0,u.A)(l,[["__scopeId","data-v-215725bb"]]);var c=i}}]);
//# sourceMappingURL=5651.c596df94.js.map