import{a as pt,c as dt}from"./@popperjs_core@2.11.8-CvwSYPO-.js";var lt="tippy-box",ke="tippy-content",vt="tippy-backdrop",Fe="tippy-arrow",We="tippy-svg-arrow",I={passive:!0,capture:!0},$e=function(){return document.body};function oe(e,r,i){if(Array.isArray(e)){var a=e[r];return a??(Array.isArray(i)?i[r]:i)}return e}function pe(e,r){var i={}.toString.call(e);return i.indexOf("[object")===0&&i.indexOf(r+"]")>-1}function ze(e,r){return typeof e=="function"?e.apply(void 0,r):e}function Ve(e,r){if(r===0)return e;var i;return function(a){clearTimeout(i),i=setTimeout(function(){e(a)},r)}}function mt(e,r){var i=Object.assign({},e);return r.forEach(function(a){delete i[a]}),i}function gt(e){return e.split(/\s+/).filter(Boolean)}function B(e){return[].concat(e)}function Ne(e,r){e.indexOf(r)===-1&&e.push(r)}function ht(e){return e.filter(function(r,i){return e.indexOf(r)===i})}function bt(e){return e.split("-")[0]}function Q(e){return[].slice.call(e)}function Re(e){return Object.keys(e).reduce(function(r,i){return e[i]!==void 0&&(r[i]=e[i]),r},{})}function $(){return document.createElement("div")}function Z(e){return["Element","Fragment"].some(function(r){return pe(e,r)})}function yt(e){return pe(e,"NodeList")}function Tt(e){return pe(e,"MouseEvent")}function Et(e){return!!(e&&e._tippy&&e._tippy.reference===e)}function At(e){return Z(e)?[e]:yt(e)?Q(e):Array.isArray(e)?e:Q(document.querySelectorAll(e))}function ae(e,r){e.forEach(function(i){i&&(i.style.transitionDuration=r+"ms")})}function Be(e,r){e.forEach(function(i){i&&i.setAttribute("data-state",r)})}function Ot(e){var r,i=B(e),a=i[0];return a!=null&&(r=a.ownerDocument)!=null&&r.body?a.ownerDocument:document}function wt(e,r){var i=r.clientX,a=r.clientY;return e.every(function(m){var d=m.popperRect,u=m.popperState,h=m.props,l=h.interactiveBorder,T=bt(u.placement),b=u.modifiersData.offset;if(!b)return!0;var x=T==="bottom"?b.top.y:0,M=T==="top"?b.bottom.y:0,V=T==="right"?b.left.x:0,L=T==="left"?b.right.x:0,U=d.top-a+x>l,v=a-d.bottom-M>l,g=d.left-i+V>l,E=i-d.right-L>l;return U||v||g||E})}function se(e,r,i){var a=r+"EventListener";["transitionend","webkitTransitionEnd"].forEach(function(m){e[a](m,i)})}function Ue(e,r){for(var i=r;i;){var a;if(e.contains(i))return!0;i=i.getRootNode==null||(a=i.getRootNode())==null?void 0:a.host}return!1}var S={isTouch:!1},Pe=0;function Dt(){S.isTouch||(S.isTouch=!0,window.performance&&document.addEventListener("mousemove",qe))}function qe(){var e=performance.now();e-Pe<20&&(S.isTouch=!1,document.removeEventListener("mousemove",qe)),Pe=e}function Lt(){var e=document.activeElement;if(Et(e)){var r=e._tippy;e.blur&&!r.state.isVisible&&e.blur()}}function Ct(){document.addEventListener("touchstart",Dt,I),window.addEventListener("blur",Lt)}var St=typeof window<"u"&&typeof document<"u",xt=St?!!window.msCrypto:!1,Mt={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},It={allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999},O=Object.assign({appendTo:$e,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},Mt,It),Vt=Object.keys(O),Nt=function(r){var i=Object.keys(r);i.forEach(function(a){O[a]=r[a]})};function Ye(e){var r=e.plugins||[],i=r.reduce(function(a,m){var d=m.name,u=m.defaultValue;if(d){var h;a[d]=e[d]!==void 0?e[d]:(h=O[d])!=null?h:u}return a},{});return Object.assign({},e,i)}function Rt(e,r){var i=r?Object.keys(Ye(Object.assign({},O,{plugins:r}))):Vt,a=i.reduce(function(m,d){var u=(e.getAttribute("data-tippy-"+d)||"").trim();if(!u)return m;if(d==="content")m[d]=u;else try{m[d]=JSON.parse(u)}catch{m[d]=u}return m},{});return a}function _e(e,r){var i=Object.assign({},r,{content:ze(r.content,[e])},r.ignoreAttributes?{}:Rt(e,r.plugins));return i.aria=Object.assign({},O.aria,i.aria),i.aria={expanded:i.aria.expanded==="auto"?r.interactive:i.aria.expanded,content:i.aria.content==="auto"?r.interactive?null:"describedby":i.aria.content},i}var Bt=function(){return"innerHTML"};function ce(e,r){e[Bt()]=r}function je(e){var r=$();return e===!0?r.className=Fe:(r.className=We,Z(e)?r.appendChild(e):ce(r,e)),r}function He(e,r){Z(r.content)?(ce(e,""),e.appendChild(r.content)):typeof r.content!="function"&&(r.allowHTML?ce(e,r.content):e.textContent=r.content)}function fe(e){var r=e.firstElementChild,i=Q(r.children);return{box:r,content:i.find(function(a){return a.classList.contains(ke)}),arrow:i.find(function(a){return a.classList.contains(Fe)||a.classList.contains(We)}),backdrop:i.find(function(a){return a.classList.contains(vt)})}}function Ge(e){var r=$(),i=$();i.className=lt,i.setAttribute("data-state","hidden"),i.setAttribute("tabindex","-1");var a=$();a.className=ke,a.setAttribute("data-state","hidden"),He(a,e.props),r.appendChild(i),i.appendChild(a),m(e.props,e.props);function m(d,u){var h=fe(r),l=h.box,T=h.content,b=h.arrow;u.theme?l.setAttribute("data-theme",u.theme):l.removeAttribute("data-theme"),typeof u.animation=="string"?l.setAttribute("data-animation",u.animation):l.removeAttribute("data-animation"),u.inertia?l.setAttribute("data-inertia",""):l.removeAttribute("data-inertia"),l.style.maxWidth=typeof u.maxWidth=="number"?u.maxWidth+"px":u.maxWidth,u.role?l.setAttribute("role",u.role):l.removeAttribute("role"),(d.content!==u.content||d.allowHTML!==u.allowHTML)&&He(T,e.props),u.arrow?b?d.arrow!==u.arrow&&(l.removeChild(b),l.appendChild(je(u.arrow))):l.appendChild(je(u.arrow)):b&&l.removeChild(b)}return{popper:r,onUpdate:m}}Ge.$$tippy=!0;var Ut=1,J=[],ue=[];function Pt(e,r){var i=_e(e,Object.assign({},O,Ye(Re(r)))),a,m,d,u=!1,h=!1,l=!1,T=!1,b,x,M,V=[],L=Ve(we,i.interactiveDebounce),U,v=Ut++,g=null,E=ht(i.plugins),A={isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},t={id:v,reference:e,popper:$(),popperInstance:g,props:i,state:A,plugins:E,clearDelayTimeouts:nt,setProps:rt,setContent:it,show:ot,hide:at,hideWithInteractivity:st,enable:et,disable:tt,unmount:ut,destroy:ct};if(!i.render)return t;var z=i.render(t),f=z.popper,de=z.onUpdate;f.setAttribute("data-tippy-root",""),f.id="tippy-"+t.id,t.popper=f,e._tippy=t,f._tippy=t;var Ke=E.map(function(n){return n.fn(t)}),Xe=e.hasAttribute("aria-expanded");return Ee(),W(),q(),w("onCreate",[t]),i.showOnCreate&&Me(),f.addEventListener("mouseenter",function(){t.props.interactive&&t.state.isVisible&&t.clearDelayTimeouts()}),f.addEventListener("mouseleave",function(){t.props.interactive&&t.props.trigger.indexOf("mouseenter")>=0&&k().addEventListener("mousemove",L)}),t;function le(){var n=t.props.touch;return Array.isArray(n)?n:[n,0]}function ve(){return le()[0]==="hold"}function C(){var n;return!!((n=t.props.render)!=null&&n.$$tippy)}function N(){return U||e}function k(){var n=N().parentNode;return n?Ot(n):document}function F(){return fe(f)}function me(n){return t.state.isMounted&&!t.state.isVisible||S.isTouch||b&&b.type==="focus"?0:oe(t.props.delay,n?0:1,O.delay)}function q(n){n===void 0&&(n=!1),f.style.pointerEvents=t.props.interactive&&!n?"":"none",f.style.zIndex=""+t.props.zIndex}function w(n,o,s){if(s===void 0&&(s=!0),Ke.forEach(function(c){c[n]&&c[n].apply(c,o)}),s){var p;(p=t.props)[n].apply(p,o)}}function ge(){var n=t.props.aria;if(n.content){var o="aria-"+n.content,s=f.id,p=B(t.props.triggerTarget||e);p.forEach(function(c){var y=c.getAttribute(o);if(t.state.isVisible)c.setAttribute(o,y?y+" "+s:s);else{var D=y&&y.replace(s,"").trim();D?c.setAttribute(o,D):c.removeAttribute(o)}})}}function W(){if(!(Xe||!t.props.aria.expanded)){var n=B(t.props.triggerTarget||e);n.forEach(function(o){t.props.interactive?o.setAttribute("aria-expanded",t.state.isVisible&&o===N()?"true":"false"):o.removeAttribute("aria-expanded")})}}function ee(){k().removeEventListener("mousemove",L),J=J.filter(function(n){return n!==L})}function Y(n){if(!(S.isTouch&&(l||n.type==="mousedown"))){var o=n.composedPath&&n.composedPath()[0]||n.target;if(!(t.props.interactive&&Ue(f,o))){if(B(t.props.triggerTarget||e).some(function(s){return Ue(s,o)})){if(S.isTouch||t.state.isVisible&&t.props.trigger.indexOf("click")>=0)return}else w("onClickOutside",[t,n]);t.props.hideOnClick===!0&&(t.clearDelayTimeouts(),t.hide(),h=!0,setTimeout(function(){h=!1}),t.state.isMounted||te())}}}function he(){l=!0}function be(){l=!1}function ye(){var n=k();n.addEventListener("mousedown",Y,!0),n.addEventListener("touchend",Y,I),n.addEventListener("touchstart",be,I),n.addEventListener("touchmove",he,I)}function te(){var n=k();n.removeEventListener("mousedown",Y,!0),n.removeEventListener("touchend",Y,I),n.removeEventListener("touchstart",be,I),n.removeEventListener("touchmove",he,I)}function Je(n,o){Te(n,function(){!t.state.isVisible&&f.parentNode&&f.parentNode.contains(f)&&o()})}function Qe(n,o){Te(n,o)}function Te(n,o){var s=F().box;function p(c){c.target===s&&(se(s,"remove",p),o())}if(n===0)return o();se(s,"remove",x),se(s,"add",p),x=p}function P(n,o,s){s===void 0&&(s=!1);var p=B(t.props.triggerTarget||e);p.forEach(function(c){c.addEventListener(n,o,s),V.push({node:c,eventType:n,handler:o,options:s})})}function Ee(){ve()&&(P("touchstart",Oe,{passive:!0}),P("touchend",De,{passive:!0})),gt(t.props.trigger).forEach(function(n){if(n!=="manual")switch(P(n,Oe),n){case"mouseenter":P("mouseleave",De);break;case"focus":P(xt?"focusout":"blur",Le);break;case"focusin":P("focusout",Le);break}})}function Ae(){V.forEach(function(n){var o=n.node,s=n.eventType,p=n.handler,c=n.options;o.removeEventListener(s,p,c)}),V=[]}function Oe(n){var o,s=!1;if(!(!t.state.isEnabled||Ce(n)||h)){var p=((o=b)==null?void 0:o.type)==="focus";b=n,U=n.currentTarget,W(),!t.state.isVisible&&Tt(n)&&J.forEach(function(c){return c(n)}),n.type==="click"&&(t.props.trigger.indexOf("mouseenter")<0||u)&&t.props.hideOnClick!==!1&&t.state.isVisible?s=!0:Me(n),n.type==="click"&&(u=!s),s&&!p&&G(n)}}function we(n){var o=n.target,s=N().contains(o)||f.contains(o);if(!(n.type==="mousemove"&&s)){var p=ne().concat(f).map(function(c){var y,D=c._tippy,_=(y=D.popperInstance)==null?void 0:y.state;return _?{popperRect:c.getBoundingClientRect(),popperState:_,props:i}:null}).filter(Boolean);wt(p,n)&&(ee(),G(n))}}function De(n){var o=Ce(n)||t.props.trigger.indexOf("click")>=0&&u;if(!o){if(t.props.interactive){t.hideWithInteractivity(n);return}G(n)}}function Le(n){t.props.trigger.indexOf("focusin")<0&&n.target!==N()||t.props.interactive&&n.relatedTarget&&f.contains(n.relatedTarget)||G(n)}function Ce(n){return S.isTouch?ve()!==n.type.indexOf("touch")>=0:!1}function Se(){xe();var n=t.props,o=n.popperOptions,s=n.placement,p=n.offset,c=n.getReferenceClientRect,y=n.moveTransition,D=C()?fe(f).arrow:null,_=c?{getBoundingClientRect:c,contextElement:c.contextElement||N()}:e,Ie={name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(K){var j=K.state;if(C()){var ft=F(),ie=ft.box;["placement","reference-hidden","escaped"].forEach(function(X){X==="placement"?ie.setAttribute("data-placement",j.placement):j.attributes.popper["data-popper-"+X]?ie.setAttribute("data-"+X,""):ie.removeAttribute("data-"+X)}),j.attributes.popper={}}}},R=[{name:"offset",options:{offset:p}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!y}},Ie];C()&&D&&R.push({name:"arrow",options:{element:D,padding:3}}),R.push.apply(R,(o==null?void 0:o.modifiers)||[]),t.popperInstance=dt(_,f,Object.assign({},o,{placement:s,onFirstUpdate:M,modifiers:R}))}function xe(){t.popperInstance&&(t.popperInstance.destroy(),t.popperInstance=null)}function Ze(){var n=t.props.appendTo,o,s=N();t.props.interactive&&n===$e||n==="parent"?o=s.parentNode:o=ze(n,[s]),o.contains(f)||o.appendChild(f),t.state.isMounted=!0,Se()}function ne(){return Q(f.querySelectorAll("[data-tippy-root]"))}function Me(n){t.clearDelayTimeouts(),n&&w("onTrigger",[t,n]),ye();var o=me(!0),s=le(),p=s[0],c=s[1];S.isTouch&&p==="hold"&&c&&(o=c),o?a=setTimeout(function(){t.show()},o):t.show()}function G(n){if(t.clearDelayTimeouts(),w("onUntrigger",[t,n]),!t.state.isVisible){te();return}if(!(t.props.trigger.indexOf("mouseenter")>=0&&t.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(n.type)>=0&&u)){var o=me(!1);o?m=setTimeout(function(){t.state.isVisible&&t.hide()},o):d=requestAnimationFrame(function(){t.hide()})}}function et(){t.state.isEnabled=!0}function tt(){t.hide(),t.state.isEnabled=!1}function nt(){clearTimeout(a),clearTimeout(m),cancelAnimationFrame(d)}function rt(n){if(!t.state.isDestroyed){w("onBeforeUpdate",[t,n]),Ae();var o=t.props,s=_e(e,Object.assign({},o,Re(n),{ignoreAttributes:!0}));t.props=s,Ee(),o.interactiveDebounce!==s.interactiveDebounce&&(ee(),L=Ve(we,s.interactiveDebounce)),o.triggerTarget&&!s.triggerTarget?B(o.triggerTarget).forEach(function(p){p.removeAttribute("aria-expanded")}):s.triggerTarget&&e.removeAttribute("aria-expanded"),W(),q(),de&&de(o,s),t.popperInstance&&(Se(),ne().forEach(function(p){requestAnimationFrame(p._tippy.popperInstance.forceUpdate)})),w("onAfterUpdate",[t,n])}}function it(n){t.setProps({content:n})}function ot(){var n=t.state.isVisible,o=t.state.isDestroyed,s=!t.state.isEnabled,p=S.isTouch&&!t.props.touch,c=oe(t.props.duration,0,O.duration);if(!(n||o||s||p)&&!N().hasAttribute("disabled")&&(w("onShow",[t],!1),t.props.onShow(t)!==!1)){if(t.state.isVisible=!0,C()&&(f.style.visibility="visible"),q(),ye(),t.state.isMounted||(f.style.transition="none"),C()){var y=F(),D=y.box,_=y.content;ae([D,_],0)}M=function(){var R;if(!(!t.state.isVisible||T)){if(T=!0,f.offsetHeight,f.style.transition=t.props.moveTransition,C()&&t.props.animation){var re=F(),K=re.box,j=re.content;ae([K,j],c),Be([K,j],"visible")}ge(),W(),Ne(ue,t),(R=t.popperInstance)==null||R.forceUpdate(),w("onMount",[t]),t.props.animation&&C()&&Qe(c,function(){t.state.isShown=!0,w("onShown",[t])})}},Ze()}}function at(){var n=!t.state.isVisible,o=t.state.isDestroyed,s=!t.state.isEnabled,p=oe(t.props.duration,1,O.duration);if(!(n||o||s)&&(w("onHide",[t],!1),t.props.onHide(t)!==!1)){if(t.state.isVisible=!1,t.state.isShown=!1,T=!1,u=!1,C()&&(f.style.visibility="hidden"),ee(),te(),q(!0),C()){var c=F(),y=c.box,D=c.content;t.props.animation&&(ae([y,D],p),Be([y,D],"hidden"))}ge(),W(),t.props.animation?C()&&Je(p,t.unmount):t.unmount()}}function st(n){k().addEventListener("mousemove",L),Ne(J,L),L(n)}function ut(){t.state.isVisible&&t.hide(),t.state.isMounted&&(xe(),ne().forEach(function(n){n._tippy.unmount()}),f.parentNode&&f.parentNode.removeChild(f),ue=ue.filter(function(n){return n!==t}),t.state.isMounted=!1,w("onHidden",[t]))}function ct(){t.state.isDestroyed||(t.clearDelayTimeouts(),t.unmount(),Ae(),delete e._tippy,t.state.isDestroyed=!0,w("onDestroy",[t]))}}function H(e,r){r===void 0&&(r={});var i=O.plugins.concat(r.plugins||[]);Ct();var a=Object.assign({},r,{plugins:i}),m=At(e),d=m.reduce(function(u,h){var l=h&&Pt(h,a);return l&&u.push(l),u},[]);return Z(e)?d[0]:d}H.defaultProps=O;H.setDefaultProps=Nt;H.currentInput=S;Object.assign({},pt,{effect:function(r){var i=r.state,a={popper:{position:i.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(i.elements.popper.style,a.popper),i.styles=a,i.elements.arrow&&Object.assign(i.elements.arrow.style,a.arrow)}});var _t={mouseover:"mouseenter",focusin:"focus",click:"click"};function Ht(e,r){var i=[],a=[],m=!1,d=r.target,u=mt(r,["target"]),h=Object.assign({},u,{trigger:"manual",touch:!1}),l=Object.assign({touch:O.touch},u,{showOnCreate:!0}),T=H(e,h),b=B(T);function x(v){if(!(!v.target||m)){var g=v.target.closest(d);if(g){var E=g.getAttribute("data-tippy-trigger")||r.trigger||O.trigger;if(!g._tippy&&!(v.type==="touchstart"&&typeof l.touch=="boolean")&&!(v.type!=="touchstart"&&E.indexOf(_t[v.type])<0)){var A=H(g,l);A&&(a=a.concat(A))}}}}function M(v,g,E,A){A===void 0&&(A=!1),v.addEventListener(g,E,A),i.push({node:v,eventType:g,handler:E,options:A})}function V(v){var g=v.reference;M(g,"touchstart",x,I),M(g,"mouseover",x),M(g,"focusin",x),M(g,"click",x)}function L(){i.forEach(function(v){var g=v.node,E=v.eventType,A=v.handler,t=v.options;g.removeEventListener(E,A,t)}),i=[]}function U(v){var g=v.destroy,E=v.enable,A=v.disable;v.destroy=function(t){t===void 0&&(t=!0),t&&a.forEach(function(z){z.destroy()}),a=[],L(),g()},v.enable=function(){E(),a.forEach(function(t){return t.enable()}),m=!1},v.disable=function(){A(),a.forEach(function(t){return t.disable()}),m=!0},V(v)}return b.forEach(U),T}H.setDefaultProps({render:Ge});export{Ht as d};