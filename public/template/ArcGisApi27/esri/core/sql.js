// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(d,c){c.parseWhereClause=async function(a,b){const {WhereClause:e}=await new Promise((f,g)=>d(["./sql/WhereClause"],f,g));return e.create(a,b)};c.sqlAnd=function(a,b){return null!=a?null!=b?`(${a}) AND (${b})`:a:b};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});