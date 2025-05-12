// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../chunks/vec2f64 ../../shaderModules/Float2PassUniform ../../shaderModules/FloatPassUniform ../../shaderModules/interfaces ../../../lib/VertexAttribute".split(" "),function(c,e,h,k,l,f,g){let m=function(a){function b(){var d=a.apply(this,arguments)||this;d.scale=1;d.offset=h.ZEROS;return d}e._inherits(b,a);return e._createClass(b)}(f.NoParameters);c.TileComposite=function(a){a.attributes.add(g.VertexAttribute.POSITION,
"vec2");a.attributes.add(g.VertexAttribute.UV0,"vec2");a.vertex.uniforms.add(new l.FloatPassUniform("scale",b=>b.scale));a.vertex.uniforms.add(new k.Float2PassUniform("offset",b=>b.offset));a.varyings.add("uv","vec2");a.varyings.add("vuv","vec2");a.vertex.code.add(f.glsl`void main(void) {
gl_Position = vec4(position, 0.0, 1.0);
uv = uv0 * scale + offset;
vuv = uv0;
}`)};c.TileCompositePassParameters=m;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});