/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{R as e}from"./ReadLinearDepth.glsl.js";import{F as t}from"./RgbaFloatEncoding.glsl.js";import{g as r}from"./interfaces2.js";import{T as o}from"./Texture2DPassUniform.js";function a(a){a.include(e),a.uniforms.add(new o("geometryDepthTexture",((e,t)=>t.multipassGeometry.linearDepthTexture)),new t("nearFar",((e,t)=>t.camera.nearFar))),a.code.add(r`bool geometryDepthTest(vec2 pos, float elementDepth) {
float geometryDepth = linearDepthFromTexture(geometryDepthTexture, pos, nearFar);
return (elementDepth < (geometryDepth - 1.0));
}`)}class s{constructor(){this.enabled=!1}}export{s as M,a as m};
