// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports"],function(a){a.makeScheduleFunction=function(b){return c=>{if(b.immediate)return b.immediate.schedule(c);console.error("No immediate scheduler");throw Error("No immediate scheduler");}};Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});