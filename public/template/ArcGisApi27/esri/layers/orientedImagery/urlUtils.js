// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../support/arcgisLayerUrl"],function(b,c){b.isFeatureServiceURL=function(a){return(a=c.parse(a))?({serverType:a}=a,"FeatureServer"===a):!1};b.isImageServiceURL=function(a){return(a=c.parse(a))?({serverType:a}=a,"ImageServer"===a):!1};b.isMapillaryURL=function(a){return a.includes("https://graph.mapillary.com/images")};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});