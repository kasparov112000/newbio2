(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{UCte:function(n,i,t){"use strict";t.d(i,"a",function(){return r});var l=t("CcnG"),e=(t("ey9i"),t("Phjn")),o=t("xMyE"),u=t("F/XL"),r=function(){function n(n,i,t){this.profilesService=n,this.router=i,this.userService=t,this.toggle=new l.m,this.isSubmitting=!1}return n.prototype.toggleFollowing=function(){var n=this;this.isSubmitting=!0,this.userService.isAuthenticated.pipe(Object(e.a)(function(i){return i?n.profile.following?n.profilesService.unfollow(n.profile.username).pipe(Object(o.a)(function(i){n.isSubmitting=!1,n.toggle.emit(!1)},function(i){return n.isSubmitting=!1})):n.profilesService.follow(n.profile.username).pipe(Object(o.a)(function(i){n.isSubmitting=!1,n.toggle.emit(!0)},function(i){return n.isSubmitting=!1})):(n.router.navigateByUrl("/login"),Object(u.a)(null))})).subscribe()},n}()},XBA4:function(n,i,t){"use strict";t.d(i,"a",function(){return o}),t.d(i,"b",function(){return u});var l=t("CcnG"),e=t("Ip0R"),o=(t("UCte"),t("YOe5"),t("ZYCi"),t("f4AX"),l.Na({encapsulation:2,styles:[],data:{}}));function u(n){return l.ib(0,[(n()(),l.Pa(0,0,null,null,4,"button",[["class","btn btn-sm action-btn"]],null,[[null,"click"]],function(n,i,t){var l=!0;return"click"===i&&(l=!1!==n.component.toggleFollowing()&&l),l},null,null)),l.Oa(1,278528,null,0,e.j,[l.q,l.r,l.k,l.C],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),l.bb(2,{disabled:0,"btn-outline-secondary":1,"btn-secondary":2}),(n()(),l.Pa(3,0,null,null,0,"i",[["class","ion-plus-round"]],null,null,null,null,null)),(n()(),l.gb(4,null,[" \xa0 "," ","\n"]))],function(n,i){var t=i.component;n(i,1,0,"btn btn-sm action-btn",n(i,2,0,t.isSubmitting,!t.profile.following,t.profile.following))},function(n,i){var t=i.component;n(i,4,0,t.profile.following?"Unfollow":"Follow",t.profile.username)})}}}]);