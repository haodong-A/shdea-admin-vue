import{c as i}from"./unist-util-is@5.2.1-DiTsIWAy.js";const f=function(e,r,o){const c=i(o);if(!e||!e.type||!e.children)throw new Error("Expected parent node");if(typeof r=="number"){if(r<0||r===Number.POSITIVE_INFINITY)throw new Error("Expected positive finite number as index")}else if(r=e.children.indexOf(r),r<0)throw new Error("Expected child node or index");for(;++r<e.children.length;)if(c(e.children[r],r,e))return e.children[r];return null};export{f};