// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers"],function(b,e){let g=function(){function c(a){this.origin=a;this.buffers=[]}var d=c.prototype;d.dispose=function(){this.buffers.forEach(a=>a.vao.dispose());this.buffers.length=0};d.findBuffer=function(a){return this.buffers.find(f=>f.instances.has(a))};return e._createClass(c)}();b.PerOriginData=g;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});