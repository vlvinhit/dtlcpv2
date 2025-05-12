/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{c as e,e as r,b as o}from"./screenUtils.js";import{c as s,e as t}from"./vec2.js";import{c as n}from"./vec3.js";import{c as a}from"./vec3f64.js";import{m as c}from"./dehydratedFeatures.js";import{a as m}from"./elevationInfoUtils.js";function i(e,r,o,n){o.projectToRenderScreen(e,l),o.projectToRenderScreen(r,u),s(n,u,l),t(n,n)}function p(e,r,o,s,t=a()){const c=n(j,e);return c[2]=m(s,c,r,o)||0,s.renderCoordsHelper.toRenderCoords(c,r,t),t}function f(r,o,s,t){return"2d"===t.type?(d.x=r[0],d.y=r[1],d.spatialReference=o,t.toScreen(d)):(p(r,o,s,t,j),t.state.camera.projectToScreen(j,v),e(v[0],v[1]))}const d=c(0,0,0,null),j=a(),l=o(),u=o(),v=r();export{f as a,i as r,p as v};
