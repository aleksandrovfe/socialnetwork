(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{116:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},152:function(e,t,a){e.exports=a(291)},157:function(e,t,a){},158:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){},165:function(e,t,a){},281:function(e,t,a){},282:function(e,t,a){},283:function(e,t,a){},284:function(e,t,a){},285:function(e,t,a){},286:function(e,t,a){},287:function(e,t,a){},288:function(e,t,a){},289:function(e,t,a){},290:function(e,t,a){},291:function(e,t,a){"use strict";a.r(t);var n,r=a(0),s=a.n(r),o=a(58),i=a.n(o),c=a(21),l=a(22),u=a(24),m=a(23),p=a(25),f=(a(157),a(31)),d=(a(158),a(10)),g=function(){return s.a.createElement("div",null,s.a.createElement("nav",{className:"navigation"},s.a.createElement(d.b,{className:"navigation__link",activeClassName:"active-link",to:"/profile"},"Profile"),s.a.createElement(d.b,{className:"navigation__link",activeClassName:"active-link",to:"/dialogs"},"Message"),s.a.createElement(d.b,{className:"navigation__link",to:""},"News"),s.a.createElement(d.b,{className:"navigation__link",to:""},"Music"),s.a.createElement(d.b,{className:"navigation__link",activeClassName:"active-link",to:"/find-users"},"Find Users"),s.a.createElement(d.b,{className:"navigation__link",to:""},"Settings")))},E=(a(163),a(164),a(8)),b=Object(E.b)((function(e){return{dialogs:e.dialogsReducer.DialogsData}}),null)((function(e){return e.dialogs.map((function(e){return s.a.createElement("div",{key:e.id},s.a.createElement(d.b,{to:"/dialogs/"+e.id,activeClassName:"dialogs__item--active",className:"dialogs__item"},e.name))}))})),_=(a(87),a(41)),h=a(11),v={DialogsData:[{name:"Alex",id:1},{name:"Masha",id:2},{name:"Pasha",id:3},{name:"Sasha",id:4}],MessagesData:[{message:"Hi",id:1},{message:'It"s me',id:2},{message:"HRU",id:3},{message:"BRB",id:4}]},N=(a(165),a(119)),w=a(120),O=Object(w.a)({form:"dialogAddMessageForm"})((function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement(N.a,{name:"messageBody",component:"textarea",className:"dialog__input",placeholder:"Enter message"}),s.a.createElement("button",{className:"btn btn__new-message"},"Send"))})),j=function(e){return s.a.createElement("div",null,e.MessagesData.map((function(e){return s.a.createElement("div",{key:e.message,className:"dialog__conv"},e.message)})),s.a.createElement(O,Object.assign({onSubmit:function(t){e.onSendMessageCLick(t.messageBody)}},e)))},k=Object(E.b)((function(e){return{MessagesData:e.dialogsReducer.MessagesData}}),{onSendMessageCLick:function(e){return{type:"SEND_MESSAGE",messageBody:e}}})(j),S=function(e){return{isAuth:e.authReducer.isAuth}},y=function(e){var t=function(t){function a(){return Object(c.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,t),Object(l.a)(a,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(f.a,{to:"/login"})}}]),a}(s.a.Component);return Object(E.b)(S)(t)},C=a(6),T=Object(C.d)(y)((function(){return s.a.createElement("div",{className:"dialogs"},s.a.createElement("div",{className:"dialogs__items-list"},s.a.createElement(b,null)),s.a.createElement("div",{className:"dialogs__messages-list"},s.a.createElement(k,null)))})),P=a(9),U=a.n(P),F=a(17),D=a(125),A="https://social-network.samuraijs.com/api/1.0/",R=D.create({withCredentials:!0,headers:{"API-KEY":"f7009aa5-0463-4d80-85c7-bde16051bd70"}}),I=function(e,t){return R.get("".concat(A,"users?page=").concat(e,"&count=").concat(t)).then((function(e){return e.data}))},x=function(e){return R.post("".concat(A,"follow/").concat(e))},M=function(e){return R.delete("".concat(A,"follow/").concat(e))},L=function(e){return R.get("".concat(A,"profile/").concat(e))},q=function(e){return R.get("".concat(A,"profile/status/").concat(e))},z=function(e){return R.put("".concat(A,"profile/status"),{status:e})},G=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return R.post("".concat(A,"auth/login"),{email:e,password:t,rememberMe:a})},B={UsersData:[],pageSize:10,totalCount:0,portionSize:10,currentPage:1,isFatching:!1,isFollowingProcess:[]},H=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},W=function(e){return{type:"TOGGLE_IS_FETCHING",isFatching:e}},K=function(e,t){return{type:"TOGGLE_IS_FETCHING",isFollowing:e,userId:t}},J=(a(281),a(49)),V=(a(282),function(e){for(var t=[],a=Math.ceil(e.totalCount/e.pageSize),n=1;n<=a;n++)t.push(n);var o=Math.ceil(a/e.portionSize),i=Object(r.useState)(1),c=Object(J.a)(i,2),l=c[0],u=c[1],m=(l-1)*e.portionSize+1,p=l*e.portionSize;return s.a.createElement("div",{className:"pagination__list"},l>1?s.a.createElement("button",{onClick:function(){return u(l-1)},className:"pagination__list-swipe-btn"},"prev"):s.a.createElement("button",{className:"pagination__list-swipe-btn--disable"},"prev"),s.a.createElement("div",{className:"pagination__list-wrapper"},t.filter((function(e){return e>=m&&e<=p})).map((function(t){return s.a.createElement("button",{key:t,onClick:function(){e.onChangePage(t)},className:t===e.currentPage?"pagination__item-active":"pagination__item"},t)}))),o>l?s.a.createElement("button",{onClick:function(){return u(l+1)},className:"pagination__list-swipe-btn"},"next"):s.a.createElement("button",{className:"pagination__list-swipe-btn--disable"},"next"))}),Y=(a(283),function(){return s.a.createElement("section",{className:"animation"},s.a.createElement("div",{className:"cssload-loader"},s.a.createElement("div",{className:"cssload-top"},s.a.createElement("div",{className:"cssload-square"},s.a.createElement("div",{className:"cssload-square"},s.a.createElement("div",{className:"cssload-square"},s.a.createElement("div",{className:"cssload-square"},s.a.createElement("div",{className:"cssload-square"},s.a.createElement("div",{className:"cssload-square"}))))))),s.a.createElement("div",{className:"cssload-bottom"},s.a.createElement("div",{className:"cssload-square"},s.a.createElement("div",{className:"cssload-square"},s.a.createElement("div",{className:"cssload-square"},s.a.createElement("div",{className:"cssload-square"},s.a.createElement("div",{className:"cssload-square"},s.a.createElement("div",{className:"cssload-square"}))))))),s.a.createElement("div",{className:"cssload-left"},s.a.createElement("div",{className:"cssload-square"},s.a.createElement("div",{className:"cssload-square"},s.a.createElement("div",{className:"cssload-square"},s.a.createElement("div",{className:"cssload-square"},s.a.createElement("div",{className:"cssload-square"},s.a.createElement("div",{className:"cssload-square"}))))))),s.a.createElement("div",{className:"cssload-right"},s.a.createElement("div",{className:"cssload-square"},s.a.createElement("div",{className:"cssload-square"},s.a.createElement("div",{className:"cssload-square"},s.a.createElement("div",{className:"cssload-square"},s.a.createElement("div",{className:"cssload-square"},s.a.createElement("div",{className:"cssload-square"})))))))))}),Z=function(e){return s.a.createElement("div",{className:"users-list"},s.a.createElement(V,e),e.isFatching?s.a.createElement(Y,null):e.UsersData.map((function(t){return s.a.createElement("div",{key:t.id,className:"user"},s.a.createElement("div",{className:"user__avatar-container"},s.a.createElement(d.b,{to:"/profile/"+t.id},s.a.createElement("img",{className:"user__avatar",src:t.photos.large?t.photos.large:"https://images.pexels.com/photos/3249412/pexels-photo-3249412.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",alt:""})),t.followed?s.a.createElement("button",{onClick:function(){return e.unfollow(t.id)},className:e.isFollowingProcess.some((function(e){return e===t.id}))?"btn user__unfollow-btn-disable":"btn user__unfollow-btn"},e.isFollowingProcess.some((function(e){return e===t.id}))?"Unfollowing":"Unfollow"):s.a.createElement("button",{onClick:function(){return e.follow(t.id)},className:e.isFollowingProcess.some((function(e){return e===t.id}))?"btn user__follow-btn-disable":"btn user__follow-btn"},e.isFollowingProcess.some((function(e){return e===t.id}))?"Following":"Follow")),s.a.createElement("div",{className:"user__description"},s.a.createElement("h3",{className:"user__description-item"},t.name)))})))},Q=function(e){return e.findUsersReducer.UsersData},X=function(e){return e.findUsersReducer.pageSize},$=function(e){return e.findUsersReducer.totalCount},ee=function(e){return e.findUsersReducer.currentPage},te=function(e){return e.findUsersReducer.isFatching},ae=function(e){return e.findUsersReducer.isFollowingProcess},ne=function(e){return e.findUsersReducer.portionSize},re=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).onChangePage=function(e){a.props.getUsersThunkCreator(e,a.props.pageSize)},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(Z,{totalCount:this.props.totalCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,UsersData:this.props.UsersData,unfollowClick:this.props.unfollowClick,followClick:this.props.followClick,onChangePage:this.onChangePage,isFollowingProcess:this.props.isFollowingProcess,follow:this.props.follow,unfollow:this.props.unfollow,portionSize:this.props.portionSize,isFatching:this.props.isFatching}))}}]),t}(s.a.Component),se=Object(C.d)(y,Object(E.b)((function(e){return{UsersData:Q(e),pageSize:X(e),totalCount:$(e),portionSize:ne(e),currentPage:ee(e),isFatching:te(e),isFollowingProcess:ae(e)}}),{setCurrentPage:H,getUsersThunkCreator:function(e,t){return function(){var a=Object(F.a)(U.a.mark((function a(n){var r;return U.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(W(!0)),n(H(e)),a.next=4,I(e,t);case 4:r=a.sent,n({type:"SET_USERS",users:r.items}),n({type:"SET_ITEMS_AMOUNT",totalCount:r.totalCount}),n(W(!1));case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},follow:function(e){return function(){var t=Object(F.a)(U.a.mark((function t(a){return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(K(!0,e)),t.next=3,x(e);case 3:0===t.sent.data.resultCode&&a({type:"FOLLOW",userId:e}),a(K(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(F.a)(U.a.mark((function t(a){return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(K(!0,e)),t.next=3,M(e);case 3:0===t.sent.data.resultCode&&a({type:"UNFOLLOW",userId:e}),a(K(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))(re),oe=(a(116),a(284),a(285),function(e){Object(r.useEffect)((function(){u(e.status)}),[e.status]);var t=Object(r.useState)(!1),a=Object(J.a)(t,2),n=a[0],o=a[1],i=Object(r.useState)(e.status),c=Object(J.a)(i,2),l=c[0],u=c[1];return s.a.createElement("div",{className:"personal-information__item personal-information__item-status"},n?s.a.createElement("input",{onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,value:l,onBlur:function(){o(!1),e.updateStatusThunk(l)},className:"status__input",type:"text"}):s.a.createElement("div",{className:"status__text",onDoubleClick:function(){o(!0)}},l||"-----------"))}),ie=function(e){return s.a.createElement("div",null,s.a.createElement("div",{className:"main__profile-img"},s.a.createElement("img",{className:"main__img",src:"https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",alt:""})),s.a.createElement("div",{className:"description"},s.a.createElement("div",{className:"avatar"},s.a.createElement("img",{className:"avatar__img",src:e.profile.photos.large?e.profile.photos.large:"https://images.pexels.com/photos/3249412/pexels-photo-3249412.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",alt:""})),s.a.createElement("div",{className:"personal-information"},s.a.createElement("div",{className:"personal-information__items-presents"},s.a.createElement("p",{className:"personal-information__item personal-information__name"},e.profile.fullName),s.a.createElement("p",{className:"personal-information__item personal-information__item-loking-for-job"},"Looking for a job - ",e.profile.lookingForAJob?"Yes":"No"),s.a.createElement("p",{className:"personal-information__item personal-information__item-loking-for-job"},e.profile.lookingForAJobDescription)),s.a.createElement(oe,e),s.a.createElement("div",{className:"personal-information__items-list-contacts"},s.a.createElement("p",{className:e.profile.contacts.facebook?"personal-information__item-present":"personal-information__item-absent"},s.a.createElement("b",null,"Facebook")," - ",e.profile.contacts.facebook?e.profile.contacts.facebook:"absent"),s.a.createElement("p",{className:e.profile.contacts.website?"personal-information__item-present":"personal-information__item-absent"},s.a.createElement("b",null,"Website")," - ",e.profile.contacts.website?e.profile.contacts.website:"absent"),s.a.createElement("p",{className:e.profile.contacts.VK?"personal-information__item-present":"personal-information__item-absent"},s.a.createElement("b",null,"VK")," - ",e.profile.contacts.VK?e.profile.contacts.VK:"absent"),s.a.createElement("p",{className:e.profile.contacts.twitter?"personal-information__item-present":"personal-information__item-absent"},s.a.createElement("b",null,"Twitter")," - ",e.profile.contacts.twitter?e.profile.contacts.twitter:"absent"),s.a.createElement("p",{className:e.profile.contacts.instagram?"personal-information__item-present":"personal-information__item-absent"},s.a.createElement("b",null,"Instagram")," - ",e.profile.contacts.instagram?e.profile.contacts.instagram:"absent"),s.a.createElement("p",{className:e.profile.contacts.youtube?"personal-information__item-present":"personal-information__item-absent"},s.a.createElement("b",null,"YouTube")," - ",e.profile.contacts.youtube?e.profile.contacts.youtube:"absent"),s.a.createElement("p",{className:e.profile.contacts.github?"personal-information__item-present":"personal-information__item-absent"},s.a.createElement("b",null,"GitHub")," - ",e.profile.contacts.github?e.profile.contacts.github:"absent"),s.a.createElement("p",{className:e.profile.contacts.mainLink?"personal-information__item-present":"personal-information__item-absent"},s.a.createElement("b",null,"Main Link")," - ",e.profile.contacts.mainLink?e.profile.contacts.mainLink:"absent")))))},ce=(a(117),{ProfileData:[{post:"Hi"},{post:"How Are U?"},{post:"Where are you from?"},{post:"Happy!"}],profile:null,status:null}),le=function(e){return{type:"SET_USER_STATUS",status:e}},ue=(a(286),function(e){return e.data.map((function(e){return s.a.createElement("div",{key:e.post},s.a.createElement("div",{className:"post-item"},e.post),s.a.createElement("span",{className:"post-item__likes"},"Likes - 200"),s.a.createElement("div",{className:"btn btn__like"},"Like"))}))}),me=(a(287),function(e){if(!e)return"Field is required"}),pe=a(84),fe=(a(288),function(e){var t=e.input,a=e.meta,n=Object(pe.a)(e,["input","meta"]),r=a.touched&&a.error;return s.a.createElement("div",null,s.a.createElement("textarea",Object.assign({},t,n)),r&&s.a.createElement("div",{className:"control-error"},a.error))}),de=function(e){var t=e.input,a=e.meta,n=Object(pe.a)(e,["input","meta"]),r=a.touched&&a.error;return s.a.createElement("div",null,s.a.createElement("input",Object.assign({},t,n)),r&&s.a.createElement("div",{className:"control-error"},a.error))},ge=(n=140,function(e){if(e.length>n)return"Max length ".concat(n," simbols")}),Ee=Object(w.a)({form:"AddNewPost"})((function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit,className:"new-post"},s.a.createElement(N.a,{name:"newPostBody",component:fe,validate:[me,ge],className:"new-post__text-area",placeholder:"Write post"}),s.a.createElement("button",{className:"btn btn__new-post"},"New Post"))})),be=s.a.memo((function(e){return s.a.createElement("div",{className:"main__posts"},s.a.createElement(Ee,{onSubmit:function(t){e.addPost(t.newPostBody)}}),s.a.createElement("div",{className:"posts-list"},s.a.createElement(ue,{data:e.PostData})))})),_e=Object(E.b)((function(e){return{PostData:e.profileReducer.ProfileData}}),{addPost:function(e){return{type:"ADD_POST",messageBody:e}}})(be),he=function(e){return e.profile?s.a.createElement("div",{className:"profile"},s.a.createElement(ie,e),s.a.createElement(_e,null)):s.a.createElement(Y,null)},ve=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId),this.props.getProfileThunk(e),this.props.getStatusThunk(e)}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(he,this.props))}}]),t}(s.a.Component),Ne=Object(C.d)(y,f.f,Object(E.b)((function(e){return{profile:e.profileReducer.profile,status:e.profileReducer.status,authorizedUserId:e.authReducer.userId,isAuth:e.authReducer.isAuth}}),{getProfileThunk:function(e){return function(){var t=Object(F.a)(U.a.mark((function t(a){var n;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L(e);case 2:n=t.sent,a({type:"SET_USER_PROFILE",profile:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatusThunk:function(e){return function(){var t=Object(F.a)(U.a.mark((function t(a){var n;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q(e);case 2:n=t.sent,a(le(n.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatusThunk:function(e){return function(){var t=Object(F.a)(U.a.mark((function t(a){return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z(e);case 2:0===t.sent.data.resultCode&&a(le(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))(ve),we=(a(118),function(e){return s.a.createElement("header",{className:"header"},s.a.createElement("p",{className:"header__login-name"},e.login),s.a.createElement("p",{className:"header__sign"},"social network"),s.a.createElement("div",{className:"header__login-btn"},e.isAuth?s.a.createElement(d.b,{onClick:e.logoutThunk,className:"header__login-link",to:"/login"},"Logout"):s.a.createElement(d.b,{className:"header__login-link",to:"/login"},"Login")))}),Oe=a(36),je={userId:null,email:null,login:null,isAuth:!1},ke=function(e,t,a,n){return{type:"SET_AUTH_USER_DATA",payload:{userId:e,email:t,login:a,isAuth:n}}},Se=function(){return function(){var e=Object(F.a)(U.a.mark((function e(t){var a,n,r,s,o;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.get("".concat(A,"auth/me")).then((function(e){return e.data}));case 2:a=e.sent,n=a.data,r=n.id,s=n.email,o=n.login,0===a.resultCode&&t(ke(r,s,o,!0));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ye=function(){return function(){var e=Object(F.a)(U.a.mark((function e(t){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.delete("".concat(A,"auth/login"));case 2:0===e.sent.data.resultCode&&t(ke(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Ce=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(we,this.props)}}]),t}(s.a.Component),Te=Object(E.b)((function(e){return{isAuth:e.authReducer.isAuth,login:e.authReducer.login}}),{logoutThunk:ye})(Ce),Pe=(a(289),a(290),Object(w.a)({form:"login"})((function(e){return s.a.createElement("div",null,s.a.createElement("h5",{className:"login__sign"},"To register / log in to the social network, you need to go to the ",s.a.createElement("a",{className:"login__link",href:"https://social-network.samuraijs.com/login",title:"https://social-network.samuraijs.com/login"},"registration page")," , register / log in and go back"),s.a.createElement("form",{onSubmit:e.handleSubmit,className:"login-form"},s.a.createElement("div",{className:"login-form__item"},s.a.createElement(N.a,{validate:[me],component:de,name:"email",className:"login-form__item-input",placeholder:"Email"})),s.a.createElement("div",{className:"login-form__item"},s.a.createElement(N.a,{validate:[me],component:de,type:"password",name:"password",className:"login-form__item-input",placeholder:"Password"})),s.a.createElement("div",{className:"login-form__item login-form__checkbox-wrapper"},s.a.createElement(N.a,{component:de,name:"rememberMe",id:"rememberMe",className:"login-form__item-checkbox",type:"checkbox"}),s.a.createElement("label",{className:"login-form__item-label",htmlFor:"rememberMe"}," Remember me")),s.a.createElement("div",{className:"login-form__item"},s.a.createElement("button",{className:"btn login-form__item-btn"},"Login")),e.error?s.a.createElement("div",{className:"login-form__item-error"},e.error):null))}))),Ue=Object(E.b)((function(e){return{isAuth:e.authReducer.isAuth}}),{loginThunk:function(e,t,a){return function(){var n=Object(F.a)(U.a.mark((function n(r){var s,o;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,G(e,t,a);case 2:0===(s=n.sent).data.resultCode?r(Se()):(o=s.data.messages.length>0?s.data.messages[0]:"Some Error",r(Object(Oe.a)("login",{_error:o})));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},logoutThunk:ye})((function(e){return e.isAuth?s.a.createElement(f.a,{to:"/profile"}):s.a.createElement("div",null,s.a.createElement(Pe,{onSubmit:function(t){e.loginThunk(t.email,t.password,t.rememberMe)}}))})),Fe={initialized:!1},De=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?s.a.createElement("div",{className:"app-wrapper"},s.a.createElement(Te,null),s.a.createElement(g,null),s.a.createElement("div",{className:"app-wrapper-content"},s.a.createElement(f.b,{path:"/profile/:userId?",render:function(){return s.a.createElement(Ne,null)}}),s.a.createElement(f.b,{path:"/dialogs",render:function(){return s.a.createElement(T,null)}}),s.a.createElement(f.b,{path:"/find-users",render:function(){return s.a.createElement(se,null)}}),s.a.createElement(f.b,{path:"/login",render:function(){return s.a.createElement(Ue,null)}}))):s.a.createElement(Y,null)}}]),t}(s.a.Component),Ae=Object(C.d)(f.f,Object(E.b)((function(e){return{initialized:e.appReducer.initialized}}),{initializeApp:function(){return function(e){var t=e(Se());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(De),Re=a(126),Ie=a(121),xe=Object(C.c)({profileReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":return Object(h.a)({},e,{ProfileData:[].concat(Object(_.a)(e.ProfileData),[{post:t.messageBody}])});case"SET_USER_PROFILE":return Object(h.a)({},e,{profile:t.profile});case"SET_USER_STATUS":return Object(h.a)({},e,{status:t.status});default:return e}},dialogsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":return Object(h.a)({},e,{MessagesData:[].concat(Object(_.a)(e.MessagesData),[{message:t.messageBody,id:6}])});default:return e}},findUsersReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(h.a)({},e,{UsersData:e.UsersData.map((function(e){return e.id===t.userId?Object(h.a)({},e,{followed:!0}):e}))});case"UNFOLLOW":return Object(h.a)({},e,{UsersData:e.UsersData.map((function(e){return e.id===t.userId?Object(h.a)({},e,{followed:!1}):e}))});case"SET_USERS":return Object(h.a)({},e,{UsersData:t.users});case"SET_CURRENT_PAGE":return Object(h.a)({},e,{currentPage:t.currentPage});case"SET_ITEMS_AMOUNT":return Object(h.a)({},e,{totalCount:t.totalCount});case"TOGGLE_IS_FETCHING":return Object(h.a)({},e,{isFatching:t.isFatching});case"TOGGLE_IS_FETCHING":return Object(h.a)({},e,{isFollowingProcess:t.isFollowing?[].concat(Object(_.a)(e.isFollowingProcess),[t.userId]):e.isFollowingProcess.filter((function(e){return e!==t.userId}))});default:return e}},authReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTH_USER_DATA":return Object(h.a)({},e,{},t.payload);default:return e}},form:Ie.a,appReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(h.a)({},e,{initialized:!0});default:return e}}}),Me=Object(C.e)(xe,Object(C.a)(Re.a));i.a.render(s.a.createElement(d.a,{basename:"/socialnetwork"},s.a.createElement(E.a,{store:Me},s.a.createElement(Ae,null))),document.getElementById("root"))},87:function(e,t,a){}},[[152,1,2]]]);
//# sourceMappingURL=main.b2271015.chunk.js.map