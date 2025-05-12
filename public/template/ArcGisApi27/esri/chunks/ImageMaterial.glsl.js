// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ../views/3d/webgl-engine/lib/TransparencyPassType ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(f,m,n,p,q,g,r,t,u,c,v,w,x,h){function k(a){const b=new v.ShaderBuilder,{vertex:l,fragment:d}=b;t.addProjViewLocalOrigin(l,a);b.include(p.Transform,a);b.attributes.add(h.VertexAttribute.POSITION,"vec3");b.attributes.add(h.VertexAttribute.UV0,"vec2");b.varyings.add("vpos","vec3");a.hasMultipassTerrain&&b.varyings.add("depth","float");l.code.add(c.glsl`
    void main(void) {
      vpos = position;
      ${a.hasMultipassTerrain?"depth \x3d (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `);b.include(n.SliceDraw,a);b.include(q.multipassTerrainTest,a);d.uniforms.add(new w.Texture2DPassUniform("tex",e=>e.texture),new u.FloatPassUniform("opacity",e=>e.opacity));b.varyings.add("vTexCoord","vec2");a.output===m.ShaderOutput.Alpha?d.code.add(c.glsl`
    void main() {
      discardBySlice(vpos);
      ${a.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}

      float alpha = texture(tex, vTexCoord).a * opacity;
      if (alpha  < ${c.glsl.float(g.defaultMaskAlphaCutoff)}) {
        discard;
      }

      fragColor = vec4(alpha);
    }
    `):(d.include(r.ColorConversion),d.code.add(c.glsl`
    void main() {
      discardBySlice(vpos);
      ${a.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
      fragColor = texture(tex, vTexCoord) * opacity;

      if (fragColor.a < ${c.glsl.float(g.defaultMaskAlphaCutoff)}) {
        discard;
      }

      fragColor = highlightSlice(fragColor, vpos);
      ${a.transparencyPassType===x.TransparencyPassType.Color?"fragColor \x3d premultiplyAlpha(fragColor);":""}
    }
    `));return b}const y=Object.freeze(Object.defineProperty({__proto__:null,build:k},Symbol.toStringTag,{value:"Module"}));f.ImageMaterial=y;f.build=k});