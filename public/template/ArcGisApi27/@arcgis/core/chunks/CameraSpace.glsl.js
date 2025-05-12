/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{s as r}from"./vec2.js";import{a as o}from"./vec2f64.js";import{s as a}from"./vec4.js";import{c as t}from"./vec4f64.js";import{F as e}from"./RgbaFloatEncoding.glsl.js";import{F as c}from"./Float4PassUniform.js";import{g as n}from"./interfaces2.js";function f(r){r.fragment.uniforms.add(new c("projInfo",((r,o)=>function(r){const o=r.camera.projectionMatrix;return 0===o[11]?a(s,2/(r.camera.fullWidth*o[0]),2/(r.camera.fullHeight*o[5]),(1+o[12])/o[0],(1+o[13])/o[5]):a(s,-2/(r.camera.fullWidth*o[0]),-2/(r.camera.fullHeight*o[5]),(1-o[8])/o[0],(1-o[9])/o[5])}(o)))),r.fragment.uniforms.add(new e("zScale",((r,o)=>m(o)))),r.fragment.code.add(n`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}const s=t();function m(o){return 0===o.camera.projectionMatrix[11]?r(i,0,1):r(i,1,0)}const i=o();export{f as C,m as g};
