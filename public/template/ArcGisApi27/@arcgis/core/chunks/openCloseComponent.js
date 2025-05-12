/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{r as n}from"./index.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */const t=new WeakMap;function o(n){n.propertyName===this.openTransitionProp&&n.target===this.transitionEl&&(this.open?this.onBeforeOpen():this.onBeforeClose())}function e(n){n.propertyName===this.openTransitionProp&&n.target===this.transitionEl&&(this.open?this.onOpen():this.onClose())}function i(t,o=!1){n((()=>{if(t.transitionEl){const n=getComputedStyle(t.transitionEl).transition.split(" "),e=n.findIndex((n=>n===t.openTransitionProp));"0s"===n[e+1]?((o?t[t.transitionProp]:t.open)?t.onBeforeOpen():t.onBeforeClose(),(o?t[t.transitionProp]:t.open)?t.onOpen():t.onClose()):(t.transitionEl.addEventListener("transitionstart",(()=>{(o?t[t.transitionProp]:t.open)?t.onBeforeOpen():t.onBeforeClose()}),{once:!0}),t.transitionEl.addEventListener("transitionend",(()=>{(o?t[t.transitionProp]:t.open)?t.onOpen():t.onClose()}),{once:!0}))}}))}function s(n){if(r(n),n.transitionEl){const i=o.bind(n),s=e.bind(n);t.set(n,[n.transitionEl,i,s]),n.transitionEl.addEventListener("transitionstart",i),n.transitionEl.addEventListener("transitionend",s)}}function r(n){if(!t.has(n))return;const[o,e,i]=t.get(n);o.removeEventListener("transitionstart",e),o.removeEventListener("transitionend",i),t.delete(n)}export{s as c,r as d,i as o};
