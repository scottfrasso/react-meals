(this["webpackJsonpreact-meals"]=this["webpackJsonpreact-meals"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__26gr1",control:"Checkout_control__2qGfb",actions:"Checkout_actions__2X_6_",submit:"Checkout_submit__2BFZZ",invalid:"Checkout_invalid__2gAN9"}},,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2pjQw",total:"Cart_total__3pLin",actions:"Cart_actions__1GOmr","button--alt":"Cart_button--alt__1Z2QQ",button:"Cart_button__fw1-t"}},,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1B1_q",summary:"CartItem_summary__3FMDj",price:"CartItem_price__2Nl0j",amount:"CartItem_amount__jUKEC",actions:"CartItem_actions__UwVPJ"}},,function(e,t,n){e.exports={button:"HeaderCartButton_button__3CMOT",icon:"HeaderCartButton_icon__9KWtg",badge:"HeaderCartButton_badge__1Z3gL",bump:"HeaderCartButton_bump__3atD4"}},,,,function(e,t,n){e.exports={meal:"MealItem_meal__2uJ70",description:"MealItem_description__2YINS",price:"MealItem_price__3sNYl"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__2ZLCP","meals-appear":"AvailableMeals_meals-appear__ONwLi",MealsLoading:"AvailableMeals_MealsLoading__UmYIn",MealsError:"AvailableMeals_MealsError__38x-D"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__1mfF6",modal:"Modal_modal__4DXUe","slide-down":"Modal_slide-down__W3MdX"}},function(e,t,n){e.exports={header:"Header_header__zSTUo","main-image":"Header_main-image__2Q3So"}},,,,function(e,t,n){e.exports={summary:"MealsSummary_summary__22zUX"}},function(e,t,n){e.exports={card:"Card_card__1m44e"}},function(e,t,n){e.exports={input:"Input_input__2swPp"}},function(e,t,n){e.exports={form:"MealItemForm_form__32qVd"}},,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a,c=n(19),r=n.n(c),s=(n(31),n(2)),i=n(1),o=n.n(i),l=n(0),u=function(){return Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(l.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},j=o.a.createContext(null),d=n(9),m=n.n(d),b=function(e){var t=Object(i.useState)(),n=Object(s.a)(t,2),a=n[0],c=n[1],r=Object(i.useContext)(j).items,o=r.reduce((function(e,t){return e+t.amount}),0),d="".concat(m.a.button," ").concat(a?m.a.bump:"");return Object(i.useEffect)((function(){if(0!==r.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[r]),Object(l.jsxs)("button",{className:d,onClick:e.onClick,children:[Object(l.jsx)("span",{className:m.a.icon,children:Object(l.jsx)(u,{})}),Object(l.jsx)("span",{children:"Your Cart"}),Object(l.jsx)("span",{className:m.a.badge,children:o})]})},O=n.p+"static/media/meals.2971f633.jpeg",x=n(16),h=n.n(x),p=function(e){var t=e.onShowCart;return Object(l.jsxs)(o.a.Fragment,{children:[Object(l.jsxs)("header",{className:h.a.header,children:[Object(l.jsx)("h1",{children:"ReactMeals"}),Object(l.jsx)(b,{onClick:t})]}),Object(l.jsx)("div",{className:h.a["main-image"],children:Object(l.jsx)("img",{src:O,alt:"A table full of food"})})]})},f=n(20),_=n.n(f),v=function(){return Object(l.jsxs)("section",{className:_.a.summary,children:[Object(l.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(l.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(l.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},C=n(6),N=n(12),y=n(21),g=n.n(y),A=function(e){return Object(l.jsx)("div",{className:g.a.card,children:e.children})},M=n(4),w=n(22),k=n.n(w),S=o.a.forwardRef((function(e,t){return Object(l.jsxs)("div",{className:k.a.input,children:[Object(l.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(l.jsx)("input",Object(M.a)({ref:t},e.input))]})})),I=n(23),E=n.n(I),R=function(e){var t=Object(i.useState)(!0),n=Object(s.a)(t,2),a=n[0],c=n[1],r=Object(i.useRef)();return Object(l.jsxs)("form",{className:E.a.form,onSubmit:function(t){t.preventDefault();var n=r.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):(c(!0),e.onAddToCart(a))},children:[Object(l.jsx)(S,{ref:r,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(l.jsx)("button",{children:"+ Add"}),!a&&Object(l.jsxs)("p",{children:["Please enter a valid amount ",-4]})]})},F=n(13),D=n.n(F),P=function(e){var t=e.id,n=e.name,a=e.description,c=e.price,r=Object(i.useContext)(j),s="$".concat(c.toFixed(2));return Object(l.jsxs)("li",{className:D.a.meal,children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:n}),Object(l.jsx)("div",{className:D.a.description,children:a}),Object(l.jsx)("div",{className:D.a.price,children:s})]}),Object(l.jsx)("div",{children:Object(l.jsx)(R,{onAddToCart:function(e){r.addItem({id:t,name:n,amount:e,price:c})},id:t})})]})},L=n(14),H=n.n(L),B=function(){var e=Object(i.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(!0),r=Object(s.a)(c,2),o=r[0],u=r[1],j=Object(i.useState)(),d=Object(s.a)(j,2),m=d[0],b=d[1];if(Object(i.useEffect)((function(){var e=function(){var e=Object(N.a)(Object(C.a)().mark((function e(){var t,n,c,r;return Object(C.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,fetch("https://react-meals-69a9e-default-rtdb.europe-west1.firebasedatabase.app/meals.json");case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("Something went wrong");case 6:return e.next=8,t.json();case 8:for(r in n=e.sent,c=[],n)c.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});a(c),u(!1);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){u(!1),b(e.message)}))}),[]),o)return Object(l.jsx)("section",{className:H.a.MealsLoading,children:Object(l.jsx)("h1",{children:"Loading..."})});if(m)return Object(l.jsx)("section",{className:H.a.MealsError,children:Object(l.jsx)("p",{children:m})});var O=n.map((function(e){return Object(l.jsx)(P,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(l.jsx)("section",{className:H.a.meals,children:Object(l.jsx)(A,{children:Object(l.jsx)("ul",{children:O})})})},T=function(){return Object(l.jsxs)(o.a.Fragment,{children:[Object(l.jsx)(v,{}),Object(l.jsx)(B,{})]})},V=n(10),U=n.n(V),Y=n(15),z=n.n(Y),J=function(e){return Object(l.jsx)("div",{className:z.a.backdrop,onClick:e.onClose})},Z=function(e){return Object(l.jsx)("div",{className:z.a.modal,children:Object(l.jsx)("div",{className:z.a.content,children:e.children})})},q=document.getElementById("overlays"),Q=function(e){return Object(l.jsxs)(o.a.Fragment,{children:[U.a.createPortal(Object(l.jsx)(J,{onClose:e.onClose}),q),U.a.createPortal(Object(l.jsx)(Z,{children:e.children}),q)]})},X=n(7),$=n.n(X),G=function(e){var t=e.name,n=e.price,a=e.amount,c=e.onRemove,r=e.onAdd,s="$".concat(n.toFixed(2));return Object(l.jsxs)("li",{className:$.a["cart-item"],children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:t}),Object(l.jsxs)("div",{className:$.a.summary,children:[Object(l.jsx)("span",{className:$.a.price,children:s}),Object(l.jsxs)("span",{className:$.a.amount,children:["x ",a]})]})]}),Object(l.jsxs)("div",{className:$.a.actions,children:[Object(l.jsx)("button",{onClick:c,children:"\u2212"}),Object(l.jsx)("button",{onClick:r,children:"+"})]})]})},K=n(3),W=n.n(K),ee=function(e){return 0===e.trim().length},te=function(e){var t=e.onConfirm,n=e.onCancel,a=Object(i.useState)({name:!0,street:!0,city:!0,postalCode:!0}),c=Object(s.a)(a,2),r=c[0],o=c[1],u=Object(i.useRef)(),j=Object(i.useRef)(),d=Object(i.useRef)(),m=Object(i.useRef)(),b="".concat(W.a.control," ").concat(r.name?"":W.a.invalid),O="".concat(W.a.control," ").concat(r.street?"":W.a.invalid),x="".concat(W.a.control," ").concat(r.postalCode?"":W.a.invalid),h="".concat(W.a.control," ").concat(r.city?"":W.a.invalid);return Object(l.jsxs)("form",{className:W.a.form,onSubmit:function(e){e.preventDefault();var n=u.current.value,a=j.current.value,c=d.current.value,r=m.current.value,s=!ee(n),i=!ee(a),l=5===c.trim().length,b=!ee(r);o({name:s,street:i,city:b,postalCode:l}),s&&i&&l&&b&&t({name:n,street:a,city:r,postalCode:c})},children:[Object(l.jsxs)("div",{className:b,children:[Object(l.jsx)("label",{htmlFor:"name",children:"Your name"}),Object(l.jsx)("input",{type:"text",id:"name",ref:u}),!r.name&&Object(l.jsx)("p",{children:"Please entered a valid name"})]}),Object(l.jsxs)("div",{className:O,children:[Object(l.jsx)("label",{htmlFor:"street",children:"Street"}),Object(l.jsx)("input",{type:"text",id:"street",ref:j}),!r.street&&Object(l.jsx)("p",{children:"Please entered a valid street"})]}),Object(l.jsxs)("div",{className:x,children:[Object(l.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(l.jsx)("input",{type:"text",id:"postal",ref:d}),!r.postalCode&&Object(l.jsx)("p",{children:"Please entered a valid postal code (5 characters long)"})]}),Object(l.jsxs)("div",{className:h,children:[Object(l.jsx)("label",{htmlFor:"city",children:"City"}),Object(l.jsx)("input",{type:"text",id:"city",ref:m}),!r.city&&Object(l.jsx)("p",{children:"Please entered a valid city"})]}),Object(l.jsxs)("div",{className:W.a.actions,children:[Object(l.jsx)("button",{type:"button",onClick:n,children:"Cancel"}),Object(l.jsx)("button",{className:W.a.submit,children:"Confirm"})]})]})},ne=n(5),ae=n.n(ne),ce=function(e){var t=Object(i.useState)(!1),n=Object(s.a)(t,2),a=n[0],c=n[1],r=Object(i.useState)(!1),u=Object(s.a)(r,2),d=u[0],m=u[1],b=Object(i.useState)(!1),O=Object(s.a)(b,2),x=O[0],h=O[1],p=Object(i.useContext)(j),f="$".concat(p.totalAmount.toFixed(2)),_=p.items.length>0,v=function(e){p.removeItem(e)},y=function(e){p.addItem(Object(M.a)(Object(M.a)({},e),{},{amount:1}))},g=function(){var e=Object(N.a)(Object(C.a)().mark((function e(t){return Object(C.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,fetch("https://react-meals-69a9e-default-rtdb.europe-west1.firebasedatabase.app/orders.json",{method:"POST",body:JSON.stringify({user:t,orderedItems:p.items})});case 3:m(!1),h(!0),p.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=Object(l.jsx)("ul",{className:ae.a["cart-items"],children:p.items.map((function(e){return Object(l.jsx)(G,{name:e.name,amount:e.amount,price:e.price,onRemove:v.bind(null,e.id),onAdd:y.bind(null,Object(M.a)({},e))},e.id)}))}),w=Object(l.jsxs)("div",{className:ae.a.actions,children:[Object(l.jsx)("button",{className:ae.a["button--alt"],onClick:e.onClose,children:"Close"}),_&&Object(l.jsx)("button",{className:ae.a.button,onClick:function(e){c(!0)},children:"Order"})]}),k=Object(l.jsxs)(o.a.Fragment,{children:[A,Object(l.jsxs)("div",{className:ae.a.total,children:[Object(l.jsx)("span",{children:"Total Amount"}),Object(l.jsx)("span",{children:f})]}),a&&Object(l.jsx)(te,{onConfirm:g,onCancel:e.onClose}),!a&&w]}),S=Object(l.jsx)("p",{children:"Sending order data..."}),I=Object(l.jsxs)(o.a.Fragment,{children:[Object(l.jsx)("p",{children:"Successfully sent the order!"}),Object(l.jsx)("div",{className:ae.a.actions,children:Object(l.jsx)("button",{className:ae.a.button,onClick:e.onClose,children:"Close"})})]});return Object(l.jsxs)(Q,{onClose:e.onClose,children:[!d&&!x&&k,d&&S,!d&&x&&I]})},re=n(17);!function(e){e[e.ADD=0]="ADD",e[e.REMOVE=1]="REMOVE",e[e.CLEAR=2]="CLEAR"}(a||(a={}));var se={items:[],totalAmount:0},ie=function(e,t){if(t.type===a.ADD){var n,c=e.totalAmount+t.item.price*t.item.amount,r=e.items.findIndex((function(e){return e.id===t.item.id})),s=e.items[r];if(s){var i=Object(M.a)(Object(M.a)({},s),{},{amount:s.amount+t.item.amount});(n=Object(re.a)(e.items))[r]=i}else n=e.items.concat(t.item);return{items:n,totalAmount:c}}if(t.type===a.REMOVE){var o,l=e.items.findIndex((function(e){return e.id===t.id})),u=e.items[l],j=e.totalAmount-u.price;if(1===u.amount)o=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(M.a)(Object(M.a)({},u),{},{amount:u.amount-1});(o=Object(re.a)(e.items))[l]=d}return{items:o,totalAmount:j}}return t.type,a.CLEAR,se},oe=function(e){var t=Object(i.useReducer)(ie,se),n=Object(s.a)(t,2),c=n[0],r=n[1],o={items:c.items,totalAmount:c.totalAmount,addItem:function(e){r({type:a.ADD,item:e})},removeItem:function(e){r({type:a.REMOVE,id:e})},clearCart:function(){r({type:a.CLEAR})}};return Object(l.jsx)(j.Provider,{value:o,children:e.children})};var le=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(l.jsxs)(oe,{children:[n&&Object(l.jsx)(ce,{onClose:function(){a(!1)}}),Object(l.jsx)(p,{onShowCart:function(){a(!0)}}),Object(l.jsx)("main",{children:Object(l.jsx)(T,{})})]})};r.a.createRoot(document.getElementById("root")).render(Object(l.jsx)(le,{}))}],[[33,1,2]]]);
//# sourceMappingURL=main.af12140a.chunk.js.map