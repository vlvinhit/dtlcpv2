/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{Q as t,z as n}from"./unitUtils.js";function u(n,u){return{type:t(u),value:n,unit:u}}function e(n,u){return{type:t(u),value:n,unit:u}}function a(n,u){return{type:t(u),value:n,unit:u}}function r(n,u,e="arithmetic"){return{type:t(u),value:n,unit:u,rotationType:e}}function i(t,e){return u(n(t.value,t.unit,e),e)}function s(t,u){return null==t?u:null==u||t.value>n(u.value,u.unit,t.unit)?t:u}function l(t,n){return null==t?null:{...t,value:t.value*n}}const o=e(0,"meters"),c=a(0,"square-meters");r(0,"radians");export{a,u as b,e as c,c as d,r as e,s as m,l as s,i as t,o as z};
