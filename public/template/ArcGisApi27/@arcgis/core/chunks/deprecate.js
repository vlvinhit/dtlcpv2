/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{h as n}from"./typedArrayUtil.js";const e=new Set;function t(e,t,i={}){n("esri-deprecation-warnings")&&o(e,`Module: ${t}`,i)}function i(e,t,i={}){if(n("esri-deprecation-warnings")){const{moduleName:n}=i;o(e,"Function: "+(n?n+"::":"")+t+"()",i)}}function r(e,t,i={}){if(n("esri-deprecation-warnings")){const{moduleName:n}=i;o(e,"Property: "+(n?n+"::":"")+t,i)}}function o(t,i,r={}){if(n("esri-deprecation-warnings")){const{replacement:n,version:o,see:a,warnOnce:s}=r;let c=i;n&&(c+=`\n\t🛠️ Replacement: ${n}`),o&&(c+=`\n\t⚙️ Version: ${o}`),a&&(c+=`\n\t🔗 See ${a} for more details.`),function(n,t,i=!1){i&&e.has(t)||(i&&e.add(t),n.warn(`🛑 DEPRECATED - ${t}`))}(t,c,s)}}export{o as a,t as b,i as c,r as d};
