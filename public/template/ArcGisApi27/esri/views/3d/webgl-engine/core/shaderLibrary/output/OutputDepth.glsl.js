// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../ShaderOutput","../util/RgbaFloatEncoding.glsl","../../shaderModules/interfaces"],function(c,a,e,d){c.OutputDepth=function(b,f){b.fragment.include(e.RgbaFloatEncoding);switch(f.output){case a.ShaderOutput.Shadow:case a.ShaderOutput.ShadowHighlight:case a.ShaderOutput.ShadowExcludeHighlight:b.fragment.code.add(d.glsl`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
fragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`);break;case a.ShaderOutput.Depth:b.fragment.code.add(d.glsl`void outputDepth(float _linearDepth) {
fragColor = float2rgba(_linearDepth);
}`)}};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});