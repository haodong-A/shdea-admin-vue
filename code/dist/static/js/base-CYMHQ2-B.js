import{d as m,a as r,c as p,i as l,F as u,_ as d}from"./@vue_runtime-core@3.5.12-Bt7zQ28n.js";import{r as s}from"./@vue_reactivity@3.5.12-vtUNgENk.js";import"./@vue_shared@3.5.12-UFe9jxSY.js";import"./@braintree_sanitize-url@6.0.4-BB1FEM6a.js";const i=m({name:"undefined"}),x=m({...i,setup(c){const n=s('<p><span style="font-size: 22px;"><em>富文本编</em></span><span style="color: rgb(216, 68, 147); font-size: 22px;"><em>辑器</em></span></p>'),a=s(`class User {
  main() {
    console.log('Name', 'COOL')
  }
}

const user = new User();
user.main();
`);return(_,e)=>{const t=d("cl-editor-preview");return r(),p(u,null,[l(t,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=o=>n.value=o),name:"wang",text:"查看内容"},null,8,["modelValue"]),l(t,{modelValue:a.value,"onUpdate:modelValue":e[1]||(e[1]=o=>a.value=o),name:"monaco",props:{language:"typescript"},text:"查看代码"},null,8,["modelValue"])],64)}}});export{x as default};
