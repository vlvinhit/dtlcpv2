// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers"],function(c,e){let g=function(){function d(a){this._data=a;this._offset4=0;this._dataUint32=new Uint32Array(this._data,0,Math.floor(this._data.byteLength/4))}var b=d.prototype;b.readUint32=function(){const a=this._offset4;this._offset4+=1;return this._dataUint32[a]};b.readUint8Array=function(a){const f=4*this._offset4;this._offset4+=a/4;return new Uint8Array(this._data,f,a)};b.remainingBytes=function(){return this._data.byteLength-4*
this._offset4};return e._createClass(d)}();c.BinaryStreamReader=g;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});