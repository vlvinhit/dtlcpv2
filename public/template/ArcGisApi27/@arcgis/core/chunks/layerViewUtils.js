/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function n(n){return n&&"function"==typeof n.highlight}function e(n){return n&&"function"==typeof n.maskOccludee}function t(n,e,t){return null==n||n>t&&(0===e||n<e)}function c(n,e){return null!=n&&n>0||null!=e&&e>0}function u(n){const e=n.effectiveScaleRange;return{minScale:e?.minScale??0,maxScale:e?.maxScale??0}}export{u as e,n as h,c as i,e as o,t as s};
