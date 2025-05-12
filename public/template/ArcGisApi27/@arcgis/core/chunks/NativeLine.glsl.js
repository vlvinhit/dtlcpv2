/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{S as e}from"./ShaderOutput.js";import{S as o}from"./Slice.glsl.js";import{T as t}from"./Transform.glsl.js";import{V as i}from"./VertexColor.glsl.js";import{O as r}from"./OutputHighlight.glsl.js";import{L as a,c as l}from"./LineStipple.glsl.js";import{s}from"./AlphaCutoff.js";import{a as n}from"./View.glsl.js";import{F as d}from"./Float4PassUniform.js";import{F as p}from"./FloatPassUniform.js";import{g as c}from"./interfaces2.js";import{S as m}from"./ShaderBuilder.js";import{V as u}from"./VertexAttribute.js";const g=Object.freeze(Object.defineProperty({__proto__:null,build:function(g){const f=new m,{vertex:S,fragment:v}=f;return f.include(t,g),f.include(i,g),f.include(a,g),n(S,g),g.stippleEnabled&&(f.attributes.add(u.UV0,"vec2"),f.attributes.add(u.AUXPOS1,"vec3"),S.uniforms.add(new d("viewport",((e,o)=>o.camera.fullViewport)))),f.attributes.add(u.POSITION,"vec3"),f.varyings.add("vpos","vec3"),S.code.add(c`void main(void) {
vpos = position;
forwardNormalizedVertexColor();
gl_Position = transformPosition(proj, view, vpos);`),g.stippleEnabled&&(S.code.add(c`vec4 vpos2 = transformPosition(proj, view, auxpos1);
vec2 ndcToPixel = viewport.zw * 0.5;
float lineSegmentPixelSize = length((vpos2.xy / vpos2.w - gl_Position.xy / gl_Position.w) * ndcToPixel);`),g.draped?S.uniforms.add(new p("worldToScreenRatio",((e,o)=>1/o.screenToPCSRatio))):S.code.add(c`vec3 segmentCenter = (position + auxpos1) * 0.5;
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),S.code.add(c`float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);`),g.draped?S.code.add(c`float startPseudoScreen = uv0.y * discreteWorldToScreenRatio - mix(0.0, lineSegmentPixelSize, uv0.x);
float segmentLengthPseudoScreen = lineSegmentPixelSize;`):S.code.add(c`float segmentLengthRender = length(position - auxpos1);
float startPseudoScreen = mix(uv0.y, uv0.y - segmentLengthRender, uv0.x) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),S.uniforms.add(new p("stipplePatternPixelSize",(e=>l(e)))),S.code.add(c`vec2 stippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, lineSegmentPixelSize, stipplePatternPixelSize);
vStippleDistance = mix(stippleDistanceLimits.x, stippleDistanceLimits.y, uv0.x);
vStippleDistance *= gl_Position.w;`)),S.code.add(c`}`),g.output===e.Highlight&&f.include(r,g),f.include(o,g),v.uniforms.add(new p("alphaCoverage",((e,o)=>Math.min(1,e.width*o.camera.pixelRatio)))),g.hasVertexColors||v.uniforms.add(new d("constantColor",(e=>e.color))),v.code.add(c`
  void main() {
    discardBySlice(vpos);

    vec4 color = ${g.hasVertexColors?"vColor":"constantColor"};

    float stippleAlpha = getStippleAlpha();
    discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);

    vec4 finalColor = blendStipple(vec4(color.rgb, color.a * alphaCoverage), stippleAlpha);

    ${g.output===e.ObjectAndLayerIdColor?c`finalColor.a = 1.0;`:""}

    if (finalColor.a < ${c.float(s)}) {
      discard;
    }

    ${g.output===e.Color?c`fragColor = highlightSlice(finalColor, vpos);`:""}
    ${g.output===e.Highlight?c`outputHighlight();`:""}
  }
  `),f}},Symbol.toStringTag,{value:"Module"}));export{g as N};
