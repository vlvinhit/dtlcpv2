/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as r}from"./tslib.es6.js";import{JSONSupport as o}from"../core/JSONSupport.js";import{property as t}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./typedArrayUtil.js";import{e as s}from"./enumeration.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import{e as p}from"./date.js";let a=class extends o{constructor(r){super(r),this.dateFormat=null,this.digitSeparator=!1,this.places=null}};r([s(p)],a.prototype,"dateFormat",void 0),r([t()],a.prototype,"digitSeparator",void 0),r([t()],a.prototype,"places",void 0),a=r([e("esri.widgets.FeatureForm.Format")],a);const i=a;export{i as F};
