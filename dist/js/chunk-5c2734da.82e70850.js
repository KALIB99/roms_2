(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c2734da"],{"1e8a":function(t,e,i){},"5df8":function(t,e,i){"use strict";i("1e8a")},"63cf":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"loading-bg"}},[s("div",{staticClass:"loading-logo"},[s("img",{attrs:{src:i("a4ef"),alt:"Logo"}})]),s("div",{staticClass:"loading"},[s("div",{staticClass:"effect-1 effects"}),s("div",{staticClass:"effect-2 effects"}),s("div",{staticClass:"effect-3 effects"})])])}],n={methods:{handleLoginEvent:function(t){this.$store.dispatch("updateUserInfo",{displayName:t.firstname,email:t.email,uid:t._id}),this.$router.push(t.state.target||"/")}},created:function(){this.$auth.handleAuthentication(),this.$auth.isAuthenticated()&&this.$router.push("/").catch((function(){}))}},c=n,f=(i("5df8"),i("2877")),o=Object(f["a"])(c,s,a,!1,null,null,null);e["default"]=o.exports},a4ef:function(t,e,i){t.exports=i.p+"img/logo.104620cf.png"}}]);
//# sourceMappingURL=chunk-5c2734da.82e70850.js.map