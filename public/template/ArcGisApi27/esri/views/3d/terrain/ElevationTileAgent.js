// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","./TerrainConst","./TileAgent"],function(c,d,g,a){a=function(e){function b(){var f=e.apply(this,arguments)||this;f._scaleRangeEnabled=!1;return f}d._inherits(b,e);d._createClass(b,[{key:"_desiredMinLevelDelta",get:function(){return g.getElevationDesiredResolutionLevel(this.tile.level)-(this.tile.elevationLevel-this.tile.level)}},{key:"_progressiveLevelModulo",get:function(){return 0}}]);return b}(a.TileAgent);c.ElevationTileAgent=a;Object.defineProperty(c,
Symbol.toStringTag,{value:"Module"})});