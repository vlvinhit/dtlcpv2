// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers","../LRUCache","./WhereClause"],function(d,k,e,l){let m=function(){function f(a,b){this._cache=new e.LRUCache(a);this._invalidCache=new e.LRUCache(b)}f.prototype.get=function(a,b){const c=`${b.uid}:${a}`,g=this._cache.get(c);if(g)return g;if(void 0!==this._invalidCache.get(c))return null;try{const h=l.WhereClause.create(a,b);this._cache.put(c,h);return h}catch{return this._invalidCache.put(c,null),null}};return k._createClass(f)}();d.WhereClauseCache=
m;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});