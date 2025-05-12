/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as r}from"./tslib.es6.js";import"./Logger.js";import"./ensureType.js";import"./typedArrayUtil.js";import"../core/Error.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import{W as s}from"./enums4.js";import{G as t}from"./BaseGraphicContainer.js";import{i}from"./enums3.js";let o=class extends t{doRender(r){r.drawPhase===s.HIGHLIGHT&&super.doRender(r)}renderChildren(r){if(this.attributeView.update(),!this.children.some((r=>r.hasData)))return;this.attributeView.bindTextures(r.context),super.renderChildren(r);const{painter:e}=r,s=e.effects.highlight;s.bind(r),r.context.setColorMask(!0,!0,!0,!0),r.context.clear(i.COLOR_BUFFER_BIT),this._renderChildren(r,s.defines.concat(["highlightAll"])),s.draw(r),s.unbind()}};o=r([e("esri.views.2d.layers.support.HighlightGraphicContainer")],o);const n=o;export{n as H};
