(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51a384b0"],{"2ee4":function(t,e,a){!function(e,a){t.exports=a()}("undefined"!=typeof self&&self,(function(){return function(t){function e(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var a={};return e.m=t,e.c=a,e.d=function(t,a,n){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=7)}([function(t,e){t.exports=function(t,e,a,n,i,s){var o,r=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(o=t,r=t.default);var c,u="function"==typeof r?r.options:r;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),a&&(u.functional=!0),i&&(u._scopeId=i),s?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=c):n&&(c=n),c){var d=u.functional,v=d?u.render:u.beforeCreate;d?(u._injectStyles=c,u.render=function(t,e){return c.call(e),v(t,e)}):u.beforeCreate=v?[].concat(v,c):[c]}return{esModule:o,exports:r,options:u}}},function(t,e,a){"use strict";var n=a(2),i=a(4),s=a(14);e.a={name:"form-wizard",components:{WizardButton:n.a,WizardStep:i.a},props:{title:{type:String,default:"Awesome Wizard"},subtitle:{type:String,default:"Split a complicated flow in multiple steps"},nextButtonText:{type:String,default:"Next"},backButtonText:{type:String,default:"Back"},finishButtonText:{type:String,default:"Finish"},hideButtons:{type:Boolean,default:!1},validateOnBack:Boolean,color:{type:String,default:"#e74c3c"},errorColor:{type:String,default:"#8b0000"},shape:{type:String,default:"circle"},layout:{type:String,default:"horizontal"},stepsClasses:{type:[String,Array],default:""},stepSize:{type:String,default:"md",validator:function(t){return-1!==["xs","sm","md","lg"].indexOf(t)}},transition:{type:String,default:""},startIndex:{type:Number,default:0,validator:function(t){return t>=0}}},provide:function(){return{addTab:this.addTab,removeTab:this.removeTab}},data:function(){return{activeTabIndex:0,currentPercentage:0,maxStep:0,loading:!1,tabs:[]}},computed:{slotProps:function(){return{nextTab:this.nextTab,prevTab:this.prevTab,activeTabIndex:this.activeTabIndex,isLastStep:this.isLastStep,fillButtonStyle:this.fillButtonStyle}},tabCount:function(){return this.tabs.length},isLastStep:function(){return this.activeTabIndex===this.tabCount-1},isVertical:function(){return"vertical"===this.layout},displayPrevButton:function(){return 0!==this.activeTabIndex},stepPercentage:function(){return 1/(2*this.tabCount)*100},progressBarStyle:function(){return{backgroundColor:this.color,width:this.progress+"%",color:this.color}},fillButtonStyle:function(){return{backgroundColor:this.color,borderColor:this.color,color:"white"}},progress:function(){return this.activeTabIndex>0?this.stepPercentage*(2*this.activeTabIndex+1):this.stepPercentage}},methods:{emitTabChange:function(t,e){this.$emit("on-change",t,e),this.$emit("update:startIndex",e)},addTab:function(t){var e=this.$slots.default.indexOf(t.$vnode);t.tabId=""+t.title.replace(/ /g,"")+e,this.tabs.splice(e,0,t),e<this.activeTabIndex+1&&(this.maxStep=e,this.changeTab(this.activeTabIndex+1,e))},removeTab:function(t){var e=this.tabs,a=e.indexOf(t);a>-1&&(a===this.activeTabIndex&&(this.maxStep=this.activeTabIndex-1,this.changeTab(this.activeTabIndex,this.activeTabIndex-1)),a<this.activeTabIndex&&(this.maxStep=this.activeTabIndex-1,this.activeTabIndex=this.activeTabIndex-1,this.emitTabChange(this.activeTabIndex+1,this.activeTabIndex)),e.splice(a,1))},reset:function(){this.maxStep=0,this.tabs.forEach((function(t){t.checked=!1})),this.navigateToTab(0)},activateAll:function(){this.maxStep=this.tabs.length-1,this.tabs.forEach((function(t){t.checked=!0}))},navigateToTab:function(t){var e=this,a=t>this.activeTabIndex;if(t<=this.maxStep){var n=function n(){a&&t-e.activeTabIndex>1?(e.changeTab(e.activeTabIndex,e.activeTabIndex+1),e.beforeTabChange(e.activeTabIndex,n)):(e.changeTab(e.activeTabIndex,t),e.afterTabChange(e.activeTabIndex))};a?this.beforeTabChange(this.activeTabIndex,n):(this.setValidationError(null),n())}return t<=this.maxStep},nextTab:function(){var t=this,e=function(){t.activeTabIndex<t.tabCount-1?(t.changeTab(t.activeTabIndex,t.activeTabIndex+1),t.afterTabChange(t.activeTabIndex)):t.$emit("on-complete")};this.beforeTabChange(this.activeTabIndex,e)},prevTab:function(){var t=this,e=function(){t.activeTabIndex>0&&(t.setValidationError(null),t.changeTab(t.activeTabIndex,t.activeTabIndex-1))};this.validateOnBack?this.beforeTabChange(this.activeTabIndex,e):e()},focusNextTab:function(){var t=Object(s.b)(this.tabs);if(-1!==t&&t<this.tabs.length-1){var e=this.tabs[t+1];e.checked&&Object(s.a)(e.tabId)}},focusPrevTab:function(){var t=Object(s.b)(this.tabs);if(-1!==t&&t>0){var e=this.tabs[t-1].tabId;Object(s.a)(e)}},setLoading:function(t){this.loading=t,this.$emit("on-loading",t)},setValidationError:function(t){this.tabs[this.activeTabIndex].validationError=t,this.$emit("on-error",t)},validateBeforeChange:function(t,e){var a=this;if(this.setValidationError(null),Object(s.c)(t))this.setLoading(!0),t.then((function(t){a.setLoading(!1);var n=!0===t;a.executeBeforeChange(n,e)})).catch((function(t){a.setLoading(!1),a.setValidationError(t)}));else{var n=!0===t;this.executeBeforeChange(n,e)}},executeBeforeChange:function(t,e){this.$emit("on-validate",t,this.activeTabIndex),t?e():this.tabs[this.activeTabIndex].validationError="error"},beforeTabChange:function(t,e){if(!this.loading){var a=this.tabs[t];if(a&&void 0!==a.beforeChange){var n=a.beforeChange();this.validateBeforeChange(n,e)}else e()}},afterTabChange:function(t){if(!this.loading){var e=this.tabs[t];e&&void 0!==e.afterChange&&e.afterChange()}},changeTab:function(t,e){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=this.tabs[t],i=this.tabs[e];return n&&(n.active=!1),i&&(i.active=!0),a&&this.activeTabIndex!==e&&this.emitTabChange(t,e),this.activeTabIndex=e,this.activateTabAndCheckStep(this.activeTabIndex),!0},tryChangeRoute:function(t){this.$router&&t.route&&this.$router.push(t.route)},checkRouteChange:function(t){var e=-1,a=this.tabs.find((function(a,n){var i=a.route===t;return i&&(e=n),i}));if(a&&!a.active){var n=e>this.activeTabIndex;this.navigateToTab(e,n)}},deactivateTabs:function(){this.tabs.forEach((function(t){t.active=!1}))},activateTab:function(t){this.deactivateTabs();var e=this.tabs[t];e&&(e.active=!0,e.checked=!0,this.tryChangeRoute(e))},activateTabAndCheckStep:function(t){this.activateTab(t),t>this.maxStep&&(this.maxStep=t),this.activeTabIndex=t},initializeTabs:function(){this.tabs.length>0&&0===this.startIndex&&this.activateTab(this.activeTabIndex),this.startIndex<this.tabs.length?this.activateTabAndCheckStep(this.startIndex):window.console.warn("Prop startIndex set to "+this.startIndex+" is greater than the number of tabs - "+this.tabs.length+". Make sure that the starting index is less than the number of tabs registered")}},mounted:function(){this.initializeTabs()},watch:{"$route.path":function(t){this.checkRouteChange(t)}}}},function(t,e,a){"use strict";function n(t){a(10)}var i=a(3),s=a(11),o=a(0),r=n,l=o(i.a,s.a,!1,r,null,null);e.a=l.exports},function(t,e,a){"use strict";e.a={}},function(t,e,a){"use strict";function n(t){a(12)}var i=a(5),s=a(13),o=a(0),r=n,l=o(i.a,s.a,!1,r,null,null);e.a=l.exports},function(t,e,a){"use strict";e.a={name:"wizard-step",props:{tab:{type:Object,default:function(){}},transition:{type:String,default:""},index:{type:Number,default:0}},computed:{iconActiveStyle:function(){return{backgroundColor:this.tab.color}},stepCheckedStyle:function(){return{borderColor:this.tab.color}},errorStyle:function(){return{borderColor:this.tab.errorColor,backgroundColor:this.tab.errorColor}},stepTitleStyle:function(){return{color:this.tab.validationError?this.tab.errorColor:this.tab.color}},isStepSquare:function(){return"square"===this.tab.shape},isTabShape:function(){return"tab"===this.tab.shape}}}},function(t,e,a){"use strict";e.a={name:"tab-content",props:{title:{type:String,default:""},icon:{type:String,default:""},beforeChange:{type:Function},afterChange:{type:Function},route:{type:[String,Object]},additionalInfo:{type:Object,default:function(){}}},inject:["addTab","removeTab"],data:function(){return{active:!1,validationError:null,checked:!1,tabId:""}},computed:{shape:function(){return this.$parent.shape},color:function(){return this.$parent.color},errorColor:function(){return this.$parent.errorColor}},mounted:function(){this.addTab(this)},destroyed:function(){this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el),this.removeTab(this)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(8),i=a(16),s=a(2),o=a(4);a.d(e,"FormWizard",(function(){return n.a})),a.d(e,"TabContent",(function(){return i.a})),a.d(e,"WizardButton",(function(){return s.a})),a.d(e,"WizardStep",(function(){return o.a}));var r={install:function(t){t.component("form-wizard",n.a),t.component("tab-content",i.a),t.component("wizard-button",s.a),t.component("wizard-step",o.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(r),e.default=r},function(t,e,a){"use strict";function n(t){a(9)}var i=a(1),s=a(15),o=a(0),r=n,l=o(i.a,s.a,!1,r,null,null);e.a=l.exports},function(t,e){},function(t,e){},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"wizard-btn",attrs:{tabindex:"-1",type:"button"}},[t._t("default")],2)},i=[],s={render:n,staticRenderFns:i};e.a=s},function(t,e){},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{class:{active:t.tab.active}},[a("a",{class:{disabled:!t.tab.checked},attrs:{href:"javascript:void(0)"}},[a("div",{staticClass:"wizard-icon-circle md",class:{checked:t.tab.checked,square_shape:t.isStepSquare,tab_shape:t.isTabShape},style:[t.tab.checked?t.stepCheckedStyle:{},t.tab.validationError?t.errorStyle:{}],attrs:{role:"tab",tabindex:t.tab.checked?0:"",id:"step-"+t.tab.tabId,"aria-controls":t.tab.tabId,"aria-disabled":t.tab.active,"aria-selected":t.tab.active}},[a("transition",{attrs:{name:t.transition,mode:"out-in"}},[t.tab.active?a("div",{staticClass:"wizard-icon-container",class:{square_shape:t.isStepSquare,tab_shape:t.isTabShape},style:[t.tab.active?t.iconActiveStyle:{},t.tab.validationError?t.errorStyle:{}]},[t._t("active-step",[t.tab.icon?a("i",{staticClass:"wizard-icon",class:t.tab.icon}):a("i",{staticClass:"wizard-icon"},[t._v(t._s(t.index+1))])])],2):t._e(),t._v(" "),t.tab.active?t._e():t._t("default",[!t.tab.active&&t.tab.icon?a("i",{staticClass:"wizard-icon",class:t.tab.icon}):t._e(),t._v(" "),t.tab.active||t.tab.icon?t._e():a("i",{staticClass:"wizard-icon"},[t._v(t._s(t.index+1))])])],2)],1),t._v(" "),t._t("title",[a("span",{staticClass:"stepTitle",class:{active:t.tab.active,has_error:t.tab.validationError},style:t.tab.active?t.stepTitleStyle:{}},[t._v("\n            "+t._s(t.tab.title)+"\n      ")])])],2)])},i=[],s={render:n,staticRenderFns:i};e.a=s},function(t,e,a){"use strict";function n(){return document.activeElement.id}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=n();return t.findIndex((function(t){return t.tabId===e}))}function s(t){document.getElementById(t).focus()}function o(t){return t.then&&"function"==typeof t.then}e.b=i,e.a=s,e.c=o},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vue-form-wizard",class:[t.stepSize,{vertical:t.isVertical}],on:{keyup:[function(e){return"button"in e||!t._k(e.keyCode,"right",39,e.key)?"button"in e&&2!==e.button?null:void t.focusNextTab(e):null},function(e){return"button"in e||!t._k(e.keyCode,"left",37,e.key)?"button"in e&&0!==e.button?null:void t.focusPrevTab(e):null}]}},[a("div",{staticClass:"wizard-header"},[t._t("title",[a("h4",{staticClass:"wizard-title"},[t._v(t._s(t.title))]),t._v(" "),a("p",{staticClass:"category"},[t._v(t._s(t.subtitle))])])],2),t._v(" "),a("div",{staticClass:"wizard-navigation"},[t.isVertical?t._e():a("div",{staticClass:"wizard-progress-with-circle"},[a("div",{staticClass:"wizard-progress-bar",style:t.progressBarStyle})]),t._v(" "),a("ul",{staticClass:"wizard-nav wizard-nav-pills",class:t.stepsClasses,attrs:{role:"tablist"}},[t._l(t.tabs,(function(e,n){return t._t("step",[a("wizard-step",{attrs:{tab:e,"step-size":t.stepSize,transition:t.transition,index:n},nativeOn:{click:function(e){t.navigateToTab(n)},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.navigateToTab(n)}}})],{tab:e,index:n,navigateToTab:t.navigateToTab,stepSize:t.stepSize,transition:t.transition})}))],2),t._v(" "),a("div",{staticClass:"wizard-tab-content"},[t._t("default",null,null,t.slotProps)],2)]),t._v(" "),t.hideButtons?t._e():a("div",{staticClass:"wizard-card-footer clearfix"},[t._t("footer",[a("div",{staticClass:"wizard-footer-left"},[t.displayPrevButton?a("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.prevTab,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.prevTab(e)}}},[t._t("prev",[a("wizard-button",{style:t.fillButtonStyle,attrs:{disabled:t.loading}},[t._v("\n              "+t._s(t.backButtonText)+"\n            ")])],null,t.slotProps)],2):t._e(),t._v(" "),t._t("custom-buttons-left",null,null,t.slotProps)],2),t._v(" "),a("div",{staticClass:"wizard-footer-right"},[t._t("custom-buttons-right",null,null,t.slotProps),t._v(" "),t.isLastStep?a("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.nextTab,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.nextTab(e)}}},[t._t("finish",[a("wizard-button",{style:t.fillButtonStyle},[t._v("\n              "+t._s(t.finishButtonText)+"\n            ")])],null,t.slotProps)],2):a("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.nextTab,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.nextTab(e)}}},[t._t("next",[a("wizard-button",{style:t.fillButtonStyle,attrs:{disabled:t.loading}},[t._v("\n            "+t._s(t.nextButtonText)+"\n           ")])],null,t.slotProps)],2)],2)],null,t.slotProps)],2)])},i=[],s={render:n,staticRenderFns:i};e.a=s},function(t,e,a){"use strict";var n=a(6),i=a(17),s=a(0),o=s(n.a,i.a,!1,null,null,null);e.a=o.exports},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],staticClass:"wizard-tab-container",attrs:{role:"tabpanel",id:t.tabId,"aria-hidden":!t.active,"aria-labelledby":"step-"+t.tabId}},[t._t("default",null,{active:t.active})],2)},i=[],s={render:n,staticRenderFns:i};e.a=s}])}))},"512d":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vx-card",{attrs:{title:"Create Research","code-toggler":""}},[a("p",[t._v("Add Research")]),a("div",{staticClass:"mt-5"},[a("form-wizard",{attrs:{color:"rgba(var(--vs-primary), 1)",title:null,subtitle:null,finishButtonText:"Submit"},on:{"on-complete":t.formSubmitted}},[a("tab-content",{staticClass:"mb-5",attrs:{title:"Full details",icon:"feather icon-home"}},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col md:w-1/2 w-full mt-5"},[a("vs-select",{staticClass:"w-full select-large",attrs:{label:"Type Of Publication"},model:{value:t.publicationType,callback:function(e){t.publicationType=e},expression:"publicationType"}},t._l(t.researchOptions,(function(t,e){return a("vs-select-item",{key:e,staticClass:"w-full",attrs:{value:t.value,text:t.text}})})),1)],1),a("div",{staticClass:"vx-col md:w-1/2 w-full mt-5"},[a("vs-input",{staticClass:"w-full",attrs:{label:"Publication Title"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),a("div",{staticClass:"vx-col md:w-1/2 w-full mt-5"},[a("vs-input",{staticClass:"w-full",attrs:{label:"APA Style"},model:{value:t.apaStyle,callback:function(e){t.apaStyle=e},expression:"apaStyle"}})],1),a("div",{staticClass:"vx-col md:w-1/2 w-full mt-5"},[a("vs-input",{staticClass:"w-full",attrs:{label:"Event Title (if applicable)"},model:{value:t.eventName,callback:function(e){t.eventName=e},expression:"eventName"}})],1),a("div",{staticClass:"vx-col md:w-1/2 w-full mt-5"},[a("vs-textarea",{attrs:{label:"Abstract",height:"200px"},model:{value:t.abstract,callback:function(e){t.abstract=e},expression:"abstract"}})],1),a("div",{staticClass:"vx-col md:w-1/2 w-full mt-5"},[a("vs-select",{staticClass:"w-full select-large",attrs:{label:"SDG Goal"},model:{value:t.sdgOption,callback:function(e){t.sdgOption=e},expression:"sdgOption"}},t._l(t.sdgOptions,(function(t,e){return a("vs-select-item",{key:e,staticClass:"w-full",attrs:{value:t.value,text:t.text}})})),1)],1)])]),a("tab-content",{staticClass:"mb-5",attrs:{title:"Co-authorship",icon:"feather icon-briefcase"}},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col md:w-1/2 w-full mt-5"},[a("vs-input",{staticClass:"w-full",attrs:{label:"Co-Authors"},model:{value:t.mainSupervisor,callback:function(e){t.mainSupervisor=e},expression:"mainSupervisor"}})],1),a("div",{staticClass:"vx-col md:w-1/2 w-full mt-5"},[a("vs-input",{staticClass:"w-full",attrs:{label:"Main Supervisor (if applicable)"},model:{value:t.mainSupervisor,callback:function(e){t.mainSupervisor=e},expression:"mainSupervisor"}})],1),a("div",{staticClass:"vx-col md:w-1/2 w-full mt-5"},[a("vs-input",{staticClass:"w-full",attrs:{label:"Co-Supervisor (if applicable)"},model:{value:t.coSupervisor,callback:function(e){t.coSupervisor=e},expression:"coSupervisor"}})],1),a("div",{staticClass:"vx-col md:w-1/2 w-full mt-5"},[a("vs-select",{staticClass:"w-full select-large",attrs:{label:"Level"},model:{value:t.level,callback:function(e){t.level=e},expression:"level"}},t._l(t.levelOptions,(function(t,e){return a("vs-select-item",{key:e,staticClass:"w-full",attrs:{value:t.value,text:t.text}})})),1)],1),a("div",{staticClass:"vx-col md:w-1/2 w-full mt-5"},[a("vs-input",{staticClass:"w-full",attrs:{label:"International Patners (if applicable)"},model:{value:t.internationalPatners,callback:function(e){t.internationalPatners=e},expression:"internationalPatners"}})],1),a("div",{staticClass:"vx-col md:w-1/2 w-full mt-5"},[a("vs-select",{staticClass:"w-full select-large",attrs:{label:"Faculty"},model:{value:t.department,callback:function(e){t.department=e},expression:"department"}},t._l(t.departmentOptions,(function(t,e){return a("vs-select-item",{key:e,staticClass:"w-full",attrs:{value:t.value,text:t.text}})})),1)],1)])]),a("tab-content",{staticClass:"mb-5",attrs:{title:"When published",icon:"feather icon-image"}},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col md:w-1/2 w-full mt-5"},[a("vs-input",{staticClass:"w-full",attrs:{type:"date",label:"Publication Date"},model:{value:t.publicationDate,callback:function(e){t.publicationDate=e},expression:"publicationDate"}})],1),a("div",{staticClass:"vx-col md:w-1/2 w-full mt-5"},[a("vs-input",{ref:"file",staticClass:"w-full",attrs:{type:"file",label:"Research Document",name:"mypic",id:"file"},on:{change:t.handleFileUpload}})],1)])])],1)],1)])},i=[],s=(a("7f7f"),a("2ee4")),o=(a("da93"),a("bc3a")),r=a.n(o),l={data:function(){return{toggle:!0,title:"",abstract:"",apaStyle:"",mainSupervisor:"",internationalPatners:"",department:"",publicationDate:"",coSupervisor:"",publicationType:"",proposalTitle:"",level:"",conferencePaper:"",eventName:"",file:"",sdgOption:"",status:"plannning",researchOptions:[{text:"Post graduate supervision",value:"Post graduate supervision"},{text:"Peer Reviewed Conference publications",value:"Peer Reviewed Conference publications"},{text:"Oral/Conference presentations",value:"Oral/Conference presentations"},{text:"Peer reviewed journal articles",value:"Peer reviewed journal articles"},{text:"Book Chapter",value:"Book Chapter"},{text:"Book",value:"Book"},{text:"Book Editor/ Co-editor",value:"Book Editor/ Co-editor"},{text:"Others (Specify, e.g. book review, reports…)",value:"Others (Specify, e.g. book review, reports…)"}],sdgOptions:[{text:"1 (No Poverty)",value:"1 (No Poverty)"},{text:"2 (Zero Hunger)",value:"2 (Zero Hunger)"},{text:"3 (Good Health And Well Being)",value:"3 (Good Health And Well Being)"},{text:"4 (Quality Education)",value:"4 (Quality Education)"},{text:"5 (Gender Equality)",value:"5 (Gender Equality)"},{text:"6 (Clean water and sanitation)",value:"6 (Clean water and sanitation)"},{text:"7 (Affordable and Clean Energy)",value:"7 (Affordable and Clean Energy)"},{text:"8 (Decent Work And Economic Growth)",value:"8 (Decent Work And Economic Growth)"},{text:"9 (Industry, Innovation and Infrastructure)",value:"9 (Industry, Innovation and Infrastructure)"},{text:"10 (Reduced Inequality)",value:"10 (Reduced Inequality)"},{text:"11 (Sustainable Cities and Communities)",value:"11 (Sustainable Cities and Communities)"},{text:"12 (Responsible Consumption and Production)",value:"12 (Responsible Consumption and Production)"},{text:"13 (Climate Action)",value:"13 (Climate Action)"},{text:"14 (Life Below Water)",value:"14 (Life Below Water)"},{text:"15 (Life on Land)",value:"15 (Life on Land)"},{text:"16 (Peace and Justice Strong Institutions)",value:"16 (Peace and Justice Strong Institutions)"},{text:"17 (Partnerships to achieve the Goal)",value:"Others (Specify, e.g. book review, reports…)"}],levelOptions:[{text:"Masters",value:"Masters"},{text:"Doctorate",value:"Doctorate"},{text:"Student",value:"Student"}],departmentOptions:[{text:"All",value:"all"},{text:"Computing & Informatics",value:"Computing & Informatics"},{text:"Engineering",value:"Engineering"},{text:"Health & Applied Sciences",value:"Health & Applied Sciences"},{text:"Human Sciences",value:"Human Sciences"},{text:"Management Sciences",value:"Management Sciences"},{text:"Natural Resources & Spatial Sciences",value:"Natural Resources & Spatial Sciences"}]}},methods:{formSubmitted:function(){var t=this;this.$vs.loading();var e=JSON.parse(localStorage.getItem("userInfo")),a=new URLSearchParams;a.append("publicationType",this.publicationType),a.append("title",this.title),a.append("eventTitle",this.eventName),a.append("publicationDate",this.publicationDate),a.append("apaStyle",this.apaStyle),a.append("department",this.department),a.append("mainSupervisor",this.mainSupervisor),a.append("coSupervisor",this.coSupervisor),a.append("level",this.level),a.append("conferencePaper",this.conferencePaper),a.append("reviews","none"),a.append("file",this.file.name),a.append("sdggoal",this.sdgOption),a.append("abstract",this.abstract),a.append("userId",e.id);var n=localStorage.getItem("accessToken");console.log(n);var i={headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(n)}},s=new FormData;s.append("file",this.file),r.a.post("http://".concat(window.location.host,"/api/upload"),s,{headers:{"Content-Type":"multipart/form-data"}}).then((function(){console.log("SUCCESS!!")})).catch((function(){console.log("FAILURE!!")})),r.a.post("http://".concat(window.location.host,"/api/research-outputs/create"),a,i).then((function(){t.$vs.loading.close(),t.$vs.notify({title:"Success",text:"Research Created Succesfully",iconPack:"feather",icon:"icon-alert-circle",color:"success",position:"top-right"})})).catch((function(e){t.$vs.loading.close(),t.$vs.notify({title:"Error",text:e.message,iconPack:"feather",icon:"icon-alert-circle",color:"danger",position:"top-right"})}))},handleFileUpload:function(t){this.file=t.target.files[0]}},components:{FormWizard:s["FormWizard"],TabContent:s["TabContent"]}},c=l,u=a("2877"),d=Object(u["a"])(c,n,i,!1,null,null,null);e["default"]=d.exports},da93:function(t,e,a){}}]);
//# sourceMappingURL=chunk-51a384b0.19e7247b.js.map