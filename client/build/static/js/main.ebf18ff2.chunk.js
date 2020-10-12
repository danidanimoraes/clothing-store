(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{100:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){},114:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(30),i=n.n(c),l=(n(70),n(12)),o=(n(71),n(10)),u=n(11);function s(){var e=Object(o.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 20px 80px;\n"]);return s=function(){return e},e}var m=u.b.div(s()),p=n(20),d=(n(73),Object(l.g)((function(e){return r.a.createElement("div",{className:"menu-item ".concat(e.size),onClick:function(){return e.history.push("".concat(e.match.url).concat(e.linkUrl))}},r.a.createElement("div",{className:"background-img",style:{backgroundImage:"url(".concat(e.imageUrl,")")}}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},e.title.toUpperCase()),r.a.createElement("span",{className:"subtitle"},"SHOP NOW")))}))),f=(n(77),n(9)),b=n(8),v=Object(b.a)((function(e){return e.menu}),(function(e){return e.sections})),E=Object(b.b)({sections:v}),h=Object(f.b)(E)((function(e){var t=e.sections;return r.a.createElement("div",{className:"menu"},t.map((function(e){var t=e.id,n=Object(p.a)(e,["id"]);return r.a.createElement(d,Object.assign({key:t},n))})))})),O=function(){return r.a.createElement(m,null,r.a.createElement(h,null))},g="FETCH_COLLECTIONS_START",j="FETCH_COLLECTIONS_SUCCESS",y="FETCH_COLLECTIONS_FAILURE",S=function(e){return{type:j,payload:e}};n(79);function x(){var e=Object(o.a)(["\n    min-width: 165px;\n    width: auto;\n    height: 50px;\n    letter-spacing: 0.5px;\n    line-height: 50px;\n    padding: 0 35px 0 35px;\n    font-size: 15px;\n    text-transform: uppercase;\n    font-family: 'Open Sans Condensed';\n    font-weight: bolder;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n\n    ","\n"]);return x=function(){return e},e}function N(){var e=Object(o.a)(["\n    background-color:#4285f4;\n      color: white;\n      border: none;\n\n      &:hover{\n        background-color: #357ae8;\n        border: none;\n      }\n"]);return N=function(){return e},e}function w(){var e=Object(o.a)(["\n    background-color: black;\n    color: white;\n    border: none;\n\n    &:hover {\n        background-color: white;\n        color: black;\n        border: 1px solid black;\n      }\n"]);return w=function(){return e},e}function I(){var e=Object(o.a)(["\n    color: white;\n    background-color: black;\n    border: 1px solid black;\n    \n    &:hover{\n        color: black;\n        background-color: white;\n        border: none;\n    }\n"]);return I=function(){return e},e}var _=Object(u.a)(I()),k=Object(u.a)(w()),C=Object(u.a)(N()),U=u.b.button(x(),(function(e){return e.isGoogleSignIn?C:e.inverted?_:k})),T=function(e){var t=e.children,n=Object(p.a)(e,["children"]);return r.a.createElement(U,n,t)},G="TOGGLE_CART_HIDDEN",R="ADD_ITEM",A="REMOVE_ITEM",P="DECREASE_QUANTITY",L="CLEAR_OUT_CART",H=function(){return{type:G}},F=function(e){return{type:R,payload:e}},q=Object(f.b)(null,(function(e){return{addCartItem:function(t){return e(F(t))}}}))((function(e){return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"background-img",style:{backgroundImage:"url(".concat(e.item.imageUrl,")")}}),r.a.createElement("div",{className:"footer"},r.a.createElement("span",{className:"name"},e.item.name),r.a.createElement("span",{className:"price"},e.item.price)),r.a.createElement(T,{inverted:"true",onClick:function(){return e.addCartItem(e.item)}},"ADD TO CART"))})),z=n(58),D=n.n(z),M=function(e){return e.shop},Q=Object(b.a)(M,(function(e){return e.collections})),B=D()((function(e){return Object(b.a)(Q,(function(t){return t?t[e]:null}))})),W=Object(b.a)(Q,(function(e){return e?Object.values(e):[]})),K=Object(b.a)(M,(function(e){return e.isFetching})),V=(Object(b.a)(M,(function(e){return!!e.collections})),n(80),Object(f.b)((function(e,t){return{collection:B(t.match.params.collectionId)(e)}}))((function(e){var t=e.collection;return r.a.createElement("div",{className:"collection-page"},r.a.createElement("h2",{className:"title"},t.title),r.a.createElement("div",{className:"items"},t.items.map((function(e){return r.a.createElement(q,{key:e.id,item:e})}))))})));function Y(){var e=Object(o.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return Y=function(){return e},e}function Z(){var e=Object(o.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return Z=function(){return e},e}var $=u.b.div(Z()),J=u.b.div(Y()),X=function(e){return function(t){var n=t.isLoading,a=Object(p.a)(t,["isLoading"]);return n?r.a.createElement($,null,r.a.createElement(J,null)):r.a.createElement(e,a)}},ee=(n(81),function(e){return r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h1",{className:"title"},e.title.toUpperCase()),r.a.createElement("div",{className:"preview-item"},e.items.filter((function(e,t){return t<4})).map((function(e){return r.a.createElement(q,{key:e.id,item:e})}))))}),te=Object(b.b)({collections:W}),ne=Object(f.b)(te)((function(e){var t=e.collections;return r.a.createElement("div",{className:"collection-overview"},t.map((function(e){return r.a.createElement(ee,Object.assign({key:e.id},e))})))})),ae=n(14),re=Object(b.b)({isLoading:K}),ce=Object(ae.d)(Object(f.b)(re),X)(ne),ie=Object(f.b)(null,(function(e){return{fetchCollectionsStart:function(){return e({type:g})}}}))((function(e){var t=e.fetchCollectionsStart,n=e.match;return Object(a.useEffect)((function(){t()}),[t]),r.a.createElement("div",{className:"shop-page"},r.a.createElement(l.b,{exact:!0,path:"".concat(n.path),component:ce}),r.a.createElement(l.b,{path:"".concat(n.path,"/:collectionId"),component:V}))})),le=(n(82),function(e){return e.cart}),oe=Object(b.a)([le],(function(e){return e.cartItems})),ue=Object(b.a)([oe],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),se=Object(b.a)([le],(function(e){return e.hidden})),me=Object(b.a)(oe,(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),pe=(n(83),Object(f.b)(null,(function(e){return{removeItem:function(t){return e(function(e){return{type:A,payload:e}}(t))},decreaseQuantity:function(t){return e(function(e){return{type:P,payload:e}}(t))},addCartItem:function(t){return e(F(t))}}}))((function(e){var t=e.cartItem,n=e.removeItem,a=e.decreaseQuantity,c=e.addCartItem,i=t.name,l=t.imageUrl,o=t.price,u=t.quantity;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{alt:"item",src:l})),r.a.createElement("span",{className:"name"},i),r.a.createElement("span",{className:"quantity"},r.a.createElement("div",{className:"arrow",onClick:function(){return a(t)}},"\u276e"),r.a.createElement("span",{className:"value"},u),r.a.createElement("div",{className:"arrow",onClick:function(){return c(t)}},"\u276f")),r.a.createElement("span",{className:"price"},"$",o),r.a.createElement("div",{className:"remove-button",onClick:function(){return n(t)}},"\u2715"))}))),de=n(59),fe=n.n(de),be=n(60),ve=n.n(be),Ee=function(e){var t=e.price,n=100*t;return r.a.createElement(fe.a,{label:"Pay Now",name:"CRWN Clothing Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is $".concat(t),amount:n,panelLabel:"Pay Now",token:function(e){ve()({url:"payment",method:"post",data:{amount:n,token:e}}).then((function(e){alert("Payment Successful!")})).catch((function(e){console.log("Payment error: ",JSON.parse(e)),alert("There was an issue with your payment. Please make sure you the provided credit card.")}))},stripeKey:"pk_test_51HYIA7Fa5NNBz4EvDJ6v9x23AYWKIGsQ8nyBZUHmUQg7pfNPxlPoilCfFDGZdhyotKWjZDQg9hm4jitSobSmQ6Hc00iioBPMul"})},he=Object(b.b)({cartItems:oe,totalPrice:me}),Oe=Object(f.b)(he)((function(e){var t=e.cartItems,n=e.totalPrice;return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Product")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Description")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Remove"))),t.map((function(e){return r.a.createElement(pe,{key:e.id,cartItem:e})})),r.a.createElement("div",{className:"payment-bottom"},r.a.createElement("div",{className:"total"},"TOTAL: $",n),r.a.createElement(Ee,{price:n})),r.a.createElement("div",{className:"test-warning"},"*Please use the following test credit card for payments*",r.a.createElement("br",null),"4242 4242 4242 4242 - Exp: 01/20 - CVV: 123"))}));function ge(){return(ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function je(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var ye=r.a.createElement("title",null,"Group"),Se=r.a.createElement("desc",null,"Created with Sketch."),xe=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),Ne=function(e){var t=e.svgRef,n=e.title,a=je(e,["svgRef","title"]);return r.a.createElement("svg",ge({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},a),void 0===n?ye:n?r.a.createElement("title",null,n):null,Se,xe)},we=r.a.forwardRef((function(e,t){return r.a.createElement(Ne,ge({svgRef:t},e))}));n.p;function Ie(){return(Ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function _e(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var ke=r.a.createElement("g",null),Ce=r.a.createElement("g",null),Ue=r.a.createElement("g",null),Te=r.a.createElement("g",null),Ge=r.a.createElement("g",null),Re=r.a.createElement("g",null),Ae=r.a.createElement("g",null),Pe=r.a.createElement("g",null),Le=r.a.createElement("g",null),He=r.a.createElement("g",null),Fe=r.a.createElement("g",null),qe=r.a.createElement("g",null),ze=r.a.createElement("g",null),De=r.a.createElement("g",null),Me=r.a.createElement("g",null),Qe=function(e){var t=e.svgRef,n=e.title,a=_e(e,["svgRef","title"]);return r.a.createElement("svg",Ie({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},a),n?r.a.createElement("title",null,n):null,r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),ke,Ce,Ue,Te,Ge,Re,Ae,Pe,Le,He,Fe,qe,ze,De,Me)},Be=r.a.forwardRef((function(e,t){return r.a.createElement(Qe,Ie({svgRef:t},e))}));n.p;function We(){var e=Object(o.a)(["\n    position: absolute;\n    font-size: 10px;\n    font-weight: bold;\n    bottom: 12px;\n"]);return We=function(){return e},e}function Ke(){var e=Object(o.a)(["\n    width: 24px;\n    height: 24px;\n"]);return Ke=function(){return e},e}function Ve(){var e=Object(o.a)(["\n    width: 45px;\n    height: 45px;\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n"]);return Ve=function(){return e},e}var Ye=u.b.div(Ve()),Ze=Object(u.b)(Be)(Ke()),$e=u.b.span(We()),Je=Object(b.b)({itemCount:ue}),Xe=Object(f.b)(Je,(function(e){return{toggleCartHidden:function(){return e(H())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return r.a.createElement(Ye,{onClick:t},r.a.createElement(Ze,{className:"icon"}),r.a.createElement($e,null,n))})),et=Object(b.a)((function(e){return e.user}),(function(e){return e.currentUser})),tt=n(19);function nt(){var e=Object(o.a)(["\n    padding: 10px 15px;\n    cursor: pointer;\n"]);return nt=function(){return e},e}function at(){var e=Object(o.a)(["\n    display: flex;\n    align-items: center;\n    padding: 40px;\n    text-transform: uppercase;\n"]);return at=function(){return e},e}function rt(){var e=Object(o.a)(["\n    height: 100%;\n    width: 70px;\n    padding: 15px 25px 25px 10px;\n"]);return rt=function(){return e},e}function ct(){var e=Object(o.a)(["\n    width: 50%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n"]);return ct=function(){return e},e}function it(){var e=Object(o.a)(["\n    display: flex;\n    padding-left: 80px;\n"]);return it=function(){return e},e}function lt(){var e=Object(o.a)(["\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    height: 70px;\n    margin-bottom: 25px;\n"]);return lt=function(){return e},e}var ot=u.b.div(lt()),ut=u.b.div(it()),st=u.b.div(ct()),mt=(Object(u.b)(tt.b)(rt()),u.b.div(at())),pt=Object(u.b)(tt.b)(nt());n(100);function dt(){var e=Object(o.a)(["\n    width: 30%;\n"]);return dt=function(){return e},e}function ft(){var e=Object(o.a)(["\n    width: 70%;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    padding: 10px 20px;\n"]);return ft=function(){return e},e}function bt(){var e=Object(o.a)(["\n    width: 100%;\n    display: flex;\n    height: 80px;\n    margin-bottom: 15px;\n"]);return bt=function(){return e},e}var vt=u.b.div(bt()),Et=u.b.div(ft()),ht=u.b.img(dt()),Ot=function(e){var t=e.item,n=t.imageUrl,a=t.price,c=t.name,i=t.quantity;return r.a.createElement(vt,null,r.a.createElement(ht,{src:n,alt:"item"}),r.a.createElement(Et,null,r.a.createElement("span",{className:"name"},c),r.a.createElement("span",{className:"price"},i," x $",a," = $",i*a)))};function gt(){var e=Object(o.a)(["\n    margin-top: auto; // always at the bottom\n"]);return gt=function(){return e},e}function jt(){var e=Object(o.a)(["\n    font-size: 18px;\n    margin: 50px auto;\n"]);return jt=function(){return e},e}function yt(){var e=Object(o.a)(["\n    display: flex;\n    flex-direction: column;\n    overflow: scroll;\n    height: 240px;\n"]);return yt=function(){return e},e}function St(){var e=Object(o.a)(["\n    position: absolute;\n    width: 240px;\n    height: 340px;\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    border: 1px solid black;\n    background-color: white;\n    top: 80px;\n    right: 71px;\n    z-index: 5;\n"]);return St=function(){return e},e}var xt=u.b.div(St()),Nt=u.b.div(yt()),wt=u.b.span(jt()),It=Object(u.b)(T)(gt()),_t=function(e){var t=e.cartItems,n=e.history,a=e.dispatch;return r.a.createElement(xt,null,r.a.createElement(Nt,null,t.length?t.map((function(e){return r.a.createElement(Ot,{key:e.id,item:e})})):r.a.createElement(wt,null,"Your cart is empty.")),r.a.createElement(It,{onClick:function(){a(H()),n.push("/checkout")}},"GO TO CHECKOUT"))},kt=Object(b.b)({cartItems:oe}),Ct=Object(l.g)(Object(f.b)(kt)(_t)),Ut={SET_CURRENT_USER:"SET_CURRENT_USER",GOOGLE_SIGN_IN_START:"GOOGLE_SIGN_IN_START",SIGN_IN_SUCCESS:"SIGN_IN_SUCCESS",SIGN_IN_FAILURE:"SIGN_IN_FAILURE",EMAIL_SIGN_IN_START:"EMAIL_SIGN_IN_START",CHECK_USER_SESSION:"CHECK_USER_SESSION",SIGN_OUT_START:"SIGN_OUT_START",SIGN_OUT_SUCCESS:"SIGN_OUT_SUCCESS",SIGN_OUT_FAILURE:"SIGN_OUT_FAILURE",SIGN_UP_START:"SIGN_UP_START",SIGN_UP_SUCCESS:"SIGN_UP_SUCCESS",SIGN_UP_FAILURE:"SIGN_UP_FAILURE"},Tt=function(e){return{type:Ut.SIGN_IN_SUCCESS,payload:e}},Gt=function(e){return{type:Ut.SIGN_IN_FAILURE,payload:e}},Rt=Object(b.b)({currentUser:et,hidden:se}),At=Object(f.b)(Rt,(function(e){return{signOutStart:function(){return e({type:Ut.SIGN_OUT_START})}}}))((function(e){var t=e.currentUser,n=e.hidden,a=e.signOutStart;return r.a.createElement(ot,null,r.a.createElement(ut,null,r.a.createElement(pt,{to:"/"},r.a.createElement(we,{className:"logo",title:"Go to Home"})),t?r.a.createElement(mt,null,"Hello, ",t.displayName,"!"):null),r.a.createElement(st,null,r.a.createElement(pt,{to:"/shop"},"SHOP"),r.a.createElement(pt,{to:"/contact"},"CONTACT"),t?r.a.createElement(pt,{as:"div",onClick:a},"SIGN OUT"):r.a.createElement(pt,{to:"/signin"},"SIGN IN"),r.a.createElement(Xe,null)),n?null:r.a.createElement(Ct,null))})),Pt=n(26),Lt=n(4),Ht=n(2),Ft=n.n(Ht),qt=n(25),zt=n(34),Dt=(n(102),function(e){var t=e.handleChange,n=e.label,a=Object(p.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"input",onChange:t},a)),n?r.a.createElement("label",{className:"label ".concat(a.value.length>0?"shrink":"")},n):null)}),Mt=(n(103),Object(f.b)(null,(function(e){return{googleSignInStart:function(){return e({type:Ut.GOOGLE_SIGN_IN_START})},emailSignInStart:function(t,n){return e({type:Ut.EMAIL_SIGN_IN_START,payload:{email:t,password:n}})}}}))((function(e){var t=e.emailSignInStart,n=e.googleSignInStart,c=Object(a.useState)({email:"",password:""}),i=Object(zt.a)(c,2),l=i[0],o=i[1],u=function(){var e=Object(qt.a)(Ft.a.mark((function e(n){return Ft.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),t(l.email,l.password);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(e){var t=e.target,n=t.name,a=t.value;o(Object(Lt.a)(Object(Lt.a)({},l),{},Object(Pt.a)({},n,a)))};return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:u},r.a.createElement(Dt,{type:"email",name:"email",value:l.email,required:!0,handleChange:s,label:"Email"}),r.a.createElement(Dt,{type:"password",name:"password",value:l.password,required:!0,handleChange:s,label:"Password"}),r.a.createElement("div",{className:"buttons"},r.a.createElement(T,{type:"submit"},"Sign In"),r.a.createElement(T,{type:"button",isGoogleSignIn:!0,onClick:n},"Sign In With Google"))))}))),Qt=(n(104),Object(f.b)(null,(function(e){return{signUp:function(t){return e(function(e){return{type:Ut.SIGN_UP_START,payload:e}}(t))}}}))((function(e){var t=e.signUp,n=Object(a.useState)({displayName:"",email:"",password:"",confirmPassword:""}),c=Object(zt.a)(n,2),i=c[0],l=c[1],o=i.displayName,u=i.email,s=i.password,m=i.confirmPassword,p=function(){var e=Object(qt.a)(Ft.a.mark((function e(n){return Ft.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),s===m){e.next=4;break}return alert("Passwords don't match!"),e.abrupt("return");case 4:t({displayName:o,email:u,password:s,confirmPassword:m});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.target,n=t.name,a=t.value;l(Object(Lt.a)(Object(Lt.a)({},i),{},Object(Pt.a)({},n,a)))};return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",null,"I do not have an account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{className:"sign-up-form",onSubmit:p},r.a.createElement(Dt,{type:"text",name:"displayName",value:o,required:!0,handleChange:d,label:"Name"}),r.a.createElement(Dt,{type:"email",name:"email",value:u,required:!0,handleChange:d,label:"Email"}),r.a.createElement(Dt,{type:"password",name:"password",value:s,required:!0,handleChange:d,label:"Password"}),r.a.createElement(Dt,{type:"password",name:"confirmPassword",value:m,required:!0,handleChange:d,label:"Confirm Password"}),r.a.createElement(T,{type:"submit"},"Sign Up")))}))),Bt=(n(105),function(){return r.a.createElement("div",{className:"sign-in-sign-up"},r.a.createElement(Mt,null),r.a.createElement(Qt,null))}),Wt=Object(b.b)({currentUser:et}),Kt=Object(f.b)(Wt,(function(e){return{checkUserSession:function(){return e({type:Ut.CHECK_USER_SESSION})}}}))((function(e){var t=e.checkUserSession,n=e.currentUser;return Object(a.useEffect)((function(){t()}),[t]),r.a.createElement("div",null,r.a.createElement(At,null),r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/",component:O}),r.a.createElement(l.b,{path:"/shop",component:ie}),r.a.createElement(l.b,{exact:!0,path:"/signin",render:function(){return n?r.a.createElement(l.a,{to:"/"}):r.a.createElement(Bt,null)}}),r.a.createElement(l.b,{exact:!0,path:"/checkout",component:Oe})))})),Vt=(n(106),n(64)),Yt=n(63),Zt=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(Lt.a)(Object(Lt.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(Yt.a)(e),[Object(Lt.a)(Object(Lt.a)({},t),{},{quantity:1})])},$t=function(e,t){return e.find((function(e){return e.id===t.id})).quantity>1?e.map((function(e){return e.id===t.id?Object(Lt.a)(Object(Lt.a)({},e),{},{quantity:e.quantity-1}):e})):Jt(e,t)},Jt=function(e,t){return e.filter((function(e){return e.id!==t.id}))},Xt={hidden:!0,cartItems:[]},en=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object(Lt.a)(Object(Lt.a)({},e),{},{hidden:!e.hidden});case R:return Object(Lt.a)(Object(Lt.a)({},e),{},{cartItems:Zt(e.cartItems,t.payload)});case A:return Object(Lt.a)(Object(Lt.a)({},e),{},{cartItems:Jt(e.cartItems,t.payload)});case P:return Object(Lt.a)(Object(Lt.a)({},e),{},{cartItems:$t(e.cartItems,t.payload)});case L:return Object(Lt.a)(Object(Lt.a)({},e),{},{cartItems:[]});default:return e}},tn=n(33),nn=n(61),an={currentUser:null,error:null},rn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:an,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ut.SIGN_IN_SUCCESS:case Ut.SIGN_UP_SUCCESS:return Object(Lt.a)(Object(Lt.a)({},e),{},{currentUser:t.payload,error:null});case Ut.SIGN_IN_FAILURE:case Ut.SIGN_OUT_FAILURE:case Ut.SIGN_UP_FAILURE:return Object(Lt.a)(Object(Lt.a)({},e),{},{error:t.payload});case Ut.SIGN_OUT_SUCCESS:return Object(Lt.a)(Object(Lt.a)({},e),{},{currentUser:null,error:null});default:return e}},cn={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},ln=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:cn,t=arguments.length>1?arguments[1]:void 0;return t.type,e},on={collections:null,isFetching:!1,errorMessage:void 0},un=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:on,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(Lt.a)(Object(Lt.a)({},e),{},{isFetching:!0});case j:return Object(Lt.a)(Object(Lt.a)({},e),{},{collections:t.payload,isFetching:!1});case y:return Object(Lt.a)(Object(Lt.a)({},e),{},{errorMessage:t.payload,isFetching:!1});default:return e}},sn={key:"root",storage:n.n(nn).a,whitelist:["cart","menu","shop"]},mn=Object(ae.c)({user:rn,cart:en,menu:ln,shop:un}),pn=Object(tn.a)(sn,mn),dn=n(5),fn=Ft.a.mark(En),bn=Ft.a.mark(hn),vn=Ft.a.mark(On);function En(){return Ft.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(dn.c)({type:L});case 2:case"end":return e.stop()}}),fn)}function hn(){return Ft.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(dn.e)(Ut.SIGN_OUT_SUCCESS,En);case 2:case"end":return e.stop()}}),bn)}function On(){return Ft.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(dn.a)([Object(dn.b)(hn)]);case 2:case"end":return e.stop()}}),vn)}var gn=n(27),jn=n.n(gn);n(109),n(111);jn.a.initializeApp({apiKey:"AIzaSyArxiQ-QCjblEL2fO_dx94cBnxOED356RA",authDomain:"clothing-store-cdf5b.firebaseapp.com",databaseURL:"https://clothing-store-cdf5b.firebaseio.com",projectId:"clothing-store-cdf5b",storageBucket:"clothing-store-cdf5b.appspot.com",messagingSenderId:"540156462570",appId:"1:540156462570:web:63570f3045c2e12b1c1e93",measurementId:"G-1YFZRZCH4P"});var yn=jn.a.auth(),Sn=jn.a.firestore(),xn=function(){var e=Object(qt.a)(Ft.a.mark((function e(t,n){var a,r,c,i;return Ft.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=Sn.doc("users/".concat(t.uid)),e.next=5,a.get();case 5:if(!e.sent.exists){r=t.displayName,c=t.email,i=new Date;try{a.set(Object(Lt.a)({displayName:r,email:c,createdAt:i},n))}catch(l){console.error("Error creating user",l.message)}}return e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Nn=function(e){return e.docs.map((function(e){var t=e.data(),n=t.title,a=t.items;return{routeName:encodeURI(n.toLowerCase()),id:e.id,title:n,items:a}})).reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{})},wn=new jn.a.auth.GoogleAuthProvider;wn.setCustomParameters({prompt:"select_account"});jn.a;var In=Ft.a.mark(Cn),_n=Ft.a.mark(Un),kn=Ft.a.mark(Tn);function Cn(){var e,t,n;return Ft.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,e=Sn.collection("collections"),a.next=4,e.get();case 4:return t=a.sent,a.next=7,Object(dn.b)(Nn,t);case 7:return n=a.sent,a.next=10,Object(dn.c)(S(n));case 10:a.next=15;break;case 12:a.prev=12,a.t0=a.catch(0),Object(dn.c)((r=a.t0.message,{type:y,errorMessage:r}));case 15:case"end":return a.stop()}var r}),In,null,[[0,12]])}function Un(){return Ft.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(dn.d)(g,Cn);case 2:case"end":return e.stop()}}),_n)}function Tn(){return Ft.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(dn.a)([Object(dn.b)(Un)]);case 2:case"end":return e.stop()}}),kn)}var Gn=Ft.a.mark(Kn),Rn=Ft.a.mark(Vn),An=Ft.a.mark(Yn),Pn=Ft.a.mark(Zn),Ln=Ft.a.mark($n),Hn=Ft.a.mark(Jn),Fn=Ft.a.mark(Xn),qn=Ft.a.mark(ea),zn=Ft.a.mark(ta),Dn=Ft.a.mark(na),Mn=Ft.a.mark(aa),Qn=Ft.a.mark(ra),Bn=Ft.a.mark(ca),Wn=Ft.a.mark(ia);function Kn(e,t){var n,a;return Ft.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(dn.b)(xn,e,t);case 3:return n=r.sent,r.next=6,n.get();case 6:return a=r.sent,r.next=9,Object(dn.c)(Tt(Object(Lt.a)({id:a.id},a.data())));case 9:r.next=15;break;case 11:return r.prev=11,r.t0=r.catch(0),r.next=15,Object(dn.c)(Gt,r.t0);case 15:case"end":return r.stop()}}),Gn,null,[[0,11]])}function Vn(){var e,t;return Ft.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,yn.signInWithPopup(wn);case 3:return e=n.sent,t=e.user,n.next=7,Kn(t);case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(dn.c)(Gt,n.t0);case 13:case"end":return n.stop()}}),Rn,null,[[0,9]])}function Yn(e){var t,n,a,r,c;return Ft.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,n=t.email,a=t.password,i.prev=1,i.next=4,yn.signInWithEmailAndPassword(n,a);case 4:return r=i.sent,c=r.user,i.next=8,Kn(c);case 8:i.next=13;break;case 10:i.prev=10,i.t0=i.catch(1),Object(dn.c)(Gt(i.t0));case 13:case"end":return i.stop()}}),An,null,[[1,10]])}function Zn(){var e;return Ft.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(e,t){var n=yn.onAuthStateChanged((function(t){n(),e(t)}),t)}));case 3:if(e=t.sent){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,Kn(e);case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(dn.c)(Gt(t.t0));case 14:case"end":return t.stop()}}),Pn,null,[[0,10]])}function $n(){return Ft.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,yn.signOut();case 3:return e.next=5,Object(dn.c)({type:Ut.SIGN_OUT_SUCCESS});case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(dn.c)((t=e.t0,{type:Ut.SIGN_OUT_FAILURE,payload:t}));case 11:case"end":return e.stop()}var t}),Ln,null,[[0,7]])}function Jn(e){var t,n,a,r,c,i;return Ft.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return t=e.payload,n=t.email,a=t.password,r=t.displayName,l.prev=1,l.next=4,yn.createUserWithEmailAndPassword(n,a);case 4:return c=l.sent,i=c.user,l.next=8,Object(dn.c)({type:Ut.SIGN_UP_SUCCESS,payload:{user:i,displayName:r}});case 8:l.next=13;break;case 10:l.prev=10,l.t0=l.catch(1),Object(dn.c)((o=l.t0,{type:Ut.SIGN_UP_FAILURE,payload:o}));case 13:case"end":return l.stop()}var o}),Hn,null,[[1,10]])}function Xn(e){var t,n,a;return Ft.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,n=t.displayName,a=t.user,r.next=3,Kn(a,{displayName:n});case 3:case"end":return r.stop()}}),Fn)}function ea(){return Ft.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(dn.e)(Ut.GOOGLE_SIGN_IN_START,Vn);case 2:case"end":return e.stop()}}),qn)}function ta(){return Ft.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(dn.e)(Ut.EMAIL_SIGN_IN_START,Yn);case 2:case"end":return e.stop()}}),zn)}function na(){return Ft.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(dn.e)(Ut.CHECK_USER_SESSION,Zn);case 2:case"end":return e.stop()}}),Dn)}function aa(){return Ft.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(dn.e)(Ut.SIGN_OUT_START,$n);case 2:case"end":return e.stop()}}),Mn)}function ra(){return Ft.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(dn.e)(Ut.SIGN_UP_START,Jn);case 2:case"end":return e.stop()}}),Qn)}function ca(){return Ft.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(dn.e)(Ut.SIGN_UP_SUCCESS,Xn);case 2:case"end":return e.stop()}}),Bn)}function ia(){return Ft.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(dn.a)([Object(dn.b)(ea),Object(dn.b)(ta),Object(dn.b)(na),Object(dn.b)(aa),Object(dn.b)(ra),Object(dn.b)(ca)]);case 2:case"end":return e.stop()}}),Wn)}var la=Ft.a.mark(oa);function oa(){return Ft.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(dn.a)([Object(dn.b)(Tn),Object(dn.b)(ia),Object(dn.b)(On)]);case 2:case"end":return e.stop()}}),la)}var ua=Object(Vt.a)(),sa=[ua];var ma=Object(ae.e)(pn,ae.a.apply(void 0,sa));ua.run(oa);var pa={store:ma,persistor:Object(tn.b)(ma)},da=n(62);i.a.render(r.a.createElement(f.a,{store:pa.store},r.a.createElement(tt.a,null,r.a.createElement(da.a,{persistor:pa.persistor},r.a.createElement(Kt,null)))),document.getElementById("root"))},65:function(e,t,n){e.exports=n(114)},70:function(e,t,n){},71:function(e,t,n){},73:function(e,t,n){},77:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){}},[[65,1,2]]]);
//# sourceMappingURL=main.ebf18ff2.chunk.js.map