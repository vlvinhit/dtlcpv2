// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","./isWebGL2Context"],function(b,c){b.load=function(a){return c(a)?a:(a=a.getExtension("ANGLE_instanced_arrays"))?{drawArraysInstanced:a.drawArraysInstancedANGLE.bind(a),drawElementsInstanced:a.drawElementsInstancedANGLE.bind(a),vertexAttribDivisor:a.vertexAttribDivisorANGLE.bind(a)}:null};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});