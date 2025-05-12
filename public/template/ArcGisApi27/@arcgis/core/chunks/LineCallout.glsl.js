/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{s as e}from"./vec2.js";import{a as i}from"./vec2f64.js";import{Z as r}from"./vec4f64.js";import{S as o}from"./Slice.glsl.js";import{A as t,a}from"./HUD.glsl.js";import{m as n}from"./MultipassGeometryTest.glsl.js";import{b as l}from"./VerticalOffset.glsl.js";import{F as d}from"./RgbaFloatEncoding.glsl.js";import{F as s}from"./Float4PassUniform.js";import{F as c}from"./FloatPassUniform.js";import{g as p}from"./interfaces2.js";import{S as f}from"./ShaderBuilder.js";import{V as g}from"./VertexAttribute.js";function S(e){return null!=e?e:r}const v=i(),m=Object.freeze(Object.defineProperty({__proto__:null,build:function(i){const r=new f,{vertex:m,fragment:u}=r;return m.include(t),r.include(a,i),r.include(o,i),r.attributes.add(g.UV0,"vec2"),m.uniforms.add(new s("viewport",((e,i)=>i.camera.fullViewport)),new c("lineSize",((e,i)=>e.size>0?Math.max(1,e.size)*i.camera.pixelRatio:0)),new d("pixelToNDC",((i,r)=>e(v,2/r.camera.fullViewport[2],2/r.camera.fullViewport[3]))),new c("borderSize",((e,i)=>null!=e.borderColor?i.camera.pixelRatio:0)),new d("screenOffset",((i,r)=>e(v,i.screenOffset[0]*r.camera.pixelRatio,i.screenOffset[1]*r.camera.pixelRatio)))),r.varyings.add("coverageSampling","vec4"),r.varyings.add("lineSizes","vec2"),i.hasMultipassGeometry&&r.varyings.add("depth","float"),i.hasScreenSizePerspective&&l(m),m.code.add(p`
    void main(void) {
      ProjectHUDAux projectAux;
      vec4 endPoint = projectPositionHUD(projectAux);

      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }
    ${i.occlusionTestEnabled?p`
      if (!testVisibilityHUD(endPoint)) {
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }`:""}

    ${i.hasScreenSizePerspective?p`
      vec4 perspectiveFactor = screenSizePerspectiveScaleFactor(projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
      vec2 screenOffsetScaled = applyScreenSizePerspectiveScaleFactorVec2(screenOffset, perspectiveFactor);
        `:p`vec2 screenOffsetScaled = screenOffset;`}
      // Add view dependent polygon offset to get exact same original starting point. This is mostly used to get the
      // correct depth value
      vec3 posView = (view * vec4(position, 1.0)).xyz;
      ${i.hasMultipassGeometry?"depth = posView.z;":""}

      applyHUDViewDependentPolygonOffset(auxpos1.w, projectAux.absCosAngle, posView);
      vec4 startPoint = proj * vec4(posView, 1.0);
      // Apply screen offset to both start and end point
      vec2 screenOffsetNorm = screenOffsetScaled * 2.0 / viewport.zw;
      startPoint.xy += screenOffsetNorm * startPoint.w;
      endPoint.xy += screenOffsetNorm * endPoint.w;
      // Align start and end to pixel origin
      vec4 startAligned = alignToPixelOrigin(startPoint, viewport.zw);
      vec4 endAligned = alignToPixelOrigin(endPoint, viewport.zw);
    ${i.depthHudEnabled?i.depthHudAlignStartEnabled?p`endAligned = vec4(endAligned.xy / endAligned.w * startAligned.w, startAligned.zw);`:p`startAligned = vec4(startAligned.xy / startAligned.w * endAligned.w, endAligned.zw);`:""}
      vec4 projectedPosition = mix(startAligned, endAligned, uv0.y);
      // The direction of the line in screen space
      vec2 screenSpaceDirection = normalize(endAligned.xy / endAligned.w - startAligned.xy / startAligned.w);
      vec2 perpendicularScreenSpaceDirection = vec2(screenSpaceDirection.y, -screenSpaceDirection.x);
    ${i.hasScreenSizePerspective?p`
      float lineSizeScaled = applyScreenSizePerspectiveScaleFactorFloat(lineSize, perspectiveFactor);
      float borderSizeScaled = applyScreenSizePerspectiveScaleFactorFloat(borderSize, perspectiveFactor);
        `:p`
      float lineSizeScaled = lineSize;
      float borderSizeScaled = borderSize;
        `}
      float halfPixelSize = lineSizeScaled * 0.5;

      // Compute full ndc offset, adding 1px padding for doing anti-aliasing and the border size
      float padding = 1.0 + borderSizeScaled;
      vec2 ndcOffset = (-halfPixelSize - padding + uv0.x * (lineSizeScaled + padding + padding)) * pixelToNDC;

      // Offset x/y from the center of the line in screen space
      projectedPosition.xy += perpendicularScreenSpaceDirection * ndcOffset * projectedPosition.w;

      // Compute a coverage varying which we can use in the fragment shader to determine
      // how much a pixel is actually covered by the line (i.e. to anti alias the line).
      // This works by computing two coordinates that can be linearly interpolated and then
      // subtracted to find out how far away from the line edge we are.
      float edgeDirection = (uv0.x * 2.0 - 1.0);

      float halfBorderSize = 0.5 * borderSizeScaled;
      float halfPixelSizeAndBorder = halfPixelSize + halfBorderSize;
      float outerEdgeCoverageSampler = edgeDirection * (halfPixelSizeAndBorder + halfBorderSize + 1.0);

      float isOneSided = float(lineSizeScaled < 2.0 && borderSize < 2.0);

      coverageSampling = vec4(
        // Edge coordinate
        outerEdgeCoverageSampler,

        // Border edge coordinate
        outerEdgeCoverageSampler - halfPixelSizeAndBorder * isOneSided,

        // Line offset
        halfPixelSize - 0.5,

        // Border offset
        halfBorderSize - 0.5 + halfPixelSizeAndBorder * (1.0 - isOneSided)
      );

      lineSizes = vec2(lineSizeScaled, borderSizeScaled);

      gl_Position = projectedPosition;
    }
  `),u.uniforms.add(new s("uColor",(e=>S(e.color))),new s("borderColor",(e=>S(e.borderColor)))),i.hasMultipassGeometry&&(u.include(n,i),u.uniforms.add(new d("inverseViewport",((e,i)=>i.inverseViewport)))),u.code.add(p`
    void main() {
      ${i.hasMultipassGeometry?"if( geometryDepthTest(gl_FragCoord.xy * inverseViewport, depth) ){ discard; }":""}

      // Mix between line and border coverage offsets depending on whether we need
      // a border (based on the sidedness).
      vec2 coverage = min(1.0 - clamp(abs(coverageSampling.xy) - coverageSampling.zw, 0.0, 1.0), lineSizes);

      // Mix between border and line color based on the line coverage (conceptually the line blends on top of the
      // border background).
      //
      // Anti-alias by blending final result using the full (including optional border) coverage and the color alpha
      float borderAlpha = uColor.a * borderColor.a * coverage.y;
      float colorAlpha = uColor.a * coverage.x;

      float finalAlpha = mix(borderAlpha, 1.0, colorAlpha);

    ${i.depthHudEnabled?p`
      if (finalAlpha < 0.01) {
        discard;
      }
      `:p`
      vec3 finalRgb = mix(borderColor.rgb * borderAlpha, uColor.rgb, colorAlpha);
      fragColor = vec4(finalRgb, finalAlpha);
      `}
  }
  `),r}},Symbol.toStringTag,{value:"Module"}));export{m as L};
