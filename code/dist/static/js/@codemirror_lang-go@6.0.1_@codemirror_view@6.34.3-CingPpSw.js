import{p as b}from"./@lezer_go@1.0.0-Kok6ogp6.js";import{s as w,L as S,d as g,e as m,f as h,h as I,j as C,k as L,c as D}from"./@codemirror_language@6.10.3-bWXGUccf.js";import{s as o,i as B,c as v}from"./@codemirror_autocomplete@6.18.3_@codemirror_language@6.10.3_@codemirror_state@6.4.1_@codemirr_sx5w6mvzjgorrxc7ihdhoe7raa-7aJcrDyA.js";import{I as N,a as F}from"./@lezer_common@1.2.3-CP7NCNqd.js";import"./@lezer_lr@1.4.2-Cz8Me4wy.js";import"./@lezer_highlight@1.2.1-DwVMghhY.js";import"./@codemirror_state@6.4.1-BMFlvjVs.js";import"./@codemirror_view@6.34.3-jfwbSA-b.js";import"./style-mod@4.1.2-Bc2inJdb.js";import"./w3c-keyname@2.2.8-Vcq4gwWv.js";const T=[o("func ${name}(${params}) ${type} {\n	${}\n}",{label:"func",detail:"declaration",type:"keyword"}),o("func (${receiver}) ${name}(${params}) ${type} {\n	${}\n}",{label:"func",detail:"method declaration",type:"keyword"}),o("var ${name} = ${value}",{label:"var",detail:"declaration",type:"keyword"}),o("type ${name} ${type}",{label:"type",detail:"declaration",type:"keyword"}),o("const ${name} = ${value}",{label:"const",detail:"declaration",type:"keyword"}),o("type ${name} = ${type}",{label:"type",detail:"alias declaration",type:"keyword"}),o("for ${init}; ${test}; ${update} {\n	${}\n}",{label:"for",detail:"loop",type:"keyword"}),o("for ${i} := range ${value} {\n	${}\n}",{label:"for",detail:"range",type:"keyword"}),o(`select {
	\${}
}`,{label:"select",detail:"statement",type:"keyword"}),o("case ${}:\n${}",{label:"case",type:"keyword"}),o("switch ${} {\n	${}\n}",{label:"switch",detail:"statement",type:"keyword"}),o("switch ${}.(${type}) {\n	${}\n}",{label:"switch",detail:"type statement",type:"keyword"}),o("if ${} {\n	${}\n}",{label:"if",detail:"block",type:"keyword"}),o(`if \${} {
	\${}
} else {
	\${}
}`,{label:"if",detail:"/ else block",type:"keyword"}),o('import ${name} "${module}"\n${}',{label:"import",detail:"declaration",type:"keyword"})],f=new F,u=new Set(["SourceFile","Block","FunctionDecl","MethodDecl","FunctionLiteral","ForStatement","SwitchStatement","TypeSwitchStatement","IfStatement"]);function s(e,a){return(r,l)=>{e:for(let t=r.node.firstChild,c=0,n=null;;){for(;!t;){if(!c)break e;c--,t=n.nextSibling,n=n.parent}a&&t.name==a||t.name=="SpecList"?(c++,n=t,t=t.firstChild):(t.name=="DefName"&&l(t,e),t=t.nextSibling)}return!0}}const x={FunctionDecl:s("function"),VarDecl:s("var","VarSpec"),ConstDecl:s("constant","ConstSpec"),TypeDecl:s("type","TypeSpec"),ImportDecl:s("constant","ImportSpec"),Parameter:s("var"),__proto__:null};function y(e,a){let r=f.get(a);if(r)return r;let l=[],t=!0;function c(n,i){let k=e.sliceString(n.from,n.to);l.push({label:k,type:i})}return a.cursor(N.IncludeAnonymous).iterate(n=>{if(t)t=!1;else if(n.name){let i=x[n.name];if(i&&i(n,c)||u.has(n.name))return!1}else if(n.to-n.from>8192){for(let i of y(e,n.node))l.push(i);return!1}}),f.set(a,l),l}const d=/^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,$=["String","LineComment","BlockComment","DefName","LabelName","FieldName",".","?."],V=e=>{let a=w(e.state).resolveInner(e.pos,-1);if($.indexOf(a.name)>-1)return null;let r=a.name=="VariableName"||a.to-a.from<20&&d.test(e.state.sliceDoc(a.from,a.to));if(!r&&!e.explicit)return null;let l=[];for(let t=a;t;t=t.parent)u.has(t.name)&&(l=l.concat(y(e.state.doc,t)));return{options:l,from:r?a.from:e.pos,validFor:d}},p=S.define({name:"go",parser:b.configure({props:[g.add({IfStatement:m({except:/^\s*({|else\b)/}),LabeledStatement:h,"SwitchBlock SelectBlock":e=>{let a=e.textAfter,r=/^\s*\}/.test(a),l=/^\s*(case|default)\b/.test(a);return e.baseIndent+(r||l?0:e.unit)},Block:I({closing:"}"}),BlockComment:()=>null,Statement:m({except:/^{/})}),C.add({"Block SwitchBlock SelectBlock LiteralValue InterfaceType StructType SpecList":L,BlockComment(e){return{from:e.from+2,to:e.to-2}}})]}),languageData:{closeBrackets:{brackets:["(","[","{","'",'"',"`"]},commentTokens:{line:"//",block:{open:"/*",close:"*/"}},indentOnInput:/^\s*(?:case\b|default\b|\})$/}});let _=e=>({label:e,type:"keyword"});const M="interface struct chan map package go return break continue goto fallthrough else defer range true false nil".split(" ").map(_);function H(){let e=T.concat(M);return new D(p,[p.data.of({autocomplete:B($,v(e))}),p.data.of({autocomplete:V})])}export{H as go,p as goLanguage,V as localCompletionSource,T as snippets};