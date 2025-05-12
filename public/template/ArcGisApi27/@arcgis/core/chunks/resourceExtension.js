/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{getPathExtension as i}from"../core/urlUtils.js";function t(t){return p[function(t){return t instanceof Blob?t.type:function(t){const p=i(t);return o[p]||n}(t.url)}(t)]||a}const p={},n="text/plain",a=p[n],o={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const i in o)p[o[i]]=i;export{t as g};
