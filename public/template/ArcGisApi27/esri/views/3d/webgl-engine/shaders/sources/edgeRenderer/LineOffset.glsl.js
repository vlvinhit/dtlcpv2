// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/_rollupPluginBabelHelpers ../../../core/shaderLibrary/util/RgbaFloatEncoding.glsl ../../../core/shaderModules/FloatDrawUniform ../../../core/shaderModules/interfaces ../../../core/shaderModules/Texture2DDrawUniform ./EdgeUtil.glsl ./UnpackAttributes.glsl".split(" "),function(h,l,n,k,a,m,g,p){let q=function(c){function d(){return c.apply(this,arguments)||this}l._inherits(d,c);return l._createClass(d)}(a.NoParameters);h.LineOffset=function(c,d){c.include(p.UnpackAttributes,
d);const {vertex:e,fragment:f}=c;g.usesSketchLogic(d)&&(e.uniforms.add(new m.Texture2DDrawUniform("strokesTexture",b=>b.strokesTexture.texture)),e.uniforms.add(new k.FloatDrawUniform("strokesLog2Resolution",b=>Math.log2(b.strokesTexture.resolution)),new k.FloatDrawUniform("strokeVariants",b=>b.strokesTexture.variants)),c.varyings.add("vStrokeUV","vec2"),f.uniforms.add(new m.Texture2DDrawUniform("strokesTexture",b=>b.strokesTexture.texture),new k.FloatDrawUniform("strokesNormalizationScale",b=>b.strokesTexture.normalizationScale)),
e.code.add(a.glsl`void calculateStyleOutputsSketch(float lineLength, UnpackedAttributes unpackedAttributes) {
vec2 sidenessNorm = unpackedAttributes.sidenessNorm;
float lineIndex = clamp(ceil(log2(lineLength)), 0.0, strokesLog2Resolution);
vStrokeUV = vec2(exp2(lineIndex) * sidenessNorm.y, lineIndex * strokeVariants + variantStroke + 0.5) / vec2(textureSize(strokesTexture, 0));
vStrokeUV.x += variantOffset;
}`),c.fragment.include(n.RgbaFloatEncoding),f.code.add(a.glsl`float calculateLineOffsetSketch() {
float offsetNorm = rgba2float(texture(strokesTexture, vStrokeUV));
return (offsetNorm - 0.5) * strokesNormalizationScale;
}
float calculateLinePressureSketch() {
return rgba2float(texture(strokesTexture, vStrokeUV + vec2(0.0, 0.5)));
}`));switch(d.mode){case g.EdgeUtilMode.SOLID:e.code.add(a.glsl`void calculateStyleOutputs(UnpackedAttributes unpackedAttributes) {}`);f.code.add(a.glsl`float calculateLineOffset() {
return 0.0;
}
float calculateLinePressure() {
return 1.0;
}`);break;case g.EdgeUtilMode.SKETCH:e.code.add(a.glsl`void calculateStyleOutputs(UnpackedAttributes unpackedAttributes)
{
calculateStyleOutputsSketch(vLineLengthPixels, unpackedAttributes);
}`);f.code.add(a.glsl`float calculateLineOffset() {
return calculateLineOffsetSketch();
}
float calculateLinePressure() {
return calculateLinePressureSketch();
}`);break;case g.EdgeUtilMode.MIXED:c.varyings.add("vType","float"),e.code.add(a.glsl`void calculateStyleOutputs(UnpackedAttributes unpackedAttributes)
{
vType = unpackedAttributes.type;
if (unpackedAttributes.type <= 0.0) {
calculateStyleOutputsSketch(vLineLengthPixels, unpackedAttributes);
}
}`),f.code.add(a.glsl`float calculateLineOffset() {
if (vType <= 0.0) {
return calculateLineOffsetSketch();
}
else {
return 0.0;
}
}
float calculateLinePressure() {
if (vType <= 0.0) {
return calculateLinePressureSketch();
}
else {
return 1.0;
}
}`)}};h.LineOffsetDrawParameters=q;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});