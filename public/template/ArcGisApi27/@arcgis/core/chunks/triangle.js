/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{O as n}from"./ray.js";import{e as r,a as s,b as t,l as o,f as a}from"./vec3.js";import{e,c as i}from"./vec3f64.js";import{c}from"./lineSegment.js";function f(n,t,o){const a=1e-5,{direction:e,origin:i}=t,{p0:c,p1:f,p2:p}=n,m=f[0]-c[0],u=f[1]-c[1],j=f[2]-c[2],b=p[0]-c[0],g=p[1]-c[1],l=p[2]-c[2],v=e[1]*l-g*e[2],w=e[2]*b-l*e[0],d=e[0]*g-b*e[1],h=m*v+u*w+j*d;if(h>-a&&h<a)return!1;const x=1/h,y=i[0]-c[0],M=i[1]-c[1],O=i[2]-c[2],S=x*(y*v+M*w+O*d);if(S<0||S>1)return!1;const k=M*j-u*O,q=O*m-j*y,z=y*u-m*M,A=x*(e[0]*k+e[1]*q+e[2]*z);return!(A<0||S+A>1||(o&&(r(o,e,x*(b*k+g*q+l*z)),s(o,i,o)),0))}function p(n,r,s){const t=r[0]-n[0],o=r[1]-n[1],a=s[0]-n[0],e=s[1]-n[1];return.5*Math.abs(t*e-o*a)}function m(n,r,s){return t(u,r,n),t(j,s,n),o(a(u,u,j))/2}new n(c),new n((()=>({p0:i(),p1:i(),p2:i()})));const u=i(),j=i();export{p as a,m as b,f as i};
