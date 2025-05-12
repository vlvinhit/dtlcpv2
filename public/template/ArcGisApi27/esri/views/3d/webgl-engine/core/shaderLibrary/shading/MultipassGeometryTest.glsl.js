// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/_rollupPluginBabelHelpers ../output/ReadLinearDepth.glsl ../../shaderModules/Float2PassUniform ../../shaderModules/interfaces ../../shaderModules/Texture2DPassUniform".split(" "),function(a,b,e,f,g,h){b=b._createClass(function(){this.enabled=!1});a.MultipassGeometryUniforms=b;a.multipassGeometryTest=function(c){c.include(e.ReadLinearDepth);c.uniforms.add(new h.Texture2DPassUniform("geometryDepthTexture",(k,d)=>d.multipassGeometry.linearDepthTexture),new f.Float2PassUniform("nearFar",
(k,d)=>d.camera.nearFar));c.code.add(g.glsl`bool geometryDepthTest(vec2 pos, float elementDepth) {
float geometryDepth = linearDepthFromTexture(geometryDepthTexture, pos, nearFar);
return (elementDepth < (geometryDepth - 1.0));
}`)};Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});