(this.webpackJsonpJeremyCapeauAPI=this.webpackJsonpJeremyCapeauAPI||[]).push([[0],{4:function(e,t){e.exports={serverUrl:"http://localhost:9000",website:"http://localhost:3000"}},41:function(e,t,a){e.exports=a(72)},46:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),i=a.n(c),l=(a(46),a(5)),s=a(17),o=a(1),u=a.n(o),m=a(2),d=a(3),p=a(39),f=a(8),E=a.n(f);E.a.defaults.withCredentials=!0;let v={"Content-Type":"application/json"};var h=function(e,t){return E.a.post("/api/user/login",{email:e,password:t},{headers:v})},b=function(){return E.a.post("/api/user/auth",{},{headers:v})},g=function(){return localStorage.clear(),E.a.post("/api/user/logout",{},{headers:v})},y=function(e){return E.a.post("/api/category/add",{nom:e},{headers:v})},x=function(){return E.a.get("/api/category/view")},_=function(e){return E.a.post("/api/category/delete",{id:e},{headers:v})},j=function(e){return E.a.post("/api/category/modify",{category:e},{headers:v})},w=function(){return E.a.get("/api/images/view",{headers:v})},O=function(e){return E.a.post("/api/images/delete",{id:e},{headers:v})},k=function(){return E.a.get("/api/pdfs/view")},N=function(e){return E.a.post("/api/pdfs/delete",{id:e},{headers:v})},C=function(e,t,a){return E.a.post("/api/gallery/add",{category_id:e,img_id:t,img_data:a},{headers:v})},S=function(e,t){return E.a.post("/api/gallery/delete",{category_id:e,img_id:t},{headers:v})},I=function(){return E.a.get("/api/gallery/view")},L=function(){return E.a.get("/api/contact/view")},M=function(e){return E.a.post("/api/contact/delete",{id:e},{headers:v})},U=function(){return E.a.get("/api/apropos/view")},A=a(4),T=a.n(A);var q=e=>{let t=e.component,a=Object(p.a)(e,["component"]);const c=Object(n.useState)("En chargement"),i=Object(d.a)(c,2),l=i[0],o=i[1];Object(n.useEffect)(()=>{f()},[]);const f=function(){var e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b().then(e=>{e.data.auth&&o(e.data.auth.toString())}).catch(e=>{document.location.href=T.a.website+"/user"});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=()=>"En chargement"===l?r.a.createElement("p",null,l):"true"===l?r.a.createElement(t,null):void 0;return r.a.createElement(s.a,Object.assign({},a,{render:e=>r.a.createElement(E,null)}))};a(68);var z=e=>{let t="";if(e.startsWith("http")){t="https://img.youtube.com/vi/"+e.replace("https://www.youtube.com/embed/","")+"/0.jpg"}else t=T.a.serverUrl+"/preview/"+e;return t};var F=()=>{const e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(void 0),s=Object(d.a)(i,2),o=s[0],p=s[1],f=Object(n.useState)({}),E=Object(d.a)(f,2),v=E[0],h=E[1];Object(n.useEffect)(()=>{g()},[]);const b=function(){var e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o){e.next=3;break}return alert("Il faut rentrer un nom de categorie"),e.abrupt("return");case 3:return e.next=5,y(o);case 5:g();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,c(t.data.categories);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(t);case 2:g(),h({});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v){e.next=3;break}return alert("Erreur de selection"),e.abrupt("return");case 3:if(""!==v.nom){e.next=6;break}return alert("Veuillez entre un nom"),e.abrupt("return");case 6:return e.next=8,j(v);case 8:g(),h({});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"body_dashboard"},r.a.createElement("div",{className:"main_dashboard"},a.map(e=>{let t=z(e.preview_id);return r.a.createElement("div",{key:e._id,className:"category"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(t,")")}},r.a.createElement("div",{className:"select"},r.a.createElement(l.c,{to:"./".concat(e._id)},r.a.createElement("img",{src:"../../images/add.png",alt:"Ajouter"})),r.a.createElement("div",{className:"tiers",onClick:()=>h(e)},r.a.createElement("img",{src:"../../images/pen.png",alt:"Modifier"})),r.a.createElement("div",{className:"tiers",onClick:()=>w(e._id)},r.a.createElement("img",{src:"../../images/bin.png",alt:"Supprimer"})))),r.a.createElement("p",null,e.nom," ",e.visible?"(visible)":"(pas visible)"))})),r.a.createElement("div",{className:"sidebar_dashboard"},r.a.createElement("div",null,r.a.createElement("h1",null,"Ajouter"),r.a.createElement("p",null,"Nom de la categorie"),r.a.createElement("input",{type:"text",onChange:e=>p(e.target.value)}),r.a.createElement("button",{onClick:e=>b()},"Ajouter")),r.a.createElement("div",{style:{display:v._id?"flex":"none"}},r.a.createElement("h1",null,"Modifier"),r.a.createElement("p",null,"Nom de la categorie"),r.a.createElement("input",{type:"text",value:v.nom,onChange:e=>{const t={_id:v._id,nom:e.target.value,visible:v.visible};h(t)}}),r.a.createElement("input",{type:"submit",value:v.visible,onClick:e=>{const t={_id:v._id,nom:v.nom,visible:"true"===e.target.value?"false":"true"};h(t)}}),r.a.createElement("button",{onClick:e=>O()},"Modifier"))))},D=a(6),J=a.n(D);var P=()=>{const e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(0),l=Object(d.a)(i,2),s=l[0],o=l[1];Object(n.useEffect)(()=>{p(),setTimeout((function(){const e=J()("#images").height()/2.8;J()("#images").height(e),J()("#images").toggleClass("displayed")}),500)},[]);const p=function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:t=e.sent,c(t.data.images);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t);case 2:p();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=e=>{const t=e.img;let a=z(t.picture_id);return r.a.createElement("div",{key:t._id,className:"images"},r.a.createElement("img",{alt:t.picture_id,src:a}),r.a.createElement("div",{className:"select",onClick:()=>f(t._id)},r.a.createElement("img",{src:"../../images/bin.png",alt:"Supprimer"})))},v=()=>{J()("input[type='submit']").prop("disabled","true")};return r.a.createElement("div",{className:"body_dashboard"},r.a.createElement("div",{className:"main_dashboard hidden",id:"images",style:{width:"70%",flexDirection:"column",transitionDelay:"0"}},a.map((e,t)=>r.a.createElement(E,{key:e._id,img:e,index:t}))),r.a.createElement("div",{className:"sidebar_dashboard"},r.a.createElement("div",null,r.a.createElement("h1",null,"Ajouter"),r.a.createElement("form",{onSubmit:v,action:T.a.serverUrl+"/api/images/add",method:"post",encType:"multipart/form-data"},r.a.createElement("label",{htmlFor:"datas"},s," fichier(s) selectionn\xe9(s)"),r.a.createElement("input",{type:"file",id:"datas",name:"datas",multiple:!0,required:!0,onChange:()=>{const e=J()("#datas").get(0).files;o(e.length)}}),r.a.createElement("input",{type:"submit",value:"Confirmer"}))),r.a.createElement("div",null,r.a.createElement("h1",null,"Ajouter vid\xe9o"),r.a.createElement("form",{onSubmit:v,action:T.a.serverUrl+"/api/images/add",method:"post",encType:"multipart/form-data"},r.a.createElement("p",null,"Lien vid\xe9o"),r.a.createElement("input",{type:"text",id:"data",name:"data",required:!0}),r.a.createElement("input",{type:"submit",value:"Confirmer"}),r.a.createElement("input",{type:"hidden",name:"token",value:localStorage.getItem("token")})))))};var W=()=>{const e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(void 0),l=Object(d.a)(i,2),s=l[0],o=l[1],p=Object(n.useState)(void 0),f=Object(d.a)(p,2),E=f[0],v=f[1],h=Object(n.useState)(void 0),b=Object(d.a)(h,2),g=b[0],y=b[1];Object(n.useEffect)(()=>{x()},[]);const x=function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:t=e.sent,c(t.data.contacts);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(g);case 2:y(void 0),x();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=()=>{J()("input[type='submit']").prop("disabled","true")};return r.a.createElement("div",{className:"body_dashboard"},r.a.createElement("div",{className:"main_dashboard"},a.map(e=>{let t=T.a.serverUrl+"/logos/"+e.picture_id;return r.a.createElement("div",{key:e._id,className:"contact",onClick:()=>(e=>{v(e.link_id),o(e.nom),y(e._id)})(e)},r.a.createElement("div",{style:{backgroundImage:"url(".concat(t,")")}},r.a.createElement("div",{className:"select"},r.a.createElement("img",{src:"../../images/pen.png",alt:"Modifier"}))),r.a.createElement("a",{href:e.link_id},r.a.createElement("p",null,e.nom)))})),r.a.createElement("div",{className:"sidebar_dashboard"},r.a.createElement("div",null,r.a.createElement("h1",null,"Ajouter"),r.a.createElement("form",{onSubmit:j,action:T.a.serverUrl+"/api/contact/add",method:"post",encType:"multipart/form-data"},r.a.createElement("label",{htmlFor:"add_logo"},"Importer une image"),r.a.createElement("input",{type:"file",name:"logo",id:"add_logo",required:!0}),r.a.createElement("p",null,"Nom du contact"),r.a.createElement("input",{type:"text",name:"name",required:!0}),r.a.createElement("p",null,"Lien "),r.a.createElement("input",{type:"text",name:"link",required:!0}),r.a.createElement("input",{type:"submit",value:"Importer"}))),r.a.createElement("div",{style:{display:g?"flex":"none"}},r.a.createElement("h1",null,"Modifier"),r.a.createElement("form",{onSubmit:j,action:T.a.serverUrl+"/api/contact/modify",method:"post",encType:"multipart/form-data"},r.a.createElement("label",{htmlFor:"modify_logo"},"Modifier l'image"),r.a.createElement("input",{type:"file",name:"logo",id:"modify_logo"}),r.a.createElement("p",null,"Nom du contact"),r.a.createElement("input",{type:"text",value:s,name:"nom",onChange:e=>o(e.target.value),required:!0}),r.a.createElement("p",null,"Lien "),r.a.createElement("input",{type:"text",value:E,name:"link",onChange:e=>v(e.target.value),required:!0}),r.a.createElement("input",{type:"hidden",value:g,name:"id"}),r.a.createElement("input",{type:"hidden",value:localStorage.getItem("token"),name:"token"}),r.a.createElement("input",{type:"submit",value:"Modifier"})),r.a.createElement("button",{onClick:()=>_()},"Supprimer"))))};var B=()=>{const e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)(()=>{i()},[]);const i=function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:t=e.sent,c(t.data.pdfs);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(t);case 2:i();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"body_dashboard"},r.a.createElement("div",{className:"main_dashboard"},a.map(e=>{let t=T.a.serverUrl+"/files/"+e.file_id;return r.a.createElement("div",{className:"pdfs",key:e._id},r.a.createElement("div",{style:{backgroundImage:"url(../../images/pdf.png)"}},r.a.createElement("div",{className:"select",onClick:()=>l(e._id)},r.a.createElement("img",{src:"../../images/bin.png",alt:"Supprimer"}))),r.a.createElement("a",{href:t},e.nom))})),r.a.createElement("div",{className:"sidebar_dashboard"},r.a.createElement("div",null,r.a.createElement("h1",null,"Ajouter un fichier"),r.a.createElement("form",{onSubmit:()=>{J()("input[type='submit']").prop("disabled","true")},action:T.a.serverUrl+"/api/pdfs/add",method:"post",encType:"multipart/form-data"},r.a.createElement("label",{htmlFor:"data"},"Importer un fichier"),r.a.createElement("input",{type:"file",id:"data",name:"data",required:!0}),r.a.createElement("p",null,"Nom"),r.a.createElement("input",{type:"text",name:"nom",required:!0}),r.a.createElement("input",{type:"submit",value:"Importer"})))))};var G=()=>{const e=Object(n.useState)({}),t=Object(d.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(void 0),l=Object(d.a)(i,2),s=l[0],o=l[1];Object(n.useEffect)(()=>{p()},[]);const p=function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U();case 2:t=e.sent,c(t.data.apropos),o(t.data.apropos.texte);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();let f=T.a.serverUrl+"/biopic/"+a.picture_id;return r.a.createElement("div",{className:"body_dashboard"},r.a.createElement("div",{className:"main_dashboard apropos"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(f,")")}}),r.a.createElement("div",{className:"html",dangerouslySetInnerHTML:{__html:a.texte}})),r.a.createElement("div",{className:"sidebar_dashboard"},r.a.createElement("div",null,r.a.createElement("form",{onSubmit:()=>{J()("input[type='submit']").prop("disabled","true")},action:T.a.serverUrl+"/api/apropos/modify",method:"post",encType:"multipart/form-data"},r.a.createElement("h1",null,"Modifier"),r.a.createElement("label",{htmlFor:"data"},"Importer un fichier"),r.a.createElement("input",{type:"file",id:"data",name:"picture_id"}),r.a.createElement("p",null,"Texte"),r.a.createElement("textarea",{type:"text",required:!0,value:s,name:"texte",onChange:e=>o(e.target.value)}),r.a.createElement("input",{type:"submit",value:"Modifier"})))))};var V=()=>{const e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)([]),l=Object(d.a)(i,2),o=l[0],p=l[1],f=Object(n.useState)([]),E=Object(d.a)(f,2),v=E[0],h=E[1];let b=Object(s.f)().id;Object(n.useEffect)(()=>{(function(){var e=Object(m.a)(u.a.mark((function e(){var t,a,n,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:return t=e.sent,a=t.data.gallery,n=a.filter(e=>e.category_id===b),h(n),e.next=8,w();case 8:r=e.sent,c=r.data.images,p(c),g(n,c);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()},[b]);const g=function(){var e=Object(m.a)(u.a.mark((function e(t,a){var n,r,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=[],r=0;r<t.length;r++)n[r]=t[r].img_id;i=a.filter(e=>!1===n.includes(e._id)),c(i);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),y=function(){var e=Object(m.a)(u.a.mark((function e(){var t,a,n,r,c,i,l,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t=e.sent,a=t.data.gallery.filter(e=>e.category_id===b),console.log(a),console.log(v),n=0;case 7:if(!(n<v.length)){e.next=15;break}if(r=v[n],c=r._id,i=r.img_id,l=r.img_data,""!=c){e.next=12;break}return e.next=12,C(b,i,l);case 12:n++,e.next=7;break;case 15:s=0;case 16:if(!(s<a.length)){e.next=24;break}if(-1!==v.findIndex(e=>e.img_id===a[s].img_id)){e.next=21;break}return e.next=21,S(b,a[s].img_id);case 21:s++,e.next=16;break;case 24:window.location.reload();case 25:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(m.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={_id:b,preview_id:t.img_data},e.next=3,j(a);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=e=>{const t=e.img;let n=z(t.picture_id);return r.a.createElement("div",null,r.a.createElement("img",{alt:t.picture_id,src:n}),r.a.createElement("div",{onClick:()=>((e,t)=>{let n=v;n.push({_id:"",img_id:e,img_data:t,category_id:b}),h(n),g(n,a)})(t._id,t.picture_id)},r.a.createElement("img",{src:"../../images/add.png",alt:"Ajouter"})))},O=e=>{const t=e.rubrique;let a=z(t.img_data);return r.a.createElement("div",null,r.a.createElement("img",{alt:t.img_data,src:a}),r.a.createElement("div",null,r.a.createElement("div",{onClick:()=>(e=>{const t=v.findIndex(t=>t.img_id===e);let a=v;-1!==t&&a.splice(t,1),g(a,o)})(t.img_id)},r.a.createElement("img",{src:"../../images/bin.png",alt:"Supprimer"})),r.a.createElement("div",{onClick:()=>x(t)},r.a.createElement("img",{src:"../../images/upload.png",alt:"Preview"}))))};return r.a.createElement("div",{className:"rubrique"},r.a.createElement("div",{id:"submit",onClick:y},r.a.createElement("p",null,"Enregistrer")),r.a.createElement("div",{id:"modify"},r.a.createElement("h1",null,"Modifier"),v.map(e=>r.a.createElement(O,{key:e.img_id,rubrique:e}))),r.a.createElement("div",{id:"add"},r.a.createElement("h1",null,"Ajouter"),a.map(e=>r.a.createElement(_,{key:e._id,img:e}))))};function H(){const e=function(){var e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:window.location="/";case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();let t=Object(s.g)(),a=t.path,n=t.url;return r.a.createElement(l.b,null,r.a.createElement("div",{className:"dashboard"},r.a.createElement("div",{id:"nav-dashboard"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:T.a.website},"Le site")),r.a.createElement("li",null,r.a.createElement(l.c,{to:"".concat(n,"/categories")},"Categories")),r.a.createElement("li",null,r.a.createElement(l.c,{to:"".concat(n,"/images")},"Images")),r.a.createElement("li",null,r.a.createElement(l.c,{to:"".concat(n,"/contact")},"Contact")),r.a.createElement("li",null,r.a.createElement(l.c,{to:"".concat(n,"/fichiers")},"Fichiers")),r.a.createElement("li",null,r.a.createElement(l.c,{to:"".concat(n,"/apropos")},"A propos")),r.a.createElement("li",null,r.a.createElement("button",{onClick:e},"DISCONNECT")))),r.a.createElement("div",{id:"content-dashboard"},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"".concat(a,"/categories")},r.a.createElement(F,null)),r.a.createElement(s.a,{exact:!0,path:"".concat(a,"/images")},r.a.createElement(P,null)),r.a.createElement(s.a,{exact:!0,path:"".concat(a,"/contact")},r.a.createElement(W,null)),r.a.createElement(s.a,{exact:!0,path:"".concat(a,"/fichiers")},r.a.createElement(B,null)),r.a.createElement(s.a,{exact:!0,path:"".concat(a,"/apropos")},r.a.createElement(G,null)),r.a.createElement(s.a,{exact:!0,path:"".concat(a,"/:id"),children:r.a.createElement(V,null)})))))}var R=a(74),Y=a(37),$=a.n(Y),K=a(19);var Q=e=>{const t=Object(n.useState)(!0),a=Object(d.a)(t,2),c=a[0],i=a[1],s=Object(n.useState)(!1),o=Object(d.a)(s,2),u=o[0],m=o[1];Object(n.useEffect)(()=>{new $.a("Oswald",{weight:400}).load().then(()=>{m(!0)},()=>{m(!1)}),p()},[]),K.isMobile&&J()("li,#home").on("click",(function(){J()("nav").height("10vh"),J()("#links").css("visibility","hidden"),i(!1)}));const p=()=>{K.isMobile&&(c?(J()("nav").height("10vh"),J()("#links").css("visibility","hidden")):(J()("nav").height("100vh"),J()("#links").css("visibility","visible")),i(!c))};return r.a.createElement("nav",null,r.a.createElement(R.a,{in:u,timeout:0,onEnter:()=>{J()("#logo").css("opacity",1)}},r.a.createElement("div",{id:"logo"},r.a.createElement(l.c,{to:"./",id:"home"},r.a.createElement("h1",null,"JEREMY CAPEAU"),r.a.createElement("p",null,"Vid\xe9aste - Photographe, France: 06.40.49.95.63")),r.a.createElement("img",{src:"../../images/burger.png",alt:"menu",onClick:p}))),r.a.createElement(R.a,{in:c,classNames:"fade",timeout:600,enter:!0,exit:!0},r.a.createElement("div",{id:"links"},r.a.createElement("h2",null,"Travail"),r.a.createElement("ul",null,e.cat.map(e=>{let t="/"+e.nom;return!e.visible||r.a.createElement("li",{key:e._id},r.a.createElement(l.c,{to:t},e.nom))})),r.a.createElement("h2",null,"Sur"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.c,{to:"/tarifs"},"Tarifs")),r.a.createElement("li",null,r.a.createElement(l.c,{to:"/a-propos"},"Bio")),r.a.createElement("li",null,r.a.createElement(l.c,{to:"/contact"},"Contact"))))))},X=a(13);a(18);var Z=e=>r.a.createElement("div",{className:"main_rubriques"},e.cat.map((e,t)=>{let a=T.a.serverUrl+"/preview/"+e.preview_id,n="/"+e.nom;return!e.visible||r.a.createElement(l.c,{to:n,id:t},r.a.createElement(X.LazyLoadImage,{src:a,effect:"opacity",afterLoad:()=>{J()("#"+t).css("opacity","1")}}),r.a.createElement("p",null,e.nom))})),ee=a(38);var te=e=>{const t=Object(n.useState)([]),a=Object(d.a)(t,2),c=a[0],i=a[1],l=e.categorie;return Object(n.useEffect)(()=>{(function(){var e=Object(m.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t=e.sent,a=t.data.gallery,n=a.filter(e=>e.category_id===l._id),i(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()},[l]),K.isMobile?r.a.createElement("div",{className:"Gallery"},c.map(e=>{if(e.img_data.startsWith("http"))return r.a.createElement("span",null,r.a.createElement("iframe",{title:e._id,src:e.img_data,allowfullscreen:!0}));{let t=T.a.serverUrl+"/images/"+e.img_data;return r.a.createElement(X.LazyLoadImage,{key:e._id,src:t,effect:"opacity"})}})):r.a.createElement("div",{className:"Gallery"},r.a.createElement(ee.a,{reverseScroll:!0,style:{position:"inherit",width:"auto"}},c.map(e=>{if(e.img_data.startsWith("http")){let t="http://i3.ytimg.com/vi/"+e.img_data.replace("https://www.youtube.com/embed/","")+"/maxresdefault.jpg";return r.a.createElement("a",{className:"preview",href:e.img_data},r.a.createElement(X.LazyLoadImage,{key:e._id,src:t,effect:"opacity"}),r.a.createElement("div",null,r.a.createElement("p",null,"Visionner la vid\xe9o")))}{let t=T.a.serverUrl+"/images/"+e.img_data;return r.a.createElement(X.LazyLoadImage,{key:e._id,src:t,effect:"opacity"})}})))};var ae=()=>{const e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)(()=>{i()},[]);const i=function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:t=e.sent,c(t.data.pdfs);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"Tarifs"},r.a.createElement("p",null,"Grilles tarifaires et conditions (sujette \xe0 modification dans le temps et/ou selon les demandes des clients) :"),a.map(e=>{let t=T.a.serverUrl+"/files/"+e.file_id;return r.a.createElement("a",{href:t},r.a.createElement(X.LazyLoadImage,{src:"../../images/pdf.png",effect:"opacity"}),r.a.createElement("p",null,e.nom))}))};var ne=()=>{const e=Object(n.useState)({}),t=Object(d.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)(()=>{i()},[]);const i=function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U();case 2:t=e.sent,c(t.data.apropos);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();let l=T.a.serverUrl+"/biopic/"+a.picture_id;return r.a.createElement("div",{className:"Apropos"},r.a.createElement(X.LazyLoadImage,{src:l,effect:"opacity"}),r.a.createElement("div",{className:"html",dangerouslySetInnerHTML:{__html:a.texte}}))};var re=()=>{const e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)(()=>{i()},[]);const i=function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:t=e.sent,c(t.data.contacts);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"Contact"},a.map(e=>{let t=T.a.serverUrl+"/logos/"+e.picture_id;return r.a.createElement("a",{href:e.link_id},r.a.createElement(X.LazyLoadImage,{src:t,effect:"opacity"}),r.a.createElement("p",null,e.nom))}))};var ce=e=>{const t=e.cat;return r.a.createElement(s.c,null,t.map(e=>{let t="/"+e.nom;return r.a.createElement(s.a,{exact:!0,path:t,key:e._id},r.a.createElement(te,{categorie:e}))}),r.a.createElement(s.a,{exact:!0,path:"/"},r.a.createElement(Z,{cat:t})),r.a.createElement(s.a,{exact:!0,path:"/tarifs"},r.a.createElement(ae,null)),r.a.createElement(s.a,{exact:!0,path:"/a-propos"},r.a.createElement(ne,null)),r.a.createElement(s.a,{exact:!0,path:"/contact"},r.a.createElement(re,null)))};a(70);var ie=()=>{const e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)(()=>{i()},[]);const i=function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,c(t.data.categories);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return document.oncontextmenu=function(e){if(console.log(e.button),2===e.button)return e.preventDefault(),!1},r.a.createElement("div",{className:"main_site"},r.a.createElement(l.b,null,r.a.createElement(Q,{cat:a}),r.a.createElement(ce,{cat:a})))};class le extends r.a.Component{constructor(...e){var t;super(...e),t=this,this.state={email:"",password:""},this.send=Object(m.a)(u.a.mark((function e(){var a,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.state,n=a.email,r=a.password,n&&0!==n.length){e.next=3;break}return e.abrupt("return");case 3:if(r&&0!==r.length){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,h(n,r);case 7:window.location="/dashboard";case 8:case"end":return e.stop()}}),e)}))),this.handleChange=e=>{this.setState({[e.target.id]:e.target.value})}}render(){const e=this.state,t=e.email,a=e.password;return r.a.createElement("div",{className:"Login",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},r.a.createElement("h1",null,"Connexion"),r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"text",value:t,onChange:this.handleChange,id:"email"}),r.a.createElement("label",null,"Mot de passe"),r.a.createElement("input",{type:"password",value:a,onChange:this.handleChange,id:"password"}),r.a.createElement("input",{style:{marginTop:"2vw"},onClick:this.send,type:"submit",value:"Connexion"}))}}a(71);function se(){return r.a.createElement("div",{className:"App"},r.a.createElement(l.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/user",component:le}),r.a.createElement(q,{component:H,path:"/dashboard"}),r.a.createElement(s.a,{path:"",component:ie}))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()}).catch(e=>{console.error(e.message)})}},[[41,1,2]]]);
//# sourceMappingURL=main.7047e363.chunk.js.map