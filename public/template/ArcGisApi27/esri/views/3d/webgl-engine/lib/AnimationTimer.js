// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/time"],function(c,e,f){let g=function(){function a(){this.enabled=!0;this._time=f.Milliseconds(0)}a.prototype.advance=function({deltaTime:b,fixedTime:d}){if(null!=d){if(this._time===d)return!1;this._time=d;return!0}this._time=f.Milliseconds(this._time+b);return 0!==b};e._createClass(a,[{key:"time",get:function(){return this._time}}]);return a}(),h=e._createClass(function(a,b){this.deltaTime=a;this.fixedTime=b});c.AnimationTimer=
g;c.Parameters=h;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});