/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{F as t,P as n}from"./EdgeSnappingCandidate.js";import{P as s}from"./PointSnappingHint.js";class i extends t{constructor(t){super({...t,constraint:new n(t.targetPoint)})}get hints(){return[new s(this.targetPoint,this.isDraped,this.domain)]}}export{i as V};
