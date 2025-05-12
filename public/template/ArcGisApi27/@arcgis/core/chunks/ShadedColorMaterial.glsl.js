/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{c as o}from"./vec4f64.js";import{c as e,a as r,g as i}from"./View.glsl.js";import{F as a}from"./FloatPassUniform.js";import{g as t}from"./interfaces2.js";import{S as n}from"./ShaderOutput.js";import{S as s}from"./Slice.glsl.js";import{T as l}from"./Transform.glsl.js";import{m as d}from"./MultipassTerrainTest.glsl.js";import{s as c}from"./AlphaCutoff.js";import{C as m}from"./ColorConversion.glsl.js";import{F as f}from"./Float3PassUniform.js";import{F as p}from"./Float4PassUniform.js";import{S as v}from"./ShaderBuilder.js";import{T as u}from"./TransparencyPassType.js";import{V as g}from"./VertexAttribute.js";function S(o,r){if(!r.screenSizeEnabled)return;const i=o.vertex;e(i,r),i.uniforms.add(new a("perScreenPixelRatio",((o,e)=>e.camera.perScreenPixelRatio)),new a("screenSizeScale",(o=>o.screenSizeScale))),i.code.add(t`float computeRenderPixelSizeAt( vec3 pWorld ){
vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
float viewDirectionDistance = abs(dot(viewForward, pWorld - cameraPosition));
return viewDirectionDistance * perScreenPixelRatio;
}
vec3 screenSizeScaling(vec3 position, vec3 anchor){
return position * screenSizeScale * computeRenderPixelSizeAt(anchor) + anchor;
}`)}const h=o(),w=Object.freeze(Object.defineProperty({__proto__:null,build:function(o){const e=new v,a=o.hasMultipassTerrain&&(o.output===n.Color||o.output===n.Alpha);e.include(l,o),e.include(S,o),e.include(s,o);const{vertex:w,fragment:C}=e;return C.include(m),r(w,o),C.uniforms.add(new p("uColor",(o=>o.color))),e.attributes.add(g.POSITION,"vec3"),e.varyings.add("vWorldPosition","vec3"),a&&e.varyings.add("depth","float"),o.screenSizeEnabled&&e.attributes.add(g.OFFSET,"vec3"),o.shadingEnabled&&(i(w),e.attributes.add(g.NORMAL,"vec3"),e.varyings.add("vViewNormal","vec3")),w.code.add(t`
    void main(void) {
      vWorldPosition = ${o.screenSizeEnabled?"screenSizeScaling(offset, position)":"position"};
  `),o.shadingEnabled&&w.code.add(t`vec3 worldNormal = normal;
vViewNormal = (viewNormal * vec4(worldNormal, 1)).xyz;`),w.code.add(t`
    ${a?"depth = (view * vec4(vWorldPosition, 1.0)).z;":""}
    gl_Position = transformPosition(proj, view, vWorldPosition);
  }
  `),a&&e.include(d,o),C.code.add(t`
    void main() {
      discardBySlice(vWorldPosition);
      ${a?"terrainDepthTest(gl_FragCoord, depth);":""}
    `),o.shadingEnabled?(C.uniforms.add(new f("shadingDirection",(o=>o.shadingDirection))),C.uniforms.add(new p("shadedColor",(o=>function(o,e){const r=1-o[3],i=o[3]+e[3]*r;return 0===i?(h[3]=i,h):(h[0]=(o[0]*o[3]+e[0]*e[3]*r)/i,h[1]=(o[1]*o[3]+e[1]*e[3]*r)/i,h[2]=(o[2]*o[3]+e[2]*e[3]*r)/i,h[3]=e[3],h)}(o.shadingTint,o.color)))),C.code.add(t`vec3 viewNormalNorm = normalize(vViewNormal);
float shadingFactor = 1.0 - clamp(-dot(viewNormalNorm, shadingDirection), 0.0, 1.0);
vec4 finalColor = mix(uColor, shadedColor, shadingFactor);`)):C.code.add(t`vec4 finalColor = uColor;`),C.code.add(t`
      ${o.output===n.ObjectAndLayerIdColor?t`finalColor.a = 1.0;`:""}
      if (finalColor.a < ${t.float(c)}) {
        discard;
      }
      ${o.output===n.Alpha?t`fragColor = vec4(finalColor.a);`:""}

      ${o.output===n.Color?t`fragColor = highlightSlice(finalColor, vWorldPosition); ${o.transparencyPassType===u.Color?"fragColor = premultiplyAlpha(fragColor);":""}`:""}
    }
    `),e}},Symbol.toStringTag,{value:"Module"}));export{w as S};
