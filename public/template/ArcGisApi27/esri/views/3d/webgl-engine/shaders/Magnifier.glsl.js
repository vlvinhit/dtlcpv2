// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/screenUtils ../../../../chunks/vec4 ../../../../chunks/vec4f64 ../core/shaderModules/BooleanPassUniform ../core/shaderModules/Float4PassUniform ../core/shaderModules/interfaces ../core/shaderModules/ShaderBuilder ../core/shaderModules/Texture2DPassUniform ../lib/VertexAttribute".split(" "),function(e,f,g,q,r,l,t,h,u,k,v){let m=f._createClass(function(){}),w=function(b){function a(){var c=b.apply(this,arguments)||this;c.textures=
new m;return c}f._inherits(a,b);return f._createClass(a)}(h.NoParameters);const n=g.createScreenPointArray(),x=g.createRenderScreenPointArray(),y=r.create();e.MagnifierPassParameters=w;e.TextureResources=m;e.build=function(){const b=new u.ShaderBuilder;b.attributes.add(v.VertexAttribute.POSITION,"vec2");b.vertex.uniforms.add(new t.Float4PassUniform("drawPosition",(a,c)=>{var d=c.camera.pixelRatio;const z=a.magnifier.offset.x*d,A=a.magnifier.offset.y*d;g.screenPointObjectToArray(a.magnifier.position,
n);const p=c.camera.screenToRender(n,x);a=Math.ceil(d*a.magnifier.size);d=c.camera.fullWidth;c=c.camera.fullHeight;return q.set(y,-1+(p[0]+z)/d*2,-1+(p[1]-A)/c*2,a/d*2,a/c*2)}));b.varyings.add("vUV","vec2");b.vertex.code.add(h.glsl`void main(void) {
vUV = position;
gl_Position = vec4(drawPosition.xy + vec2(position - 0.5) * drawPosition.zw, 0.0, 1.0);
}`);b.fragment.uniforms.add(new k.Texture2DPassUniform("textureInput",a=>a.textures.input));b.fragment.uniforms.add(new k.Texture2DPassUniform("textureMask",a=>a.textures.mask));b.fragment.uniforms.add(new k.Texture2DPassUniform("textureOverlay",a=>a.textures.overlay));b.fragment.uniforms.add(new l.BooleanPassUniform("maskEnabled",a=>a.magnifier.maskEnabled));b.fragment.uniforms.add(new l.BooleanPassUniform("overlayEnabled",a=>a.magnifier.overlayEnabled));b.fragment.code.add(h.glsl`const float barrelFactor = 1.1;
vec2 barrel(vec2 uv) {
vec2 uvn = uv * 2.0 - 1.0;
if (uvn.x == 0.0 && uvn.y == 0.0) {
return vec2(0.5, 0.5);
}
float theta = atan(uvn.y, uvn.x);
float r = pow(length(uvn), barrelFactor);
return r * vec2(cos(theta), sin(theta)) * 0.5 + 0.5;
}
void main() {
float mask = maskEnabled ? texture(textureMask, vUV).a : 1.0;
vec4 inputColor = texture(textureInput, barrel(vUV)) * mask;
vec4 overlayColor = overlayEnabled ? texture(textureOverlay, vUV) : vec4(0);
fragColor = overlayColor + (1.0 - overlayColor.a) * inputColor;
}`);return b};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});