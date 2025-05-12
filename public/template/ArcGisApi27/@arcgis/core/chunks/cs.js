/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{d as e}from"./calcite-input-time-picker.js";import"./index.js";import"./form.js";import"./dom.js";import"./guid.js";import"./interactive.js";import"./key.js";import"./label2.js";import"./loadable.js";import"./locale2.js";import"./observers.js";import"./focusTrapComponent.js";import"./t9n.js";import"./icon.js";import"./action.js";import"./loader.js";import"./input.js";import"./progress.js";import"./popover2.js";import"./floating-ui.js";import"./debounce.js";import"./openCloseComponent.js";import"./Heading2.js";import"./FloatingArrow.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */
function t(e){return e>1&&e<5&&1!=~~(e/10)}function r(e,r,o,s){var n=e+" ";switch(o){case"s":return r||s?"pár sekund":"pár sekundami";case"m":return r?"minuta":s?"minutu":"minutou";case"mm":return r||s?n+(t(e)?"minuty":"minut"):n+"minutami";case"h":return r?"hodina":s?"hodinu":"hodinou";case"hh":return r||s?n+(t(e)?"hodiny":"hodin"):n+"hodinami";case"d":return r||s?"den":"dnem";case"dd":return r||s?n+(t(e)?"dny":"dní"):n+"dny";case"M":return r||s?"měsíc":"měsícem";case"MM":return r||s?n+(t(e)?"měsíce":"měsíců"):n+"měsíci";case"y":return r||s?"rok":"rokem";case"yy":return r||s?n+(t(e)?"roky":"let"):n+"lety"}}var o={name:"cs",weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),months:"leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),monthsShort:"led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),weekStart:1,yearStart:4,ordinal:function(e){return e+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},relativeTime:{future:"za %s",past:"před %s",s:r,m:r,mm:r,h:r,hh:r,d:r,dd:r,M:r,MM:r,y:r,yy:r}};e.locale(o,null,!0);export{o as default};
