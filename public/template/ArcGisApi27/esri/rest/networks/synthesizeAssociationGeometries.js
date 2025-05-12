// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../request","../utils","./support/AssociationGeometriesResult"],function(g,k,e,l){g.synthesizeAssociationGeometries=async function(d,h,b){d=e.parseUrl(d);var f={...h.toJSON(),f:"json"};f=e.encode({...d.query,...f});b?b.method="post":b={method:"post"};b=e.asValidOptions(f,b);return k(`${d.path}/synthesizeAssociationGeometries`,b).then(a=>{var c=h.outSpatialReference;({data:a}=a);if(a){a=l.fromJSON(a);if(c)for(const m of a.associations)m.geometry.spatialReference=c.clone();c=a}else c=
null;return c})};Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});