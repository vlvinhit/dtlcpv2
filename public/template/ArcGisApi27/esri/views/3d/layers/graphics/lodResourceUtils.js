// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../webgl-engine/lib/lodRendering/LodResources"],function(c,d){function e(a){const b=[];a.stageResources.geometries.forEach(f=>{b.push(new d.LodComponentResources(f,a.stageResources.textures))});return{components:b,minScreenSpaceRadius:a.lodThreshold??0,pivotOffset:a.pivotOffset}}c.makeLodResources=function(a){return{levels:a.map(b=>e(b))}};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});