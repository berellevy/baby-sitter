(this.webpackJsonpbabysitter_fe=this.webpackJsonpbabysitter_fe||[]).push([[0],{155:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(2),a=n.n(c),s=n(32),i=n.n(s),j=(n(83),n(84),n(85),n(86),n(5)),o=function(){return Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",className:"back-arrow",children:Object(r.jsx)("path",{id:"path",d:"M57,880v2H44.8l5.6,5.6L49,889l-8-8,8-8,1.4,1.4L44.8,880Z",transform:"translate(-41 -873)",fill:"#707070"})})},u=function(){var e=Object(j.f)();return Object(r.jsx)("button",{className:"back-button",onClick:function(){return e.goBack()},children:Object(r.jsx)(o,{})})},l=n(13),b=function(){return Object(r.jsx)(l.b,{to:"/",children:Object(r.jsxs)("svg",{fill:"#000000",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20px",children:[Object(r.jsx)("path",{d:"M12 2A1 1 0 1 0 12 4 1 1 0 1 0 12 2zM22.5 11A.5.5 0 1 0 22.5 12 .5.5 0 1 0 22.5 11zM1.5 11A.5.5 0 1 0 1.5 12 .5.5 0 1 0 1.5 11z"}),Object(r.jsx)("path",{d:"M12.71,2.296L12,3.1l-0.71-0.804L1.203,11.098L1.5,12H4v8c0,0.552,0.448,1,1,1h4c0.552,0,1-0.448,1-1v-6h4v6c0,0.552,0.448,1,1,1h4c0.552,0,1-0.448,1-1v-8h2.5l0.297-0.902L12.71,2.296z"})]})})},d=n(9),h=n.n(d),O=n(11),x=n(6),m=n(36),p=n(73),f=function(e){return"https://babysitter-mendel.herokuapp.com/api/v1/"+e},v=function(){var e=Object(O.a)(h.a.mark((function e(t){var n,r,c,a,s,i,j,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,r=t.m,c=t.h,a=t.b,s=Object(p.a)(t,["url","m","h","b"]),i={method:r||"GET",headers:c||{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(S())},body:JSON.stringify(a)},e.next=4,fetch(n,Object(m.a)(Object(m.a)({},i),s));case 4:return j=e.sent,(o=j.headers.get("refreshToken"))&&k(o),e.abrupt("return",j);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=n(74),y=Object(c.createContext)(),w=function(e){var t=e.children,n=Object(g.useGoogleLogin)({clientId:"676748925263-a8ud9890fcd8ht2dcmbb4sv8im4o3f0m.apps.googleusercontent.com"});return Object(r.jsx)(y.Provider,{value:n,children:t})},_=Object(c.createContext)(),S=function(){return localStorage.getItem("backendToken")},k=function(e){localStorage.setItem("backendToken",e)};function N(e){var t=e.children,n=Object(c.useState)(S()),a=Object(x.a)(n,2),s=a[0],i=a[1],j=Object(c.useState)(!0),o=Object(x.a)(j,2),u=o[0],l=o[1],b=Object(c.useContext)(y).signIn,d=function(){localStorage.removeItem("backendToken"),i(S())},m={isLoggedIn:s,isInitialized:u,login:function(){var e=Object(O.a)(h.a.mark((function e(){var t,n,r,c,a,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!1),e.next=3,b();case 3:return t=e.sent,n=t.tokenObj.id_token,r={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({id_token:n})},e.next=8,fetch(f("auth/login"),r);case 8:if(!(c=e.sent).ok){e.next=17;break}return e.next=12,c.json();case 12:a=e.sent,s=a.token,k(s),e.next=18;break;case 17:d();case 18:i(S()),l(!0);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),logout:d};return Object(r.jsx)(_.Provider,{value:m,children:t})}var C=function(){return Object(c.useContext)(_)},F=function(){var e=Object(j.f)(),t=C().logout;return Object(r.jsx)("span",{onClick:function(){t(),e.push("/")},children:"Sign Out"})},D=function(e){var t=e.classes,n=C().isLoggedIn,c=function(){return n?Object(r.jsx)(F,{}):Object(r.jsx)(l.b,{to:"/login",className:"header-text",children:"Sitter Sign In"})};return Object(r.jsxs)("div",{className:"header background-light-gray ".concat(t),children:[Object(r.jsx)(b,{}),Object(r.jsx)(c,{})]})},M=n(75),T=n.n(M),L=n(12),I=n.n(L),A=function(e){var t=e.search,n=T.a.parse(t,{ignoreQueryPrefix:!0}),c=n.day,a=n.startTime,s=n.duration,i=I()(c,"DD-MM-YYYY").format("MMM/D"),j=I()(a,"hh:mm").format("h:mm"),o=I()(a,"hh:mm").add(s,"m").format("h:mma");return Object(r.jsx)("h1",{children:"".concat(i,", ").concat(j,"-").concat(o)})},P=function(e){var t=e.render,n=e.url,a=Object(c.useState)(null),s=Object(x.a)(a,2),i=s[0],j=s[1];return Object(c.useEffect)((function(){(function(){var e=Object(O.a)(h.a.mark((function e(){var t,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n);case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,j(r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]),Object(r.jsx)("ul",{children:i?i.map((function(e){return t(e)})):null})},B=function(e){var t=e.style;return Object(r.jsx)("i",{className:"fas fa-angle-right right-arrow",style:Object(m.a)({},t)})},z=function(e){e.classes;var t=e.url,n=e.children;return Object(r.jsx)("li",{className:"underline",children:Object(r.jsxs)(l.b,{className:"li-underline",to:t,children:[Object(r.jsx)("div",{style:{flexGrow:"1"},children:n}),Object(r.jsx)("p",{style:{marginLeft:"auto"},children:Object(r.jsx)(B,{})})]})})},E=function(e){var t=e.left,n=e.right;return Object(r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[t,n]})},G=function(e){var t=e.location.search,n=e.history;return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(D,{classes:"background-light-gray"}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(u,{history:n}),Object(r.jsx)(A,{search:t}),Object(r.jsx)(P,{url:f("sitters"+t),render:function(e){return Object(r.jsx)(z,{url:"/sitters/".concat(e.id),children:Object(r.jsx)(E,{left:Object(r.jsxs)("p",{children:[e.first_name," ",e.last_name,",",Object(r.jsx)("br",{}),"Age: ",e.age]}),right:Object(r.jsxs)("p",{children:["Price: ",e.price]})})},e.id)}})]})]})},Y=n(38),J=n.n(Y),H=n(39),q=n.n(H),Q=n(45),R=function(){return Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(r.jsx)("path",{d:"M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z"})})},W=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"LT";return I()(e).format(t)},Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"DD-MM-yy";return I()(e).format(t)},$=function(e){var t=e.value,n=e.onClick,c=t===(new Date).toLocaleDateString()?"Today":t;return Object(r.jsxs)("div",{className:"dropdown",onClick:n,children:[c," ",Object(r.jsx)(R,{})]})},K=function(e){var t=e.value,n=e.onClick,c=e.invalidTime;return Object(r.jsxs)("div",{className:"dropdown dropdown-time "+c,onClick:n,children:[t," ",Object(r.jsx)(R,{}),c?Object(r.jsx)("span",{className:"invalid-time-message",children:"At least an hour after"}):null]})},U=function(e){var t=9e5;return new Date(Math.round(e/t)*t)},V=function(){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Shabbos"]},X=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"LT";return I()(e).add(t,"m").format(n)},ee=function(e,t){for(var n=[],r=0;r<48;r++){var c=15*r;n=[].concat(Object(Q.a)(n),[{value:t+c,label:X(e,t+c)}])}return n},te=function(e){var t=e.startDate,n=e.setStartDate;return Object(r.jsxs)("div",{className:"find-sitter-menu-section",children:[Object(r.jsx)("label",{className:"find-sitter-menu-label",children:"Choose date"}),Object(r.jsx)(q.a,{dateFormat:"MM/d/yyyy",selected:t,onChange:function(e){return n(e)},popperPlacement:"bottom-end",showPopperArrow:!1,customInput:Object(r.jsx)($,{})})]})},ne=function(e){var t=e.startDate,n=e.setStartDate,c=e.children;return Object(r.jsxs)("div",{className:"find-sitter-menu-section",children:[Object(r.jsx)("label",{className:"find-sitter-menu-label",children:"Select hours"}),Object(r.jsxs)("div",{className:"dropdown-time-container",children:[Object(r.jsx)(q.a,{selected:t,onChange:function(e){return n(e)},showTimeSelect:!0,showTimeSelectOnly:!0,timeIntervals:15,dateFormat:"h:mm aa",showPopperArrow:!1,customInput:Object(r.jsx)(K,{})}),c]})]})},re=function(){var e=Object(c.useState)(U(new Date)),t=Object(x.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(60),i=Object(x.a)(s,2),j=i[0],o=i[1],u=function(){return ee(n,60)};return Object(r.jsxs)("form",{className:"find-sitter-menu background-blur",children:[Object(r.jsx)(te,{startDate:n,setStartDate:a}),Object(r.jsx)(ne,{startDate:n,setStartDate:a,children:Object(r.jsx)(J.a,{options:u(),onChange:function(e){return o(e.value)},value:u().find((function(e){return e.value===j}))})}),Object(r.jsxs)("div",{className:"find-sitter-menu-section",children:[Object(r.jsx)("label",{className:"find-sitter-menu-label",children:"Sitters available"}),Object(r.jsxs)(l.b,{to:"/availabilities/?day=".concat(Z(n),"&startTime=").concat(W(n),"&duration=").concat(j),className:"find-sitter-button",children:["Find Sitters",Object(r.jsx)(B,{})]})]})]})},ce=n.p+"static/media/grass_kid_faded.a817a676.jpeg",ae=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{id:"home-bg",children:Object(r.jsx)("img",{src:ce,alt:""})}),Object(r.jsx)("div",{class:"opaque"}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(D,{classes:"background-blur"}),Object(r.jsxs)("h1",{className:"home-message",children:["Find ",Object(r.jsx)("br",{}),"a Sitter"]}),Object(r.jsx)(re,{})]})]})},se=function(e){var t=e.children;return Object(r.jsx)("div",{className:"border-box",children:t})},ie=function(e){var t=e.data,n=e.render;return Object(r.jsx)("ul",{children:t?t.map((function(e){return n(e)})):null})},je=function(e){var t=e.num;return Object(r.jsx)("a",{className:"phone-number",href:"tel:".concat(t),children:t})},oe=function(e){return e.appointments.map((function(e){var t=e.id,n=e.start_time,c=e.duration_minutes,a=I.a.utc(n).format("M/D hh:mma"),s=X(I.a.utc(n),c,"M/D hh:mma");return Object(r.jsxs)("li",{style:{border:"1px solid black",marginBottom:"5px",padding:"5px"},children:[Object(r.jsx)("p",{children:t}),Object(r.jsxs)("p",{children:["From: ",a]}),Object(r.jsxs)("p",{children:["To: ",s]})]},t)}))},ue=function(e){return e.availabilities.map((function(e){var t,n=e.id,c=e.start_time,a=e.duration_minutes,s=e.weekday;return Object(r.jsxs)("li",{children:[Object(r.jsxs)("span",{children:[" ",(t=s,V()[t]),": "]}),I.a.utc(c).format("LT")," - ",Object(r.jsx)("span",{children:X(I.a.utc(c),a)})]},n)}))},le=function(e){var t=e.children;return Object(r.jsx)("div",{className:"two-col-wrapper",children:t})},be=function(e){var t=e.match,n=e.history,a=t.params.id,s=Object(c.useState)(null),i=Object(x.a)(s,2),j=i[0],o=i[1];if(Object(c.useEffect)((function(){(function(){var e=Object(O.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(f("sitters/".concat(a)));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,o(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]),j){var l=j.bio,b=j.age,d=j.contact_name,m=j.contact_phone,p=j.contact_relation,v=j.first_name,g=j.last_name,y=j.years_of_experience,w=j.price,_=j.references,S=j.availabilities,k=j.appointments;return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(D,{}),Object(r.jsx)(u,{history:n}),Object(r.jsxs)("h1",{children:[v," ",g]}),Object(r.jsx)("div",{className:"find-sitter-menu background-blur",children:Object(r.jsxs)("div",{className:"find-sitter-menu-section",children:[Object(r.jsxs)("label",{className:"find-sitter-menu-label",children:[d," (",v,"'s ",p,")"]}),Object(r.jsxs)("a",{href:"tel:".concat(m),className:"find-sitter-button",children:[Object(r.jsx)("span",{children:"Call"})," ",Object(r.jsxs)("span",{children:[" ",m]})]})]})}),Object(r.jsxs)(le,{children:[Object(r.jsxs)(se,{children:["$",w]}),Object(r.jsxs)(se,{children:["Age: ",b]}),Object(r.jsxs)(se,{children:["Babysitting: ",y]})]}),Object(r.jsx)(se,{children:l}),Object(r.jsx)(se,{children:Object(r.jsx)(ie,{data:_,render:function(e){return Object(r.jsx)("li",{children:Object(r.jsx)(E,{left:Object(r.jsx)("span",{children:e.name}),right:Object(r.jsx)(je,{num:e.phone})})},e.id)}})}),Object(r.jsxs)("div",{children:["Availabilities",Object(r.jsx)("ul",{children:Object(r.jsx)(ue,{availabilities:S})})]}),Object(r.jsxs)("div",{children:["Appointments",Object(r.jsx)("ul",{children:Object(r.jsx)(oe,{appointments:k})})]})]})}return Object(r.jsx)(r.Fragment,{})},de=function(){var e=C().login,t=Object(j.f)();return Object(r.jsx)("button",{onClick:function(){e(),t.push("/")},children:"Sign in with Google"})},he=function(){return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(u,{}),Object(r.jsx)("h1",{children:"Baby-Sitter Sign In"}),Object(r.jsx)("p",{children:"Not For Parents. This page is for babysitters to sign in and manage their bookings."}),Object(r.jsx)("p",{children:"No need for parents to sign in, just enter date & time on the home page and choose your sitter."}),Object(r.jsx)("form",{children:Object(r.jsx)(de,{})})]})},Oe=function(){return Object(r.jsx)("div",{children:Object(r.jsxs)(j.c,{children:[Object(r.jsx)(j.a,{path:"/availabilities",component:G}),Object(r.jsx)(j.a,{path:"/sitters/:id",component:be}),Object(r.jsx)(j.a,{path:"/login",component:he}),Object(r.jsx)(j.a,{exact:!0,path:"/",component:ae})]})})},xe=function(){var e=Object(j.g)().bookingId;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(D,{}),Object(r.jsx)(u,{}),e]})},me=function(){var e=Object(j.g)().weekday;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(D,{}),Object(r.jsx)(u,{}),Object(r.jsx)("h1",{style:{textTransform:"capitalize"},children:e})]})},pe=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(D,{}),Object(r.jsx)(u,{}),Object(r.jsx)("h1",{children:"My Schedule"}),Object(r.jsx)(ie,{data:V(),render:function(e){return Object(r.jsx)(z,{url:"/my-schedule/".concat(e),children:Object(r.jsx)("p",{children:e})})}})]})},fe=function(e){var t=e.url,n=e.m,r=e.h,a=e.b,s=Object(c.useState)(null),i=Object(x.a)(s,2),j=i[0],o=i[1],u=Object(c.useState)(!0),l=Object(x.a)(u,2),b=l[0],d=l[1],m=Object(c.useState)(null),p=Object(x.a)(m,2),f=p[0],g=p[1],y=C().logout;return Object(c.useEffect)((function(){var e=!0;g(null);var n=new AbortController;Object(O.a)(h.a.mark((function r(){var c;return h.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return d(!0),r.next=3,v({url:t,signal:n.signal}).catch((function(e){20!==e.code&&g(e)}));case 3:if(!(c=r.sent)||!e){r.next=15;break}if(!(c.status>=400&&c.status<600)){r.next=10;break}401===c.status&&y(),g(c),r.next=15;break;case 10:return r.t0=o,r.next=13,c.json();case 13:r.t1=r.sent,(0,r.t0)(r.t1);case 15:d(!1);case 16:case"end":return r.stop()}}),r)})))();return function(){e=!1,n.abort()}}),[t,n,r,a,y]),[j,b,f,o]},ve=function(e){var t=e.data,n=e.render;return Object(r.jsx)(r.Fragment,{children:t?n(t):null})},ge=function(e){var t=e.approved;return Object(r.jsx)(r.Fragment,{children:t?null:Object(r.jsxs)("div",{className:"warning border-box",children:[Object(r.jsx)("h3",{children:"Notice!"}),Object(r.jsx)("p",{children:"You must be approved by an admin, until you are approved, you won't appear in search results"})]})})},ye=function(e){var t=e.data,n=e.updateSitter,a=Object(c.useState)(t.first_name),s=Object(x.a)(a,2),i=s[0],j=s[1],o=Object(c.useState)(t.last_name),u=Object(x.a)(o,2),l=u[0],b=u[1],d=Object(c.useState)(t.contact_name),h=Object(x.a)(d,2),O=h[0],m=h[1],p=Object(c.useState)(t.contact_phone),f=Object(x.a)(p,2),v=f[0],g=f[1],y=Object(c.useState)(t.birthday),w=Object(x.a)(y,2),_=w[0],S=w[1],k=Object(c.useState)(t.years_of_experience),N=Object(x.a)(k,2),C=N[0],F=N[1],D=Object(c.useState)(t.price),M=Object(x.a)(D,2),T=M[0],L=M[1];return Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n({first_name:i,last_name:l,contact_name:O,contact_phone:v,birthday:_,years_of_experience:C,price:T})},children:[Object(r.jsx)("label",{htmlFor:"first_name",children:"First name"}),Object(r.jsx)("input",{name:"first_name",type:"text",value:i,onChange:function(e){var t=e.target;return j(t.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"last_name",children:"last name"}),Object(r.jsx)("input",{name:"last_name",type:"text",value:l,onChange:function(e){var t=e.target;return b(t.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("h5",{children:"Legal Gurdian's Contact Info"}),Object(r.jsx)("label",{htmlFor:"contact_name",children:"contact name"}),Object(r.jsx)("input",{name:"contact_name",type:"text",value:O,onChange:function(e){var t=e.target;return m(t.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"contact_phone",children:"contact phone"}),Object(r.jsx)("input",{name:"contact_phone",type:"text",value:v,onChange:function(e){var t=e.target;return g(t.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"birthday",children:"birthday"}),Object(r.jsx)("input",{name:"birthday",type:"text",value:_,onChange:function(e){var t=e.target;return S(t.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"years_of_experience",children:"years_of_experience"}),Object(r.jsx)("input",{name:"years_of_experience",type:"number",value:C,onChange:function(e){var t=e.target;return F(t.value)}}),Object(r.jsx)("span",{children:"years"}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"price",children:"price"}),Object(r.jsx)("input",{name:"price",type:"number",value:T,onChange:function(e){var t=e.target;return L(t.value)}}),Object(r.jsx)("span",{children:"per hour"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"submit",value:"update"})]})},we=function(){var e=fe({url:f("/sitter")}),t=Object(x.a)(e,4),n=t[0],c=(t[1],t[2],t[3]),a=function(){var e=Object(O.a)(h.a.mark((function e(t){var n,r,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=f("update_sitter"),e.next=3,v({url:n,m:"PATCH",b:t});case 3:return r=e.sent,e.next=6,r.json();case 6:a=e.sent,c(a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(D,{}),Object(r.jsx)(u,{}),Object(r.jsx)(ve,{data:n,render:function(e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ge,{approved:e.approved}),Object(r.jsx)(ye,{data:n,updateSitter:a})]})}})]})},_e=function(e){var t=e.addAppointment,n=Object(c.useState)(U(new Date)),a=Object(x.a)(n,2),s=a[0],i=a[1],j=Object(c.useState)(60),o=Object(x.a)(j,2),u=o[0],l=o[1],b=Object(c.useState)(""),d=Object(x.a)(b,2),m=d[0],p=d[1],g=Object(c.useState)(""),y=Object(x.a)(g,2),w=y[0],_=y[1],S=function(){return ee(s,60)},k=function(){var e=Object(O.a)(h.a.mark((function e(n){var r,c,a,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r=f("appointments"),c={startDate:s,selection:u,phone:m,name:w},e.next=5,v({url:r,m:"POST",b:c});case 5:return a=e.sent,e.next=8,a.json();case 8:i=e.sent,t(i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("form",{className:"find-sitter-menu",onSubmit:k,children:[Object(r.jsx)("p",{children:"Add a booking"}),Object(r.jsx)(te,{startDate:s,setStartDate:i}),Object(r.jsx)(ne,{startDate:s,setStartDate:i,children:Object(r.jsx)(J.a,{options:S(),onChange:function(e){return l(e.value)},value:S().find((function(e){return e.value===u}))})}),Object(r.jsxs)(le,{children:[Object(r.jsx)("input",{type:"text",placeholder:"Phone",className:"border-box",value:m,onChange:function(e){var t=e.target;return p(t.value)}}),Object(r.jsx)("input",{type:"text",placeholder:"Name",className:"border-box",value:w,onChange:function(e){return _(e.target.value)}})]}),Object(r.jsx)("input",{type:"submit",className:"find-sitter-button",value:"add"})]})},Se=function(){var e=fe({url:f("/sitter")}),t=Object(x.a)(e,3),n=t[0],c=(t[1],t[2],fe({url:f("appointments")})),a=Object(x.a)(c,4),s=a[0],i=(a[1],a[2],a[3]),j=function(e){return i([].concat(Object(Q.a)(s),[e]))};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(D,{}),Object(r.jsx)(ve,{data:n,render:function(e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("h2",{children:[e.first_name," ",e.last_name]}),Object(r.jsx)(ge,{approved:e.approved}),Object(r.jsx)(l.b,{to:"/edit-profile",className:"border-box",children:"edit profile"}),Object(r.jsx)(l.b,{to:"/my-schedule",className:"border-box",children:"My schedule"}),Object(r.jsx)(_e,{addAppointment:j}),Object(r.jsx)("p",{children:"Current Bookings"}),Object(r.jsx)(ie,{data:s&&s.sort((function(e,t){return e.start_time<t.start_time?-1:e.start_time>t.start_time?1:0})),render:function(e){return Object(r.jsx)(z,{url:"/bookings/".concat(e.id),children:Object(r.jsxs)("p",{children:[Z(e.start_time,"dddd, MMMM D"),Object(r.jsx)("br",{}),W(e.start_time)," -"," ",X(e.start_time,e.duration_minutes),Object(r.jsx)("br",{}),Object(r.jsx)("span",{style:{marginRight:"1em"},children:e.contact_name}),Object(r.jsx)("span",{children:e.contact_phone})]})},e.id)}})]})}})]})},ke=function(){return Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)(j.c,{children:[Object(r.jsx)(j.a,{exact:!0,path:"/",component:Se}),Object(r.jsx)(j.a,{path:"/edit-profile",component:we}),Object(r.jsx)(j.a,{exact:!0,path:"/my-schedule",component:pe}),Object(r.jsx)(j.a,{path:"/my-schedule/:weekday",component:me}),Object(r.jsx)(j.a,{path:"/bookings/:bookingId",component:xe})]})})},Ne=function(){return Object(r.jsx)("h1",{children:"LoadingPage"})};var Ce=function(){var e=C(),t=e.isLoggedIn,n=e.isInitialized;return Object(r.jsx)("div",{className:"App",children:n?t?Object(r.jsx)(ke,{}):Object(r.jsx)(Oe,{}):Object(r.jsx)(Ne,{})})},Fe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,160)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(l.a,{basename:"/",children:Object(r.jsx)(w,{children:Object(r.jsx)(N,{children:Object(r.jsx)(Ce,{})})})})}),document.getElementById("root")),Fe()},83:function(e,t,n){},86:function(e,t,n){}},[[155,1,2]]]);
//# sourceMappingURL=main.9b319f45.chunk.js.map