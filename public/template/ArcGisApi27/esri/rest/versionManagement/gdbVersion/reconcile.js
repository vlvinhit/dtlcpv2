// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../request","../../../core/Error","../../utils","./support/ReconcileResult"],function(f,g,h,c,k){f.reconcile=async function(b,a,d,e){if(!a)throw new h("reconcile:missing-guid","guid for version is missing");b=c.parseUrl(b);d=d.toJSON();e=c.asValidOptions(b.query,{query:c.encode({...d,f:"json"}),...e,method:"post"});a.startsWith("{")&&(a=a.slice(1,-1));({data:a}=await g(`${b.path}/versions/${a}/reconcile`,e));return k.fromJSON(a)};Object.defineProperty(f,Symbol.toStringTag,
{value:"Module"})});