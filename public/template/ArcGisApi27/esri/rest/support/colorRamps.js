// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","./AlgorithmicColorRamp","./ColorRamp","./MultipartColorRamp"],function(b,d,c,e){c={key:"type",base:c,typeMap:{algorithmic:d,multipart:e}};b.fromJSON=function(a){return a&&a.type?"algorithmic"===a.type?d.fromJSON(a):"multipart"===a.type?e.fromJSON(a):null:null};b.types=c;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});