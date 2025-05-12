// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../support/engineContent/marker ../util/View.glsl ../../shaderModules/FloatPassUniform ../../shaderModules/interfaces ../../../shaders/LineMarkerTechniqueConfiguration".split(" "),function(b,e,f,g,c,h){b.MarkerSizing=function(k,d){const {vertex:a,constants:l}=k;l.add("markerSizePerLineWidth","float",e.MARKER_SIZE_PER_LINE_WIDTH);f.addPixelRatio(a,d);null==a.uniforms.get("markerScale")&&a.constants.add("markerScale","float",1);a.code.add(c.glsl`float getLineWidth() {
return max(getSize(), 1.0) * pixelRatio;
}
float getScreenMarkerSize() {
return markerSizePerLineWidth * markerScale * getLineWidth();
}`);d.space===h.LineMarkerSpace.World&&(a.constants.add("maxSegmentLengthFraction","float",.45),a.uniforms.add(new g.FloatPassUniform("perRenderPixelRatio",(n,m)=>m.camera.perRenderPixelRatio)),a.code.add(c.glsl`bool areWorldMarkersHidden(vec4 pos, vec4 other) {
vec3 midPoint = mix(pos.xyz, other.xyz, 0.5);
float distanceToCamera = length(midPoint);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
float worldMarkerSize = getScreenMarkerSize() * screenToWorldRatio;
float segmentLen = length(pos.xyz - other.xyz);
return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
}
float getWorldMarkerSize(vec4 pos) {
float distanceToCamera = length(pos.xyz);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
return getScreenMarkerSize() * screenToWorldRatio;
}`))};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});