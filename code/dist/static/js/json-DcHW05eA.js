import{a as f}from"./@vueuse_core@11.1.0_vue@3.5.12_typescript@5.5.4_-BKaerpSy.js";import{a as _}from"./element-plus@2.8.4_vue@3.5.12_typescript@5.5.4_-C7CHjwzj.js";import{bB as h,bw as g}from"./lodash-es@4.17.21-D6PnhKvy.js";import{d as c,b as v,a as m,c as b,i as e,L as a,K as y,_ as i,P as x,f as k,H as S}from"./@vue_runtime-core@3.5.12-Bt7zQ28n.js";import{v as u}from"./@vue_reactivity@3.5.12-vtUNgENk.js";import{O as j}from"./@vue_shared@3.5.12-UFe9jxSY.js";import"./@vueuse_shared@11.1.0_vue@3.5.12_typescript@5.5.4_-DXriuop5.js";import"./@vueuse_shared@9.13.0_vue@3.5.12_typescript@5.5.4_-u9BR5ga7.js";import"./@vueuse_core@9.13.0_vue@3.5.12_typescript@5.5.4_-B3H9WZsa.js";import"./@braintree_sanitize-url@6.0.4-BB1FEM6a.js";import"./@vue_runtime-dom@3.5.12-iSYHT88p.js";import"./@element-plus_icons-vue@2.3.1_vue@3.5.12_typescript@5.5.4_-DwlSpvcG.js";import"./@sxzz_popperjs-es@2.11.7-DkudPAZk.js";import"./@ctrl_tinycolor@3.6.1--gef7wIN.js";import"./dayjs@1.11.13-DXimfR00.js";import"./async-validator@4.2.5-DbzRl2Zc.js";import"./memoize-one@6.0.0-DQFWdy6B.js";import"./normalize-wheel-es@1.2.0-D2sExr9L.js";import"./@floating-ui_dom@1.6.11-Db5K7U0i.js";import"./@floating-ui_core@1.6.8-B67JZAQv.js";import"./@floating-ui_utils@0.2.8-BSxVqCX2.js";import"./lodash-unified@1.0.3_@types_lodash-es@4.17.12_lodash-es@4.17.21_lodash@4.17.21-D8rsWRp7.js";import"./vue@3.5.12_typescript@5.5.4-kKmasoJt.js";const B={key:0,class:"cl-code-json__wrap"},C={class:"text"},N=c({name:"cl-code-json"}),X=c({...N,props:{modelValue:[String,Object],popover:Boolean,height:{type:[Number,String],default:"100%"},maxHeight:{type:[Number,String],default:300}},setup(l){const t=l,{copy:d}=f(),r=v(()=>{const o=t.modelValue;return h(o)?o:g(o)?JSON.stringify(o,null,4):""}),n=c({setup(o,{slots:s}){function p(){d(r.value),_.success("复制成功")}return()=>e("div",{class:"cl-code-json"},[e("div",{class:"op"},[e(i("el-button"),{type:"success",size:"small",onClick:p},{default:()=>[x("copy")]}),s.op&&s.op()]),e(i("el-scrollbar"),{class:"scrollbar","max-height":t.maxHeight,height:t.height},{default:()=>[e("pre",null,[e("code",null,[r.value])])]})])}});return(o,s)=>{const p=i("el-popover");return l.popover?(m(),b("div",B,[e(p,{width:"auto",placement:"right","popper-class":"cl-code-json__popper",effect:"dark"},{reference:a(()=>[k("span",C,j(r.value),1)]),default:a(()=>[e(u(n))]),_:1})])):(m(),y(u(n),{key:1},{op:a(()=>[S(o.$slots,"op")]),_:3}))}}});export{X as default};