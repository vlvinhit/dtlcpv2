// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../IntersectorInterfaces","../IntersectorTarget","../intersectorUtils"],function(c,e,k,d,l){d=function(b){function f(g,h,m,n,p,q){var a=b.call(this,g,h)||this;a.layerUid=g;a.graphicUid=h;a.geometryId=m;a.triangleNr=n;a.baseBoundingSphere=p;a.numLodLevels=q;return a}e._inherits(f,b);return e._createClass(f)}(d.Graphic3DTarget);c.LodTarget=d;c.isLodIntersectorResult=function(b){return l.isValidIntersectorResult(b)&&b.intersector===
k.IntersectorType.LOD&&!!b.target};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});