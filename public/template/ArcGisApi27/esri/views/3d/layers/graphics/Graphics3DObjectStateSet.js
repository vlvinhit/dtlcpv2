// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../webgl-engine/lib/Object3DStateSet"],function(b,d,e){let g=function(){function c(a,f){this.stateType=a;this.objectIdField=f;this.objectStateSet=new e.Object3DStateSet;this.ids=new Set;this.paused=!1}c.prototype.hasGraphic=function(a){return this.objectIdField?this.ids.has(a.graphic.attributes[this.objectIdField]):this.ids.has(a.graphic.uid)};return d._createClass(c)}();b.Graphics3DObjectStateSet=g;Object.defineProperty(b,Symbol.toStringTag,
{value:"Module"})});