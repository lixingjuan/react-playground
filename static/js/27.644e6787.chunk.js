(this["webpackJsonpreact-playground"]=this["webpackJsonpreact-playground"]||[]).push([[27],{757:function(e,n,t){"use strict";t.r(n);var a=t(85),c=t(0),o=t(761),r=t(10),s=o.a.RangePicker;n.default=function(){var e=Object(c.useState)(),n=Object(a.a)(e,2),t=n[0],o=n[1],i=Object(c.useState)([]),u=Object(a.a)(i,2),l=u[0],d=u[1],b=Object(c.useState)(),f=Object(a.a)(b,2),h=f[0],j=f[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"\u65f6\u95f4\u8303\u56f4\u5fc5\u987b\u5927\u4e8e\u4e00\u5e74"}),Object(r.jsx)(s,{value:h||t,onChange:function(e){console.log("\u89e6\u53d1","onChange"),o(e)},disabledDate:function(e){if(!l||0===l.length)return!1;var n=l[0]&&e.diff(l[0],"years")<1;return l[1]&&l[1].diff(e,"years")<1||n},onCalendarChange:function(e){console.log("\u89e6\u53d1","onCalendarChange"),d(e)},onOpenChange:function(e){e?(d([]),j([])):j(void 0)}})]})}}}]);
//# sourceMappingURL=27.644e6787.chunk.js.map