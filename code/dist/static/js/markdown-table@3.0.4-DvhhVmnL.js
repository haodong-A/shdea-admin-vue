function C(i){return i.length}function L(i,f){const n=f||{},d=(n.align||[]).concat(),y=n.stringLength||C,p=[],u=[],w=[],a=[];let g=0,s=-1;for(;++s<i.length;){const r=[],c=[];let t=-1;for(i[s].length>g&&(g=i[s].length);++t<i[s].length;){const l=I(i[s][t]);if(n.alignDelimiters!==!1){const o=y(l);c[t]=o,(a[t]===void 0||o>a[t])&&(a[t]=o)}r.push(l)}u[s]=r,w[s]=c}let e=-1;if(typeof d=="object"&&"length"in d)for(;++e<g;)p[e]=S(d[e]);else{const r=S(d);for(;++e<g;)p[e]=r}e=-1;const z=[],x=[];for(;++e<g;){const r=p[e];let c="",t="";r===99?(c=":",t=":"):r===108?c=":":r===114&&(t=":");let l=n.alignDelimiters===!1?1:Math.max(1,a[e]-c.length-t.length);const o=c+"-".repeat(l)+t;n.alignDelimiters!==!1&&(l=c.length+l+t.length,l>a[e]&&(a[e]=l),x[e]=l),z[e]=o}u.splice(1,0,z),w.splice(1,0,x),s=-1;const D=[];for(;++s<u.length;){const r=u[s],c=w[s];e=-1;const t=[];for(;++e<g;){const l=r[e]||"";let o="",m="";if(n.alignDelimiters!==!1){const h=a[e]-(c[e]||0),j=p[e];j===114?o=" ".repeat(h):j===99?h%2?(o=" ".repeat(h/2+.5),m=" ".repeat(h/2-.5)):(o=" ".repeat(h/2),m=o):m=" ".repeat(h)}n.delimiterStart!==!1&&!e&&t.push("|"),n.padding!==!1&&!(n.alignDelimiters===!1&&l==="")&&(n.delimiterStart!==!1||e)&&t.push(" "),n.alignDelimiters!==!1&&t.push(o),t.push(l),n.alignDelimiters!==!1&&t.push(m),n.padding!==!1&&t.push(" "),(n.delimiterEnd!==!1||e!==g-1)&&t.push("|")}D.push(n.delimiterEnd===!1?t.join("").replace(/ +$/,""):t.join(""))}return D.join(`
`)}function I(i){return i==null?"":String(i)}function S(i){const f=typeof i=="string"?i.codePointAt(0):0;return f===67||f===99?99:f===76||f===108?108:f===82||f===114?114:0}export{L as m};