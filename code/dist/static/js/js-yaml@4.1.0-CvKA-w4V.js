/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Q(i){return typeof i>"u"||i===null}function ti(i){return typeof i=="object"&&i!==null}function ai(i){return Array.isArray(i)?i:Q(i)?[]:[i]}function hi(i,n){var e,l,r,u;if(n)for(u=Object.keys(n),e=0,l=u.length;e<l;e+=1)r=u[e],i[r]=n[r];return i}function si(i,n){var e="",l;for(l=0;l<n;l+=1)e+=i;return e}function di(i){return i===0&&Number.NEGATIVE_INFINITY===1/i}var mi=Q,xi=ti,gi=ai,Ai=si,vi=di,yi=hi,b={isNothing:mi,isObject:xi,toArray:gi,repeat:Ai,isNegativeZero:vi,extend:yi};function J(i,n){var e="",l=i.reason||"(unknown reason)";return i.mark?(i.mark.name&&(e+='in "'+i.mark.name+'" '),e+="("+(i.mark.line+1)+":"+(i.mark.column+1)+")",!n&&i.mark.snippet&&(e+=`

`+i.mark.snippet),l+" "+e):l}function L(i,n){Error.call(this),this.name="YAMLException",this.reason=i,this.mark=n,this.message=J(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}L.prototype=Object.create(Error.prototype);L.prototype.constructor=L;L.prototype.toString=function(n){return this.name+": "+J(this,n)};var k=L;function P(i,n,e,l,r){var u="",o="",c=Math.floor(r/2)-1;return l-n>c&&(u=" ... ",n=l-c+u.length),e-l>c&&(o=" ...",e=l+c-o.length),{str:u+i.slice(n,e).replace(/\t/g,"→")+o,pos:l-n+u.length}}function B(i,n){return b.repeat(" ",n-i.length)+i}function bi(i,n){if(n=Object.create(n||null),!i.buffer)return null;n.maxLength||(n.maxLength=79),typeof n.indent!="number"&&(n.indent=1),typeof n.linesBefore!="number"&&(n.linesBefore=3),typeof n.linesAfter!="number"&&(n.linesAfter=2);for(var e=/\r?\n|\r|\0/g,l=[0],r=[],u,o=-1;u=e.exec(i.buffer);)r.push(u.index),l.push(u.index+u[0].length),i.position<=u.index&&o<0&&(o=l.length-2);o<0&&(o=l.length-1);var c="",f,h,s=Math.min(i.line+n.linesAfter,r.length).toString().length,p=n.maxLength-(n.indent+s+3);for(f=1;f<=n.linesBefore&&!(o-f<0);f++)h=P(i.buffer,l[o-f],r[o-f],i.position-(l[o]-l[o-f]),p),c=b.repeat(" ",n.indent)+B((i.line-f+1).toString(),s)+" | "+h.str+`
`+c;for(h=P(i.buffer,l[o],r[o],i.position,p),c+=b.repeat(" ",n.indent)+B((i.line+1).toString(),s)+" | "+h.str+`
`,c+=b.repeat("-",n.indent+s+3+h.pos)+`^
`,f=1;f<=n.linesAfter&&!(o+f>=r.length);f++)h=P(i.buffer,l[o+f],r[o+f],i.position-(l[o]-l[o+f]),p),c+=b.repeat(" ",n.indent)+B((i.line+f+1).toString(),s)+" | "+h.str+`
`;return c.replace(/\n$/,"")}var wi=bi,Ci=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],_i=["scalar","sequence","mapping"];function ki(i){var n={};return i!==null&&Object.keys(i).forEach(function(e){i[e].forEach(function(l){n[String(l)]=e})}),n}function Si(i,n){if(n=n||{},Object.keys(n).forEach(function(e){if(Ci.indexOf(e)===-1)throw new k('Unknown option "'+e+'" is met in definition of "'+i+'" YAML type.')}),this.options=n,this.tag=i,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(e){return e},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=ki(n.styleAliases||null),_i.indexOf(this.kind)===-1)throw new k('Unknown kind "'+this.kind+'" is specified for "'+i+'" YAML type.')}var y=Si;function H(i,n){var e=[];return i[n].forEach(function(l){var r=e.length;e.forEach(function(u,o){u.tag===l.tag&&u.kind===l.kind&&u.multi===l.multi&&(r=o)}),e[r]=l}),e}function Ii(){var i={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,e;function l(r){r.multi?(i.multi[r.kind].push(r),i.multi.fallback.push(r)):i[r.kind][r.tag]=i.fallback[r.tag]=r}for(n=0,e=arguments.length;n<e;n+=1)arguments[n].forEach(l);return i}function U(i){return this.extend(i)}U.prototype.extend=function(n){var e=[],l=[];if(n instanceof y)l.push(n);else if(Array.isArray(n))l=l.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(e=e.concat(n.implicit)),n.explicit&&(l=l.concat(n.explicit));else throw new k("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");e.forEach(function(u){if(!(u instanceof y))throw new k("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(u.loadKind&&u.loadKind!=="scalar")throw new k("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(u.multi)throw new k("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),l.forEach(function(u){if(!(u instanceof y))throw new k("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var r=Object.create(U.prototype);return r.implicit=(this.implicit||[]).concat(e),r.explicit=(this.explicit||[]).concat(l),r.compiledImplicit=H(r,"implicit"),r.compiledExplicit=H(r,"explicit"),r.compiledTypeMap=Ii(r.compiledImplicit,r.compiledExplicit),r};var Ti=U,Fi=new y("tag:yaml.org,2002:str",{kind:"scalar",construct:function(i){return i!==null?i:""}}),Oi=new y("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(i){return i!==null?i:[]}}),Ei=new y("tag:yaml.org,2002:map",{kind:"mapping",construct:function(i){return i!==null?i:{}}}),Ni=new Ti({explicit:[Fi,Oi,Ei]});function Li(i){if(i===null)return!0;var n=i.length;return n===1&&i==="~"||n===4&&(i==="null"||i==="Null"||i==="NULL")}function Mi(){return null}function Di(i){return i===null}var ji=new y("tag:yaml.org,2002:null",{kind:"scalar",resolve:Li,construct:Mi,predicate:Di,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function Yi(i){if(i===null)return!1;var n=i.length;return n===4&&(i==="true"||i==="True"||i==="TRUE")||n===5&&(i==="false"||i==="False"||i==="FALSE")}function Pi(i){return i==="true"||i==="True"||i==="TRUE"}function Bi(i){return Object.prototype.toString.call(i)==="[object Boolean]"}var Ri=new y("tag:yaml.org,2002:bool",{kind:"scalar",resolve:Yi,construct:Pi,predicate:Bi,represent:{lowercase:function(i){return i?"true":"false"},uppercase:function(i){return i?"TRUE":"FALSE"},camelcase:function(i){return i?"True":"False"}},defaultStyle:"lowercase"});function Ui(i){return 48<=i&&i<=57||65<=i&&i<=70||97<=i&&i<=102}function qi(i){return 48<=i&&i<=55}function $i(i){return 48<=i&&i<=57}function Gi(i){if(i===null)return!1;var n=i.length,e=0,l=!1,r;if(!n)return!1;if(r=i[e],(r==="-"||r==="+")&&(r=i[++e]),r==="0"){if(e+1===n)return!0;if(r=i[++e],r==="b"){for(e++;e<n;e++)if(r=i[e],r!=="_"){if(r!=="0"&&r!=="1")return!1;l=!0}return l&&r!=="_"}if(r==="x"){for(e++;e<n;e++)if(r=i[e],r!=="_"){if(!Ui(i.charCodeAt(e)))return!1;l=!0}return l&&r!=="_"}if(r==="o"){for(e++;e<n;e++)if(r=i[e],r!=="_"){if(!qi(i.charCodeAt(e)))return!1;l=!0}return l&&r!=="_"}}if(r==="_")return!1;for(;e<n;e++)if(r=i[e],r!=="_"){if(!$i(i.charCodeAt(e)))return!1;l=!0}return!(!l||r==="_")}function Hi(i){var n=i,e=1,l;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),l=n[0],(l==="-"||l==="+")&&(l==="-"&&(e=-1),n=n.slice(1),l=n[0]),n==="0")return 0;if(l==="0"){if(n[1]==="b")return e*parseInt(n.slice(2),2);if(n[1]==="x")return e*parseInt(n.slice(2),16);if(n[1]==="o")return e*parseInt(n.slice(2),8)}return e*parseInt(n,10)}function Ki(i){return Object.prototype.toString.call(i)==="[object Number]"&&i%1===0&&!b.isNegativeZero(i)}var Wi=new y("tag:yaml.org,2002:int",{kind:"scalar",resolve:Gi,construct:Hi,predicate:Ki,represent:{binary:function(i){return i>=0?"0b"+i.toString(2):"-0b"+i.toString(2).slice(1)},octal:function(i){return i>=0?"0o"+i.toString(8):"-0o"+i.toString(8).slice(1)},decimal:function(i){return i.toString(10)},hexadecimal:function(i){return i>=0?"0x"+i.toString(16).toUpperCase():"-0x"+i.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Zi=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Vi(i){return!(i===null||!Zi.test(i)||i[i.length-1]==="_")}function Xi(i){var n,e;return n=i.replace(/_/g,"").toLowerCase(),e=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?e===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:e*parseFloat(n,10)}var zi=/^[-+]?[0-9]+e/;function Qi(i,n){var e;if(isNaN(i))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===i)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===i)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(b.isNegativeZero(i))return"-0.0";return e=i.toString(10),zi.test(e)?e.replace("e",".e"):e}function Ji(i){return Object.prototype.toString.call(i)==="[object Number]"&&(i%1!==0||b.isNegativeZero(i))}var nn=new y("tag:yaml.org,2002:float",{kind:"scalar",resolve:Vi,construct:Xi,predicate:Ji,represent:Qi,defaultStyle:"lowercase"}),en=Ni.extend({implicit:[ji,Ri,Wi,nn]}),rn=en,ii=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),ni=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function ln(i){return i===null?!1:ii.exec(i)!==null||ni.exec(i)!==null}function on(i){var n,e,l,r,u,o,c,f=0,h=null,s,p,g;if(n=ii.exec(i),n===null&&(n=ni.exec(i)),n===null)throw new Error("Date resolve error");if(e=+n[1],l=+n[2]-1,r=+n[3],!n[4])return new Date(Date.UTC(e,l,r));if(u=+n[4],o=+n[5],c=+n[6],n[7]){for(f=n[7].slice(0,3);f.length<3;)f+="0";f=+f}return n[9]&&(s=+n[10],p=+(n[11]||0),h=(s*60+p)*6e4,n[9]==="-"&&(h=-h)),g=new Date(Date.UTC(e,l,r,u,o,c,f)),h&&g.setTime(g.getTime()-h),g}function un(i){return i.toISOString()}var cn=new y("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:ln,construct:on,instanceOf:Date,represent:un});function fn(i){return i==="<<"||i===null}var pn=new y("tag:yaml.org,2002:merge",{kind:"scalar",resolve:fn}),q=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function tn(i){if(i===null)return!1;var n,e,l=0,r=i.length,u=q;for(e=0;e<r;e++)if(n=u.indexOf(i.charAt(e)),!(n>64)){if(n<0)return!1;l+=6}return l%8===0}function an(i){var n,e,l=i.replace(/[\r\n=]/g,""),r=l.length,u=q,o=0,c=[];for(n=0;n<r;n++)n%4===0&&n&&(c.push(o>>16&255),c.push(o>>8&255),c.push(o&255)),o=o<<6|u.indexOf(l.charAt(n));return e=r%4*6,e===0?(c.push(o>>16&255),c.push(o>>8&255),c.push(o&255)):e===18?(c.push(o>>10&255),c.push(o>>2&255)):e===12&&c.push(o>>4&255),new Uint8Array(c)}function hn(i){var n="",e=0,l,r,u=i.length,o=q;for(l=0;l<u;l++)l%3===0&&l&&(n+=o[e>>18&63],n+=o[e>>12&63],n+=o[e>>6&63],n+=o[e&63]),e=(e<<8)+i[l];return r=u%3,r===0?(n+=o[e>>18&63],n+=o[e>>12&63],n+=o[e>>6&63],n+=o[e&63]):r===2?(n+=o[e>>10&63],n+=o[e>>4&63],n+=o[e<<2&63],n+=o[64]):r===1&&(n+=o[e>>2&63],n+=o[e<<4&63],n+=o[64],n+=o[64]),n}function sn(i){return Object.prototype.toString.call(i)==="[object Uint8Array]"}var dn=new y("tag:yaml.org,2002:binary",{kind:"scalar",resolve:tn,construct:an,predicate:sn,represent:hn}),mn=Object.prototype.hasOwnProperty,xn=Object.prototype.toString;function gn(i){if(i===null)return!0;var n=[],e,l,r,u,o,c=i;for(e=0,l=c.length;e<l;e+=1){if(r=c[e],o=!1,xn.call(r)!=="[object Object]")return!1;for(u in r)if(mn.call(r,u))if(!o)o=!0;else return!1;if(!o)return!1;if(n.indexOf(u)===-1)n.push(u);else return!1}return!0}function An(i){return i!==null?i:[]}var vn=new y("tag:yaml.org,2002:omap",{kind:"sequence",resolve:gn,construct:An}),yn=Object.prototype.toString;function bn(i){if(i===null)return!0;var n,e,l,r,u,o=i;for(u=new Array(o.length),n=0,e=o.length;n<e;n+=1){if(l=o[n],yn.call(l)!=="[object Object]"||(r=Object.keys(l),r.length!==1))return!1;u[n]=[r[0],l[r[0]]]}return!0}function wn(i){if(i===null)return[];var n,e,l,r,u,o=i;for(u=new Array(o.length),n=0,e=o.length;n<e;n+=1)l=o[n],r=Object.keys(l),u[n]=[r[0],l[r[0]]];return u}var Cn=new y("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:bn,construct:wn}),_n=Object.prototype.hasOwnProperty;function kn(i){if(i===null)return!0;var n,e=i;for(n in e)if(_n.call(e,n)&&e[n]!==null)return!1;return!0}function Sn(i){return i!==null?i:{}}var In=new y("tag:yaml.org,2002:set",{kind:"mapping",resolve:kn,construct:Sn}),Tn=rn.extend({implicit:[cn,pn],explicit:[dn,vn,Cn,In]}),I=Object.prototype.hasOwnProperty,M=1,ei=2,ri=3,D=4,R=1,Fn=2,K=3,On=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,En=/[\x85\u2028\u2029]/,Nn=/[,\[\]\{\}]/,li=/^(?:!|!!|![a-z\-]+!)$/i,oi=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function W(i){return Object.prototype.toString.call(i)}function _(i){return i===10||i===13}function T(i){return i===9||i===32}function w(i){return i===9||i===32||i===10||i===13}function O(i){return i===44||i===91||i===93||i===123||i===125}function Ln(i){var n;return 48<=i&&i<=57?i-48:(n=i|32,97<=n&&n<=102?n-97+10:-1)}function Mn(i){return i===120?2:i===117?4:i===85?8:0}function Dn(i){return 48<=i&&i<=57?i-48:-1}function Z(i){return i===48?"\0":i===97?"\x07":i===98?"\b":i===116||i===9?"	":i===110?`
`:i===118?"\v":i===102?"\f":i===114?"\r":i===101?"\x1B":i===32?" ":i===34?'"':i===47?"/":i===92?"\\":i===78?"":i===95?" ":i===76?"\u2028":i===80?"\u2029":""}function jn(i){return i<=65535?String.fromCharCode(i):String.fromCharCode((i-65536>>10)+55296,(i-65536&1023)+56320)}var ui=new Array(256),ci=new Array(256);for(var F=0;F<256;F++)ui[F]=Z(F)?1:0,ci[F]=Z(F);function Yn(i,n){this.input=i,this.filename=n.filename||null,this.schema=n.schema||Tn,this.onWarning=n.onWarning||null,this.legacy=n.legacy||!1,this.json=n.json||!1,this.listener=n.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=i.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function fi(i,n){var e={name:i.filename,buffer:i.input.slice(0,-1),position:i.position,line:i.line,column:i.position-i.lineStart};return e.snippet=wi(e),new k(n,e)}function t(i,n){throw fi(i,n)}function j(i,n){i.onWarning&&i.onWarning.call(null,fi(i,n))}var V={YAML:function(n,e,l){var r,u,o;n.version!==null&&t(n,"duplication of %YAML directive"),l.length!==1&&t(n,"YAML directive accepts exactly one argument"),r=/^([0-9]+)\.([0-9]+)$/.exec(l[0]),r===null&&t(n,"ill-formed argument of the YAML directive"),u=parseInt(r[1],10),o=parseInt(r[2],10),u!==1&&t(n,"unacceptable YAML version of the document"),n.version=l[0],n.checkLineBreaks=o<2,o!==1&&o!==2&&j(n,"unsupported YAML version of the document")},TAG:function(n,e,l){var r,u;l.length!==2&&t(n,"TAG directive accepts exactly two arguments"),r=l[0],u=l[1],li.test(r)||t(n,"ill-formed tag handle (first argument) of the TAG directive"),I.call(n.tagMap,r)&&t(n,'there is a previously declared suffix for "'+r+'" tag handle'),oi.test(u)||t(n,"ill-formed tag prefix (second argument) of the TAG directive");try{u=decodeURIComponent(u)}catch{t(n,"tag prefix is malformed: "+u)}n.tagMap[r]=u}};function S(i,n,e,l){var r,u,o,c;if(n<e){if(c=i.input.slice(n,e),l)for(r=0,u=c.length;r<u;r+=1)o=c.charCodeAt(r),o===9||32<=o&&o<=1114111||t(i,"expected valid JSON character");else On.test(c)&&t(i,"the stream contains non-printable characters");i.result+=c}}function X(i,n,e,l){var r,u,o,c;for(b.isObject(e)||t(i,"cannot merge mappings; the provided source object is unacceptable"),r=Object.keys(e),o=0,c=r.length;o<c;o+=1)u=r[o],I.call(n,u)||(n[u]=e[u],l[u]=!0)}function E(i,n,e,l,r,u,o,c,f){var h,s;if(Array.isArray(r))for(r=Array.prototype.slice.call(r),h=0,s=r.length;h<s;h+=1)Array.isArray(r[h])&&t(i,"nested arrays are not supported inside keys"),typeof r=="object"&&W(r[h])==="[object Object]"&&(r[h]="[object Object]");if(typeof r=="object"&&W(r)==="[object Object]"&&(r="[object Object]"),r=String(r),n===null&&(n={}),l==="tag:yaml.org,2002:merge")if(Array.isArray(u))for(h=0,s=u.length;h<s;h+=1)X(i,n,u[h],e);else X(i,n,u,e);else!i.json&&!I.call(e,r)&&I.call(n,r)&&(i.line=o||i.line,i.lineStart=c||i.lineStart,i.position=f||i.position,t(i,"duplicated mapping key")),r==="__proto__"?Object.defineProperty(n,r,{configurable:!0,enumerable:!0,writable:!0,value:u}):n[r]=u,delete e[r];return n}function $(i){var n;n=i.input.charCodeAt(i.position),n===10?i.position++:n===13?(i.position++,i.input.charCodeAt(i.position)===10&&i.position++):t(i,"a line break is expected"),i.line+=1,i.lineStart=i.position,i.firstTabInLine=-1}function v(i,n,e){for(var l=0,r=i.input.charCodeAt(i.position);r!==0;){for(;T(r);)r===9&&i.firstTabInLine===-1&&(i.firstTabInLine=i.position),r=i.input.charCodeAt(++i.position);if(n&&r===35)do r=i.input.charCodeAt(++i.position);while(r!==10&&r!==13&&r!==0);if(_(r))for($(i),r=i.input.charCodeAt(i.position),l++,i.lineIndent=0;r===32;)i.lineIndent++,r=i.input.charCodeAt(++i.position);else break}return e!==-1&&l!==0&&i.lineIndent<e&&j(i,"deficient indentation"),l}function Y(i){var n=i.position,e;return e=i.input.charCodeAt(n),!!((e===45||e===46)&&e===i.input.charCodeAt(n+1)&&e===i.input.charCodeAt(n+2)&&(n+=3,e=i.input.charCodeAt(n),e===0||w(e)))}function G(i,n){n===1?i.result+=" ":n>1&&(i.result+=b.repeat(`
`,n-1))}function Pn(i,n,e){var l,r,u,o,c,f,h,s,p=i.kind,g=i.result,a;if(a=i.input.charCodeAt(i.position),w(a)||O(a)||a===35||a===38||a===42||a===33||a===124||a===62||a===39||a===34||a===37||a===64||a===96||(a===63||a===45)&&(r=i.input.charCodeAt(i.position+1),w(r)||e&&O(r)))return!1;for(i.kind="scalar",i.result="",u=o=i.position,c=!1;a!==0;){if(a===58){if(r=i.input.charCodeAt(i.position+1),w(r)||e&&O(r))break}else if(a===35){if(l=i.input.charCodeAt(i.position-1),w(l))break}else{if(i.position===i.lineStart&&Y(i)||e&&O(a))break;if(_(a))if(f=i.line,h=i.lineStart,s=i.lineIndent,v(i,!1,-1),i.lineIndent>=n){c=!0,a=i.input.charCodeAt(i.position);continue}else{i.position=o,i.line=f,i.lineStart=h,i.lineIndent=s;break}}c&&(S(i,u,o,!1),G(i,i.line-f),u=o=i.position,c=!1),T(a)||(o=i.position+1),a=i.input.charCodeAt(++i.position)}return S(i,u,o,!1),i.result?!0:(i.kind=p,i.result=g,!1)}function Bn(i,n){var e,l,r;if(e=i.input.charCodeAt(i.position),e!==39)return!1;for(i.kind="scalar",i.result="",i.position++,l=r=i.position;(e=i.input.charCodeAt(i.position))!==0;)if(e===39)if(S(i,l,i.position,!0),e=i.input.charCodeAt(++i.position),e===39)l=i.position,i.position++,r=i.position;else return!0;else _(e)?(S(i,l,r,!0),G(i,v(i,!1,n)),l=r=i.position):i.position===i.lineStart&&Y(i)?t(i,"unexpected end of the document within a single quoted scalar"):(i.position++,r=i.position);t(i,"unexpected end of the stream within a single quoted scalar")}function Rn(i,n){var e,l,r,u,o,c;if(c=i.input.charCodeAt(i.position),c!==34)return!1;for(i.kind="scalar",i.result="",i.position++,e=l=i.position;(c=i.input.charCodeAt(i.position))!==0;){if(c===34)return S(i,e,i.position,!0),i.position++,!0;if(c===92){if(S(i,e,i.position,!0),c=i.input.charCodeAt(++i.position),_(c))v(i,!1,n);else if(c<256&&ui[c])i.result+=ci[c],i.position++;else if((o=Mn(c))>0){for(r=o,u=0;r>0;r--)c=i.input.charCodeAt(++i.position),(o=Ln(c))>=0?u=(u<<4)+o:t(i,"expected hexadecimal character");i.result+=jn(u),i.position++}else t(i,"unknown escape sequence");e=l=i.position}else _(c)?(S(i,e,l,!0),G(i,v(i,!1,n)),e=l=i.position):i.position===i.lineStart&&Y(i)?t(i,"unexpected end of the document within a double quoted scalar"):(i.position++,l=i.position)}t(i,"unexpected end of the stream within a double quoted scalar")}function Un(i,n){var e=!0,l,r,u,o=i.tag,c,f=i.anchor,h,s,p,g,a,m=Object.create(null),A,x,C,d;if(d=i.input.charCodeAt(i.position),d===91)s=93,a=!1,c=[];else if(d===123)s=125,a=!0,c={};else return!1;for(i.anchor!==null&&(i.anchorMap[i.anchor]=c),d=i.input.charCodeAt(++i.position);d!==0;){if(v(i,!0,n),d=i.input.charCodeAt(i.position),d===s)return i.position++,i.tag=o,i.anchor=f,i.kind=a?"mapping":"sequence",i.result=c,!0;e?d===44&&t(i,"expected the node content, but found ','"):t(i,"missed comma between flow collection entries"),x=A=C=null,p=g=!1,d===63&&(h=i.input.charCodeAt(i.position+1),w(h)&&(p=g=!0,i.position++,v(i,!0,n))),l=i.line,r=i.lineStart,u=i.position,N(i,n,M,!1,!0),x=i.tag,A=i.result,v(i,!0,n),d=i.input.charCodeAt(i.position),(g||i.line===l)&&d===58&&(p=!0,d=i.input.charCodeAt(++i.position),v(i,!0,n),N(i,n,M,!1,!0),C=i.result),a?E(i,c,m,x,A,C,l,r,u):p?c.push(E(i,null,m,x,A,C,l,r,u)):c.push(A),v(i,!0,n),d=i.input.charCodeAt(i.position),d===44?(e=!0,d=i.input.charCodeAt(++i.position)):e=!1}t(i,"unexpected end of the stream within a flow collection")}function qn(i,n){var e,l,r=R,u=!1,o=!1,c=n,f=0,h=!1,s,p;if(p=i.input.charCodeAt(i.position),p===124)l=!1;else if(p===62)l=!0;else return!1;for(i.kind="scalar",i.result="";p!==0;)if(p=i.input.charCodeAt(++i.position),p===43||p===45)R===r?r=p===43?K:Fn:t(i,"repeat of a chomping mode identifier");else if((s=Dn(p))>=0)s===0?t(i,"bad explicit indentation width of a block scalar; it cannot be less than one"):o?t(i,"repeat of an indentation width identifier"):(c=n+s-1,o=!0);else break;if(T(p)){do p=i.input.charCodeAt(++i.position);while(T(p));if(p===35)do p=i.input.charCodeAt(++i.position);while(!_(p)&&p!==0)}for(;p!==0;){for($(i),i.lineIndent=0,p=i.input.charCodeAt(i.position);(!o||i.lineIndent<c)&&p===32;)i.lineIndent++,p=i.input.charCodeAt(++i.position);if(!o&&i.lineIndent>c&&(c=i.lineIndent),_(p)){f++;continue}if(i.lineIndent<c){r===K?i.result+=b.repeat(`
`,u?1+f:f):r===R&&u&&(i.result+=`
`);break}for(l?T(p)?(h=!0,i.result+=b.repeat(`
`,u?1+f:f)):h?(h=!1,i.result+=b.repeat(`
`,f+1)):f===0?u&&(i.result+=" "):i.result+=b.repeat(`
`,f):i.result+=b.repeat(`
`,u?1+f:f),u=!0,o=!0,f=0,e=i.position;!_(p)&&p!==0;)p=i.input.charCodeAt(++i.position);S(i,e,i.position,!1)}return!0}function z(i,n){var e,l=i.tag,r=i.anchor,u=[],o,c=!1,f;if(i.firstTabInLine!==-1)return!1;for(i.anchor!==null&&(i.anchorMap[i.anchor]=u),f=i.input.charCodeAt(i.position);f!==0&&(i.firstTabInLine!==-1&&(i.position=i.firstTabInLine,t(i,"tab characters must not be used in indentation")),!(f!==45||(o=i.input.charCodeAt(i.position+1),!w(o))));){if(c=!0,i.position++,v(i,!0,-1)&&i.lineIndent<=n){u.push(null),f=i.input.charCodeAt(i.position);continue}if(e=i.line,N(i,n,ri,!1,!0),u.push(i.result),v(i,!0,-1),f=i.input.charCodeAt(i.position),(i.line===e||i.lineIndent>n)&&f!==0)t(i,"bad indentation of a sequence entry");else if(i.lineIndent<n)break}return c?(i.tag=l,i.anchor=r,i.kind="sequence",i.result=u,!0):!1}function $n(i,n,e){var l,r,u,o,c,f,h=i.tag,s=i.anchor,p={},g=Object.create(null),a=null,m=null,A=null,x=!1,C=!1,d;if(i.firstTabInLine!==-1)return!1;for(i.anchor!==null&&(i.anchorMap[i.anchor]=p),d=i.input.charCodeAt(i.position);d!==0;){if(!x&&i.firstTabInLine!==-1&&(i.position=i.firstTabInLine,t(i,"tab characters must not be used in indentation")),l=i.input.charCodeAt(i.position+1),u=i.line,(d===63||d===58)&&w(l))d===63?(x&&(E(i,p,g,a,m,null,o,c,f),a=m=A=null),C=!0,x=!0,r=!0):x?(x=!1,r=!0):t(i,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),i.position+=1,d=l;else{if(o=i.line,c=i.lineStart,f=i.position,!N(i,e,ei,!1,!0))break;if(i.line===u){for(d=i.input.charCodeAt(i.position);T(d);)d=i.input.charCodeAt(++i.position);if(d===58)d=i.input.charCodeAt(++i.position),w(d)||t(i,"a whitespace character is expected after the key-value separator within a block mapping"),x&&(E(i,p,g,a,m,null,o,c,f),a=m=A=null),C=!0,x=!1,r=!1,a=i.tag,m=i.result;else if(C)t(i,"can not read an implicit mapping pair; a colon is missed");else return i.tag=h,i.anchor=s,!0}else if(C)t(i,"can not read a block mapping entry; a multiline key may not be an implicit key");else return i.tag=h,i.anchor=s,!0}if((i.line===u||i.lineIndent>n)&&(x&&(o=i.line,c=i.lineStart,f=i.position),N(i,n,D,!0,r)&&(x?m=i.result:A=i.result),x||(E(i,p,g,a,m,A,o,c,f),a=m=A=null),v(i,!0,-1),d=i.input.charCodeAt(i.position)),(i.line===u||i.lineIndent>n)&&d!==0)t(i,"bad indentation of a mapping entry");else if(i.lineIndent<n)break}return x&&E(i,p,g,a,m,null,o,c,f),C&&(i.tag=h,i.anchor=s,i.kind="mapping",i.result=p),C}function Gn(i){var n,e=!1,l=!1,r,u,o;if(o=i.input.charCodeAt(i.position),o!==33)return!1;if(i.tag!==null&&t(i,"duplication of a tag property"),o=i.input.charCodeAt(++i.position),o===60?(e=!0,o=i.input.charCodeAt(++i.position)):o===33?(l=!0,r="!!",o=i.input.charCodeAt(++i.position)):r="!",n=i.position,e){do o=i.input.charCodeAt(++i.position);while(o!==0&&o!==62);i.position<i.length?(u=i.input.slice(n,i.position),o=i.input.charCodeAt(++i.position)):t(i,"unexpected end of the stream within a verbatim tag")}else{for(;o!==0&&!w(o);)o===33&&(l?t(i,"tag suffix cannot contain exclamation marks"):(r=i.input.slice(n-1,i.position+1),li.test(r)||t(i,"named tag handle cannot contain such characters"),l=!0,n=i.position+1)),o=i.input.charCodeAt(++i.position);u=i.input.slice(n,i.position),Nn.test(u)&&t(i,"tag suffix cannot contain flow indicator characters")}u&&!oi.test(u)&&t(i,"tag name cannot contain such characters: "+u);try{u=decodeURIComponent(u)}catch{t(i,"tag name is malformed: "+u)}return e?i.tag=u:I.call(i.tagMap,r)?i.tag=i.tagMap[r]+u:r==="!"?i.tag="!"+u:r==="!!"?i.tag="tag:yaml.org,2002:"+u:t(i,'undeclared tag handle "'+r+'"'),!0}function Hn(i){var n,e;if(e=i.input.charCodeAt(i.position),e!==38)return!1;for(i.anchor!==null&&t(i,"duplication of an anchor property"),e=i.input.charCodeAt(++i.position),n=i.position;e!==0&&!w(e)&&!O(e);)e=i.input.charCodeAt(++i.position);return i.position===n&&t(i,"name of an anchor node must contain at least one character"),i.anchor=i.input.slice(n,i.position),!0}function Kn(i){var n,e,l;if(l=i.input.charCodeAt(i.position),l!==42)return!1;for(l=i.input.charCodeAt(++i.position),n=i.position;l!==0&&!w(l)&&!O(l);)l=i.input.charCodeAt(++i.position);return i.position===n&&t(i,"name of an alias node must contain at least one character"),e=i.input.slice(n,i.position),I.call(i.anchorMap,e)||t(i,'unidentified alias "'+e+'"'),i.result=i.anchorMap[e],v(i,!0,-1),!0}function N(i,n,e,l,r){var u,o,c,f=1,h=!1,s=!1,p,g,a,m,A,x;if(i.listener!==null&&i.listener("open",i),i.tag=null,i.anchor=null,i.kind=null,i.result=null,u=o=c=D===e||ri===e,l&&v(i,!0,-1)&&(h=!0,i.lineIndent>n?f=1:i.lineIndent===n?f=0:i.lineIndent<n&&(f=-1)),f===1)for(;Gn(i)||Hn(i);)v(i,!0,-1)?(h=!0,c=u,i.lineIndent>n?f=1:i.lineIndent===n?f=0:i.lineIndent<n&&(f=-1)):c=!1;if(c&&(c=h||r),(f===1||D===e)&&(M===e||ei===e?A=n:A=n+1,x=i.position-i.lineStart,f===1?c&&(z(i,x)||$n(i,x,A))||Un(i,A)?s=!0:(o&&qn(i,A)||Bn(i,A)||Rn(i,A)?s=!0:Kn(i)?(s=!0,(i.tag!==null||i.anchor!==null)&&t(i,"alias node should not have any properties")):Pn(i,A,M===e)&&(s=!0,i.tag===null&&(i.tag="?")),i.anchor!==null&&(i.anchorMap[i.anchor]=i.result)):f===0&&(s=c&&z(i,x))),i.tag===null)i.anchor!==null&&(i.anchorMap[i.anchor]=i.result);else if(i.tag==="?"){for(i.result!==null&&i.kind!=="scalar"&&t(i,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+i.kind+'"'),p=0,g=i.implicitTypes.length;p<g;p+=1)if(m=i.implicitTypes[p],m.resolve(i.result)){i.result=m.construct(i.result),i.tag=m.tag,i.anchor!==null&&(i.anchorMap[i.anchor]=i.result);break}}else if(i.tag!=="!"){if(I.call(i.typeMap[i.kind||"fallback"],i.tag))m=i.typeMap[i.kind||"fallback"][i.tag];else for(m=null,a=i.typeMap.multi[i.kind||"fallback"],p=0,g=a.length;p<g;p+=1)if(i.tag.slice(0,a[p].tag.length)===a[p].tag){m=a[p];break}m||t(i,"unknown tag !<"+i.tag+">"),i.result!==null&&m.kind!==i.kind&&t(i,"unacceptable node kind for !<"+i.tag+'> tag; it should be "'+m.kind+'", not "'+i.kind+'"'),m.resolve(i.result,i.tag)?(i.result=m.construct(i.result,i.tag),i.anchor!==null&&(i.anchorMap[i.anchor]=i.result)):t(i,"cannot resolve a node with !<"+i.tag+"> explicit tag")}return i.listener!==null&&i.listener("close",i),i.tag!==null||i.anchor!==null||s}function Wn(i){var n=i.position,e,l,r,u=!1,o;for(i.version=null,i.checkLineBreaks=i.legacy,i.tagMap=Object.create(null),i.anchorMap=Object.create(null);(o=i.input.charCodeAt(i.position))!==0&&(v(i,!0,-1),o=i.input.charCodeAt(i.position),!(i.lineIndent>0||o!==37));){for(u=!0,o=i.input.charCodeAt(++i.position),e=i.position;o!==0&&!w(o);)o=i.input.charCodeAt(++i.position);for(l=i.input.slice(e,i.position),r=[],l.length<1&&t(i,"directive name must not be less than one character in length");o!==0;){for(;T(o);)o=i.input.charCodeAt(++i.position);if(o===35){do o=i.input.charCodeAt(++i.position);while(o!==0&&!_(o));break}if(_(o))break;for(e=i.position;o!==0&&!w(o);)o=i.input.charCodeAt(++i.position);r.push(i.input.slice(e,i.position))}o!==0&&$(i),I.call(V,l)?V[l](i,l,r):j(i,'unknown document directive "'+l+'"')}if(v(i,!0,-1),i.lineIndent===0&&i.input.charCodeAt(i.position)===45&&i.input.charCodeAt(i.position+1)===45&&i.input.charCodeAt(i.position+2)===45?(i.position+=3,v(i,!0,-1)):u&&t(i,"directives end mark is expected"),N(i,i.lineIndent-1,D,!1,!0),v(i,!0,-1),i.checkLineBreaks&&En.test(i.input.slice(n,i.position))&&j(i,"non-ASCII line breaks are interpreted as content"),i.documents.push(i.result),i.position===i.lineStart&&Y(i)){i.input.charCodeAt(i.position)===46&&(i.position+=3,v(i,!0,-1));return}if(i.position<i.length-1)t(i,"end of the stream or a document separator is expected");else return}function pi(i,n){i=String(i),n=n||{},i.length!==0&&(i.charCodeAt(i.length-1)!==10&&i.charCodeAt(i.length-1)!==13&&(i+=`
`),i.charCodeAt(0)===65279&&(i=i.slice(1)));var e=new Yn(i,n),l=i.indexOf("\0");for(l!==-1&&(e.position=l,t(e,"null byte is not allowed in input")),e.input+="\0";e.input.charCodeAt(e.position)===32;)e.lineIndent+=1,e.position+=1;for(;e.position<e.length-1;)Wn(e);return e.documents}function Zn(i,n,e){n!==null&&typeof n=="object"&&typeof e>"u"&&(e=n,n=null);var l=pi(i,e);if(typeof n!="function")return l;for(var r=0,u=l.length;r<u;r+=1)n(l[r])}function Vn(i,n){var e=pi(i,n);if(e.length!==0){if(e.length===1)return e[0];throw new k("expected a single document in the stream, but found more")}}var Xn=Zn,zn=Vn,Qn={loadAll:Xn,load:zn},Jn=Qn.load;export{Jn as l};