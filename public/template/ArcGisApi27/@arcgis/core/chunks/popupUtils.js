/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{getFeatureEditFields as e,fixFields as l}from"../layers/support/fieldUtils.js";async function n(n,p=n.popupTemplate){if(null==p)return[];const t=await p.getRequiredFields(n.fieldsIndex),{lastEditInfoEnabled:u}=p,{objectIdField:d,typeIdField:a,globalIdField:s,relationships:i}=n;if(t.includes("*"))return["*"];const o=u?await e(n):[],f=l(n.fieldsIndex,[...t,...o]);return a&&f.push(a),f&&d&&n.fieldsIndex?.has(d)&&!f.includes(d)&&f.push(d),f&&s&&n.fieldsIndex?.has(s)&&!f.includes(s)&&f.push(s),i&&i.forEach((e=>{const{keyField:l}=e;f&&l&&n.fieldsIndex?.has(l)&&!f.includes(l)&&f.push(l)})),f}function p(e,l){return e.popupTemplate?e.popupTemplate:null!=l&&l.defaultPopupTemplateEnabled&&null!=e.defaultPopupTemplate?e.defaultPopupTemplate:null}function t(e,l){return null!=p(e,{defaultPopupTemplateEnabled:l})}export{p as a,n as g,t as h};
