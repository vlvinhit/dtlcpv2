/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{c as e,a as o}from"./ForwardLinearDepth.glsl.js";import{S as t}from"./ShaderOutput.js";import{S as a}from"./Slice.glsl.js";import{T as r}from"./Transform.glsl.js";import{V as i}from"./VertexColor.glsl.js";import{O as l}from"./OutputDepth.glsl.js";import{O as n}from"./OutputHighlight.glsl.js";import{m as c}from"./MultipassTerrainTest.glsl.js";import{V as s}from"./VisualVariables.glsl.js";import{s as d}from"./AlphaCutoff.js";import{C as p}from"./ColorConversion.glsl.js";import{a as u,c as m}from"./View.glsl.js";import{F as v}from"./Float4PassUniform.js";import{F as f}from"./FloatPassUniform.js";import{g}from"./interfaces2.js";import{S as h}from"./ShaderBuilder.js";import{T as C}from"./TransparencyPassType.js";import{V as S}from"./VertexAttribute.js";var w;!function(e){e[e.Horizontal=0]="Horizontal",e[e.Vertical=1]="Vertical",e[e.Cross=2]="Cross",e[e.ForwardDiagonal=3]="ForwardDiagonal",e[e.BackwardDiagonal=4]="BackwardDiagonal",e[e.DiagonalCross=5]="DiagonalCross",e[e.COUNT=6]="COUNT"}(w||(w={}));const j=.70710678118,T=j,y=Object.freeze(Object.defineProperty({__proto__:null,build:function(y){const x=new h,D=y.hasMultipassTerrain&&(y.output===t.Color||y.output===t.Alpha),{vertex:P,fragment:R,attributes:V,varyings:$}=x;u(P,y),x.include(r,y),x.include(i,y),x.include(s,y),y.draped?P.uniforms.add(new f("worldToScreenRatio",((e,o)=>1/o.screenToPCSRatio))):V.add(S.BOUNDINGRECT,"mat3"),V.add(S.POSITION,"vec3"),V.add(S.UVMAPSPACE,"vec4"),y.vvColor&&V.add(S.COLORFEATUREATTRIBUTE,"float"),$.add("vColor","vec4"),$.add("vpos","vec3"),$.add("vuv","vec2"),D&&$.add("depth","float"),P.uniforms.add(new v("uColor",(e=>e.color)));const b=y.style===w.ForwardDiagonal||y.style===w.BackwardDiagonal||y.style===w.DiagonalCross;b&&P.code.add(g`
      const mat2 rotate45 = mat2(${g.float(j)}, ${g.float(-T)},
                                 ${g.float(T)}, ${g.float(j)});
    `),y.draped||(m(P,y),P.uniforms.add(new f("worldToScreenPerDistanceRatio",((e,o)=>1/o.camera.perScreenPixelRatio))),P.code.add(g`vec3 projectPointToLineSegment(vec3 center, vec3 halfVector, vec3 point) {
float projectedLength = dot(halfVector, point - center) / dot(halfVector, halfVector);
return center + halfVector * clamp(projectedLength, -1.0, 1.0);
}`),P.code.add(g`vec3 intersectRayPlane(vec3 rayDir, vec3 rayOrigin, vec3 planeNormal, vec3 planePoint) {
float d = dot(planeNormal, planePoint);
float t = (d - dot(planeNormal, rayOrigin)) / dot(planeNormal, rayDir);
return rayOrigin + t * rayDir;
}`),P.code.add(g`
      float boundingRectDistanceToCamera() {
        vec3 center = vec3(boundingRect[0][0], boundingRect[0][1], boundingRect[0][2]);
        vec3 halfU = vec3(boundingRect[1][0], boundingRect[1][1], boundingRect[1][2]);
        vec3 halfV = vec3(boundingRect[2][0], boundingRect[2][1], boundingRect[2][2]);
        vec3 n = normalize(cross(halfU, halfV));

        vec3 viewDir = - vec3(view[0][2], view[1][2], view[2][2]);

        float viewAngle = dot(viewDir, n);
        float minViewAngle = ${g.float(.08715574274)};

        if (abs(viewAngle) < minViewAngle) {
          // view direction is (almost) parallel to plane -> clamp it to min angle
          float normalComponent = sign(viewAngle) * minViewAngle - viewAngle;
          viewDir = normalize(viewDir + normalComponent * n);
        }

        // intersect view direction with infinite plane that contains bounding rect
        vec3 planeProjected = intersectRayPlane(viewDir, cameraPosition, n, center);

        // clip to bounds by projecting to u and v line segments individually
        vec3 uProjected = projectPointToLineSegment(center, halfU, planeProjected);
        vec3 vProjected = projectPointToLineSegment(center, halfV, planeProjected);

        // use to calculate the closest point to camera on bounding rect
        vec3 closestPoint = uProjected + vProjected - center;

        return length(closestPoint - cameraPosition);
      }
    `)),P.code.add(g`
    vec2 scaledUV() {
      vec2 uv = uvMapSpace.xy ${b?" * rotate45":""};
      vec2 uvCellOrigin = uvMapSpace.zw ${b?" * rotate45":""};

      ${y.draped?"":g`
            float distanceToCamera = boundingRectDistanceToCamera();
            float worldToScreenRatio = worldToScreenPerDistanceRatio / distanceToCamera;
          `}

      // Logarithmically discretize ratio to avoid jittering
      float step = 0.1;
      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);

      vec2 uvOffset = mod(uvCellOrigin * discreteWorldToScreenRatio, ${g.float(y.patternSpacing)});
      return uvOffset + (uv * discreteWorldToScreenRatio);
    }
  `);const A=y.output===t.Depth;return A&&(x.include(l,y),e(x),o(x)),P.code.add(g`
    void main(void) {
      vuv = scaledUV();
      vpos = position;
      ${D?"depth = (view * vec4(vpos, 1.0)).z;":""}
      forwardNormalizedVertexColor();
      ${y.hasVertexColors?"vColor *= uColor;":y.vvColor?"vColor = uColor * interpolateVVColor(colorFeatureAttribute);":"vColor = uColor;"}
      gl_Position = ${A?g`transformPositionWithDepth(proj, view, vpos, nearFar, linearDepth);`:g`transformPosition(proj, view, vpos);`}
    }
  `),x.include(a,y),R.include(p),y.draped&&R.uniforms.add(new f("texelSize",((e,o)=>1/o.camera.pixelRatio))),y.output===t.Highlight&&x.include(n,y),D&&x.include(c,y),y.output!==t.Highlight&&(R.code.add(g`
      const float lineWidth = ${g.float(y.lineWidth)};
      const float spacing = ${g.float(y.patternSpacing)};
      const float spacingINV = ${g.float(1/y.patternSpacing)};

      float coverage(float p, float txlSize) {
        p = mod(p, spacing);

        float halfTxlSize = txlSize / 2.0;

        float start = p - halfTxlSize;
        float end = p + halfTxlSize;

        float coverage = (ceil(end * spacingINV) - floor(start * spacingINV)) * lineWidth;
        coverage -= min(lineWidth, mod(start, spacing));
        coverage -= max(lineWidth - mod(end, spacing), 0.0);

        return coverage / txlSize;
      }
    `),y.draped||R.code.add(g`const int maxSamples = 5;
float sampleAA(float p) {
vec2 dxdy = abs(vec2(dFdx(p), dFdy(p)));
float fwidth = dxdy.x + dxdy.y;
ivec2 samples = 1 + ivec2(clamp(dxdy, 0.0, float(maxSamples - 1)));
vec2 invSamples = 1.0 / vec2(samples);
float accumulator = 0.0;
for (int j = 0; j < maxSamples; j++) {
if(j >= samples.y) {
break;
}
for (int i = 0; i < maxSamples; i++) {
if(i >= samples.x) {
break;
}
vec2 step = vec2(i,j) * invSamples - 0.5;
accumulator += coverage(p + step.x * dxdy.x + step.y * dxdy.y, fwidth);
}
}
accumulator /= float(samples.x * samples.y);
return accumulator;
}`)),R.code.add(g`
    void main() {
      discardBySlice(vpos);
      ${D?"terrainDepthTest(gl_FragCoord, depth);":""}
      vec4 color = vColor;
      color = highlightSlice(color, vpos);

      ${y.output!==t.Highlight?g`color.a *= ${function(e){function o(o){return e.draped?g`coverage(vuv.${o}, texelSize)`:g`sampleAA(vuv.${o})`}switch(e.style){case w.ForwardDiagonal:case w.Horizontal:return o("y");case w.BackwardDiagonal:case w.Vertical:return o("x");case w.DiagonalCross:case w.Cross:return g`
        1.0 - (1.0 - ${o("x")}) * (1.0 - ${o("y")})
      `;default:return"0.0"}}(y)};`:""}

      ${y.output===t.ObjectAndLayerIdColor?g`color.a = 1.0;`:""}

      if (color.a < ${g.float(d)}) {
        discard;
      }

      ${y.output===t.Alpha?g`fragColor = vec4(color.a);`:""}

      ${y.output===t.Color?g`fragColor = color; ${y.transparencyPassType===C.Color?"fragColor = premultiplyAlpha(fragColor);":""}`:""}
      ${y.output===t.Highlight?g`outputHighlight();`:""}
      ${y.output===t.Depth?g`outputDepth(linearDepth);`:""};
    }
  `),x}},Symbol.toStringTag,{value:"Module"}));export{y as P,w as S};
