/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{P as o,F as a}from"./ForwardLinearDepth.glsl.js";import{I as e,O as r,S as i,b as t,M as l,c as s}from"./MixExternalColor.glsl.js";import{S as n}from"./ShaderOutput.js";import{S as c}from"./Slice.glsl.js";import{T as d}from"./Transform.glsl.js";import{N as m}from"./VertexNormal.glsl.js";import{T as p,h as v,R as u,a as f,g as x,j as g,b as h,P as C}from"./PhysicallyBasedRendering.glsl.js";import{V as y}from"./VertexColor.glsl.js";import{V as b}from"./VerticalOffset.glsl.js";import{E as w,a as M,b as O,c as j}from"./EvaluateSceneLighting.glsl.js";import{m as T}from"./MultipassTerrainTest.glsl.js";import{V as P}from"./VisualVariables.glsl.js";import{s as S}from"./AlphaCutoff.js";import{a as E,c as F}from"./View.glsl.js";import{F as $}from"./Float3PassUniform.js";import{F as A}from"./Float4PassUniform.js";import{F as L}from"./FloatPassUniform.js";import{g as V}from"./interfaces2.js";import{S as N}from"./ShaderBuilder.js";import{T as _}from"./Texture2DPassUniform.js";import{T as B}from"./TransparencyPassType.js";import{V as D}from"./VertexAttribute.js";const I=Object.freeze(Object.defineProperty({__proto__:null,build:function(I){const R=new N,{vertex:z,fragment:k,varyings:U}=R;return E(z,I),R.include(o),U.add("vpos","vec3"),R.include(P,I),R.include(e,I),R.include(b,I),I.output!==n.Color&&I.output!==n.Alpha||(F(R.vertex,I),R.include(m,I),R.include(d,I),I.offsetBackfaces&&R.include(r),I.instancedColor&&R.attributes.add(D.INSTANCECOLOR,"vec4"),U.add("vNormalWorld","vec3"),U.add("localvpos","vec3"),I.hasMultipassTerrain&&U.add("depth","float"),R.include(p,I),R.include(a,I),R.include(i,I),R.include(y,I),z.uniforms.add(new A("externalColor",(o=>o.externalColor))),U.add("vcolorExt","vec4"),z.code.add(V`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${I.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${V.float(S)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${I.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${I.hasMultipassTerrain?V`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),I.output===n.Alpha&&(R.include(c,I),R.include(t,I),R.include(T,I),k.uniforms.add(new L("opacity",(o=>o.opacity)),new L("layerOpacity",(o=>o.layerOpacity))),I.hasColorTexture&&k.uniforms.add(new _("tex",(o=>o.texture))),k.include(l),k.code.add(V`
      void main() {
        discardBySlice(vpos);
        ${I.hasMultipassTerrain?V`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${I.hasColorTexture?V`
                vec4 texColor = texture(tex, ${I.hasColorTextureTransform?V`colorUV`:V`vuv0`});
                ${I.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:V`vec4 texColor = vec4(1.0);`}
        ${I.hasVertexColors?V`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:V`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        fragColor = vec4(opacity_);
      }
    `)),I.output===n.Color&&(R.include(c,I),R.include(w,I),R.include(M,I),R.include(t,I),R.include(I.instancedDoublePrecision?v:u,I),R.include(T,I),F(R.fragment,I),f(k),O(k),j(k),k.uniforms.add(z.uniforms.get("localOrigin"),z.uniforms.get("view"),new $("ambient",(o=>o.ambient)),new $("diffuse",(o=>o.diffuse)),new L("opacity",(o=>o.opacity)),new L("layerOpacity",(o=>o.layerOpacity))),I.hasColorTexture&&k.uniforms.add(new _("tex",(o=>o.texture))),R.include(x,I),R.include(g,I),k.include(l),h(k),k.code.add(V`
      void main() {
        discardBySlice(vpos);
        ${I.hasMultipassTerrain?V`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${I.hasColorTexture?V`
                vec4 texColor = texture(tex, ${I.hasColorTextureTransform?V`colorUV`:V`vuv0`});
                ${I.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:V`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${I.pbrMode===C.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${I.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":I.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${I.hasVertexColors?V`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:V`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${I.snowCover?V`albedo = mix(albedo, vec3(1), 0.9);`:V``}
        ${V`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${I.pbrMode===C.Normal||I.pbrMode===C.Schematic?I.spherical?V`vec3 normalGround = normalize(vpos + localOrigin);`:V`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:V``}
        ${I.pbrMode===C.Normal||I.pbrMode===C.Schematic?V`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${I.snowCover?V`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:V`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${I.transparencyPassType===B.Color?V`fragColor = premultiplyAlpha(fragColor);`:V``}
      }
    `)),R.include(s,I),R}},Symbol.toStringTag,{value:"Module"}));export{I as R};
