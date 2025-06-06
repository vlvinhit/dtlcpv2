/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{S as o}from"./ShaderOutput.js";import{g as r}from"./interfaces2.js";import{V as e}from"./VertexAttribute.js";function d(d,t){const a=t.output===o.ObjectAndLayerIdColor,n=t.objectAndLayerIdColorInstanced;a&&(d.varyings.add("objectAndLayerIdColorVarying","vec4"),n?d.attributes.add(e.INSTANCEOBJECTANDLAYERIDCOLOR,"vec4"):d.attributes.add(e.OBJECTANDLAYERIDCOLOR,"vec4")),d.vertex.code.add(r`
     void forwardObjectAndLayerIdColor() {
      ${a?n?r`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;`:r`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:r``} }`),d.fragment.code.add(r`
      void outputObjectAndLayerIdColor() {
        ${a?r`fragColor = objectAndLayerIdColorVarying;`:r``} }`)}export{d as O};
