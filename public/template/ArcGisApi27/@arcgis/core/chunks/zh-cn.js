/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{d as t}from"./calcite-input-time-picker.js";import"./index.js";import"./form.js";import"./dom.js";import"./guid.js";import"./interactive.js";import"./key.js";import"./label2.js";import"./loadable.js";import"./locale2.js";import"./observers.js";import"./focusTrapComponent.js";import"./t9n.js";import"./icon.js";import"./action.js";import"./loader.js";import"./input.js";import"./progress.js";import"./popover2.js";import"./floating-ui.js";import"./debounce.js";import"./openCloseComponent.js";import"./Heading2.js";import"./FloatingArrow.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */
var o={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(t,o){return"W"===o?t+"周":t+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(t,o){var r=100*t+o;return r<600?"凌晨":r<900?"早上":r<1100?"上午":r<1300?"中午":r<1800?"下午":"晚上"}};t.locale(o,null,!0);export{o as default};
