import{i as u}from"./comm-DyJRlPK0.js";import{c as f}from"./index-CmZ4zCGF.js";import{u as _}from"./index-CO9VWbz1.js";import"./@wangeditor_plugin-link-card@1.0.0_@wangeditor_editor@5.1.23_snabbdom@3.6.2-D_kdJ7Fs.js";import"./@wangeditor_editor@5.1.23-BNs7_II4.js";import{A as b}from"./lodash-es@4.17.21-D6PnhKvy.js";import{d as l,aJ as v,b as h,o as y,a as V,c as x,i as g,_ as z}from"./@vue_runtime-core@3.5.12-Bt7zQ28n.js";import{r as N,v as k,e as C}from"./@vue_reactivity@3.5.12-vtUNgENk.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./@braintree_sanitize-url@6.0.4-BB1FEM6a.js";import"./element-plus@2.8.4_vue@3.5.12_typescript@5.5.4_-C7CHjwzj.js";import"./@vue_shared@3.5.12-UFe9jxSY.js";import"./@vueuse_shared@9.13.0_vue@3.5.12_typescript@5.5.4_-u9BR5ga7.js";import"./@vueuse_core@9.13.0_vue@3.5.12_typescript@5.5.4_-B3H9WZsa.js";import"./@vue_runtime-dom@3.5.12-iSYHT88p.js";import"./@element-plus_icons-vue@2.3.1_vue@3.5.12_typescript@5.5.4_-DwlSpvcG.js";import"./@sxzz_popperjs-es@2.11.7-DkudPAZk.js";import"./@ctrl_tinycolor@3.6.1--gef7wIN.js";import"./dayjs@1.11.13-DXimfR00.js";import"./async-validator@4.2.5-DbzRl2Zc.js";import"./memoize-one@6.0.0-DQFWdy6B.js";import"./normalize-wheel-es@1.2.0-D2sExr9L.js";import"./@floating-ui_dom@1.6.11-Db5K7U0i.js";import"./@floating-ui_core@1.6.8-B67JZAQv.js";import"./@floating-ui_utils@0.2.8-BSxVqCX2.js";import"./lodash-unified@1.0.3_@types_lodash-es@4.17.12_lodash-es@4.17.21_lodash@4.17.21-D8rsWRp7.js";import"./vue@3.5.12_typescript@5.5.4-kKmasoJt.js";import"./@vueuse_core@11.1.0_vue@3.5.12_typescript@5.5.4_-BKaerpSy.js";import"./@vueuse_shared@11.1.0_vue@3.5.12_typescript@5.5.4_-DXriuop5.js";import"./store@2.0.12-RoMfFez2.js";import"./mitt@3.0.1-C1z4c41a.js";import"./axios@1.7.7-CCb-kr4I.js";import"./nprogress@0.2.0-B8S133N7.js";import"./pinia@2.2.4_typescript@5.5.4_vue@3.5.12_typescript@5.5.4_-CVf9nHlw.js";import"./vue-demi@0.14.10_vue@3.5.12_typescript@5.5.4_-DvPnGcuI.js";import"./@bytemd_plugin-math@1.21.0_bytemd@1.21.0-Dc_JUVYX.js";import"./remark-math@5.1.1-C8vps_rM.js";import"./micromark-extension-math@2.1.2-StTlgfH1.js";import"./micromark-factory-space@1.1.0-C57A7NS2.js";import"./micromark-util-character@1.2.0-D-NaLusr.js";import"./katex@0.16.11-CvgdMzdh.js";import"./mdast-util-math@2.0.2-Boy2OOKg.js";import"./longest-streak@3.1.0-BHNUWYJP.js";import"./mdast-util-to-markdown@1.5.0-D9VzXa1u.js";import"./micromark-util-decode-string@1.1.0-CdHYbWAu.js";import"./decode-named-character-reference@1.0.2-C3-224fz.js";import"./micromark-util-decode-numeric-character-reference@1.1.0-DRnCnno4.js";import"./vue-router@4.4.5_vue@3.5.12_typescript@5.5.4_-DGEeQixy.js";import"./mockjs@1.1.0-hXCvQ4kl.js";import"./vue-echarts@7.0.3_@vue_runtime-core@3.5.12_echarts@5.5.1_vue@3.5.12_typescript@5.5.4_-tmE62Ovn.js";import"./echarts@5.5.1-D8FyPvXx.js";import"./tslib@2.3.0-BDyQ-Jie.js";import"./zrender@5.6.0-CH1asNwC.js";const B={class:"cl-menu-select"},E=l({name:"cl-menu-select"}),F=l({...E,props:{modelValue:[Number,String],type:{type:Number,default:1},placeholder:String,size:String},emits:["update:modelValue"],setup(r,{emit:I}){const m=r,{service:a}=_(),s=u.useForm(),i=v(m,"modelValue",{get(e){return e&&Number(e)}}),p=N([]),n=h(()=>{const e=p.value.filter(t=>{var o;return t.id!=((o=s.value)==null?void 0:o.form.id)&&(m.type===0?t.type==0:m.type>t.type)});return f(b(e)).filter(t=>!t.parentId)});function c(){a.base.sys.menu.list().then(e=>{p.value=e})}return y(()=>{c()}),(e,t)=>{const o=z("el-tree-select");return V(),x("div",B,[g(o,{modelValue:k(i),"onUpdate:modelValue":t[0]||(t[0]=d=>C(i)?i.value=d:null),data:n.value,props:{label:"name",value:"id",disabled:"disabled",children:"children"},clearable:"","default-expand-all":"","check-strictly":"",filterable:"",size:r.size,placeholder:r.placeholder},null,8,["modelValue","data","size","placeholder"])])}}}),Ie=S(F,[["__scopeId","data-v-afe2526a"]]);export{Ie as default};