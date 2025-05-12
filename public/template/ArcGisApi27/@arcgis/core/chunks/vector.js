/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{b as s}from"./mathUtils.js";import{i as t,l as n,n as a,f as o,e as r}from"./vec3.js";import{c}from"./vec3f64.js";var f;function i(s,n,a){const o=t(s,n)/t(s,s);return r(a,s,o)}function u(s,a){return t(s,a)/n(s)}function e(a,o){const r=t(a,o)/(n(a)*n(o));return-s(r)}function m(n,r,c){a(p,n),a(j,r);const f=t(p,j),i=s(f),u=o(p,p,j);return t(u,c)<0?2*Math.PI-i:i}!function(s){s[s.X=0]="X",s[s.Y=1]="Y",s[s.Z=2]="Z"}(f||(f={}));const p=c(),j=c();export{f as A,e as a,m as b,i as c,u as p};
