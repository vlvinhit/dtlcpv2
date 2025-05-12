/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{B as t}from"./index.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */const e={container:"container",containerBorderSelected:"container--border-selected",containerBorderUnselected:"container--border-unselected",contentContainer:"content-container",contentContainerSelectable:"content-container--selectable",contentContainerHasCenterContent:"content-container--has-center-content",nestedContainer:"nested-container",nestedContainerHidden:"nested-container--hidden",content:"content",customContent:"custom-content",actionsStart:"actions-start",contentStart:"content-start",label:"label",description:"description",contentEnd:"content-end",actionsEnd:"actions-end",selectionContainer:"selection-container",openContainer:"open-container"},n={actionsStart:"actions-start",contentStart:"content-start",content:"content",contentEnd:"content-end",actionsEnd:"actions-end"},c=5,o={selectedMultiple:"check-circle-f",selectedSingle:"circle-f",unselected:"blank",closedLTR:"caret-right",closedRTL:"caret-left",open:"caret-down",blank:"blank",close:"x"},a="calcite-list-item";function r(t){const e=t.target.assignedElements({flatten:!0});return[...e.filter((t=>t?.matches("calcite-list-item-group"))).map((t=>Array.from(t.querySelectorAll(a)))).reduce(((t,e)=>[...t,...e]),[]),...e.filter((t=>t?.matches(a)))]}function i(t){t.forEach((e=>{e.setPosition=t.indexOf(e)+1,e.setSize=t.length}))}function s(e,n=!1){if(!t.isBrowser)return 0;const c=n?"ancestor::calcite-list-item | ancestor::calcite-list-item-group":"ancestor::calcite-list-item";return document.evaluate(c,e,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null).snapshotLength}export{e as C,o as I,c as M,n as S,s as a,r as g,i as u};
