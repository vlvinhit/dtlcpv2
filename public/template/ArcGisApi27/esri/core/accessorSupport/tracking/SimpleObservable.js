// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../ObservableBase"],function(d,e,b){b=function(f){function c(){return f.apply(this,arguments)||this}e._inherits(c,f);c.prototype.notify=function(){var a=this._observers;if(a&&0<a.length){a=a.slice();for(const g of a)g.onInvalidated(),g.onCommitted()}};return e._createClass(c)}(b.ObservableBase);d.SimpleObservable=b;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});