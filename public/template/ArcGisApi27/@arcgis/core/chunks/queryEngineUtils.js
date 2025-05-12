/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{f as e}from"./vec3f64.js";import{h as t}from"./snappingUtils.js";import{D as r}from"./DrapedEdgeSnappingCandidate.js";import{E as n}from"./EdgeSnappingCandidate.js";import{V as a}from"./VertexSnappingCandidate.js";function d({x:r,y:n,z:a}){return t(e(r,n,a??0))}function o(e,t){switch(e.type){case"edge":return e.draped?new r({edgeStart:d(e.start),edgeEnd:d(e.end),targetPoint:d(e.target),objectId:e.objectId,getGroundElevation:t}):new n({edgeStart:d(e.start),edgeEnd:d(e.end),targetPoint:d(e.target),objectId:e.objectId,isDraped:!1});case"vertex":return new a({targetPoint:d(e.target),objectId:e.objectId,isDraped:!1})}}function i(e){return null!=e&&"3d"===e.type?(t,r,n)=>e.elevationProvider.getElevation(t,r,n??0,e.spatialReference,"ground"):()=>null}export{o as c,i as m};
