"use strict";(self.webpackChunkwallet_reactor=self.webpackChunkwallet_reactor||[]).push([[316],{9610:function(o,e,t){t.r(e),t.d(e,{default:function(){return co}});var r=t(885),a=t(2791),n=t(2982),l=t(9434),c={tableWrap:"HomeTab_tableWrap__wldLt",scrollTableBody:"HomeTab_scrollTableBody__k4rOg",scrollTable:"HomeTab_scrollTable__e2cbs",tableWrapMob:"HomeTab_tableWrapMob__7DKqt",scrollTableBodyMob:"HomeTab_scrollTableBodyMob__+X8ln",scrollTableMob:"HomeTab_scrollTableMob__avbAf",tablePositive:"HomeTab_tablePositive__06bCy",positive:"HomeTab_positive__mmZ63",negative:"HomeTab_negative__pTkgl",scrollTableBtn:"HomeTab_scrollTableBtn__n5d6c",scrollTableBtnMob:"HomeTab_scrollTableBtnMob__gvIkC"},s=t(3553),i=t(5716),d=function(o){return o.transactionCategories.items},m=t(9620),u={ua:"\u0414\u0430\u0442\u0430",en:"Data"},h={ua:"\u0422\u0438\u043f",en:"Type"},b={ua:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440i\u044f",en:"Category"},g={ua:"\u041a\u043e\u043c\u0435\u043d\u0442\u0430\u0440",en:"Comment"},v={ua:"\u0421\u0443\u043c\u0430",en:"Sum"},_={ua:"\u0411\u0430\u043b\u0430\u043d\u0441",en:"Balance"},x={ua:"\u041d\u0435\u043c\u0430\u0454 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446i\u0439",en:"No transactions"},f=t(9628),j=t(9126),k=t(3255),p=t(188),T=t(184),C=function(){var o=(0,l.v9)(s.ig),e=(0,l.v9)(d).map((function(o){return o})),t=(0,i.Z)("(max-width: 767px)"),r=(0,i.Z)("(min-width: 768px)"),a=(0,n.Z)(o),C=(0,l.I0)(),y=(0,l.v9)(m.V),N=u,w=h,A=b,M=g,D=v,S=_,F=x,E=(0,l.v9)(f.g),B=function(o,e){C((0,k.Ks)(o)),C((0,p.o)(e))};return(0,T.jsxs)(T.Fragment,{children:[t&&(0,T.jsx)("div",{className:c.tableWrapMob,children:(0,T.jsx)("div",{className:c.scrollTableMob,children:(0,T.jsx)("div",{className:c.scrollTableBodyMob,children:0!==o.length?a.reverse().sort((function(o,e){return new Date(e.transactionDate)-new Date(o.transactionDate)})).map((function(o){return(0,T.jsx)("table",{className:o.amount>0?c.tablePositive:c.tableNegative,children:(0,T.jsxs)("tbody",{children:[(0,T.jsxs)("tr",{children:[(0,T.jsx)("td",{style:{backgroundColor:"light"===E?"":"var(--dark-mood-form-color)"},children:N[y]}),(0,T.jsx)("td",{style:{backgroundColor:"light"===E?"":"var(--dark-mood-form-color)"},children:o.transactionDate})]}),(0,T.jsxs)("tr",{children:[(0,T.jsx)("td",{style:{backgroundColor:"light"===E?"":"var(--dark-mood-form-color)"},children:w[y]}),(0,T.jsx)("td",{style:{backgroundColor:"light"===E?"":"var(--dark-mood-form-color)"},children:"EXPENSE"!==o.type?"+":"-"})]}),(0,T.jsxs)("tr",{children:[(0,T.jsx)("td",{style:{backgroundColor:"light"===E?"":"var(--dark-mood-form-color)"},children:A[y]}),(0,T.jsx)("td",{style:{backgroundColor:"light"===E?"":"var(--dark-mood-form-color)"},children:e.length&&e.find((function(e){return e.id===o.categoryId})).name})]}),(0,T.jsxs)("tr",{children:[(0,T.jsx)("td",{style:{backgroundColor:"light"===E?"":"var(--dark-mood-form-color)"},children:M[y]}),(0,T.jsx)("td",{style:{backgroundColor:"light"===E?"":"var(--dark-mood-form-color)"},children:o.comment})]}),(0,T.jsxs)("tr",{children:[(0,T.jsx)("td",{style:{backgroundColor:"light"===E?"":"var(--dark-mood-form-color)"},children:D[y]}),(0,T.jsx)("td",{style:{backgroundColor:"light"===E?"":"var(--dark-mood-form-color)"},className:o.amount>0?c.positive:c.negative,children:o.amount})]}),(0,T.jsxs)("tr",{children:[(0,T.jsx)("td",{style:{backgroundColor:"light"===E?"":"var(--dark-mood-form-color)"},children:S[y]}),(0,T.jsx)("td",{style:{backgroundColor:"light"===E?"":"var(--dark-mood-form-color)"},children:o.balanceAfter})]}),(0,T.jsx)("tr",{children:(0,T.jsx)("td",{colspan:"2",children:(0,T.jsx)("button",{type:"button",className:c.scrollTableBtnMob,onClick:function(){return B(o.id)},children:"Delete"})})})]})},o.id)})):(0,T.jsx)("p",{children:F[y]})})})}),r&&(0,T.jsx)("div",{className:c.tableWrap,children:(0,T.jsxs)("div",{className:c.scrollTable,children:[(0,T.jsx)("table",{children:(0,T.jsx)("thead",{children:(0,T.jsxs)("tr",{children:[(0,T.jsx)("th",{style:{backgroundColor:"light"===E?"":"var(--dark-mood-form-color)",color:"light"===E?"var(--title-black-color)":"var(--text-white-color)"},children:N[y]}),(0,T.jsx)("th",{style:{backgroundColor:"light"===E?"":"var(--dark-mood-form-color)",color:"light"===E?"var(--title-black-color)":"var(--text-white-color)"},children:w[y]}),(0,T.jsx)("th",{style:{backgroundColor:"light"===E?"":"var(--dark-mood-form-color)",color:"light"===E?"var(--title-black-color)":"var(--text-white-color)"},children:A[y]}),(0,T.jsx)("th",{style:{backgroundColor:"light"===E?"":"var(--dark-mood-form-color)",color:"light"===E?"var(--title-black-color)":"var(--text-white-color)"},children:M[y]}),(0,T.jsx)("th",{style:{backgroundColor:"light"===E?"":"var(--dark-mood-form-color)",color:"light"===E?"var(--title-black-color)":"var(--text-white-color)"},children:D[y]}),(0,T.jsx)("th",{style:{backgroundColor:"light"===E?"":"var(--dark-mood-form-color)",color:"light"===E?"var(--title-black-color)":"var(--text-white-color)"},children:S[y]}),(0,T.jsx)("th",{style:{backgroundColor:"light"===E?"":"var(--dark-mood-form-color)",color:"light"===E?"var(--title-black-color)":"var(--text-white-color)"}})]})})}),(0,T.jsx)("div",{className:c.scrollTableBody,children:(0,T.jsx)("table",{children:(0,T.jsx)("tbody",{children:o.length?a.reverse().sort((function(o,e){return new Date(e.transactionDate)-new Date(o.transactionDate)})).map((function(o){return(0,T.jsxs)("tr",{children:[(0,T.jsx)("td",{children:o.transactionDate}),(0,T.jsx)("td",{children:"EXPENSE"!==o.type?"+":"-"}),(0,T.jsx)("td",{children:e.length&&e.find((function(e){return e.id===o.categoryId})).name}),(0,T.jsx)("td",{children:o.comment}),(0,T.jsx)("td",{className:o.amount>0?c.positive:c.negative,children:o.amount}),(0,T.jsx)("td",{children:o.balanceAfter}),(0,T.jsx)("td",{children:(0,T.jsx)("button",{type:"button",onClick:function(){return B(o.id,o.amount)},className:c.scrollTableBtn,children:(0,T.jsx)(j.AuQ,{style:{fill:"#fff"}})})})]},o.id)})):(0,T.jsx)("tr",{children:(0,T.jsx)("td",{children:F[y]})})})})})]})})]})},y=function(o){var e=o.onModalOpen;return(0,T.jsx)(T.Fragment,{children:(0,T.jsx)("button",{onClick:e,type:"button",children:"Button Add Transactions"})})},N=t(1413),w=t(2015),A=t(1799),M=t.n(A),D=(t(1778),t(2426)),S=t.n(D),F=t(9552),E="ModalAddTransaction_Overlay__vLRSS",B="ModalAddTransaction_Modal__TxV0p",H="ModalAddTransaction_container__ctH3d",I="ModalAddTransaction_hiddenInput__5li1C",Z="ModalAddTransaction_thumbContainer__vmn7-",O="ModalAddTransaction_thumb__m-wAw",L="ModalAddTransaction_track__ssBX2",W="FormAddTransaction_titleForm__IC8ko",P="FormAddTransaction_wraperSwitch__3mtec",X="FormAddTransaction_wraperAmountDate__OOS4P",Y="FormAddTransaction_inputAmount__63lHt",V="FormAddTransaction_inputDate__tfEr3",R="FormAddTransaction_commentLabel__sShDm",q="FormAddTransaction_inputComment__o60CH",z="FormAddTransaction_btnWraper__+vpSj",G="FormAddTransaction_btnAdd__2bF93",K="FormAddTransaction_btnCancel__L90Nx",U="FormAddTransaction_selectWraper__qzymS",J="FormAddTransaction_optionCustomWriper__DvYLe",Q="FormAddTransaction_selectCustom__6vGV2",$="FormAddTransaction_selectListWraper__ePJo1",oo="FormAddTransaction_selectLabel__RbdGb",eo="FormAddTransaction_selectOptionItem__azR2X",to={ua:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0442\u0440\u0430\u043d\u0441\u0430\u043a\u0446i\u044e",en:"Add transaction"},ro={ua:"\u041a\u043e\u043c\u0435\u043d\u0442\u0430\u0440",en:"Comment"},ao={ua:"\u0414\u043e\u0434\u0430\u0442\u0438",en:"ADD"},no={ua:"\u0412i\u0434\u043ci\u043d\u0438\u0442\u0438",en:"CANCEL"},lo=function(o){var e=o.closeModal,t=(0,l.I0)(),n=(0,l.v9)(d),c=(0,l.v9)(w.um.selectBalance),s=function(){var o=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=(0,a.useState)(o),t=(0,r.Z)(e,2),n=t[0],l=t[1],c=function(){return l((function(o){return!o}))};return{isShowSelect:n,show:function(){return l(!0)},hide:function(){return l(!1)},toggleHook:c}}(),i=s.isShowSelect,u=s.toggleHook,h=(0,a.useState)(""),b=(0,r.Z)(h,2),g=b[0],v=b[1],_=(0,a.useState)(new Date),x=(0,r.Z)(_,2),j=x[0],p=x[1],C=(0,a.useState)(S()(j).format()),y=(0,r.Z)(C,2),A=y[0],D=y[1],lo=(0,a.useState)(""),co=(0,r.Z)(lo,2),so=co[0],io=co[1],mo=(0,a.useState)("INCOME"),uo=(0,r.Z)(mo,2),ho=uo[0],bo=uo[1],go=(0,a.useState)("063f1132-ba5d-42b4-951d-44011ca46262"),vo=(0,r.Z)(go,2),_o=vo[0],xo=vo[1],fo=(0,a.useState)(""),jo=(0,r.Z)(fo,2),ko=jo[0],po=jo[1],To=(0,a.useState)("false"),Co=(0,r.Z)(To,2),yo=Co[0],No=Co[1],wo=(0,l.v9)(m.V),Ao=to,Mo=ro,Do=ao,So=no,Fo=(0,l.v9)(f.g);(0,a.useEffect)((function(){t((0,F.f)());var o=function(o){"Escape"===o.code&&e()};return window.addEventListener("keydown",o),function(){window.removeEventListener("keydown",o)}}),[e,t]);var Eo=function(o){t((0,k.dT)((0,N.Z)({},o)))},Bo=function(o){var e=o.target,t=e.name,r=e.value;switch(t){case"amount":v(r);break;case"transactionDate":D(r);break;case"comment":io(r);break;case"categoryId":xo(r);break;default:return}},Ho=function(){v(""),io("")},Io=function(o){console.log(o.currentTarget.value),xo(o.currentTarget.value),No(!0)};return(0,T.jsx)(T.Fragment,{children:(0,T.jsx)("div",{className:E,onClick:function(o){o.currentTarget===o.target&&e()},style:{backgroundColor:"light"===Fo?"":"var(--dark-mood-bg-color)",color:"light"===Fo?"var(--title-black-color)":"var(--text-white-color)"},children:(0,T.jsxs)("div",{className:B,style:{backgroundColor:"light"===Fo?"":"var(--dark-mood-addForm-color)"},children:[(0,T.jsx)("h2",{className:W,children:Ao[wo]}),(0,T.jsxs)("form",{autoComplete:"off",onSubmit:function(o){if(o.preventDefault(),i){if(g>c)return alert("\u0421\u0443\u043c\u043c\u0430 \u0431\u043e\u043b\u044c\u0448\u0435, \u0447\u0435\u043c \u0431\u0430\u043b\u0430\u043d\u0441. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0443\u0436\u043d\u0443\u044e \u0441\u0443\u043c\u043c\u0443");var e=-g;return console.log(e),Eo({type:ho,categoryId:_o,amount:e,transactionDate:A,comment:so}),Ho(),void t(w.r5.fetchCurrentUser())}Eo({type:ho,categoryId:_o,amount:g,transactionDate:A,comment:so}),t(w.r5.fetchCurrentUser()),Ho()},children:[(0,T.jsx)("div",{className:P,children:(0,T.jsxs)("label",{className:H,children:[(0,T.jsx)("input",{type:"checkbox",className:I,id:"hidden-input",name:"toggle",onClick:function(o){i&&(console.log(5),bo("INCOME"),xo("063f1132-ba5d-42b4-951d-44011ca46262"),console.log(ho),console.log(g)),i||(console.log(6),bo("EXPENSE"),console.log(ho)),u()}}),(0,T.jsx)("span",{className:Z,children:(0,T.jsx)("span",{className:O})}),(0,T.jsx)("span",{className:L})]})}),i&&(0,T.jsx)("div",{className:U,children:(0,T.jsxs)("ul",{className:$,children:[(0,T.jsx)("input",{className:Q,name:"categoryId",type:"button",onClick:function(){return No(!1)},value:ko}),!yo&&(0,T.jsx)("div",{className:J,children:n.filter((function(o){return"INCOME"!==o.type})).map((function(o){return(0,T.jsx)("li",{onClick:function(){return po(o.name)},children:(0,T.jsxs)("label",{className:oo,children:["".concat(o.name),(0,T.jsx)("input",{className:eo,name:"categoryId",onClick:Io,onChange:Bo,value:"".concat(o.id)})]})},"".concat(o.id))}))})]})}),(0,T.jsxs)("div",{className:X,children:[(0,T.jsx)("label",{children:(0,T.jsx)("input",{className:Y,name:"amount",min:"0",placeholder:"0.00",value:g,onChange:Bo})}),(0,T.jsx)(M(),{inputProps:{name:"transactionDate"},value:j,onChange:p,dateFormat:"YYYY-MM-DD",timeFormat:!1,onClose:function(o){return D(S()(o).format())},closeOnSelect:!0,onNavigate:function(o){return console.log(o)},className:V,name:"transactionDate"})]}),(0,T.jsx)("label",{className:R,children:(0,T.jsx)("input",{style:{backgroundColor:"light"===Fo?"":"var(--dark-mood-addForm-color)"},className:q,type:"text",name:"comment",placeholder:Mo[wo],value:so,onChange:Bo})}),(0,T.jsxs)("div",{className:z,children:[(0,T.jsx)("button",{className:G,type:"submit",children:Do[wo]}),(0,T.jsx)("button",{className:K,type:"submit",children:So[wo]})]})]})]})})})},co=function(){var o=(0,a.useState)(!1),e=(0,r.Z)(o,2),t=e[0],n=e[1];return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(C,{}),(0,T.jsx)(y,{onModalOpen:function(){n(!0)}}),t&&(0,T.jsx)(lo,{closeModal:function(){n(!1)}})]})}}}]);
//# sourceMappingURL=316.1477059e.chunk.js.map