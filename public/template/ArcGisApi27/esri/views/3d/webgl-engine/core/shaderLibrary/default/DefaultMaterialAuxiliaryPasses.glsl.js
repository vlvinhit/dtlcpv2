// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/mat3 ../../../../../../chunks/mat3f64 ../../../../../../chunks/mat4f64 ../ForwardLinearDepth.glsl ../ShaderOutput ../Slice.glsl ../Transform.glsl ../attributes/NormalAttribute.glsl ../attributes/ObjectAndLayerIdColor.glsl ../attributes/TextureCoordinateAttribute.glsl ../attributes/VertexNormal.glsl ../output/OutputDepth.glsl ../output/OutputHighlight.glsl ../shading/VisualVariables.glsl ../util/AlphaDiscard.glsl ../util/View.glsl ../../shaderModules/interfaces ../../shaderModules/Matrix3PassUniform ../../shaderModules/Matrix4PassUniform ../../shaderModules/Texture2DPassUniform ../../../lib/basicInterfaces".split(" "),
function(w,y,z,x,A,d,m,n,k,B,p,C,D,E,q,r,t,c,F,G,u,H){w.DefaultMaterialAuxiliaryPasses=function(b,a){const {vertex:e,fragment:g}=b,l=a.hasModelTransformation;if(l){const f=z.create();e.uniforms.add(new G.Matrix4PassUniform("model",v=>v.modelTransformation??x.IDENTITY));e.uniforms.add(new F.Matrix3PassUniform("normalTransform",v=>{y.normalFromMat4(f,v.modelTransformation??x.IDENTITY);return f}))}const h=a.hasColorTexture&&a.alphaDiscardMode!==H.AlphaDiscardMode.Opaque;switch(a.output){case d.ShaderOutput.Depth:case d.ShaderOutput.Shadow:case d.ShaderOutput.ShadowHighlight:case d.ShaderOutput.ShadowExcludeHighlight:case d.ShaderOutput.ObjectAndLayerIdColor:t.addProjViewLocalOrigin(e,
a);b.include(n.Transform,a);b.include(p.TextureCoordinateAttribute,a);b.include(q.VisualVariables,a);b.include(D.OutputDepth,a);b.include(m.SliceDraw,a);b.include(B.ObjectAndLayerIdColor,a);A.addNearFar(b);b.varyings.add("depth","float");h&&g.uniforms.add(new u.Texture2DPassUniform("tex",f=>f.texture));e.code.add(c.glsl`
          void main(void) {
            vpos = calculateVPos();
            ${l?"vpos \x3d (model * vec4(vpos, 1.0)).xyz;":""}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
            forwardTextureCoordinates();
            forwardObjectAndLayerIdColor();
          }
        `);b.include(r.DiscardOrAdjustAlphaPass,a);g.code.add(c.glsl`
          void main(void) {
            discardBySlice(vpos);
            ${h?c.glsl`
                    vec4 texColor = texture(tex, ${a.hasColorTextureTransform?c.glsl`colorUV`:c.glsl`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${a.output===d.ShaderOutput.ObjectAndLayerIdColor?c.glsl`outputObjectAndLayerIdColor();`:c.glsl`outputDepth(depth);`}
          }
        `);break;case d.ShaderOutput.Normal:t.addProjViewLocalOrigin(e,a);b.include(n.Transform,a);b.include(k.NormalAttribute,a);b.include(C.VertexNormal,a);b.include(p.TextureCoordinateAttribute,a);b.include(q.VisualVariables,a);h&&g.uniforms.add(new u.Texture2DPassUniform("tex",f=>f.texture));a.normalType===k.NormalType.ScreenDerivative&&b.varyings.add("vPositionView","vec3");e.code.add(c.glsl`
          void main(void) {
            vpos = calculateVPos();
            ${l?"vpos \x3d (model * vec4(vpos, 1.0)).xyz;":""}

            ${a.normalType===k.NormalType.Attribute||a.normalType===k.NormalType.Compressed?c.glsl`vNormalWorld = ${l?"normalize(normalTransform * dpNormal(vvLocalNormal(normalModel())))":"dpNormalView(vvLocalNormal(normalModel()))"};`:c.glsl`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `);b.include(m.SliceDraw,a);b.include(r.DiscardOrAdjustAlphaPass,a);g.code.add(c.glsl`
          void main() {
            discardBySlice(vpos);
            ${h?c.glsl`
                    vec4 texColor = texture(tex, ${a.hasColorTextureTransform?c.glsl`colorUV`:c.glsl`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${a.normalType===k.NormalType.ScreenDerivative?c.glsl`vec3 normal = screenDerivativeNormal(vPositionView);`:c.glsl`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break;case d.ShaderOutput.Highlight:t.addProjViewLocalOrigin(e,a),b.include(n.Transform,a),b.include(p.TextureCoordinateAttribute,a),b.include(q.VisualVariables,a),h&&g.uniforms.add(new u.Texture2DPassUniform("tex",f=>f.texture)),e.code.add(c.glsl`
          void main(void) {
            vpos = calculateVPos();
            ${l?"vpos \x3d (model * vec4(vpos, 1.0)).xyz;":""}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),b.include(m.SliceDraw,a),b.include(r.DiscardOrAdjustAlphaPass,a),b.include(E.OutputHighlight,a),g.code.add(c.glsl`
          void main() {
            discardBySlice(vpos);
            ${h?c.glsl`
                    vec4 texColor = texture(tex, ${a.hasColorTextureTransform?c.glsl`colorUV`:c.glsl`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}};Object.defineProperty(w,Symbol.toStringTag,{value:"Module"})});