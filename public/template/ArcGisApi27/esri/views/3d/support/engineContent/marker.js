// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","./sdfPrimitives","../../../webgl/enums","../../../webgl/Texture","../../../webgl/TextureDescriptor"],function(a,e,d,f,g){a.MARKER_SIZE_PER_LINE_WIDTH=10;a.MARKER_SYMBOL_SIZE=32;a.MARKER_TEXTURE_SIZE=64;a.MARKER_THICKNESS=6.4;a.MARKER_TIP_THICKNESS_FACTOR=.25;a.createMarkerTexture=function(c,h){c=e.createPrimitive(c,64,32,6.4);const b=new g.TextureDescriptor;b.internalFormat=d.PixelFormat.RGBA;b.width=64;b.height=64;b.wrapMode=d.TextureWrapMode.CLAMP_TO_EDGE;return new f.Texture(h,
b,c)};Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});