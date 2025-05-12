/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const n=[["binary","application/octet-stream","bin",""]];function t(n){return s(n?.supportedFormats??[]).flatMap(a).map((n=>`.${n}`))}function r(n){const t={};for(const r of s(n?.supportedFormats??[])){const n=c(r),o=a(r).map((n=>`.${n}`));t[n]??=[],t[n].push(...o)}return[{description:"3D Models",accept:t}]}function o(n,t){return i(function(n,t){return s(t).find((t=>c(t)===n))}(n,t))}function e(n,t){return i(function(n,t){const r=n.toLowerCase();return s(t).find((n=>a(n).some((n=>r.endsWith(n)))))}(n,t))}function u(n,t){return c(function(n,t){return s(t).find((t=>i(t)===n))}(n,t))}function s(t){return[...n,...t]}function i(n){return n?.[0]}function c(n){return n?.[1]}function a(n){return n?.[2].split(",")??[]}function f(n){return n.tables?.find((n=>"assetMaps"===n.role))}export{o as a,f as b,u as c,r as d,t as e,e as g};
