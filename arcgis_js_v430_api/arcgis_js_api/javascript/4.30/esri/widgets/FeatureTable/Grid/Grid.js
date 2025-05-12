// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../chunks/_rollupPluginBabelHelpers ../../../core/arrayUtils ../../../core/events ../../../core/maybe ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/accessorSupport/decorators/subclass ../../Widget ./GridViewModel ../../support/globalCss ../../support/widgetUtils ../../support/decorators/messageBundle ../../support/jsxFactory".split(" "),function(u,D,Kb,gb,Lb,ha,w,kg,lg,ud,vd,
wd,xd,mg,yd,W){function X(b){const a=customElements.get(b.is);if(a){const c=a.version;c&&b.version&&c===b.version?console.warn(`The component ${b.is} has been loaded twice`):console.error(`Tried to define ${b.is} version ${b.version} when version ${a.version} is already in use. Something will probably break.`)}else Object.defineProperty(b,"version",{get(){return"24.3.13"}}),customElements.define(b.is,b)}function Mb(b,a){if(!Array.isArray(b)||!b.hasOwnProperty("raw"))throw Error("invalid template strings array");
return void 0!==Nb?Nb.createHTML(a):a}function ia(b,a,c=b,d){if(a===ja)return a;let e=void 0!==d?c._$Co?.[d]:c._$Cl;const f=va(a)?void 0:a._$litDirective$;return e?.constructor!==f&&(e?._$AO?.(!1),void 0===f?e=void 0:(e=new f(b),e._$AT(b,c,d)),void 0!==d?(c._$Co??(c._$Co=[]))[d]=e:c._$Cl=e),void 0!==e&&(a=ia(b,e._$AS(b,a.values),e,d)),a}function Ob(b){return b&&Object.prototype.hasOwnProperty.call(b,"__themes")}function zd(b=[]){return[b].flat(Infinity).filter(a=>{if(a instanceof hb)return!0;console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`.");
return!1})}function O(b,a,c={}){b&&Ob(customElements.get(b))&&console.warn(`The custom element definition for "${b}"\n      was finalized before a style module was registered.\n      Make sure to add component specific style modules before\n      importing the corresponding custom element.`);a=zd(a);window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(b,a,c):Pb.push({themeFor:b,styles:a,include:c.include,moduleId:c.moduleId})}function ib(){return window.Vaadin&&window.Vaadin.styleModules?
window.Vaadin.styleModules.getAllThemes():Pb}function Ad(b,a){return(b||"").split(" ").some(c=>(new RegExp(`^${c.split("*").join(".*")}$`,"u")).test(a))}function Bd(b=""){let a=0;b.startsWith("lumo-")||b.startsWith("material-")?a=1:b.startsWith("vaadin-")&&(a=2);return a}function Qb(b){const a=[];b.include&&[].concat(b.include).forEach(c=>{const d=ib().find(e=>e.moduleId===c);d?a.push(...Qb(d),...d.styles):console.warn(`Included moduleId ${c} not found in style registry`)},b.styles);return a}function Cd(b,
a){const c=document.createElement("style");c.innerHTML=b.map(d=>d.cssText).join("\n");a.content.appendChild(c)}function Dd(b){const a=`${b}-default-theme`,c=ib().filter(d=>d.moduleId!==a&&Ad(d.themeFor,b)).map(d=>({...d,styles:[...Qb(d),...d.styles],includePriority:Bd(d.moduleId)})).sort((d,e)=>e.includePriority-d.includePriority);return 0<c.length?c:ib().filter(d=>d.moduleId===a)}function wa(b,a){if(b&&Ed.test(b)||"//"===b)return b;if(void 0===La){La=!1;try{const c=new URL("b","http://a");c.pathname=
"c%20d";La="http://a/c%20d"===c.href}catch(c){}}a||=document.baseURI||window.location.href;if(La)try{return(new URL(b,a)).href}catch(c){return b}J||(J=document.implementation.createHTMLDocument("temp"),J.base=J.createElement("base"),J.head.appendChild(J.base),J.anchor=J.createElement("a"),J.body.appendChild(J.anchor));J.base.href=a;J.anchor.href=b;return J.anchor.href||b}function jb(b,a){return b.replace(Fd,function(c,d,e,f){return d+"'"+wa(e.replace(/["']/g,""),a)+"'"+f})}function kb(b){return b.substring(0,
b.lastIndexOf("/")+1)}function Rb(b){b=jb((b.body?b.body:b).textContent,b.baseURI);const a=document.createElement("style");a.textContent=b;return a}function Gd(b){b=b.trim().split(/\s+/);const a=[];for(let g=0;g<b.length;g++){var c=a,d=c.push,e;var f=b[g];if(e=ka.import(f)){if(void 0===e._styles){f=[];f.push(...Sb(e));const h=e.querySelector("template");h&&f.push(...Tb(h,e.assetpath));e._styles=f}e=e._styles}else console.warn("Could not find style data in module named",f),e=[];d.call(c,...e)}return a}
function Tb(b,a){if(!b._styles){const c=[],d=b.content.querySelectorAll("style");for(let e=0;e<d.length;e++){let f=d[e],g=f.getAttribute("include");g&&c.push(...Gd(g).filter(function(h,k,l){return l.indexOf(h)===k}));a&&(f.textContent=jb(f.textContent,a));c.push(f)}b._styles=c}return b._styles}function Hd(b){return(b=ka.import(b))?Sb(b):[]}function Sb(b){const a=[];b=b.querySelectorAll("link[rel\x3dimport][type~\x3dcss]");for(let d=0;d<b.length;d++){var c=b[d];if(c.import){const e=c.import;if((c=
c.hasAttribute("shady-unscoped"))&&!e._unscopedStyle){const f=Rb(e);f.setAttribute("shady-unscoped","");e._unscopedStyle=f}else e._style||(e._style=Rb(e));a.push(c?e._unscopedStyle:e._style)}}return a}function Y(b){let a=b.indexOf(".");return-1===a?b:b.slice(0,a)}function xa(b){if(Array.isArray(b)){let a=[];for(let c=0;c<b.length;c++){let d=b[c].toString().split(".");for(let e=0;e<d.length;e++)a.push(d[e])}return a.join(".")}return b}function Ub(b){return Array.isArray(b)?xa(b).split("."):b.toString().split(".")}
function G(b,a,c){a=Ub(a);for(let d=0;d<a.length;d++){if(!b)return;b=b[a[d]]}c&&(c.path=a.join("."));return b}function Vb(b,a,c){let d=Ub(a),e=d[d.length-1];if(1<d.length){for(a=0;a<d.length-1;a++)if(b=b[d[a]],!b)return;b[e]=c}else b[a]=c;return d.join(".")}function Wb(b){return Ma[b]||(Ma[b]=0>b.indexOf("-")?b:b.replace(Id,a=>a[1].toUpperCase()))}function Na(b){return Ma[b]||(Ma[b]=b.replace(Jd,"-$1").toLowerCase())}function Xb(b,a){let c=a.parentInfo&&Xb(b,a.parentInfo);if(c)for(let d=c.firstChild,
e=0;d;d=d.nextSibling){if(a.parentIndex===e++)return d}else return b}function Kd(b,a,c){b=b._methodHost||b;return function(d){if(b[c])b[c](d,d.detail);else console.warn("listener method `"+c+"` not defined")}}function lb(b,a,c){let d=b[a];if(!d)d=b[a]={};else if(!b.hasOwnProperty(a)&&(d=b[a]=Object.create(b[a]),c))for(let e in d)for(b=d[e],a=d[e]=Array(b.length),c=0;c<b.length;c++)a[c]=b[c];return d}function ya(b,a,c,d,e,f){if(a){let h=!1;const k=za++;for(let l in c){var g=e?Y(l):l;if(g=a[g])for(let m=
0,n=g.length,p;m<n&&(p=g[m]);m++)p.info&&p.info.lastRun===k||e&&!mb(l,p.trigger)||(p.info&&(p.info.lastRun=k),p.fn(b,l,c,d,p.info,e,f),h=!0)}return h}return!1}function mb(b,a){if(a){let c=a.name;return c==b||!(!a.structured||0!==c.indexOf(b+"."))||!(!a.wildcard||0!==b.indexOf(c+"."))}return!0}function Yb(b,a,c,d,e){a="string"===typeof e.method?b[e.method]:e.method;c=e.property;a?a.call(b,b.__data[c],d[c]):e.dynamicFn||console.warn("observer method `"+e.method+"` not defined")}function Zb(b,a,c,d){c=
{value:c,queueProperty:!0};d&&(c.path=d);Z(b).dispatchEvent(new CustomEvent(a,{detail:c}))}function Ld(b,a,c,d,e,f){f=(d=(f?Y(a):a)!=a?a:null)?G(b,d):b.__data[a];d&&void 0===f&&(f=c[a]);Zb(b,e.eventName,f,d)}function Md(b,a,c,d,e){c=b.__data[a];Oa&&(c=Oa(c,e.attrName,"attribute",b));b._propertyToAttribute(a,e.attrName,c)}function Nd(b){let a=b.constructor.__orderedComputedDeps;if(!a){a=new Map;const d=b[r.COMPUTE];let {counts:e,ready:f,total:g}=Od(b);for(var c;c=f.shift();)a.set(c,a.size),(c=d[c])&&
c.forEach(h=>{h=h.info.methodInfo;--g;0===--e[h]&&f.push(h)});0!==g&&console.warn(`Computed graph for ${b.localName} incomplete; circular?`);b.constructor.__orderedComputedDeps=a}return a}function Od(b){const a=b.__computeInfo,c={};b=b[r.COMPUTE];const d=[];let e=0;for(let f in a){const g=a[f];e+=c[f]=g.args.filter(h=>!h.literal).length+(g.dynamicFn?1:0)}for(let f in b)a[f]||d.push(f);return{counts:c,ready:d,total:e}}function $b(b,a,c,d,e){a=nb(b,a,c,d,e);if(a===Aa)return!1;e=e.methodInfo;if(b.__dataHasAccessor&&
b.__dataHasAccessor[e])return b._setPendingProperty(e,a,!0);b[e]=a;return!1}function ob(b,a,c,d,e,f,g){c.bindings=c.bindings||[];d={kind:d,target:e,parts:f,literal:g,isCompound:1!==f.length};c.bindings.push(d);if(d.target&&"attribute"!=d.kind&&"text"!=d.kind&&!d.isCompound&&"{"===d.parts[0].mode){let {event:n,negate:p}=d.parts[0];d.listenerEvent=n||Na(e)+"-changed";d.listenerNegate=p}c=a.nodeInfoList.length;for(g=0;g<d.parts.length;g++){var h=d.parts[g];h.compoundIndex=g;e=b;f=a;var k=d,l=h,m=c;if(!l.literal)if("attribute"===
k.kind&&"-"===k.target[0])console.warn("Cannot set attribute "+k.target+' because "-" is not a valid attribute starting character');else for(h=l.dependencies,k={index:m,binding:k,part:l,evaluator:e},l=0;l<h.length;l++)m=h[l],"string"==typeof m&&(m=ac(m),m.wildcard=!0),e._addTemplatePropertyEffect(f,m.rootProperty,{fn:Pd,info:k,trigger:m})}}function Pd(b,a,c,d,e,f,g){g=g[e.index];var h=e.binding;let k=e.part;f&&k.source&&a.length>k.source.length&&"property"==h.kind&&!h.isCompound&&g.__isPropertyEffectsClient&&
g.__dataHasAccessor&&g.__dataHasAccessor[h.target]?(c=c[a],a=h.target+a.slice(k.source.length),g._setPendingPropertyOrPath(a,c,!1,!0)&&b._enqueueClient(g)):(a=e.evaluator._evaluateBinding(b,k,a,c,d,f),a!==Aa&&(h.isCompound&&(c=g.__dataCompoundStorage[h.target],c[k.compoundIndex]=a,a=c.join("")),"attribute"===h.kind||"textContent"!==h.target&&("value"!==h.target||"input"!==g.localName&&"textarea"!==g.localName)||(a=void 0==a?"":a),Oa&&(a=Oa(a,h.target,h.kind,g)),"attribute"==h.kind?b._valueToNodeAttribute(g,
a,h.target):(h=h.target,g.__isPropertyEffectsClient&&g.__dataHasAccessor&&g.__dataHasAccessor[h]?g[r.READ_ONLY]&&g[r.READ_ONLY][h]||g._setPendingProperty(h,a)&&b._enqueueClient(g):b._setUnmanagedPropertyToNode(g,h,a))))}function Qd(b,a,c){if(c.listenerEvent){let d=c.parts[0];b.addEventListener(c.listenerEvent,function(e){var f=c.target,g=d.source,h=d.negate;let k=e.detail,l=k&&k.path;l?(g+=l.slice(f.length),e=k&&k.value):e=e.currentTarget[f];a[r.READ_ONLY]&&a[r.READ_ONLY][g]||!a._setPendingPropertyOrPath(g,
h?!e:e,!0,!!l)||k&&k.queueProperty||a._invalidateProperties()})}}function bc(b,a,c,d,e,f){f=a.static||f&&("object"!==typeof f||f[a.methodName]);e={methodName:a.methodName,args:a.args,methodInfo:e,dynamicFn:f};for(let g=0,h;g<a.args.length&&(h=a.args[g]);g++)h.literal||b._addPropertyEffect(h.rootProperty,c,{fn:d,info:e,trigger:h});f&&b._addPropertyEffect(a.methodName,c,{fn:d,info:e});return e}function nb(b,a,c,d,e){d=b._methodHost||b;let f=d[e.methodName];if(f)return b=b._marshalArgs(e.args,a,c),b===
Aa?Aa:f.apply(d,b);e.dynamicFn||console.warn("method `"+e.methodName+"` not defined")}function cc(b){let a="";for(let c=0;c<b.length;c++)a+=b[c].literal||"";return a}function pb(b){var a=b.match(/([^\s]+?)\(([\s\S]*)\)/);return a?(b={methodName:a[1],static:!0,args:Rd},a[2].trim()?(a=a[2].replace(/\\,/g,"\x26comma;").split(","),Sd(a,b)):b):null}function Sd(b,a){a.args=b.map(function(c){c=ac(c);c.literal||(a.static=!1);return c},this);return a}function ac(b){b=b.trim().replace(/&comma;/g,",").replace(/\\(.)/g,
"$1");let a={name:b,value:"",literal:!1},c=b[0];"-"===c&&(c=b[1]);"0"<=c&&"9">=c&&(c="#");switch(c){case "'":case '"':a.value=b.slice(1,-1);a.literal=!0;break;case "#":a.value=Number(b),a.literal=!0}a.literal||(a.rootProperty=Y(b),a.structured=0<=b.indexOf("."),a.structured&&(a.wildcard=".*"==b.slice(-2),a.wildcard&&(a.name=b.slice(0,-2))));return a}function dc(b,a,c){b=G(b,c);void 0===b&&(b=a[c]);return b}function ec(b,a,c,d){d={indexSplices:d};qb&&!b._overrideLegacyUndefined&&(a.splices=d);b.notifyPath(c+
".splices",d);b.notifyPath(c+".length",a.length);qb&&!b._overrideLegacyUndefined&&(d.indexSplices=[])}function Ba(b,a,c,d,e,f){ec(b,a,c,[{index:d,addedCount:e,removed:f,object:a,type:"splice"}])}function Td(b){return b[0].toUpperCase()+b.substring(1)}function Ud(){rb=!1;const b=la.length;for(let a=0;a<b;a++){const c=la[a];if(c)try{c()}catch(d){setTimeout(()=>{throw d;})}}la.splice(0,b);fc+=b}function Vd(){const b=!!ma.size;ma.forEach(a=>{try{a.flush()}catch(c){setTimeout(()=>{throw c;})}});return b}
function sb(b,a,c=b.getAttribute("dir")){a?b.setAttribute("dir",a):null!=c&&b.removeAttribute("dir")}function tb(b,a){return b.split(".").reduce((c,d)=>c?c[d]:void 0,a)}function gc(b){window.Vaadin&&window.Vaadin.templateRendererCallback?window.Vaadin.templateRendererCallback(b):b.querySelector("template")&&console.warn(`WARNING: <template> inside <${b.localName}> is no longer supported. Import @vaadin/polymer-legacy-adapter/template-renderer.js to enable compatibility.`)}function hc(b,a){return a?
a.closest(b)||hc(b,a.getRootNode().host):null}function ic(b){return b?new Set(b.split(" ")):new Set}function jc(b,a,c){const d=ic(b.getAttribute(a));d.add(c);b.setAttribute(a,d?[...d].join(" "):"")}function kc(b,a,c){const d=ic(b.getAttribute(a));d.delete(c);0===d.size?b.removeAttribute(a):b.setAttribute(a,d?[...d].join(" "):"")}function na(b){return b.__cells||Array.from(b.querySelectorAll('[part~\x3d"cell"]:not([part~\x3d"details-cell"])'))}function H(b,a){[...b.children].forEach(a)}function oa(b,
a){na(b).forEach(a);b.__detailsCell&&a(b.__detailsCell)}function lc(b,a,c){let d=1;b.forEach(e=>{0===d%10&&(d+=1);e._order=c+d*a;d+=1})}function Pa(b,a,c){switch(typeof c){case "boolean":b.toggleAttribute(a,c);break;case "string":b.setAttribute(a,c);break;default:b.removeAttribute(a)}}function P(b,a,c){a||""===a?jc(b,"part",c):kc(b,"part",c)}function Q(b,a,c){b.forEach(d=>{P(d,c,a)})}function Ca(b,a){const c=na(b);Object.entries(a).forEach(([d,e])=>{Pa(b,d,e);d=`${d}-row`;P(b,e,d);Q(c,`${d}-cell`,
e)})}function mc(b,a){const c=na(b);Object.entries(a).forEach(([d,e])=>{var f=b.getAttribute(d);Pa(b,d,e);f&&(f=`${d}-${f}-row`,P(b,!1,f),Q(c,`${f}-cell`,!1));e&&(d=`${d}-${e}-row`,P(b,e,d),Q(c,`${d}-cell`,e))})}function aa(b,a,c,d,e){Pa(b,a,c);e&&P(b,!1,e);P(b,c,d||`${a}-cell`)}function Wd(){return nc(function(){return!0})}function Xd(){return Qa&&0<Object.keys(Qa).map(b=>Qa[b]).filter(b=>b.productionMode).length?!0:!1}function nc(b,a){if("function"===typeof b){var c=Yd.exec(b.toString());if(c)try{b=
new Function(c[1])}catch(d){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",d)}return b(a)}}function Zd(){}function Ra(b){if(null===b.offsetParent&&0===b.clientWidth&&0===b.clientHeight)return!0;{const a=b.style;"hidden"===a.visibility||"none"===a.display?b=!0:(b=window.getComputedStyle(b),b="hidden"===b.visibility||"none"===b.display?!0:!1)}return b}function pa(b,a){return b.split(".").reduce((c,d)=>c[d],a)}function oc(b,a,c){if(0===c.length)return!1;let d=!0;b.forEach(({path:e})=>
{if(e&&-1!==e.indexOf(".")){var f=e.replace(/\.[^.]*$/u,"");void 0===pa(f,c[0])&&(console.warn(`Path "${e}" used for ${a} does not exist in all of the items, ${a} is disabled.`),d=!1)}});return d}function Sa(b){return 0<=[void 0,null].indexOf(b)?"":isNaN(b)?b.toString():b}function pc(b,a){b=Sa(b);a=Sa(a);return b<a?-1:b>a?1:0}function $d(b,a){return b.sort((c,d)=>a.map(e=>"asc"===e.direction?pc(pa(e.path,c),pa(e.path,d)):"desc"===e.direction?pc(pa(e.path,d),pa(e.path,c)):0).reduce((e,f)=>0!==e?e:
f,0))}function ae(b,a){return b.filter(c=>a.every(d=>{const e=Sa(pa(d.path,c));d=Sa(d.value).toString().toLowerCase();return e.toString().toLowerCase().includes(d)}))}function ba(b){var a=b.type;return-1<ub.indexOf(a)?"mousemove"===a?(a=void 0===b.buttons?1:b.buttons,b instanceof window.MouseEvent&&!be&&(a=ce[b.which]||0),!!(a&1)):0===(void 0===b.button?0:b.button):!1}function de(b){if("click"===b.type){if(0===b.detail)return!0;var a=R(b);if(!a.nodeType||a.nodeType!==Node.ELEMENT_NODE)return!0;a=
a.getBoundingClientRect();const c=b.pageX;b=b.pageY;return!(c>=a.left&&c<=a.right&&b>=a.top&&b<=a.bottom)}return!1}function qc(b,a,c){b.movefn=a;b.upfn=c;document.addEventListener("mousemove",a);document.addEventListener("mouseup",c)}function qa(b){document.removeEventListener("mousemove",b.movefn);document.removeEventListener("mouseup",b.upfn);b.movefn=null;b.upfn=null}function R(b){const a=rc(b);return 0<a.length?a[0]:b.target}function ee(b){const a=b.type;var c=b.currentTarget.__polymerGestures;
if(c&&(c=c[a])){if(!b.__polymerGesturesHandled&&(b.__polymerGesturesHandled={},a.startsWith("touch"))){var d=b.changedTouches[0];"touchstart"===a&&1===b.touches.length&&(L.touch.id=d.identifier);if(L.touch.id!==d.identifier)return;if(!sc&&("touchstart"===a||"touchmove"===a)){d=b.changedTouches[0];var e=b.type;if("touchstart"===e)L.touch.x=d.clientX,L.touch.y=d.clientY,L.touch.scrollDecided=!1;else if("touchmove"===e&&!L.touch.scrollDecided){L.touch.scrollDecided=!0;e="auto";var f=rc(b);for(let h=
0,k;h<f.length;h++)if(k=f[h],k.__polymerGesturesTouchAction){e=k.__polymerGesturesTouchAction;break}f=!1;var g=Math.abs(L.touch.x-d.clientX);d=Math.abs(L.touch.y-d.clientY);b.cancelable&&("none"===e?f=!0:"pan-x"===e?f=d>g:"pan-y"===e&&(f=g>d));f?b.preventDefault():Ta("track")}}}d=b.__polymerGesturesHandled;if(!d.skip){for(let h=0,k;h<ca.length;h++)k=ca[h],c[k.name]&&!d[k.name]&&k.flow&&-1<k.flow.start.indexOf(b.type)&&k.reset&&k.reset();for(let h=0,k;h<ca.length;h++)k=ca[h],c[k.name]&&!d[k.name]&&
(d[k.name]=!0,k[a](b))}}}function Da(b,a,c){if(vb[a]){const g=vb[a],h=g.deps,k=g.name;let l=b.__polymerGestures;l||(b.__polymerGestures=l={});for(let m=0,n,p;m<h.length;m++)if(n=h[m],!(fe&&-1<ub.indexOf(n))||"click"===n){(p=l[n])||(l[n]=p={_count:0});if(0===p._count){var d=b,e=d.addEventListener,f=n;ub.indexOf(n);e.call(d,f,ee,void 0)}p[k]=(p[k]||0)+1;p._count=(p._count||0)+1}b.addEventListener(a,c);g.touchAction&&ge(b,g.touchAction);return!0}return!1}function wb(b){ca.push(b);b.emits.forEach(a=>
{vb[a]=b})}function ge(b,a){sc&&b instanceof HTMLElement&&M.run(()=>{b.style.touchAction=a});b.__polymerGesturesTouchAction=a}function xb(b,a,c){a=new Event(a,{bubbles:!0,cancelable:!0,composed:!0});a.detail=c;b.dispatchEvent(a);a.defaultPrevented&&(b=c.preventer||c.sourceEvent)&&b.preventDefault&&b.preventDefault()}function Ta(b){a:{for(let a=0,c;a<ca.length;a++){c=ca[a];for(let d=0,e;d<c.emits.length;d++)if(e=c.emits[d],e===b){b=c;break a}}b=null}b.info&&(b.info.prevent=!0)}function Ea(b,a,c,d){a&&
xb(a,b,{x:c.clientX,y:c.clientY,sourceEvent:c,preventer:d,prevent(e){return Ta(e)}})}function tc(b,a,c){if(b.prevent)return!1;if(b.started)return!0;c=Math.abs(b.y-c);return 5<=Math.abs(b.x-a)||5<=c}function yb(b,a,c){if(a){var d=b.moves[b.moves.length-2],e=b.moves[b.moves.length-1],f=e.x-b.x,g=e.y-b.y,h=0;if(d){var k=e.x-d.x;h=e.y-d.y}xb(a,"track",{state:b.state,x:c.clientX,y:c.clientY,dx:f,dy:g,ddx:k,ddy:h,sourceEvent:c,hover(){var l=c.clientX,m=c.clientY;let n=document.elementFromPoint(l,m),p=n;
for(;p&&p.shadowRoot&&!window.ShadyDOM;){const q=p;p=p.shadowRoot.elementFromPoint(l,m);if(q===p)break;p&&(n=p)}return n}})}}function uc(b,a,c){const d=Math.abs(a.clientX-b.x),e=Math.abs(a.clientY-b.y),f=R(c||a);!f||he[f.localName]&&f.hasAttribute("disabled")||!(isNaN(d)||isNaN(e)||25>=d&&25>=e||de(a))||b.prevent||xb(f,"tap",{x:a.clientX,y:a.clientY,sourceEvent:a,preventer:c})}function Ua(b,a,c=0){for(const d of b.subCaches){const e=d.parentCacheIndex;if(a<=e)break;else if(a<=e+d.flatSize)return Ua(d,
a-e-1,c+1);a-=d.flatSize}return{cache:b,item:b.items[a],index:a,page:Math.floor(a/b.pageSize),level:c}}function vc({getItemId:b},a,c,d=0,e=0){for(var f=0;f<a.items.length;f++){const g=a.items[f];if(g&&b(g)===b(c))return{cache:a,level:d,item:g,index:f,page:Math.floor(f/a.pageSize),subCache:a.getSubCache(f),flatIndex:e+a.getFlatIndex(f)}}for(const g of a.subCaches)if(f=e+a.getFlatIndex(g.parentCacheIndex),f=vc({getItemId:b},g,c,d+1,f+1))return f}function wc(b,[a,...c],d=0){Infinity===a&&(a=b.size-1);
const e=b.getFlatIndex(a);return(b=b.getSubCache(a))&&0<b.flatSize&&c.length?wc(b,c,d+e+1):d+e}function xc(b,a){if(!b||!a||b.length!==a.length)return!1;for(let c=0,d=b.length;c<d;c++)if(b[c]instanceof Array&&a[c]instanceof Array){if(!xc(b[c],a[c]))return!1}else if(b[c]!==a[c])return!1;return!0}function yc(b,a){const {scrollLeft:c}=b;return"rtl"!==a?c:b.scrollWidth-b.clientWidth+c}class ie extends HTMLElement{static get is(){return"vaadin-lumo-styles"}}X(ie);const Va=globalThis,zb=Va.ShadowRoot&&(void 0===
Va.ShadyCSS||Va.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ab=Symbol(),zc=new WeakMap;let hb=class{constructor(b,a,c){if(this._$cssResult$=!0,c!==Ab)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=b;this.t=a}get styleSheet(){let b=this.o;const a=this.t;if(zb&&void 0===b){const c=void 0!==a&&1===a.length;c&&(b=zc.get(a));void 0===b&&((this.o=b=new CSSStyleSheet).replaceSync(this.cssText),c&&zc.set(a,
b))}return b}toString(){return this.cssText}};const E=(b,...a)=>{a=1===b.length?b[0]:a.reduce((c,d,e)=>{if(!0===d._$cssResult$)d=d.cssText;else if("number"!=typeof d)throw Error("Value passed to 'css' function must be a 'css' function result: "+d+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");return c+d+b[e+1]},b[0]);return new hb(a,b,Ab)},je=(b,a)=>{if(zb)b.adoptedStyleSheets=a.map(c=>c instanceof CSSStyleSheet?c:c.styleSheet);else for(const c of a){a=document.createElement("style");
const d=Va.litNonce;void 0!==d&&a.setAttribute("nonce",d);a.textContent=c.cssText;b.appendChild(a)}},Ac=zb?b=>b:b=>{if(b instanceof CSSStyleSheet){let a="";for(const c of b.cssRules)a+=c.cssText;b=new hb("string"==typeof a?a:a+"",void 0,Ab)}return b},{is:ke,defineProperty:le,getOwnPropertyDescriptor:me,getOwnPropertyNames:ne,getOwnPropertySymbols:oe,getPrototypeOf:pe}=Object,ra=globalThis,Bc=ra.trustedTypes,qe=Bc?Bc.emptyScript:"",re=ra.reactiveElementPolyfillSupport,Bb={toAttribute(b,a){switch(a){case Boolean:b=
b?qe:null;break;case Object:case Array:b=null==b?b:JSON.stringify(b)}return b},fromAttribute(b,a){let c=b;switch(a){case Boolean:c=null!==b;break;case Number:c=null===b?null:Number(b);break;case Object:case Array:try{c=JSON.parse(b)}catch(d){c=null}}return c}},Cc=(b,a)=>!ke(b,a),Dc={attribute:!0,type:String,converter:Bb,reflect:!1,hasChanged:Cc};let Ec;(Ec=Symbol).metadata??(Ec.metadata=Symbol("metadata"));ra.litPropertyMetadata??(ra.litPropertyMetadata=new WeakMap);class sa extends HTMLElement{static addInitializer(b){this._$Ei();
(this.l??(this.l=[])).push(b)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(b,a=Dc){if(a.state&&(a.attribute=!1),this._$Ei(),this.elementProperties.set(b,a),!a.noAccessor){const c=Symbol();a=this.getPropertyDescriptor(b,c,a);void 0!==a&&le(this.prototype,b,a)}}static getPropertyDescriptor(b,a,c){const {get:d,set:e}=me(this.prototype,b)??{get(){return this[a]},set(f){this[a]=f}};return{get(){return d?.call(this)},set(f){const g=d?.call(this);
e.call(this,f);this.requestUpdate(b,g,c)},configurable:!0,enumerable:!0}}static getPropertyOptions(b){return this.elementProperties.get(b)??Dc}static _$Ei(){if(!this.hasOwnProperty("elementProperties")){var b=pe(this);b.finalize();void 0!==b.l&&(this.l=[...b.l]);this.elementProperties=new Map(b.elementProperties)}}static finalize(){if(!this.hasOwnProperty("finalized")){if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){var b=this.properties;const a=[...ne(b),...oe(b)];for(const c of a)this.createProperty(c,
b[c])}b=this[Symbol.metadata];if(null!==b&&(b=litPropertyMetadata.get(b),void 0!==b))for(const [a,c]of b)this.elementProperties.set(a,c);this._$Eh=new Map;for(const [a,c]of this.elementProperties)b=this._$Eu(a,c),void 0!==b&&this._$Eh.set(b,a);this.elementStyles=this.finalizeStyles(this.styles)}}static finalizeStyles(b){const a=[];if(Array.isArray(b)){b=new Set(b.flat(1/0).reverse());for(const c of b)a.unshift(Ac(c))}else void 0!==b&&a.push(Ac(b));return a}static _$Eu(b,a){a=a.attribute;return!1===
a?void 0:"string"==typeof a?a:"string"==typeof b?b.toLowerCase():void 0}constructor(){super();this._$Ep=void 0;this.hasUpdated=this.isUpdatePending=!1;this._$Em=null;this._$Ev()}_$Ev(){this._$ES=new Promise(b=>this.enableUpdating=b);this._$AL=new Map;this._$E_();this.requestUpdate();this.constructor.l?.forEach(b=>b(this))}addController(b){(this._$EO??(this._$EO=new Set)).add(b);void 0!==this.renderRoot&&this.isConnected&&b.hostConnected?.()}removeController(b){this._$EO?.delete(b)}_$E_(){const b=
new Map,a=this.constructor.elementProperties;for(const c of a.keys())this.hasOwnProperty(c)&&(b.set(c,this[c]),delete this[c]);0<b.size&&(this._$Ep=b)}createRenderRoot(){const b=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return je(b,this.constructor.elementStyles),b}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot());this.enableUpdating(!0);this._$EO?.forEach(b=>b.hostConnected?.())}enableUpdating(b){}disconnectedCallback(){this._$EO?.forEach(b=>
b.hostDisconnected?.())}attributeChangedCallback(b,a,c){this._$AK(b,c)}_$EC(b,a){const c=this.constructor.elementProperties.get(b),d=this.constructor._$Eu(b,c);void 0!==d&&!0===c.reflect&&(a=(void 0!==c.converter?.toAttribute?c.converter:Bb).toAttribute(a,c.type),this._$Em=b,null==a?this.removeAttribute(d):this.setAttribute(d,a),this._$Em=null)}_$AK(b,a){var c=this.constructor;b=c._$Eh.get(b);if(void 0!==b&&this._$Em!==b){c=c.getPropertyOptions(b);const d="function"==typeof c.converter?{fromAttribute:c.converter}:
void 0!==c.converter?.fromAttribute?c.converter:Bb;this._$Em=b;this[b]=d.fromAttribute(a,c.type);this._$Em=null}}requestUpdate(b,a,c){if(void 0!==b){if(c??=this.constructor.getPropertyOptions(b),!(c.hasChanged??Cc)(this[b],a))return;this.P(b,a,c)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(b,a,c){this._$AL.has(b)||this._$AL.set(b,a);!0===c.reflect&&this._$Em!==b&&(this._$Ej??(this._$Ej=new Set)).add(b)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(a){Promise.reject(a)}const b=
this.scheduleUpdate();return null!=b&&await b,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(this.isUpdatePending){if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const [c,d]of this._$Ep)this[c]=d;this._$Ep=void 0}var b=this.constructor.elementProperties;if(0<b.size)for(const [c,d]of b)!0!==d.wrapped||this._$AL.has(c)||void 0===this[c]||this.P(c,this[c],d)}b=!1;var a=this._$AL;try{(b=this.shouldUpdate(a))?(this.willUpdate(a),
this._$EO?.forEach(c=>c.hostUpdate?.()),this.update(a)):this._$EU()}catch(c){throw b=!1,this._$EU(),c;}b&&this._$AE(a)}}willUpdate(b){}_$AE(b){this._$EO?.forEach(a=>a.hostUpdated?.());this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(b));this.updated(b)}_$EU(){this._$AL=new Map;this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(b){return!0}update(b){this._$Ej&&(this._$Ej=this._$Ej.forEach(a=>this._$EC(a,this[a])));this._$EU()}updated(b){}firstUpdated(b){}}
sa.elementStyles=[];sa.shadowRootOptions={mode:"open"};sa.elementProperties=new Map;sa.finalized=new Map;re?.({ReactiveElement:sa});(ra.reactiveElementVersions??(ra.reactiveElementVersions=[])).push("2.0.4");const Wa=globalThis,Xa=Wa.trustedTypes,Nb=Xa?Xa.createPolicy("lit-html",{createHTML:b=>b}):void 0,S=`lit$${Math.random().toFixed(9).slice(2)}$`,Fc="?"+S,se=`<${Fc}>`,K=document,va=b=>null===b||"object"!=typeof b&&"function"!=typeof b,Gc=Array.isArray,Fa=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
Hc=/--\x3e/g,Ic=/>/g,da=RegExp("\x3e|[ \t\n\f\r](?:([^\\s\"'\x3e\x3d/]+)([ \t\n\f\r]*\x3d[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`\x3c\x3e\x3d]|(\"|')|))|$)","g"),Jc=/'/g,Kc=/"/g,Lc=/^(?:script|style|textarea|title)$/i,ja=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),Mc=new WeakMap,ea=K.createTreeWalker(K,129);class Ya{constructor({strings:b,_$litType$:a},c){this.parts=[];let d=0,e=0;const f=b.length-1,g=this.parts;var h=b.length-1;const k=[];let l,m=2===a?"\x3csvg\x3e":"",n=Fa;for(let v=0;v<h;v++){const z=
b[v];let I,y,F=-1;for(var p=0;p<z.length&&(n.lastIndex=p,y=n.exec(z),null!==y);)p=n.lastIndex,n===Fa?"!--"===y[1]?n=Hc:void 0!==y[1]?n=Ic:void 0!==y[2]?(Lc.test(y[2])&&(l=RegExp("\x3c/"+y[2],"g")),n=da):void 0!==y[3]&&(n=da):n===da?"\x3e"===y[0]?(n=l??Fa,F=-1):void 0===y[1]?F=-2:(F=n.lastIndex-y[2].length,I=y[1],n=void 0===y[3]?da:'"'===y[3]?Kc:Jc):n===Kc||n===Jc?n=da:n===Hc||n===Ic?n=Fa:(n=da,l=void 0);p=n===da&&b[v+1].startsWith("/\x3e")?" ":"";m+=n===Fa?z+se:0<=F?(k.push(I),z.slice(0,F)+"$lit$"+
z.slice(F)+S+p):z+S+(-2===F?v:p)}b=[Mb(b,m+(b[h]||"\x3c?\x3e")+(2===a?"\x3c/svg\x3e":"")),k];const [q,A]=b;if(this.el=Ya.createElement(q,c),ea.currentNode=this.el.content,2===a)a=this.el.content.firstChild,a.replaceWith(...a.childNodes);for(;null!==(a=ea.nextNode())&&g.length<f;){if(1===a.nodeType){if(a.hasAttributes())for(const v of a.getAttributeNames())v.endsWith("$lit$")?(b=A[e++],c=a.getAttribute(v).split(S),b=/([.?@])?(.*)/.exec(b),g.push({type:1,index:d,name:b[2],strings:c,ctor:"."===b[1]?
te:"?"===b[1]?ue:"@"===b[1]?ve:Za}),a.removeAttribute(v)):v.startsWith(S)&&(g.push({type:6,index:d}),a.removeAttribute(v));if(Lc.test(a.tagName)&&(c=a.textContent.split(S),b=c.length-1,0<b)){a.textContent=Xa?Xa.emptyScript:"";for(h=0;h<b;h++)a.append(c[h],K.createComment("")),ea.nextNode(),g.push({type:2,index:++d});a.append(c[b],K.createComment(""))}}else if(8===a.nodeType)if(a.data===Fc)g.push({type:2,index:d});else for(c=-1;-1!==(c=a.data.indexOf(S,c+1));)g.push({type:7,index:d}),c+=S.length-1;
d++}}static createElement(b,a){a=K.createElement("template");return a.innerHTML=b,a}}class we{constructor(b,a){this._$AV=[];this._$AN=void 0;this._$AD=b;this._$AM=a}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(b){const {el:{content:a},parts:c}=this._$AD,d=(b?.creationScope??K).importNode(a,!0);ea.currentNode=d;let e=ea.nextNode(),f=0,g=0,h=c[0];for(;void 0!==h;){if(f===h.index){let k;2===h.type?k=new $a(e,e.nextSibling,this,b):1===h.type?k=new h.ctor(e,h.name,h.strings,
this,b):6===h.type&&(k=new xe(e,this,b));this._$AV.push(k);h=c[++g]}f!==h?.index&&(e=ea.nextNode(),f++)}return ea.currentNode=K,d}p(b){let a=0;for(const c of this._$AV)void 0!==c&&(void 0!==c.strings?(c._$AI(b,c,a),a+=c.strings.length-2):c._$AI(b[a])),a++}}class $a{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(b,a,c,d){this.type=2;this._$AH=B;this._$AN=void 0;this._$AA=b;this._$AB=a;this._$AM=c;this.options=d;this._$Cv=d?.isConnected??!0}get parentNode(){let b=this._$AA.parentNode;const a=
this._$AM;return void 0!==a&&11===b?.nodeType&&(b=a.parentNode),b}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(b,a=this){b=ia(this,b,a);va(b)?b===B||null==b||""===b?(this._$AH!==B&&this._$AR(),this._$AH=B):b!==this._$AH&&b!==ja&&this._(b):void 0!==b._$litType$?this.$(b):void 0!==b.nodeType?this.T(b):(a=b,Gc(a)||"function"==typeof a?.[Symbol.iterator]?this.k(b):this._(b))}S(b){return this._$AA.parentNode.insertBefore(b,this._$AB)}T(b){this._$AH!==b&&(this._$AR(),this._$AH=this.S(b))}_(b){this._$AH!==
B&&va(this._$AH)?this._$AA.nextSibling.data=b:this.T(K.createTextNode(b));this._$AH=b}$(b){const {values:a,_$litType$:c}=b;b="number"==typeof c?this._$AC(b):(void 0===c.el&&(c.el=Ya.createElement(Mb(c.h,c.h[0]),this.options)),c);if(this._$AH?._$AD===b)this._$AH.p(a);else{b=new we(b,this);const d=b.u(this.options);b.p(a);this.T(d);this._$AH=b}}_$AC(b){let a=Mc.get(b.strings);return void 0===a&&Mc.set(b.strings,a=new Ya(b)),a}k(b){Gc(this._$AH)||(this._$AH=[],this._$AR());const a=this._$AH;let c,d=
0;for(const e of b)d===a.length?a.push(c=new $a(this.S(K.createComment("")),this.S(K.createComment("")),this,this.options)):c=a[d],c._$AI(e),d++;d<a.length&&(this._$AR(c&&c._$AB.nextSibling,d),a.length=d)}_$AR(b=this._$AA.nextSibling,a){for(this._$AP?.(!1,!0,a);b&&b!==this._$AB;)a=b.nextSibling,b.remove(),b=a}setConnected(b){void 0===this._$AM&&(this._$Cv=b,this._$AP?.(b))}}class Za{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(b,a,c,d,e){this.type=1;this._$AH=
B;this._$AN=void 0;this.element=b;this.name=a;this._$AM=d;this.options=e;2<c.length||""!==c[0]||""!==c[1]?(this._$AH=Array(c.length-1).fill(new String),this.strings=c):this._$AH=B}_$AI(b,a=this,c,d){const e=this.strings;let f=!1;if(void 0===e)b=ia(this,b,a,0),(f=!va(b)||b!==this._$AH&&b!==ja)&&(this._$AH=b);else{const g=b;let h,k;b=e[0];for(h=0;h<e.length-1;h++)k=ia(this,g[c+h],a,h),k===ja&&(k=this._$AH[h]),f||=!va(k)||k!==this._$AH[h],k===B?b=B:b!==B&&(b+=(k??"")+e[h+1]),this._$AH[h]=k}f&&!d&&this.j(b)}j(b){b===
B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,b??"")}}class te extends Za{constructor(){super(...arguments);this.type=3}j(b){this.element[this.name]=b===B?void 0:b}}class ue extends Za{constructor(){super(...arguments);this.type=4}j(b){this.element.toggleAttribute(this.name,!!b&&b!==B)}}class ve extends Za{constructor(b,a,c,d,e){super(b,a,c,d,e);this.type=5}_$AI(b,a=this){if((b=ia(this,b,a,0)??B)!==ja){a=this._$AH;var c=b===B&&a!==B||b.capture!==a.capture||b.once!==
a.once||b.passive!==a.passive,d=b!==B&&(a===B||c);c&&this.element.removeEventListener(this.name,this,a);d&&this.element.addEventListener(this.name,this,b);this._$AH=b}}handleEvent(b){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,b):this._$AH.handleEvent(b)}}class xe{constructor(b,a,c){this.element=b;this.type=6;this._$AN=void 0;this._$AM=a;this.options=c}get _$AU(){return this._$AM._$AU}_$AI(b){ia(this,b)}}(0,Wa.litHtmlPolyfillSupport)?.(Ya,$a);(Wa.litHtmlVersions??
(Wa.litHtmlVersions=[])).push("3.1.3");class ab extends sa{constructor(){super(...arguments);this.renderOptions={host:this};this._$Do=void 0}createRenderRoot(){const b=super.createRenderRoot();let a;return(a=this.renderOptions).renderBefore??(a.renderBefore=b.firstChild),b}update(b){const a=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected);super.update(b);b=this.renderRoot;var c=this.renderOptions;const d=c?.renderBefore??b;var e=d._$litPart$;void 0===e&&(e=c?.renderBefore??
null,d._$litPart$=e=new $a(b.insertBefore(K.createComment(""),e),e,void 0,c??{}));this._$Do=(e._$AI(a),e)}connectedCallback(){super.connectedCallback();this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback();this._$Do?.setConnected(!1)}render(){return ja}}ab._$litElement$=!0;ab.finalized=!0;globalThis.litElementHydrateSupport?.({LitElement:ab});(0,globalThis.litElementPolyfillSupport)?.({LitElement:ab});let Nc;((Nc=globalThis).litElementVersions??(Nc.litElementVersions=[])).push("4.0.5");
const ye=b=>class extends b{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(a,c,d){super.attributeChangedCallback(a,c,d);"theme"===a&&this._set_theme(d)}},Pb=[],Cb=b=>class extends ye(b){static finalize(){super.finalize();if(!this.elementStyles){var a=this.prototype._template;a&&!Ob(this)&&Cd(this.getStylesForThis(),a)}}static finalizeStyles(a){const c=this.getStylesForThis();return a?
[...super.finalizeStyles(a),...c]:c}static getStylesForThis(){const a=Object.getPrototypeOf(this.prototype);this.__themes=[...((a?a.constructor.__themes:[])||[]),...Dd(this.is)];const c=this.__themes.flatMap(d=>d.styles);return c.filter((d,e)=>e===c.lastIndexOf(d))}},ze=(b,...a)=>{const c=document.createElement("style");c.id=b;c.textContent=a.map(d=>d.toString()).join("\n").replace(":host","html");document.head.insertAdjacentElement("afterbegin",c)},ta=(b,...a)=>{ze(`lumo-${b}`,a)},Ae=E`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;

    /* Warning */
    --lumo-warning-color: hsl(48, 100%, 50%);
    --lumo-warning-color-10pct: hsla(48, 100%, 50%, 0.25);
    --lumo-warning-text-color: hsl(32, 100%, 30%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  /* forced-colors mode adjustments */
  @media (forced-colors: active) {
    html {
      --lumo-disabled-text-color: GrayText;
    }
  }
`;ta("color-props",Ae);const Be=E`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);

    /* Warning */
    --lumo-warning-color: hsl(43, 100%, 48%);
    --lumo-warning-color-10pct: hsla(40, 100%, 50%, 0.2);
    --lumo-warning-text-color: hsl(45, 100%, 60%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
`;O("",Be,{moduleId:"lumo-color"});const Ce=E`
  @font-face {
    font-family: 'lumo-icons';
    src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIjQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2cAABeAWri7U2hlYWQAAA3oAAAAMAAAADZa/6SsaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh57oA4bWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wic1Z9N0jpNHCD9SNqqoVBgbQoMjY+pjA4hNnWa2pV1rHSIif0DGkyT2k10Kmu1Cag6huj4ZpqYBHSqJsTEJgZCG3TaVBFv595nO3ZIv4RIrPPuvefe884599zzO/cRF8G/tgn6CFFImNgkR0ggX8wlspbhSSWSdrC5ozd30s2dw5afzvgtyz9/zG9t1hV4RtF1pXolowvtzc2z6L2aYUQM45jKH9WDTvd1LRDoDASYWhfTzTyvboXz6uZX4ARX5wrF39y+HM2+CJ8d0pkyqBIqoze3D12ez4DrFoYzxI8dWwMrDlZ2DMqQAR9AROsJU+2smlTPaTTco52BVxXa2a2+I8vvqd2dVHm1LoPeTn/AZPRYGthDYOeZjBjKoFsVGulR3lGU95SeCK44oHU7MhWUGUKZDT3oSUcG2GWuh+EDDfUYA/jhIhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgJW95qEtpJ1VcW9HiTriZBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKifkqHRCoWZc3m11Wa/dKdFgXD4kSYfkeJBKd8KMz7J8dZn/cGRCcLGDnA2Ge3bKzcvlnTDNthFWLH7Xt80ua5FMjA4WKelWv5Xo16vHuYzpRbJhhdVlftuRK0VlR27D9lu5TF0DPBi60OrHNO0AfP/uRWvhn/U3LXICE+nh+3IHPUJ8JE6GyBjZQLbjGchlrSgYngF8zyrIF4NJD3atUcgWsWunGN/UHX5B5/yg7uF87Nqp4Gf52F3gH73DjEZNRoqCKAr9giQJp5rGJABpiVE2htNhW9R8nw0jqYjCYcY4LIjwYNScf4WN06IZnZCEqsI4cFaQbo4Z1TsZBx40YhXkHOecaYE5oY37IIQ+iJJ+UsDYSun5MuRSBRZRUUhlY2DqOGajOR6zrSU/5My6l2DnusH1GQgnw5BZP7iuYM/ahcfQ7Z8y51ddfutvuwNqWQ0cBYr8fj0U0vsHpwerVaB2sWhXT2NExi2r1KUE2tUuVMnkepVQrxTmpQrZTG4iu8he8iPyM3KcPE/+RP5KPoE2CEAKclCBzXATxkYOtUY/o961PWRqsj0chRrHFBbtrjP9/P0ven5pcbRdpL94vfsy33e5+izuwz3nFLFPVNayPZx/jdG1fOChflFRvYzsW6L18efgLrSWIgvcqnGJYi4skO4xREURjbDuxKke5v0T3Mrzkt2fi31uyZlLLrqIpEuXXsMlgw442Jb0GAxjS1DM20kBoCzHLXm/jEm0IltdcvU0fEW24jgiwwRjVd9u4NJHcIyoHJcwvyVqgqj5hqBJ1ZWSJryh9p56UWhX1XbhRbW2ZopuZWsQd5y8mEQ8M+C6xjRYxZbDKWf5AgY+Qq/l6wSPk16zDFjowYuu+wjx13mfkxbyDDxadYT/LijZyI0THB+6yfLaWsRcO82zo9mWTNtpO18qlorZoIVMwSN40tky5DOQ1MCIAe24mvlsuwIIxPb10+uXDQ4uWz/9m3rj+ql7p6bufZARuPVq5tXtsn6KwfP8Jy0TeWOyNhUJN6mhX5rkUTtUppQWEMNTqEdaCGKFYKJaQrCE4JtDLYOlNEKmO5kBTPGY2A0N2sY3+dVlo1N9ycBsIGtOjQ2p/tlZvzo0ur4v6cOh8NTospB7U/X40KahoU3bGIH97dnwmtHlYffVG3R1YOwKM2vNhrPhCT5zk64sG53oS4b31aYjqe/B7+kQiXBN+b6h21hNUPMq29B8CU4elINdygMPKF1B+WBTG7Z9ZshpN/xwEuuDQZR+nuoo4CDaAiiwXmLpmukMQyPf/JMclqgL1ixZQ/nnP2VbdUODFGt2fgBvL123rlLYu/6A9ckb7F3K0/CyBMEu6aQoPscroCcacVehvyQyCZAsizsWWBkoLC+WAiWnOksLKaeuQDzGuqSk42aiYTiJ4zf9afl17SrqaTO1f+XlZAfIuYcq7/IqYMaMrksOJ6vHkOCPDq943xcCnHqVD9pHFRpMqSPXrIua1WNs+tOz1U+ciTCDpPk+c4QYJIHnYhxP/kVPAq+ahFpVhPcHp8qyarhiF+HsBU9Hrl+UZa876fbKipL0KqB6OdUveErgtOI97fZ63ae9SvWU6k2w1JfwqnUbHsYcFCJFrC/W12zIMMirWYEHxMPs6LGYSdkSZ5TsNP9PCpwnWC3HKZ1lydNjWHC2Mn3l6vL0dHn1ldP3LTSrX+vKrBqv7KmMr8p0SR6P1NqF63or6XRlIyO90f7+kf7+myOhvt4tq7f09oUiTc2/dycGgqFQcCDRLYmi1NL7fk0CknVMxEg/cdfs/TnpJMNkgqwj17B8beVazSrVbU4lG67IZYOCnWrYy3yBR9cyWcChywos3LJBEdhhFoAdYjiw0rLGm0xU5OzoGm5/ZfmHjVZpNNg6SznzGKDdwv2cCtVn6Eaxo12cfxLprpVtTcZ6hVx6dow7Yq7e8LXO8PY9Jgjoze9yCtU5FNbegcKkQMdCbt9au/te4Ebe0jkc0ukUL32eYnTpNs20h0KpUOhZPYwVcfhZnfdqeCvDfXiuCbAoYWcXERPc/mDQD3/hdF+wK4i/xv3kYfprIpAuMkk2kW3kdtS0kBIKpZwp8KxmsCyfM1MFzAss9LBkDxRyThiaqTLwKYKJVTwmWTudMyz+yks09346MDh4m72yOxCKrt1XMlQ1qPVlTEVVQ1ofdK/sCWjtZu9qGwZ8YZ9PPWlo1IV3eW3+U0aXblP39zrt+JPf6UhEQ1rUjNBULN+utyuaDNW34kpAVuSOeMTyWbSNWnooFu+QFNWQ4d/Ox4IPWx41fP/fB/Rjeoz08ezPA9TysMtmnOXfGN7Ui3xIYLDALrlDLOP09qtJuY2OeL0+QZXdRnR1nxRVBF/SOyKKPpcrn9mWzH4rH9IidE+PTNU2182+hOgSItrE1slByS24vaLvJpxOqe4Pduf3HJkZ+jLqUz9rRzB7p8gKcgWZwV1L8JtUS5Z2JxZSOCuBoMTQihMzLbCPA0KqGMAljRQjONklW/wjnXKy8vxT/Elvm3/KiMUMOoV0/vnDYlhec0SMKtt3/kKMyOt33tj2bqxQLsTjSGLl+EAsNhCnTyRGktW55EgCn/A4PlnWn+Mg8bgZrWqHxTbPwMuyy1u5YeZF2SUM7JRhddwRgiRuxpmgJmxn9ZW7XpcF3ViX/ar6ptRpGJ0S9Adg4qhb9sI3vbL7qNJV/y4i07t5TZBiho1imFoMz3gED+CtjYUxvP4SOxov4bFoNPg5aR1e+G4UgDPoedJTpogyCJ7oYvRqoVS0MQAy+CoNEdTDUjok5ZHZL/WtjV7rFj3PKQE3iKp7ou+rIxN3b9LB1dGjeT4cvKo3FrnWpYpuaFd/h3dtV8UeKN1Y9hpR3dt4p0H/zKuPQq0kZQUIIpuDfoiETsnIk+gCWMJZUXHtE8V9LkUc2TE8vOMbO4ax/MACabzyaGXc7u3FBr11ThBdB8SIeMAlCntG2KThHSPsaj2Dc9KNyY2a0KZ7ODaTHoRiFkeYz+shZBpCS4X6471KKKnuHd84edfk5F37d1XO5bbkcltu2ZLNbvnPXiUVAnVvprJrP+NObryjxrllS65md6Tm6wzFHRR4dY3QUUjb7MgxaIixU8hspi98fl/Xc+IB4iU66eCVL9YfAfahiSUt4TONS8x0D8W7u8vd3fGWx6OXlM/U1IoU/s61PGhpyXRFa3eReq2qG56lvmYtXavCC1iN7lbiBpWxXHU+cSlztVLVz0tVN600fVsLxaVDknhYioeoXP3t4lqV1r79MAw0GCI1FTL1YIGzPL1MMlJ9ZsN9P7lvA2yr9ZFUzwzPrVgxN/x/SS+chwB4nGNgZGBgAOLPrYdY4vltvjJwM78AijDUqG5oRND/XzNPZboF5HIwMIFEAU/lC+J4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo+CoQKugr0C1QLmgvAeJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==)
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html {
    --lumo-icons-align-center: '\\ea01';
    --lumo-icons-align-left: '\\ea02';
    --lumo-icons-align-right: '\\ea03';
    --lumo-icons-angle-down: '\\ea04';
    --lumo-icons-angle-left: '\\ea05';
    --lumo-icons-angle-right: '\\ea06';
    --lumo-icons-angle-up: '\\ea07';
    --lumo-icons-arrow-down: '\\ea08';
    --lumo-icons-arrow-left: '\\ea09';
    --lumo-icons-arrow-right: '\\ea0a';
    --lumo-icons-arrow-up: '\\ea0b';
    --lumo-icons-bar-chart: '\\ea0c';
    --lumo-icons-bell: '\\ea0d';
    --lumo-icons-calendar: '\\ea0e';
    --lumo-icons-checkmark: '\\ea0f';
    --lumo-icons-chevron-down: '\\ea10';
    --lumo-icons-chevron-left: '\\ea11';
    --lumo-icons-chevron-right: '\\ea12';
    --lumo-icons-chevron-up: '\\ea13';
    --lumo-icons-clock: '\\ea14';
    --lumo-icons-cog: '\\ea15';
    --lumo-icons-cross: '\\ea16';
    --lumo-icons-download: '\\ea17';
    --lumo-icons-dropdown: '\\ea18';
    --lumo-icons-edit: '\\ea19';
    --lumo-icons-error: '\\ea1a';
    --lumo-icons-eye: '\\ea1b';
    --lumo-icons-eye-disabled: '\\ea1c';
    --lumo-icons-menu: '\\ea1d';
    --lumo-icons-minus: '\\ea1e';
    --lumo-icons-ordered-list: '\\ea1f';
    --lumo-icons-phone: '\\ea20';
    --lumo-icons-photo: '\\ea21';
    --lumo-icons-play: '\\ea22';
    --lumo-icons-plus: '\\ea23';
    --lumo-icons-redo: '\\ea24';
    --lumo-icons-reload: '\\ea25';
    --lumo-icons-search: '\\ea26';
    --lumo-icons-undo: '\\ea27';
    --lumo-icons-unordered-list: '\\ea28';
    --lumo-icons-upload: '\\ea29';
    --lumo-icons-user: '\\ea2a';
  }
`;ta("font-icons",Ce);const De=E`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`;ta("sizing-props",De);const Ee=E`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`;ta("spacing-props",Ee);const Fe=E`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`;E`
  html {
    /* Button */
    --vaadin-button-background: var(--lumo-contrast-5pct);
    --vaadin-button-border: none;
    --vaadin-button-border-radius: var(--lumo-border-radius-m);
    --vaadin-button-font-size: var(--lumo-font-size-m);
    --vaadin-button-font-weight: 500;
    --vaadin-button-height: var(--lumo-size-m);
    --vaadin-button-margin: var(--lumo-space-xs) 0;
    --vaadin-button-min-width: calc(var(--vaadin-button-height) * 2);
    --vaadin-button-padding: 0 calc(var(--vaadin-button-height) / 3 + var(--lumo-border-radius-m) / 2);
    --vaadin-button-text-color: var(--lumo-primary-text-color);
    --vaadin-button-primary-background: var(--lumo-primary-color);
    --vaadin-button-primary-border: none;
    --vaadin-button-primary-font-weight: 600;
    --vaadin-button-primary-text-color: var(--lumo-primary-contrast-color);
    --vaadin-button-tertiary-background: transparent !important;
    --vaadin-button-tertiary-text-color: var(--lumo-primary-text-color);
    --vaadin-button-tertiary-font-weight: 500;
    --vaadin-button-tertiary-padding: 0 calc(var(--vaadin-button-height) / 6);
    /* Checkbox */
    --vaadin-checkbox-background: var(--lumo-contrast-20pct);
    --vaadin-checkbox-background-hover: var(--lumo-contrast-30pct);
    --vaadin-checkbox-border-radius: var(--lumo-border-radius-s);
    --vaadin-checkbox-checkmark-char: var(--lumo-icons-checkmark);
    --vaadin-checkbox-checkmark-char-indeterminate: '';
    --vaadin-checkbox-checkmark-color: var(--lumo-primary-contrast-color);
    --vaadin-checkbox-checkmark-size: calc(var(--vaadin-checkbox-size) + 2px);
    --vaadin-checkbox-label-color: var(--lumo-body-text-color);
    --vaadin-checkbox-label-font-size: var(--lumo-font-size-m);
    --vaadin-checkbox-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs);
    --vaadin-checkbox-size: calc(var(--lumo-size-m) / 2);
    /* Radio button */
    --vaadin-radio-button-background: var(--lumo-contrast-20pct);
    --vaadin-radio-button-background-hover: var(--lumo-contrast-30pct);
    --vaadin-radio-button-dot-color: var(--lumo-primary-contrast-color);
    --vaadin-radio-button-dot-size: 3px;
    --vaadin-radio-button-label-color: var(--lumo-body-text-color);
    --vaadin-radio-button-label-font-size: var(--lumo-font-size-m);
    --vaadin-radio-button-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs)
      var(--lumo-space-xs);
    --vaadin-radio-button-size: calc(var(--lumo-size-m) / 2);
    --vaadin-selection-color: var(--lumo-primary-color);
    --vaadin-selection-color-text: var(--lumo-primary-text-color);
    --vaadin-input-field-border-radius: var(--lumo-border-radius-m);
    --vaadin-focus-ring-color: var(--lumo-primary-color-50pct);
    --vaadin-focus-ring-width: 2px;
    /* Label */
    --vaadin-input-field-label-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-focused-label-color: var(--lumo-primary-text-color);
    --vaadin-input-field-hovered-label-color: var(--lumo-body-text-color);
    --vaadin-input-field-label-font-size: var(--lumo-font-size-s);
    --vaadin-input-field-label-font-weight: 500;
    /* Helper */
    --vaadin-input-field-helper-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-helper-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-helper-font-weight: 400;
    --vaadin-input-field-helper-spacing: 0.4em;
    /* Error message */
    --vaadin-input-field-error-color: var(--lumo-error-text-color);
    --vaadin-input-field-error-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-error-font-weight: 400;
    /* Input field */
    --vaadin-input-field-background: var(--lumo-contrast-10pct);
    --vaadin-input-field-icon-color: var(--lumo-contrast-60pct);
    --vaadin-input-field-icon-size: var(--lumo-icon-size-m);
    --vaadin-input-field-invalid-background: var(--lumo-error-color-10pct);
    --vaadin-input-field-invalid-hover-highlight: var(--lumo-error-color-50pct);
    --vaadin-input-field-height: var(--lumo-size-m);
    --vaadin-input-field-hover-highlight: var(--lumo-contrast-50pct);
    --vaadin-input-field-placeholder-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-readonly-border: 1px dashed var(--lumo-contrast-30pct);
    --vaadin-input-field-value-color: var(--lumo-body-text-color);
    --vaadin-input-field-value-font-size: var(--lumo-font-size-m);
    --vaadin-input-field-value-font-weight: 400;
  }
`;ta("style-props",Fe);const Ge=E`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`,He=E`
  body,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  :where(h1, h2, h3, h4, h5, h6) {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-block: 0;
  }

  :where(h1) {
    font-size: var(--lumo-font-size-xxxl);
  }

  :where(h2) {
    font-size: var(--lumo-font-size-xxl);
  }

  :where(h3) {
    font-size: var(--lumo-font-size-xl);
  }

  :where(h4) {
    font-size: var(--lumo-font-size-l);
  }

  :where(h5) {
    font-size: var(--lumo-font-size-m);
  }

  :where(h6) {
    font-size: var(--lumo-font-size-xs);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`;O("",He,{moduleId:"lumo-typography"});ta("typography-props",Ge);O("vaadin-checkbox",E`
    :host {
      color: var(--vaadin-checkbox-label-color, var(--lumo-body-text-color));
      font-size: var(--vaadin-checkbox-label-font-size, var(--lumo-font-size-m));
      font-family: var(--lumo-font-family);
      line-height: var(--lumo-line-height-s);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: default;
      outline: none;
      --_checkbox-size: var(--vaadin-checkbox-size, calc(var(--lumo-size-m) / 2));
      --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
      --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
      --_selection-color: var(--vaadin-selection-color, var(--lumo-primary-color));
    }

    :host([has-label]) ::slotted(label) {
      padding: var(
        --vaadin-checkbox-label-padding,
        var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs)
      );
    }

    [part='checkbox'] {
      width: var(--_checkbox-size);
      height: var(--_checkbox-size);
      margin: var(--lumo-space-xs);
      position: relative;
      border-radius: var(--vaadin-checkbox-border-radius, var(--lumo-border-radius-s));
      background: var(--vaadin-checkbox-background, var(--lumo-contrast-20pct));
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;
      cursor: var(--lumo-clickable-cursor);
      /* Default field border color */
      --_input-border-color: var(--vaadin-input-field-border-color, var(--lumo-contrast-50pct));
    }

    :host([indeterminate]),
    :host([checked]) {
      --vaadin-input-field-border-color: transparent;
    }

    :host([indeterminate]) [part='checkbox'],
    :host([checked]) [part='checkbox'] {
      background-color: var(--_selection-color);
    }

    /* Checkmark */
    [part='checkbox']::after {
      pointer-events: none;
      font-family: 'lumo-icons';
      content: var(--vaadin-checkbox-checkmark-char, var(--lumo-icons-checkmark));
      color: var(--vaadin-checkbox-checkmark-color, var(--lumo-primary-contrast-color));
      font-size: var(--vaadin-checkbox-checkmark-size, calc(var(--_checkbox-size) + 2px));
      line-height: 1;
      position: absolute;
      top: -1px;
      left: -1px;
      contain: content;
      opacity: 0;
    }

    :host([checked]) [part='checkbox']::after {
      opacity: 1;
    }

    /* Indeterminate checkmark */
    :host([indeterminate]) [part='checkbox']::after {
      content: var(--vaadin-checkbox-checkmark-char-indeterminate, '');
      opacity: 1;
      top: 45%;
      height: 10%;
      left: 22%;
      right: 22%;
      width: auto;
      border: 0;
      background-color: var(--lumo-primary-contrast-color);
    }

    /* Focus ring */
    :host([focus-ring]) [part='checkbox'] {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 calc(var(--_focus-ring-width) + 1px) var(--_focus-ring-color),
        inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
    }

    /* Disabled */
    :host([disabled]) {
      pointer-events: none;
      color: var(--lumo-disabled-text-color);
      --vaadin-input-field-border-color: var(--lumo-contrast-20pct);
    }

    :host([disabled]) ::slotted(label) {
      color: inherit;
    }

    :host([disabled]) [part='checkbox'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host([disabled]) [part='checkbox']::after {
      color: var(--lumo-contrast-30pct);
    }

    :host([indeterminate][disabled]) [part='checkbox']::after {
      background-color: var(--lumo-contrast-30pct);
    }

    /* RTL specific styles */
    :host([dir='rtl'][has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-s);
    }

    /* Used for activation "halo" */
    [part='checkbox']::before {
      pointer-events: none;
      color: transparent;
      width: 100%;
      height: 100%;
      line-height: var(--_checkbox-size);
      border-radius: inherit;
      background-color: inherit;
      transform: scale(1.4);
      opacity: 0;
      transition: transform 0.1s, opacity 0.8s;
    }

    /* Hover */
    :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
      background: var(--vaadin-checkbox-background-hover, var(--lumo-contrast-30pct));
    }

    /* Disable hover for touch devices */
    @media (pointer: coarse) {
      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
        background: var(--vaadin-checkbox-background, var(--lumo-contrast-20pct));
      }
    }

    /* Active */
    :host([active]) [part='checkbox'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='checkbox'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='checkbox']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }
  `,{moduleId:"lumo-checkbox"});O("vaadin-grid",E`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-s);
      color: var(--lumo-body-text-color);
      background-color: var(--lumo-base-color);
      box-sizing: border-box;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
      --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
      /* For internal use only */
      --_lumo-grid-border-color: var(--lumo-contrast-20pct);
      --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);
      --_lumo-grid-border-width: 1px;
      --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);
    }

    /* No (outer) border */

    :host(:not([theme~='no-border'])) {
      border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);
    }

    :host([disabled]) {
      opacity: 0.7;
    }

    /* Cell styles */

    [part~='cell'] {
      min-height: var(--lumo-size-m);
      background-color: var(--vaadin-grid-cell-background, var(--lumo-base-color));
      cursor: default;
      --_cell-padding: var(--vaadin-grid-cell-padding, var(--_cell-default-padding));
      --_cell-default-padding: var(--lumo-space-xs) var(--lumo-space-m);
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      cursor: inherit;
      padding: var(--_cell-padding);
    }

    /* Apply row borders by default and introduce the "no-row-borders" variant */
    :host(:not([theme~='no-row-borders'])) [part~='cell']:not([part~='details-cell']) {
      border-top: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Hide first body row top border */
    :host(:not([theme~='no-row-borders'])) [part~='first-row'] [part~='cell']:not([part~='details-cell']) {
      border-top: 0;
      min-height: calc(var(--lumo-size-m) - var(--_lumo-grid-border-width));
    }

    /* Focus-ring */

    [part~='row'] {
      position: relative;
    }

    [part~='row']:focus,
    [part~='focused-cell']:focus {
      outline: none;
    }

    :host([navigating]) [part~='row']:focus::before,
    :host([navigating]) [part~='focused-cell']:focus::before {
      content: '';
      position: absolute;
      inset: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
    }

    :host([navigating]) [part~='row']:focus::before {
      transform: translateX(calc(-1 * var(--_grid-horizontal-scroll-position)));
      z-index: 3;
    }

    /* Drag and Drop styles */
    :host([dragover])::after {
      content: '';
      position: absolute;
      z-index: 100;
      inset: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
    }

    [part~='row'][dragover] {
      z-index: 100 !important;
    }

    [part~='row'][dragover] [part~='cell'] {
      overflow: visible;
    }

    [part~='row'][dragover] [part~='cell']::after {
      content: '';
      position: absolute;
      inset: 0;
      height: calc(var(--_lumo-grid-border-width) + 2px);
      pointer-events: none;
      background: var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] [part~='cell'][last-frozen]::after {
      right: -1px;
    }

    :host([theme~='no-row-borders']) [dragover] [part~='cell']::after {
      height: 2px;
    }

    [part~='row'][dragover='below'] [part~='cell']::after {
      top: 100%;
      bottom: auto;
      margin-top: -1px;
    }

    :host([all-rows-visible]) [part~='last-row'][dragover='below'] [part~='cell']::after {
      height: 1px;
    }

    [part~='row'][dragover='above'] [part~='cell']::after {
      top: auto;
      bottom: 100%;
      margin-bottom: -1px;
    }

    [part~='row'][details-opened][dragover='below'] [part~='cell']:not([part~='details-cell'])::after,
    [part~='row'][details-opened][dragover='above'] [part~='details-cell']::after {
      display: none;
    }

    [part~='row'][dragover][dragover='on-top'] [part~='cell']::after {
      height: 100%;
      opacity: 0.5;
    }

    [part~='row'][dragstart] [part~='cell'] {
      border: none !important;
      box-shadow: none !important;
    }

    [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    #scroller [part~='row'][dragstart]:not([dragstart=''])::after {
      display: block;
      position: absolute;
      left: var(--_grid-drag-start-x);
      top: var(--_grid-drag-start-y);
      z-index: 100;
      content: attr(dragstart);
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: calc(var(--lumo-space-xs) * 0.8);
      color: var(--lumo-error-contrast-color);
      background-color: var(--lumo-error-color);
      border-radius: var(--lumo-border-radius-m);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      font-weight: 500;
      text-transform: initial;
      letter-spacing: initial;
      min-width: calc(var(--lumo-size-s) * 0.7);
      text-align: center;
    }

    /* Headers and footers */

    [part~='header-cell'],
    [part~='footer-cell'],
    [part~='reorder-ghost'] {
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
    }

    [part~='footer-cell'] {
      font-weight: 400;
    }

    [part~='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-xl);
    }

    /* Header borders */

    /* Hide first header row top border */
    :host(:not([theme~='no-row-borders'])) [part~='row']:first-child [part~='header-cell'] {
      border-top: 0;
    }

    /* Hide header row top border if previous row is hidden */
    [part~='row'][hidden] + [part~='row'] [part~='header-cell'] {
      border-top: 0;
    }

    [part~='row']:last-child [part~='header-cell'] {
      border-bottom: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part~='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='top']) [part~='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-border-color);
    }

    /* Footer borders */

    [part~='row']:first-child [part~='footer-cell'] {
      border-top: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part~='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='bottom']) [part~='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-border-color);
    }

    /* Column reordering */

    :host([reordering]) [part~='cell'] {
      background: linear-gradient(var(--lumo-shade-20pct), var(--lumo-shade-20pct)) var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='allowed'] {
      background: var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='dragging'] {
      background: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)) var(--lumo-base-color);
    }

    [part~='reorder-ghost'] {
      opacity: 0.85;
      box-shadow: var(--lumo-box-shadow-s);
      /* TODO Use the same styles as for the cell element (reorder-ghost copies styles from the cell element) */
      padding: var(--lumo-space-s) var(--lumo-space-m) !important;
    }

    /* Column resizing */

    [part='resize-handle'] {
      width: 3px;
      background-color: var(--lumo-primary-color-50pct);
      opacity: 0;
      transition: opacity 0.2s;
    }

    :host(:not([reordering])) *:not([column-resizing]) [part~='cell']:hover [part='resize-handle'],
    [part='resize-handle']:active {
      opacity: 1;
      transition-delay: 0.15s;
    }

    /* Column borders */

    :host([theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Frozen columns */

    [last-frozen] {
      border-right: var(--_lumo-grid-border-width) solid transparent;
      overflow: hidden;
    }

    :host([overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }

    [first-frozen-to-end] {
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    /* Row stripes */

    :host([theme~='row-stripes']) [part~='even-row'] [part~='body-cell'],
    :host([theme~='row-stripes']) [part~='even-row'] [part~='details-cell'] {
      background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      background-repeat: repeat-x;
    }

    /* Selected row */

    /* Raise the selected rows above unselected rows (so that box-shadow can cover unselected rows) */
    :host(:not([reordering])) [part~='row'][selected] {
      z-index: 1;
    }

    :host(:not([reordering])) [part~='row'][selected] [part~='body-cell']:not([part~='details-cell']) {
      background-image: linear-gradient(var(--_lumo-grid-selected-row-color), var(--_lumo-grid-selected-row-color));
      background-repeat: repeat;
    }

    /* Cover the border of an unselected row */
    :host(:not([theme~='no-row-borders'])) [part~='row'][selected] [part~='cell']:not([part~='details-cell']) {
      box-shadow: 0 var(--_lumo-grid-border-width) 0 0 var(--_lumo-grid-selected-row-color);
    }

    /* Compact */

    :host([theme~='compact']) [part~='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='compact']) [part~='cell'] {
      min-height: var(--lumo-size-s);
      --_cell-default-padding: var(--lumo-space-xs) var(--lumo-space-s);
    }

    :host([theme~='compact']) [part~='first-row'] [part~='cell']:not([part~='details-cell']) {
      min-height: calc(var(--lumo-size-s) - var(--_lumo-grid-border-width));
    }

    /* Wrap cell contents */

    :host([theme~='wrap-cell-content']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      white-space: normal;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    :host([dir='rtl'][theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    :host([dir='rtl']) [last-frozen] {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl']) [first-frozen-to-end] {
      border-left: none;
      border-right: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl'][overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    :host([dir='rtl'][overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }
  `,{moduleId:"lumo-grid"});window.JSCompiler_renameProperty=function(b,a){return b};let Fd=/(url\()([^)]*)(\))/g,Ed=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,La,J;const Ie=!window.ShadyDOM||!window.ShadyDOM.inUse;!(window.ShadyCSS&&!window.ShadyCSS.nativeCss);const Je=Ie&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const b=new CSSStyleSheet;b.replaceSync("");const a=document.createElement("div");a.attachShadow({mode:"open"});a.shadowRoot.adoptedStyleSheets=
