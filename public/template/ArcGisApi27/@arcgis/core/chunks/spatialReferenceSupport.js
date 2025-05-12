/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{r as i}from"./unitUtils.js";import{V as r}from"./ViewingMode.js";function o(o,s){return null!=o&&(null==s||(s===r.Local?!o.isGeographic||o.isWGS84||o.wkid===i.CGCS2000:o.isWebMercator||o.isWGS84||o.wkid===i.CGCS2000||o.wkid===i.GCSMARS2000||o.wkid===i.GCSMARS2000_SPHERE||o.wkid===i.GCSMOON2000))}export{o as i};
