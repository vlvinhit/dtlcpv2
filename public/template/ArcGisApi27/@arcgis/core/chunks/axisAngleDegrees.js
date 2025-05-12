/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{r as s,d as r}from"./mathUtils.js";import{s as a,m as t,g as n}from"./quat.js";import{c as o}from"./quatf64.js";import{c as u,f,n as c,g as i}from"./vec3.js";import{U as e,a as m,b as p}from"./vec3f64.js";function j(s=l){return[s[0],s[1],s[2],s[3]]}function g(s,r,a=j()){return u(a,s),a[3]=r,a}function v(s,r,a=j()){return f(a,s,r),c(a,a),a[3]=-i(s,r),a}function U(r,o,u=j()){return a(x,r,q(r)),a(k,o,q(o)),t(x,k,x),f=u,c=s(n(u,x)),f[3]=c,f;var f,c}function b(s,r,a,t=j()){return g(e,s,w),g(m,r,y),g(p,a,z),U(w,y,w),U(w,z,t),t}function d(s){return s}function h(s){return s[3]}function q(s){return r(s[3])}const l=[0,0,1,0],x=o(),k=o();j();const w=j(),y=j(),z=j();export{l as U,U as a,q as b,j as c,d,b as e,g as f,h as g,v as h};
