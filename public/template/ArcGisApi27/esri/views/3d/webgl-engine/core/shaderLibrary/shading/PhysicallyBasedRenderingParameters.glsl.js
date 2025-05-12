// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/_rollupPluginBabelHelpers ../attributes/VertexTextureCoordinates.glsl ../../shaderModules/Float3DrawUniform ../../shaderModules/Float3PassUniform ../../shaderModules/interfaces ../../shaderModules/Texture2DDrawUniform ../../shaderModules/Texture2DPassUniform ../../shaderTechnique/BindType ../../../lib/GLTextureMaterial".split(" "),function(f,m,q,n,p,d,h,k,g,l){f.PBRMode=void 0;(function(a){a[a.Disabled=0]="Disabled";a[a.Normal=1]="Normal";a[a.Schematic=2]=
"Schematic";a[a.Water=3]="Water";a[a.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh";a[a.Terrain=5]="Terrain";a[a.TerrainWithWater=6]="TerrainWithWater";a[a.COUNT=7]="COUNT"})(f.PBRMode||(f.PBRMode={}));l=function(a){function b(){return a.apply(this,arguments)||this}m._inherits(b,a);return m._createClass(b)}(l.GLTextureMaterialBindParameters);f.PBRBindParameters=l;f.PhysicallyBasedRenderingParameters=function(a,b){const e=a.fragment,r=b.hasMetallicRoughnessTexture||b.hasEmissionTexture||b.hasOcclusionTexture;
b.pbrMode===f.PBRMode.Normal&&r&&a.include(q.VertexTextureCoordinates,b);b.pbrMode===f.PBRMode.Schematic?e.code.add(d.glsl`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`):b.pbrMode===f.PBRMode.Disabled?e.code.add(d.glsl`float getBakedOcclusion() { return 1.0; }`):b.pbrMode===f.PBRMode.Normal&&(e.code.add(d.glsl`vec3 mrr;
vec3 emission;
float occlusion;`),a=b.pbrTextureBindType,b.hasMetallicRoughnessTexture&&(e.uniforms.add(a===g.BindType.Pass?new k.Texture2DPassUniform("texMetallicRoughness",c=>c.textureMetallicRoughness):new h.Texture2DDrawUniform("texMetallicRoughness",c=>c.textureMetallicRoughness)),e.code.add(d.glsl`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),b.hasEmissionTexture&&(e.uniforms.add(a===g.BindType.Pass?new k.Texture2DPassUniform("texEmission",c=>c.textureEmissive):new h.Texture2DDrawUniform("texEmission",c=>c.textureEmissive)),e.code.add(d.glsl`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),b.hasOcclusionTexture?(e.uniforms.add(a===g.BindType.Pass?new k.Texture2DPassUniform("texOcclusion",c=>c.textureOcclusion):new h.Texture2DDrawUniform("texOcclusion",c=>c.textureOcclusion)),e.code.add(d.glsl`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):e.code.add(d.glsl`float getBakedOcclusion() { return 1.0; }`),a===g.BindType.Pass?e.uniforms.add(new p.Float3PassUniform("emissionFactor",c=>c.emissiveFactor),new p.Float3PassUniform("mrrFactors",c=>c.mrrFactors)):e.uniforms.add(new n.Float3DrawUniform("emissionFactor",c=>c.emissiveFactor),new n.Float3DrawUniform("mrrFactors",c=>c.mrrFactors)),e.code.add(d.glsl`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${b.hasMetallicRoughnessTexture?d.glsl`applyMetallnessAndRoughness(${b.hasMetallicRoughnessTextureTransform?d.glsl`metallicRoughnessUV`:"vuv0"});`:""}

      ${b.hasEmissionTexture?d.glsl`applyEmission(${b.hasEmissiveTextureTransform?d.glsl`emissiveUV`:"vuv0"});`:""}

      ${b.hasOcclusionTexture?d.glsl`applyOcclusion(${b.hasOcclusionTextureTransform?d.glsl`occlusionUV`:"vuv0"});`:""}
    }
  `))};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});