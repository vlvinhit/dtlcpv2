// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../core/Error ../../../core/lang ../../../core/promiseUtils ../MeshVertexAttributes ./vertexSpaceConversion".split(" "),function(c,f,d,g,h,k){c.convertMeshVertexSpace=async function(a,e,b){await Promise.resolve();g.throwIfAborted(b);b=k.convertVertexSpace(a,e);if(!b)throw new f("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");a=a.cloneAndModifyVertexAttributes(new h.MeshVertexAttributes({...b,uv:d.clone(a.vertexAttributes.uv),
color:d.clone(a.vertexAttributes.color)}),e);a.transform=null;return a};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});