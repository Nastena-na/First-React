(this["webpackJsonpfirst-react"]=this["webpackJsonpfirst-react"]||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),s=a.n(c),r=a(5),i=a.n(r),o=(a(4),a(2)),u=a.p+"static/media/logo.fad4f8a5.svg";var l=function(){return Object(n.jsx)("header",{className:"header root__section",children:Object(n.jsx)("img",{src:u,alt:"mesto logo",className:"logo"})})},d=s.a.createContext({});var p=function(e){var t=s.a.useContext(d);return Object(n.jsx)("div",{className:"profile root__section",children:Object(n.jsxs)("div",{className:"user-info",children:[Object(n.jsx)("div",{className:"user-info__photo",style:{backgroundImage:"url('".concat(t.avatar,"')")},onClick:e.onEditAvatar}),Object(n.jsxs)("div",{className:"user-info__data",children:[Object(n.jsx)("h1",{className:"user-info__name",children:t.name}),Object(n.jsx)("p",{className:"user-info__job",children:t.about})]}),Object(n.jsx)("button",{className:"button user-info__button",onClick:e.onAddPlace,children:"+"}),Object(n.jsx)("button",{className:"button edit__button",onClick:e.onEditProfile,children:"Edit"})]})})},j=a(6),_=a(7),h={url:"https://nomoreparties.co/cohort11",headers:{authorization:"e7c47a46-a800-41a0-9207-658ce4c95ce5","Content-Type":"application/json"}},b=new(function(){function e(t){Object(j.a)(this,e),this._url=t.url,this._headers=t.headers}return Object(_.a)(e,[{key:"getResult",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then(this.getResult)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then(this.getResult)}},{key:"patchUser",value:function(e,t){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this.getResult)}},{key:"postNewCard",value:function(e,t){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this.getResult)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this.getResult)}},{key:"likeCard",value:function(e,t){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:t?"DELETE":"PUT",headers:this._headers}).then(this.getResult)}},{key:"patchAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this.getResult)}}]),e}())(h);var m=function(e){var t=s.a.useContext(d),a=e.card.owner._id===t._id,c=e.card.likes.some((function(e){return e._id===t._id}));return Object(n.jsxs)("div",{className:"place-card",children:[Object(n.jsx)("div",{className:"place-card__image",style:{backgroundImage:"url(".concat(e.card.link,")")},onClick:function(){e.onClick(e.card)},children:a&&Object(n.jsx)("button",{className:"place-card__delete-icon",onClick:function(){e.onCardDelete(e.card)}})}),Object(n.jsxs)("div",{className:"place-card__description",children:[Object(n.jsx)("h3",{className:"place-card__name",children:e.card.name}),Object(n.jsxs)("div",{className:"place-card__like-group",children:[Object(n.jsx)("button",{className:"place-card__like-icon ".concat(c&&"place-card__like-icon_liked"),onClick:function(){e.onLike(e.card)}}),Object(n.jsx)("div",{className:"place-card__like-number",children:e.card.likes.length})]})]})]})};var f=function(e){var t=s.a.useContext(d),a=s.a.useState([]),c=Object(o.a)(a,2),r=c[0],i=c[1];function u(e){var a=e.likes.some((function(e){return e._id===t._id}));b.likeCard(e._id,a).then((function(t){var a=r.map((function(a){return a._id===e._id?t:a}));i(a)})).catch((function(e){return console.log(e)}))}return s.a.useEffect((function(){b.getInitialCards().then((function(e){i(e)}))})),Object(n.jsx)("div",{className:"places-list root__section",children:r.map((function(t){return Object(n.jsx)(m,{card:t,onClick:e.onCardClick,onLike:u,onCardDelete:e.onCardDelete},t._id)}))})},O=a.p+"static/media/close.8a65f75d.svg";var g=function(e){return Object(n.jsx)("div",{className:"popup ".concat(e.name,"__popup ").concat(e.isOpen&&"popup_is-opened"),children:Object(n.jsxs)("div",{className:"popup__content",children:[Object(n.jsx)("img",{src:O,alt:"",className:"popup__close",onClick:e.onClose}),Object(n.jsx)("h3",{className:"popup__title",children:e.title}),Object(n.jsx)("form",{className:"popup__form",name:e.name,noValidate:!0,children:e.children})]})})};var v=function(e){var t=s.a.useRef(),a=s.a.useState(!1),c=Object(o.a)(a,2),r=c[0],i=c[1],u=s.a.useState(!1),l=Object(o.a)(u,2),d=l[0],p=l[1],j=s.a.useState(""),_=Object(o.a)(j,2),h=_[0],b=_[1],m=s.a.useState(""),f=Object(o.a)(m,2),O=f[0],v=f[1],x=s.a.useState(!0),k=Object(o.a)(x,2),N=k[0],C=k[1];function y(e){var t=e.target.closest(".popup__form");t.checkValidity()||("name"===e.target.name&&(i(!0),b(e.target.validationMessage),C(!0)),"link"===e.target.name&&(p(!0),v(e.target.validationMessage),C(!0))),t.checkValidity()&&(i(!1),p(!1),b(""),v(""),C(!1))}return Object(n.jsx)(g,{isOpen:e.open,onClose:e.close,name:"new",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",onSubmit:function(e){e.preventDefault(),C(!0)},children:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{type:"text",id:"name",name:"name",className:"popup__input popup__input_type_name",required:!0,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",ref:t,onChange:y}),r&&Object(n.jsx)("span",{id:"name",className:"popup__error",children:h}),Object(n.jsx)("input",{type:"url",id:"link",name:"link",className:"popup__input popup__input_type_link-url",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",ref:t,onChange:y}),d&&Object(n.jsx)("span",{id:"link",className:"popup__error",children:O}),Object(n.jsx)("button",{type:"submit",className:"button popup__button popup__button_type_place",disabled:N,children:"+"})]})})};var x=function(e){var t=s.a.useRef(),a=s.a.useState(!1),c=Object(o.a)(a,2),r=c[0],i=c[1],u=s.a.useState(!1),l=Object(o.a)(u,2),d=l[0],p=l[1],j=s.a.useState(""),_=Object(o.a)(j,2),h=_[0],b=_[1],m=s.a.useState(""),f=Object(o.a)(m,2),O=f[0],v=f[1],x=s.a.useState(!0),k=Object(o.a)(x,2),N=k[0],C=k[1];function y(e){var t=e.target.closest(".popup__form");t.checkValidity()||("user"===e.target.name&&(i(!0),b(e.target.validationMessage),C(!0)),"job"===e.target.name&&(p(!0),v(e.target.validationMessage),C(!0))),t.checkValidity()&&(i(!1),p(!1),b(""),v(""),C(!1))}return Object(n.jsx)(g,{isOpen:e.open,onClose:e.close,name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",onSubmit:function(e){e.preventDefault(),C(!0)},children:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{type:"text",id:"user",name:"user",className:"popup__input popup__input_type_name",required:!0,placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"30",ref:t,onChange:y}),r&&Object(n.jsx)("span",{id:"user",className:"popup__error",children:h}),Object(n.jsx)("input",{type:"text",id:"job",name:"job",className:"popup__input popup__input_type_link-url",required:!0,placeholder:"\u041e \u0441\u0435\u0431\u0435",minLength:"2",maxLength:"30",ref:t,onChange:y}),d&&Object(n.jsx)("span",{id:"job",className:"popup__error",children:O}),Object(n.jsx)("button",{type:"submit",className:"button popup__button popup__button_type_user",disabled:N,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})};var k=function(e){return Object(n.jsx)("div",{className:"popup bigImage__popup ".concat(e.card.link&&"popup_is-opened"),children:Object(n.jsx)("div",{className:"popup__bg-image",style:{backgroundImage:"url(".concat(e.card.link,")")},children:Object(n.jsx)("img",{src:O,alt:"",className:"popup__close",onClick:e.close})})})};var N=function(e){var t=s.a.useRef(),a=s.a.useState(!1),c=Object(o.a)(a,2),r=c[0],i=c[1],u=s.a.useState(""),l=Object(o.a)(u,2),d=l[0],p=l[1],j=s.a.useState(!0),_=Object(o.a)(j,2),h=_[0],b=_[1];return Object(n.jsx)(g,{isOpen:e.open,onClose:e.close,name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",onSubmit:function(e){e.preventDefault(),b(!0)},children:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{type:"url",id:"urlAvatar",name:"urlAvatar",className:"popup__input popup__input_type_name",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",ref:t,onChange:function(e){var t=e.target.closest(".popup__form");t.checkValidity()||(i(!0),p(e.target.validationMessage),b(!0)),t.checkValidity()&&(i(!1),p(""),b(!1))}}),r&&Object(n.jsx)("span",{id:"urlAvatar",className:"popup__error",children:d}),Object(n.jsx)("button",{type:"submit",className:"button popup__button popup__button_type_avatar",disabled:h,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})};var C=function(){var e=s.a.useState(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],r=s.a.useState(!1),i=Object(o.a)(r,2),u=i[0],j=i[1],_=s.a.useState(!1),h=Object(o.a)(_,2),m=h[0],O=h[1],g=s.a.useState({}),C=Object(o.a)(g,2),y=C[0],S=C[1],E=s.a.useState({}),P=Object(o.a)(E,2),R=P[0],T=P[1];function A(){c(!1),j(!1),O(!1),S(!1)}return s.a.useEffect((function(){b.getUserInfo().then((function(e){T(e)}))})),Object(n.jsx)(d.Provider,{value:R,children:Object(n.jsxs)("div",{className:"root",children:[Object(n.jsx)(l,{}),Object(n.jsx)(p,{onEditAvatar:function(){c(!0)},onEditProfile:function(){j(!0)},onAddPlace:function(){O(!0)}}),Object(n.jsx)(f,{onCardClick:function(e){S(e)},onCardDelete:function(){}}),Object(n.jsx)(v,{open:m,close:A}),Object(n.jsx)(x,{open:u,close:A}),Object(n.jsx)(k,{card:y,close:A}),Object(n.jsx)(N,{open:a,close:A})]})})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(C,{})}),document.getElementById("root")),y()},4:function(e,t,a){}},[[13,1,2]]]);
//# sourceMappingURL=main.716368f8.chunk.js.map