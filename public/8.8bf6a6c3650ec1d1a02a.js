(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"3F3D":function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),t=function(){},e=u("+Sai"),i=u("vWSW"),s=u("gIcY"),r=(u("ey9i"),function(){function l(l,n,u){this.router=l,this.userService=n,this.fb=u,this.user={},this.errors={},this.isSubmitting=!1,this.settingsForm=this.fb.group({image:"",username:"",bio:"",email:"",password:""})}return l.prototype.ngOnInit=function(){Object.assign(this.user,this.userService.getCurrentUser()),this.settingsForm.patchValue(this.user)},l.prototype.logout=function(){this.userService.purgeAuth(),this.router.navigateByUrl("/")},l.prototype.submitForm=function(){var l=this;this.isSubmitting=!0,this.updateUser(this.settingsForm.value),this.userService.update(this.user).subscribe(function(n){return l.router.navigateByUrl("/profile/"+n.username)},function(n){l.errors=n,l.isSubmitting=!1})},l.prototype.updateUser=function(l){Object.assign(this.user,l)},l}()),d=u("ZYCi"),a=u("f4AX"),c=o["\u0275crt"]({encapsulation:2,styles:[],data:{}});function p(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,54,"div",[["class","settings-page"]],null,null,null,null,null)),(l()(),o["\u0275eld"](1,0,null,null,53,"div",[["class","container page"]],null,null,null,null,null)),(l()(),o["\u0275eld"](2,0,null,null,52,"div",[["class","row"]],null,null,null,null,null)),(l()(),o["\u0275eld"](3,0,null,null,51,"div",[["class","col-md-6 offset-md-3 col-xs-12"]],null,null,null,null,null)),(l()(),o["\u0275eld"](4,0,null,null,1,"h1",[["class","text-xs-center"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Your Settings"])),(l()(),o["\u0275eld"](6,0,null,null,1,"app-list-errors",[],null,null,null,e.b,e.a)),o["\u0275did"](7,49152,null,0,i.a,[],{errors:[0,"errors"]},null),(l()(),o["\u0275eld"](8,0,null,null,43,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0,e=l.component;return"submit"===n&&(t=!1!==o["\u0275nov"](l,10).onSubmit(u)&&t),"reset"===n&&(t=!1!==o["\u0275nov"](l,10).onReset()&&t),"ngSubmit"===n&&(t=!1!==e.submitForm()&&t),t},null,null)),o["\u0275did"](9,16384,null,0,s.s,[],null,null),o["\u0275did"](10,540672,null,0,s.i,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),o["\u0275prd"](2048,null,s.c,null,[s.i]),o["\u0275did"](12,16384,null,0,s.n,[[4,s.c]],null,null),(l()(),o["\u0275eld"](13,0,null,null,38,"fieldset",[],[[8,"disabled",0]],null,null,null,null)),(l()(),o["\u0275eld"](14,0,null,null,6,"fieldset",[["class","form-group"]],null,null,null,null,null)),(l()(),o["\u0275eld"](15,0,null,null,5,"input",[["class","form-control"],["formControlName","image"],["placeholder","URL of profile picture"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;return"input"===n&&(t=!1!==o["\u0275nov"](l,16)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==o["\u0275nov"](l,16).onTouched()&&t),"compositionstart"===n&&(t=!1!==o["\u0275nov"](l,16)._compositionStart()&&t),"compositionend"===n&&(t=!1!==o["\u0275nov"](l,16)._compositionEnd(u.target.value)&&t),t},null,null)),o["\u0275did"](16,16384,null,0,s.d,[o.Renderer2,o.ElementRef,[2,s.a]],null,null),o["\u0275prd"](1024,null,s.k,function(l){return[l]},[s.d]),o["\u0275did"](18,671744,null,0,s.h,[[3,s.c],[8,null],[8,null],[6,s.k],[2,s.u]],{name:[0,"name"]},null),o["\u0275prd"](2048,null,s.l,null,[s.h]),o["\u0275did"](20,16384,null,0,s.m,[[4,s.l]],null,null),(l()(),o["\u0275eld"](21,0,null,null,6,"fieldset",[["class","form-group"]],null,null,null,null,null)),(l()(),o["\u0275eld"](22,0,null,null,5,"input",[["class","form-control form-control-lg"],["formControlName","username"],["placeholder","Username"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;return"input"===n&&(t=!1!==o["\u0275nov"](l,23)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==o["\u0275nov"](l,23).onTouched()&&t),"compositionstart"===n&&(t=!1!==o["\u0275nov"](l,23)._compositionStart()&&t),"compositionend"===n&&(t=!1!==o["\u0275nov"](l,23)._compositionEnd(u.target.value)&&t),t},null,null)),o["\u0275did"](23,16384,null,0,s.d,[o.Renderer2,o.ElementRef,[2,s.a]],null,null),o["\u0275prd"](1024,null,s.k,function(l){return[l]},[s.d]),o["\u0275did"](25,671744,null,0,s.h,[[3,s.c],[8,null],[8,null],[6,s.k],[2,s.u]],{name:[0,"name"]},null),o["\u0275prd"](2048,null,s.l,null,[s.h]),o["\u0275did"](27,16384,null,0,s.m,[[4,s.l]],null,null),(l()(),o["\u0275eld"](28,0,null,null,7,"fieldset",[["class","form-group"]],null,null,null,null,null)),(l()(),o["\u0275eld"](29,0,null,null,6,"textarea",[["class","form-control form-control-lg"],["formControlName","bio"],["placeholder","Short bio about you"],["rows","8"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;return"input"===n&&(t=!1!==o["\u0275nov"](l,30)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==o["\u0275nov"](l,30).onTouched()&&t),"compositionstart"===n&&(t=!1!==o["\u0275nov"](l,30)._compositionStart()&&t),"compositionend"===n&&(t=!1!==o["\u0275nov"](l,30)._compositionEnd(u.target.value)&&t),t},null,null)),o["\u0275did"](30,16384,null,0,s.d,[o.Renderer2,o.ElementRef,[2,s.a]],null,null),o["\u0275prd"](1024,null,s.k,function(l){return[l]},[s.d]),o["\u0275did"](32,671744,null,0,s.h,[[3,s.c],[8,null],[8,null],[6,s.k],[2,s.u]],{name:[0,"name"]},null),o["\u0275prd"](2048,null,s.l,null,[s.h]),o["\u0275did"](34,16384,null,0,s.m,[[4,s.l]],null,null),(l()(),o["\u0275ted"](-1,null,["              "])),(l()(),o["\u0275eld"](36,0,null,null,6,"fieldset",[["class","form-group"]],null,null,null,null,null)),(l()(),o["\u0275eld"](37,0,null,null,5,"input",[["class","form-control form-control-lg"],["formControlName","email"],["placeholder","Email"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;return"input"===n&&(t=!1!==o["\u0275nov"](l,38)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==o["\u0275nov"](l,38).onTouched()&&t),"compositionstart"===n&&(t=!1!==o["\u0275nov"](l,38)._compositionStart()&&t),"compositionend"===n&&(t=!1!==o["\u0275nov"](l,38)._compositionEnd(u.target.value)&&t),t},null,null)),o["\u0275did"](38,16384,null,0,s.d,[o.Renderer2,o.ElementRef,[2,s.a]],null,null),o["\u0275prd"](1024,null,s.k,function(l){return[l]},[s.d]),o["\u0275did"](40,671744,null,0,s.h,[[3,s.c],[8,null],[8,null],[6,s.k],[2,s.u]],{name:[0,"name"]},null),o["\u0275prd"](2048,null,s.l,null,[s.h]),o["\u0275did"](42,16384,null,0,s.m,[[4,s.l]],null,null),(l()(),o["\u0275eld"](43,0,null,null,6,"fieldset",[["class","form-group"]],null,null,null,null,null)),(l()(),o["\u0275eld"](44,0,null,null,5,"input",[["class","form-control form-control-lg"],["formControlName","password"],["placeholder","New Password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;return"input"===n&&(t=!1!==o["\u0275nov"](l,45)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==o["\u0275nov"](l,45).onTouched()&&t),"compositionstart"===n&&(t=!1!==o["\u0275nov"](l,45)._compositionStart()&&t),"compositionend"===n&&(t=!1!==o["\u0275nov"](l,45)._compositionEnd(u.target.value)&&t),t},null,null)),o["\u0275did"](45,16384,null,0,s.d,[o.Renderer2,o.ElementRef,[2,s.a]],null,null),o["\u0275prd"](1024,null,s.k,function(l){return[l]},[s.d]),o["\u0275did"](47,671744,null,0,s.h,[[3,s.c],[8,null],[8,null],[6,s.k],[2,s.u]],{name:[0,"name"]},null),o["\u0275prd"](2048,null,s.l,null,[s.h]),o["\u0275did"](49,16384,null,0,s.m,[[4,s.l]],null,null),(l()(),o["\u0275eld"](50,0,null,null,1,"button",[["class","btn btn-lg btn-primary pull-xs-right"],["type","submit"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,[" Update Settings "])),(l()(),o["\u0275eld"](52,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),o["\u0275eld"](53,0,null,null,1,"button",[["class","btn btn-outline-danger"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.logout()&&o),o},null,null)),(l()(),o["\u0275ted"](-1,null,[" Or click here to logout. "]))],function(l,n){var u=n.component;l(n,7,0,u.errors),l(n,10,0,u.settingsForm),l(n,18,0,"image"),l(n,25,0,"username"),l(n,32,0,"bio"),l(n,40,0,"email"),l(n,47,0,"password")},function(l,n){var u=n.component;l(n,8,0,o["\u0275nov"](n,12).ngClassUntouched,o["\u0275nov"](n,12).ngClassTouched,o["\u0275nov"](n,12).ngClassPristine,o["\u0275nov"](n,12).ngClassDirty,o["\u0275nov"](n,12).ngClassValid,o["\u0275nov"](n,12).ngClassInvalid,o["\u0275nov"](n,12).ngClassPending),l(n,13,0,u.isSubmitting),l(n,15,0,o["\u0275nov"](n,20).ngClassUntouched,o["\u0275nov"](n,20).ngClassTouched,o["\u0275nov"](n,20).ngClassPristine,o["\u0275nov"](n,20).ngClassDirty,o["\u0275nov"](n,20).ngClassValid,o["\u0275nov"](n,20).ngClassInvalid,o["\u0275nov"](n,20).ngClassPending),l(n,22,0,o["\u0275nov"](n,27).ngClassUntouched,o["\u0275nov"](n,27).ngClassTouched,o["\u0275nov"](n,27).ngClassPristine,o["\u0275nov"](n,27).ngClassDirty,o["\u0275nov"](n,27).ngClassValid,o["\u0275nov"](n,27).ngClassInvalid,o["\u0275nov"](n,27).ngClassPending),l(n,29,0,o["\u0275nov"](n,34).ngClassUntouched,o["\u0275nov"](n,34).ngClassTouched,o["\u0275nov"](n,34).ngClassPristine,o["\u0275nov"](n,34).ngClassDirty,o["\u0275nov"](n,34).ngClassValid,o["\u0275nov"](n,34).ngClassInvalid,o["\u0275nov"](n,34).ngClassPending),l(n,37,0,o["\u0275nov"](n,42).ngClassUntouched,o["\u0275nov"](n,42).ngClassTouched,o["\u0275nov"](n,42).ngClassPristine,o["\u0275nov"](n,42).ngClassDirty,o["\u0275nov"](n,42).ngClassValid,o["\u0275nov"](n,42).ngClassInvalid,o["\u0275nov"](n,42).ngClassPending),l(n,44,0,o["\u0275nov"](n,49).ngClassUntouched,o["\u0275nov"](n,49).ngClassTouched,o["\u0275nov"](n,49).ngClassPristine,o["\u0275nov"](n,49).ngClassDirty,o["\u0275nov"](n,49).ngClassValid,o["\u0275nov"](n,49).ngClassInvalid,o["\u0275nov"](n,49).ngClassPending)})}var g=o["\u0275ccf"]("app-settings-page",r,function(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"app-settings-page",[],null,null,null,p,c)),o["\u0275did"](1,114688,null,0,r,[d.k,a.a,s.e],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),m=u("Ip0R"),v=u("t/Na"),h=u("PCNd"),f=function(){},C=u("ecC8");u.d(n,"SettingsModuleNgFactory",function(){return b});var b=o["\u0275cmf"](t,[],function(l){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[g]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,m.NgLocalization,m.NgLocaleLocalization,[o.LOCALE_ID,[2,m["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,s.t,s.t,[]),o["\u0275mpd"](4608,s.e,s.e,[]),o["\u0275mpd"](4608,v.j,v.p,[m.DOCUMENT,o.PLATFORM_ID,v.n]),o["\u0275mpd"](4608,v.q,v.q,[v.j,v.o]),o["\u0275mpd"](5120,v.a,function(l){return[l]},[v.q]),o["\u0275mpd"](4608,v.m,v.m,[]),o["\u0275mpd"](6144,v.k,null,[v.m]),o["\u0275mpd"](4608,v.i,v.i,[v.k]),o["\u0275mpd"](6144,v.b,null,[v.i]),o["\u0275mpd"](4608,v.f,v.l,[v.b,o.Injector]),o["\u0275mpd"](4608,v.c,v.c,[v.f]),o["\u0275mpd"](1073742336,m.CommonModule,m.CommonModule,[]),o["\u0275mpd"](1073742336,s.r,s.r,[]),o["\u0275mpd"](1073742336,s.j,s.j,[]),o["\u0275mpd"](1073742336,s.p,s.p,[]),o["\u0275mpd"](1073742336,v.e,v.e,[]),o["\u0275mpd"](1073742336,v.d,v.d,[]),o["\u0275mpd"](1073742336,d.n,d.n,[[2,d.s],[2,d.k]]),o["\u0275mpd"](1073742336,h.a,h.a,[]),o["\u0275mpd"](1073742336,f,f,[]),o["\u0275mpd"](1073742336,t,t,[]),o["\u0275mpd"](256,v.n,"XSRF-TOKEN",[]),o["\u0275mpd"](256,v.o,"X-XSRF-TOKEN",[]),o["\u0275mpd"](1024,d.i,function(){return[[{path:"",component:r,canActivate:[C.a]}]]},[])])})}}]);