// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","./sources/resolver"],function(a,b){a.createProgramTemplate=function(c){return{attributes:new Map([["a_pos",0],["a_tex",1]]),shaders:{vertexShader:`#define ${c.replace("-","_").toUpperCase()}\n`+b.resolveIncludes("blend/blend.vert"),fragmentShader:`#define ${c.replace("-","_").toUpperCase()}\n`+b.resolveIncludes("blend/blend.frag")}}};Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});