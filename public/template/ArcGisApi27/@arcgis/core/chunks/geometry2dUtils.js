/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import"./mathUtils.js";import{c as t,q as n,j as s,h as r,g as a,u as e,b as o}from"./vec2.js";import{a as i}from"./vec2f64.js";function c(t,n){return t[0]*n[1]-t[1]*n[0]}function u(n,r,i,c,u=i){return t(E,c,i),t(N,r,u),function(t,n,s){const r=a(s,N)/e(s);o(t,s,r)}(j,0,E),s(n,u,j)}function f(s,a,e,o){t(E,a,e);const i=o/r(E);return n(s,e,E,i)}function p(s,r){const a=s.start,e=s.end,o=r.start,i=r.end,u=t(E,e,a),f=t(I,i,o),p=c(u,f);if(Math.abs(p)<=L)return[];const h=t(N,a,o),v=c(f,h)/p,y=c(u,h)/p;if(v>=0){if(y>=0||r.type===m.LINE)return[n(j,a,u,v)]}else if(s.type===m.LINE&&(y>=0||r.type===m.LINE))return[n(j,a,u,v)];return[]}var m;!function(t){t[t.RAY=0]="RAY",t[t.LINE=1]="LINE"}(m||(m={}));const L=1e-6,E=i(),I=i(),N=i(),j=i();export{m as L,f as a,p as i,u as p};
