/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{a,e}from"./View.glsl.js";import{F as o}from"./FloatPassUniform.js";import{g as t}from"./interfaces2.js";import{S as i}from"./ShaderBuilder.js";import{V as r}from"./VertexAttribute.js";const s=Object.freeze(Object.defineProperty({__proto__:null,build:function(s){const d=new i,{vertex:u,fragment:n,attributes:l,varyings:c}=d;a(u,s);const{isAttributeDriven:f,usesHalfFloat:m}=s;return l.add(r.POSITION,"vec3"),l.add(r.UV0,"vec2"),f&&(l.add(r.FEATUREATTRIBUTE,"float"),c.add("attributeValue","float")),m&&d.constants.add("compressionFactor","float",.25),c.add("unitCirclePos","vec2"),u.uniforms.add(new o("radius",(({resolutionForScale:a,searchRadius:o},{camera:t,screenToWorldRatio:i})=>2*o*(0===a?1:a/i)*t.pixelRatio/t.fullViewport[2]/e))),u.code.add(t`
    void main() {
      unitCirclePos = uv0;

      vec4 posProj = proj * (view * vec4(${r.POSITION}, 1.0));
      vec4 quadOffset = vec4(unitCirclePos * radius, 0.0, 0.0);

      ${f?t`attributeValue = ${r.FEATUREATTRIBUTE};`:""}
      gl_Position = posProj + quadOffset;
    }
  `),n.code.add(t`
    void main() {
      float radiusRatioSquared = dot(unitCirclePos, unitCirclePos);
      if (radiusRatioSquared > 1.0) {
        discard;
      }

      float oneMinusRadiusRatioSquared = 1.0 - radiusRatioSquared;
      float density = oneMinusRadiusRatioSquared * oneMinusRadiusRatioSquared ${f?t` * attributeValue`:""} ${m?t` * compressionFactor`:""};
      fragColor = vec4(density);
    }
  `),d}},Symbol.toStringTag,{value:"Module"}));export{s as H};
