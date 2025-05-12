/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{s as e,k as o}from"./vec2.js";import{a as r}from"./vec2f64.js";import{Z as i}from"./vec4f64.js";import{b as t}from"./sdfPrimitives.js";import{S as a}from"./ShaderOutput.js";import{S as l}from"./Slice.glsl.js";import{O as s}from"./ObjectAndLayerIdColor.glsl.js";import{A as n,a as c}from"./HUD.glsl.js";import{R as d}from"./ReadLinearDepth.glsl.js";import{m as p}from"./MultipassGeometryTest.glsl.js";import{F as u,R as f}from"./RgbaFloatEncoding.glsl.js";import{g as v}from"./interfaces2.js";import{T as m}from"./Texture2DPassUniform.js";import{O as g}from"./OutputHighlight.glsl.js";import{V as h}from"./VisualVariables.glsl.js";import{s as x,d as b}from"./AlphaCutoff.js";import{C}from"./ColorConversion.glsl.js";import{S as j,c as P,b as S}from"./VerticalOffset.glsl.js";import{b as z}from"./View.glsl.js";import{F as y}from"./Float4PassUniform.js";import{F as w}from"./FloatPassUniform.js";import{S as A}from"./ShaderBuilder.js";import{T as D}from"./TransparencyPassType.js";import{V as O}from"./VertexAttribute.js";function $(e,o){const{vertex:r,fragment:i}=e;r.include(n),o.hasMultipassGeometry&&r.include(p),o.hasMultipassTerrain&&e.varyings.add("depth","float"),r.code.add(v`
  void main(void) {
    vec4 posProjCenter;
    if (dot(position, position) > 0.0) {
      // Render single point to center of the pixel to avoid subpixel
      // filtering to affect the marker color
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      ${o.hasMultipassGeometry?v`
        // Don't draw vertices behind geometry
        if(geometryDepthTest(.5 + .5 * posProjCenter.xy / posProjCenter.w, projectAux.posView.z)){
          posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
        }`:""}

      ${o.hasMultipassTerrain?"depth = projectAux.posView.z;":""}
      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        // Project out of clip space
        posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
      }

    } else {
      // Project out of clip space
      posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
    }

    gl_Position = posProjCenter;
    gl_PointSize = 1.0;
  }
  `),o.hasMultipassTerrain&&i.include(d),o.hasMultipassTerrain&&i.uniforms.add(new m("terrainDepthTexture",((e,o)=>o.multipassTerrain.linearDepthTexture)),new u("nearFar",((e,o)=>o.camera.nearFar))),i.include(f),i.code.add(v`
  void main() {
    fragColor = vec4(1);
    ${o.hasMultipassTerrain?v`
          // Read the rgba data from the texture linear depth
          vec4 terrainDepthData = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0);

          float terrainDepth = linearDepthFromFloat(rgba2float(terrainDepthData), nearFar);

          // If HUD vertex is behind terrain and the terrain depth is not the initialize value (e.g. we are not looking at the sky)
          // Mark the HUD vertex as occluded by transparent terrain
          if(depth < terrainDepth && terrainDepthData != vec4(0,0,0,1)){
            fragColor.g = 0.5;
          }`:""}
  }
  `)}function F(e){return e.outlineColor[3]>0&&e.outlineSize>0}function T(r,i=B){var t,a,l;return r.textureIsSignedDistanceField?(t=r.anchorPosition,l=i,null!=(a=r.distanceFieldBoundingBox)?e(l,t[0]*(a[2]-a[0])+a[0],t[1]*(a[3]-a[1])+a[1]):e(l,0,0)):o(i,r.anchorPosition),i}const B=r(),H=Object.freeze(Object.defineProperty({__proto__:null,build:function(o){const r=new A,d=o.signedDistanceFieldEnabled;if(r.include(c,o),r.include(l,o),o.occlusionPass)return r.include($,o),r;const{vertex:p,fragment:H}=r;r.include(j),H.include(f),H.include(C),r.include(h,o),r.include(s,o),r.varyings.add("vcolor","vec4"),r.varyings.add("vtc","vec2"),r.varyings.add("vsize","vec2"),o.binaryHighlightOcclusionEnabled&&r.varyings.add("voccluded","float"),p.uniforms.add(new y("viewport",((e,o)=>o.camera.fullViewport)),new u("screenOffset",((o,r)=>e(B,2*o.screenOffset[0]*r.camera.pixelRatio,2*o.screenOffset[1]*r.camera.pixelRatio))),new u("anchorPosition",(e=>T(e))),new y("materialColor",(e=>e.color))),z(p,o),d&&(p.uniforms.add(new y("outlineColor",(e=>e.outlineColor))),H.uniforms.add(new y("outlineColor",(e=>F(e)?e.outlineColor:i)),new w("outlineSize",(e=>F(e)?e.outlineSize:0)))),o.hasScreenSizePerspective&&(P(p),S(p)),(o.debugDrawLabelBorder||o.binaryHighlightOcclusionEnabled)&&r.varyings.add("debugBorderCoords","vec4"),r.attributes.add(O.UV0,"vec2"),r.attributes.add(O.COLOR,"vec4"),r.attributes.add(O.SIZE,"vec2"),r.attributes.add(O.AUXPOS2,"vec4"),p.code.add(v`
    void main(void) {
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      forwardObjectAndLayerIdColor();

      if (rejectBySlice(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }
      vec2 inputSize;
      ${o.hasScreenSizePerspective?v`
      inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
      vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
         `:v`
      inputSize = size;
      vec2 screenOffsetScaled = screenOffset;`}

      ${o.vvSize?"inputSize *= vvScale(auxpos2).xx;":""}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);

      ${o.occlusionTestEnabled||o.binaryHighlightOcclusionEnabled?"bool visible = testVisibilityHUD(posProj);":""}

      ${o.binaryHighlightOcclusionEnabled?"voccluded = visible ? 0.0 : 1.0;":""}
    `);const V=v`vec2 uv01 = floor(uv0);
vec2 uv = uv0 - uv01;
quadOffset.xy = ((uv01 - anchorPosition) * 2.0 * combinedSize + screenOffsetScaled) / viewport.zw * posProj.w;`;o.pixelSnappingEnabled&&p.include(n);const E=o.pixelSnappingEnabled?d?v`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:v`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:v`posProj += quadOffset;`;p.code.add(v`
    ${o.occlusionTestEnabled?"if (visible) {":""}
    ${V}
    ${o.vvColor?"vcolor = interpolateVVColor(auxpos2.y) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    ${o.output===a.ObjectAndLayerIdColor?v`vcolor.a = 1.0;`:""}

    bool alphaDiscard = vcolor.a < ${v.float(x)};
    ${d?`alphaDiscard = alphaDiscard && outlineColor.a < ${v.float(x)};`:""}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${E}
      gl_Position = posProj;
    }

    vtc = uv;

    ${o.debugDrawLabelBorder?"debugBorderCoords = vec4(uv01, 1.5 / combinedSize);":""}
    vsize = inputSize;
    ${o.occlusionTestEnabled?v`} else { vtc = vec2(0.0);
      ${o.debugDrawLabelBorder?"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);}":"}"}`:""}
  }
  `),H.uniforms.add(new m("tex",(e=>e.texture)));const L=o.debugDrawLabelBorder?v`(isBorder > 0.0 ? 0.0 : ${v.float(b)})`:v.float(b),U=v`
    ${o.debugDrawLabelBorder?v`
      float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`:""}

    ${d?v`
      vec4 fillPixelColor = vcolor;

      // Attempt to sample texel centers to avoid that thin cross outlines
      // disappear with large symbol sizes.
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/7058#issuecomment-603041
      const float txSize = ${v.float(t)};
      const float texelSize = 1.0 / txSize;
      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      vec2 samplePos = vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgba2float(texture(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${L} ||
          fillPixelColor.a + outlinePixelColor.a < ${v.float(x)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        fragColor = vec4(compositeColor, compositeAlpha);
      } else {
        if (fillAlphaFactor < ${L}) {
          discard;
        }

        fragColor = premultiplyAlpha(fillPixelColor);
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:v`
          vec4 texColor = texture(tex, vtc, -0.5);
          if (texColor.a < ${L}) {
            discard;
          }
          fragColor = texColor * premultiplyAlpha(vcolor);
          `}

    // Draw debug border with transparency, so that original texels along border are still partially visible
    ${o.debugDrawLabelBorder?v`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`:""}
  `;return o.output===a.Alpha&&H.code.add(v`
      void main() {
        ${U}
        fragColor = vec4(fragColor.a);
      }
      `),o.output===a.ObjectAndLayerIdColor&&H.code.add(v`
      void main() {
        ${U}
        outputObjectAndLayerIdColor();
      }
      `),o.output===a.Color&&H.code.add(v`
    void main() {
      ${U}
      ${o.transparencyPassType===D.FrontFace?"fragColor.rgb /= fragColor.a;":""}
    }
    `),o.output===a.Highlight&&(r.include(g,o),H.code.add(v`
    void main() {
      ${U}
      ${o.binaryHighlightOcclusionEnabled?v`
          if (voccluded == 1.0) {
            fragColor = vec4(1.0, 1.0, 0.0, 1.0);
          } else {
            fragColor = vec4(1.0, 0.0, 1.0, 1.0);
          }`:"outputHighlight();"}
    }
    `)),r},calculateAnchorPosForRendering:T},Symbol.toStringTag,{value:"Module"}));export{H,T as c};
