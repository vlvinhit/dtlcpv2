/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{g as o}from"./interfaces2.js";import{_ as e}from"./tslib.es6.js";import{s as r}from"./vec3.js";import{c as a}from"./vec3f64.js";import{S as i}from"./ShaderOutput.js";import{D as t,c as s}from"./ForwardLinearDepth.glsl.js";import{F as l,g as n,a as d}from"./View.glsl.js";import{p as c,S as m}from"./ShaderTechniqueConfiguration.js";import{V as p}from"./VertexAttribute.js";import{a as u,b as v}from"./doublePrecisionUtils.js";import{C as f}from"./symbolColorUtils.js";import{I as x,T as h}from"./PhysicallyBasedRendering.glsl.js";import{n as g}from"./Material.js";import{n as M}from"./mat3.js";import{c as b}from"./mat3f64.js";import{I as y}from"./mat4f64.js";import{S as C}from"./Slice.glsl.js";import{T as O}from"./Transform.glsl.js";import{N as w,c as j,b as T}from"./VertexNormal.glsl.js";import{O as A}from"./ObjectAndLayerIdColor.glsl.js";import{O as P}from"./OutputDepth.glsl.js";import{O as D}from"./OutputHighlight.glsl.js";import{V as I}from"./VisualVariables.glsl.js";import{D as $}from"./DiscardOrAdjustAlphaBlend.glsl.js";import{U as S,B as V}from"./ShaderBuilder.js";import{F as N}from"./FloatPassUniform.js";import{A as z}from"./basicInterfaces.js";import{M as L}from"./Matrix3PassUniform.js";import{M as _}from"./Matrix4PassUniform.js";import{T as B}from"./Texture2DPassUniform.js";import{C as k}from"./ColorConversion.glsl.js";function R(e){e.vertex.code.add(o`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function U(e,a){a.instanced&&a.instancedDoublePrecision&&(e.attributes.add(p.MODELORIGINHI,"vec3"),e.attributes.add(p.MODELORIGINLO,"vec3"),e.attributes.add(p.MODEL,"mat3"),e.attributes.add(p.MODELNORMAL,"mat3"));const s=e.vertex;a.instancedDoublePrecision&&(s.include(t,a),s.uniforms.add(new l("viewOriginHi",((o,e)=>u(r(W,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]),W))),new l("viewOriginLo",((o,e)=>v(r(W,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]),W))))),s.code.add(o`
    vec3 calculateVPos() {
      ${a.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `),s.code.add(o`
    vec3 subtractOrigin(vec3 _pos) {
      ${a.instancedDoublePrecision?o`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),s.code.add(o`
    vec3 dpNormal(vec4 _normal) {
      ${a.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `),a.output===i.Normal&&(n(s),s.code.add(o`
    vec3 dpNormalView(vec4 _normal) {
      ${a.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),a.hasVertexTangents&&s.code.add(o`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${a.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `)}e([c()],class extends m{constructor(){super(...arguments),this.instancedDoublePrecision=!1}}.prototype,"instancedDoublePrecision",void 0);const W=a();function H(e){e.vertex.code.add(o`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${o.int(f.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${o.int(f.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${o.int(f.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${o.int(f.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function F(e,r){r.hasSymbolColors?(e.include(H),e.attributes.add(p.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(o`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new x("colorMixMode",(o=>g[o.colorMixMode]))),e.vertex.code.add(o`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}class E extends S{constructor(o,e){super(o,"float",V.Draw,((r,a,i)=>r.setUniform1f(o,e(a,i))))}}function G(o,e){X(o,e,new N("textureAlphaCutoff",(o=>o.textureAlphaCutoff)))}function q(o,e){X(o,e,new E("textureAlphaCutoff",(o=>o.textureAlphaCutoff)))}function X(e,r,a){const i=e.fragment;switch(r.alphaDiscardMode!==z.Mask&&r.alphaDiscardMode!==z.MaskBlend||i.uniforms.add(a),r.alphaDiscardMode){case z.Blend:return e.include($);case z.Opaque:i.code.add(o`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case z.Mask:i.code.add(o`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case z.MaskBlend:e.fragment.code.add(o`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function Y(e,r){const{vertex:a,fragment:t}=e,l=r.hasModelTransformation;if(l){const o=b();a.uniforms.add(new _("model",(o=>o.modelTransformation??y))),a.uniforms.add(new L("normalTransform",(e=>(M(o,e.modelTransformation??y),o))))}const n=r.hasColorTexture&&r.alphaDiscardMode!==z.Opaque;switch(r.output){case i.Depth:case i.Shadow:case i.ShadowHighlight:case i.ShadowExcludeHighlight:case i.ObjectAndLayerIdColor:d(a,r),e.include(O,r),e.include(h,r),e.include(I,r),e.include(P,r),e.include(C,r),e.include(A,r),s(e),e.varyings.add("depth","float"),n&&t.uniforms.add(new B("tex",(o=>o.texture))),a.code.add(o`
          void main(void) {
            vpos = calculateVPos();
            ${l?"vpos = (model * vec4(vpos, 1.0)).xyz;":""}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
            forwardTextureCoordinates();
            forwardObjectAndLayerIdColor();
          }
        `),e.include(G,r),t.code.add(o`
          void main(void) {
            discardBySlice(vpos);
            ${n?o`
                    vec4 texColor = texture(tex, ${r.hasColorTextureTransform?o`colorUV`:o`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${r.output===i.ObjectAndLayerIdColor?o`outputObjectAndLayerIdColor();`:o`outputDepth(depth);`}
          }
        `);break;case i.Normal:{d(a,r),e.include(O,r),e.include(w,r),e.include(j,r),e.include(h,r),e.include(I,r),n&&t.uniforms.add(new B("tex",(o=>o.texture))),r.normalType===T.ScreenDerivative&&e.varyings.add("vPositionView","vec3");const i=r.normalType===T.Attribute||r.normalType===T.Compressed;a.code.add(o`
          void main(void) {
            vpos = calculateVPos();
            ${l?"vpos = (model * vec4(vpos, 1.0)).xyz;":""}

            ${i?o`vNormalWorld = ${l?"normalize(normalTransform * dpNormal(vvLocalNormal(normalModel())))":"dpNormalView(vvLocalNormal(normalModel()))"};`:o`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),e.include(C,r),e.include(G,r),t.code.add(o`
          void main() {
            discardBySlice(vpos);
            ${n?o`
                    vec4 texColor = texture(tex, ${r.hasColorTextureTransform?o`colorUV`:o`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${r.normalType===T.ScreenDerivative?o`vec3 normal = screenDerivativeNormal(vPositionView);`:o`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break}case i.Highlight:d(a,r),e.include(O,r),e.include(h,r),e.include(I,r),n&&t.uniforms.add(new B("tex",(o=>o.texture))),a.code.add(o`
          void main(void) {
            vpos = calculateVPos();
            ${l?"vpos = (model * vec4(vpos, 1.0)).xyz;":""}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),e.include(C,r),e.include(G,r),e.include(D,r),t.code.add(o`
          void main() {
            discardBySlice(vpos);
            ${n?o`
                    vec4 texColor = texture(tex, ${r.hasColorTextureTransform?o`colorUV`:o`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}function J(e){e.include(k),e.code.add(o`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${o.int(f.Multiply)}) {
        return allMixed;
      }
      if (mode == ${o.int(f.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${o.int(f.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${o.int(f.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${o.int(f.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}export{H as D,E as F,U as I,J as M,R as O,F as S,q as a,G as b,Y as c};
