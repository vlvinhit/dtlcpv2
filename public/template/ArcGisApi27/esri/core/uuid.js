// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports"],function(c){function d(){if(e)return crypto.randomUUID();const b=crypto.getRandomValues(new Uint16Array(8));b[3]=b[3]&4095|16384;b[4]=b[4]&16383|32768;const a=f=>b[f].toString(16).padStart(4,"0");return a(0)+a(1)+"-"+a(2)+"-"+a(3)+"-"+a(4)+"-"+a(5)+a(6)+a(7)}const e="randomUUID"in crypto;c.generateBracedUUID=function(){return`{${d()}}`};c.generateUUID=d;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});