(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{480:function(t,s,a){"use strict";a.r(s);var m=a(25),c=Object(m.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"第一章：什么是编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一章：什么是编译"}},[t._v("#")]),t._v(" 第一章：什么是编译")]),t._v(" "),a("h2",{attrs:{id:"_1-1-什么是编译？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-什么是编译？"}},[t._v("#")]),t._v(" 1.1 什么是编译？")]),t._v(" "),a("p",[t._v("语言大致分为高级语言，汇编语言，机器语言三种类型。")]),t._v(" "),a("p",[t._v("编译是指将"),a("strong",[t._v("高级语言")]),t._v("编译成"),a("strong",[t._v("机器语言")]),t._v("或者"),a("strong",[t._v("汇编语言")]),t._v("的过程，也就是翻译！")]),t._v(" "),a("ul",[a("li",[t._v("机器语言本质上是由 0/1 组成的序列。")]),t._v(" "),a("li",[t._v("汇编语言在机器语言的基础上添加了助记符，提高了编写效率，但是依旧繁琐。")]),t._v(" "),a("li",[t._v("高级语言提供了更方便人类使用的语法规则，而且汇编语言依赖机器，而高级语言避免了这一点。")])]),t._v(" "),a("h2",{attrs:{id:"_1-2-编译系统的结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-编译系统的结构"}},[t._v("#")]),t._v(" 1.2 编译系统的结构")]),t._v(" "),a("p",[a("strong",[t._v("源语言")]),t._v("就是要翻译的语言，"),a("strong",[t._v("目标语言")]),t._v("就是最终要生成的语言，目标语言既可以是"),a("strong",[t._v("机器语言")]),t._v("也可以是"),a("strong",[t._v("汇编语言")]),t._v("。")]),t._v(" "),a("p",[t._v("总的来看编译分为"),a("strong",[t._v("语义分析")]),t._v("和"),a("strong",[t._v("生成")]),t._v("目标语言两部分。")]),t._v(" "),a("p",[t._v("语法分析：语义分析是以句子为单位，而语法分析的粒度较细，针对短语进行分析。")]),t._v(" "),a("p",[t._v("词法分析：词法分析是以单词为单位进行分析，也就是分析词性。")]),t._v(" "),a("p",[t._v("自底向上：词法分析 => 语法分析 => 语义分析。")]),t._v(" "),a("p",[t._v("编译过程也分为"),a("strong",[t._v("前端")]),t._v("（front end）和"),a("strong",[t._v("后端")]),t._v("（back end）。其中所有与"),a("strong",[t._v("源语言")]),t._v("相关的部分都属于前端 ，所有与"),a("strong",[t._v("目标代码")]),t._v("相关的部分都属于后端。")]),t._v(" "),a("p",[t._v("前端和后端中间还存在一个其他语言的层次，起到桥梁作用。")]),t._v(" "),a("p",[t._v("语法制导分析（Syntax Directed Translation）：将语法分析，语义分析，中间代码生成三个阶段综合到一起。")]),t._v(" "),a("h2",{attrs:{id:"_1-3-词法分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-词法分析"}},[t._v("#")]),t._v(" 1.3 词法分析")]),t._v(" "),a("p",[t._v("词法分析是编译的第一个阶段！")]),t._v(" "),a("p",[t._v("源代码本身是由单词组成的字符集，而词法分析是将字符集中的单词识别出来并转换成统一的"),a("strong",[t._v("机内表示")]),t._v("，也就是词法单元（token）形式。")]),t._v(" "),a("p",[t._v("token: <种别码，属性值>")]),t._v(" "),a("p",[t._v("单词存在五种类型：")]),t._v(" "),a("ul",[a("li",[t._v("关键字：例如 if else 等，一词一码。")]),t._v(" "),a("li",[t._v("标识符：变量名，数组名等，多次一码。")]),t._v(" "),a("li",[t._v("常量：整型，浮点型等，虽然常量有无穷，但是可以根据类型来编码，也就是一型一码。")]),t._v(" "),a("li",[t._v("运算符：算术，关系，逻辑，一词一码或一型一码。")]),t._v(" "),a("li",[t._v("界限符：() ; = 等 ，一词一码。")])]),t._v(" "),a("p",[t._v("一词一码类型的单词是用不到 token 属性值的，只用到了种别码。")]),t._v(" "),a("p",[t._v("一型一码因为存在同一个码存在多个关键字，所有需要用"),a("strong",[t._v("属性值")]),t._v("来进一步的区分。")]),t._v(" "),a("p",[t._v("如何将源代码转换成 token 序列？（第三章）")]),t._v(" "),a("h2",{attrs:{id:"_1-4-语法分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-语法分析"}},[t._v("#")]),t._v(" 1.4 语法分析")]),t._v(" "),a("ul",[a("li",[a("D",[t._v(" declare（缩写）\n")])],1),t._v(" "),a("li",[a("T",[t._v(" type \n")])],1),t._v(" "),a("li",[a("IDS",[t._v(" identity sequence \n")])],1)]),t._v(" "),a("p",[t._v("语法分析器如何根据语法规则将输入的 token 生成语法分析树？（第四章）")]),t._v(" "),a("h2",{attrs:{id:"_1-5-语义分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-语义分析"}},[t._v("#")]),t._v(" 1.5 语义分析")]),t._v(" "),a("p",[t._v("语义分析会收集一些属性信息。")]),t._v(" "),a("ul",[a("li",[t._v("种属")]),t._v(" "),a("li",[t._v("类型")]),t._v(" "),a("li",[t._v("存储位置，长度")]),t._v(" "),a("li",[t._v("值")]),t._v(" "),a("li",[t._v("作用域")]),t._v(" "),a("li",[t._v("参数和返回值信息")])]),t._v(" "),a("p",[t._v("以上属性信息会存入一张"),a("strong",[t._v("符号表")]),t._v("中。")]),t._v(" "),a("p",[t._v("语义检查，将会检查一些语法方面的错误。")]),t._v(" "),a("h2",{attrs:{id:"_1-6-中间代码生成和编译后端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-中间代码生成和编译后端"}},[t._v("#")]),t._v(" 1.6 中间代码生成和编译后端")]),t._v(" "),a("p",[t._v("有两种类型，三地址码，语法结构树/语法树（和语法分析树不同）。")]),t._v(" "),a("p",[t._v("四元式 "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"o"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"p"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"y"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"z"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"x"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1),t._v(" op 是操作符，y 和 z 是原操作数，x 是目标操作数。如何该操作数不存在用下划线（_）表示。")],1),t._v(" "),a("p",[t._v("例如 "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"x"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"y"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"o"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"p"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"z"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"21D2"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"o"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"p"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"y"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"z"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"x"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1),t._v(" "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"x"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"o"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"p"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"y"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"21D2"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"o"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"p"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"y"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mi",{staticClass:"mjx-n",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"_"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"x"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1),t._v(" "),a("p",[t._v("一个三地址制定序列唯一确定了运算完成的顺序。")]),t._v(" "),a("p",[t._v("编译器如何根据分析树生成中间代码？（第六章）")]),t._v(" "),a("p",[t._v("目标代码生成：将中间语言映射到目标语言，为变量合理分配寄存器。")]),t._v(" "),a("p",[t._v("代码优化：分为机器无关优化和机器相关优化，区别在于前者是在中间代码层面，后者则是在目标代码层面")])])}),[],!1,null,null,null);s.default=c.exports}}]);