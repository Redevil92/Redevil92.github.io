"use strict";(self["webpackChunkmy_portfolio"]=self["webpackChunkmy_portfolio"]||[]).push([[3004],{63004:function(t,e,n){n.r(e),n.d(e,{solr:function(){return l}});var r=/[^\s\|\!\+\-\*\?\~\^\&\:\(\)\[\]\{\}\"\\]/,o=/[\|\!\+\-\*\?\~\^\&]/,i=/^(OR|AND|NOT|TO)$/i;function u(t){return parseFloat(t).toString()===t}function a(t){return function(e,n){var r,o=!1;while(null!=(r=e.next())){if(r==t&&!o)break;o=!o&&"\\"==r}return o||(n.tokenize=f),"string"}}function c(t){return function(e,n){return"|"==t?e.eat(/\|/):"&"==t&&e.eat(/\&/),n.tokenize=f,"operator"}}function k(t){return function(e,n){var o=t;while((t=e.peek())&&null!=t.match(r))o+=e.next();return n.tokenize=f,i.test(o)?"operator":u(o)?"number":":"==e.peek()?"propertyName":"string"}}function f(t,e){var n=t.next();return'"'==n?e.tokenize=a(n):o.test(n)?e.tokenize=c(n):r.test(n)&&(e.tokenize=k(n)),e.tokenize!=f?e.tokenize(t,e):null}const l={name:"solr",startState:function(){return{tokenize:f}},token:function(t,e){return t.eatSpace()?null:e.tokenize(t,e)}}}}]);
//# sourceMappingURL=3004.a51380f6.js.map