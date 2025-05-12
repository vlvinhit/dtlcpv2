/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{V as e}from"./VisualVariables.glsl.js";import{F as t}from"./Float3PassUniform.js";import{F as a}from"./FloatPassUniform.js";import{F as i}from"./FloatsPassUniform.js";import{g as o}from"./interfaces2.js";import{V as r}from"./VertexAttribute.js";import{c as s}from"./sdfPrimitives.js";import{P as n,T as c}from"./enums3.js";import{T as p,a as d}from"./Texture.js";import{b as v}from"./View.glsl.js";import{_ as l}from"./tslib.es6.js";import{S as u}from"./ShaderOutput.js";import{p as m}from"./ShaderTechniqueConfiguration.js";import{T as f}from"./TransparencyPassType.js";import{D as y}from"./DefaultTechniqueConfiguration.js";var h,S;!function(e){e[e.Draped=0]="Draped",e[e.Screen=1]="Screen",e[e.World=2]="World",e[e.COUNT=3]="COUNT"}(h||(h={})),function(e){e[e.Center=0]="Center",e[e.Tip=1]="Tip",e[e.COUNT=2]="COUNT"}(S||(S={}));class O extends y{constructor(){super(...arguments),this.output=u.Color,this.transparencyPassType=f.NONE,this.occluder=!1,this.hasSlicePlane=!1,this.writeDepth=!1,this.space=h.Screen,this.hideOnShortSegments=!1,this.hasCap=!1,this.anchor=S.Center,this.hasTip=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.cullAboveGround=!1}get draped(){return this.space===h.Draped}}function T(s,n){const c=s.vertex;c.uniforms.add(new a("intrinsicWidth",(e=>e.width))),n.vvSize?(s.attributes.add(r.SIZEFEATUREATTRIBUTE,"float"),c.uniforms.add(new t("vvSizeMinSize",(e=>e.vvSize.minSize)),new t("vvSizeMaxSize",(e=>e.vvSize.maxSize)),new t("vvSizeOffset",(e=>e.vvSize.offset)),new t("vvSizeFactor",(e=>e.vvSize.factor))),c.code.add(o`float getSize() {
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(s.attributes.add(r.SIZE,"float"),c.code.add(o`float getSize(){
return intrinsicWidth * size;
}`)),n.vvOpacity?(s.attributes.add(r.OPACITYFEATUREATTRIBUTE,"float"),c.constants.add("vvOpacityNumber","int",8),c.uniforms.add(new i("vvOpacityValues",(e=>e.vvOpacity.values),8),new i("vvOpacityOpacities",(e=>e.vvOpacity.opacityValues),8)),c.code.add(o`float interpolateOpacity( float value ){
if (value <= vvOpacityValues[0]) {
return vvOpacityOpacities[0];
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
}
}
return vvOpacityOpacities[vvOpacityNumber - 1];
}
vec4 applyOpacity( vec4 color ){
return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
}`)):c.code.add(o`vec4 applyOpacity( vec4 color ){
return color;
}`),n.vvColor?(s.include(e,n),s.attributes.add(r.COLORFEATUREATTRIBUTE,"float"),c.code.add(o`vec4 getColor(){
return applyOpacity(interpolateVVColor(colorFeatureAttribute));
}`)):(s.attributes.add(r.COLOR,"vec4"),c.code.add(o`vec4 getColor(){
return applyOpacity(color);
}`))}l([m({count:u.COUNT})],O.prototype,"output",void 0),l([m({count:f.COUNT})],O.prototype,"transparencyPassType",void 0),l([m()],O.prototype,"occluder",void 0),l([m()],O.prototype,"hasSlicePlane",void 0),l([m()],O.prototype,"writeDepth",void 0),l([m({count:h.COUNT})],O.prototype,"space",void 0),l([m()],O.prototype,"hideOnShortSegments",void 0),l([m()],O.prototype,"hasCap",void 0),l([m({count:S.COUNT})],O.prototype,"anchor",void 0),l([m()],O.prototype,"hasTip",void 0),l([m()],O.prototype,"vvSize",void 0),l([m()],O.prototype,"vvColor",void 0),l([m()],O.prototype,"vvOpacity",void 0),l([m()],O.prototype,"hasOccludees",void 0),l([m()],O.prototype,"hasMultipassTerrain",void 0),l([m()],O.prototype,"cullAboveGround",void 0),l([m({constValue:!0})],O.prototype,"hasVvInstancing",void 0),l([m({constValue:!0})],O.prototype,"hasSliceTranslatedView",void 0);const z=64,g=32,C=10,x=.25;function R(e,t){const a=s(e,64,32,6.4),i=new p;return i.internalFormat=n.RGBA,i.width=64,i.height=64,i.wrapMode=c.CLAMP_TO_EDGE,new d(t,i,a)}function P(e,t){const{vertex:i,constants:r}=e;r.add("markerSizePerLineWidth","float",10),v(i,t),null==i.uniforms.get("markerScale")&&i.constants.add("markerScale","float",1),i.code.add(o`float getLineWidth() {
return max(getSize(), 1.0) * pixelRatio;
}
float getScreenMarkerSize() {
return markerSizePerLineWidth * markerScale * getLineWidth();
}`),t.space===h.World&&(i.constants.add("maxSegmentLengthFraction","float",.45),i.uniforms.add(new a("perRenderPixelRatio",((e,t)=>t.camera.perRenderPixelRatio))),i.code.add(o`bool areWorldMarkersHidden(vec4 pos, vec4 other) {
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
}`))}export{S as L,P as M,T as R,h as a,O as b,R as c,z as d,g as e,x as f,C as g};
