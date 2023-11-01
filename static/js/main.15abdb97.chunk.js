(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var a=c(6),s=c.n(a),n=c(2),r=c(1),l=(c(11),c(12),c(0)),i=function(e){var t=e.todos,c=e.setModal,a=e.id,s=e.setId,n=e.setLoader,i=e.setUserId,o=Object(r.useCallback)((function(e,t){return t===e.id?"far fa-eye-slash":"far fa-eye"}),[]),d=Object(r.useCallback)((function(e){c(!0),s(e.id),n(!0),i(e.userId)}),[c,s,n,i]);return Object(l.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"#"}),Object(l.jsx)("th",{children:Object(l.jsx)("span",{className:"icon",children:Object(l.jsx)("i",{className:"fas fa-check"})})}),Object(l.jsx)("th",{children:"Title"}),Object(l.jsx)("th",{children:" "})]})}),Object(l.jsx)("tbody",{children:t.map((function(e){return Object(l.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(l.jsx)("td",{className:"is-vcentered",children:e.id}),Object(l.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(l.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(l.jsx)("i",{className:"fas fa-check"})})}),Object(l.jsx)("td",{className:"is-vcentered is-expanded",children:Object(l.jsx)("p",{className:e.completed?"has-text-success":"has-text-danger",children:e.title})}),Object(l.jsx)("td",{className:"has-text-right is-vcentered",children:Object(l.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return d(e)},children:Object(l.jsx)("span",{className:"icon",children:Object(l.jsx)("i",{className:o(e,a)})})})})]},e.id)}))})]})},o=c(4),d=c(3),u=c.n(d);function j(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var b,h=function(){return j("/todos")},O=function(){var e=Object(o.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h().then((function(e){return e.filter((function(e){return e.completed===t}))})).catch((function(e){throw e})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();!function(e){e.All="all",e.Active="active",e.Completed="completed"}(b||(b={}));var m=function(e){var t=e.setTodos,c=Object(r.useState)("all"),a=Object(n.a)(c,2),s=a[0],i=a[1],d=Object(r.useState)(""),j=Object(n.a)(d,2),m=j[0],f=j[1],x=Object(r.useCallback)((function(e,t){return t.filter((function(t){return t.title.toLowerCase().includes(e)}))}),[]),p=Object(r.useCallback)(function(){var e=Object(o.a)(u.a.mark((function e(c,a){var s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(c),e.next=3,h();case 3:s=e.sent,e.t0=c,e.next=e.t0===b.All?7:e.t0===b.Active?8:e.t0===b.Completed?12:16;break;case 7:return e.abrupt("break",17);case 8:return e.next=10,O(!1);case 10:return s=e.sent,e.abrupt("break",17);case 12:return e.next=14,O(!0);case 14:return s=e.sent,e.abrupt("break",17);case 16:return e.abrupt("break",17);case 17:a&&(s=x(a,s)),t(s);case 19:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),[x,t]),v=Object(r.useCallback)((function(e){var t=e.target.value,c=t.toLowerCase().trim();f(t),p(s,c)}),[s,p]),N=Object(r.useCallback)(function(){var e=Object(o.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=t.target.value,p(c,m);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[m,p]);return Object(l.jsxs)("form",{className:"field has-addons",children:[Object(l.jsx)("p",{className:"control",children:Object(l.jsx)("span",{className:"select",children:Object(l.jsxs)("select",{"data-cy":"statusSelect",value:s,onChange:N,children:[Object(l.jsx)("option",{value:"all",children:"All"}),Object(l.jsx)("option",{value:"active",children:"Active"}),Object(l.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(l.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(l.jsx)("input",{"data-cy":"searchInput",type:"text",value:m,className:"input",placeholder:"Search...",onChange:v}),Object(l.jsx)("span",{className:"icon is-left",children:Object(l.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(l.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:m&&Object(l.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:Object(o.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f(""),p(s,"");case 2:case"end":return e.stop()}}),e)})))})})]})]})},f=(c(15),function(){return Object(l.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(l.jsx)("div",{className:"Loader__content"})})}),x=function(e){var t,c,a=e.todos,s=e.setModal,i=e.id,o=e.setId,d=e.loader,u=e.setLoader,b=e.userId,h=Object(r.useState)(null),O=Object(n.a)(h,2),m=O[0],x=O[1];Object(r.useEffect)((function(){u(!0),function(e){return j("/users/".concat(e))}(b).then((function(e){x(e)})).catch((function(){})).finally((function(){return u(!1)}))}),[u,b]);var p=Object(r.useCallback)((function(){s(!1),o(0)}),[s,o]),v=Object(r.useCallback)((function(e){return a.find((function(t){return t.id===e}))}),[a]);return Object(l.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(l.jsx)("div",{className:"modal-background"}),d?Object(l.jsx)(f,{}):Object(l.jsxs)("div",{className:"modal-card",children:[Object(l.jsxs)("header",{className:"modal-card-head",children:[Object(l.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(i)}),Object(l.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:p})]}),Object(l.jsxs)("div",{className:"modal-card-body",children:[Object(l.jsx)("p",{className:"block","data-cy":"modal-title",children:null===(t=v(i))||void 0===t?void 0:t.title}),Object(l.jsxs)("p",{className:"block","data-cy":"modal-user",children:[!1===(null===(c=v(i))||void 0===c?void 0:c.completed)?Object(l.jsx)("strong",{className:"has-text-danger",children:"Planned"}):Object(l.jsx)("strong",{className:"has-text-success",children:"Done"})," by ",Object(l.jsx)("a",{href:"mailto:".concat(null===m||void 0===m?void 0:m.email),children:null===m||void 0===m?void 0:m.name})]})]})]})]})},p=function(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),c=t[0],a=t[1],s=Object(r.useState)(!1),o=Object(n.a)(s,2),d=o[0],u=o[1],j=Object(r.useState)(!1),b=Object(n.a)(j,2),O=b[0],p=b[1],v=Object(r.useState)(0),N=Object(n.a)(v,2),y=N[0],k=N[1],g=Object(r.useState)(0),C=Object(n.a)(g,2),w=C[0],I=C[1];return Object(r.useEffect)((function(){u(!0),h().then((function(e){a(e)})).catch((function(){})).finally((function(){return u(!1)}))}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"section",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"box",children:[Object(l.jsx)("h1",{className:"title",children:"Todos:"}),Object(l.jsx)("div",{className:"block",children:Object(l.jsx)(m,{setTodos:a})}),Object(l.jsxs)("div",{className:"block",children:[d&&!O&&Object(l.jsx)(f,{}),!d&&c.length>0&&Object(l.jsx)(i,{todos:c,setModal:p,id:y,setId:k,setLoader:u,setUserId:I})]})]})})}),O&&Object(l.jsx)(x,{todos:c,setModal:p,id:y,setId:k,loader:d,setLoader:u,userId:w})]})};s.a.render(Object(l.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.15abdb97.chunk.js.map