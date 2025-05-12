// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/vec3","../SnappingDomain","./SnappingHint"],function(e,f,h,k,d){d=function(g){function a(b,c,l=k.SnappingDomain.ALL){c=g.call(this,c,l)||this;c.intersectionPoint=b;return c}f._inherits(a,g);a.prototype.equals=function(b){return b instanceof a?h.exactEquals(this.intersectionPoint,b.intersectionPoint):!1};return f._createClass(a)}(d.SnappingHint);e.IntersectionSnappingHint=d;Object.defineProperty(e,Symbol.toStringTag,
{value:"Module"})});