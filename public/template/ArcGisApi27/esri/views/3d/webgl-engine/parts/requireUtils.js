// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){b.removeLoadedShaderModules=function(){const a=globalThis.require?.modules;if(a){const d=Object.keys(a);for(const c of d)-1!==c.search(".glsl")&&delete a[c]}};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});