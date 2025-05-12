// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../chunks/vec3f64 ../output/BlendOptions ./BackgroundGrid.glsl ../util/BlendModes.glsl ../../shaderModules/Float3PassUniform ../../shaderModules/FloatPassUniform ../../shaderModules/interfaces ../../shaderModules/Texture2DPassUniform".split(" "),function(b,h,n,p,q,r,t,u,c,v){b.BlendLayersOutput=void 0;(function(a){a[a.Composite=0]="Composite";a[a.ColorComposite=1]="ColorComposite";a[a.GridComposite=2]="GridComposite";
a[a.GroupBackgroundComposite=3]="GroupBackgroundComposite";a[a.COUNT=4]="COUNT"})(b.BlendLayersOutput||(b.BlendLayersOutput={}));b.BaseOpacityMode=void 0;(function(a){a[a.NotRequired=0]="NotRequired";a[a.Required=1]="Required";a[a.COUNT=2]="COUNT"})(b.BaseOpacityMode||(b.BaseOpacityMode={}));b.PremultipliedAlphaSource=void 0;(function(a){a[a.Off=0]="Off";a[a.On=1]="On";a[a.COUNT=2]="COUNT"})(b.PremultipliedAlphaSource||(b.PremultipliedAlphaSource={}));let w=function(a){function d(){var e=a.apply(this,
arguments)||this;e.baseOpacity=1;e.backgroundColor=n.ZEROS;e.fboTexture=null;return e}h._inherits(d,a);return h._createClass(d)}(c.NoParameters);b.TileBackground=function(a,d){const e=d.output===b.BlendLayersOutput.GridComposite,k=d.output===b.BlendLayersOutput.ColorComposite,l=d.output===b.BlendLayersOutput.GroupBackgroundComposite,m=d.output===b.BlendLayersOutput.Composite;e&&a.fragment.include(q.BackgroundGrid);k&&a.fragment.uniforms.add(new t.Float3PassUniform("backgroundColor",f=>f.backgroundColor));
const g=d.baseOpacityMode===b.BaseOpacityMode.Required;g&&a.fragment.uniforms.add(new u.FloatPassUniform("baseOpacity",f=>f.baseOpacity));m&&a.fragment.uniforms.add(new v.Texture2DPassUniform("fboColor",f=>f.fboTexture));const x=d.blendMode!==p.LayerBlendMode.Normal,y=d.premultipliedSource===b.PremultipliedAlphaSource.On;a.fragment.include(r.BlendModes,d);a.fragment.code.add(c.glsl`
    vec4 getBackground(vec2 uv) {
      return ${g?c.glsl`baseOpacity *`:""} ${l?c.glsl`vec4(0.0, 0.0, 0.0, 0.0)`:k?c.glsl`vec4(backgroundColor, 1.0)`:e?c.glsl`vec4(gridColor(uv), 1.0)`:c.glsl`texelFetch(fboColor, ivec2(gl_FragCoord.xy), 0)`};
    }

    vec4 blendLayers(vec4 bgColor, vec4 colorLayer, float opacity) {
      ${x?c.glsl`
          vec3 cl = colorLayer.a == 0.0 ? colorLayer.rgb : colorLayer.rgb / colorLayer.a;
          vec3 cb = bgColor.a == 0.0 ? bgColor.rgb : bgColor.rgb / bgColor.a;
          return applyBlendMode(clamp(cl, vec3(0.0), vec3(1.0)), colorLayer.a * opacity, cb, bgColor.a);`:c.glsl`
          float composeAlpha = colorLayer.a * opacity;
          return ${!y&&(m&&!g||l)?c.glsl`colorLayer * opacity;`:c.glsl`bgColor * (1.0 - composeAlpha) + colorLayer * opacity;`}`}
    }`)};b.TileBackgroundPassParameters=w;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});