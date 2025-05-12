// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/terrain/Overlay ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),function(g,q,r,t,a,u,b){function h(k){const c=new u.ShaderBuilder,{vertex:d,fragment:v,attributes:e,varyings:l}=c;r.addProjViewLocalOrigin(d,k);const {isAttributeDriven:f,
usesHalfFloat:m}=k;e.add(b.VertexAttribute.POSITION,"vec3");e.add(b.VertexAttribute.UV0,"vec2");f&&(e.add(b.VertexAttribute.FEATUREATTRIBUTE,"float"),l.add("attributeValue","float"));m&&c.constants.add("compressionFactor","float",.25);l.add("unitCirclePos","vec2");d.uniforms.add(new t.FloatPassUniform("radius",({resolutionForScale:n,searchRadius:w},{camera:p,screenToWorldRatio:x})=>2*w*(0===n?1:n/x)*p.pixelRatio/p.fullViewport[2]/q.OverlayStretch));d.code.add(a.glsl`
    void main() {
      unitCirclePos = uv0;

      vec4 posProj = proj * (view * vec4(${b.VertexAttribute.POSITION}, 1.0));
      vec4 quadOffset = vec4(unitCirclePos * radius, 0.0, 0.0);

      ${f?a.glsl`attributeValue = ${b.VertexAttribute.FEATUREATTRIBUTE};`:""}
      gl_Position = posProj + quadOffset;
    }
  `);v.code.add(a.glsl`
    void main() {
      float radiusRatioSquared = dot(unitCirclePos, unitCirclePos);
      if (radiusRatioSquared > 1.0) {
        discard;
      }

      float oneMinusRadiusRatioSquared = 1.0 - radiusRatioSquared;
      float density = oneMinusRadiusRatioSquared * oneMinusRadiusRatioSquared ${f?a.glsl` * attributeValue`:""} ${m?a.glsl` * compressionFactor`:""};
      fragColor = vec4(density);
    }
  `);return c}const y=Object.freeze(Object.defineProperty({__proto__:null,build:h},Symbol.toStringTag,{value:"Module"}));g.HeatmapDensity=y;g.build=h});