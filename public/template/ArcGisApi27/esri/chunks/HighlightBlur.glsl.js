// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ./_rollupPluginBabelHelpers ./vec2f64 ../views/3d/webgl-engine/core/shaderModules/Float2DrawUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DDrawUniform ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),function(e,g,m,n,f,p,q,r,h){function k(){const a=new p.ShaderBuilder,{vertex:c,fragment:b}=
a,t=c.code,u=b.code;a.attributes.add(h.VertexAttribute.POSITION,"vec2");a.attributes.add(h.VertexAttribute.UV0,"vec2");a.varyings.add("blurCoordinate","vec3");c.uniforms.add(new r.Texture2DPassUniform("coverageTex",d=>d.coverageTexture));b.uniforms.add(new n.Float2DrawUniform("blurSize",d=>d.blurSize));t.add(f.glsl`void main() {
gl_Position = vec4(position, 0.0, 1.0);
vec4 cov = texture(coverageTex, uv0);
if (cov.r == 0.0) {
gl_Position = vec4(0.0);
}
blurCoordinate = vec3(gl_Position.xy * 0.5 + vec2(0.5), max(cov.g, cov.b));
}`);b.uniforms.add(new q.Texture2DDrawUniform("tex",d=>d.blurInputTexture));u.add(f.glsl`void main() {
vec2 uv = blurCoordinate.xy;
vec4 center = texture(tex, uv);
if (blurCoordinate.z == 1.0) {
fragColor = center;
} else {
vec4 sum = vec4(0.0);
sum += center * 0.204164;
sum += texture(tex, uv + blurSize * 1.407333) * 0.304005;
sum += texture(tex, uv - blurSize * 1.407333) * 0.304005;
sum += texture(tex, uv + blurSize * 3.294215) * 0.093913;
sum += texture(tex, uv - blurSize * 3.294215) * 0.093913;
fragColor = sum;
}
}`);return a}let l=function(a){function c(){var b=a.apply(this,arguments)||this;b.blurSize=m.create();return b}g._inherits(c,a);return g._createClass(c)}(f.NoParameters);const v=Object.freeze(Object.defineProperty({__proto__:null,HighlightBlurDrawParameters:l,build:k},Symbol.toStringTag,{value:"Module"}));e.HighlightBlur=v;e.HighlightBlurDrawParameters=l;e.build=k});