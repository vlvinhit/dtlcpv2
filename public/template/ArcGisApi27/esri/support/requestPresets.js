// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../request"],function(b,d){b.fetchArcGISServiceJSON=async function(a,c){({data:a}=await d(a,{responseType:"json",query:{f:"json",...c?.customParameters,token:c?.apiKey}}));return a};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});