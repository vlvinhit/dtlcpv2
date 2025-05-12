// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers"],function(c,e){function f(a,b,d){a.near=b;a.far=d;return a}e=e._createClass(function(){this.near=Number.MAX_VALUE;this.far=-Number.MAX_VALUE});c.DepthRange=e;c.ZERO={near:0,far:0};c.create=function(a,b){return{near:a,far:b}};c.empty=function(a){return a?f(a,Infinity,-Infinity):{near:Infinity,far:-Infinity}};c.set=f;c.union=function(a,b,d=a){null!=b&&(d.near=Math.min(a.near,b.near),d.far=Math.max(a.far,b.far));return d};c.within=function(a,
b){return a.near<=b&&b<=a.far};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});