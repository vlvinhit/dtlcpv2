/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{id as r}from"../kernel.js";import e from"../request.js";import n from"../portal/Portal.js";function s(r,e){return null===r?e:new n({url:r.field("url")})}async function t(n,s,t){const o=r?.findCredential(n.restUrl);if(!o)return null;if("loaded"===n.loadStatus&&""===s&&n.user&&n.user.sourceJSON&&!1===t)return n.user.sourceJSON;if(""===s){const r=await e(n.restUrl+"/community/self",{responseType:"json",query:{f:"json",...!1===t?{}:{returnUserLicenseTypeExtensions:!0}}});if(r.data){const e=r.data;if(e&&e.username)return e}return null}const u=await e(n.restUrl+"/community/users/"+s,{responseType:"json",query:{f:"json"}});if(u.data){const r=u.data;return r.error?null:r}return null}export{s as g,t as l};
