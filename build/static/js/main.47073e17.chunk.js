(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(18),r=n.n(s),o=(n(25),n(11)),l=n(20),i=(n(26),n(10)),b=n(0);function j(e){return Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)(i.b,{className:"navbar-brand",to:"/",children:e.title}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(b.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.b,{className:"nav-link active",to:"/about",children:"About"})})}),e.serchBar?Object(b.jsxs)("form",{className:"d-flex",children:[Object(b.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(b.jsx)("button",{className:"btn btn-outline-light",type:"submit",children:"Search"})]}):"oohh shoot!!!"]})]})})}j.defaultProps={title:"Enter you title :|",searchBar:!0};var d=function(e){var t=e.todo,n=e.onDelete;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:t.title}),Object(b.jsx)("p",{children:t.desc}),Object(b.jsx)("button",{className:"btn btm-sm btn-danger",onClick:function(){n(t)},children:"Delete"})]})},u=function(e){return Object(b.jsxs)("div",{className:"container",style:{minheight:"40vh",margin:"20px 0"},children:[Object(b.jsx)("h4",{className:"my-3",children:"Todos List"}),Object(b.jsx)("hr",{}),0===e.todos.length?"No todos to display":e.todos.map((function(t){return Object(b.jsx)(d,{todo:t,onDelete:e.onDelete},t.sno)}))]})},h=function(){return Object(b.jsx)("footer",{className:"bg-dark text-light py-3",children:Object(b.jsx)("p",{className:"text-center",children:"Copyright \xa9 Ankur"})})},x=function(e){var t=e.addTodo,n=Object(c.useState)(""),a=Object(o.a)(n,2),s=a[0],r=a[1],l=Object(c.useState)(""),i=Object(o.a)(l,2),j=i[0],d=i[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{style:{padding:"14px"},children:[Object(b.jsx)("h3",{children:"Add a Todo"}),Object(b.jsx)("div",{children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s&&j||alert("Title or Description left blank :|"),t(s,j),r(""),d("")},children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"title",className:"form-label",children:"Todo Title"}),Object(b.jsx)("input",{value:s,onChange:function(e){r(e.target.value)},className:"form-control",id:"title","aria-describedby":"emailHelp"})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"desc",className:"form-label",children:"Todo Decsription"}),Object(b.jsx)("input",{value:j,type:"text",onChange:function(e){d(e.target.value)},className:"form-control",id:"desc"})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-success",children:"Add Todo"})]})})]})})},O=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("figure",{class:"text-center",style:{padding:"100px"},children:Object(b.jsxs)("blockquote",{class:"blockquote",children:[Object(b.jsx)("h2",{children:"Hi, I'm Ankur"}),Object(b.jsxs)("p",{children:["      \ud83d\udcac self-taught coder, investor, designer and programmer",Object(b.jsx)("br",{}),"\ud83d\udcd9 student at Indian Institute of Technology, BHU, Varanasi",Object(b.jsx)("br",{}),"\ud83c\udf31 learning Django. React. REST API.",Object(b.jsx)("br",{}),"\ud83d\udd2d interested in web-development, open-source, tech",Object(b.jsx)("br",{}),"\ud83d\udda5 develops websites. back-end works.",Object(b.jsx)("br",{}),"\ud83e\udde9 likes cycling. skateboarding. football. and webdev",Object(b.jsx)("br",{})]})]})})})},m=n(2);var g=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=function(e){d(r.filter((function(t){return t!==e}))),localStorage.setItem("todos",JSON.stringify(r))},n=function(e,t){console.log("I am adding a title",e,t);var n={sno:0===r.length?0:r[r.length-1].sno+1,title:e,desc:t};d([].concat(Object(l.a)(r),[n])),console.log(n)},a=Object(c.useState)(e),s=Object(o.a)(a,2),r=s[0],d=s[1];return Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(r))}),[r]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(i.a,{children:[Object(b.jsx)(j,{title:"MyTodosList",serchBar:!0}),Object(b.jsxs)(m.c,{children:[Object(b.jsx)(m.a,{exact:!0,path:"/",render:function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(x,{addTodo:n}),Object(b.jsx)(u,{todos:r,onDelete:t})]})})}}),Object(b.jsx)(m.a,{exact:!0,path:"/About",children:Object(b.jsx)(O,{})})]}),Object(b.jsx)(h,{})]})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),p()}},[[33,1,2]]]);
//# sourceMappingURL=main.47073e17.chunk.js.map