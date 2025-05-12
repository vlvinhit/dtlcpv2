// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ./_rollupPluginBabelHelpers ./vec4f64 ../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform".split(" "),function(c,d,k,l,m,e,n,p){function f(){const a=new n.ShaderBuilder;a.include(l.ScreenSpacePass);a.fragment.uniforms.add(new p.Texture2DPassUniform("tex",
b=>b.texture),new m.Float4PassUniform("uColor",b=>b.color));a.fragment.code.add(e.glsl`void main() {
vec4 texColor = texture(tex, uv);
fragColor = texColor * uColor;
}`);return a}let h=function(a){function b(){var g=a.apply(this,arguments)||this;g.color=k.fromValues(1,1,1,1);return g}d._inherits(b,a);return d._createClass(b)}(e.NoParameters);const q=Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:h,build:f},Symbol.toStringTag,{value:"Module"}));c.TextureOnly=q;c.TextureOnlyPassParameters=h;c.build=f});