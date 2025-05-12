// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","./AlphaCutoff","../../shaderModules/interfaces"],function(a,c,b){a.DiscardOrAdjustAlphaBlend=function(d){d.fragment.code.add(b.glsl`
    #define discardOrAdjustAlpha(color) { if (color.a < ${b.glsl.float(c.symbolAlphaCutoff)}) { discard; } }
  `)};Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});