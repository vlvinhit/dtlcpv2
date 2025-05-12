/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import e from"../request.js";async function r(r,t){const{data:a}=await e(r,{responseType:"json",query:{f:"json",...t?.customParameters,token:t?.apiKey}});return a}async function t(e,t){const s=await r(e,t);s.layers=s.layers.filter(a);const n={serviceJSON:s};if((s.currentVersion??0)<10.5)return n;const o=await r(e+"/layers",t);return n.layersJSON={layers:o.layers.filter(a),tables:o.tables},n}function a(e){return!e.type||"Feature Layer"===e.type}export{r as a,t as f};
