// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["./utils"],function(e){const g={vsPath:"raster/rfx/vs",fsPath:"raster/rfx/curvature",attributes:new Map([["a_position",0],["a_texcoord",1]])};return{createProgram:function(a,b){const {painter:c,rasterFunction:d}=a;({curvatureType:a}=d.parameters);return c.materialManager.getProgram(g,[a])},bindTextureAndUniforms:function(a,b,c){e.setSingleImageTextures(a,b,c);e.setCoordsAndTransforms(b);const {width:d,height:h,resolution:f}=c;({zFactor:a}=a.rasterFunction.parameters);b.setUniform2fv("u_srcImageSize",
[d,h]);b.setUniform1f("u_zlFactor",200*a/f/f)}}});