import{m as R,u as j,P,h as N}from"./index-Ghdj5350.js";import"./store@2.0.12-RoMfFez2.js";import"./@wangeditor_plugin-link-card@1.0.0_@wangeditor_editor@5.1.23_snabbdom@3.6.2-D_kdJ7Fs.js";import"./@wangeditor_editor@5.1.23-BNs7_II4.js";import{by as B,i as S,bB as Y,a as k}from"./lodash-es@4.17.21-D6PnhKvy.js";import{a as F}from"./element-plus@2.8.4_vue@3.5.12_typescript@5.5.4_-C7CHjwzj.js";function V(){const{host:b}=R.config("helper"),{user:$}=j();async function d(y,c,p){const e=!!p;let t="";return new Promise((r,i)=>{fetch(b+"/open/code/gen/data",{method:"POST",headers:{Authorization:$.token,"Content-Type":"application/json"},body:JSON.stringify({params:c,label:y,stream:e})}).then(o=>{if(o.body)if(e){const u=o.body.getReader(),f=new TextDecoder("utf-8"),a=new ReadableStream({start(m){function n(){u.read().then(({done:v,value:C})=>{if(v){m.close();return}let h=f.decode(C,{stream:!0});if(p){t&&(h=t+h),h.indexOf("data:")==0&&(h=`

`+h);try{h.split(/\n\ndata:/g).filter(Boolean).map(D=>JSON.parse(D)).forEach(p),t=""}catch{t=h}}m.enqueue(h),n()})}n()}});return new Response(a)}else return o.json()}).then(o=>{if(e)return o;o.code==1e3?r(o.data.result):i(o)}).catch(i)})}return{invokeFlow:d}}function H(){const b={dict({comment:c}){const[p,...e]=c.split(" "),t=e.map(i=>{const[o,u]=i.split("-");return{label:u,value:isNaN(Number(o))?o:Number(o)}});t.length==2&&t.forEach(i=>{i.value==1?i.type="success":i.type="danger"});const r={table:{label:p,dict:t,minWidth:120},form:{label:p,component:{name:"",options:t}}};return t[0]&&(r.form.value=t[0].value),r.form.component.name=e.length>4?"el-select":"el-radio-group",r},dict_multiple(c){var t,r;const{table:p,form:e}=b.dict(c);switch((t=e.component)!=null&&t.props||(e.component.props={}),e.value||(e.value=[]),(r=e.component)==null?void 0:r.name){case"el-select":Object.assign(e.component.props,{multiple:!0,filterable:!0});break;case"el-radio-group":e.component.name="el-checkbox-group";break}return{table:p,form:e}}};function $(c,p){var o,u,f;const e=c.propertyName;let t=c.comment||"",r,i=!1;return P.find(a=>{let m=!1;if(c.component?c.component==a.value&&(m=!0):a.test&&(m=!!a.test.find(n=>B(n)?n.test(e):S(n)?n(e):Y(n)?n==e?!0:new RegExp(`${n}$`).test(e.toLocaleLowerCase()):!1)),a.group&&a.group.includes(e)&&a.group.some(n=>p.find(v=>v.propertyName==n))&&(a.group[0]==e?m=!0:i=!0),m)if(a.handler){const n=Y(a.handler)?b[a.handler]:a.handler;S(n)&&(r=n(c))}else r={...a,test:void 0};return m}),r||(r=(o=P.find(a=>a.value=="input"))==null?void 0:o.render),t=((f=(u=t==null?void 0:t.split)==null?void 0:u.call(t," "))==null?void 0:f[0])||c.propertyName,{column:{label:t,prop:e,...r==null?void 0:r.table},item:{label:t,prop:e,...r==null?void 0:r.form},isHidden:i}}function d({router:c="",columns:p=[],prefix:e="",api:t=[],fieldEq:r=[],keyWordLikeFields:i=[]}){const o={items:[]},u={columns:[]},f={};p.forEach(l=>{var E;const{item:s,column:g,isHidden:M}=$(l,p);if(M)return!1;l.nullable||(s.required=!0);const O=((E=s.component)==null?void 0:E.options)||g.dict;if(!k(O)){f[s.prop]=O;const w=`$$options.${s.prop}$$`;g.component||(g.dict=w),s.component.options=w}if(["createTime","updateTime","id","endTime","endDate"].includes(s.prop)||o.items.push(s),["id"].includes(s.prop)||(s.prop=="createTime"&&(g.sortable="desc"),u.columns.push(g)),["startTime","startDate"].includes(s.prop)){const w=s.prop.replace("start","");if(p.find(T=>T.propertyName=="end"+w)){s.prop=w.toLocaleLowerCase();const T=s.prop=="time";s.label=T?"时间范围":"日期范围",s.hook="datetimeRange",s.component={name:"el-date-picker",props:{type:T?"datetimerange":"daterange",valueFormat:T?"YYYY-MM-DD HH:mm:ss":"YYYY-MM-DD 00:00:00",defaultTime:[new Date(2e3,1,1,0,0,0),new Date(2e3,1,1,23,59,59)]}}}}});const a=e.replace("/admin","service").split("/"),m=t.map(l=>l.path),n={add:m.includes("/add"),del:m.includes("/delete"),update:m.includes("/info")&&m.includes("/update"),page:m.includes("/page"),upsert:!0};if(n.upsert=n.add||n.update,n.del||n.upsert){const l=[];n.upsert&&l.push("edit"),n.del&&l.push("delete"),u.columns.push({type:"op",buttons:l})}n.del?u.columns.unshift({type:"selection"}):u.columns.unshift({label:"#",type:"index"});const v=r.map(l=>{if(k(f[l]))return"";const s=o.items.find(g=>g.prop==l);return s?`<!-- 筛选${s.label} -->
<cl-filter label="${s.label}">
<cl-select prop="${l}" :options="options.${l}" />
</cl-filter>`:""}).filter(Boolean).join(`
`),C=i.map(l=>{var s;return(s=u.columns.find(g=>g.prop==l))==null?void 0:s.label}).filter(l=>!!l).join("、"),h=`${k(f)?"":`
// 选项
const options = reactive(`+y(f)+`)
`}`;let x="";return h&&(x=`import { reactive } from 'vue';
`),`<template>
	<cl-crud ref="Crud">
		<cl-row>
			<!-- 刷新按钮 -->
			<cl-refresh-btn />
			${n.add?`<!-- 新增按钮 -->
			<cl-add-btn />`:""}
			${n.del?`<!-- 删除按钮 -->
			<cl-multi-delete-btn />`:""}
			${v}
			<cl-flex1 />
			<!-- 关键字搜索 -->
			<cl-search-key placeholder="搜索${C||"关键字"}" />
		</cl-row>

		<cl-row>
			<!-- 数据表格 -->
			<cl-table ref="Table" />
		</cl-row>

		<cl-row>
			<cl-flex1 />
			<!-- 分页控件 -->
			<cl-pagination />
		</cl-row>

		<!-- 新增、编辑 -->
		<cl-upsert ref="Upsert" />
	</cl-crud>
</template>

<script lang="ts" name="${c.replace(/^\//,"").replace(/\//g,"-")}" setup>
import { useCrud, useTable, useUpsert } from "@cool-vue/crud";
import { useCool } from "/@/cool";
${x}
const { service } = useCool();
${h}
// cl-upsert
const Upsert = useUpsert(${y(o)});

// cl-table
const Table = useTable(${y(u)});

// cl-crud
const Crud = useCrud(
	{
		service: ${a.join(".")}
	},
	(app) => {
		app.refresh();
	}
);

// 刷新
function refresh(params?: any) {
	Crud.value?.refresh(params);
}
<\/script>`.replace(/"\$\$|\$\$"/g,"")}function y(c){const p=[];let e=JSON.stringify(c,(t,r)=>{if(S(r)){const i=r.toString();return p.push([JSON.stringify({[t]:i}),i]),i}else return r});return p.forEach(t=>{e=e.replace(t[0].substring(1,t[0].length-1),t[1])}),e}return{handler:b,createVue:d,createComponent:$,toCodeString:y}}function I(){const{createVue:b}=H();function $(d){return new Promise((y,c)=>{var p;d.viewPath=`modules/${d.module}/views${(p=d.router)==null?void 0:p.replace(`/${d.module}`,"")}.vue`,N.base.sys.menu.add({type:1,isShow:!0,keepAlive:!0,...d,api:void 0,code:void 0,columns:void 0}).then(e=>{var r;const t=(r=d.api)==null?void 0:r.map(i=>{var u;const o={type:2,parentId:e.id,name:i.summary||i.path,perms:[i.path]};return i.path=="/update"&&(u=d.api)!=null&&u.find(f=>f.path=="/info")&&o.perms.push("/info"),{...o,perms:o.perms.map(f=>{var a;return(((a=d.prefix)==null?void 0:a.replace("/admin/",""))+f).replace(/\//g,":")}).join(",")}});N.base.sys.menu.add(t).then(()=>{y(()=>{N.request({url:"/__cool_createMenu",method:"POST",proxy:!1,data:{code:b(d),...d}}).then(()=>{location.reload()})})})}).catch(e=>{F.error(e.message),c()})})}return{create:$,createVue:b}}export{I as a,V as u};
