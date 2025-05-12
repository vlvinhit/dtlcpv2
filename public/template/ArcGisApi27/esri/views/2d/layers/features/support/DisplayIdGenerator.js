// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../engine/webgl/DisplayId"],function(c,e,f){let g=function(){function d(){this._freeIds=[];this._idCounter=1}var a=d.prototype;a.createId=function(b=!1){return f.createDisplayId(this._getFreeId(),b)};a.releaseId=function(b){this._freeIds.push(b)};a._getFreeId=function(){return this._freeIds.length?this._freeIds.pop():this._idCounter++};return e._createClass(d)}();c.DisplayIdGenerator=g;Object.defineProperty(c,Symbol.toStringTag,
{value:"Module"})});