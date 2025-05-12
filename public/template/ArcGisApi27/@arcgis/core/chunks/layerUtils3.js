/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function r(r,e,n){if(!e||!r||!r.map)return;const{map:a}=r,s=a.layers.find((r=>r===e));s||a.add(e,n),s&&null!=n&&a.layers.reorder(s,n)}function e(r,e){return r.allLayerViews.find((r=>{const n=r.layer;return n===e||"sublayers"in n&&null!=n.sublayers&&n.sublayers.includes(e)}))}export{r as a,e as f};
