/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{b as e}from"./elevationInfoUtils.js";function n(n,o=e(n)){return"on-the-ground"!==o.mode&&!(null==n.geometry||!n.geometry.hasZ)}function o(e,n){let o=null;const t=e.events.on("grab-changed",(t=>{null!=o&&(o.remove(),o=null),"start"===t.action?(o=e.disableDisplay(),n&&n(t)):n&&n(t)}));return{remove(){null!=o&&o.remove(),t.remove()}}}export{n as c,o as d};
