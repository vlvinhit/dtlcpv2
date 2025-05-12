// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../geometry ../../request ../utils ./utils ../../geometry/Polygon".split(" "),function(d,p,h,e,f,k){d.autoComplete=async function(a,b,l,c){const g=b[0].spatialReference;a=e.parseUrl(a);b={...a.query,f:"json",sr:JSON.stringify(g.toJSON()),polygons:JSON.stringify(f.encodeGeometries(b).geometries),polylines:JSON.stringify(f.encodeGeometries(l).geometries)};c=e.asValidOptions(b,c);return h(a.path+"/autoComplete",c).then(({data:m})=>(m.geometries||[]).map(({rings:n})=>new k({spatialReference:g,
rings:n})))};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});