/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{a as e,b as t}from"./ForwardLinearDepth.glsl.js";import{S as o}from"./ShaderOutput.js";import{S as i}from"./Slice.glsl.js";import{O as r}from"./ObjectAndLayerIdColor.glsl.js";import{R as n,M as a,a as s}from"./MarkerSizing.glsl.js";import{O as l}from"./OutputDepth.glsl.js";import{L as p,c as d}from"./LineStipple.glsl.js";import{m as c}from"./MultipassTerrainTest.glsl.js";import{P as v}from"./PiUtils.glsl.js";import{s as f}from"./AlphaCutoff.js";import{C as m}from"./ColorConversion.glsl.js";import{a as h,b as u}from"./View.glsl.js";import{F as g}from"./RgbaFloatEncoding.glsl.js";import{F as S}from"./Float4PassUniform.js";import{F as D}from"./FloatPassUniform.js";import{g as y}from"./interfaces2.js";import{M as x}from"./Matrix4PassUniform.js";import{S as L}from"./ShaderBuilder.js";import{T as C}from"./TransparencyPassType.js";import{V as b}from"./VertexAttribute.js";import{_ as j}from"./tslib.es6.js";import{p as w}from"./ShaderTechniqueConfiguration.js";import{D as A}from"./DefaultTechniqueConfiguration.js";var R;!function(e){e[e.BUTT=0]="BUTT",e[e.SQUARE=1]="SQUARE",e[e.ROUND=2]="ROUND",e[e.COUNT=3]="COUNT"}(R||(R={}));class P extends A{constructor(){super(...arguments),this.output=o.Color,this.capType=R.BUTT,this.transparencyPassType=C.NONE,this.occluder=!1,this.hasSlicePlane=!1,this.hasPolygonOffset=!1,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stippleScaleWithLineWidth=!1,this.stipplePreferContinuous=!0,this.roundJoins=!1,this.applyMarkerOffset=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.cullAboveGround=!1,this.wireframe=!1,this.objectAndLayerIdColorInstanced=!1}}j([w({count:o.COUNT})],P.prototype,"output",void 0),j([w({count:R.COUNT})],P.prototype,"capType",void 0),j([w({count:C.COUNT})],P.prototype,"transparencyPassType",void 0),j([w()],P.prototype,"occluder",void 0),j([w()],P.prototype,"hasSlicePlane",void 0),j([w()],P.prototype,"hasPolygonOffset",void 0),j([w()],P.prototype,"writeDepth",void 0),j([w()],P.prototype,"draped",void 0),j([w()],P.prototype,"stippleEnabled",void 0),j([w()],P.prototype,"stippleOffColorEnabled",void 0),j([w()],P.prototype,"stippleScaleWithLineWidth",void 0),j([w()],P.prototype,"stipplePreferContinuous",void 0),j([w()],P.prototype,"roundJoins",void 0),j([w()],P.prototype,"applyMarkerOffset",void 0),j([w()],P.prototype,"vvSize",void 0),j([w()],P.prototype,"vvColor",void 0),j([w()],P.prototype,"vvOpacity",void 0),j([w()],P.prototype,"falloffEnabled",void 0),j([w()],P.prototype,"innerColorEnabled",void 0),j([w()],P.prototype,"hasOccludees",void 0),j([w()],P.prototype,"hasMultipassTerrain",void 0),j([w()],P.prototype,"cullAboveGround",void 0),j([w()],P.prototype,"wireframe",void 0),j([w({constValue:!0})],P.prototype,"stippleRequiresClamp",void 0),j([w({constValue:!0})],P.prototype,"stippleRequiresStretchMeasure",void 0),j([w({constValue:!0})],P.prototype,"hasVvInstancing",void 0),j([w({constValue:!0})],P.prototype,"hasSliceTranslatedView",void 0),j([w()],P.prototype,"objectAndLayerIdColorInstanced",void 0);const T=1,O=Object.freeze(Object.defineProperty({__proto__:null,RIBBONLINE_NUM_ROUND_JOIN_SUBDIVISIONS:1,build:function(j){const w=new L,{vertex:A,fragment:P}=w,T=j.hasMultipassTerrain&&(j.output===o.Color||j.output===o.Alpha);w.include(v),w.include(n,j),w.include(p,j);const O=j.applyMarkerOffset&&!j.draped;O&&(A.uniforms.add(new D("markerScale",(e=>e.markerScale))),w.include(a,{space:s.World,draped:!1})),j.output===o.Depth&&w.include(l,j),w.include(r,j),h(A,j),A.uniforms.add(new x("inverseProjectionMatrix",((e,t)=>t.camera.inverseProjectionMatrix)),new g("nearFar",((e,t)=>t.camera.nearFar)),new D("miterLimit",(e=>"miter"!==e.join?0:e.miterLimit)),new S("viewport",((e,t)=>t.camera.fullViewport))),A.constants.add("LARGE_HALF_FLOAT","float",65500),w.attributes.add(b.POSITION,"vec3"),w.attributes.add(b.SUBDIVISIONFACTOR,"float"),w.attributes.add(b.UV0,"vec2"),w.attributes.add(b.AUXPOS1,"vec3"),w.attributes.add(b.AUXPOS2,"vec3"),w.varyings.add("vColor","vec4"),w.varyings.add("vpos","vec3"),e(w),T&&w.varyings.add("depth","float");const E=j.stippleEnabled&&j.stippleScaleWithLineWidth;E&&w.varyings.add("vLineSizeInv","float");const F=j.capType===R.ROUND,z=E||F;z&&w.varyings.add("vLineWidth","float");const N=j.innerColorEnabled||F;N&&w.varyings.add("vLineDistance","float");const W=j.stippleEnabled&&F,V=j.falloffEnabled||W;V&&w.varyings.add("vLineDistanceNorm","float"),F&&(w.varyings.add("vSegmentSDF","float"),w.varyings.add("vReverseSegmentSDF","float")),A.code.add(y`#define PERPENDICULAR(v) vec2(v.y, -v.x);
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),A.code.add(y`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),t(w),A.code.add(y`
    void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
      float vnp = nearFar[0] * 0.99;

      if(pos.z > -nearFar[0]) {
        //current pos behind ncp --> we need to clip
        if (!isStartVertex) {
          if(prev.z < -nearFar[0]) {
            //previous in front of ncp
            pos = mix(prev, pos, interp(vnp, prev, pos));
            next = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        } else {
          if(next.z < -nearFar[0]) {
            //next in front of ncp
            pos = mix(pos, next, interp(vnp, pos, next));
            prev = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
      } else {
        //current position visible
        if (prev.z > -nearFar[0]) {
          //previous behind ncp
          prev = mix(pos, prev, interp(vnp, pos, prev));
        }
        if (next.z > -nearFar[0]) {
          //next behind ncp
          next = mix(next, pos, interp(vnp, next, pos));
        }
      }

      ${T?"depth = pos.z;":""}
      linearDepth = calculateLinearDepth(nearFar,pos.z);

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);
    }
  `),u(A,j),A.code.add(y`
  void main(void) {
    // unpack values from uv0.y
    bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;

    float coverage = 1.0;

    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      bool isJoin = abs(uv0.y) < 3.0;

      float lineSize = getSize();
      float lineWidth = lineSize * pixelRatio;

      ${z?y`vLineWidth = lineWidth;`:""}
      ${E?y`vLineSizeInv = 1.0 / lineSize;`:""}

      // convert sub-pixel coverage to alpha
      if (lineWidth < 1.0) {
        coverage = lineWidth;
        lineWidth = 1.0;
      }else{
        // Ribbon lines cannot properly render non-integer sizes. Round width to integer size if
        // larger than one for better quality. Note that we do render < 1 pixels more or less correctly
        // so we only really care to round anything larger than 1.
        lineWidth = floor(lineWidth + 0.5);
      }

      vec4 pos  = view * vec4(position.xyz, 1.0);
      vec4 prev = view * vec4(auxpos1.xyz, 1.0);
      vec4 next = view * vec4(auxpos2.xyz, 1.0);
  `),O&&A.code.add(y`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos, other);
if(!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos) * 0.5;
}`),A.code.add(y`clipAndTransform(pos, prev, next, isStartVertex);
vec2 left = (pos.xy - prev.xy);
vec2 right = (next.xy - pos.xy);
float leftLen = length(left);
float rightLen = length(right);`),(j.stippleEnabled||F)&&A.code.add(y`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${F?y`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:""}
    `),A.code.add(y`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * uv0.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),j.roundJoins?A.code.add(y`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = PERPENDICULAR(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = PERPENDICULAR(endDir);

        float factor = ${j.stippleEnabled?y`min(1.0, subdivisionFactor * ${y.float(1.5)})`:y`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(uv0.y) * factor * rotationAngle);
      `):A.code.add(y`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);`);const I=j.capType!==R.BUTT;return A.code.add(y`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);

      ${I?y`capDisplacementDir = isStartVertex ? -right : left;`:""}
    }
  `),A.code.add(y`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;

    ${V||N?y`float lineDistNorm = sign(uv0.y) * pos.w;`:""}

    ${N?y`vLineDistance = lineWidth * lineDistNorm;`:""}
    ${V?y`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xy += dpos;
  `),F&&A.code.add(y`vec2 segmentDir = normalize(segment);
vSegmentSDF = (isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir) * pos.w) ;
vReverseSegmentSDF = (isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir) * pos.w);`),j.stippleEnabled&&(j.draped?A.uniforms.add(new D("worldToScreenRatio",((e,t)=>1/t.screenToPCSRatio))):A.code.add(y`vec3 segmentCenter = mix((auxpos2 + position) * 0.5, (position + auxpos1) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),A.code.add(y`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(auxpos2 - position, position - auxpos1, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),j.draped?A.code.add(y`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = uv0.x * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):A.code.add(y`float startPseudoScreen = mix(uv0.x, uv0.x - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),A.uniforms.add(new D("stipplePatternPixelSize",(e=>d(e)))),A.code.add(y`
      float patternLength = ${j.stippleScaleWithLineWidth?"lineSize * ":""} stipplePatternPixelSize;

      // Compute the coordinates at both start and end of the line segment, because we need both to clamp to in the fragment shader
      vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);

      vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);

      // Adjust the coordinate to the displaced position (the pattern is shortened/overextended on the in/outside of joins)
      if (segmentLengthScreenDouble >= 0.001) {
        // Project the actual vertex position onto the line segment. Note that the resulting factor is within [0..1] at the
        // original vertex positions, and slightly outside of that range at the displaced positions
        vec2 stippleDisplacement = pos.xy - segmentOrigin;
        float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);

        // Apply this offset to the actual vertex coordinate (can be screen or pseudo-screen space)
        vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
      }

      // Cancel out perspective correct interpolation because we want this length the really represent the screen distance
      vStippleDistanceLimits *= pos.w;
      vStippleDistance *= pos.w;

      // Disable stipple distance limits on caps
      vStippleDistanceLimits = isJoin ?
                                 vStippleDistanceLimits :
                                 isStartVertex ?
                                  vec2(-1e038, vStippleDistanceLimits.y) :
                                  vec2(vStippleDistanceLimits.x, 1e038);
    `)),A.code.add(y`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      ${j.wireframe&&!j.draped?"pos.z -= 0.001 * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }
  }
  `),T&&w.include(c,j),w.include(i,j),P.include(m),P.code.add(y`
  void main() {
    discardBySlice(vpos);
    ${T?"terrainDepthTest(gl_FragCoord, depth);":""}
  `),j.wireframe?P.code.add(y`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(F&&P.code.add(y`
      float sdf = min(vSegmentSDF, vReverseSegmentSDF);
      vec2 fragmentPosition = vec2(
        min(sdf, 0.0),
        vLineDistance
      ) * gl_FragCoord.w;

      float fragmentRadius = length(fragmentPosition);
      float fragmentCapSDF = (fragmentRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

      if (capCoverage < ${y.float(f)}) {
        discard;
      }
    `),W?P.code.add(y`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        vLineDistanceNorm * gl_FragCoord.w
      );
      float stippleRadius = length(stipplePosition * vLineWidth);
      float stippleCapSDF = (stippleRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${y.float(f)}, stippleCoverage);
      `):P.code.add(y`float stippleAlpha = getStippleAlpha();`),P.uniforms.add(new S("intrinsicColor",(e=>e.color))),j.output!==o.ObjectAndLayerIdColor&&P.code.add(y`discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);`),P.code.add(y`vec4 color = intrinsicColor * vColor;`),j.innerColorEnabled&&(P.uniforms.add(new S("innerColor",(e=>e.innerColor??e.color)),new D("innerWidth",((e,t)=>e.innerWidth*t.camera.pixelRatio))),P.code.add(y`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`)),P.code.add(y`vec4 finalColor = blendStipple(color, stippleAlpha);`),j.falloffEnabled&&(P.uniforms.add(new D("falloff",(e=>e.falloff))),P.code.add(y`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`))),P.code.add(y`
    ${j.output===o.ObjectAndLayerIdColor?y`finalColor.a = 1.0;`:""}

    if (finalColor.a < ${y.float(f)}) {
      discard;
    }

    ${j.output===o.Alpha?y`fragColor = vec4(finalColor.a);`:""}
    ${j.output===o.Color?y`fragColor = highlightSlice(finalColor, vpos);`:""}
    ${j.output===o.Color&&j.transparencyPassType===C.Color?"fragColor = premultiplyAlpha(fragColor);":""}
    ${j.output===o.Highlight?y`fragColor = vec4(1.0);`:""}
    ${j.output===o.Depth?y`outputDepth(linearDepth);`:""}
    ${j.output===o.ObjectAndLayerIdColor?y`outputObjectAndLayerIdColor();`:""}
  }
  `),w}},Symbol.toStringTag,{value:"Module"}));export{R as C,O as R,P as a,T as b};
