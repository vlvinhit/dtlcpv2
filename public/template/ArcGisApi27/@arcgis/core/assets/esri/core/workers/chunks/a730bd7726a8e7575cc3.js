"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[7557],{7489:(e,t,r)=>{r.d(t,{d:()=>i,s:()=>o});const i=.1,o=.001},62610:(e,t,r)=>{r.d(t,{A:()=>i});class i{constructor(e,t,r=!1,i=t){this.data=e,this.size=t,this.exclusive=r,this.stride=i}}},13457:(e,t,r)=>{var i;r.d(t,{B:()=>i}),function(e){e[e.KILOBYTES=1024]="KILOBYTES",e[e.MEGABYTES=1048576]="MEGABYTES",e[e.GIGABYTES=1073741824]="GIGABYTES"}(i||(i={}))},55542:(e,t,r)=>{r.r(t),r.d(t,{C:()=>N,D:()=>U});var i=r(26923),o=r(16912),n=r(57532),a=r(1280),s=r(94485),l=r(503),c=r(63991),u=r(28028),d=r(41169),h=r(81409),m=r(99977),f=r(28579),p=r(44600),g=r(52978),v=r(85633),_=r(52050),T=r(96457),x=r(99520),b=r(80292),S=r(49977),E=r(88557),A=r(75308),C=r(17303),R=r(7489),w=r(81733),y=r(48218),M=r(72958),O=r(51947),P=r(40869),I=r(11939);function N(e,t){const r=e.fragment;t.hasVertexTangents?(e.attributes.add(x.V.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===p.N.WindingOrder?r.code.add(g.g`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(g.g`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):r.code.add(g.g`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),t.textureCoordinateType!==h.d.None&&(e.include(h.V,t),r.uniforms.add(t.pbrTextureBindType===T.B.Pass?new _.T("normalTexture",(e=>e.textureNormal)):new v.T("normalTexture",(e=>e.textureNormal))),r.code.add(g.g`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;
return tangentSpace * rawNormal;
}`))}function L(e){e.vertex.uniforms.add(new A.M("colorTextureTransformMatrix",(e=>null!=e.colorTextureTransformMatrix?e.colorTextureTransformMatrix:(0,E.c)()))),e.varyings.add("colorUV","vec2"),e.vertex.code.add(g.g`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function D(e){e.vertex.uniforms.add(new A.M("normalTextureTransformMatrix",(e=>null!=e.normalTextureTransformMatrix?e.normalTextureTransformMatrix:(0,E.c)()))),e.varyings.add("normalUV","vec2"),e.vertex.code.add(g.g`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function F(e){e.vertex.uniforms.add(new A.M("emissiveTextureTransformMatrix",(e=>null!=e.emissiveTextureTransformMatrix?e.emissiveTextureTransformMatrix:(0,E.c)()))),e.varyings.add("emissiveUV","vec2"),e.vertex.code.add(g.g`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function B(e){e.vertex.uniforms.add(new A.M("occlusionTextureTransformMatrix",(e=>null!=e.occlusionTextureTransformMatrix?e.occlusionTextureTransformMatrix:(0,E.c)()))),e.varyings.add("occlusionUV","vec2"),e.vertex.code.add(g.g`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function V(e){e.vertex.uniforms.add(new A.M("metallicRoughnessTextureTransformMatrix",(e=>null!=e.metallicRoughnessTextureTransformMatrix?e.metallicRoughnessTextureTransformMatrix:(0,E.c)()))),e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.code.add(g.g`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}const U=Object.freeze(Object.defineProperty({__proto__:null,build:function(e){const t=new T.S,{vertex:r,fragment:v,varyings:E}=t;if((0,w.a)(r,e),t.include(a.P),E.add("vpos","vec3"),t.include(C.V,e),t.include(s.I,e),t.include(f.V,e),e.hasColorTextureTransform&&t.include(L),e.output===l.S.Color||e.output===l.S.Alpha){e.hasNormalTextureTransform&&t.include(D),e.hasEmissionTextureTransform&&t.include(F),e.hasOcclusionTextureTransform&&t.include(B),e.hasMetallicRoughnessTextureTransform&&t.include(V),(0,w.c)(r,e),t.include(d.N,e),t.include(u.T,e);const l=e.normalType===d.b.Attribute||e.normalType===d.b.Compressed;l&&e.offsetBackfaces&&t.include(s.O),t.include(N,e),t.include(d.c,e),e.instancedColor&&t.attributes.add(x.V.INSTANCECOLOR,"vec4"),E.add("vPositionLocal","vec3"),t.include(h.T,e),t.include(a.F,e),t.include(s.S,e),t.include(m.V,e),r.uniforms.add(new M.F("externalColor",(e=>e.externalColor))),E.add("vcolorExt","vec4"),e.hasMultipassTerrain&&E.add("depth","float");const c=e.hasModelTransformation;if(c){const e=(0,o.c)();r.uniforms.add(new P.M("model",(e=>e.modelTransformation??n.I))),r.uniforms.add(new A.M("normalTransform",(t=>((0,i.n)(e,t.modelTransformation??n.I),e))))}r.code.add(g.g`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${g.g.float(R.s)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          ${c?"vpos = (model * vec4(vpos, 1.0)).xyz;":""}
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${l?g.g`vNormalWorld = ${c?"normalize(normalTransform * dpNormal(vvLocalNormal(normalModel())))":"dpNormal(vvLocalNormal(normalModel()))"};`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${l&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${e.hasColorTextureTransform?g.g`forwardColorUV();`:""}
        ${e.hasNormalTextureTransform?g.g`forwardNormalUV();`:""}
        ${e.hasEmissionTextureTransform?g.g`forwardEmissiveUV();`:""}
        ${e.hasOcclusionTextureTransform?g.g`forwardOcclusionUV();`:""}
        ${e.hasMetallicRoughnessTextureTransform?g.g`forwardMetallicRoughnessUV();`:""}
      }
    `)}switch(e.output){case l.S.Alpha:t.include(c.S,e),t.include(s.b,e),t.include(S.m,e),v.uniforms.add(new O.F("opacity",(e=>e.opacity)),new O.F("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&v.uniforms.add(new _.T("tex",(e=>e.texture))),v.include(s.M),v.code.add(g.g`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?g.g`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?g.g`colorUV`:g.g`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:g.g`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?g.g`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:g.g`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        fragColor = vec4(opacity_);
      }
    `);break;case l.S.Color:t.include(c.S,e),t.include(b.E,e),t.include(b.a,e),t.include(s.b,e),t.include(e.instancedDoublePrecision?h.h:h.R,e),t.include(S.m,e),(0,w.c)(v,e),v.uniforms.add(r.uniforms.get("localOrigin"),new y.F("ambient",(e=>e.ambient)),new y.F("diffuse",(e=>e.diffuse)),new O.F("opacity",(e=>e.opacity)),new O.F("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&v.uniforms.add(new _.T("tex",(e=>e.texture))),t.include(h.g,e),t.include(h.j,e),v.include(s.M),t.include(p.a,e),(0,b.b)(v),(0,b.c)(v),(0,h.b)(v),v.code.add(g.g`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?g.g`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?g.g`colorUV`:g.g`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:g.g`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===d.b.ScreenDerivative?g.g`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:g.g`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===h.P.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${e.receiveShadows?"readShadowMap(vpos, linearDepth)":e.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?g.g`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:g.g`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?g.g`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${e.hasNormalTextureTransform?g.g`normalUV`:"vuv0"});`:g.g`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?g.g`normalize(posWorld);`:g.g`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?g.g`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===h.P.Normal||e.pbrMode===h.P.Schematic?g.g`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?g.g`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:g.g`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===I.T.Color?g.g`fragColor = premultiplyAlpha(fragColor);`:""}
      }
    `)}return t.include(s.c,e),t}},Symbol.toStringTag,{value:"Module"}))},80292:(e,t,r)=>{r.d(t,{E:()=>G,a:()=>B,b:()=>V,c:()=>U});var i=r(48190),o=r(81409),n=r(52978),a=r(52050),s=(r(82426),r(72836),r(66106)),l=(r(6906),r(47880),r(13159)),c=r(99520),u=r(51006),d=r(59696),h=r(48578),m=r(92143),f=r(71252),p=r(10638),g=r(60218);const v=m.L.getLogger("esri.views.webgl.BufferObject");class _{static createIndex(e,t,r){return new _(e,u.B.ELEMENT_ARRAY_BUFFER,t,r)}static createVertex(e,t,r){return new _(e,u.B.ARRAY_BUFFER,t,r)}static createUniform(e,t,r){if(e.type!==g.C.WEBGL2)throw new Error("Uniform buffers are supported in WebGL2 only!");return new _(e,u.B.UNIFORM_BUFFER,t,r)}static createPixelPack(e,t=u.U.STREAM_READ,r){if(e.type!==g.C.WEBGL2)throw new Error("Pixel pack buffers are supported in WebGL2 only!");const i=new _(e,u.B.PIXEL_PACK_BUFFER,t);return r&&i.setSize(r),i}static createPixelUnpack(e,t=u.U.STREAM_DRAW,r){if(e.type!==g.C.WEBGL2)throw new Error("Pixel unpack buffers are supported in WebGL2 only!");return new _(e,u.B.PIXEL_UNPACK_BUFFER,t,r)}constructor(e,t,r,i){this._context=e,this.bufferType=t,this.usage=r,this._glName=null,this._size=-1,this._indexType=void 0,e.instanceCounter.increment(u.d.BufferObject,this),this._glName=this._context.gl.createBuffer(),(0,p.c)(this._context.gl),i&&this.setData(i)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get byteLength(){return this.bufferType===u.B.ELEMENT_ARRAY_BUFFER?this._indexType===u.D.UNSIGNED_INT?4*this._size:2*this._size:this._size}get _isVAOAware(){return this.bufferType===u.B.ELEMENT_ARRAY_BUFFER||this.bufferType===u.B.ARRAY_BUFFER}dispose(){this._context?.gl?(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(u.d.BufferObject,this),this._context=(0,f.n)(this._context)):this._glName&&v.warn("Leaked WebGL buffer object")}setSize(e,t=null){if(e<=0&&v.error("Buffer size needs to be positive!"),this.bufferType===u.B.ELEMENT_ARRAY_BUFFER&&null!=t)switch(this._indexType=t,t){case u.D.UNSIGNED_SHORT:e*=2;break;case u.D.UNSIGNED_INT:e*=4}this._setBufferData(e)}setData(e){if(!e)return;let t=e.byteLength;this.bufferType===u.B.ELEMENT_ARRAY_BUFFER&&((0,h.e)(e)&&(t/=2,this._indexType=u.D.UNSIGNED_SHORT),(0,h.g)(e)&&(t/=4,this._indexType=u.D.UNSIGNED_INT)),this._setBufferData(t,e)}_setBufferData(e,t=null){this._size=e;const r=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const i=this._context.gl;null!=t?i.bufferData(this.bufferType,t,this.usage):i.bufferData(this.bufferType,e,this.usage),(0,p.c)(i),this._isVAOAware&&this._context.bindVAO(r)}setSubData(e,t,r,i){if(!e)return;(t<0||t*e.BYTES_PER_ELEMENT>=this.byteLength)&&v.error("offset is out of range!"),r>=i&&v.error("end must be bigger than start!"),(t+(i-r))*e.BYTES_PER_ELEMENT>this.byteLength&&v.error("An attempt to write beyond the end of the buffer!");const o=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const n=this._context.gl;if(this._context.type===g.C.WEBGL2)n.bufferSubData(this.bufferType,t*e.BYTES_PER_ELEMENT,e,r,i-r);else{const o=0===r&&i===e.length?e:e.subarray(r,i);n.bufferSubData(this.bufferType,t*e.BYTES_PER_ELEMENT,o)}(0,p.c)(n),this._isVAOAware&&this._context.bindVAO(o)}getSubData(e,t=0,r,i){if(this._context.type!==g.C.WEBGL2)return void v.error("Get buffer subdata is supported in WebGL2 only!");if(r<0||i<0)return void v.error("Problem getting subdata: offset and length were less than zero!");const o=(0,h.y)(e)?e.BYTES_PER_ELEMENT:1;if(o*((r??0)+(i??0))>e.byteLength)return void v.error("Problem getting subdata: offset and length exceeded destination size!");t+o*(i??0)>this.byteLength&&v.warn("Potential problem getting subdata: requested data exceeds buffer size!");const n=this._context.gl;this._context.bindBuffer(this,u.B.COPY_READ_BUFFER),n.getBufferSubData(u.B.COPY_READ_BUFFER,t,e,r,i),this._context.unbindBuffer(u.B.COPY_READ_BUFFER)}async getSubDataAsync(e,t=0,r,i){this._context.type===g.C.WEBGL2?(await this._context.clientWaitAsync(),this.getSubData(e,t,r,i)):v.error("Get buffer subdata is supported in WebGL2 only!")}}m.L.getLogger("esri.views.webgl.VertexArrayObject"),new d.V(c.V.POSITION,3,u.D.FLOAT,0,12),new d.V(c.V.POSITION,3,u.D.FLOAT,0,20),new d.V(c.V.UV0,2,u.D.FLOAT,12,20),new d.V(c.V.POSITION,3,u.D.FLOAT,0,32),new d.V(c.V.NORMAL,3,u.D.FLOAT,12,32),new d.V(c.V.UV0,2,u.D.FLOAT,24,32),new d.V(c.V.POSITION,3,u.D.FLOAT,0,16),new d.V(c.V.COLOR,4,u.D.UNSIGNED_BYTE,12,16),new d.V(c.V.POSITION,2,u.D.FLOAT,0,8),new d.V(c.V.POSITION,2,u.D.FLOAT,0,16),new d.V(c.V.UV0,2,u.D.FLOAT,8,16);var T=r(51321),x=r(12426),b=r(77046),S=r(21108);r(32191);class E{constructor(e,t){this._context=e,this._descriptor=t,this.type=p.G.RenderBuffer,this._context.instanceCounter.increment(u.d.Renderbuffer,this);const r=this._context.gl;this.glName=r.createRenderbuffer(),this._context.bindRenderbuffer(this);const{width:i,height:o,internalFormat:n,multisampled:a}=t;if(a){if(this._context.type!==g.C.WEBGL2)throw new Error("Multisampled renderbuffers are not supported in WebGL1!");r.renderbufferStorageMultisample(r.RENDERBUFFER,this.samples,n,i,o)}else r.renderbufferStorage(r.RENDERBUFFER,n,i,o)}get descriptor(){return this._descriptor}get samples(){const e=this._descriptor.samples,t=this._context.parameters.maxSamples;return e?Math.min(e,t):t}get gpuMemoryUsage(){return(e=this._descriptor).width<=0||e.height<=0||null==e.internalFormat?0:e.width*e.height*(0,p.g)(e.internalFormat);var e}resize(e,t){const r=this._descriptor;if(r.width===e&&r.height===t)return;r.width=e,r.height=t;const i=this._context.gl;this._context.bindRenderbuffer(this),r.multisampled?i.renderbufferStorageMultisample(i.RENDERBUFFER,this.samples,r.internalFormat,r.width,r.height):i.renderbufferStorage(i.RENDERBUFFER,r.internalFormat,r.width,r.height)}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(u.d.Renderbuffer,this),this._context=(0,f.n)(this._context))}}const A=m.L.getLogger("esri.views.webgl.FramebufferObject");class C{constructor(e,t,r=null){this._context=e,this._glName=null,this._colorAttachments=new Map,this._depthBuffer=null,this._stencilBuffer=null,this._depthStencilTexture=null,this._initialized=!1,e.instanceCounter.increment(u.d.FramebufferObject,this);const i=R(t)?t:new p.a(this._context,t);var o;if(this._colorAttachments.set(u.j.COLOR_ATTACHMENT0,i),this._validateTextureDescriptor(i.descriptor),this._validateColorAttachmentPoint(u.j.COLOR_ATTACHMENT0),null!=r)if(R(o=r)||null!=o&&"pixelFormat"in o)this._context.capabilities.depthTexture||console.error("Setting the depth/stencil texture as an attachment requires WEBGL_depth_texture or WebGL2"),this._depthStencilTexture=R(r)?r:new p.a(this._context,r),this._validateTextureDescriptor(this._depthStencilTexture.descriptor);else{const e=function(e){return null!=e&&"type"in e&&e.type===p.G.RenderBuffer}(r)?r:new E(this._context,r),t=e.descriptor;t.internalFormat===u.R.STENCIL_INDEX8?this._stencilBuffer=e:this._depthBuffer=e,this._validateRenderBufferDescriptor(t)}}dispose(){if(0===this._colorAttachments.size&&!this._glName)return;const e=this._context.getBoundFramebufferObject();this._colorAttachments.forEach(((e,t)=>this.detachColorTexture(t)?.dispose())),this.detachDepthStencilBuffer()?.dispose(),this.detachDepthStencilTexture()?.dispose(),this._glName&&(this._context.gl.deleteFramebuffer(this._glName),this._glName=null),this._context.bindFramebuffer(e),this._context.instanceCounter.decrement(u.d.FramebufferObject,this)}get glName(){return this._glName}get colorTexture(){return this._colorAttachments.get(u.j.COLOR_ATTACHMENT0)}get depthStencilAttachment(){return this._depthStencilTexture||this._depthBuffer||this._stencilBuffer}get depthStencilTexture(){return this._depthStencilTexture}get width(){const e=this._colorAttachments.get(u.j.COLOR_ATTACHMENT0);return e?.descriptor?.width??0}get height(){const e=this._colorAttachments.get(u.j.COLOR_ATTACHMENT0);return e?.descriptor?.height??0}get gpuMemoryUsage(){return[...this._colorAttachments].reduce(((e,[t,r])=>e+r.gpuMemoryUsage),this.depthStencilAttachment?.gpuMemoryUsage??0)}getColorTexture(e){const t=this._colorAttachments.get(e);return t&&R(t)?t:null}attachColorTexture(e,t=u.j.COLOR_ATTACHMENT0){if(!e)return;this._validateColorAttachmentPoint(t);const r=e.descriptor;this._validateTextureDescriptor(r),this.detachColorTexture(t)?.dispose(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(e.glName,t)),this._colorAttachments.set(t,e)}detachColorTexture(e=u.j.COLOR_ATTACHMENT0){const t=this._colorAttachments.get(e);if(t)return this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e)),this._colorAttachments.delete(e),t}setColorTextureTarget(e,t=u.j.COLOR_ATTACHMENT0){const r=this._colorAttachments.get(t);r&&this._framebufferTexture2D(r.glName,t,e)}attachDepthStencil(e){if(e)switch(e.type){case p.G.Texture:return this._attachDepthStencilTexture(e);case p.G.RenderBuffer:return this._attachDepthStencilBuffer(e)}}_attachDepthStencilTexture(e){if(null==e)return;const t=e.descriptor;t.pixelFormat!==u.P.DEPTH_STENCIL&&t.pixelFormat!==u.P.DEPTH24_STENCIL8&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),t.dataType!==u.b.UNSIGNED_INT_24_8&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"),this._validateTextureDescriptor(t),this._disposeDepthStencilAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(e.glName,u.k)),this._depthStencilTexture?.dispose(),this._depthStencilTexture=e}detachDepthStencilTexture(){const e=this._depthStencilTexture;return e&&this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,u.k)),this._depthStencilTexture=null,e}_attachDepthStencilBuffer(e){if(null==e)return;const t=e.descriptor;if(t.internalFormat!==u.R.DEPTH_STENCIL&&t.internalFormat!==u.R.DEPTH_COMPONENT16&&console.error("Depth/Stencil buffer must have correct internalFormat"),this._validateRenderBufferDescriptor(t),this._disposeDepthStencilAttachments(),this._initialized){this._context.bindFramebuffer(this);const r=this._context.gl,i=this._getGLAttachmentPoint(t);r.framebufferRenderbuffer(u.l.FRAMEBUFFER,i,r.RENDERBUFFER,e.glName)}this._depthBuffer?.dispose(),this._depthBuffer=e}detachDepthStencilBuffer(){const e=this._depthBuffer;if(e&&this._initialized){this._context.bindFramebuffer(this);const t=this._context.gl,r=this._getGLAttachmentPoint(e.descriptor);t.framebufferRenderbuffer(u.l.FRAMEBUFFER,r,t.RENDERBUFFER,null),e.dispose()}return this._depthBuffer=null,e}copyToTexture(e,t,r,i,o,n,a){(e<0||t<0||o<0||n<0)&&console.error("Offsets cannot be negative!"),(r<=0||i<=0)&&console.error("Copy width and height must be greater than zero!");const s=a.descriptor;a.descriptor.target!==u.a.TEXTURE_2D&&console.error("Texture target must be TEXTURE_2D!"),(null==s?.width||null==s?.height||e+r>this.width||t+i>this.height||o+r>s.width||n+i>s.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");const l=this._context,c=l.bindTexture(a,p.a.TEXTURE_UNIT_FOR_UPDATES);l.setActiveTexture(p.a.TEXTURE_UNIT_FOR_UPDATES),l.bindFramebuffer(this),l.gl.copyTexSubImage2D(u.a.TEXTURE_2D,0,o,n,e,t,r,i),l.bindTexture(c,p.a.TEXTURE_UNIT_FOR_UPDATES)}readPixels(e,t,r,i,o,n,a){(r<=0||i<=0)&&console.error("Copy width and height must be greater than zero!"),a||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(e,t,r,i,o,n,a)}async readPixelsAsync(e,t,r,i,o,n,a){if(this._context.type!==g.C.WEBGL2)return(0,p.w)()&&console.warn("Attempting to read pixels using pixel buffer object without WebGL2"),void this.readPixels(e,t,r,i,o,n,a);const s=this._context.gl,l=_.createPixelPack(this._context,u.U.STREAM_READ,a.byteLength);this._context.bindBuffer(l),this._context.bindFramebuffer(this),s.readPixels(e,t,r,i,o,n,0),this._context.unbindBuffer(u.B.PIXEL_PACK_BUFFER),await l.getSubDataAsync(a),l.dispose()}resize(e,t){if(this.width===e&&this.height===t)return;const r={width:e,height:t};w(r,this._context.parameters.maxTextureSize),this._colorAttachments.forEach((e=>e.resize(r.width,r.height))),this._depthStencilTexture?.resize(r.width,r.height),this._initialized&&(w(r,this._context.parameters.maxRenderbufferSize),this._depthBuffer?.resize(r.width,r.height),this._stencilBuffer?.resize(r.width,r.height),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1)}initializeAndBind(e=u.l.FRAMEBUFFER){const t=this._context.gl;if(this._initialized)return void t.bindFramebuffer(e,this.glName);this._glName&&t.deleteFramebuffer(this._glName);const r=t.createFramebuffer();t.bindFramebuffer(e,r),this._colorAttachments.forEach(((t,r)=>this._framebufferTexture2D(t.glName,r,y(t),e)));const i=this._depthBuffer||this._stencilBuffer;if(i){const r=this._getGLAttachmentPoint(i.descriptor);t.framebufferRenderbuffer(e,r,t.RENDERBUFFER,i.glName)}else this._depthStencilTexture&&this._framebufferTexture2D(this._depthStencilTexture.glName,t.DEPTH_STENCIL_ATTACHMENT,y(this._depthStencilTexture),e);(0,p.w)()&&t.checkFramebufferStatus(e)!==t.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!"),this._glName=r,this._initialized=!0}_framebufferTexture2D(e,t=u.j.COLOR_ATTACHMENT0,r=u.a.TEXTURE_2D,i=u.l.FRAMEBUFFER,o=0){this._context.gl.framebufferTexture2D(i,t,r,e,o)}_disposeDepthStencilAttachments(){const e=this._context.gl;if(this._depthBuffer){if(this._initialized){this._context.bindFramebuffer(this);const t=this._getGLAttachmentPoint(this._depthBuffer.descriptor);e.framebufferRenderbuffer(u.l.FRAMEBUFFER,t,e.RENDERBUFFER,null)}this._depthBuffer=(0,f.h)(this._depthBuffer)}this._stencilBuffer&&(this._initialized&&(this._context.bindFramebuffer(this),e.framebufferRenderbuffer(u.l.FRAMEBUFFER,e.STENCIL_ATTACHMENT,e.RENDERBUFFER,null)),this._stencilBuffer=(0,f.h)(this._stencilBuffer)),this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e.DEPTH_STENCIL_ATTACHMENT)),this._depthStencilTexture=(0,f.h)(this._depthStencilTexture))}_validateTextureDescriptor(e){e.target!==u.a.TEXTURE_2D&&e.target!==u.a.TEXTURE_CUBE_MAP&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"),w(e,this._context.parameters.maxTextureSize),this._validateBufferDimensions(e)}_validateRenderBufferDescriptor(e){w(e,this._context.parameters.maxRenderbufferSize),this._validateBufferDimensions(e)}_validateBufferDimensions(e){e.width<=0&&(e.width=this.width),e.height<=0&&(e.height=this.height),this.width>0&&this.height>0&&(this.width===e.width&&this.height===e.height||console.error("Attachment size must match framebuffer size!"))}_getGLAttachmentPoint(e){switch(e.internalFormat){case u.R.DEPTH_COMPONENT16:case u.R.DEPTH_COMPONENT24:case u.R.DEPTH_COMPONENT32F:return this._context.gl.DEPTH_ATTACHMENT;case u.R.DEPTH24_STENCIL8:case u.R.DEPTH32F_STENCIL8:case u.R.DEPTH_STENCIL:return this._context.gl.DEPTH_STENCIL_ATTACHMENT;case u.R.STENCIL_INDEX8:return this._context.gl.STENCIL_ATTACHMENT}}_validateColorAttachmentPoint(e){if(-1===C._MAX_COLOR_ATTACHMENTS){const e=this._context.capabilities.drawBuffers;if(e){const t=this._context.gl;C._MAX_COLOR_ATTACHMENTS=t.getParameter(e.MAX_COLOR_ATTACHMENTS)}else C._MAX_COLOR_ATTACHMENTS=1}const t=e-u.j.COLOR_ATTACHMENT0;t+1>C._MAX_COLOR_ATTACHMENTS&&m.L.getLogger("esri.views.webgl.FrameBufferObject").error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${t+1}. Implementation supports up to ${C._MAX_COLOR_ATTACHMENTS} color attachments`)}}function R(e){return null!=e&&"type"in e&&e.type===p.G.Texture}function w(e,t){const r=Math.max(e.width,e.height);if(r>t){A.warn(`Resizing FBO attachment size ${e.width}x${e.height} to device limit ${t}`);const i=t/r;return e.width=Math.round(e.width*i),e.height=Math.round(e.height*i),!1}return!0}function y(e){return e.descriptor.target===u.a.TEXTURE_CUBE_MAP?u.a.TEXTURE_CUBE_MAP_POSITIVE_X:u.a.TEXTURE_2D}C._MAX_COLOR_ATTACHMENTS=-1,(0,s.c)();const M=.4;(0,s.c)();class O extends T.S{initializeProgram(e){return new T.P(e.rctx,O.shader.get().build(),l.D)}initializePipeline(){return(0,b.m)({colorWrite:b.a})}}O.shader=new T.R(x.S,(()=>Promise.resolve().then(r.bind(r,12426)).then((e=>e.S))));class P extends T.S{initializeProgram(e){return new T.P(e.rctx,P.shader.get().build(),l.D)}initializePipeline(){return(0,b.m)({colorWrite:b.a})}}P.shader=new T.R(S.S,(()=>Promise.resolve().then(r.bind(r,21108)).then((e=>e.S))));const I=2;var N=r(79693),L=r(96457);class D extends L.U{constructor(e,t){super(e,"bool",L.B.Pass,((r,i,o)=>r.setUniform1b(e,t(i,o))))}}var F=r(51947);function B(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add(new a.T("ssaoTex",((e,t)=>t.ssaoHelper.colorTexture))),r.constants.add("blurSizePixelsInverse","float",1/I),r.code.add(n.g`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).a;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):r.code.add(n.g`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function V(e){e.constants.add("ambientBoostFactor","float",M)}function U(e){e.uniforms.add(new F.F("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)))}function G(e,t){const r=e.fragment;switch(e.include(B,t),t.pbrMode!==o.P.Disabled&&e.include(o.j,t),e.include(o.E,t),e.include(N.P),r.code.add(n.g`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===o.P.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),V(r),U(r),(0,o.a)(r),r.code.add(n.g`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?n.g`normalize(vPosWorld)`:n.g`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),(0,o.b)(r),r.code.add(n.g`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case o.P.Disabled:case o.P.WaterOnIntegratedMesh:case o.P.Water:e.include(o.M),r.code.add(n.g`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case o.P.Normal:case o.P.Schematic:r.code.add(n.g`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(n.g`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?r.uniforms.add(new D("hasFillLights",((e,t)=>t.enableFillLights))):r.constants.add("hasFillLights","bool",!1),r.code.add(n.g`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add(new F.F("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new F.F("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))),r.code.add(n.g`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(n.g`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode===o.P.Schematic?n.g`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:n.g`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case o.P.Terrain:case o.P.TerrainWithWater:e.include(o.M),r.code.add(n.g`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluateTerrainLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:(0,i.n)(t.pbrMode);case o.P.COUNT:}}},48218:(e,t,r)=>{r.d(t,{F:()=>o});var i=r(96457);class o extends i.U{constructor(e,t){super(e,"vec3",i.B.Pass,((r,i,o)=>r.setUniform3fv(e,t(i,o))))}}},72958:(e,t,r)=>{r.d(t,{F:()=>o});var i=r(96457);class o extends i.U{constructor(e,t){super(e,"vec4",i.B.Pass,((r,i,o)=>r.setUniform4fv(e,t(i,o))))}}},51947:(e,t,r)=>{r.d(t,{F:()=>o});var i=r(96457);class o extends i.U{constructor(e,t){super(e,"float",i.B.Pass,((r,i,o)=>r.setUniform1f(e,t(i,o))))}}},1280:(e,t,r)=>{r.d(t,{D:()=>g,F:()=>A,M:()=>v,P:()=>p,V:()=>x,b:()=>E,c:()=>S,d:()=>T,e:()=>_});var i=r(503),o=r(16912),n=r(57532),a=r(66106),s=r(52978),l=r(99520),c=r(81733),u=r(48218),d=r(96457),h=r(75308),m=r(40869),f=r(41928);function p(e){e.attributes.add(l.V.POSITION,"vec3"),e.vertex.code.add(s.g`vec3 positionModel() { return position; }`)}function g({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(s.g`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(s.g`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}class v extends d.U{constructor(e,t){super(e,"mat3",d.B.Draw,((r,i,o)=>r.setUniformMatrix3fv(e,t(i,o))))}}function _(e,t){e.include(p);const r=e.vertex;r.include(g,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),r.uniforms.add(new u.F("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH)),new u.F("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new h.M("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new m.M("transformProjFromView",(e=>e.transformProjFromView)),new v("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new c.F("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new c.F("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL))),r.code.add(s.g`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(s.g`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${t.spherical?s.g`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:s.g`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),e.fragment.uniforms.add(new u.F("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL))),r.code.add(s.g`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.code.add(s.g`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class T extends s.N{constructor(){super(...arguments),this.transformWorldFromViewTH=(0,a.c)(),this.transformWorldFromViewTL=(0,a.c)(),this.transformViewFromCameraRelativeRS=(0,o.c)(),this.transformProjFromView=(0,n.c)()}}class x extends s.N{constructor(){super(...arguments),this.transformWorldFromModelRS=(0,o.c)(),this.transformWorldFromModelTH=(0,a.c)(),this.transformWorldFromModelTL=(0,a.c)()}}function b(e){e.varyings.add("linearDepth","float")}function S(e){e.vertex.uniforms.add(new f.F("nearFar",((e,t)=>t.camera.nearFar)))}function E(e){e.vertex.code.add(s.g`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function A(e,t){const{vertex:r}=e;switch(t.output){case i.S.Color:if(t.receiveShadows)return b(e),void r.code.add(s.g`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case i.S.Depth:case i.S.Shadow:case i.S.ShadowHighlight:case i.S.ShadowExcludeHighlight:return e.include(_,t),b(e),S(e),E(e),void r.code.add(s.g`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(s.g`void forwardLinearDepth() {}`)}},13159:(e,t,r)=>{r.d(t,{C:()=>i,D:()=>f,R:()=>P,a:()=>m,b:()=>O,i:()=>v,n:()=>y,v:()=>C});var i,o,n=r(66106),a=(r(52978),r(6906),r(19657)),s=r(99520),l=r(48578),c=r(82426),u=r(72836),d=r(53326),h=(r(3808),r(8498));class m{constructor(){this.id=(0,a.g)()}unload(){}}(o=i||(i={}))[o.Layer=0]="Layer",o[o.Object=1]="Object",o[o.Mesh=2]="Mesh",o[o.Line=3]="Line",o[o.Point=4]="Point",o[o.Material=5]="Material",o[o.Texture=6]="Texture",o[o.COUNT=7]="COUNT";const f=new Map([[s.V.POSITION,0],[s.V.NORMAL,1],[s.V.NORMALCOMPRESSED,1],[s.V.UV0,2],[s.V.COLOR,3],[s.V.COLORFEATUREATTRIBUTE,3],[s.V.SIZE,4],[s.V.TANGENT,4],[s.V.AUXPOS1,5],[s.V.SYMBOLCOLOR,5],[s.V.AUXPOS2,6],[s.V.FEATUREATTRIBUTE,6],[s.V.INSTANCEFEATUREATTRIBUTE,6],[s.V.INSTANCECOLOR,7],[s.V.OBJECTANDLAYERIDCOLOR,7],[s.V.INSTANCEOBJECTANDLAYERIDCOLOR,7],[s.V.MODEL,8],[s.V.MODELNORMAL,12],[s.V.MODELORIGINHI,11],[s.V.MODELORIGINLO,15]]);(0,c.d)(10),(0,c.d)(12),(0,c.d)(70),(0,c.d)(40);const p={scale:0,factor:0,minPixelSize:0,paddingPixels:0},g=(0,d.c)();function v(e,t,r,o,n,a){if(e.visible)if(e.boundingInfo){(0,h.a)(e.type===i.Mesh);const s=t.tolerance;T(e.boundingInfo,r,o,s,n,a)}else{const t=e.indices.get(s.V.POSITION),i=e.vertexAttributes.get(s.V.POSITION);b(r,o,0,t.length/3,t,i,void 0,n,a)}}const _=(0,n.c)();function T(e,t,r,i,o,n){if(null==e)return;const a=function(e,t,r){return(0,u.s)(r,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}(t,r,_);if((0,d.h)(g,e.bbMin),(0,d.j)(g,e.bbMax),null!=o&&o.applyToAabb(g),function(e,t,r,i){return function(e,t,r,i,o){const n=(e[0]-i-t[0])*r[0],a=(e[3]+i-t[0])*r[0];let s=Math.min(n,a),l=Math.max(n,a);const c=(e[1]-i-t[1])*r[1],u=(e[4]+i-t[1])*r[1];if(l=Math.min(l,Math.max(c,u)),l<0)return!1;if(s=Math.max(s,Math.min(c,u)),s>l)return!1;const d=(e[2]-i-t[2])*r[2],h=(e[5]+i-t[2])*r[2];return l=Math.min(l,Math.max(d,h)),!(l<0)&&(s=Math.max(s,Math.min(d,h)),!(s>l)&&s<1/0)}(e,t,r,i)}(g,t,a,i)){const{primitiveIndices:a,indices:s,position:l}=e,c=a?a.length:s.length/3;if(c>M){const a=e.getChildren();if(void 0!==a){for(const e of a)T(e,t,r,i,o,n);return}}b(t,r,0,c,s,l,a,o,n)}}const x=(0,n.c)();function b(e,t,r,i,o,n,a,s,l){if(a)return function(e,t,r,i,o,n,a,s,l){const{data:c,stride:u}=n,d=e[0],h=e[1],m=e[2],f=t[0]-d,p=t[1]-h,g=t[2]-m;for(let e=r;e<i;++e){const t=a[e];let r=3*t,i=u*o[r++],n=c[i++],v=c[i++],_=c[i];i=u*o[r++];let T=c[i++],b=c[i++],S=c[i];i=u*o[r];let E=c[i++],C=c[i++],R=c[i];null!=s&&([n,v,_]=s.applyToVertex(n,v,_,e),[T,b,S]=s.applyToVertex(T,b,S,e),[E,C,R]=s.applyToVertex(E,C,R,e));const w=T-n,y=b-v,M=S-_,O=E-n,P=C-v,I=R-_,N=p*I-P*g,L=g*O-I*f,D=f*P-O*p,F=w*N+y*L+M*D;if(Math.abs(F)<=Number.EPSILON)continue;const B=d-n,V=h-v,U=m-_,G=B*N+V*L+U*D;if(F>0){if(G<0||G>F)continue}else if(G>0||G<F)continue;const z=V*M-y*U,H=U*w-M*B,W=B*y-w*V,$=f*z+p*H+g*W;if(F>0){if($<0||G+$>F)continue}else if($>0||G+$<F)continue;const k=(O*z+P*H+I*W)/F;k>=0&&l(k,A(w,y,M,O,P,I,x),t,!1)}}(e,t,r,i,o,n,a,s,l);const{data:c,stride:u}=n,d=e[0],h=e[1],m=e[2],f=t[0]-d,p=t[1]-h,g=t[2]-m;for(let e=r,t=3*r;e<i;++e){let r=u*o[t++],i=c[r++],n=c[r++],a=c[r];r=u*o[t++];let v=c[r++],_=c[r++],T=c[r];r=u*o[t++];let b=c[r++],S=c[r++],E=c[r];null!=s&&([i,n,a]=s.applyToVertex(i,n,a,e),[v,_,T]=s.applyToVertex(v,_,T,e),[b,S,E]=s.applyToVertex(b,S,E,e));const C=v-i,R=_-n,w=T-a,y=b-i,M=S-n,O=E-a,P=p*O-M*g,I=g*y-O*f,N=f*M-y*p,L=C*P+R*I+w*N;if(Math.abs(L)<=Number.EPSILON)continue;const D=d-i,F=h-n,B=m-a,V=D*P+F*I+B*N;if(L>0){if(V<0||V>L)continue}else if(V>0||V<L)continue;const U=F*w-R*B,G=B*C-w*D,z=D*R-C*F,H=f*U+p*G+g*z;if(L>0){if(H<0||V+H>L)continue}else if(H>0||V+H<L)continue;const W=(y*U+M*G+O*z)/L;W>=0&&l(W,A(C,R,w,y,M,O,x),e,!1)}}const S=(0,n.c)(),E=(0,n.c)();function A(e,t,r,i,o,n,a){return(0,u.s)(S,e,t,r),(0,u.s)(E,i,o,n),(0,u.f)(a,S,E),(0,u.n)(a,a),a}function C(e,t,r,i,o){let n=(r.screenLength||0)*e.pixelRatio;null!=o&&(n=function(e,t,r,i){return function(e,t){return Math.max((0,c.l)(e*t.scale,e,t.factor),function(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}(e,t))}(e,function(e,t,r){const i=r.parameters,o=r.paddingPixelsOverride;return p.scale=Math.min(i.divisor/(t-i.offset),1),p.factor=function(e){return Math.abs(e*e*e)}(e),p.minPixelSize=i.minPixelSize,p.paddingPixels=o,p}(t,r,i))}(n,i,t,o));const a=n*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return(0,c.c)(a*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}function R(e,t){const r=t?R(t):{};for(const t in e){let i=e[t];i&&i.forEach&&(i=w(i)),null==i&&t in r||(r[t]=i)}return r}function w(e){const t=[];return e.forEach((e=>t.push(e))),t}const y={multiply:1,ignore:2,replace:3,tint:4},M=1e3;class O extends m{constructor(e,t){super(),this.type=i.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=f,this._pp0=(0,n.f)(0,0,1),this._pp1=(0,n.f)(0,0,0),this._parameters=R(e,t),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e,t=!0){(function(e,t){let r=!1;for(const i in t){const o=t[i];void 0!==o&&(Array.isArray(o)?null===e[i]?(e[i]=o.slice(),r=!0):(0,l.A)(e[i],o)&&(r=!0):e[i]!==o&&(r=!0,e[i]=o))}return r})(this._parameters,e)&&(this.validateParameters(this._parameters),t&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&0!=(this.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){null!=this.repository&&this.repository.materialChanged(this)}intersectDraped(e,t,r,i,o,n){return this._pp0[0]=this._pp1[0]=i[0],this._pp0[1]=this._pp1[1]=i[1],this.intersect(e,t,r,this._pp0,this._pp1,o)}}var P;!function(e){e[e.None=0]="None",e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque"}(P||(P={}))},75308:(e,t,r)=>{r.d(t,{M:()=>o});var i=r(96457);class o extends i.U{constructor(e,t){super(e,"mat3",i.B.Pass,((r,i,o)=>r.setUniformMatrix3fv(e,t(i,o))))}}},40869:(e,t,r)=>{r.d(t,{M:()=>o});var i=r(96457);class o extends i.U{constructor(e,t){super(e,"mat4",i.B.Pass,((r,i,o)=>r.setUniformMatrix4fv(e,t(i,o))))}}},94485:(e,t,r)=>{r.d(t,{I:()=>U,M:()=>k,O:()=>V,S:()=>H,b:()=>W,c:()=>$});var i=r(52978),o=r(29768),n=r(72836),a=r(66106),s=r(503),l=r(1280),c=r(81733),u=r(8036),d=r(99520),h=r(46283),m=r(75854),f=r(81409),p=r(13159),g=r(26923),v=r(16912),_=r(57532),T=r(63991),x=r(28028),b=r(41169);function S(e,t){const r=t.output===s.S.ObjectAndLayerIdColor,o=t.objectAndLayerIdColorInstanced;r&&(e.varyings.add("objectAndLayerIdColorVarying","vec4"),o?e.attributes.add(d.V.INSTANCEOBJECTANDLAYERIDCOLOR,"vec4"):e.attributes.add(d.V.OBJECTANDLAYERIDCOLOR,"vec4")),e.vertex.code.add(i.g`
     void forwardObjectAndLayerIdColor() {
      ${r?o?i.g`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;`:i.g`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:i.g``} }`),e.fragment.code.add(i.g`
      void outputObjectAndLayerIdColor() {
        ${r?i.g`fragColor = objectAndLayerIdColorVarying;`:i.g``} }`)}var E=r(41928);function A(e,t){switch(e.fragment.include(E.R),t.output){case s.S.Shadow:case s.S.ShadowHighlight:case s.S.ShadowExcludeHighlight:e.fragment.code.add(i.g`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
fragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`);break;case s.S.Depth:e.fragment.code.add(i.g`void outputDepth(float _linearDepth) {
fragColor = float2rgba(_linearDepth);
}`)}}var C=r(68681),R=r(52050);const w=(0,C.f)(1,1,0,1),y=(0,C.f)(1,0,1,1);function M(e){e.fragment.uniforms.add(new R.T("depthTexture",((e,t)=>t.highlightDepthTexture))),e.fragment.constants.add("occludedHighlightFlag","vec4",w).add("unoccludedHighlightFlag","vec4",y),e.fragment.code.add(i.g`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`)}var O=r(17303),P=r(7489);function I(e){e.fragment.code.add(i.g`
    #define discardOrAdjustAlpha(color) { if (color.a < ${i.g.float(P.s)}) { discard; } }
  `)}r(96457);var N=r(51947),L=r(33417),D=r(75308),F=r(40869);function B(e){e.code.add(i.g`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function V(e){e.vertex.code.add(i.g`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function U(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add(d.V.MODELORIGINHI,"vec3"),e.attributes.add(d.V.MODELORIGINLO,"vec3"),e.attributes.add(d.V.MODEL,"mat3"),e.attributes.add(d.V.MODELNORMAL,"mat3"));const r=e.vertex;t.instancedDoublePrecision&&(r.include(l.D,t),r.uniforms.add(new c.F("viewOriginHi",((e,t)=>(0,h.a)((0,n.s)(G,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),G))),new c.F("viewOriginLo",((e,t)=>(0,h.b)((0,n.s)(G,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),G))))),r.code.add(i.g`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `),r.code.add(i.g`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?i.g`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),r.code.add(i.g`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `),t.output===s.S.Normal&&((0,c.g)(r),r.code.add(i.g`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),t.hasVertexTangents&&r.code.add(i.g`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `)}(0,o._)([(0,u.p)()],class extends u.S{constructor(){super(...arguments),this.instancedDoublePrecision=!1}}.prototype,"instancedDoublePrecision",void 0);const G=(0,a.c)();function z(e){e.vertex.code.add(i.g`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${i.g.int(m.C.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${i.g.int(m.C.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${i.g.int(m.C.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${i.g.int(m.C.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function H(e,t){t.hasSymbolColors?(e.include(z),e.attributes.add(d.V.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(i.g`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new f.I("colorMixMode",(e=>p.n[e.colorMixMode]))),e.vertex.code.add(i.g`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function W(e,t){!function(e,t,r){const o=e.fragment;switch(t.alphaDiscardMode!==L.A.Mask&&t.alphaDiscardMode!==L.A.MaskBlend||o.uniforms.add(r),t.alphaDiscardMode){case L.A.Blend:return e.include(I);case L.A.Opaque:o.code.add(i.g`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case L.A.Mask:o.code.add(i.g`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case L.A.MaskBlend:e.fragment.code.add(i.g`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}(e,t,new N.F("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}function $(e,t){const{vertex:r,fragment:o}=e,n=t.hasModelTransformation;if(n){const e=(0,v.c)();r.uniforms.add(new F.M("model",(e=>e.modelTransformation??_.I))),r.uniforms.add(new D.M("normalTransform",(t=>((0,g.n)(e,t.modelTransformation??_.I),e))))}const a=t.hasColorTexture&&t.alphaDiscardMode!==L.A.Opaque;switch(t.output){case s.S.Depth:case s.S.Shadow:case s.S.ShadowHighlight:case s.S.ShadowExcludeHighlight:case s.S.ObjectAndLayerIdColor:(0,c.a)(r,t),e.include(x.T,t),e.include(f.T,t),e.include(O.V,t),e.include(A,t),e.include(T.S,t),e.include(S,t),(0,l.c)(e),e.varyings.add("depth","float"),a&&o.uniforms.add(new R.T("tex",(e=>e.texture))),r.code.add(i.g`
          void main(void) {
            vpos = calculateVPos();
            ${n?"vpos = (model * vec4(vpos, 1.0)).xyz;":""}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
            forwardTextureCoordinates();
            forwardObjectAndLayerIdColor();
          }
        `),e.include(W,t),o.code.add(i.g`
          void main(void) {
            discardBySlice(vpos);
            ${a?i.g`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?i.g`colorUV`:i.g`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${t.output===s.S.ObjectAndLayerIdColor?i.g`outputObjectAndLayerIdColor();`:i.g`outputDepth(depth);`}
          }
        `);break;case s.S.Normal:{(0,c.a)(r,t),e.include(x.T,t),e.include(b.N,t),e.include(b.c,t),e.include(f.T,t),e.include(O.V,t),a&&o.uniforms.add(new R.T("tex",(e=>e.texture))),t.normalType===b.b.ScreenDerivative&&e.varyings.add("vPositionView","vec3");const s=t.normalType===b.b.Attribute||t.normalType===b.b.Compressed;r.code.add(i.g`
          void main(void) {
            vpos = calculateVPos();
            ${n?"vpos = (model * vec4(vpos, 1.0)).xyz;":""}

            ${s?i.g`vNormalWorld = ${n?"normalize(normalTransform * dpNormal(vvLocalNormal(normalModel())))":"dpNormalView(vvLocalNormal(normalModel()))"};`:i.g`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),e.include(T.S,t),e.include(W,t),o.code.add(i.g`
          void main() {
            discardBySlice(vpos);
            ${a?i.g`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?i.g`colorUV`:i.g`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${t.normalType===b.b.ScreenDerivative?i.g`vec3 normal = screenDerivativeNormal(vPositionView);`:i.g`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break}case s.S.Highlight:(0,c.a)(r,t),e.include(x.T,t),e.include(f.T,t),e.include(O.V,t),a&&o.uniforms.add(new R.T("tex",(e=>e.texture))),r.code.add(i.g`
          void main(void) {
            vpos = calculateVPos();
            ${n?"vpos = (model * vec4(vpos, 1.0)).xyz;":""}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),e.include(T.S,t),e.include(W,t),e.include(M,t),o.code.add(i.g`
          void main() {
            discardBySlice(vpos);
            ${a?i.g`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?i.g`colorUV`:i.g`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}function k(e){e.include(B),e.code.add(i.g`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${i.g.int(m.C.Multiply)}) {
        return allMixed;
      }
      if (mode == ${i.g.int(m.C.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.g.int(m.C.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${i.g.int(m.C.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.g.int(m.C.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}},49977:(e,t,r)=>{r.d(t,{m:()=>s});var i=r(20807),o=r(41928),n=r(52978),a=r(52050);function s(e,t){t.hasMultipassTerrain&&(e.fragment.include(i.R),e.fragment.uniforms.add(new a.T("terrainDepthTexture",((e,t)=>t.multipassTerrain.linearDepthTexture))),e.fragment.uniforms.add(new o.F("nearFar",((e,t)=>t.camera.nearFar))),e.fragment.uniforms.add(new o.F("inverseViewport",((e,t)=>t.inverseViewport))),e.fragment.code.add(n.g`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `))}},44600:(e,t,r)=>{r.d(t,{N:()=>i,a:()=>s});var i,o,n=r(48190),a=r(52978);function s(e,t){const r=e.fragment;switch(r.code.add(a.g`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case i.None:r.code.add(a.g`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case i.View:r.code.add(a.g`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case i.WindingOrder:r.code.add(a.g`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,n.n)(t.doubleSidedMode);case i.COUNT:}}(o=i||(i={}))[o.None=0]="None",o[o.View=1]="View",o[o.WindingOrder=2]="WindingOrder",o[o.COUNT=3]="COUNT"},81409:(e,t,r)=>{r.d(t,{E:()=>P,I:()=>C,M:()=>F,P:()=>o,R:()=>M,T:()=>b,V:()=>E,a:()=>L,b:()=>D,d:()=>i,g:()=>A,h:()=>y,j:()=>V});var i,o,n,a=r(66106),s=r(41928),l=r(72958),c=r(96457),u=r(52978),d=r(52050),h=r(72836),m=r(7200),f=r(68681),p=r(48218),g=r(48190),v=r(99520),_=r(81733),T=r(85633),x=(r(60991),r(92143),r(33417),r(79693));function b(e,t){switch(t.textureCoordinateType){case i.Default:return e.attributes.add(v.V.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(u.g`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case i.Compressed:return e.attributes.add(v.V.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(u.g`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case i.Atlas:return e.attributes.add(v.V.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(v.V.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(u.g`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:(0,g.n)(t.textureCoordinateType);case i.None:return void e.vertex.code.add(u.g`void forwardTextureCoordinates() {}`);case i.COUNT:return}}function S(e){e.fragment.code.add(u.g`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function E(e,t){switch(e.include(b,t),t.textureCoordinateType){case i.Default:case i.Compressed:return void e.fragment.code.add(u.g`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);case i.Atlas:return e.include(S),void e.fragment.code.add(u.g`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);default:(0,g.n)(t.textureCoordinateType);case i.None:case i.COUNT:return}}function A(e,t){const r=e.fragment,i=t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;if(t.pbrMode===o.Normal&&i&&e.include(E,t),t.pbrMode!==o.Schematic)if(t.pbrMode!==o.Disabled){if(t.pbrMode===o.Normal){r.code.add(u.g`vec3 mrr;
vec3 emission;
float occlusion;`);const e=t.pbrTextureBindType;t.hasMetallicRoughnessTexture&&(r.uniforms.add(e===c.B.Pass?new d.T("texMetallicRoughness",(e=>e.textureMetallicRoughness)):new T.T("texMetallicRoughness",(e=>e.textureMetallicRoughness))),r.code.add(u.g`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add(e===c.B.Pass?new d.T("texEmission",(e=>e.textureEmissive)):new T.T("texEmission",(e=>e.textureEmissive))),r.code.add(u.g`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add(e===c.B.Pass?new d.T("texOcclusion",(e=>e.textureOcclusion)):new T.T("texOcclusion",(e=>e.textureOcclusion))),r.code.add(u.g`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(u.g`float getBakedOcclusion() { return 1.0; }`),e===c.B.Pass?r.uniforms.add(new p.F("emissionFactor",(e=>e.emissiveFactor)),new p.F("mrrFactors",(e=>e.mrrFactors))):r.uniforms.add(new _.F("emissionFactor",(e=>e.emissiveFactor)),new _.F("mrrFactors",(e=>e.mrrFactors))),r.code.add(u.g`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${t.hasMetallicRoughnessTexture?u.g`applyMetallnessAndRoughness(${t.hasMetallicRoughnessTextureTransform?u.g`metallicRoughnessUV`:"vuv0"});`:""}

      ${t.hasEmissionTexture?u.g`applyEmission(${t.hasEmissiveTextureTransform?u.g`emissiveUV`:"vuv0"});`:""}

      ${t.hasOcclusionTexture?u.g`applyOcclusion(${t.hasOcclusionTextureTransform?u.g`occlusionUV`:"vuv0"});`:""}
    }
  `)}}else r.code.add(u.g`float getBakedOcclusion() { return 1.0; }`);else r.code.add(u.g`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}(n=i||(i={}))[n.None=0]="None",n[n.Default=1]="Default",n[n.Atlas=2]="Atlas",n[n.Compressed=3]="Compressed",n[n.COUNT=4]="COUNT",function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.Terrain=5]="Terrain",e[e.TerrainWithWater=6]="TerrainWithWater",e[e.COUNT=7]="COUNT"}(o||(o={}));class C extends c.U{constructor(e,t){super(e,"int",c.B.Pass,((r,i,o)=>r.setUniform1i(e,t(i,o))))}}class R extends c.U{constructor(e,t,r){super(e,"mat4",c.B.Draw,((r,i,o,n)=>r.setUniformMatrix4fv(e,t(i,o,n))),r)}}class w extends c.U{constructor(e,t,r){super(e,"mat4",c.B.Pass,((r,i,o)=>r.setUniformMatrix4fv(e,t(i,o))),r)}}function y(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new w("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),O(e))}function M(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new R("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),O(e))}function O(e){const t=e.fragment;t.include(s.R),t.uniforms.add(new d.T("shadowMapTex",((e,t)=>t.shadowMap.depthTexture)),new C("numCascades",((e,t)=>t.shadowMap.numCascades)),new l.F("cascadeDistances",((e,t)=>t.shadowMap.cascadeDistances))),t.code.add(u.g`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + (numCascades == 1 ? 1.0 : 0.5) * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float texSize, sampler2D _depthTex) {
float halfPixelSize = 0.5 / texSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, float(textureSize(shadowMapTex, 0).x), shadowMapTex);
}`)}function P(e,t){const r=e.fragment,i=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===i?(r.uniforms.add(new p.F("lightingAmbientSH0",((e,t)=>(0,h.s)(I,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),r.code.add(u.g`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===i?(r.uniforms.add(new l.F("lightingAmbientSH_R",((e,t)=>(0,m.s)(N,t.lighting.sh.r[0],t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3]))),new l.F("lightingAmbientSH_G",((e,t)=>(0,m.s)(N,t.lighting.sh.g[0],t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3]))),new l.F("lightingAmbientSH_B",((e,t)=>(0,m.s)(N,t.lighting.sh.b[0],t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3])))),r.code.add(u.g`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===i&&(r.uniforms.add(new p.F("lightingAmbientSH0",((e,t)=>(0,h.s)(I,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new l.F("lightingAmbientSH_R1",((e,t)=>(0,m.s)(N,t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3],t.lighting.sh.r[4]))),new l.F("lightingAmbientSH_G1",((e,t)=>(0,m.s)(N,t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3],t.lighting.sh.g[4]))),new l.F("lightingAmbientSH_B1",((e,t)=>(0,m.s)(N,t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3],t.lighting.sh.b[4]))),new l.F("lightingAmbientSH_R2",((e,t)=>(0,m.s)(N,t.lighting.sh.r[5],t.lighting.sh.r[6],t.lighting.sh.r[7],t.lighting.sh.r[8]))),new l.F("lightingAmbientSH_G2",((e,t)=>(0,m.s)(N,t.lighting.sh.g[5],t.lighting.sh.g[6],t.lighting.sh.g[7],t.lighting.sh.g[8]))),new l.F("lightingAmbientSH_B2",((e,t)=>(0,m.s)(N,t.lighting.sh.b[5],t.lighting.sh.b[6],t.lighting.sh.b[7],t.lighting.sh.b[8])))),r.code.add(u.g`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),t.pbrMode!==o.Normal&&t.pbrMode!==o.Schematic||r.code.add(u.g`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const I=(0,a.c)(),N=(0,f.c)();function L(e){e.uniforms.add(new p.F("mainLightDirection",((e,t)=>t.lighting.mainLight.direction)))}function D(e){e.uniforms.add(new p.F("mainLightIntensity",((e,t)=>t.lighting.mainLight.intensity)))}function F(e){L(e.fragment),D(e.fragment),e.fragment.code.add(u.g`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}function B(e){const t=e.fragment.code;t.add(u.g`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(u.g`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(u.g`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function V(e,t){const r=e.fragment.code;e.include(x.P),t.pbrMode!==o.Normal&&t.pbrMode!==o.Schematic&&t.pbrMode!==o.Terrain&&t.pbrMode!==o.TerrainWithWater||(r.add(u.g`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(u.g`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),t.pbrMode!==o.Normal&&t.pbrMode!==o.Schematic||(e.include(B),r.add(u.g`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(u.g`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(u.g`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(u.g`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}},79693:(e,t,r)=>{r.d(t,{P:()=>o});var i=r(52978);function o(e){e.vertex.code.add(i.g`const float PI = 3.141592653589793;`),e.fragment.code.add(i.g`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}},51321:(e,t,r)=>{r.d(t,{P:()=>u,R:()=>l,S:()=>c});var i=r(71252),o=r(51006),n=r(79456),a=r(96457),s=r(10638);class l{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}class c{constructor(e,t,r){this.release=r,this.initializeConfiguration(e,t),this._configuration=t.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}destroy(){this._program=(0,i.h)(this._program),this._pipeline=this._configuration=null}reload(e){(0,i.h)(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}bindPipelineState(e,t=null,r){e.setPipelineState(this.getPipelineState(t,r))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return o.e.TRIANGLES}getPipelineState(e,t){return this._pipeline}initializeConfiguration(e,t){}}class u{constructor(e,t,r){this._context=e,this._locations=r,this._textures=new Map,this._freeTextureUnits=new n.P({deallocator:null}),this._glProgram=e.programCache.acquire(t.generate("vertex"),t.generate("fragment"),r),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=t.generateBind(a.B.Pass,this),this.bindDraw=t.generateBind(a.B.Draw,this),this._fragmentUniforms=(0,s.w)()?t.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get compiled(){return this._glProgram.compiled}setUniform1b(e,t){this._glProgram.setUniform1i(e,t?1:0)}setUniform1i(e,t){this._glProgram.setUniform1i(e,t)}setUniform1f(e,t){this._glProgram.setUniform1f(e,t)}setUniform2fv(e,t){this._glProgram.setUniform2fv(e,t)}setUniform3fv(e,t){this._glProgram.setUniform3fv(e,t)}setUniform4fv(e,t){this._glProgram.setUniform4fv(e,t)}setUniformMatrix3fv(e,t){this._glProgram.setUniformMatrix3fv(e,t)}setUniformMatrix4fv(e,t){this._glProgram.setUniformMatrix4fv(e,t)}setUniform1fv(e,t){this._glProgram.setUniform1fv(e,t)}setUniform1iv(e,t){this._glProgram.setUniform1iv(e,t)}setUniform2iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform3iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform4iv(e,t){this._glProgram.setUniform4iv(e,t)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if(null==t||null==t.glName){const t=this._textures.get(e);return t&&(this._context.bindTexture(null,t.unit),this._freeTextureUnit(t),this._textures.delete(e)),null}let r=this._textures.get(e);return null==r?(r=this._allocTextureUnit(t),this._textures.set(e,r)):r.texture=t,this._context.useProgram(this),this.setUniform1i(e,r.unit),this._context.bindTexture(t,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)})),null!=this._fragmentUniforms&&this._fragmentUniforms.forEach((e=>{"sampler2D"!==e.type&&"samplerCube"!==e.type||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}},20807:(e,t,r)=>{r.d(t,{R:()=>n});var i=r(41928),o=r(52978);function n(e){e.include(i.R),e.code.add(o.g`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture(depthTex, uv)), nearFar);
}`)}},44908:(e,t,r)=>{r.r(t),r.d(t,{R:()=>C});var i=r(1280),o=r(94485),n=r(503),a=r(63991),s=r(28028),l=r(41169),c=r(81409),u=r(99977),d=r(28579),h=r(80292),m=r(49977),f=r(17303),p=r(7489),g=r(81733),v=r(48218),_=r(72958),T=r(51947),x=r(52978),b=r(96457),S=r(52050),E=r(11939),A=r(99520);const C=Object.freeze(Object.defineProperty({__proto__:null,build:function(e){const t=new b.S,{vertex:r,fragment:C,varyings:R}=t;return(0,g.a)(r,e),t.include(i.P),R.add("vpos","vec3"),t.include(f.V,e),t.include(o.I,e),t.include(d.V,e),e.output!==n.S.Color&&e.output!==n.S.Alpha||((0,g.c)(t.vertex,e),t.include(l.N,e),t.include(s.T,e),e.offsetBackfaces&&t.include(o.O),e.instancedColor&&t.attributes.add(A.V.INSTANCECOLOR,"vec4"),R.add("vNormalWorld","vec3"),R.add("localvpos","vec3"),e.hasMultipassTerrain&&R.add("depth","float"),t.include(c.T,e),t.include(i.F,e),t.include(o.S,e),t.include(u.V,e),r.uniforms.add(new _.F("externalColor",(e=>e.externalColor))),R.add("vcolorExt","vec4"),r.code.add(x.g`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${x.g.float(p.s)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.hasMultipassTerrain?x.g`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===n.S.Alpha&&(t.include(a.S,e),t.include(o.b,e),t.include(m.m,e),C.uniforms.add(new T.F("opacity",(e=>e.opacity)),new T.F("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&C.uniforms.add(new S.T("tex",(e=>e.texture))),C.include(o.M),C.code.add(x.g`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?x.g`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?x.g`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?x.g`colorUV`:x.g`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:x.g`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?x.g`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:x.g`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        fragColor = vec4(opacity_);
      }
    `)),e.output===n.S.Color&&(t.include(a.S,e),t.include(h.E,e),t.include(h.a,e),t.include(o.b,e),t.include(e.instancedDoublePrecision?c.h:c.R,e),t.include(m.m,e),(0,g.c)(t.fragment,e),(0,c.a)(C),(0,h.b)(C),(0,h.c)(C),C.uniforms.add(r.uniforms.get("localOrigin"),r.uniforms.get("view"),new v.F("ambient",(e=>e.ambient)),new v.F("diffuse",(e=>e.diffuse)),new T.F("opacity",(e=>e.opacity)),new T.F("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&C.uniforms.add(new S.T("tex",(e=>e.texture))),t.include(c.g,e),t.include(c.j,e),C.include(o.M),(0,c.b)(C),C.code.add(x.g`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?x.g`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?x.g`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?x.g`colorUV`:x.g`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:x.g`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===c.P.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?x.g`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:x.g`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.snowCover?x.g`albedo = mix(albedo, vec3(1), 0.9);`:x.g``}
        ${x.g`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${e.pbrMode===c.P.Normal||e.pbrMode===c.P.Schematic?e.spherical?x.g`vec3 normalGround = normalize(vpos + localOrigin);`:x.g`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:x.g``}
        ${e.pbrMode===c.P.Normal||e.pbrMode===c.P.Schematic?x.g`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?x.g`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:x.g`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===E.T.Color?x.g`fragColor = premultiplyAlpha(fragColor);`:x.g``}
      }
    `)),t.include(o.c,e),t}},Symbol.toStringTag,{value:"Module"}))},41928:(e,t,r)=>{r.d(t,{F:()=>n,R:()=>a});var i=r(96457),o=r(52978);class n extends i.U{constructor(e,t){super(e,"vec2",i.B.Pass,((r,i,o)=>r.setUniform2fv(e,t(i,o))))}}function a(e){e.code.add(o.g`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}},21108:(e,t,r)=>{r.r(t),r.d(t,{S:()=>b,g:()=>T});var i=r(47880),o=r(32191),n=r(50644),a=r(20807),s=r(7200),l=r(68681),c=r(41928),u=r(72958),d=r(52978);function h(e){e.fragment.uniforms.add(new u.F("projInfo",((e,t)=>function(e){const t=e.camera.projectionMatrix;return 0===t[11]?(0,s.s)(m,2/(e.camera.fullWidth*t[0]),2/(e.camera.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):(0,s.s)(m,-2/(e.camera.fullWidth*t[0]),-2/(e.camera.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])}(t)))),e.fragment.uniforms.add(new c.F("zScale",((e,t)=>f(t)))),e.fragment.code.add(d.g`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}const m=(0,l.c)();function f(e){return 0===e.camera.projectionMatrix[11]?(0,i.s)(p,0,1):(0,i.s)(p,1,0)}const p=(0,o.a)();var g=r(51947),v=r(96457),_=r(52050);function T(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const x=(0,o.a)(),b=Object.freeze(Object.defineProperty({__proto__:null,build:function(){const e=new v.S,t=e.fragment;return e.include(n.S),t.include(a.R),e.include(h),t.uniforms.add(new g.F("radius",((e,t)=>T(t.camera)))),t.code.add(d.g`vec3 sphere[16];
void fillSphere() {
sphere[0] = vec3(0.186937, 0.0, 0.0);
sphere[1] = vec3(0.700542, 0.0, 0.0);
sphere[2] = vec3(-0.864858, -0.481795, -0.111713);
sphere[3] = vec3(-0.624773, 0.102853, -0.730153);
sphere[4] = vec3(-0.387172, 0.260319, 0.007229);
sphere[5] = vec3(-0.222367, -0.642631, -0.707697);
sphere[6] = vec3(-0.01336, -0.014956, 0.169662);
sphere[7] = vec3(0.122575, 0.1544, -0.456944);
sphere[8] = vec3(-0.177141, 0.85997, -0.42346);
sphere[9] = vec3(-0.131631, 0.814545, 0.524355);
sphere[10] = vec3(-0.779469, 0.007991, 0.624833);
sphere[11] = vec3(0.308092, 0.209288,0.35969);
sphere[12] = vec3(0.359331, -0.184533, -0.377458);
sphere[13] = vec3(0.192633, -0.482999, -0.065284);
sphere[14] = vec3(0.233538, 0.293706, -0.055139);
sphere[15] = vec3(0.417709, -0.386701, 0.442449);
}
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),t.code.add(d.g`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.uniforms.add(new c.F("nearFar",((e,t)=>t.camera.nearFar)),new _.T("normalMap",(e=>e.normalTexture)),new _.T("depthMap",(e=>e.depthTexture)),new c.F("zScale",((e,t)=>f(t))),new g.F("projScale",(e=>e.projScale)),new _.T("rnm",(e=>e.noiseTexture)),new c.F("rnmScale",((e,t)=>(0,i.s)(x,t.camera.fullWidth/e.noiseTexture.descriptor.width,t.camera.fullHeight/e.noiseTexture.descriptor.height))),new g.F("intensity",(e=>e.intensity)),new c.F("screenSize",((e,t)=>(0,i.s)(x,t.camera.fullWidth,t.camera.fullHeight)))),t.code.add(d.g`
    void main(void) {
      fillSphere();
      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth>nearFar.y || -currentPixelDepth<nearFar.x) {
        fragColor = vec4(0);
        return;
      }

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy,currentPixelDepth);

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
      bool isTerrain = norm4.w < 0.5;

      float sum = 0.0;
      vec3 tapPixelPos;

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${d.g.int(16)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        //don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        if (isTerrain) {
          if (texture(normalMap, tcTap).w < 0.5) {
            continue;
          }
        }

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum+= aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${d.g.int(16)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;
      fragColor = vec4(A);
    }
  `),e},getRadius:T},Symbol.toStringTag,{value:"Module"}))},12426:(e,t,r)=>{r.r(t),r.d(t,{F:()=>h,S:()=>m});var i=r(72836),o=r(50644),n=r(20807),a=r(96457),s=r(41928),l=r(51947),c=r(52978),u=r(85633),d=r(52050);class h extends a.U{constructor(e,t){super(e,"vec2",a.B.Draw,((r,i,o,n)=>r.setUniform2fv(e,t(i,o,n))))}}const m=Object.freeze(Object.defineProperty({__proto__:null,build:function(){const e=new a.S,t=e.fragment;return e.include(o.S),t.include(n.R),t.uniforms.add(new d.T("depthMap",(e=>e.depthTexture)),new u.T("tex",(e=>e.colorTexture)),new h("blurSize",(e=>e.blurSize)),new l.F("projScale",((e,t)=>{const r=(0,i.z)(t.camera.eye,t.camera.center);return r>5e4?Math.max(0,e.projScale-(r-5e4)):e.projScale})),new s.F("nearFar",((e,t)=>t.camera.nearFar))),t.code.add(c.g`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${c.g.float(.08)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),t.code.add(c.g`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${c.g.int(4)}; r <= ${c.g.int(4)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      fragColor = vec4(b / w_total);
    }
  `),e}},Symbol.toStringTag,{value:"Module"}))},50644:(e,t,r)=>{r.d(t,{S:()=>n});var i=r(52978),o=r(99520);function n(e,t=!0){e.attributes.add(o.V.POSITION,"vec2"),t&&e.varyings.add("uv","vec2"),e.vertex.code.add(i.g`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?i.g`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}},96457:(e,t,r)=>{r.d(t,{B:()=>i,S:()=>d,U:()=>l});var i,o,n=r(60991),a=r(92143),s=r(8498);(o=i||(i={}))[o.Pass=0]="Pass",o[o.Draw=1]="Draw";class l{constructor(e,t,r,o,n=null){this.name=e,this.type=t,this.arraySize=n,this.bind={[i.Pass]:null,[i.Draw]:null},null!=r&&null!=o&&(this.bind[r]=o)}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}const c=a.L.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class u{constructor(){this._includedModules=new Map}include(e,t){if(this._includedModules.has(e)){const r=this._includedModules.get(e);if(r!==t){c.error("Trying to include shader module multiple times with different sets of options.");const t=new Set;for(const i of Object.keys(r))r[i]!==e[i]&&t.add(i);for(const i of Object.keys(e))r[i]!==e[i]&&t.add(i);t.forEach((t=>console.error(`  ${t}: current ${r[t]} new ${e[t]}`)))}}else this._includedModules.set(e,t),e(this.builder,t)}}class d extends u{constructor(){super(...arguments),this.vertex=new f,this.fragment=new f,this.attributes=new p,this.varyings=new g,this.extensions=new v,this.constants=new _}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),i=this.varyings.generateSource(e),o="vertex"===e?this.vertex:this.fragment,n=o.uniforms.generateSource(),a=o.code.generateSource(),s="vertex"===e?x:T,l=this.constants.generateSource().concat(o.constants.generateSource());return`#version 300 es\n${t.join("\n")}\n\n${s}\n\n${l.join("\n")}\n\n${n.join("\n")}\n\n${r.join("\n")}\n\n${i.join("\n")}\n\n${a.join("\n")}`}generateBind(e,t){const r=new Map;this.vertex.uniforms.entries.forEach((t=>{const i=t.bind[e];null!=i&&r.set(t.name,i)})),this.fragment.uniforms.entries.forEach((t=>{const i=t.bind[e];null!=i&&r.set(t.name,i)}));const i=Array.from(r.values()),o=i.length;return(e,r,n)=>{for(let a=0;a<o;++a)i[a](t,e,r,n)}}}class h{constructor(){this._entries=new Map}add(...e){for(const t of e)this._add(t)}get(e){return this._entries.get(e)}_add(e){if(null!=e){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new n.Z(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else c.error(`Trying to add null Uniform from ${(new Error).stack}.`)}generateSource(){return Array.from(this._entries.values()).map((e=>null!=e.arraySize?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`))}get entries(){return Array.from(this._entries.values())}}class m{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class f extends u{constructor(){super(...arguments),this.uniforms=new h,this.code=new m,this.constants=new _}get builder(){return this}}class p{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`in ${e[1]} ${e[0]};`))}}class g{constructor(){this._entries=new Map}add(e,t){this._entries.has(e)&&(0,s.a)(this._entries.get(e)===t),this._entries.set(e,t)}generateSource(e){const t=new Array;return this._entries.forEach(((r,i)=>t.push("vertex"===e?`out ${r} ${i};`:`in ${r} ${i};`))),t}}class v{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?v.ALLOWLIST_VERTEX:v.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}v.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],v.ALLOWLIST_VERTEX=[];class _{constructor(){this._entries=new Set}add(e,t,r){let i="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":i=_._numberToFloatStr(r);break;case"int":i=_._numberToIntStr(r);break;case"bool":i=r.toString();break;case"vec2":i=`vec2(${_._numberToFloatStr(r[0])},                            ${_._numberToFloatStr(r[1])})`;break;case"vec3":i=`vec3(${_._numberToFloatStr(r[0])},                            ${_._numberToFloatStr(r[1])},                            ${_._numberToFloatStr(r[2])})`;break;case"vec4":i=`vec4(${_._numberToFloatStr(r[0])},                            ${_._numberToFloatStr(r[1])},                            ${_._numberToFloatStr(r[2])},                            ${_._numberToFloatStr(r[3])})`;break;case"ivec2":i=`ivec2(${_._numberToIntStr(r[0])},                             ${_._numberToIntStr(r[1])})`;break;case"ivec3":i=`ivec3(${_._numberToIntStr(r[0])},                             ${_._numberToIntStr(r[1])},                             ${_._numberToIntStr(r[2])})`;break;case"ivec4":i=`ivec4(${_._numberToIntStr(r[0])},                             ${_._numberToIntStr(r[1])},                             ${_._numberToIntStr(r[2])},                             ${_._numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${t}(${Array.prototype.map.call(r,(e=>_._numberToFloatStr(e))).join(", ")})`}return this._entries.add(`const ${t} ${e} = ${i};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const T="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif\n\nout vec4 fragColor;",x="precision highp float;\nprecision highp sampler2D;"},503:(e,t,r)=>{var i;r.d(t,{S:()=>i}),function(e){e[e.Color=0]="Color",e[e.Depth=1]="Depth",e[e.Normal=2]="Normal",e[e.Shadow=3]="Shadow",e[e.ShadowHighlight=4]="ShadowHighlight",e[e.ShadowExcludeHighlight=5]="ShadowExcludeHighlight",e[e.Highlight=6]="Highlight",e[e.Alpha=7]="Alpha",e[e.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",e[e.COUNT=9]="COUNT"}(i||(i={}))},8036:(e,t,r)=>{r.d(t,{S:()=>o,p:()=>n});var i=r(52978);class o extends i.N{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}function n(e={}){return(t,r)=>{if(t._parameterNames=t._parameterNames??[],t._parameterNames.push(r),null!=e.constValue)Object.defineProperty(t,r,{get:()=>e.constValue});else{const i=t._parameterNames.length-1,o=e.count||2,n=Math.ceil(Math.log2(o)),a=t._parameterBits??[0];let s=0;for(;a[s]+n>16;)s++,s>=a.length&&a.push(0);t._parameterBits=a;const l=a[s],c=(1<<n)-1<<l;a[s]+=n,Object.defineProperty(t,r,{get(){return this[i]},set(e){if(this[i]!==e&&(this[i]=e,this._keyDirty=!0,this._parameterBits[s]=this._parameterBits[s]&~c|+e<<l&c,"number"!=typeof e&&"boolean"!=typeof e))throw new Error("Configuration value for "+r+" must be boolean or number, got "+typeof e)}})}}}},63991:(e,t,r)=>{r.d(t,{S:()=>c});var i=r(65775),o=r(57532),n=r(72836),a=r(66106),s=r(81733),l=(r(48218),r(52978));function c(e,t){!function(e,t,...r){if(!t.hasSlicePlane){const r=l.g`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return t.hasSliceInVertexProgram&&e.vertex.code.add(r),void e.fragment.code.add(r)}t.hasSliceInVertexProgram&&e.vertex.uniforms.add(...r),e.fragment.uniforms.add(...r);const i=l.g`struct SliceFactors {
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
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,o=l.g`vec4 applySliceHighlight(vec4 color, vec3 pos) {
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
}`,n=t.hasSliceHighlight?l.g`
        ${o}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:l.g`#define highlightSlice(_color_, _pos_) (_color_)`;t.hasSliceInVertexProgram&&e.vertex.code.add(i),e.fragment.code.add(i),e.fragment.code.add(n)}(e,t,new s.F("slicePlaneOrigin",((e,r)=>function(e,t,r){if(null==r.slicePlane)return a.Z;const i=u(e,t,r),o=d(i,r.slicePlane),s=h(e,i,r);return null!=s?(0,n.d)(p,o,s):o}(t,e,r))),new s.F("slicePlaneBasis1",((e,r)=>m(t,e,r,r.slicePlane?.basis1))),new s.F("slicePlaneBasis2",((e,r)=>m(t,e,r,r.slicePlane?.basis2))))}function u(e,t,r){return e.instancedDoublePrecision?(0,n.s)(f,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function d(e,t){return null!=e?(0,n.b)(p,t.origin,e):t.origin}function h(e,t,r){return e.hasSliceTranslatedView?null!=t?(0,i.n)(v,r.camera.viewMatrix,t):r.camera.viewMatrix:null}function m(e,t,r,i){if(null==i||null==r.slicePlane)return a.Z;const o=u(e,t,r),s=d(o,r.slicePlane),l=h(e,o,r);return null!=l?((0,n.a)(g,i,s),(0,n.d)(p,s,l),(0,n.d)(g,g,l),(0,n.b)(g,g,p)):i}const f=(0,a.c)(),p=(0,a.c)(),g=(0,a.c)(),v=(0,o.c)()},10638:(e,t,r)=>{r.d(t,{G:()=>m,T:()=>g,a:()=>_,c:()=>h,g:()=>p,w:()=>d});var i=r(60991),o=r(48578),n=r(82426),a=r(92143),s=r(60218),l=r(51006);const c=a.L.getLogger("esri.views.webgl.checkWebGLError"),u=!!(0,o.h)("enable-feature:webgl-debug");function d(){return u}function h(e){if(d()){const t=e.getError();if(t){const r=function(e,t){switch(t){case e.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case e.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case e.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case e.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case e.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case e.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}(e,t),o=(new Error).stack;c.error(new i.Z("webgl-error","WebGL error occured",{message:r,stack:o}))}}}var m,f;function p(e){switch(e){case l.P.ALPHA:case l.P.LUMINANCE:case l.P.RED:case l.P.RED_INTEGER:case l.S.R8:case l.S.R8I:case l.S.R8UI:case l.S.R8_SNORM:case l.R.STENCIL_INDEX8:return 1;case l.P.LUMINANCE_ALPHA:case l.P.RG:case l.P.RG_INTEGER:case l.S.RGBA4:case l.S.R16F:case l.S.R16I:case l.S.R16UI:case l.S.RG8:case l.S.RG8I:case l.S.RG8UI:case l.S.RG8_SNORM:case l.S.RGB565:case l.S.RGB5_A1:case l.R.DEPTH_COMPONENT16:return 2;case l.P.DEPTH_COMPONENT:case l.P.RGB:case l.P.RGB_INTEGER:case l.S.RGB8:case l.S.RGB8I:case l.S.RGB8UI:case l.S.RGB8_SNORM:case l.S.SRGB8:case l.R.DEPTH_COMPONENT24:return 3;case l.P.DEPTH_STENCIL:case l.P.DEPTH24_STENCIL8:case l.P.RGBA:case l.P.RGBA_INTEGER:case l.S.RGBA8:case l.S.R32F:case l.S.R11F_G11F_B10F:case l.S.RG16F:case l.S.R32I:case l.S.R32UI:case l.S.RG16I:case l.S.RG16UI:case l.S.RGBA8I:case l.S.RGBA8UI:case l.S.RGBA8_SNORM:case l.S.SRGB8_ALPHA8:case l.S.RGB9_E5:case l.S.RGB10_A2UI:case l.S.RGB10_A2:case l.R.DEPTH_STENCIL:case l.R.DEPTH_COMPONENT32F:case l.R.DEPTH24_STENCIL8:return 4;case l.R.DEPTH32F_STENCIL8:return 5;case l.S.RGB16F:case l.S.RGB16I:case l.S.RGB16UI:return 6;case l.S.RG32F:case l.S.RG32I:case l.S.RG32UI:case l.S.RGBA16F:case l.S.RGBA16I:case l.S.RGBA16UI:return 8;case l.S.RGB32F:case l.S.RGB32I:case l.S.RGB32UI:return 12;case l.S.RGBA32F:case l.S.RGBA32I:case l.S.RGBA32UI:return 16;case l.C.COMPRESSED_RGB_S3TC_DXT1_EXT:case l.C.COMPRESSED_RGBA_S3TC_DXT1_EXT:return.5;case l.C.COMPRESSED_RGBA_S3TC_DXT3_EXT:case l.C.COMPRESSED_RGBA_S3TC_DXT5_EXT:return 1;case l.C.COMPRESSED_R11_EAC:case l.C.COMPRESSED_SIGNED_R11_EAC:case l.C.COMPRESSED_RGB8_ETC2:case l.C.COMPRESSED_SRGB8_ETC2:case l.C.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:case l.C.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:return.5;case l.C.COMPRESSED_RG11_EAC:case l.C.COMPRESSED_SIGNED_RG11_EAC:case l.C.COMPRESSED_RGBA8_ETC2_EAC:case l.C.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:return 1}return 0}(f=m||(m={}))[f.Texture=0]="Texture",f[f.RenderBuffer=1]="RenderBuffer";class g{constructor(e=0,t=e){this.width=e,this.height=t,this.target=l.a.TEXTURE_2D,this.pixelFormat=l.P.RGBA,this.dataType=l.b.UNSIGNED_BYTE,this.samplingMode=l.c.LINEAR,this.wrapMode=l.T.REPEAT,this.maxAnisotropy=1,this.flipped=!1,this.hasMipmap=!1,this.isOpaque=!1,this.unpackAlignment=4,this.preMultiplyAlpha=!1,this.depth=1,this.isImmutable=!1}}class v extends g{constructor(e,t){switch(super(),this.context=e,Object.assign(this,t),this.internalFormat){case l.S.R16F:case l.S.R16I:case l.S.R16UI:case l.S.R32F:case l.S.R32I:case l.S.R32UI:case l.S.R8_SNORM:case l.S.R8:case l.S.R8I:case l.S.R8UI:this.pixelFormat=l.P.RED}}static validate(e,t){return new v(e,t)}}let _=class{constructor(e,t=null,r=null){if(this.type=m.Texture,this._glName=null,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._wasImmutablyAllocated=!1,"context"in e)this._descriptor=e,r=t;else{const r=v.validate(e,t);if(!r)throw new i.Z("Texture descriptor invalid");this._descriptor=r}if(this._descriptor.context.instanceCounter.increment(l.d.Texture,this),this._descriptor.context.type!==s.C.WEBGL2&&(this._descriptor.isImmutable&&(this._descriptor.isImmutable=!1),A(this._descriptor.target)))throw new i.Z("3D and array textures are not supported in WebGL1");this._descriptor.target===l.a.TEXTURE_CUBE_MAP?this._setDataCubeMap(r):this.setData(r)}get glName(){return this._glName}get descriptor(){return this._descriptor}get gpuMemoryUsage(){return R.delete(this),(e=this._descriptor).width<=0||e.height<=0||null==e.internalFormat?0:e.width*e.height*(e.hasMipmap?4/3:1)*p(e.internalFormat);var e}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._descriptor.context.gl&&this._glName&&(this._descriptor.context.unbindTexture(this),this._descriptor.context.gl.deleteTexture(this._glName),this._glName=null,this._descriptor.context.instanceCounter.decrement(l.d.Texture,this))}release(){this.dispose()}resize(e,t){const r=this._descriptor;if(r.width!==e||r.height!==t){if(this._wasImmutablyAllocated)throw new i.Z("Immutable textures can't be resized!");r.width=e,r.height=t,this._descriptor.target===l.a.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null)}}_setDataCubeMap(e=null){for(let t=l.a.TEXTURE_CUBE_MAP_POSITIVE_X;t<=l.a.TEXTURE_CUBE_MAP_NEGATIVE_Z;t++)this._setData(e,t)}setData(e){this._setData(e)}_setData(e,t){if(!this._descriptor.context||!this._descriptor.context.gl)return;const r=this._descriptor.context.gl;h(r),this._glName||(this._glName=r.createTexture()),void 0===e&&(e=null);const o=this._descriptor,n=t??o.target,a=A(n);null===e&&(o.width=o.width||4,o.height=o.height||4,a&&(o.depth=o.depth??1));const s=this._descriptor.context.bindTexture(this,_.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(_.TEXTURE_UNIT_FOR_UPDATES),T(this._descriptor.context,o),this._configurePixelStorage(),h(r);const c=this._deriveInternalFormat();if(E(e)){let t=e.width,i=e.height;const s=1;e instanceof HTMLVideoElement&&(t=e.videoWidth,i=e.videoHeight),o.width&&o.height,a&&o.depth,o.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(n,c,o.hasMipmap,t,i,s),this._texImage(n,0,c,t,i,s,e),h(r),o.hasMipmap&&this.generateMipmap(),o.width||(o.width=t),o.height||(o.height=i),a&&!o.depth&&(o.depth=s)}else{const{width:t,height:s,depth:u}=o;if(null==t||null==s)throw new i.Z("Width and height must be specified!");if(a&&null==u)throw new i.Z("Depth must be specified!");if(o.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(n,c,o.hasMipmap,t,s,u),S(e)){const a=e.levels,d=C(n,t,s,u),h=Math.min(d-1,a.length-1);null!=this._descriptor.context.gl2?r.texParameteri(o.target,this._descriptor.context.gl2.TEXTURE_MAX_LEVEL,h):o.hasMipmap=o.hasMipmap&&d===a.length;const m=c;if(!(m in l.C))throw new i.Z("Attempting to use compressed data with an uncompressed format!");this._forEachMipmapLevel(((e,t,r,i)=>{const o=a[Math.min(e,a.length-1)];this._compressedTexImage(n,e,m,t,r,i,o)}),h)}else this._texImage(n,0,c,t,s,u,e),h(r),o.hasMipmap&&this.generateMipmap()}x(r,this._descriptor),b(r,this._descriptor),function(e,t){const r=e.capabilities.textureFilterAnisotropic;r&&e.gl.texParameterf(t.target,r.TEXTURE_MAX_ANISOTROPY,t.maxAnisotropy??1)}(this._descriptor.context,this._descriptor),h(r),this._descriptor.context.bindTexture(s,_.TEXTURE_UNIT_FOR_UPDATES)}updateData(e,t,r,o,n,a,s=0){a||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const l=this._descriptor.context.gl,c=this._descriptor.context.gl2,u=this._descriptor,d=this._deriveInternalFormat(),{pixelFormat:h,dataType:m,target:f,isImmutable:p}=u;if(p&&!this._wasImmutablyAllocated)throw new i.Z("Cannot update immutable texture before allocation!");const g=this._descriptor.context.bindTexture(this,_.TEXTURE_UNIT_FOR_UPDATES,!0);if((t<0||r<0||o>u.width||n>u.height||t+o>u.width||r+n>u.height)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),s){if(!c)return void console.error("Webgl2 must be enabled to use dataRowOffset!");l.pixelStorei(c.UNPACK_SKIP_ROWS,s)}if(E(a)?c?c.texSubImage2D(f,e,t,r,o,n,h,m,a):l.texSubImage2D(f,e,t,r,h,m,a):S(a)?l.compressedTexSubImage2D(f,e,t,r,o,n,d,a.levels[e]):l.texSubImage2D(f,e,t,r,o,n,h,m,a),s){if(!c)return void console.error("Webgl2 must be enabled to use dataRowOffset!");l.pixelStorei(c.UNPACK_SKIP_ROWS,0)}this._descriptor.context.bindTexture(g,_.TEXTURE_UNIT_FOR_UPDATES)}updateData3D(e,t,r,o,n,a,s,l){l||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const c=this._descriptor.context.gl2;if(null==c)throw new i.Z("3D textures are not supported in WebGL1");const u=this._descriptor,d=this._deriveInternalFormat(),{pixelFormat:h,dataType:m,isImmutable:f,target:p}=u;if(f&&!this._wasImmutablyAllocated)throw new i.Z("Cannot update immutable texture before allocation!");A(p)||console.warn("Attempting to set 3D texture data on a non-3D texture");const g=this._descriptor.context.bindTexture(this,_.TEXTURE_UNIT_FOR_UPDATES);if(this._descriptor.context.setActiveTexture(_.TEXTURE_UNIT_FOR_UPDATES),(t<0||r<0||o<0||n>u.width||a>u.height||s>u.depth||t+n>u.width||r+a>u.height||o+s>u.depth)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),S(l))l=l.levels[e],c.compressedTexSubImage3D(p,e,t,r,o,n,a,s,d,l);else{const i=l;c.texSubImage3D(p,e,t,r,o,n,a,s,h,m,i)}this._descriptor.context.bindTexture(g,_.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const e=this._descriptor;if(!e.hasMipmap){if(this._wasImmutablyAllocated)throw new i.Z("Cannot add mipmaps to immutable texture after allocation");e.hasMipmap=!0,this._samplingModeDirty=!0,T(this._descriptor.context,e)}e.samplingMode===l.c.LINEAR?(this._samplingModeDirty=!0,e.samplingMode=l.c.LINEAR_MIPMAP_NEAREST):e.samplingMode===l.c.NEAREST&&(this._samplingModeDirty=!0,e.samplingMode=l.c.NEAREST_MIPMAP_NEAREST);const t=this._descriptor.context.bindTexture(this,_.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(_.TEXTURE_UNIT_FOR_UPDATES),this._descriptor.context.gl.generateMipmap(e.target),this._descriptor.context.bindTexture(t,_.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}setWrapMode(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,T(this._descriptor.context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const e=this._descriptor.context.gl,t=this._descriptor;this._samplingModeDirty&&(x(e,t),this._samplingModeDirty=!1),this._wrapModeDirty&&(b(e,t),this._wrapModeDirty=!1)}_deriveInternalFormat(){if(this._descriptor.context.type===s.C.WEBGL1)return this._descriptor.internalFormat=this._descriptor.pixelFormat;if(null!=this._descriptor.internalFormat)return this._descriptor.internalFormat===l.P.DEPTH_STENCIL&&(this._descriptor.internalFormat=l.P.DEPTH24_STENCIL8),this._descriptor.internalFormat;switch(this._descriptor.dataType){case l.b.FLOAT:switch(this._descriptor.pixelFormat){case l.P.RGBA:return this._descriptor.internalFormat=l.S.RGBA32F;case l.P.RGB:return this._descriptor.internalFormat=l.S.RGB32F;default:throw new i.Z("Unable to derive format")}case l.b.UNSIGNED_BYTE:switch(this._descriptor.pixelFormat){case l.P.RGBA:return this._descriptor.internalFormat=l.S.RGBA8;case l.P.RGB:return this._descriptor.internalFormat=l.S.RGB8}}return this._descriptor.internalFormat=this._descriptor.pixelFormat===l.P.DEPTH_STENCIL?l.P.DEPTH24_STENCIL8:this._descriptor.pixelFormat}_configurePixelStorage(){const e=this._descriptor.context.gl,{unpackAlignment:t,flipped:r,preMultiplyAlpha:i}=this._descriptor;e.pixelStorei(e.UNPACK_ALIGNMENT,t),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r?1:0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i?1:0)}_texStorage(e,t,r,o,n,a){const s=this._descriptor.context.gl2;if(null==s)throw new i.Z("Immutable textures are not supported in WebGL1");if(!(t in l.S))throw new i.Z("Immutable textures must have a sized internal format");if(!this._descriptor.isImmutable)return;const c=r?C(e,o,n,a):1;if(A(e)){if(null==a)throw new i.Z("Missing depth dimension for 3D texture upload");s.texStorage3D(e,c,t,o,n,a)}else s.texStorage2D(e,c,t,o,n);this._wasImmutablyAllocated=!0}_texImage(e,t,r,o,n,a,l){const c=this._descriptor.context.gl,u=A(e),{isImmutable:d,pixelFormat:h,dataType:m}=this._descriptor,f=this._descriptor.context.type===s.C.WEBGL2,p=f?c:null;if(f||!E(l))if(d){if(null!=l){const r=l;if(u){if(null==a)throw new i.Z("Missing depth dimension for 3D texture upload");p.texSubImage3D(e,t,0,0,0,o,n,a,h,m,r)}else c.texSubImage2D(e,t,0,0,o,n,h,m,r)}}else{const s=l;if(u){if(null==a)throw new i.Z("Missing depth dimension for 3D texture upload");p.texImage3D(e,t,r,o,n,a,0,h,m,s)}else c.texImage2D(e,t,r,o,n,0,h,m,s)}else c.texImage2D(e,0,r,h,m,l)}_compressedTexImage(e,t,r,o,n,a,l){const c=this._descriptor.context.gl;let u=null;const d=A(e),h=this._descriptor.isImmutable;if(d){if(this._descriptor.context.type!==s.C.WEBGL2)throw new i.Z("3D textures are not supported in WebGL1");u=c}if(h){if(null!=l)if(d){if(null==a)throw new i.Z("Missing depth dimension for 3D texture upload");u.compressedTexSubImage3D(e,t,0,0,0,o,n,a,r,l)}else c.compressedTexSubImage2D(e,t,0,0,o,n,r,l)}else if(d){if(null==a)throw new i.Z("Missing depth dimension for 3D texture upload");u.compressedTexImage3D(e,t,r,o,n,a,0,l)}else c.compressedTexImage2D(e,t,r,o,n,0,l)}_forEachMipmapLevel(e,t=1/0){let{width:r,height:o,depth:n,hasMipmap:a,target:s}=this._descriptor;const c=s===l.a.TEXTURE_3D;if(null==r||null==o||c&&null==n)throw new i.Z("Missing texture dimensions for mipmap calculation");for(let i=0;e(i,r,o,n),a&&(1!==r||1!==o||c&&1!==n)&&!(i>=t);++i)r=Math.max(1,r>>1),o=Math.max(1,o>>1),c&&(n=Math.max(1,n>>1))}};function T(e,t){(null!=t.width&&t.width<0||null!=t.height&&t.height<0||null!=t.depth&&t.depth<0)&&console.error("Negative dimension parameters are not allowed!");const r=e.type===s.C.WEBGL2;r||!t.isImmutable&&!A(t.target)||console.error("Immutable and 3D-like textures are not supported in WebGL1!"),r||null!=t.width&&(0,n.i)(t.width)&&null!=t.height&&(0,n.i)(t.height)||("number"==typeof t.wrapMode?t.wrapMode!==l.T.CLAMP_TO_EDGE&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):t.wrapMode.s===l.T.CLAMP_TO_EDGE&&t.wrapMode.t===l.T.CLAMP_TO_EDGE||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),t.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}function x(e,t){let r=t.samplingMode,i=t.samplingMode;r===l.c.LINEAR_MIPMAP_NEAREST||r===l.c.LINEAR_MIPMAP_LINEAR?(r=l.c.LINEAR,t.hasMipmap||(i=l.c.LINEAR)):r!==l.c.NEAREST_MIPMAP_NEAREST&&r!==l.c.NEAREST_MIPMAP_LINEAR||(r=l.c.NEAREST,t.hasMipmap||(i=l.c.NEAREST)),e.texParameteri(t.target,e.TEXTURE_MAG_FILTER,r),e.texParameteri(t.target,e.TEXTURE_MIN_FILTER,i)}function b(e,t){"number"==typeof t.wrapMode?(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode)):(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode.s),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode.t))}function S(e){return null!=e&&"type"in e&&"compressed"===e.type}function E(e){return null!=e&&!S(e)&&!function(e){return null!=e&&"byteLength"in e}(e)}function A(e){return e===l.a.TEXTURE_3D||e===l.a.TEXTURE_2D_ARRAY}function C(e,t,r,i=1){let o=Math.max(t,r);return e===l.a.TEXTURE_3D&&(o=Math.max(o,i)),Math.round(Math.log(o)/Math.LN2)+1}_.TEXTURE_UNIT_FOR_UPDATES=0;const R=new Map},85633:(e,t,r)=>{r.d(t,{T:()=>o});var i=r(96457);class o extends i.U{constructor(e,t){super(e,"sampler2D",i.B.Draw,((r,i,o)=>r.bindTexture(e,t(i,o))))}}},52050:(e,t,r)=>{r.d(t,{T:()=>o});var i=r(96457);class o extends i.U{constructor(e,t){super(e,"sampler2D",i.B.Pass,((r,i,o)=>r.bindTexture(e,t(i,o))))}}},28028:(e,t,r)=>{r.d(t,{T:()=>n});var i=r(1280),o=r(52978);function n(e){(0,i.b)(e),e.vertex.code.add(o.g`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(o.g`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},11939:(e,t,r)=>{var i;r.d(t,{T:()=>i}),function(e){e[e.Color=0]="Color",e[e.Alpha=1]="Alpha",e[e.FrontFace=2]="FrontFace",e[e.NONE=3]="NONE",e[e.COUNT=4]="COUNT"}(i||(i={}))},10738:(e,t,r)=>{r.d(t,{V:()=>o});var i=r(60991);let o=class{constructor(e,t,r=""){this.major=e,this.minor=t,this._context=r}lessThan(e,t){return this.major<e||e===this.major&&this.minor<t}since(e,t){return!this.lessThan(e,t)}validate(e){if(this.major!==e.major){const t=this._context&&this._context+":",r=this._context&&this._context+" ";throw new i.Z(t+"unsupported-version",`Required major ${r}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:e})}}clone(){return new o(this.major,this.minor,this._context)}static parse(e,t=""){const[r,n]=e.split("."),a=/^\s*\d+\s*$/;if(!r||!r.match||!a.test(r))throw new i.Z((t&&t+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:e});if(!n||!n.match||!a.test(n))throw new i.Z((t&&t+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:e});const s=parseInt(r,10),l=parseInt(n,10);return new o(s,l,t)}}},99977:(e,t,r)=>{r.d(t,{V:()=>n});var i=r(52978),o=r(99520);function n(e,t){t.hasVertexColors?(e.attributes.add(o.V.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(i.g`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(i.g`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(i.g`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},41169:(e,t,r)=>{r.d(t,{N:()=>h,V:()=>p,a:()=>f,b:()=>i,c:()=>m});var i,o,n=r(48190),a=r(16912),s=r(68681),l=r(52978),c=r(99520),u=r(1280),d=r(75308);function h(e,t){switch(t.normalType){case i.Compressed:e.attributes.add(c.V.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(l.g`vec3 normalModel() {
float z = 1.0 - abs(normalCompressed.x) - abs(normalCompressed.y);
return vec3(normalCompressed + sign(normalCompressed) * min(z, 0.0), z);
}`);break;case i.Attribute:e.attributes.add(c.V.NORMAL,"vec3"),e.vertex.code.add(l.g`vec3 normalModel() {
return normal;
}`);break;case i.ScreenDerivative:e.fragment.code.add(l.g`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,n.n)(t.normalType);case i.COUNT:case i.Ground:}}function m(e,t){switch(t.normalType){case i.Attribute:case i.Compressed:e.include(h,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new u.M("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel)),new d.M("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))),e.vertex.code.add(l.g`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case i.Ground:e.include(u.e,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(l.g`
        void forwardNormal() {
          vNormalWorld = ${t.spherical?l.g`normalize(vPositionWorldCameraRelative);`:l.g`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case i.ScreenDerivative:e.vertex.code.add(l.g`void forwardNormal() {}`);break;default:(0,n.n)(t.normalType);case i.COUNT:}}(o=i||(i={}))[o.Attribute=0]="Attribute",o[o.Compressed=1]="Compressed",o[o.Ground=2]="Ground",o[o.ScreenDerivative=3]="ScreenDerivative",o[o.COUNT=4]="COUNT";class f extends u.d{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,a.c)()}}class p extends u.V{constructor(){super(...arguments),this.transformNormalGlobalFromModel=(0,a.c)(),this.toMapSpace=(0,s.c)()}}},28579:(e,t,r)=>{r.d(t,{V:()=>u});var i=r(7200),o=r(68681),n=r(72958),a=r(52978),s=r(81733);function l(e){e.vertex.code.add(a.g`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),e.vertex.code.add(a.g`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(a.g`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),e.vertex.code.add(a.g`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),e.vertex.code.add(a.g`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(a.g`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),e.vertex.code.add(a.g`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}const c=(0,o.c)();function u(e,t){const r=e.vertex;t.hasVerticalOffset?(function(e){e.uniforms.add(new n.F("verticalOffset",((e,t)=>{const{minWorldLength:r,maxWorldLength:o,screenLength:n}=e.verticalOffset,a=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),s=t.camera.pixelRatio||1;return(0,i.s)(d,n*s,a,r,o)})))}(r),t.hasScreenSizePerspective&&(e.include(l),function(e){e.uniforms.add(new n.F("screenSizePerspectiveAlignment",(e=>function(e){return(0,i.s)(c,e.parameters.divisor,e.parameters.offset,e.parameters.minPixelSize,e.paddingPixelsOverride)}(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}(r),(0,s.c)(e.vertex,t)),r.code.add(a.g`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?a.g`vec3 worldNormal = normalize(worldPos + localOrigin);`:a.g`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?a.g`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:a.g`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(a.g`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const d=(0,o.c)()},81733:(e,t,r)=>{r.d(t,{F:()=>v,a:()=>x,c:()=>T,g:()=>E});var i,o,n,a,s,l,c,u=r(65775),d=r(57532),h=r(72836),m=r(66106),f=(r(92482),r(33417),r(96457)),p=r(48218),g=(r(51947),r(40869));class v extends f.U{constructor(e,t){super(e,"vec3",f.B.Draw,((r,i,o,n)=>r.setUniform3fv(e,t(i,o,n))))}}(c=i||(i={}))[c.INNER=0]="INNER",c[c.OUTER=1]="OUTER",function(e){e[e.REGULAR=0]="REGULAR",e[e.HAS_NORTH_POLE=1]="HAS_NORTH_POLE",e[e.HAS_SOUTH_POLE=2]="HAS_SOUTH_POLE",e[e.HAS_BOTH_POLES=3]="HAS_BOTH_POLES"}(o||(o={})),function(e){e[e.OFF=0]="OFF",e[e.ON=1]="ON"}(n||(n={})),function(e){e[e.Color=0]="Color",e[e.ColorNoRasterImage=1]="ColorNoRasterImage",e[e.Highlight=2]="Highlight",e[e.Water=3]="Water",e[e.Occluded=4]="Occluded",e[e.ObjectAndLayerIdColor=5]="ObjectAndLayerIdColor"}(a||(a={})),function(e){e[e.FADING=0]="FADING",e[e.IMMEDIATE=1]="IMMEDIATE",e[e.UNFADED=2]="UNFADED"}(s||(s={})),function(e){e[e.None=0]="None",e[e.ColorAndWater=1]="ColorAndWater",e[e.Highlight=2]="Highlight",e[e.Occluded=3]="Occluded",e[e.ObjectAndLayerIdColor=4]="ObjectAndLayerIdColor"}(l||(l={}));class _ extends f.U{constructor(e,t){super(e,"mat4",f.B.Draw,((r,i,o)=>r.setUniformMatrix4fv(e,t(i,o))))}}function T(e,t){t.instancedDoublePrecision?e.constants.add("cameraPosition","vec3",m.Z):e.uniforms.add(new v("cameraPosition",((e,t)=>(0,h.s)(S,t.camera.viewInverseTransposeMatrix[3]-e.origin[0],t.camera.viewInverseTransposeMatrix[7]-e.origin[1],t.camera.viewInverseTransposeMatrix[11]-e.origin[2]))))}function x(e,t){if(!t.instancedDoublePrecision)return void e.uniforms.add(new g.M("proj",((e,t)=>t.camera.projectionMatrix)),new _("view",((e,t)=>(0,u.n)(b,t.camera.viewMatrix,e.origin))),new v("localOrigin",(e=>e.origin)));const r=e=>(0,h.s)(S,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]);e.uniforms.add(new g.M("proj",((e,t)=>t.camera.projectionMatrix)),new g.M("view",((e,t)=>(0,u.n)(b,t.camera.viewMatrix,r(t)))),new p.F("localOrigin",((e,t)=>r(t))))}const b=(0,d.c)(),S=(0,m.c)();function E(e){e.uniforms.add(new g.M("viewNormal",((e,t)=>t.camera.viewInverseTransposeMatrix)))}},3808:(e,t,r)=>{var i;r.d(t,{V:()=>i}),function(e){e[e.Global=1]="Global",e[e.Local=2]="Local"}(i||(i={}))},17303:(e,t,r)=>{r.d(t,{V:()=>b});var i=r(48218),o=(r(48578),r(82426),r(26923),r(65775),r(57532)),n=(r(72836),r(66106)),a=(r(85557),r(29768)),s=r(21972),l=r(34250),c=(r(91306),r(17533)),u=r(52978),d=(r(13159),r(96457));let h=class extends s.Z{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};var m,f,p;(0,a._)([(0,l.Cb)()],h.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),(0,a._)([(0,l.Cb)()],h.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),(0,a._)([(0,l.Cb)()],h.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),(0,a._)([(0,l.Cb)()],h.prototype,"DECONFLICTOR_SHOW_GRID",void 0),(0,a._)([(0,l.Cb)()],h.prototype,"LABELS_SHOW_BORDER",void 0),(0,a._)([(0,l.Cb)()],h.prototype,"TEXT_SHOW_BASELINE",void 0),(0,a._)([(0,l.Cb)()],h.prototype,"TEXT_SHOW_BORDER",void 0),(0,a._)([(0,l.Cb)()],h.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),(0,a._)([(0,l.Cb)()],h.prototype,"OVERLAY_SHOW_CENTER",void 0),(0,a._)([(0,l.Cb)()],h.prototype,"SHOW_POI",void 0),(0,a._)([(0,l.Cb)()],h.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),(0,a._)([(0,l.Cb)()],h.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),(0,a._)([(0,l.Cb)()],h.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),(0,a._)([(0,l.Cb)()],h.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),(0,a._)([(0,l.Cb)()],h.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),(0,a._)([(0,l.Cb)()],h.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),(0,a._)([(0,l.Cb)()],h.prototype,"I3S_TREE_SHOW_TILES",void 0),(0,a._)([(0,l.Cb)()],h.prototype,"I3S_SHOW_MODIFICATIONS",void 0),(0,a._)([(0,l.Cb)()],h.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),(0,a._)([(0,l.Cb)()],h.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),(0,a._)([(0,l.Cb)()],h.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),(0,a._)([(0,l.Cb)()],h.prototype,"LINE_WIREFRAMES",void 0),h=(0,a._)([(0,c.j)("esri.views.3d.support.DebugFlags")],h),new h,(p=m||(m={}))[p.Undefined=0]="Undefined",p[p.DefinedSize=1]="DefinedSize",p[p.DefinedScale=2]="DefinedScale",function(e){e[e.Undefined=0]="Undefined",e[e.DefinedAngle=1]="DefinedAngle"}(f||(f={})),(0,o.c)(),(0,n.c)(),(0,o.c)();const g=8;class v extends d.U{constructor(e,t,r){super(e,"vec4",d.B.Pass,((r,i,o)=>r.setUniform4fv(e,t(i,o))),r)}}class _ extends d.U{constructor(e,t,r){super(e,"float",d.B.Pass,((r,i,o)=>r.setUniform1fv(e,t(i,o))),r)}}var T=r(75308),x=r(99520);function b(e,t){const{vertex:r,attributes:o}=e;t.hasVvInstancing&&(t.vvSize||t.vvColor)&&o.add(x.V.INSTANCEFEATUREATTRIBUTE,"vec4"),t.vvSize?(r.uniforms.add(new i.F("vvSizeMinSize",(e=>e.vvSize.minSize))),r.uniforms.add(new i.F("vvSizeMaxSize",(e=>e.vvSize.maxSize))),r.uniforms.add(new i.F("vvSizeOffset",(e=>e.vvSize.offset))),r.uniforms.add(new i.F("vvSizeFactor",(e=>e.vvSize.factor))),r.uniforms.add(new T.M("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),r.uniforms.add(new i.F("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),r.code.add(u.g`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(u.g`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.hasVvInstancing?u.g`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(u.g`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(r.constants.add("vvColorNumber","int",g),r.uniforms.add(new _("vvColorValues",(e=>e.vvColor.values),g),new v("vvColorColors",(e=>e.vvColor.colors),g)),r.code.add(u.g`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${t.hasVvInstancing?u.g`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):r.code.add(u.g`vec4 vvColor() { return vec4(1.0); }`)}},79764:(e,t,r)=>{function i(e){return 32+e.length}function o(e){if(!e)return 0;let t=l;for(const r in e)if(e.hasOwnProperty(r)){const o=e[r];switch(typeof o){case"string":t+=i(o);break;case"number":t+=16;break;case"boolean":t+=4}}return t}function n(e){if(!e)return 0;if(Array.isArray(e))return function(e){const t=e.length;if(0===t||"number"==typeof e[0])return 32+8*t;let r=c;for(let i=0;i<t;i++)r+=a(e[i]);return r}(e);let t=l;for(const r in e)e.hasOwnProperty(r)&&(t+=a(e[r]));return t}function a(e){switch(typeof e){case"object":return n(e);case"string":return i(e);case"number":return 16;case"boolean":return 4;default:return 8}}function s(e,t){return c+e.length*t}r.d(t,{a:()=>n,b:()=>s,e:()=>o});const l=32,c=32},60218:(e,t,r)=>{r.d(t,{C:()=>i,c:()=>a,g:()=>s});var i,o,n=r(48578);function a(e,t,r={}){const o=t===i.WEBGL1?["webgl","experimental-webgl","webkit-3d","moz-webgl"]:["webgl2"];for(const t of o){const i=e.getContext(t,r);if(i)return i}return null}function s(e){if("3d"===e)return[i.WEBGL2];const t=(0,n.h)("esri-force-webgl");return t===i.WEBGL1||t===i.WEBGL2?[t]:(0,n.h)("mac")&&(0,n.h)("chrome")?[i.WEBGL1,i.WEBGL2]:[i.WEBGL2,i.WEBGL1]}(o=i||(i={}))[o.WEBGL1=1]="WEBGL1",o[o.WEBGL2=2]="WEBGL2"},49500:(e,t,r)=>{function i(e){return e=e||globalThis.location.hostname,c.some((t=>null!=e?.match(t)))}function o(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(n)||null!=t.match(s)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(a)||null!=t.match(l)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}r.d(t,{a:()=>o,i:()=>i});const n=/^devext.arcgis.com$/,a=/^qaext.arcgis.com$/,s=/^[\w-]*\.mapsdevext.arcgis.com$/,l=/^[\w-]*\.mapsqa.arcgis.com$/,c=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,n,a,/^jsapps.esri.com$/,s,l]},46283:(e,t,r)=>{function i(e,t){const r=e.length;for(let i=0;i<r;++i)n[0]=e[i],t[i]=n[0];return t}function o(e,t){const r=e.length;for(let i=0;i<r;++i)n[0]=e[i],n[1]=e[i]-n[0],t[i]=n[1];return t}r.d(t,{a:()=>i,b:()=>o});const n=new Float32Array(2)},52978:(e,t,r)=>{r.d(t,{N:()=>i,g:()=>o});const i=class{};function o(e,...t){let r="";for(let i=0;i<t.length;i++)r+=e[i]+t[i];return r+=e[e.length-1],r}!function(e){e.int=function(e){return Math.round(e).toString()},e.float=function(e){return e.toPrecision(8)}}(o||(o={}))},94446:(e,t,r)=>{r.d(t,{c:()=>s,f:()=>l,i:()=>c});var i=r(82426),o=r(2420),n=r(72836),a=r(66106);function s(e){return e?{origin:(0,a.e)(e.origin),vector:(0,a.e)(e.vector)}:{origin:(0,a.c)(),vector:(0,a.c)()}}function l(e,t,r=s()){return(0,n.c)(r.origin,e),(0,n.b)(r.vector,t,e),r}function c(e,t,r){return function(e,t,r,a,s){const{vector:l,origin:c}=e,u=(0,n.b)(o.s.get(),t,c),d=(0,n.i)(l,u)/(0,n.D)(l);return(0,n.e)(s,l,(0,i.c)(d,0,1)),(0,n.a)(s,s,e.origin)}(e,t,0,0,r)}(0,a.c)(),(0,a.c)(),new o.O((()=>s()))},26923:(e,t,r)=>{r.d(t,{b:()=>s,c:()=>l,f:()=>o,i:()=>d,m:()=>c,n:()=>u,s:()=>n,t:()=>a});var i=r(29794);function o(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[4],e[4]=t[5],e[5]=t[6],e[6]=t[8],e[7]=t[9],e[8]=t[10],e}function n(e,t,r,i,o,n,a,s,l,c){return e[0]=t,e[1]=r,e[2]=i,e[3]=o,e[4]=n,e[5]=a,e[6]=s,e[7]=l,e[8]=c,e}function a(e,t){if(e===t){const r=t[1],i=t[2],o=t[5];e[1]=t[3],e[2]=t[6],e[3]=r,e[5]=t[7],e[6]=i,e[7]=o}else e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8];return e}function s(e,t){const r=t[0],i=t[1],o=t[2],n=t[3],a=t[4],s=t[5],l=t[6],c=t[7],u=t[8],d=u*a-s*c,h=-u*n+s*l,m=c*n-a*l;let f=r*d+i*h+o*m;return f?(f=1/f,e[0]=d*f,e[1]=(-u*i+o*c)*f,e[2]=(s*i-o*a)*f,e[3]=h*f,e[4]=(u*r-o*l)*f,e[5]=(-s*r+o*n)*f,e[6]=m*f,e[7]=(-c*r+i*l)*f,e[8]=(a*r-i*n)*f,e):null}function l(e,t){const r=t[0],i=t[1],o=t[2],n=t[3],a=t[4],s=t[5],l=t[6],c=t[7],u=t[8];return e[0]=a*u-s*c,e[1]=o*c-i*u,e[2]=i*s-o*a,e[3]=s*l-n*u,e[4]=r*u-o*l,e[5]=o*n-r*s,e[6]=n*c-a*l,e[7]=i*l-r*c,e[8]=r*a-i*n,e}function c(e,t,r){const i=t[0],o=t[1],n=t[2],a=t[3],s=t[4],l=t[5],c=t[6],u=t[7],d=t[8],h=r[0],m=r[1],f=r[2],p=r[3],g=r[4],v=r[5],_=r[6],T=r[7],x=r[8];return e[0]=h*i+m*a+f*c,e[1]=h*o+m*s+f*u,e[2]=h*n+m*l+f*d,e[3]=p*i+g*a+v*c,e[4]=p*o+g*s+v*u,e[5]=p*n+g*l+v*d,e[6]=_*i+T*a+x*c,e[7]=_*o+T*s+x*u,e[8]=_*n+T*l+x*d,e}function u(e,t){const r=t[0],i=t[1],o=t[2],n=t[3],a=t[4],s=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],m=t[11],f=t[12],p=t[13],g=t[14],v=t[15],_=r*s-i*a,T=r*l-o*a,x=r*c-n*a,b=i*l-o*s,S=i*c-n*s,E=o*c-n*l,A=u*p-d*f,C=u*g-h*f,R=u*v-m*f,w=d*g-h*p,y=d*v-m*p,M=h*v-m*g;let O=_*M-T*y+x*w+b*R-S*C+E*A;return O?(O=1/O,e[0]=(s*M-l*y+c*w)*O,e[1]=(l*R-a*M-c*C)*O,e[2]=(a*y-s*R+c*A)*O,e[3]=(o*y-i*M-n*w)*O,e[4]=(r*M-o*R+n*C)*O,e[5]=(i*R-r*y-n*A)*O,e[6]=(p*E-g*S+v*b)*O,e[7]=(g*x-f*E-v*T)*O,e[8]=(f*S-p*x+v*_)*O,e):null}function d(e){const t=(0,i.g)(),r=e[0],o=e[1],n=e[2],a=e[3],s=e[4],l=e[5],c=e[6],u=e[7],d=e[8];return Math.abs(1-(r*r+a*a+c*c))<=t&&Math.abs(1-(o*o+s*s+u*u))<=t&&Math.abs(1-(n*n+l*l+d*d))<=t}},88557:(e,t,r)=>{function i(){const e=new Float32Array(9);return e[0]=1,e[4]=1,e[8]=1,e}function o(e,t,r,i,o,n,a,s,l){const c=new Float32Array(9);return c[0]=e,c[1]=t,c[2]=r,c[3]=i,c[4]=o,c[5]=n,c[6]=a,c[7]=s,c[8]=l,c}r.d(t,{c:()=>i,f:()=>o})},16912:(e,t,r)=>{function i(){return[1,0,0,0,1,0,0,0,1]}function o(e,t,r,i,o,n,a,s,l){return[e,t,r,i,o,n,a,s,l]}function n(e,t){return new Float64Array(e,t,9)}r.d(t,{a:()=>n,c:()=>i,f:()=>o})},57532:(e,t,r)=>{function i(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function o(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function n(e,t){return new Float64Array(e,t,16)}r.d(t,{I:()=>a,a:()=>n,b:()=>o,c:()=>i});const a=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},87557:(e,t,r)=>{r.r(t),r.d(t,{D:()=>Et,a:()=>pt,b:()=>_t,d:()=>ft,f:()=>$t,g:()=>Nt,l:()=>Bt,o:()=>qt,u:()=>mt});var i=r(49500),o=r(26923),n=r(16912),a=r(65775),s=r(57532),l=r(72836),c=r(66106),u=r(53326),d=r(48578),h=r(92457),m=r(33417),f=r(79456),p=r(8498),g=r(13159),v=r(2420),_=r(94446);function T(e,t,r){return(0,l.b)(x,t,e),(0,l.b)(b,r,e),(0,l.l)((0,l.f)(x,x,b))/2}new v.O(_.c),new v.O((()=>({p0:(0,c.c)(),p1:(0,c.c)(),p2:(0,c.c)()})));const x=(0,c.c)(),b=(0,c.c)();var S=r(19657),E=r(99520),A=(r(46283),r(51006)),C=r(40167);class R{constructor(e){this.channel=e,this.id=(0,S.g)()}}function w(e,t=!1){return e<=d.N?t?new Array(e).fill(0):new Array(e):new Float32Array(e)}function y(e){if(e.length<d.N)return Array.from(e);if((0,d.p)(e))return Float64Array.from(e);if(!("BYTES_PER_ELEMENT"in e))return Array.from(e);switch(e.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(e);case 2:return(0,d.e)(e)?Uint16Array.from(e):Int16Array.from(e);case 4:return Float32Array.from(e);default:return Float64Array.from(e)}}(0,c.c)(),new Float32Array(6);class M{constructor(e,t,r,i){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.indices=r,this.position=i,this._children=void 0,(0,p.a)(e.length>=1),(0,p.a)(r.length%this._numIndexPerPrimitive==0),(0,p.a)(r.length>=e.length*this._numIndexPerPrimitive),(0,p.a)(3===i.size||4===i.size);const{data:o,size:n}=i,a=e.length;let s=n*r[this._numIndexPerPrimitive*e[0]];O.clear(),O.push(s);const u=(0,c.f)(o[s],o[s+1],o[s+2]),d=(0,c.e)(u);for(let t=0;t<a;++t){const i=this._numIndexPerPrimitive*e[t];for(let e=0;e<this._numIndexPerPrimitive;++e){s=n*r[i+e],O.push(s);let t=o[s];u[0]=Math.min(t,u[0]),d[0]=Math.max(t,d[0]),t=o[s+1],u[1]=Math.min(t,u[1]),d[1]=Math.max(t,d[1]),t=o[s+2],u[2]=Math.min(t,u[2]),d[2]=Math.max(t,d[2])}}this.bbMin=u,this.bbMax=d;const h=(0,l.x)((0,c.c)(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(d[0]-u[0],d[1]-u[1]),d[2]-u[2]);let m=this.radius*this.radius;for(let e=0;e<O.length;++e){s=O.at(e);const t=o[s]-h[0],r=o[s+1]-h[1],i=o[s+2]-h[2],n=t*t+r*r+i*i;if(n<=m)continue;const a=Math.sqrt(n),l=.5*(a-this.radius);this.radius=this.radius+l,m=this.radius*this.radius;const c=l/a;h[0]+=t*c,h[1]+=r*c,h[2]+=i*c}this.center=h,O.clear()}getChildren(){if(this._children||(0,l.C)(this.bbMin,this.bbMax)<=1)return this._children;const e=(0,l.x)((0,c.c)(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,r=new Uint8Array(t),i=new Array(8);for(let e=0;e<8;++e)i[e]=0;const{data:o,size:n}=this.position;for(let a=0;a<t;++a){let t=0;const s=this._numIndexPerPrimitive*this.primitiveIndices[a];let l=n*this.indices[s],c=o[l],u=o[l+1],d=o[l+2];for(let e=1;e<this._numIndexPerPrimitive;++e){l=n*this.indices[s+e];const t=o[l],r=o[l+1],i=o[l+2];t<c&&(c=t),r<u&&(u=r),i<d&&(d=i)}c<e[0]&&(t|=1),u<e[1]&&(t|=2),d<e[2]&&(t|=4),r[a]=t,++i[t]}let a=0;for(let e=0;e<8;++e)i[e]>0&&++a;if(a<2)return;const s=new Array(8);for(let e=0;e<8;++e)s[e]=i[e]>0?new Uint32Array(i[e]):void 0;for(let e=0;e<8;++e)i[e]=0;for(let e=0;e<t;++e){const t=r[e];s[t][i[t]++]=this.primitiveIndices[e]}this._children=new Array;for(let e=0;e<8;++e)void 0!==s[e]&&this._children.push(new M(s[e],this._numIndexPerPrimitive,this.indices,this.position));return this._children}static prune(){O.prune()}}const O=new f.P({deallocator:null}),P=(0,c.c)(),I=(0,c.c)(),N=(0,c.c)(),L=(0,c.c)();class D extends g.a{constructor(e,t,r=[],i=null,o=g.C.Mesh,n=null,a=-1){super(),this.material=e,this.mapPositions=i,this.type=o,this.objectAndLayerIdColor=n,this.edgeIndicesLength=a,this.visible=!0,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[e,r]of t)r&&this._vertexAttributes.set(e,{...r});if(null==r||0===r.length){const e=function(e){const t=e.values().next().value;return null==t?0:t.data.length/t.size}(this._vertexAttributes),t=(0,h.a)(e);this.edgeIndicesLength=this.edgeIndicesLength<0?e:this.edgeIndicesLength;for(const e of this._vertexAttributes.keys())this._indices.set(e,t)}else for(const[e,t]of r)t&&(this._indices.set(e,(0,h.c)(t)),e===E.V.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(e).length:this.edgeIndicesLength))}instantiate(e={}){const t=new D(e.material||this.material,[],void 0,this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._vertexAttributes.forEach(((e,r)=>{e.exclusive=!1,t._vertexAttributes.set(r,e)})),this._indices.forEach(((e,r)=>t._indices.set(r,e))),t._boundingInfo=this._boundingInfo,t.transformation=e.transformation||this.transformation,t}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){let t=this._vertexAttributes.get(e);return t&&!t.exclusive&&(t={...t,exclusive:!0,data:y(t.data)},this._vertexAttributes.set(e,t)),t}setAttributeData(e,t){const r=this._vertexAttributes.get(e);r&&this._vertexAttributes.set(e,{...r,exclusive:!0,data:t})}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get faceCount(){return this.indexCount/3}get boundingInfo(){return null==this._boundingInfo&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return!!(this.type===g.C.Mesh?this._computeAttachmentOriginTriangles(e):this.type===g.C.Line?this._computeAttachmentOriginLines(e):this._computeAttachmentOriginPoints(e))&&(null!=this._transformation&&(0,l.d)(e,e,this._transformation),!0)}_computeAttachmentOriginTriangles(e){const t=this.indices.get(E.V.POSITION);return function(e,t,r){if(!e||!t)return!1;const{size:i,data:o}=e;(0,l.s)(r,0,0,0),(0,l.s)(L,0,0,0);let n=0,a=0;for(let e=0;e<t.length-2;e+=3){const s=t[e]*i,c=t[e+1]*i,u=t[e+2]*i;(0,l.s)(P,o[s],o[s+1],o[s+2]),(0,l.s)(I,o[c],o[c+1],o[c+2]),(0,l.s)(N,o[u],o[u+1],o[u+2]);const d=T(P,I,N);d?((0,l.a)(P,P,I),(0,l.a)(P,P,N),(0,l.e)(P,P,1/3*d),(0,l.a)(r,r,P),n+=d):((0,l.a)(L,L,P),(0,l.a)(L,L,I),(0,l.a)(L,L,N),a+=3)}return!(0===a&&0===n||(0!==n?((0,l.e)(r,r,1/n),0):0===a||((0,l.e)(r,L,1/a),0)))}(this.vertexAttributes.get(E.V.POSITION),t,e)}_computeAttachmentOriginLines(e){const t=this.vertexAttributes.get(E.V.POSITION),r=this.indices.get(E.V.POSITION);return function(e,t,r,i){if(!e)return!1;(0,l.s)(i,0,0,0),(0,l.s)(L,0,0,0);let o=0,n=0;const{size:a,data:s}=e,c=t?t.length-1:s.length/a-1,u=c+(r?2:0);for(let e=0;e<u;e+=2){const r=e<c?e:c,u=e<c?e+1:0,d=(t?t[r]:r)*a,h=(t?t[u]:u)*a;P[0]=s[d],P[1]=s[d+1],P[2]=s[d+2],I[0]=s[h],I[1]=s[h+1],I[2]=s[h+2],(0,l.e)(P,(0,l.a)(P,P,I),.5);const m=(0,l.E)(P,I);m>0?((0,l.a)(i,i,(0,l.e)(P,P,m)),o+=m):0===o&&((0,l.a)(L,L,P),n++)}return 0!==o?((0,l.e)(i,i,1/o),!0):0!==n&&((0,l.e)(i,L,1/n),!0)}(t,r,r&&function(e,t,r){return!(!("isClosed"in e)||!e.isClosed)&&(r?r.length>2:t.data.length>6)}(this.material.parameters,t,r),e)}_computeAttachmentOriginPoints(e){const t=this.indices.get(E.V.POSITION);return function(e,t,r){if(!e||!t)return!1;const{size:i,data:o}=e;(0,l.s)(r,0,0,0);let n=-1,a=0;for(let e=0;e<t.length;e++){const s=t[e]*i;n!==s&&(r[0]+=o[s],r[1]+=o[s+1],r[2]+=o[s+2],a++),n=s}return a>1&&(0,l.e)(r,r,1/a),a>0}(this.vertexAttributes.get(E.V.POSITION),t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get(E.V.POSITION),t=this.vertexAttributes.get(E.V.POSITION);if(!e||0===e.length||!t)return null;const r=this.type===g.C.Mesh?3:1;(0,p.a)(e.length%r==0,"Indexing error: "+e.length+" not divisible by "+r);const i=(0,h.a)(e.length/r);return new M(i,r,e,t)}get transformation(){return this._transformation??s.I}set transformation(e){this._transformation=e&&e!==s.I?(0,s.b)(e):null}get shaderTransformation(){return null!=this._shaderTransformer?this._shaderTransformer(this.transformation):this.transformation}get shaderTransformer(){return this._shaderTransformer}set shaderTransformer(e){this._shaderTransformer=e}get hasVolatileTransformation(){return null!=this._shaderTransformer}addHighlight(){const e=new R(m.O.Highlight);return this.highlights=function(e,t){return null==e&&(e=[]),e.push(t),e}(this.highlights,e),e}removeHighlight(e){this.highlights=function(e,t){if(null==e)return null;const r=e.filter((e=>e!==t));return 0===r.length?null:r}(this.highlights,e)}}class F{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}get _markerTextureRepository(){return this._techniqueRepository.constructionContext.markerTextureRepository}ensureTechnique(e,t){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(this._output,t),this._technique),this._technique}ensureResources(e){return m.R.LOADED}}A.g.LESS,A.g.ALWAYS;const B={mask:255},V={function:{func:A.g.ALWAYS,ref:m.S.OutlineVisualElementMask,mask:m.S.OutlineVisualElementMask},operation:{fail:A.h.KEEP,zFail:A.h.KEEP,zPass:A.h.ZERO}},U={function:{func:A.g.ALWAYS,ref:m.S.OutlineVisualElementMask,mask:m.S.OutlineVisualElementMask},operation:{fail:A.h.KEEP,zFail:A.h.KEEP,zPass:A.h.REPLACE}};function G(e,t,r,i){const o=r.typedBuffer,n=r.typedBufferStride,a=e.length;i*=n;for(let r=0;r<a;++r){const a=2*e[r];o[i]=t[a],o[i+1]=t[a+1],i+=n}}function z(e,t,r,i,o){const n=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(i*=a,null==o||1===o)for(let r=0;r<s;++r){const o=3*e[r];n[i]=t[o],n[i+1]=t[o+1],n[i+2]=t[o+2],i+=a}else for(let r=0;r<s;++r){const s=3*e[r];for(let e=0;e<o;++e)n[i]=t[s],n[i+1]=t[s+1],n[i+2]=t[s+2],i+=a}}function H(e,t,r,i,o=1){const n=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(i*=a,1===o)for(let r=0;r<s;++r){const o=4*e[r];n[i]=t[o],n[i+1]=t[o+1],n[i+2]=t[o+2],n[i+3]=t[o+3],i+=a}else for(let r=0;r<s;++r){const s=4*e[r];for(let e=0;e<o;++e)n[i]=t[s],n[i+1]=t[s+1],n[i+2]=t[s+2],n[i+3]=t[s+3],i+=a}}function W(e,t,r,i,o=1){const n=t.typedBuffer,a=t.typedBufferStride;if(i*=a,1===o)for(let t=0;t<r;++t)n[i]=e[0],n[i+1]=e[1],n[i+2]=e[2],n[i+3]=e[3],i+=a;else for(let t=0;t<r;++t)for(let t=0;t<o;++t)n[i]=e[0],n[i+1]=e[1],n[i+2]=e[2],n[i+3]=e[3],i+=a}function $(e,t,r,i,o,n,s){switch(e){case E.V.POSITION:{(0,p.a)(3===t.size);const o=n.getField(e,C.B);(0,p.a)(!!o,`No buffer view for ${e}`),o&&function(e,t,r,i,o,n=1){if(!r)return void z(e,t,i,o,n);const s=i.typedBuffer,l=i.typedBufferStride,c=e.length,u=r[0],d=r[1],h=r[2],m=r[4],f=r[5],p=r[6],g=r[8],v=r[9],_=r[10],T=r[12],x=r[13],b=r[14];o*=l;let S=0,E=0,A=0;const C=(0,a.k)(r)?e=>{S=t[e]+T,E=t[e+1]+x,A=t[e+2]+b}:e=>{const r=t[e],i=t[e+1],o=t[e+2];S=u*r+m*i+g*o+T,E=d*r+f*i+v*o+x,A=h*r+p*i+_*o+b};if(1===n)for(let t=0;t<c;++t)C(3*e[t]),s[o]=S,s[o+1]=E,s[o+2]=A,o+=l;else for(let t=0;t<c;++t){C(3*e[t]);for(let e=0;e<n;++e)s[o]=S,s[o+1]=E,s[o+2]=A,o+=l}}(r,t.data,i,o,s);break}case E.V.NORMAL:{(0,p.a)(3===t.size);const i=n.getField(e,C.B);(0,p.a)(!!i,`No buffer view for ${e}`),i&&function(e,t,r,i,o,n=1){if(!r)return void z(e,t,i,o,n);const s=r,l=i.typedBuffer,c=i.typedBufferStride,u=e.length,d=s[0],h=s[1],m=s[2],f=s[4],p=s[5],g=s[6],v=s[8],_=s[9],T=s[10],x=!(0,a.l)(s),b=1e-6,S=.999999;o*=c;let E=0,A=0,C=0;const R=(0,a.k)(s)?e=>{E=t[e],A=t[e+1],C=t[e+2]}:e=>{const r=t[e],i=t[e+1],o=t[e+2];E=d*r+f*i+v*o,A=h*r+p*i+_*o,C=m*r+g*i+T*o};if(1===n)if(x)for(let t=0;t<u;++t){R(3*e[t]);const r=E*E+A*A+C*C;if(r<S&&r>b){const e=1/Math.sqrt(r);l[o]=E*e,l[o+1]=A*e,l[o+2]=C*e}else l[o]=E,l[o+1]=A,l[o+2]=C;o+=c}else for(let t=0;t<u;++t)R(3*e[t]),l[o]=E,l[o+1]=A,l[o+2]=C,o+=c;else for(let t=0;t<u;++t){if(R(3*e[t]),x){const e=E*E+A*A+C*C;if(e<S&&e>b){const t=1/Math.sqrt(e);E*=t,A*=t,C*=t}}for(let e=0;e<n;++e)l[o]=E,l[o+1]=A,l[o+2]=C,o+=c}}(r,t.data,o,i,s);break}case E.V.NORMALCOMPRESSED:{(0,p.a)(2===t.size);const i=n.getField(e,C.f);(0,p.a)(!!i,`No buffer view for ${e}`),i&&G(r,t.data,i,s);break}case E.V.UV0:{(0,p.a)(2===t.size);const i=n.getField(e,C.e);(0,p.a)(!!i,`No buffer view for ${e}`),i&&G(r,t.data,i,s);break}case E.V.COLOR:case E.V.SYMBOLCOLOR:{const i=n.getField(e,C.b);(0,p.a)(!!i,`No buffer view for ${e}`),(0,p.a)(3===t.size||4===t.size),!i||3!==t.size&&4!==t.size||function(e,t,r,i,o,n=1){const a=i.typedBuffer,s=i.typedBufferStride,l=e.length;if(o*=s,r!==t.length||4!==r)if(1!==n)if(4!==r)for(let r=0;r<l;++r){const i=3*e[r];for(let e=0;e<n;++e)a[o]=t[i],a[o+1]=t[i+1],a[o+2]=t[i+2],a[o+3]=255,o+=s}else for(let r=0;r<l;++r){const i=4*e[r];for(let e=0;e<n;++e)a[o]=t[i],a[o+1]=t[i+1],a[o+2]=t[i+2],a[o+3]=t[i+3],o+=s}else{if(4===r){for(let r=0;r<l;++r){const i=4*e[r];a[o]=t[i],a[o+1]=t[i+1],a[o+2]=t[i+2],a[o+3]=t[i+3],o+=s}return}for(let r=0;r<l;++r){const i=3*e[r];a[o]=t[i],a[o+1]=t[i+1],a[o+2]=t[i+2],a[o+3]=255,o+=s}}else{a[o]=t[0],a[o+1]=t[1],a[o+2]=t[2],a[o+3]=t[3];const e=new Uint32Array(i.typedBuffer.buffer,i.start),r=s/4,c=e[o/=4];o+=r;const u=l*n;for(let t=1;t<u;++t)e[o]=c,o+=r}}(r,t.data,t.size,i,s);break}case E.V.COLORFEATUREATTRIBUTE:{const i=n.getField(e,C.d);(0,p.a)(!!i,`No buffer view for ${e}`),(0,p.a)(1===t.size),i&&1===t.size&&function(e,t,r,i){const o=r.typedBuffer,n=r.typedBufferStride,a=e.length,s=t[0];i*=n;for(let e=0;e<a;++e)o[i]=s,i+=n}(r,t.data,i,s);break}case E.V.TANGENT:{(0,p.a)(4===t.size);const i=n.getField(e,C.c);(0,p.a)(!!i,`No buffer view for ${e}`),i&&function(e,t,r,i,o,n=1){if(!r)return void H(e,t,i,o,n);const s=r,l=i.typedBuffer,c=i.typedBufferStride,u=e.length,d=s[0],h=s[1],m=s[2],f=s[4],p=s[5],g=s[6],v=s[8],_=s[9],T=s[10],x=!(0,a.l)(s),b=1e-6,S=.999999;if(o*=c,1===n)for(let r=0;r<u;++r){const i=4*e[r],n=t[i],a=t[i+1],s=t[i+2],u=t[i+3];let E=d*n+f*a+v*s,A=h*n+p*a+_*s,C=m*n+g*a+T*s;if(x){const e=E*E+A*A+C*C;if(e<S&&e>b){const t=1/Math.sqrt(e);E*=t,A*=t,C*=t}}l[o]=E,l[o+1]=A,l[o+2]=C,l[o+3]=u,o+=c}else for(let r=0;r<u;++r){const i=4*e[r],a=t[i],s=t[i+1],u=t[i+2],E=t[i+3];let A=d*a+f*s+v*u,C=h*a+p*s+_*u,R=m*a+g*s+T*u;if(x){const e=A*A+C*C+R*R;if(e<S&&e>b){const t=1/Math.sqrt(e);A*=t,C*=t,R*=t}}for(let e=0;e<n;++e)l[o]=A,l[o+1]=C,l[o+2]=R,l[o+3]=E,o+=c}}(r,t.data,o,i,s);break}case E.V.PROFILERIGHT:case E.V.PROFILEUP:case E.V.PROFILEVERTEXANDNORMAL:case E.V.FEATUREVALUE:{(0,p.a)(4===t.size);const i=n.getField(e,C.c);(0,p.a)(!!i,`No buffer view for ${e}`),i&&H(r,t.data,i,s)}}}A.g.EQUAL,m.S.OutlineVisualElementMask,m.S.OutlineVisualElementMask,A.h.KEEP,A.h.KEEP,A.h.KEEP,A.g.NOTEQUAL,m.S.OutlineVisualElementMask,m.S.OutlineVisualElementMask,A.h.KEEP,A.h.KEEP,A.h.KEEP;class k{constructor(e){this.vertexBufferLayout=e}elementCount(e){return e.indices.get(E.V.POSITION).length}write(e,t,r,i,o){!function(e,t,r,i,o,n){for(const a of t.fields.keys()){const t=e.vertexAttributes.get(a),s=e.indices.get(a);if(t&&s)$(a,t,s,r,i,o,n);else if(a===E.V.OBJECTANDLAYERIDCOLOR&&null!=e.objectAndLayerIdColor){const t=e.indices.get(E.V.POSITION);if((0,p.a)(!!t,`No buffer view for ${a}`),t){const r=t.length,i=o.getField(a,C.b);W(e.objectAndLayerIdColor,i,r,n)}}}}(r,this.vertexBufferLayout,e,t,i,o)}}var j=r(79641),X=r(90779),q=r(89212),Y=r(88557),Z=r(87372),K=r(82058),Q=r(41864),J=r(79764),ee=r(60991),te=r(92143);class re{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(e,t){return this._outer.get(e)?.get(t)}set(e,t,r){const i=this._outer.get(e);i?i.set(t,r):this._outer.set(e,new Map([[t,r]]))}delete(e,t){const r=this._outer.get(e);r&&(r.delete(t),0===r.size&&this._outer.delete(e))}forEach(e){this._outer.forEach(((t,r)=>e(t,r)))}}var ie=r(50406),oe=r(10738);async function ne(e,t){const{data:r}=await(0,K.default)(e,{responseType:"image",...t});return r}var ae=r(62610),se=r(75067),le=r(71252),ce=r(32101),ue=r(73173),de=r(10638);let he;var me,fe;(fe=me||(me={}))[fe.ETC1_RGB=0]="ETC1_RGB",fe[fe.ETC2_RGBA=1]="ETC2_RGBA",fe[fe.BC1_RGB=2]="BC1_RGB",fe[fe.BC3_RGBA=3]="BC3_RGBA",fe[fe.BC4_R=4]="BC4_R",fe[fe.BC5_RG=5]="BC5_RG",fe[fe.BC7_M6_RGB=6]="BC7_M6_RGB",fe[fe.BC7_M5_RGBA=7]="BC7_M5_RGBA",fe[fe.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",fe[fe.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",fe[fe.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",fe[fe.ATC_RGB=11]="ATC_RGB",fe[fe.ATC_RGBA=12]="ATC_RGBA",fe[fe.FXT1_RGB=17]="FXT1_RGB",fe[fe.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",fe[fe.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",fe[fe.ETC2_EAC_R11=20]="ETC2_EAC_R11",fe[fe.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",fe[fe.RGBA32=13]="RGBA32",fe[fe.RGB565=14]="RGB565",fe[fe.BGR565=15]="BGR565",fe[fe.RGBA4444=16]="RGBA4444";let pe=null,ge=null;async function ve(){return null==ge&&(ge=function(){if(null==he){const e=e=>(0,ue.g)(`esri/libs/basisu/${e}`);he=r.e(3786).then(r.bind(r,73786)).then((e=>e.b)).then((({default:t})=>t({locateFile:e}).then((e=>(e.initializeBasis(),delete e.then,e)))))}return he}(),pe=await ge),ge}function _e(e,t,r,i,o){const n=(0,de.g)(t?A.C.COMPRESSED_RGBA8_ETC2_EAC:A.C.COMPRESSED_RGB8_ETC2),a=o&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*i*n*a)}function Te(e){return e.getNumImages()>=1&&!e.isUASTC()}function xe(e){return e.getFaces()>=1&&e.isETC1S()}function be(e,t,r,i,o,n,a,s){const{compressedTextureETC:l,compressedTextureS3TC:c}=e.capabilities,[u,d]=l?i?[me.ETC2_RGBA,A.C.COMPRESSED_RGBA8_ETC2_EAC]:[me.ETC1_RGB,A.C.COMPRESSED_RGB8_ETC2]:c?i?[me.BC3_RGBA,A.C.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[me.BC1_RGB,A.C.COMPRESSED_RGB_S3TC_DXT1_EXT]:[me.RGBA32,A.P.RGBA],h=t.hasMipmap?r:Math.min(1,r),m=[];for(let e=0;e<h;e++)m.push(new Uint8Array(a(e,u))),s(e,u,m[e]);return t.internalFormat=d,t.hasMipmap=m.length>1,t.samplingMode=t.hasMipmap?A.c.LINEAR_MIPMAP_LINEAR:A.c.LINEAR,t.width=o,t.height=n,new de.a(e,t,{type:"compressed",levels:m})}const Se=te.L.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function Ee(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const Ae=Ee("DXT1"),Ce=Ee("DXT3"),Re=Ee("DXT5");class we extends g.a{constructor(e,t){super(),this._data=e,this.type=g.C.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new se.Z,this.parameters=t||{},this.parameters.mipmap=!1!==this.parameters.mipmap,this.parameters.noUnpackFlip=this.parameters.noUnpackFlip||!1,this.parameters.preMultiplyAlpha=this.parameters.preMultiplyAlpha||!1,this.parameters.wrap=this.parameters.wrap||{s:A.T.REPEAT,t:A.T.REPEAT},this._startPreload(e)}_startPreload(e){null!=e&&(e instanceof HTMLVideoElement?this._startPreloadVideoElement(e):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!((0,ce.jc)(e.src)||"auto"===e.preload&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const t=!e.paused;if(e.src=e.src,t&&e.autoplay){const t=()=>{e.removeEventListener("canplay",t),e.play()};e.addEventListener("canplay",t)}}}_startPreloadImageElement(e){(0,ce.HK)(e.src)||(0,ce.jc)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}dispose(){this._data=void 0}_createDescriptor(e){const t=new de.T;return t.wrapMode=this.parameters.wrap??A.T.REPEAT,t.flipped=!this.parameters.noUnpackFlip,t.samplingMode=this.parameters.mipmap?A.c.LINEAR_MIPMAP_LINEAR:A.c.LINEAR,t.hasMipmap=!!this.parameters.mipmap,t.preMultiplyAlpha=!!this.parameters.preMultiplyAlpha,t.maxAnisotropy=this.parameters.maxAnisotropy??(this.parameters.mipmap?e.parameters.maxMaxAnisotropy:1),t}get glTexture(){return this._glTexture}get memoryEstimate(){return this._glTexture?.gpuMemoryUsage||function(e,t){if(null==e)return 0;if((0,d.v)(e)||(0,d.b)(e))return t.encoding===m.T.KTX2_ENCODING?function(e,t){if(null==pe)return e.byteLength;const r=new pe.KTX2File(new Uint8Array(e)),i=xe(r)?_e(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),i}(e,!!t.mipmap):t.encoding===m.T.BASIS_ENCODING?function(e,t){if(null==pe)return e.byteLength;const r=new pe.BasisFile(new Uint8Array(e)),i=Te(r)?_e(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),i}(e,!!t.mipmap):e.byteLength;const{width:r,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?ye(e):t;return(t.mipmap?4/3:1)*r*i*(t.components||4)||0}(this._data,this.parameters)}load(e){if(null!=this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const t=this._data;return null==t?(this._glTexture=new de.a(e,this._createDescriptor(e),null),this._glTexture):"string"==typeof t?this._loadFromURL(e,t):t instanceof Image?this._loadFromImageElement(e,t):t instanceof HTMLVideoElement?this._loadFromVideoElement(e,t):t instanceof ImageData||t instanceof HTMLCanvasElement?this._loadFromImage(e,t):((0,d.v)(t)||(0,d.b)(t))&&this.parameters.encoding===m.T.DDS_ENCODING?(this._data=void 0,this._loadFromDDSData(e,t)):((0,d.v)(t)||(0,d.b)(t))&&this.parameters.encoding===m.T.KTX2_ENCODING?(this._data=void 0,this._loadFromKTX2(e,t)):((0,d.v)(t)||(0,d.b)(t))&&this.parameters.encoding===m.T.BASIS_ENCODING?(this._data=void 0,this._loadFromBasis(e,t)):(0,d.b)(t)?this._loadFromPixelData(e,t):(0,d.v)(t)?this._loadFromPixelData(e,new Uint8Array(t)):null}get requiresFrameUpdates(){return this._data instanceof HTMLVideoElement}frameUpdate(e){return this._data instanceof HTMLVideoElement&&null!=this._glTexture?this._data.readyState<Me.HAVE_CURRENT_DATA||e===this._data.currentTime?e:(this._glTexture.setData(this._data),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.parameters.updateCallback&&this.parameters.updateCallback(),this._data.currentTime):e}_loadFromDDSData(e,t){return this._glTexture=function(e,t,r){const i=function(e,t){const r=new Int32Array(e,0,31);if(542327876!==r[0])return Se.error("Invalid magic number in DDS header"),null;if(!(4&r[20]))return Se.error("Unsupported format, must contain a FourCC code"),null;const i=r[21];let o,n;switch(i){case Ae:o=8,n=A.C.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Ce:o=16,n=A.C.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Re:o=16,n=A.C.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return Se.error("Unsupported FourCC code:",(a=i,String.fromCharCode(255&a,a>>8&255,a>>16&255,a>>24&255))),null}var a;let s=1,l=r[4],c=r[3];0==(3&l)&&0==(3&c)||(Se.warn("Rounding up compressed texture size to nearest multiple of 4."),l=l+3&-4,c=c+3&-4);const u=l,d=c;131072&r[2]&&!1!==t&&(s=Math.max(1,r[7]));let h,m,f=r[1]+4;const p=[];for(let t=0;t<s;++t)m=(l+3>>2)*(c+3>>2)*o,h=new Uint8Array(e,f,m),p.push(h),f+=m,l=Math.max(1,l>>1),c=Math.max(1,c>>1);return{textureData:{type:"compressed",levels:p},internalFormat:n,width:u,height:d}}(r,t.hasMipmap??!1);if(null==i)throw new Error("DDS texture data is null");const{textureData:o,internalFormat:n,width:a,height:s}=i;return t.samplingMode=o.levels.length>1?A.c.LINEAR_MIPMAP_LINEAR:A.c.LINEAR,t.hasMipmap=o.levels.length>1,t.internalFormat=n,t.width=a,t.height=s,new de.a(e,t,o)}(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync((()=>async function(e,t,r){null==pe&&(pe=await ve());const i=new pe.KTX2File(new Uint8Array(r));if(!xe(i))return null;i.startTranscoding();const o=be(e,t,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),((e,t)=>i.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,r)=>i.transcodeImage(r,e,0,0,t,0,-1,-1)));return i.close(),i.delete(),o}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromBasis(e,t){return this._loadAsync((()=>async function(e,t,r){null==pe&&(pe=await ve());const i=new pe.BasisFile(new Uint8Array(r));if(!Te(i))return null;i.startTranscoding();const o=be(e,t,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),((e,t)=>i.getImageTranscodedSizeInBytes(0,e,t)),((e,t,r)=>i.transcodeImage(r,0,e,t,0,0)));return i.close(),i.delete(),o}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromPixelData(e,t){(0,p.a)(this.parameters.width>0&&this.parameters.height>0);const r=this._createDescriptor(e);return r.pixelFormat=1===this.parameters.components?A.P.LUMINANCE:3===this.parameters.components?A.P.RGB:A.P.RGBA,r.width=this.parameters.width??0,r.height=this.parameters.height??0,this._glTexture=new de.a(e,r,t),this._glTexture}_loadFromURL(e,t){return this._loadAsync((async r=>{const i=await ne(t,{signal:r});return(0,ie.k_)(r),this._loadFromImage(e,i)}))}_loadFromImageElement(e,t){return t.complete?this._loadFromImage(e,t):this._loadAsync((async r=>{const i=await(0,K.l)(t,t.src,!1,r);return(0,ie.k_)(r),this._loadFromImage(e,i)}))}_loadFromVideoElement(e,t){return t.readyState>=Me.HAVE_CURRENT_DATA?this._loadFromImage(e,t):this._loadFromVideoElementAsync(e,t)}_loadFromVideoElementAsync(e,t){return this._loadAsync((r=>new Promise(((i,o)=>{const n=()=>{t.removeEventListener("loadeddata",a),t.removeEventListener("error",s),(0,le.r)(l)},a=()=>{t.readyState>=Me.HAVE_CURRENT_DATA&&(n(),i(this._loadFromImage(e,t)))},s=e=>{n(),o(e||new ee.Z("Failed to load video"))};t.addEventListener("loadeddata",a),t.addEventListener("error",s);const l=(0,ie.fu)(r,(()=>s((0,ie.zE)())))}))))}_loadFromImage(e,t){const r=ye(t);this.parameters.width=r.width,this.parameters.height=r.height;const i=this._createDescriptor(e);return i.pixelFormat=3===this.parameters.components?A.P.RGB:A.P.RGBA,i.width=r.width,i.height=r.height,this._glTexture=new de.a(e,i,t),this._glTexture}_loadAsync(e){const t=new AbortController;this._loadingController=t;const r=e(t.signal);this._loadingPromise=r;const i=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(i,i),r}unload(){if(this._glTexture=(0,le.h)(this._glTexture),null!=this._loadingController){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}function ye(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}var Me;!function(e){e[e.HAVE_NOTHING=0]="HAVE_NOTHING",e[e.HAVE_METADATA=1]="HAVE_METADATA",e[e.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",e[e.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",e[e.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"}(Me||(Me={}));var Oe=r(3808),Pe=r(15215),Ie=r(503),Ne=r(41169),Le=r(44600),De=r(81409),Fe=r(52978);class Be extends F{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId,(e=>this._texture=e)),this._acquire(e.normalTextureId,(e=>this._textureNormal=e)),this._acquire(e.emissiveTextureId,(e=>this._textureEmissive=e)),this._acquire(e.occlusionTextureId,(e=>this._textureOcclusion=e)),this._acquire(e.metallicRoughnessTextureId,(e=>this._textureMetallicRoughness=e))}dispose(){this._texture=(0,le.f)(this._texture),this._textureNormal=(0,le.f)(this._textureNormal),this._textureEmissive=(0,le.f)(this._textureEmissive),this._textureOcclusion=(0,le.f)(this._textureOcclusion),this._textureMetallicRoughness=(0,le.f)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?m.R.LOADED:m.R.LOADING}get textureBindParameters(){return new Ve(null!=this._texture?this._texture.glTexture:null,null!=this._textureNormal?this._textureNormal.glTexture:null,null!=this._textureEmissive?this._textureEmissive.glTexture:null,null!=this._textureOcclusion?this._textureOcclusion.glTexture:null,null!=this._textureMetallicRoughness?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){null!=this._texture&&e===this._texture.id||(this._texture=(0,le.f)(this._texture),this._textureId=e,this._acquire(this._textureId,(e=>this._texture=e)))}_acquire(e,t){if(null==e)return void t(null);const r=this._textureRepository.acquire(e);if((0,ie.y8)(r))return++this._numLoading,void r.then((e=>{if(this._disposed)return(0,le.f)(e),void t(null);t(e)})).finally((()=>--this._numLoading));t(r)}}class Ve extends Fe.N{constructor(e=null,t=null,r=null,i=null,o=null){super(),this.texture=e,this.textureNormal=t,this.textureEmissive=r,this.textureOcclusion=i,this.textureMetallicRoughness=o}}var Ue=r(11939),Ge=r(77046);const ze=(0,Ge.s)(A.f.SRC_ALPHA,A.f.ONE,A.f.ONE_MINUS_SRC_ALPHA,A.f.ONE_MINUS_SRC_ALPHA),He=(0,Ge.b)(A.f.ONE,A.f.ONE),We=(0,Ge.b)(A.f.ZERO,A.f.ONE_MINUS_SRC_ALPHA);function $e(e){return e===Ue.T.FrontFace?null:e===Ue.T.Alpha?We:He}const ke={factor:-1,units:-2};function je(e,t=A.g.LESS){return e===Ue.T.NONE||e===Ue.T.FrontFace?t:A.g.LEQUAL}var Xe,qe;(qe=Xe||(Xe={}))[qe.INTEGRATED_MESH=0]="INTEGRATED_MESH",qe[qe.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",qe[qe.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",qe[qe.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",qe[qe.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",qe[qe.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",qe[qe.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",qe[qe.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",qe[qe.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",qe[qe.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",qe[qe.POSTPROCESSING_ENVIRONMENT_OPAQUE=10]="POSTPROCESSING_ENVIRONMENT_OPAQUE",qe[qe.POSTPROCESSING_ENVIRONMENT_TRANSPARENT=11]="POSTPROCESSING_ENVIRONMENT_TRANSPARENT",qe[qe.LASERLINES=12]="LASERLINES",qe[qe.LASERLINES_CONTRAST_CONTROL=13]="LASERLINES_CONTRAST_CONTROL",qe[qe.HUD_MATERIAL=14]="HUD_MATERIAL",qe[qe.LABEL_MATERIAL=15]="LABEL_MATERIAL",qe[qe.LINE_CALLOUTS=16]="LINE_CALLOUTS",qe[qe.LINE_CALLOUTS_HUD_DEPTH=17]="LINE_CALLOUTS_HUD_DEPTH",qe[qe.DRAPED_MATERIAL=18]="DRAPED_MATERIAL",qe[qe.DRAPED_WATER=19]="DRAPED_WATER",qe[qe.VOXEL=20]="VOXEL",qe[qe.MAX_SLOTS=21]="MAX_SLOTS";var Ye=r(35861),Ze=r(45087),Ke=r(56697),Qe=r(60939);const Je=(0,c.c)(),et=(0,c.c)(),tt=(0,c.c)(),rt=new class{constructor(e=0){this.offset=e,this.sphere=(0,Qe.c)(),this.tmpVertex=(0,c.c)()}applyToVertex(e,t,r){const i=this.objectTransform.transform;let o=i[0]*e+i[4]*t+i[8]*r+i[12],n=i[1]*e+i[5]*t+i[9]*r+i[13],a=i[2]*e+i[6]*t+i[10]*r+i[14];const s=this.offset/Math.sqrt(o*o+n*n+a*a);o+=o*s,n+=n*s,a+=a*s;const l=this.objectTransform.inverse;return this.tmpVertex[0]=l[0]*o+l[4]*n+l[8]*a+l[12],this.tmpVertex[1]=l[1]*o+l[5]*n+l[9]*a+l[13],this.tmpVertex[2]=l[2]*o+l[6]*n+l[10]*a+l[14],this.tmpVertex}applyToMinMax(e,t){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const i=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*i,t[1]+=t[1]*i,t[2]+=t[2]*i}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.sphere[0]=e[0]+e[0]*r,this.sphere[1]=e[1]+e[1]*r,this.sphere[2]=e[2]+e[2]*r,this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};new class{constructor(e=0){this.componentLocalOriginLength=0,this._tmpVertex=(0,c.c)(),this._mbs=(0,Qe.c)(),this._obb={center:(0,c.c)(),halfSize:(0,Ke.b)(),quaternion:null},this._totalOffset=0,this._offset=0,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,t,r){const i=e,o=t,n=r+this.componentLocalOriginLength,a=this._totalOffset/Math.sqrt(i*i+o*o+n*n);return this._tmpVertex[0]=e+i*a,this._tmpVertex[1]=t+o*a,this._tmpVertex[2]=r+n*a,this._tmpVertex}applyToAabb(e){const t=e[0],r=e[1],i=e[2]+this.componentLocalOriginLength,o=e[3],n=e[4],a=e[5]+this.componentLocalOriginLength,s=t*o<0?0:Math.min(Math.abs(t),Math.abs(o)),l=r*n<0?0:Math.min(Math.abs(r),Math.abs(n)),c=i*a<0?0:Math.min(Math.abs(i),Math.abs(a)),u=Math.sqrt(s*s+l*l+c*c);if(u<this._totalOffset)return e[0]-=t<0?this._totalOffset:0,e[1]-=r<0?this._totalOffset:0,e[2]-=i<0?this._totalOffset:0,e[3]+=o>0?this._totalOffset:0,e[4]+=n>0?this._totalOffset:0,e[5]+=a>0?this._totalOffset:0,e;const d=Math.max(Math.abs(t),Math.abs(o)),h=Math.max(Math.abs(r),Math.abs(n)),m=Math.max(Math.abs(i),Math.abs(a)),f=Math.sqrt(d*d+h*h+m*m),p=this._totalOffset/f,g=this._totalOffset/u;return e[0]+=t*(t>0?p:g),e[1]+=r*(r>0?p:g),e[2]+=i*(i>0?p:g),e[3]+=o*(o<0?p:g),e[4]+=n*(n<0?p:g),e[5]+=a*(a<0?p:g),e}applyToMbs(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this._totalOffset/t;return this._mbs[0]=e[0]+e[0]*r,this._mbs[1]=e[1]+e[1]*r,this._mbs[2]=e[2]+e[2]*r,this._mbs[3]=e[3]+e[3]*this._totalOffset/t,this._mbs}applyToObb(e){const t=e.center,r=this._totalOffset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);this._obb.center[0]=t[0]+t[0]*r,this._obb.center[1]=t[1]+t[1]*r,this._obb.center[2]=t[2]+t[2]*r,(0,l.o)(this._obb.halfSize,e.halfSize,e.quaternion),(0,l.a)(this._obb.halfSize,this._obb.halfSize,e.center);const i=this._totalOffset/Math.sqrt(this._obb.halfSize[0]*this._obb.halfSize[0]+this._obb.halfSize[1]*this._obb.halfSize[1]+this._obb.halfSize[2]*this._obb.halfSize[2]);return this._obb.halfSize[0]+=this._obb.halfSize[0]*i,this._obb.halfSize[1]+=this._obb.halfSize[1]*i,this._obb.halfSize[2]+=this._obb.halfSize[2]*i,(0,l.b)(this._obb.halfSize,this._obb.halfSize,e.center),(0,Ye.a)(it,e.quaternion),(0,l.o)(this._obb.halfSize,this._obb.halfSize,it),this._obb.halfSize[0]*=this._obb.halfSize[0]<0?-1:1,this._obb.halfSize[1]*=this._obb.halfSize[1]<0?-1:1,this._obb.halfSize[2]*=this._obb.halfSize[2]<0?-1:1,this._obb.quaternion=e.quaternion,this._obb}},new class{constructor(e=0){this.offset=e,this.tmpVertex=(0,c.c)()}applyToVertex(e,t,r){const i=e+this.localOrigin[0],o=t+this.localOrigin[1],n=r+this.localOrigin[2],a=this.offset/Math.sqrt(i*i+o*o+n*n);return this.tmpVertex[0]=e+i*a,this.tmpVertex[1]=t+o*a,this.tmpVertex[2]=r+n*a,this.tmpVertex}applyToAabb(e){for(let t=0;t<3;++t)Je[t]=e[0+t]+this.localOrigin[t],et[t]=e[3+t]+this.localOrigin[t],tt[t]=Je[t];const t=this.applyToVertex(Je[0],Je[1],Je[2]);for(let r=0;r<3;++r)e[r]=t[r],e[r+3]=t[r];const r=t=>{const r=this.applyToVertex(t[0],t[1],t[2]);for(let t=0;t<3;++t)e[t]=Math.min(e[t],r[t]),e[t+3]=Math.max(e[t+3],r[t])};for(let e=1;e<8;++e){for(let t=0;t<3;++t)tt[t]=0==(e&1<<t)?Je[t]:et[t];r(tt)}let i=0;for(let e=0;e<3;++e)Je[e]*et[e]<0&&(i|=1<<e);if(0!==i&&7!==i)for(let e=0;e<8;++e)if(0==(i&e)){for(let t=0;t<3;++t)tt[t]=0!=(i&1<<t)?0:0!=(e&1<<t)?Je[t]:et[t];r(tt)}for(let t=0;t<3;++t)e[t]-=this.localOrigin[t],e[t+3]-=this.localOrigin[t];return e}};const it=(0,Ze.c)();var ot=r(68681),nt=r(7489),at=r(51321),st=r(55542),lt=r(29768),ct=r(8036),ut=r(96457);class dt extends ct.S{}(0,lt._)([(0,ct.p)({constValue:!0})],dt.prototype,"hasSliceHighlight",void 0),(0,lt._)([(0,ct.p)({constValue:!1})],dt.prototype,"hasSliceInVertexProgram",void 0),(0,lt._)([(0,ct.p)({constValue:!1})],dt.prototype,"instancedDoublePrecision",void 0),(0,lt._)([(0,ct.p)({constValue:!1})],dt.prototype,"hasModelTransformation",void 0),(0,lt._)([(0,ct.p)({constValue:ut.B.Pass})],dt.prototype,"pbrTextureBindType",void 0);var ht=r(44908);function mt({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:r,roughnessFactor:i,emissiveTexture:o,emissiveFactor:n,occlusionTexture:a}){return null==e&&null==t&&null==o&&(null==n||(0,l.h)(n,c.Z))&&null==a&&(null==i||1===i)&&(null==r||1===r||0===r)}const ft=[1,1,.5],pt=[0,.6,.2],gt=[0,1,.2];class vt extends Ne.a{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=(0,c.d)(ft),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=m.C.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=(0,c.f)(0,0,0),this.instancedDoublePrecision=!1,this.normalType=Ne.b.Attribute,this.receiveSSAO=!0,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=(0,c.f)(.2,.2,.2),this.diffuse=(0,c.f)(.8,.8,.8),this.externalColor=(0,ot.f)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,c.c)(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=m.b.Less,this.textureAlphaMode=m.A.Blend,this.textureAlphaCutoff=nt.d,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=g.R.Occlude}}class _t extends Ne.V{constructor(){super(...arguments),this.origin=(0,c.c)(),this.slicePlaneLocalOrigin=this.origin}}class Tt extends at.S{initializeConfiguration(e,t){t.spherical=e.viewingMode===Oe.V.Global,t.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result,t.textureCoordinateType=t.hasColorTexture||t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture||t.hasNormalTexture?De.d.Default:De.d.None,t.objectAndLayerIdColorInstanced=t.instanced}initializeProgram(e){return this._initializeProgram(e,Tt.shader)}_initializeProgram(e,t){return new at.P(e.rctx,t.get().build(this.configuration),g.D)}_convertDepthTestFunction(e){return e===m.b.Lequal?A.g.LEQUAL:A.g.LESS}_makePipeline(e,t){const r=this.configuration,i=e===Ue.T.NONE,o=e===Ue.T.FrontFace;return(0,Ge.m)({blending:r.output!==Ie.S.Color&&r.output!==Ie.S.Alpha||!r.transparent?null:i?ze:$e(e),culling:xt(r)?(0,Ge.c)(r.cullFace):null,depthTest:{func:je(e,this._convertDepthTestFunction(r.customDepthTest))},depthWrite:(i||o)&&r.writeDepth?Ge.d:null,colorWrite:Ge.a,stencilWrite:r.hasOccludees?B:null,stencilTest:r.hasOccludees?t?U:V:null,polygonOffset:i||o?null:(n=r.enableOffset,n?ke:null)});var n}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function xt(e){return e.cullFace!==m.C.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}Tt.shader=new at.R(st.D,(()=>Promise.resolve().then(r.bind(r,55542)).then((e=>e.D))));class bt extends dt{constructor(){super(...arguments),this.output=Ie.S.Color,this.alphaDiscardMode=m.A.Opaque,this.doubleSidedMode=Le.N.None,this.pbrMode=De.P.Disabled,this.cullFace=m.C.None,this.transparencyPassType=Ue.T.NONE,this.normalType=Ne.b.Attribute,this.textureCoordinateType=De.d.None,this.customDepthTest=m.b.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}(0,lt._)([(0,ct.p)({count:Ie.S.COUNT})],bt.prototype,"output",void 0),(0,lt._)([(0,ct.p)({count:m.A.COUNT})],bt.prototype,"alphaDiscardMode",void 0),(0,lt._)([(0,ct.p)({count:Le.N.COUNT})],bt.prototype,"doubleSidedMode",void 0),(0,lt._)([(0,ct.p)({count:De.P.COUNT})],bt.prototype,"pbrMode",void 0),(0,lt._)([(0,ct.p)({count:m.C.COUNT})],bt.prototype,"cullFace",void 0),(0,lt._)([(0,ct.p)({count:Ue.T.COUNT})],bt.prototype,"transparencyPassType",void 0),(0,lt._)([(0,ct.p)({count:Ne.b.COUNT})],bt.prototype,"normalType",void 0),(0,lt._)([(0,ct.p)({count:De.d.COUNT})],bt.prototype,"textureCoordinateType",void 0),(0,lt._)([(0,ct.p)({count:m.b.COUNT})],bt.prototype,"customDepthTest",void 0),(0,lt._)([(0,ct.p)()],bt.prototype,"spherical",void 0),(0,lt._)([(0,ct.p)()],bt.prototype,"hasVertexColors",void 0),(0,lt._)([(0,ct.p)()],bt.prototype,"hasSymbolColors",void 0),(0,lt._)([(0,ct.p)()],bt.prototype,"hasVerticalOffset",void 0),(0,lt._)([(0,ct.p)()],bt.prototype,"hasSlicePlane",void 0),(0,lt._)([(0,ct.p)()],bt.prototype,"hasSliceHighlight",void 0),(0,lt._)([(0,ct.p)()],bt.prototype,"hasColorTexture",void 0),(0,lt._)([(0,ct.p)()],bt.prototype,"hasMetallicRoughnessTexture",void 0),(0,lt._)([(0,ct.p)()],bt.prototype,"hasEmissionTexture",void 0),(0,lt._)([(0,ct.p)()],bt.prototype,"hasOcclusionTexture",void 0),(0,lt._)([(0,ct.p)()],bt.prototype,"hasNormalTexture",void 0),(0,lt._)([(0,ct.p)()],bt.prototype,"hasScreenSizePerspective",void 0),(0,lt._)([(0,ct.p)()],bt.prototype,"hasVertexTangents",void 0),(0,lt._)([(0,ct.p)()],bt.prototype,"hasOccludees",void 0),(0,lt._)([(0,ct.p)()],bt.prototype,"hasMultipassTerrain",void 0),(0,lt._)([(0,ct.p)()],bt.prototype,"hasModelTransformation",void 0),(0,lt._)([(0,ct.p)()],bt.prototype,"offsetBackfaces",void 0),(0,lt._)([(0,ct.p)()],bt.prototype,"vvSize",void 0),(0,lt._)([(0,ct.p)()],bt.prototype,"vvColor",void 0),(0,lt._)([(0,ct.p)()],bt.prototype,"receiveShadows",void 0),(0,lt._)([(0,ct.p)()],bt.prototype,"receiveAmbientOcclusion",void 0),(0,lt._)([(0,ct.p)()],bt.prototype,"textureAlphaPremultiplied",void 0),(0,lt._)([(0,ct.p)()],bt.prototype,"instanced",void 0),(0,lt._)([(0,ct.p)()],bt.prototype,"instancedColor",void 0),(0,lt._)([(0,ct.p)()],bt.prototype,"objectAndLayerIdColorInstanced",void 0),(0,lt._)([(0,ct.p)()],bt.prototype,"instancedDoublePrecision",void 0),(0,lt._)([(0,ct.p)()],bt.prototype,"doublePrecisionRequiresObfuscation",void 0),(0,lt._)([(0,ct.p)()],bt.prototype,"writeDepth",void 0),(0,lt._)([(0,ct.p)()],bt.prototype,"transparent",void 0),(0,lt._)([(0,ct.p)()],bt.prototype,"enableOffset",void 0),(0,lt._)([(0,ct.p)()],bt.prototype,"cullAboveGround",void 0),(0,lt._)([(0,ct.p)()],bt.prototype,"snowCover",void 0),(0,lt._)([(0,ct.p)()],bt.prototype,"hasColorTextureTransform",void 0),(0,lt._)([(0,ct.p)()],bt.prototype,"hasEmissionTextureTransform",void 0),(0,lt._)([(0,ct.p)()],bt.prototype,"hasNormalTextureTransform",void 0),(0,lt._)([(0,ct.p)()],bt.prototype,"hasOcclusionTextureTransform",void 0),(0,lt._)([(0,ct.p)()],bt.prototype,"hasMetallicRoughnessTextureTransform",void 0),(0,lt._)([(0,ct.p)({constValue:!0})],bt.prototype,"hasVvInstancing",void 0),(0,lt._)([(0,ct.p)({constValue:!1})],bt.prototype,"useCustomDTRExponentForWater",void 0),(0,lt._)([(0,ct.p)({constValue:!1})],bt.prototype,"supportsTextureAtlas",void 0),(0,lt._)([(0,ct.p)({constValue:!0})],bt.prototype,"useFillLights",void 0);class St extends Tt{initializeConfiguration(e,t){super.initializeConfiguration(e,t),t.hasMetallicRoughnessTexture=!1,t.hasEmissionTexture=!1,t.hasOcclusionTexture=!1,t.hasNormalTexture=!1,t.hasModelTransformation=!1,t.normalType=Ne.b.Attribute,t.doubleSidedMode=Le.N.WindingOrder,t.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,St.shader)}}St.shader=new at.R(ht.R,(()=>Promise.resolve().then(r.bind(r,44908)).then((e=>e.R))));class Et extends g.b{constructor(e){super(e,Ct),this.supportsEdges=!0,this._configuration=new bt,this._vertexBufferLayout=function(e){const t=(0,Pe.n)().vec3f(E.V.POSITION);return e.normalType===Ne.b.Compressed?t.vec2i16(E.V.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(E.V.NORMAL),e.hasVertexTangents&&t.vec4f(E.V.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(E.V.UV0),e.hasVertexColors&&t.vec4u8(E.V.COLOR),e.hasSymbolColors&&t.vec4u8(E.V.SYMBOLCOLOR),(0,d.h)("enable-feature:objectAndLayerId-rendering")&&t.vec4u8(E.V.OBJECTANDLAYERIDCOLOR),t}(this.parameters)}isVisibleForOutput(e){return e!==Ie.S.Shadow&&e!==Ie.S.ShadowExcludeHighlight&&e!==Ie.S.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const{hasInstancedColor:t,hasVertexColors:r,hasSymbolColors:i,vvColor:o}=e,n="replace"===e.colorMixMode,a=e.opacity>0,s=e.externalColor&&e.externalColor[3]>0,l=t||o||i;return r&&l?n||a:r?n?s:a:l?n||a:n?s:a}getConfiguration(e,t){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=this.parameters.isInstanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.hasVerticalOffset=null!=this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=null!=this.parameters.screenSizePerspective,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,null!=this.parameters.customDepthTest&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?m.C.None:this.parameters.cullFace,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=null!=this.parameters.modelTransformation,e!==Ie.S.Color&&e!==Ie.S.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=Le.N.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?Le.N.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?Le.N.WindingOrder:Le.N.None,this._configuration.instancedColor=this.parameters.hasInstancedColor,this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=!!t.ssaoHelper.active&&this.parameters.receiveSSAO,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?De.P.Schematic:De.P.Normal:De.P.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<5e5,this._configuration.snowCover=this.hasSnowCover(t),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return null!=e.weather&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}intersect(e,t,r,i,o,n){if(null!=this.parameters.verticalOffset){const e=r.camera;(0,l.s)(Pt,t[12],t[13],t[14]);let n=null;switch(r.viewingMode){case Oe.V.Global:n=(0,l.n)(Mt,Pt);break;case Oe.V.Local:n=(0,l.c)(Mt,yt)}let a=0;const s=(0,l.b)(It,Pt,e.eye),c=(0,l.l)(s),u=(0,l.e)(s,s,1/c);let d=null;this.parameters.screenSizePerspective&&(d=(0,l.i)(n,u)),a+=(0,g.v)(e,c,this.parameters.verticalOffset,d??0,this.parameters.screenSizePerspective),(0,l.e)(n,n,a),(0,l.t)(Ot,n,r.transform.inverseRotation),i=(0,l.b)(Rt,i,Ot),o=(0,l.b)(wt,o,Ot)}(0,g.i)(e,r,i,o,function(e){return null!=e?(rt.offset=e,rt):null}(r.verticalOffset),n)}requiresSlot(e,t){return!(t!==Ie.S.Color&&t!==Ie.S.Alpha&&t!==Ie.S.Depth&&t!==Ie.S.Normal&&t!==Ie.S.Shadow&&t!==Ie.S.ShadowHighlight&&t!==Ie.S.ShadowExcludeHighlight&&t!==Ie.S.Highlight&&t!==Ie.S.ObjectAndLayerIdColor||e!==(this.parameters.transparent?this.parameters.writeDepth?Xe.TRANSPARENT_MATERIAL:Xe.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:Xe.OPAQUE_MATERIAL)&&e!==Xe.DRAPED_MATERIAL)}createGLMaterial(e){return new At(e)}createBufferWriter(){return new k(this._vertexBufferLayout)}}class At extends Be{constructor(e){super({...e,...e.material.parameters})}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output!==Ie.S.Color&&this._output!==Ie.S.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e));const t=this._material.parameters;this.updateTexture(t.textureId);const r=e.camera.viewInverseTransposeMatrix;return(0,l.s)(t.origin,r[3],r[7],r[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(t.treeRendering?St:Tt,e)}}const Ct=new class extends vt{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}},Rt=(0,c.c)(),wt=(0,c.c)(),yt=(0,c.f)(0,0,1),Mt=(0,c.c)(),Ot=(0,c.c)(),Pt=(0,c.c)(),It=(0,c.c)();function Nt(e){if(null==e)return null;const t=null!=e.offset?e.offset:Z.Z,r=null!=e.rotation?e.rotation:0,i=null!=e.scale?e.scale:Z.O,n=(0,Y.f)(1,0,0,0,1,0,t[0],t[1],1),a=(0,Y.f)(Math.cos(r),-Math.sin(r),0,Math.sin(r),Math.cos(r),0,0,0,1),s=(0,Y.f)(i[0],0,0,0,i[1],0,0,0,1),l=(0,Y.c)();return(0,o.m)(l,a,s),(0,o.m)(l,n,l),l}class Lt{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class Dt{constructor(e,t,r){this.name=e,this.lodThreshold=t,this.pivotOffset=r,this.stageResources=new Lt,this.numberOfVertices=0}}const Ft=te.L.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Bt(e,t){const r=await async function(e,t){const r=null!=t&&t.streamDataRequester;if(r)return async function(e,t,r){const i=await(0,Q.r)(t.request(e,"json",r));return!0===i.ok?i.value:((0,ie.r9)(i.error),void Vt(i.error.details.url))}(e,r,t);const i=await(0,Q.r)((0,K.default)(e,t));return!0===i.ok?i.value.data:((0,ie.r9)(i.error),void Vt(i.error))}(e,t),i=await async function(e,t){const r=new Array;for(const i in e){const o=e[i],n=o.images[0].data;if(!n){Ft.warn("Externally referenced texture data is not yet supported");continue}const a=o.encoding+";base64,"+n,s="/textureDefinitions/"+i,l="rgba"===o.channels?o.alphaChannelUsage||"transparency":"none",c={noUnpackFlip:!0,wrap:{s:A.T.REPEAT,t:A.T.REPEAT},preMultiplyAlpha:zt(l)!==m.A.Opaque},u=null!=t&&t.disableTextures?Promise.resolve(null):ne(a,t);r.push(u.then((e=>({refId:s,image:e,parameters:c,alphaChannelUsage:l}))))}const i=await Promise.all(r),o={};for(const e of i)o[e.refId]=e;return o}(r.textureDefinitions??{},t);let o=0;for(const e in i)if(i.hasOwnProperty(e)){const t=i[e];o+=t?.image?t.image.width*t.image.height*4:0}return{resource:r,textures:i,size:o+(0,J.a)(r)}}function Vt(e){throw new ee.Z("",`Request for object resource failed: ${e}`)}function Ut(e){const t=e.params,r=t.topology;let i=!0;switch(t.vertexAttributes||(Ft.warn("Geometry must specify vertex attributes"),i=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(Ft.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),i=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(Ft.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),i=!1)):(Ft.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),i=!1)}}else Ft.warn("Indexed geometries must specify faces"),i=!1;break}default:Ft.warn(`Unsupported topology '${r}'`),i=!1}e.params.material||(Ft.warn("Geometry requires material"),i=!1);const o=e.params.vertexAttributes;for(const e in o)o[e].values||(Ft.warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function Gt(e){const t=(0,u.k)();return e.forEach((e=>{const r=e.boundingInfo;null!=r&&((0,u.e)(t,r.bbMin),(0,u.e)(t,r.bbMax))})),t}function zt(e){switch(e){case"mask":return m.A.Mask;case"maskAndTransparency":return m.A.MaskBlend;case"none":return m.A.Opaque;default:return m.A.Blend}}function Ht(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const Wt=new oe.V(1,2,"wosr");async function $t(e,t){const r=kt((0,i.a)(e));if("wosr"===r.fileType){const e=await(t.cache?t.cache.loadWOSR(r.url,t):Bt(r.url,t)),{engineResources:i,referenceBoundingBox:o}=function(e,t){const r=new Array,i=new Array,o=new Array,n=new re,a=e.resource,s=oe.V.parse(a.version||"1.0","wosr");Wt.validate(s);const l=a.model.name,u=a.model.geometries,d=a.materialDefinitions??{},h=e.textures;let f=0;const p=new Map;for(let e=0;e<u.length;e++){const a=u[e];if(!Ut(a))continue;const s=Ht(a),l=a.params.vertexAttributes,g=[];for(const e in l){const t=l[e],r=t.values;g.push([e,new ae.A(r,t.valuesPerElement,!0)])}const v=[];if("PerAttributeArray"!==a.params.topology){const e=a.params.faces;for(const t in e)v.push([t,e[t].values])}const _=s.texture,T=h&&h[_];if(T&&!p.has(_)){const{image:e,parameters:t}=T,r=new we(e,t);i.push(r),p.set(_,r)}const x=p.get(_),b=x?x.id:void 0,S=s.material;let A=n.get(S,_);if(null==A){const e=d[S.substring(S.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=T&&T.alphaChannelUsage,i=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,o=T?zt(T.alphaChannelUsage):void 0,a={ambient:(0,c.d)(e.diffuse),diffuse:(0,c.d)(e.diffuse),opacity:1-(e.transparency||0),transparent:i,textureAlphaMode:o,textureAlphaCutoff:.33,textureId:b,initTextureTransparent:!0,doubleSided:!0,cullFace:m.C.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:T?.parameters.preMultiplyAlpha??!1};null!=t&&t.materialParamsMixin&&Object.assign(a,t.materialParamsMixin),A=new Et(a),n.set(S,_,A)}o.push(A);const C=new D(A,g,v);f+=v.find((e=>e[0]===E.V.POSITION))?.[1].length??0,r.push(C)}return{engineResources:[{name:l,stageResources:{textures:i,materials:o,geometries:r},pivotOffset:a.model.pivotOffset,numberOfVertices:f,lodThreshold:null}],referenceBoundingBox:Gt(r)}}(e,t);return{lods:i,referenceBoundingBox:o,isEsriSymbolResource:!1,isWosr:!0}}const o=await(t.cache?t.cache.loadGLTF(r.url,t,!!t.usePBR):(0,X.l)(new X.D(t.streamDataRequester),r.url,t,t.usePBR)),n=o.model.meta?.ESRI_proxyEllipsoid,u=o.meta.isEsriSymbolResource&&null!=n&&o.meta.uri.includes("/RealisticTrees/");u&&!o.customMeta.esriTreeRendering&&(o.customMeta.esriTreeRendering=!0,function(e,t){for(let r=0;r<e.model.lods.length;++r){const i=e.model.lods[r];for(const o of i.parts){const i=o.attributes.normal;if(null==i)return;const n=o.attributes.position,u=n.count,d=(0,c.c)(),h=(0,c.c)(),m=(0,c.c)(),f=new Uint8Array(4*u),p=new Float64Array(3*u),g=(0,a.c)((0,s.c)(),o.transform);let v=0,_=0;for(let a=0;a<u;a++){n.getVec(a,h),i.getVec(a,d),(0,l.d)(h,h,o.transform),(0,l.b)(m,h,t.center),(0,l.y)(m,m,t.radius);const s=m[2],c=(0,l.l)(m),u=Math.min(.45+.55*c*c,1);(0,l.y)(m,m,t.radius),null!==g&&(0,l.d)(m,m,g),(0,l.n)(m,m),r+1!==e.model.lods.length&&e.model.lods.length>1&&(0,l.x)(m,m,d,s>-1?.2:Math.min(-4*s-3.8,1)),p[v]=m[0],p[v+1]=m[1],p[v+2]=m[2],v+=3,f[_]=255*u,f[_+1]=255*u,f[_+2]=255*u,f[_+3]=255,_+=4}o.attributes.normal=new C.B(p),o.attributes.color=new C.b(f)}}}(o,n));const d=!!t.usePBR,h=o.meta.isEsriSymbolResource?{usePBR:d,isSchematic:!1,treeRendering:u,mrrFactors:[...gt]}:{usePBR:d,isSchematic:!1,treeRendering:!1,mrrFactors:[...ft]},f={...t.materialParamsMixin,treeRendering:u},{engineResources:p,referenceBoundingBox:g}=jt(o,h,f,t.skipHighLods&&null==r.specifiedLodIndex?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:r.specifiedLodIndex});return{lods:p,referenceBoundingBox:g,isEsriSymbolResource:o.meta.isEsriSymbolResource,isWosr:!1}}function kt(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function jt(e,t,r,i){const n=e.model,a=new Array,s=new Map,l=new Map,c=n.lods.length,d=(0,u.k)();return n.lods.forEach(((e,h)=>{const f=!0===i.skipHighLods&&(c>1&&0===h||c>3&&1===h)||!1===i.skipHighLods&&null!=i.singleLodIndex&&h!==i.singleLodIndex;if(f&&0!==h)return;const p=new Dt(e.name,e.lodThreshold,[0,0,0]);e.parts.forEach((e=>{const i=f?new Et({}):function(e,t,r,i,o,n,a){const s=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),l=e.materials.get(t.material),c=null!=t.attributes.texCoord0,u=null!=t.attributes.normal;if(null==l)return null;const d=function(e){switch(e){case"BLEND":return m.A.Blend;case"MASK":return m.A.Mask;case"OPAQUE":case null:case void 0:return m.A.Opaque}}(l.alphaMode);if(!n.has(s)){if(c){const t=(t,r=!1)=>{if(null!=t&&!a.has(t)){const i=e.textures.get(t);if(null!=i){const e=i.data;a.set(t,new we((0,q.i)(e)?e.data:e,{...i.parameters,preMultiplyAlpha:!(0,q.i)(e)&&r,encoding:(0,q.i)(e)&&null!=e.encoding?e.encoding:void 0}))}}};t(l.textureColor,d!==m.A.Opaque),t(l.textureNormal),t(l.textureOcclusion),t(l.textureEmissive),t(l.textureMetallicRoughness)}const r=l.color[0]**(1/X.C),h=l.color[1]**(1/X.C),f=l.color[2]**(1/X.C),p=l.emissiveFactor[0]**(1/X.C),g=l.emissiveFactor[1]**(1/X.C),v=l.emissiveFactor[2]**(1/X.C),_=null!=l.textureColor&&c?a.get(l.textureColor):null,T=mt({normalTexture:l.textureNormal,metallicRoughnessTexture:l.textureMetallicRoughness,metallicFactor:l.metallicFactor,roughnessFactor:l.roughnessFactor,emissiveTexture:l.textureEmissive,emissiveFactor:l.emissiveFactor,occlusionTexture:l.textureOcclusion});n.set(s,new Et({...i,transparent:d===m.A.Blend,customDepthTest:m.b.Lequal,textureAlphaMode:d,textureAlphaCutoff:l.alphaCutoff,diffuse:[r,h,f],ambient:[r,h,f],opacity:l.opacity,doubleSided:l.doubleSided,doubleSidedType:"winding-order",cullFace:l.doubleSided?m.C.None:m.C.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:u?Ne.b.Attribute:Ne.b.ScreenDerivative,castShadows:!0,receiveSSAO:!0,textureId:null!=_?_.id:void 0,colorMixMode:l.colorMixMode,normalTextureId:null!=l.textureNormal&&c?a.get(l.textureNormal).id:void 0,textureAlphaPremultiplied:null!=_&&!!_.parameters.preMultiplyAlpha,occlusionTextureId:null!=l.textureOcclusion&&c?a.get(l.textureOcclusion).id:void 0,emissiveTextureId:null!=l.textureEmissive&&c?a.get(l.textureEmissive).id:void 0,metallicRoughnessTextureId:null!=l.textureMetallicRoughness&&c?a.get(l.textureMetallicRoughness).id:void 0,emissiveFactor:[p,g,v],mrrFactors:T?[...pt]:[l.metallicFactor,l.roughnessFactor,i.mrrFactors[2]],isSchematic:T,colorTextureTransformMatrix:Nt(l.colorTextureTransform),normalTextureTransformMatrix:Nt(l.normalTextureTransform),occlusionTextureTransformMatrix:Nt(l.occlusionTextureTransform),emissiveTextureTransformMatrix:Nt(l.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:Nt(l.metallicRoughnessTextureTransform),...o}))}const h=n.get(s);if(r.stageResources.materials.push(h),c){const e=e=>{null!=e&&r.stageResources.textures.push(a.get(e))};e(l.textureColor),e(l.textureNormal),e(l.textureOcclusion),e(l.textureEmissive),e(l.textureMetallicRoughness)}return h}(n,e,p,t,r,s,l),{geometry:a,vertexCount:c}=function(e,t){const r=e.attributes.position.count,i=(0,X.a)(e.indices||r,e.primitiveType),n=w(3*r),{typedBuffer:a,typedBufferStride:s}=e.attributes.position;(0,j.t)(n,a,e.transform,3,s);const l=[[E.V.POSITION,new ae.A(n,3,!0)]],c=[[E.V.POSITION,i]];if(null!=e.attributes.normal){const t=w(3*r),{typedBuffer:n,typedBufferStride:a}=e.attributes.normal;(0,o.n)(Xt,e.transform),(0,j.a)(t,n,Xt,3,a),l.push([E.V.NORMAL,new ae.A(t,3,!0)]),c.push([E.V.NORMAL,i])}if(null!=e.attributes.tangent){const t=w(4*r),{typedBuffer:n,typedBufferStride:a}=e.attributes.tangent;(0,o.n)(Xt,e.transform),(0,X.t)(t,n,Xt,4,a),l.push([E.V.TANGENT,new ae.A(t,4,!0)]),c.push([E.V.TANGENT,i])}if(null!=e.attributes.texCoord0){const t=w(2*r),{typedBuffer:o,typedBufferStride:n}=e.attributes.texCoord0;(0,X.n)(t,o,2,n),l.push([E.V.UV0,new ae.A(t,2,!0)]),c.push([E.V.UV0,i])}if(null!=e.attributes.color){const t=new Uint8Array(4*r);4===e.attributes.color.elementCount?e.attributes.color instanceof C.c?(0,X.s)(t,e.attributes.color,255):e.attributes.color instanceof C.b?(0,X.b)(t,e.attributes.color):e.attributes.color instanceof C.t&&(0,X.s)(t,e.attributes.color,1/256):(t.fill(255),e.attributes.color instanceof C.B?(0,j.s)(t,e.attributes.color,255,4):e.attributes.color instanceof C.p?(0,X.c)(t,e.attributes.color.typedBuffer,4,e.attributes.color.typedBufferStride):e.attributes.color instanceof C.s&&(0,j.s)(t,e.attributes.color,1/256,4)),l.push([E.V.COLOR,new ae.A(t,4,!0)]),c.push([E.V.COLOR,i])}return{geometry:new D(t,l,c),vertexCount:r}}(e,null!=i?i:new Et({})),g=a.boundingInfo;null!=g&&0===h&&((0,u.e)(d,g.bbMin),(0,u.e)(d,g.bbMax)),null!=i&&(p.stageResources.geometries.push(a),p.numberOfVertices+=c)})),f||a.push(p)})),{engineResources:a,referenceBoundingBox:d}}const Xt=(0,n.c)(),qt=Object.freeze(Object.defineProperty({__proto__:null,fetch:$t,gltfToEngineResources:jt,parseUrl:kt},Symbol.toStringTag,{value:"Module"}))},35861:(e,t,r)=>{r.d(t,{a:()=>l,e:()=>u,f:()=>c,g:()=>a,m:()=>s,s:()=>n});var i=r(66106),o=r(29794);function n(e,t,r){r*=.5;const i=Math.sin(r);return e[0]=i*t[0],e[1]=i*t[1],e[2]=i*t[2],e[3]=Math.cos(r),e}function a(e,t){const r=2*Math.acos(t[3]),i=Math.sin(r/2);return i>(0,o.g)()?(e[0]=t[0]/i,e[1]=t[1]/i,e[2]=t[2]/i):(e[0]=1,e[1]=0,e[2]=0),r}function s(e,t,r){const i=t[0],o=t[1],n=t[2],a=t[3],s=r[0],l=r[1],c=r[2],u=r[3];return e[0]=i*u+a*s+o*c-n*l,e[1]=o*u+a*l+n*s-i*c,e[2]=n*u+a*c+i*l-o*s,e[3]=a*u-i*s-o*l-n*c,e}function l(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function c(e,t,r,i){const o=.5*Math.PI/180;t*=o,r*=o,i*=o;const n=Math.sin(t),a=Math.cos(t),s=Math.sin(r),l=Math.cos(r),c=Math.sin(i),u=Math.cos(i);return e[0]=n*l*u-a*s*c,e[1]=a*s*u+n*l*c,e[2]=a*l*c-n*s*u,e[3]=a*l*u+n*s*c,e}const u=(r(72836),r(7200)).e;(0,i.c)(),(0,i.f)(1,0,0),(0,i.f)(0,1,0)},45087:(e,t,r)=>{function i(){return[0,0,0,1]}function o(e){return[e[0],e[1],e[2],e[3]]}function n(e,t){return new Float64Array(e,t,4)}r.d(t,{I:()=>a,a:()=>n,b:()=>o,c:()=>i});const a=[0,0,0,1]},2420:(e,t,r)=>{r.d(t,{O:()=>h,c:()=>_,d:()=>v,e:()=>b,s:()=>g,w:()=>x}),r(48578);var i=r(30773),o=r(72836),n=r(66106),a=r(13457),s=r(16912),l=r(57532),c=r(45087),u=r(32191),d=r(68681);class h{constructor(e){this._allocator=e,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,i.n)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const e=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*m);this._items.length=Math.min(e,this._items.length),this._itemsPtr=0}_grow(){for(let e=0;e<Math.max(8,Math.min(this._items.length,m));e++)this._items.push(this._allocator())}}const m=1024;class f{constructor(e,t,r){this._itemByteSize=e,this._itemCreate=t,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(r/this._itemByteSize)}get(){0===this._itemsPtr&&(0,i.n)((()=>this._reset()));const e=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=e;){const e=new ArrayBuffer(this._itemsPerBuffer*this._itemByteSize);for(let t=0;t<this._itemsPerBuffer;++t)this._items.push(this._itemCreate(e,t*this._itemByteSize));this._buffers.push(e)}return this._items[this._itemsPtr++]}_reset(){const e=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>e;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(e=p){return new f(16,u.c,e)}static createVec3f64(e=p){return new f(24,n.g,e)}static createVec4f64(e=p){return new f(32,d.b,e)}static createMat3f64(e=p){return new f(72,s.a,e)}static createMat4f64(e=p){return new f(128,l.a,e)}static createQuatf64(e=p){return new f(32,c.a,e)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this._itemByteSize}}}const p=4*a.B.KILOBYTES,g=(f.createVec2f64(),f.createVec3f64());f.createVec4f64(),f.createMat3f64();const v=f.createMat4f64();function _(e){return e?T((0,n.e)(e.origin),(0,n.e)(e.direction)):T((0,n.c)(),(0,n.c)())}function T(e,t){return{origin:e,direction:t}}function x(e,t){const r=S.get();return r.origin=e,r.direction=t,r}function b(e,t,r){const i=(0,o.i)(e.direction,(0,o.b)(r,t,e.origin));return(0,o.a)(r,e.origin,(0,o.e)(r,e.direction,i)),r}f.createQuatf64();const S=new h((()=>_()))},77046:(e,t,r)=>{r.d(t,{a:()=>d,b:()=>n,c:()=>c,d:()=>u,m:()=>x,s:()=>a});var i=r(33417),o=r(51006);function n(e,t,r=o.o.ADD,i=[0,0,0,0]){return{srcRgb:e,srcAlpha:e,dstRgb:t,dstAlpha:t,opRgb:r,opAlpha:r,color:{r:i[0],g:i[1],b:i[2],a:i[3]}}}function a(e,t,r,i,n=o.o.ADD,a=o.o.ADD,s=[0,0,0,0]){return{srcRgb:e,srcAlpha:t,dstRgb:r,dstAlpha:i,opRgb:n,opAlpha:a,color:{r:s[0],g:s[1],b:s[2],a:s[3]}}}const s={face:o.F.BACK,mode:o.n.CCW},l={face:o.F.FRONT,mode:o.n.CCW},c=e=>e===i.C.Back?s:e===i.C.Front?l:null,u={zNear:0,zFar:1},d={r:!0,g:!0,b:!0,a:!0};function h(e){return E.intern(e)}function m(e){return C.intern(e)}function f(e){return w.intern(e)}function p(e){return M.intern(e)}function g(e){return P.intern(e)}function v(e){return N.intern(e)}function _(e){return D.intern(e)}function T(e){return B.intern(e)}function x(e){return U.intern(e)}class b{constructor(e,t){this._makeKey=e,this._makeRef=t,this._interns=new Map}intern(e){if(!e)return null;const t=this._makeKey(e),r=this._interns;return r.has(t)||r.set(t,this._makeRef(e)),r.get(t)??null}}function S(e){return"["+e.join(",")+"]"}const E=new b(A,(e=>({__tag:"Blending",...e})));function A(e){return e?S([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}const C=new b(R,(e=>({__tag:"Culling",...e})));function R(e){return e?S([e.face,e.mode]):null}const w=new b(y,(e=>({__tag:"PolygonOffset",...e})));function y(e){return e?S([e.factor,e.units]):null}const M=new b(O,(e=>({__tag:"DepthTest",...e})));function O(e){return e?S([e.func]):null}const P=new b(I,(e=>({__tag:"StencilTest",...e})));function I(e){return e?S([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}const N=new b(L,(e=>({__tag:"DepthWrite",...e})));function L(e){return e?S([e.zNear,e.zFar]):null}const D=new b(F,(e=>({__tag:"ColorWrite",...e})));function F(e){return e?S([e.r,e.g,e.b,e.a]):null}const B=new b(V,(e=>({__tag:"StencilWrite",...e})));function V(e){return e?S([e.mask]):null}const U=new b((function(e){return e?S([A(e.blending),R(e.culling),y(e.polygonOffset),O(e.depthTest),I(e.stencilTest),L(e.depthWrite),F(e.colorWrite),V(e.stencilWrite)]):null}),(e=>({blending:h(e.blending),culling:m(e.culling),polygonOffset:f(e.polygonOffset),depthTest:p(e.depthTest),stencilTest:g(e.stencilTest),depthWrite:v(e.depthWrite),colorWrite:_(e.colorWrite),stencilWrite:T(e.stencilWrite)})))},60939:(e,t,r)=>{r.d(t,{a:()=>f,b:()=>g,c:()=>m,g:()=>p,i:()=>T,l:()=>R}),r(48578);var i=r(92143),o=r(82426),n=r(65775),a=r(72836),s=r(66106),l=r(7200),c=r(68681),u=r(40961),d=r(2420);const h=m();function m(){return(0,c.c)()}function f(e,t=m()){return(0,l.c)(t,e)}function p(e){return e[3]}function g(e){return e}function v(e,t,r){if(null==t)return!1;const{origin:i,direction:o}=t,n=_;n[0]=i[0]-e[0],n[1]=i[1]-e[1],n[2]=i[2]-e[2];const a=o[0]*o[0]+o[1]*o[1]+o[2]*o[2];if(0===a)return!1;const s=2*(o[0]*n[0]+o[1]*n[1]+o[2]*n[2]),l=s*s-4*a*(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]-e[3]*e[3]);if(l<0)return!1;const c=Math.sqrt(l);let u=(-s-c)/(2*a);const d=(-s+c)/(2*a);return(u<0||d<u&&d>0)&&(u=d),!(u<0||(r&&(r[0]=i[0]+o[0]*u,r[1]=i[1]+o[1]*u,r[2]=i[2]+o[2]*u),0))}const _=(0,s.c)();function T(e,t){return v(e,t,null)}function x(e,t,r){const i=d.s.get(),o=d.d.get();(0,a.f)(i,t.origin,t.direction);const s=p(e);(0,a.f)(r,i,t.origin),(0,a.e)(r,r,1/(0,a.l)(r)*s);const l=S(e,t.origin),c=(0,u.a)(t.origin,r);return(0,n.a)(o,c+l,i),(0,a.d)(r,r,o),r}function b(e,t,r){const i=(0,a.b)(d.s.get(),t,e),o=(0,a.e)(d.s.get(),i,e[3]/(0,a.l)(i));return(0,a.a)(r,o,e)}function S(e,t){const r=(0,a.b)(d.s.get(),t,e),i=(0,a.l)(r),n=p(e),s=n+Math.abs(n-i);return(0,o.b)(n/s)}const E=(0,s.c)();function A(e,t,r,i){const n=(0,a.b)(E,t,e);switch(r){case u.A.X:{const e=(0,o.g)(n,E)[2];return(0,a.s)(i,-Math.sin(e),Math.cos(e),0)}case u.A.Y:{const e=(0,o.g)(n,E),t=e[1],r=e[2],s=Math.sin(t);return(0,a.s)(i,-s*Math.cos(r),-s*Math.sin(r),Math.cos(t))}case u.A.Z:return(0,a.n)(i,n);default:return}}function C(e,t){const r=(0,a.b)(w,t,e);return(0,a.l)(r)-e[3]}function R(e,t){const r=(0,a.C)(e,t),i=p(e);return r<=i*i}const w=(0,s.c)(),y=m();Object.freeze(Object.defineProperty({__proto__:null,NullSphere:h,altitudeAt:C,angleToSilhouette:S,axisAt:A,clear:function(e){e[0]=e[1]=e[2]=e[3]=0},closestPoint:function(e,t,r){return v(e,t,r)?r:((0,d.e)(t,e,r),b(e,r,r))},closestPointOnSilhouette:x,containsPoint:R,copy:f,create:m,distanceToSilhouette:function(e,t){const r=(0,a.b)(d.s.get(),t,e),i=(0,a.D)(r),o=e[3]*e[3];return Math.sqrt(Math.abs(i-o))},elevate:function(e,t,r){return e!==r&&(0,a.c)(r,e),r[3]=e[3]+t,r},fromCenterAndRadius:function(e,t){return(0,c.f)(e[0],e[1],e[2],t)},fromRadius:function(e,t){return e[0]=e[1]=e[2]=0,e[3]=t,e},fromValues:function(e,t,r,i){return(0,c.f)(e,t,r,i)},getCenter:g,getRadius:p,intersectRay:v,intersectRayClosestSilhouette:function(e,t,r){if(v(e,t,r))return r;const i=x(e,t,d.s.get());return(0,a.a)(r,t.origin,(0,a.e)(d.s.get(),t.direction,(0,a.z)(t.origin,i)/(0,a.l)(t.direction))),r},intersectsRay:T,projectPoint:b,setAltitudeAt:function(e,t,r,i){const o=C(e,t),n=A(e,t,u.A.Z,w),s=(0,a.e)(w,n,r-o);return(0,a.a)(i,t,s)},setExtent:function(e,t,r){return i.L.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),e===r?r:f(e,r)},tmpSphere:y,union:function(e,t,r=m()){const i=(0,a.z)(e,t),o=e[3],n=t[3];return i+n<o?((0,l.c)(r,e),r):i+o<n?((0,l.c)(r,t),r):((0,a.x)(r,e,t,(i+n-o)/(2*i)),r[3]=(i+o+n)/2,r)},wrap:function(e){return e}},Symbol.toStringTag,{value:"Module"}))},75854:(e,t,r)=>{var i,o;r.d(t,{C:()=>i}),r(82426),(o=i||(i={}))[o.Multiply=1]="Multiply",o[o.Ignore=2]="Ignore",o[o.Replace=3]="Replace",o[o.Tint=4]="Tint"},87372:(e,t,r)=>{function i(){return new Float32Array(2)}function o(e,t){const r=new Float32Array(2);return r[0]=e,r[1]=t,r}r.d(t,{O:()=>a,Z:()=>n,c:()=>i,f:()=>o});const n=i(),a=o(1,1);o(1,0),o(0,1)},79641:(e,t,r)=>{r.d(t,{a:()=>s,b:()=>a,c:()=>o,d:()=>u,e:()=>l,m:()=>i,n:()=>d,s:()=>c,t:()=>n});const i=r(92143).L.getLogger("esri.views.3d.support.buffer.math");function o(e,t,r){n(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function n(e,t,r,o=3,n=o){if(e.length/o!==Math.ceil(t.length/n))return i.error("source and destination buffers need to have the same number of elements"),e;const a=e.length/o,s=r[0],l=r[1],c=r[2],u=r[4],d=r[5],h=r[6],m=r[8],f=r[9],p=r[10],g=r[12],v=r[13],_=r[14];let T=0,x=0;for(let r=0;r<a;r++){const r=t[T],i=t[T+1],a=t[T+2];e[x]=s*r+u*i+m*a+g,e[x+1]=l*r+d*i+f*a+v,e[x+2]=c*r+h*i+p*a+_,T+=n,x+=o}return e}function a(e,t,r){s(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function s(e,t,r,o=3,n=o){if(e.length/o!==Math.ceil(t.length/n))return void i.error("source and destination buffers need to have the same number of elements");const a=e.length/o,s=r[0],l=r[1],c=r[2],u=r[3],d=r[4],h=r[5],m=r[6],f=r[7],p=r[8];let g=0,v=0;for(let r=0;r<a;r++){const r=t[g],i=t[g+1],a=t[g+2];e[v]=s*r+u*i+m*a,e[v+1]=l*r+d*i+f*a,e[v+2]=c*r+h*i+p*a,g+=n,v+=o}}function l(e,t,r){c(e.typedBuffer,t,r,e.typedBufferStride)}function c(e,t,r,i=3){const o=Math.min(e.length/i,t.count),n=t.typedBuffer,a=t.typedBufferStride;let s=0,l=0;for(let t=0;t<o;t++)e[l]=r*n[s],e[l+1]=r*n[s+1],e[l+2]=r*n[s+2],s+=a,l+=i}function u(e,t){d(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function d(e,t,r=3,i=r){const o=Math.min(e.length/r,t.length/i);let n=0,a=0;for(let s=0;s<o;s++){const o=t[n],s=t[n+1],l=t[n+2],c=o*o+s*s+l*l;if(c>0){const t=1/Math.sqrt(c);e[a]=t*o,e[a+1]=t*s,e[a+2]=t*l}n+=i,a+=r}}},56697:(e,t,r)=>{function i(){return new Float32Array(3)}function o(e){const t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function n(e,t,r){const i=new Float32Array(3);return i[0]=e,i[1]=t,i[2]=r,i}r.d(t,{b:()=>i,c:()=>o,f:()=>n}),n(1,1,1),n(1,0,0),n(0,1,0),n(0,0,1)},40961:(e,t,r)=>{r.d(t,{A:()=>i,a:()=>l});var i,o,n=r(82426),a=r(72836),s=r(66106);function l(e,t){const r=(0,a.i)(e,t)/((0,a.l)(e)*(0,a.l)(t));return-(0,n.b)(r)}(o=i||(i={}))[o.X=0]="X",o[o.Y=1]="Y",o[o.Z=2]="Z",(0,s.c)(),(0,s.c)()}}]);