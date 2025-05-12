// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../Color","../config","../views/support/colorUtils"],function(b,c,d,k){function f(a){return 225<k.getColorLuminance(a,{ignoreAlpha:!0})?new c([0,0,0,a.a]):new c([255,255,255,a.a])}function e(a,l){a=new c(a);a.a*=l;return a}function g(a=1){return e(d.analysisTheme.accentColor,a)}function h(a=1){return e(d.analysisTheme.textColor,a)}b.getAccentColor=g;b.getContrastColor=function(a=1){return f(g(a))};b.getOpacity=function(a=1){return e(d.analysisTheme.accentColor,a).a};b.getTextColor=
h;b.getTextHaloColor=function(a=1){return f(h(a))};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});