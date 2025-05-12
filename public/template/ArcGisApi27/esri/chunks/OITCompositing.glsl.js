// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ./_rollupPluginBabelHelpers ../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform".split(" "),function(c,e,k,f,l,d){function g(){const b=new l.ShaderBuilder;b.include(k.ScreenSpacePass);b.fragment.uniforms.add(new d.Texture2DPassUniform("colorTexture",a=>a.colorTexture),new d.Texture2DPassUniform("alphaTexture",
a=>a.alphaTexture),new d.Texture2DPassUniform("frontFaceTexture",a=>a.frontFaceTexture));b.fragment.code.add(f.glsl`void main() {
vec4 srcColor = texture(colorTexture, uv);
if(srcColor.a <= 1e-5){
discard;
}
float srcAlpha = texture(alphaTexture, uv).r;
vec4 frontFace = texture(frontFaceTexture, uv);
fragColor = vec4(mix(srcColor.rgb/srcColor.a, frontFace.rgb, frontFace.a), 1.0 - srcAlpha);
}`);return b}let h=function(b){function a(){return b.apply(this,arguments)||this}e._inherits(a,b);return e._createClass(a)}(f.NoParameters);const m=Object.freeze(Object.defineProperty({__proto__:null,OITCompositingPassParameters:h,build:g},Symbol.toStringTag,{value:"Module"}));c.OITCompositing=m;c.OITCompositingPassParameters=h;c.build=g});