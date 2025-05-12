/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{d as r}from"./calcite-input-time-picker.js";import"./index.js";import"./form.js";import"./dom.js";import"./guid.js";import"./interactive.js";import"./key.js";import"./label2.js";import"./loadable.js";import"./locale2.js";import"./observers.js";import"./focusTrapComponent.js";import"./t9n.js";import"./icon.js";import"./action.js";import"./loader.js";import"./input.js";import"./progress.js";import"./popover2.js";import"./floating-ui.js";import"./debounce.js";import"./openCloseComponent.js";import"./Heading2.js";import"./FloatingArrow.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */
function t(r){return r>1&&r<5&&1!=~~(r/10)}function e(r,e,o,s){var i=r+" ";switch(o){case"s":return e||s?"pár sekúnd":"pár sekundami";case"m":return e?"minúta":s?"minútu":"minútou";case"mm":return e||s?i+(t(r)?"minúty":"minút"):i+"minútami";case"h":return e?"hodina":s?"hodinu":"hodinou";case"hh":return e||s?i+(t(r)?"hodiny":"hodín"):i+"hodinami";case"d":return e||s?"deň":"dňom";case"dd":return e||s?i+(t(r)?"dni":"dní"):i+"dňami";case"M":return e||s?"mesiac":"mesiacom";case"MM":return e||s?i+(t(r)?"mesiace":"mesiacov"):i+"mesiacmi";case"y":return e||s?"rok":"rokom";case"yy":return e||s?i+(t(r)?"roky":"rokov"):i+"rokmi"}}var o={name:"sk",weekdays:"nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_št_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_št_pi_so".split("_"),months:"január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),monthsShort:"jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"),weekStart:1,yearStart:4,ordinal:function(r){return r+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},relativeTime:{future:"za %s",past:"pred %s",s:e,m:e,mm:e,h:e,hh:e,d:e,dd:e,M:e,MM:e,y:e,yy:e}};r.locale(o,null,!0);export{o as default};
