// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../CIMOperators"],function(a,f,g){let n=function(){function b(){}b.getPlacement=function(c,h,d,k,l,m){const e=g.getPlacementOperator(d);if(!e)return null;-1===h&&c.invertY();return e.execute(c,d,k,l,m)};return f._createClass(b)}();a.CIMMarkerPlacementHelper=n;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});