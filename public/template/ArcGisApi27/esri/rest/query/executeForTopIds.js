// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../utils","./operations/queryTopFeatures","../support/TopFeaturesQuery"],function(b,c,d,e){b.executeForTopIds=async function(a,f,g){a=c.parseUrl(a);return(await d.executeQueryForTopIds(a,e.from(f),{...g})).data.objectIds};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});