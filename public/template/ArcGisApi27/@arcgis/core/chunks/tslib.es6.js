/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function e(e,t,n,c){var o,r=arguments.length,f=r<3?t:null===c?c=Object.getOwnPropertyDescriptor(t,n):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)f=Reflect.decorate(e,t,n,c);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(f=(r<3?o(f):r>3?o(t,n,f):o(t,n))||f);return r>3&&f&&Object.defineProperty(t,n,f),f}function t(e,t,n,c){return new(n||(n=Promise))((function(o,r){function f(e){try{i(c.next(e))}catch(e){r(e)}}function a(e){try{i(c.throw(e))}catch(e){r(e)}}function i(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(f,a)}i((c=c.apply(e,t||[])).next())}))}export{e as _,t as a};
