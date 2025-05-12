/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{N as t}from"./NestedMap.js";import{P as s}from"./Program.js";class r{constructor(s){this._rctx=s,this._store=new t}dispose(){this._store.forEach((t=>t.forEach((t=>t.dispose())))),this._store.clear()}acquire(t,r,e,o){const c=this._store.get(t,r);if(null!=c)return c.ref(),c;const a=new s(this._rctx,t,r,e,o);return a.ref(),this._store.set(t,r,a),a}get test(){let t=0;return this._store.forEach((s=>s.forEach((s=>t+=s.hasGLName?2:1)))),{cachedWebGLObjects:t}}}export{r as P};
