// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["../../../core/Logger"],function(c){return function(a,b,d){if(null==a)return null;b=b.readArcadeFeature();try{return a.evaluate({...d,$feature:b},a.services)}catch(e){return c.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",e),null}}});