[b];return a.shadowRoot.adoptedStyleSheets[0]===b}catch(b){return!1}})();let Ke=window.Polymer&&window.Polymer.rootPath||kb(document.baseURI||window.location.href),Oa=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;window.Polymer&&window.Polymer.setPassiveTouchGestures||!1;let Db=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,Le=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,Me=window.Polymer&&window.Polymer.legacyOptimizations||!1,Ne=window.Polymer&&window.Polymer.legacyWarnings||
!1,Oe=window.Polymer&&window.Polymer.syncInitialRender||!1,qb=window.Polymer&&window.Polymer.legacyUndefined||!1,Pe=window.Polymer&&window.Polymer.orderedComputed||!1,Oc=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Qe=window.Polymer&&window.Polymer.fastDomIf||!1;window.Polymer&&window.Polymer.suppressTemplateNotifications||!1;window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1;let Re=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1,Se=0;const C=function(b){let a=
b.__mixinApplications;a||(a=new WeakMap,b.__mixinApplications=a);let c=Se++;return function(d){let e=d.__mixinSet;if(e&&e[c])return d;let f=a,g=f.get(d);g||(g=b(d),f.set(d,g),d=Object.create(g.__mixinSet||e||null),d[c]=!0,g.__mixinSet=d);return g}};let Ga={},bb={};class ka extends HTMLElement{static get observedAttributes(){return["id"]}static import(b,a){return b?(b=Ga[b]||bb[b.toLowerCase()])&&a?b.querySelector(a):b:null}attributeChangedCallback(b,a,c,d){a!==c&&this.register()}get assetpath(){if(!this.__assetpath){var b=
window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument;b=wa(this.getAttribute("assetpath")||"",b.baseURI);this.__assetpath=kb(b)}return this.__assetpath}register(b){if(b=b||this.id){if(Db&&void 0!==(Ga[b]||bb[b.toLowerCase()]))throw Ga[b]=bb[b.toLowerCase()]=null,Error(`strictTemplatePolicy: dom-module ${b} re-registered`);this.id=b;Ga[b]=bb[b.toLowerCase()]=this;this.querySelector("style")&&console.warn("dom-module %s has style outside template",
this.id)}}}ka.prototype.modules=Ga;customElements.define("dom-module",ka);const Z=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?b=>ShadyDOM.patch(b):b=>b,Ma={},Id=/-[a-z]/g,Jd=/([A-Z])/g;let Te=0,Pc=0,ua=[],Ue=0,Eb=!1,Qc=document.createTextNode("");(new window.MutationObserver(function(){Eb=!1;const b=ua.length;for(let a=0;a<b;a++){let c=ua[a];if(c)try{c()}catch(d){setTimeout(()=>{throw d;})}}ua.splice(0,b);Pc+=b})).observe(Qc,{characterData:!0});
const Ve={run(b){Eb||(Eb=!0,Qc.textContent=Ue++);ua.push(b);return Te++},cancel(b){const a=b-Pc;if(0<=a){if(!ua[a])throw Error("invalid async handle: "+b);ua[a]=null}}},Rc=C(b=>{class a extends b{static createProperties(c){const d=this.prototype;for(let e in c)e in d||d._createPropertyAccessor(e)}static attributeNameForProperty(c){return c.toLowerCase()}static typeForProperty(c){}_createPropertyAccessor(c,d){this._addPropertyToAttributeMap(c);this.hasOwnProperty("__dataHasAccessor")||(this.__dataHasAccessor=
Object.assign({},this.__dataHasAccessor));this.__dataHasAccessor[c]||(this.__dataHasAccessor[c]=!0,this._definePropertyAccessor(c,d))}_addPropertyToAttributeMap(c){this.hasOwnProperty("__dataAttributes")||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let d=this.__dataAttributes[c];d||(d=this.constructor.attributeNameForProperty(c),this.__dataAttributes[d]=c);return d}_definePropertyAccessor(c,d){Object.defineProperty(this,c,{get(){return this.__data[c]},set:d?function(){}:function(e){this._setPendingProperty(c,
e,!0)&&this._invalidateProperties()}})}constructor(){super();this.__dataInvalid=this.__dataReady=this.__dataEnabled=!1;this.__data={};this.__dataInstanceProps=this.__dataOld=this.__dataPending=null;this.__dataCounter=0;this.__serializing=!1;this._initializeProperties()}ready(){this.__dataReady=!0;this._flushProperties()}_initializeProperties(){for(let c in this.__dataHasAccessor)this.hasOwnProperty(c)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[c]=this[c],delete this[c])}_initializeInstanceProperties(c){Object.assign(this,
c)}_setProperty(c,d){this._setPendingProperty(c,d)&&this._invalidateProperties()}_getProperty(c){return this.__data[c]}_setPendingProperty(c,d,e){e=this.__data[c];let f=this._shouldPropertyChange(c,d,e);f&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),!this.__dataOld||c in this.__dataOld||(this.__dataOld[c]=e),this.__data[c]=d,this.__dataPending[c]=d);return f}_isPropertyPending(c){return!(!this.__dataPending||!this.__dataPending.hasOwnProperty(c))}_invalidateProperties(){!this.__dataInvalid&&
this.__dataReady&&(this.__dataInvalid=!0,Ve.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const c=this.__data,d=this.__dataPending,e=this.__dataOld;this._shouldPropertiesChange(c,d,e)&&(this.__dataOld=this.__dataPending=null,this._propertiesChanged(c,
d,e));this.__dataCounter--}_shouldPropertiesChange(c,d,e){return!!d}_propertiesChanged(c,d,e){}_shouldPropertyChange(c,d,e){return e!==d&&(e===e||d===d)}attributeChangedCallback(c,d,e,f){d!==e&&this._attributeToProperty(c,e);super.attributeChangedCallback&&super.attributeChangedCallback(c,d,e,f)}_attributeToProperty(c,d,e){if(!this.__serializing){const f=this.__dataAttributes;c=f&&f[c]||c;this[c]=this._deserializeValue(d,e||this.constructor.typeForProperty(c))}}_propertyToAttribute(c,d,e){this.__serializing=
!0;e=3>arguments.length?this[c]:e;this._valueToNodeAttribute(this,e,d||this.constructor.attributeNameForProperty(c));this.__serializing=!1}_valueToNodeAttribute(c,d,e){d=this._serializeValue(d);if("class"===e||"name"===e||"slot"===e)c=Z(c);void 0===d?c.removeAttribute(e):c.setAttribute(e,""===d&&window.trustedTypes?window.trustedTypes.emptyScript:d)}_serializeValue(c){switch(typeof c){case "boolean":return c?"":void 0;default:return null!=c?c.toString():void 0}}_deserializeValue(c,d){switch(d){case Boolean:return null!==
c;case Number:return Number(c);default:return c}}}return a}),Sc={};let cb=HTMLElement.prototype;for(;cb;){let b=Object.getOwnPropertyNames(cb);for(let a=0;a<b.length;a++)Sc[b[a]]=!0;cb=Object.getPrototypeOf(cb)}const We=(()=>window.trustedTypes?b=>trustedTypes.isHTML(b)||trustedTypes.isScript(b)||trustedTypes.isScriptURL(b):()=>!1)(),Xe=C(b=>{b=Rc(b);class a extends b{static createPropertiesForAttributes(){let c=this.observedAttributes;for(let d=0;d<c.length;d++)this.prototype._createPropertyAccessor(Wb(c[d]))}static attributeNameForProperty(c){return Na(c)}_initializeProperties(){this.__dataProto&&
(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null);super._initializeProperties()}_initializeProtoProperties(c){for(let d in c)this._setProperty(d,c[d])}_ensureAttribute(c,d){this.hasAttribute(c)||this._valueToNodeAttribute(this,d,c)}_serializeValue(c){switch(typeof c){case "object":if(c instanceof Date)return c.toString();if(c){if(We(c))return c;try{return JSON.stringify(c)}catch(d){return""}}default:return super._serializeValue(c)}}_deserializeValue(c,d){let e;switch(d){case Object:try{e=
JSON.parse(c)}catch(f){e=c}break;case Array:try{e=JSON.parse(c)}catch(f){e=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${c}`)}break;case Date:e=isNaN(c)?String(c):Number(c);e=new Date(e);break;default:e=super._deserializeValue(c,d)}return e}_definePropertyAccessor(c,d){if(!Sc[c]){let e=this[c];void 0!==e&&(this.__data?this._setPendingProperty(c,e):(this.__dataProto?this.hasOwnProperty("__dataProto")||(this.__dataProto=Object.create(this.__dataProto)):this.__dataProto={},
this.__dataProto[c]=e))}super._definePropertyAccessor(c,d)}_hasAccessor(c){return this.__dataHasAccessor&&this.__dataHasAccessor[c]}_isPropertyPending(c){return!!(this.__dataPending&&c in this.__dataPending)}}return a}),Ye={"dom-if":!0,"dom-repeat":!0};let Tc=!1,Uc=!1;const Ze=(()=>{const b=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:a=>a});return(a,c,d)=>{c=c.getAttribute(d);b&&d.startsWith("on-")?a.setAttribute(d,b.createScript(c,
d)):a.setAttribute(d,c)}})(),$e=C(b=>{class a extends b{static _parseTemplate(c,d){if(!c._templateInfo){let e=c._templateInfo={};e.nodeInfoList=[];e.nestedTemplate=!!d;e.stripWhiteSpace=d&&d.stripWhiteSpace||c.hasAttribute&&c.hasAttribute("strip-whitespace");this._parseTemplateContent(c,e,{parent:null})}return c._templateInfo}static _parseTemplateContent(c,d,e){return this._parseTemplateNode(c.content,d,e)}static _parseTemplateNode(c,d,e){let f=!1;"template"!=c.localName||c.hasAttribute("preserve-content")?
"slot"===c.localName&&(d.hasInsertionPoint=!0):f=this._parseTemplateNestedTemplate(c,d,e)||f;if(!Tc){Tc=!0;const g=document.createElement("textarea");g.placeholder="a";Uc=g.placeholder===g.textContent}Uc&&"textarea"===c.localName&&c.placeholder&&c.placeholder===c.textContent&&(c.textContent=null);c.firstChild&&this._parseTemplateChildNodes(c,d,e);c.hasAttributes&&c.hasAttributes()&&(f=this._parseTemplateNodeAttributes(c,d,e)||f);return f||e.noted}static _parseTemplateChildNodes(c,d,e){if("script"!==
c.localName&&"style"!==c.localName)for(let h=c.firstChild,k=0,l;h;h=l){if("template"==h.localName){var f=h,g=f.getAttribute("is");if(g&&Ye[g]){let m=f;m.removeAttribute("is");f=m.ownerDocument.createElement(g);m.parentNode.replaceChild(f,m);for(f.appendChild(m);m.attributes.length;)({name:g}=m.attributes[0]),Ze(f,m,g),m.removeAttribute(g)}h=f}l=h.nextSibling;if(h.nodeType===Node.TEXT_NODE){for(f=l;f&&f.nodeType===Node.TEXT_NODE;)h.textContent+=f.textContent,l=f.nextSibling,c.removeChild(f),f=l;if(d.stripWhiteSpace&&
!h.textContent.trim()){c.removeChild(h);continue}}f={parentIndex:k,parentInfo:e};this._parseTemplateNode(h,d,f)&&(f.infoIndex=d.nodeInfoList.push(f)-1);h.parentNode&&k++}}static _parseTemplateNestedTemplate(c,d,e){d=this._parseTemplate(c,d);(d.content=c.content.ownerDocument.createDocumentFragment()).appendChild(c.content);e.templateInfo=d;return!0}static _parseTemplateNodeAttributes(c,d,e){let f=!1,g=Array.from(c.attributes);for(let h=g.length-1,k;k=g[h];h--)f=this._parseTemplateNodeAttribute(c,
d,e,k.name,k.value)||f;return f}static _parseTemplateNodeAttribute(c,d,e,f,g){return"on-"===f.slice(0,3)?(c.removeAttribute(f),e.events=e.events||[],e.events.push({name:f.slice(3),value:g}),!0):"id"===f?(e.id=g,!0):!1}static _contentForTemplate(c){let d=c._templateInfo;return d&&d.content||c.content}_stampTemplate(c,d){c&&!c.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(c);d=d||this.constructor._parseTemplate(c);let e=d.nodeInfoList;c=document.importNode(d.content||
c.content,!0);c.__noInsertionPoint=!d.hasInsertionPoint;let f=c.nodeList=Array(e.length);c.$={};for(let k=0,l=e.length,m;k<l&&(m=e[k]);k++){let n=f[k]=Xb(c,m);m.id&&(c.$[m.id]=n);var g=n,h=d;m.templateInfo&&(g._templateInfo=m.templateInfo,g._parentTemplateInfo=h);g=n;h=m;if(h.events&&h.events.length)for(let p=0,q=h.events,A;p<q.length&&(A=q[p]);p++)this._addMethodEventListenerToNode(g,A.name,A.value,this)}return c}_addMethodEventListenerToNode(c,d,e,f){e=Kd(f||c,d,e);this._addEventListenerToNode(c,
d,e);return e}_addEventListenerToNode(c,d,e){c.addEventListener(d,e)}_removeEventListenerFromNode(c,d,e){c.removeEventListener(d,e)}}return a});let za=0;const Aa=[],r={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},af=/[A-Z]/,Vc=(b,a,c,d,e)=>{var f=e?Y(b):b;if(a=a[f])for(f=0;f<a.length;f++){var g=a[f];if(g.info.lastRun!==za&&(!e||mb(b,g.trigger))){g.info.lastRun=za;g=g.info;var h=c,k=
d;let l=0,m=h.length-1,n=-1;for(;l<=m;){const p=l+m>>1,q=k.get(h[p].methodInfo)-k.get(g.methodInfo);if(0>q)l=p+1;else if(0<q)m=p-1;else{n=p;break}}0>n&&(n=m+1);h.splice(n,0,g)}}},Rd=[],Wc=RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})",
"g"),cf=C(b=>{const a=$e(Xe(b));class c extends a{constructor(){super();this.__isPropertyEffectsClient=!0;this.__dataClientsReady;this.__dataPendingClients;this.__dataToNotify;this.__dataLinkedPaths;this.__dataHasPaths;this.__dataCompoundStorage;this.__dataHost;this.__dataTemp;this.__dataClientsInitialized;this.__data;this.__dataPending;this.__dataOld;this.__computeEffects;this.__computeInfo;this.__reflectEffects;this.__notifyEffects;this.__propagateEffects;this.__observeEffects;this.__readOnly;this.__templateInfo;
this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return r}_initializeProperties(){super._initializeProperties();this._registerHost();this.__dataClientsReady=!1;this.__dataLinkedPaths=this.__dataToNotify=this.__dataPendingClients=null;this.__dataHasPaths=!1;this.__dataCompoundStorage=this.__dataCompoundStorage||null;this.__dataHost=this.__dataHost||null;this.__dataTemp={};this.__dataClientsInitialized=!1}_registerHost(){if(Ha.length){let d=Ha[Ha.length-1];d._enqueueClient(this);this.__dataHost=
d}}_initializeProtoProperties(d){this.__data=Object.create(d);this.__dataPending=Object.create(d);this.__dataOld={}}_initializeInstanceProperties(d){let e=this[r.READ_ONLY];for(let f in d)e&&e[f]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[f]=this.__dataPending[f]=d[f])}_addPropertyEffect(d,e,f){this._createPropertyAccessor(d,e==r.READ_ONLY);let g=lb(this,e,!0)[d];g||=this[e][d]=[];g.push(f)}_removePropertyEffect(d,e,f){d=lb(this,e,!0)[d];f=d.indexOf(f);
0<=f&&d.splice(f,1)}_hasPropertyEffect(d,e){e=this[e];return!(!e||!e[d])}_hasReadOnlyEffect(d){return this._hasPropertyEffect(d,r.READ_ONLY)}_hasNotifyEffect(d){return this._hasPropertyEffect(d,r.NOTIFY)}_hasReflectEffect(d){return this._hasPropertyEffect(d,r.REFLECT)}_hasComputedEffect(d){return this._hasPropertyEffect(d,r.COMPUTE)}_setPendingPropertyOrPath(d,e,f,g){if(g||Y(Array.isArray(d)?d[0]:d)!==d){if(!g&&(g=G(this,d),d=Vb(this,d,e),!d||!super._shouldPropertyChange(d,e,g)))return!1;this.__dataHasPaths=
!0;if(this._setPendingProperty(d,e,f)){if(f=this.__dataLinkedPaths)for(let h in f)g=f[h],0===d.indexOf(h+".")?(g+=d.slice(h.length),this._setPendingPropertyOrPath(g,e,!0,!0)):0===d.indexOf(g+".")&&(g=h+d.slice(g.length),this._setPendingPropertyOrPath(g,e,!0,!0));return!0}}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[d])return this._setPendingProperty(d,e,f);this[d]=e}return!1}_setUnmanagedPropertyToNode(d,e,f){if(f!==d[e]||"object"==typeof f)"className"===e&&(d=Z(d)),d[e]=f}_setPendingProperty(d,
e,f){let g=this.__dataHasPaths&&0<=d.indexOf(".");if(this._shouldPropertyChange(d,e,(g?this.__dataTemp:this.__data)[d])){this.__dataPending||(this.__dataPending={},this.__dataOld={});d in this.__dataOld||(this.__dataOld[d]=this.__data[d]);g?this.__dataTemp[d]=e:this.__data[d]=e;this.__dataPending[d]=e;if(g||this[r.NOTIFY]&&this[r.NOTIFY][d])this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[d]=f;return!0}return!1}_setProperty(d,e){this._setPendingProperty(d,e,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&
this._flushProperties()}_enqueueClient(d){this.__dataPendingClients=this.__dataPendingClients||[];d!==this&&this.__dataPendingClients.push(d)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let d=this.__dataPendingClients;if(d){this.__dataPendingClients=null;for(let e=0;e<d.length;e++){let f=d[e];f.__dataEnabled?f.__dataPending&&f._flushProperties():f._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(d,
e){for(let f in d)!e&&this[r.READ_ONLY]&&this[r.READ_ONLY][f]||this._setPendingPropertyOrPath(f,d[f],!0);this._invalidateProperties()}ready(){this._flushProperties();this.__dataClientsReady||this._flushClients();this.__dataPending&&this._flushProperties()}_propertiesChanged(d,e,f){d=this.__dataHasPaths;this.__dataHasPaths=!1;var g;if(g=this[r.COMPUTE])if(Pe){za++;var h=Nd(this),k=[];for(var l in e)Vc(l,g,k,h,d);for(;l=k.shift();)$b(this,"",e,f,l)&&Vc(l.methodInfo,g,k,h,d);Object.assign(f,this.__dataOld);
Object.assign(e,this.__dataPending);this.__dataPending=null}else for(h=e;ya(this,g,h,f,d);)Object.assign(f,this.__dataOld),Object.assign(e,this.__dataPending),h=this.__dataPending,this.__dataPending=null;g=this.__dataToNotify;this.__dataToNotify=null;this._propagatePropertyChanges(e,f,d);this._flushClients();ya(this,this[r.REFLECT],e,f,d);ya(this,this[r.OBSERVE],e,f,d);if(g){h=this[r.NOTIFY];let v;k=za++;for(let I in g)if(g[I]){if(l=h){var m=h;l=k;var n=I,p=e,q=f,A=d;let y=!1,F=A?Y(n):n;if(m=m[F])for(let Ia=
0,bf=m.length,T;Ia<bf&&(T=m[Ia]);Ia++)T.info&&T.info.lastRun===l||A&&!mb(n,T.trigger)||(T.info&&(T.info.lastRun=l),T.fn(this,n,p,q,T.info,A,void 0),y=!0);l=y}if(l)v=!0;else{if(l=d)l=I,n=e,p=Y(l),p!==l?(p=Na(p)+"-changed",Zb(this,p,n[l],l),l=!0):l=!1;l&&(v=!0)}}let z;v&&(z=this.__dataHost)&&z._invalidateProperties&&z._invalidateProperties()}1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(d,e,f){this[r.PROPAGATE]&&ya(this,this[r.PROPAGATE],d,e,f);this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,
d,e,f)}_runEffectsForTemplate(d,e,f,g){const h=(k,l)=>{ya(this,d.propertyEffects,k,f,l,d.nodeList);for(let m=d.firstChild;m;m=m.nextSibling)this._runEffectsForTemplate(m,k,f,l)};d.runEffects?d.runEffects(h,e,g):h(e,g)}linkPaths(d,e){d=xa(d);e=xa(e);this.__dataLinkedPaths=this.__dataLinkedPaths||{};this.__dataLinkedPaths[d]=e}unlinkPaths(d){d=xa(d);this.__dataLinkedPaths&&delete this.__dataLinkedPaths[d]}notifySplices(d,e){let f={path:""};d=G(this,d,f);ec(this,d,f.path,e)}get(d,e){return G(e||this,
d)}set(d,e,f){f?Vb(f,d,e):this[r.READ_ONLY]&&this[r.READ_ONLY][d]||this._setPendingPropertyOrPath(d,e,!0)&&this._invalidateProperties()}push(d,...e){let f={path:""};d=G(this,d,f);let g=d.length,h=d.push(...e);e.length&&Ba(this,d,f.path,g,e.length,[]);return h}pop(d){let e={path:""};d=G(this,d,e);let f=!!d.length,g=d.pop();f&&Ba(this,d,e.path,d.length,0,[g]);return g}splice(d,e,f,...g){let h={path:""},k=G(this,d,h);0>e?e=k.length-Math.floor(-e):e&&=Math.floor(e);let l;l=2===arguments.length?k.splice(e):
k.splice(e,f,...g);(g.length||l.length)&&Ba(this,k,h.path,e,g.length,l);return l}shift(d){let e={path:""};d=G(this,d,e);let f=!!d.length,g=d.shift();f&&Ba(this,d,e.path,0,0,[g]);return g}unshift(d,...e){let f={path:""};d=G(this,d,f);let g=d.unshift(...e);e.length&&Ba(this,d,f.path,0,e.length,[]);return g}notifyPath(d,e){if(1==arguments.length){var f={path:""};e=G(this,d,f);f=f.path}else f=Array.isArray(d)?xa(d):d;this._setPendingPropertyOrPath(f,e,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(d,
e){this._addPropertyEffect(d,r.READ_ONLY);e&&(this["_set"+Td(d)]=function(f){this._setProperty(d,f)})}_createPropertyObserver(d,e,f){let g={property:d,method:e,dynamicFn:!!f};this._addPropertyEffect(d,r.OBSERVE,{fn:Yb,info:g,trigger:{name:d}});f&&this._addPropertyEffect(e,r.OBSERVE,{fn:Yb,info:g,trigger:{name:e}})}_createMethodObserver(d,e){let f=pb(d);if(!f)throw Error("Malformed observer expression '"+d+"'");bc(this,f,r.OBSERVE,nb,null,e)}_createNotifyingProperty(d){this._addPropertyEffect(d,r.NOTIFY,
{fn:Ld,info:{eventName:Na(d)+"-changed",property:d}})}_createReflectedProperty(d){let e=this.constructor.attributeNameForProperty(d);"-"===e[0]?console.warn("Property "+d+" cannot be reflected to attribute "+e+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(d,r.REFLECT,{fn:Md,info:{attrName:e}})}_createComputedProperty(d,e,f){let g=pb(e);if(!g)throw Error("Malformed computed expression '"+e+"'");e=bc(this,g,r.COMPUTE,
$b,d,f);lb(this,"__computeInfo")[d]=e}_marshalArgs(d,e,f){const g=this.__data,h=[];for(let k=0,l=d.length;k<l;k++){let {name:m,structured:n,wildcard:p,value:q,literal:A}=d[k];if(!A)if(p){const v=0===e.indexOf(m+"."),z=dc(g,f,v?e:m);q={path:v?e:m,value:z,base:v?G(g,m):z}}else q=n?dc(g,f,m):g[m];if(qb&&!this._overrideLegacyUndefined&&void 0===q&&1<d.length)return Aa;h[k]=q}return h}static addPropertyEffect(d,e,f){this.prototype._addPropertyEffect(d,e,f)}static createPropertyObserver(d,e,f){this.prototype._createPropertyObserver(d,
e,f)}static createMethodObserver(d,e){this.prototype._createMethodObserver(d,e)}static createNotifyingProperty(d){this.prototype._createNotifyingProperty(d)}static createReadOnlyProperty(d,e){this.prototype._createReadOnlyProperty(d,e)}static createReflectedProperty(d){this.prototype._createReflectedProperty(d)}static createComputedProperty(d,e,f){this.prototype._createComputedProperty(d,e,f)}static bindTemplate(d){return this.prototype._bindTemplate(d)}_bindTemplate(d,e){let f=this.constructor._parseTemplate(d),
g=this.__preBoundTemplateInfo==f;if(!g)for(let h in f.propertyEffects)this._createPropertyAccessor(h);e?(f=Object.create(f),f.wasPreBound=g,this.__templateInfo?(d=d._parentTemplateInfo||this.__templateInfo,e=d.lastChild,f.parent=d,d.lastChild=f,(f.previousSibling=e)?e.nextSibling=f:d.firstChild=f):this.__templateInfo=f):this.__preBoundTemplateInfo=f;return f}static _addTemplatePropertyEffect(d,e,f){(d.hostProps=d.hostProps||{})[e]=!0;d=d.propertyEffects=d.propertyEffects||{};(d[e]=d[e]||[]).push(f)}_stampTemplate(d,
e){e=e||this._bindTemplate(d,!0);Ha.push(this);d=super._stampTemplate(d,e);Ha.pop();e.nodeList=d.nodeList;if(!e.wasPreBound){var f=e.childNodes=[];for(var g=d.firstChild;g;g=g.nextSibling)f.push(g)}d.templateInfo=e;let {nodeList:h,nodeInfoList:k}=e;if(k.length)for(let m=0;m<k.length;m++){let n=h[m],p=k[m].bindings;if(p)for(let q=0;q<p.length;q++){let A=p[q];f=n;g=A;if(g.isCompound){let v=f.__dataCompoundStorage||(f.__dataCompoundStorage={});var l=g.parts;let z=Array(l.length);for(let I=0;I<l.length;I++)z[I]=
l[I].literal;l=g.target;v[l]=z;g.literal&&"property"==g.kind&&("className"===l&&(f=Z(f)),f[l]=g.literal)}Qd(n,this,A)}n.__dataHost=this}this.__dataClientsReady&&(this._runEffectsForTemplate(e,this.__data,null,!1),this._flushClients());return d}_removeBoundDom(d){d=d.templateInfo;const {previousSibling:e,nextSibling:f,parent:g}=d;e?e.nextSibling=f:g&&(g.firstChild=f);f?f.previousSibling=e:g&&(g.lastChild=e);d.nextSibling=d.previousSibling=null;d=d.childNodes;for(let h=0;h<d.length;h++){let k=d[h];
Z(Z(k).parentNode).removeChild(k)}}static _parseTemplateNode(d,e,f){let g=a._parseTemplateNode.call(this,d,e,f);if(d.nodeType===Node.TEXT_NODE){let h=this._parseBindings(d.textContent,e);h&&(d.textContent=cc(h)||" ",ob(this,e,f,"text","textContent",h),g=!0)}return g}static _parseTemplateNodeAttribute(d,e,f,g,h){let k=this._parseBindings(h,e);if(k){h=g;let l="property";af.test(g)?l="attribute":"$"==g[g.length-1]&&(g=g.slice(0,-1),l="attribute");let m=cc(k);m&&"attribute"==l&&("class"==g&&d.hasAttribute("class")&&
(m+=" "+d.getAttribute(g)),d.setAttribute(g,m));"attribute"==l&&"disable-upgrade$"==h&&d.setAttribute(g,"");"input"===d.localName&&"value"===h&&d.setAttribute(h,"");d.removeAttribute(h);"property"===l&&(g=Wb(g));ob(this,e,f,l,g,k,m);return!0}return a._parseTemplateNodeAttribute.call(this,d,e,f,g,h)}static _parseTemplateNestedTemplate(d,e,f){let g=a._parseTemplateNestedTemplate.call(this,d,e,f);const h=d.parentNode,k=f.templateInfo,l="dom-if"===h.localName,m="dom-repeat"===h.localName;Oc&&(l||m)&&
(h.removeChild(d),f=f.parentInfo,f.templateInfo=k,f.noted=!0,g=!1);d=k.hostProps;if(Qe&&l)d&&(e.hostProps=Object.assign(e.hostProps||{},d),Oc||(f.parentInfo.noted=!0));else for(let n in d)ob(this,e,f,"property","_host_"+n,[{mode:"{",source:n,dependencies:[n],hostProp:!0}]);return g}static _parseBindings(d,e){let f=[];for(var g=0,h;null!==(h=Wc.exec(d));){h.index>g&&f.push({literal:d.slice(g,h.index)});g=h[1][0];let m=!!h[2];h=h[3].trim();let n=!1,p="";var k=-1;"{"==g&&0<(k=h.indexOf("::"))&&(p=h.substring(k+
2),h=h.substring(0,k),n=!0);k=pb(h);let q=[];if(k){let {args:A,methodName:v}=k;for(var l=0;l<A.length;l++){let z=A[l];z.literal||q.push(z)}if((l=e.dynamicFns)&&l[v]||k.static)q.push(v),k.dynamicFn=!0}else q.push(h);f.push({source:h,mode:g,negate:m,customEvent:n,signature:k,dependencies:q,event:p});g=Wc.lastIndex}g&&g<d.length&&(d=d.substring(g))&&f.push({literal:d});return f.length?f:null}static _evaluateBinding(d,e,f,g,h,k){d=e.signature?nb(d,f,g,h,e.signature):f!=e.source?G(d,e.source):k&&0<=f.indexOf(".")?
G(d,f):d.__data[f];e.negate&&(d=!d);return d}}return c}),Ha=[],df=C(b=>{function a(e){e=Object.getPrototypeOf(e);return e.prototype instanceof d?e:null}function c(e){if(!e.hasOwnProperty("__ownProperties")){var f=null;if(e.hasOwnProperty("properties")){var g=e.properties;if(g){f=g;g={};for(let h in f){const k=f[h];g[h]="function"===typeof k?{type:k}:k}f=g}}e.__ownProperties=f}return e.__ownProperties}b=Rc(b);class d extends b{static get observedAttributes(){if(!this.hasOwnProperty("__observedAttributes")){const e=
this._properties;this.__observedAttributes=e?Object.keys(e).map(f=>this.prototype._addPropertyToAttributeMap(f)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty("__finalized")){const e=a(this);e&&e.finalize();this.__finalized=!0;this._finalizeClass()}}static _finalizeClass(){const e=c(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty("__properties")){const e=a(this);this.__properties=Object.assign({},e&&e._properties,c(this))}return this.__properties}static typeForProperty(e){return(e=
this._properties[e])&&e.type}_initializeProperties(){this.constructor.finalize();super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback();this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return d}),Xc=window.ShadyCSS&&window.ShadyCSS.cssBuild,ef=C(b=>{function a(e,f,g,h){if(!Xc){const p=f.content.querySelectorAll("style"),q=Tb(f);var k=Hd(g),l=f.content.firstElementChild;for(var m=0;m<k.length;m++){var n=
k[m];n.textContent=e._processStyleText(n.textContent,h);f.content.insertBefore(n,l)}k=0;for(l=0;l<q.length;l++)m=q[l],n=p[k],n!==m?(m=m.cloneNode(!0),n.parentNode.insertBefore(m,n)):k++,m.textContent=e._processStyleText(m.textContent,h)}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(f,g);if(Re&&Xc&&Je&&(f=f.content.querySelectorAll("style"))){let p="";Array.from(f).forEach(q=>{p+=q.textContent;q.parentNode.removeChild(q)});e._styleSheet=new CSSStyleSheet;e._styleSheet.replaceSync(p)}}const c=df(cf(b));
class d extends c{static get polymerElementVersion(){return"3.5.1"}static _finalizeClass(){c._finalizeClass.call(this);var e;this.hasOwnProperty("__ownObservers")||(this.__ownObservers=this.hasOwnProperty("observers")?this.observers:null);(e=this.__ownObservers)&&this.createObservers(e,this._properties);this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&("string"===typeof e?(console.error("template getter must return HTMLTemplateElement"),e=null):Me||(e=e.cloneNode(!0)));this.prototype._template=
e}static createProperties(e){for(let l in e){var f=this.prototype,g=l,h=e[l],k=e;h.computed&&(h.readOnly=!0);h.computed&&(f._hasReadOnlyEffect(g)?console.warn(`Cannot redefine computed property '${g}'.`):f._createComputedProperty(g,h.computed,k));h.readOnly&&!f._hasReadOnlyEffect(g)?f._createReadOnlyProperty(g,!h.computed):!1===h.readOnly&&f._hasReadOnlyEffect(g)&&console.warn(`Cannot make readOnly property '${g}' non-readOnly.`);h.reflectToAttribute&&!f._hasReflectEffect(g)?f._createReflectedProperty(g):
!1===h.reflectToAttribute&&f._hasReflectEffect(g)&&console.warn(`Cannot make reflected property '${g}' non-reflected.`);h.notify&&!f._hasNotifyEffect(g)?f._createNotifyingProperty(g):!1===h.notify&&f._hasNotifyEffect(g)&&console.warn(`Cannot make notify property '${g}' non-notify.`);h.observer&&f._createPropertyObserver(g,h.observer,k[h.observer]);f._addPropertyToAttributeMap(g)}}static createObservers(e,f){const g=this.prototype;for(let h=0;h<e.length;h++)g._createMethodObserver(e[h],f)}static get template(){if(!this.hasOwnProperty("_template")){var e=
this.prototype.hasOwnProperty("_template")?this.prototype._template:void 0;"function"===typeof e&&(e=e());if(void 0===e){if(e=this.hasOwnProperty("is")){e=this.is;let f=null;if(e&&(!Db||Le)&&(f=ka.import(e,"template"),Db&&!f))throw Error(`strictTemplatePolicy: expecting dom-module or null template for ${e}`);e=f}e=e||Object.getPrototypeOf(this.prototype).constructor.template}this._template=e}return this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty("_importPath")){var e=
this.importMeta;this._importPath=e?kb(e.url):(e=ka.import(this.is))&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}return this._importPath}constructor(){super();this._template;this._importPath;this.rootPath;this.importPath;this.root;this.$}_initializeProperties(){this.constructor.finalize();this.constructor._finalizeTemplate(this.localName);super._initializeProperties();this.rootPath=Ke;this.importPath=this.constructor.importPath;var e=this.constructor;if(!e.hasOwnProperty("__propertyDefaults")){e.__propertyDefaults=
null;var f=e._properties;for(let g in f){let h=f[g];"value"in h&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[g]=h)}}if(e=e.__propertyDefaults)for(let g in e)f=e[g],this._canApplyPropertyDefault(g)&&(f="function"==typeof f.value?f.value.call(this):f.value,this._hasAccessor(g)?this._setPendingProperty(g,f,!0):this[g]=f)}_canApplyPropertyDefault(e){return!this.hasOwnProperty(e)}static _processStyleText(e,f){return jb(e,f)}static _finalizeTemplate(e){const f=this.prototype._template;
if(f&&!f.__polymerFinalized){f.__polymerFinalized=!0;var g=this.importPath;g=g?wa(g):"";a(this,f,e,g);this.prototype._bindTemplate(f)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this);super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$);super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root));super._readyClients()}_attachDom(e){const f=Z(this);if(f.attachShadow)return e?
(f.shadowRoot||(f.attachShadow({mode:"open",shadyUpgradeFragment:e}),f.shadowRoot.appendChild(e),this.constructor._styleSheet&&(f.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),Oe&&window.ShadyDOM&&window.ShadyDOM.flushInitial(f.shadowRoot),f.shadowRoot):null;throw Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root \x3d this;` before `ready`.");}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,
f){!f&&this.importPath&&(f=wa(this.importPath));return wa(e,f)}static _parseTemplateContent(e,f,g){f.dynamicFns=f.dynamicFns||this._properties;return c._parseTemplateContent.call(this,e,f,g)}static _addTemplatePropertyEffect(e,f,g){!Ne||f in this._properties||g.info.part.signature&&g.info.part.signature.static||g.info.part.hostProp||e.nestedTemplate||console.warn(`Property '${f}' used in template but not declared in 'properties'; `+"attribute will not be observed.");return c._addTemplatePropertyEffect.call(this,
e,f,g)}}return d}),Yc=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:b=>b}),Fb=function(b,...a){ff(b,a);const c=document.createElement("template");a=a.reduce((d,e,f)=>{if(e instanceof HTMLTemplateElement)e=e.innerHTML;else throw Error(`non-template value passed to Polymer's html function: ${e}`);return d+e+b[f+1]},b[0]);Yc&&(a=Yc.createHTML(a));c.innerHTML=a;return c},ff=(b,a)=>{if(!Array.isArray(b)||!Array.isArray(b.raw)||a.length!==b.length-1)throw new TypeError("Invalid call to the html template tag");
},Ja=ef(HTMLElement);let Zc=0,fc=0;const la=[];let rb=!1;const U={after(b){return{run(a){return window.setTimeout(a,b)},cancel(a){window.clearTimeout(a)}}},run(b,a){return window.setTimeout(b,a)},cancel(b){window.clearTimeout(b)}},V={run(b){return window.requestAnimationFrame(b)},cancel(b){window.cancelAnimationFrame(b)}},$c={run(b){return window.requestIdleCallback?window.requestIdleCallback(b):window.setTimeout(b,16)},cancel(b){window.cancelIdleCallback?window.cancelIdleCallback(b):window.clearTimeout(b)}},
M={run(b){rb||(rb=!0,queueMicrotask(()=>Ud()));la.push(b);b=Zc;Zc+=1;return b},cancel(b){const a=b-fc;if(0<=a){if(!la[a])throw Error(`invalid async handle: ${b}`);la[a]=null}}},ma=new Set;class x{static debounce(b,a,c){b instanceof x?b._cancelAsync():b=new x;b.setConfig(a,c);return b}constructor(){this._timer=this._callback=this._asyncModule=null}setConfig(b,a){this._asyncModule=b;this._callback=a;this._timer=this._asyncModule.run(()=>{this._timer=null;ma.delete(this);this._callback()})}cancel(){this.isActive()&&
(this._cancelAsync(),ma.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}}const Ka=()=>{let b;do b=Vd();while(b)},N=[];(new MutationObserver(function(){const b=document.documentElement.getAttribute("dir");N.forEach(a=>{sb(a,b)})})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const Gb=b=>class extends b{static get properties(){return{dir:{type:String,
value:"",reflectToAttribute:!0,converter:{fromAttribute:a=>a?a:"",toAttribute:a=>""===a?null:a}}}}get __isRTL(){return"rtl"===this.getAttribute("dir")}connectedCallback(){super.connectedCallback();if(!this.hasAttribute("dir")||this.__restoreSubscription)this.__subscribe(),sb(this,document.documentElement.getAttribute("dir"),null)}attributeChangedCallback(a,c,d){super.attributeChangedCallback(a,c,d);if("dir"===a){a=document.documentElement.getAttribute("dir");var e=d===a&&-1===N.indexOf(this),f=!d&&
c&&-1===N.indexOf(this);c=d!==a&&c===a;e||f?(this.__subscribe(),sb(this,a,d)):c&&this.__unsubscribe()}}disconnectedCallback(){super.disconnectedCallback();this.__restoreSubscription=N.includes(this);this.__unsubscribe()}_valueToNodeAttribute(a,c,d){("dir"!==d||""!==c||a.hasAttribute("dir"))&&super._valueToNodeAttribute(a,c,d)}_attributeToProperty(a,c,d){"dir"!==a||c?super._attributeToProperty(a,c,d):this.dir=""}__subscribe(){N.includes(this)||N.push(this)}__unsubscribe(){N.includes(this)&&N.splice(N.indexOf(this),
1)}};class fa{constructor(b,a){this.__host=b;this.__callback=a;this.__currentSlots=[];this.__onMutation=this.__onMutation.bind(this);this.__observer=new MutationObserver(this.__onMutation);this.__observer.observe(b,{childList:!0});this.__initialCallDebouncer=x.debounce(this.__initialCallDebouncer,M,()=>this.__onMutation())}disconnect(){this.__observer.disconnect();this.__initialCallDebouncer.cancel();this.__toggleSlotChangeListeners(!1)}flush(){this.__onMutation()}__toggleSlotChangeListeners(b){this.__currentSlots.forEach(a=>
{b?a.addEventListener("slotchange",this.__onMutation):a.removeEventListener("slotchange",this.__onMutation)})}__onMutation(){const b=!this.__currentColumns;this.__currentColumns||(this.__currentColumns=[]);const a=fa.getColumns(this.__host),c=a.filter(f=>!this.__currentColumns.includes(f)),d=this.__currentColumns.filter(f=>!a.includes(f)),e=this.__currentColumns.some((f,g)=>f!==a[g]);this.__currentColumns=a;this.__toggleSlotChangeListeners(!1);this.__currentSlots=[...this.__host.children].filter(f=>
f instanceof HTMLSlotElement);this.__toggleSlotChangeListeners(!0);(b||c.length||d.length||e)&&this.__callback(c,d)}static __isColumnElement(b){return b.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(b.localName)}static getColumns(b){const a=[],c=b._isColumnElement||fa.__isColumnElement;[...b.children].forEach(d=>{c(d)?a.push(d):d instanceof HTMLSlotElement&&[...d.assignedElements({flatten:!0})].filter(e=>c(e)).forEach(e=>a.push(e))});return a}}const ad=b=>class extends b{static get properties(){return{resizable:{type:Boolean,
sync:!0,value(){if("vaadin-grid-column-group"!==this.localName){var a=this.parentNode;return a&&"vaadin-grid-column-group"===a.localName?a.resizable||!1:!1}}},frozen:{type:Boolean,value:!1,sync:!0},frozenToEnd:{type:Boolean,value:!1,sync:!0},rowHeader:{type:Boolean,value:!1,sync:!0},hidden:{type:Boolean,value:!1,sync:!0},header:{type:String,sync:!0},textAlign:{type:String,sync:!0},headerPartName:{type:String,sync:!0},footerPartName:{type:String,sync:!0},_lastFrozen:{type:Boolean,value:!1,sync:!0},
_bodyContentHidden:{type:Boolean,value:!1,sync:!0},_firstFrozenToEnd:{type:Boolean,value:!1,sync:!0},_order:{type:Number,sync:!0},_reorderStatus:{type:Boolean,sync:!0},_emptyCells:Array,_headerCell:Object,_footerCell:Object,_grid:Object,__initialized:{type:Boolean,value:!0},headerRenderer:{type:Function,sync:!0},_headerRenderer:{type:Function,computed:"_computeHeaderRenderer(headerRenderer, header, __initialized)",sync:!0},footerRenderer:{type:Function,sync:!0},_footerRenderer:{type:Function,computed:"_computeFooterRenderer(footerRenderer, __initialized)",
sync:!0},__gridColumnElement:{type:Boolean,value:!0}}}static get observers(){return"_widthChanged(width, _headerCell, _footerCell, _cells);_frozenChanged(frozen, _headerCell, _footerCell, _cells);_frozenToEndChanged(frozenToEnd, _headerCell, _footerCell, _cells);_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells);_textAlignChanged(textAlign, _cells, _headerCell, _footerCell);_orderChanged(_order, _headerCell, _footerCell, _cells);_lastFrozenChanged(_lastFrozen);_firstFrozenToEndChanged(_firstFrozenToEnd);_onRendererOrBindingChanged(_renderer, _cells, _bodyContentHidden, path);_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header);_onFooterRendererOrBindingChanged(_footerRenderer, _footerCell);_resizableChanged(resizable, _headerCell);_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells);_hiddenChanged(hidden, _headerCell, _footerCell, _cells);_rowHeaderChanged(rowHeader, _cells);__headerFooterPartNameChanged(_headerCell, _footerCell, headerPartName, footerPartName)".split(";")}get _grid(){this._gridValue||
(this._gridValue=this._findHostGrid());return this._gridValue}get _allCells(){return[].concat(this._cells||[]).concat(this._emptyCells||[]).concat(this._headerCell).concat(this._footerCell).filter(a=>a)}connectedCallback(){super.connectedCallback();requestAnimationFrame(()=>{this._grid&&this._allCells.forEach(a=>{a._content.parentNode||this._grid.appendChild(a._content)})})}disconnectedCallback(){super.disconnectedCallback();requestAnimationFrame(()=>{this._grid||this._allCells.forEach(a=>{a._content.parentNode&&
a._content.parentNode.removeChild(a._content)})});this._gridValue=void 0}ready(){super.ready();gc(this)}_findHostGrid(){let a=this;for(;a&&!/^vaadin.*grid(-pro)?$/u.test(a.localName);)a=a.assignedSlot?a.assignedSlot.parentNode:a.parentNode;return a||void 0}_renderHeaderAndFooter(){this._renderHeaderCellContent(this._headerRenderer,this._headerCell);this._renderFooterCellContent(this._footerRenderer,this._footerCell)}_flexGrowChanged(a){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("flexGrow");
this._allCells.forEach(c=>{c.style.flexGrow=a})}_orderChanged(a){this._allCells.forEach(c=>{c.style.order=a})}_widthChanged(a){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("width");this._allCells.forEach(c=>{c.style.width=a})}_frozenChanged(a){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozen",a);this._allCells.forEach(c=>{aa(c,"frozen",a)});this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_frozenToEndChanged(a){this.parentElement&&
this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozenToEnd",a);this._allCells.forEach(c=>{this._grid&&c.parentElement===this._grid.$.sizer||aa(c,"frozen-to-end",a)});this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_lastFrozenChanged(a){this._allCells.forEach(c=>{aa(c,"last-frozen",a)});this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._lastFrozen=a)}_firstFrozenToEndChanged(a){this._allCells.forEach(c=>{this._grid&&
c.parentElement===this._grid.$.sizer||aa(c,"first-frozen-to-end",a)});this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._firstFrozenToEnd=a)}_rowHeaderChanged(a,c){c&&c.forEach(d=>{d.setAttribute("role",a?"rowheader":"gridcell")})}_generateHeader(a){return a.substr(a.lastIndexOf(".")+1).replace(/([A-Z])/gu,"-$1").toLowerCase().replace(/-/gu," ").replace(/^./u,c=>c.toUpperCase())}_reorderStatusChanged(a){const c=this.__previousReorderStatus,d=c?`reorder-${c}-cell`:"",e=
`reorder-${a}-cell`;this._allCells.forEach(f=>{aa(f,"reorder-status",a,e,d)});this.__previousReorderStatus=a}_resizableChanged(a,c){void 0!==a&&void 0!==c&&c&&[c].concat(this._emptyCells).forEach(d=>{if(d){var e=d.querySelector('[part~\x3d"resize-handle"]');e&&d.removeChild(e);a&&(e=document.createElement("div"),e.setAttribute("part","resize-handle"),d.appendChild(e))}})}_textAlignChanged(a){if(void 0!==a&&void 0!==this._grid)if(-1===["start","end","center"].indexOf(a))console.warn('textAlign can only be set as "start", "end" or "center"');
else{var c;"ltr"===getComputedStyle(this._grid).direction?"start"===a?c="left":"end"===a&&(c="right"):"start"===a?c="right":"end"===a&&(c="left");this._allCells.forEach(d=>{d._content.style.textAlign=a;getComputedStyle(d._content).textAlign!==a&&(d._content.style.textAlign=c)})}}_hiddenChanged(a){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("hidden",a);!!a!==!!this._previousHidden&&this._grid&&(!0===a&&this._allCells.forEach(c=>{c._content.parentNode&&
c._content.parentNode.removeChild(c._content)}),this._grid._debouncerHiddenChanged=x.debounce(this._grid._debouncerHiddenChanged,V,()=>{this._grid&&this._grid._renderColumnTree&&this._grid._renderColumnTree(this._grid._columnTree)}),this._grid._debounceUpdateFrozenColumn&&this._grid._debounceUpdateFrozenColumn(),this._grid._resetKeyboardNavigation&&this._grid._resetKeyboardNavigation());this._previousHidden=a}_runRenderer(a,c,d){const e=d&&d.item&&!c.parentElement.hidden;if(e||a===this._headerRenderer||
a===this._footerRenderer)c=[c._content,this],e&&c.push(d),a.apply(this,c)}__renderCellsContent(a,c){!this.hidden&&this._grid&&c.forEach(d=>{if(d.parentElement){var e=this._grid.__getRowModel(d.parentElement);a&&(d._renderer!==a&&this._clearCellContent(d),d._renderer=a,this._runRenderer(a,d,e))}})}_clearCellContent(a){a._content.innerHTML="";delete a._content._$litPart$}_renderHeaderCellContent(a,c){c&&a&&(this.__renderCellsContent(a,[c]),this._grid&&c.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(c.parentElement))}_onHeaderRendererOrBindingChanged(a,
c,...d){this._renderHeaderCellContent(a,c)}__headerFooterPartNameChanged(a,c,d,e){[{cell:a,partName:d},{cell:c,partName:e}].forEach(({cell:f,partName:g})=>{f&&(f.part.remove(...(f.__customParts||[])),f.__customParts=g?g.trim().split(" "):[],f.part.add(...f.__customParts))})}_renderBodyCellsContent(a,c){c&&a&&this.__renderCellsContent(a,c)}_onRendererOrBindingChanged(a,c,...d){this._renderBodyCellsContent(a,c)}_renderFooterCellContent(a,c){c&&a&&(this.__renderCellsContent(a,[c]),this._grid&&c.parentElement&&
this._grid.__debounceUpdateHeaderFooterRowVisibility(c.parentElement))}_onFooterRendererOrBindingChanged(a,c){this._renderFooterCellContent(a,c)}__setTextContent(a,c){a.textContent!==c&&(a.textContent=c)}__textHeaderRenderer(){this.__setTextContent(this._headerCell._content,this.header)}_defaultHeaderRenderer(){this.path&&this.__setTextContent(this._headerCell._content,this._generateHeader(this.path))}_defaultRenderer(a,c,{item:d}){this.path&&this.__setTextContent(a,tb(this.path,d))}_defaultFooterRenderer(){}_computeHeaderRenderer(a,
c){return a?a:void 0!==c&&null!==c?this.__textHeaderRenderer:this._defaultHeaderRenderer}_computeRenderer(a){return a?a:this._defaultRenderer}_computeFooterRenderer(a){return a?a:this._defaultFooterRenderer}},gf=b=>class extends ad(Gb(b)){static get properties(){return{width:{type:String,value:"100px",sync:!0},flexGrow:{type:Number,value:1,sync:!0},renderer:{type:Function,sync:!0},_renderer:{type:Function,computed:"_computeRenderer(renderer, __initialized)",sync:!0},path:{type:String,sync:!0},autoWidth:{type:Boolean,
value:!1},_focusButtonMode:{type:Boolean,value:!1},_cells:{type:Array,sync:!0}}}};class bd extends gf(Ja){static get is(){return"vaadin-grid-column"}}X(bd);const cd=C(b=>"function"===typeof b.prototype.addController?b:class extends b{constructor(){super();this.__controllers=new Set}connectedCallback(){super.connectedCallback();this.__controllers.forEach(a=>{a.hostConnected&&a.hostConnected()})}disconnectedCallback(){super.disconnectedCallback();this.__controllers.forEach(a=>{a.hostDisconnected&&a.hostDisconnected()})}addController(a){this.__controllers.add(a);
void 0!==this.$&&this.isConnected&&a.hostConnected&&a.hostConnected()}removeController(a){this.__controllers.delete(a)}}),Yd=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Qa=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;window.Vaadin=window.Vaadin||{};const dd=function(b,a){if(window.Vaadin.developmentMode)return nc(b,a)};if(void 0===window.Vaadin.developmentMode){var hf=window.Vaadin;try{var ed=localStorage.getItem("vaadin.developmentmode.force")?!0:0<=
["localhost","127.0.0.1"].indexOf(window.location.hostname)?Qa?!Xd():!Wd():!1}catch(b){ed=!1}hf.developmentMode=ed}window.Vaadin||(window.Vaadin={});window.Vaadin.registrations||(window.Vaadin.registrations=[]);window.Vaadin.developmentModeCallback||(window.Vaadin.developmentModeCallback={});window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){"function"===typeof dd&&dd(Zd)};let Hb;const fd=new Set,gd=b=>class extends Gb(b){static finalize(){super.finalize();const {is:a}=this;
a&&!fd.has(a)&&(window.Vaadin.registrations.push(this),fd.add(a),window.Vaadin.developmentModeCallback&&(Hb=x.debounce(Hb,$c,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),ma.add(Hb)))}constructor(){super();null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add \x3c!DOCTYPE html\x3e to the HTML document.')}};let db=!1;window.addEventListener("keydown",()=>{db=!0},{capture:!0});window.addEventListener("mousedown",()=>
{db=!1},{capture:!0});const Ib=C(b=>class extends b{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0}}}_disabledChanged(a){this._setAriaDisabled(a)}_setAriaDisabled(a){a?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}}),hd=b=>class extends Ib(b){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(a,
c){super._disabledChanged(a,c);a?(void 0!==this.tabindex&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):c&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(a){this.disabled&&-1!==a&&(this._lastTabIndex=a,this.tabindex=-1)}},id=/Android/u.test(navigator.userAgent),jf=/Chrome/u.test(navigator.userAgent)&&/Google Inc/u.test(navigator.vendor),kf=/Firefox/u.test(navigator.userAgent),lf=/^iPad/u.test(navigator.platform)||/^Mac/u.test(navigator.platform)&&1<navigator.maxTouchPoints,jd=/^iPhone/u.test(navigator.platform)||
lf,kd=/^((?!chrome|android).)*safari/iu.test(navigator.userAgent);try{document.createEvent("TouchEvent");var ld=!0}catch(b){ld=!1}const md=ld;class mf{constructor(b,a){this.slot=b;this.callback=a;this._storedNodes=[];this._scheduled=this._connected=!1;this._boundSchedule=()=>{this._schedule()};this.connect();this._schedule()}connect(){this.slot.addEventListener("slotchange",this._boundSchedule);this._connected=!0}disconnect(){this.slot.removeEventListener("slotchange",this._boundSchedule);this._connected=
!1}_schedule(){this._scheduled||(this._scheduled=!0,queueMicrotask(()=>{this.flush()}))}flush(){this._connected&&(this._scheduled=!1,this._processNodes())}_processNodes(){const b=this.slot.assignedNodes({flatten:!0});let a=[];const c=[],d=[];b.length&&(a=b.filter(e=>!this._storedNodes.includes(e)));this._storedNodes.length&&this._storedNodes.forEach((e,f)=>{const g=b.indexOf(e);-1===g?c.push(e):g!==f&&d.push(e)});(a.length||c.length||d.length)&&this.callback({addedNodes:a,movedNodes:d,removedNodes:c});
this._storedNodes=b}}let nf=0;class Jb extends EventTarget{static generateId(b,a){return`${a||"default"}-${b.localName}-${nf++}`}constructor(b,a,c,d={}){super();const {initializer:e,multiple:f,observe:g,useUniqueId:h}=d;this.host=b;this.slotName=a;this.tagName=c;this.observe="boolean"===typeof g?g:!0;this.multiple="boolean"===typeof f?f:!1;this.slotInitializer=e;f&&(this.nodes=[]);h&&(this.defaultId=this.constructor.generateId(b,a))}hostConnected(){this.initialized||(this.multiple?this.initMultiple():
this.initSingle(),this.observe&&this.observeSlot(),this.initialized=!0)}initSingle(){let b=this.getSlotChild();b?(this.node=b,this.initAddedNode(b)):(b=this.attachDefaultNode(),this.initNode(b))}initMultiple(){var b=this.getSlotChildren();if(0===b.length){if(b=this.attachDefaultNode())this.nodes=[b],this.initNode(b)}else this.nodes=b,b.forEach(a=>{this.initAddedNode(a)})}attachDefaultNode(){const {host:b,slotName:a,tagName:c}=this;let d=this.defaultNode;!d&&c&&(d=document.createElement(c),d instanceof
Element&&(""!==a&&d.setAttribute("slot",a),this.defaultNode=this.node=d));d&&b.appendChild(d);return d}getSlotChildren(){const {slotName:b}=this;return Array.from(this.host.childNodes).filter(a=>a.nodeType===Node.ELEMENT_NODE&&a.slot===b||a.nodeType===Node.TEXT_NODE&&a.textContent.trim()&&""===b)}getSlotChild(){return this.getSlotChildren()[0]}initNode(b){const {slotInitializer:a}=this;a&&a(b,this.host)}initCustomNode(b){}teardownNode(b){}initAddedNode(b){b!==this.defaultNode&&(this.initCustomNode(b),
this.initNode(b))}observeSlot(){var {slotName:b}=this;b=this.host.shadowRoot.querySelector(""===b?"slot:not([name])":`slot[name=${b}]`);this.__slotObserver=new mf(b,({addedNodes:a,removedNodes:c})=>{const d=this.multiple?this.nodes:[this.node];a=a.filter(e=>!(e.nodeType===Node.TEXT_NODE&&""===e.textContent.trim())&&!d.includes(e));c.length&&(this.nodes=d.filter(e=>!c.includes(e)),c.forEach(e=>{this.teardownNode(e)}));a&&0<a.length&&(this.multiple?(this.defaultNode&&this.defaultNode.remove(),this.nodes=
[...d,...a].filter(e=>e!==this.defaultNode),a.forEach(e=>{this.initAddedNode(e)})):(this.node&&this.node.remove(),this.node=a[0],this.initAddedNode(this.node)))})}}class nd extends Jb{constructor(b){super(b,"tooltip");this.setTarget(b)}initCustomNode(b){b.target=this.target;void 0!==this.ariaTarget&&(b.ariaTarget=this.ariaTarget);void 0!==this.context&&(b.context=this.context);void 0!==this.manual&&(b.manual=this.manual);void 0!==this.opened&&(b.opened=this.opened);void 0!==this.position&&(b._position=
this.position);void 0!==this.shouldShow&&(b.shouldShow=this.shouldShow);this.__notifyChange()}teardownNode(){this.__notifyChange()}setAriaTarget(b){this.ariaTarget=b;const a=this.node;a&&(a.ariaTarget=b)}setContext(b){this.context=b;const a=this.node;a&&(a.context=b)}setManual(b){this.manual=b;const a=this.node;a&&(a.manual=b)}setOpened(b){this.opened=b;const a=this.node;a&&(a.opened=b)}setPosition(b){this.position=b;const a=this.node;a&&(a._position=b)}setShouldShow(b){this.shouldShow=b;const a=
this.node;a&&(a.shouldShow=b)}setTarget(b){this.target=b;const a=this.node;a&&(a.target=b)}__notifyChange(){this.dispatchEvent(new CustomEvent("tooltip-changed",{detail:{node:this.node}}))}}const od=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/u),of=od&&8<=od[1];class pd{constructor({createElements:b,updateElement:a,scrollTarget:c,scrollContainer:d,elementsContainer:e,reorderElements:f}){this.isAttached=!0;this._vidxOffset=0;this.createElements=b;this.updateElement=a;this.scrollTarget=
c;this.scrollContainer=d;this.elementsContainer=e||d;this.reorderElements=f;this._maxPages=1.3;this.__placeholderHeight=200;this.__elementHeightQueue=Array(10);this.timeouts={SCROLL_REORDER:500,IGNORE_WHEEL:500,FIX_INVALID_ITEM_POSITIONING:100};this.__resizeObserver=new ResizeObserver(()=>this._resizeHandler());"visible"===getComputedStyle(this.scrollTarget).overflow&&(this.scrollTarget.style.overflow="auto");"static"===getComputedStyle(this.scrollContainer).position&&(this.scrollContainer.style.position=
"relative");this.__resizeObserver.observe(this.scrollTarget);this.scrollTarget.addEventListener("scroll",()=>this._scrollHandler());this._scrollLineHeight=this._getScrollLineHeight();this.scrollTarget.addEventListener("wheel",g=>this.__onWheel(g));this.reorderElements&&(this.scrollTarget.addEventListener("mousedown",()=>{this.__mouseDown=!0}),this.scrollTarget.addEventListener("mouseup",()=>{this.__mouseDown=!1;this.__pendingReorder&&this.__reorderElements()}))}get scrollOffset(){return 0}get adjustedFirstVisibleIndex(){return this.firstVisibleIndex+
this._vidxOffset}get adjustedLastVisibleIndex(){return this.lastVisibleIndex+this._vidxOffset}get _maxVirtualIndexOffset(){return this.size-this._virtualCount}__hasPlaceholders(){return this.__getVisibleElements().some(b=>b.__virtualizerPlaceholder)}scrollToIndex(b){if("number"===typeof b&&!isNaN(b)&&0!==this.size&&this.scrollTarget.offsetHeight){delete this.__pendingScrollToIndex;3>=this._physicalCount&&this.flush();b=this._clamp(b,0,this.size-1);var a=this.__getVisibleElements().length,c=Math.floor(b/
this.size*this._virtualCount);this._virtualCount-c<a?(c=this._virtualCount-(this.size-b),this._vidxOffset=this._maxVirtualIndexOffset):c<a?1E3>b?(c=b,this._vidxOffset=0):(c=1E3,this._vidxOffset=b-c):this._vidxOffset=b-c;this.__skipNextVirtualIndexAdjust=!0;super.scrollToIndex(c);this.adjustedFirstVisibleIndex!==b&&this._scrollTop<this._maxScrollTop&&!this.grid&&(this._scrollTop-=this.__getIndexScrollOffset(b)||0);this._scrollHandler();this.__hasPlaceholders()&&(this.__pendingScrollToIndex=b)}}flush(){const b=
this._physicalCount;0!==this.scrollTarget.offsetHeight&&(this._resizeHandler(),Ka(),this._scrollHandler(),this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.flush(),this.__scrollReorderDebouncer&&this.__scrollReorderDebouncer.flush(),this.__debouncerWheelAnimationFrame&&this.__debouncerWheelAnimationFrame.flush(),this._physicalCount!==b&&this.flush())}update(b=0,a=this.size-1){const c=[];this.__getVisibleElements().forEach(d=>{d.__virtualIndex>=b&&d.__virtualIndex<=
a&&(this.__updateElement(d,d.__virtualIndex,!0),c.push(d))});this.__afterElementsUpdated(c)}_updateMetrics(b){Ka();let a=0,c=0;const d=this._physicalAverageCount,e=this._physicalAverage;this._iterateItems((f,g)=>{c+=this._physicalSizes[f];this._physicalSizes[f]=Math.ceil(this.__getBorderBoxHeight(this._physicalItems[f]));a+=this._physicalSizes[f];this._physicalAverageCount+=this._physicalSizes[f]?1:0},b);this._physicalSize=this._physicalSize+a-c;this._physicalAverageCount!==d&&(this._physicalAverage=
Math.round((e*d+a)/this._physicalAverageCount))}__getBorderBoxHeight(b){var a=getComputedStyle(b);b=parseFloat(a.height)||0;if("border-box"===a.boxSizing)return b;const c=parseFloat(a.paddingBottom)||0,d=parseFloat(a.paddingTop)||0,e=parseFloat(a.borderBottomWidth)||0;a=parseFloat(a.borderTopWidth)||0;return b+c+d+e+a}__updateElement(b,a,c){b.__virtualizerPlaceholder&&(b.style.paddingTop="",b.__virtualizerPlaceholder=!1);this.__preventElementUpdates||b.__lastUpdatedIndex===a&&!c||(this.updateElement(b,
a),b.__lastUpdatedIndex=a)}__afterElementsUpdated(b){b.forEach(a=>{const c=a.offsetHeight;0===c?(a.style.paddingTop=`${this.__placeholderHeight}px`,a.__virtualizerPlaceholder=!0,this.__placeholderClearDebouncer=x.debounce(this.__placeholderClearDebouncer,V,()=>this._resizeHandler())):(this.__elementHeightQueue.push(c),this.__elementHeightQueue.shift(),a=this.__elementHeightQueue.filter(d=>void 0!==d),this.__placeholderHeight=Math.round(a.reduce((d,e)=>d+e,0)/a.length))});void 0===this.__pendingScrollToIndex||
this.__hasPlaceholders()||this.scrollToIndex(this.__pendingScrollToIndex)}__getIndexScrollOffset(b){const a=this.__getVisibleElements().find(c=>c.__virtualIndex===b);return a?this.scrollTarget.getBoundingClientRect().top-a.getBoundingClientRect().top:void 0}get size(){return this.__size}set size(b){if(b!==this.size){this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.cancel();this._debouncers&&this._debouncers._increasePoolIfNeeded&&this._debouncers._increasePoolIfNeeded.cancel();
this.__preventElementUpdates=!0;if(0<b){var a=this.adjustedFirstVisibleIndex;var c=this.__getIndexScrollOffset(a)}this.__size=b;this._itemsChanged({path:"items"});Ka();0<b&&(a=Math.min(a,b-1),this.scrollToIndex(a),b=this.__getIndexScrollOffset(a),void 0!==c&&void 0!==b&&(this._scrollTop+=c-b));this.__preventElementUpdates=!1;this._isVisible||this._assignModels();this.elementsContainer.children.length||requestAnimationFrame(()=>this._resizeHandler());this._resizeHandler();Ka()}}get _scrollTop(){return this.scrollTarget.scrollTop}set _scrollTop(b){this.scrollTarget.scrollTop=
b}get items(){return{length:Math.min(this.size,1E5)}}get offsetHeight(){return this.scrollTarget.offsetHeight}get $(){return{items:this.scrollContainer}}updateViewportBoundaries(){const b=window.getComputedStyle(this.scrollTarget);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(b["padding-top"],10);this._isRTL="rtl"===b.direction;this._viewportWidth=this.elementsContainer.offsetWidth;this._viewportHeight=this.scrollTarget.offsetHeight;this._scrollPageHeight=this._viewportHeight-this._scrollLineHeight;
this.grid&&this._updateGridMetrics()}setAttribute(){}_createPool(b){b=this.createElements(b);const a=document.createDocumentFragment();b.forEach(c=>{c.style.position="absolute";a.appendChild(c);this.__resizeObserver.observe(c)});this.elementsContainer.appendChild(a);return b}_assignModels(b){const a=[];this._iterateItems((c,d)=>{c=this._physicalItems[c];c.hidden=d>=this.size;c.hidden?delete c.__lastUpdatedIndex:(c.__virtualIndex=d+(this._vidxOffset||0),this.__updateElement(c,c.__virtualIndex),a.push(c))},
b);this.__afterElementsUpdated(a)}_isClientFull(){setTimeout(()=>{this.__clientFull=!0});return this.__clientFull||super._isClientFull()}translate3d(b,a,c,d){d.style.transform=`translateY(${a})`}toggleScrollListener(){}_scrollHandler(){if(0!==this.scrollTarget.offsetHeight){this._adjustVirtualIndexOffset(this._scrollTop-(this.__previousScrollTop||0));var b=this.scrollTarget.scrollTop-this._scrollPosition;super._scrollHandler();if(0!==this._physicalCount){const a=0<=b,c=this._getReusables(!a);c.indexes.length&&
(this._physicalTop=c.physicalTop,a?(this._virtualStart-=c.indexes.length,this._physicalStart-=c.indexes.length):(this._virtualStart+=c.indexes.length,this._physicalStart+=c.indexes.length),this._resizeHandler())}b&&(this.__fixInvalidItemPositioningDebouncer=x.debounce(this.__fixInvalidItemPositioningDebouncer,U.after(this.timeouts.FIX_INVALID_ITEM_POSITIONING),()=>this.__fixInvalidItemPositioning()));this.reorderElements&&(this.__scrollReorderDebouncer=x.debounce(this.__scrollReorderDebouncer,U.after(this.timeouts.SCROLL_REORDER),
()=>this.__reorderElements()));this.__previousScrollTop=this._scrollTop;0===this._scrollTop&&0!==this.firstVisibleIndex&&0<Math.abs(b)&&this.scrollToIndex(0)}}__fixInvalidItemPositioning(){if(this.scrollTarget.isConnected){var b=this._physicalBottom<this._scrollBottom,a=0===this.adjustedFirstVisibleIndex,c=this.adjustedLastVisibleIndex===this.size-1;if(this._physicalTop>this._scrollTop&&!a||b&&!c)a=this._ratio,this._ratio=0,this._scrollPosition=this._scrollTop+(b?-1:1),this._scrollHandler(),this._ratio=
a}}__onWheel(b){if(!b.ctrlKey&&!this._hasScrolledAncestor(b.target,b.deltaX,b.deltaY)){var a=b.deltaY;b.deltaMode===WheelEvent.DOM_DELTA_LINE?a*=this._scrollLineHeight:b.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(a*=this._scrollPageHeight);this._deltaYAcc||(this._deltaYAcc=0);if(this._wheelAnimationFrame)this._deltaYAcc+=a,b.preventDefault();else{a+=this._deltaYAcc;this._deltaYAcc=0;this._wheelAnimationFrame=!0;this.__debouncerWheelAnimationFrame=x.debounce(this.__debouncerWheelAnimationFrame,V,()=>
{this._wheelAnimationFrame=!1});var c=Math.abs(b.deltaX)+Math.abs(a);this._canScroll(this.scrollTarget,b.deltaX,a)?(b.preventDefault(),this.scrollTarget.scrollTop+=a,this.scrollTarget.scrollLeft+=b.deltaX,this._ignoreNewWheel=this._hasResidualMomentum=!0,this._debouncerIgnoreNewWheel=x.debounce(this._debouncerIgnoreNewWheel,U.after(this.timeouts.IGNORE_WHEEL),()=>{this._ignoreNewWheel=!1})):this._hasResidualMomentum&&c<=this._previousMomentum||this._ignoreNewWheel?b.preventDefault():c>this._previousMomentum&&
(this._hasResidualMomentum=!1);this._previousMomentum=c}}}_hasScrolledAncestor(b,a,c){if(b===this.scrollTarget||b===this.scrollTarget.getRootNode().host)return!1;if(this._canScroll(b,a,c)&&-1!==["auto","scroll"].indexOf(getComputedStyle(b).overflow))return!0;if(b!==this&&b.parentElement)return this._hasScrolledAncestor(b.parentElement,a,c)}_canScroll(b,a,c){return 0<c&&b.scrollTop<b.scrollHeight-b.offsetHeight||0>c&&0<b.scrollTop||0<a&&b.scrollLeft<b.scrollWidth-b.offsetWidth||0>a&&0<b.scrollLeft}_increasePoolIfNeeded(b){2<
this._physicalCount&&b?super._increasePoolIfNeeded(Math.max(b,Math.min(100,Math.ceil(this._optPhysicalSize/this._physicalAverage)-this._physicalCount))):super._increasePoolIfNeeded(b)}_getScrollLineHeight(){const b=document.createElement("div");b.style.fontSize="initial";b.style.display="none";document.body.appendChild(b);const a=window.getComputedStyle(b).fontSize;document.body.removeChild(b);return a?window.parseInt(a):void 0}__getVisibleElements(){return Array.from(this.elementsContainer.children).filter(b=>
!b.hidden)}__reorderElements(){if(this.__mouseDown)this.__pendingReorder=!0;else{this.__pendingReorder=!1;var b=this._virtualStart+(this._vidxOffset||0),a=this.__getVisibleElements(),c=a.find(d=>d.contains(this.elementsContainer.getRootNode().activeElement)||d.contains(this.scrollTarget.getRootNode().activeElement))||a[0];if(c){b=c.__virtualIndex-b;c=a.indexOf(c)-b;if(0<c)for(b=0;b<c;b++)this.elementsContainer.appendChild(a[b]);else if(0>c)for(c=a.length+c;c<a.length;c++)this.elementsContainer.insertBefore(a[c],
a[0]);if(kd){const {transform:d}=this.scrollTarget.style;this.scrollTarget.style.transform="translateZ(0)";setTimeout(()=>{this.scrollTarget.style.transform=d})}}}}_adjustVirtualIndexOffset(b){const a=this._maxVirtualIndexOffset;this._virtualCount>=this.size?this._vidxOffset=0:this.__skipNextVirtualIndexAdjust?this.__skipNextVirtualIndexAdjust=!1:1E4<Math.abs(b)?this._vidxOffset=Math.round(this._scrollTop/(this.scrollTarget.scrollHeight-this.scrollTarget.clientHeight)*a):(b=this._vidxOffset,0===this._scrollTop?
(this._vidxOffset=0,b!==this._vidxOffset&&super.scrollToIndex(0)):1E3>this.firstVisibleIndex&&0<this._vidxOffset&&(this._vidxOffset-=Math.min(this._vidxOffset,100),super.scrollToIndex(this.firstVisibleIndex+(b-this._vidxOffset))),this._scrollTop>=this._maxScrollTop&&0<this._maxScrollTop?(this._vidxOffset=a,b!==this._vidxOffset&&super.scrollToIndex(this._virtualCount-1)):this.firstVisibleIndex>this._virtualCount-1E3&&this._vidxOffset<a&&(this._vidxOffset+=Math.min(a-this._vidxOffset,100),super.scrollToIndex(this.firstVisibleIndex-
(this._vidxOffset-b))))}}Object.setPrototypeOf(pd.prototype,{_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_templateCost:0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+
this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return this._physicalSize-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){return Math.max(0,this._virtualCount-this._physicalCount)},get _virtualStart(){return this._virtualStartVal||0},set _virtualStart(b){this._virtualStartVal=b=this._clamp(b,0,this._maxVirtualStart)},get _physicalStart(){return this._physicalStartVal||
0},set _physicalStart(b){b%=this._physicalCount;0>b&&(b=this._physicalCount+b);this._physicalStartVal=b},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},get _physicalCount(){return this._physicalCountVal||0},set _physicalCount(b){this._physicalCountVal=b},get _optPhysicalSize(){return 0===this._viewportHeight?Infinity:this._viewportHeight*this._maxPages},get _isVisible(){return!(!this.offsetWidth&&!this.offsetHeight)},get firstVisibleIndex(){let b=this._firstVisibleIndexVal;
if(null==b){let a=this._physicalTop+this._scrollOffset;this._firstVisibleIndexVal=b=this._iterateItems((c,d)=>{a+=this._getPhysicalSizeIncrement(c);if(a>this._scrollPosition)return d})||0}return b},get lastVisibleIndex(){let b=this._lastVisibleIndexVal;if(null==b){let a=this._physicalTop+this._scrollOffset;this._iterateItems((c,d)=>{a<this._scrollBottom&&(b=d);a+=this._getPhysicalSizeIncrement(c)});this._lastVisibleIndexVal=b}return b},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},
_scrollHandler(){var b=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop));let a=b-this._scrollPosition;var c=0<=a;this._scrollPosition=b;this._lastVisibleIndexVal=this._firstVisibleIndexVal=null;Math.abs(a)>this._physicalSize&&0<this._physicalSize?(a-=this._scrollOffset,c=Math.round(a/this._physicalAverage),this._virtualStart+=c,this._physicalStart+=c,this._physicalTop=Math.min(Math.floor(this._virtualStart)*this._physicalAverage,this._scrollPosition),this._update()):0<this._physicalCount&&
(b=this._getReusables(c),c?(this._physicalTop=b.physicalTop,this._virtualStart+=b.indexes.length,this._physicalStart+=b.indexes.length):(this._virtualStart-=b.indexes.length,this._physicalStart-=b.indexes.length),this._update(b.indexes,c?null:b.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),M))},_getReusables(b){let a;let c;const d=[],e=this._hiddenContentSize*this._ratio,f=this._virtualStart,g=this._virtualEnd,h=this._physicalCount;let k=this._physicalTop+
this._scrollOffset;var l=this._physicalBottom+this._scrollOffset;const m=this._scrollPosition,n=this._scrollBottom;b?(a=this._physicalStart,l=m-k):(a=this._physicalEnd,l-=n);for(;;){c=this._getPhysicalSizeIncrement(a);l-=c;if(d.length>=h||l<=e)break;if(b){if(g+d.length+1>=this._virtualCount)break;if(k+c>=m-this._scrollOffset)break;d.push(a);k+=c;a=(a+1)%h}else{if(0>=f-d.length)break;if(k+this._physicalSize-c<=n)break;d.push(a);k-=c;a=0===a?h-1:a-1}}return{indexes:d,physicalTop:k-this._scrollOffset}},
_update(b,a){if(!(b&&0===b.length||0===this._physicalCount)){this._assignModels(b);this._updateMetrics(b);if(a)for(;a.length;)b=a.pop(),this._physicalTop-=this._getPhysicalSizeIncrement(b);this._positionItems();this._updateScrollerSize()}},_isClientFull(){return 0!==this._scrollBottom&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded(b){b=this._clamp(this._physicalCount+b,3,this._virtualCount-this._virtualStart)-this._physicalCount;var a=Math.round(.5*
this._physicalCount);if(!(0>b)){if(0<b){a=window.performance.now();[].push.apply(this._physicalItems,this._createPool(b));for(let c=0;c<b;c++)this._physicalSizes.push(0);this._physicalCount+=b;this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart+=b);this._update();this._templateCost=(window.performance.now()-a)/b;a=Math.round(.5*this._physicalCount)}this._virtualEnd>=this._virtualCount-
1||0===a||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,a)),$c):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,a),M))}},_render(){if(this.isAttached&&this._isVisible)if(0!==this._physicalCount){const b=this._getReusables(!0);this._physicalTop=b.physicalTop;this._virtualStart+=b.indexes.length;this._physicalStart+=b.indexes.length;
this._update(b.indexes);this._update();this._increasePoolIfNeeded(0)}else 0<this._virtualCount&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(3))},_itemsChanged(b){"items"===b.path&&(this._physicalTop=this._virtualStart=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._lastVisibleIndexVal=this._firstVisibleIndexVal=null,this._physicalItems||(this._physicalItems=[]),this._physicalSizes||(this._physicalSizes=[]),this._physicalStart=0,this._scrollTop>
this._scrollOffset&&this._resetScrollPosition(0),this._debounce("_render",this._render,V))},_iterateItems(b,a){let c,d,e,f;if(2===arguments.length&&a)for(f=0;f<a.length;f++){if(c=a[f],d=this._computeVidx(c),null!=(e=b.call(this,c,d)))return e}else{c=this._physicalStart;for(d=this._virtualStart;c<this._physicalCount;c++,d++)if(null!=(e=b.call(this,c,d)))return e;for(c=0;c<this._physicalStart;c++,d++)if(null!=(e=b.call(this,c,d)))return e}},_computeVidx(b){return b>=this._physicalStart?this._virtualStart+
(b-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+b},_positionItems(){this._adjustScrollPosition();let b=this._physicalTop;this._iterateItems(a=>{this.translate3d(0,`${b}px`,0,this._physicalItems[a]);b+=this._physicalSizes[a]})},_getPhysicalSizeIncrement(b){return this._physicalSizes[b]},_adjustScrollPosition(){const b=0===this._virtualStart?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(0!==b){this._physicalTop-=b;const a=this._scrollPosition;
!of&&0<a&&this._resetScrollPosition(a-b)}},_resetScrollPosition(b){this.scrollTarget&&0<=b&&(this._scrollPosition=this._scrollTop=b)},_updateScrollerSize(b){const a=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage;this._estScrollHeight=a;if(b||0===this._scrollHeight||this._scrollPosition>=a-this._physicalSize||Math.abs(a-this._scrollHeight)>=this._viewportHeight)this.$.items.style.height=`${a}px`,this._scrollHeight=a},scrollToIndex(b){if(!("number"!==
typeof b||0>b||b>this.items.length-1)&&(Ka(),0!==this._physicalCount)){b=this._clamp(b,0,this._virtualCount-1);if(!this._isIndexRendered(b)||b>=this._maxVirtualStart)this._virtualStart=b-1;this._assignModels();this._updateMetrics();this._physicalTop=this._virtualStart*this._physicalAverage;for(var a=this._physicalStart,c=this._virtualStart,d=0,e=this._hiddenContentSize;c<b&&d<=e;)d+=this._getPhysicalSizeIncrement(a),a=(a+1)%this._physicalCount,c+=1;this._updateScrollerSize(!0);this._positionItems();
this._resetScrollPosition(this._physicalTop+this._scrollOffset+d);this._increasePoolIfNeeded(0);this._lastVisibleIndexVal=this._firstVisibleIndexVal=null}},_resetAverage(){this._physicalAverageCount=this._physicalAverage=0},_resizeHandler(){this._debounce("_render",()=>{this._lastVisibleIndexVal=this._firstVisibleIndexVal=null;this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)},V)},_isIndexRendered(b){return b>=
this._virtualStart&&b<=this._virtualEnd},_getPhysicalIndex(b){return(this._physicalStart+(b-this._virtualStart))%this._physicalCount},_clamp(b,a,c){return Math.min(c,Math.max(a,b))},_debounce(b,a,c){this._debouncers||(this._debouncers={});this._debouncers[b]=x.debounce(this._debouncers[b],c,a.bind(this));ma.add(this._debouncers[b])}});class pf{constructor(b){this.__adapter=new pd(b)}get firstVisibleIndex(){return this.__adapter.adjustedFirstVisibleIndex}get lastVisibleIndex(){return this.__adapter.adjustedLastVisibleIndex}get size(){return this.__adapter.size}set size(b){this.__adapter.size=
b}scrollToIndex(b){this.__adapter.scrollToIndex(b)}update(b=0,a=this.size-1){this.__adapter.update(b,a)}flush(){this.__adapter.flush()}}const qf=b=>class extends b{static get observers(){return["_a11yUpdateGridSize(size, _columnTree)"]}_a11yGetHeaderRowCount(a){return a.filter(c=>c.some(d=>d.headerRenderer||d.path||d.header)).length}_a11yGetFooterRowCount(a){return a.filter(c=>c.some(d=>d.headerRenderer)).length}_a11yUpdateGridSize(a,c){if(void 0!==a&&void 0!==c){var d=c[c.length-1];this.$.table.setAttribute("aria-rowcount",
a+this._a11yGetHeaderRowCount(c)+this._a11yGetFooterRowCount(c));this.$.table.setAttribute("aria-colcount",d&&d.length||0);this._a11yUpdateHeaderRows();this._a11yUpdateFooterRows()}}_a11yUpdateHeaderRows(){H(this.$.header,(a,c)=>{a.setAttribute("aria-rowindex",c+1)})}_a11yUpdateFooterRows(){H(this.$.footer,(a,c)=>{a.setAttribute("aria-rowindex",this._a11yGetHeaderRowCount(this._columnTree)+this.size+c+1)})}_a11yUpdateRowRowindex(a,c){a.setAttribute("aria-rowindex",c+this._a11yGetHeaderRowCount(this._columnTree)+
1)}_a11yUpdateRowSelected(a,c){a.setAttribute("aria-selected",!!c);oa(a,d=>{d.setAttribute("aria-selected",!!c)})}_a11yUpdateRowExpanded(a){this.__isRowExpandable(a)?a.setAttribute("aria-expanded","false"):this.__isRowCollapsible(a)?a.setAttribute("aria-expanded","true"):a.removeAttribute("aria-expanded")}_a11yUpdateRowLevel(a,c){0<c||this.__isRowCollapsible(a)||this.__isRowExpandable(a)?a.setAttribute("aria-level",c+1):a.removeAttribute("aria-level")}_a11ySetRowDetailsCell(a,c){oa(a,d=>{d!==c&&d.setAttribute("aria-controls",
c.id)})}_a11yUpdateCellColspan(a,c){a.setAttribute("aria-colspan",Number(c))}_a11yUpdateSorters(){Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach(a=>{let c=a.parentNode;for(;c&&"vaadin-grid-cell-content"!==c.localName;)c=c.parentNode;c&&c.assignedSlot&&c.assignedSlot.parentNode.setAttribute("aria-sort",{asc:"ascending",desc:"descending"}[String(a.direction)]||"none")})}},rf=b=>{if(!b.parentNode)return!1;const a=Array.from(b.parentNode.querySelectorAll("[tabindex], button, input, select, textarea, object, iframe, a[href], area[href]")).filter(c=>
{c=c.getAttribute("part");return!(c&&c.includes("body-cell"))}).includes(b);return!b.disabled&&a&&b.offsetParent&&"hidden"!==getComputedStyle(b).visibility},sf=b=>class extends b{static get properties(){return{activeItem:{type:Object,notify:!0,value:null,sync:!0}}}ready(){super.ready();this.$.scroller.addEventListener("click",this._onClick.bind(this));this.addEventListener("cell-activate",this._activateItem.bind(this));this.addEventListener("row-activate",this._activateItem.bind(this))}_activateItem(a){if(a=
(a=a.detail.model)?a.item:null)this.activeItem=this._itemsEqual(this.activeItem,a)?null:a}_onClick(a){if(!a.defaultPrevented){var c=a.composedPath();if((c=c[c.indexOf(this.$.table)-3])&&!(-1<c.getAttribute("part").indexOf("details-cell"))){var d=c._content,e=this.getRootNode().activeElement;d.contains(e)||this._isFocusable(a.target)||a.target instanceof HTMLLabelElement||this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(c.parentElement)}}))}}}_isFocusable(a){return rf(a)}},
tf=b=>(a,c)=>{let d=b?[...b]:[];a.filters&&oc(a.filters,"filtering",d)&&(d=ae(d,a.filters));Array.isArray(a.sortOrders)&&a.sortOrders.length&&oc(a.sortOrders,"sorting",d)&&(d=$d(d,a.sortOrders));var e=Math.min(d.length,a.pageSize);a=a.page*e;e=d.slice(a,a+e);c(e,d.length)},uf=b=>class extends b{static get properties(){return{items:{type:Array,sync:!0}}}static get observers(){return["__dataProviderOrItemsChanged(dataProvider, items, isAttached, _filters, _sorters, items.*)"]}__setArrayDataProvider(a){const c=
tf(this.items);c.__items=a;this._arrayDataProvider=c;this.size=a.length;this.dataProvider=c}__dataProviderOrItemsChanged(a,c,d){d&&(this._arrayDataProvider?a!==this._arrayDataProvider?this.items=this._arrayDataProvider=void 0:c?this._arrayDataProvider.__items===c?(this.clearCache(),this.size=this._flatSize):this.__setArrayDataProvider(c):(this.dataProvider=this._arrayDataProvider=void 0,this.size=0,this.clearCache()):c&&this.__setArrayDataProvider(c))}},sc="string"===typeof document.head.style.touchAction,
ub=["mousedown","mousemove","mouseup","click"],ce=[0,1,4,2];try{var qd=1===(new MouseEvent("test",{buttons:1})).buttons}catch(b){qd=!1}const be=qd;(function(){try{const b=Object.defineProperty({},"passive",{get(){}});window.addEventListener("test",null,b);window.removeEventListener("test",null,b)}catch(b){}})();const fe=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/u),he={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0},L={mouse:{target:null,mouseIgnoreJob:null},
touch:{x:0,y:0,id:-1,scrollDecided:!1}},rc=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:b=>b.composedPath&&b.composedPath()||[],vb={},ca=[];wb({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){qa(this.info)},mousedown(b){if(ba(b)){var a=R(b),c=this;qc(this.info,d=>{ba(d)||(Ea("up",a,d),qa(c.info))},d=>{ba(d)&&Ea("up",a,d);qa(c.info)});Ea("down",
a,b)}},touchstart(b){Ea("down",R(b),b.changedTouches[0],b)},touchend(b){Ea("up",R(b),b.changedTouches[0],b)}});wb({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(b){2<this.moves.length&&this.moves.shift();this.moves.push(b)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start";this.info.started=!1;this.info.moves=
[];this.info.x=0;this.info.y=0;this.info.prevent=!1;qa(this.info)},mousedown(b){if(ba(b)){var a=R(b),c=this,d=e=>{const f=e.clientX,g=e.clientY;tc(c.info,f,g)&&(c.info.state=c.info.started?"mouseup"===e.type?"end":"track":"start","start"===c.info.state&&Ta("tap"),c.info.addMove({x:f,y:g}),ba(e)||(c.info.state="end",qa(c.info)),a&&yb(c.info,a,e),c.info.started=!0)};qc(this.info,d,e=>{c.info.started&&d(e);qa(c.info)});this.info.x=b.clientX;this.info.y=b.clientY}},touchstart(b){b=b.changedTouches[0];
this.info.x=b.clientX;this.info.y=b.clientY},touchmove(b){const a=R(b);b=b.changedTouches[0];const c=b.clientX,d=b.clientY;tc(this.info,c,d)&&("start"===this.info.state&&Ta("tap"),this.info.addMove({x:c,y:d}),yb(this.info,a,b),this.info.state="track",this.info.started=!0)},touchend(b){const a=R(b);b=b.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:b.clientX,y:b.clientY}),yb(this.info,a,b))}});wb({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown",
"touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN;this.info.y=NaN;this.info.prevent=!1},mousedown(b){ba(b)&&(this.info.x=b.clientX,this.info.y=b.clientY)},click(b){ba(b)&&uc(this.info,b)},touchstart(b){b=b.changedTouches[0];this.info.x=b.clientX;this.info.y=b.clientY},touchend(b){uc(this.info,b.changedTouches[0],b)}});const vf=b=>class extends b{static get properties(){return{columnReorderingAllowed:{type:Boolean,value:!1},_orderBaseScope:{type:Number,
value:1E7}}}static get observers(){return["_updateOrders(_columnTree)"]}ready(){super.ready();Da(this,"track",this._onTrackEvent);this._reorderGhost=this.shadowRoot.querySelector('[part\x3d"reorder-ghost"]');this.addEventListener("touchstart",this._onTouchStart.bind(this));this.addEventListener("touchmove",this._onTouchMove.bind(this));this.addEventListener("touchend",this._onTouchEnd.bind(this));this.addEventListener("contextmenu",this._onContextMenu.bind(this))}_onContextMenu(a){this.hasAttribute("reordering")&&
(a.preventDefault(),md||this._onTrackEnd())}_onTouchStart(a){this._startTouchReorderTimeout=setTimeout(()=>{this._onTrackStart({detail:{x:a.touches[0].clientX,y:a.touches[0].clientY}})},100)}_onTouchMove(a){this._draggedColumn&&a.preventDefault();clearTimeout(this._startTouchReorderTimeout)}_onTouchEnd(){clearTimeout(this._startTouchReorderTimeout);this._onTrackEnd()}_onTrackEvent(a){if("start"===a.detail.state){var c=a.composedPath();(c=c[c.indexOf(this.$.header)-2])&&c._content&&!c._content.contains(this.getRootNode().activeElement)&&
!this.$.scroller.hasAttribute("column-resizing")&&(this._touchDevice||this._onTrackStart(a))}else"track"===a.detail.state?this._onTrack(a):"end"===a.detail.state&&this._onTrackEnd(a)}_onTrackStart(a){if(this.columnReorderingAllowed){var c=a.composedPath&&a.composedPath();if((!c||!c.some(d=>d.hasAttribute&&d.hasAttribute("draggable")))&&(c=this._cellFromPoint(a.detail.x,a.detail.y))&&c.getAttribute("part").includes("header-cell")){this.toggleAttribute("reordering",!0);for(this._draggedColumn=c._column;1===
this._draggedColumn.parentElement.childElementCount;)this._draggedColumn=this._draggedColumn.parentElement;this._setSiblingsReorderStatus(this._draggedColumn,"allowed");this._draggedColumn._reorderStatus="dragging";this._updateGhost(c);this._reorderGhost.style.visibility="visible";this._updateGhostPosition(a.detail.x,this._touchDevice?a.detail.y-50:a.detail.y);this._autoScroller()}}}_onTrack(a){if(this._draggedColumn){var c=this._cellFromPoint(a.detail.x,a.detail.y);if(c){var d=this._getTargetColumn(c,
this._draggedColumn);if(this._isSwapAllowed(this._draggedColumn,d)&&this._isSwappableByPosition(d,a.detail.x)){c=this._columnTree.findIndex(h=>h.includes(d));c=this._getColumnsInOrder(c);var e=c.indexOf(this._draggedColumn);const f=c.indexOf(d),g=e<f?1:-1;for(;e!==f;e+=g)this._swapColumnOrders(this._draggedColumn,c[e+g])}this._updateGhostPosition(a.detail.x,this._touchDevice?a.detail.y-50:a.detail.y);this._lastDragClientX=a.detail.x}}}_onTrackEnd(){this._draggedColumn&&(this.toggleAttribute("reordering",
!1),this._draggedColumn._reorderStatus="",this._setSiblingsReorderStatus(this._draggedColumn,""),this._lastDragClientX=this._draggedColumn=null,this._reorderGhost.style.visibility="hidden",this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this._getColumnsInOrder()}})))}_getColumnsInOrder(a=this._columnTree.length-1){return this._columnTree[a].filter(c=>!c.hidden).sort((c,d)=>c._order-d._order)}_cellFromPoint(a=0,c=0){this._draggedColumn||this.$.scroller.toggleAttribute("no-content-pointer-events",
!0);a=this.shadowRoot.elementFromPoint(a,c);this.$.scroller.toggleAttribute("no-content-pointer-events",!1);return this._getCellFromElement(a)}_getCellFromElement(a){if(a){if(a._column)return a;const {parentElement:c}=a;if(c&&c._focusButton===a)return c}return null}_updateGhostPosition(a,c){const d=this._reorderGhost.getBoundingClientRect();a-=d.width/2;c-=d.height/2;const e=parseInt(this._reorderGhost._left||0),f=parseInt(this._reorderGhost._top||0);this._reorderGhost._left=e-(d.left-a);this._reorderGhost._top=
f-(d.top-c);this._reorderGhost.style.transform=`translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`}_updateGhost(a){const c=this._reorderGhost;c.textContent=a._content.innerText;const d=window.getComputedStyle(a);"boxSizing display width height background alignItems padding border flex-direction overflow".split(" ").forEach(e=>{c.style[e]=d[e]});return c}_updateOrders(a){void 0!==a&&(a[0].forEach(c=>{c._order=0}),lc(a[0],this._orderBaseScope,0))}_setSiblingsReorderStatus(a,c){H(a.parentNode,
d=>{/column/u.test(d.localName)&&this._isSwapAllowed(d,a)&&(d._reorderStatus=c)})}_autoScroller(){if(this._lastDragClientX){const a=this._lastDragClientX-this.getBoundingClientRect().right+50,c=this.getBoundingClientRect().left-this._lastDragClientX+50;0<a?this.$.table.scrollLeft+=a/10:0<c&&(this.$.table.scrollLeft-=c/10)}this._draggedColumn&&setTimeout(()=>this._autoScroller(),10)}_isSwapAllowed(a,c){if(a&&c){const d=a.parentElement===c.parentElement,e=a.frozen&&c.frozen||a.frozenToEnd&&c.frozenToEnd||
!a.frozen&&!a.frozenToEnd&&!c.frozen&&!c.frozenToEnd;return a!==c&&d&&e}}_isSwappableByPosition(a,c){var d=Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~\x3d"cell"]')).find(f=>a.contains(f._column));const e=this.$.header.querySelector("tr:not([hidden]) [reorder-status\x3ddragging]").getBoundingClientRect();d=d.getBoundingClientRect();return d.left>e.left?c>d.right-e.width:c<d.left+e.width}_swapColumnOrders(a,c){[a._order,c._order]=[c._order,a._order];this._debounceUpdateFrozenColumn();
this._updateFirstAndLastColumn()}_getTargetColumn(a,c){if(a&&c){let d=a._column;for(;d.parentElement!==c.parentElement&&d!==this;)d=d.parentElement;return d.parentElement===c.parentElement?d:a._column}}},wf=b=>class extends b{ready(){super.ready();const a=this.$.scroller;Da(a,"track",this._onHeaderTrack.bind(this));a.addEventListener("touchmove",c=>a.hasAttribute("column-resizing")&&c.preventDefault());a.addEventListener("contextmenu",c=>"resize-handle"===c.target.getAttribute("part")&&c.preventDefault());
a.addEventListener("mousedown",c=>"resize-handle"===c.target.getAttribute("part")&&c.preventDefault())}_onHeaderTrack(a){var c=a.target;if("resize-handle"===c.getAttribute("part")){let h=c.parentElement._column;for(this.$.scroller.toggleAttribute("column-resizing",!0);"vaadin-grid-column-group"===h.localName;)h=h._childColumns.slice(0).sort((l,m)=>l._order-m._order).filter(l=>!l.hidden).pop();c=this.__isRTL;var d=a.detail.x,e=Array.from(this.$.header.querySelectorAll('[part~\x3d"row"]:last-child [part~\x3d"cell"]'));
const k=e.find(l=>l._column===h);if(k.offsetWidth){var f=getComputedStyle(k._content);f=10+parseInt(f.paddingLeft)+parseInt(f.paddingRight)+parseInt(f.borderLeftWidth)+parseInt(f.borderRightWidth)+parseInt(f.marginLeft)+parseInt(f.marginRight);var g=k.offsetWidth;const l=k.getBoundingClientRect();g=k.hasAttribute("frozen-to-end")?g+(c?d-l.right:l.left-d):g+(c?l.left-d:d-l.right);h.width=`${Math.max(f,g)}px`;h.flexGrow=0}e.sort((l,m)=>l._column._order-m._column._order).forEach((l,m,n)=>{m<n.indexOf(k)&&
(l._column.width=`${l.offsetWidth}px`,l._column.flexGrow=0)});(e=this._frozenToEndCells[0])&&this.$.table.scrollWidth>this.$.table.offsetWidth&&(e=e.getBoundingClientRect(),d-=c?e.right:e.left,c&&0>=d||!c&&0<=d)&&(this.$.table.scrollLeft+=d);"end"===a.detail.state&&(this.$.scroller.toggleAttribute("column-resizing",!1),this.dispatchEvent(new CustomEvent("column-resize",{detail:{resizedColumn:h}})));this._resizeHandler()}}};class rd{constructor(b,a,c,d,e){D._defineProperty(this,"context",void 0);D._defineProperty(this,
"size",0);D._defineProperty(this,"pageSize",void 0);D._defineProperty(this,"items",[]);D._defineProperty(this,"pendingRequests",{});D._defineProperty(this,"__subCacheByIndex",{});D._defineProperty(this,"__flatSize",0);this.context=b;this.pageSize=a;this.size=c||0;this.parentCache=d;this.parentCacheIndex=e;this.__flatSize=c||0}get parentItem(){return this.parentCache&&this.parentCache.items[this.parentCacheIndex]}get subCaches(){return Object.values(this.__subCacheByIndex)}get isLoading(){return 0<
Object.keys(this.pendingRequests).length?!0:this.subCaches.some(b=>b.isLoading)}get flatSize(){return this.__flatSize}get effectiveSize(){console.warn("\x3cvaadin-grid\x3e The `effectiveSize` property of ItemCache is deprecated and will be removed in Vaadin 25.");return this.flatSize}recalculateFlatSize(){this.__flatSize=!this.parentItem||this.context.isExpanded(this.parentItem)?this.size+this.subCaches.reduce((b,a)=>{a.recalculateFlatSize();return b+a.flatSize},0):0}setPage(b,a){const c=b*this.pageSize;
a.forEach((d,e)=>{this.items[c+e]=d})}getSubCache(b){return this.__subCacheByIndex[b]}removeSubCache(b){delete this.__subCacheByIndex[b]}removeSubCaches(){this.__subCacheByIndex={}}createSubCache(b){const a=new rd(this.context,this.pageSize,0,this,b);return this.__subCacheByIndex[b]=a}getFlatIndex(b){const a=Math.max(0,Math.min(this.size-1,b));return this.subCaches.reduce((c,d)=>a>d.parentCacheIndex?c+d.flatSize:c,a)}getItemForIndex(b){console.warn("\x3cvaadin-grid\x3e The `getItemForIndex` method of ItemCache is deprecated and will be removed in Vaadin 25.");
({item:b}=Ua(this,b));return b}getCacheAndIndex(b){console.warn("\x3cvaadin-grid\x3e The `getCacheAndIndex` method of ItemCache is deprecated and will be removed in Vaadin 25.");const {cache:a,index:c}=Ua(this,b);return{cache:a,scaledIndex:c}}updateSize(){console.warn("\x3cvaadin-grid\x3e The `updateSize` method of ItemCache is deprecated and will be removed in Vaadin 25.");this.recalculateFlatSize()}ensureSubCacheForScaledIndex(b){console.warn("\x3cvaadin-grid\x3e The `ensureSubCacheForScaledIndex` method of ItemCache is deprecated and will be removed in Vaadin 25.");
this.getSubCache(b)||(b=this.createSubCache(b),this.context.__controller.__loadCachePage(b,0))}get grid(){console.warn("\x3cvaadin-grid\x3e The `grid` property of ItemCache is deprecated and will be removed in Vaadin 25.");return this.context.__controller.host}get itemCaches(){console.warn("\x3cvaadin-grid\x3e The `itemCaches` property of ItemCache is deprecated and will be removed in Vaadin 25.");return this.__subCacheByIndex}}class xf extends EventTarget{constructor(b,{size:a,pageSize:c,isExpanded:d,
getItemId:e,dataProvider:f,dataProviderParams:g}){super();D._defineProperty(this,"host",void 0);D._defineProperty(this,"dataProvider",void 0);D._defineProperty(this,"dataProviderParams",void 0);D._defineProperty(this,"size",void 0);D._defineProperty(this,"pageSize",void 0);D._defineProperty(this,"isExpanded",void 0);D._defineProperty(this,"getItemId",void 0);D._defineProperty(this,"rootCache",void 0);this.host=b;this.pageSize=c;this.getItemId=e;this.isExpanded=d;this.dataProvider=f;this.dataProviderParams=
g;this.rootCache=this.__createRootCache(a)}get flatSize(){return this.rootCache.flatSize}get __cacheContext(){return{isExpanded:this.isExpanded,__controller:this}}isLoading(){return this.rootCache.isLoading}setPageSize(b){this.pageSize=b;this.clearCache()}setDataProvider(b){this.dataProvider=b;this.clearCache()}recalculateFlatSize(){this.rootCache.recalculateFlatSize()}clearCache(){this.rootCache=this.__createRootCache(this.rootCache.size)}getFlatIndexContext(b){return Ua(this.rootCache,b)}getItemContext(b){return vc({getItemId:this.getItemId},
this.rootCache,b)}getFlatIndexByPath(b){return wc(this.rootCache,b)}ensureFlatIndexLoaded(b){const {cache:a,page:c,item:d}=this.getFlatIndexContext(b);d||this.__loadCachePage(a,c)}ensureFlatIndexHierarchy(b){const {cache:a,item:c,index:d}=this.getFlatIndexContext(b);c&&this.isExpanded(c)&&!a.getSubCache(d)&&(b=a.createSubCache(d),this.__loadCachePage(b,0))}loadFirstPage(){this.__loadCachePage(this.rootCache,0)}__createRootCache(b){return new rd(this.__cacheContext,this.pageSize,b)}__loadCachePage(b,
a){if(this.dataProvider&&!b.pendingRequests[a]){var c={page:a,pageSize:this.pageSize,parentItem:b.parentItem};this.dataProviderParams&&(c={...c,...this.dataProviderParams()});var d=(e,f)=>{void 0!==f?b.size=f:c.parentItem&&(b.size=e.length);b.setPage(a,e);this.recalculateFlatSize();this.dispatchEvent(new CustomEvent("page-received"));delete b.pendingRequests[a];this.dispatchEvent(new CustomEvent("page-loaded"))};b.pendingRequests[a]=d;this.dispatchEvent(new CustomEvent("page-requested"));this.dataProvider(c,
d)}}}const yf=b=>class extends b{static get properties(){return{size:{type:Number,notify:!0,sync:!0},_flatSize:{type:Number,sync:!0},pageSize:{type:Number,value:50,observer:"_pageSizeChanged",sync:!0},dataProvider:{type:Object,notify:!0,observer:"_dataProviderChanged",sync:!0},loading:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0},_hasData:{type:Boolean,value:!1,sync:!0},itemHasChildrenPath:{type:String,value:"children",observer:"__itemHasChildrenPathChanged",sync:!0},itemIdPath:{type:String,
value:null,sync:!0},expandedItems:{type:Object,notify:!0,value:()=>[],sync:!0},__expandedKeys:{type:Object,computed:"__computeExpandedKeys(itemIdPath, expandedItems)"}}}static get observers(){return["_sizeChanged(size)","_expandedItemsChanged(expandedItems)"]}constructor(){super();this._dataProviderController=new xf(this,{size:this.size,pageSize:this.pageSize,getItemId:this.getItemId.bind(this),isExpanded:this._isExpanded.bind(this),dataProvider:this.dataProvider?this.dataProvider.bind(this):null,
dataProviderParams:()=>({sortOrders:this._mapSorters(),filters:this._mapFilters()})});this._dataProviderController.addEventListener("page-requested",this._onDataProviderPageRequested.bind(this));this._dataProviderController.addEventListener("page-received",this._onDataProviderPageReceived.bind(this));this._dataProviderController.addEventListener("page-loaded",this._onDataProviderPageLoaded.bind(this))}get _cache(){console.warn("\x3cvaadin-grid\x3e The `_cache` property is deprecated and will be removed in Vaadin 25.");
return this._dataProviderController.rootCache}get _effectiveSize(){console.warn("\x3cvaadin-grid\x3e The `_effectiveSize` property is deprecated and will be removed in Vaadin 25.");return this._flatSize}_sizeChanged(a){this._dataProviderController.rootCache.size=a;this._dataProviderController.recalculateFlatSize();this._flatSize=this._dataProviderController.flatSize}__itemHasChildrenPathChanged(a,c){(c||"children"!==a)&&this.requestContentUpdate()}_getItem(a,c){if(!(a>=this._flatSize)){c.index=a;
var {item:d}=this._dataProviderController.getFlatIndexContext(a);d?(this.__updateLoading(c,!1),this._updateItem(c,d),this._isExpanded(d)&&this._dataProviderController.ensureFlatIndexHierarchy(a)):(this.__updateLoading(c,!0),this._dataProviderController.ensureFlatIndexLoaded(a))}}__updateLoading(a,c){const d=na(a);Pa(a,"loading",c);Q(d,"loading-row-cell",c)}getItemId(a){return this.itemIdPath?tb(this.itemIdPath,a):a}_isExpanded(a){return this.__expandedKeys&&this.__expandedKeys.has(this.getItemId(a))}_expandedItemsChanged(){this._dataProviderController.recalculateFlatSize();
this._flatSize=this._dataProviderController.flatSize;this.__updateVisibleRows()}__computeExpandedKeys(a,c){a=c||[];const d=new Set;a.forEach(e=>{d.add(this.getItemId(e))});return d}expandItem(a){this._isExpanded(a)||(this.expandedItems=[...this.expandedItems,a])}collapseItem(a){this._isExpanded(a)&&(this.expandedItems=this.expandedItems.filter(c=>!this._itemsEqual(c,a)))}_getIndexLevel(a=0){({level:a}=this._dataProviderController.getFlatIndexContext(a));return a}_loadPage(a,c){console.warn("\x3cvaadin-grid\x3e The `_loadPage` method is deprecated and will be removed in Vaadin 25.");
this._dataProviderController.__loadCachePage(c,a)}_onDataProviderPageRequested(){this._setLoading(!0)}_onDataProviderPageReceived(){this._flatSize=this._dataProviderController.flatSize;this._getRenderedRows().forEach(a=>{this._dataProviderController.ensureFlatIndexHierarchy(a.index)});this._hasData=!0}_onDataProviderPageLoaded(){this._debouncerApplyCachedData=x.debounce(this._debouncerApplyCachedData,U.after(0),()=>{this._setLoading(!1);this._getRenderedRows().forEach(a=>{const {item:c}=this._dataProviderController.getFlatIndexContext(a.index);
c&&this._getItem(a.index,a)});this.__scrollToPendingIndexes();this.__dispatchPendingBodyCellFocus()});this._dataProviderController.isLoading()||this._debouncerApplyCachedData.flush()}__debounceClearCache(){this.__clearCacheDebouncer=x.debounce(this.__clearCacheDebouncer,M,()=>this.clearCache())}clearCache(){this._dataProviderController.clearCache();this._dataProviderController.rootCache.size=this.size;this._dataProviderController.recalculateFlatSize();this._hasData=!1;this.__updateVisibleRows();this.__virtualizer&&
this.__virtualizer.size||this._dataProviderController.loadFirstPage()}_pageSizeChanged(a,c){this._dataProviderController.setPageSize(a);void 0!==c&&a!==c&&this.clearCache()}_checkSize(){void 0===this.size&&0===this._flatSize&&console.warn("The \x3cvaadin-grid\x3e needs the total number of items in order to display rows, which you can specify either by setting the `size` property, or by providing it to the second argument of the `dataProvider` function `callback` call.")}_dataProviderChanged(a,c){this._dataProviderController.setDataProvider(a?
a.bind(this):null);void 0!==c&&this.clearCache();this._ensureFirstPageLoaded();this._debouncerCheckSize=x.debounce(this._debouncerCheckSize,U.after(2E3),this._checkSize.bind(this))}_ensureFirstPageLoaded(){this._hasData||this._dataProviderController.loadFirstPage()}_itemsEqual(a,c){return this.getItemId(a)===this.getItemId(c)}_getItemIndexInArray(a,c){let d=-1;c.forEach((e,f)=>{this._itemsEqual(e,a)&&(d=f)});return d}scrollToIndex(...a){let c;for(;c!==(c=this._dataProviderController.getFlatIndexByPath(a));)this._scrollToFlatIndex(c);
if(this._dataProviderController.isLoading()||!this.clientHeight)this.__pendingScrollToIndexes=a}__scrollToPendingIndexes(){if(this.__pendingScrollToIndexes&&this.$.items.children.length){const a=this.__pendingScrollToIndexes;delete this.__pendingScrollToIndexes;this.scrollToIndex(...a)}}},zf=!("draggable"in document.createElement("div")),Af=b=>class extends b{static get properties(){return{dropMode:{type:String,sync:!0},rowsDraggable:{type:Boolean,sync:!0},dragFilter:{type:Function,sync:!0},dropFilter:{type:Function,
sync:!0},__dndAutoScrollThreshold:{value:50}}}static get observers(){return["_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter, loading)"]}ready(){super.ready();this.$.table.addEventListener("dragstart",this._onDragStart.bind(this));this.$.table.addEventListener("dragend",this._onDragEnd.bind(this));this.$.table.addEventListener("dragover",this._onDragOver.bind(this));this.$.table.addEventListener("dragleave",this._onDragLeave.bind(this));this.$.table.addEventListener("drop",
this._onDrop.bind(this));this.$.table.addEventListener("dragenter",a=>{this.dropMode&&(a.preventDefault(),a.stopPropagation())})}_onDragStart(a){if(this.rowsDraggable){let e=a.target;"vaadin-grid-cell-content"===e.localName&&(e=e.assignedSlot.parentNode.parentNode);if(e.parentNode===this.$.items){a.stopPropagation();this.toggleAttribute("dragging-rows",!0);if(this._safari){const f=e.style.transform;e.style.top=/translateY\((.*)\)/u.exec(f)[1];e.style.transform="none";requestAnimationFrame(()=>{e.style.top=
"";e.style.transform=f})}var c=e.getBoundingClientRect();zf?a.dataTransfer.setDragImage(e):a.dataTransfer.setDragImage(e,a.clientX-c.left,a.clientY-c.top);var d=[e];this._isSelected(e._item)&&(d=this.__getViewportRows().filter(f=>this._isSelected(f._item)).filter(f=>!this.dragFilter||this.dragFilter(this.__getRowModel(f))));a.dataTransfer.setData("text",this.__formatDefaultTransferData(d));Ca(e,{dragstart:1<d.length?`${d.length}`:""});this.style.setProperty("--_grid-drag-start-x",`${a.clientX-c.left+
20}px`);this.style.setProperty("--_grid-drag-start-y",`${a.clientY-c.top+10}px`);requestAnimationFrame(()=>{Ca(e,{dragstart:!1});this.style.setProperty("--_grid-drag-start-x","");this.style.setProperty("--_grid-drag-start-y","")});c=new CustomEvent("grid-dragstart",{detail:{draggedItems:d.map(f=>f._item),setDragData:(f,g)=>a.dataTransfer.setData(f,g),setDraggedItemsCount:f=>e.setAttribute("dragstart",f)}});c.originalEvent=a;this.dispatchEvent(c)}}}_onDragEnd(a){this.toggleAttribute("dragging-rows",
!1);a.stopPropagation();const c=new CustomEvent("grid-dragend");c.originalEvent=a;this.dispatchEvent(c)}_onDragLeave(a){a.stopPropagation();this._clearDragStyles()}_onDragOver(a){if(this.dropMode)if(this._dragOverItem=this._dropLocation=void 0,this.__dndAutoScroll(a.clientY))this._clearDragStyles();else{var c=a.composedPath().find(d=>"tr"===d.localName);if(this._flatSize&&"on-grid"!==this.dropMode)if(c&&c.parentNode===this.$.items){const d=c.getBoundingClientRect();this._dropLocation="on-top";"between"===
this.dropMode?this._dropLocation=a.clientY-d.top<d.bottom-a.clientY?"above":"below":"on-top-or-between"===this.dropMode&&(a.clientY-d.top<d.height/3?this._dropLocation="above":a.clientY-d.top>d.height/3*2&&(this._dropLocation="below"))}else{if(c||"between"!==this.dropMode&&"on-top-or-between"!==this.dropMode)return;c=Array.from(this.$.items.children).filter(d=>!d.hidden).pop();this._dropLocation="below"}else this._dropLocation="empty";c&&c.hasAttribute("drop-disabled")?this._dropLocation=void 0:(a.stopPropagation(),
a.preventDefault(),"empty"===this._dropLocation?this.toggleAttribute("dragover",!0):c?(this._dragOverItem=c._item,c.getAttribute("dragover")!==this._dropLocation&&mc(c,{dragover:this._dropLocation})):this._clearDragStyles())}}__dndAutoScroll(a){if(this.__dndAutoScrolling)return!0;var c=this.$.header.getBoundingClientRect().bottom,d=this.$.footer.getBoundingClientRect().top;c=c-a+this.__dndAutoScrollThreshold;d=a-d+this.__dndAutoScrollThreshold;a=0;0<d?a=2*d:0<c&&(a=2*-c);if(a&&(c=this.$.table.scrollTop,
this.$.table.scrollTop+=a,c!==this.$.table.scrollTop))return this.__dndAutoScrolling=!0,setTimeout(()=>{this.__dndAutoScrolling=!1},20),!0}__getViewportRows(){const a=this.$.header.getBoundingClientRect().bottom,c=this.$.footer.getBoundingClientRect().top;return Array.from(this.$.items.children).filter(d=>{d=d.getBoundingClientRect();return d.bottom>a&&d.top<c})}_clearDragStyles(){this.removeAttribute("dragover");H(this.$.items,a=>{mc(a,{dragover:null})})}_onDrop(a){if(this.dropMode){a.stopPropagation();
a.preventDefault();var c=a.dataTransfer.types&&Array.from(a.dataTransfer.types).map(d=>({type:d,data:a.dataTransfer.getData(d)}));this._clearDragStyles();c=new CustomEvent("grid-drop",{bubbles:a.bubbles,cancelable:a.cancelable,detail:{dropTargetItem:this._dragOverItem,dropLocation:this._dropLocation,dragData:c}});c.originalEvent=a;this.dispatchEvent(c)}}__formatDefaultTransferData(a){return a.map(c=>Array.from(c.children).filter(d=>!d.hidden&&-1===d.getAttribute("part").indexOf("details-cell")).sort((d,
e)=>d._column._order>e._column._order?1:-1).map(d=>d._content.textContent.trim()).filter(d=>d).join("\t")).join("\n")}_dragDropAccessChanged(){this.filterDragAndDrop()}filterDragAndDrop(){H(this.$.items,a=>{a.hidden||this._filterDragAndDrop(a,this.__getRowModel(a))})}_filterDragAndDrop(a,c){const d=this.loading||a.hasAttribute("loading"),e=!this.rowsDraggable||d||this.dragFilter&&!this.dragFilter(c);c=!this.dropMode||d||this.dropFilter&&!this.dropFilter(c);oa(a,f=>{e?f._content.removeAttribute("draggable"):
f._content.setAttribute("draggable",!0)});Ca(a,{"drag-disabled":!!e,"drop-disabled":!!c})}},Bf=b=>class extends b{static get properties(){return{_columnTree:Object}}ready(){super.ready();this._addNodeObserver()}_hasColumnGroups(a){return a.some(c=>"vaadin-grid-column-group"===c.localName)}_getChildColumns(a){return fa.getColumns(a)}_flattenColumnGroups(a){return a.map(c=>"vaadin-grid-column-group"===c.localName?this._getChildColumns(c):[c]).reduce((c,d)=>c.concat(d),[])}_getColumnTree(){var a=fa.getColumns(this);
const c=[a];for(;this._hasColumnGroups(a);)a=this._flattenColumnGroups(a),c.push(a);return c}_debounceUpdateColumnTree(){this.__updateColumnTreeDebouncer=x.debounce(this.__updateColumnTreeDebouncer,M,()=>this._updateColumnTree())}_updateColumnTree(){const a=this._getColumnTree();xc(a,this._columnTree)||(a.forEach(c=>{c.forEach(d=>{d.performUpdate&&d.performUpdate()})}),this._columnTree=a)}_addNodeObserver(){this._observer=new fa(this,(a,c)=>{const d=c.flatMap(e=>e._allCells);a=e=>d.filter(f=>f&&f._content.contains(e)).length;
this.__removeSorters(this._sorters.filter(a));this.__removeFilters(this._filters.filter(a));this._debounceUpdateColumnTree();this._debouncerCheckImports=x.debounce(this._debouncerCheckImports,U.after(2E3),this._checkImports.bind(this));this._ensureFirstPageLoaded()})}_checkImports(){"vaadin-grid-column-group vaadin-grid-filter vaadin-grid-filter-column vaadin-grid-tree-toggle vaadin-grid-selection-column vaadin-grid-sort-column vaadin-grid-sorter".split(" ").forEach(a=>{this.querySelector(a)&&!customElements.get(a)&&
console.warn(`Make sure you have imported the required module for <${a}> element.`)})}_updateFirstAndLastColumn(){Array.from(this.shadowRoot.querySelectorAll("tr")).forEach(a=>this._updateFirstAndLastColumnForRow(a))}_updateFirstAndLastColumnForRow(a){Array.from(a.querySelectorAll('[part~\x3d"cell"]:not([part~\x3d"details-cell"])')).sort((c,d)=>c._column._order-d._column._order).forEach((c,d,e)=>{aa(c,"first-column",0===d);aa(c,"last-column",d===e.length-1)})}_isColumnElement(a){return a.nodeType===
Node.ELEMENT_NODE&&/\bcolumn\b/u.test(a.localName)}},Cf=b=>class extends b{getEventContext(a){const c={};a=a.__composedPath||a.composedPath();const d=a[a.indexOf(this.$.table)-3];if(!d)return c;c.section=["body","header","footer","details"].find(e=>-1<d.getAttribute("part").indexOf(e));d._column&&(c.column=d._column);"body"!==c.section&&"details"!==c.section||Object.assign(c,this.__getRowModel(d.parentElement));return c}},Df=b=>class extends b{static get properties(){return{_filters:{type:Array,value:()=>
[]}}}constructor(){super();this._filterChanged=this._filterChanged.bind(this);this.addEventListener("filter-changed",this._filterChanged)}_filterChanged(a){a.stopPropagation();this.__addFilter(a.target);this.__applyFilters()}__removeFilters(a){0!==a.length&&(this._filters=this._filters.filter(c=>0>a.indexOf(c)),this.__applyFilters())}__addFilter(a){-1===this._filters.indexOf(a)&&this._filters.push(a)}__applyFilters(){this.dataProvider&&this.isAttached&&this.clearCache()}_mapFilters(){return this._filters.map(a=>
({path:a.path,value:a.value}))}},Ef=b=>class extends b{static get properties(){return{_headerFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_itemsFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_footerFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_navigatingIsHidden:Boolean,_focusedItemIndex:{type:Number,value:0},_focusedColumnOrder:Number,_focusedCell:{type:Object,observer:"_focusedCellChanged",sync:!0},interacting:{type:Boolean,value:!1,reflectToAttribute:!0,
readOnly:!0,observer:"_interactingChanged"}}}get __rowFocusMode(){return this.__isRow(this._itemsFocusable)||this.__isRow(this._headerFocusable)||this.__isRow(this._footerFocusable)}set __rowFocusMode(a){["_itemsFocusable","_footerFocusable","_headerFocusable"].forEach(c=>{var d=this[c];if(a){const e=d&&d.parentElement;this.__isCell(d)?this[c]=e:this.__isCell(e)&&(this[c]=e.parentElement)}else!a&&this.__isRow(d)&&(d=d.firstElementChild,this[c]=d._focusButton||d)})}get _visibleItemsCount(){return this._lastVisibleIndex-
this._firstVisibleIndex-1}ready(){super.ready();this._ios||this._android||(this.addEventListener("keydown",this._onKeyDown),this.addEventListener("keyup",this._onKeyUp),this.addEventListener("focusin",this._onFocusIn),this.addEventListener("focusout",this._onFocusOut),this.$.table.addEventListener("focusin",this._onContentFocusIn.bind(this)),this.addEventListener("mousedown",()=>{this.toggleAttribute("navigating",!1);this._isMousedown=!0;this._focusedColumnOrder=void 0}),this.addEventListener("mouseup",
()=>{this._isMousedown=!1}))}_focusableChanged(a,c){c&&c.setAttribute("tabindex","-1");a&&this._updateGridSectionFocusTarget(a)}_focusedCellChanged(a,c){c&&kc(c,"part","focused-cell");a&&jc(a,"part","focused-cell")}_interactingChanged(){this._updateGridSectionFocusTarget(this._headerFocusable);this._updateGridSectionFocusTarget(this._itemsFocusable);this._updateGridSectionFocusTarget(this._footerFocusable)}__updateItemsFocusable(){if(this._itemsFocusable){var a=this.shadowRoot.activeElement===this._itemsFocusable;
this._getRenderedRows().forEach(c=>{if(c.index===this._focusedItemIndex)if(this.__rowFocusMode)this._itemsFocusable=c;else{var d=this._itemsFocusable.parentElement;let e=this._itemsFocusable;d&&(this.__isCell(d)&&(e=d,d=d.parentElement),d=[...d.children].indexOf(e),this._itemsFocusable=this.__getFocusable(c,c.children[d]))}});a&&this._itemsFocusable.focus()}}_onKeyDown(a){const c=a.key;let d;switch(c){case "ArrowUp":case "ArrowDown":case "ArrowLeft":case "ArrowRight":case "PageUp":case "PageDown":case "Home":case "End":d=
"Navigation";break;case "Enter":case "Escape":case "F2":d="Interaction";break;case "Tab":d="Tab";break;case " ":d="Space"}this._detectInteracting(a);this.interacting&&"Interaction"!==d&&(d=void 0);if(d)this[`_on${d}KeyDown`](a,c)}_ensureScrolledToIndex(a){[...this.$.items.children].find(c=>c.index===a)?this.__scrollIntoViewport(a):this.scrollToIndex(a)}__isRowExpandable(a){if(this.itemHasChildrenPath)return a=a._item,!(!a||!tb(this.itemHasChildrenPath,a)||this._isExpanded(a))}__isRowCollapsible(a){return this._isExpanded(a._item)}__isDetailsCell(a){return a.matches('[part~\x3d"details-cell"]')}__isCell(a){return a instanceof
HTMLTableCellElement}__isRow(a){return a instanceof HTMLTableRowElement}__getIndexOfChildElement(a){return Array.prototype.indexOf.call(a.parentNode.children,a)}_onNavigationKeyDown(a,c){a.preventDefault();const d=this.__isRTL,e=a.composedPath().find(k=>this.__isRow(k)),f=a.composedPath().find(k=>this.__isCell(k));let g=0;var h=0;switch(c){case "ArrowRight":g=d?-1:1;break;case "ArrowLeft":g=d?1:-1;break;case "Home":this.__rowFocusMode?h=-Infinity:a.ctrlKey?h=-Infinity:g=-Infinity;break;case "End":this.__rowFocusMode?
h=Infinity:a.ctrlKey?h=Infinity:g=Infinity;break;case "ArrowDown":h=1;break;case "ArrowUp":h=-1;break;case "PageDown":this.$.items.contains(e)&&(h=this.__getIndexInGroup(e,this._focusedItemIndex),this._scrollToFlatIndex(h));h=this._visibleItemsCount;break;case "PageUp":h=-this._visibleItemsCount}if((!this.__rowFocusMode||e)&&(this.__rowFocusMode||f)){a=d?"ArrowRight":"ArrowLeft";if(c===(d?"ArrowLeft":"ArrowRight")){if(this.__rowFocusMode){if(this.__isRowExpandable(e)){this.expandItem(e._item);return}this.__rowFocusMode=
!1;this._onCellNavigation(e.firstElementChild,0,0);return}}else if(c===a)if(this.__rowFocusMode){if(this.__isRowCollapsible(e)){this.collapseItem(e._item);return}}else if(c=[...e.children].sort((k,l)=>k._order-l._order),f===c[0]||this.__isDetailsCell(f)){this.__rowFocusMode=!0;this._onRowNavigation(e,0);return}this.__rowFocusMode?this._onRowNavigation(e,h):this._onCellNavigation(f,g,h)}}_onRowNavigation(a,c){({dstRow:a}=this.__navigateRows(c,a));a&&a.focus()}__getIndexInGroup(a,c){return a.parentNode===
this.$.items?void 0!==c?c:a.index:this.__getIndexOfChildElement(a)}__navigateRows(a,c,d){const e=this.__getIndexInGroup(c,this._focusedItemIndex),f=c.parentNode;var g=(f===this.$.items?this._flatSize:f.children.length)-1;let h=Math.max(0,Math.min(e+a,g));if(f!==this.$.items){if(h>e)for(;h<g&&f.children[h].hidden;)h+=1;else if(h<e)for(;0<h&&f.children[h].hidden;)--h;this.toggleAttribute("navigating",!0);return{dstRow:f.children[h]}}g=!1;d&&(d=this.__isDetailsCell(d),f===this.$.items&&(c=c._item,{item:g}=
this._dataProviderController.getFlatIndexContext(h),g=d?0===a:1===a&&this._isDetailsOpened(c)||-1===a&&h!==e&&this._isDetailsOpened(g),g!==d&&(1===a&&g||-1===a&&!g)&&(h=e)));this._ensureScrolledToIndex(h);this._focusedItemIndex=h;this.toggleAttribute("navigating",!0);return{dstRow:[...f.children].find(k=>!k.hidden&&k.index===h),dstIsRowDetails:g}}_onCellNavigation(a,c,d){var e=a.parentNode;const {dstRow:f,dstIsRowDetails:g}=this.__navigateRows(d,e,a);if(f){var h=this.__getIndexOfChildElement(a);this.$.items.contains(a)&&
(h=[...this.$.sizer.children].findIndex(m=>m._column===a._column));var k=this.__isDetailsCell(a),l=e.parentNode;e=this.__getIndexInGroup(e,this._focusedItemIndex);void 0===this._focusedColumnOrder&&(this._focusedColumnOrder=k?0:this._getColumns(l,e).filter(m=>!m.hidden)[h]._order);if(g)[...f.children].find(m=>this.__isDetailsCell(m)).focus();else{h=this.__getIndexInGroup(f,this._focusedItemIndex);l=this._getColumns(l,h).filter(n=>!n.hidden);h=l.map(n=>n._order).sort((n,p)=>n-p);const m=h.length-1;
e=h.indexOf(h.slice(0).sort((n,p)=>Math.abs(n-this._focusedColumnOrder)-Math.abs(p-this._focusedColumnOrder))[0]);c=0===d&&k?e:Math.max(0,Math.min(e+c,m));c!==e&&(this._focusedColumnOrder=void 0);c=l.reduce((n,p,q)=>{n[p._order]=q;return n},{})[h[c]];if(this.$.items.contains(a)){const n=this.$.sizer.children[c];this._lazyColumns&&(this.__isColumnInViewport(n._column)||n.scrollIntoView(),this.__updateColumnsBodyContentHidden(),this.__updateHorizontalScrollPosition());c=[...f.children].find(p=>p._column===
n._column)}else c=f.children[c];this._scrollHorizontallyToCell(c);c.focus()}}}_onInteractionKeyDown(a,c){var d=a.composedPath()[0];d="input"===d.localName&&!/^(button|checkbox|color|file|image|radio|range|reset|submit)$/iu.test(d.type);switch(c){case "Enter":var e=this.interacting?!d:!0;break;case "Escape":e=!1;break;case "F2":e=!this.interacting}({cell:d}=this._getGridEventLocation(a));if(this.interacting!==e&&null!==d)if(e){if(e=d._content.querySelector("[focus-target]")||[...d._content.querySelectorAll("*")].find(f=>
this._isFocusable(f)))a.preventDefault(),e.focus(),this._setInteracting(!0),this.toggleAttribute("navigating",!1)}else a.preventDefault(),this._focusedColumnOrder=void 0,d.focus(),this._setInteracting(!1),this.toggleAttribute("navigating",!0);"Escape"===c&&this._hideTooltip(!0)}_predictFocusStepTarget(a,c){var d=[this.$.table,this._headerFocusable,this._itemsFocusable,this._footerFocusable,this.$.focusexit];a=d.indexOf(a);for(a+=c;0<=a&&a<=d.length-1;){let e=d[a];e&&!this.__rowFocusMode&&(e=d[a].parentNode);
if(!e||e.hidden)a+=c;else break}(d=d[a])&&!this.__isHorizontallyInViewport(d)&&(c=this._getColumnsInOrder().find(e=>this.__isColumnInViewport(e)))&&(d===this._headerFocusable?d=c._headerCell:d===this._itemsFocusable?(d=d._column._cells.indexOf(d),d=c._cells[d]):d===this._footerFocusable&&(d=c._footerCell));return d}_onTabKeyDown(a){var c=this._predictFocusStepTarget(a.composedPath()[0],a.shiftKey?-1:1);if(c){a.stopPropagation();if(c===this.$.table)this.$.table.focus();else if(c===this.$.focusexit)this.$.focusexit.focus();
else if(c===this._itemsFocusable){let e=c;var d=this.__isRow(c)?c:c.parentNode;this._ensureScrolledToIndex(this._focusedItemIndex);d.index!==this._focusedItemIndex&&this.__isCell(c)&&(c=Array.from(d.children).indexOf(this._itemsFocusable),(d=Array.from(this.$.items.children).find(f=>!f.hidden&&f.index===this._focusedItemIndex))&&(e=d.children[c]));a.preventDefault();e.focus()}else a.preventDefault(),c.focus();this.toggleAttribute("navigating",!0)}}_onSpaceKeyDown(a){a.preventDefault();a=a.composedPath()[0];
const c=this.__isRow(a);!c&&a._content&&a._content.firstElementChild||this.dispatchEvent(new CustomEvent(c?"row-activate":"cell-activate",{detail:{model:this.__getRowModel(c?a:a.parentElement)}}))}_onKeyUp(a){if(/^( |SpaceBar)$/u.test(a.key)&&!this.interacting){a.preventDefault();var c=a.composedPath()[0];if(c._content&&c._content.firstElementChild){const d=this.hasAttribute("navigating");c._content.firstElementChild.dispatchEvent(new MouseEvent("click",{shiftKey:a.shiftKey,bubbles:!0,composed:!0,
cancelable:!0}));this.toggleAttribute("navigating",d)}}}_onFocusIn(a){this._isMousedown||this.toggleAttribute("navigating",!0);const c=a.composedPath()[0];c===this.$.table||c===this.$.focusexit?(this._isMousedown||this._predictFocusStepTarget(c,c===this.$.table?1:-1).focus(),this._setInteracting(!1)):this._detectInteracting(a)}_onFocusOut(a){this.toggleAttribute("navigating",!1);this._detectInteracting(a);this._hideTooltip();this._focusedCell=null}_onContentFocusIn(a){const {section:c,cell:d,row:e}=
this._getGridEventLocation(a);if(d||this.__rowFocusMode){this._detectInteracting(a);if(c&&(d||e))if(this._activeRowGroup=c,this.$.header===c?this._headerFocusable=this.__getFocusable(e,d):this.$.items===c?this._itemsFocusable=this.__getFocusable(e,d):this.$.footer===c&&(this._footerFocusable=this.__getFocusable(e,d)),d){const f=this.getEventContext(a);(this.__pendingBodyCellFocus=this.loading&&"body"===f.section)||d.dispatchEvent(new CustomEvent("cell-focus",{bubbles:!0,composed:!0,detail:{context:f}}));
this._focusedCell=d._focusButton||d;db&&a.target===d&&this._showTooltip(a)}else this._focusedCell=null;this._detectFocusedItemIndex(a)}}__dispatchPendingBodyCellFocus(){this.__pendingBodyCellFocus&&this.shadowRoot.activeElement===this._itemsFocusable&&this._itemsFocusable.dispatchEvent(new Event("focusin",{bubbles:!0,composed:!0}))}__getFocusable(a,c){return this.__rowFocusMode?a:c._focusButton||c}_detectInteracting(a){a=a.composedPath().some(c=>"vaadin-grid-cell-content"===c.localName);this._setInteracting(a);
this.__updateHorizontalScrollPosition()}_detectFocusedItemIndex(a){const {section:c,row:d}=this._getGridEventLocation(a);c===this.$.items&&(this._focusedItemIndex=d.index)}_updateGridSectionFocusTarget(a){if(a){var c=this._getGridSectionFromFocusTarget(a);a.tabIndex=this.interacting&&c===this._activeRowGroup?-1:0}}_preventScrollerRotatingCellFocus(a,c){a.index===this._focusedItemIndex&&this.hasAttribute("navigating")&&this._activeRowGroup===this.$.items&&(this._navigatingIsHidden=!0,this.toggleAttribute("navigating",
!1));c===this._focusedItemIndex&&this._navigatingIsHidden&&(this._navigatingIsHidden=!1,this.toggleAttribute("navigating",!0))}_getColumns(a,c){let d=this._columnTree.length-1;a===this.$.header?d=c:a===this.$.footer&&(d=this._columnTree.length-1-c);return this._columnTree[d]}__isValidFocusable(a){return this.$.table.contains(a)&&a.offsetHeight}_resetKeyboardNavigation(){!this.$&&this.performUpdate&&this.performUpdate();["header","footer"].forEach(a=>{if(!this.__isValidFocusable(this[`_${a}Focusable`])){const c=
[...this.$[a].children].find(e=>e.offsetHeight),d=c?[...c.children].find(e=>!e.hidden):null;c&&d&&(this[`_${a}Focusable`]=this.__getFocusable(c,d))}});if(!this.__isValidFocusable(this._itemsFocusable)&&this.$.items.firstElementChild){const a=this.__getFirstVisibleItem(),c=a?[...a.children].find(d=>!d.hidden):null;c&&a&&(this._focusedColumnOrder=void 0,this._itemsFocusable=this.__getFocusable(a,c))}else this.__updateItemsFocusable()}_scrollHorizontallyToCell(a){if(!(a.hasAttribute("frozen")||a.hasAttribute("frozen-to-end")||
this.__isDetailsCell(a))){var c=a.getBoundingClientRect(),d=a.parentNode,e=Array.from(d.children).indexOf(a),f=this.$.table.getBoundingClientRect();a=f.left;f=f.right;for(var g=e-1;0<=g;g--){const h=d.children[g];if(!h.hasAttribute("hidden")&&!this.__isDetailsCell(h)&&(h.hasAttribute("frozen")||h.hasAttribute("frozen-to-end"))){a=h.getBoundingClientRect().right;break}}for(e+=1;e<d.children.length;e++)if(g=d.children[e],!g.hasAttribute("hidden")&&!this.__isDetailsCell(g)&&(g.hasAttribute("frozen")||
g.hasAttribute("frozen-to-end"))){f=g.getBoundingClientRect().left;break}c.left<a&&(this.$.table.scrollLeft+=Math.round(c.left-a));c.right>f&&(this.$.table.scrollLeft+=Math.round(c.right-f))}}_getGridEventLocation(a){a=a.composedPath();const c=a.indexOf(this.$.table);return{section:1<=c?a[c-1]:null,row:2<=c?a[c-2]:null,cell:3<=c?a[c-3]:null}}_getGridSectionFromFocusTarget(a){return a===this._headerFocusable?this.$.header:a===this._itemsFocusable?this.$.items:a===this._footerFocusable?this.$.footer:
null}},Ff=b=>class extends b{static get properties(){return{detailsOpenedItems:{type:Array,value:()=>[],sync:!0},rowDetailsRenderer:{type:Function,sync:!0},_detailsCells:{type:Array}}}static get observers(){return["_detailsOpenedItemsChanged(detailsOpenedItems, rowDetailsRenderer)","_rowDetailsRendererChanged(rowDetailsRenderer)"]}ready(){super.ready();this._detailsCellResizeObserver=new ResizeObserver(a=>{a.forEach(({target:c})=>{this._updateDetailsCellHeight(c.parentElement)});this.__virtualizer.__adapter._resizeHandler()})}_rowDetailsRendererChanged(a){a&&
this._columnTree&&H(this.$.items,c=>{if(!c.querySelector("[part~\x3ddetails-cell]")){this._updateRow(c,this._columnTree[this._columnTree.length-1]);const d=this._isDetailsOpened(c._item);this._toggleDetailsCell(c,d)}})}_detailsOpenedItemsChanged(a,c){H(this.$.items,d=>{d.hasAttribute("details-opened")?this._updateItem(d,d._item):c&&this._isDetailsOpened(d._item)&&this._updateItem(d,d._item)})}_configureDetailsCell(a){a.setAttribute("part","cell details-cell");a.toggleAttribute("frozen",!0);this._detailsCellResizeObserver.observe(a)}_toggleDetailsCell(a,
c){if(a=a.querySelector('[part~\x3d"details-cell"]'))a.hidden=!c,!a.hidden&&this.rowDetailsRenderer&&(a._renderer=this.rowDetailsRenderer)}_updateDetailsCellHeight(a){const c=a.querySelector('[part~\x3d"details-cell"]');c&&(this.__updateDetailsRowPadding(a,c),requestAnimationFrame(()=>this.__updateDetailsRowPadding(a,c)))}__updateDetailsRowPadding(a,c){c.hidden?a.style.removeProperty("padding-bottom"):a.style.setProperty("padding-bottom",`${c.offsetHeight}px`)}_updateDetailsCellHeights(){H(this.$.items,
a=>{this._updateDetailsCellHeight(a)})}_isDetailsOpened(a){return this.detailsOpenedItems&&-1!==this._getItemIndexInArray(a,this.detailsOpenedItems)}openItemDetails(a){this._isDetailsOpened(a)||(this.detailsOpenedItems=[...this.detailsOpenedItems,a])}closeItemDetails(a){this._isDetailsOpened(a)&&(this.detailsOpenedItems=this.detailsOpenedItems.filter(c=>!this._itemsEqual(c,a)))}},eb=document.createElement("div");eb.style.position="fixed";eb.style.clip="rect(0px, 0px, 0px, 0px)";eb.setAttribute("aria-live",
"polite");document.body.appendChild(eb);const Gf=C(b=>class extends b{ready(){super.ready();this.addEventListener("keydown",a=>{this._onKeyDown(a)});this.addEventListener("keyup",a=>{this._onKeyUp(a)})}_onKeyDown(a){switch(a.key){case "Enter":this._onEnter(a);break;case "Escape":this._onEscape(a)}}_onKeyUp(a){}_onEnter(a){}_onEscape(a){}}),Hf=b=>class extends Ib(Gf(b)){get _activeKeys(){return[" "]}ready(){super.ready();Da(this,"down",a=>{this._shouldSetActive(a)&&this._setActive(!0)});Da(this,"up",
()=>{this._setActive(!1)})}disconnectedCallback(){super.disconnectedCallback();this._setActive(!1)}_shouldSetActive(a){return!this.disabled}_onKeyDown(a){super._onKeyDown(a);this._shouldSetActive(a)&&this._activeKeys.includes(a.key)&&(this._setActive(!0),document.addEventListener("keyup",c=>{this._activeKeys.includes(c.key)&&this._setActive(!1)},{once:!0}))}_setActive(a){this.toggleAttribute("active",a)}},If=C(b=>class extends b{get _keyboardActive(){return db}ready(){this.addEventListener("focusin",
a=>{this._shouldSetFocus(a)&&this._setFocused(!0)});this.addEventListener("focusout",a=>{this._shouldRemoveFocus(a)&&this._setFocused(!1)});super.ready()}disconnectedCallback(){super.disconnectedCallback();this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(a){this.toggleAttribute("focused",a);this.toggleAttribute("focus-ring",a&&this._keyboardActive)}_shouldSetFocus(a){return!0}_shouldRemoveFocus(a){return!0}}),Jf=C(b=>class extends If(hd(b)){static get properties(){return{autofocus:{type:Boolean},
focusElement:{type:Object,readOnly:!0,observer:"_focusElementChanged"},_lastTabIndex:{value:0}}}constructor(){super();this._boundOnBlur=this._onBlur.bind(this);this._boundOnFocus=this._onFocus.bind(this)}ready(){super.ready();this.autofocus&&!this.disabled&&requestAnimationFrame(()=>{this.focus();this.setAttribute("focus-ring","")})}focus(){this.focusElement&&!this.disabled&&this.focusElement.focus()}blur(){this.focusElement&&this.focusElement.blur()}click(){this.focusElement&&!this.disabled&&this.focusElement.click()}_focusElementChanged(a,
c){a?(a.disabled=this.disabled,this._addFocusListeners(a),this.__forwardTabIndex(this.tabindex)):c&&this._removeFocusListeners(c)}_addFocusListeners(a){a.addEventListener("blur",this._boundOnBlur);a.addEventListener("focus",this._boundOnFocus)}_removeFocusListeners(a){a.removeEventListener("blur",this._boundOnBlur);a.removeEventListener("focus",this._boundOnFocus)}_onFocus(a){a.stopPropagation();this.dispatchEvent(new Event("focus"))}_onBlur(a){a.stopPropagation();this.dispatchEvent(new Event("blur"))}_shouldSetFocus(a){return a.target===
this.focusElement}_shouldRemoveFocus(a){return a.target===this.focusElement}_disabledChanged(a,c){super._disabledChanged(a,c);this.focusElement&&(this.focusElement.disabled=a);a&&this.blur()}_tabindexChanged(a){this.__forwardTabIndex(a)}__forwardTabIndex(a){void 0!==a&&this.focusElement&&(this.focusElement.tabIndex=a,-1!==a&&(this.tabindex=void 0));this.disabled&&a&&(-1!==a&&(this._lastTabIndex=a),this.tabindex=void 0)}}),fb=new ResizeObserver(b=>{setTimeout(()=>{b.forEach(a=>{a.target.resizables?
a.target.resizables.forEach(c=>{c._onResize(a.contentRect)}):a.target._onResize(a.contentRect)})})}),Kf=C(b=>class extends b{get _observeParent(){return!1}connectedCallback(){super.connectedCallback();fb.observe(this);if(this._observeParent){const a=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;a.resizables||(a.resizables=new Set,fb.observe(a));a.resizables.add(this);this.__parent=a}}disconnectedCallback(){super.disconnectedCallback();fb.unobserve(this);const a=this.__parent;
if(this._observeParent&&a){const c=a.resizables;c&&(c.delete(this),0===c.size&&fb.unobserve(a));this.__parent=null}}_onResize(a){}}),Lf=b=>class extends Kf(b){static get properties(){return{columnRendering:{type:String,value:"eager",sync:!0},_frozenCells:{type:Array,value:()=>[]},_frozenToEndCells:{type:Array,value:()=>[]},_rowWithFocusedElement:Element}}static get observers(){return["__columnRenderingChanged(_columnTree, columnRendering)"]}get _scrollLeft(){return this.$.table.scrollLeft}get _scrollTop(){return this.$.table.scrollTop}set _scrollTop(a){this.$.table.scrollTop=
a}get _lazyColumns(){return"lazy"===this.columnRendering}ready(){super.ready();this.scrollTarget=this.$.table;this.$.items.addEventListener("focusin",a=>{const c=a.composedPath().indexOf(this.$.items);this._rowWithFocusedElement=a.composedPath()[c-1]});this.$.items.addEventListener("focusout",()=>{this._rowWithFocusedElement=void 0});this.$.table.addEventListener("scroll",()=>this._afterScroll())}_onResize(){this._updateOverflow();this.__updateHorizontalScrollPosition();if(this._firefox){const a=
!Ra(this);a&&!1===this.__previousVisible&&(this._scrollTop=this.__memorizedScrollTop||0);this.__previousVisible=a}}_scrollToFlatIndex(a){a=Math.min(this._flatSize-1,Math.max(0,a));this.__virtualizer.scrollToIndex(a);this.__scrollIntoViewport(a)}__scrollIntoViewport(a){var c=[...this.$.items.children].find(d=>d.index===a);if(c){c=c.getBoundingClientRect();const d=this.$.footer.getBoundingClientRect().top,e=this.$.header.getBoundingClientRect().bottom;c.bottom>d?this.$.table.scrollTop+=c.bottom-d:c.top<
e&&(this.$.table.scrollTop-=e-c.top)}}_scheduleScrolling(){this._scrollingFrame||(this._scrollingFrame=requestAnimationFrame(()=>this.$.scroller.toggleAttribute("scrolling",!0)));this._debounceScrolling=x.debounce(this._debounceScrolling,U.after(500),()=>{cancelAnimationFrame(this._scrollingFrame);delete this._scrollingFrame;this.$.scroller.toggleAttribute("scrolling",!1)})}_afterScroll(){this.__updateHorizontalScrollPosition();this.hasAttribute("reordering")||this._scheduleScrolling();this.hasAttribute("navigating")||
this._hideTooltip(!0);this._updateOverflow();this._debounceColumnContentVisibility=x.debounce(this._debounceColumnContentVisibility,U.after(100),()=>{this._lazyColumns&&this.__cachedScrollLeft!==this._scrollLeft&&(this.__cachedScrollLeft=this._scrollLeft,this.__updateColumnsBodyContentHidden())});this._firefox&&!Ra(this)&&!1!==this.__previousVisible&&(this.__memorizedScrollTop=this._scrollTop)}__updateColumnsBodyContentHidden(){if(this._columnTree&&this._areSizerCellsAssigned()){var a=this._getColumnsInOrder(),
c=!1;a.forEach(e=>{const f=this._lazyColumns&&!this.__isColumnInViewport(e);e._bodyContentHidden!==f&&(c=!0,e._cells.forEach(g=>{if(g!==e._sizerCell)if(f)g.remove();else if(g.__parentRow){const h=[...g.__parentRow.children].find(k=>a.indexOf(k._column)>a.indexOf(e));g.__parentRow.insertBefore(g,h)}}));e._bodyContentHidden=f});c&&this._frozenCellsChanged();if(this._lazyColumns){var d=[...a].reverse().find(f=>f.frozen);d=this.__getColumnEnd(d);const e=a.find(f=>!f.frozen&&!f._bodyContentHidden);this.__lazyColumnsStart=
this.__getColumnStart(e)-d;this.$.items.style.setProperty("--_grid-lazy-columns-start",`${this.__lazyColumnsStart}px`);this._resetKeyboardNavigation()}}}__getColumnEnd(a){return a?a._sizerCell.offsetLeft+(this.__isRTL?0:a._sizerCell.offsetWidth):this.__isRTL?this.$.table.clientWidth:0}__getColumnStart(a){return a?a._sizerCell.offsetLeft+(this.__isRTL?a._sizerCell.offsetWidth:0):this.__isRTL?this.$.table.clientWidth:0}__isColumnInViewport(a){return a.frozen||a.frozenToEnd?!0:this.__isHorizontallyInViewport(a._sizerCell)}__isHorizontallyInViewport(a){return a.offsetLeft+
a.offsetWidth>=this._scrollLeft&&a.offsetLeft<=this._scrollLeft+this.clientWidth}__columnRenderingChanged(a,c){"eager"===c?this.$.scroller.removeAttribute("column-rendering"):this.$.scroller.setAttribute("column-rendering",c);this.__updateColumnsBodyContentHidden()}_updateOverflow(){this._debounceOverflow=x.debounce(this._debounceOverflow,V,()=>{this.__doUpdateOverflow()})}__doUpdateOverflow(){var a="";const c=this.$.table;c.scrollTop<c.scrollHeight-c.clientHeight&&(a+=" bottom");0<c.scrollTop&&(a+=
" top");const d=yc(c,this.getAttribute("dir"));0<d&&(a+=" start");d<c.scrollWidth-c.clientWidth&&(a+=" end");this.__isRTL&&(a=a.replace(/start|end/giu,e=>"start"===e?"end":"start"));c.scrollLeft<c.scrollWidth-c.clientWidth&&(a+=" right");0<c.scrollLeft&&(a+=" left");a=a.trim();0<a.length&&this.getAttribute("overflow")!==a?this.setAttribute("overflow",a):0===a.length&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")}_frozenCellsChanged(){this._debouncerCacheElements=x.debounce(this._debouncerCacheElements,
M,()=>{Array.from(this.shadowRoot.querySelectorAll('[part~\x3d"cell"]')).forEach(a=>{a.style.transform=""});this._frozenCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]"));this._frozenToEndCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen-to-end]"));this.__updateHorizontalScrollPosition()});this._debounceUpdateFrozenColumn()}_debounceUpdateFrozenColumn(){this.__debounceUpdateFrozenColumn=x.debounce(this.__debounceUpdateFrozenColumn,M,()=>this._updateFrozenColumn())}_updateFrozenColumn(){if(this._columnTree){var a=
this._columnTree[this._columnTree.length-1].slice(0);a.sort((e,f)=>e._order-f._order);var c,d;for(let e=0;e<a.length;e++){const f=a[e];f._lastFrozen=!1;f._firstFrozenToEnd=!1;void 0===d&&f.frozenToEnd&&!f.hidden&&(d=e);f.frozen&&!f.hidden&&(c=e)}void 0!==c&&(a[c]._lastFrozen=!0);void 0!==d&&(a[d]._firstFrozenToEnd=!0);this.__updateColumnsBodyContentHidden()}}__updateHorizontalScrollPosition(){if(this._columnTree){var a=this.$.table.scrollWidth,c=this.$.table.clientWidth,d=Math.max(0,this.$.table.scrollLeft),
e=yc(this.$.table,this.getAttribute("dir")),f=`translate(${-d}px, 0)`;this.$.header.style.transform=f;this.$.footer.style.transform=f;this.$.items.style.transform=f;f=this.__isRTL?e+c-a:d;var g=`translate(${f}px, 0)`;this._frozenCells.forEach(l=>{l.style.transform=g});a=this.__isRTL?e:d+c-a;var h=`translate(${a}px, 0)`,k=h;this._lazyColumns&&this._areSizerCellsAssigned()&&(d=this._getColumnsInOrder(),c=[...d].reverse().find(l=>!l.frozenToEnd&&!l._bodyContentHidden),c=this.__getColumnEnd(c),d=d.find(l=>
l.frozenToEnd),d=this.__getColumnStart(d),k=`translate(${a+(d-c)+this.__lazyColumnsStart}px, 0)`);this._frozenToEndCells.forEach(l=>{this.$.items.contains(l)?l.style.transform=k:l.style.transform=h});this.hasAttribute("navigating")&&this.__rowFocusMode&&this.$.table.style.setProperty("--_grid-horizontal-scroll-position",`${-f}px`)}}_areSizerCellsAssigned(){return this._getColumnsInOrder().every(a=>a._sizerCell)}},Mf=b=>class extends b{static get properties(){return{selectedItems:{type:Object,notify:!0,
value:()=>[],sync:!0},__selectedKeys:{type:Object,computed:"__computeSelectedKeys(itemIdPath, selectedItems)"}}}static get observers(){return["__selectedItemsChanged(itemIdPath, selectedItems)"]}_isSelected(a){return this.__selectedKeys.has(this.getItemId(a))}selectItem(a){this._isSelected(a)||(this.selectedItems=[...this.selectedItems,a])}deselectItem(a){this._isSelected(a)&&(this.selectedItems=this.selectedItems.filter(c=>!this._itemsEqual(c,a)))}_toggleItem(a){this._isSelected(a)?this.deselectItem(a):
this.selectItem(a)}__selectedItemsChanged(){this.requestContentUpdate()}__computeSelectedKeys(a,c){a=c||[];const d=new Set;a.forEach(e=>{d.add(this.getItemId(e))});return d}};let sd="prepend";const Nf=b=>class extends b{static get properties(){return{multiSort:{type:Boolean,value:!1},multiSortPriority:{type:String,value:()=>sd},multiSortOnShiftClick:{type:Boolean,value:!1},_sorters:{type:Array,value:()=>[]},_previousSorters:{type:Array,value:()=>[]}}}static setDefaultMultiSortPriority(a){sd=["append",
"prepend"].includes(a)?a:"prepend"}ready(){super.ready();this.addEventListener("sorter-changed",this._onSorterChanged)}_onSorterChanged(a){const c=a.target;a.stopPropagation();c._grid=this;this.__updateSorter(c,a.detail.shiftClick,a.detail.fromSorterClick);this.__applySorters()}__removeSorters(a){0!==a.length&&(this._sorters=this._sorters.filter(c=>0>a.indexOf(c)),this.multiSort&&this.__updateSortOrders(),this.__applySorters())}__updateSortOrders(){this._sorters.forEach((a,c)=>{a._order=1<this._sorters.length?
c:null})}__appendSorter(a){a.direction?this._sorters.includes(a)||this._sorters.push(a):this._removeArrayItem(this._sorters,a);this.__updateSortOrders()}__prependSorter(a){this._removeArrayItem(this._sorters,a);a.direction&&this._sorters.unshift(a);this.__updateSortOrders()}__updateSorter(a,c,d){if(a.direction||-1!==this._sorters.indexOf(a))if(a._order=null,this.multiSort&&(!this.multiSortOnShiftClick||!d)||this.multiSortOnShiftClick&&c)"append"===this.multiSortPriority?this.__appendSorter(a):this.__prependSorter(a);
else if(a.direction||this.multiSortOnShiftClick)c=this._sorters.filter(e=>e!==a),this._sorters=a.direction?[a]:[],c.forEach(e=>{e._order=null;e.direction=null})}__applySorters(){this.dataProvider&&this.isAttached&&JSON.stringify(this._previousSorters)!==JSON.stringify(this._mapSorters())&&this.__debounceClearCache();this._a11yUpdateSorters();this._previousSorters=this._mapSorters()}_mapSorters(){return this._sorters.map(a=>({path:a.path,direction:a.direction}))}_removeArrayItem(a,c){c=a.indexOf(c);
-1<c&&a.splice(c,1)}},Of=b=>class extends b{static get properties(){return{cellClassNameGenerator:{type:Function,sync:!0},cellPartNameGenerator:{type:Function,sync:!0}}}static get observers(){return["__cellClassNameGeneratorChanged(cellClassNameGenerator)","__cellPartNameGeneratorChanged(cellPartNameGenerator)"]}__cellClassNameGeneratorChanged(){this.generateCellClassNames()}__cellPartNameGeneratorChanged(){this.generateCellPartNames()}generateCellClassNames(){H(this.$.items,a=>{a.hidden||a.hasAttribute("loading")||
this._generateCellClassNames(a,this.__getRowModel(a))})}generateCellPartNames(){H(this.$.items,a=>{a.hidden||a.hasAttribute("loading")||this._generateCellPartNames(a,this.__getRowModel(a))})}_generateCellClassNames(a,c){oa(a,d=>{d.__generatedClasses&&d.__generatedClasses.forEach(e=>d.classList.remove(e));if(this.cellClassNameGenerator){const e=this.cellClassNameGenerator(d._column,c);d.__generatedClasses=e&&e.split(" ").filter(f=>0<f.length);d.__generatedClasses&&d.__generatedClasses.forEach(f=>d.classList.add(f))}})}_generateCellPartNames(a,
c){oa(a,d=>{d.__generatedParts&&d.__generatedParts.forEach(e=>{P(d,null,e)});if(this.cellPartNameGenerator){const e=this.cellPartNameGenerator(d._column,c);d.__generatedParts=e&&e.split(" ").filter(f=>0<f.length);d.__generatedParts&&d.__generatedParts.forEach(f=>{P(d,!0,f)})}})}},Pf=b=>class extends uf(yf(Bf(sf(Lf(Mf(Nf(Ff(Ef(qf(Df(vf(wf(Cf(Af(Of(hd(b))))))))))))))))){static get observers(){return["_columnTreeChanged(_columnTree)","_flatSizeChanged(_flatSize, __virtualizer, _hasData, _columnTree)"]}static get properties(){return{_safari:{type:Boolean,
value:kd},_ios:{type:Boolean,value:jd},_firefox:{type:Boolean,value:kf},_android:{type:Boolean,value:id},_touchDevice:{type:Boolean,value:md},allRowsVisible:{type:Boolean,value:!1,reflectToAttribute:!0},__pendingRecalculateColumnWidths:{type:Boolean,value:!0},isAttached:{value:!1},__gridElement:{type:Boolean,value:!0}}}constructor(){super();this.addEventListener("animationend",this._onAnimationEnd)}get _firstVisibleIndex(){const a=this.__getFirstVisibleItem();return a?a.index:void 0}get _lastVisibleIndex(){const a=
this.__getLastVisibleItem();return a?a.index:void 0}connectedCallback(){super.connectedCallback();this.isAttached=!0;this.recalculateColumnWidths()}disconnectedCallback(){super.disconnectedCallback();this.isAttached=!1;this._hideTooltip(!0)}__getFirstVisibleItem(){return this._getRenderedRows().find(a=>this._isInViewport(a))}__getLastVisibleItem(){return this._getRenderedRows().reverse().find(a=>this._isInViewport(a))}_isInViewport(a){const c=this.$.table.getBoundingClientRect();a=a.getBoundingClientRect();
const d=this.$.header.getBoundingClientRect().height,e=this.$.footer.getBoundingClientRect().height;return a.bottom>c.top+d&&a.top<c.bottom-e}_getRenderedRows(){return Array.from(this.$.items.children).filter(a=>!a.hidden).sort((a,c)=>a.index-c.index)}_getRowContainingNode(a){if(a=hc("vaadin-grid-cell-content",a))return a.assignedSlot.parentElement.parentElement}_isItemAssignedToRow(a,c){c=this.__getRowModel(c);return this.getItemId(a)===this.getItemId(c.item)}ready(){super.ready();this.__virtualizer=
new pf({createElements:this._createScrollerRows.bind(this),updateElement:this._updateScrollerItem.bind(this),scrollContainer:this.$.items,scrollTarget:this.$.table,reorderElements:!0});(new ResizeObserver(()=>setTimeout(()=>{this.__updateColumnsBodyContentHidden();this.__tryToRecalculateColumnWidthsIfPending()}))).observe(this.$.table);gc(this);this._tooltipController=new nd(this);this.addController(this._tooltipController);this._tooltipController.setManual(!0)}__getBodyCellCoordinates(a){if(this.$.items.contains(a)&&
"td"===a.localName)return{item:a.parentElement._item,column:a._column}}__focusBodyCell({item:a,column:c}){var d=this._getRenderedRows().find(e=>e._item===a);(d=d&&[...d.children].find(e=>e._column===c))&&d.focus()}_focusFirstVisibleRow(){const a=this.__getFirstVisibleItem();this.__rowFocusMode=!0;a.focus()}_flatSizeChanged(a,c,d,e){if(c&&d&&e){d=this.shadowRoot.activeElement;e=this.__getBodyCellCoordinates(d);const f=c.size||0;c.size=a;c.update(f-1,f-1);a<f&&c.update(a-1,a-1);e&&d.parentElement.hidden&&
this.__focusBodyCell(e);this._resetKeyboardNavigation()}}__getIntrinsicWidth(a){this.__intrinsicWidthCache.has(a)||this.__calculateAndCacheIntrinsicWidths([a]);return this.__intrinsicWidthCache.get(a)}__getDistributedWidth(a,c){if(null==a||a===this)return 0;var d=Math.max(this.__getIntrinsicWidth(a),this.__getDistributedWidth((a.assignedSlot||a).parentElement,a));if(!c)return d;a=a._visibleChildColumns.map(e=>this.__getIntrinsicWidth(e)).reduce((e,f)=>e+f,0);d=Math.max(0,d-a);d*=this.__getIntrinsicWidth(c)/
a;return this.__getIntrinsicWidth(c)+d}_recalculateColumnWidths(a){this.__virtualizer.flush();[...this.$.header.children,...this.$.footer.children].forEach(e=>{e.__debounceUpdateHeaderFooterRowVisibility&&e.__debounceUpdateHeaderFooterRowVisibility.flush()});this._debouncerHiddenChanged&&this._debouncerHiddenChanged.flush();this.__intrinsicWidthCache=new Map;const c=this._firstVisibleIndex,d=this._lastVisibleIndex;this.__viewportRowsCache=this._getRenderedRows().filter(e=>e.index>=c&&e.index<=d);
this.__calculateAndCacheIntrinsicWidths(a);a.forEach(e=>{e.width=`${this.__getDistributedWidth(e)}px`})}__setVisibleCellContentAutoWidth(a,c){a._allCells.filter(d=>this.$.items.contains(d)?this.__viewportRowsCache.includes(d.parentElement):!0).forEach(d=>{d.__measuringAutoWidth=c;d.__measuringAutoWidth?(d.__originalWidth=d.style.width,d.style.width="auto",d.style.position="absolute"):(d.style.width=d.__originalWidth,delete d.__originalWidth,d.style.position="")})}__getAutoWidthCellsMaxWidth(a){return a._allCells.reduce((c,
d)=>d.__measuringAutoWidth?Math.max(c,d.offsetWidth+1):c,0)}__calculateAndCacheIntrinsicWidths(a){a.forEach(c=>this.__setVisibleCellContentAutoWidth(c,!0));a.forEach(c=>{const d=this.__getAutoWidthCellsMaxWidth(c);this.__intrinsicWidthCache.set(c,d)});a.forEach(c=>this.__setVisibleCellContentAutoWidth(c,!1))}recalculateColumnWidths(){if(this._columnTree)if(Ra(this)||this._dataProviderController.isLoading())this.__pendingRecalculateColumnWidths=!0;else{var a=this._getColumns().filter(c=>!c.hidden&&
c.autoWidth);this._recalculateColumnWidths(a)}}__tryToRecalculateColumnWidthsIfPending(){!this.__pendingRecalculateColumnWidths||Ra(this)||this._dataProviderController.isLoading()||[...this.$.items.children].some(a=>void 0===a.index)||![...this.$.items.children].some(a=>0<a.clientHeight)||(this.__pendingRecalculateColumnWidths=!1,this.recalculateColumnWidths())}_onDataProviderPageLoaded(){super._onDataProviderPageLoaded();this.__tryToRecalculateColumnWidthsIfPending()}_createScrollerRows(a){const c=
[];for(let d=0;d<a;d++){const e=document.createElement("tr");e.setAttribute("part","row body-row");e.setAttribute("role","row");e.setAttribute("tabindex","-1");this._columnTree&&this._updateRow(e,this._columnTree[this._columnTree.length-1],"body",!1,!0);c.push(e)}this._columnTree&&this._columnTree[this._columnTree.length-1].forEach(d=>{d.isConnected&&d._cells&&(d._cells=[...d._cells])});this.__afterCreateScrollerRowsDebouncer=x.debounce(this.__afterCreateScrollerRowsDebouncer,V,()=>{this._afterScroll();
this.__tryToRecalculateColumnWidthsIfPending()});return c}_createCell(a,c){const d=`vaadin-grid-cell-content-${this._contentIndex=this._contentIndex+1||0}`,e=document.createElement("vaadin-grid-cell-content");e.setAttribute("slot",d);const f=document.createElement(a);f.id=d.replace("-content-","-");f.setAttribute("role","td"===a?"gridcell":"columnheader");id||jd||(f.addEventListener("mouseenter",g=>{this.$.scroller.hasAttribute("scrolling")||this._showTooltip(g)}),f.addEventListener("mouseleave",
()=>{this._hideTooltip()}),f.addEventListener("mousedown",()=>{this._hideTooltip(!0)}));a=document.createElement("slot");a.setAttribute("name",d);c&&c._focusButtonMode?(c=document.createElement("div"),c.setAttribute("role","button"),c.setAttribute("tabindex","-1"),f.appendChild(c),f._focusButton=c,f.focus=function(){f._focusButton.focus()},c.appendChild(a)):(f.setAttribute("tabindex","-1"),f.appendChild(a));f._content=e;e.addEventListener("mousedown",()=>{if(jf){const g=h=>{const k=e.contains(this.getRootNode().activeElement);
h=h.composedPath().includes(e);!k&&h&&f.focus();document.removeEventListener("mouseup",g,!0)};document.addEventListener("mouseup",g,!0)}else setTimeout(()=>{e.contains(this.getRootNode().activeElement)||f.focus()})});return f}_updateRow(a,c,d="body",e=!1,f=!1){const g=document.createDocumentFragment();oa(a,h=>{h._vacant=!0});a.innerHTML="";"body"===d&&(a.__cells=[],a.__detailsCell=null);c.filter(h=>!h.hidden).forEach((h,k,l)=>{let m;if("body"===d){h._cells||(h._cells=[]);m=h._cells.find(p=>p._vacant);
m||(m=this._createCell("td",h),h._onCellKeyDown&&m.addEventListener("keydown",h._onCellKeyDown.bind(h)),h._cells.push(m));m.setAttribute("part","cell body-cell");m.__parentRow=a;a.__cells.push(m);const n=a===this.$.sizer;h._bodyContentHidden&&!n||a.appendChild(m);n&&(h._sizerCell=m);k===l.length-1&&this.rowDetailsRenderer&&(this._detailsCells||(this._detailsCells=[]),k=this._detailsCells.find(p=>p._vacant)||this._createCell("td"),-1===this._detailsCells.indexOf(k)&&this._detailsCells.push(k),k._content.parentElement||
g.appendChild(k._content),this._configureDetailsCell(k),a.appendChild(k),a.__detailsCell=k,this._a11ySetRowDetailsCell(a,k),k._vacant=!1);f||(h._cells=[...h._cells])}else k="header"===d?"th":"td",e||"vaadin-grid-column-group"===h.localName?(m=h[`_${d}Cell`],m||(m=this._createCell(k),h._onCellKeyDown&&m.addEventListener("keydown",h._onCellKeyDown.bind(h))),m._column=h,a.appendChild(m),h[`_${d}Cell`]=m):(h._emptyCells||(h._emptyCells=[]),m=h._emptyCells.find(n=>n._vacant)||this._createCell(k),m._column=
h,a.appendChild(m),-1===h._emptyCells.indexOf(m)&&h._emptyCells.push(m)),m.part.add("cell",`${d}-cell`);m._content.parentElement||g.appendChild(m._content);m._vacant=!1;m._column=h});"body"!==d&&this.__debounceUpdateHeaderFooterRowVisibility(a);this.appendChild(g);this._frozenCellsChanged();this._updateFirstAndLastColumnForRow(a)}__debounceUpdateHeaderFooterRowVisibility(a){a.__debounceUpdateHeaderFooterRowVisibility=x.debounce(a.__debounceUpdateHeaderFooterRowVisibility,M,()=>this.__updateHeaderFooterRowVisibility(a))}__updateHeaderFooterRowVisibility(a){if(a){var c=
Array.from(a.children).filter(d=>{const e=d._column;if(e._emptyCells&&-1<e._emptyCells.indexOf(d))return!1;if(a.parentElement===this.$.header){if(e.headerRenderer)return!0;if(null===e.header)return!1;if(e.path||void 0!==e.header)return!0}else if(e.footerRenderer)return!0;return!1});a.hidden!==!c.length&&(a.hidden=!c.length);this._resetKeyboardNavigation()}}_updateScrollerItem(a,c){this._preventScrollerRotatingCellFocus(a,c);this._columnTree&&(this._updateRowOrderParts(a,c),this._a11yUpdateRowRowindex(a,
c),this._getItem(c,a))}_columnTreeChanged(a){this._renderColumnTree(a);this.recalculateColumnWidths();this.__updateColumnsBodyContentHidden()}_updateRowOrderParts(a,c=a.index){Ca(a,{first:0===c,last:c===this._flatSize-1,odd:0!==c%2,even:0===c%2})}_updateRowStateParts(a,{expanded:c,selected:d,detailsOpened:e}){Ca(a,{expanded:c,collapsed:this.__isRowExpandable(a),selected:d,"details-opened":e})}_renderColumnTree(a){for(H(this.$.items,d=>{this._updateRow(d,a[a.length-1],"body",!1,!0);const e=this.__getRowModel(d);
this._updateRowOrderParts(d);this._updateRowStateParts(d,e);this._filterDragAndDrop(d,e)});this.$.header.children.length<a.length;){var c=document.createElement("tr");c.setAttribute("part","row");c.setAttribute("role","row");c.setAttribute("tabindex","-1");this.$.header.appendChild(c);c=document.createElement("tr");c.setAttribute("part","row");c.setAttribute("role","row");c.setAttribute("tabindex","-1");this.$.footer.appendChild(c)}for(;this.$.header.children.length>a.length;)this.$.header.removeChild(this.$.header.firstElementChild),
this.$.footer.removeChild(this.$.footer.firstElementChild);H(this.$.header,(d,e,f)=>{this._updateRow(d,a[e],"header",e===a.length-1);d=na(d);Q(d,"first-header-row-cell",0===e);Q(d,"last-header-row-cell",e===f.length-1)});H(this.$.footer,(d,e,f)=>{this._updateRow(d,a[a.length-1-e],"footer",0===e);d=na(d);Q(d,"first-footer-row-cell",0===e);Q(d,"last-footer-row-cell",e===f.length-1)});this._updateRow(this.$.sizer,a[a.length-1]);this._resizeHandler();this._frozenCellsChanged();this._updateFirstAndLastColumn();
this._resetKeyboardNavigation();this._a11yUpdateHeaderRows();this._a11yUpdateFooterRows();this.generateCellClassNames();this.generateCellPartNames();this.__updateHeaderAndFooter()}_updateItem(a,c){a._item=c;const d=this.__getRowModel(a);this._toggleDetailsCell(a,d.detailsOpened);this._a11yUpdateRowLevel(a,d.level);this._a11yUpdateRowSelected(a,d.selected);this._updateRowStateParts(a,d);this._generateCellClassNames(a,d);this._generateCellPartNames(a,d);this._filterDragAndDrop(a,d);H(a,e=>{if((!e._column||
e._column.isConnected)&&e._renderer){const f=e._column||this;e._renderer.call(f,e._content,f,d)}});this._updateDetailsCellHeight(a);this._a11yUpdateRowExpanded(a,d.expanded)}_resizeHandler(){this._updateDetailsCellHeights();this.__updateHorizontalScrollPosition()}_onAnimationEnd(a){0===a.animationName.indexOf("vaadin-grid-appear")&&(a.stopPropagation(),this.__tryToRecalculateColumnWidthsIfPending(),requestAnimationFrame(()=>{this.__scrollToPendingIndexes()}))}__getRowModel(a){return{index:a.index,
item:a._item,level:this._getIndexLevel(a.index),expanded:this._isExpanded(a._item),selected:this._isSelected(a._item),detailsOpened:!!this.rowDetailsRenderer&&this._isDetailsOpened(a._item)}}_showTooltip(a){const c=this._tooltipController.node;c&&c.isConnected&&(this._tooltipController.setTarget(a.target),this._tooltipController.setContext(this.getEventContext(a)),c._stateController.open({focus:"focusin"===a.type,hover:"mouseenter"===a.type}))}_hideTooltip(a){const c=this._tooltipController&&this._tooltipController.node;
c&&c._stateController.close(a)}requestContentUpdate(){this.__updateHeaderAndFooter();this.__updateVisibleRows()}__updateHeaderAndFooter(){(this._columnTree||[]).forEach(a=>{a.forEach(c=>{c._renderHeaderAndFooter&&c._renderHeaderAndFooter()})})}__updateVisibleRows(a,c){this.__virtualizer&&this.__virtualizer.update(a,c)}},Qf=E`
  @keyframes vaadin-grid-appear {
    to {
      opacity: 1;
    }
  }

  :host {
    display: flex;
    flex-direction: column;
    animation: 1ms vaadin-grid-appear;
    height: 400px;
    flex: 1 1 auto;
    align-self: stretch;
    position: relative;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([disabled]) {
    pointer-events: none;
  }

  #scroller {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    transform: translateY(0);
    width: auto;
    height: auto;
    position: absolute;
    inset: 0;
  }

  :host([all-rows-visible]) {
    height: auto;
    align-self: flex-start;
    flex-grow: 0;
    width: 100%;
  }

  :host([all-rows-visible]) #scroller {
    width: 100%;
    height: 100%;
    position: relative;
  }

  :host([all-rows-visible]) #items {
    min-height: 1px;
  }

  #table {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: auto;
    position: relative;
    outline: none;
    /* Workaround for a Desktop Safari bug: new stacking context here prevents the scrollbar from getting hidden */
    z-index: 0;
  }

  #header,
  #footer {
    display: block;
    position: -webkit-sticky;
    position: sticky;
    left: 0;
    overflow: visible;
    width: 100%;
    z-index: 1;
  }

  #header {
    top: 0;
  }

  th {
    text-align: inherit;
  }

  /* Safari doesn't work with "inherit" */
  [safari] th {
    text-align: initial;
  }

  #footer {
    bottom: 0;
  }

  #items {
    flex-grow: 1;
    flex-shrink: 0;
    display: block;
    position: -webkit-sticky;
    position: sticky;
    width: 100%;
    left: 0;
    overflow: visible;
  }

  [part~='row'] {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
  }

  [part~='row'][loading] [part~='body-cell'] ::slotted(vaadin-grid-cell-content) {
    visibility: hidden;
  }

  [column-rendering='lazy'] [part~='body-cell']:not([frozen]):not([frozen-to-end]) {
    transform: translateX(var(--_grid-lazy-columns-start));
  }

  #items [part~='row'] {
    position: absolute;
  }

  #items [part~='row']:empty {
    height: 100%;
  }

  [part~='cell']:not([part~='details-cell']) {
    flex-shrink: 0;
    flex-grow: 1;
    box-sizing: border-box;
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    padding: 0;
    white-space: nowrap;
  }

  [part~='cell'] > [tabindex] {
    display: flex;
    align-items: inherit;
    outline: none;
    position: absolute;
    inset: 0;
  }

  [part~='details-cell'] {
    position: absolute;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 0;
  }

  [part~='cell'] ::slotted(vaadin-grid-cell-content) {
    display: block;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  [hidden] {
    display: none !important;
  }

  [frozen],
  [frozen-to-end] {
    z-index: 2;
    will-change: transform;
  }

  [no-scrollbars][safari] #table,
  [no-scrollbars][firefox] #table {
    overflow: hidden;
  }

  /* Reordering styles */
  :host([reordering]) [part~='cell'] ::slotted(vaadin-grid-cell-content),
  :host([reordering]) [part~='resize-handle'],
  #scroller[no-content-pointer-events] [part~='cell'] ::slotted(vaadin-grid-cell-content) {
    pointer-events: none;
  }

  [part~='reorder-ghost'] {
    visibility: hidden;
    position: fixed;
    pointer-events: none;
    opacity: 0.5;

    /* Prevent overflowing the grid in Firefox */
    top: 0;
    left: 0;
  }

  :host([reordering]) {
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  /* Resizing styles */
  [part~='resize-handle'] {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    cursor: col-resize;
    z-index: 1;
  }

  [part~='resize-handle']::before {
    position: absolute;
    content: '';
    height: 100%;
    width: 35px;
    transform: translateX(-50%);
  }

  [last-column] [part~='resize-handle']::before,
  [last-frozen] [part~='resize-handle']::before {
    width: 18px;
    transform: none;
    right: 0;
  }

  [frozen-to-end] [part~='resize-handle'] {
    left: 0;
    right: auto;
  }

  [frozen-to-end] [part~='resize-handle']::before {
    left: 0;
    right: auto;
  }

  [first-frozen-to-end] [part~='resize-handle']::before {
    width: 18px;
    transform: none;
  }

  [first-frozen-to-end] {
    margin-inline-start: auto;
  }

  /* Hide resize handle if scrolled to end */
  :host(:not([overflow~='end'])) [first-frozen-to-end] [part~='resize-handle'] {
    display: none;
  }

  #scroller[column-resizing] {
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  /* Sizer styles */
  #sizer {
    display: flex;
    position: absolute;
    visibility: hidden;
  }

  #sizer [part~='details-cell'] {
    display: none !important;
  }

  #sizer [part~='cell'][hidden] {
    display: none !important;
  }

  #sizer [part~='cell'] {
    display: block;
    flex-shrink: 0;
    line-height: 0;
    height: 0 !important;
    min-height: 0 !important;
    max-height: 0 !important;
    padding: 0 !important;
    border: none !important;
  }

  #sizer [part~='cell']::before {
    content: '-';
  }

  #sizer [part~='cell'] ::slotted(vaadin-grid-cell-content) {
    display: none !important;
  }

  /* RTL specific styles */

  :host([dir='rtl']) #items,
  :host([dir='rtl']) #header,
  :host([dir='rtl']) #footer {
    left: auto;
  }

  :host([dir='rtl']) [part~='reorder-ghost'] {
    left: auto;
    right: 0;
  }

  :host([dir='rtl']) [part~='resize-handle'] {
    left: 0;
    right: auto;
  }

  :host([dir='rtl']) [part~='resize-handle']::before {
    transform: translateX(50%);
  }

  :host([dir='rtl']) [last-column] [part~='resize-handle']::before,
  :host([dir='rtl']) [last-frozen] [part~='resize-handle']::before {
    left: 0;
    right: auto;
  }

  :host([dir='rtl']) [frozen-to-end] [part~='resize-handle'] {
    right: 0;
    left: auto;
  }

  :host([dir='rtl']) [frozen-to-end] [part~='resize-handle']::before {
    right: 0;
    left: auto;
  }

  @media (forced-colors: active) {
    [part~='selected-row'] [part~='first-column-cell']::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      border: 2px solid;
    }

    [part~='focused-cell']::before {
      outline: 2px solid !important;
      outline-offset: -1px;
    }
  }
`;O("vaadin-grid",Qf,{moduleId:"vaadin-grid-styles"});let Rf=class extends Pf(gd(Cb(cd(Ja)))){static get template(){return Fb`
      <div
        id="scroller"
        safari$="[[_safari]]"
        ios$="[[_ios]]"
        loading$="[[loading]]"
        column-reordering-allowed$="[[columnReorderingAllowed]]"
      >
        <table id="table" role="treegrid" aria-multiselectable="true" tabindex="0">
          <caption id="sizer" part="row"></caption>
          <thead id="header" role="rowgroup"></thead>
          <tbody id="items" role="rowgroup"></tbody>
          <tfoot id="footer" role="rowgroup"></tfoot>
        </table>

        <div part="reorder-ghost"></div>
      </div>

      <slot name="tooltip"></slot>

      <div id="focusexit" tabindex="0"></div>
    `}static get is(){return"vaadin-grid"}};X(Rf);const Sf=b=>class extends ad(b){static get properties(){return{_childColumns:{value(){return this._getChildColumns(this)}},flexGrow:{type:Number,readOnly:!0,sync:!0},width:{type:String,readOnly:!0},_visibleChildColumns:Array,_colSpan:Number,_rootColumns:Array}}static get observers(){return"_groupFrozenChanged(frozen, _rootColumns);_groupFrozenToEndChanged(frozenToEnd, _rootColumns);_groupHiddenChanged(hidden);_colSpanChanged(_colSpan, _headerCell, _footerCell);_groupOrderChanged(_order, _rootColumns);_groupReorderStatusChanged(_reorderStatus, _rootColumns);_groupResizableChanged(resizable, _rootColumns)".split(";")}connectedCallback(){super.connectedCallback();
this._addNodeObserver();this._updateFlexAndWidth()}disconnectedCallback(){super.disconnectedCallback();this._observer&&this._observer.disconnect()}_columnPropChanged(a,c){"hidden"===a&&(this._preventHiddenSynchronization=!0,this._updateVisibleChildColumns(this._childColumns),this._preventHiddenSynchronization=!1);/flexGrow|width|hidden|_childColumns/u.test(a)&&this._updateFlexAndWidth();"frozen"!==a||this.frozen||(this.frozen=c);"lastFrozen"!==a||this._lastFrozen||(this._lastFrozen=c);"frozenToEnd"!==
a||this.frozenToEnd||(this.frozenToEnd=c);"firstFrozenToEnd"!==a||this._firstFrozenToEnd||(this._firstFrozenToEnd=c)}_groupOrderChanged(a,c){if(c){const d=c.slice(0);a?(c=10**(/(0+)$/u.exec(a).pop().length-(~~(Math.log(c.length)/Math.LN10)+1)),d[0]&&d[0]._order&&d.sort((e,f)=>e._order-f._order),lc(d,c,a)):d.forEach(e=>{e._order=0})}}_groupReorderStatusChanged(a,c){void 0!==a&&void 0!==c&&c.forEach(d=>{d._reorderStatus=a})}_groupResizableChanged(a,c){void 0!==a&&void 0!==c&&c.forEach(d=>{d.resizable=
a})}_updateVisibleChildColumns(a){this._visibleChildColumns=Array.prototype.filter.call(a,c=>!c.hidden);this._colSpan=this._visibleChildColumns.length;this._updateAutoHidden()}_updateFlexAndWidth(){if(this._visibleChildColumns){if(0<this._visibleChildColumns.length){const a=this._visibleChildColumns.reduce((c,d)=>c+=` + ${(d.width||"0px").replace("calc","")}`,"").substring(3);this._setWidth(`calc(${a})`)}else this._setWidth("0px");this._setFlexGrow(Array.prototype.reduce.call(this._visibleChildColumns,
(a,c)=>a+c.flexGrow,0))}}__scheduleAutoFreezeWarning(a,c){if(this._grid){const d=c.replace(/([A-Z])/gu,"-$1").toLowerCase(),e=a[0][c]||a[0].hasAttribute(d);a.every(f=>(f[c]||f.hasAttribute(d))===e)||(this._grid.__autoFreezeWarningDebouncer=x.debounce(this._grid.__autoFreezeWarningDebouncer,V,()=>{console.warn(`WARNING: Joining ${c} and non-${c} Grid columns inside the same column group! `+"This will automatically freeze all the joined columns to avoid rendering issues. "+`If this was intentional, consider marking each joined column explicitly as ${c}. `+
`Otherwise, exclude the ${c} columns from the joined group.`)}))}}_groupFrozenChanged(a,c){void 0!==c&&void 0!==a&&!1!==a&&(this.__scheduleAutoFreezeWarning(c,"frozen"),Array.from(c).forEach(d=>{d.frozen=a}))}_groupFrozenToEndChanged(a,c){void 0!==c&&void 0!==a&&!1!==a&&(this.__scheduleAutoFreezeWarning(c,"frozenToEnd"),Array.from(c).forEach(d=>{d.frozenToEnd=a}))}_groupHiddenChanged(a){(a||this.__groupHiddenInitialized)&&this._synchronizeHidden();this.__groupHiddenInitialized=!0}_updateAutoHidden(){const a=
this._autoHidden;this._autoHidden=0===(this._visibleChildColumns||[]).length;if(a||this._autoHidden)this.hidden=this._autoHidden}_synchronizeHidden(){this._childColumns&&!this._preventHiddenSynchronization&&this._childColumns.forEach(a=>{a.hidden=this.hidden})}_colSpanChanged(a,c,d){c&&(c.setAttribute("colspan",a),this._grid&&this._grid._a11yUpdateCellColspan(c,a));d&&(d.setAttribute("colspan",a),this._grid&&this._grid._a11yUpdateCellColspan(d,a))}_getChildColumns(a){return fa.getColumns(a)}_addNodeObserver(){this._observer=
new fa(this,()=>{this._preventHiddenSynchronization=!0;this._childColumns=this._rootColumns=this._getChildColumns(this);this._updateVisibleChildColumns(this._childColumns);this._preventHiddenSynchronization=!1;this._grid&&this._grid._debounceUpdateColumnTree&&this._grid._debounceUpdateColumnTree()});this._observer.flush()}_isColumnElement(a){return a.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(a.localName)}};class Tf extends Sf(Ja){static get is(){return"vaadin-grid-column-group"}}X(Tf);const Uf=
C(b=>class extends b{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready();this._createDelegateAttrsObserver();this._createDelegatePropsObserver()}_stateTargetChanged(a){a&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach(a=>
{this._delegateAttribute(a,this[a])})}_ensurePropsDelegated(){this.constructor.delegateProps.forEach(a=>{this._delegateProperty(a,this[a])})}_delegateAttrsChanged(...a){this.constructor.delegateAttrs.forEach((c,d)=>{this._delegateAttribute(c,a[d])})}_delegatePropsChanged(...a){this.constructor.delegateProps.forEach((c,d)=>{this._delegateProperty(c,a[d])})}_delegateAttribute(a,c){this.stateTarget&&("invalid"===a&&this._delegateAttribute("aria-invalid",c?"true":!1),"boolean"===typeof c?this.stateTarget.toggleAttribute(a,
c):c?this.stateTarget.setAttribute(a,c):this.stateTarget.removeAttribute(a))}_delegateProperty(a,c){this.stateTarget&&(this.stateTarget[a]=c)}}),Vf=C(b=>class extends b{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged"},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0,sync:!0},_hasInputValue:{type:Boolean,value:!1,observer:"_hasInputValueChanged"}}}constructor(){super();this._boundOnInput=this.__onInput.bind(this);
this._boundOnChange=this._onChange.bind(this)}get _hasValue(){return null!=this.value&&""!==this.value}get _inputElementValueProperty(){return"value"}get _inputElementValue(){return this.inputElement?this.inputElement[this._inputElementValueProperty]:void 0}set _inputElementValue(a){this.inputElement&&(this.inputElement[this._inputElementValueProperty]=a)}clear(){this._hasInputValue=!1;this._inputElementValue=this.value=""}_addInputListeners(a){a.addEventListener("input",this._boundOnInput);a.addEventListener("change",
this._boundOnChange)}_removeInputListeners(a){a.removeEventListener("input",this._boundOnInput);a.removeEventListener("change",this._boundOnChange)}_forwardInputValue(a){this.inputElement&&(this._inputElementValue=null!=a?a:"")}_inputElementChanged(a,c){a?this._addInputListeners(a):c&&this._removeInputListeners(c)}_hasInputValueChanged(a,c){(a||c)&&this.dispatchEvent(new CustomEvent("has-input-value-changed"))}__onInput(a){this._setHasInputValue(a);this._onInput(a)}_onInput(a){const c=a.composedPath()[0];
this.__userInput=a.isTrusted;this.value=c.value;this.__userInput=!1}_onChange(a){}_toggleHasValue(a){this.toggleAttribute("has-value",a)}_valueChanged(a,c){this._toggleHasValue(this._hasValue);if(""!==a||void 0!==c)this.__userInput||this._forwardInputValue(a)}_setHasInputValue(a){this._hasInputValue=0<a.composedPath()[0].value.length}}),Wf=C(b=>class extends Uf(Ib(Vf(b))){static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0}}}static get delegateProps(){return[...super.delegateProps,
"checked"]}_onChange(a){this._toggleChecked(a.target.checked)}_toggleChecked(a){this.checked=a}});class Xf extends Jb{constructor(b,a){super(b,"input","input",{initializer:(c,d)=>{d.value&&(c.value=d.value);d.type&&c.setAttribute("type",d.type);c.id=this.defaultId;"function"===typeof a&&a(c)},useUniqueId:!0})}}class Yf extends Jb{constructor(b,a,c,d={}){super(b,a,c,{...d,useUniqueId:!0})}initCustomNode(b){this.__updateNodeId(b);this.__notifyChange(b)}teardownNode(b){(b=this.getSlotChild())&&b!==this.defaultNode?
this.__notifyChange(b):(this.restoreDefaultNode(),this.updateDefaultNode(this.node))}attachDefaultNode(){const b=super.attachDefaultNode();b&&this.__updateNodeId(b);return b}restoreDefaultNode(){}updateDefaultNode(b){this.__notifyChange(b)}observeNode(b){this.__nodeObserver&&this.__nodeObserver.disconnect();this.__nodeObserver=new MutationObserver(a=>{a.forEach(c=>{const d=c.target,e=d===this.node;"attributes"===c.type?e&&this.__updateNodeId(d):(e||d.parentElement===this.node)&&this.__notifyChange(this.node)})});
this.__nodeObserver.observe(b,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__hasContent(b){return b?b.nodeType===Node.ELEMENT_NODE&&(customElements.get(b.localName)||0<b.children.length)||b.textContent&&""!==b.textContent.trim():!1}__notifyChange(b){this.dispatchEvent(new CustomEvent("slot-content-changed",{detail:{hasContent:this.__hasContent(b),node:b}}))}__updateNodeId(b){const a=!this.nodes||b===this.nodes[0];b.nodeType!==Node.ELEMENT_NODE||this.multiple&&!a||
b.id||(b.id=this.defaultId)}}class Zf extends Yf{constructor(b){super(b,"label","label")}setLabel(b){this.label=b;this.getSlotChild()||this.restoreDefaultNode();this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){var {label:b}=this;b&&""!==b.trim()&&(b=this.attachDefaultNode(),this.observeNode(b))}updateDefaultNode(b){b&&(b.textContent=this.label);super.updateDefaultNode(b)}initCustomNode(b){super.initCustomNode(b);this.observeNode(b)}}const $f=C(b=>class extends cd(b){static get properties(){return{label:{type:String,
observer:"_labelChanged"}}}constructor(){super();this._labelController=new Zf(this);this._labelController.addEventListener("slot-content-changed",a=>{this.toggleAttribute("has-label",a.detail.hasContent)})}get _labelId(){const a=this._labelNode;return a&&a.id}get _labelNode(){return this._labelController.node}ready(){super.ready();this.addController(this._labelController)}_labelChanged(a){this._labelController.setLabel(a)}});class ag{constructor(b,a){this.input=b;this.__preventDuplicateLabelClick=
this.__preventDuplicateLabelClick.bind(this);a.addEventListener("slot-content-changed",c=>{this.__initLabel(c.detail.node)});this.__initLabel(a.node)}__initLabel(b){b&&(b.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&b.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){const b=a=>{a.stopImmediatePropagation();this.input.removeEventListener("click",b)};this.input.addEventListener("click",b)}}const bg=b=>class extends $f(Wf(Jf(Hf(b)))){static get properties(){return{indeterminate:{type:Boolean,
notify:!0,value:!1,reflectToAttribute:!0},name:{type:String,value:""},tabindex:{type:Number,value:0,reflectToAttribute:!0}}}static get delegateProps(){return[...super.delegateProps,"indeterminate"]}static get delegateAttrs(){return[...super.delegateAttrs,"name"]}constructor(){super();this._setType("checkbox");this.value="on"}ready(){super.ready();this.addController(new Xf(this,a=>{this._setInputElement(a);this._setFocusElement(a);this.ariaTarget=this.stateTarget=a}));this.addController(new ag(this.inputElement,
this._labelController))}_shouldSetActive(a){return"a"===a.target.localName?!1:super._shouldSetActive(a)}_toggleChecked(a){this.indeterminate&&(this.indeterminate=!1);super._toggleChecked(a)}},cg=E`
  :host {
    display: inline-block;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([disabled]) {
    -webkit-tap-highlight-color: transparent;
  }

  .vaadin-checkbox-container {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: baseline;
  }

  [part='checkbox'],
  ::slotted(input),
  ::slotted(label) {
    grid-row: 1;
  }

  [part='checkbox'],
  ::slotted(input) {
    grid-column: 1;
  }

  [part='checkbox'] {
    width: var(--vaadin-checkbox-size, 1em);
    height: var(--vaadin-checkbox-size, 1em);
    --_input-border-width: var(--vaadin-input-field-border-width, 0);
    --_input-border-color: var(--vaadin-input-field-border-color, transparent);
    box-shadow: inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
  }

  [part='checkbox']::before {
    display: block;
    content: '\\202F';
    line-height: var(--vaadin-checkbox-size, 1em);
    contain: paint;
  }

  /* visually hidden */
  ::slotted(input) {
    opacity: 0;
    cursor: inherit;
    margin: 0;
    align-self: stretch;
    -webkit-appearance: none;
    width: initial;
    height: initial;
  }

  @media (forced-colors: active) {
    [part='checkbox'] {
      outline: 1px solid;
      outline-offset: -1px;
    }

    :host([disabled]) [part='checkbox'],
    :host([disabled]) [part='checkbox']::after {
      outline-color: GrayText;
    }

    :host(:is([checked], [indeterminate])) [part='checkbox']::after {
      outline: 1px solid;
      outline-offset: -1px;
      border-radius: inherit;
    }

    :host([focused]) [part='checkbox'],
    :host([focused]) [part='checkbox']::after {
      outline-width: 2px;
    }
  }
`;O("vaadin-checkbox",cg,{moduleId:"vaadin-checkbox-styles"});class dg extends bg(gd(Cb(Ja))){static get is(){return"vaadin-checkbox"}static get template(){return Fb`
      <div class="vaadin-checkbox-container">
        <div part="checkbox" aria-hidden="true"></div>
        <slot name="input"></slot>
        <slot name="label"></slot>
      </div>
      <slot name="tooltip"></slot>
    `}ready(){super.ready();this._tooltipController=new nd(this);this._tooltipController.setAriaTarget(this.inputElement);this.addController(this._tooltipController)}}X(dg);const eg=b=>class extends b{static get properties(){return{width:{type:String,value:"58px",sync:!0},flexGrow:{type:Number,value:0,sync:!0},selectAll:{type:Boolean,value:!1,notify:!0,sync:!0},autoSelect:{type:Boolean,value:!1,sync:!0},dragSelect:{type:Boolean,value:!1,sync:!0},_indeterminate:{type:Boolean,sync:!0},_selectAllHidden:Boolean}}static get observers(){return["_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header, selectAll, _indeterminate, _selectAllHidden)"]}_defaultHeaderRenderer(a,
c){c=a.firstElementChild;c||(c=document.createElement("vaadin-checkbox"),c.setAttribute("aria-label","Select All"),c.classList.add("vaadin-grid-select-all-checkbox"),a.appendChild(c),c.addEventListener("checked-changed",this.__onSelectAllCheckedChanged.bind(this)));a=this.__isChecked(this.selectAll,this._indeterminate);c.__rendererChecked=a;c.checked=a;c.hidden=this._selectAllHidden;c.indeterminate=this._indeterminate}_defaultRenderer(a,c,{item:d,selected:e}){c=a.firstElementChild;c||(c=document.createElement("vaadin-checkbox"),
c.setAttribute("aria-label","Select Row"),a.appendChild(c),c.addEventListener("checked-changed",this.__onSelectRowCheckedChanged.bind(this)),Da(a,"track",this.__onCellTrack.bind(this)),a.addEventListener("mousedown",this.__onCellMouseDown.bind(this)),a.addEventListener("click",this.__onCellClick.bind(this)));c.__item=d;c.__rendererChecked=e;c.checked=e}__onSelectAllCheckedChanged(a){a.target.checked!==a.target.__rendererChecked&&(this._indeterminate||a.target.checked?this._selectAll():this._deselectAll())}__onSelectRowCheckedChanged(a){a.target.checked!==
a.target.__rendererChecked&&(a.target.checked?this._selectItem(a.target.__item):this._deselectItem(a.target.__item))}__onCellTrack(a){if(this.dragSelect)if(this.__dragCurrentY=a.detail.y,this.__dragDy=a.detail.dy,"start"===a.detail.state){const c=this._grid._getRenderedRows().find(d=>d.contains(a.currentTarget.assignedSlot));this.__selectOnDrag=!this._grid._isSelected(c._item);this.__dragStartIndex=c.index;this.__dragStartItem=c._item;this.__dragAutoScroller()}else"end"===a.detail.state&&(this.__dragStartItem&&
(this.__selectOnDrag?this._selectItem(this.__dragStartItem):this._deselectItem(this.__dragStartItem)),setTimeout(()=>{this.__dragStartIndex=void 0}))}__onCellMouseDown(a){this.dragSelect&&a.preventDefault()}__onCellClick(a){void 0!==this.__dragStartIndex&&a.preventDefault()}_onCellKeyDown(a){const c=a.composedPath()[0];32===a.keyCode&&(c===this._headerCell||this._cells.includes(c)&&!this.autoSelect)&&(a=c._content.firstElementChild,a.checked=!a.checked)}__dragAutoScroller(){if(void 0!==this.__dragStartIndex){var a=
this._grid._getRenderedRows(),c=a.find(e=>{e=e.getBoundingClientRect();return this.__dragCurrentY>=e.top&&this.__dragCurrentY<=e.bottom}),d=c?c.index:void 0;c=this.__getScrollableArea();this.__dragCurrentY<c.top?d=this._grid._firstVisibleIndex:this.__dragCurrentY>c.bottom&&(d=this._grid._lastVisibleIndex);void 0!==d&&a.forEach(e=>{if(d>this.__dragStartIndex&&e.index>=this.__dragStartIndex&&e.index<=d||d<this.__dragStartIndex&&e.index<=this.__dragStartIndex&&e.index>=d)this.__selectOnDrag?this._selectItem(e._item):
this._deselectItem(e._item),this.__dragStartItem=void 0});a=.15*c.height;0>this.__dragDy&&this.__dragCurrentY<c.top+a&&(this._grid.$.table.scrollTop-=10*Math.min(1,(c.top+a-this.__dragCurrentY)/a));0<this.__dragDy&&this.__dragCurrentY>c.bottom-a&&(this._grid.$.table.scrollTop+=10*Math.min(1,(this.__dragCurrentY-(c.bottom-a))/a));setTimeout(()=>this.__dragAutoScroller(),10)}}__getScrollableArea(){const a=this._grid.$.table.getBoundingClientRect(),c=this._grid.$.header.getBoundingClientRect(),d=this._grid.$.footer.getBoundingClientRect();
return{top:a.top+c.height,bottom:a.bottom-d.height,left:a.left,right:a.right,height:a.height-c.height-d.height,width:a.width}}_selectAll(){}_deselectAll(){}_selectItem(a){}_deselectItem(a){}__isChecked(a,c){return c||a}},fg=b=>class extends eg(b){static get properties(){return{__previousActiveItem:Object}}static get observers(){return["__onSelectAllChanged(selectAll)"]}constructor(){super();this.__boundOnActiveItemChanged=this.__onActiveItemChanged.bind(this);this.__boundOnDataProviderChanged=this.__onDataProviderChanged.bind(this);
this.__boundOnSelectedItemsChanged=this.__onSelectedItemsChanged.bind(this)}disconnectedCallback(){this._grid.removeEventListener("active-item-changed",this.__boundOnActiveItemChanged);this._grid.removeEventListener("data-provider-changed",this.__boundOnDataProviderChanged);this._grid.removeEventListener("filter-changed",this.__boundOnSelectedItemsChanged);this._grid.removeEventListener("selected-items-changed",this.__boundOnSelectedItemsChanged);super.disconnectedCallback()}connectedCallback(){super.connectedCallback();
this._grid&&(this._grid.addEventListener("active-item-changed",this.__boundOnActiveItemChanged),this._grid.addEventListener("data-provider-changed",this.__boundOnDataProviderChanged),this._grid.addEventListener("filter-changed",this.__boundOnSelectedItemsChanged),this._grid.addEventListener("selected-items-changed",this.__boundOnSelectedItemsChanged))}__onSelectAllChanged(a){void 0!==a&&this._grid&&(this.__selectAllInitialized?this._selectAllChangeLock||(a&&this.__hasArrayDataProvider()?this.__withFilteredItemsArray(c=>
{this._grid.selectedItems=c}):this._grid.selectedItems=[]):this.__selectAllInitialized=!0)}__arrayContains(a,c){return Array.isArray(a)&&Array.isArray(c)&&c.every(d=>a.includes(d))}_selectAll(){this.selectAll=!0}_deselectAll(){this.selectAll=!1}_selectItem(a){this._grid.selectItem(a)}_deselectItem(a){this._grid.deselectItem(a)}__onActiveItemChanged(a){a=a.detail.value;if(this.autoSelect){const c=a||this.__previousActiveItem;c&&this._grid._toggleItem(c)}this.__previousActiveItem=a}__hasArrayDataProvider(){return Array.isArray(this._grid.items)&&
!!this._grid.dataProvider}__onSelectedItemsChanged(){this._selectAllChangeLock=!0;this.__hasArrayDataProvider()&&this.__withFilteredItemsArray(a=>{this._grid.selectedItems.length?this.__arrayContains(this._grid.selectedItems,a)?(this.selectAll=!0,this._indeterminate=!1):(this.selectAll=!1,this._indeterminate=!0):this._indeterminate=this.selectAll=!1});this._selectAllChangeLock=!1}__onDataProviderChanged(){this._selectAllHidden=!Array.isArray(this._grid.items)}__withFilteredItemsArray(a){const c={page:0,
pageSize:Infinity,sortOrders:[],filters:this._grid._mapFilters()};this._grid.dataProvider(c,d=>a(d))}};class gg extends fg(bd){static get is(){return"vaadin-grid-selection-column"}}X(gg);O("vaadin-grid-sorter",E`
    :host {
      justify-content: flex-start;
      align-items: baseline;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: var(--lumo-clickable-cursor);
    }

    [part='content'] {
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [part='indicators'] {
      margin-left: var(--lumo-space-s);
    }

    [part='indicators']::before {
      transform: scale(0.8);
    }

    :host(:not([direction]):not(:hover)) [part='indicators'] {
      color: var(--lumo-tertiary-text-color);
    }

    :host([direction]) {
      color: var(--vaadin-selection-color-text, var(--lumo-primary-text-color));
    }

    [part='order'] {
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part='indicators'] {
      margin-right: var(--lumo-space-s);
      margin-left: 0;
    }
  `,{moduleId:"lumo-grid-sorter"});const td=document.createElement("template");td.innerHTML="\n  \x3cstyle\x3e\n    @font-face {\n      font-family: 'vaadin-grid-sorter-icons';\n      src: url(data:application/font-woff;charset\x3dutf-8;base64,d09GRgABAAAAAAQwAA0AAAAABuwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEFAAAABkAAAAcfep+mUdERUYAAAP4AAAAHAAAAB4AJwAOT1MvMgAAAZgAAAA/AAAAYA8TBPpjbWFwAAAB7AAAAFUAAAFeF1fZ4mdhc3AAAAPwAAAACAAAAAgAAAAQZ2x5ZgAAAlgAAABcAAAAnMvguMloZWFkAAABMAAAAC8AAAA2C5Ap72hoZWEAAAFgAAAAHQAAACQGbQPHaG10eAAAAdgAAAAUAAAAHAoAAABsb2NhAAACRAAAABIAAAASAIwAYG1heHAAAAGAAAAAFgAAACAACwAKbmFtZQAAArQAAAECAAACZxWCgKhwb3N0AAADuAAAADUAAABZCrApUXicY2BkYGAA4rDECVrx/DZfGbhZGEDgyqNPOxH0/wNMq5kPALkcDEwgUQBWRA0dAHicY2BkYGA+8P8AAwMLAwgwrWZgZEAFbABY4QM8AAAAeJxjYGRgYOAAQiYGEICQSAAAAi8AFgAAeJxjYGY6yziBgZWBgWkm0xkGBoZ+CM34msGYkZMBFTAKoAkwODAwvmRiPvD/AIMDMxCD1CDJKjAwAgBktQsXAHicY2GAAMZQCM0EwqshbAALxAEKeJxjYGBgZoBgGQZGBhCIAPIYwXwWBhsgzcXAwcAEhIwMCi+Z/v/9/x+sSuElA4T9/4k4K1gHFwMMMILMY2QDYmaoABOQYGJABUA7WBiGNwAAJd4NIQAAAAAAAAAACAAIABAAGAAmAEAATgAAeJyNjLENgDAMBP9tIURJwQCMQccSZgk2i5fIYBDAidJjycXr7x5EPwE2wY8si7jmyBNXGo/bNBerxJNrpxhbO3/fEFpx8ZICpV+ghxJ74fAMe+h7Ox14AbrsHB14nK2QQWrDMBRER4mTkhQK3ZRQKOgCNk7oGQqhhEIX2WSlWEI1BAlkJ5CDdNsj5Ey9Rncdi38ES+jzNJo/HwTgATcoDEthhY3wBHc4CE+pfwsX5F/hGe7Vo/AcK/UhvMSz+mGXKhZU6pww8ISz3oWn1BvhgnwTnuEJf8Jz1OpFeIlX9YULDLdFi4ASHolkSR0iuYdjLak1vAequBhj21D61Nqyi6l3qWybGPjySbPHGScGJl6dP58MYcQRI0bts7mjebBqrFENH7t3qWtj0OuqHnXcW7b0HOTZFnKryRGW2hFX1m0O2vEM3opNMfTau+CS6Z3Vx6veNnEXY6jwDxhsc2gAAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSrpYEBlIbxjQDrzgsuAAAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKyoz1cD0o087YTQATOcIewAAAA\x3d\x3d) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n  \x3c/style\x3e\n";
document.head.appendChild(td.content);O("vaadin-grid-sorter",E`
    :host {
      display: inline-flex;
      cursor: pointer;
      max-width: 100%;
    }

    [part='content'] {
      flex: 1 1 auto;
    }

    [part='indicators'] {
      position: relative;
      align-self: center;
      flex: none;
    }

    [part='order'] {
      display: inline;
      vertical-align: super;
    }

    [part='indicators']::before {
      font-family: 'vaadin-grid-sorter-icons';
      display: inline-block;
    }

    :host(:not([direction])) [part='indicators']::before {
      content: '\\e901';
    }

    :host([direction='asc']) [part='indicators']::before {
      content: '\\e900';
    }

    :host([direction='desc']) [part='indicators']::before {
      content: '\\e902';
    }
  `,{moduleId:"vaadin-grid-sorter-styles"});const hg=b=>class extends b{static get properties(){return{path:String,direction:{type:String,reflectToAttribute:!0,notify:!0,value:null,sync:!0},_order:{type:Number,value:null,sync:!0},_isConnected:{type:Boolean,observer:"__isConnectedChanged"}}}static get observers(){return["_pathOrDirectionChanged(path, direction)"]}ready(){super.ready();this.addEventListener("click",this._onClick.bind(this))}connectedCallback(){super.connectedCallback();this._isConnected=
!0}disconnectedCallback(){super.disconnectedCallback();this._isConnected=!1;!this.parentNode&&this._grid&&this._grid.__removeSorters([this])}_pathOrDirectionChanged(){this.__dispatchSorterChangedEvenIfPossible()}__isConnectedChanged(a,c){!1!==c&&this.__dispatchSorterChangedEvenIfPossible()}__dispatchSorterChangedEvenIfPossible(){void 0!==this.path&&void 0!==this.direction&&this._isConnected&&(this.dispatchEvent(new CustomEvent("sorter-changed",{detail:{shiftClick:!!this._shiftClick,fromSorterClick:!!this._fromSorterClick},
bubbles:!0,composed:!0})),this._shiftClick=this._fromSorterClick=!1)}_getDisplayOrder(a){return null===a?"":a+1}_onClick(a){if(!a.defaultPrevented){var c=this.getRootNode().activeElement;this!==c&&this.contains(c)||(a.preventDefault(),this._shiftClick=a.shiftKey,this._fromSorterClick=!0,this.direction="asc"===this.direction?"desc":"desc"===this.direction?null:"asc")}}};class ig extends hg(Cb(Gb(Ja))){static get template(){return Fb`
      <div part="content">
        <slot></slot>
      </div>
      <div part="indicators">
        <span part="order">[[_getDisplayOrder(_order)]]</span>
      </div>
    `}static get is(){return"vaadin-grid-sorter"}}X(ig);var jg=["Enter"," "];let t=class extends vd{constructor(b,a){super(b,a);this._columnElements=[];this.messages=this.itemIdPath=this._grid=null;this.selectionColumnEnabled=!0;this.viewModel=new wd}initialize(){this.addHandles([this.columns.on("before-changes",()=>this.renderNow()),this.columns.on("change",()=>this.onColumnChange()),ha.on(()=>this.highlightIds,"before-add",({target:b})=>{!this.multipleSelectionEnabled&&b.length&&b.removeAll()}),
this.rowHighlightIds.on("change",()=>this.generateCellPartNames()),ha.watch(()=>this.viewModel.size,()=>this._updateGridSize()),ha.watch(()=>this.viewModel.editing,()=>{this.generateCellPartNames();this.requestContentUpdate()}),ha.watch(()=>this.store?.state,(b,a)=>{"ready"!==b||"loaded"!==a&&"error"!==a||this.refreshPageCache()}),ha.on(()=>this._table,"scroll",()=>this.viewModel.closeColumnMenus()),ha.watch(()=>this.multipleSelectionEnabled,b=>{!b&&1<this.highlightIds.length&&this.highlightIds.removeAll()})])}destroy(){this.resetColumns();
this.columns.destroyed||this.columns.destroy()}resetColumns(){this.columns.drain(b=>!b.destroyed&&b.destroy())}get _editInfos(){return this.viewModel.editorColumns.map(b=>b.editInfo).filter(Kb.isSome)}get _columnRendering(){return this.columnPerformanceModeEnabled?"lazy":"eager"}get _selectedItems(){const {highlightIds:b,store:a}=this;return b.toArray().map(c=>a?.getItemByObjectId(c)??{objectId:c})}get _table(){return this._grid?.$?.table}get cellPartNameGenerator(){return this.viewModel.cellPartNameGenerator}set cellPartNameGenerator(b){this.viewModel.cellPartNameGenerator=
b}get columns(){return this.viewModel.columns}set columns(b){this.viewModel.columns=b}get columnPerformanceModeEnabled(){return this.viewModel.columnPerformanceModeEnabled}set columnPerformanceModeEnabled(b){this.viewModel.columnPerformanceModeEnabled=b}get columnReorderingEnabled(){return this.viewModel.columnReorderingEnabled}set columnReorderingEnabled(b){this.viewModel.columnReorderingEnabled=b}get dataProvider(){return this.viewModel.dataProvider}set dataProvider(b){this.viewModel.dataProvider=
b}get highlightIds(){return this.viewModel.highlightIds}set highlightIds(b){this.viewModel.highlightIds=b}get isEditingActive(){return!!this._editInfos.length}get label(){return this.messages?.widgetLabel??""}set label(b){this._overrideIfSome("label",b)}get multipleSelectionEnabled(){return this.viewModel.multipleSelectionEnabled}set multipleSelectionEnabled(b){this.viewModel.multipleSelectionEnabled=b}get multiSortEnabled(){return this.viewModel.multiSortEnabled}set multiSortEnabled(b){this.viewModel.multiSortEnabled=
b}get pageSize(){return this.viewModel.pageSize}set pageSize(b){this.viewModel.pageSize=b}get rowDetailsRenderer(){return this.viewModel.rowDetailsRenderer}set rowDetailsRenderer(b){this.viewModel.rowDetailsRenderer=b}get rowHighlightIds(){return this.viewModel.rowHighlightIds}set rowHighlightIds(b){this.viewModel.rowHighlightIds=b}get size(){return this.viewModel.size}get sortOrders(){return this._grid?._sorters?this._grid._sorters.filter(b=>!!b&&b.path).map(({direction:b,path:a})=>({direction:b,
path:a})):[]}get store(){return this.viewModel.store}set store(b){this.viewModel.store=b}getColumnProps(b,a){const {id:c}=this,{autoWidth:d,direction:e,fieldName:f,flexGrow:g,frozen:h,frozenToEnd:k,hidden:l,invalid:m,label:n,resizable:p,textAlign:q,width:A}=b,{renderFunction:v,footerRenderFunction:z,headerRenderFunction:I}=b;return{footerRenderer:z?(y,F)=>z({root:y,column:F}):void 0,headerRenderer:I?(y,F)=>I({root:y,column:F}):void 0,renderer:v?(y,F,Ia)=>v({root:y,column:F,rowData:Ia}):void 0,autoWidth:d,
direction:e,flexGrow:g,frozen:h,frozenToEnd:k,hidden:l,key:`${c}_${f}_${a}`,resizable:p,bind:this,header:n,headerPartName:m?"invalid":void 0,path:f,"text-align":q,width:"number"===typeof A?`${A}px`:A,afterCreate:this._afterColumnCreate,afterRemoved:this._afterColumnRemoved}}clearSelection(){this._clearSelection();this.scheduleRender()}clearSort(){let b=!1;this._grid&&(this._grid._sorters?.length&&(this._grid._sorters.forEach(a=>{a._order=null;a.direction=null}),b=!0),this.columns.length&&this.columns.some(a=>
!!a.direction)&&(this.columns.forEach(a=>a.direction=null),b=!0),b&&(this.notifyChange("sortOrders"),this.scheduleRender()))}findColumn(b){return this.viewModel.findColumn(b)}generateCellPartNames(){this._grid?.generateCellPartNames()}getRowContainingNode(b){return this._grid?._getRowContainingNode(b)}getSlotElementByName(b){return this._grid?.shadowRoot?.querySelector(`slot[name='${b}']`)??null}hideColumn(b){this.viewModel.hideColumn(b)}recalculateColumnWidths(){this._grid?.recalculateColumnWidths()}async reset(){this._clearSelection();
await this.store?.reset();this.scrollToTop()}refreshPageCache(){this._grid?.clearCache()}requestContentUpdate(){this._grid?.requestContentUpdate()}selectRows(b){const {itemIdPath:a}=this;b=(b?.filter(c=>!this.highlightIds.includes(c[a]))).map(c=>c[a]);b.length&&(this.multipleSelectionEnabled||(this.highlightIds.removeAll(),b.splice(1)),this.highlightIds.addMany(b))}deselectRows(b){const {itemIdPath:a}=this;b=b?.map(c=>c[a])||[];b.length&&this.highlightIds.removeMany(b)}showColumn(b){this.viewModel.showColumn(b)}sort({path:b,
direction:a}){this.viewModel.sortColumn(b,a);this.notifyChange("sortOrders")}scrollToIndex(b){this._grid?.scrollToIndex(b)}scrollToTop(){this.scrollToIndex(0)}scrollToBottom(){this.scrollToIndex(Infinity)}scrollLeft(b){const {_table:a}=this;a&&(a.scrollLeft=b)}toggleColumnVisibility(b){this.viewModel.toggleColumnVisibility(b)}onColumnChange(){this._columnElements.forEach(b=>{this._applyRenderersToColumnElement(b)});this.requestContentUpdate()}render(){return W.tsx("div",{bind:this,class:this.classes("esri-grid",
xd.globalCss.widget)},W.tsx("div",{bind:this,class:"esri-grid__content"},this._renderGrid()))}_renderGrid(){return W.tsx("vaadin-grid",{afterCreate:this._afterGridCreate,afterUpdate:this._afterGridUpdate,bind:this,cellPartNameGenerator:this.cellPartNameGenerator,class:"esri-grid__grid",columnRendering:this._columnRendering,columnReorderingAllowed:this.columnReorderingEnabled,dataProvider:this.dataProvider,id:`${this.id}_grid`,itemIdPath:this.itemIdPath,multiSort:this.multiSortEnabled,pageSize:this.pageSize,
ref:"grid",rowDetailsRenderer:this.rowDetailsRenderer,selectedItems:this._selectedItems,size:this.size},this._renderAllColumns())}_renderAllColumns(){return"disabled"!==this.viewModel.state&&this.columns.length?[this._renderSelectionColumn(),this._renderColumns()]:null}_renderSelectionColumn(){return W.tsx("vaadin-grid-selection-column",{_selectAllHidden:!0,bind:this,dragSelect:!0,frozen:!0,hidden:!this.selectionColumnEnabled,selectAll:!1,sortable:!1,textAlign:"center"})}_renderColumns(){return Array.from(this.columns,
(b,a)=>"columns"in b?this._renderGroupColumn(b,a):W.tsx("vaadin-grid-column",{...this.getColumnProps(b,a)})).filter(Kb.isSome)}_renderGroupColumn(b,a){const c=this.getColumnProps(b,a);if(c.hidden||!b.columns)return null;b=b.columns.filter(({hidden:d})=>!d);return b.length?W.tsx("vaadin-grid-column-group",{...c},b.map(d=>W.tsx("vaadin-grid-column",{...this.getColumnProps(d,a)}))):null}_afterGridCreate(b){const a=this._grid=b;a.setAttribute("theme","compact column-borders");customElements.whenDefined("vaadin-grid").then(()=>
{this._appendStyles();this._addGridEventListeners()});a.__updateSorter=c=>{var d=a._sorters;const e=!d.includes(c);if(c.direction||!e)c._order=null,a.multiSort?(a._removeArrayItem(d,c),c.direction&&(null!=c._initialOrder?(e?d[c._initialOrder]=c:d.splice(c._initialOrder,0,c),c._initialOrder=null):d.unshift(c)),a.__updateSortOrders()):c.direction&&(d=d.filter(f=>f!==c),a._sorters=[c],d.forEach(f=>{f._order=null;f.direction=null}))}}_appendStyles(){const b=this._grid?.shadowRoot,a=document.createElement("style");
b&&(a.textContent='\n      #items [part~\x3d"row"][editing], \n      #items [part~\x3d"row"][editing][selected] { \n        z-index: 2; \n      }\n\n      #items [part~\x3d"editing"],\n      #items [part~\x3d"editing"][selected] {\n        z-index: 3;\n      }\n\n      [frozen], [frozen-to-end] {\n        z-index: 4;\n      }\n\n      [last-frozen] {\n        overflow: visible;\n      }\n\n      [part~\x3d\'cell\'] ::slotted(vaadin-grid-cell-content) {\n        align-items: center;\n        box-sizing: border-box !important;\n        height: 100%;\n        line-height: 2em;\n        min-height: 40px;\n      }\n\n      #items [part~\x3d"text-wrap"] {\n        text-wrap: wrap;\n      }\n    ',
b.appendChild(a))}_afterGridUpdate(b){this._grid||(this._grid=b)}_afterColumnCreate(b){this._columnElements.push(b)}_afterColumnRemoved(b){b=this._columnElements.indexOf(b,0);-1<b&&this._columnElements.splice(b,1)}_updateGridSize(){this._grid&&(this._grid.size=this.size||0,this.scheduleRender())}_addGridEventListeners(){const b=this._grid;Lb.assertIsSome(b);this.addHandles([gb.on(b,["click","keydown","pointerover","pointerout"],a=>this._onGridInteraction(a)),gb.on(b,"selected-items-changed",a=>this._onSelectedItemsChange(a)),
gb.on(b,"sorter-changed",()=>this.notifyChange("sortOrders"))])}_onGridInteraction(b){var a=this._grid;Lb.assertIsSome(a);if(("pointerover"===b.type||"pointerout"===b.type)&&b.relatedTarget!==a){const {target:h,relatedTarget:k}=b;if(!this._isGridCellContentNode(h)||!this._isGridCellContentNode(k))return}let c=null;try{c=a.getEventContext(b)}catch(h){}if(c){var {column:d,index:e,item:f,section:g}=c;g&&("header"===g&&"keydown"===b.type&&d?.path&&jg.includes(b.key)&&this.findColumn(d.path)?.sort(),a=
`cell-${b.type}`,this.emit(a,{type:a,context:c,index:e,item:f,native:b,path:d?.path??void 0}))}}_isGridCellContentNode(b){return!!(b&&b instanceof HTMLElement&&"vaadin-grid-cell-content"===b.localName)}_clearSelection(){this.highlightIds.removeAll()}_onSelectedItemsChange(b){const {highlightIds:a,itemIdPath:c}=this,d=b.detail.value.map(e=>e[c]);b=d.filter(e=>!a.includes(e));if(!this.multipleSelectionEnabled&&b.length&&a.length)a.removeAll(),a.add(b[0]);else{const e=a.filter(f=>!d.includes(f));a.removeMany(e);
a.addMany(b)}}_applyRenderersToColumnElement(b){var a=b?.path;if(a=null!=a?this.findColumn(a):void 0)try{const {renderFunction:c,footerRenderFunction:d,headerRenderFunction:e}=a;c&&"renderer"in b&&(b.renderer=(f,g,h)=>c({root:f,column:g,rowData:h}));d&&(b.footerRenderer=(f,g)=>d({root:f,column:g}));e&&(b.headerRenderer=(f,g)=>e({root:f,column:g}))}catch(c){}}};u.__decorate([w.property()],t.prototype,"_editInfos",null);u.__decorate([w.property()],t.prototype,"_columnElements",void 0);u.__decorate([w.property()],
t.prototype,"_columnRendering",null);u.__decorate([w.property()],t.prototype,"_selectedItems",null);u.__decorate([w.property()],t.prototype,"_grid",void 0);u.__decorate([w.property()],t.prototype,"_table",null);u.__decorate([w.property()],t.prototype,"cellPartNameGenerator",null);u.__decorate([w.property()],t.prototype,"columns",null);u.__decorate([w.property()],t.prototype,"columnPerformanceModeEnabled",null);u.__decorate([w.property()],t.prototype,"columnReorderingEnabled",null);u.__decorate([w.property()],
t.prototype,"dataProvider",null);u.__decorate([w.property()],t.prototype,"highlightIds",null);u.__decorate([w.property()],t.prototype,"isEditingActive",null);u.__decorate([w.property()],t.prototype,"itemIdPath",void 0);u.__decorate([w.property()],t.prototype,"label",null);u.__decorate([w.property(),yd.messageBundle("esri/widgets/FeatureTable/t9n/FeatureTable")],t.prototype,"messages",void 0);u.__decorate([w.property()],t.prototype,"multipleSelectionEnabled",null);u.__decorate([w.property()],t.prototype,
"multiSortEnabled",null);u.__decorate([w.property()],t.prototype,"pageSize",null);u.__decorate([w.property()],t.prototype,"rowDetailsRenderer",null);u.__decorate([w.property()],t.prototype,"rowHighlightIds",null);u.__decorate([w.property()],t.prototype,"selectionColumnEnabled",void 0);u.__decorate([w.property()],t.prototype,"size",null);u.__decorate([w.property({readOnly:!0})],t.prototype,"sortOrders",null);u.__decorate([w.property()],t.prototype,"store",null);u.__decorate([w.property()],t.prototype,
"viewModel",void 0);return t=u.__decorate([ud.subclass("esri.widgets.FeatureTable.Grid.Grid")],t)});