(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{LGCY:function(t,e,i){"use strict";i.r(e);var s={components:{Layout:i("+SZM").a},props:{flow:{type:Object,default:null},notifications:{type:Array,default:null}}},a=i("KHd+"),n=Object(a.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("layout",{attrs:{title:"Home",notifications:t.notifications}},[i("div",{staticClass:"ph2 ph0-ns"},[i("div",{staticClass:"mt4-l mt1 mw6 br3 bg-white box center breadcrumb relative z-0 f6 pb2"},[i("ul",{staticClass:"list ph0 tc-l tl"},[i("li",{staticClass:"di"},[i("inertia-link",{attrs:{href:"/"+t.$page.auth.company.id+"/dashboard"}},[t._v(t._s(t.$page.auth.company.name))])],1),t._v(" "),i("li",{staticClass:"di"},[t._v("\n          ...\n        ")]),t._v(" "),i("li",{staticClass:"di"},[i("inertia-link",{attrs:{href:"/"+t.$page.auth.company.id+"/account/flows"}},[t._v(t._s(t.$t("app.breadcrumb_account_manage_flows")))])],1),t._v(" "),i("li",{staticClass:"di"},[t._v("\n          View a flow\n        ")])])]),t._v(" "),i("div",{staticClass:"mw7 center br3 mb5 bg-white box restricted relative z-1"},[i("div",{staticClass:"pa3 mt5"},[i("h2",{staticClass:"tc normal mb4"},[t._v("\n          "+t._s(t.flow.name)+"\n        ")]),t._v(" "),i("p",{staticClass:"relative"},[t._v("\n          This flow is about "+t._s(t.$t("account.flow_new_type_"+t.flow.type))+" and has "+t._s(t.flow.steps.count)+" steps.\n        ")]),t._v(" "),i("ul",t._l(t.flow.steps.data,(function(e){return i("li",{directives:[{name:"show",rawName:"v-show",value:"before"==e.modifier,expression:"step.modifier == 'before'"}],key:e.id},[t._v("\n            "+t._s(e.number)+" "+t._s(e.unit_of_time)+" before "+t._s(t.flow.type)+"\n            "),i("ul",t._l(e.actions.data,(function(e){return i("li",{key:e.id},[t._v("\n                "+t._s(e.type)+" for "+t._s(e.recipient)+"\n              ")])})),0)])})),0),t._v(" "),i("ul",t._l(t.flow.steps.data,(function(e){return i("li",{directives:[{name:"show",rawName:"v-show",value:"same_day"==e.modifier,expression:"step.modifier == 'same_day'"}],key:e.id},[t._v("\n            On "+t._s(t.flow.type)+"\n            "),i("ul",t._l(e.actions.data,(function(e){return i("li",{key:e.id},[t._v("\n                "+t._s(e.type)+" for "+t._s(e.recipient)+"\n              ")])})),0)])})),0),t._v(" "),i("ul",t._l(t.flow.steps.data,(function(e){return i("li",{directives:[{name:"show",rawName:"v-show",value:"after"==e.modifier,expression:"step.modifier == 'after'"}],key:e.id},[t._v("\n            "+t._s(e.number)+" "+t._s(e.unit_of_time)+" after "+t._s(t.flow.type)+"\n            "),i("ul",t._l(e.actions.data,(function(e){return i("li",{key:e.id},[t._v("\n                "+t._s(e.type)+" for "+t._s(e.recipient)+"\n              ")])})),0)])})),0)])])])])}),[],!1,null,"3f62efd1",null);e.default=n.exports}}]);
//# sourceMappingURL=43.js.map?id=bc41bf2abe2c27c4a35b