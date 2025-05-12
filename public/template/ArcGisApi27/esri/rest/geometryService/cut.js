// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../geometry","../../request","../../geometry/support/jsonUtils","../utils"],function(d,p,g,e,h){d.cut=async function(b,a,k,l){b=h.parseUrl(b);const f=a[0].spatialReference;a={...l,query:{...b.query,f:"json",sr:JSON.stringify(f),target:JSON.stringify({geometryType:e.getJsonType(a[0]),geometries:a}),cutter:JSON.stringify(k)}};a=await g(b.path+"/cut",a);const {cutIndexes:m,geometries:n=[]}=a.data;return{cutIndexes:m,geometries:n.map(c=>{c=e.fromJSON(c);c.spatialReference=f;return c})}};
Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});