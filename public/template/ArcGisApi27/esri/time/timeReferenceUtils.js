// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","./legacyTimeZoneMap","../chunks/datetime"],function(c,d,e){c.convertLegacyTimeZone=function(a,b="system"){if(!a||!d.legacyTimeZoneMap.has(a.timeZone))return b;b=d.legacyTimeZoneMap.get(a.timeZone);if(a.timeZone.startsWith("UTC")||a.respectsDaylightSaving)return b;a=e.DateTime.local().setZone(b);a=Math.min(a.set({month:1,day:1}).offset,a.set({month:5}).offset);a=0===a?"Etc/UTC":`Etc/GMT${e.FixedOffsetZone.instance(-a).formatOffset(0,"narrow")}`;return a};Object.defineProperty(c,
Symbol.toStringTag,{value:"Module"})});