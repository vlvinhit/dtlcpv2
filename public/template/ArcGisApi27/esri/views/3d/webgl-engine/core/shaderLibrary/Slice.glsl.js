// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/mat4 ../../../../../chunks/mat4f64 ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../shaderModules/Float3DrawUniform ../shaderModules/Float3PassUniform ../shaderModules/interfaces".split(" "),function(k,q,y,z,e,g,n,p,f){function r(c,b,...a){if(b.hasSlicePlane){b.hasSliceInVertexProgram&&c.vertex.uniforms.add(...a);c.fragment.uniforms.add(...a);a=f.glsl`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`;var d=f.glsl`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`;d=b.hasSliceHighlight?f.glsl`
        ${d}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:f.glsl`#define highlightSlice(_color_, _pos_) (_color_)`;b.hasSliceInVertexProgram&&c.vertex.code.add(a);c.fragment.code.add(a);c.fragment.code.add(d)}else a=f.glsl`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`,b.hasSliceInVertexProgram&&c.vertex.code.add(a),c.fragment.code.add(a)}function t(c,b,a){return c.instancedDoublePrecision?e.set(A,a.camera.viewInverseTransposeMatrix[3],a.camera.viewInverseTransposeMatrix[7],a.camera.viewInverseTransposeMatrix[11]):b.slicePlaneLocalOrigin}function u(c,b){return null!=c?e.subtract(l,b.origin,c):b.origin}function v(c,b,a){return c.hasSliceTranslatedView?null!=b?y.translate(B,a.camera.viewMatrix,b):a.camera.viewMatrix:
null}function w(c,b,a){if(null==a.slicePlane)return g.ZEROS;const d=t(c,b,a);b=u(d,a.slicePlane);c=v(c,d,a);return null!=c?e.transformMat4(l,b,c):b}function m(c,b,a,d){if(null==d||null==a.slicePlane)return g.ZEROS;const x=t(c,b,a);b=u(x,a.slicePlane);c=v(c,x,a);return null!=c?(e.add(h,d,b),e.transformMat4(l,b,c),e.transformMat4(h,h,c),e.subtract(h,h,l)):d}let C=function(c){function b(a){var d=c.call(this)||this;d.slicePlaneLocalOrigin=a;return d}q._inherits(b,c);return q._createClass(b)}(f.NoParameters);
const A=g.create(),l=g.create(),h=g.create(),B=z.create();k.SliceDraw=function(c,b){r(c,b,new n.Float3DrawUniform("slicePlaneOrigin",(a,d)=>w(b,a,d)),new n.Float3DrawUniform("slicePlaneBasis1",(a,d)=>m(b,a,d,d.slicePlane?.basis1)),new n.Float3DrawUniform("slicePlaneBasis2",(a,d)=>m(b,a,d,d.slicePlane?.basis2)))};k.SlicePass=function(c,b){r(c,b,new p.Float3PassUniform("slicePlaneOrigin",(a,d)=>w(b,a,d)),new p.Float3PassUniform("slicePlaneBasis1",(a,d)=>m(b,a,d,d.slicePlane?.basis1)),new p.Float3PassUniform("slicePlaneBasis2",
(a,d)=>m(b,a,d,d.slicePlane?.basis2)))};k.SlicePlaneParameters=C;Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});