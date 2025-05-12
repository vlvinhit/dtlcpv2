// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ../views/3d/webgl-engine/lib/VertexAttribute ../views/3d/webgl-engine/shaders/SMAAPassParameters".split(" "),function(b,a,k,l,m,n){function c(){const d=new k.ShaderBuilder,{attributes:p,varyings:e,vertex:f,fragment:g}=d;p.add(m.VertexAttribute.POSITION,"vec2");n.addResolutionUniform(f);e.add("uv","vec2");e.add("offsets[3]",
"vec4");f.code.add(a.glsl`void main() {
uv = position * 0.5 + vec2(0.5);
gl_Position = vec4(position, 0, 1);
offsets[0] = uv.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 );
offsets[1] = uv.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 );
offsets[2] = uv.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 );
}`);g.uniforms.add(new l.Texture2DPassUniform("colorTexture",q=>q.colorTexture));g.code.add(a.glsl`
    float absMax3(vec3 v) {
      vec3 t = abs(v);
      return max(max(t.r, t.g), t.b);
    }

    void main() {
      // Calculate color deltas:
      vec4 delta;
      vec3 C = texture(colorTexture, uv).rgb;

      vec3 Cleft = texture(colorTexture, offsets[0].xy).rgb;
      delta.x = absMax3(C - Cleft);

      vec3 Ctop = texture(colorTexture, offsets[0].zw).rgb;
      delta.y = absMax3(C - Ctop);

      vec2 edges = step(vec2(${a.glsl.float(h.threshold)}), delta.xy);

      // discard if there is no edge:
      if (dot(edges, vec2(1.0)) == 0.0) {
        discard;
      }

      // Calculate right and bottom deltas:
      vec3 Cright = texture(colorTexture, offsets[1].xy).rgb;
      delta.z = absMax3(C - Cright);

      vec3 Cbottom  = texture(colorTexture, offsets[1].zw).rgb;
      delta.w = absMax3(C - Cbottom);

      // Calculate the maximum delta in the direct neighborhood:
      float maxDelta = max(max(max(delta.x, delta.y), delta.z), delta.w);

      // Calculate left-left and top-top deltas:
      vec3 Cleftleft  = texture(colorTexture, offsets[2].xy).rgb;
      delta.z = absMax3(C - Cleftleft);

      vec3 Ctoptop = texture(colorTexture, offsets[2].zw).rgb;
      delta.w = absMax3(C - Ctoptop);

      // Calculate the final maximum delta:
      maxDelta = max(max(maxDelta, delta.z), delta.w);

      // Local contrast adaptation in action:
      edges.xy *= step(maxDelta, float(${a.glsl.float(h.localConstrastAdaption)}) * delta.xy);

      fragColor = vec4(edges, 0.0, 0.0);
    }
  `);return d}const h={threshold:.05,localConstrastAdaption:2},r=Object.freeze(Object.defineProperty({__proto__:null,build:c},Symbol.toStringTag,{value:"Module"}));b.EdgeDetect=r;b.build=c});