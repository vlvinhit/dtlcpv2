/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function n(n,u){return null!=n?u(n):null}function u(n,u){return r(n,u),n}function r(n,u){if(null==n)throw new Error(u??"value is None")}function l(n){return n?.destroy(),null}function t(n){return n?.dispose(),null}function o(n){return n?.remove(),null}function e(n){return n?.abort(),null}function s(n){return n?.release(),null}function a(n,u,r){return null!=n&&null!=u?null!=r?r(n,u):n.equals(u):n===u}function f(n){return null}function c(n,u){const r=new Array;for(const l of n)r.push(null!=l?u(l):null);return r}function i(u,r){for(const l of u)n(l,r)}function d(n){return n}export{d as a,e as b,n as c,l as d,a as e,s as f,r as g,t as h,i,c as m,f as n,o as r,u};
