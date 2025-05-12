/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{f as e}from"./vec4f64.js";import{g as t}from"./interfaces2.js";import{T as o}from"./Texture2DPassUniform.js";const g=e(1,1,0,1),a=e(1,0,1,1);function r(e){e.fragment.uniforms.add(new o("depthTexture",((e,t)=>t.highlightDepthTexture))),e.fragment.constants.add("occludedHighlightFlag","vec4",g).add("unoccludedHighlightFlag","vec4",a),e.fragment.code.add(t`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`)}export{r as O,a as u};
