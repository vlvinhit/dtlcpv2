// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","./index"],function(g,e){const h={width:12,height:6,strokeWidth:1};g.FloatingArrow=({floatingLayout:c,key:k,ref:l})=>{const {width:a,height:f,strokeWidth:d}=h;var b=a/2;c="vertical"===c;b="M0,0"+` H${a}`+` L${a-b},${f}`+` Q${b},${f} ${b},${f}`+" Z";return e.h("svg",{"aria-hidden":"true",class:"calcite-floating-ui-arrow",height:a,key:k,ref:l,viewBox:`0 0 ${a} ${a+(c?0:d)}`,width:a+(c?d:0)},0<d&&e.h("path",{class:"calcite-floating-ui-arrow__stroke",d:b,fill:"none","stroke-width":d+
1}),e.h("path",{d:b,stroke:"none"}))}});