// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){function f(a,c){a%=c;return 0<=a?a:a+c}const k=Number.POSITIVE_INFINITY,e=Math.PI,g=128/e,h=256/360,l=1/Math.LN2;b.C_2PI=2*e;b.C_DEG_TO_256=h;b.C_DEG_TO_RAD=e/180;b.C_INFINITY=k;b.C_PI=e;b.C_RAD_TO_256=g;b.between=function(a,c,d){return a>=c&&a<=d||a>=d&&a<=c};b.degToByte=function(a){return f(a*h,256)};b.interpolate=function(a,c,d){return a*(1-d)+c*d};b.log2=function(a){return Math.log(a)*l};b.positiveMod=f;b.radToByte=function(a){return f(a*g,256)};b.sqr=function(a){return a*
a};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});