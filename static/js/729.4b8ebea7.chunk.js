"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[729],{5204:function(n,r,t){t.d(r,{C5:function(){return p},YJ:function(){return o},gH:function(){return f},z5:function(){return i}});var e=t(5861),a=t(7757),u=t.n(a),c=t(4569),s=t.n(c)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"a473b0cd927768e20ae22a6477d6f386"}}),i=function(){var n=(0,e.Z)(u().mark((function n(){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/trending/all/day");case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(u().mark((function n(r){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/movie/".concat(r));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(r){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/search/movie",{params:{query:r}});case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(u().mark((function n(r,t){var e,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/movie/".concat(r,"/").concat(t));case 2:return e=n.sent,a=e.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(r,t){return n.apply(this,arguments)}}()},1729:function(n,r,t){t.r(r),t.d(r,{default:function(){return l}});var e=t(5861),a=t(885),u=t(7757),c=t.n(u),s=t(2791),i=t(501),o=t(6871),f=t(5204),p=t(184),d=function(){var n=(0,s.useState)([]),r=(0,a.Z)(n,2),t=r[0],u=r[1],d=(0,s.useState)(null),l=(0,a.Z)(d,2),v=l[0],h=l[1],m=(0,o.TH)();(0,s.useEffect)((function(){var n=function(){var n=(0,e.Z)(c().mark((function n(){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,h(null),n.next=4,(0,f.z5)();case 4:r=n.sent,t=r.results,u(t),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),h(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();n()}),[u]);var x=t.map((function(n){var r=n.id,t=n.title,e=n.name;return(0,p.jsx)("li",{children:(0,p.jsx)(i.rU,{movies:{from:m},to:"/movies/".concat(r),children:t||e})},r)}));return(0,p.jsxs)("ul",{children:[v&&(0,p.jsx)("p",{children:"No film founded"}),x]})},l=function(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h1",{children:"Trending today"}),(0,p.jsx)("div",{children:(0,p.jsx)(d,{})})]})}}}]);
//# sourceMappingURL=729.4b8ebea7.chunk.js.map