(this["webpackJsonpinteractive-pricing-component-main"]=this["webpackJsonpinteractive-pricing-component-main"]||[]).push([[0],[,,,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){"use strict";i.r(t);var c=i(1),n=i.n(c),s=i(4),r=i.n(s),l=(i(9),i(2)),a=(i(10),i(11),i(0)),j=function(e){var t=Object(c.useRef)(null),i=Object(c.useRef)(null),n=Object(c.useState)(50),s=Object(l.a)(n,2),r=s[0],j=s[1],d=Object(c.useState)(r/3.125),b=Object(l.a)(d,2),h=b[0],o=b[1],u=Object(c.useState)(!1),O=Object(l.a)(u,2),x=O[0],p=O[1];return Object(a.jsxs)("div",{className:"Pricing",children:[Object(a.jsxs)("div",{className:"price-req",children:[Object(a.jsxs)("p",{id:"pageview",children:[2*r,"K Pageviews"]}),Object(a.jsxs)("div",{className:"slide",children:[Object(a.jsx)("label",{for:"slider",children:"Slider"}),Object(a.jsx)("input",{id:"slider",type:"range",min:"0",max:"100",value:r,onChange:function(e){j(e.target.value),o(e.target.value/3.125),t.current.style.left=e.target.value+"%",i.current.style.width=e.target.value+"%"}}),Object(a.jsx)("div",{id:"selector",ref:t,children:Object(a.jsx)("svg",{className:"select-btn",xmlns:"http://www.w3.org/2000/svg",width:"22",height:"13",children:Object(a.jsx)("g",{fill:"#80FFF3",fillRule:"evenodd",children:Object(a.jsx)("path",{d:"M16 2.558v7.884a1 1 0 001.735.679l3.639-3.943a1 1 0 000-1.356l-3.64-3.943A1 1 0 0016 2.558zM6 2.558v7.884a1 1 0 01-1.735.679L.626 7.178a1 1 0 010-1.356l3.64-3.943A1 1 0 016 2.558z"})})})}),Object(a.jsx)("div",{id:"progress-bar",ref:i})]}),x?Object(a.jsxs)("p",{id:"price",children:[Object(a.jsxs)("span",{children:["$",h.toFixed(2)," "]}),"/ month"]}):Object(a.jsxs)("p",{id:"price",children:[Object(a.jsxs)("span",{children:["$",(12*h-12*h*.25).toFixed(2)," "]}),"/ year"]})]}),Object(a.jsxs)("div",{className:"billing",children:[Object(a.jsx)("p",{children:"Monthly Billing"}),Object(a.jsxs)("label",{className:"switch",children:[Object(a.jsx)("input",{type:"checkbox",checked:!x,onChange:function(){return p(!x)}}),Object(a.jsx)("span",{className:"toggle"})]}),Object(a.jsxs)("p",{children:["Yearly Billing",Object(a.jsxs)("span",{id:"discount",children:[" ","25% ",e.windowWidth>540&&"discount"]})]})]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:"trial",children:[Object(a.jsx)("div",{className:"benefits",children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"Unlimited websites"}),Object(a.jsx)("li",{children:"100% data ownership"}),Object(a.jsx)("li",{children:"Email reports"})]})}),Object(a.jsx)("button",{className:"trial-btn",children:"Start my trial"})]})]})},d=function(){var e=Object(c.useState)(window.innerWidth),t=Object(l.a)(e,2),i=t[0],n=t[1];return Object(c.useEffect)((function(){var e=function(){n(window.innerWidth)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}})),Object(a.jsxs)("main",{className:"App",children:[Object(a.jsx)("h1",{children:"Simple, traffic-based pricing "}),Object(a.jsxs)("h2",{children:["Sign-up for our 30-day trial.",i<540&&Object(a.jsx)("br",{})," No credit card required."]}),Object(a.jsx)(j,{windowWidth:i})]})},b=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,14)).then((function(t){var i=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;i(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(d,{})}),document.getElementById("root")),b()}],[[13,1,2]]]);
//# sourceMappingURL=main.70a58121.chunk.js.map