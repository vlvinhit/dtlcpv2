/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{c as t}from"./mathUtils.js";import{c as r}from"./widgetUtils.js";import{t as i}from"./jsxFactory.js";function s({level:t,class:s,...a},n){const o=e(t);return i(`h${o}`,{...a,class:r("esri-widget__heading",s),role:"heading","aria-level":String(o)},n)}function e(r){return t(Math.ceil(r),1,6)}function a(t,r=1){return e(t+r)}export{s as H,a as i};
