// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ./_rollupPluginBabelHelpers ./vec2 ./vec2f64 ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Uniform ../views/3d/webgl-engine/lib/VertexAttribute ../views/3d/webgl-engine/shaders/sources/edgeRenderer/AdjustProjectedPosition.glsl ../views/3d/webgl-engine/shaders/sources/edgeRenderer/DiscardByCoverage.glsl ../views/3d/webgl-engine/shaders/sources/edgeRenderer/DiscardNonSilhouetteEdges.glsl ../views/3d/webgl-engine/shaders/sources/edgeRenderer/EdgeUtil.glsl ../views/3d/webgl-engine/shaders/sources/edgeRenderer/LineAmplitude.glsl ../views/3d/webgl-engine/shaders/sources/edgeRenderer/LineOffset.glsl ../views/3d/webgl-engine/shaders/sources/edgeRenderer/UnpackAttributes.glsl".split(" "),
function(k,l,q,g,r,t,u,v,w,c,x,y,e,z,A,B,h,C,D,E){function m(b){const a=new x.ShaderBuilder,{vertex:f,fragment:F}=a;b.legacy&&f.uniforms.add(new n("model"),new n("localView"));a.include(z.AdjustProjectedPosition,b);a.include(h.EdgeUtil,b);a.include(C.LineAmplitude,b);a.include(E.UnpackAttributes,b);a.include(D.LineOffset,b);a.include(r.SliceDraw,b);a.include(B.DiscardNonSilhouetteEdges,b);a.include(A.DiscardByCoverage,b);a.include(t.multipassTerrainTest,b);a.varyings.add("vColor","vec4");a.varyings.add("vRadius",
"float");a.varyings.add("vPosition","vec3");a.varyings.add("vWorldPosition","vec3");a.varyings.add("vViewPos","vec3");a.varyings.add("vLineLengthPixels","float");a.varyings.add("vSizeFalloffFactor","float");f.uniforms.add(new u.Float2PassUniform("pixelToNDC",(p,d)=>q.set(G,2/d.camera.fullViewport[2],2/d.camera.fullViewport[3])),new v.Float4PassUniform("viewport",(p,d)=>d.camera.fullViewport),new w.FloatPassUniform("pixelRatio",(p,d)=>d.camera.pixelRatio));a.attributes.add(e.VertexAttribute.POSITION0,
"vec3");a.attributes.add(e.VertexAttribute.POSITION1,"vec3");a.attributes.add(e.VertexAttribute.VARIANTOFFSET,"float");a.attributes.add(e.VertexAttribute.VARIANTSTROKE,"float");a.attributes.add(e.VertexAttribute.VARIANTEXTENSION,"float");f.code.add(c.glsl`
    const float opaqueCutoff = 1.0 / 255.0;

    void calculateGeometricOutputs(vec3 viewPosV0, vec3 viewPosV1, vec3 worldPosV0, vec3 worldPosV1, vec3 worldNormal, UnpackedAttributes unpackedAttributes) {
      vec2 sideness = unpackedAttributes.sideness;
      vec2 sidenessNorm = unpackedAttributes.sidenessNorm;

      vWorldPosition = mix(worldPosV0, worldPosV1, sidenessNorm.y).xyz;

      vec3 viewPos = mix(viewPosV0, viewPosV1, sidenessNorm.y);
      vViewPos = viewPos;

      vec4 projPosV0 = projFromViewPosition(viewPosV0);
      vec4 projPosV1 = projFromViewPosition(viewPosV1);
      vec4 projPos = projFromViewPosition(viewPos);

      vec3 screenSpaceLineNDC = (projPosV1.xyz / projPosV1.w - projPosV0.xyz / projPosV0.w);
      vec2 ndcToPixel = viewport.zw * 0.5;
      vec2 screenSpaceLinePixels = screenSpaceLineNDC.xy * ndcToPixel;
      float lineLengthPixels = length(screenSpaceLinePixels);

      float dzPerPixel = screenSpaceLineNDC.z / lineLengthPixels;
      vec2 screenSpaceDirection = screenSpaceLinePixels / lineLengthPixels;
      vec2 perpendicularScreenSpaceDirection = vec2(screenSpaceDirection.y, -screenSpaceDirection.x) * sideness.x;

      float falloffFactor = distanceBasedPerspectiveFactor(-viewPos.z) * pixelRatio;
      float lineWidthPixels = unpackedAttributes.lineWidthPixels * falloffFactor;

      float extensionLengthPixels = calculateExtensionLength(unpackedAttributes.extensionLengthPixels, lineLengthPixels) * falloffFactor;
      float lineAmplitudePixels = calculateLineAmplitude(unpackedAttributes) * pixelRatio;

      vSizeFalloffFactor = falloffFactor;

      float lineWidthAndAmplitudePixels = lineWidthPixels + lineAmplitudePixels + lineAmplitudePixels;
      float extendedLineLengthPixels = lineLengthPixels + extensionLengthPixels + extensionLengthPixels;

      ${b.antialiasing?c.glsl`
        const float aaPaddingPixels = 1.0;

        // Line size with padding
        float halfAAPaddedLineWidthAndAmplitudePixels = lineWidthAndAmplitudePixels * 0.5 + aaPaddingPixels;
        float aaPaddedRoundedCapSizePixels = lineWidthPixels * 0.5 + aaPaddingPixels;`:c.glsl`
        float halfAAPaddedLineWidthAndAmplitudePixels = max(lineWidthAndAmplitudePixels, 1.0) * 0.5;
        float aaPaddedRoundedCapSizePixels = max(lineWidthPixels, 1.0) * 0.5;`}

      // Half line width in NDC including padding for anti aliasing
      vec2 halfAAPaddedLineWidthAndAmplitudeNDC = halfAAPaddedLineWidthAndAmplitudePixels * pixelToNDC;
      vec2 aaPaddedRoundedCapSizeNDC = aaPaddedRoundedCapSizePixels * pixelToNDC;
      vec2 extensionLengthNDC = extensionLengthPixels * pixelToNDC;

      // Compute screen space position of vertex, offsetting for line size and end caps
      vec2 ndcOffset = (
          screenSpaceDirection * sideness.y * (aaPaddedRoundedCapSizeNDC + extensionLengthNDC)
        + perpendicularScreenSpaceDirection * halfAAPaddedLineWidthAndAmplitudeNDC
      );

      projPos.xy += ndcOffset * projPos.w;
      projPos.z += (dzPerPixel * (aaPaddedRoundedCapSizePixels + extensionLengthPixels)) * sideness.y * projPos.w;

      projPos = adjustProjectedPosition(projPos, worldNormal, 1.0 + max((lineWidthAndAmplitudePixels - 1.0) * 0.5, 0.0));

      // Line length with end caps
      float aaPaddedLineWithCapsLengthPixels = extendedLineLengthPixels + aaPaddedRoundedCapSizePixels + aaPaddedRoundedCapSizePixels;

      float pixelPositionAlongLine = aaPaddedLineWithCapsLengthPixels * sidenessNorm.y - aaPaddedRoundedCapSizePixels;

      // Position in pixels with origin at first vertex of line segment
      vPosition = vec3(
        halfAAPaddedLineWidthAndAmplitudePixels * sideness.x,
        pixelPositionAlongLine,
        pixelPositionAlongLine / extendedLineLengthPixels
      );

      // The line width radius in pixels
      vRadius = lineWidthPixels * 0.5;
      vLineLengthPixels = extendedLineLengthPixels;

      // discard short edges below a certain length threshold
      ${b.mode===h.EdgeUtilMode.SKETCH?c.glsl`
        if (lineLengthPixels <= 3.0) {
          gl_Position = vec4(10.0, 10.0, 10.0, 1.0);
          return;
        }`:b.mode===h.EdgeUtilMode.MIXED?c.glsl`
        if (lineLengthPixels <= 3.0 && unpackedAttributes.type <= 0.0) {
           gl_Position = vec4(10.0, 10.0, 10.0, 1.0);
           return;
        }`:""}
      gl_Position = projPos;
    }

    void main() {
      ComponentData component = readComponentData();
      UnpackedAttributes unpackedAttributes = unpackAttributes(component);

      vec3 worldPosV0, worldPosV1, viewPosV0, viewPosV1;
      worldAndViewFromModelPosition(position0, component.verticalOffset, worldPosV0, viewPosV0);
      worldAndViewFromModelPosition(position1, component.verticalOffset, worldPosV1, viewPosV1);

      // Component color
      vColor = component.color;

      // Discard fully transparent edges
      if (vColor.a < opaqueCutoff) {
        gl_Position = vec4(10.0, 10.0, 10.0, 1.0);
        return;
      }

      if (discardNonSilhouetteEdges(viewPosV0, worldPosV0)) {
        return;
      }

      // General geometric computation for all types of edges
      calculateGeometricOutputs(viewPosV0, viewPosV1, worldPosV0, worldPosV1, worldNormal(), unpackedAttributes);

      // Specific computation for different edge styles
      calculateStyleOutputs(unpackedAttributes);
    }
  `);F.code.add(c.glsl`
    vec2 lineWithCapsDistance(float radius, vec2 position, float lineLength) {
      float positionX = position.x - calculateLineOffset();

      if (radius < 1.0) {
        float coverageX = clamp(min(radius, positionX + 0.5) - max(-radius, positionX - 0.5), 0.0, 1.0);
        float coverageY = clamp(min(lineLength, position.y + 0.5) - max(0.0, position.y - 0.5), 0.0, 1.0);
        return vec2(0.5 - min(coverageX, coverageY), 0.0);
      }
      else {
        // Between -radius -> 0 for start cap, 0 for line, 0 -> radius
        float positionOnCap = position.y - clamp(position.y, 0.0, lineLength);

        vec2 lineToPosition = vec2(positionX, positionOnCap);
        return vec2(length(lineToPosition) - radius, positionOnCap / radius);
      }
    }

    void main() {
      ${b.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, vViewPos.z);":""}
      float radius = vRadius * calculateLinePressure();

      vec2 distance = lineWithCapsDistance(radius, vPosition.xy, vLineLengthPixels);
      float coverage = clamp(0.5 - distance.x, 0.0, 1.0);

      discardByCoverage(radius, coverage);
      discardBySlice(vWorldPosition);

      fragColor = vec4(vColor.rgb, vColor.a * coverage);
    }
  `);return a}const G=g.create();let n=function(b){function a(f){return b.call(this,f,"mat4")||this}l._inherits(a,b);return l._createClass(a)}(y.Uniform);g=Object.freeze(Object.defineProperty({__proto__:null,build:m},Symbol.toStringTag,{value:"Module"}));k.EdgeShader=g;k.build=m});