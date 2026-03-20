var x=Object.defineProperty,A=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var u=(t,e,o)=>e in t?x(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,n=(t,e)=>{for(var o in e||(e={}))k.call(e,o)&&u(t,o,e[o]);if(p)for(var o of p(e))y.call(e,o)&&u(t,o,e[o]);return t},w=(t,e)=>A(t,L(e));var d=(t,e)=>{var o={};for(var a in t)k.call(t,a)&&e.indexOf(a)<0&&(o[a]=t[a]);if(t!=null&&p)for(var a of p(t))e.indexOf(a)<0&&y.call(t,a)&&(o[a]=t[a]);return o};import{r as c}from"./vendor.P6ObTfV7.js";/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),b=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,o,a)=>a?a.toUpperCase():o.toLowerCase()),C=t=>{const e=b(t);return e.charAt(0).toUpperCase()+e.slice(1)},f=(...t)=>t.filter((e,o,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===o).join(" ").trim(),$=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var j={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=c.forwardRef((B,g)=>{var m=B,{color:t="currentColor",size:e=24,strokeWidth:o=2,absoluteStrokeWidth:a,className:i="",children:r,iconNode:h}=m,s=d(m,["color","size","strokeWidth","absoluteStrokeWidth","className","children","iconNode"]);return c.createElement("svg",n(n(w(n({ref:g},j),{width:e,height:e,stroke:t,strokeWidth:a?Number(o)*24/Number(e):o,className:f("lucide",i)}),!r&&!$(s)&&{"aria-hidden":"true"}),s),[...h.map(([v,M])=>c.createElement(v,M)),...Array.isArray(r)?r:[r]])});/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=(t,e)=>{const o=c.forwardRef((h,r)=>{var s=h,{className:a}=s,i=d(s,["className"]);return c.createElement(E,n({ref:r,iconNode:e,className:f(`lucide-${_(C(t))}`,`lucide-${t}`,a)},i))});return o.displayName=C(t),o};/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z",key:"1pdavp"}],["path",{d:"M20.054 15.987H3.946",key:"14rxg9"}]],P=l("laptop",N);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],R=l("moon",Z);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],S=l("sun",z);export{P as L,R as M,S};
