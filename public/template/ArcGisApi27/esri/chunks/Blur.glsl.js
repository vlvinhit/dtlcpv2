// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ../views/3d/webgl-engine/lib/VertexAttribute ../views/3d/webgl-engine/shaders/SMAAPassParameters".split(" "),function(c,d,m,e,n,f){function g(){const h=new m.ShaderBuilder,{attributes:p,varyings:k,vertex:l,fragment:a}=h;p.add(n.VertexAttribute.POSITION,"vec2");k.add("uv","vec2");k.add("offsets[2]","vec4");
f.addResolutionUniform(l);l.code.add(d.glsl`void main() {
uv = position * 0.5 + vec2(0.5);
gl_Position = vec4(position, 0, 1);
offsets[0] = uv.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 );
offsets[1] = uv.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 );
}`);a.uniforms.add(new e.Texture2DPassUniform("blendWeightsTexture",b=>b.blend.colorTexture),new e.Texture2DPassUniform("colorTexture",b=>b.colorTexture));f.addResolutionUniform(a);a.code.add(d.glsl`void main() {
vec4 a;
a.rb = texture(blendWeightsTexture, uv).rb;
a.g = texture(blendWeightsTexture, offsets[1].zw).g;
a.a = texture(blendWeightsTexture, offsets[1].xy).a;
if ( dot(a, vec4(1.0)) < 1e-5 ) {
fragColor = texture( colorTexture, uv, 0.0 );
} else {
vec2 offset;
offset.x = a.a > a.b ? a.a : -a.b;
offset.y = a.g > a.r ? -a.g : a.r;
if ( abs( offset.x ) > abs( offset.y )) {
offset.y = 0.0;
} else {
offset.x = 0.0;
}
vec4 C = texture( colorTexture, uv, 0.0 );
vec4 Cop = texture( colorTexture, uv + sign( offset ) * resolution.xy, 0.0 );
float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );
fragColor = mix(C, Cop, s);
}
}`);return h}const q=Object.freeze(Object.defineProperty({__proto__:null,build:g},Symbol.toStringTag,{value:"Module"}));c.Blur=q;c.build=g});