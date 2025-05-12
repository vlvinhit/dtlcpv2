/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{R as e}from"./RgbaFloatEncoding.glsl.js";import{c as t,b as r}from"./View.glsl.js";import{F as o}from"./Float4PassUniform.js";import{F as i}from"./FloatPassUniform.js";import{g as a}from"./interfaces2.js";import{T as s}from"./Texture2DPassUniform.js";import{p as n}from"./floatRGBA.js";import{g as p}from"./watch.js";import{P as l,T as d}from"./enums3.js";import{T as c,a as u}from"./Texture.js";import{s as f}from"./vec4.js";import{Z as h,c as m}from"./vec4f64.js";class S{constructor(e,t,r){this._createTexture=e,this._parametersKey=t,this._repository=new Map,this._orphanCache=r.newCache(`procedural-texture-repository:${p()}`,(e=>e.dispose()))}destroy(){for(const[e,{texture:t}]of this._repository)t.dispose();this._repository.clear(),this._orphanCache.destroy()}swap(e,t=null){const r=this._acquire(e);return this.release(t),r}release(e){if(null==e)return;const t=this._parametersKey(e),r=this._repository.get(t);if(r&&(r.refCount--,0===r.refCount)){this._repository.delete(t);const{texture:e}=r,o=e.gpuMemoryUsage;this._orphanCache.put(t,e,o)}}_acquire(e){if(null==e)return null;const t=this._parametersKey(e),r=this._repository.get(t);if(r)return r.refCount++,r.texture;const o=this._orphanCache.pop(t)??this._createTexture(e),i=new g(o);return this._repository.set(t,i),o}}class g{constructor(e){this.texture=e,this.refCount=1}}function x(e,t){return new S((t=>{const{encodedData:r,paddedPixels:o}=function(e){const t=R(e),r=1/e.pixelRatio,o=P(e),i=v(e),a=(Math.floor(.5*(i-1))+.5)*r,s=[];let p=1;for(const e of t){for(let t=0;t<e;t++){const o=p*(Math.min(t,e-1-t)+.5)*r/a*.5+.5;s.push(o)}p=-p}const l=Math.round(t[0]/2),d=[...s.slice(l),...s.slice(0,l)],c=o+C,u=new Uint8Array(4*c);let f=4;for(const e of d)n(e,u,f),f+=4;return u.copyWithin(0,f-4,f),u.copyWithin(f,4,8),{encodedData:u,paddedPixels:c}}(t),i=new c;return i.internalFormat=l.RGBA,i.width=o,i.height=1,i.wrapMode=d.CLAMP_TO_EDGE,new u(e,i,r)}),(e=>`${e.pattern.join(",")}-r${e.pixelRatio}`),t)}function R(e){return e.pattern.map((t=>Math.round(t*e.pixelRatio)))}function P(e){if(null==e)return 1;const t=R(e);return Math.floor(t.reduce(((e,t)=>e+t)))}function v(e){return R(e).reduce(((e,t)=>Math.max(e,t)))}const C=2,T=m();function D(n,p){n.constants.add("stippleAlphaColorDiscard","float",.001),n.constants.add("stippleAlphaHighlightDiscard","float",.5),p.stippleEnabled?function(n,p){const l=!(p.draped&&p.stipplePreferContinuous),{vertex:d,fragment:c}=n;c.include(e),p.draped||(t(d,p),d.uniforms.add(new i("worldToScreenPerDistanceRatio",((e,t)=>1/t.camera.perScreenPixelRatio))),d.code.add(a`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),n.varyings.add("vStippleDistance","float"),p.stippleRequiresClamp&&n.varyings.add("vStippleDistanceLimits","vec2"),p.stippleRequiresStretchMeasure&&n.varyings.add("vStipplePatternStretch","float"),d.code.add(a`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${w};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),d.code.add(a`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`),d.code.add(a`
    if (segmentLengthPseudoScreen >= ${l?"patternLength":"1e4"}) {
  `),r(d,p),d.code.add(a`
        // Round the screen length to get an integer number of pattern repetitions (minimum 1).
        float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
        float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
        float segmentLengthScreenRounded = flooredRepetitions * patternLength;

        ${p.stippleRequiresStretchMeasure?a`
              float stretch = repetitions / flooredRepetitions;

              // We need to impose a lower bound on the stretch factor to prevent the dots from merging together when there is only 1 repetition.
              // 0.75 is the lowest possible stretch value for flooredRepetitions > 1, so it makes sense as lower bound.
              vStipplePatternStretch = max(0.75, stretch);`:""}

        return vec2(0.0, segmentLengthScreenRounded);
      }
      return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
    }
  `),c.constants.add("stippleTexturePadding","float",C),c.uniforms.add(new s("stipplePatternTexture",(e=>e.stippleTexture)),new i("stipplePatternSDFNormalizer",(e=>{return(t=e.stipplePattern)?(Math.floor(.5*(v(t)-1))+.5)/t.pixelRatio:1;var t})),new i("stipplePatternPixelSizeInv",(e=>1/_(e)))),c.code.add(a`float padStippleTexture(float u) {
float paddedTextureSize = float(textureSize(stipplePatternTexture, 0).x);
float unpaddedTextureSize = paddedTextureSize - stippleTexturePadding;
return (u * unpaddedTextureSize + stippleTexturePadding * 0.5) / paddedTextureSize;
}`),c.code.add(a`
    float getStippleSDF(out bool isClamped) {
      ${p.stippleRequiresClamp?a`
          float stippleDistanceClamped = clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y);
          vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
          isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;`:a`
          float stippleDistanceClamped = vStippleDistance;
          isClamped = false;`}

      float u = stippleDistanceClamped * gl_FragCoord.w * stipplePatternPixelSizeInv;
      ${p.stippleScaleWithLineWidth?a`u *= vLineSizeInv;`:""}
      u = padStippleTexture(fract(u));

      float encodedSDF = rgba2float(texture(stipplePatternTexture, vec2(u, 0.5)));
      float sdf = (encodedSDF * 2.0 - 1.0) * stipplePatternSDFNormalizer;

      ${p.stippleRequiresStretchMeasure?a`return (sdf - 0.5) * vStipplePatternStretch + 0.5;`:a`return sdf;`}
    }

    float getStippleSDF() {
      bool ignored;
      return getStippleSDF(ignored);
    }

    float getStippleAlpha() {
      bool isClamped;
      float stippleSDF = getStippleSDF(isClamped);

      float antiAliasedResult = ${p.stippleScaleWithLineWidth?a`clamp(stippleSDF * vLineWidth + 0.5, 0.0, 1.0);`:a`clamp(stippleSDF + 0.5, 0.0, 1.0);`}

      return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
    }
  `),p.stippleOffColorEnabled?(c.uniforms.add(new o("stippleOffColor",(e=>{return null==(t=e.stippleOffColor)?h:4===t.length?t:f(T,t[0],t[1],t[2],1);var t}))),c.code.add(a`#define discardByStippleAlpha(stippleAlpha, threshold) {}
#define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)`)):c.code.add(a`#define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }
#define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)`)}(n,p):function(e){e.fragment.code.add(a`float getStippleAlpha() { return 1.0; }
#define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}
#define blendStipple(color, _stippleAlpha_) color`)}(n)}function _(e){const t=e.stipplePattern;return t?P(e.stipplePattern)/t.pixelRatio:1}const w=a.float(.4);export{D as L,S as P,x as a,_ as c};
