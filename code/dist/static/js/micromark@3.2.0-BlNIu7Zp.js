import{c as fn}from"./micromark-util-combine-extensions@1.1.0-B4FRL3HR.js";import{f as K}from"./micromark-factory-space@1.1.0-C57A7NS2.js";import{f as V}from"./micromark-util-character@1.2.0-D-NaLusr.js";import{s as G,p as dn}from"./micromark-util-chunked@1.1.0-DrRIdSP-.js";import{b as hn,c as pn,l as b,a as xn,d as mn,e as H,h as gn,t as Q,s as Z,f as kn,g as nn,i as rn,j as sn,k as U,m as wn,n as J,o as bn,p as Cn,q as vn,r as _n,u as In,v as yn}from"./micromark-core-commonmark@1.1.0-DsNB-gXs.js";import{r as Sn}from"./micromark-util-resolve-all@1.1.0-PQCKh0dx.js";import{s as An}from"./micromark-util-subtokenize@1.1.0-Bno4aDYn.js";const zn={tokenize:Fn};function Fn(n){const t=n.attempt(this.parser.constructs.contentInitial,e,r);let i;return t;function e(l){if(l===null){n.consume(l);return}return n.enter("lineEnding"),n.consume(l),n.exit("lineEnding"),K(n,t,"linePrefix")}function r(l){return n.enter("paragraph"),s(l)}function s(l){const d=n.enter("chunkText",{contentType:"text",previous:i});return i&&(i.next=d),i=d,u(l)}function u(l){if(l===null){n.exit("chunkText"),n.exit("paragraph"),n.consume(l);return}return V(l)?(n.consume(l),n.exit("chunkText"),s):(n.consume(l),u)}}const Tn={tokenize:En},en={tokenize:On};function En(n){const t=this,i=[];let e=0,r,s,u;return l;function l(a){if(e<i.length){const k=i[e];return t.containerState=k[1],n.attempt(k[0].continuation,d,o)(a)}return o(a)}function d(a){if(e++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,r&&T();const k=t.events.length;let w=k,m;for(;w--;)if(t.events[w][0]==="exit"&&t.events[w][1].type==="chunkFlow"){m=t.events[w][1].end;break}S(e);let C=k;for(;C<t.events.length;)t.events[C][1].end=Object.assign({},m),C++;return G(t.events,w+1,0,t.events.slice(k)),t.events.length=C,o(a)}return l(a)}function o(a){if(e===i.length){if(!r)return x(a);if(r.currentConstruct&&r.currentConstruct.concrete)return y(a);t.interrupt=!!(r.currentConstruct&&!r._gfmTableDynamicInterruptHack)}return t.containerState={},n.check(en,h,p)(a)}function h(a){return r&&T(),S(e),x(a)}function p(a){return t.parser.lazy[t.now().line]=e!==i.length,u=t.now().offset,y(a)}function x(a){return t.containerState={},n.attempt(en,v,y)(a)}function v(a){return e++,i.push([t.currentConstruct,t.containerState]),x(a)}function y(a){if(a===null){r&&T(),S(0),n.consume(a);return}return r=r||t.parser.flow(t.now()),n.enter("chunkFlow",{contentType:"flow",previous:s,_tokenizer:r}),O(a)}function O(a){if(a===null){B(n.exit("chunkFlow"),!0),S(0),n.consume(a);return}return V(a)?(n.consume(a),B(n.exit("chunkFlow")),e=0,t.interrupt=void 0,l):(n.consume(a),O)}function B(a,k){const w=t.sliceStream(a);if(k&&w.push(null),a.previous=s,s&&(s.next=a),s=a,r.defineSkip(a.start),r.write(w),t.parser.lazy[a.start.line]){let m=r.events.length;for(;m--;)if(r.events[m][1].start.offset<u&&(!r.events[m][1].end||r.events[m][1].end.offset>u))return;const C=t.events.length;let A=C,j,z;for(;A--;)if(t.events[A][0]==="exit"&&t.events[A][1].type==="chunkFlow"){if(j){z=t.events[A][1].end;break}j=!0}for(S(e),m=C;m<t.events.length;)t.events[m][1].end=Object.assign({},z),m++;G(t.events,A+1,0,t.events.slice(C)),t.events.length=m}}function S(a){let k=i.length;for(;k-- >a;){const w=i[k];t.containerState=w[1],w[0].exit.call(t,n)}i.length=a}function T(){r.write([null]),s=void 0,r=void 0,t.containerState._closeFlow=void 0}}function On(n,t,i){return K(n,n.attempt(this.parser.constructs.document,t,i),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}const Bn={tokenize:jn};function jn(n){const t=this,i=n.attempt(hn,e,n.attempt(this.parser.constructs.flowInitial,r,K(n,n.attempt(this.parser.constructs.flow,r,n.attempt(pn,r)),"linePrefix")));return i;function e(s){if(s===null){n.consume(s);return}return n.enter("lineEndingBlank"),n.consume(s),n.exit("lineEndingBlank"),t.currentConstruct=void 0,i}function r(s){if(s===null){n.consume(s);return}return n.enter("lineEnding"),n.consume(s),n.exit("lineEnding"),t.currentConstruct=void 0,i}}const Pn={resolveAll:un()},Ln=on("string"),$n=on("text");function on(n){return{tokenize:t,resolveAll:un(n==="text"?Mn:void 0)};function t(i){const e=this,r=this.parser.constructs[n],s=i.attempt(r,u,l);return u;function u(h){return o(h)?s(h):l(h)}function l(h){if(h===null){i.consume(h);return}return i.enter("data"),i.consume(h),d}function d(h){return o(h)?(i.exit("data"),s(h)):(i.consume(h),d)}function o(h){if(h===null)return!0;const p=r[h];let x=-1;if(p)for(;++x<p.length;){const v=p[x];if(!v.previous||v.previous.call(e,e.previous))return!0}return!1}}}function un(n){return t;function t(i,e){let r=-1,s;for(;++r<=i.length;)s===void 0?i[r]&&i[r][1].type==="data"&&(s=r,r++):(!i[r]||i[r][1].type!=="data")&&(r!==s+2&&(i[s][1].end=i[r-1][1].end,i.splice(s+2,r-s-2),r=s+2),s=void 0);return n?n(i,e):i}}function Mn(n,t){let i=0;for(;++i<=n.length;)if((i===n.length||n[i][1].type==="lineEnding")&&n[i-1][1].type==="data"){const e=n[i-1][1],r=t.sliceStream(e);let s=r.length,u=-1,l=0,d;for(;s--;){const o=r[s];if(typeof o=="string"){for(u=o.length;o.charCodeAt(u-1)===32;)l++,u--;if(u)break;u=-1}else if(o===-2)d=!0,l++;else if(o!==-1){s++;break}}if(l){const o={type:i===n.length||d||l<2?"lineSuffix":"hardBreakTrailing",start:{line:e.end.line,column:e.end.column-l,offset:e.end.offset-l,_index:e.start._index+s,_bufferIndex:s?u:e.start._bufferIndex+u},end:Object.assign({},e.end)};e.end=Object.assign({},o.start),e.start.offset===e.end.offset?Object.assign(e,o):(n.splice(i,0,["enter",o,t],["exit",o,t]),i+=2)}i++}return n}function Nn(n,t,i){let e=Object.assign(i?Object.assign({},i):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1});const r={},s=[];let u=[],l=[];const d={consume:T,enter:a,exit:k,attempt:C(w),check:C(m),interrupt:C(m,{interrupt:!0})},o={previous:null,code:null,containerState:{},events:[],parser:n,sliceStream:v,sliceSerialize:x,now:y,defineSkip:O,write:p};let h=t.tokenize.call(o,d);return t.resolveAll&&s.push(t),o;function p(c){return u=dn(u,c),B(),u[u.length-1]!==null?[]:(A(t,0),o.events=Sn(s,o.events,o),o.events)}function x(c,f){return Dn(v(c),f)}function v(c){return Rn(u,c)}function y(){const{line:c,column:f,offset:_,_index:I,_bufferIndex:E}=e;return{line:c,column:f,offset:_,_index:I,_bufferIndex:E}}function O(c){r[c.line]=c.column,z()}function B(){let c;for(;e._index<u.length;){const f=u[e._index];if(typeof f=="string")for(c=e._index,e._bufferIndex<0&&(e._bufferIndex=0);e._index===c&&e._bufferIndex<f.length;)S(f.charCodeAt(e._bufferIndex));else S(f)}}function S(c){h=h(c)}function T(c){V(c)?(e.line++,e.column=1,e.offset+=c===-3?2:1,z()):c!==-1&&(e.column++,e.offset++),e._bufferIndex<0?e._index++:(e._bufferIndex++,e._bufferIndex===u[e._index].length&&(e._bufferIndex=-1,e._index++)),o.previous=c}function a(c,f){const _=f||{};return _.type=c,_.start=y(),o.events.push(["enter",_,o]),l.push(_),_}function k(c){const f=l.pop();return f.end=y(),o.events.push(["exit",f,o]),f}function w(c,f){A(c,f.from)}function m(c,f){f.restore()}function C(c,f){return _;function _(I,E,P){let N,L,W,R;return Array.isArray(I)?D(I):"tokenize"in I?D([I]):ln(I);function ln(g){return q;function q(F){const $=F!==null&&g[F],M=F!==null&&g.null,cn=[...Array.isArray($)?$:$?[$]:[],...Array.isArray(M)?M:M?[M]:[]];return D(cn)(F)}}function D(g){return N=g,L=0,g.length===0?P:X(g[L])}function X(g){return q;function q(F){return R=j(),W=g,g.partial||(o.currentConstruct=g),g.name&&o.parser.constructs.disable.null.includes(g.name)?Y():g.tokenize.call(f?Object.assign(Object.create(o),f):o,d,an,Y)(F)}}function an(g){return c(W,R),E}function Y(g){return R.restore(),++L<N.length?X(N[L]):P}}}function A(c,f){c.resolveAll&&!s.includes(c)&&s.push(c),c.resolve&&G(o.events,f,o.events.length-f,c.resolve(o.events.slice(f),o)),c.resolveTo&&(o.events=c.resolveTo(o.events,o))}function j(){const c=y(),f=o.previous,_=o.currentConstruct,I=o.events.length,E=Array.from(l);return{restore:P,from:I};function P(){e=c,o.previous=f,o.currentConstruct=_,o.events.length=I,l=E,z()}}function z(){e.line in r&&e.column<2&&(e.column=r[e.line],e.offset+=r[e.line]-1)}}function Rn(n,t){const i=t.start._index,e=t.start._bufferIndex,r=t.end._index,s=t.end._bufferIndex;let u;if(i===r)u=[n[i].slice(e,s)];else{if(u=n.slice(i,r),e>-1){const l=u[0];typeof l=="string"?u[0]=l.slice(e):u.shift()}s>0&&u.push(n[r].slice(0,s))}return u}function Dn(n,t){let i=-1;const e=[];let r;for(;++i<n.length;){const s=n[i];let u;if(typeof s=="string")u=s;else switch(s){case-5:{u="\r";break}case-4:{u=`
`;break}case-3:{u=`\r
`;break}case-2:{u=t?" ":"	";break}case-1:{if(!t&&r)continue;u=" ";break}default:u=String.fromCharCode(s)}r=s===-2,e.push(u)}return e.join("")}const qn={42:b,43:b,45:b,48:b,49:b,50:b,51:b,52:b,53:b,54:b,55:b,56:b,57:b,62:xn},Hn={91:mn},Qn={[-2]:H,[-1]:H,32:H},Un={35:gn,42:Q,45:[Z,Q],60:kn,61:Z,95:Q,96:nn,126:nn},Gn={38:rn,92:sn},Jn={[-5]:U,[-4]:U,[-3]:U,33:wn,38:rn,42:J,60:[bn,Cn],91:vn,92:[_n,sn],93:In,95:J,96:yn},Kn={null:[J,Pn]},Vn={null:[42,95]},Wn={null:[]},Xn=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:Vn,contentInitial:Hn,disable:Wn,document:qn,flow:Un,flowInitial:Qn,insideSpan:Kn,string:Gn,text:Jn},Symbol.toStringTag,{value:"Module"}));function se(n){const i=fn([Xn,...(n||{}).extensions||[]]),e={defined:[],lazy:{},constructs:i,content:r(zn),document:r(Tn),flow:r(Bn),string:r(Ln),text:r($n)};return e;function r(s){return u;function u(l){return Nn(e,s,l)}}}const tn=/[\0\t\n\r]/g;function oe(){let n=1,t="",i=!0,e;return r;function r(s,u,l){const d=[];let o,h,p,x,v;for(s=t+s.toString(u),p=0,t="",i&&(s.charCodeAt(0)===65279&&p++,i=void 0);p<s.length;){if(tn.lastIndex=p,o=tn.exec(s),x=o&&o.index!==void 0?o.index:s.length,v=s.charCodeAt(x),!o){t=s.slice(p);break}if(v===10&&p===x&&e)d.push(-3),e=void 0;else switch(e&&(d.push(-5),e=void 0),p<x&&(d.push(s.slice(p,x)),n+=x-p),v){case 0:{d.push(65533),n++;break}case 9:{for(h=Math.ceil(n/4)*4,d.push(-2);n++<h;)d.push(-1);break}case 10:{d.push(-4),n=1;break}default:e=!0,n=1}p=x+1}return l&&(e&&d.push(-5),t&&d.push(t),d.push(null)),d}}function ue(n){for(;!An(n););return n}export{se as a,oe as b,ue as p};