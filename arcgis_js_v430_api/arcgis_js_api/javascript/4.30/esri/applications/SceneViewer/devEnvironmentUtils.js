// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../core/devEnvironmentUtils"],function(b,c){b.adjustStaticAGOUrl=function(a,d){return c.adjustStaticAGOUrl(a,d)};b.isDevEnvironment=function(a){return c.isDevEnvironment(a)};b.isTelemetryDevEnvironment=function(a){a=a||globalThis.location.hostname;return[/^zrh-.+?\.esri\.com$/].concat(c.devHostnames).some(d=>null!=a?.match(d))};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});