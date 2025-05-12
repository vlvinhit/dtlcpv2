// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../SnappingConstraint","./FeatureSnappingCandidate","../hints/PointSnappingHint"],function(c,d,g,a,h){a=function(e){function b(f){return e.call(this,{...f,constraint:new g.PointConstraint(f.targetPoint)})||this}d._inherits(b,e);d._createClass(b,[{key:"hints",get:function(){return[new h.PointSnappingHint(this.targetPoint,this.isDraped,this.domain)]}}]);return b}(a.FeatureSnappingCandidate);c.VertexSnappingCandidate=a;Object.defineProperty(c,
Symbol.toStringTag,{value:"Module"})});