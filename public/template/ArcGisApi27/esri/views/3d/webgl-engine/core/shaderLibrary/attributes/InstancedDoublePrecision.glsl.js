// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../chunks/tslib.es6 ../../../../../../chunks/vec3 ../../../../../../chunks/vec3f64 ../ShaderOutput ../util/DoublePrecision.glsl ../util/View.glsl ../../shaderModules/Float3DrawUniform ../../shaderModules/interfaces ../../shaderTechnique/ShaderTechniqueConfiguration ../../../lib/VertexAttribute ../../../../../webgl/doublePrecisionUtils".split(" "),function(h,k,r,l,t,u,v,w,m,d,n,e,p){let q=function(a){function b(){var f=
a.apply(this,arguments)||this;f.instancedDoublePrecision=!1;return f}k._inherits(b,a);return k._createClass(b)}(n.ShaderTechniqueConfiguration);r.__decorate([n.parameter()],q.prototype,"instancedDoublePrecision",void 0);const g=t.create();h.InstancedDoubleConfiguration=q;h.InstancedDoublePrecision=function(a,b){b.instanced&&b.instancedDoublePrecision&&(a.attributes.add(e.VertexAttribute.MODELORIGINHI,"vec3"),a.attributes.add(e.VertexAttribute.MODELORIGINLO,"vec3"),a.attributes.add(e.VertexAttribute.MODEL,
"mat3"),a.attributes.add(e.VertexAttribute.MODELNORMAL,"mat3"));a=a.vertex;b.instancedDoublePrecision&&(a.include(v.DoublePrecision,b),a.uniforms.add(new m.Float3DrawUniform("viewOriginHi",(f,c)=>p.encodeDoubleHi(l.set(g,c.camera.viewInverseTransposeMatrix[3],c.camera.viewInverseTransposeMatrix[7],c.camera.viewInverseTransposeMatrix[11]),g)),new m.Float3DrawUniform("viewOriginLo",(f,c)=>p.encodeDoubleLo(l.set(g,c.camera.viewInverseTransposeMatrix[3],c.camera.viewInverseTransposeMatrix[7],c.camera.viewInverseTransposeMatrix[11]),
g))));a.code.add(d.glsl`
    vec3 calculateVPos() {
      ${b.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `);a.code.add(d.glsl`
    vec3 subtractOrigin(vec3 _pos) {
      ${b.instancedDoublePrecision?d.glsl`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `);a.code.add(d.glsl`
    vec3 dpNormal(vec4 _normal) {
      ${b.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `);b.output===u.ShaderOutput.Normal&&(w.addViewNormal(a),a.code.add(d.glsl`
    vec3 dpNormalView(vec4 _normal) {
      ${b.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `));b.hasVertexTangents&&a.code.add(d.glsl`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${b.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `)};Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});