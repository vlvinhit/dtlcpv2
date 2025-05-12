// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/vec4f32","../../../../chunks/vec4f64","../core/shaderModules/interfaces"],function(c,d,e,h,b){b=function(f){function g(){var a=f.apply(this,arguments)||this;a.color=e.fromValues(1,0,1,1);a.haloColor=e.fromValues(1,0,1,1);a.haloOpacity=1;a.haloOpacityOccluded=.25;a.fillOpacity=.2;a.fillOpacityOccluded=.05;a.shadowColor=h.fromValues(1,0,1,1);a.shadowOpacity=.15;a.occludedShadowOpacity=.075;return a}d._inherits(g,f);
return d._createClass(g)}(b.NoParameters);c.HighlightPassParameters=b;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});