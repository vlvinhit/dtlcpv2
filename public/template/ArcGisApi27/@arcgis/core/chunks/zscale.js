/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{f as n,j as e}from"./unitUtils.js";function t(t,o,r){if(null==o||null==r||r.vcsWkid||n(o,r))return null;const i=e(o)/e(r);if(1===i)return null;switch(t){case"point":case"esriGeometryPoint":return n=>{return t=i,void((e=n)&&null!=e.z&&(e.z*=t));var e,t};case"polyline":case"esriGeometryPolyline":return n=>function(n,e){if(n)for(const t of n.paths)for(const n of t)n.length>2&&(n[2]*=e)}(n,i);case"polygon":case"esriGeometryPolygon":return n=>function(n,e){if(n)for(const t of n.rings)for(const n of t)n.length>2&&(n[2]*=e)}(n,i);case"multipoint":case"esriGeometryMultipoint":return n=>function(n,e){if(n)for(const t of n.points)t.length>2&&(t[2]*=e)}(n,i);case"extent":case"esriGeometryEnvelope":return n=>{return t=i,void((e=n)&&null!=e.zmin&&null!=e.zmax&&(e.zmin*=t,e.zmax*=t));var e,t};default:return null}}export{t as g};
