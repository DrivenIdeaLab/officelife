(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"1krx":function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".error-explanation[data-v-baf4edc2] {\n  background-color: #fde0de;\n  border-color: #e2aba7;\n}\n.error[data-v-baf4edc2]:focus {\n  box-shadow: 0 0 0 1px #fff9f8;\n}",""])},"3QM4":function(t,e,a){"use strict";var n={inheritAttrs:!1,props:{id:{type:String,default:function(){return"text-area-".concat(this._uid)}},type:{type:String,default:"text"},value:{type:String,default:""},datacy:{type:String,default:""},label:{type:String,default:""},help:{type:String,default:""},required:{type:Boolean,default:!1},rows:{type:Number,default:3},errors:{type:Array,default:function(){return[]}}},methods:{focus:function(){this.$refs.input.focus()},select:function(){this.$refs.input.select()},setSelectionRange:function(t,e){this.$refs.input.setSelectionRange(t,e)}}},r=(a("9cby"),a("KHd+")),s=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb3"},[t.label?a("label",{staticClass:"db fw4 lh-copy f6",attrs:{for:t.id}},[t._v("\n    "+t._s(t.label)+"\n  ")]):t._e(),t._v(" "),a("textarea",t._b({ref:"input",staticClass:"br2 f5 w-100 ba b--black-40 pa2 outline-0",class:{error:t.errors.length},attrs:{id:t.id,required:t.required?"required":"",type:t.type,"data-cy":t.datacy,rows:t.rows},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}},"textarea",t.$attrs,!1)),t._v(" "),t.errors.length?a("div",{staticClass:"error-explanation pa3 ba br3 mt1"},[t._v("\n    "+t._s(t.errors[0])+"\n  ")]):t._e(),t._v(" "),t.help?a("p",{staticClass:"f7 mb3 lh-title"},[t._v("\n    "+t._s(t.help)+"\n  ")]):t._e()])}),[],!1,null,"baf4edc2",null);e.a=s.exports},"4T6e":function(t,e,a){var n=a("JzQN");"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,r);n.locals&&(t.exports=n.locals)},"60JB":function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"\ninput[type=checkbox][data-v-9eb2777e] {\n  top: 5px;\n}\ninput[type=radio][data-v-9eb2777e] {\n  top: -2px;\n}\n",""])},"9O2H":function(t,e,a){var n=a("60JB");"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,r);n.locals&&(t.exports=n.locals)},"9cby":function(t,e,a){"use strict";var n=a("Y36v");a.n(n).a},JzQN:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".error-explanation[data-v-533a82fc] {\n  background-color: #fde0de;\n  border-color: #e2aba7;\n}\n.error[data-v-533a82fc]:focus {\n  box-shadow: 0 0 0 1px #fff9f8;\n}\n.optional-badge[data-v-533a82fc] {\n  border-radius: 4px;\n  color: #283e59;\n  background-color: #edf2f9;\n  padding: 3px 4px;\n}",""])},LLkT:function(t,e,a){"use strict";var n=a("4T6e");a.n(n).a},Y36v:function(t,e,a){var n=a("1krx");"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,r);n.locals&&(t.exports=n.locals)},ZPIG:function(t,e,a){"use strict";var n=a("9O2H");a.n(n).a},"pF+r":function(t,e,a){"use strict";var n={inheritAttrs:!1,props:{id:{type:String,default:function(){return"text-input-".concat(this._uid)}},type:{type:String,default:"text"},value:{type:String,default:""},customRef:{type:String,default:"input"},name:{type:String,default:"input"},datacy:{type:String,default:""},placeholder:{type:String,default:""},help:{type:String,default:""},label:{type:String,default:""},required:{type:Boolean,default:!1},extraClassUpperDiv:{type:String,default:"mb3"},min:{type:Number,default:0},max:{type:Number,default:0},errors:{type:Array,default:function(){return[]}}},computed:{hasError:function(){return this.errors.length>0}},methods:{focus:function(){this.$refs.input.focus()},select:function(){this.$refs.input.select()},setSelectionRange:function(t,e){this.$refs.input.setSelectionRange(t,e)},sendEscKey:function(){this.$emit("esc-key-pressed")}}},r=(a("LLkT"),a("KHd+")),s=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.extraClassUpperDiv},[t.label?a("label",{staticClass:"db fw4 lh-copy f6",attrs:{for:t.id}},[t._v("\n    "+t._s(t.label)+"\n    "),t.required?t._e():a("span",{staticClass:"optional-badge f7"},[t._v("\n      "+t._s(t.$t("app.optional"))+"\n    ")])]):t._e(),t._v(" "),a("input",t._b({ref:t.customRef,staticClass:"br2 f5 w-100 ba b--black-40 pa2 outline-0",attrs:{id:t.id,required:t.required,type:t.type,name:t.name,max:t.max,min:t.min,placeholder:t.placeholder,"data-cy":t.datacy},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.sendEscKey(e)}}},"input",t.$attrs,!1)),t._v(" "),t.hasError?a("div",{staticClass:"error-explanation pa3 ba br3 mt1"},[t._v("\n    "+t._s(t.errors[0])+"\n  ")]):t._e(),t._v(" "),t.help?a("p",{staticClass:"f7 mb3 lh-title"},[t._v("\n    "+t._s(t.help)+"\n  ")]):t._e()])}),[],!1,null,"533a82fc",null);e.a=s.exports},rrJu:function(t,e,a){"use strict";var n={props:{errors:{type:Array,default:function(){return[]}}}},r=a("KHd+"),s=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.errors.length>0?a("div",[a("p",[t._v("app.error_title")]),t._v(" "),a("br"),t._v("\n  "+t._s(t.errors[0])+"\n  "),a("ul",t._l(t.errors[1],(function(e){return a("li",{key:e.id},[t._v("\n      "+t._s(e[0])+"\n    ")])})),0)]):t._e()}),[],!1,null,null,null);e.a=s.exports},twVE:function(t,e,a){"use strict";a.r(e);var n=a("pF+r"),r=a("3QM4"),s=a("rrJu"),i=a("Z84v"),o={components:{Layout:a("+SZM").a,TextInput:n.a,TextArea:r.a,Errors:s.a,LoadingButton:i.a},props:{notifications:{type:Array,default:null}},data:function(){return{form:{title:null,content:null,errors:[]},loadingState:"",errorTemplate:Error}},methods:{submit:function(){var t=this;this.loadingState="loading",axios.post("/"+this.$page.auth.company.id+"/account/news",this.form).then((function(e){localStorage.success="The news has been added",t.$inertia.visit("/"+e.data.data.company_id+"/account/news")})).catch((function(e){t.loadingState=null,t.form.errors=_.flatten(_.toArray(e.response.data))}))}}},l=(a("ZPIG"),a("KHd+")),c=Object(l.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("layout",{attrs:{title:"Home",notifications:t.notifications}},[a("div",{staticClass:"ph2 ph0-ns"},[a("div",{staticClass:"mt4-l mt1 mw6 br3 bg-white box center breadcrumb relative z-0 f6 pb2"},[a("ul",{staticClass:"list ph0 tc-l tl"},[a("li",{staticClass:"di"},[a("inertia-link",{attrs:{href:"/"+t.$page.auth.company.id+"/dashboard"}},[t._v(t._s(t.$page.auth.company.name))])],1),t._v(" "),a("li",{staticClass:"di"},[t._v("\n          ...\n        ")]),t._v(" "),a("li",{staticClass:"di"},[a("inertia-link",{attrs:{href:"/"+t.$page.auth.company.id+"/account/news"}},[t._v(t._s(t.$t("app.breadcrumb_account_manage_company_news")))])],1),t._v(" "),a("li",{staticClass:"di"},[t._v("\n          "+t._s(t.$t("app.breadcrumb_account_add_company_news"))+"\n        ")])])]),t._v(" "),a("div",{staticClass:"mw7 center br3 mb5 bg-white box restricted relative z-1"},[a("div",{staticClass:"pa3 mt5 measure center"},[a("h2",{staticClass:"tc normal mb4"},[t._v("\n          "+t._s(t.$t("account.company_news_new_headline",{name:t.$page.auth.company.name}))+"\n        ")]),t._v(" "),a("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("errors",{attrs:{errors:t.form.errors}}),t._v(" "),a("text-input",{attrs:{id:"title",name:"title",datacy:"news-title-input",errors:t.$page.errors.title,label:t.$t("account.company_news_new_title"),help:t.$t("account.company_news_new_title_help"),required:!0},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}}),t._v(" "),a("text-area",{attrs:{label:t.$t("account.company_news_new_content"),datacy:"news-content-textarea",required:!0,rows:10,help:t.$t("account.company_news_new_content_help")},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}}),t._v(" "),a("div",{staticClass:"mv4"},[a("div",{staticClass:"flex-ns justify-between"},[a("div",[a("inertia-link",{staticClass:"btn btn-secondary dib tc w-auto-ns w-100 mb2 pv2 ph3",attrs:{href:"/"+t.$page.auth.company.id+"/account/news"}},[t._v("\n                  "+t._s(t.$t("app.cancel"))+"\n                ")])],1),t._v(" "),a("loading-button",{attrs:{classes:"btn add w-auto-ns w-100 mb2 pv2 ph3",state:t.loadingState,text:t.$t("app.publish"),"cypress-selector":"submit-add-news-button"}})],1)])],1)])])])])}),[],!1,null,"9eb2777e",null);e.default=c.exports}}]);
//# sourceMappingURL=6.js.map?id=8bf6aeb25a5e8adcb70b