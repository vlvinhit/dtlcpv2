/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{g as t,I as n}from"./unitUtils.js";const e=96;function i(i,a){const r=a||i.extent,s=i.width,c=t(r&&r.spatialReference);return r&&s?r.width/s*c*n*e:0}function a(i,a){return i/(t(a)*n*e)}function r(t){return t/(n*e)}function s(i,a){return i*(t(a)*n*e)}function c(t,n){const e=t.extent,i=t.width-(t.padding?t.padding.left+t.padding.right:0),r=a(n,e.spatialReference);return e.clone().expand(r*i/e.width)}export{s as a,a as b,r as c,c as d,i as g};
