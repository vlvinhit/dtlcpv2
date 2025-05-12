/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{F as e}from"./ForwardLinearDepth.glsl.js";import{S as o}from"./ShaderOutput.js";import{S as t}from"./Slice.glsl.js";import{T as a}from"./Transform.glsl.js";import{O as r}from"./ObjectAndLayerIdColor.glsl.js";import{O as i}from"./OutputHighlight.glsl.js";import{a as n,b as d,c as s,M as c,E as l,P as m,R as u}from"./PhysicallyBasedRendering.glsl.js";import{m as v}from"./MultipassTerrainTest.glsl.js";import{N as f}from"./NormalUtils.glsl.js";import{g as p}from"./interfaces2.js";import{c as h}from"./mat4f64.js";import{R as g}from"./ReadLinearDepth.glsl.js";import{F as C}from"./RgbaFloatEncoding.glsl.js";import{F as w}from"./FloatPassUniform.js";import{M as y}from"./Matrix4PassUniform.js";import{T as F}from"./Texture2DPassUniform.js";import{c as D}from"./mathUtils.js";import{n as I}from"./unitUtils.js";import{c as S}from"./vec3f64.js";import{B as P}from"./BooleanPassUniform.js";import{F as x}from"./Float3PassUniform.js";import{U as N,B as T,S as R}from"./ShaderBuilder.js";import{s as _}from"./vec2.js";import{a as E}from"./vec2f64.js";import{s as M}from"./vec4.js";import{c as j}from"./vec4f64.js";import{F as A}from"./Float4PassUniform.js";import{s as z}from"./AlphaCutoff.js";import{C as H}from"./ColorConversion.glsl.js";import{a as O,c as b}from"./View.glsl.js";import{T as L}from"./TransparencyPassType.js";import{V as G}from"./VertexAttribute.js";var k,U,V,B,W;function Z(e){return null!=e?.cubeMap}function $(e){return null!=e&&!e.running}!function(e){e[e.RENDERING=0]="RENDERING",e[e.FINISHED_RENDERING=1]="FINISHED_RENDERING",e[e.FADING_TEXTURE_CHANNELS=2]="FADING_TEXTURE_CHANNELS",e[e.SWITCH_CHANNELS=3]="SWITCH_CHANNELS",e[e.FINISHED=4]="FINISHED"}(k||(k={})),function(e){e[e.RG=0]="RG",e[e.BA=1]="BA"}(U||(U={}));class Q{constructor(){this.readChannels=U.RG,this.renderingStage=k.FINISHED,this.startTime=0,this.startTimeHeightFade=0,this.cameraPositionLastFrame=S(),this.isCameraPositionFinal=!0,this.parallax=new K,this.parallaxNew=new K,this.crossFade={enabled:!1,factor:1,distanceThresholdFactor:.3},this.fadeInOut={stage:B.FINISHED,factor:1,distanceThresholdFactor:.6},this.fadeIn={stage:V.FINISHED,factor:1,distanceThresholdFactor:2},this.fadeInOutHeight={stage:W.FINISHED,factor:-1}}get isFading(){return this.fadeInOut.stage===B.FADE_OUT||this.fadeInOut.stage===B.FADE_IN||this.fadeIn.stage===V.FADE_IN||this.fadeInOutHeight.stage!==W.FINISHED||this.renderingStage===k.FADING_TEXTURE_CHANNELS}}!function(e){e[e.FINISHED=0]="FINISHED",e[e.CHANGE_ANCHOR=1]="CHANGE_ANCHOR",e[e.FADE_IN=2]="FADE_IN"}(V||(V={})),function(e){e[e.FINISHED=0]="FINISHED",e[e.FADE_OUT=1]="FADE_OUT",e[e.SWITCH=2]="SWITCH",e[e.FADE_IN=3]="FADE_IN"}(B||(B={})),function(e){e[e.FINISHED=0]="FINISHED",e[e.HEIGHT_FADE=1]="HEIGHT_FADE"}(W||(W={}));class K{constructor(){this.anchorPointClouds=S(),this.cloudsHeight=1e5,this.radiusCurvatureCorrectionFactor=0,this.transform=h()}}function X(e,o){const t=e.fragment;t.include(g),t.uniforms.add(new C("nearFar",((e,o)=>o.camera.nearFar))),t.uniforms.add(new F("depthMap",((e,o)=>o.linearDepthTexture))),t.uniforms.add(new y("proj",((e,o)=>o.ssr.camera.projectionMatrix))),t.uniforms.add(new w("invResolutionHeight",((e,o)=>1/o.ssr.camera.height))),t.uniforms.add(new y("reprojectionMatrix",((e,o)=>o.ssr.reprojectionMatrix))),t.code.add(p`
  vec2 reprojectionCoordinate(vec3 projectionCoordinate)
  {
    vec4 zw = proj * vec4(0.0, 0.0, -projectionCoordinate.z, 1.0);
    vec4 reprojectedCoord = reprojectionMatrix * vec4(zw.w * (projectionCoordinate.xy * 2.0 - 1.0), zw.z, zw.w);
    reprojectedCoord.xy /= reprojectedCoord.w;
    return reprojectedCoord.xy * 0.5 + 0.5;
  }

  const int maxSteps = ${o.highStepCount?"150":"75"};

  vec4 applyProjectionMat(mat4 projectionMat, vec3 x)
  {
    vec4 projectedCoord =  projectionMat * vec4(x, 1.0);
    projectedCoord.xy /= projectedCoord.w;
    projectedCoord.xy = projectedCoord.xy*0.5 + 0.5;
    return projectedCoord;
  }

  vec3 screenSpaceIntersection(vec3 dir, vec3 startPosition, vec3 viewDir, vec3 normal)
  {
    vec3 viewPos = startPosition;
    vec3 viewPosEnd = startPosition;

    // Project the start position to the screen
    vec4 projectedCoordStart = applyProjectionMat(proj, viewPos);
    vec3  Q0 = viewPos / projectedCoordStart.w; // homogeneous camera space
    float k0 = 1.0/ projectedCoordStart.w;

    // advance the position in the direction of the reflection
    viewPos += dir;

    vec4 projectedCoordVanishingPoint = applyProjectionMat(proj, dir);

    // Project the advanced position to the screen
    vec4 projectedCoordEnd = applyProjectionMat(proj, viewPos);
    vec3  Q1 = viewPos / projectedCoordEnd.w; // homogeneous camera space
    float k1 = 1.0/ projectedCoordEnd.w;

    // calculate the reflection direction in the screen space
    vec2 projectedCoordDir = (projectedCoordEnd.xy - projectedCoordStart.xy);
    vec2 projectedCoordDistVanishingPoint = (projectedCoordVanishingPoint.xy - projectedCoordStart.xy);

    float yMod = min(abs(projectedCoordDistVanishingPoint.y), 1.0);

    float projectedCoordDirLength = length(projectedCoordDir);
    float maxSt = float(maxSteps);

    // normalize the projection direction depending on maximum steps
    // this determines how blocky the reflection looks
    vec2 dP = yMod * (projectedCoordDir)/(maxSt * projectedCoordDirLength);

    // Normalize the homogeneous camera space coordinates
    vec3  dQ = yMod * (Q1 - Q0)/(maxSt * projectedCoordDirLength);
    float dk = yMod * (k1 - k0)/(maxSt * projectedCoordDirLength);

    // initialize the variables for ray marching
    vec2 P = projectedCoordStart.xy;
    vec3 Q = Q0;
    float k = k0;
    float rayStartZ = -startPosition.z; // estimated ray start depth value
    float rayEndZ = -startPosition.z;   // estimated ray end depth value
    float prevEstimateZ = -startPosition.z;
    float rayDiffZ = 0.0;
    float dDepth;
    float depth;
    float rayDiffZOld = 0.0;

    // early outs
    if (dot(normal, dir) < 0.0 || dot(-viewDir, normal) < 0.0)
      return vec3(P, 0.0);

    for(int i = 0; i < maxSteps-1; i++)
    {
      depth = -linearDepthFromTexture(depthMap, P, nearFar); // get linear depth from the depth buffer

      // estimate depth of the marching ray
      rayStartZ = prevEstimateZ;
      dDepth = -rayStartZ - depth;
      rayEndZ = (dQ.z * 0.5 + Q.z)/ ((dk * 0.5 + k));
      rayDiffZ = rayEndZ- rayStartZ;
      prevEstimateZ = rayEndZ;

      if(-rayEndZ > nearFar[1] || -rayEndZ < nearFar[0] || P.y < 0.0  || P.y > 1.0 )
      {
        return vec3(P, 0.);
      }

      // If we detect a hit - return the intersection point, two conditions:
      //  - dDepth > 0.0 - sampled point depth is in front of estimated depth
      //  - if difference between dDepth and rayDiffZOld is not too large
      //  - if difference between dDepth and 0.025/abs(k) is not too large
      //  - if the sampled depth is not behind far plane or in front of near plane

      if((dDepth) < 0.025/abs(k) + abs(rayDiffZ) && dDepth > 0.0 && depth > nearFar[0] && depth < nearFar[1] && abs(P.y - projectedCoordStart.y) > invResolutionHeight)
      {
        return vec3(P, depth);
      }

      // continue with ray marching
      P += dP;
      Q.z += dQ.z;
      k += dk;
      rayDiffZOld = rayDiffZ;
    }
    return vec3(P, 0.0);
  }
  `)}class q{constructor(){this.enabled=!1,this.fadeFactor=1,this.reprojectionMatrix=h()}}function J(e){e.fragment.code.add(p`float normals2FoamIntensity(vec3 n, float waveStrength){
float normalizationFactor =  max(0.015, waveStrength);
return max((n.x + n.y)*0.3303545/normalizationFactor + 0.3303545, 0.0);
}`)}function Y(e){e.fragment.code.add(p`vec3 foamIntensity2FoamColor(float foamIntensityExternal, float foamPixelIntensity, vec3 skyZenitColor, float dayMod){
return foamIntensityExternal * (0.075 * skyZenitColor * pow(foamPixelIntensity, 4.) +  50.* pow(foamPixelIntensity, 23.0)) * dayMod;
}`)}function ee(e){e.fragment.uniforms.add(new F("texWaveNormal",(e=>e.waveNormal)),new F("texWavePerturbation",(e=>e.wavePertubation)),new A("waveParams",(e=>M(oe,e.waveStrength,e.waveTextureRepeat,e.flowStrength,e.flowOffset))),new C("waveDirection",(e=>_(te,e.waveDirection[0]*e.waveVelocity,e.waveDirection[1]*e.waveVelocity)))),e.include(J),e.fragment.code.add(p`const vec2  FLOW_JUMP = vec2(6.0/25.0, 5.0/24.0);
vec2 textureDenormalized2D(sampler2D _tex, vec2 _uv) {
return 2.0 * texture(_tex, _uv).rg - 1.0;
}
float sampleNoiseTexture(vec2 _uv) {
return texture(texWavePerturbation, _uv).b;
}
vec3 textureDenormalized3D(sampler2D _tex, vec2 _uv) {
return 2.0 * texture(_tex, _uv).rgb - 1.0;
}
float computeProgress(vec2 uv, float time) {
return fract(time);
}
float computeWeight(vec2 uv, float time) {
float progress = computeProgress(uv, time);
return 1.0 - abs(1.0 - 2.0 * progress);
}
vec3 computeUVPerturbedWeigth(sampler2D texFlow, vec2 uv, float time, float phaseOffset) {
float flowStrength = waveParams[2];
float flowOffset = waveParams[3];
vec2 flowVector = textureDenormalized2D(texFlow, uv) * flowStrength;
float progress = computeProgress(uv, time + phaseOffset);
float weight = computeWeight(uv, time + phaseOffset);
vec2 result = uv;
result -= flowVector * (progress + flowOffset);
result += phaseOffset;
result += (time - progress) * FLOW_JUMP;
return vec3(result, weight);
}
const float TIME_NOISE_TEXTURE_REPEAT = 0.3737;
const float TIME_NOISE_STRENGTH = 7.77;
vec3 getWaveLayer(sampler2D _texNormal, sampler2D _dudv, vec2 _uv, vec2 _waveDir, float time) {
float waveStrength = waveParams[0];
vec2 waveMovement = time * -_waveDir;
float timeNoise = sampleNoiseTexture(_uv * TIME_NOISE_TEXTURE_REPEAT) * TIME_NOISE_STRENGTH;
vec3 uv_A = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.0);
vec3 uv_B = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.5);
vec3 normal_A = textureDenormalized3D(_texNormal, uv_A.xy) * uv_A.z;
vec3 normal_B = textureDenormalized3D(_texNormal, uv_B.xy) * uv_B.z;
vec3 mixNormal = normalize(normal_A + normal_B);
mixNormal.xy *= waveStrength;
mixNormal.z = sqrt(1.0 - dot(mixNormal.xy, mixNormal.xy));
return mixNormal;
}
vec4 getSurfaceNormalAndFoam(vec2 _uv, float _time) {
float waveTextureRepeat = waveParams[1];
vec3 normal = getWaveLayer(texWaveNormal, texWavePerturbation, _uv * waveTextureRepeat, waveDirection, _time);
float foam  = normals2FoamIntensity(normal, waveParams[0]);
return vec4(normal, foam);
}`)}const oe=j(),te=E();function ae(e){e.fragment.code.add(p`const float GAMMA = 2.2;
const float INV_GAMMA = 0.4545454545;
vec4 delinearizeGamma(vec4 color) {
return vec4(pow(color.rgb, vec3(INV_GAMMA)), color.w);
}
vec3 linearizeGamma(vec3 color) {
return pow(color, vec3(GAMMA));
}`)}class re extends N{constructor(e,o){super(e,"samplerCube",T.Pass,((t,a,r)=>t.bindTexture(e,o(a,r))))}}function ie(e){const o=e.fragment;o.uniforms.add(new y("rotationMatrixClouds",((e,o)=>o.cloudsFade.parallax.transform)),new y("rotationMatrixCloudsCrossFade",((e,o)=>o.cloudsFade.parallaxNew.transform)),new x("anchorPosition",((e,o)=>o.cloudsFade.parallax.anchorPointClouds)),new x("anchorPositionCrossFade",((e,o)=>o.cloudsFade.parallaxNew.anchorPointClouds)),new w("cloudsHeight",((e,o)=>o.cloudsFade.parallax.cloudsHeight)),new w("radiusCurvatureCorrectionFactor",((e,o)=>o.cloudsFade.parallax.radiusCurvatureCorrectionFactor)),new w("totalFadeInOut",((e,o)=>o.cloudsFade.fadeInOut.stage===B.FINISHED?o.cloudsFade.fadeInOutHeight.factor+1-o.cloudsFade.fadeIn.factor:o.cloudsFade.fadeInOutHeight.factor+1-o.cloudsFade.fadeInOut.factor)),new w("crossFadeAnchorFactor",((e,o)=>D(o.cloudsFade.crossFade.factor,0,1))),new re("cubeMap",((e,o)=>o.cloudsFade.data?.cubeMap?o.cloudsFade.data.cubeMap.colorTexture:null)),new P("crossFade",((e,o)=>o.cloudsFade.crossFade.enabled)),new P("readChannelsRG",((e,o)=>o.cloudsFade.readChannels===U.RG)),new P("fadeTextureChannels",((e,o)=>o.cloudsFade.renderingStage===k.FADING_TEXTURE_CHANNELS))),o.constants.add("planetRadius","float",I.radius),o.code.add(p`vec3 intersectWithCloudLayer(vec3 dir, vec3 cameraPosition, vec3 spherePos)
{
float radiusClouds = planetRadius + cloudsHeight;
float B = 2.0 * dot(cameraPosition, dir);
float C = dot(cameraPosition, cameraPosition) - radiusClouds * radiusClouds;
float det = B * B - 4.0 * C;
float pointIntDist = max(0.0, 0.5 *(-B + sqrt(det)));
vec3 intersectionPont = cameraPosition + dir * pointIntDist;
intersectionPont =  intersectionPont - spherePos;
return intersectionPont;
}`),o.code.add(p`vec3 correctForPlanetCurvature(vec3 dir)
{
dir.z = dir.z*(1.-radiusCurvatureCorrectionFactor) + radiusCurvatureCorrectionFactor;
return dir;
}`),o.code.add(p`vec3 rotateDirectionToAnchorPoint(mat4 rotMat, vec3 inVec)
{
return (rotMat * vec4(inVec, 0.0)).xyz;
}`),n(o),d(o),o.code.add(p`const float SUNSET_TRANSITION_FACTOR = 0.3;
const vec3 RIM_COLOR = vec3(0.28, 0.175, 0.035);
const float RIM_SCATTERING_FACTOR = 140.0;
const float BACKLIGHT_FACTOR = 0.2;
const float BACKLIGHT_SCATTERING_FACTOR = 10.0;
const float BACKLIGHT_TRANSITION_FACTOR = 0.3;
vec3 calculateCloudColor(vec3 cameraPosition, vec3 worldSpaceRay, vec4 clouds)
{
float upDotLight = dot(normalize(cameraPosition), normalize(mainLightDirection));
float dirDotLight = max(dot(normalize(-worldSpaceRay), normalize(mainLightDirection)), 0.0);
float sunsetTransition = clamp(pow(max(upDotLight, 0.0), SUNSET_TRANSITION_FACTOR), 0.0, 1.0);
vec3 ambientLight = calculateAmbientIrradiance(normalize(cameraPosition),  0.0);
vec3 mainLight = evaluateMainLighting(normalize(cameraPosition),  0.0);
vec3 combinedLight = clamp((mainLightIntensity + ambientLight )/PI, vec3(0.0), vec3(1.0));
vec3 baseCloudColor = pow(combinedLight * pow(clouds.xyz, vec3(GAMMA)), vec3(INV_GAMMA));
float scatteringMod = max(clouds.a < 0.5 ? clouds.a / 0.5 : - clouds.a / 0.5 + 2.0, 0.0);
float rimLightIntensity = 0.5 + 0.5 *pow(max(upDotLight, 0.0), 0.35);
vec3 directSunScattering = RIM_COLOR * rimLightIntensity * (pow(dirDotLight, RIM_SCATTERING_FACTOR)) * scatteringMod;
float additionalLight = BACKLIGHT_FACTOR * pow(dirDotLight, BACKLIGHT_SCATTERING_FACTOR) * (1. - pow(sunsetTransition, BACKLIGHT_TRANSITION_FACTOR)) ;
return vec3(baseCloudColor * (1. + additionalLight) + directSunScattering);
}`),o.code.add(p`vec4 getCloudData(vec3 rayDir, bool readOtherChannel)
{
vec4 cloudData = texture(cubeMap, rayDir);
float mu = dot(rayDir, vec3(0, 0, 1));
bool readChannels = readChannelsRG ^^ readOtherChannel;
if (readChannels) {
cloudData = vec4(vec3(cloudData.r), cloudData.g);
} else {
cloudData = vec4(vec3(cloudData.b), cloudData.a);
}
if (length(cloudData) == 0.0) {
return vec4(cloudData.rgb, 1.0);
}
return cloudData;
}`),o.code.add(p`vec4 renderCloudsNoFade(vec3 worldRay, vec3 cameraPosition)
{
vec3 intersectionPoint = intersectWithCloudLayer(normalize(worldRay), cameraPosition, anchorPosition);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationMatrixClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = getCloudData(worldRayRotatedCorrected, false);
float totalTransmittance = clamp(cloudData.a * (1.0 - totalFadeInOut) + totalFadeInOut, 0.0 , 1.0);
if (length(cloudData.rgb) == 0.0) {
totalTransmittance = 1.0;
}
return vec4(calculateCloudColor(cameraPosition, normalize(-worldRay), cloudData), totalTransmittance);
}`),o.code.add(p`vec4 renderCloudsCrossFade(vec3 worldRay, vec3 cameraPosition)
{
vec3 intersectionPoint = intersectWithCloudLayer(normalize(worldRay), cameraPosition, anchorPosition);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationMatrixClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = getCloudData(worldRayRotatedCorrected, false);
vec4 cloudColor = vec4(calculateCloudColor(cameraPosition, normalize(-worldRay), cloudData), cloudData.a);
intersectionPoint = intersectWithCloudLayer(normalize(worldRay), cameraPosition, anchorPositionCrossFade);
worldRayRotated = rotateDirectionToAnchorPoint(rotationMatrixCloudsCrossFade, normalize(intersectionPoint));
worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
cloudData = getCloudData(worldRayRotatedCorrected, fadeTextureChannels);
vec4 cloudColorCrossFade = vec4(calculateCloudColor(cameraPosition, normalize(-worldRay), cloudData), cloudData.a);
cloudColor = mix(cloudColor, cloudColorCrossFade, crossFadeAnchorFactor);
float totalTransmittance = clamp(cloudColor.a * (1.0 - totalFadeInOut) + totalFadeInOut, 0.0 , 1.0);
if (length(cloudColor.rgb) == 0.0) {
totalTransmittance = 1.0;
}
return vec4(cloudColor.rgb, totalTransmittance);
}`),o.code.add(p`vec4 renderClouds(vec3 worldRay, vec3 cameraPosition)
{
return crossFade ? renderCloudsCrossFade(worldRay, cameraPosition) : renderCloudsNoFade(worldRay, cameraPosition);
}`)}function ne(e,o){e.include(s,o),e.include(ae),e.include(Y),o.hasCloudsReflections&&e.include(ie,o),o.hasScreenSpaceReflections&&e.include(X,o);const t=e.fragment;t.constants.add("fresnelSky","vec3",[.02,1,15]).add("fresnelMaterial","vec2",[.02,.1]).add("roughness","float",.015).add("foamIntensityExternal","float",1.7).add("ssrIntensity","float",.65).add("ssrHeightFadeStart","float",3e5).add("ssrHeightFadeEnd","float",5e5).add("waterDiffusion","float",.92).add("waterSeaColorMod","float",.8).add("correctionViewingPowerFactor","float",.4).add("skyZenitColor","vec3",[.52,.68,.9]).add("skyColor","vec3",[.67,.79,.9]).add("cloudFresnelModifier","vec2",[1.2,.01]),t.code.add(p`PBRShadingWater shadingInfo;
vec3 getSkyGradientColor(in float cosTheta, in vec3 horizon, in vec3 zenit) {
float exponent = pow((1.0 - cosTheta), fresnelSky[2]);
return mix(zenit, horizon, exponent);
}`),t.uniforms.add(new w("lightingSpecularStrength",((e,o)=>o.lighting.mainLight.specularStrength)),new w("lightingEnvironmentStrength",((e,o)=>o.lighting.mainLight.environmentStrength))),t.code.add(p`vec3 getSeaColor(in vec3 n, in vec3 v, in vec3 l, vec3 color, in vec3 lightIntensity, in vec3 localUp, in float shadow, float foamIntensity, vec3 viewPosition, vec3 position) {
float reflectionHit = 0.0;
float reflectionHitDiffused = 0.0;
vec3 seaWaterColor = linearizeGamma(color);
vec3 h = normalize(l + v);
shadingInfo.NdotL = clamp(dot(n, l), 0.0, 1.0);
shadingInfo.NdotV = clamp(dot(n, v), 0.001, 1.0);
shadingInfo.VdotN = clamp(dot(v, n), 0.001, 1.0);
shadingInfo.NdotH = clamp(dot(n, h), 0.0, 1.0);
shadingInfo.VdotH = clamp(dot(v, h), 0.0, 1.0);
shadingInfo.LdotH = clamp(dot(l, h), 0.0, 1.0);
float upDotV = max(dot(localUp,v), 0.0);
vec3 skyHorizon = linearizeGamma(skyColor);
vec3 skyZenit = linearizeGamma(skyZenitColor);
vec3 skyColor = getSkyGradientColor(upDotV, skyHorizon, skyZenit );
float upDotL = max(dot(localUp,l),0.0);
float daytimeMod = 0.1 + upDotL * 0.9;
skyColor *= daytimeMod;
float shadowModifier = clamp(shadow, 0.8, 1.0);
vec3 fresnelModifier = fresnelReflection(shadingInfo.VdotN, vec3(fresnelSky[0]), fresnelSky[1]);
vec3 reflSky = lightingEnvironmentStrength * fresnelModifier * skyColor * shadowModifier;
vec3 reflSea = seaWaterColor * mix(skyColor, upDotL * lightIntensity * LIGHT_NORMALIZATION, 2.0 / 3.0) * shadowModifier;
vec3 specular = vec3(0.0);
if(upDotV > 0.0 && upDotL > 0.0) {
vec3 specularSun = brdfSpecularWater(shadingInfo, roughness, vec3(fresnelMaterial[0]), fresnelMaterial[1]);
vec3 incidentLight = lightIntensity * LIGHT_NORMALIZATION * shadow;
specular = lightingSpecularStrength * shadingInfo.NdotL * incidentLight * specularSun;
}
vec3 foam = vec3(0.0);
if(upDotV > 0.0) {
foam = foamIntensity2FoamColor(foamIntensityExternal, foamIntensity, skyZenitColor, daytimeMod);
}
float correctionViewingFactor = pow(max(dot(v, localUp), 0.0), correctionViewingPowerFactor);
vec3 normalCorrectedClouds = mix(localUp, n, correctionViewingFactor);
vec3 reflectedWorld = normalize(reflect(-v, normalCorrectedClouds));`),o.hasCloudsReflections&&t.code.add(p`vec4 cloudsColor = renderClouds(reflectedWorld, position);
cloudsColor.a = 1.0 - cloudsColor.a;
cloudsColor = pow(cloudsColor, vec4(GAMMA));
cloudsColor *= clamp(fresnelModifier.y * cloudFresnelModifier[0] - cloudFresnelModifier[1], 0.0, 1.0) * clamp((1.0 - totalFadeInOut), 0.0, 1.0);`),o.hasScreenSpaceReflections?(t.uniforms.add(new y("view",((e,o)=>o.ssr.camera.viewMatrix)),new F("lastFrameColorTexture",((e,o)=>o.ssr.lastFrameColorTexture)),new w("fadeFactorSSR",((e,o)=>o.ssr.fadeFactor))),t.code.add(p`vec3 viewDir = normalize(viewPosition);
vec4 viewNormalVectorCoordinate = view *vec4(n, 0.0);
vec3 viewNormal = normalize(viewNormalVectorCoordinate.xyz);
vec4 viewUp = view * vec4(localUp, 0.0);
vec3 viewNormalCorrectedSSR = mix(viewUp.xyz, viewNormal, correctionViewingFactor);
vec3 reflected = normalize(reflect(viewDir, viewNormalCorrectedSSR));
vec3 hitCoordinate = screenSpaceIntersection(reflected, viewPosition, viewDir, viewUp.xyz);
vec3 reflectedColor = vec3(0.0);
if (hitCoordinate.z > 0.0)
{
vec2 reprojectedCoordinate = reprojectionCoordinate(hitCoordinate);
vec2 dCoords = smoothstep(0.3, 0.6, abs(vec2(0.5, 0.5) - hitCoordinate.xy));
float heightMod = smoothstep(ssrHeightFadeEnd, ssrHeightFadeStart, -viewPosition.z);
reflectionHit = clamp(1.0 - (1.3 * dCoords.y), 0.0, 1.0) * heightMod * fadeFactorSSR;
reflectionHitDiffused = waterDiffusion * reflectionHit;
reflectedColor = linearizeGamma(texture(lastFrameColorTexture, reprojectedCoordinate).xyz) *
reflectionHitDiffused * fresnelModifier.y * ssrIntensity;
}
float seaColorMod =  mix(waterSeaColorMod, waterSeaColorMod * 0.5, reflectionHitDiffused);
vec3 waterRenderedColor = tonemapACES((1.0 - reflectionHitDiffused) * reflSky + reflectedColor +
reflSea * seaColorMod + specular + foam);`)):t.code.add(p`vec3 waterRenderedColor = tonemapACES(reflSky + reflSea * waterSeaColorMod + specular + foam);`),o.hasCloudsReflections?o.hasScreenSpaceReflections?t.code.add(p`return waterRenderedColor * (1.0 - (1.0 - reflectionHit) * cloudsColor.a) + (1.0 - reflectionHit) * cloudsColor.xyz;
}`):t.code.add(p`return waterRenderedColor * (1.0 - cloudsColor.a) + cloudsColor.xyz;
}`):t.code.add(p`return waterRenderedColor;
}`)}const de=Object.freeze(Object.defineProperty({__proto__:null,build:function(s){const h=new R,{vertex:g,fragment:C}=h;O(g,s),h.include(a,s),h.attributes.add(G.POSITION,"vec3"),h.attributes.add(G.UV0,"vec2");const y=new A("waterColor",(e=>e.color));if(s.output===o.Color&&s.isDraped)return h.varyings.add("vpos","vec3"),g.uniforms.add(y),g.code.add(p`
        void main(void) {
          if (waterColor.a < ${p.float(z)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vpos = position;
          gl_Position = transformPosition(proj, view, vpos);
        }
    `),C.uniforms.add(y),C.code.add(p`void main() {
fragColor = waterColor;
}`),h;switch(s.output!==o.Color&&s.output!==o.Alpha||(h.include(f,s),h.include(e,s),h.varyings.add("vuv","vec2"),h.varyings.add("vpos","vec3"),h.varyings.add("vnormal","vec3"),h.varyings.add("vtbnMatrix","mat3"),s.hasMultipassTerrain&&h.varyings.add("depth","float"),g.uniforms.add(y),g.code.add(p`
      void main(void) {
        if (waterColor.a < ${p.float(z)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vuv = uv0;
        vpos = position;

        vnormal = getLocalUp(vpos, localOrigin);
        vtbnMatrix = getTBNMatrix(vnormal);

        ${s.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}

        gl_Position = transformPosition(proj, view, vpos);
        ${s.output===o.Color?"forwardLinearDepth();":""}
      }
    `)),h.include(v,s),s.output){case o.Alpha:h.include(t,s),C.uniforms.add(y),C.code.add(p`
        void main() {
          discardBySlice(vpos);
          ${s.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}

          fragColor = vec4(waterColor.a);
        }
      `);break;case o.Color:h.include(c),h.include(l,{pbrMode:m.Disabled,lightingSphericalHarmonicsOrder:2}),h.include(ee),h.include(t,s),h.include(u,s),h.include(ne,s),C.uniforms.add(y,new w("timeElapsed",(e=>e.timeElapsed)),g.uniforms.get("view"),g.uniforms.get("localOrigin")),b(C,s),C.include(H),n(C),d(C),C.code.add(p`
      void main() {
        discardBySlice(vpos);
        ${s.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        vec3 localUp = vnormal;
        // the created normal is in tangent space
        vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);

        // we rotate the normal according to the tangent-bitangent-normal-Matrix
        vec3 n = normalize(vtbnMatrix * tangentNormalFoam.xyz);
        vec3 v = -normalize(vpos - cameraPosition);
        float shadow = ${s.receiveShadows?p`1.0 - readShadowMap(vpos, linearDepth)`:"1.0"};
        vec4 vPosView = view * vec4(vpos, 1.0);
        vec4 final = vec4(getSeaColor(n, v, mainLightDirection, waterColor.rgb, mainLightIntensity, localUp, shadow, tangentNormalFoam.w, vPosView.xyz, vpos + localOrigin), waterColor.w);

        // gamma correction
        fragColor = delinearizeGamma(final);
        fragColor = highlightSlice(fragColor, vpos);
        ${s.transparencyPassType===L.Color?"fragColor = premultiplyAlpha(fragColor);":""}
      }
    `);break;case o.Normal:h.include(f,s),h.include(ee,s),h.include(t,s),h.varyings.add("vpos","vec3"),h.varyings.add("vuv","vec2"),g.uniforms.add(y),g.code.add(p`
        void main(void) {
          if (waterColor.a < ${p.float(z)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vuv = uv0;
          vpos = position;

          gl_Position = transformPosition(proj, view, vpos);
        }
    `),C.uniforms.add(new w("timeElapsed",(e=>e.timeElapsed))),C.code.add(p`void main() {
discardBySlice(vpos);
vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);
tangentNormalFoam.xyz = normalize(tangentNormalFoam.xyz);
fragColor = vec4((tangentNormalFoam.xyz + vec3(1.0)) * 0.5, tangentNormalFoam.w);
}`);break;case o.Highlight:h.include(i,s),h.varyings.add("vpos","vec3"),g.uniforms.add(y),g.code.add(p`
      void main(void) {
        if (waterColor.a < ${p.float(z)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);
      }
    `),h.include(t,s),C.code.add(p`void main() {
discardBySlice(vpos);
outputHighlight();
}`);break;case o.ObjectAndLayerIdColor:h.include(r,s),h.varyings.add("vpos","vec3"),g.uniforms.add(y),g.code.add(p`
      void main(void) {
        if (waterColor.a < ${p.float(z)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);
        forwardObjectAndLayerIdColor();
      }
    `),h.include(t,s),C.code.add(p`void main() {
discardBySlice(vpos);
outputObjectAndLayerIdColor();
}`)}return h}},Symbol.toStringTag,{value:"Module"}));export{Q as C,V as F,ae as G,q as S,de as W,ie as a,U as b,k as c,B as d,$ as e,W as f,ne as g,Z as i};
