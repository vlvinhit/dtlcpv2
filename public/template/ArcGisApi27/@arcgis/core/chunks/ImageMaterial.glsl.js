/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{S as r}from"./ShaderOutput.js";import{S as o}from"./Slice.glsl.js";import{T as a}from"./Transform.glsl.js";import{m as e}from"./MultipassTerrainTest.glsl.js";import{d as s}from"./AlphaCutoff.js";import{C as t}from"./ColorConversion.glsl.js";import{a as i}from"./View.glsl.js";import{F as l}from"./FloatPassUniform.js";import{g as d}from"./interfaces2.js";import{S as p}from"./ShaderBuilder.js";import{T as n}from"./Texture2DPassUniform.js";import{T as f}from"./TransparencyPassType.js";import{V as m}from"./VertexAttribute.js";const c=Object.freeze(Object.defineProperty({__proto__:null,build:function(c){const u=new p,{vertex:v,fragment:g}=u;return i(v,c),u.include(a,c),u.attributes.add(m.POSITION,"vec3"),u.attributes.add(m.UV0,"vec2"),u.varyings.add("vpos","vec3"),c.hasMultipassTerrain&&u.varyings.add("depth","float"),v.code.add(d`
    void main(void) {
      vpos = position;
      ${c.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),u.include(o,c),u.include(e,c),g.uniforms.add(new n("tex",(r=>r.texture)),new l("opacity",(r=>r.opacity))),u.varyings.add("vTexCoord","vec2"),c.output===r.Alpha?g.code.add(d`
    void main() {
      discardBySlice(vpos);
      ${c.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}

      float alpha = texture(tex, vTexCoord).a * opacity;
      if (alpha  < ${d.float(s)}) {
        discard;
      }

      fragColor = vec4(alpha);
    }
    `):(g.include(t),g.code.add(d`
    void main() {
      discardBySlice(vpos);
      ${c.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
      fragColor = texture(tex, vTexCoord) * opacity;

      if (fragColor.a < ${d.float(s)}) {
        discard;
      }

      fragColor = highlightSlice(fragColor, vpos);
      ${c.transparencyPassType===f.Color?"fragColor = premultiplyAlpha(fragColor);":""}
    }
    `)),u}},Symbol.toStringTag,{value:"Module"}));export{c as I};
