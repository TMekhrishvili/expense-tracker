(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{58:function(t,e,n){},60:function(t,e,n){"use strict";n.r(e);var a=n(3),i=n(0),c=n.n(i),r=n(11),l=n.n(r),s=n(30),j=n(39),o=n(36),d=n(37),b=n(96),h=n(100),x=n(99),p=n(94),O=n(97),u=n(98),g=n(95),m=n(42),y=n.n(m),f=n(103),C=n(91),v=n(101),k=n(104),w=n(102),S=[{id:1,title:"Expense title1",quantity:2,unitPrice:10,totalCost:20,date:(new Date).toLocaleDateString()},{id:2,title:"Expense title2",quantity:2,unitPrice:10,totalCost:20,date:(new Date).toLocaleDateString()}],D={title:"",quantity:0,unitPrice:0},T=Object(C.a)((function(t){return{paper:{position:"absolute",width:400,backgroundColor:t.palette.background.paper,boxShadow:t.shadows[5],padding:t.spacing(2,4,3)}}})),q=function(){var t=Object(i.useState)(S),e=Object(d.a)(t,2),n=e[0],c=e[1],r=Object(i.useState)(!1),l=Object(d.a)(r,2),m=l[0],C=l[1],q=Object(i.useState)(D),P=Object(d.a)(q,2),N=P[0],E=P[1],I=T(),L=function(t){E(Object(j.a)(Object(j.a)({},N),{},Object(s.a)({},t.target.name,t.target.value)))};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(v.a,{open:m,onClose:function(){C(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:Object(a.jsx)("div",{style:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"},className:I.paper,children:Object(a.jsxs)("div",{className:"fields",children:[Object(a.jsx)(k.a,{style:{marginTop:"20px"},children:"Title"}),Object(a.jsx)(f.a,{type:"text",name:"title",onChange:L}),Object(a.jsx)(k.a,{style:{marginTop:"20px"},children:"Quantity"}),Object(a.jsx)(f.a,{type:"text",name:"quantity",onChange:L}),Object(a.jsx)(k.a,{style:{marginTop:"20px"},children:"Unit price"}),Object(a.jsx)(f.a,{type:"text",name:"unitPrice",onChange:L}),Object(a.jsx)(w.a,{style:{marginTop:"20px"},onClick:function(){var t=Object(o.a)(n),e=Math.max.apply(Math,t.map((function(t){return t.id}))),a=parseInt(N.quantity),i=parseInt(N.unitPrice),r=(new Date).toLocaleDateString();c([].concat(Object(o.a)(n),[{id:e+1,title:N.title,quantity:a,unitPrice:i,totalCost:a*i,date:r}])),C(!1)},variant:"contained",color:"primary",children:"Save"})]})})}),Object(a.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:Object(a.jsx)("button",{onClick:function(){C(!0)},className:"add-button",children:"+"})}),Object(a.jsx)(p.a,{component:g.a,children:Object(a.jsxs)(b.a,{"aria-label":"simple table",children:[Object(a.jsx)(O.a,{children:Object(a.jsxs)(u.a,{children:[Object(a.jsx)(x.a,{children:"N"}),Object(a.jsx)(x.a,{children:"Title"}),Object(a.jsx)(x.a,{align:"right",children:"Quantity"}),Object(a.jsx)(x.a,{align:"right",children:"Unit price"}),Object(a.jsx)(x.a,{align:"right",children:"Total cost"}),Object(a.jsx)(x.a,{align:"right",children:"Date"}),Object(a.jsx)(x.a,{align:"right",children:"Delete"})]})}),Object(a.jsx)(h.a,{children:n.map((function(t){return Object(a.jsxs)(u.a,{children:[Object(a.jsx)(x.a,{children:t.id}),Object(a.jsx)(x.a,{component:"th",scope:"row",children:t.title}),Object(a.jsx)(x.a,{align:"right",children:t.quantity}),Object(a.jsx)(x.a,{align:"right",children:t.unitPrice}),Object(a.jsx)(x.a,{align:"right",children:t.totalCost}),Object(a.jsx)(x.a,{align:"right",children:t.date}),Object(a.jsx)(x.a,{align:"right",children:Object(a.jsx)(y.a,{onClick:function(){return function(t){var e=Object(o.a)(n).filter((function(e){return e.id!==t}));c(e)}(t.id)},style:{color:"red",cursor:"pointer"}})})]},t.title)}))})]})})]})},P=(n(58),function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{className:"title",children:"Expense Tracker App"})})}),N=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(P,{}),Object(a.jsx)(q,{})]})};l.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.d2439fd4.chunk.js.map