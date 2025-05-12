/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{q as e,b as t}from"./dom.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */const n="calciteInternalLabelClick",l="calciteInternalLabelConnected",s="calciteInternaLabelDisconnected",a="calcite-label",i=new WeakMap,o=new WeakMap,c=new WeakMap,r=new Set,d=n=>{const{id:l}=n,s=l&&e(n,{selector:`${a}[for="${l}"]`});if(s)return s;const i=t(n,a);return!i||function(e,t){let n;const l="custom-element-ancestor-check",s=l=>{l.stopImmediatePropagation();const s=l.composedPath();n=s.slice(s.indexOf(t),s.indexOf(e))};return e.addEventListener(l,s,{once:!0}),t.dispatchEvent(new CustomEvent(l,{composed:!0,bubbles:!0})),e.removeEventListener(l,s),n.filter((n=>n!==t&&n!==e)).filter((e=>e.tagName?.includes("-"))).length>0}(i,n)?null:i};function u(e){const t=d(e.el);if(i.has(t)||!t&&r.has(e))return;const a=f.bind(e);if(t){e.labelEl=t;const d=E.bind(e);i.set(e.labelEl,d),e.labelEl.addEventListener(n,d),r.delete(e),document.removeEventListener(l,o.get(e)),c.set(e,a),document.addEventListener(s,a)}else r.has(e)||(a(),document.removeEventListener(s,c.get(e)))}function m(e){if(r.delete(e),document.removeEventListener(l,o.get(e)),document.removeEventListener(s,c.get(e)),o.delete(e),c.delete(e),!e.labelEl)return;const t=i.get(e.labelEl);e.labelEl.removeEventListener(n,t),i.delete(e.labelEl)}function b(e){return e.label||e.labelEl?.textContent?.trim()||""}function E(e){this.disabled||this.el.contains(e.detail.sourceEvent.target)||this.onLabelClick(e)}function v(){r.has(this)&&u(this)}function f(){r.add(this);const e=o.get(this)||v.bind(this);o.set(this,e),document.addEventListener(l,e)}export{s as a,u as c,m as d,b as g,l};
