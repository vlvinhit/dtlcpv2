// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../core/typedArrayUtil"],function(d,b){d.compactFloatArray=function(a){return b.isArray(a)?a.length<b.NATIVE_ARRAY_MAX_SIZE?a:new Float32Array(a):a.length<b.NATIVE_ARRAY_MAX_SIZE?Array.from(a):a};d.floatArrayFrom=function(a){return(b.isArray(a)?a.length:a.byteLength/8)<=b.NATIVE_ARRAY_MAX_SIZE?Array.from(a):new Float32Array(a)};d.floatSubArray=function(a,c,e){return Array.isArray(a)?a.slice(c,c+e):a.subarray(c,c+e)};d.newFloatArray=function(a,c=!1){return a<=b.NATIVE_ARRAY_MAX_SIZE?
c?Array(a).fill(0):Array(a):new Float32Array(a)};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});