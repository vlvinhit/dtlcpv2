// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["../../../chunks/_rollupPluginBabelHelpers"],function(c){return function(){function a(d){this._texture=d;this.type="tile-texture";this._refCount=1}var b=a.prototype;b.retain=function(){++this._refCount};b.release=function(){--this._refCount;0===this._refCount&&this._texture.dispose()};b.generateMipmap=function(){this._texture.generateMipmap()};c._createClass(a,[{key:"texture",get:function(){return this._texture}},{key:"descriptor",get:function(){return this._texture.descriptor}},{key:"gpuMemoryUsage",
get:function(){return this._texture.gpuMemoryUsage}}]);return a}()});