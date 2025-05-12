// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../util/RgbaFloatEncoding.glsl ../util/View.glsl ../../shaderModules/Float4PassUniform ../../shaderModules/FloatPassUniform ../../shaderModules/interfaces ../../shaderModules/Texture2DPassUniform ../../../materials/stippleTextureRepository ../../../shaders/ensureColor4".split(" "),function(g,n,l,p,h,a,q,k,r){function t(c,b){const u=!(b.draped&&b.stipplePreferContinuous),{vertex:e,fragment:f}=c;f.include(n.RgbaFloatEncoding);b.draped||(l.addCameraPosition(e,b),e.uniforms.add(new h.FloatPassUniform("worldToScreenPerDistanceRatio",
(d,v)=>1/v.camera.perScreenPixelRatio)),e.code.add(a.glsl`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`));c.varyings.add("vStippleDistance","float");b.stippleRequiresClamp&&c.varyings.add("vStippleDistanceLimits","vec2");b.stippleRequiresStretchMeasure&&c.varyings.add("vStipplePatternStretch","float");e.code.add(a.glsl`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${w};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `);e.code.add(a.glsl`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`);e.code.add(a.glsl`
    if (segmentLengthPseudoScreen >= ${u?"patternLength":"1e4"}) {
  `);l.addPixelRatio(e,b);e.code.add(a.glsl`
        // Round the screen length to get an integer number of pattern repetitions (minimum 1).
        float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
        float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
        float segmentLengthScreenRounded = flooredRepetitions * patternLength;

        ${b.stippleRequiresStretchMeasure?a.glsl`
              float stretch = repetitions / flooredRepetitions;

              // We need to impose a lower bound on the stretch factor to prevent the dots from merging together when there is only 1 repetition.
              // 0.75 is the lowest possible stretch value for flooredRepetitions > 1, so it makes sense as lower bound.
              vStipplePatternStretch = max(0.75, stretch);`:""}

        return vec2(0.0, segmentLengthScreenRounded);
      }
      return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
    }
  `);f.constants.add("stippleTexturePadding","float",k.STIPPLE_TEXTURE_PADDING);f.uniforms.add(new q.Texture2DPassUniform("stipplePatternTexture",d=>d.stippleTexture),new h.FloatPassUniform("stipplePatternSDFNormalizer",d=>(d=d.stipplePattern)?(Math.floor(.5*(k.computeLongestPattern(d)-1))+.5)/d.pixelRatio:1),new h.FloatPassUniform("stipplePatternPixelSizeInv",d=>1/m(d)));f.code.add(a.glsl`float padStippleTexture(float u) {
float paddedTextureSize = float(textureSize(stipplePatternTexture, 0).x);
float unpaddedTextureSize = paddedTextureSize - stippleTexturePadding;
return (u * unpaddedTextureSize + stippleTexturePadding * 0.5) / paddedTextureSize;
}`);f.code.add(a.glsl`
    float getStippleSDF(out bool isClamped) {
      ${b.stippleRequiresClamp?a.glsl`
          float stippleDistanceClamped = clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y);
          vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
          isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;`:a.glsl`
          float stippleDistanceClamped = vStippleDistance;
          isClamped = false;`}

      float u = stippleDistanceClamped * gl_FragCoord.w * stipplePatternPixelSizeInv;
      ${b.stippleScaleWithLineWidth?a.glsl`u *= vLineSizeInv;`:""}
      u = padStippleTexture(fract(u));

      float encodedSDF = rgba2float(texture(stipplePatternTexture, vec2(u, 0.5)));
      float sdf = (encodedSDF * 2.0 - 1.0) * stipplePatternSDFNormalizer;

      ${b.stippleRequiresStretchMeasure?a.glsl`return (sdf - 0.5) * vStipplePatternStretch + 0.5;`:a.glsl`return sdf;`}
    }

    float getStippleSDF() {
      bool ignored;
      return getStippleSDF(ignored);
    }

    float getStippleAlpha() {
      bool isClamped;
      float stippleSDF = getStippleSDF(isClamped);

      float antiAliasedResult = ${b.stippleScaleWithLineWidth?a.glsl`clamp(stippleSDF * vLineWidth + 0.5, 0.0, 1.0);`:a.glsl`clamp(stippleSDF + 0.5, 0.0, 1.0);`}

      return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
    }
  `);b.stippleOffColorEnabled?(f.uniforms.add(new p.Float4PassUniform("stippleOffColor",d=>r.ensureColor4(d.stippleOffColor))),f.code.add(a.glsl`#define discardByStippleAlpha(stippleAlpha, threshold) {}
#define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)`)):f.code.add(a.glsl`#define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }
#define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)`)}function m(c){const b=c.stipplePattern;return b?k.computeTextureSize(c.stipplePattern)/b.pixelRatio:1}const w=a.glsl.float(.4);g.LineStipple=function(c,b){c.constants.add("stippleAlphaColorDiscard","float",.001);c.constants.add("stippleAlphaHighlightDiscard","float",.5);b.stippleEnabled?t(c,b):c.fragment.code.add(a.glsl`float getStippleAlpha() { return 1.0; }
#define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}
#define blendStipple(color, _stippleAlpha_) color`)};g.computePixelSize=m;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});