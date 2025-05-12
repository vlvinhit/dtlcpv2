/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{a as t}from"./maybe.js";import{b as a,g as n}from"./locale.js";const r={ar:"ar-u-nu-latn"};let e=new WeakMap,i={};function o(a){const o=a||i;if(!e.has(o)){const t=n(),i=r[n()]||t;e.set(o,new Intl.NumberFormat(i,a))}return t(e.get(o))}function s(t={}){const a={};return null!=t.digitSeparator&&(a.useGrouping=t.digitSeparator),null!=t.places&&(a.minimumFractionDigits=a.maximumFractionDigits=t.places),a}function u(t,a){return Object.is(t,-0)&&(t=0),o(a).format(t)}a((()=>{e=new WeakMap,i={}}));export{s as c,u as f,o as g};
