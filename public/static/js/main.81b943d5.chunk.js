(this.webpackJsonpJeremyCapeauAPI=this.webpackJsonpJeremyCapeauAPI||[]).push([[0],{44:function(e,t,a){e.exports=a(74)},49:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),i=a.n(c),o=(a(49),a(5)),u=a(16),l=a(1),s=a.n(l),m=a(2),d=a(3),p=a(41),f=a(7),v=a.n(f);v.a.defaults.withCredentials=!0;var E={"Content-Type":"application/json"},b=function(e,t){return v.a.post("/api/user/login",{email:e,password:t},{headers:E})},h=function(){return v.a.post("/api/user/auth",{},{headers:E})},g=function(){return localStorage.clear(),v.a.post("/api/user/logout",{},{headers:E})},y=function(e){return v.a.post("/api/category/add",{nom:e},{headers:E})},j=function(){return v.a.get("/api/category/view")},w=function(e){return v.a.post("/api/category/delete",{id:e},{headers:E})},_=function(e){return v.a.post("/api/category/modify",{category:e},{headers:E})},x=function(){return v.a.get("/api/images/view",{headers:E})},O=function(e){return v.a.post("/api/images/delete",{id:e},{headers:E})},k=function(){return v.a.get("/api/pdfs/view")},N=function(e){return v.a.post("/api/pdfs/delete",{id:e},{headers:E})},C=function(e,t,a,n){return v.a.post("/api/gallery/add",{category_id:e,img_id:t,img_data:a,index:n},{headers:E})},S=function(e){return v.a.post("/api/gallery/move",{rubrique:e},{headers:E})},I=function(e,t){return v.a.post("/api/gallery/delete",{category_id:e,img_id:t},{headers:E})},q=function(){return v.a.get("/api/gallery/view")},A=function(){return v.a.get("/api/contact/view")},L=function(e){return v.a.post("/api/contact/delete",{id:e},{headers:E})},M=function(){return v.a.get("/api/apropos/view")},T=function(e){var t=e.component,a=Object(p.a)(e,["component"]),c=Object(n.useState)("En chargement"),i=Object(d.a)(c,2),o=i[0],l=i[1];Object(n.useEffect)((function(){f()}),[]);var f=function(){var e=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h().then((function(e){e.data.auth&&l(e.data.auth.toString())})).catch((function(e){window.location="/user"}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){return"En chargement"===o?r.a.createElement("p",null,o):"true"===o?r.a.createElement(t,null):void 0};return r.a.createElement(u.a,Object.assign({},a,{render:function(e){return r.a.createElement(v,null)}}))},W=(a(71),function(e){var t="";e.startsWith("http")?t="https://img.youtube.com/vi/"+e.replace("https://www.youtube.com/embed/","")+"/0.jpg":t="../../preview/"+e;return t}),z=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(void 0),u=Object(d.a)(i,2),l=u[0],p=u[1],f=Object(n.useState)({}),v=Object(d.a)(f,2),E=v[0],b=v[1],h=Object(n.useState)({from:"",to:""}),g=Object(d.a)(h,2),x=g[0],O=g[1];Object(n.useEffect)((function(){N()}),[]);var k=function(){var e=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l){e.next=3;break}return alert("Il faut rentrer un nom de categorie"),e.abrupt("return");case 3:return e.next=5,y(l);case 5:N();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:t=e.sent,c(t.data.categories);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(m.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t);case 2:N(),b({});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(m.a)(s.a.mark((function e(t,a){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),""===(n=x).from?(n.from=a,O(n)):""===n.to&&(n.to=a,O(n),_({from:x.from,to:x.to}).then((function(){O({from:"",to:""}),N()})));case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),I=function(){var e=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E){e.next=3;break}return alert("Erreur de selection"),e.abrupt("return");case 3:if(""!==E.nom){e.next=6;break}return alert("Veuillez entre un nom"),e.abrupt("return");case 6:return e.next=8,_(E);case 8:N(),b({});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"body_dashboard"},r.a.createElement("div",{className:"main_dashboard"},a.map((function(e){var t=W(e.preview_id);return r.a.createElement("div",{key:e._id,className:"category"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(t,")")}},r.a.createElement("div",{className:"select"},r.a.createElement(o.b,{to:"./rubrique/".concat(e._id)},r.a.createElement("img",{src:"../../images/add.png",alt:"Ajouter"})),r.a.createElement("div",{className:"tiers",onClick:function(){return b(e)}},r.a.createElement("img",{src:"../../images/pen.png",alt:"Modifier"})),r.a.createElement("div",{className:"tiers",onClick:function(){return C(e._id)}},r.a.createElement("img",{src:"../../images/bin.png",alt:"Supprimer"})),r.a.createElement("div",{className:"tiers",onClick:function(t){return S(t,e)}},r.a.createElement("img",{src:"../../images/move.png",alt:"Ajouter"})))),r.a.createElement("p",null,e.nom," ",e.visible?"(visible)":"(pas visible)"))}))),r.a.createElement("div",{className:"sidebar_dashboard"},r.a.createElement("div",null,r.a.createElement("h1",null,"Ajouter"),r.a.createElement("p",null,"Nom de la categorie"),r.a.createElement("input",{type:"text",onChange:function(e){return p(e.target.value)}}),r.a.createElement("button",{onClick:function(e){return k()}},"Ajouter")),r.a.createElement("div",{style:{display:E._id?"flex":"none"}},r.a.createElement("h1",null,"Modifier"),r.a.createElement("p",null,"Nom de la categorie"),r.a.createElement("input",{type:"text",value:E.nom,onChange:function(e){var t={_id:E._id,nom:e.target.value,visible:E.visible};b(t)}}),r.a.createElement("input",{type:"submit",value:E.visible,onClick:function(e){var t={_id:E._id,nom:E.nom,visible:"true"===e.target.value?"false":"true"};b(t)}}),r.a.createElement("button",{onClick:function(e){return I()}},"Modifier"))))},F=a(4),D=a.n(F),J=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(0),o=Object(d.a)(i,2),u=o[0],l=o[1];Object(n.useEffect)((function(){p()}),[]);var p=function(){var e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,c(t.data.images);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(m.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t);case 2:p();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(e){var t=e.img,a=W(t.picture_id);return r.a.createElement("div",{key:t._id,className:"images"},r.a.createElement("img",{alt:t.picture_id,src:a}),r.a.createElement("div",{className:"select",onClick:function(){return f(t._id)}},r.a.createElement("img",{src:"../../images/bin.png",alt:"Supprimer"})))},E=function(){D()("input[type='submit']").prop("disabled","true")};return r.a.createElement("div",{className:"body_dashboard"},r.a.createElement("div",{className:"main_dashboard",id:"images"},a.map((function(e,t){return r.a.createElement(v,{key:e._id,img:e,index:t})}))),r.a.createElement("div",{className:"sidebar_dashboard"},r.a.createElement("div",null,r.a.createElement("h1",null,"Ajouter"),r.a.createElement("form",{onSubmit:E,action:"/api/images/add",method:"post",encType:"multipart/form-data"},r.a.createElement("label",{htmlFor:"datas"},u," fichier(s) selectionn\xe9(s)"),r.a.createElement("input",{type:"file",id:"datas",name:"datas",multiple:!0,required:!0,onChange:function(){var e=D()("#datas").get(0).files;l(e.length)}}),r.a.createElement("input",{type:"submit",value:"Confirmer"}))),r.a.createElement("div",null,r.a.createElement("h1",null,"Ajouter vid\xe9o"),r.a.createElement("form",{onSubmit:E,action:"/api/images/add",method:"post",encType:"multipart/form-data"},r.a.createElement("p",null,"Lien vid\xe9o"),r.a.createElement("input",{type:"text",id:"data",name:"data",required:!0}),r.a.createElement("input",{type:"submit",value:"Confirmer"})))))},P=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(void 0),o=Object(d.a)(i,2),u=o[0],l=o[1],p=Object(n.useState)(void 0),f=Object(d.a)(p,2),v=f[0],E=f[1],b=Object(n.useState)(void 0),h=Object(d.a)(b,2),g=h[0],y=h[1];Object(n.useEffect)((function(){j()}),[]);var j=function(){var e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:t=e.sent,c(t.data.contacts);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(g);case 2:y(void 0),j();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){D()("input[type='submit']").prop("disabled","true")};return r.a.createElement("div",{className:"body_dashboard"},r.a.createElement("div",{className:"main_dashboard"},a.map((function(e){var t="../../logos/"+e.picture_id;return r.a.createElement("div",{key:e._id,className:"contact",onClick:function(){return function(e){E(e.link_id),l(e.nom),y(e._id)}(e)}},r.a.createElement("div",{style:{backgroundImage:"url(".concat(t,")")}},r.a.createElement("div",{className:"select"},r.a.createElement("img",{src:"../../images/pen.png",alt:"Modifier"}))),r.a.createElement("a",{href:e.link_id,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("p",null,e.nom)))}))),r.a.createElement("div",{className:"sidebar_dashboard"},r.a.createElement("div",null,r.a.createElement("h1",null,"Ajouter"),r.a.createElement("form",{onSubmit:_,action:"/api/contact/add",method:"post",encType:"multipart/form-data"},r.a.createElement("label",{htmlFor:"add_logo"},"Importer une image"),r.a.createElement("input",{type:"file",name:"logo",id:"add_logo",required:!0}),r.a.createElement("p",null,"Nom du contact"),r.a.createElement("input",{type:"text",name:"name",required:!0}),r.a.createElement("p",null,"Lien "),r.a.createElement("input",{type:"text",name:"link"}),r.a.createElement("input",{type:"submit",value:"Importer"}))),r.a.createElement("div",{style:{display:g?"flex":"none"}},r.a.createElement("h1",null,"Modifier"),r.a.createElement("form",{onSubmit:_,action:"/api/contact/modify",method:"post",encType:"multipart/form-data"},r.a.createElement("label",{htmlFor:"modify_logo"},"Modifier l'image"),r.a.createElement("input",{type:"file",name:"logo",id:"modify_logo"}),r.a.createElement("p",null,"Nom du contact"),r.a.createElement("input",{type:"text",value:u,name:"nom",onChange:function(e){return l(e.target.value)},required:!0}),r.a.createElement("p",null,"Lien "),r.a.createElement("input",{type:"text",value:v,name:"link",onChange:function(e){return E(e.target.value)}}),r.a.createElement("input",{type:"hidden",value:g,name:"id"}),r.a.createElement("input",{type:"submit",value:"Modifier"})),r.a.createElement("button",{onClick:function(){return w()}},"Supprimer"))))},B=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){i()}),[]);var i=function(){var e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:t=e.sent,c(t.data.pdfs);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(m.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(t);case 2:i();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"body_dashboard"},r.a.createElement("div",{className:"main_dashboard"},a.map((function(e){var t="../../files/"+e.file_id;return r.a.createElement("div",{className:"pdfs",key:e._id},r.a.createElement("div",{style:{backgroundImage:"url(../../images/pdf.png)"}},r.a.createElement("div",{className:"select",onClick:function(){return o(e._id)}},r.a.createElement("img",{src:"../../images/bin.png",alt:"Supprimer"}))),r.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},e.nom))}))),r.a.createElement("div",{className:"sidebar_dashboard"},r.a.createElement("div",null,r.a.createElement("h1",null,"Ajouter un fichier"),r.a.createElement("form",{onSubmit:function(){D()("input[type='submit']").prop("disabled","true")},action:"/api/pdfs/add",method:"post",encType:"multipart/form-data"},r.a.createElement("label",{htmlFor:"data"},"Importer un fichier"),r.a.createElement("input",{type:"file",id:"data",name:"data",required:!0}),r.a.createElement("p",null,"Nom"),r.a.createElement("input",{type:"text",name:"nom",required:!0}),r.a.createElement("input",{type:"submit",value:"Importer"})))))},H=function(){var e=Object(n.useState)({}),t=Object(d.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(void 0),o=Object(d.a)(i,2),u=o[0],l=o[1];Object(n.useEffect)((function(){p()}),[]);var p=function(){var e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M();case 2:t=e.sent,c(t.data.apropos),l(t.data.apropos.texte);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f="../../biopic/"+a.picture_id;return r.a.createElement("div",{className:"body_dashboard"},r.a.createElement("div",{className:"main_dashboard apropos"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(f,")")}}),r.a.createElement("div",{className:"html",dangerouslySetInnerHTML:{__html:a.texte}})),r.a.createElement("div",{className:"sidebar_dashboard"},r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(){D()("input[type='submit']").prop("disabled","true")},action:"/api/apropos/modify",method:"post",encType:"multipart/form-data"},r.a.createElement("h1",null,"Modifier"),r.a.createElement("label",{htmlFor:"data"},"Importer un fichier"),r.a.createElement("input",{type:"file",id:"data",name:"picture_id"}),r.a.createElement("p",null,"Texte"),r.a.createElement("textarea",{type:"text",required:!0,value:u,name:"texte",onChange:function(e){return l(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"Modifier"})))))},V=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)([]),o=Object(d.a)(i,2),l=o[0],p=o[1],f=Object(n.useState)({from:"",to:""}),v=Object(d.a)(f,2),E=v[0],b=v[1],h=Object(n.useState)([]),g=Object(d.a)(h,2),y=g[0],j=g[1],w=Object(u.f)().id;Object(n.useEffect)((function(){(function(){var e=Object(m.a)(s.a.mark((function e(){var t,a,n,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q();case 2:return t=e.sent,a=t.data.gallery,n=a.filter((function(e){return e.category_id===w})),j(n),e.next=8,x();case 8:r=e.sent,c=r.data.images,p(c),O(n,c);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[w]);var O=function(){var e=Object(m.a)(s.a.mark((function e(t,a){var n,r,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=[],r=0;r<t.length;r++)n[r]=t[r].img_id;i=a.filter((function(e){return!1===n.includes(e._id)})),c(i);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),k=function(){var e=Object(m.a)(s.a.mark((function e(){var t,a,n,r,c,i,o,u,l,m;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q();case 2:t=e.sent,a=t.data.gallery.filter((function(e){return e.category_id===w})),n=0;case 5:if(!(n<y.length)){e.next=13;break}if(r=y[n],c=r._id,i=r.img_id,o=r.img_data,u=r.index,""!=c){e.next=10;break}return e.next=10,C(w,i,o,u);case 10:n++,e.next=5;break;case 13:l=s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(-1!==y.findIndex((function(e){return e.img_id===a[t].img_id}))){e.next=4;break}return e.next=4,I(w,a[t].img_id);case 4:case"end":return e.stop()}}),e)})),m=0;case 15:if(!(m<a.length)){e.next=20;break}return e.delegateYield(l(m),"t0",17);case 17:m++,e.next=15;break;case 20:window.location.reload();case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(m.a)(s.a.mark((function e(){var t,a,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q();case 2:t=e.sent,a=t.data.gallery,n=a.filter((function(e){return e.category_id===w})),r=0;case 6:if(!(r<n.length)){e.next=13;break}if(n[r]._id===y[r]._id){e.next=10;break}return e.abrupt("return",!1);case 10:r++,e.next=6;break;case 13:return e.abrupt("return",!0);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(m.a)(s.a.mark((function e(t,a){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),N||(alert("Nous enregistrons d'abord vos modfications"),k()),""===(n=E).from?(n.from=a,b(n)):""===n.to&&(n.to=a,b(n),S({from:E.from,to:E.to}).then(Object(m.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b({from:"",to:""}),e.next=3,q();case 3:t=e.sent,a=t.data.gallery,n=a.filter((function(e){return e.category_id===w})),j(n);case 7:case"end":return e.stop()}}),e)})))).catch((function(){alert("Nous enregistrons d'abord vos modfications"),k()})));case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),L=function(){var e=Object(m.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={_id:w,preview_id:t.img_data},e.next=3,_(a);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(e){var t=e.img,a=W(t.picture_id);return r.a.createElement("div",null,r.a.createElement("img",{alt:t.picture_id,src:a}),r.a.createElement("div",{onClick:function(){return function(e,t,a){var n=y;n.push({_id:"",img_id:e,img_data:t,category_id:w,index:a}),j(n),O(n,l)}(t._id,t.picture_id,t.index)}},r.a.createElement("img",{src:"../../images/add.png",alt:"Ajouter"})))},T=function(e){var t=e.rubrique,a=W(t.img_data);return r.a.createElement("div",null,r.a.createElement("img",{alt:t.img_data,src:a}),r.a.createElement("div",null,r.a.createElement("div",{onClick:function(e){return A(e,t)}},r.a.createElement("img",{src:"../../images/move.png",alt:"Deplacer"})),r.a.createElement("div",{onClick:function(){return L(t)}},r.a.createElement("img",{src:"../../images/upload.png",alt:"Preview"})),r.a.createElement("div",{onClick:function(){return function(e){var t=y.findIndex((function(t){return t.img_id===e})),a=y;-1!==t&&a.splice(t,1),O(a,l)}(t.img_id)}},r.a.createElement("img",{src:"../../images/bin.png",alt:"Supprimer"}))))};return r.a.createElement("div",{className:"rubrique"},r.a.createElement("div",{id:"submit",onClick:k},r.a.createElement("p",null,"Enregistrer")),r.a.createElement("div",{id:"modify"},r.a.createElement("h1",null,"Modifier"),y.map((function(e){return r.a.createElement(T,{key:e.img_id,rubrique:e})}))),r.a.createElement("div",{id:"add"},r.a.createElement("h1",null,"Ajouter"),a.map((function(e){return r.a.createElement(M,{key:e._id,img:e})}))))};function G(){Object(n.useEffect)((function(){e()}));var e=function(){var e=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h().then((function(e){e.data.auth&&console.log("Connect\xe9")})).catch((function(e){alert("Vous n'etes pas connect\xe9"),window.location="/user"}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:window.location="/";case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=Object(u.g)(),c=a.path,i=a.url;return r.a.createElement(o.a,null,r.a.createElement("div",{className:"dashboard"},r.a.createElement("div",{id:"nav-dashboard"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"http://jeremycapeau.fr"},"Le site")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"".concat(i,"/categories")},"Categories")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"".concat(i,"/images")},"Images")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"".concat(i,"/contact")},"Contact")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"".concat(i,"/fichiers")},"Fichiers")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"".concat(i,"/apropos")},"A propos")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://bulkresizephotos.com/fr",target:"_blank",rel:"noopener noreferrer"},"Compression")),r.a.createElement("li",null,r.a.createElement("button",{onClick:t},"DISCONNECT")))),r.a.createElement("div",{id:"content-dashboard"},r.a.createElement(u.a,{exact:!0,path:"".concat(c,"/categories")},r.a.createElement(z,null)),r.a.createElement(u.a,{exact:!0,path:"".concat(c,"/images")},r.a.createElement(J,null)),r.a.createElement(u.a,{exact:!0,path:"".concat(c,"/contact")},r.a.createElement(P,null)),r.a.createElement(u.a,{exact:!0,path:"".concat(c,"/fichiers")},r.a.createElement(B,null)),r.a.createElement(u.a,{exact:!0,path:"".concat(c,"/apropos")},r.a.createElement(H,null)),r.a.createElement(u.a,{exact:!0,path:"".concat(c,"/rubrique/:id")},r.a.createElement(V,null)))))}var Y=a(76),R=a(35),U=a.n(R),$=function(e){var t=Object(n.useState)(!0),a=Object(d.a)(t,2),c=a[0],i=a[1],u=Object(n.useState)(!1),l=Object(d.a)(u,2),s=l[0],m=l[1],p=Object(n.useState)(window.screen.availWidth<500),f=Object(d.a)(p,2),v=f[0],E=f[1];Object(n.useEffect)((function(){new U.a("Oswald",{weight:400}).load().then((function(){m(!0)}),(function(){m(!1)})),b()}),[v]),D()(window).on("orientationchange",(function(){E(window.screen.availWidth<500),window.screen.availWidth<500?(i(!1),D()("nav").height("10vh"),D()("#links").css("visibility","hidden")):(i(!0),D()("nav").height("100vh"),D()("#links").css("visibility","visible"))})),D()("li,#home").on("click",(function(){v&&(D()("nav").height("10vh"),D()("#links").css("visibility","hidden"),D()("#menu").attr("src","../../images/burger.png"),i(!1))}));var b=function(){v&&(c?(D()("nav").height("10vh"),D()("#links").css("visibility","hidden"),D()("#menu").attr("src","../../images/burger.png")):(D()("nav").height("100vh"),D()("#links").css("visibility","visible"),D()("#menu").attr("src","../../images/cross.png")),i(!c))};return r.a.createElement("nav",null,r.a.createElement(Y.a,{in:s,timeout:0,onEnter:function(){D()("#logo").css("opacity",1)}},r.a.createElement("div",{id:"logo"},r.a.createElement(o.b,{to:"./",id:"home"},v?r.a.createElement("h1",null,"JEREMY CAPEAU"):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{id:"jeremy"},"JEREMY "),r.a.createElement("h1",null,"CAPEAU")),r.a.createElement("p",null,"Vid\xe9aste - Photographe, France: 06.40.49.95.63")),r.a.createElement("img",{id:"menu",src:"../../images/burger.png",alt:"menu",onClick:b}))),r.a.createElement(Y.a,{in:c,classNames:"fade",timeout:600,enter:!0,exit:!0},r.a.createElement("div",{id:"links"},r.a.createElement("h2",null,"Travail"),r.a.createElement("ul",null,e.cat.map((function(e){var t="/"+e.nom;return!e.visible||r.a.createElement("li",{key:e._id},r.a.createElement(o.b,{to:t},e.nom))}))),r.a.createElement("h2",null,"En savoir plus"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"/brochures"},"Brochure(s)")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/a-propos"},"Bio")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/contact"},"Contact"))))))},K=a(13),Q=(a(17),function(e){return r.a.createElement("div",{className:"main_rubriques"},e.cat.map((function(e,t){var a="../../preview/"+e.preview_id,n="/"+e.nom;return!e.visible||r.a.createElement(o.b,{to:n,id:t},r.a.createElement(K.LazyLoadImage,{src:a,effect:"opacity",afterLoad:function(){D()("#"+t).css("opacity","1")}}),r.a.createElement("p",null,e.nom))})))}),X=(a(72),a(36)),Z=function(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2),c=a[0],i=a[1],o=Object(n.useState)(window.screen.availWidth<500),u=Object(d.a)(o,2),l=u[0],p=u[1],f=e.categorie;Object(n.useEffect)((function(){(function(){var e=Object(m.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q();case 2:t=e.sent,a=t.data.gallery,n=a.filter((function(e){return e.category_id===f._id})),i(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[f]),D()(window).on("orientationchange",(function(){p(window.screen.availWidth<500)}));var v=function(e){var t=e.rubrique,a="../../images/"+t.img_data,n="../../preview/"+t.img_data;return r.a.createElement(K.LazyLoadImage,{key:t._id,src:a,placeHoldersrc:n,effect:"opacity"})},E=function(e){var t=e.rubrique,a="http://i3.ytimg.com/vi/"+t.img_data.replace("https://www.youtube.com/embed/","")+"/maxresdefault.jpg",n=a;return r.a.createElement("a",{href:t.img_data,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(K.LazyLoadImage,{key:t._id,src:a,placeHoldersrc:n,effect:"opacity"}),r.a.createElement("div",{className:"view-video"},r.a.createElement("p",null,"Visionner la vid\xe9o")))};return l?r.a.createElement("div",{className:"Gallery"},c.map((function(e){return e.img_data.startsWith("http")?r.a.createElement("span",null,r.a.createElement("iframe",{title:e._id,src:e.img_data,allowfullscreen:!0})):r.a.createElement(v,{rubrique:e})}))):r.a.createElement("div",{className:"Gallery"},r.a.createElement(X.a,{reverseScroll:!0,className:"horizontal-scroll"},c.map((function(e){return e.img_data.startsWith("http")?r.a.createElement(E,{rubrique:e}):r.a.createElement(v,{rubrique:e})}))))},ee=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){i()}),[]);var i=function(){var e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:t=e.sent,c(t.data.pdfs);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"Tarifs"},r.a.createElement("p",null,"Grilles tarifaires et conditions (sujette \xe0 modification dans le temps et/ou selon les demandes des clients) :"),a.map((function(e){var t="../../files/"+e.file_id;return r.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(K.LazyLoadImage,{src:"../../images/pdf.png",effect:"opacity"}),r.a.createElement("p",null,e.nom))})))},te=function(){var e=Object(n.useState)({}),t=Object(d.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){i()}),[]);var i=function(){var e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M();case 2:t=e.sent,c(t.data.apropos);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o="../../biopic/"+a.picture_id;return r.a.createElement("div",{className:"Apropos"},r.a.createElement(K.LazyLoadImage,{src:o,effect:"opacity"}),r.a.createElement("div",{className:"html",dangerouslySetInnerHTML:{__html:a.texte}}))},ae=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){i()}),[]);var i=function(){var e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:t=e.sent,c(t.data.contacts);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"Contact"},a.map((function(e){var t="../../logos/"+e.picture_id;return r.a.createElement("a",Object.assign({},e.link_id?"href=".concat(e.link_id):"",{rel:"noopener noreferrer",target:"_blank"}),r.a.createElement(K.LazyLoadImage,{src:t,effect:"opacity"}),r.a.createElement("p",null,e.nom))})))},ne=function(e){var t=e.cat;return r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/"},r.a.createElement(Q,{cat:t})),t.map((function(e){var t="/"+e.nom;return r.a.createElement(u.a,{path:t,key:e._id},r.a.createElement(Z,{categorie:e}))})),r.a.createElement(u.a,{path:"/brochures"},r.a.createElement(ee,null)),r.a.createElement(u.a,{path:"/a-propos"},r.a.createElement(te,null)),r.a.createElement(u.a,{path:"/contact"},r.a.createElement(ae,null)))},re=(a(73),function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){i()}),[]);var i=function(){var e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:t=e.sent,c(t.data.categories);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return document.oncontextmenu=function(e){if(console.log(e.button),2===e.button)return e.preventDefault(),!1},r.a.createElement("div",{className:"main_site"},r.a.createElement($,{cat:a}),r.a.createElement(ne,{cat:a}))}),ce=a(37),ie=a(38),oe=a(39),ue=a(42),le=a(40),se=function(e){Object(ue.a)(a,e);var t=Object(le.a)(a);function a(){var e;Object(ie.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.send=Object(m.a)(s.a.mark((function t(){var a,n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.state,n=a.email,r=a.password,n&&0!==n.length){t.next=3;break}return t.abrupt("return");case 3:if(r&&0!==r.length){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,b(n,r);case 7:window.location="/dashboard";case 8:case"end":return t.stop()}}),t)}))),e.handleChange=function(t){e.setState(Object(ce.a)({},t.target.id,t.target.value))},e}return Object(oe.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return r.a.createElement("div",{className:"Login",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},r.a.createElement("h1",null,"Connexion"),r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"text",value:t,onChange:this.handleChange,id:"email"}),r.a.createElement("label",null,"Mot de passe"),r.a.createElement("input",{type:"password",value:a,onChange:this.handleChange,id:"password"}),r.a.createElement("input",{style:{marginTop:"2vw"},onClick:this.send,type:"submit",value:"Connexion"}))}}]),a}(r.a.Component);function me(){return r.a.createElement("div",{className:"App"},r.a.createElement(o.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/user",component:se}),r.a.createElement(T,{component:G,path:"/dashboard"}),r.a.createElement(u.a,{exact:!0,path:"",component:re}))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.81b943d5.chunk.js.map