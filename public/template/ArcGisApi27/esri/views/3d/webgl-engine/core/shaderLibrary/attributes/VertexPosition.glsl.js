// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../chunks/mat3f64 ../../../../../../chunks/mat4f64 ../../../../../../chunks/vec3f64 ./PositionAttribute.glsl ../util/DoublePrecision.glsl ../../shaderModules/Float3DrawUniform ../../shaderModules/Float3PassUniform ../../shaderModules/interfaces ../../shaderModules/Matrix3DrawUniform ../../shaderModules/Matrix3PassUniform ../../shaderModules/Matrix4PassUniform".split(" "),function(f,g,l,n,h,p,q,m,k,d,r,t,u){let v=function(c){function e(){var a=
c.apply(this,arguments)||this;a.transformWorldFromViewTH=h.create();a.transformWorldFromViewTL=h.create();a.transformViewFromCameraRelativeRS=l.create();a.transformProjFromView=n.create();return a}g._inherits(e,c);return g._createClass(e)}(d.NoParameters),w=function(c){function e(){var a=c.apply(this,arguments)||this;a.transformWorldFromModelRS=l.create();a.transformWorldFromModelTH=h.create();a.transformWorldFromModelTL=h.create();return a}g._inherits(e,c);return g._createClass(e)}(d.NoParameters);
f.VertexPosition=function(c,e){c.include(p.PositionAttribute);const a=c.vertex;a.include(q.DoublePrecision,e);c.varyings.add("vPositionWorldCameraRelative","vec3");c.varyings.add("vPosition_view","vec3");a.uniforms.add(new k.Float3PassUniform("transformWorldFromViewTH",b=>b.transformWorldFromViewTH),new k.Float3PassUniform("transformWorldFromViewTL",b=>b.transformWorldFromViewTL),new t.Matrix3PassUniform("transformViewFromCameraRelativeRS",b=>b.transformViewFromCameraRelativeRS),new u.Matrix4PassUniform("transformProjFromView",
b=>b.transformProjFromView),new r.Matrix3DrawUniform("transformWorldFromModelRS",b=>b.transformWorldFromModelRS),new m.Float3DrawUniform("transformWorldFromModelTH",b=>b.transformWorldFromModelTH),new m.Float3DrawUniform("transformWorldFromModelTL",b=>b.transformWorldFromModelTL));a.code.add(d.glsl`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`);a.code.add(d.glsl`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${e.spherical?d.glsl`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:d.glsl`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `);c.fragment.uniforms.add(new k.Float3PassUniform("transformWorldFromViewTL",b=>b.transformWorldFromViewTL));a.code.add(d.glsl`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`);c.fragment.code.add(d.glsl`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)};f.VertexPositionDrawParameters=w;f.VertexPositionPassParameters=v;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});