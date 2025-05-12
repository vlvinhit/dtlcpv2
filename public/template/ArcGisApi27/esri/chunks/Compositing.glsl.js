// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ./_rollupPluginBabelHelpers ../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform".split(" "),function(d,e,k,l,f,m,n){function g(c){const a=new m.ShaderBuilder;a.include(k.ScreenSpacePass);a.fragment.uniforms.add(new n.Texture2DPassUniform("tex",
b=>b.texture));c.hasOpacityFactor&&a.fragment.uniforms.add(new l.FloatPassUniform("opacity",b=>b.opacity));a.fragment.code.add(f.glsl`
    void main() {
      fragColor = texture(tex, uv) ${c.hasOpacityFactor?"* opacity":""};
    }`);return a}let h=function(c){function a(){var b=c.apply(this,arguments)||this;b.opacity=1;return b}e._inherits(a,c);return e._createClass(a)}(f.NoParameters);const p=Object.freeze(Object.defineProperty({__proto__:null,CompositingPassParameters:h,build:g},Symbol.toStringTag,{value:"Module"}));d.Compositing=p;d.CompositingPassParameters=h;d.build=g});