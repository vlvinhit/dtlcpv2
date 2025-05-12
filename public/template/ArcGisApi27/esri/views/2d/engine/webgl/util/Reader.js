// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["../../../../../chunks/_rollupPluginBabelHelpers"],function(c){return function(){function a(d){this._pos=0;this._buffer=d;this._i32View=new Int32Array(this._buffer);this._f32View=new Float32Array(this._buffer)}var b=a.prototype;b.readInt32=function(){return this._i32View[this._pos++]};b.readF32=function(){return this._f32View[this._pos++]};return c._createClass(a)}()});