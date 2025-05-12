/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{h as t}from"./typedArrayUtil.js";var n;function r(t,r,e={}){const o=r===n.WEBGL1?["webgl","experimental-webgl","webkit-3d","moz-webgl"]:["webgl2"];for(const n of o){const r=t.getContext(n,e);if(r)return r}return null}function e(t,n,e={}){const c=o(t);for(const t of c){const o=r(n,t,e);if(o)return o}return null}function o(r){if("3d"===r)return[n.WEBGL2];const e=t("esri-force-webgl");return e===n.WEBGL1||e===n.WEBGL2?[e]:t("mac")&&t("chrome")?[n.WEBGL1,n.WEBGL2]:[n.WEBGL2,n.WEBGL1]}!function(t){t[t.WEBGL1=1]="WEBGL1",t[t.WEBGL2=2]="WEBGL2"}(n||(n={}));export{n as C,e as a,r as c,o as g};
