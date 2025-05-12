// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["../../../../../../chunks/_rollupPluginBabelHelpers","../../../../../../geometry/GeometryCursor","../../../../../../symbols/cim/effects/CIMEffectHelper"],function(g,h,k){return function(){function f(){this._materialKey=null}var e=f.prototype;e.bindFeature=function(b,c,a){};e.write=function(b,c,a,d){if(this._effects&&0<this._effects.length){if(a=h.GeometryCursor.fromFeatureSetReaderCIM(c)){a.invertY();const l=k.CIMEffectHelper.executeEffects(this._effects,a,b.tileKey,d.geometryEngine);for(;a=
l.next();)a.invertY(),this._write(b,c,d,a)}}else this._write(b,c,d)};e._write=function(b,c,a,d){};return g._createClass(f)}()});