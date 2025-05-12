/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{r as e}from"./dom.js";import{B as t}from"./index.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */const o="CALCITE-COMBOBOX-ITEM",n="CALCITE-COMBOBOX-ITEM-GROUP",r=`${o}, ${n}`,s={listContainer:"list-container"};function c(e){const t=e.parentElement?.closest(r),o=t?.parentElement?.closest(r);return[t,o].filter((e=>e))}function a(e){return e.ancestors?.filter((e=>"CALCITE-COMBOBOX-ITEM"===e.nodeName))||[]}function l(t){return e(t.querySelectorAll("calcite-combobox-item"))}function i(t){return e(t.querySelectorAll("calcite-combobox-item")).filter((e=>e.selected)).length>0}function u(e){return t.isBrowser?document.evaluate("ancestor::calcite-combobox-item | ancestor::calcite-combobox-item-group",e,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null).snapshotLength:0}export{r as C,l as a,o as b,n as c,s as d,c as e,u as f,a as g,i as h};
