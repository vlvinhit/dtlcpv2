/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{toLocalTimeExtent as e,toUTCTimeExtent as t}from"../support/timeUtils.js";function i(i,n,s){if(null==i?.timeInfo)return null;const{datesInUnknownTimezone:l=!1,timeOffset:o,useViewTime:m}=i;let u=i.timeExtent;l&&(u=e(u));let r=m?n&&u?n.intersection(u):n||u:u;return!r||r.isEmpty||r.isAllTime?r:(o&&(r=r.offset(-o.value,o.unit)),l&&(r=t(r)),r.equals(s)?s:r)}export{i as c};
