// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/_rollupPluginBabelHelpers ../../../../terrain/interfaces ../../../../terrain/Overlay ../shading/ReadShadowMap.glsl ./BackgroundGrid.glsl ./Overlay.glsl ./TileBlendInput ../../shaderModules/FloatPassUniform ../../shaderModules/interfaces ../../shaderModules/Texture2DPassUniform ../../shaderModules/Uniform".split(" "),function(g,e,t,u,m,v,w,q,x,f,y,h){m=function(a){function b(){var c=a.apply(this,arguments)||this;c.overlayOpacity=1;c.overlaySource=u.OverlaySource.None;
return c}e._inherits(b,a);return e._createClass(b)}(m.ReadShadowMapPassParameters);let z=function(a){function b(c){return a.call(this,c,"float")||this}e._inherits(b,a);return e._createClass(b)}(h.Uniform),k=function(a){function b(c){return a.call(this,c,"vec3")||this}e._inherits(b,a);return e._createClass(b)}(h.Uniform),l=function(a){function b(c){return a.call(this,c,"vec4")||this}e._inherits(b,a);return e._createClass(b)}(h.Uniform),n=function(a){function b(c){return a.call(this,c,"sampler2D")||
this}e._inherits(b,a);return e._createClass(b)}(h.Uniform);g.Float3Uniform=k;g.OverlayTerrain=function(a,b){a.vertex.uniforms.add(new l("overlayTexOffset"),new l("overlayTexScale"));a.fragment.uniforms.add(new x.FloatPassUniform("overlayOpacity",c=>c.overlayOpacity),new y.Texture2DPassUniform("ovColorTex",(c,d)=>0===d.overlays.length?null:d.overlays[t.OverlayIndex.INNER].getColorTexture(c.overlaySource)));w.overlay(a,b)};g.OverlayTerrainPassParameters=m;g.TerrainTexture=function(a,b){const {vertex:c,
fragment:d,varyings:r}=a;r.add("vtc","vec2");c.uniforms.add(new l("texOffsetAndScale"));d.uniforms.add(new n("tex"));d.uniforms.add(new k("textureOpacities"));if(a=b.textureFadingEnabled&&!b.renderOccluded)c.uniforms.add(new l("nextTexOffsetAndScale")),r.add("nvtc","vec2"),d.uniforms.add(new n("texNext")),d.uniforms.add(new k("nextTexOpacities")),d.uniforms.add(new z("fadeFactor"));const p=b.tileBlendInput===q.TileBlendInput.ColorComposite;(b=b.tileBlendInput===q.TileBlendInput.GridComposite)&&d.include(v.BackgroundGrid);
p&&d.uniforms.add(new k("backgroundColor"));c.code.add(f.glsl`
  void forwardTextureCoordinatesWithTransform(in vec2 uv) {
    vtc = uv * texOffsetAndScale.zw + texOffsetAndScale.xy;
    ${a?f.glsl`nvtc = uv * nextTexOffsetAndScale.zw + nextTexOffsetAndScale.xy;`:f.glsl``}
  }`);d.code.add(f.glsl`
    vec4 getColor(vec4 color, vec2 uv, vec3 opacities) {
      ${b||p?f.glsl`
              if (opacities.y <= 0.0) {
                return color * opacities.z * opacities.x;
              }
              vec4 bg = vec4(${p?f.glsl`backgroundColor`:f.glsl`gridColor(uv)`} * opacities.y, opacities.y);
              vec4 layer = color * opacities.z;
              return (bg * (1.0 - layer.a) + layer) * opacities.x;`:f.glsl`return color;`}
    }`);a?d.code.add(f.glsl`vec4 getTileColor() {
vec4 color = getColor(texture(tex, vtc), vtc, textureOpacities);
if (fadeFactor >= 1.0) {
return color;
}
vec4 nextColor = getColor(texture(texNext, nvtc), nvtc, nextTexOpacities);
return mix(nextColor, color, fadeFactor);
}`):d.code.add(f.glsl`vec4 getTileColor() {
return getColor(texture(tex, vtc), vtc, textureOpacities);
}`)};g.Texture2DUniform=n;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});