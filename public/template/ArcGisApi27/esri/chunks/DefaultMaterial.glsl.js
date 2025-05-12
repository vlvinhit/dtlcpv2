// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ./mat3 ./mat3f64 ./mat4f64 ../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/Offset.glsl ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl ../views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeNormalTexture.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/TextureTransformUV.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/Float3PassUniform ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/Matrix3PassUniform ../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ../views/3d/webgl-engine/lib/TransparencyPassType ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(v,F,G,w,H,I,h,x,J,K,k,L,M,N,O,P,Q,R,S,T,q,U,y,V,W,l,z,g,X,Y,A,B,r,C,Z,m,b,aa,ba,ca,D,da,ea){function E(a){const c=new ca.ShaderBuilder,{vertex:f,fragment:e,varyings:n}=c;r.addProjViewLocalOrigin(f,a);c.include(L.PositionAttribute);n.add("vpos","vec3");c.include(X.VisualVariables,a);c.include(K.InstancedDoublePrecision,a);c.include(Q.VerticalOffset,a);a.hasColorTextureTransform&&c.include(g.colorTextureUV);if(a.output===h.ShaderOutput.Color||a.output===h.ShaderOutput.Alpha){a.hasNormalTextureTransform&&
c.include(g.normalTextureUV);a.hasEmissionTextureTransform&&c.include(g.emissiveTextureUV);a.hasOcclusionTextureTransform&&c.include(g.occlusionTextureUV);a.hasMetallicRoughnessTextureTransform&&c.include(g.metallicRoughnessTextureUV);r.addCameraPosition(f,a);c.include(k.NormalAttribute,a);c.include(J.Transform,a);const d=a.normalType===k.NormalType.Attribute||a.normalType===k.NormalType.Compressed;d&&a.offsetBackfaces&&c.include(I.Offset);c.include(S.ComputeNormalTexture,a);c.include(P.VertexNormal,
a);a.instancedColor&&c.attributes.add(ea.VertexAttribute.INSTANCECOLOR,"vec4");n.add("vPositionLocal","vec3");c.include(N.TextureCoordinateAttribute,a);c.include(H.ForwardLinearDepth,a);c.include(M.SymbolColor,a);c.include(O.VertexColor,a);f.uniforms.add(new Z.Float4PassUniform("externalColor",p=>p.externalColor));n.add("vcolorExt","vec4");a.hasMultipassTerrain&&n.add("depth","float");const t=a.hasModelTransformation;if(t){const p=G.create();f.uniforms.add(new ba.Matrix4PassUniform("model",u=>u.modelTransformation??
w.IDENTITY));f.uniforms.add(new aa.Matrix3PassUniform("normalTransform",u=>{F.normalFromMat4(p,u.modelTransformation??w.IDENTITY);return p}))}f.code.add(b.glsl`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${a.instancedColor?"vcolorExt *\x3d instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${b.glsl.float(Y.symbolAlphaCutoff)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          ${t?"vpos \x3d (model * vec4(vpos, 1.0)).xyz;":""}
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${d?b.glsl`vNormalWorld = ${t?"normalize(normalTransform * dpNormal(vvLocalNormal(normalModel())))":"dpNormal(vvLocalNormal(normalModel()))"};`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${a.hasVertexTangents?"vTangent \x3d dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${d&&a.offsetBackfaces?"gl_Position \x3d offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${a.hasMultipassTerrain?"depth \x3d (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${a.hasColorTextureTransform?b.glsl`forwardColorUV();`:""}
        ${a.hasNormalTextureTransform?b.glsl`forwardNormalUV();`:""}
        ${a.hasEmissionTextureTransform?b.glsl`forwardEmissiveUV();`:""}
        ${a.hasOcclusionTextureTransform?b.glsl`forwardOcclusionUV();`:""}
        ${a.hasMetallicRoughnessTextureTransform?b.glsl`forwardMetallicRoughnessUV();`:""}
      }
    `)}switch(a.output){case h.ShaderOutput.Alpha:c.include(x.SliceDraw,a);c.include(A.DiscardOrAdjustAlphaPass,a);c.include(y.multipassTerrainTest,a);e.uniforms.add(new m.FloatPassUniform("opacity",d=>d.opacity),new m.FloatPassUniform("layerOpacity",d=>d.layerOpacity));a.hasColorTexture&&e.uniforms.add(new D.Texture2DPassUniform("tex",d=>d.texture));e.include(B.MixExternalColor);e.code.add(b.glsl`
      void main() {
        discardBySlice(vpos);
        ${a.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${a.hasColorTexture?b.glsl`
                vec4 texColor = texture(tex, ${a.hasColorTextureTransform?b.glsl`colorUV`:b.glsl`vuv0`});
                ${a.textureAlphaPremultiplied?"texColor.rgb /\x3d texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:b.glsl`vec4 texColor = vec4(1.0);`}
        ${a.hasVertexColors?b.glsl`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:b.glsl`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        fragColor = vec4(opacity_);
      }
    `);break;case h.ShaderOutput.Color:c.include(x.SliceDraw,a),c.include(q.EvaluateSceneLighting,a),c.include(T.EvaluateAmbientOcclusion,a),c.include(A.DiscardOrAdjustAlphaPass,a),c.include(a.instancedDoublePrecision?z.ReadShadowMapPass:z.ReadShadowMapDraw,a),c.include(y.multipassTerrainTest,a),r.addCameraPosition(e,a),e.uniforms.add(f.uniforms.get("localOrigin"),new C.Float3PassUniform("ambient",d=>d.ambient),new C.Float3PassUniform("diffuse",d=>d.diffuse),new m.FloatPassUniform("opacity",d=>d.opacity),
new m.FloatPassUniform("layerOpacity",d=>d.layerOpacity)),a.hasColorTexture&&e.uniforms.add(new D.Texture2DPassUniform("tex",d=>d.texture)),c.include(l.PhysicallyBasedRenderingParameters,a),c.include(W.PhysicallyBasedRendering,a),e.include(B.MixExternalColor),c.include(V.Normals,a),q.addAmbientBoostFactor(e),q.addLightingGlobalFactor(e),U.addMainLightIntensity(e),e.code.add(b.glsl`
      void main() {
        discardBySlice(vpos);
        ${a.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${a.hasColorTexture?b.glsl`
                vec4 texColor = texture(tex, ${a.hasColorTextureTransform?b.glsl`colorUV`:b.glsl`vuv0`});
                ${a.textureAlphaPremultiplied?"texColor.rgb /\x3d texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:b.glsl`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${a.normalType===k.NormalType.ScreenDerivative?b.glsl`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:b.glsl`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${a.pbrMode===l.PBRMode.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${a.receiveShadows?"readShadowMap(vpos, linearDepth)":a.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${a.hasVertexColors?b.glsl`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:b.glsl`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${a.hasNormalTexture?b.glsl`
                mat3 tangentSpace = ${a.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${a.hasNormalTextureTransform?b.glsl`normalUV`:"vuv0"});`:b.glsl`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${a.spherical?b.glsl`normalize(posWorld);`:b.glsl`vec3(0.0, 0.0, 1.0);`}

        ${a.snowCover?b.glsl`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${a.pbrMode===l.PBRMode.Normal||a.pbrMode===l.PBRMode.Schematic?b.glsl`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${a.snowCover?b.glsl`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:b.glsl`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${a.transparencyPassType===da.TransparencyPassType.Color?b.glsl`fragColor = premultiplyAlpha(fragColor);`:""}
      }
    `)}c.include(R.DefaultMaterialAuxiliaryPasses,a);return c}const fa=Object.freeze(Object.defineProperty({__proto__:null,build:E},Symbol.toStringTag,{value:"Module"}));v.DefaultMaterial=fa;v.build=E});