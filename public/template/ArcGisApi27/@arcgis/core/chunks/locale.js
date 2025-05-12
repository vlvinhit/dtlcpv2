/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let n,o;const e=globalThis.esriConfig?.locale??globalThis.dojoConfig?.locale;function a(){return e??globalThis.navigator?.language??"en"}function t(){return void 0===o&&(o=a()),o}function c(o){n=o||void 0,h()}function l(n=t()){const o=/^([a-zA-Z]{2,3})(?:[_\-]\w+)*$/.exec(n);return o?.[1].toLowerCase()}const s={he:!0,ar:!0};function i(n=t()){const o=l(n);return void 0!==o&&(s[o]||!1)}const r=[];function u(n){return r.push(n),{remove(){r.splice(r.indexOf(n),1)}}}const f=[];function g(n){return f.push(n),{remove(){r.splice(f.indexOf(n),1)}}}function h(){const e=n??a();o!==e&&(o=e,[...f].forEach((n=>{n.call(null,e)})),[...r].forEach((n=>{n.call(null,e)})))}globalThis.addEventListener?.("languagechange",h);export{l as a,g as b,t as g,u as o,i as p,c as s};
