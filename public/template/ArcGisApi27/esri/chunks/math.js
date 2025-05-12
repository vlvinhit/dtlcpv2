// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){const c=new RegExp(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);b.clamp=(a,d,e)=>Math.max(d,Math.min(a,e));b.decimalPlaces=a=>(a=(""+a).match(c))?Math.max(0,(a[1]?a[1].length:0)-(a[2]?+a[2]:0)):0});