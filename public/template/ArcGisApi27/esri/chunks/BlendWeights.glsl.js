// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ../views/3d/webgl-engine/lib/VertexAttribute ../views/3d/webgl-engine/shaders/SMAAPassParameters".split(" "),function(g,a,n,f,p,h){function k(){const l=new n.ShaderBuilder,{attributes:q,varyings:e,vertex:m,fragment:c}=l;q.add(p.VertexAttribute.POSITION,"vec2");e.add("uv","vec2");e.add("offsets[2]","vec4");
e.add("maxOffset","vec4");e.add("pixelCoord","vec2");h.addResolutionUniform(m);m.code.add(a.glsl`
      void main() {
        uv = position * 0.5 + vec2(0.5);
        gl_Position = vec4(position, 0, 1);

        pixelCoord = uv * resolution.zw;
        offsets[0] = uv.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 );
        offsets[1] = uv.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 );
        maxOffset = vec4( offsets[0].xz, offsets[1].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( ${a.glsl.int(b.maxSearchSteps)} );
      }
    `);c.uniforms.add(new f.Texture2DPassUniform("edgesTexture",d=>d.edges.colorTexture));c.uniforms.add(new f.Texture2DPassUniform("areaTexture",d=>d.areaTexture));c.uniforms.add(new f.Texture2DPassUniform("searchTexture",d=>d.searchTexture));h.addResolutionUniform(c);c.code.add(a.glsl`
      #define SMAA_AREATEX_PIXEL_SIZE ( 1.0 / vec2( 160.0, 560.0 ) )
      #define SMAA_AREATEX_SUBTEX_SIZE ( 1.0 / 7.0 )

      vec4 sampleLevelZeroOffset(sampler2D tex, vec2 coord, vec2 offset) {
        return texture(tex, coord + offset.x * resolution.xy, 0.0);
      }

      float searchLength(sampler2D searchTex, vec2 e, float bias, float scale) {
        e.r = bias + e.r * scale;
        return 255.0 * texture( searchTex, e, 0.0 ).r;
      }

      float searchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
        vec2 e = vec2( 0.0, 1.0 );
        for ( int i = 0; i < ${a.glsl.int(b.maxSearchSteps)}; i ++ ) {
          e = texture( edgesTex, texcoord, 0.0 ).rg;
          texcoord -= vec2( 2.0, 0.0 ) * resolution.xy;
          if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
        }
        texcoord.x += 0.25 * resolution.x;
        texcoord.x += resolution.x;
        texcoord.x += 2.0 * resolution.x;
        texcoord.x -= resolution.x * searchLength(searchTex, e, 0.0, 0.5);
        return texcoord.x;
      }

      float searchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
        vec2 e = vec2( 0.0, 1.0 );
        for ( int i = 0; i < ${a.glsl.int(b.maxSearchSteps)}; i ++ ) {
          e = texture( edgesTex, texcoord, 0.0 ).rg;
          texcoord += vec2( 2.0, 0.0 ) * resolution.xy;
          if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
        }
        texcoord.x -= 0.25 * resolution.x;
        texcoord.x -= resolution.x;
        texcoord.x -= 2.0 * resolution.x;
        texcoord.x += resolution.x * searchLength( searchTex, e, 0.5, 0.5 );
        return texcoord.x;
      }

      float searchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
        vec2 e = vec2( 1.0, 0.0 );
        for ( int i = 0; i < ${a.glsl.int(b.maxSearchSteps)}; i ++ ) {
          e = texture( edgesTex, texcoord, 0.0 ).rg;
          texcoord += vec2( 0.0, 2.0 ) * resolution.xy;
          if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
        }
        texcoord.y -= 0.25 * resolution.y;
        texcoord.y -= resolution.y;
        texcoord.y -= 2.0 * resolution.y;
        texcoord.y += resolution.y * searchLength( searchTex, e.gr, 0.0, 0.5 );
        return texcoord.y;
      }

      float searchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
        vec2 e = vec2( 1.0, 0.0 );
        for ( int i = 0; i < ${a.glsl.int(b.maxSearchSteps)}; i ++ ) {
          e = texture( edgesTex, texcoord, 0.0 ).rg;
          texcoord -= vec2( 0.0, 2.0 ) * resolution.xy;
          if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
        }
        texcoord.y += 0.25 * resolution.y;
        texcoord.y += resolution.y;
        texcoord.y += 2.0 * resolution.y;
        texcoord.y -= resolution.y * searchLength( searchTex, e.gr, 0.5, 0.5 );
        return texcoord.y;
      }

      vec2 getArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
        vec2 texcoord = float( ${a.glsl.int(b.maxDistanceAreaTex)} ) * round( 4.0 * vec2( e1, e2 ) ) + dist;
        texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );
        texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;
        return texture( areaTex, texcoord, 0.0 ).rg;
      }

      void main() {
        ivec4 subsampleIndices = ivec4(0.0);
        vec4 weights = vec4(0.0);
        vec2 e = texture( edgesTexture, uv ).rg;
        if ( e.g > 0.0 ) {
          vec2 d;
          vec2 coords;
          coords.x = searchXLeft( edgesTexture, searchTexture, offsets[0].xy, maxOffset.x );
          coords.y = offsets[1].y;
          d.x = coords.x;
          float e1 = texture( edgesTexture, coords, 0.0 ).r;
          coords.x = searchXRight( edgesTexture, searchTexture, offsets[0].zw, maxOffset.y );
          d.y = coords.x;
          d = d * resolution.z - pixelCoord.x;
          vec2 sqrt_d = sqrt( abs(d) );
          coords.y -= 1.0 * resolution.y;
          float e2 = sampleLevelZeroOffset( edgesTexture, coords, vec2( 1.0, 0.0 ) ).r;
          weights.rg = getArea( areaTexture, sqrt_d, e1, e2, float( subsampleIndices.y ) );
        }

        if ( e.r > 0.0 ) {
          vec2 d;
          vec2 coords;
          coords.y = searchYUp( edgesTexture, searchTexture, offsets[1].xy, maxOffset.z );
          coords.x = offsets[0].x;
          d.x = coords.y;
          float e1 = texture( edgesTexture, coords, 0.0 ).g;
          coords.y = searchYDown( edgesTexture, searchTexture, offsets[1].zw, maxOffset.w );
          d.y = coords.y;
          d = d * resolution.w - pixelCoord.y;
          vec2 sqrt_d = sqrt(abs(d));
          coords.y -= 1.0 * resolution.y;
          float e2 = sampleLevelZeroOffset( edgesTexture, coords, vec2(0.0, 1.0)).g;
          weights.ba = getArea( areaTexture, sqrt_d, e1, e2, float( subsampleIndices.x ) );

          // for some reason the following lines are necessary to prevent
          // texture lookup precision issues on some Intel integrated graphics chips
          vec4 dbg = (offsets[0] + offsets[1] + maxOffset + coords.xyyx);
          weights.r += 0.00000001 * dot(vec4(0, 1, 0, 1), dbg);
        }
        fragColor = weights;
      }
    `);return l}const b={maxSearchSteps:8,maxDistanceAreaTex:16},r=Object.freeze(Object.defineProperty({__proto__:null,build:k},Symbol.toStringTag,{value:"Module"}));g.BlendWeights=r;g.build=k});