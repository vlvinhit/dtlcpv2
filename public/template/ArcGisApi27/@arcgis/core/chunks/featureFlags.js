/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{h as e}from"./typedArrayUtil.js";const a=()=>!!e("enable-feature:force-wosr"),t=()=>!!e("enable-feature:direct-3d-object-feature-layer-display"),i=()=>!!e("enable-i3s-patching"),r=()=>!!e("enable-feature:SceneLayer-editing");((a="i3s-patching")=>{switch(e.add("enable-i3s-patching",!1,!0,!0),e.add("enable-feature:direct-3d-object-feature-layer-display",!1,!0,!0),e.add("enable-feature:SceneLayer-editing",!0,!0,!0),a){case"feature-layer-view":e.add("enable-feature:direct-3d-object-feature-layer-display",!0,!0,!0);break;case"i3s-patching":e.add("enable-i3s-patching",!0,!0,!0)}})("i3s-patching");export{t as d,a as e,i,r as s};
