// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","./FeatureReduction","./FeatureReductionBinning","./FeatureReductionCluster","./FeatureReductionSelection"],function(b,a,c,d,e){const f={key:"type",base:a.FeatureReduction,typeMap:{cluster:d,binning:c}};b.featureReductionProperty={types:{key:"type",base:a.FeatureReduction,typeMap:{selection:e,cluster:d,binning:c}},json:{name:"layerDefinition.featureReduction",write:{allowNull:!0},origins:{"web-map":{types:f},"portal-item":{types:f},"web-scene":{types:{key:"type",base:a.FeatureReduction,
typeMap:{selection:e}}}}}};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});