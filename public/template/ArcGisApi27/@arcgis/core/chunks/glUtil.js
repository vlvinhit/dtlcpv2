/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{D as t}from"./enums3.js";import{V as e}from"./VertexElementDescriptor.js";function r(t,r=0){const n=t.stride;return Array.from(t.fields.keys()).filter((e=>{const r=t.fields.get(e)?.optional;return!(r&&r.glPadding)})).map((s=>{const i=t.fields.get(s),f=i.constructor.ElementCount,u=function(t){const e=o[t];if(e)return e;throw new Error("BufferType not supported in WebGL")}(i.constructor.ElementType),l=i.offset,c=!(!i.optional||!i.optional.glNormalized);return new e(s,f,u,l,n,c,r)}))}const o={u8:t.UNSIGNED_BYTE,u16:t.UNSIGNED_SHORT,u32:t.UNSIGNED_INT,i8:t.BYTE,i16:t.SHORT,i32:t.INT,f32:t.FLOAT};export{r as g};
