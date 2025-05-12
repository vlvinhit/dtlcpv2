/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import n from"../Color.js";import o from"../config.js";import{getColorLuminance as r}from"../views/support/colorUtils.js";function t(o){return r(o,{ignoreAlpha:!0})>225?new n([0,0,0,o.a]):new n([255,255,255,o.a])}function e(o,r){const t=new n(o);return t.a*=r,t}function a(n=1){return e(o.analysisTheme.accentColor,n)}function s(n=1){return t(a(n))}function i(n=1){return e(o.analysisTheme.accentColor,n).a}function c(n=1){return e(o.analysisTheme.textColor,n)}function u(n=1){return t(c(n))}export{s as a,u as b,c,i as d,a as g};
