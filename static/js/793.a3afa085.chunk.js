"use strict";(self.webpackChunkwallet_reactor=self.webpackChunkwallet_reactor||[]).push([[793],{7284:function(e,n,t){t.r(n),t.d(n,{default:function(){return q}});var a=t(885),r=t(2791),s=t(9434),o={tableWrap:"HomeTab_tableWrap__wldLt",scrollTableBody:"HomeTab_scrollTableBody__k4rOg",scrollTable:"HomeTab_scrollTable__e2cbs",tableWrapMob:"HomeTab_tableWrapMob__7DKqt",scrollTableBodyMob:"HomeTab_scrollTableBodyMob__+X8ln",scrollTableMob:"HomeTab_scrollTableMob__avbAf",tablePositive:"HomeTab_tablePositive__06bCy",positive:"HomeTab_positive__mmZ63",negative:"HomeTab_negative__pTkgl"},c=t(3553),l=t(5716),i=function(e){return e.transactionCategories.items},d=t(184),m=function(){var e=(0,s.v9)(c.ig),n=(0,s.v9)(i).map((function(e){return e})),t=(0,l.Z)("(max-width: 767px)"),a=(0,l.Z)("(min-width: 768px)");return(0,d.jsxs)(d.Fragment,{children:[t&&(0,d.jsx)("div",{className:o.tableWrapMob,children:(0,d.jsx)("div",{className:o.scrollTableMob,children:(0,d.jsx)("div",{className:o.scrollTableBodyMob,children:0!==e.length?e.map((function(e){return(0,d.jsx)("table",{className:e.amount>0?o.tablePositive:o.tableNegative,children:(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Data"}),(0,d.jsx)("td",{children:e.transactionDate})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Type"}),(0,d.jsx)("td",{children:"EXPENSE"!==e.type?"+":"-"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Category"}),(0,d.jsx)("td",{children:n.length&&n.find((function(n){return n.id===e.categoryId})).name})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Comment"}),(0,d.jsx)("td",{children:e.comment})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Sum"}),(0,d.jsx)("td",{className:e.amount>0?o.positive:o.negative,children:e.amount})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Balance"}),(0,d.jsx)("td",{children:e.balanceAfter})]})]})},e.id)})):(0,d.jsx)("p",{children:"No transactions"})})})}),a&&(0,d.jsx)("div",{className:o.tableWrap,children:(0,d.jsxs)("div",{className:o.scrollTable,children:[(0,d.jsx)("table",{children:(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Date"}),(0,d.jsx)("th",{children:"Type"}),(0,d.jsx)("th",{children:"Category"}),(0,d.jsx)("th",{children:"Comment"}),(0,d.jsx)("th",{children:"Sum"}),(0,d.jsx)("th",{children:"Balance"})]})})}),(0,d.jsx)("div",{className:o.scrollTableBody,children:(0,d.jsx)("table",{children:(0,d.jsx)("tbody",{children:e.length?e.map((function(e){return(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:e.transactionDate}),(0,d.jsx)("td",{children:"EXPENSE"!==e.type?"+":"-"}),(0,d.jsx)("td",{children:n.length&&n.find((function(n){return n.id===e.categoryId})).name}),(0,d.jsx)("td",{children:e.comment}),(0,d.jsx)("td",{className:e.amount>0?o.positive:o.negative,children:e.amount}),(0,d.jsx)("td",{children:e.balanceAfter})]},e.id)})):(0,d.jsx)("tr",{children:(0,d.jsx)("td",{children:"No transactions"})})})})})]})})]})},u=function(e){var n=e.onModalOpen;return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("button",{onClick:n,type:"button",children:"Button Add Transactions"})})},h=t(1413),_=t(9249),x=t(3255),b=t(1799),j=t.n(b),p=(t(1778),t(2426)),f=t.n(p),v=t(9552),T="ModalAddTransaction_Overlay__vLRSS",g="ModalAddTransaction_Modal__TxV0p",N="ModalAddTransaction_container__ctH3d",C="ModalAddTransaction_hiddenInput__5li1C",y="ModalAddTransaction_thumbContainer__vmn7-",A="ModalAddTransaction_thumb__m-wAw",S="ModalAddTransaction_track__ssBX2",M="FormAddTransaction_titleForm__IC8ko",F="FormAddTransaction_wraperSwitch__3mtec",k="FormAddTransaction_wraperAmountDate__OOS4P",w="FormAddTransaction_inputAmount__63lHt",D="FormAddTransaction_inputDate__tfEr3",E="FormAddTransaction_commentLabel__sShDm",H="FormAddTransaction_inputComment__o60CH",I="FormAddTransaction_btnWraper__+vpSj",Z="FormAddTransaction_btnAdd__2bF93",B="FormAddTransaction_btnCancel__L90Nx",O="FormAddTransaction_selectWraper__qzymS",L="FormAddTransaction_optionCustomWriper__DvYLe",W="FormAddTransaction_selectCustom__6vGV2",P="FormAddTransaction_selectListWraper__ePJo1",X="FormAddTransaction_selectLabel__RbdGb",Y="FormAddTransaction_selectOptionItem__azR2X",R=function(e){var n=e.closeModal,t=(0,s.I0)(),o=(0,s.v9)(i),c=(0,s.v9)(_.um.selectBalance),l=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=(0,r.useState)(e),t=(0,a.Z)(n,2),s=t[0],o=t[1],c=function(){return o((function(e){return!e}))};return{isShowSelect:s,show:function(){return o(!0)},hide:function(){return o(!1)},toggleHook:c}}(),m=l.isShowSelect,u=l.toggleHook,b=(0,r.useState)(""),p=(0,a.Z)(b,2),R=p[0],q=p[1],z=(0,r.useState)(new Date),G=(0,a.Z)(z,2),U=G[0],V=G[1],J=(0,r.useState)(f()(U).format()),K=(0,a.Z)(J,2),Q=K[0],$=K[1],ee=(0,r.useState)(""),ne=(0,a.Z)(ee,2),te=ne[0],ae=ne[1],re=(0,r.useState)("INCOME"),se=(0,a.Z)(re,2),oe=se[0],ce=se[1],le=(0,r.useState)("063f1132-ba5d-42b4-951d-44011ca46262"),ie=(0,a.Z)(le,2),de=ie[0],me=ie[1],ue=(0,r.useState)(""),he=(0,a.Z)(ue,2),_e=he[0],xe=he[1],be=(0,r.useState)("false"),je=(0,a.Z)(be,2),pe=je[0],fe=je[1];(0,r.useEffect)((function(){t((0,v.f)());var e=function(e){"Escape"===e.code&&n()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[n,t]);var ve=function(e){t((0,x.dT)((0,h.Z)({},e)))},Te=function(e){var n=e.target,t=n.name,a=n.value;switch(t){case"amount":q(a);break;case"transactionDate":$(a);break;case"comment":ae(a);break;case"categoryId":me(a);break;default:return}},ge=function(){q(""),ae("")},Ne=function(e){console.log(e.currentTarget.value),me(e.currentTarget.value),fe(!0)};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{className:T,onClick:function(e){e.currentTarget===e.target&&n()},children:(0,d.jsxs)("div",{className:g,children:[(0,d.jsx)("h2",{className:M,children:"Add transaction"}),(0,d.jsxs)("form",{autoComplete:"off",onSubmit:function(e){if(e.preventDefault(),m){if(R>c)return alert("\u0421\u0443\u043c\u043c\u0430 \u0431\u043e\u043b\u044c\u0448\u0435, \u0447\u0435\u043c \u0431\u0430\u043b\u0430\u043d\u0441. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0443\u0436\u043d\u0443\u044e \u0441\u0443\u043c\u043c\u0443");var n=-R;return console.log(n),ve({type:oe,categoryId:de,amount:n,transactionDate:Q,comment:te}),ge(),void t(_.r5.fetchCurrentUser())}ve({type:oe,categoryId:de,amount:R,transactionDate:Q,comment:te}),t(_.r5.fetchCurrentUser()),ge()},children:[(0,d.jsx)("div",{className:F,children:(0,d.jsxs)("label",{className:N,children:[(0,d.jsx)("input",{type:"checkbox",className:C,id:"hidden-input",name:"toggle",onClick:function(e){m&&(console.log(5),ce("INCOME"),me("063f1132-ba5d-42b4-951d-44011ca46262"),console.log(oe),console.log(R)),m||(console.log(6),ce("EXPENSE"),console.log(oe)),u()}}),(0,d.jsx)("span",{className:y,children:(0,d.jsx)("span",{className:A})}),(0,d.jsx)("span",{className:S})]})}),m&&(0,d.jsx)("div",{className:O,children:(0,d.jsxs)("ul",{className:P,children:[(0,d.jsx)("input",{className:W,name:"categoryId",type:"button",onClick:function(){return fe(!1)},value:_e}),!pe&&(0,d.jsx)("div",{className:L,children:o.filter((function(e){return"INCOME"!==e.type})).map((function(e){return(0,d.jsx)("li",{onClick:function(){return xe(e.name)},children:(0,d.jsxs)("label",{className:X,children:["".concat(e.name),(0,d.jsx)("input",{className:Y,name:"categoryId",onClick:Ne,onChange:Te,value:"".concat(e.id)})]})},"".concat(e.id))}))})]})}),(0,d.jsxs)("div",{className:k,children:[(0,d.jsx)("label",{children:(0,d.jsx)("input",{className:w,name:"amount",min:"0",placeholder:"0.00",value:R,onChange:Te})}),(0,d.jsx)(j(),{inputProps:{name:"transactionDate"},value:U,onChange:V,dateFormat:"YYYY-MM-DD",timeFormat:!1,onClose:function(e){return $(f()(e).format())},closeOnSelect:!0,onNavigate:function(e){return console.log(e)},className:D,name:"transactionDate"})]}),(0,d.jsx)("label",{className:E,children:(0,d.jsx)("input",{className:H,type:"text",name:"comment",placeholder:"Comment",value:te,onChange:Te})}),(0,d.jsxs)("div",{className:I,children:[(0,d.jsx)("button",{className:Z,type:"submit",children:"ADD"}),(0,d.jsx)("button",{className:B,type:"submit",children:"CANCEL"})]})]})]})})})},q=function(){var e=(0,r.useState)(!1),n=(0,a.Z)(e,2),t=n[0],s=n[1];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(m,{}),(0,d.jsx)(u,{onModalOpen:function(){s(!0)}}),t&&(0,d.jsx)(R,{closeModal:function(){s(!1)}})]})}}}]);
//# sourceMappingURL=793.a3afa085.chunk.js.map