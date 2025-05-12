// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ./_rollupPluginBabelHelpers ./mat4 ./mat4f64 ./vec3f64 ../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/Gamma.glsl ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/Float3PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(g,l,t,h,u,m,v,w,x,n,k,e,p,y,z,A){function q(){const c=new y.ShaderBuilder;c.attributes.add(A.VertexAttribute.POSITION,"vec2");c.include(m.TextureCoordinateAttribute,{textureCoordinateType:m.TextureCoordinateAttributeType.Default});c.varyings.add("worldRay","vec3");c.varyings.add("eyeDir","vec3");const {vertex:f,fragment:b}=c;f.uniforms.add(new p.Matrix4PassUniform("inverseProjectionMatrix",(a,d)=>d.camera.inverseProjectionMatrix),new p.Matrix4PassUniform("inverseViewMatrix",(a,d)=>t.invertOrIdentity(B,
d.camera.viewMatrix)));f.code.add(e.glsl`void main(void) {
vec3 posViewNear = (inverseProjectionMatrix * vec4(position, -1, 1)).xyz;
eyeDir = posViewNear;
worldRay = (inverseViewMatrix * vec4(posViewNear, 0)).xyz;
forwardTextureCoordinates();
gl_Position = vec4(position, 1, 1);
}`);b.uniforms.add(new k.FloatPassUniform("atmosphereC",a=>a.atmosphereC),new n.Float3PassUniform("cameraPosition",(a,d)=>d.camera.eye),new x.Float2PassUniform("nearFar",(a,d)=>d.camera.nearFar),new z.Texture2DPassUniform("depthTexture",a=>a.depthTexture),new k.FloatPassUniform("fogStrength",a=>a.fogStrength),new k.FloatPassUniform("fogAmount",a=>a.fogAmount),new n.Float3PassUniform("fogColor",a=>a.fogColor));c.include(w.Gamma);b.include(v.ReadLinearDepth);b.code.add(e.glsl`vec2 sphereIntersect(vec3 start, vec3 dir) {
float a = dot(dir, dir);
float b = 2.0 * dot(dir, start);
float d = (b * b) - 4.0 * a * atmosphereC;
if (d < 0.0) {
return vec2(1e5, -1e5);
}
return vec2((-b - sqrt(d)) / (2.0 * a), (-b + sqrt(d)) / (2.0 * a));
}`);b.code.add(e.glsl`vec4 applyFog(float dist, vec3 rayDir){
if(dist == -1.0){
vec2 rayAtmosphereIntersect = sphereIntersect(cameraPosition, rayDir);
dist = 0.055 * rayAtmosphereIntersect.y;
}
float fogAmount = fogAmount * (1.0 - exp(-dist * fogStrength));
return vec4(fogAmount * fogColor, fogAmount);
}`);b.code.add(e.glsl`vec3 tonemapACES(vec3 x) {
return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}
void main() {
vec3 rayDir = normalize(worldRay);
float terrainDepth = -1.0;
float depthSample = texture(depthTexture, vuv0).r;
float zNorm = 2.0 * depthSample - 1.0;
float linDepth = 2.0 * nearFar[0] * nearFar[1] / (nearFar[1] + nearFar[0] - zNorm * (nearFar[1] - nearFar[0]));
if(depthSample < 1.0 && depthSample > 0.0){
vec3 cameraSpaceRay = normalize(eyeDir);
cameraSpaceRay /= cameraSpaceRay.z;
cameraSpaceRay *= linDepth;
terrainDepth = max(0.0, length(cameraSpaceRay));
}
vec4 fog = applyFog(terrainDepth, rayDir);
fragColor = delinearizeGamma(vec4(tonemapACES(fog.rgb), fog.a));
}`);return c}let r=function(c){function f(){var b=c.apply(this,arguments)||this;b.fogColor=u.create();b.fogStrength=4E-6;b.atmosphereC=1;b.fogAmount=0;return b}l._inherits(f,c);return l._createClass(f)}(e.NoParameters);const B=h.create();h=Object.freeze(Object.defineProperty({__proto__:null,FogPassParameters:r,build:q},Symbol.toStringTag,{value:"Module"}));g.Fog=h;g.FogPassParameters=r;g.build=q});