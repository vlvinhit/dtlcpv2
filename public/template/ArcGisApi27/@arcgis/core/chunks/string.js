/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{g as t}from"./object.js";const e=/\{([^\}]+)\}/g;function n(t){return t??""}function r(r,o){return r.replaceAll(e,"object"==typeof o?(e,r)=>n(t(r,o)):(t,e)=>n(o(e)))}function o(t,e){return t.replaceAll(/([\.$?*|{}\(\)\[\]\\\/\+\-^])/g,(t=>e&&e.includes(t)?t:`\\${t}`))}function c(t){let e=0;for(let n=0;n<t.length;n++)e=(e<<5)-e+t.charCodeAt(n),e|=0;return e}function s(t){return(new DOMParser).parseFromString(t||"","text/html").body.innerText||""}function u(t,e){return new RegExp(`{${e}}`,"ig").test(t)}export{o as e,c as n,r,s,u as t};
