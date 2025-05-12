/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{a as o,g as t}from"./infoFor3D.js";import{b as n,c as r}from"./layerUtils.js";function e(e){return!(!(e&&"object"==typeof e&&"loaded"in e&&e.loaded&&n(e)?.operations?.supportsEditing&&"type"in e)||"editingEnabled"in e&&!r(e)||"scene"===e.type&&!function(n){const r=n.infoFor3D;if(!r)return!0;const{supportedFormats:e,queryFormats:i}=r,s=o("model/gltf-binary",e)??t("glb",e);return null!=s&&i.includes(s)}(e))}export{e as i};
