/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */
function t(t){return r(t)}function e(t){return f(t,"offsetTop")}function n(t){return f(t,"offsetLeft")}function o(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function r(t){for(let e=t;e;e=o(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=o(t);e;e=o(e)){if(!(e instanceof Element))continue;const t=getComputedStyle(e);if("contents"!==t.display){if("static"!==t.position||"none"!==t.filter)return e;if("BODY"===e.tagName)return e}}return null}function f(t,e){let n=t[e],o=r(t);const f=function(t){const e=new Set;let n=t.getRootNode();for(;n;)e.add(n),n=n.parentNode?n.parentNode.getRootNode():null;return e}(t);for(;o&&!f.has(o.getRootNode());)n-=o[e],o=r(o);return n}export{n as offsetLeft,t as offsetParent,e as offsetTop};
