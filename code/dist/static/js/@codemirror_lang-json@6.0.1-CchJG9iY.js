import{p as o}from"./@lezer_json@1.0.2-CPz1-N-b.js";import{L as a,d as s,e as n,j as i,k as p,c as m}from"./@codemirror_language@6.10.3-bWXGUccf.js";import"./@lezer_lr@1.4.2-Cz8Me4wy.js";import"./@lezer_common@1.2.3-CP7NCNqd.js";import"./@lezer_highlight@1.2.1-DwVMghhY.js";import"./@codemirror_state@6.4.1-BMFlvjVs.js";import"./@codemirror_view@6.34.3-jfwbSA-b.js";import"./style-mod@4.1.2-Bc2inJdb.js";import"./w3c-keyname@2.2.8-Vcq4gwWv.js";const O=()=>r=>{try{JSON.parse(r.state.doc.toString())}catch(t){if(!(t instanceof SyntaxError))throw t;const e=c(t,r.state.doc);return[{from:e,message:t.message,severity:"error",to:e}]}return[]};function c(r,t){let e;return(e=r.message.match(/at position (\d+)/))?Math.min(+e[1],t.length):(e=r.message.match(/at line (\d+) column (\d+)/))?Math.min(t.line(+e[1]).from+ +e[2]-1,t.length):0}const d=a.define({name:"json",parser:o.configure({props:[s.add({Object:n({except:/^\s*\}/}),Array:n({except:/^\s*\]/})}),i.add({"Object Array":p})]}),languageData:{closeBrackets:{brackets:["[","{",'"']},indentOnInput:/^\s*[\}\]]$/}});function P(){return new m(d)}export{P as json,d as jsonLanguage,O as jsonParseLinter};