(this["webpackJsonpsw-spaceships"]=this["webpackJsonpsw-spaceships"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),s=a.n(c),i=a(1),l=(a(14),a(4)),u=a.n(l),m=a(8),o=a(7);function p(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(!0),l=Object(i.a)(s,2),p=l[0],h=l[1];function f(){return(f=Object(o.a)(u.a.mark((function t(){var a,n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=[];case 1:if(null===e){t.next=14;break}return t.next=4,fetch(e);case 4:return n=t.sent,t.next=7,n.json();case 7:null!==(r=t.sent).next&&(r.next=r.next.replace(/^http:\/\//i,"https://")),a.push.apply(a,Object(m.a)(r.results)),e=r.next,console.log(r),t.next=1;break;case 14:c(a),h(!1);case 16:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){f.apply(this,arguments)}()}),[]),[r,p]}var h=function(){return r.a.createElement("input",{className:"button",type:"submit",value:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c"})},f=r.a.createContext();function d(){var e=Object(n.useContext)(f),t=e.numSpaceshipsTotal,a=e.setNumSpaceshipsShow,c=Object(n.useState)(2),s=Object(i.a)(c,2),l=s[0],u=s[1];Object(n.useEffect)((function(){a(2)}),[]);return r.a.createElement("form",{className:"input-num-form",onSubmit:function(e){a(l),e.preventDefault()}},r.a.createElement("input",{className:"input-num-field",type:"number",value:l,min:1,max:t,onChange:function(e){u(e.target.value)}}),r.a.createElement(h,null))}var E=function(){return r.a.createElement("div",{className:"amount-selector-container"},r.a.createElement("div",{className:"amount-selector-text"},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0432\u0435\u0437\u0434\u043e\u043b\u0435\u0442\u043e\u0432 \u0434\u043b\u044f \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f"),r.a.createElement(d,null))},v=function(e){var t=e.ID,a=e.selectedSpaceships,c=e.setSelectedSpaceships,s=Object(n.useContext)(f).nameList,l=s[0],u=Object(n.useState)(l),m=Object(i.a)(u,2),o=m[0],p=m[1],h=Object.assign(a,a);Object(n.useEffect)((function(){h[t]=o,c(Object.assign({},h))}),[o]);return r.a.createElement("select",{className:"dropdown",name:"select",value:o,onChange:function(e){p(e.target.value)}},s.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))},b=function(){var e=Object(n.useContext)(f),t=e.numSpaceshipsShow,a=e.nameList,c=e.setSpaceshipsCompare,s=Object(n.useState)({}),l=Object(i.a)(s,2),u=l[0],m=l[1];Object(n.useEffect)((function(){for(var e={},a=0;a<t;a++)e["element-".concat(a)]="";m(e)}),[]);for(var o=[],p=0;p<t;p++)o.push(r.a.createElement(v,{ID:"element-".concat(p),selectedSpaceships:u,setSelectedSpaceships:m}));return Array.isArray(a)?r.a.createElement("div",{className:"spaceships-selector-container"},r.a.createElement("div",{className:"spaceships-selector-text"},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0437\u0432\u0435\u0437\u0434\u043e\u043b\u0435\u0442\u044b \u0434\u043b\u044f \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f"),r.a.createElement("form",{className:"dropdown-form",onSubmit:function(e){e.preventDefault(),c(Object.values(u))}},r.a.createElement("div",{className:"dropdowns-container"},o),r.a.createElement(h,null))):r.a.createElement(r.a.Fragment,null)},g=function(){return r.a.createElement("div",{className:"setup-container"},r.a.createElement(E,null),r.a.createElement(b,null))},j=function(e){var t=e.title,a=e.param;e.outliers;return r.a.createElement("div",{className:"starship-element-text"},r.a.createElement("div",{className:"starship-element-title"},t),r.a.createElement("div",{className:"starship-element-characteric"},a))},O=function(e){var t=e.outliers,a=e.MGLT,n=e.cargo_capacity,c=e.cost_in_credits,s=e.crew,i=e.hyperdrive_rating,l=e.length,u=e.manufacturer,m=e.max_atmosphering_speed,o=e.model,p=e.name,h=e.passengers,f=e.starship_class;return r.a.createElement("div",{className:"starship-element"},r.a.createElement(j,{title:"Name",param:p}),r.a.createElement(j,{title:"Model",param:o}),r.a.createElement(j,{title:"Manufacturer",param:u}),r.a.createElement(j,{title:"Starship Class",param:f}),r.a.createElement(j,{title:"Crew",param:s}),r.a.createElement(j,{title:"Passengers",param:h}),r.a.createElement(j,{title:"Cost In Credits",param:c,outliers:t.cost_in_credits}),r.a.createElement(j,{title:"Length",param:l,outliers:t.length}),r.a.createElement(j,{title:"Cargo Capacity",param:n,outliers:t.cargo_capacity}),r.a.createElement(j,{title:"MGLT",param:a,outliers:t.MGLT}),r.a.createElement(j,{title:"Max Atmospheric Speed",param:m,outliers:t.max_atmosphering_speed}),r.a.createElement(j,{title:"Hyperdrive Rating",param:i,outliers:t.hyperdrive_rating}))},_={MGLT:[],cargo_capacity:[],cost_in_credits:[],hyperdrive_rating:[],length:[],max_atmosphering_speed:[]};var S=function(){var e=Object(n.useContext)(f),t=e.data,a=e.spaceshipsCompare,c=["MGLT","cargo_capacity","cost_in_credits","hyperdrive_rating","length","max_atmosphering_speed"],s=Object(n.useState)({}),l=Object(i.a)(s,2),u=l[0],m=l[1],o=Object(n.useState)(!1),p=Object(i.a)(o,2),h=p[0],d=p[1];Object(n.useEffect)((function(){for(var e={},n=function(n){a.includes(t[n].name)&&(c.map((function(e,a){return r=t[n],c=e,isNaN(r[c])||_[c].push(r[c]),0!==_[c].length&&(_[c]=_[c].sort((function(e,t){return e-t}))),_;var r,c})),t[n].name===a[a.length-1]&&c.map((function(t,a){e[t]={max:_[t][_[t].length-1],min:_[t][0]}})))},r=0;r<t.length;r++)n(r);m(e)}),[a]),Object(n.useEffect)((function(){d(!0)}),[u]);for(var E=[],v=0;v<t.length;v++)a.includes(t[v].name)&&E.push(r.a.createElement(O,{outliers:u,MGLT:t[v].MGLT,cargo_capacity:t[v].cargo_capacity,cost_in_credits:t[v].cost_in_credits,crew:t[v].crew,hyperdrive_rating:t[v].hyperdrive_rating,length:t[v].length,manufacturer:t[v].manufacturer,max_atmosphering_speed:t[v].max_atmosphering_speed,model:t[v].model,name:t[v].name,passengers:t[v].passengers,starship_class:t[v].starship_class}));return h?r.a.createElement("div",{className:"output-container"},E):r.a.createElement(r.a.Fragment,null)};function x(){var e=Object(n.useState)(),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(),l=Object(i.a)(s,2),u=l[0],m=l[1],o=Object(n.useState)([]),h=Object(i.a)(o,2),d=h[0],E=h[1],v=Object(n.useState)(),b=Object(i.a)(v,2),j=b[0],O=b[1],_=p("https://swapi.dev/api/starships/"),x=Object(i.a)(_,2),y=x[0],N=x[1];return Object(n.useEffect)((function(){0!==y.length&&(c(y.length),O(function(e){return e.map((function(e){return e.name}))}(y)))}),[N]),r.a.createElement(f.Provider,{value:{data:y,nameList:j,numSpaceshipsTotal:a,numSpaceshipsShow:u,setNumSpaceshipsShow:m,spaceshipsCompare:d,setSpaceshipsCompare:E}},r.a.createElement("div",{className:"main-container"},r.a.createElement(g,null),r.a.createElement(S,null)))}s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.8f000da3.chunk.js.map