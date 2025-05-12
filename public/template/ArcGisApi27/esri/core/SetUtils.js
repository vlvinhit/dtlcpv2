// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports"],function(d){d.someSet=function(b,c){for(const a of b.entries())if(c(a[0]))return!0;return!1};d.union=function(b,c){const a=new Set;null!=b&&b.forEach(e=>a.add(e));null!=c&&c.forEach(e=>a.add(e));return a};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});