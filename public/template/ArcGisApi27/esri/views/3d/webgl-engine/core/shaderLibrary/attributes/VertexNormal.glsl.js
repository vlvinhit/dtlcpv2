// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../core/compilerUtils ../../../../../../chunks/mat3f64 ../../../../../../chunks/vec4f64 ./NormalAttribute.glsl ./VertexPosition.glsl ../../shaderModules/interfaces ../../shaderModules/Matrix3DrawUniform ../../shaderModules/Matrix3PassUniform".split(" "),function(f,g,l,k,m,d,h,e,n,p){let q=function(a){function b(){var c=a.apply(this,arguments)||this;c.transformNormalViewFromGlobal=k.create();return c}g._inherits(b,a);
return g._createClass(b)}(h.VertexPositionPassParameters),r=function(a){function b(){var c=a.apply(this,arguments)||this;c.transformNormalGlobalFromModel=k.create();c.toMapSpace=m.create();return c}g._inherits(b,a);return g._createClass(b)}(h.VertexPositionDrawParameters);f.VertexNormal=function(a,b){switch(b.normalType){case d.NormalType.Attribute:case d.NormalType.Compressed:a.include(d.NormalAttribute,b);a.varyings.add("vNormalWorld","vec3");a.varyings.add("vNormalView","vec3");a.vertex.uniforms.add(new n.Matrix3DrawUniform("transformNormalGlobalFromModel",
c=>c.transformNormalGlobalFromModel),new p.Matrix3PassUniform("transformNormalViewFromGlobal",c=>c.transformNormalViewFromGlobal));a.vertex.code.add(e.glsl`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case d.NormalType.Ground:a.include(h.VertexPosition,b);a.varyings.add("vNormalWorld","vec3");a.vertex.code.add(e.glsl`
        void forwardNormal() {
          vNormalWorld = ${b.spherical?e.glsl`normalize(vPositionWorldCameraRelative);`:e.glsl`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case d.NormalType.ScreenDerivative:a.vertex.code.add(e.glsl`void forwardNormal() {}`);break;default:l.neverReached(b.normalType);case d.NormalType.COUNT:}};f.VertexNormalDrawParameters=r;f.VertexNormalPassParameters=q;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});