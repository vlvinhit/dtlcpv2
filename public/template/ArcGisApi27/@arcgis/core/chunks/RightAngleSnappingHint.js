/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{h as e}from"./vec3.js";import{S as t,a as s}from"./LineSnappingHint.js";import"./typedArrayUtil.js";import"./Logger.js";class r extends t{constructor(e,t,r=s.ALL){super(t,r),this.intersectionPoint=e}equals(t){return t instanceof r&&e(this.intersectionPoint,t.intersectionPoint)}}class n extends t{constructor(e,t,r,n=s.ALL){super(r,n),this.lineStart=e,this.lineEnd=t}equals(t){return t instanceof n&&e(this.lineStart,t.lineStart)&&e(this.lineEnd,t.lineEnd)}}class i extends t{constructor(e,t,r,n,i=s.ALL){super(n,i),this.previousVertex=e,this.centerVertex=t,this.nextVertex=r}equals(t){return t instanceof i&&e(this.previousVertex,t.previousVertex)&&e(this.centerVertex,t.centerVertex)&&e(this.nextVertex,t.nextVertex)}}export{r as I,n as P,i as R};
