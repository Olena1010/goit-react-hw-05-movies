"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[382],{1382:function(n,t,e){e.r(t),e.d(t,{default:function(){return k}});var r,a,c,i,u=e(1413),s=e(4925),o=e(3433),p=e(9439),f=e(2791),l=e(7689),d=e(5245),x=e(8286),h=e(168),g=e(5706),m=g.Z.div(r||(r=(0,h.Z)(["\n  position: relative;\n  width: 160px;\n  height: 160px;\n  margin: 0 auto;\n  padding: 20px;\n"]))),v=g.Z.ul(a||(a=(0,h.Z)(["\n  padding: 20px;\n  @media screen and (min-width: 760px) {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-column-gap: 20px;\n    grid-row-gap: 20px;\n    padding: 20px;\n  }\n"]))),w=g.Z.p(c||(c=(0,h.Z)(["\n  font-size: 22px;\n  font-weight: 400;\n  text-transform: uppercase;\n  letter-spacing: 15px;\n  text-align: center;\n  padding: 10px 0 20px 0;\n"]))),y=g.Z.div(i||(i=(0,h.Z)(["\n  padding-bottom: 20px;\n  display: flex;\n  justify-content: center;\n"]))),Z=e(184),b=["id"],k=function(){var n,t,e=(0,l.UO)().movieId,r=(0,f.useState)([]),a=(0,p.Z)(r,2),c=a[0],i=a[1],h=(0,f.useState)(!1),g=(0,p.Z)(h,2),k=g[0],j=g[1],_=(0,l.TH)();(0,f.useEffect)((function(){j(!0),(0,d.xc)(e).then((function(n){return i(n.data.cast)})).finally((function(){j(!1)}))}),[e]);var S=null!==(n=null===(t=_.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/",U=(0,o.Z)(c).slice(0,10);return(0,Z.jsxs)(Z.Fragment,{children:[c.length>0?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(v,{children:U.map((function(n){var t=n.id,e=(0,s.Z)(n,b);return(0,Z.jsx)(x.qu,(0,u.Z)({},e),t)}))}),(0,Z.jsx)(y,{children:(0,Z.jsx)(x.ZP,{to:"/movies/".concat(e),text:"Close",state:{from:S}})})]}):(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(w,{children:"Actors cast is absent"}),(0,Z.jsx)(y,{children:(0,Z.jsx)(x.ZP,{to:"/movies/".concat(e),text:"Close",state:{from:S}})})]}),k&&(0,Z.jsx)(m,{children:(0,Z.jsx)(x.aN,{})})]})}},5245:function(n,t,e){e.d(t,{Ai:function(){return d},Hx:function(){return w},Y5:function(){return h},wr:function(){return f},xc:function(){return m}});var r=e(5861),a=e(4687),c=e.n(a),i=e(1243),u="https://api.themoviedb.org/3",s="908e7ab925fbf0105bff462a17b34666";function o(){return p.apply(this,arguments)}function p(){return p=(0,r.Z)(c().mark((function n(){var t,e,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",e=a.length>1&&void 0!==a[1]?a[1]:{},n.prev=2,n.next=5,i.Z.get(t,e);case 5:return r=n.sent,n.abrupt("return",r);case 9:n.prev=9,n.t0=n.catch(2),console.log(n.t0.message),Promise.reject(new Error("Not found"));case 13:case"end":return n.stop()}}),n,null,[[2,9]])}))),p.apply(this,arguments)}function f(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o("".concat(u,"/trending/movie/day?api_key=").concat(s));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o("".concat(u,"/search/movie?api_key=").concat(s,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o("".concat(u,"/movie/").concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o("".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o("".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=382.704485cd.chunk.js.map