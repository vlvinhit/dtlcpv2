/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{f as e}from"./screenUtils.js";import{k as r}from"./vec2.js";import{b as n,c as o,s as t}from"./vec3.js";import{s}from"./ray.js";function c(r,n,o){return i(r,r.screenToRender(n,e(s.get())),o)}function i(o,t,c){const i=e(r(s.get(),t));if(i[2]=0,!o.unprojectFromRenderScreen(i,c.origin))return null;const u=e(r(s.get(),t));u[2]=1;const a=o.unprojectFromRenderScreen(u,s.get());return null==a?null:(n(c.direction,a,c.origin),c)}function u(r,n,o){return a(r,r.screenToRender(n,e(s.get())),o)}function a(e,r,c){o(c.origin,e.eye);const i=t(s.get(),r[0],r[1],1),u=e.unprojectFromRenderScreen(i,s.get());return null==u?null:(n(c.direction,u,c.origin),c)}export{i as a,u as b,a as c,c as f};
