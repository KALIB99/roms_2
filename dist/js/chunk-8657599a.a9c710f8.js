(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8657599a"],{"0b18":function(e,t,n){"use strict";n("0fdf")},"0fdf":function(e,t,n){},d779:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"extra-component-drag-and-drop-demo"}},[e._m(0),n("drag-and-drop-simple"),n("drag-and-drop-multiple-lists"),n("drag-and-drop-clone-list"),n("drag-and-drop-animation")],1)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"mb-4"},[n("a",{attrs:{href:"https://github.com/SortableJS/Vue.Draggable",target:"_blank",rel:"nofollow"}},[e._v("Vue.Draggable")]),e._v(" - Vue component allowing drag-and-drop and synchronization with view model array. Based on and offering all features of Sortable.js")])}],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vx-card",{attrs:{title:"Simple","code-toggler":""}},[n("p",[e._v("Simple Draggable list with in sync to original list. Remove "),n("code",[e._v("list")]),e._v(" prop to break synchronization with original list.")]),n("div",{staticClass:"mt-5"},[n("vs-list",[n("draggable",{staticClass:"cursor-move",attrs:{list:e.list}},e._l(e.list,(function(e,t){return n("vs-list-item",{key:t,staticClass:"flex items-center p-1",attrs:{title:e}})})),1)],1)],1),n("prism",{staticClass:"rounded-lg",attrs:{language:"js"}},[e._v("\n"+e._s(e.list)+"\n        ")]),n("template",{slot:"codeContainer"},[e._v('\n<template>\n  <vs-list>\n    <draggable :list="list" class="cursor-move">\n      <vs-list-item class="flex items-center p-1" v-for="(item, index) in list" :key="index" :title="item">\n      </vs-list-item>\n    </draggable>\n  </vs-list>\n</template>\n\n<script>\nimport draggable from \'vuedraggable\'\n\nexport default {\n  data() {\n    return {\n      list: [\n        "Marzipan I love I love. Soufflé donut I love gummi bears powder. Candy danish biscuit.",\n        "Halvah bonbon bonbon brownie sugar plum. Halvah I love cupcake I love.",\n        "Cake muffin icing topping wafer topping gummi bears apple pie.",\n        "Cotton candy gummi bears bear claw cake brownie jelly-o lemon drops croissant sweet roll.",\n      ]\n    }\n  },\n  components: {\n    draggable,\n  }\n}\n<\/script>\n        ')])],2)},s=[],r=n("b76a"),o=n.n(r),m=n("8d51"),u=n.n(m),c={data:function(){return{list:["Marzipan I love I love. Soufflé donut I love gummi bears powder. Candy danish biscuit.","Halvah bonbon bonbon brownie sugar plum. Halvah I love cupcake I love.","Cake muffin icing topping wafer topping gummi bears apple pie.","Cotton candy gummi bears bear claw cake brownie jelly-o lemon drops croissant sweet roll."]}},components:{draggable:o.a,Prism:u.a}},d=c,g=n("2877"),p=Object(g["a"])(d,l,s,!1,null,null,null),v=p.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vx-card",{attrs:{title:"Multiple Lists","code-toggler":""}},[n("p",[e._v("Drag and drop items of more than one list. Add same "),n("code",[e._v("group")]),e._v(" to "),n("code",[e._v("group")]),e._v(" prop")]),n("div",{staticClass:"vx-row"},[n("div",{staticClass:"vx-col w-full md:w-1/2"},[n("vs-list",[n("vs-list-header",{attrs:{title:"People Group 1",color:"primary"}}),n("draggable",{staticClass:"p-2 cursor-move",attrs:{list:e.list1,group:"people"}},e._l(e.list1,(function(e,t){return n("vs-list-item",{key:t,attrs:{title:e.name,subtitle:e.email}},[n("vs-avatar",{attrs:{slot:"avatar",text:e.name},slot:"avatar"})],1)})),1)],1)],1),n("div",{staticClass:"vx-col w-full md:w-1/2"},[n("vs-list",[n("vs-list-header",{attrs:{title:"People Group 2",color:"primary"}}),n("draggable",{staticClass:"p-2 cursor-move",attrs:{list:e.list2,group:"people"}},e._l(e.list2,(function(e,t){return n("vs-list-item",{key:t,attrs:{title:e.name,subtitle:e.email}},[n("vs-avatar",{attrs:{slot:"avatar",text:e.name},slot:"avatar"})],1)})),1)],1)],1)]),n("div",{staticClass:"vx-row"},[n("div",{staticClass:"vx-col w-full md:w-1/2"},[n("prism",{staticClass:"rounded-lg",attrs:{language:"js"}},[e._v("\nPeople Group 1: "+e._s(e.list1)+"\n                ")])],1),n("div",{staticClass:"vx-col w-full md:w-1/2"},[n("prism",{staticClass:"rounded-lg",attrs:{language:"js"}},[e._v("\nPeople Group 2: "+e._s(e.list2)+"\n                ")])],1)]),n("template",{slot:"codeContainer"},[e._v('\n<template>\n  <vs-list>\n    <vs-list-header title="People Group 1" color="primary"></vs-list-header>\n\n    <draggable :list="list1" group="people" class="p-2 cursor-move">\n      <vs-list-item v-for="(listItem, index) in list1" :key="index" :title="listItem.name" :subtitle="listItem.email">\n        <vs-avatar slot="avatar" :text="listItem.name" />\n      </vs-list-item>\n    </draggable>\n\n  </vs-list>\n\n  <vs-list class="mt-5">\n    <vs-list-header title="People Group 2" color="primary"></vs-list-header>\n\n    <draggable :list="list2" group="people" class="p-2 cursor-move">\n      <vs-list-item v-for="(listItem, index) in list2" :key="index" :title="listItem.name" :subtitle="listItem.email">\n        <vs-avatar slot="avatar" :text="listItem.name" />\n      </vs-list-item>\n    </draggable>\n\n  </vs-list>\n</template>\n\n<script>\nimport draggable from \'vuedraggable\'\n\nexport default {\n  data() {\n    return {\n      list1: [\n        {\n          name: "Paz Joya",\n          email: "girliness@spotlike.co.uk",\n        },\n        {\n          name: "Sunshine Cose",\n          email: "executrixship@equisized.edu",\n        },\n        {\n          name: "Alba Dobbin",\n          email: "bidding@demibob.or",\n        },\n        {\n          name: "Marlin Hinchee",\n          email: "preholding@scuffly.co.uk",\n        }\n      ],\n      list2: [\n        {\n          name: "Leia Atienza",\n          email: "unmeasurableness@interlamellar.co.uk"\n        },\n        {\n          name: "Lashawna Vaudrainm",\n          email: "soaking@khubber.com"\n        },\n        {\n          name: "Liliana Henscheid",\n          email: "lecideine@turndown.org"\n        },\n        {\n          name: "Keven Kolter",\n          email: "nontenure@anglicanum.co.uk"\n        }\n      ]\n    }\n  },\n  components: {\n    draggable,\n  }\n}\n<\/script>\n        ')])],2)},f=[],h={data:function(){return{list1:[{name:"Paz Joya",email:"girliness@spotlike.co.uk"},{name:"Sunshine Cose",email:"executrixship@equisized.edu"},{name:"Alba Dobbin",email:"bidding@demibob.or"},{name:"Marlin Hinchee",email:"preholding@scuffly.co.uk"}],list2:[{name:"Leia Atienza",email:"unmeasurableness@interlamellar.co.uk"},{name:"Lashawna Vaudrainm",email:"soaking@khubber.com"},{name:"Liliana Henscheid",email:"lecideine@turndown.org"},{name:"Keven Kolter",email:"nontenure@anglicanum.co.uk"}]}},components:{draggable:o.a,Prism:u.a}},_=h,k=Object(g["a"])(_,b,f,!1,null,null,null),w=k.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vx-card",{attrs:{title:"Clone List","code-toggler":""}},[n("p",[e._v("Clone list items from another existing list. Add "),n("code",[e._v("pull")]),e._v(" and "),n("code",[e._v("put")]),e._v(" to "),n("code",[e._v("group")]),e._v(" prop")]),n("div",{staticClass:"vx-row"},[n("div",{staticClass:"vx-col w-full sm:w-1/2"},[n("h6",{staticClass:"mt-5 mb-3"},[e._v("Tag Source")]),n("draggable",{staticClass:"p-2 cursor-move",attrs:{list:e.list1,group:{name:"tags",pull:"clone",put:!1}}},e._l(e.list1,(function(t,a){return n("vs-chip",{key:a},[e._v(e._s(t))])})),1)],1),n("div",{staticClass:"vx-col w-full sm:w-1/2"},[n("h6",{staticClass:"mt-5 mb-3"},[e._v("Your Tags")]),n("draggable",{staticClass:"p-2 cursor-move",attrs:{list:e.list2,group:{name:"tags"}}},e._l(e.list2,(function(t,a){return n("vs-chip",{key:a},[e._v(e._s(t))])})),1)],1)]),n("div",{staticClass:"vx-row"},[n("div",{staticClass:"vx-col w-full sm:w-1/2"},[n("prism",{staticClass:"rounded-lg",attrs:{language:"js"}},[e._v("\nTag Source: "+e._s(e.list1)+"\n                ")])],1),n("div",{staticClass:"vx-col w-full sm:w-1/2"},[n("prism",{staticClass:"rounded-lg",attrs:{language:"js"}},[e._v("\nAdded tags: "+e._s(e.list2)+"\n                ")])],1)]),n("template",{slot:"codeContainer"},[e._v('\n<template>\n  <div>\n    <h6 class="mt-5 mb-3">Tag Source</h6>\n    <draggable :list="list1" :group="{name:\'tags\',  pull:\'clone\', put:false }" class="p-2 cursor-move">\n      <vs-chip v-for="(listItem, index) in list1" :key="index"> '+e._s("{{ listItem }}")+' </vs-chip>\n    </draggable>\n  </div>\n  <div>\n    <h6 class="mt-5 mb-3">Your Tags</h6>\n    <draggable :list="list2" :group="{name: \'tags\'}" class="p-2 cursor-move">\n      <vs-chip v-for="(listItem, index) in list2" :key="index"> '+e._s("{{ listItem }}")+' </vs-chip>\n    </draggable>\n  </div>\n</template>\n\n<script>\nimport draggable from \'vuedraggable\'\n\nexport default {\n  data() {\n    return {\n      list1: ["youtube", "google", "facebook", "twitter", "instagram", "pinterest", "tinder", "slack", "discord", "github", "gitlab"],\n      list2: ["google", "youtube"]\n    }\n  },\n  components: {\n    draggable,\n  }\n}\n<\/script>\n        ')])],2)},C=[],y={data:function(){return{list1:["youtube","google","facebook","twitter","instagram","pinterest","tinder","slack","discord","github","gitlab"],list2:["google","youtube"]}},components:{draggable:o.a,Prism:u.a}},I=y,A=Object(g["a"])(I,x,C,!1,null,null,null),z=A.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vx-card",{attrs:{title:"With Animation","code-toggler":""}},[n("p",[e._v("Add animation to changes using "),n("code",[e._v("transition-group")]),e._v(".")]),n("div",{staticClass:"mt-5"},[n("vs-list",[n("vs-list-header",{attrs:{title:"People Group",color:"primary"}}),n("draggable",{staticClass:"cursor-move",attrs:{list:e.list}},[n("transition-group",e._l(e.list,(function(e){return n("vs-list-item",{key:e.email,staticClass:"list-item",attrs:{title:e.name,subtitle:e.email}},[n("vs-avatar",{attrs:{slot:"avatar",text:e.name},slot:"avatar"})],1)})),1)],1)],1)],1),n("prism",{staticClass:"rounded-lg",attrs:{language:"js"}},[e._v("\n"+e._s(e.list)+"\n        ")]),n("template",{slot:"codeContainer"},[e._v('\n<template>\n  <vs-list>\n    <vs-list-header title="People Group" color="primary"></vs-list-header>\n\n    <draggable :list="list">\n      <transition-group>\n        <vs-list-item class="list-item" v-for="listItem in list" :key="listItem.email" :title="listItem.name" :subtitle="listItem.email">\n          <vs-avatar slot="avatar" :text="listItem.name" />\n        </vs-list-item>\n      </transition-group>\n    </draggable>\n\n  </vs-list>\n</template>\n<script>\nimport draggable from \'vuedraggable\'\n\nexport default {\n  data() {\n    return {\n      list: [{\n          name: "Paz Joya",\n          email: "girliness@spotlike.co.uk",\n        },\n        {\n          name: "Sunshine Cose",\n          email: "executrixship@equisized.edu",\n        },\n        {\n          name: "Alba Dobbin",\n          email: "bidding@demibob.or",\n        },\n        {\n          name: "Marlin Hinchee",\n          email: "preholding@scuffly.co.uk",\n        },\n        {\n          name: "Leia Atienza",\n          email: "unmeasurableness@interlamellar.co.uk"\n        },\n        {\n          name: "Lashawna Vaudrainm",\n          email: "soaking@khubber.com"\n        },\n        {\n          name: "Liliana Henscheid",\n          email: "lecideine@turndown.org"\n        },\n        {\n          name: "Keven Kolter",\n          email: "nontenure@anglicanum.co.uk"\n        }\n      ],\n    }\n  },\n  components: {\n    draggable\n  }\n}\n<\/script>\n<style>\n.list-item {\n  transition: all 1s\n}\n</style>\n        ')])],2)},L=[],P={data:function(){return{list:[{name:"Paz Joya",email:"girliness@spotlike.co.uk"},{name:"Sunshine Cose",email:"executrixship@equisized.edu"},{name:"Alba Dobbin",email:"bidding@demibob.or"},{name:"Marlin Hinchee",email:"preholding@scuffly.co.uk"},{name:"Leia Atienza",email:"unmeasurableness@interlamellar.co.uk"},{name:"Lashawna Vaudrainm",email:"soaking@khubber.com"},{name:"Liliana Henscheid",email:"lecideine@turndown.org"},{name:"Keven Kolter",email:"nontenure@anglicanum.co.uk"}]}},components:{draggable:o.a,Prism:u.a}},S=P,j=(n("0b18"),Object(g["a"])(S,D,L,!1,null,null,null)),H=j.exports,G={components:{DragAndDropSimple:v,DragAndDropMultipleLists:w,DragAndDropCloneList:z,DragAndDropAnimation:H}},K=G,M=Object(g["a"])(K,a,i,!1,null,null,null);t["default"]=M.exports}}]);
//# sourceMappingURL=chunk-8657599a.a9c710f8.js.map