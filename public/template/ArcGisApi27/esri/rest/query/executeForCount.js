// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../utils","./operations/query","../support/Query"],function(b,c,d,e){b.executeForCount=async function(a,f,g){a=c.parseUrl(a);return d.executeQueryForCount(a,e.from(f),{...g}).then(h=>h.data.count)};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});