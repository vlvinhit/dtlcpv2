// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/Collection ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass ./FeatureSnappingLayerSource ./Settings".split(" "),function(f,b,a,g,c,n,p,q,l,m,h){a=function(k){function e(d){d=k.call(this,d)||this;d.enabled=!1;d.enabledToggled=!1;d.selfEnabled=!0;d.featureEnabled=
!0;d.featureSources=new g;d.distance=h.defaults.distance;d.touchSensitivityMultiplier=h.defaults.touchSensitivityMultiplier;return d}f._inherits(e,k);f._createClass(e,[{key:"effectiveEnabled",get:function(){return this.enabledToggled?!this.enabled:this.enabled}},{key:"effectiveSelfEnabled",get:function(){return this.effectiveEnabled&&this.selfEnabled}},{key:"effectiveFeatureEnabled",get:function(){return this.effectiveEnabled&&this.featureEnabled}}]);return e}(a);b.__decorate([c.property()],a.prototype,
"enabled",void 0);b.__decorate([c.property()],a.prototype,"enabledToggled",void 0);b.__decorate([c.property()],a.prototype,"selfEnabled",void 0);b.__decorate([c.property()],a.prototype,"featureEnabled",void 0);b.__decorate([c.property({type:g.ofType(m)})],a.prototype,"featureSources",void 0);b.__decorate([c.property()],a.prototype,"distance",void 0);b.__decorate([c.property()],a.prototype,"touchSensitivityMultiplier",void 0);b.__decorate([c.property({readOnly:!0})],a.prototype,"effectiveEnabled",
null);b.__decorate([c.property({readOnly:!0})],a.prototype,"effectiveSelfEnabled",null);b.__decorate([c.property({readOnly:!0})],a.prototype,"effectiveFeatureEnabled",null);return a=b.__decorate([l.subclass("esri.views.interactive.snapping.SnappingOptions")],a)});