(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-876126f0"],{"0873":function(e,t,s){},"20a7":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"h-screen flex w-full bg-img vx-row no-gutter items-center justify-center",attrs:{id:"page-login"}},[a("div",{staticClass:"vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4"},[a("vx-card",[a("div",{staticClass:"full-page-bg-color",attrs:{slot:"no-body"},slot:"no-body"},[a("div",{staticClass:"vx-row no-gutter justify-center items-center"},[a("div",{staticClass:"vx-col hidden lg:block lg:w-1/2"},[a("img",{staticClass:"mx-auto",attrs:{src:s("7ff5"),alt:"login"}})]),a("div",{staticClass:"vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg"},[a("div",{staticClass:"px-8 pt-8 login-tabs-container"},[a("div",{staticClass:"vx-card__title mb-4"},[a("h4",{staticClass:"mb-4"},[e._v(" Research Output Management System")]),a("p",[e._v("Welcome back, please login to your account.")])]),a("vs-tabs",[a("vs-tab",{attrs:{label:"login"}},[a("login-jwt")],1)],1)],1)])])])])],1)])},o=[],r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:3",expression:"'required|min:3'"}],staticClass:"w-full",attrs:{"data-vv-validate-on":"blur",name:"username","icon-no-border":"",icon:"icon icon-user","icon-pack":"feather","label-placeholder":"Username"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),s("span",{staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("username")))]),s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:2|max:10",expression:"'required|min:2|max:10'"}],staticClass:"w-full mt-6",attrs:{"data-vv-validate-on":"blur",type:"password",name:"password","icon-no-border":"",icon:"icon icon-lock","icon-pack":"feather","label-placeholder":"Password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),s("span",{staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("password")))]),s("div",{staticClass:"flex flex-wrap justify-between my-5"},[s("vs-checkbox",{staticClass:"mb-3",model:{value:e.checkbox_remember_me,callback:function(t){e.checkbox_remember_me=t},expression:"checkbox_remember_me"}},[e._v("Remember Me")]),s("router-link",{attrs:{to:"/pages/forgot-password"}},[e._v("Forgot Password?")])],1),s("div",{staticClass:"flex flex-wrap justify-between mb-3"},[s("vs-button",{attrs:{type:"border"},on:{click:e.registerUser}},[e._v("Register")]),s("vs-button",{attrs:{disabled:!e.validateForm},on:{click:e.loginJWT}},[e._v("Login")])],1)],1)},n=[],i=s("41cb"),l={data:function(){return{username:"username",password:"1234",checkbox_remember_me:!1}},computed:{validateForm:function(){return!this.errors.any()&&""!==this.email&&""!==this.password}},methods:{checkLogin:function(){var e=new URL(location.href).searchParams.get("logout");return console.log("url"),console.log(e),!this.$store.state.auth.isUserLoggedIn()||(this.$vs.loading.close(),this.$vs.notify({title:"Login Attempt",text:"You are already logged in!",iconPack:"feather",icon:"icon-alert-circle",color:"warning"}),!1)},loginJWT:function(){var e=this;this.$vs.loading();var t={checkbox_remember_me:this.checkbox_remember_me,userDetails:{email:this.username,password:this.password}};this.$store.dispatch("auth/loginJWT",t).then((function(t){e.$vs.loading.close(),e.$acl.change(t.data.user.role)})).catch((function(t){e.$vs.loading.close(),e.$vs.notify({title:"Error",text:t.message,iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}))},registerUser:function(){this.checkLogin()&&this.$router.push("/pages/register").catch((function(){}))}},beforeMount:function(){var e=new URL(location.href).searchParams.get("logout");console.log("url"),console.log(e),"1"===e&&(localStorage.removeItem("accessToken"),localStorage.removeItem("userInfo"),i["a"].push(i["a"].currentRoute.query.to||"/pages/login"))}},c=l,u=s("2877"),m=Object(u["a"])(c,r,n,!1,null,null,null),d=m.exports,v={components:{LoginJwt:d}},g=v,f=(s("9ab6"),Object(u["a"])(g,a,o,!1,null,null,null));t["default"]=f.exports},"7ff5":function(e,t,s){e.exports=s.p+"img/nustbanner.2f1da019.png"},"9ab6":function(e,t,s){"use strict";s("0873")}}]);
//# sourceMappingURL=chunk-876126f0.3f1e45f0.js.map