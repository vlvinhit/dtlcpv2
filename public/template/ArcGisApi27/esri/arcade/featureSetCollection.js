// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["../chunks/_rollupPluginBabelHelpers"],function(f){return function(){function e(){this.declaredRootClass="esri.arcade.featureSetCollection";this._layerById={};this._layerByName={}}var b=e.prototype;b.add=function(a,d,c){this._layerById[d]=c;this._layerByName[a]=c};b.featureSetByName=async function(a,d,c){return void 0===this._layerByName[a]?null:this._layerByName[a]};b.featureSetById=async function(a,d,c){return void 0===this._layerById[a]?null:this._layerById[a]};b.castToText=function(a){return"object, FeatureSetCollection"};
return f._createClass(e)}()});