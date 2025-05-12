// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["../../../chunks/_rollupPluginBabelHelpers","../layers/support/PerformanceInfoLayerView","../terrain/terrainUtils"],function(b,c,d){return b._createClass(function(a,e){this.layer=null;this.displayedNumberOfFeatures=this.memory=0;this.totalNumberOfFeatures=this.maximumNumberOfFeatures=null;this.layer=a.layer;this.memory=d.isSurfaceLayerView(a)?e.basemapTerrain.getUsedMemoryForLayerView(a):a.usedMemory;c.isPerformanceInfoLayerView(a)&&(a=a.performanceInfo,this.displayedNumberOfFeatures=a.displayedNumberOfFeatures,
this.maximumNumberOfFeatures=a.maximumNumberOfFeatures,this.totalNumberOfFeatures=a.totalNumberOfFeatures)})});