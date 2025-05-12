/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */
function e(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function t(e){e.preventDefault()}const n=["mousedown","mouseup","click"];function i(e){const{disabled:t}=e.target;t&&(e.stopImmediatePropagation(),e.preventDefault())}const o={capture:!0};function l(l,r=!1){if(l.disabled)return l.el.setAttribute("tabindex","-1"),l.el.setAttribute("aria-disabled","true"),l.el.contains(document.activeElement)&&document.activeElement.blur(),l.el.click=e,l.el.addEventListener("pointerdown",t,o),void n.forEach((e=>l.el.addEventListener(e,i,o)));l.el.click=HTMLElement.prototype.click,l.el.removeEventListener("pointerdown",t,o),n.forEach((e=>l.el.removeEventListener(e,i,o))),"function"==typeof r?l.el.setAttribute("tabindex",r.call(l)?"0":"-1"):!0===r?l.el.setAttribute("tabindex","0"):!1===r&&l.el.removeAttribute("tabindex"),l.el.removeAttribute("aria-disabled")}export{l as u};
