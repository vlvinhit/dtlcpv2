// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers","./MomentumEstimator"],function(g,c,e){e=function(h){function d(a=3,f=.01,b=.95,k=12){return h.call(this,a,f,b,k)||this}c._inherits(d,h);d.prototype.add=function(a,f){const b=this.value.lastValue;if(null!=b){for(a-=b;a>Math.PI;)a-=2*Math.PI;for(;a<-Math.PI;)a+=2*Math.PI;a=b+a}c._get(c._getPrototypeOf(d.prototype),"add",this).call(this,a,f)};return c._createClass(d)}(e.MomentumEstimator);g.RotationMomentumEstimator=e;Object.defineProperty(g,
Symbol.toStringTag,{value:"Module"})});