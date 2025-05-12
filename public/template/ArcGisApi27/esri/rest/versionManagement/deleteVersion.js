// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["require","exports","../../request","../utils"],function(f,e,g,c){e.deleteVersion=async function(a,d,b){a=c.parseUrl(a);await (await new Promise((h,k)=>f(["../../identity/IdentityManager"],l=>h(Object.freeze(Object.defineProperty({__proto__:null,default:l},Symbol.toStringTag,{value:"Module"}))),k))).default.getCredential(a.path);d=d.toJSON();b=c.asValidOptions(a.query,{query:c.encode({...d,f:"json"}),...b,method:"post"});({data:b}=await g(`${a.path}/delete`,b));return b.success};Object.defineProperty(e,
Symbol.toStringTag,{value:"Module"})});