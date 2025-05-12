/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{d as e}from"./mathUtils.js";import{s as i}from"./vec2.js";import{a as t}from"./vec2f64.js";import{b as n,n as a,l as o,z as l,d as r,c as s,f as c,a as d}from"./vec3.js";import{c as f}from"./vec3f64.js";import{t as p}from"./vec4.js";import{c as h}from"./vec4f64.js";import{h as m}from"./lineSegment.js";import{c as g,f as u}from"./plane.js";import{c as x}from"./sphere.js";import{L as P}from"./Laserline.glsl.js";import{S as D}from"./ScreenSpacePass.glsl.js";import{F as v}from"./RgbaFloatEncoding.glsl.js";import{F as w}from"./Float3PassUniform.js";import{F as S}from"./Float4PassUniform.js";import{F as b}from"./FloatPassUniform.js";import{g as M}from"./interfaces2.js";import{S as L}from"./ShaderBuilder.js";const C=e(6);function A(t){return i(j,Math.cos(t.angleCutoff),Math.cos(Math.max(0,t.angleCutoff-e(2))))}function V(e,i,t){return r(I,e,t),s(E,i),E[3]=0,p(E,E,t),u(I,E,T)}const j=t(),O=f(),E=h(),y=f(),z=f(),I=f(),T=g(),R=x(),F=Object.freeze(Object.defineProperty({__proto__:null,build:function(e){const i=new L;i.include(D),i.include(P,e);const t=i.fragment;if(e.lineVerticalPlaneEnabled||e.heightManifoldEnabled)if(t.uniforms.add(new b("maxPixelDistance",((i,t)=>e.heightManifoldEnabled?2*t.camera.computeScreenPixelSizeAt(i.heightManifoldTarget):2*t.camera.computeScreenPixelSizeAt(i.lineVerticalPlaneSegment.origin)))),t.code.add(M`float planeDistancePixels(vec4 plane, vec3 pos) {
float dist = dot(plane.xyz, pos) + plane.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`),e.spherical){const e=(e,i,t)=>r(e,i.heightManifoldTarget,t.camera.viewMatrix),i=(e,i)=>r(e,[0,0,0],i.camera.viewMatrix);t.uniforms.add(new S("heightManifoldOrigin",((t,l)=>(e(O,t,l),i(z,l),n(z,z,O),a(E,z),E[3]=o(z),E))),new w("globalOrigin",((e,t)=>i(O,t))),new b("cosSphericalAngleThreshold",((e,i)=>1-Math.max(2,l(i.camera.eye,e.heightManifoldTarget)*i.camera.perRenderPixelRatio)/o(e.heightManifoldTarget)))),t.code.add(M`float globeDistancePixels(float posInGlobalOriginLength) {
float dist = abs(posInGlobalOriginLength - heightManifoldOrigin.w);
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}
float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
vec3 posInGlobalOriginNorm = normalize(globalOrigin - pos);
float cosAngle = dot(posInGlobalOriginNorm, heightManifoldOrigin.xyz);
vec3 posInGlobalOrigin = globalOrigin - pos;
float posInGlobalOriginLength = length(posInGlobalOrigin);
float sphericalDistance = globeDistancePixels(posInGlobalOriginLength);
float planarDistance = planeDistancePixels(heightPlane, pos);
return cosAngle < cosSphericalAngleThreshold ? sphericalDistance : planarDistance;
}`)}else t.code.add(M`float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
return planeDistancePixels(heightPlane, pos);
}`);if(e.pointDistanceEnabled&&(t.uniforms.add(new b("maxPixelDistance",((e,i)=>2*i.camera.computeScreenPixelSizeAt(e.pointDistanceTarget)))),t.code.add(M`float sphereDistancePixels(vec4 sphere, vec3 pos) {
float dist = distance(sphere.xyz, pos) - sphere.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`)),e.intersectsLineEnabled&&(t.uniforms.add(new b("perScreenPixelRatio",((e,i)=>i.camera.perScreenPixelRatio))),t.code.add(M`float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
return abs(dist) - radius;
}`)),(e.lineVerticalPlaneEnabled||e.intersectsLineEnabled)&&t.code.add(M`bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
vec3 dir = end - start;
float t2 = dot(dir, pos - start);
float l2 = dot(dir, dir);
return t2 >= 0.0 && t2 <= l2;
}`),t.code.add(M`void main() {
vec3 pos;
vec3 normal;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {
discard;
}
vec4 color = vec4(0, 0, 0, 0);`),e.heightManifoldEnabled){t.uniforms.add(new v("angleCutoff",(e=>A(e))),new S("heightPlane",((e,i)=>V(e.heightManifoldTarget,e.renderCoordsHelper.worldUpAtPosition(e.heightManifoldTarget,O),i.camera.viewMatrix))));const i=e.spherical?M`normalize(globalOrigin - pos)`:M`heightPlane.xyz`;t.code.add(M`
    {
      float heightManifoldAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, ${i})));
      vec4 heightManifoldColor = laserlineProfile(heightManifoldDistancePixels(heightPlane, pos));
      color = max(color, heightManifoldColor * heightManifoldAlpha);
    }
    `)}return e.pointDistanceEnabled&&(t.uniforms.add(new v("angleCutoff",(e=>A(e))),new S("pointDistanceSphere",((e,i)=>function(e,i){return r(R,e.pointDistanceOrigin,i.camera.viewMatrix),R[3]=l(e.pointDistanceOrigin,e.pointDistanceTarget),R}(e,i)))),t.code.add(M`{
float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));
color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);
}`)),e.lineVerticalPlaneEnabled&&(t.uniforms.add(new v("angleCutoff",(e=>A(e))),new S("lineVerticalPlane",((e,i)=>function(e,i){const t=m(e.lineVerticalPlaneSegment,.5,O),n=e.renderCoordsHelper.worldUpAtPosition(t,y),o=a(z,e.lineVerticalPlaneSegment.vector),l=c(E,n,o);return a(l,l),V(e.lineVerticalPlaneSegment.origin,l,i.camera.viewMatrix)}(e,i))),new w("lineVerticalStart",((e,i)=>function(e,i){const t=s(O,e.lineVerticalPlaneSegment.origin);return e.renderCoordsHelper.setAltitude(t,0),r(t,t,i.camera.viewMatrix)}(e,i))),new w("lineVerticalEnd",((e,i)=>function(e,i){const t=d(O,e.lineVerticalPlaneSegment.origin,e.lineVerticalPlaneSegment.vector);return e.renderCoordsHelper.setAltitude(t,0),r(t,t,i.camera.viewMatrix)}(e,i)))),t.code.add(M`{
if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);
vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));
color = max(color, lineVerticalColor * lineVerticalAlpha);
}
}`)),e.intersectsLineEnabled&&(t.uniforms.add(new v("angleCutoff",(e=>A(e))),new w("intersectsLineStart",((e,i)=>r(O,e.lineStartWorld,i.camera.viewMatrix))),new w("intersectsLineEnd",((e,i)=>r(O,e.lineEndWorld,i.camera.viewMatrix))),new w("intersectsLineDirection",((e,i)=>(s(E,e.intersectsLineSegment.vector),E[3]=0,a(O,p(E,E,i.camera.viewMatrix))))),new b("intersectsLineRadius",(e=>e.intersectsLineRadius))),t.code.add(M`{
if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));
color = max(color, intersectsLineColor * intersectsLineAlpha);
}
}`)),t.code.add(M`fragColor = laserlineOutput(color * depthDiscontinuityAlpha);
}`),i},defaultAngleCutoff:C},Symbol.toStringTag,{value:"Module"}));export{F as L,C as d};
