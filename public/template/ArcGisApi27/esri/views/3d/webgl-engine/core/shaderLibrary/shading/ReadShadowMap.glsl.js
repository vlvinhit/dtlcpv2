// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../chunks/mat4f64 ../../../../../../chunks/vec3f64 ../util/RgbaFloatEncoding.glsl ../../shaderModules/Float4PassUniform ../../shaderModules/IntegerPassUniform ../../shaderModules/interfaces ../../shaderModules/Matrix4sDrawUniform ../../shaderModules/Matrix4sPassUniform ../../shaderModules/Texture2DPassUniform".split(" "),function(e,d,m,h,n,p,q,f,r,t,u){function k(a){a=a.fragment;a.include(n.RgbaFloatEncoding);a.uniforms.add(new u.Texture2DPassUniform("shadowMapTex",
(b,c)=>c.shadowMap.depthTexture),new q.IntegerPassUniform("numCascades",(b,c)=>c.shadowMap.numCascades),new p.Float4PassUniform("cascadeDistances",(b,c)=>c.shadowMap.cascadeDistances));a.code.add(f.glsl`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + (numCascades == 1 ? 1.0 : 0.5) * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float texSize, sampler2D _depthTex) {
float halfPixelSize = 0.5 / texSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, float(textureSize(shadowMapTex, 0).x), shadowMapTex);
}`)}let v=function(a){function b(){return a.apply(this,arguments)||this}d._inherits(b,a);return d._createClass(b)}(function(a){function b(){var c=a.apply(this,arguments)||this;c.origin=h.create();return c}d._inherits(b,a);return d._createClass(b)}(f.NoParameters)),l=function(a){function b(){var c=a.apply(this,arguments)||this;c.modelTransformation=m.IDENTITY;return c}d._inherits(b,a);return d._createClass(b)}(f.NoParameters),w=function(a){function b(){var c=a.apply(this,arguments)||this;c.origin=
h.create();return c}d._inherits(b,a);return d._createClass(b)}(l);e.ReadShadowMapDraw=function(a,b){b.receiveShadows&&(a.fragment.uniforms.add(new r.Matrix4sDrawUniform("shadowMapMatrix",(c,g)=>g.shadowMap.getShadowMapMatrices(c.origin),4)),k(a))};e.ReadShadowMapDrawParameters=v;e.ReadShadowMapParameters=l;e.ReadShadowMapPass=function(a,b){b.receiveShadows&&(a.fragment.uniforms.add(new t.Matrix4sPassUniform("shadowMapMatrix",(c,g)=>g.shadowMap.getShadowMapMatrices(c.origin),4)),k(a))};e.ReadShadowMapPassParameters=
w;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});