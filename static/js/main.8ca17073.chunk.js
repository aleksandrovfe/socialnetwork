(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{117:function(e,a,t){},118:function(e,a,t){},119:function(e,a,t){},153:function(e,a,t){e.exports=t(292)},158:function(e,a,t){},159:function(e,a,t){},164:function(e,a,t){},165:function(e,a,t){},166:function(e,a,t){},282:function(e,a,t){},283:function(e,a,t){},284:function(e,a,t){},285:function(e,a,t){},286:function(e,a,t){},287:function(e,a,t){},288:function(e,a,t){},289:function(e,a,t){},290:function(e,a,t){},291:function(e,a,t){},292:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(58),s=t.n(o),i=t(25),l=t(26),c=t(30),m=t(28),u=(t(158),t(32)),p=(t(159),t(7)),f=t(11),d=Object(p.b)((function(e){return{isAuth:e.authReducer.isAuth}}),{})((function(e){return r.a.createElement("div",null,e.isAuth?r.a.createElement("nav",{className:"navigation"},r.a.createElement(f.b,{className:"navigation__link",activeClassName:"active-link",to:"/profile"},"Profile"),r.a.createElement(f.b,{className:"navigation__link",activeClassName:"active-link",to:"/dialogs"},"Message"),r.a.createElement(f.b,{className:"navigation__link",activeClassName:"active-link",to:"/find-users"},"Find Users")):"")})),_=(t(164),t(165),Object(p.b)((function(e){return{dialogs:e.dialogsReducer.DialogsData}}),null)((function(e){return e.dialogs.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(f.b,{to:"/dialogs/"+e.id,activeClassName:"dialogs__item--active",className:"dialogs__item-wrapper"},r.a.createElement("div",{className:"dialogs__item"},e.name),r.a.createElement("div",{className:"dialogs__item-last-message"},"Hello")))}))}))),b=(t(88),t(29)),E=t(10),g={DialogsData:[{name:"Alex",id:1},{name:"Masha",id:2},{name:"Pasha",id:3},{name:"Sasha",id:4}],MessagesData:[{message:"Hi",id:1},{message:"How are you today?",id:2},{message:"Happy new Year",id:3},{message:"Happy Birthday ",id:4}]},h=(t(166),t(120)),v=t(121),N=Object(v.a)({form:"dialogAddMessageForm"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit,className:"add-message__wrapper"},r.a.createElement(h.a,{name:"messageBody",component:"textarea",className:"dialog__input",placeholder:"Enter message"}),r.a.createElement("button",{className:"btn btn__new-message"},"Send"))})),k=function(e){return r.a.createElement("div",{className:"dialog__wrapper"},r.a.createElement("div",{className:"dialog__background"},e.MessagesData.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("p",{className:"dialog__user-name"},"Alex"),r.a.createElement("p",{key:e.message,className:"dialog__message"},e.message))}))),r.a.createElement(N,Object.assign({onSubmit:function(a){e.onSendMessageCLick(a.messageBody)}},e)))},w=Object(p.b)((function(e){return{MessagesData:e.dialogsReducer.MessagesData}}),{onSendMessageCLick:function(e){return{type:"SEND_MESSAGE",messageBody:e}}})(k),O=function(e){return{isAuth:e.authReducer.isAuth}},j=function(e){var a=function(a){Object(c.a)(n,a);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return this.props.isAuth?r.a.createElement(e,this.props):r.a.createElement(u.a,{to:"/login"})}}]),n}(r.a.Component);return Object(p.b)(O)(a)},S=t(9),y=t.n(S),T=t(13),A=t(126),C="https://social-network.samuraijs.com/api/1.0/",F=A.create({withCredentials:!0,headers:{"API-KEY":"e7f5a643-78d7-4edd-b331-1591701b245f"}}),P=function(e,a){return F.get("".concat(C,"users?page=").concat(e,"&count=").concat(a)).then((function(e){return e.data}))},U=function(e){return F.post("".concat(C,"follow/").concat(e))},x=function(e){return F.delete("".concat(C,"follow/").concat(e))},I=function(e){return F.get("".concat(C,"profile/").concat(e))},D=function(e){return F.get("".concat(C,"profile/status/").concat(e))},R=function(e){return F.put("".concat(C,"profile/status"),{status:e})},M=function(e,a){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return F.post("".concat(C,"auth/login"),{email:e,password:a,rememberMe:t})},L=function(e){var a=new FormData;return a.append("image",e),F.put("".concat(C,"profile/photo"),a,{headers:{"Content-type":"multipart/form-data"}})},z={ProfileData:[{post:"Hi",id:1},{post:"How Are U?",id:2},{post:"Where are you from?",id:3},{post:"Happy!",id:4}],profile:null,status:null,userAvatar:""},q=function(e){return{type:"SET_USER_STATUS",status:e}},G=function(e){return{type:"SAVE_PHOTO",file:e}},H=function(e){return function(){var a=Object(T.a)(y.a.mark((function a(t){var n;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,I(e);case 2:n=a.sent,t({type:"SET_USER_PROFILE",profile:n.data});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},B=function(e){return function(){var a=Object(T.a)(y.a.mark((function a(t){var n;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,I(e);case 2:n=a.sent,t({type:"GET_USER_AVATAR",avatar:n.data.photos.large});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},J=t(6),W=Object(J.d)(j,Object(p.b)((function(e){return{authorizedUserId:e.authReducer.userId}}),{getUserAvatarThunk:B}))((function(e){return Object(n.useEffect)((function(){e.getUserAvatarThunk(e.authorizedUserId)}),[]),r.a.createElement("div",{className:"dialogs"},r.a.createElement("div",null,r.a.createElement(_,null)),r.a.createElement("div",null,r.a.createElement(w,null)))})),V={UsersData:[],pageSize:6,totalCount:0,portionSize:10,currentPage:1,isFatching:!1,isFollowingProcess:[]},Y=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},Z=function(e){return{type:"TOGGLE_IS_FETCHING",isFatching:e}},K=function(e,a){return{type:"TOGGLE_IS_FETCHING",isFollowing:e,userId:a}},Q=(t(282),t(19)),X=(t(283),function(e){for(var a=e.totalCount,t=e.pageSize,o=e.portionSize,s=void 0===o?10:o,i=e.onChangePage,l=e.currentPage,c=[],m=Math.ceil(a/t),u=1;u<=m;u++)c.push(u);var p=Math.ceil(m/s),f=Object(n.useState)(1),d=Object(Q.a)(f,2),_=d[0],b=d[1],E=(_-1)*s+1,g=_*s;return r.a.createElement("div",{className:"pagination__list"},_>1?r.a.createElement("button",{onClick:function(){return b(_-1)},className:"pagination__list-swipe-btn-prev"},"prev"):r.a.createElement("button",{className:"pagination__list-swipe-btn-prev--disable"},"prev"),r.a.createElement("div",{className:"pagination__list-wrapper"},c.filter((function(e){return e>=E&&e<=g})).map((function(e){return r.a.createElement("button",{key:e,onClick:function(){i(e)},className:e===l?"pagination__item-active":"pagination__item"},e)}))),p>_?r.a.createElement("button",{onClick:function(){return b(_+1)},className:"pagination__list-swipe-btn-next"},"next"):r.a.createElement("button",{className:"pagination__list-swipe-btn-next--disable"},"next"))}),$=(t(284),function(){return r.a.createElement("section",{className:"animation"},r.a.createElement("div",{className:"cssload-loader"},r.a.createElement("div",{className:"cssload-top"},r.a.createElement("div",{className:"cssload-square"},r.a.createElement("div",{className:"cssload-square"},r.a.createElement("div",{className:"cssload-square"},r.a.createElement("div",{className:"cssload-square"},r.a.createElement("div",{className:"cssload-square"},r.a.createElement("div",{className:"cssload-square"}))))))),r.a.createElement("div",{className:"cssload-bottom"},r.a.createElement("div",{className:"cssload-square"},r.a.createElement("div",{className:"cssload-square"},r.a.createElement("div",{className:"cssload-square"},r.a.createElement("div",{className:"cssload-square"},r.a.createElement("div",{className:"cssload-square"},r.a.createElement("div",{className:"cssload-square"}))))))),r.a.createElement("div",{className:"cssload-left"},r.a.createElement("div",{className:"cssload-square"},r.a.createElement("div",{className:"cssload-square"},r.a.createElement("div",{className:"cssload-square"},r.a.createElement("div",{className:"cssload-square"},r.a.createElement("div",{className:"cssload-square"},r.a.createElement("div",{className:"cssload-square"}))))))),r.a.createElement("div",{className:"cssload-right"},r.a.createElement("div",{className:"cssload-square"},r.a.createElement("div",{className:"cssload-square"},r.a.createElement("div",{className:"cssload-square"},r.a.createElement("div",{className:"cssload-square"},r.a.createElement("div",{className:"cssload-square"},r.a.createElement("div",{className:"cssload-square"})))))))))}),ee=function(e){var a=e.isFatching,t=e.UsersData,n=e.unfollow,o=e.follow,s=e.isFollowingProcess,i=e.totalCount,l=e.pageSize,c=e.onChangePage,m=e.currentPage;return a?r.a.createElement($,null):r.a.createElement("div",{className:"users-list"},t.map((function(e){return r.a.createElement("div",{key:e.id,className:"user"},r.a.createElement(f.b,{to:"/profile/"+e.id},r.a.createElement("img",{className:"user__avatar",src:e.photos.large?e.photos.large:"https://m2bob-forum.net/wcf/images/avatars/3e/2720-3e546be0b0701e0cb670fa2f4fcb053d4f7e1ba5.jpg",alt:""})),r.a.createElement("div",{className:"user__description"},r.a.createElement("h3",{className:"user__description-item"},e.name),e.status&&r.a.createElement("p",{className:"user__description-item-status"},e.status)),e.followed?r.a.createElement("button",{onClick:function(){return n(e.id)},className:s.some((function(a){return a===e.id}))?"btn user__unfollow-btn-disable":"btn user__unfollow-btn"},s.some((function(a){return a===e.id}))?"Unfollowing":"Unfollow"):r.a.createElement("button",{onClick:function(){return o(e.id)},className:s.some((function(a){return a===e.id}))?"btn user__follow-btn-disable":"btn user__follow-btn"},s.some((function(a){return a===e.id}))?"Following":"Follow"))})),r.a.createElement(X,{totalCount:i,pageSize:l,onChangePage:c,currentPage:m}))},ae=function(e){return e.findUsersReducer.UsersData},te=function(e){return e.findUsersReducer.pageSize},ne=function(e){return e.findUsersReducer.totalCount},re=function(e){return e.findUsersReducer.currentPage},oe=function(e){return e.findUsersReducer.isFatching},se=function(e){return e.findUsersReducer.isFollowingProcess},ie=function(e){return e.authReducer.userId},le=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).onChangePage=function(a){e.props.getUsersThunkCreator(a,e.props.pageSize)},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize),this.props.getUserAvatarThunk(this.props.authorizedUserId)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ee,{isFatching:this.props.isFetching,UsersData:this.props.UsersData,unfollow:this.props.unfollow,follow:this.props.follow,isFollowingProcess:this.props.isFollowingProcess,totalCount:this.props.totalCount,pageSize:this.props.pageSize,onChangePage:this.onChangePage,currentPage:this.props.currentPage}))}}]),t}(r.a.Component),ce=Object(J.d)(j,Object(p.b)((function(e){return{UsersData:ae(e),pageSize:te(e),totalCount:ne(e),currentPage:re(e),isFetching:oe(e),isFollowingProcess:se(e),authorizedUserId:ie(e)}}),{setCurrentPage:Y,getUsersThunkCreator:function(e,a){return function(){var t=Object(T.a)(y.a.mark((function t(n){var r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Z(!0)),n(Y(e)),t.next=4,P(e,a);case 4:r=t.sent,n({type:"SET_USERS",users:r.items}),n({type:"SET_ITEMS_AMOUNT",totalCount:r.totalCount}),n(Z(!1));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},follow:function(e){return function(){var a=Object(T.a)(y.a.mark((function a(t){return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t(K(!0,e)),a.next=3,U(e);case 3:0===a.sent.data.resultCode&&t({type:"FOLLOW",userId:e}),t(K(!1,e));case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},unfollow:function(e){return function(){var a=Object(T.a)(y.a.mark((function a(t){return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t(K(!0,e)),a.next=3,x(e);case 3:0===a.sent.data.resultCode&&t({type:"UNFOLLOW",userId:e}),t(K(!1,e));case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},getUserAvatarThunk:B}))(le),me=(t(117),t(285),t(286),function(e){Object(n.useEffect)((function(){m(e.status)}),[e.status]);var a=Object(n.useState)(!1),t=Object(Q.a)(a,2),o=t[0],s=t[1],i=Object(n.useState)(e.status),l=Object(Q.a)(i,2),c=l[0],m=l[1];return r.a.createElement("div",{className:"personal-information__item personal-information__item-status"},o?e.isOwner?r.a.createElement("input",{onChange:function(e){m(e.currentTarget.value)},autoFocus:!0,value:c,onBlur:function(){s(!1),e.updateStatusThunk(c)},className:"status__input",type:"text"}):"":e.isOwner?r.a.createElement("div",{className:"status__text",onDoubleClick:function(){s(!0)}},c||"Double click to change status..."):r.a.createElement("div",{className:"status__text"},c||"My status could be here..."))}),ue=t(85),pe=(t(287),function(e){var a=e.input,t=(e.meta,Object(ue.a)(e,["input","meta"]));return r.a.createElement("div",null,r.a.createElement("textarea",Object.assign({},a,t)))}),fe=function(e){var a=e.input,t=e.meta,n=Object(ue.a)(e,["input","meta"]),o=t.touched&&t.error;return o?r.a.createElement("div",{className:"controlled-input__error"},r.a.createElement("input",Object.assign({},a,n)),o&&r.a.createElement("div",{className:"controlled-error"},t.error)):r.a.createElement("div",{className:"controlled-input"},r.a.createElement("input",Object.assign({},a,n)))},de=Object(v.a)({form:"edit-profile"})((function(e){var a=e.handleSubmit,t=Object(n.useState)(!0),o=Object(Q.a)(t,2),s=o[0],i=o[1];return r.a.createElement("form",{onSubmit:a,className:"personal-information__form"},r.a.createElement("div",{className:"personal-information__background"}),r.a.createElement("div",{className:"personal-information__form-wrapper"},r.a.createElement("div",{className:"personal-information__form-field"},r.a.createElement("label",{htmlFor:"form-name",className:"personal-information__form-label"},"Name and surname"),r.a.createElement(h.a,{id:"form-name",className:"personal-information__input",placeholder:"Name",name:"fullName",component:fe})),r.a.createElement("div",{className:"personal-information__form-field"},r.a.createElement("label",{htmlFor:"form-skills",className:"personal-information__form-label"},"Skills"),r.a.createElement(h.a,{maxlength:"100",id:"form-skills",className:"personal-information__input",placeholder:"looking For A Job Description",name:"lookingForAJobDescription",component:fe})),r.a.createElement("div",{className:"personal-information__form-field"},r.a.createElement(h.a,{id:"form-lookingForAJob",className:"personal-information__checbox",type:"checkbox",name:"lookingForAJob",component:fe}),r.a.createElement("label",{onClick:function(){i(!s)},htmlFor:"form-lookingForAJob",className:s?"personal-information__form-label--not-checked":"personal-information__form-label--checked"},"I am looking for a job")),r.a.createElement("div",{className:"personal-information__form-field"},r.a.createElement("label",{htmlFor:"form-aboutMe",className:"personal-information__form-label"},"About me"),r.a.createElement(h.a,{maxlength:"150",id:"form-aboutMe",className:"personal-information__text-area",placeholder:"Write about yourself",name:"aboutMe",component:pe})),r.a.createElement("div",{className:"personal-information__form-field"},r.a.createElement("label",{htmlFor:"form-facebook",className:"personal-information__form-label"},"Facebook"),r.a.createElement(h.a,{id:"form-facebook",className:"personal-information__input",placeholder:"Name",name:"contacts.facebook",component:fe})),r.a.createElement("div",{className:"personal-information__form-field"},r.a.createElement("label",{htmlFor:"form-website",className:"personal-information__form-label"},"Website"),r.a.createElement(h.a,{id:"form-website",className:"personal-information__input",placeholder:"Name",name:"contacts.website",component:fe})),r.a.createElement("div",{className:"personal-information__form-field"},r.a.createElement("label",{htmlFor:"form-twitter",className:"personal-information__form-label"},"Twitter"),r.a.createElement(h.a,{id:"form-twitter",className:"personal-information__input",placeholder:"Name",name:"contacts.twitter",component:fe})),r.a.createElement("div",{className:"personal-information__form-field"},r.a.createElement("label",{htmlFor:"form-instagram",className:"personal-information__form-label"},"Instagram"),r.a.createElement(h.a,{id:"form-instagram",className:"personal-information__input",placeholder:"Name",name:"contacts.instagram",component:fe})),r.a.createElement("div",{className:"personal-information__form-field"},r.a.createElement("label",{htmlFor:"form-youTube",className:"personal-information__form-label"},"YouTube"),r.a.createElement(h.a,{id:"form-youTube",className:"personal-information__input",placeholder:"Name",name:"contacts.youtube",component:fe})),r.a.createElement("div",{className:"personal-information__form-field"},r.a.createElement("label",{htmlFor:"form-gitHub",className:"personal-information__form-label"},"GitHub"),r.a.createElement(h.a,{id:"form-gitHub",className:"personal-information__input",placeholder:"Name",name:"contacts.github",component:fe})),r.a.createElement("div",{className:"personal-information__form-field"},r.a.createElement("label",{htmlFor:"form-mainLink",className:"personal-information__form-label"},"Main Link"),r.a.createElement(h.a,{id:"form-mainLink",className:"personal-information__input",placeholder:"Name",name:"contacts.mainLink",component:fe})),r.a.createElement("button",{className:"btn personal-information__save-btn"},"Save")))})),_e=(t(118),t(288),function(e){return r.a.createElement("div",null,r.a.createElement("p",{className:"posts__sign"},"Posts"),r.a.createElement("div",{className:"posts-list"},Object(b.a)(e.data).reverse().map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("div",{className:"post-item"},e.post))}))))}),be=(t(289),Object(v.a)({form:"AddNewPost"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit,className:"new-post"},r.a.createElement(h.a,{name:"newPostBody",component:pe,className:"new-post__text-area",placeholder:"Write post",type:"text",maxlength:"200"}),r.a.createElement("button",{className:"btn btn__new-post"},"New Post"))}))),Ee=r.a.memo((function(e){return r.a.createElement("div",{className:"main__posts"},r.a.createElement(be,{onSubmit:function(a){e.addPost(a.newPostBody)}}),r.a.createElement("div",{className:"posts-list"},r.a.createElement(_e,{data:e.PostData})))})),ge=Object(p.b)((function(e){return{PostData:e.profileReducer.ProfileData}}),{addPost:function(e){return{type:"ADD_POST",messageBody:e}}})(Ee),he=function(e){var a=e.profile;return r.a.createElement("div",{className:"personal-information__items-list-contacts"},r.a.createElement("p",{className:"personal-information__items-list-contacts-sign"},"Links"),r.a.createElement("div",{className:"personal-information__item-present"},r.a.createElement("p",{className:"personal-information__bold-text"},"Facebook")," - ",a.contacts.facebook?a.contacts.facebook:"absent"),r.a.createElement("div",{className:"personal-information__item-present"},r.a.createElement("p",{className:"personal-information__bold-text"},"Website")," - ",a.contacts.website?a.contacts.website:"absent"),r.a.createElement("div",{className:"personal-information__item-present"},r.a.createElement("p",{className:"personal-information__bold-text"},"Twitter")," - ",a.contacts.twitter?a.contacts.twitter:"absent"),r.a.createElement("div",{className:"personal-information__item-present"},r.a.createElement("p",{className:"personal-information__bold-text"},"Instagram")," - ",a.contacts.instagram?a.contacts.instagram:"absent"),r.a.createElement("div",{className:"personal-information__item-present"},r.a.createElement("p",{className:"personal-information__bold-text"},"YouTube")," - ",a.contacts.youtube?a.contacts.youtube:"absent"),r.a.createElement("div",{className:"personal-information__item-present"},r.a.createElement("p",{className:"personal-information__bold-text"},"GitHub")," - ",a.contacts.github?a.contacts.github:"absent"),r.a.createElement("div",{className:"personal-information__item-present"},r.a.createElement("p",{className:"personal-information__bold-text"},"Main Link")," - ",a.contacts.mainLink?a.contacts.mainLink:"absent"))},ve=function(e){var a=Object(n.useState)(!1),t=Object(Q.a)(a,2),o=t[0],s=t[1];return r.a.createElement("div",null,o?r.a.createElement(de,{initialValues:e.profile,onSubmit:function(a){e.saveProfileInfoThunk(a,e.profile.userId),s(!1)},profile:e.profile}):null,r.a.createElement("div",{className:"main__profile-img"},r.a.createElement("img",{className:"main__img",src:"https://images.pexels.com/photos/1726964/pexels-photo-1726964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",alt:""})),r.a.createElement("div",{className:"description"},r.a.createElement("div",{className:"description__wrapper"},r.a.createElement("div",{className:"avatar"},r.a.createElement("img",{className:"avatar__img",src:e.profile.photos.large?e.profile.photos.large:"https://m2bob-forum.net/wcf/images/avatars/3e/2720-3e546be0b0701e0cb670fa2f4fcb053d4f7e1ba5.jpg",alt:""}),e.isOwner&&r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{id:"load-photo-btn",className:"personal-information__load-photo-btn",onChange:function(a){a.target.files.length&&e.savePhotoThunk(a.target.files[0])},type:"file"}),r.a.createElement("label",{className:"personal-information__load-photo-lable",htmlFor:"load-photo-btn"},"Upload new photo"))),r.a.createElement("div",{className:"personal-information"},r.a.createElement("div",{className:"personal-information__items-presents"},r.a.createElement("p",{className:"personal-information__item personal-information__name"},e.profile.fullName),e.isOwner&&r.a.createElement("button",{onClick:function(){return s(!0)},className:"btn personal-information__edit-btn"},"Edit information")),r.a.createElement(me,e),r.a.createElement("div",{className:"personal-information__job-wrapper"},r.a.createElement("p",{className:e.profile.lookingForAJob?"personal-information__loking-for-job":"personal-information__item-not-loking-for-job"},e.profile.lookingForAJob?"Looking for a job":"Not looking for a job"),r.a.createElement("p",{className:"personal-information__item-skills"},r.a.createElement("p",{className:"personal-information__item-skills-sign"},"Skills:")," ",e.profile.lookingForAJobDescription||"absent")))),r.a.createElement("div",{className:"personal-information__links-posts-wrapper"},r.a.createElement("div",null,r.a.createElement("div",{className:"personal-information__about-me"},r.a.createElement("p",{className:"personal-information__about-me-sign"},"About me"),e.profile.aboutMe||"Information about myself..."),r.a.createElement(he,e)),r.a.createElement(ge,null))))},Ne=function(e){return e.profile?r.a.createElement("div",{className:"profile"},r.a.createElement(ve,e)):r.a.createElement($,null)},ke=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"refreshProfile",value:function(){this.props.getUserAvatarThunk(this.props.authorizedUserId);var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId),this.props.getProfileThunk(e),this.props.getStatusThunk(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Ne,Object.assign({isOwner:!this.props.match.params.userId},this.props)))}}]),t}(r.a.Component),we=Object(J.d)(j,u.f,Object(p.b)((function(e){return{profile:e.profileReducer.profile,status:e.profileReducer.status,authorizedUserId:e.authReducer.userId,isAuth:e.authReducer.isAuth}}),{getProfileThunk:H,getStatusThunk:function(e){return function(){var a=Object(T.a)(y.a.mark((function a(t){var n;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,D(e);case 2:n=a.sent,t(q(n.data));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},updateStatusThunk:function(e){return function(){var a=Object(T.a)(y.a.mark((function a(t){return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,R(e);case 2:0===a.sent.data.resultCode&&t(q(e));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},savePhotoThunk:function(e){return function(){var a=Object(T.a)(y.a.mark((function a(t){var n;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,L(e);case 2:0===(n=a.sent).data.resultCode&&t(G(n.data.data.photos));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},saveProfileInfoThunk:function(e,a){return function(){var t=Object(T.a)(y.a.mark((function t(n){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r=e,F.put("".concat(C,"profile"),r);case 2:0===t.sent.data.resultCode&&n(H(a));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},getUserAvatarThunk:B}))(ke),Oe=(t(119),function(e){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header__wrapper"}),r.a.createElement(f.b,{className:"header__sign",to:"/profile"},"Social Network"),r.a.createElement("div",{className:"header__user-auth"},e.isAuth?r.a.createElement("img",{className:"header__avatar",src:e.userAvatar,alt:""}):"",r.a.createElement("div",{className:"header__sign-btn"},e.isAuth?r.a.createElement(f.b,{onClick:e.logoutThunk,className:"header__sign-link",to:"/login"},"Logout"):r.a.createElement(r.a.Fragment,null,r.a.createElement(f.b,{className:"header__sign-link",to:"/login"},"Login"),r.a.createElement("a",{className:"header__sign-link header__sign-link-sign-up",href:"https://social-network.samuraijs.com/login"},"Sign up")))))}),je=t(35),Se={userId:0,email:null,login:null,isAuth:!1},ye=function(e,a,t,n){return{type:"SET_AUTH_USER_DATA",payload:{userId:e,email:a,login:t,isAuth:n}}},Te=function(){return function(){var e=Object(T.a)(y.a.mark((function e(a){var t,n,r,o,s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.get("".concat(C,"auth/me")).then((function(e){return e.data}));case 2:t=e.sent,n=t.data,r=n.id,o=n.email,s=n.login,0===t.resultCode&&a(ye(r,o,s,!0));case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},Ae=function(){return function(){var e=Object(T.a)(y.a.mark((function e(a){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.delete("".concat(C,"auth/login"));case 2:0===e.sent.data.resultCode&&a(ye(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},Ce=Object(p.b)((function(e){return{userAvatar:e.profileReducer.userAvatar,isAuth:e.authReducer.isAuth,login:e.authReducer.login}}),{logoutThunk:Ae})((function(e){return r.a.createElement(Oe,e)})),Fe=(t(290),t(291),function(e){if(!e)return"Field is required"}),Pe=Object(v.a)({form:"login"})((function(e){var a=Object(n.useState)(!0),t=Object(Q.a)(a,2),o=t[0],s=t[1];return r.a.createElement("div",null,r.a.createElement("div",{className:"login-form__background"}),r.a.createElement("form",{onSubmit:e.handleSubmit,className:"login-form"},r.a.createElement("div",{className:"login-form__wrapper"},r.a.createElement("h2",{className:"login-form__sign"},"Login to your account"),r.a.createElement("div",{className:"login-form__item"},r.a.createElement(h.a,{validate:[Fe],component:fe,name:"email",className:e.error&&"Enter valid Email"===e.error?"login-form__item-input-error":"login-form__item-input",placeholder:"Email"}),e.error&&"Enter valid Email"===e.error?r.a.createElement("div",{className:"login-form__item-error-email"},e.error):null),r.a.createElement("div",{className:"login-form__item"},r.a.createElement(h.a,{validate:[Fe],component:fe,type:"password",name:"password",className:"login-form__item-input",placeholder:"Password"})),r.a.createElement("div",{className:"login-form__item login-form__checkbox-wrapper"},r.a.createElement(h.a,{component:fe,name:"rememberMe",id:"rememberMe",className:"login-form__item-checkbox",type:"checkbox"}),r.a.createElement("label",{onClick:function(){s(!o)},className:o?"login-form__item-label":"login-form__item-label--checked",htmlFor:"rememberMe"}," Remember me")),e.error&&"Enter valid Email"!==e.error?r.a.createElement("div",{className:"login-form__item-error"},e.error):null,r.a.createElement("div",{className:"login-form__item"},r.a.createElement("button",{className:"btn login-form__item-btn"},"Login")),r.a.createElement("p",null,"or"),r.a.createElement("div",{className:"login-form__item"},r.a.createElement("a",{href:"https://social-network.samuraijs.com/login",className:"btn login-form__item-btn login-form__item-btn-sign-up"},"Sign up")))))})),Ue=Object(p.b)((function(e){return{isAuth:e.authReducer.isAuth}}),{loginThunk:function(e,a,t){return function(){var n=Object(T.a)(y.a.mark((function n(r){var o,s;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,M(e,a,t);case 2:0===(o=n.sent).data.resultCode?r(Te()):(s=o.data.messages.length>0?o.data.messages[0]:"Some Error",r(Object(je.a)("login",{_error:s})));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},logoutThunk:Ae})((function(e){return e.isAuth?r.a.createElement(u.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement(Pe,{onSubmit:function(a){e.loginThunk(a.email,a.password,a.rememberMe)}}))})),xe={initialized:!1},Ie=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(Ce,null),r.a.createElement(d,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(u.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(we,null)}}),r.a.createElement(u.b,{path:"/dialogs",render:function(){return r.a.createElement(W,null)}}),r.a.createElement(u.b,{path:"/find-users",render:function(){return r.a.createElement(ce,null)}}),r.a.createElement(u.b,{path:"/login",render:function(){return r.a.createElement(Ue,null)}}))):r.a.createElement($,null)}}]),t}(r.a.Component),De=Object(J.d)(u.f,Object(p.b)((function(e){return{initialized:e.appReducer.initialized}}),{initializeApp:function(){return function(e){var a=e(Te());Promise.all([a]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(Ie),Re=t(127),Me=t(122),Le=Object(J.c)({profileReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_POST":return Object(E.a)({},e,{ProfileData:[].concat(Object(b.a)(e.ProfileData),[{post:a.messageBody,id:Date.now()}])});case"SET_USER_PROFILE":return Object(E.a)({},e,{profile:a.profile});case"SET_USER_STATUS":return Object(E.a)({},e,{status:a.status});case"SAVE_PHOTO":return Object(E.a)({},e,{profile:Object(E.a)({},e.profile,{photos:a.file})});case"GET_USER_AVATAR":return Object(E.a)({},e,{userAvatar:a.avatar});default:return e}},dialogsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SEND_MESSAGE":return Object(E.a)({},e,{MessagesData:[].concat(Object(b.a)(e.MessagesData),[{message:a.messageBody,id:6}])});default:return e}},findUsersReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FOLLOW":return Object(E.a)({},e,{UsersData:e.UsersData.map((function(e){return e.id===a.userId?Object(E.a)({},e,{followed:!0}):e}))});case"UNFOLLOW":return Object(E.a)({},e,{UsersData:e.UsersData.map((function(e){return e.id===a.userId?Object(E.a)({},e,{followed:!1}):e}))});case"SET_USERS":return Object(E.a)({},e,{UsersData:a.users});case"SET_CURRENT_PAGE":return Object(E.a)({},e,{currentPage:a.currentPage});case"SET_ITEMS_AMOUNT":return Object(E.a)({},e,{totalCount:a.totalCount});case"TOGGLE_IS_FETCHING":return Object(E.a)({},e,{isFatching:a.isFatching});case"TOGGLE_IS_FETCHING":return Object(E.a)({},e,{isFollowingProcess:a.isFollowing?[].concat(Object(b.a)(e.isFollowingProcess),[a.userId]):e.isFollowingProcess.filter((function(e){return e!==a.userId}))});default:return e}},authReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_AUTH_USER_DATA":return Object(E.a)({},e,{},a.payload);default:return e}},form:Me.a,appReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"INITIALIZED_SUCCESS":return Object(E.a)({},e,{initialized:!0});default:return e}}}),ze=Object(J.e)(Le,Object(J.a)(Re.a));s.a.render(r.a.createElement(f.a,null,r.a.createElement(p.a,{store:ze},r.a.createElement(De,null))),document.getElementById("root"))},88:function(e,a,t){}},[[153,1,2]]]);
//# sourceMappingURL=main.8ca17073.chunk.js.map