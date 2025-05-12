/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function e(e){return"string"==typeof e?document.getElementById(e):e??null}function t(e){for(;e.hasChildNodes();)e.removeChild(e.firstChild)}function n(e,t){const n=t.parentNode;n&&n.insertBefore(e,t)}function o(e,t){for(;;){const n=e.firstChild;if(!n)break;t.appendChild(n)}}function r(e){e.parentNode&&e.parentNode.removeChild(e)}const i="function"==typeof Element.prototype.closest?(e,t)=>e.closest(t):(e,t)=>{let n=e;do{if(n.matches(t))return n;n=n.parentElement}while(null!==n&&1===n.nodeType);return null};export{r as a,e as b,i as c,t as e,n as i,o as r};
