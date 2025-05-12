/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{s as e}from"./vec4.js";import{c as r}from"./vec4f64.js";import{F as a}from"./Float4PassUniform.js";import{g as c}from"./interfaces2.js";import{c as t}from"./View.glsl.js";function s(e){e.vertex.code.add(c`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),e.vertex.code.add(c`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(c`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),e.vertex.code.add(c`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),e.vertex.code.add(c`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(c`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),e.vertex.code.add(c`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function i(e){e.uniforms.add(new a("screenSizePerspective",(e=>n(e.screenSizePerspective))))}function o(e){e.uniforms.add(new a("screenSizePerspectiveAlignment",(e=>n(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}function n(r){return e(l,r.parameters.divisor,r.parameters.offset,r.parameters.minPixelSize,r.paddingPixelsOverride)}const l=r();function f(e,r){const a=e.vertex;r.hasVerticalOffset?(d(a),r.hasScreenSizePerspective&&(e.include(s),o(a),t(e.vertex,r)),a.code.add(c`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${r.spherical?c`vec3 worldNormal = normalize(worldPos + localOrigin);`:c`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${r.hasScreenSizePerspective?c`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:c`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):a.code.add(c`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const v=r();function d(r){r.uniforms.add(new a("verticalOffset",((r,a)=>{const{minWorldLength:c,maxWorldLength:t,screenLength:s}=r.verticalOffset,i=Math.tan(.5*a.camera.fovY)/(.5*a.camera.fullViewport[3]),o=a.camera.pixelRatio||1;return e(v,s*o,i,c,t)})))}export{s as S,f as V,d as a,o as b,i as c};
