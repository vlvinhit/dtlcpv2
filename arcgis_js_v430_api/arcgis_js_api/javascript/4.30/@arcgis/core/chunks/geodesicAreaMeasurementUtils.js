/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{b as e}from"./quantityUtils.js";import{geodesicArea as r}from"../geometry/geometryEngine.js";import{geodesicAreas as t}from"../geometry/support/geodesicUtils.js";import{g as s}from"./viewUtils.js";function o(e){const{spatialReference:r}=e;return s(r,a,i,e)}function a(r){return e(Math.abs(t([r],"square-meters")[0]),"square-meters")}function i(t){try{return e(Math.abs(r(t,"square-meters")),"square-meters")}catch(e){return null}}export{o as g};
