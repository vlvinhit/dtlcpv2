// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../core/typedArrayUtil"],function(b,c){b.newUByteArray=function(a,d=!1){return a<=c.NATIVE_ARRAY_MAX_SIZE?d?Array(a).fill(0):Array(a):new Uint8Array(a)};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});