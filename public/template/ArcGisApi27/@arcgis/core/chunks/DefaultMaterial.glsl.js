/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{n as o}from"./mat3.js";import{c as e}from"./mat3f64.js";import{I as a}from"./mat4f64.js";import{P as r,F as t}from"./ForwardLinearDepth.glsl.js";import{I as s,O as n,S as i,b as l,M as c,c as d}from"./MixExternalColor.glsl.js";import{S as m}from"./ShaderOutput.js";import{S as u}from"./Slice.glsl.js";import{T as v}from"./Transform.glsl.js";import{N as x,b as f,c as p}from"./VertexNormal.glsl.js";import{d as T,V as g,T as h,h as y,R as C,g as w,j as M,b,P as V}from"./PhysicallyBasedRendering.glsl.js";import{V as N}from"./VertexColor.glsl.js";import{V as j}from"./VerticalOffset.glsl.js";import{N as P,a as S}from"./Normals.glsl.js";import{g as $}from"./interfaces2.js";import{T as O}from"./Texture2DDrawUniform.js";import{T as U}from"./Texture2DPassUniform.js";import{B as E,S as F}from"./ShaderBuilder.js";import{V as A}from"./VertexAttribute.js";import{E as L,a as _,b as B,c as D}from"./EvaluateSceneLighting.glsl.js";import{m as R}from"./MultipassTerrainTest.glsl.js";import{c as z}from"./mat3f32.js";import{M as I}from"./Matrix3PassUniform.js";import{V as W}from"./VisualVariables.glsl.js";import{s as k}from"./AlphaCutoff.js";import{a as G,c as H}from"./View.glsl.js";import{F as Q}from"./Float3PassUniform.js";import{F as q}from"./Float4PassUniform.js";import{F as J}from"./FloatPassUniform.js";import{M as K}from"./Matrix4PassUniform.js";import{T as X}from"./TransparencyPassType.js";function Y(o,e){const a=o.fragment;e.hasVertexTangents?(o.attributes.add(A.TANGENT,"vec4"),o.varyings.add("vTangent","vec4"),e.doubleSidedMode===P.WindingOrder?a.code.add($`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):a.code.add($`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):a.code.add($`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),e.textureCoordinateType!==T.None&&(o.include(g,e),a.uniforms.add(e.pbrTextureBindType===E.Pass?new U("normalTexture",(o=>o.textureNormal)):new O("normalTexture",(o=>o.textureNormal))),a.code.add($`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;
return tangentSpace * rawNormal;
}`))}function Z(o){o.vertex.uniforms.add(new I("colorTextureTransformMatrix",(o=>null!=o.colorTextureTransformMatrix?o.colorTextureTransformMatrix:z()))),o.varyings.add("colorUV","vec2"),o.vertex.code.add($`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function oo(o){o.vertex.uniforms.add(new I("normalTextureTransformMatrix",(o=>null!=o.normalTextureTransformMatrix?o.normalTextureTransformMatrix:z()))),o.varyings.add("normalUV","vec2"),o.vertex.code.add($`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function eo(o){o.vertex.uniforms.add(new I("emissiveTextureTransformMatrix",(o=>null!=o.emissiveTextureTransformMatrix?o.emissiveTextureTransformMatrix:z()))),o.varyings.add("emissiveUV","vec2"),o.vertex.code.add($`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function ao(o){o.vertex.uniforms.add(new I("occlusionTextureTransformMatrix",(o=>null!=o.occlusionTextureTransformMatrix?o.occlusionTextureTransformMatrix:z()))),o.varyings.add("occlusionUV","vec2"),o.vertex.code.add($`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function ro(o){o.vertex.uniforms.add(new I("metallicRoughnessTextureTransformMatrix",(o=>null!=o.metallicRoughnessTextureTransformMatrix?o.metallicRoughnessTextureTransformMatrix:z()))),o.varyings.add("metallicRoughnessUV","vec2"),o.vertex.code.add($`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}const to=Object.freeze(Object.defineProperty({__proto__:null,build:function(T){const g=new F,{vertex:P,fragment:O,varyings:E}=g;if(G(P,T),g.include(r),E.add("vpos","vec3"),g.include(W,T),g.include(s,T),g.include(j,T),T.hasColorTextureTransform&&g.include(Z),T.output===m.Color||T.output===m.Alpha){T.hasNormalTextureTransform&&g.include(oo),T.hasEmissionTextureTransform&&g.include(eo),T.hasOcclusionTextureTransform&&g.include(ao),T.hasMetallicRoughnessTextureTransform&&g.include(ro),H(P,T),g.include(x,T),g.include(v,T);const r=T.normalType===f.Attribute||T.normalType===f.Compressed;r&&T.offsetBackfaces&&g.include(n),g.include(Y,T),g.include(p,T),T.instancedColor&&g.attributes.add(A.INSTANCECOLOR,"vec4"),E.add("vPositionLocal","vec3"),g.include(h,T),g.include(t,T),g.include(i,T),g.include(N,T),P.uniforms.add(new q("externalColor",(o=>o.externalColor))),E.add("vcolorExt","vec4"),T.hasMultipassTerrain&&E.add("depth","float");const s=T.hasModelTransformation;if(s){const r=e();P.uniforms.add(new K("model",(o=>o.modelTransformation??a))),P.uniforms.add(new I("normalTransform",(e=>(o(r,e.modelTransformation??a),r))))}P.code.add($`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${T.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${$.float(k)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          ${s?"vpos = (model * vec4(vpos, 1.0)).xyz;":""}
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${r?$`vNormalWorld = ${s?"normalize(normalTransform * dpNormal(vvLocalNormal(normalModel())))":"dpNormal(vvLocalNormal(normalModel()))"};`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${T.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${r&&T.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${T.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${T.hasColorTextureTransform?$`forwardColorUV();`:""}
        ${T.hasNormalTextureTransform?$`forwardNormalUV();`:""}
        ${T.hasEmissionTextureTransform?$`forwardEmissiveUV();`:""}
        ${T.hasOcclusionTextureTransform?$`forwardOcclusionUV();`:""}
        ${T.hasMetallicRoughnessTextureTransform?$`forwardMetallicRoughnessUV();`:""}
      }
    `)}switch(T.output){case m.Alpha:g.include(u,T),g.include(l,T),g.include(R,T),O.uniforms.add(new J("opacity",(o=>o.opacity)),new J("layerOpacity",(o=>o.layerOpacity))),T.hasColorTexture&&O.uniforms.add(new U("tex",(o=>o.texture))),O.include(c),O.code.add($`
      void main() {
        discardBySlice(vpos);
        ${T.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${T.hasColorTexture?$`
                vec4 texColor = texture(tex, ${T.hasColorTextureTransform?$`colorUV`:$`vuv0`});
                ${T.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:$`vec4 texColor = vec4(1.0);`}
        ${T.hasVertexColors?$`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:$`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        fragColor = vec4(opacity_);
      }
    `);break;case m.Color:g.include(u,T),g.include(L,T),g.include(_,T),g.include(l,T),g.include(T.instancedDoublePrecision?y:C,T),g.include(R,T),H(O,T),O.uniforms.add(P.uniforms.get("localOrigin"),new Q("ambient",(o=>o.ambient)),new Q("diffuse",(o=>o.diffuse)),new J("opacity",(o=>o.opacity)),new J("layerOpacity",(o=>o.layerOpacity))),T.hasColorTexture&&O.uniforms.add(new U("tex",(o=>o.texture))),g.include(w,T),g.include(M,T),O.include(c),g.include(S,T),B(O),D(O),b(O),O.code.add($`
      void main() {
        discardBySlice(vpos);
        ${T.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${T.hasColorTexture?$`
                vec4 texColor = texture(tex, ${T.hasColorTextureTransform?$`colorUV`:$`vuv0`});
                ${T.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:$`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${T.normalType===f.ScreenDerivative?$`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:$`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${T.pbrMode===V.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${T.receiveShadows?"readShadowMap(vpos, linearDepth)":T.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${T.hasVertexColors?$`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:$`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${T.hasNormalTexture?$`
                mat3 tangentSpace = ${T.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${T.hasNormalTextureTransform?$`normalUV`:"vuv0"});`:$`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${T.spherical?$`normalize(posWorld);`:$`vec3(0.0, 0.0, 1.0);`}

        ${T.snowCover?$`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${T.pbrMode===V.Normal||T.pbrMode===V.Schematic?$`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${T.snowCover?$`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:$`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${T.transparencyPassType===X.Color?$`fragColor = premultiplyAlpha(fragColor);`:""}
      }
    `)}return g.include(d,T),g}},Symbol.toStringTag,{value:"Module"}));export{Y as C,to as D};
