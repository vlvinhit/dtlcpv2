// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../request","../../../core/Error","../../utils","./support/PostResult"],function(e,g,h,d,k){e.post=async function(c,a,b,l){if(!a)throw new h("post:missing-guid","guid for version is missing");c=d.parseUrl(c);const f=b.toJSON();b.rows&&(f.rows=JSON.stringify(b.rows));b=d.asValidOptions(c.query,{query:d.encode({...f,f:"json"}),...l,method:"post"});a.startsWith("{")&&(a=a.slice(1,-1));({data:a}=await g(`${c.path}/versions/${a}/post`,b));return k.fromJSON(a)};Object.defineProperty(e,
Symbol.toStringTag,{value:"Module"})});