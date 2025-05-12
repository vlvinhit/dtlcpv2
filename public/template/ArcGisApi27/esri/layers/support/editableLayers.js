// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","./infoFor3D","./layerUtils"],function(c,d,e){c.isEditableLayer=function(a){var b;if((b=a&&"object"===typeof a&&"loaded"in a&&a.loaded&&e.getEffectiveLayerCapabilities(a)?.operations?.supportsEditing&&"type"in a&&(!("editingEnabled"in a)||e.getEffectiveEditingEnabled(a)))&&!(b="scene"!==a.type))if(a=a.infoFor3D){var {supportedFormats:f,queryFormats:g}=a;a=d.getMimeTypeFormatId("model/gltf-binary",f)??d.getFilenameFormatId("glb",f);b=null!=a&&g.includes(a)}else b=!0;return!!b};Object.defineProperty(c,
Symbol.toStringTag,{value:"Module"})});