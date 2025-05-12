/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{c as o,a as r}from"./ForwardLinearDepth.glsl.js";import{S as t}from"./ShaderOutput.js";import{S as e}from"./Slice.glsl.js";import{T as l}from"./Transform.glsl.js";import{O as s}from"./ObjectAndLayerIdColor.glsl.js";import{V as a}from"./VertexColor.glsl.js";import{O as i}from"./OutputDepth.glsl.js";import{O as p}from"./OutputHighlight.glsl.js";import{m as d}from"./MultipassTerrainTest.glsl.js";import{V as u}from"./VisualVariables.glsl.js";import{s as n}from"./AlphaCutoff.js";import{C as m}from"./ColorConversion.glsl.js";import{a as f}from"./View.glsl.js";import{F as c}from"./Float4PassUniform.js";import{g as C}from"./interfaces2.js";import{S as v}from"./ShaderBuilder.js";import{T as g}from"./TransparencyPassType.js";import{V as h}from"./VertexAttribute.js";const j=Object.freeze(Object.defineProperty({__proto__:null,build:function(j){const O=new v,{vertex:T,fragment:y,attributes:b,varyings:A}=O;f(T,j),O.include(l,j),O.include(a,j),O.include(u,j),O.include(s,j),b.add(h.POSITION,"vec3"),j.vvColor&&b.add(h.COLORFEATUREATTRIBUTE,"float"),A.add("vColor","vec4"),A.add("vpos","vec3");const V=j.hasMultipassTerrain&&(j.output===t.Color||j.output===t.Alpha);V&&A.add("depth","float"),T.uniforms.add(new c("eColor",(o=>o.color)));const $=j.output===t.Depth;$&&(O.include(i,j),o(O),r(O)),T.code.add(C`
    void main(void) {
      vpos = position;
      forwardNormalizedVertexColor();
      forwardObjectAndLayerIdColor();

      ${j.hasVertexColors?"vColor *= eColor;":j.vvColor?"vColor = eColor * interpolateVVColor(colorFeatureAttribute);":"vColor = eColor;"}
      ${V?"depth = (view * vec4(vpos, 1.0)).z;":""}
      gl_Position = ${$?C`transformPositionWithDepth(proj, view, vpos, nearFar, linearDepth);`:C`transformPosition(proj, view, vpos);`}
    }
  `),O.include(e,j),V&&O.include(d,j),y.include(m);const S=j.output===t.Highlight;return S&&O.include(p,j),y.code.add(C`
  void main() {
    discardBySlice(vpos);
    ${V?"terrainDepthTest(gl_FragCoord, depth);":""}
    vec4 fColor = vColor;

    ${j.output===t.ObjectAndLayerIdColor?C`fColor.a = 1.0;`:""}

    if (fColor.a < ${C.float(n)}) {
      discard;
    }

    ${j.output===t.Alpha?C`fragColor = vec4(fColor.a);`:""}

    ${j.output===t.Color?C`fragColor = highlightSlice(fColor, vpos); ${j.transparencyPassType===g.Color?"fragColor = premultiplyAlpha(fragColor);":""}`:""}
    ${S?C`outputHighlight();`:""};
    ${j.output===t.Depth?C`outputDepth(linearDepth);`:""};
    ${j.output===t.ObjectAndLayerIdColor?C`outputObjectAndLayerIdColor();`:""}
  }
  `),O}},Symbol.toStringTag,{value:"Module"}));export{j as C};
