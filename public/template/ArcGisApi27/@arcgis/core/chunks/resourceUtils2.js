/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{T as e}from"./basicInterfaces.js";class t{constructor(t){this.data=t,this.type="encoded-mesh-texture",this.encoding=e.KTX2_ENCODING}}function n(e){return"encoded-mesh-texture"===e?.type}async function r(e){return new Promise(((t,n)=>{const r=new Blob([e]),o=new FileReader;o.onload=()=>{const e=o.result;t(JSON.parse(e))},o.onerror=e=>{n(e)},o.readAsText(r)}))}async function o(n,r){return r===e.KTX2_ENCODING?new t(n):new Promise(((e,t)=>{const o=new Blob([n],{type:r}),s=URL.createObjectURL(o),a=new Image,c=()=>{URL.revokeObjectURL(s),"decode"in a?a.decode().then((()=>e(a)),(()=>e(a))).then(i):(e(a),i())},d=e=>{URL.revokeObjectURL(s),t(e),i()},i=()=>{a.removeEventListener("load",c),a.removeEventListener("error",d)};a.addEventListener("load",c),a.addEventListener("error",d),a.src=s}))}export{t as E,o as a,n as i,r as j};
