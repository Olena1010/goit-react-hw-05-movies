"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[757],{1757:function(n,t,e){e.r(t),e.d(t,{default:function(){return g}});var r,a,c,u=e(9439),o=e(2791),i=e(7689),s=e(5245),p=e(9383),f=e(168),x=e(5706),l=x.Z.div(r||(r=(0,f.Z)(["\n  margin-top: 20px;\n  color: #ffffff;\n  background-color: #4682b4;\n  box-shadow: 0px 1px 3px 0px rgba(237, 70, 47, 0.2),\n    0px 1px 1px 0px rgba(237, 70, 47, 0.14),\n    0px 2px 1px -1px rgba(237, 70, 47, 0.12);\n"]))),h=x.Z.hr(a||(a=(0,f.Z)(["\n  width: 96%;\n  margin: 0 auto;\n  border: 1px solid #ed462f;\n"]))),d=x.Z.div(c||(c=(0,f.Z)(["\n  display: flex;\n  justify-content: space-evenly;\n  padding: 20px;\n  margin: 0 auto;\n  width: 300px;\n"]))),v=e(184),g=function(){var n,t,e=(0,i.UO)().movieId,r=(0,o.useState)({}),a=(0,u.Z)(r,2),c=a[0],f=a[1],x=(0,i.TH)(),g=(0,i.s0)();(0,o.useEffect)((function(){(0,s.Y5)(e).then((function(n){return f(n.data)})).catch((function(){return g("*")}))}),[e,g]);var m=null!==(n=null===(t=x.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/",w=c.title,y=0===Object.keys(c).length;return(0,v.jsx)(v.Fragment,{children:!y&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(p.CD,{text:w}),(0,v.jsx)(p.ZP,{to:m,text:"Go Back"}),(0,v.jsxs)(l,{children:[(0,v.jsx)(p.l0,{movieData:c}),(0,v.jsx)(h,{}),(0,v.jsxs)(d,{children:[(0,v.jsx)(p.ZP,{to:"cast",text:"Cast",state:{from:m}}),(0,v.jsx)(p.ZP,{to:"reviews",text:"Reviews",state:{from:m}})]}),(0,v.jsx)(i.j3,{})]})]})})}},5245:function(n,t,e){e.d(t,{Ai:function(){return l},Hx:function(){return w},Y5:function(){return d},wr:function(){return f},xc:function(){return g}});var r=e(5861),a=e(4687),c=e.n(a),u=e(1243),o="https://api.themoviedb.org/3",i="908e7ab925fbf0105bff462a17b34666";function s(){return p.apply(this,arguments)}function p(){return p=(0,r.Z)(c().mark((function n(){var t,e,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",e=a.length>1&&void 0!==a[1]?a[1]:{},n.prev=2,n.next=5,u.Z.get(t,e);case 5:return r=n.sent,n.abrupt("return",r);case 9:n.prev=9,n.t0=n.catch(2),console.log(n.t0.message),Promise.reject(new Error("Not found"));case 13:case"end":return n.stop()}}),n,null,[[2,9]])}))),p.apply(this,arguments)}function f(){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s("".concat(o,"/trending/movie/day?api_key=").concat(i));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s("".concat(o,"/search/movie?api_key=").concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s("".concat(o,"/movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=757.a0f8ab49.chunk.js.map