// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/_rollupPluginBabelHelpers ../output/ReadLinearDepth.glsl ../../shaderModules/Float2PassUniform ../../shaderModules/interfaces ../../shaderModules/Texture2DPassUniform".split(" "),function(c,d,h,e,k,l){d=d._createClass(function(){this.cullAboveGround=this.enabled=!1});c.MultipassTerrainUniforms=d;c.multipassTerrainTest=function(a,f){f.hasMultipassTerrain&&(a.fragment.include(h.ReadLinearDepth),a.fragment.uniforms.add(new l.Texture2DPassUniform("terrainDepthTexture",
(g,b)=>b.multipassTerrain.linearDepthTexture)),a.fragment.uniforms.add(new e.Float2PassUniform("nearFar",(g,b)=>b.camera.nearFar)),a.fragment.uniforms.add(new e.Float2PassUniform("inverseViewport",(g,b)=>b.inverseViewport)),a.fragment.code.add(k.glsl`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${f.cullAboveGround?"\x3e":"\x3c\x3d"} terrainDepth){
        discard;
      }
    }
  `))};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});