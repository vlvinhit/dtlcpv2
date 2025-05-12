// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../InputHandler"],function(g,h,d){d=function(k){function e(c){var a=k.call(this,!0)||this;a._onChange=c;a._value="mouse";a._x=null;a._y=null;a.registerIncoming("pointer-move",b=>{a._update(b.data)});return a}h._inherits(e,k);e.prototype._update=function(c){const a="touch"===c.native.pointerType?"touch":"mouse",{x:b,y:f}=c;if(a!==this._value||this._x!==b||this._y!==f)this._value=a,this._x=b,this._y=f,this._onChange(a,b,f)};return h._createClass(e)}(d.InputHandler);
g.LatestPointer=d;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});