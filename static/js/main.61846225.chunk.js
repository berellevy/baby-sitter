(this.webpackJsonpbabysitter_fe=this.webpackJsonpbabysitter_fe||[]).push([[0],{140:function(e,t,n){},144:function(e,t,n){"use strict";n.r(t);var c=n(4),s=n(3),a=n.n(s),i=n(28),r=n.n(i),l=(n(74),n(75),n(24)),o=n(39),j=n.n(o),d=n(31),b=function(){return Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(c.jsx)("path",{d:"M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z"})})},u=function(){return Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"white",className:"right-arrow",children:Object(c.jsx)("path",{d:"M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"})})},h=function(){var e=Object(s.useState)(new Date),t=Object(l.a)(e,2),n=t[0],a=t[1],i=Object(s.useState)(new Date),r=Object(l.a)(i,2),o=r[0],h=r[1],m=Object(s.useState)(new Date),x=Object(l.a)(m,2),O=x[0],v=x[1],f=function(e){var t=e.getHours(),n=e.getMinutes();return"".concat(t,":").concat(n)},p=function(e){var t=e.value,n=e.onClick,s=t===(new Date).toLocaleDateString()?"Today":t;return Object(c.jsxs)("div",{className:"dropdown",onClick:n,children:[s," ",Object(c.jsx)(b,{})]})},w=function(e){var t=e.value,n=e.onClick;return Object(c.jsxs)("div",{className:"dropdown dropdown-time",onClick:n,children:[t," ",Object(c.jsx)(b,{})]})},g=function(e){var t=e.value,n=e.onClick;return Object(c.jsxs)("div",{className:"dropdown dropdown-time",onClick:n,children:[t," ",Object(c.jsx)(b,{})]})};return Object(c.jsxs)("form",{className:"background-blur find-sitter-menu",children:[Object(c.jsxs)("div",{className:"find-sitter-menu-section",children:[Object(c.jsx)("label",{className:"find-sitter-menu-label",children:"Choose date"}),Object(c.jsx)(j.a,{dateFormat:"MM/d/yyyy",selected:n,onChange:function(e){return a(e)},popperPlacement:"bottom-end",customInput:Object(c.jsx)(p,{})})]}),Object(c.jsxs)("div",{className:"find-sitter-menu-section",children:[Object(c.jsx)("label",{className:"find-sitter-menu-label",children:"Select hours"}),Object(c.jsxs)("div",{className:"dropdown-time-container",children:[Object(c.jsx)(j.a,{selected:o,onChange:function(e){return h(e)},showTimeSelect:!0,showTimeSelectOnly:!0,timeIntervals:15,dateFormat:"h:mm aa",customInput:Object(c.jsx)(w,{})}),Object(c.jsx)("hr",{}),Object(c.jsx)(j.a,{selected:O,onChange:function(e){return v(e)},showTimeSelect:!0,showTimeSelectOnly:!0,timeIntervals:15,dateFormat:"h:mm aa",customInput:Object(c.jsx)(g,{})})]})]}),Object(c.jsxs)("div",{className:"find-sitter-menu-section",children:[Object(c.jsx)("label",{className:"find-sitter-menu-label",children:"Sitters available"}),Object(c.jsx)(d.b,{to:"/availabilities",children:Object(c.jsxs)(d.b,{to:"/availabilities/?day=".concat(n.toLocaleDateString("en-US"),"&from=").concat(f(o),"&to=").concat(f(O)),className:"find-sitter-button",children:["Find Sitters",Object(c.jsx)(u,{})]})})]})]})},m=function(){return Object(c.jsxs)("svg",{fill:"#000000",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20px",children:[Object(c.jsx)("path",{d:"M12 2A1 1 0 1 0 12 4 1 1 0 1 0 12 2zM22.5 11A.5.5 0 1 0 22.5 12 .5.5 0 1 0 22.5 11zM1.5 11A.5.5 0 1 0 1.5 12 .5.5 0 1 0 1.5 11z"}),Object(c.jsx)("path",{d:"M12.71,2.296L12,3.1l-0.71-0.804L1.203,11.098L1.5,12H4v8c0,0.552,0.448,1,1,1h4c0.552,0,1-0.448,1-1v-6h4v6c0,0.552,0.448,1,1,1h4c0.552,0,1-0.448,1-1v-8h2.5l0.297-0.902L12.71,2.296z"})]})},x=function(){return Object(c.jsxs)("div",{className:"header background-blur",children:[Object(c.jsx)(m,{}),Object(c.jsx)("span",{className:"header-text",children:"Sitter Sign In"})]})},O=function(){return Object(c.jsx)("div",{className:"home",children:Object(c.jsxs)("div",{class:"opaque",children:[Object(c.jsx)(x,{}),Object(c.jsxs)("h1",{className:"home-message",children:["Find ",Object(c.jsx)("br",{})," a Sitter"]}),Object(c.jsx)(h,{})]})})},v=(n(140),n(5)),f=n(55),p=n.n(f),w=n(67),g=n(68),S=n.n(g),N=function(e){var t=e.location.search,n=Object(s.useState)(null),a=Object(l.a)(n,2),i=a[0],r=a[1];Object(s.useEffect)((function(){(function(){var e=Object(w.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://babysitter-mendel.herokuapp.com/api/v1/sitters");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n),r(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return console.log(S.a.parse(t,{ignoreQueryPrefix:!0})),Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Availabilities"}),Object(c.jsx)("ul",{children:i.map((function(e){var t=e.name;return Object(c.jsx)("li",{children:t})}))})]})};var y=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(v.c,{children:[Object(c.jsx)(v.a,{path:"/availabilities",component:N}),Object(c.jsx)(v.a,{exact:!0,path:"/",component:O})]})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,149)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(d.a,{basename:"/",children:Object(c.jsx)(y,{})})}),document.getElementById("root")),C()},74:function(e,t,n){}},[[144,1,2]]]);
//# sourceMappingURL=main.61846225.chunk.js.map