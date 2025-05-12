/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{F as t,D as n}from"./EdgeSnappingCandidate.js";import{L as s}from"./snappingUtils.js";import{L as i}from"./LineSnappingHint.js";class a extends t{constructor(t){super({...t,isDraped:!0,constraint:new n(t.edgeStart,t.edgeEnd,t.getGroundElevation)})}get hints(){return[new i(s.REFERENCE,this.constraint.start,this.constraint.end,this.isDraped,this.domain)]}}export{a as D};
