/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function r(r){return 32+r.length}function n(r){return 16}function t(n){if(!n)return 0;let t=s;for(const e in n)if(n.hasOwnProperty(e)){const o=n[e];switch(typeof o){case"string":t+=r(o);break;case"number":t+=16;break;case"boolean":t+=4}}return t}function e(r){if(!r)return 0;if(Array.isArray(r))return function(r){const n=r.length;if(0===n||"number"==typeof r[0])return 32+8*n;let t=c;for(let e=0;e<n;e++)t+=o(r[e]);return t}(r);let n=s;for(const t in r)r.hasOwnProperty(t)&&(n+=o(r[t]));return n}function o(n){switch(typeof n){case"object":return e(n);case"string":return r(n);case"number":return 16;case"boolean":return 4;default:return 8}}function u(r,n){return c+r.length*n}const s=32,c=32;export{e as a,u as b,r as c,n as d,t as e};
