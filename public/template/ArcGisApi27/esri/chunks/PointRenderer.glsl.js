// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ./_rollupPluginBabelHelpers ../core/mathUtils ./mat4 ./mat4f64 ./vec2 ./vec2f64 ./vec3 ./vec3f64 ../geometry/support/aaBoundingBox ../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl ../views/3d/webgl-engine/core/shaderModules/Float2DrawUniform ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/Float3DrawUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/Matrix4DrawUniform ../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(l,n,k,v,r,t,K,w,L,x,y,p,z,M,N,A,O,B,g,P,Q,R,C){function D(a){const b=new R.ShaderBuilder,e=a.output===p.ShaderOutput.Color,m=a.output===p.ShaderOutput.Depth,q=a.output===p.ShaderOutput.Highlight,{vertex:h,fragment:E}=b;b.include(z.SliceDraw,a);b.attributes.add(C.VertexAttribute.POSITION,"vec3");b.attributes.add(C.VertexAttribute.COLOR,"vec3");h.uniforms.add(new P.Matrix4DrawUniform("modelView",(c,d)=>v.multiply(F,d.camera.viewMatrix,v.fromTranslation(F,c.origin))),new Q.Matrix4PassUniform("proj",
(c,d)=>d.camera.projectionMatrix),new A.Float2DrawUniform("screenMinMaxSize",(c,d,f)=>t.set(u,f.useFixedSizes?0:f.minSizePx*d.camera.pixelRatio,(c.isLeaf?256:64)*d.camera.pixelRatio)),a.useFixedSizes?new O.Float2PassUniform("pointScale",(c,d)=>t.set(u,c.fixedSize*d.camera.pixelRatio,d.camera.fullHeight)):new A.Float2DrawUniform("pointScale",(c,d,f)=>t.set(u,c.splatSize*f.scaleFactor*d.camera.pixelRatio,d.camera.fullHeight/d.camera.pixelRatio)));a.clippingEnabled?h.uniforms.add(new B.Float3DrawUniform("clipMin",
(c,d,f)=>w.set(G,f.clipBox[0]-c.origin[0],f.clipBox[1]-c.origin[1],f.clipBox[2]-c.origin[2])),new B.Float3DrawUniform("clipMax",(c,d,f)=>w.set(G,f.clipBox[3]-c.origin[0],f.clipBox[4]-c.origin[1],f.clipBox[5]-c.origin[2]))):(h.constants.add("clipMin","vec3",[-k.NUMBER_MAX_FLOAT32,-k.NUMBER_MAX_FLOAT32,-k.NUMBER_MAX_FLOAT32]),h.constants.add("clipMax","vec3",[k.NUMBER_MAX_FLOAT32,k.NUMBER_MAX_FLOAT32,k.NUMBER_MAX_FLOAT32]));m?(y.addNearFar(b),y.addCalculateLinearDepth(b),b.varyings.add("depth","float")):
a.output!==p.ShaderOutput.Highlight&&b.varyings.add("vColor","vec3");h.code.add(g.glsl`
    void main(void) {
      // Move clipped points outside of clipspace
      if (position.x < clipMin.x || position.y < clipMin.y || position.z < clipMin.z ||
        position.x > clipMax.x || position.y > clipMax.y || position.z > clipMax.z) {
        gl_Position = vec4(0.0,0.0,0.0,2.0);
        gl_PointSize = 0.0;
        return;
      }

      if (rejectBySlice(position)) {
        gl_Position = vec4(0.0,0.0,0.0,2.0);
        gl_PointSize = 0.0;
        return;
      }

      // Position in camera space
      vec4 camera = modelView * vec4(position, 1.0);

      float pointSize = pointScale.x;
      vec4 position = proj * camera;
     ${a.drawScreenSize?g.glsl`
      float clampedScreenSize = pointSize;`:g.glsl`
      float pointRadius = 0.5 * pointSize;
      vec4 cameraOffset = camera + vec4(0.0, pointRadius, 0.0, 0.0);
      vec4 positionOffset = proj * cameraOffset;
      float radius = abs(positionOffset.y - position.y);
      float viewHeight = pointScale.y;
      // screen diameter = (2 * r / w) * (h / 2)
      float screenPointSize = (radius / position.w) * viewHeight;
      float clampedScreenSize = clamp(screenPointSize, screenMinMaxSize.x, screenMinMaxSize.y);
      // Shift towards camera, to move rendered point out of terrain i.e. to
      // the camera-facing end of the virtual point when considering it as a
      // 3D sphere.
      camera.xyz -= normalize(camera.xyz) * pointRadius * clampedScreenSize / screenPointSize;
      position = proj * camera;`}

     gl_PointSize = clampedScreenSize;
     gl_Position = position;

     ${m?g.glsl`depth = calculateLinearDepth(nearFar, camera.z);`:""}
     ${e?g.glsl`vColor = color;`:""}
    }
  `);E.include(N.RgbaFloatEncoding,a);q&&b.include(M.OutputHighlight,a);E.code.add(g.glsl`
    void main(void) {
      vec2 vOffset = gl_PointCoord - vec2(0.5, 0.5);
      float r2 = dot(vOffset, vOffset);

      if (r2 > 0.25) {
        discard;
      }
      ${m?g.glsl`fragColor = float2rgba(depth);`:""}
      ${q?g.glsl`outputHighlight();`:""}
      ${e?g.glsl`fragColor = vec4(vColor, 1.0);`:""}
    }
  `);return b}function H(a){return a?256:64}let I=function(a){function b(){var e=a.apply(this,arguments)||this;e.clipBox=x.create(x.POSITIVE_INFINITY);e.useFixedSizes=!1;e.useRealWorldSymbolSizes=!1;e.scaleFactor=1;e.minSizePx=0;e.size=0;e.sizePx=0;return e}n._inherits(b,a);n._createClass(b,[{key:"fixedSize",get:function(){return this.drawScreenSpace?this.sizePx:this.size}},{key:"screenMinSize",get:function(){return this.useFixedSizes?0:this.minSizePx}},{key:"drawScreenSpace",get:function(){return this.useFixedSizes&&
!this.useRealWorldSymbolSizes}}]);return b}(g.NoParameters),J=function(a){function b(e,m,q){var h=a.call(this,e)||this;h.origin=e;h.isLeaf=m;h.splatSize=q;return h}n._inherits(b,a);return n._createClass(b)}(z.SlicePlaneParameters);const F=r.create(),G=L.create(),u=K.create();r=Object.freeze(Object.defineProperty({__proto__:null,PointRendererDrawParameters:J,PointRendererPassParameters:I,build:D,getMaxPointSizeScreenspace:H},Symbol.toStringTag,{value:"Module"}));l.PointRendererDrawParameters=J;l.PointRendererPassParameters=
I;l.PointRendererShader=r;l.build=D;l.getMaxPointSizeScreenspace=H});