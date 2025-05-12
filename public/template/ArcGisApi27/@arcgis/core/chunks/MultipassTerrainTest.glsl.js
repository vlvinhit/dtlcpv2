/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{R as r}from"./ReadLinearDepth.glsl.js";import{F as e}from"./RgbaFloatEncoding.glsl.js";import{g as a}from"./interfaces2.js";import{T as t}from"./Texture2DPassUniform.js";function n(n,i){i.hasMultipassTerrain&&(n.fragment.include(r),n.fragment.uniforms.add(new t("terrainDepthTexture",((r,e)=>e.multipassTerrain.linearDepthTexture))),n.fragment.uniforms.add(new e("nearFar",((r,e)=>e.camera.nearFar))),n.fragment.uniforms.add(new e("inverseViewport",((r,e)=>e.inverseViewport))),n.fragment.code.add(a`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${i.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `))}class i{constructor(){this.enabled=!1,this.cullAboveGround=!1}}export{i as M,n as m};
