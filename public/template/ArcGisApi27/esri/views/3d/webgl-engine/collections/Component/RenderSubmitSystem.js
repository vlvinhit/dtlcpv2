// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","./DepthRange"],function(b,g,h){let k=function(){function c(a){this._objects=a}var d=c.prototype;d.submit=function(a,e){this._objects.preSubmit(e);this._objects.visibleObjects.forAll(f=>f.renderable.material.submit(a,e,f))};d.queryShadowCasterDepthRange=function(a){return this._objects.visibleObjects.length?h.computeDepthRange(a,this._objects.visibleObjects):null};return g._createClass(c)}();b.RenderSubmitSystem=k;Object.defineProperty(b,
Symbol.toStringTag,{value:"Module"})});