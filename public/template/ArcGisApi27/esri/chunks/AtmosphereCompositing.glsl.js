// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ./_rollupPluginBabelHelpers ./vec2 ./vec2f64 ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),function(g,k,f,l,h,c,r,m,t){function n(d){const b=new r.ShaderBuilder;b.attributes.add(t.VertexAttribute.POSITION,"vec2");b.varyings.add("uv0",
"vec2");b.varyings.add("uv1","vec2");b.vertex.uniforms.add(new h.Float2PassUniform("scale",a=>a.scale));b.vertex.code.add(c.glsl`void main(void) {
gl_Position = vec4(position, 0.0, 1.0);
uv0 = position * 0.5 + vec2(0.5);
uv1 = (position * 0.5 + vec2(0.5)) * scale;
}`);b.fragment.uniforms.add(new m.Texture2DPassUniform("tex",a=>a.texture),new m.Texture2DPassUniform("depthTexture",a=>a.depthTexture),new h.Float2PassUniform("scale",a=>a.scale),new h.Float2PassUniform("clampUV",a=>{if(a.texture){var e=f.set(p,a.texture.descriptor.width,a.texture.descriptor.height);e=f.multiply(e,e,a.scale);e=f.inverse(e,e);a=f.sub(e,a.scale,e)}else a=p;return a}));d=d.haze;b.fragment.code.add(c.glsl`
    void main() {
      ${d?c.glsl`vec4`:c.glsl`float`} depthSample = texture(depthTexture, uv0) ${d?"":c.glsl`.r`};
      if (depthSample ${d?c.glsl`== vec4(0)`:c.glsl`!= 1.0`} ) {
          fragColor = vec4(0);
          return;
      }
      fragColor = texture(tex, min(uv1, clampUV));
    }
    `);return b}let q=function(d){function b(){var a=d.apply(this,arguments)||this;a.scale=l.create();return a}k._inherits(b,d);return k._createClass(b)}(c.NoParameters);const p=l.create(),u=Object.freeze(Object.defineProperty({__proto__:null,AtmosphereCompositingPassParameters:q,build:n},Symbol.toStringTag,{value:"Module"}));g.AtmosphereCompositing=u;g.AtmosphereCompositingPassParameters=q;g.build=n});