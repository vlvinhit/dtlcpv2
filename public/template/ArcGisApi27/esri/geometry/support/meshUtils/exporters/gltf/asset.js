// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/arrayUtils"],function(c,e,f){let g=function(){function d(){this.copyright="";this.defaultScene=0;this.generator="";this._scenes=[]}var b=d.prototype;b.addScene=function(a){if(this._scenes.includes(a))throw Error("Scene already added");this._scenes.push(a)};b.removeScene=function(a){f.remove(this._scenes,a)};b.forEachScene=function(a){this._scenes.forEach(a)};return e._createClass(d)}();c.Asset=g;Object.defineProperty(c,
Symbol.toStringTag,{value:"Module"})});