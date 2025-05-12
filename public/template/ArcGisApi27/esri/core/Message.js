// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["../chunks/_rollupPluginBabelHelpers","./object"],function(e,f){function g(c,d){return c.replaceAll(/\$\{([^\s:\}]*)(?::([^\s:\}]+))?\}/g,(a,b)=>{if(""===b)return"$";a=f.getDeepValue(b,d);return(null==a?"":a).toString()})}return function(){function c(d,a,b){this.name=d;this.details=b;this.message=(a&&g(a,b))??""}c.prototype.toString=function(){return"["+this.name+"]: "+this.message};return e._createClass(c)}()});