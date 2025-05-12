// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","./BufferRange"],function(d,e,b){b=function(f){function c(g,a,h){a=f.call(this,a,h)||this;a.geometry=g;return a}e._inherits(c,f);e._createClass(c,[{key:"isVisible",get:function(){return this.geometry.visible}},{key:"hasHighlights",get:function(){return null!=this.geometry.highlights&&this.isVisible}},{key:"hasOccludees",get:function(){return null!=this.geometry.occludees}}]);return c}(b.BufferRange);d.Instance=b;Object.defineProperty(d,
Symbol.toStringTag,{value:"Module"})});