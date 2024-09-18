var ko=e=>{throw TypeError(e)};var br=(e,t,n)=>t.has(e)||ko("Cannot "+n);var Y=(e,t,n)=>(br(e,t,"read from private field"),n?n.call(e):t.get(e)),_e=(e,t,n)=>t.has(e)?ko("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),Re=(e,t,n,r)=>(br(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),mr=(e,t,n)=>(br(e,t,"access private method"),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();/**
* @vue/shared v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Yr(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const le={},Ut=[],nt=()=>{},wl=()=>!1,tr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),qr=e=>e.startsWith("onUpdate:"),Se=Object.assign,Zr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},vl=Object.prototype.hasOwnProperty,te=(e,t)=>vl.call(e,t),K=Array.isArray,jt=e=>nr(e)==="[object Map]",Ns=e=>nr(e)==="[object Set]",W=e=>typeof e=="function",pe=e=>typeof e=="string",Et=e=>typeof e=="symbol",ue=e=>e!==null&&typeof e=="object",Ms=e=>(ue(e)||W(e))&&W(e.then)&&W(e.catch),Is=Object.prototype.toString,nr=e=>Is.call(e),_l=e=>nr(e).slice(8,-1),Ls=e=>nr(e)==="[object Object]",Jr=e=>pe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,fn=Yr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),rr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},yl=/-(\w)/g,Ye=rr(e=>e.replace(yl,(t,n)=>n?n.toUpperCase():"")),xl=/\B([A-Z])/g,Pt=rr(e=>e.replace(xl,"-$1").toLowerCase()),or=rr(e=>e.charAt(0).toUpperCase()+e.slice(1)),wr=rr(e=>e?`on${or(e)}`:""),xt=(e,t)=>!Object.is(e,t),vr=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Ps=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},El=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ao;const Fs=()=>Ao||(Ao=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qr(e){if(K(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=pe(r)?kl(r):Qr(r);if(o)for(const s in o)t[s]=o[s]}return t}else if(pe(e)||ue(e))return e}const Sl=/;(?![^(]*\))/g,Rl=/:([^]+)/,Tl=/\/\*[^]*?\*\//g;function kl(e){const t={};return e.replace(Tl,"").split(Sl).forEach(n=>{if(n){const r=n.split(Rl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function It(e){let t="";if(pe(e))t=e;else if(K(e))for(let n=0;n<e.length;n++){const r=It(e[n]);r&&(t+=r+" ")}else if(ue(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Al="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ol=Yr(Al);function Bs(e){return!!e||e===""}const Ds=e=>!!(e&&e.__v_isRef===!0),Kn=e=>pe(e)?e:e==null?"":K(e)||ue(e)&&(e.toString===Is||!W(e.toString))?Ds(e)?Kn(e.value):JSON.stringify(e,Hs,2):String(e),Hs=(e,t)=>Ds(t)?Hs(e,t.value):jt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,o],s)=>(n[_r(r,s)+" =>"]=o,n),{})}:Ns(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>_r(n))}:Et(t)?_r(t):ue(t)&&!K(t)&&!Ls(t)?String(t):t,_r=(e,t="")=>{var n;return Et(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $e;class Cl{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=$e,!t&&$e&&(this.index=($e.scopes||($e.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=$e;try{return $e=this,t()}finally{$e=n}}}on(){$e=this}off(){$e=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function Nl(){return $e}let ie;const yr=new WeakSet;class $s{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.nextEffect=void 0,this.cleanup=void 0,this.scheduler=void 0,$e&&$e.active&&$e.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,yr.has(this)&&(yr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||(this.flags|=8,this.nextEffect=dn,dn=this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Oo(this),Us(this);const t=ie,n=Xe;ie=this,Xe=!0;try{return this.fn()}finally{js(this),ie=t,Xe=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)no(t);this.deps=this.depsTail=void 0,Oo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?yr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Pr(this)&&this.run()}get dirty(){return Pr(this)}}let zs=0,dn;function eo(){zs++}function to(){if(--zs>0)return;let e;for(;dn;){let t=dn;for(dn=void 0;t;){const n=t.nextEffect;if(t.nextEffect=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Us(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function js(e){let t,n=e.depsTail;for(let r=n;r;r=r.prevDep)r.version===-1?(r===n&&(n=r.prevDep),no(r),Ml(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0;e.deps=t,e.depsTail=n}function Pr(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&Vs(t.dep.computed)||t.dep.version!==t.version)return!0;return!!e._dirty}function Vs(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===mn))return;e.globalVersion=mn;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&!Pr(e)){e.flags&=-3;return}const n=ie,r=Xe;ie=e,Xe=!0;try{Us(e);const o=e.fn(e._value);(t.version===0||xt(o,e._value))&&(e._value=o,t.version++)}catch(o){throw t.version++,o}finally{ie=n,Xe=r,js(e),e.flags&=-3}}function no(e){const{dep:t,prevSub:n,nextSub:r}=e;if(n&&(n.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=n,e.nextSub=void 0),t.subs===e&&(t.subs=n),!t.subs&&t.computed){t.computed.flags&=-5;for(let o=t.computed.deps;o;o=o.nextDep)no(o)}}function Ml(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Xe=!0;const Ks=[];function St(){Ks.push(Xe),Xe=!1}function Rt(){const e=Ks.pop();Xe=e===void 0?!0:e}function Oo(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ie;ie=void 0;try{t()}finally{ie=n}}}let mn=0;class ro{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0}track(t){if(!ie||!Xe||ie===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ie)n=this.activeLink={dep:this,sub:ie,version:this.version,nextDep:void 0,prevDep:void 0,nextSub:void 0,prevSub:void 0,prevActiveLink:void 0},ie.deps?(n.prevDep=ie.depsTail,ie.depsTail.nextDep=n,ie.depsTail=n):ie.deps=ie.depsTail=n,ie.flags&4&&Gs(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ie.depsTail,n.nextDep=void 0,ie.depsTail.nextDep=n,ie.depsTail=n,ie.deps===n&&(ie.deps=r)}return n}trigger(t){this.version++,mn++,this.notify(t)}notify(t){eo();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()}finally{to()}}}function Gs(e){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)Gs(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}const Fr=new WeakMap,Nt=Symbol(""),Br=Symbol(""),wn=Symbol("");function Ae(e,t,n){if(Xe&&ie){let r=Fr.get(e);r||Fr.set(e,r=new Map);let o=r.get(n);o||r.set(n,o=new ro),o.track()}}function dt(e,t,n,r,o,s){const i=Fr.get(e);if(!i){mn++;return}const l=a=>{a&&a.trigger()};if(eo(),t==="clear")i.forEach(l);else{const a=K(e),d=a&&Jr(n);if(a&&n==="length"){const u=Number(r);i.forEach((h,p)=>{(p==="length"||p===wn||!Et(p)&&p>=u)&&l(h)})}else switch(n!==void 0&&l(i.get(n)),d&&l(i.get(wn)),t){case"add":a?d&&l(i.get("length")):(l(i.get(Nt)),jt(e)&&l(i.get(Br)));break;case"delete":a||(l(i.get(Nt)),jt(e)&&l(i.get(Br)));break;case"set":jt(e)&&l(i.get(Nt));break}}to()}function Bt(e){const t=re(e);return t===e?t:(Ae(t,"iterate",wn),je(e)?t:t.map(Te))}function sr(e){return Ae(e=re(e),"iterate",wn),e}const Il={__proto__:null,[Symbol.iterator](){return xr(this,Symbol.iterator,Te)},concat(...e){return Bt(this).concat(...e.map(t=>K(t)?Bt(t):t))},entries(){return xr(this,"entries",e=>(e[1]=Te(e[1]),e))},every(e,t){return lt(this,"every",e,t,void 0,arguments)},filter(e,t){return lt(this,"filter",e,t,n=>n.map(Te),arguments)},find(e,t){return lt(this,"find",e,t,Te,arguments)},findIndex(e,t){return lt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return lt(this,"findLast",e,t,Te,arguments)},findLastIndex(e,t){return lt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return lt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Er(this,"includes",e)},indexOf(...e){return Er(this,"indexOf",e)},join(e){return Bt(this).join(e)},lastIndexOf(...e){return Er(this,"lastIndexOf",e)},map(e,t){return lt(this,"map",e,t,void 0,arguments)},pop(){return ln(this,"pop")},push(...e){return ln(this,"push",e)},reduce(e,...t){return Co(this,"reduce",e,t)},reduceRight(e,...t){return Co(this,"reduceRight",e,t)},shift(){return ln(this,"shift")},some(e,t){return lt(this,"some",e,t,void 0,arguments)},splice(...e){return ln(this,"splice",e)},toReversed(){return Bt(this).toReversed()},toSorted(e){return Bt(this).toSorted(e)},toSpliced(...e){return Bt(this).toSpliced(...e)},unshift(...e){return ln(this,"unshift",e)},values(){return xr(this,"values",Te)}};function xr(e,t,n){const r=sr(e),o=r[t]();return r!==e&&!je(e)&&(o._next=o.next,o.next=()=>{const s=o._next();return s.value&&(s.value=n(s.value)),s}),o}const Ll=Array.prototype;function lt(e,t,n,r,o,s){const i=sr(e),l=i!==e&&!je(e),a=i[t];if(a!==Ll[t]){const h=a.apply(e,s);return l?Te(h):h}let d=n;i!==e&&(l?d=function(h,p){return n.call(this,Te(h),p,e)}:n.length>2&&(d=function(h,p){return n.call(this,h,p,e)}));const u=a.call(i,d,r);return l&&o?o(u):u}function Co(e,t,n,r){const o=sr(e);let s=n;return o!==e&&(je(e)?n.length>3&&(s=function(i,l,a){return n.call(this,i,l,a,e)}):s=function(i,l,a){return n.call(this,i,Te(l),a,e)}),o[t](s,...r)}function Er(e,t,n){const r=re(e);Ae(r,"iterate",wn);const o=r[t](...n);return(o===-1||o===!1)&&lo(n[0])?(n[0]=re(n[0]),r[t](...n)):o}function ln(e,t,n=[]){St(),eo();const r=re(e)[t].apply(e,n);return to(),Rt(),r}const Pl=Yr("__proto__,__v_isRef,__isVue"),Ws=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Et));function Fl(e){Et(e)||(e=String(e));const t=re(this);return Ae(t,"has",e),t.hasOwnProperty(e)}class Xs{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const o=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(o?s?Yl:Js:s?Zs:qs).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const i=K(t);if(!o){let a;if(i&&(a=Il[n]))return a;if(n==="hasOwnProperty")return Fl}const l=Reflect.get(t,n,ye(t)?t:r);return(Et(n)?Ws.has(n):Pl(n))||(o||Ae(t,"get",n),s)?l:ye(l)?i&&Jr(n)?l:l.value:ue(l)?o?ei(l):lr(l):l}}class Ys extends Xs{constructor(t=!1){super(!1,t)}set(t,n,r,o){let s=t[n];if(!this._isShallow){const a=Lt(s);if(!je(r)&&!Lt(r)&&(s=re(s),r=re(r)),!K(t)&&ye(s)&&!ye(r))return a?!1:(s.value=r,!0)}const i=K(t)&&Jr(n)?Number(n)<t.length:te(t,n),l=Reflect.set(t,n,r,ye(t)?t:o);return t===re(o)&&(i?xt(r,s)&&dt(t,"set",n,r):dt(t,"add",n,r)),l}deleteProperty(t,n){const r=te(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&r&&dt(t,"delete",n,void 0),o}has(t,n){const r=Reflect.has(t,n);return(!Et(n)||!Ws.has(n))&&Ae(t,"has",n),r}ownKeys(t){return Ae(t,"iterate",K(t)?"length":Nt),Reflect.ownKeys(t)}}class Bl extends Xs{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Dl=new Ys,Hl=new Bl,$l=new Ys(!0);const oo=e=>e,ir=e=>Reflect.getPrototypeOf(e);function Pn(e,t,n=!1,r=!1){e=e.__v_raw;const o=re(e),s=re(t);n||(xt(t,s)&&Ae(o,"get",t),Ae(o,"get",s));const{has:i}=ir(o),l=r?oo:n?ao:Te;if(i.call(o,t))return l(e.get(t));if(i.call(o,s))return l(e.get(s));e!==o&&e.get(t)}function Fn(e,t=!1){const n=this.__v_raw,r=re(n),o=re(e);return t||(xt(e,o)&&Ae(r,"has",e),Ae(r,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function Bn(e,t=!1){return e=e.__v_raw,!t&&Ae(re(e),"iterate",Nt),Reflect.get(e,"size",e)}function No(e,t=!1){!t&&!je(e)&&!Lt(e)&&(e=re(e));const n=re(this);return ir(n).has.call(n,e)||(n.add(e),dt(n,"add",e,e)),this}function Mo(e,t,n=!1){!n&&!je(t)&&!Lt(t)&&(t=re(t));const r=re(this),{has:o,get:s}=ir(r);let i=o.call(r,e);i||(e=re(e),i=o.call(r,e));const l=s.call(r,e);return r.set(e,t),i?xt(t,l)&&dt(r,"set",e,t):dt(r,"add",e,t),this}function Io(e){const t=re(this),{has:n,get:r}=ir(t);let o=n.call(t,e);o||(e=re(e),o=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return o&&dt(t,"delete",e,void 0),s}function Lo(){const e=re(this),t=e.size!==0,n=e.clear();return t&&dt(e,"clear",void 0,void 0),n}function Dn(e,t){return function(r,o){const s=this,i=s.__v_raw,l=re(i),a=t?oo:e?ao:Te;return!e&&Ae(l,"iterate",Nt),i.forEach((d,u)=>r.call(o,a(d),a(u),s))}}function Hn(e,t,n){return function(...r){const o=this.__v_raw,s=re(o),i=jt(s),l=e==="entries"||e===Symbol.iterator&&i,a=e==="keys"&&i,d=o[e](...r),u=n?oo:t?ao:Te;return!t&&Ae(s,"iterate",a?Br:Nt),{next(){const{value:h,done:p}=d.next();return p?{value:h,done:p}:{value:l?[u(h[0]),u(h[1])]:u(h),done:p}},[Symbol.iterator](){return this}}}}function pt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function zl(){const e={get(s){return Pn(this,s)},get size(){return Bn(this)},has:Fn,add:No,set:Mo,delete:Io,clear:Lo,forEach:Dn(!1,!1)},t={get(s){return Pn(this,s,!1,!0)},get size(){return Bn(this)},has:Fn,add(s){return No.call(this,s,!0)},set(s,i){return Mo.call(this,s,i,!0)},delete:Io,clear:Lo,forEach:Dn(!1,!0)},n={get(s){return Pn(this,s,!0)},get size(){return Bn(this,!0)},has(s){return Fn.call(this,s,!0)},add:pt("add"),set:pt("set"),delete:pt("delete"),clear:pt("clear"),forEach:Dn(!0,!1)},r={get(s){return Pn(this,s,!0,!0)},get size(){return Bn(this,!0)},has(s){return Fn.call(this,s,!0)},add:pt("add"),set:pt("set"),delete:pt("delete"),clear:pt("clear"),forEach:Dn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Hn(s,!1,!1),n[s]=Hn(s,!0,!1),t[s]=Hn(s,!1,!0),r[s]=Hn(s,!0,!0)}),[e,n,t,r]}const[Ul,jl,Vl,Kl]=zl();function so(e,t){const n=t?e?Kl:Vl:e?jl:Ul;return(r,o,s)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(te(n,o)&&o in r?n:r,o,s)}const Gl={get:so(!1,!1)},Wl={get:so(!1,!0)},Xl={get:so(!0,!1)};const qs=new WeakMap,Zs=new WeakMap,Js=new WeakMap,Yl=new WeakMap;function ql(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zl(e){return e.__v_skip||!Object.isExtensible(e)?0:ql(_l(e))}function lr(e){return Lt(e)?e:io(e,!1,Dl,Gl,qs)}function Qs(e){return io(e,!1,$l,Wl,Zs)}function ei(e){return io(e,!0,Hl,Xl,Js)}function io(e,t,n,r,o){if(!ue(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=o.get(e);if(s)return s;const i=Zl(e);if(i===0)return e;const l=new Proxy(e,i===2?r:n);return o.set(e,l),l}function Vt(e){return Lt(e)?Vt(e.__v_raw):!!(e&&e.__v_isReactive)}function Lt(e){return!!(e&&e.__v_isReadonly)}function je(e){return!!(e&&e.__v_isShallow)}function lo(e){return e?!!e.__v_raw:!1}function re(e){const t=e&&e.__v_raw;return t?re(t):e}function Jl(e){return!te(e,"__v_skip")&&Object.isExtensible(e)&&Ps(e,"__v_skip",!0),e}const Te=e=>ue(e)?lr(e):e,ao=e=>ue(e)?ei(e):e;function ye(e){return e?e.__v_isRef===!0:!1}function co(e){return ti(e,!1)}function Ql(e){return ti(e,!0)}function ti(e,t){return ye(e)?e:new ea(e,t)}class ea{constructor(t,n){this.dep=new ro,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:re(t),this._value=n?t:Te(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||je(t)||Lt(t);t=r?t:re(t),xt(t,n)&&(this._rawValue=t,this._value=r?t:Te(t),this.dep.trigger())}}function ze(e){return ye(e)?e.value:e}const ta={get:(e,t,n)=>t==="__v_raw"?e:ze(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return ye(o)&&!ye(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function ni(e){return Vt(e)?e:new Proxy(e,ta)}class na{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new ro(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=mn-1,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){this.flags|=16,ie!==this&&this.dep.notify()}get value(){const t=this.dep.track();return Vs(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function ra(e,t,n=!1){let r,o;return W(e)?r=e:(r=e.get,o=e.set),new na(r,o,n)}const $n={},Gn=new WeakMap;let Ot;function oa(e,t=!1,n=Ot){if(n){let r=Gn.get(n);r||Gn.set(n,r=[]),r.push(e)}}function sa(e,t,n=le){const{immediate:r,deep:o,once:s,scheduler:i,augmentJob:l,call:a}=n,d=L=>o?L:je(L)||o===!1||o===0?_t(L,1):_t(L);let u,h,p,b,P=!1,I=!1;if(ye(e)?(h=()=>e.value,P=je(e)):Vt(e)?(h=()=>d(e),P=!0):K(e)?(I=!0,P=e.some(L=>Vt(L)||je(L)),h=()=>e.map(L=>{if(ye(L))return L.value;if(Vt(L))return d(L);if(W(L))return a?a(L,2):L()})):W(e)?t?h=a?()=>a(e,2):e:h=()=>{if(p){St();try{p()}finally{Rt()}}const L=Ot;Ot=u;try{return a?a(e,3,[b]):e(b)}finally{Ot=L}}:h=nt,t&&o){const L=h,Z=o===!0?1/0:o;h=()=>_t(L(),Z)}const V=Nl(),$=()=>{u.stop(),V&&Zr(V.effects,u)};if(s)if(t){const L=t;t=(...Z)=>{L(...Z),$()}}else{const L=h;h=()=>{L(),$()}}let F=I?new Array(e.length).fill($n):$n;const H=L=>{if(!(!(u.flags&1)||!u.dirty&&!L))if(t){const Z=u.run();if(o||P||(I?Z.some((ae,se)=>xt(ae,F[se])):xt(Z,F))){p&&p();const ae=Ot;Ot=u;try{const se=[Z,F===$n?void 0:I&&F[0]===$n?[]:F,b];a?a(t,3,se):t(...se),F=Z}finally{Ot=ae}}}else u.run()};return l&&l(H),u=new $s(h),u.scheduler=i?()=>i(H,!1):H,b=L=>oa(L,!1,u),p=u.onStop=()=>{const L=Gn.get(u);if(L){if(a)a(L,4);else for(const Z of L)Z();Gn.delete(u)}},t?r?H(!0):F=u.run():i?i(H.bind(null,!0),!0):u.run(),$.pause=u.pause.bind(u),$.resume=u.resume.bind(u),$.stop=$,$}function _t(e,t=1/0,n){if(t<=0||!ue(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,ye(e))_t(e.value,t,n);else if(K(e))for(let r=0;r<e.length;r++)_t(e[r],t,n);else if(Ns(e)||jt(e))e.forEach(r=>{_t(r,t,n)});else if(Ls(e)){for(const r in e)_t(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&_t(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Mn(e,t,n,r){try{return r?e(...r):e()}catch(o){ar(o,t,n)}}function ot(e,t,n,r){if(W(e)){const o=Mn(e,t,n,r);return o&&Ms(o)&&o.catch(s=>{ar(s,t,n)}),o}if(K(e)){const o=[];for(let s=0;s<e.length;s++)o.push(ot(e[s],t,n,r));return o}}function ar(e,t,n,r=!0){const o=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||le;if(t){let l=t.parent;const a=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](e,a,d)===!1)return}l=l.parent}if(s){St(),Mn(s,null,10,[e,a,d]),Rt();return}}ia(e,n,o,r,i)}function ia(e,t,n,r=!0,o=!1){if(o)throw e;console.error(e)}let vn=!1,Dr=!1;const Ie=[];let Qe=0;const Kt=[];let bt=null,$t=0;const ri=Promise.resolve();let uo=null;function oi(e){const t=uo||ri;return e?t.then(this?e.bind(this):e):t}function la(e){let t=vn?Qe+1:0,n=Ie.length;for(;t<n;){const r=t+n>>>1,o=Ie[r],s=_n(o);s<e||s===e&&o.flags&2?t=r+1:n=r}return t}function fo(e){if(!(e.flags&1)){const t=_n(e),n=Ie[Ie.length-1];!n||!(e.flags&2)&&t>=_n(n)?Ie.push(e):Ie.splice(la(t),0,e),e.flags|=1,si()}}function si(){!vn&&!Dr&&(Dr=!0,uo=ri.then(li))}function aa(e){K(e)?Kt.push(...e):bt&&e.id===-1?bt.splice($t+1,0,e):e.flags&1||(Kt.push(e),e.flags|=1),si()}function Po(e,t,n=vn?Qe+1:0){for(;n<Ie.length;n++){const r=Ie[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;Ie.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&=-2}}}function ii(e){if(Kt.length){const t=[...new Set(Kt)].sort((n,r)=>_n(n)-_n(r));if(Kt.length=0,bt){bt.push(...t);return}for(bt=t,$t=0;$t<bt.length;$t++){const n=bt[$t];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}bt=null,$t=0}}const _n=e=>e.id==null?e.flags&2?-1:1/0:e.id;function li(e){Dr=!1,vn=!0;try{for(Qe=0;Qe<Ie.length;Qe++){const t=Ie[Qe];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Mn(t,t.i,t.i?15:14),t.flags&=-2)}}finally{for(;Qe<Ie.length;Qe++){const t=Ie[Qe];t&&(t.flags&=-2)}Qe=0,Ie.length=0,ii(),vn=!1,uo=null,(Ie.length||Kt.length)&&li()}}let Le=null,ai=null;function Wn(e){const t=Le;return Le=e,ai=e&&e.type.__scopeId||null,t}function mt(e,t=Le,n){if(!t||e._n)return e;const r=(...o)=>{r._d&&Vo(-1);const s=Wn(t);let i;try{i=e(...o)}finally{Wn(s),r._d&&Vo(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function kt(e,t,n,r){const o=e.dirs,s=t&&t.dirs;for(let i=0;i<o.length;i++){const l=o[i];s&&(l.oldValue=s[i].value);let a=l.dir[r];a&&(St(),ot(a,n,8,[e.el,l,e,t]),Rt())}}const ca=Symbol("_vte"),ua=e=>e.__isTeleport;function ho(e,t){e.shapeFlag&6&&e.component?(e.transition=t,ho(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function ci(e,t){return W(e)?Se({name:e.name},t,{setup:e}):e}function ui(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Hr(e,t,n,r,o=!1){if(K(e)){e.forEach((P,I)=>Hr(P,t&&(K(t)?t[I]:t),n,r,o));return}if(Gt(r)&&!o)return;const s=r.shapeFlag&4?mo(r.component):r.el,i=o?null:s,{i:l,r:a}=e,d=t&&t.r,u=l.refs===le?l.refs={}:l.refs,h=l.setupState,p=re(h),b=h===le?()=>!1:P=>te(p,P);if(d!=null&&d!==a&&(pe(d)?(u[d]=null,b(d)&&(h[d]=null)):ye(d)&&(d.value=null)),W(a))Mn(a,l,12,[i,u]);else{const P=pe(a),I=ye(a);if(P||I){const V=()=>{if(e.f){const $=P?b(a)?h[a]:u[a]:a.value;o?K($)&&Zr($,s):K($)?$.includes(s)||$.push(s):P?(u[a]=[s],b(a)&&(h[a]=u[a])):(a.value=[s],e.k&&(u[e.k]=a.value))}else P?(u[a]=i,b(a)&&(h[a]=i)):I&&(a.value=i,e.k&&(u[e.k]=i))};i?(V.id=-1,He(V,n)):V()}}}const Gt=e=>!!e.type.__asyncLoader,fi=e=>e.type.__isKeepAlive;function fa(e,t){di(e,"a",t)}function da(e,t){di(e,"da",t)}function di(e,t,n=ke){const r=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(cr(t,r,n),n){let o=n.parent;for(;o&&o.parent;)fi(o.parent.vnode)&&ha(r,t,n,o),o=o.parent}}function ha(e,t,n,r){const o=cr(t,e,r,!0);hi(()=>{Zr(r[t],o)},n)}function cr(e,t,n=ke,r=!1){if(n){const o=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...i)=>{St();const l=In(n),a=ot(t,n,e,i);return l(),Rt(),a});return r?o.unshift(s):o.push(s),s}}const ht=e=>(t,n=ke)=>{(!dr||e==="sp")&&cr(e,(...r)=>t(...r),n)},pa=ht("bm"),ga=ht("m"),ba=ht("bu"),ma=ht("u"),wa=ht("bum"),hi=ht("um"),va=ht("sp"),_a=ht("rtg"),ya=ht("rtc");function xa(e,t=ke){cr("ec",e,t)}const Ea="components";function Sa(e,t){return Ta(Ea,e,!0,t)||e}const Ra=Symbol.for("v-ndc");function Ta(e,t,n=!0,r=!1){const o=Le||ke;if(o){const s=o.type;{const l=hc(s,!1);if(l&&(l===t||l===Ye(t)||l===or(Ye(t))))return s}const i=Fo(o[e]||s[e],t)||Fo(o.appContext[e],t);return!i&&r?s:i}}function Fo(e,t){return e&&(e[t]||e[Ye(t)]||e[or(Ye(t))])}function on(e,t,n,r){let o;const s=n,i=K(e);if(i||pe(e)){const l=i&&Vt(e);let a=!1;l&&(a=!je(e),e=sr(e)),o=new Array(e.length);for(let d=0,u=e.length;d<u;d++)o[d]=t(a?Te(e[d]):e[d],d,void 0,s)}else if(typeof e=="number"){o=new Array(e);for(let l=0;l<e;l++)o[l]=t(l+1,l,void 0,s)}else if(ue(e))if(e[Symbol.iterator])o=Array.from(e,(l,a)=>t(l,a,void 0,s));else{const l=Object.keys(e);o=new Array(l.length);for(let a=0,d=l.length;a<d;a++){const u=l[a];o[a]=t(e[u],u,a,s)}}else o=[];return o}function ka(e,t,n={},r,o){if(Le.ce||Le.parent&&Gt(Le.parent)&&Le.parent.ce)return ge(),Ko(me,null,[ne("slot",n,r)],64);let s=e[t];s&&s._c&&(s._d=!1),ge();const i=s&&pi(s(n)),l=Ko(me,{key:(n.key||i&&i.key||`_${t}`)+(!i&&r?"_fb":"")},i||[],i&&e._===1?64:-2);return s&&s._c&&(s._d=!0),l}function pi(e){return e.some(t=>Yn(t)?!(t.type===Qt||t.type===me&&!pi(t.children)):!0)?e:null}const $r=e=>e?Li(e)?mo(e):$r(e.parent):null,hn=Se(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>$r(e.parent),$root:e=>$r(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>po(e),$forceUpdate:e=>e.f||(e.f=()=>{fo(e.update)}),$nextTick:e=>e.n||(e.n=oi.bind(e.proxy)),$watch:e=>Xa.bind(e)}),Sr=(e,t)=>e!==le&&!e.__isScriptSetup&&te(e,t),Aa={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:o,props:s,accessCache:i,type:l,appContext:a}=e;let d;if(t[0]!=="$"){const b=i[t];if(b!==void 0)switch(b){case 1:return r[t];case 2:return o[t];case 4:return n[t];case 3:return s[t]}else{if(Sr(r,t))return i[t]=1,r[t];if(o!==le&&te(o,t))return i[t]=2,o[t];if((d=e.propsOptions[0])&&te(d,t))return i[t]=3,s[t];if(n!==le&&te(n,t))return i[t]=4,n[t];zr&&(i[t]=0)}}const u=hn[t];let h,p;if(u)return t==="$attrs"&&Ae(e.attrs,"get",""),u(e);if((h=l.__cssModules)&&(h=h[t]))return h;if(n!==le&&te(n,t))return i[t]=4,n[t];if(p=a.config.globalProperties,te(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:o,ctx:s}=e;return Sr(o,t)?(o[t]=n,!0):r!==le&&te(r,t)?(r[t]=n,!0):te(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,propsOptions:s}},i){let l;return!!n[i]||e!==le&&te(e,i)||Sr(t,i)||(l=s[0])&&te(l,i)||te(r,i)||te(hn,i)||te(o.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:te(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Bo(e){return K(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let zr=!0;function Oa(e){const t=po(e),n=e.proxy,r=e.ctx;zr=!1,t.beforeCreate&&Do(t.beforeCreate,e,"bc");const{data:o,computed:s,methods:i,watch:l,provide:a,inject:d,created:u,beforeMount:h,mounted:p,beforeUpdate:b,updated:P,activated:I,deactivated:V,beforeDestroy:$,beforeUnmount:F,destroyed:H,unmounted:L,render:Z,renderTracked:ae,renderTriggered:se,errorCaptured:Oe,serverPrefetch:be,expose:Ce,inheritAttrs:Fe,components:Ve,directives:Pe,filters:it}=t;if(d&&Ca(d,r,null),i)for(const w in i){const T=i[w];W(T)&&(r[w]=T.bind(n))}if(o){const w=o.call(n,n);ue(w)&&(e.data=lr(w))}if(zr=!0,s)for(const w in s){const T=s[w],U=W(T)?T.bind(n,n):W(T.get)?T.get.bind(n,n):nt,X=!W(T)&&W(T.set)?T.set.bind(n):nt,q=We({get:U,set:X});Object.defineProperty(r,w,{enumerable:!0,configurable:!0,get:()=>q.value,set:ee=>q.value=ee})}if(l)for(const w in l)gi(l[w],r,n,w);if(a){const w=W(a)?a.call(n):a;Reflect.ownKeys(w).forEach(T=>{Un(T,w[T])})}u&&Do(u,e,"c");function fe(w,T){K(T)?T.forEach(U=>w(U.bind(n))):T&&w(T.bind(n))}if(fe(pa,h),fe(ga,p),fe(ba,b),fe(ma,P),fe(fa,I),fe(da,V),fe(xa,Oe),fe(ya,ae),fe(_a,se),fe(wa,F),fe(hi,L),fe(va,be),K(Ce))if(Ce.length){const w=e.exposed||(e.exposed={});Ce.forEach(T=>{Object.defineProperty(w,T,{get:()=>n[T],set:U=>n[T]=U})})}else e.exposed||(e.exposed={});Z&&e.render===nt&&(e.render=Z),Fe!=null&&(e.inheritAttrs=Fe),Ve&&(e.components=Ve),Pe&&(e.directives=Pe),be&&ui(e)}function Ca(e,t,n=nt){K(e)&&(e=Ur(e));for(const r in e){const o=e[r];let s;ue(o)?"default"in o?s=rt(o.from||r,o.default,!0):s=rt(o.from||r):s=rt(o),ye(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:i=>s.value=i}):t[r]=s}}function Do(e,t,n){ot(K(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function gi(e,t,n,r){let o=r.includes(".")?Oi(n,r):()=>n[r];if(pe(e)){const s=t[e];W(s)&&Xt(o,s)}else if(W(e))Xt(o,e.bind(n));else if(ue(e))if(K(e))e.forEach(s=>gi(s,t,n,r));else{const s=W(e.handler)?e.handler.bind(n):t[e.handler];W(s)&&Xt(o,s,e)}}function po(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:i}}=e.appContext,l=s.get(t);let a;return l?a=l:!o.length&&!n&&!r?a=t:(a={},o.length&&o.forEach(d=>Xn(a,d,i,!0)),Xn(a,t,i)),ue(t)&&s.set(t,a),a}function Xn(e,t,n,r=!1){const{mixins:o,extends:s}=t;s&&Xn(e,s,n,!0),o&&o.forEach(i=>Xn(e,i,n,!0));for(const i in t)if(!(r&&i==="expose")){const l=Na[i]||n&&n[i];e[i]=l?l(e[i],t[i]):t[i]}return e}const Na={data:Ho,props:$o,emits:$o,methods:un,computed:un,beforeCreate:Me,created:Me,beforeMount:Me,mounted:Me,beforeUpdate:Me,updated:Me,beforeDestroy:Me,beforeUnmount:Me,destroyed:Me,unmounted:Me,activated:Me,deactivated:Me,errorCaptured:Me,serverPrefetch:Me,components:un,directives:un,watch:Ia,provide:Ho,inject:Ma};function Ho(e,t){return t?e?function(){return Se(W(e)?e.call(this,this):e,W(t)?t.call(this,this):t)}:t:e}function Ma(e,t){return un(Ur(e),Ur(t))}function Ur(e){if(K(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Me(e,t){return e?[...new Set([].concat(e,t))]:t}function un(e,t){return e?Se(Object.create(null),e,t):t}function $o(e,t){return e?K(e)&&K(t)?[...new Set([...e,...t])]:Se(Object.create(null),Bo(e),Bo(t??{})):t}function Ia(e,t){if(!e)return t;if(!t)return e;const n=Se(Object.create(null),e);for(const r in t)n[r]=Me(e[r],t[r]);return n}function bi(){return{app:null,config:{isNativeTag:wl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let La=0;function Pa(e,t){return function(r,o=null){W(r)||(r=Se({},r)),o!=null&&!ue(o)&&(o=null);const s=bi(),i=new WeakSet,l=[];let a=!1;const d=s.app={_uid:La++,_component:r,_props:o,_container:null,_context:s,_instance:null,version:gc,get config(){return s.config},set config(u){},use(u,...h){return i.has(u)||(u&&W(u.install)?(i.add(u),u.install(d,...h)):W(u)&&(i.add(u),u(d,...h))),d},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),d},component(u,h){return h?(s.components[u]=h,d):s.components[u]},directive(u,h){return h?(s.directives[u]=h,d):s.directives[u]},mount(u,h,p){if(!a){const b=d._ceVNode||ne(r,o);return b.appContext=s,p===!0?p="svg":p===!1&&(p=void 0),h&&t?t(b,u):e(b,u,p),a=!0,d._container=u,u.__vue_app__=d,mo(b.component)}},onUnmount(u){l.push(u)},unmount(){a&&(ot(l,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(u,h){return s.provides[u]=h,d},runWithContext(u){const h=Wt;Wt=d;try{return u()}finally{Wt=h}}};return d}}let Wt=null;function Un(e,t){if(ke){let n=ke.provides;const r=ke.parent&&ke.parent.provides;r===n&&(n=ke.provides=Object.create(r)),n[e]=t}}function rt(e,t,n=!1){const r=ke||Le;if(r||Wt){const o=Wt?Wt._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&W(t)?t.call(r&&r.proxy):t}}const mi={},wi=()=>Object.create(mi),vi=e=>Object.getPrototypeOf(e)===mi;function Fa(e,t,n,r=!1){const o={},s=wi();e.propsDefaults=Object.create(null),_i(e,t,o,s);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);n?e.props=r?o:Qs(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function Ba(e,t,n,r){const{props:o,attrs:s,vnode:{patchFlag:i}}=e,l=re(o),[a]=e.propsOptions;let d=!1;if((r||i>0)&&!(i&16)){if(i&8){const u=e.vnode.dynamicProps;for(let h=0;h<u.length;h++){let p=u[h];if(ur(e.emitsOptions,p))continue;const b=t[p];if(a)if(te(s,p))b!==s[p]&&(s[p]=b,d=!0);else{const P=Ye(p);o[P]=jr(a,l,P,b,e,!1)}else b!==s[p]&&(s[p]=b,d=!0)}}}else{_i(e,t,o,s)&&(d=!0);let u;for(const h in l)(!t||!te(t,h)&&((u=Pt(h))===h||!te(t,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(o[h]=jr(a,l,h,void 0,e,!0)):delete o[h]);if(s!==l)for(const h in s)(!t||!te(t,h))&&(delete s[h],d=!0)}d&&dt(e.attrs,"set","")}function _i(e,t,n,r){const[o,s]=e.propsOptions;let i=!1,l;if(t)for(let a in t){if(fn(a))continue;const d=t[a];let u;o&&te(o,u=Ye(a))?!s||!s.includes(u)?n[u]=d:(l||(l={}))[u]=d:ur(e.emitsOptions,a)||(!(a in r)||d!==r[a])&&(r[a]=d,i=!0)}if(s){const a=re(n),d=l||le;for(let u=0;u<s.length;u++){const h=s[u];n[h]=jr(o,a,h,d[h],e,!te(d,h))}}return i}function jr(e,t,n,r,o,s){const i=e[n];if(i!=null){const l=te(i,"default");if(l&&r===void 0){const a=i.default;if(i.type!==Function&&!i.skipFactory&&W(a)){const{propsDefaults:d}=o;if(n in d)r=d[n];else{const u=In(o);r=d[n]=a.call(null,t),u()}}else r=a;o.ce&&o.ce._setProp(n,r)}i[0]&&(s&&!l?r=!1:i[1]&&(r===""||r===Pt(n))&&(r=!0))}return r}const Da=new WeakMap;function yi(e,t,n=!1){const r=n?Da:t.propsCache,o=r.get(e);if(o)return o;const s=e.props,i={},l=[];let a=!1;if(!W(e)){const u=h=>{a=!0;const[p,b]=yi(h,t,!0);Se(i,p),b&&l.push(...b)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!a)return ue(e)&&r.set(e,Ut),Ut;if(K(s))for(let u=0;u<s.length;u++){const h=Ye(s[u]);zo(h)&&(i[h]=le)}else if(s)for(const u in s){const h=Ye(u);if(zo(h)){const p=s[u],b=i[h]=K(p)||W(p)?{type:p}:Se({},p),P=b.type;let I=!1,V=!0;if(K(P))for(let $=0;$<P.length;++$){const F=P[$],H=W(F)&&F.name;if(H==="Boolean"){I=!0;break}else H==="String"&&(V=!1)}else I=W(P)&&P.name==="Boolean";b[0]=I,b[1]=V,(I||te(b,"default"))&&l.push(h)}}const d=[i,l];return ue(e)&&r.set(e,d),d}function zo(e){return e[0]!=="$"&&!fn(e)}const xi=e=>e[0]==="_"||e==="$stable",go=e=>K(e)?e.map(tt):[tt(e)],Ha=(e,t,n)=>{if(t._n)return t;const r=mt((...o)=>go(t(...o)),n);return r._c=!1,r},Ei=(e,t,n)=>{const r=e._ctx;for(const o in e){if(xi(o))continue;const s=e[o];if(W(s))t[o]=Ha(o,s,r);else if(s!=null){const i=go(s);t[o]=()=>i}}},Si=(e,t)=>{const n=go(t);e.slots.default=()=>n},Ri=(e,t,n)=>{for(const r in t)(n||r!=="_")&&(e[r]=t[r])},$a=(e,t,n)=>{const r=e.slots=wi();if(e.vnode.shapeFlag&32){const o=t._;o?(Ri(r,t,n),n&&Ps(r,"_",o,!0)):Ei(t,r)}else t&&Si(e,t)},za=(e,t,n)=>{const{vnode:r,slots:o}=e;let s=!0,i=le;if(r.shapeFlag&32){const l=t._;l?n&&l===1?s=!1:Ri(o,t,n):(s=!t.$stable,Ei(t,o)),i=t}else t&&(Si(e,t),i={default:1});if(s)for(const l in o)!xi(l)&&i[l]==null&&delete o[l]},He=tc;function Ua(e){return ja(e)}function ja(e,t){const n=Fs();n.__VUE__=!0;const{insert:r,remove:o,patchProp:s,createElement:i,createText:l,createComment:a,setText:d,setElementText:u,parentNode:h,nextSibling:p,setScopeId:b=nt,insertStaticContent:P}=e,I=(c,f,g,x=null,v=null,S=null,_=void 0,A=null,R=!!f.dynamicChildren)=>{if(c===f)return;c&&!an(c,f)&&(x=y(c),ee(c,v,S,!0),c=null),f.patchFlag===-2&&(R=!1,f.dynamicChildren=null);const{type:m,ref:z,shapeFlag:O}=f;switch(m){case fr:V(c,f,g,x);break;case Qt:$(c,f,g,x);break;case kr:c==null&&F(f,g,x,_);break;case me:Ve(c,f,g,x,v,S,_,A,R);break;default:O&1?Z(c,f,g,x,v,S,_,A,R):O&6?Pe(c,f,g,x,v,S,_,A,R):(O&64||O&128)&&m.process(c,f,g,x,v,S,_,A,R,B)}z!=null&&v&&Hr(z,c&&c.ref,S,f||c,!f)},V=(c,f,g,x)=>{if(c==null)r(f.el=l(f.children),g,x);else{const v=f.el=c.el;f.children!==c.children&&d(v,f.children)}},$=(c,f,g,x)=>{c==null?r(f.el=a(f.children||""),g,x):f.el=c.el},F=(c,f,g,x)=>{[c.el,c.anchor]=P(c.children,f,g,x,c.el,c.anchor)},H=({el:c,anchor:f},g,x)=>{let v;for(;c&&c!==f;)v=p(c),r(c,g,x),c=v;r(f,g,x)},L=({el:c,anchor:f})=>{let g;for(;c&&c!==f;)g=p(c),o(c),c=g;o(f)},Z=(c,f,g,x,v,S,_,A,R)=>{f.type==="svg"?_="svg":f.type==="math"&&(_="mathml"),c==null?ae(f,g,x,v,S,_,A,R):be(c,f,v,S,_,A,R)},ae=(c,f,g,x,v,S,_,A)=>{let R,m;const{props:z,shapeFlag:O,transition:D,dirs:j}=c;if(R=c.el=i(c.type,S,z&&z.is,z),O&8?u(R,c.children):O&16&&Oe(c.children,R,null,x,v,Rr(c,S),_,A),j&&kt(c,null,x,"created"),se(R,c,c.scopeId,_,x),z){for(const k in z)k!=="value"&&!fn(k)&&s(R,k,null,z[k],S,x);"value"in z&&s(R,"value",null,z.value,S),(m=z.onVnodeBeforeMount)&&Je(m,x,c)}j&&kt(c,null,x,"beforeMount");const E=Va(v,D);E&&D.beforeEnter(R),r(R,f,g),((m=z&&z.onVnodeMounted)||E||j)&&He(()=>{m&&Je(m,x,c),E&&D.enter(R),j&&kt(c,null,x,"mounted")},v)},se=(c,f,g,x,v)=>{if(g&&b(c,g),x)for(let S=0;S<x.length;S++)b(c,x[S]);if(v){let S=v.subTree;if(f===S||Ni(S.type)&&(S.ssContent===f||S.ssFallback===f)){const _=v.vnode;se(c,_,_.scopeId,_.slotScopeIds,v.parent)}}},Oe=(c,f,g,x,v,S,_,A,R=0)=>{for(let m=R;m<c.length;m++){const z=c[m]=A?wt(c[m]):tt(c[m]);I(null,z,f,g,x,v,S,_,A)}},be=(c,f,g,x,v,S,_)=>{const A=f.el=c.el;let{patchFlag:R,dynamicChildren:m,dirs:z}=f;R|=c.patchFlag&16;const O=c.props||le,D=f.props||le;let j;if(g&&At(g,!1),(j=D.onVnodeBeforeUpdate)&&Je(j,g,f,c),z&&kt(f,c,g,"beforeUpdate"),g&&At(g,!0),(O.innerHTML&&D.innerHTML==null||O.textContent&&D.textContent==null)&&u(A,""),m?Ce(c.dynamicChildren,m,A,g,x,Rr(f,v),S):_||T(c,f,A,null,g,x,Rr(f,v),S,!1),R>0){if(R&16)Fe(A,O,D,g,v);else if(R&2&&O.class!==D.class&&s(A,"class",null,D.class,v),R&4&&s(A,"style",O.style,D.style,v),R&8){const E=f.dynamicProps;for(let k=0;k<E.length;k++){const M=E[k],G=O[M],J=D[M];(J!==G||M==="value")&&s(A,M,G,J,v,g)}}R&1&&c.children!==f.children&&u(A,f.children)}else!_&&m==null&&Fe(A,O,D,g,v);((j=D.onVnodeUpdated)||z)&&He(()=>{j&&Je(j,g,f,c),z&&kt(f,c,g,"updated")},x)},Ce=(c,f,g,x,v,S,_)=>{for(let A=0;A<f.length;A++){const R=c[A],m=f[A],z=R.el&&(R.type===me||!an(R,m)||R.shapeFlag&70)?h(R.el):g;I(R,m,z,null,x,v,S,_,!0)}},Fe=(c,f,g,x,v)=>{if(f!==g){if(f!==le)for(const S in f)!fn(S)&&!(S in g)&&s(c,S,f[S],null,v,x);for(const S in g){if(fn(S))continue;const _=g[S],A=f[S];_!==A&&S!=="value"&&s(c,S,A,_,v,x)}"value"in g&&s(c,"value",f.value,g.value,v)}},Ve=(c,f,g,x,v,S,_,A,R)=>{const m=f.el=c?c.el:l(""),z=f.anchor=c?c.anchor:l("");let{patchFlag:O,dynamicChildren:D,slotScopeIds:j}=f;j&&(A=A?A.concat(j):j),c==null?(r(m,g,x),r(z,g,x),Oe(f.children||[],g,z,v,S,_,A,R)):O>0&&O&64&&D&&c.dynamicChildren?(Ce(c.dynamicChildren,D,g,v,S,_,A),(f.key!=null||v&&f===v.subTree)&&Ti(c,f,!0)):T(c,f,g,z,v,S,_,A,R)},Pe=(c,f,g,x,v,S,_,A,R)=>{f.slotScopeIds=A,c==null?f.shapeFlag&512?v.ctx.activate(f,g,x,_,R):it(f,g,x,v,S,_,R):Be(c,f,R)},it=(c,f,g,x,v,S,_)=>{const A=c.component=ac(c,x,v);if(fi(c)&&(A.ctx.renderer=B),cc(A,!1,_),A.asyncDep){if(v&&v.registerDep(A,fe,_),!c.el){const R=A.subTree=ne(Qt);$(null,R,f,g)}}else fe(A,c,f,g,v,S,_)},Be=(c,f,g)=>{const x=f.component=c.component;if(Qa(c,f,g))if(x.asyncDep&&!x.asyncResolved){w(x,f,g);return}else x.next=f,x.update();else f.el=c.el,x.vnode=f},fe=(c,f,g,x,v,S,_)=>{const A=()=>{if(c.isMounted){let{next:O,bu:D,u:j,parent:E,vnode:k}=c;{const Ne=ki(c);if(Ne){O&&(O.el=k.el,w(c,O,_)),Ne.asyncDep.then(()=>{c.isUnmounted||A()});return}}let M=O,G;At(c,!1),O?(O.el=k.el,w(c,O,_)):O=k,D&&vr(D),(G=O.props&&O.props.onVnodeBeforeUpdate)&&Je(G,E,O,k),At(c,!0);const J=Tr(c),he=c.subTree;c.subTree=J,I(he,J,h(he.el),y(he),c,v,S),O.el=J.el,M===null&&ec(c,J.el),j&&He(j,v),(G=O.props&&O.props.onVnodeUpdated)&&He(()=>Je(G,E,O,k),v)}else{let O;const{el:D,props:j}=f,{bm:E,m:k,parent:M,root:G,type:J}=c,he=Gt(f);if(At(c,!1),E&&vr(E),!he&&(O=j&&j.onVnodeBeforeMount)&&Je(O,M,f),At(c,!0),D&&ce){const Ne=()=>{c.subTree=Tr(c),ce(D,c.subTree,c,v,null)};he&&J.__asyncHydrate?J.__asyncHydrate(D,c,Ne):Ne()}else{G.ce&&G.ce._injectChildStyle(J);const Ne=c.subTree=Tr(c);I(null,Ne,g,x,c,v,S),f.el=Ne.el}if(k&&He(k,v),!he&&(O=j&&j.onVnodeMounted)){const Ne=f;He(()=>Je(O,M,Ne),v)}(f.shapeFlag&256||M&&Gt(M.vnode)&&M.vnode.shapeFlag&256)&&c.a&&He(c.a,v),c.isMounted=!0,f=g=x=null}};c.scope.on();const R=c.effect=new $s(A);c.scope.off();const m=c.update=R.run.bind(R),z=c.job=R.runIfDirty.bind(R);z.i=c,z.id=c.uid,R.scheduler=()=>fo(z),At(c,!0),m()},w=(c,f,g)=>{f.component=c;const x=c.vnode.props;c.vnode=f,c.next=null,Ba(c,f.props,x,g),za(c,f.children,g),St(),Po(c),Rt()},T=(c,f,g,x,v,S,_,A,R=!1)=>{const m=c&&c.children,z=c?c.shapeFlag:0,O=f.children,{patchFlag:D,shapeFlag:j}=f;if(D>0){if(D&128){X(m,O,g,x,v,S,_,A,R);return}else if(D&256){U(m,O,g,x,v,S,_,A,R);return}}j&8?(z&16&&de(m,v,S),O!==m&&u(g,O)):z&16?j&16?X(m,O,g,x,v,S,_,A,R):de(m,v,S,!0):(z&8&&u(g,""),j&16&&Oe(O,g,x,v,S,_,A,R))},U=(c,f,g,x,v,S,_,A,R)=>{c=c||Ut,f=f||Ut;const m=c.length,z=f.length,O=Math.min(m,z);let D;for(D=0;D<O;D++){const j=f[D]=R?wt(f[D]):tt(f[D]);I(c[D],j,g,null,v,S,_,A,R)}m>z?de(c,v,S,!0,!1,O):Oe(f,g,x,v,S,_,A,R,O)},X=(c,f,g,x,v,S,_,A,R)=>{let m=0;const z=f.length;let O=c.length-1,D=z-1;for(;m<=O&&m<=D;){const j=c[m],E=f[m]=R?wt(f[m]):tt(f[m]);if(an(j,E))I(j,E,g,null,v,S,_,A,R);else break;m++}for(;m<=O&&m<=D;){const j=c[O],E=f[D]=R?wt(f[D]):tt(f[D]);if(an(j,E))I(j,E,g,null,v,S,_,A,R);else break;O--,D--}if(m>O){if(m<=D){const j=D+1,E=j<z?f[j].el:x;for(;m<=D;)I(null,f[m]=R?wt(f[m]):tt(f[m]),g,E,v,S,_,A,R),m++}}else if(m>D)for(;m<=O;)ee(c[m],v,S,!0),m++;else{const j=m,E=m,k=new Map;for(m=E;m<=D;m++){const De=f[m]=R?wt(f[m]):tt(f[m]);De.key!=null&&k.set(De.key,m)}let M,G=0;const J=D-E+1;let he=!1,Ne=0;const Tt=new Array(J);for(m=0;m<J;m++)Tt[m]=0;for(m=j;m<=O;m++){const De=c[m];if(G>=J){ee(De,v,S,!0);continue}let Ze;if(De.key!=null)Ze=k.get(De.key);else for(M=E;M<=D;M++)if(Tt[M-E]===0&&an(De,f[M])){Ze=M;break}Ze===void 0?ee(De,v,S,!0):(Tt[Ze-E]=m+1,Ze>=Ne?Ne=Ze:he=!0,I(De,f[Ze],g,null,v,S,_,A,R),G++)}const Ro=he?Ka(Tt):Ut;for(M=Ro.length-1,m=J-1;m>=0;m--){const De=E+m,Ze=f[De],To=De+1<z?f[De+1].el:x;Tt[m]===0?I(null,Ze,g,To,v,S,_,A,R):he&&(M<0||m!==Ro[M]?q(Ze,g,To,2):M--)}}},q=(c,f,g,x,v=null)=>{const{el:S,type:_,transition:A,children:R,shapeFlag:m}=c;if(m&6){q(c.component.subTree,f,g,x);return}if(m&128){c.suspense.move(f,g,x);return}if(m&64){_.move(c,f,g,B);return}if(_===me){r(S,f,g);for(let O=0;O<R.length;O++)q(R[O],f,g,x);r(c.anchor,f,g);return}if(_===kr){H(c,f,g);return}if(x!==2&&m&1&&A)if(x===0)A.beforeEnter(S),r(S,f,g),He(()=>A.enter(S),v);else{const{leave:O,delayLeave:D,afterLeave:j}=A,E=()=>r(S,f,g),k=()=>{O(S,()=>{E(),j&&j()})};D?D(S,E,k):k()}else r(S,f,g)},ee=(c,f,g,x=!1,v=!1)=>{const{type:S,props:_,ref:A,children:R,dynamicChildren:m,shapeFlag:z,patchFlag:O,dirs:D,cacheIndex:j}=c;if(O===-2&&(v=!1),A!=null&&Hr(A,null,g,c,!0),j!=null&&(f.renderCache[j]=void 0),z&256){f.ctx.deactivate(c);return}const E=z&1&&D,k=!Gt(c);let M;if(k&&(M=_&&_.onVnodeBeforeUnmount)&&Je(M,f,c),z&6)ve(c.component,g,x);else{if(z&128){c.suspense.unmount(g,x);return}E&&kt(c,null,f,"beforeUnmount"),z&64?c.type.remove(c,f,g,B,x):m&&!m.hasOnce&&(S!==me||O>0&&O&64)?de(m,f,g,!1,!0):(S===me&&O&384||!v&&z&16)&&de(R,f,g),x&&we(c)}(k&&(M=_&&_.onVnodeUnmounted)||E)&&He(()=>{M&&Je(M,f,c),E&&kt(c,null,f,"unmounted")},g)},we=c=>{const{type:f,el:g,anchor:x,transition:v}=c;if(f===me){Ke(g,x);return}if(f===kr){L(c);return}const S=()=>{o(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(c.shapeFlag&1&&v&&!v.persisted){const{leave:_,delayLeave:A}=v,R=()=>_(g,S);A?A(c.el,S,R):R()}else S()},Ke=(c,f)=>{let g;for(;c!==f;)g=p(c),o(c),c=g;o(f)},ve=(c,f,g)=>{const{bum:x,scope:v,job:S,subTree:_,um:A,m:R,a:m}=c;Uo(R),Uo(m),x&&vr(x),v.stop(),S&&(S.flags|=8,ee(_,c,f,g)),A&&He(A,f),He(()=>{c.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},de=(c,f,g,x=!1,v=!1,S=0)=>{for(let _=S;_<c.length;_++)ee(c[_],f,g,x,v)},y=c=>{if(c.shapeFlag&6)return y(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const f=p(c.anchor||c.el),g=f&&f[ca];return g?p(g):f};let N=!1;const C=(c,f,g)=>{c==null?f._vnode&&ee(f._vnode,null,null,!0):I(f._vnode||null,c,f,null,null,null,g),f._vnode=c,N||(N=!0,Po(),ii(),N=!1)},B={p:I,um:ee,m:q,r:we,mt:it,mc:Oe,pc:T,pbc:Ce,n:y,o:e};let Q,ce;return{render:C,hydrate:Q,createApp:Pa(C,Q)}}function Rr({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function At({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Va(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ti(e,t,n=!1){const r=e.children,o=t.children;if(K(r)&&K(o))for(let s=0;s<r.length;s++){const i=r[s];let l=o[s];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=o[s]=wt(o[s]),l.el=i.el),!n&&l.patchFlag!==-2&&Ti(i,l)),l.type===fr&&(l.el=i.el)}}function Ka(e){const t=e.slice(),n=[0];let r,o,s,i,l;const a=e.length;for(r=0;r<a;r++){const d=e[r];if(d!==0){if(o=n[n.length-1],e[o]<d){t[r]=o,n.push(r);continue}for(s=0,i=n.length-1;s<i;)l=s+i>>1,e[n[l]]<d?s=l+1:i=l;d<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,i=n[s-1];s-- >0;)n[s]=i,i=t[i];return n}function ki(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ki(t)}function Uo(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Ga=Symbol.for("v-scx"),Wa=()=>rt(Ga);function Xt(e,t,n){return Ai(e,t,n)}function Ai(e,t,n=le){const{immediate:r,deep:o,flush:s,once:i}=n,l=Se({},n);let a;if(dr)if(s==="sync"){const p=Wa();a=p.__watcherHandles||(p.__watcherHandles=[])}else if(!t||r)l.once=!0;else return{stop:nt,resume:nt,pause:nt};const d=ke;l.call=(p,b,P)=>ot(p,d,b,P);let u=!1;s==="post"?l.scheduler=p=>{He(p,d&&d.suspense)}:s!=="sync"&&(u=!0,l.scheduler=(p,b)=>{b?p():fo(p)}),l.augmentJob=p=>{t&&(p.flags|=4),u&&(p.flags|=2,d&&(p.id=d.uid,p.i=d))};const h=sa(e,t,l);return a&&a.push(h),h}function Xa(e,t,n){const r=this.proxy,o=pe(e)?e.includes(".")?Oi(r,e):()=>r[e]:e.bind(r,r);let s;W(t)?s=t:(s=t.handler,n=t);const i=In(this),l=Ai(o,s.bind(r),n);return i(),l}function Oi(e,t){const n=t.split(".");return()=>{let r=e;for(let o=0;o<n.length&&r;o++)r=r[n[o]];return r}}const Ya=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ye(t)}Modifiers`]||e[`${Pt(t)}Modifiers`];function qa(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||le;let o=n;const s=t.startsWith("update:"),i=s&&Ya(r,t.slice(7));i&&(i.trim&&(o=n.map(u=>pe(u)?u.trim():u)),i.number&&(o=n.map(El)));let l,a=r[l=wr(t)]||r[l=wr(Ye(t))];!a&&s&&(a=r[l=wr(Pt(t))]),a&&ot(a,e,6,o);const d=r[l+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,ot(d,e,6,o)}}function Ci(e,t,n=!1){const r=t.emitsCache,o=r.get(e);if(o!==void 0)return o;const s=e.emits;let i={},l=!1;if(!W(e)){const a=d=>{const u=Ci(d,t,!0);u&&(l=!0,Se(i,u))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!s&&!l?(ue(e)&&r.set(e,null),null):(K(s)?s.forEach(a=>i[a]=null):Se(i,s),ue(e)&&r.set(e,i),i)}function ur(e,t){return!e||!tr(t)?!1:(t=t.slice(2).replace(/Once$/,""),te(e,t[0].toLowerCase()+t.slice(1))||te(e,Pt(t))||te(e,t))}function Tr(e){const{type:t,vnode:n,proxy:r,withProxy:o,propsOptions:[s],slots:i,attrs:l,emit:a,render:d,renderCache:u,props:h,data:p,setupState:b,ctx:P,inheritAttrs:I}=e,V=Wn(e);let $,F;try{if(n.shapeFlag&4){const L=o||r,Z=L;$=tt(d.call(Z,L,u,h,b,p,P)),F=l}else{const L=t;$=tt(L.length>1?L(h,{attrs:l,slots:i,emit:a}):L(h,null)),F=t.props?l:Za(l)}}catch(L){pn.length=0,ar(L,e,1),$=ne(Qt)}let H=$;if(F&&I!==!1){const L=Object.keys(F),{shapeFlag:Z}=H;L.length&&Z&7&&(s&&L.some(qr)&&(F=Ja(F,s)),H=en(H,F,!1,!0))}return n.dirs&&(H=en(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&ho(H,n.transition),$=H,Wn(V),$}const Za=e=>{let t;for(const n in e)(n==="class"||n==="style"||tr(n))&&((t||(t={}))[n]=e[n]);return t},Ja=(e,t)=>{const n={};for(const r in e)(!qr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Qa(e,t,n){const{props:r,children:o,component:s}=e,{props:i,children:l,patchFlag:a}=t,d=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?jo(r,i,d):!!i;if(a&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const p=u[h];if(i[p]!==r[p]&&!ur(d,p))return!0}}}else return(o||l)&&(!l||!l.$stable)?!0:r===i?!1:r?i?jo(r,i,d):!0:!!i;return!1}function jo(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const s=r[o];if(t[s]!==e[s]&&!ur(n,s))return!0}return!1}function ec({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Ni=e=>e.__isSuspense;function tc(e,t){t&&t.pendingBranch?K(e)?t.effects.push(...e):t.effects.push(e):aa(e)}const me=Symbol.for("v-fgt"),fr=Symbol.for("v-txt"),Qt=Symbol.for("v-cmt"),kr=Symbol.for("v-stc"),pn=[];let Ue=null;function ge(e=!1){pn.push(Ue=e?null:[])}function nc(){pn.pop(),Ue=pn[pn.length-1]||null}let yn=1;function Vo(e){yn+=e,e<0&&Ue&&(Ue.hasOnce=!0)}function Mi(e){return e.dynamicChildren=yn>0?Ue||Ut:null,nc(),yn>0&&Ue&&Ue.push(e),e}function xe(e,t,n,r,o,s){return Mi(Ee(e,t,n,r,o,s,!0))}function Ko(e,t,n,r,o){return Mi(ne(e,t,n,r,o,!0))}function Yn(e){return e?e.__v_isVNode===!0:!1}function an(e,t){return e.type===t.type&&e.key===t.key}const Ii=({key:e})=>e??null,jn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?pe(e)||ye(e)||W(e)?{i:Le,r:e,k:t,f:!!n}:e:null);function Ee(e,t=null,n=null,r=0,o=null,s=e===me?0:1,i=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ii(t),ref:t&&jn(t),scopeId:ai,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Le};return l?(bo(a,n),s&128&&e.normalize(a)):n&&(a.shapeFlag|=pe(n)?8:16),yn>0&&!i&&Ue&&(a.patchFlag>0||s&6)&&a.patchFlag!==32&&Ue.push(a),a}const ne=rc;function rc(e,t=null,n=null,r=0,o=null,s=!1){if((!e||e===Ra)&&(e=Qt),Yn(e)){const l=en(e,t,!0);return n&&bo(l,n),yn>0&&!s&&Ue&&(l.shapeFlag&6?Ue[Ue.indexOf(e)]=l:Ue.push(l)),l.patchFlag=-2,l}if(pc(e)&&(e=e.__vccOpts),t){t=oc(t);let{class:l,style:a}=t;l&&!pe(l)&&(t.class=It(l)),ue(a)&&(lo(a)&&!K(a)&&(a=Se({},a)),t.style=Qr(a))}const i=pe(e)?1:Ni(e)?128:ua(e)?64:ue(e)?4:W(e)?2:0;return Ee(e,t,n,r,o,i,s,!0)}function oc(e){return e?lo(e)||vi(e)?Se({},e):e:null}function en(e,t,n=!1,r=!1){const{props:o,ref:s,patchFlag:i,children:l,transition:a}=e,d=t?sc(o||{},t):o,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&Ii(d),ref:t&&t.ref?n&&s?K(s)?s.concat(jn(t)):[s,jn(t)]:jn(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==me?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&en(e.ssContent),ssFallback:e.ssFallback&&en(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&r&&ho(u,a.clone(u)),u}function ut(e=" ",t=0){return ne(fr,null,e,t)}function tt(e){return e==null||typeof e=="boolean"?ne(Qt):K(e)?ne(me,null,e.slice()):typeof e=="object"?wt(e):ne(fr,null,String(e))}function wt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:en(e)}function bo(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(K(t))n=16;else if(typeof t=="object")if(r&65){const o=t.default;o&&(o._c&&(o._d=!1),bo(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!vi(t)?t._ctx=Le:o===3&&Le&&(Le.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else W(t)?(t={default:t,_ctx:Le},n=32):(t=String(t),r&64?(n=16,t=[ut(t)]):n=8);e.children=t,e.shapeFlag|=n}function sc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const o in r)if(o==="class")t.class!==r.class&&(t.class=It([t.class,r.class]));else if(o==="style")t.style=Qr([t.style,r.style]);else if(tr(o)){const s=t[o],i=r[o];i&&s!==i&&!(K(s)&&s.includes(i))&&(t[o]=s?[].concat(s,i):i)}else o!==""&&(t[o]=r[o])}return t}function Je(e,t,n,r=null){ot(e,t,7,[n,r])}const ic=bi();let lc=0;function ac(e,t,n){const r=e.type,o=(t?t.appContext:e.appContext)||ic,s={uid:lc++,vnode:e,type:r,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Cl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yi(r,o),emitsOptions:Ci(r,o),emit:null,emitted:null,propsDefaults:le,inheritAttrs:r.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=qa.bind(null,s),e.ce&&e.ce(s),s}let ke=null,qn,Vr;{const e=Fs(),t=(n,r)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(r),s=>{o.length>1?o.forEach(i=>i(s)):o[0](s)}};qn=t("__VUE_INSTANCE_SETTERS__",n=>ke=n),Vr=t("__VUE_SSR_SETTERS__",n=>dr=n)}const In=e=>{const t=ke;return qn(e),e.scope.on(),()=>{e.scope.off(),qn(t)}},Go=()=>{ke&&ke.scope.off(),qn(null)};function Li(e){return e.vnode.shapeFlag&4}let dr=!1;function cc(e,t=!1,n=!1){t&&Vr(t);const{props:r,children:o}=e.vnode,s=Li(e);Fa(e,r,s,t),$a(e,o,n);const i=s?uc(e,t):void 0;return t&&Vr(!1),i}function uc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Aa);const{setup:r}=n;if(r){const o=e.setupContext=r.length>1?dc(e):null,s=In(e);St();const i=Mn(r,e,0,[e.props,o]);if(Rt(),s(),Ms(i)){if(Gt(e)||ui(e),i.then(Go,Go),t)return i.then(l=>{Wo(e,l,t)}).catch(l=>{ar(l,e,0)});e.asyncDep=i}else Wo(e,i,t)}else Pi(e,t)}function Wo(e,t,n){W(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ue(t)&&(e.setupState=ni(t)),Pi(e,n)}let Xo;function Pi(e,t,n){const r=e.type;if(!e.render){if(!t&&Xo&&!r.render){const o=r.template||po(e).template;if(o){const{isCustomElement:s,compilerOptions:i}=e.appContext.config,{delimiters:l,compilerOptions:a}=r,d=Se(Se({isCustomElement:s,delimiters:l},i),a);r.render=Xo(o,d)}}e.render=r.render||nt}{const o=In(e);St();try{Oa(e)}finally{Rt(),o()}}}const fc={get(e,t){return Ae(e,"get",""),e[t]}};function dc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,fc),slots:e.slots,emit:e.emit,expose:t}}function mo(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ni(Jl(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in hn)return hn[n](e)},has(t,n){return n in t||n in hn}})):e.proxy}function hc(e,t=!0){return W(e)?e.displayName||e.name:e.name||t&&e.__name}function pc(e){return W(e)&&"__vccOpts"in e}const We=(e,t)=>ra(e,t,dr);function Fi(e,t,n){const r=arguments.length;return r===2?ue(t)&&!K(t)?Yn(t)?ne(e,null,[t]):ne(e,t):ne(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Yn(n)&&(n=[n]),ne(e,t,n))}const gc="3.5.4";/**
* @vue/runtime-dom v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Kr;const Yo=typeof window<"u"&&window.trustedTypes;if(Yo)try{Kr=Yo.createPolicy("vue",{createHTML:e=>e})}catch{}const Bi=Kr?e=>Kr.createHTML(e):e=>e,bc="http://www.w3.org/2000/svg",mc="http://www.w3.org/1998/Math/MathML",ct=typeof document<"u"?document:null,qo=ct&&ct.createElement("template"),wc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const o=t==="svg"?ct.createElementNS(bc,e):t==="mathml"?ct.createElementNS(mc,e):n?ct.createElement(e,{is:n}):ct.createElement(e);return e==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:e=>ct.createTextNode(e),createComment:e=>ct.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ct.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,o,s){const i=n?n.previousSibling:t.lastChild;if(o&&(o===s||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===s||!(o=o.nextSibling)););else{qo.innerHTML=Bi(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const l=qo.content;if(r==="svg"||r==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},vc=Symbol("_vtc");function _c(e,t,n){const r=e[vc];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Zo=Symbol("_vod"),yc=Symbol("_vsh"),xc=Symbol(""),Ec=/(^|;)\s*display\s*:/;function Sc(e,t,n){const r=e.style,o=pe(n);let s=!1;if(n&&!o){if(t)if(pe(t))for(const i of t.split(";")){const l=i.slice(0,i.indexOf(":")).trim();n[l]==null&&Vn(r,l,"")}else for(const i in t)n[i]==null&&Vn(r,i,"");for(const i in n)i==="display"&&(s=!0),Vn(r,i,n[i])}else if(o){if(t!==n){const i=r[xc];i&&(n+=";"+i),r.cssText=n,s=Ec.test(n)}}else t&&e.removeAttribute("style");Zo in e&&(e[Zo]=s?r.display:"",e[yc]&&(r.display="none"))}const Jo=/\s*!important$/;function Vn(e,t,n){if(K(n))n.forEach(r=>Vn(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Rc(e,t);Jo.test(n)?e.setProperty(Pt(r),n.replace(Jo,""),"important"):e[r]=n}}const Qo=["Webkit","Moz","ms"],Ar={};function Rc(e,t){const n=Ar[t];if(n)return n;let r=Ye(t);if(r!=="filter"&&r in e)return Ar[t]=r;r=or(r);for(let o=0;o<Qo.length;o++){const s=Qo[o]+r;if(s in e)return Ar[t]=s}return t}const es="http://www.w3.org/1999/xlink";function ts(e,t,n,r,o,s=Ol(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(es,t.slice(6,t.length)):e.setAttributeNS(es,t,n):n==null||s&&!Bs(n)?e.removeAttribute(t):e.setAttribute(t,s?"":Et(n)?String(n):n)}function Tc(e,t,n,r){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Bi(n):n);return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const i=o==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(i!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let s=!1;if(n===""||n==null){const i=typeof e[t];i==="boolean"?n=Bs(n):n==null&&i==="string"?(n="",s=!0):i==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function kc(e,t,n,r){e.addEventListener(t,n,r)}function Ac(e,t,n,r){e.removeEventListener(t,n,r)}const ns=Symbol("_vei");function Oc(e,t,n,r,o=null){const s=e[ns]||(e[ns]={}),i=s[t];if(r&&i)i.value=r;else{const[l,a]=Cc(t);if(r){const d=s[t]=Ic(r,o);kc(e,l,d,a)}else i&&(Ac(e,l,i,a),s[t]=void 0)}}const rs=/(?:Once|Passive|Capture)$/;function Cc(e){let t;if(rs.test(e)){t={};let r;for(;r=e.match(rs);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Pt(e.slice(2)),t]}let Or=0;const Nc=Promise.resolve(),Mc=()=>Or||(Nc.then(()=>Or=0),Or=Date.now());function Ic(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ot(Lc(r,n.value),t,5,[r])};return n.value=e,n.attached=Mc(),n}function Lc(e,t){if(K(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>o=>!o._stopped&&r&&r(o))}else return t}const os=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Pc=(e,t,n,r,o,s)=>{const i=o==="svg";t==="class"?_c(e,r,i):t==="style"?Sc(e,n,r):tr(t)?qr(t)||Oc(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Fc(e,t,r,i))?(Tc(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ts(e,t,r,i,s,t!=="value")):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),ts(e,t,r,i))};function Fc(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&os(t)&&W(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return os(t)&&pe(n)?!1:!!(t in e||e._isVueCE&&(/[A-Z]/.test(t)||!pe(n)))}const Bc=Se({patchProp:Pc},wc);let ss;function Dc(){return ss||(ss=Ua(Bc))}const Hc=(...e)=>{const t=Dc().createApp(...e),{mount:n}=t;return t.mount=r=>{const o=zc(r);if(!o)return;const s=t._component;!W(s)&&!s.render&&!s.template&&(s.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const i=n(o,!1,$c(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t};function $c(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function zc(e){return pe(e)?document.querySelector(e):e}/*!
  * vue-router v4.4.4
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const zt=typeof document<"u";function Di(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Uc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Di(e.default)}const oe=Object.assign;function Cr(e,t){const n={};for(const r in t){const o=t[r];n[r]=qe(o)?o.map(e):e(o)}return n}const gn=()=>{},qe=Array.isArray,Hi=/#/g,jc=/&/g,Vc=/\//g,Kc=/=/g,Gc=/\?/g,$i=/\+/g,Wc=/%5B/g,Xc=/%5D/g,zi=/%5E/g,Yc=/%60/g,Ui=/%7B/g,qc=/%7C/g,ji=/%7D/g,Zc=/%20/g;function wo(e){return encodeURI(""+e).replace(qc,"|").replace(Wc,"[").replace(Xc,"]")}function Jc(e){return wo(e).replace(Ui,"{").replace(ji,"}").replace(zi,"^")}function Gr(e){return wo(e).replace($i,"%2B").replace(Zc,"+").replace(Hi,"%23").replace(jc,"%26").replace(Yc,"`").replace(Ui,"{").replace(ji,"}").replace(zi,"^")}function Qc(e){return Gr(e).replace(Kc,"%3D")}function eu(e){return wo(e).replace(Hi,"%23").replace(Gc,"%3F")}function tu(e){return e==null?"":eu(e).replace(Vc,"%2F")}function xn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const nu=/\/$/,ru=e=>e.replace(nu,"");function Nr(e,t,n="/"){let r,o={},s="",i="";const l=t.indexOf("#");let a=t.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(r=t.slice(0,a),s=t.slice(a+1,l>-1?l:t.length),o=e(s)),l>-1&&(r=r||t.slice(0,l),i=t.slice(l,t.length)),r=lu(r??t,n),{fullPath:r+(s&&"?")+s+i,path:r,query:o,hash:xn(i)}}function ou(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function is(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function su(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&tn(t.matched[r],n.matched[o])&&Vi(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function tn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Vi(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!iu(e[n],t[n]))return!1;return!0}function iu(e,t){return qe(e)?ls(e,t):qe(t)?ls(t,e):e===t}function ls(e,t){return qe(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function lu(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let s=n.length-1,i,l;for(i=0;i<r.length;i++)if(l=r[i],l!==".")if(l==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i).join("/")}const gt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var En;(function(e){e.pop="pop",e.push="push"})(En||(En={}));var bn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(bn||(bn={}));function au(e){if(!e)if(zt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),ru(e)}const cu=/^[^#]+#/;function uu(e,t){return e.replace(cu,"#")+t}function fu(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const hr=()=>({left:window.scrollX,top:window.scrollY});function du(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=fu(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function as(e,t){return(history.state?history.state.position-t:-1)+e}const Wr=new Map;function hu(e,t){Wr.set(e,t)}function pu(e){const t=Wr.get(e);return Wr.delete(e),t}let gu=()=>location.protocol+"//"+location.host;function Ki(e,t){const{pathname:n,search:r,hash:o}=t,s=e.indexOf("#");if(s>-1){let l=o.includes(e.slice(s))?e.slice(s).length:1,a=o.slice(l);return a[0]!=="/"&&(a="/"+a),is(a,"")}return is(n,e)+r+o}function bu(e,t,n,r){let o=[],s=[],i=null;const l=({state:p})=>{const b=Ki(e,location),P=n.value,I=t.value;let V=0;if(p){if(n.value=b,t.value=p,i&&i===P){i=null;return}V=I?p.position-I.position:0}else r(b);o.forEach($=>{$(n.value,P,{delta:V,type:En.pop,direction:V?V>0?bn.forward:bn.back:bn.unknown})})};function a(){i=n.value}function d(p){o.push(p);const b=()=>{const P=o.indexOf(p);P>-1&&o.splice(P,1)};return s.push(b),b}function u(){const{history:p}=window;p.state&&p.replaceState(oe({},p.state,{scroll:hr()}),"")}function h(){for(const p of s)p();s=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:d,destroy:h}}function cs(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?hr():null}}function mu(e){const{history:t,location:n}=window,r={value:Ki(e,n)},o={value:t.state};o.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(a,d,u){const h=e.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?e:e.slice(h))+a:gu()+e+a;try{t[u?"replaceState":"pushState"](d,"",p),o.value=d}catch(b){console.error(b),n[u?"replace":"assign"](p)}}function i(a,d){const u=oe({},t.state,cs(o.value.back,a,o.value.forward,!0),d,{position:o.value.position});s(a,u,!0),r.value=a}function l(a,d){const u=oe({},o.value,t.state,{forward:a,scroll:hr()});s(u.current,u,!0);const h=oe({},cs(r.value,a,null),{position:u.position+1},d);s(a,h,!1),r.value=a}return{location:r,state:o,push:l,replace:i}}function wu(e){e=au(e);const t=mu(e),n=bu(e,t.state,t.location,t.replace);function r(s,i=!0){i||n.pauseListeners(),history.go(s)}const o=oe({location:"",base:e,go:r,createHref:uu.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function vu(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),wu(e)}function _u(e){return typeof e=="string"||e&&typeof e=="object"}function Gi(e){return typeof e=="string"||typeof e=="symbol"}const Wi=Symbol("");var us;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(us||(us={}));function nn(e,t){return oe(new Error,{type:e,[Wi]:!0},t)}function at(e,t){return e instanceof Error&&Wi in e&&(t==null||!!(e.type&t))}const fs="[^/]+?",yu={sensitive:!1,strict:!1,start:!0,end:!0},xu=/[.+*?^${}()[\]/\\]/g;function Eu(e,t){const n=oe({},yu,t),r=[];let o=n.start?"^":"";const s=[];for(const d of e){const u=d.length?[]:[90];n.strict&&!d.length&&(o+="/");for(let h=0;h<d.length;h++){const p=d[h];let b=40+(n.sensitive?.25:0);if(p.type===0)h||(o+="/"),o+=p.value.replace(xu,"\\$&"),b+=40;else if(p.type===1){const{value:P,repeatable:I,optional:V,regexp:$}=p;s.push({name:P,repeatable:I,optional:V});const F=$||fs;if(F!==fs){b+=10;try{new RegExp(`(${F})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${P}" (${F}): `+L.message)}}let H=I?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;h||(H=V&&d.length<2?`(?:/${H})`:"/"+H),V&&(H+="?"),o+=H,b+=20,V&&(b+=-8),I&&(b+=-20),F===".*"&&(b+=-50)}u.push(b)}r.push(u)}if(n.strict&&n.end){const d=r.length-1;r[d][r[d].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const i=new RegExp(o,n.sensitive?"":"i");function l(d){const u=d.match(i),h={};if(!u)return null;for(let p=1;p<u.length;p++){const b=u[p]||"",P=s[p-1];h[P.name]=b&&P.repeatable?b.split("/"):b}return h}function a(d){let u="",h=!1;for(const p of e){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const b of p)if(b.type===0)u+=b.value;else if(b.type===1){const{value:P,repeatable:I,optional:V}=b,$=P in d?d[P]:"";if(qe($)&&!I)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const F=qe($)?$.join("/"):$;if(!F)if(V)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${P}"`);u+=F}}return u||"/"}return{re:i,score:r,keys:s,parse:l,stringify:a}}function Su(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Xi(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const s=Su(r[n],o[n]);if(s)return s;n++}if(Math.abs(o.length-r.length)===1){if(ds(r))return 1;if(ds(o))return-1}return o.length-r.length}function ds(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Ru={type:0,value:""},Tu=/[a-zA-Z0-9_]/;function ku(e){if(!e)return[[]];if(e==="/")return[[Ru]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(b){throw new Error(`ERR (${n})/"${d}": ${b}`)}let n=0,r=n;const o=[];let s;function i(){s&&o.push(s),s=[]}let l=0,a,d="",u="";function h(){d&&(n===0?s.push({type:0,value:d}):n===1||n===2||n===3?(s.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:d,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),d="")}function p(){d+=a}for(;l<e.length;){if(a=e[l++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(d&&h(),i()):a===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:a==="("?n=2:Tu.test(a)?p():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${d}"`),h(),i(),o}function Au(e,t,n){const r=Eu(ku(e.path),n),o=oe(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function Ou(e,t){const n=[],r=new Map;t=gs({strict:!1,end:!0,sensitive:!1},t);function o(h){return r.get(h)}function s(h,p,b){const P=!b,I=Cu(h);I.aliasOf=b&&b.record;const V=gs(t,h),$=[I];if("alias"in h){const L=typeof h.alias=="string"?[h.alias]:h.alias;for(const Z of L)$.push(oe({},I,{components:b?b.record.components:I.components,path:Z,aliasOf:b?b.record:I}))}let F,H;for(const L of $){const{path:Z}=L;if(p&&Z[0]!=="/"){const ae=p.record.path,se=ae[ae.length-1]==="/"?"":"/";L.path=p.record.path+(Z&&se+Z)}if(F=Au(L,p,V),b?b.alias.push(F):(H=H||F,H!==F&&H.alias.push(F),P&&h.name&&!ps(F)&&i(h.name)),Yi(F)&&a(F),I.children){const ae=I.children;for(let se=0;se<ae.length;se++)s(ae[se],F,b&&b.children[se])}b=b||F}return H?()=>{i(H)}:gn}function i(h){if(Gi(h)){const p=r.get(h);p&&(r.delete(h),n.splice(n.indexOf(p),1),p.children.forEach(i),p.alias.forEach(i))}else{const p=n.indexOf(h);p>-1&&(n.splice(p,1),h.record.name&&r.delete(h.record.name),h.children.forEach(i),h.alias.forEach(i))}}function l(){return n}function a(h){const p=Iu(h,n);n.splice(p,0,h),h.record.name&&!ps(h)&&r.set(h.record.name,h)}function d(h,p){let b,P={},I,V;if("name"in h&&h.name){if(b=r.get(h.name),!b)throw nn(1,{location:h});V=b.record.name,P=oe(hs(p.params,b.keys.filter(H=>!H.optional).concat(b.parent?b.parent.keys.filter(H=>H.optional):[]).map(H=>H.name)),h.params&&hs(h.params,b.keys.map(H=>H.name))),I=b.stringify(P)}else if(h.path!=null)I=h.path,b=n.find(H=>H.re.test(I)),b&&(P=b.parse(I),V=b.record.name);else{if(b=p.name?r.get(p.name):n.find(H=>H.re.test(p.path)),!b)throw nn(1,{location:h,currentLocation:p});V=b.record.name,P=oe({},p.params,h.params),I=b.stringify(P)}const $=[];let F=b;for(;F;)$.unshift(F.record),F=F.parent;return{name:V,path:I,params:P,matched:$,meta:Mu($)}}e.forEach(h=>s(h));function u(){n.length=0,r.clear()}return{addRoute:s,resolve:d,removeRoute:i,clearRoutes:u,getRoutes:l,getRecordMatcher:o}}function hs(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Cu(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Nu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},mods:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Nu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function ps(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Mu(e){return e.reduce((t,n)=>oe(t,n.meta),{})}function gs(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Iu(e,t){let n=0,r=t.length;for(;n!==r;){const s=n+r>>1;Xi(e,t[s])<0?r=s:n=s+1}const o=Lu(e);return o&&(r=t.lastIndexOf(o,r-1)),r}function Lu(e){let t=e;for(;t=t.parent;)if(Yi(t)&&Xi(e,t)===0)return t}function Yi({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Pu(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const s=r[o].replace($i," "),i=s.indexOf("="),l=xn(i<0?s:s.slice(0,i)),a=i<0?null:xn(s.slice(i+1));if(l in t){let d=t[l];qe(d)||(d=t[l]=[d]),d.push(a)}else t[l]=a}return t}function bs(e){let t="";for(let n in e){const r=e[n];if(n=Qc(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(qe(r)?r.map(s=>s&&Gr(s)):[r&&Gr(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function Fu(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=qe(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const Bu=Symbol(""),ms=Symbol(""),vo=Symbol(""),_o=Symbol(""),Xr=Symbol("");function cn(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function vt(e,t,n,r,o,s=i=>i()){const i=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((l,a)=>{const d=p=>{p===!1?a(nn(4,{from:n,to:t})):p instanceof Error?a(p):_u(p)?a(nn(2,{from:t,to:p})):(i&&r.enterCallbacks[o]===i&&typeof p=="function"&&i.push(p),l())},u=s(()=>e.call(r&&r.instances[o],t,n,d));let h=Promise.resolve(u);e.length<3&&(h=h.then(d)),h.catch(p=>a(p))})}function Mr(e,t,n,r,o=s=>s()){const s=[];for(const i of e)for(const l in i.components){let a=i.components[l];if(!(t!=="beforeRouteEnter"&&!i.instances[l]))if(Di(a)){const u=(a.__vccOpts||a)[t];u&&s.push(vt(u,n,r,i,l,o))}else{let d=a();s.push(()=>d.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${l}" at "${i.path}"`);const h=Uc(u)?u.default:u;i.mods[l]=u,i.components[l]=h;const b=(h.__vccOpts||h)[t];return b&&vt(b,n,r,i,l,o)()}))}}return s}function ws(e){const t=rt(vo),n=rt(_o),r=We(()=>{const a=ze(e.to);return t.resolve(a)}),o=We(()=>{const{matched:a}=r.value,{length:d}=a,u=a[d-1],h=n.matched;if(!u||!h.length)return-1;const p=h.findIndex(tn.bind(null,u));if(p>-1)return p;const b=vs(a[d-2]);return d>1&&vs(u)===b&&h[h.length-1].path!==b?h.findIndex(tn.bind(null,a[d-2])):p}),s=We(()=>o.value>-1&&$u(n.params,r.value.params)),i=We(()=>o.value>-1&&o.value===n.matched.length-1&&Vi(n.params,r.value.params));function l(a={}){return Hu(a)?t[ze(e.replace)?"replace":"push"](ze(e.to)).catch(gn):Promise.resolve()}return{route:r,href:We(()=>r.value.href),isActive:s,isExactActive:i,navigate:l}}const Du=ci({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ws,setup(e,{slots:t}){const n=lr(ws(e)),{options:r}=rt(vo),o=We(()=>({[_s(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[_s(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:Fi("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},s)}}}),qi=Du;function Hu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function $u(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!qe(o)||o.length!==r.length||r.some((s,i)=>s!==o[i]))return!1}return!0}function vs(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const _s=(e,t,n)=>e??t??n,zu=ci({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=rt(Xr),o=We(()=>e.route||r.value),s=rt(ms,0),i=We(()=>{let d=ze(s);const{matched:u}=o.value;let h;for(;(h=u[d])&&!h.components;)d++;return d}),l=We(()=>o.value.matched[i.value]);Un(ms,We(()=>i.value+1)),Un(Bu,l),Un(Xr,o);const a=co();return Xt(()=>[a.value,l.value,e.name],([d,u,h],[p,b,P])=>{u&&(u.instances[h]=d,b&&b!==u&&d&&d===p&&(u.leaveGuards.size||(u.leaveGuards=b.leaveGuards),u.updateGuards.size||(u.updateGuards=b.updateGuards))),d&&u&&(!b||!tn(u,b)||!p)&&(u.enterCallbacks[h]||[]).forEach(I=>I(d))},{flush:"post"}),()=>{const d=o.value,u=e.name,h=l.value,p=h&&h.components[u];if(!p)return ys(n.default,{Component:p,route:d});const b=h.props[u],P=b?b===!0?d.params:typeof b=="function"?b(d):b:null,V=Fi(p,oe({},P,t,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(h.instances[u]=null)},ref:a}));return ys(n.default,{Component:V,route:d})||V}}});function ys(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Zi=zu;function Uu(e){const t=Ou(e.routes,e),n=e.parseQuery||Pu,r=e.stringifyQuery||bs,o=e.history,s=cn(),i=cn(),l=cn(),a=Ql(gt);let d=gt;zt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Cr.bind(null,y=>""+y),h=Cr.bind(null,tu),p=Cr.bind(null,xn);function b(y,N){let C,B;return Gi(y)?(C=t.getRecordMatcher(y),B=N):B=y,t.addRoute(B,C)}function P(y){const N=t.getRecordMatcher(y);N&&t.removeRoute(N)}function I(){return t.getRoutes().map(y=>y.record)}function V(y){return!!t.getRecordMatcher(y)}function $(y,N){if(N=oe({},N||a.value),typeof y=="string"){const f=Nr(n,y,N.path),g=t.resolve({path:f.path},N),x=o.createHref(f.fullPath);return oe(f,g,{params:p(g.params),hash:xn(f.hash),redirectedFrom:void 0,href:x})}let C;if(y.path!=null)C=oe({},y,{path:Nr(n,y.path,N.path).path});else{const f=oe({},y.params);for(const g in f)f[g]==null&&delete f[g];C=oe({},y,{params:h(f)}),N.params=h(N.params)}const B=t.resolve(C,N),Q=y.hash||"";B.params=u(p(B.params));const ce=ou(r,oe({},y,{hash:Jc(Q),path:B.path})),c=o.createHref(ce);return oe({fullPath:ce,hash:Q,query:r===bs?Fu(y.query):y.query||{}},B,{redirectedFrom:void 0,href:c})}function F(y){return typeof y=="string"?Nr(n,y,a.value.path):oe({},y)}function H(y,N){if(d!==y)return nn(8,{from:N,to:y})}function L(y){return se(y)}function Z(y){return L(oe(F(y),{replace:!0}))}function ae(y){const N=y.matched[y.matched.length-1];if(N&&N.redirect){const{redirect:C}=N;let B=typeof C=="function"?C(y):C;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=F(B):{path:B},B.params={}),oe({query:y.query,hash:y.hash,params:B.path!=null?{}:y.params},B)}}function se(y,N){const C=d=$(y),B=a.value,Q=y.state,ce=y.force,c=y.replace===!0,f=ae(C);if(f)return se(oe(F(f),{state:typeof f=="object"?oe({},Q,f.state):Q,force:ce,replace:c}),N||C);const g=C;g.redirectedFrom=N;let x;return!ce&&su(r,B,C)&&(x=nn(16,{to:g,from:B}),q(B,B,!0,!1)),(x?Promise.resolve(x):Ce(g,B)).catch(v=>at(v)?at(v,2)?v:X(v):T(v,g,B)).then(v=>{if(v){if(at(v,2))return se(oe({replace:c},F(v.to),{state:typeof v.to=="object"?oe({},Q,v.to.state):Q,force:ce}),N||g)}else v=Ve(g,B,!0,c,Q);return Fe(g,B,v),v})}function Oe(y,N){const C=H(y,N);return C?Promise.reject(C):Promise.resolve()}function be(y){const N=Ke.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(y):y()}function Ce(y,N){let C;const[B,Q,ce]=ju(y,N);C=Mr(B.reverse(),"beforeRouteLeave",y,N);for(const f of B)f.leaveGuards.forEach(g=>{C.push(vt(g,y,N))});const c=Oe.bind(null,y,N);return C.push(c),de(C).then(()=>{C=[];for(const f of s.list())C.push(vt(f,y,N));return C.push(c),de(C)}).then(()=>{C=Mr(Q,"beforeRouteUpdate",y,N);for(const f of Q)f.updateGuards.forEach(g=>{C.push(vt(g,y,N))});return C.push(c),de(C)}).then(()=>{C=[];for(const f of ce)if(f.beforeEnter)if(qe(f.beforeEnter))for(const g of f.beforeEnter)C.push(vt(g,y,N));else C.push(vt(f.beforeEnter,y,N));return C.push(c),de(C)}).then(()=>(y.matched.forEach(f=>f.enterCallbacks={}),C=Mr(ce,"beforeRouteEnter",y,N,be),C.push(c),de(C))).then(()=>{C=[];for(const f of i.list())C.push(vt(f,y,N));return C.push(c),de(C)}).catch(f=>at(f,8)?f:Promise.reject(f))}function Fe(y,N,C){l.list().forEach(B=>be(()=>B(y,N,C)))}function Ve(y,N,C,B,Q){const ce=H(y,N);if(ce)return ce;const c=N===gt,f=zt?history.state:{};C&&(B||c?o.replace(y.fullPath,oe({scroll:c&&f&&f.scroll},Q)):o.push(y.fullPath,Q)),a.value=y,q(y,N,C,c),X()}let Pe;function it(){Pe||(Pe=o.listen((y,N,C)=>{if(!ve.listening)return;const B=$(y),Q=ae(B);if(Q){se(oe(Q,{replace:!0}),B).catch(gn);return}d=B;const ce=a.value;zt&&hu(as(ce.fullPath,C.delta),hr()),Ce(B,ce).catch(c=>at(c,12)?c:at(c,2)?(se(c.to,B).then(f=>{at(f,20)&&!C.delta&&C.type===En.pop&&o.go(-1,!1)}).catch(gn),Promise.reject()):(C.delta&&o.go(-C.delta,!1),T(c,B,ce))).then(c=>{c=c||Ve(B,ce,!1),c&&(C.delta&&!at(c,8)?o.go(-C.delta,!1):C.type===En.pop&&at(c,20)&&o.go(-1,!1)),Fe(B,ce,c)}).catch(gn)}))}let Be=cn(),fe=cn(),w;function T(y,N,C){X(y);const B=fe.list();return B.length?B.forEach(Q=>Q(y,N,C)):console.error(y),Promise.reject(y)}function U(){return w&&a.value!==gt?Promise.resolve():new Promise((y,N)=>{Be.add([y,N])})}function X(y){return w||(w=!y,it(),Be.list().forEach(([N,C])=>y?C(y):N()),Be.reset()),y}function q(y,N,C,B){const{scrollBehavior:Q}=e;if(!zt||!Q)return Promise.resolve();const ce=!C&&pu(as(y.fullPath,0))||(B||!C)&&history.state&&history.state.scroll||null;return oi().then(()=>Q(y,N,ce)).then(c=>c&&du(c)).catch(c=>T(c,y,N))}const ee=y=>o.go(y);let we;const Ke=new Set,ve={currentRoute:a,listening:!0,addRoute:b,removeRoute:P,clearRoutes:t.clearRoutes,hasRoute:V,getRoutes:I,resolve:$,options:e,push:L,replace:Z,go:ee,back:()=>ee(-1),forward:()=>ee(1),beforeEach:s.add,beforeResolve:i.add,afterEach:l.add,onError:fe.add,isReady:U,install(y){const N=this;y.component("RouterLink",qi),y.component("RouterView",Zi),y.config.globalProperties.$router=N,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>ze(a)}),zt&&!we&&a.value===gt&&(we=!0,L(o.location).catch(Q=>{}));const C={};for(const Q in gt)Object.defineProperty(C,Q,{get:()=>a.value[Q],enumerable:!0});y.provide(vo,N),y.provide(_o,Qs(C)),y.provide(Xr,a);const B=y.unmount;Ke.add(y),y.unmount=function(){Ke.delete(y),Ke.size<1&&(d=gt,Pe&&Pe(),Pe=null,a.value=gt,we=!1,w=!1),B()}}};function de(y){return y.reduce((N,C)=>N.then(()=>be(C)),Promise.resolve())}return ve}function ju(e,t){const n=[],r=[],o=[],s=Math.max(t.matched.length,e.matched.length);for(let i=0;i<s;i++){const l=t.matched[i];l&&(e.matched.find(d=>tn(d,l))?r.push(l):n.push(l));const a=e.matched[i];a&&(t.matched.find(d=>tn(d,a))||o.push(a))}return[n,r,o]}function Ji(e){return rt(_o)}const Vu="/ea-effects/favicon.ico";function Ku(e,t){const n=document.createElement("link");n.href=t,n.rel="stylesheet",e.appendChild(n)}class st extends HTMLElement{constructor(){super(),this.isProduction=!1,this.isProduction=!0}toggleAttribute(t,n,r){n?(this.setAttribute(t,n),r&&this.dom.classList.add(r)):(this.hasAttribute(t)&&this.removeAttribute(t),r&&this.dom.classList.remove(r))}toggleAttr(t,n){n?this.setAttribute(t,n):this.removeAttribute(t)}getAttrBoolean(t){const n=this.getAttribute(t);return n==="true"||n===""}getAttrNumber(t){const n=this.getAttribute(t);return n?Number(n):0}build(t,n){if(this.isProduction){const r=document.createElement("style");r.innerHTML=n,this.shadowRoot.appendChild(r)}else Ku(t,new URL(this.nodeName.toLowerCase()+"/index.css",import.meta.url).href)}}var Ct,Tn,Jn,Qi;class Gu extends HTMLElement{constructor(){super();_e(this,Jn);_e(this,Ct);_e(this,Tn);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <link id="fontello-stylesheet" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easy-component-ui/components/ea-icon/css/fontello.css">
            <i class="ea-icon_wrap" part="container">
                <slot></slot>
            </i>
        `,Re(this,Ct,n.querySelector(".ea-icon_wrap")),Re(this,Tn,n.querySelector("#fontello-stylesheet")),document.addEventListener("configChanged",r=>{mr(this,Jn,Qi).call(this,r.detail)})}get icon(){return this.getAttribute("icon")||""}set icon(n){this.setAttribute("icon",n),Y(this,Ct).className=`${n}`}get color(){return this.getAttribute("color")||""}set color(n){this.setAttribute("color",n),Y(this,Ct).style.color=n}get size(){return this.getAttribute("size")||""}set size(n){this.setAttribute("size",n),Y(this,Ct).style.fontSize=`${n}px`}connectedCallback(){this.icon=this.icon,this.color=this.color,this.size=this.size,document.dispatchEvent(new CustomEvent("ea-icon-ready"))}}Ct=new WeakMap,Tn=new WeakMap,Jn=new WeakSet,Qi=function(n){Y(this,Tn).href=n.fontelloCSS};window.customElements.get("ea-icon")||window.customElements.define("ea-icon",Gu);const Wu=`
.ea-menu-item_wrap {
  --normal-bgc: #fff;
  --normal-text-color: #303133;
  --actived-text-color: #409eff;
  --actived-bgc: #fff;
  box-sizing: border-box;
  padding: 0 20px;
  border-bottom: 2px solid;
  border-color: transparent;
  height: 60px;
  line-height: 60px;
  font-size: 14px;
  color: var(--normal-text-color);
  background-color: var(--normal-bgc);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  transition: border-color 0.3s, background-color 0.3s, color 0.3s;
}
.ea-menu-item_wrap.is-actived {
  color: var(--actived-text-color);
  border-color: var(--actived-text-color);
}
.ea-menu-item_wrap.is-actived ::slotted(a) {
  color: var(--actived-text-color);
}
.ea-menu-item_wrap.is-sub-actived {
  color: var(--actived-text-color);
}
.ea-menu-item_wrap.is-sub-actived ::slotted(a) {
  color: var(--actived-text-color);
}
.ea-menu-item_wrap.is-disabled {
  color: #c0c4cc;
  pointer-events: none;
  cursor: not-allowed;
}
.ea-menu-item_wrap.is-disabled ::slotted(a) {
  color: #c0c4cc;
}
.ea-menu-item_wrap ::slotted(a) {
  color: var(--normal-text-color);
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
`;var Ge;class Xu extends st{constructor(){super();_e(this,Ge);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <div class="ea-menu-item_wrap" part="container">
                <slot></slot>
            </div>
        `,Re(this,Ge,n.querySelector(".ea-menu-item_wrap")),this.build(n,Wu)}get actived(){return this.getAttrBoolean("actived")}set actived(n){this.setAttribute("actived",n),this.isSubItem?Y(this,Ge).classList.toggle("is-sub-actived",n):Y(this,Ge).classList.toggle("is-actived",n)}get isSubItem(){return this.getAttrBoolean("is-sub-item")}set isSubItem(n){n&&this.setAttribute("is-sub-item",n)}get backgroundColor(){return this.getAttribute("background-color")||"#fff"}set backgroundColor(n){this.setAttribute("background-color",n),Y(this,Ge).style.setProperty("--normal-bgc",n)}get textColor(){return this.getAttribute("text-color")||"#303133"}set textColor(n){this.setAttribute("text-color",n),Y(this,Ge).style.setProperty("--normal-text-color",n)}get activeTextColor(){return this.getAttribute("active-text-color")||"#409eff"}set activeTextColor(n){this.setAttribute("active-text-color",n),Y(this,Ge).style.setProperty("--actived-text-color",n)}get disabled(){return this.getAttrBoolean("disabled")}set disabled(n){this.setAttribute("disabled",n),Y(this,Ge).classList.toggle("is-disabled",n)}connectedCallback(){this.actived=this.actived,this.disabled=this.disabled,Y(this,Ge).addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("item-selected",{detail:{index:this.index,title:this.textContent}}))})}}Ge=new WeakMap;customElements.get("ea-menu-item")||customElements.define("ea-menu-item",Xu);const Ln=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n},Yu=["actived"],qu={__name:"MyRoute",props:{to:String},setup(e){const t=Ji(),n={activeRoute:co(t.path)||""};return Xt(t,r=>{n.activeRoute.value=r.path}),(r,o)=>(ge(),xe("ea-menu-item",{class:"rl-item",actived:n.activeRoute.value===e.to},[ne(ze(qi),{to:e.to,activeClass:"active"},{default:mt(()=>[ka(r.$slots,"default",{},void 0,!0)]),_:3},8,["to"])],8,Yu))}},Dt=Ln(qu,[["__scopeId","data-v-62147355"]]),Zu={__name:"Router",setup(e){return(t,n)=>(ge(),xe(me,null,[ne(Dt,{to:"/2DTransitions"},{default:mt(()=>n[0]||(n[0]=[ut("Hover | 2D 过渡动画")])),_:1}),ne(Dt,{to:"/backgroundTransitions"},{default:mt(()=>n[1]||(n[1]=[ut(" Hover | 背景（background）过渡动画 ")])),_:1}),ne(Dt,{to:"/borderTransitions"},{default:mt(()=>n[2]||(n[2]=[ut("Hover | 边框（border）过渡动画")])),_:1}),ne(Dt,{to:"/shadowAndGlowTransitions"},{default:mt(()=>n[3]||(n[3]=[ut(" Hover | 阴影（box-shadow）过渡动画 ")])),_:1}),ne(Dt,{to:"/speechBubbles"},{default:mt(()=>n[4]||(n[4]=[ut("Hover | 气泡框过渡动画")])),_:1}),ne(Dt,{to:"/curls"},{default:mt(()=>n[5]||(n[5]=[ut("Hover | 折角过渡动画")])),_:1})],64))}},Ju=`
.ea-container_wrap {
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
.ea-container_wrap.is-vertical {
  flex-direction: column;
}
.ea-container_wrap ::slotted(ea-main) {
  flex: 1;
  overflow: auto;
}
`;var kn,Qn,el;class Qu extends st{constructor(){super();_e(this,Qn);_e(this,kn);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <div class="ea-container_wrap" part="container">
                <slot></slot>
            </div>
        `,Re(this,kn,n.querySelector(".ea-container_wrap")),this.build(n,Ju)}get CONTAINER_TYPE(){return["ea-header","ea-main","ea-footer","ea-container","ea-aside"]}get direction(){return["horizontal","vertical"].includes(this.getAttribute("direction"))||"horizontal"}set direction(n){this.setAttribute("direction",n),Y(this,kn).classList.toggle("is-vertical",n==="horizontal")}connectedCallback(){const n=Array.from(this.children);mr(this,Qn,el).call(this,n)}}kn=new WeakMap,Qn=new WeakSet,el=function(n){const r=n.map(o=>o.tagName.toLowerCase());n.forEach(o=>{this.CONTAINER_TYPE.includes(o.tagName.toLowerCase())||o.remove(),o.tagName.toLowerCase()==="ea-container"&&(o.style.flex="1")}),r.includes("ea-header")||r.includes("ea-footer")?this.direction="horizontal":this.direction=this.direction};customElements.get("ea-container")||customElements.define("ea-container",Qu);const ef=`
.ea-aside_wrap {
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
}
.ea-aside_wrap ::slotted(ea-main) {
  overflow: auto;
}
`;var An;class tf extends st{constructor(){super();_e(this,An);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <aside class="ea-aside_wrap" part="container">
                <slot></slot>
            </aside>
        `,Re(this,An,n.querySelector(".ea-aside_wrap")),this.build(n,ef)}get width(){return this.getAttrNumber("width")||200}set width(n){this.setAttribute("width",n),Y(this,An).style.width=`${n}px`}connectedCallback(){this.width=this.width}}An=new WeakMap;customElements.get("ea-aside")||customElements.define("ea-aside",tf);const tl=(e,t=0)=>{let n=setTimeout(()=>{clearTimeout(n),n=null,e()},t)},Ir=e=>{e.actived=!1};function nf(e,t,n){e.forEach(Ir),t.forEach(Ir),n.forEach(Ir)}function rf(e,t,n){e.forEach((r,o)=>{r.itemIndex=o,r.addEventListener("item-selected",s=>{const i=s.detail.title;nf(e,t,n),r.actived=!0,this.dispatchEvent(new CustomEvent("select",{detail:{index:o,title:i}}))})})}const of=`
.ea-menu_wrap {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
}
.ea-menu_wrap.is-vertical {
  flex-direction: column;
  align-items: flex-start;
  border-right: 1px solid #e6e6e6;
  overflow: auto;
}
.ea-menu_wrap.is-vertical ::slotted(ea-menu-item),
.ea-menu_wrap.is-vertical ::slotted(ea-submenu) {
  width: 100%;
}
.ea-menu_wrap.is-vertical ::slotted(ea-submenu) {
  width: 100%;
}
`,sf=`
.ea-submenu_wrap {
  --normal-bgc: #fff;
  --normal-text-color: #303133;
  --actived-text-color: #409eff;
  --actived-bgc: #fff;
  position: relative;
  box-sizing: border-box;
  padding: 0 20px;
  border-bottom: 2px solid;
  border-color: transparent;
  height: 60px;
  line-height: 60px;
  font-size: 14px;
  color: var(--normal-text-color);
  background-color: var(--normal-bgc);
  white-space: nowrap;
  cursor: pointer;
  transition: border-color 0.3s, background-color 0.3s, color 0.3s;
}
.ea-submenu_wrap .ea-submenu_title_wrap {
  display: flex;
  justify-content: space-between;
}
.ea-submenu_wrap .ea-submenu_title_wrap .ea-submenu_dropdown_icon {
  rotate: -90deg;
  transition: rotate 0.3s;
}
.ea-submenu_wrap .ea-submenu_items_wrap {
  display: none;
  position: absolute;
  left: 0;
  margin-top: 3px;
  border-radius: 8px;
  overflow: hidden;
  min-width: 200px;
  z-index: 100;
  opacity: 0;
  transform-origin: left top;
  transform: scale(0);
  transition: opacity 0.3s, transform 0.3s;
}
.ea-submenu_wrap:hover .ea-submenu_items_wrap {
  opacity: 1;
  transform: scale(1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.ea-submenu_wrap:hover .ea-submenu_title_wrap .ea-submenu_dropdown_icon {
  rotate: 0deg;
}
.ea-submenu_wrap.is-actived {
  color: var(--actived-text-color);
  border-color: var(--actived-text-color);
}
.ea-submenu_wrap.is-sub-actived {
  color: var(--actived-text-color);
}
.ea-submenu_wrap.is-disabled {
  color: #c0c4cc;
  pointer-events: none;
  cursor: not-allowed;
}
.ea-submenu_wrap ::slotted(a) {
  color: var(--normal-text-color);
  text-decoration: none;
}
`;var et,er,On;class lf extends st{constructor(){super();_e(this,et);_e(this,er);_e(this,On);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <div class="ea-submenu_wrap" part="container">
                <div class="ea-submenu_title_wrap" part="title-wrap">
                    <slot name="title"></slot>
                    <ea-icon class="ea-submenu_dropdown_icon" icon="icon-angle-down" part="dropdown-icon"></ea-icon>
                </div>
                <div class="ea-submenu_items_wrap" part="dropdown-wrap">
                    <slot></slot>
                </div>
            </div>
        `,Re(this,et,n.querySelector(".ea-submenu_wrap")),Re(this,er,n.querySelector(".ea-submenu_title_wrap")),Re(this,On,n.querySelector(".ea-submenu_items_wrap")),this.build(n,sf)}get actived(){return this.getAttrBoolean("actived")}set actived(n){this.setAttribute("actived",n),Y(this,et).classList.toggle("is-actived",n)}get backgroundColor(){return this.getAttribute("background-color")||"#fff"}set backgroundColor(n){this.setAttribute("background-color",n),Y(this,et).style.setProperty("--normal-bgc",n)}get textColor(){return this.getAttribute("text-color")||"#303133"}set textColor(n){this.setAttribute("text-color",n),Y(this,et).style.setProperty("--normal-text-color",n)}get activeTextColor(){return this.getAttribute("active-text-color")||"#409eff"}set activeTextColor(n){this.setAttribute("active-text-color",n),Y(this,et).style.setProperty("--actived-text-color",n)}get disabled(){return this.getAttrBoolean("disabled")}set disabled(n){this.setAttribute("disabled",n),Y(this,et).classList.toggle("is-disabled",n)}get mode(){return this.getAttribute("mode")||"horizontal"}set mode(n){this.setAttribute("mode",n),Y(this,et).classList.toggle("is-vertical",n==="vertical")}connectedCallback(){this.disabled=this.disabled,this.querySelectorAll("ea-menu-item").forEach((r,o)=>{r.isSubItem=!0,r.addEventListener("item-selected",s=>{this.actived=!0})}),tl(()=>{Y(this,On).style.display="block"},20)}}et=new WeakMap,er=new WeakMap,On=new WeakMap;customElements.get("ea-submenu")||customElements.define("ea-submenu",lf);const af=`
.ea-menu-item-group_wrap {
  --normal-bgc: #fff;
  --normal-text-color: #303133;
  --actived-text-color: #409eff;
  --actived-bgc: #fff;
  width: 100%;
}
.ea-menu-item-group_wrap.is-actived .ea-submenu_title_wrap {
  color: var(--actived-text-color);
  border-color: var(--actived-text-color);
}
.ea-menu-item-group_wrap .ea-submenu_title_wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
  border-bottom: 2px solid;
  border-color: transparent;
  height: 60px;
  line-height: 60px;
  font-size: 14px;
  color: var(--normal-text-color);
  background-color: var(--normal-bgc);
  white-space: nowrap;
  cursor: pointer;
  transition: border-color 0.3s, background-color 0.3s, color 0.3s;
}
.ea-menu-item-group_wrap .ea-submenu_items_wrap {
  margin: 0 20px;
  height: 0;
  overflow: hidden;
  transition: height 0.3s;
}
.ea-menu-item-group_wrap .ea-submenu_dropdown_icon {
  transform: rotate(-90deg);
  transition: transform 0.3s;
}
.ea-menu-item-group_wrap.is-open .ea-submenu_dropdown_icon {
  transform: rotate(0deg);
}
`;var ft,Cn,Yt;class cf extends st{constructor(){super();_e(this,ft);_e(this,Cn);_e(this,Yt);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <div class="ea-menu-item-group_wrap" part="container">
                <div class="ea-submenu_title_wrap" part="title-wrap">
                    <slot name="title"></slot>
                    <ea-icon class="ea-submenu_dropdown_icon" icon="icon-angle-down" part="dropdown-icon"></ea-icon>
                </div>
                <div class="ea-submenu_items_wrap" part="dropdown-wrap">
                    <slot></slot>
                </div>
            </div>
        `,Re(this,ft,n.querySelector(".ea-menu-item-group_wrap")),Re(this,Cn,n.querySelector(".ea-submenu_title_wrap")),Re(this,Yt,n.querySelector(".ea-submenu_items_wrap")),this.build(n,af)}get actived(){return this.getAttrBoolean("actived")}set actived(n){this.setAttribute("actived",n),Y(this,ft).classList.toggle("is-actived",n)}get backgroundColor(){return this.getAttribute("background-color")||"#fff"}set backgroundColor(n){this.setAttribute("background-color",n),Y(this,ft).style.setProperty("--normal-bgc",n)}get textColor(){return this.getAttribute("text-color")||"#303133"}set textColor(n){this.setAttribute("text-color",n),Y(this,ft).style.setProperty("--normal-text-color",n)}get activeTextColor(){return this.getAttribute("active-text-color")||"#409eff"}set activeTextColor(n){this.setAttribute("active-text-color",n),Y(this,ft).style.setProperty("--actived-text-color",n)}get collapse(){return this.getAttrBoolean("collapse")||!1}set collapse(n){this.setAttribute("collapse",n),Y(this,Yt).style.height=n?Y(this,Yt).scrollHeight+"px":"0",Y(this,ft).classList.toggle("is-open",n)}connectedCallback(){this.style.width="100%",this.querySelectorAll("ea-menu-item").forEach(r=>{r.isSubItem=!0,r.addEventListener("item-selected",o=>{tl(()=>{this.actived=!0},20)})}),Y(this,Cn).addEventListener("click",r=>{this.collapse=!this.collapse})}}ft=new WeakMap,Cn=new WeakMap,Yt=new WeakMap;customElements.get("ea-menu-item-group")||customElements.define("ea-menu-item-group",cf);var qt;class uf extends st{constructor(){super();_e(this,qt);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <div class="ea-menu_wrap" part="container">
                <slot></slot>
            </div>
        `,Re(this,qt,n.querySelector(".ea-menu_wrap")),this.build(n,of)}get mode(){return this.getAttribute("mode")||"vertical"}set mode(n){this.setAttribute("mode",n),Y(this,qt).classList.toggle("is-vertical",n==="vertical"),this.querySelectorAll("ea-submenu").forEach(r=>{r.mode=n})}get backgroundColor(){return this.getAttribute("background-color")||"#fff"}set backgroundColor(n){this.setAttribute("background-color",n),Y(this,qt).style.backgroundColor=n}get textColor(){return this.getAttribute("text-color")||"#303133"}set textColor(n){this.setAttribute("text-color",n)}get activeTextColor(){return this.getAttribute("active-text-color")||"#409eff"}set activeTextColor(n){this.setAttribute("active-text-color",n)}get collapse(){return this.getAttrBoolean("collapse")}set collapse(n){this.toggleAttr("collapse",n),this.querySelectorAll("ea-menu-item-group").forEach(r=>{this.mode==="vertical"&&(r.collapse=!n)})}connectedCallback(){this.mode=this.mode,this.collapse=!0,this.backgroundColor=this.backgroundColor,this.textColor=this.textColor,this.activeTextColor=this.activeTextColor;const n=this.querySelectorAll("ea-menu-item"),r=this.querySelectorAll("ea-submenu"),o=this.querySelectorAll("ea-menu-item-group");rf.call(this,n,r,o);const s=(i,l)=>{i.backgroundColor=this.backgroundColor,i.textColor=this.textColor,i.activeTextColor=this.activeTextColor};n.forEach(s),r.forEach(s),o.forEach(s)}}qt=new WeakMap;customElements.get("ea-menu")||customElements.define("ea-menu",uf);const ff={width:"200"},df={mode:"vertical"},hf={__name:"MyAside",setup(e){return(t,n)=>(ge(),xe("ea-aside",ff,[n[0]||(n[0]=Ee("ea-header",{class:"aside-header"},[Ee("div",{class:"logo"},[Ee("img",{src:Vu,alt:""})]),Ee("b",{class:"aside-title"},"ea-effects")],-1)),Ee("ea-menu",df,[ne(Zu)])]))}},pf=Ln(hf,[["__scopeId","data-v-56b791c4"]]),gf=`
.ea-header_wrap {
  box-sizing: border-box;
  padding: 0 20px;

  height: 60px;

  color: #333;

  overflow: hidden;
}
`;var Zt;class bf extends st{constructor(){super();_e(this,Zt);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <header class="ea-header_wrap" part="container">
                <slot></slot>
            </header>
        `,Re(this,Zt,n.querySelector(".ea-header_wrap")),this.build(n,gf)}get height(){return this.getAttrNumber("height")||60}set height(n){this.setAttribute("height",n),Y(this,Zt).style.height=`${n}px`,Y(this,Zt).style.lineHeight=`${n}px`}connectedCallback(){this.height=this.height}}Zt=new WeakMap;customElements.get("ea-header")||customElements.define("ea-header",bf);const mf=`
.ea-footer_wrap {
  box-sizing: border-box;
  padding: 0 20px;

  height: 60px;

  color: #333;

  overflow: hidden;
}
`;var Jt;class wf extends st{constructor(){super();_e(this,Jt);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <footer class="ea-footer_wrap" part="container">
                <slot></slot>
            </footer>
        `,Re(this,Jt,n.querySelector(".ea-footer_wrap")),this.build(n,mf)}get height(){return this.getAttrNumber("height")||60}set height(n){this.setAttribute("height",n),Y(this,Jt).style.height=`${n}px`,Y(this,Jt).style.lineHeight=`${n}px`}connectedCallback(){this.height=this.height}}Jt=new WeakMap;customElements.get("ea-footer")||customElements.define("ea-footer",wf);const vf=`
.ea-main_wrap {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 20px;
  overflow: auto;
  color: #333;
}
`;class _f extends st{constructor(){super();const t=this.attachShadow({mode:"open"});t.innerHTML=`
            <main class="ea-main_wrap" part="container">
                <slot></slot>
            </main>
        `,this.build(t,vf)}}customElements.get("ea-main")||customElements.define("ea-main",_f);const yf={__name:"App",setup(e){let t=co(!1);const n=Ji();return Xt(n,()=>{t.value=!1}),(r,o)=>(ge(),xe("ea-container",{class:It(`container ${ze(t)?"open":""}`),direction:"vertical"},[ne(pf,{class:It("my-aside")}),Ee("ea-container",null,[Ee("ea-header",null,[Ee("ea-icon",{icon:"icon-th-list",class:"toggle-aside-btn",onClick:o[0]||(o[0]=s=>ye(t)?t.value=!ze(t):t=!ze(t))}),Ee("section",{class:"mask",onClick:o[1]||(o[1]=s=>ye(t)?t.value=!ze(t):t=!ze(t))})]),Ee("ea-main",null,[ne(ze(Zi))])])],2))}},xf=Ln(yf,[["__scopeId","data-v-d19ae1c7"]]);function Ef(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function nl(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(t=>{const n=e[t],r=typeof n;(r==="object"||r==="function")&&!Object.isFrozen(n)&&nl(n)}),e}class xs{constructor(t){t.data===void 0&&(t.data={}),this.data=t.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function rl(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function yt(e,...t){const n=Object.create(null);for(const r in e)n[r]=e[r];return t.forEach(function(r){for(const o in r)n[o]=r[o]}),n}const Sf="</span>",Es=e=>!!e.scope,Rf=(e,{prefix:t})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const n=e.split(".");return[`${t}${n.shift()}`,...n.map((r,o)=>`${r}${"_".repeat(o+1)}`)].join(" ")}return`${t}${e}`};class Tf{constructor(t,n){this.buffer="",this.classPrefix=n.classPrefix,t.walk(this)}addText(t){this.buffer+=rl(t)}openNode(t){if(!Es(t))return;const n=Rf(t.scope,{prefix:this.classPrefix});this.span(n)}closeNode(t){Es(t)&&(this.buffer+=Sf)}value(){return this.buffer}span(t){this.buffer+=`<span class="${t}">`}}const Ss=(e={})=>{const t={children:[]};return Object.assign(t,e),t};class yo{constructor(){this.rootNode=Ss(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(t){this.top.children.push(t)}openNode(t){const n=Ss({scope:t});this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(t){return this.constructor._walk(t,this.rootNode)}static _walk(t,n){return typeof n=="string"?t.addText(n):n.children&&(t.openNode(n),n.children.forEach(r=>this._walk(t,r)),t.closeNode(n)),t}static _collapse(t){typeof t!="string"&&t.children&&(t.children.every(n=>typeof n=="string")?t.children=[t.children.join("")]:t.children.forEach(n=>{yo._collapse(n)}))}}class kf extends yo{constructor(t){super(),this.options=t}addText(t){t!==""&&this.add(t)}startScope(t){this.openNode(t)}endScope(){this.closeNode()}__addSublanguage(t,n){const r=t.root;n&&(r.scope=`language:${n}`),this.add(r)}toHTML(){return new Tf(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function Sn(e){return e?typeof e=="string"?e:e.source:null}function ol(e){return Ft("(?=",e,")")}function Af(e){return Ft("(?:",e,")*")}function Of(e){return Ft("(?:",e,")?")}function Ft(...e){return e.map(n=>Sn(n)).join("")}function Cf(e){const t=e[e.length-1];return typeof t=="object"&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}function xo(...e){return"("+(Cf(e).capture?"":"?:")+e.map(r=>Sn(r)).join("|")+")"}function sl(e){return new RegExp(e.toString()+"|").exec("").length-1}function Nf(e,t){const n=e&&e.exec(t);return n&&n.index===0}const Mf=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Eo(e,{joinWith:t}){let n=0;return e.map(r=>{n+=1;const o=n;let s=Sn(r),i="";for(;s.length>0;){const l=Mf.exec(s);if(!l){i+=s;break}i+=s.substring(0,l.index),s=s.substring(l.index+l[0].length),l[0][0]==="\\"&&l[1]?i+="\\"+String(Number(l[1])+o):(i+=l[0],l[0]==="("&&n++)}return i}).map(r=>`(${r})`).join(t)}const If=/\b\B/,il="[a-zA-Z]\\w*",So="[a-zA-Z_]\\w*",ll="\\b\\d+(\\.\\d+)?",al="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",cl="\\b(0b[01]+)",Lf="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Pf=(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=Ft(t,/.*\b/,e.binary,/\b.*/)),yt({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(n,r)=>{n.index!==0&&r.ignoreMatch()}},e)},Rn={begin:"\\\\[\\s\\S]",relevance:0},Ff={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[Rn]},Bf={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[Rn]},Df={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},pr=function(e,t,n={}){const r=yt({scope:"comment",begin:e,end:t,contains:[]},n);r.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const o=xo("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return r.contains.push({begin:Ft(/[ ]+/,"(",o,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),r},Hf=pr("//","$"),$f=pr("/\\*","\\*/"),zf=pr("#","$"),Uf={scope:"number",begin:ll,relevance:0},jf={scope:"number",begin:al,relevance:0},Vf={scope:"number",begin:cl,relevance:0},Kf={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[Rn,{begin:/\[/,end:/\]/,relevance:0,contains:[Rn]}]},Gf={scope:"title",begin:il,relevance:0},Wf={scope:"title",begin:So,relevance:0},Xf={begin:"\\.\\s*"+So,relevance:0},Yf=function(e){return Object.assign(e,{"on:begin":(t,n)=>{n.data._beginMatch=t[1]},"on:end":(t,n)=>{n.data._beginMatch!==t[1]&&n.ignoreMatch()}})};var zn=Object.freeze({__proto__:null,APOS_STRING_MODE:Ff,BACKSLASH_ESCAPE:Rn,BINARY_NUMBER_MODE:Vf,BINARY_NUMBER_RE:cl,COMMENT:pr,C_BLOCK_COMMENT_MODE:$f,C_LINE_COMMENT_MODE:Hf,C_NUMBER_MODE:jf,C_NUMBER_RE:al,END_SAME_AS_BEGIN:Yf,HASH_COMMENT_MODE:zf,IDENT_RE:il,MATCH_NOTHING_RE:If,METHOD_GUARD:Xf,NUMBER_MODE:Uf,NUMBER_RE:ll,PHRASAL_WORDS_MODE:Df,QUOTE_STRING_MODE:Bf,REGEXP_MODE:Kf,RE_STARTERS_RE:Lf,SHEBANG:Pf,TITLE_MODE:Gf,UNDERSCORE_IDENT_RE:So,UNDERSCORE_TITLE_MODE:Wf});function qf(e,t){e.input[e.index-1]==="."&&t.ignoreMatch()}function Zf(e,t){e.className!==void 0&&(e.scope=e.className,delete e.className)}function Jf(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=qf,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function Qf(e,t){Array.isArray(e.illegal)&&(e.illegal=xo(...e.illegal))}function ed(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function td(e,t){e.relevance===void 0&&(e.relevance=1)}const nd=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const n=Object.assign({},e);Object.keys(e).forEach(r=>{delete e[r]}),e.keywords=n.keywords,e.begin=Ft(n.beforeMatch,ol(n.begin)),e.starts={relevance:0,contains:[Object.assign(n,{endsParent:!0})]},e.relevance=0,delete n.beforeMatch},rd=["of","and","for","in","not","or","if","then","parent","list","value"],od="keyword";function ul(e,t,n=od){const r=Object.create(null);return typeof e=="string"?o(n,e.split(" ")):Array.isArray(e)?o(n,e):Object.keys(e).forEach(function(s){Object.assign(r,ul(e[s],t,s))}),r;function o(s,i){t&&(i=i.map(l=>l.toLowerCase())),i.forEach(function(l){const a=l.split("|");r[a[0]]=[s,sd(a[0],a[1])]})}}function sd(e,t){return t?Number(t):id(e)?0:1}function id(e){return rd.includes(e.toLowerCase())}const Rs={},Mt=e=>{console.error(e)},Ts=(e,...t)=>{console.log(`WARN: ${e}`,...t)},Ht=(e,t)=>{Rs[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),Rs[`${e}/${t}`]=!0)},Zn=new Error;function fl(e,t,{key:n}){let r=0;const o=e[n],s={},i={};for(let l=1;l<=t.length;l++)i[l+r]=o[l],s[l+r]=!0,r+=sl(t[l-1]);e[n]=i,e[n]._emit=s,e[n]._multi=!0}function ld(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw Mt("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Zn;if(typeof e.beginScope!="object"||e.beginScope===null)throw Mt("beginScope must be object"),Zn;fl(e,e.begin,{key:"beginScope"}),e.begin=Eo(e.begin,{joinWith:""})}}function ad(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw Mt("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Zn;if(typeof e.endScope!="object"||e.endScope===null)throw Mt("endScope must be object"),Zn;fl(e,e.end,{key:"endScope"}),e.end=Eo(e.end,{joinWith:""})}}function cd(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function ud(e){cd(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),ld(e),ad(e)}function fd(e){function t(i,l){return new RegExp(Sn(i),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(l?"g":""))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(l,a){a.position=this.position++,this.matchIndexes[this.matchAt]=a,this.regexes.push([a,l]),this.matchAt+=sl(l)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const l=this.regexes.map(a=>a[1]);this.matcherRe=t(Eo(l,{joinWith:"|"}),!0),this.lastIndex=0}exec(l){this.matcherRe.lastIndex=this.lastIndex;const a=this.matcherRe.exec(l);if(!a)return null;const d=a.findIndex((h,p)=>p>0&&h!==void 0),u=this.matchIndexes[d];return a.splice(0,d),Object.assign(a,u)}}class r{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(l){if(this.multiRegexes[l])return this.multiRegexes[l];const a=new n;return this.rules.slice(l).forEach(([d,u])=>a.addRule(d,u)),a.compile(),this.multiRegexes[l]=a,a}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(l,a){this.rules.push([l,a]),a.type==="begin"&&this.count++}exec(l){const a=this.getMatcher(this.regexIndex);a.lastIndex=this.lastIndex;let d=a.exec(l);if(this.resumingScanAtSamePosition()&&!(d&&d.index===this.lastIndex)){const u=this.getMatcher(0);u.lastIndex=this.lastIndex+1,d=u.exec(l)}return d&&(this.regexIndex+=d.position+1,this.regexIndex===this.count&&this.considerAll()),d}}function o(i){const l=new r;return i.contains.forEach(a=>l.addRule(a.begin,{rule:a,type:"begin"})),i.terminatorEnd&&l.addRule(i.terminatorEnd,{type:"end"}),i.illegal&&l.addRule(i.illegal,{type:"illegal"}),l}function s(i,l){const a=i;if(i.isCompiled)return a;[Zf,ed,ud,nd].forEach(u=>u(i,l)),e.compilerExtensions.forEach(u=>u(i,l)),i.__beforeBegin=null,[Jf,Qf,td].forEach(u=>u(i,l)),i.isCompiled=!0;let d=null;return typeof i.keywords=="object"&&i.keywords.$pattern&&(i.keywords=Object.assign({},i.keywords),d=i.keywords.$pattern,delete i.keywords.$pattern),d=d||/\w+/,i.keywords&&(i.keywords=ul(i.keywords,e.case_insensitive)),a.keywordPatternRe=t(d,!0),l&&(i.begin||(i.begin=/\B|\b/),a.beginRe=t(a.begin),!i.end&&!i.endsWithParent&&(i.end=/\B|\b/),i.end&&(a.endRe=t(a.end)),a.terminatorEnd=Sn(a.end)||"",i.endsWithParent&&l.terminatorEnd&&(a.terminatorEnd+=(i.end?"|":"")+l.terminatorEnd)),i.illegal&&(a.illegalRe=t(i.illegal)),i.contains||(i.contains=[]),i.contains=[].concat(...i.contains.map(function(u){return dd(u==="self"?i:u)})),i.contains.forEach(function(u){s(u,a)}),i.starts&&s(i.starts,l),a.matcher=o(a),a}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=yt(e.classNameAliases||{}),s(e)}function dl(e){return e?e.endsWithParent||dl(e.starts):!1}function dd(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return yt(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:dl(e)?yt(e,{starts:e.starts?yt(e.starts):null}):Object.isFrozen(e)?yt(e):e}var hd="11.10.0";class pd extends Error{constructor(t,n){super(t),this.name="HTMLInjectionError",this.html=n}}const Lr=rl,ks=yt,As=Symbol("nomatch"),gd=7,hl=function(e){const t=Object.create(null),n=Object.create(null),r=[];let o=!0;const s="Could not find the language '{}', did you forget to load/include a language module?",i={disableAutodetect:!0,name:"Plain text",contains:[]};let l={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:kf};function a(w){return l.noHighlightRe.test(w)}function d(w){let T=w.className+" ";T+=w.parentNode?w.parentNode.className:"";const U=l.languageDetectRe.exec(T);if(U){const X=be(U[1]);return X||(Ts(s.replace("{}",U[1])),Ts("Falling back to no-highlight mode for this block.",w)),X?U[1]:"no-highlight"}return T.split(/\s+/).find(X=>a(X)||be(X))}function u(w,T,U){let X="",q="";typeof T=="object"?(X=w,U=T.ignoreIllegals,q=T.language):(Ht("10.7.0","highlight(lang, code, ...args) has been deprecated."),Ht("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),q=w,X=T),U===void 0&&(U=!0);const ee={code:X,language:q};Be("before:highlight",ee);const we=ee.result?ee.result:h(ee.language,ee.code,U);return we.code=ee.code,Be("after:highlight",we),we}function h(w,T,U,X){const q=Object.create(null);function ee(E,k){return E.keywords[k]}function we(){if(!_.keywords){R.addText(m);return}let E=0;_.keywordPatternRe.lastIndex=0;let k=_.keywordPatternRe.exec(m),M="";for(;k;){M+=m.substring(E,k.index);const G=x.case_insensitive?k[0].toLowerCase():k[0],J=ee(_,G);if(J){const[he,Ne]=J;if(R.addText(M),M="",q[G]=(q[G]||0)+1,q[G]<=gd&&(z+=Ne),he.startsWith("_"))M+=k[0];else{const Tt=x.classNameAliases[he]||he;de(k[0],Tt)}}else M+=k[0];E=_.keywordPatternRe.lastIndex,k=_.keywordPatternRe.exec(m)}M+=m.substring(E),R.addText(M)}function Ke(){if(m==="")return;let E=null;if(typeof _.subLanguage=="string"){if(!t[_.subLanguage]){R.addText(m);return}E=h(_.subLanguage,m,!0,A[_.subLanguage]),A[_.subLanguage]=E._top}else E=b(m,_.subLanguage.length?_.subLanguage:null);_.relevance>0&&(z+=E.relevance),R.__addSublanguage(E._emitter,E.language)}function ve(){_.subLanguage!=null?Ke():we(),m=""}function de(E,k){E!==""&&(R.startScope(k),R.addText(E),R.endScope())}function y(E,k){let M=1;const G=k.length-1;for(;M<=G;){if(!E._emit[M]){M++;continue}const J=x.classNameAliases[E[M]]||E[M],he=k[M];J?de(he,J):(m=he,we(),m=""),M++}}function N(E,k){return E.scope&&typeof E.scope=="string"&&R.openNode(x.classNameAliases[E.scope]||E.scope),E.beginScope&&(E.beginScope._wrap?(de(m,x.classNameAliases[E.beginScope._wrap]||E.beginScope._wrap),m=""):E.beginScope._multi&&(y(E.beginScope,k),m="")),_=Object.create(E,{parent:{value:_}}),_}function C(E,k,M){let G=Nf(E.endRe,M);if(G){if(E["on:end"]){const J=new xs(E);E["on:end"](k,J),J.isMatchIgnored&&(G=!1)}if(G){for(;E.endsParent&&E.parent;)E=E.parent;return E}}if(E.endsWithParent)return C(E.parent,k,M)}function B(E){return _.matcher.regexIndex===0?(m+=E[0],1):(j=!0,0)}function Q(E){const k=E[0],M=E.rule,G=new xs(M),J=[M.__beforeBegin,M["on:begin"]];for(const he of J)if(he&&(he(E,G),G.isMatchIgnored))return B(k);return M.skip?m+=k:(M.excludeBegin&&(m+=k),ve(),!M.returnBegin&&!M.excludeBegin&&(m=k)),N(M,E),M.returnBegin?0:k.length}function ce(E){const k=E[0],M=T.substring(E.index),G=C(_,E,M);if(!G)return As;const J=_;_.endScope&&_.endScope._wrap?(ve(),de(k,_.endScope._wrap)):_.endScope&&_.endScope._multi?(ve(),y(_.endScope,E)):J.skip?m+=k:(J.returnEnd||J.excludeEnd||(m+=k),ve(),J.excludeEnd&&(m=k));do _.scope&&R.closeNode(),!_.skip&&!_.subLanguage&&(z+=_.relevance),_=_.parent;while(_!==G.parent);return G.starts&&N(G.starts,E),J.returnEnd?0:k.length}function c(){const E=[];for(let k=_;k!==x;k=k.parent)k.scope&&E.unshift(k.scope);E.forEach(k=>R.openNode(k))}let f={};function g(E,k){const M=k&&k[0];if(m+=E,M==null)return ve(),0;if(f.type==="begin"&&k.type==="end"&&f.index===k.index&&M===""){if(m+=T.slice(k.index,k.index+1),!o){const G=new Error(`0 width match regex (${w})`);throw G.languageName=w,G.badRule=f.rule,G}return 1}if(f=k,k.type==="begin")return Q(k);if(k.type==="illegal"&&!U){const G=new Error('Illegal lexeme "'+M+'" for mode "'+(_.scope||"<unnamed>")+'"');throw G.mode=_,G}else if(k.type==="end"){const G=ce(k);if(G!==As)return G}if(k.type==="illegal"&&M==="")return 1;if(D>1e5&&D>k.index*3)throw new Error("potential infinite loop, way more iterations than matches");return m+=M,M.length}const x=be(w);if(!x)throw Mt(s.replace("{}",w)),new Error('Unknown language: "'+w+'"');const v=fd(x);let S="",_=X||v;const A={},R=new l.__emitter(l);c();let m="",z=0,O=0,D=0,j=!1;try{if(x.__emitTokens)x.__emitTokens(T,R);else{for(_.matcher.considerAll();;){D++,j?j=!1:_.matcher.considerAll(),_.matcher.lastIndex=O;const E=_.matcher.exec(T);if(!E)break;const k=T.substring(O,E.index),M=g(k,E);O=E.index+M}g(T.substring(O))}return R.finalize(),S=R.toHTML(),{language:w,value:S,relevance:z,illegal:!1,_emitter:R,_top:_}}catch(E){if(E.message&&E.message.includes("Illegal"))return{language:w,value:Lr(T),illegal:!0,relevance:0,_illegalBy:{message:E.message,index:O,context:T.slice(O-100,O+100),mode:E.mode,resultSoFar:S},_emitter:R};if(o)return{language:w,value:Lr(T),illegal:!1,relevance:0,errorRaised:E,_emitter:R,_top:_};throw E}}function p(w){const T={value:Lr(w),illegal:!1,relevance:0,_top:i,_emitter:new l.__emitter(l)};return T._emitter.addText(w),T}function b(w,T){T=T||l.languages||Object.keys(t);const U=p(w),X=T.filter(be).filter(Fe).map(ve=>h(ve,w,!1));X.unshift(U);const q=X.sort((ve,de)=>{if(ve.relevance!==de.relevance)return de.relevance-ve.relevance;if(ve.language&&de.language){if(be(ve.language).supersetOf===de.language)return 1;if(be(de.language).supersetOf===ve.language)return-1}return 0}),[ee,we]=q,Ke=ee;return Ke.secondBest=we,Ke}function P(w,T,U){const X=T&&n[T]||U;w.classList.add("hljs"),w.classList.add(`language-${X}`)}function I(w){let T=null;const U=d(w);if(a(U))return;if(Be("before:highlightElement",{el:w,language:U}),w.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",w);return}if(w.children.length>0&&(l.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(w)),l.throwUnescapedHTML))throw new pd("One of your code blocks includes unescaped HTML.",w.innerHTML);T=w;const X=T.textContent,q=U?u(X,{language:U,ignoreIllegals:!0}):b(X);w.innerHTML=q.value,w.dataset.highlighted="yes",P(w,U,q.language),w.result={language:q.language,re:q.relevance,relevance:q.relevance},q.secondBest&&(w.secondBest={language:q.secondBest.language,relevance:q.secondBest.relevance}),Be("after:highlightElement",{el:w,result:q,text:X})}function V(w){l=ks(l,w)}const $=()=>{L(),Ht("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function F(){L(),Ht("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let H=!1;function L(){if(document.readyState==="loading"){H=!0;return}document.querySelectorAll(l.cssSelector).forEach(I)}function Z(){H&&L()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",Z,!1);function ae(w,T){let U=null;try{U=T(e)}catch(X){if(Mt("Language definition for '{}' could not be registered.".replace("{}",w)),o)Mt(X);else throw X;U=i}U.name||(U.name=w),t[w]=U,U.rawDefinition=T.bind(null,e),U.aliases&&Ce(U.aliases,{languageName:w})}function se(w){delete t[w];for(const T of Object.keys(n))n[T]===w&&delete n[T]}function Oe(){return Object.keys(t)}function be(w){return w=(w||"").toLowerCase(),t[w]||t[n[w]]}function Ce(w,{languageName:T}){typeof w=="string"&&(w=[w]),w.forEach(U=>{n[U.toLowerCase()]=T})}function Fe(w){const T=be(w);return T&&!T.disableAutodetect}function Ve(w){w["before:highlightBlock"]&&!w["before:highlightElement"]&&(w["before:highlightElement"]=T=>{w["before:highlightBlock"](Object.assign({block:T.el},T))}),w["after:highlightBlock"]&&!w["after:highlightElement"]&&(w["after:highlightElement"]=T=>{w["after:highlightBlock"](Object.assign({block:T.el},T))})}function Pe(w){Ve(w),r.push(w)}function it(w){const T=r.indexOf(w);T!==-1&&r.splice(T,1)}function Be(w,T){const U=w;r.forEach(function(X){X[U]&&X[U](T)})}function fe(w){return Ht("10.7.0","highlightBlock will be removed entirely in v12.0"),Ht("10.7.0","Please use highlightElement now."),I(w)}Object.assign(e,{highlight:u,highlightAuto:b,highlightAll:L,highlightElement:I,highlightBlock:fe,configure:V,initHighlighting:$,initHighlightingOnLoad:F,registerLanguage:ae,unregisterLanguage:se,listLanguages:Oe,getLanguage:be,registerAliases:Ce,autoDetection:Fe,inherit:ks,addPlugin:Pe,removePlugin:it}),e.debugMode=function(){o=!1},e.safeMode=function(){o=!0},e.versionString=hd,e.regex={concat:Ft,lookahead:ol,either:xo,optional:Of,anyNumberOfTimes:Af};for(const w in zn)typeof zn[w]=="object"&&nl(zn[w]);return Object.assign(e,zn),e},rn=hl({});rn.newInstance=()=>hl({});var bd=rn;rn.HighlightJS=rn;rn.default=rn;const gr=Ef(bd),Os="[A-Za-z$_][0-9A-Za-z$_]*",md=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],wd=["true","false","null","undefined","NaN","Infinity"],pl=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],gl=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],bl=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],vd=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],_d=[].concat(bl,pl,gl);function yd(e){const t=e.regex,n=(T,{after:U})=>{const X="</"+T[0].slice(1);return T.input.indexOf(X,U)!==-1},r=Os,o={begin:"<>",end:"</>"},s=/<[A-Za-z0-9\\._:-]+\s*\/>/,i={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(T,U)=>{const X=T[0].length+T.index,q=T.input[X];if(q==="<"||q===","){U.ignoreMatch();return}q===">"&&(n(T,{after:X})||U.ignoreMatch());let ee;const we=T.input.substring(X);if(ee=we.match(/^\s*=/)){U.ignoreMatch();return}if((ee=we.match(/^\s+extends\s+/))&&ee.index===0){U.ignoreMatch();return}}},l={$pattern:Os,keyword:md,literal:wd,built_in:_d,"variable.language":vd},a="[0-9](_?[0-9])*",d=`\\.(${a})`,u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",h={className:"number",variants:[{begin:`(\\b(${u})((${d})|\\.)?|(${d}))[eE][+-]?(${a})\\b`},{begin:`\\b(${u})\\b((${d})\\b|\\.)?|(${d})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},p={className:"subst",begin:"\\$\\{",end:"\\}",keywords:l,contains:[]},b={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,p],subLanguage:"xml"}},P={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,p],subLanguage:"css"}},I={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,p],subLanguage:"graphql"}},V={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,p]},F={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:r+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},H=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,b,P,I,V,{match:/\$\d+/},h];p.contains=H.concat({begin:/\{/,end:/\}/,keywords:l,contains:["self"].concat(H)});const L=[].concat(F,p.contains),Z=L.concat([{begin:/(\s*)\(/,end:/\)/,keywords:l,contains:["self"].concat(L)}]),ae={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:Z},se={variants:[{match:[/class/,/\s+/,r,/\s+/,/extends/,/\s+/,t.concat(r,"(",t.concat(/\./,r),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,r],scope:{1:"keyword",3:"title.class"}}]},Oe={relevance:0,match:t.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...pl,...gl]}},be={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},Ce={variants:[{match:[/function/,/\s+/,r,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[ae],illegal:/%/},Fe={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function Ve(T){return t.concat("(?!",T.join("|"),")")}const Pe={match:t.concat(/\b/,Ve([...bl,"super","import"].map(T=>`${T}\\s*\\(`)),r,t.lookahead(/\s*\(/)),className:"title.function",relevance:0},it={begin:t.concat(/\./,t.lookahead(t.concat(r,/(?![0-9A-Za-z$_(])/))),end:r,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},Be={match:[/get|set/,/\s+/,r,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},ae]},fe="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",w={match:[/const|var|let/,/\s+/,r,/\s*/,/=\s*/,/(async\s*)?/,t.lookahead(fe)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[ae]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:l,exports:{PARAMS_CONTAINS:Z,CLASS_REFERENCE:Oe},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),be,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,b,P,I,V,F,{match:/\$\d+/},h,Oe,{className:"attr",begin:r+t.lookahead(":"),relevance:0},w,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[F,e.REGEXP_MODE,{className:"function",begin:fe,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:Z}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:o.begin,end:o.end},{match:s},{begin:i.begin,"on:begin":i.isTrulyOpeningTag,end:i.end}],subLanguage:"xml",contains:[{begin:i.begin,end:i.end,skip:!0,contains:["self"]}]}]},Ce,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[ae,e.inherit(e.TITLE_MODE,{begin:r,className:"title.function"})]},{match:/\.\.\./,relevance:0},it,{match:"\\$"+r,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[ae]},Pe,Fe,se,Be,{match:/\$[(.]/}]}}const xd=e=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:e.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z_][A-Za-z0-9_-]*/}}),Ed=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","optgroup","option","p","picture","q","quote","samp","section","select","source","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],Sd=["defs","g","marker","mask","pattern","svg","switch","symbol","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feGaussianBlur","feImage","feMerge","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","linearGradient","radialGradient","stop","circle","ellipse","image","line","path","polygon","polyline","rect","text","use","textPath","tspan","foreignObject","clipPath"],Rd=[...Ed,...Sd],Td=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"].sort().reverse(),kd=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"].sort().reverse(),Ad=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"].sort().reverse(),Od=["accent-color","align-content","align-items","align-self","alignment-baseline","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","baseline-shift","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-end-end-radius","border-end-start-radius","border-right-color","border-right-style","border-right-width","border-spacing","border-start-end-radius","border-start-start-radius","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","cx","cy","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","color-scheme","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","empty-cells","enable-background","fill","fill-opacity","fill-rule","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","flood-color","flood-opacity","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-horizontal","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","inset","inset-block","inset-block-end","inset-block-start","inset-inline","inset-inline-end","inset-inline-start","isolation","kerning","justify-content","justify-items","justify-self","left","letter-spacing","lighting-color","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","marker","marker-end","marker-mid","marker-start","mask","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","r","resize","rest","rest-after","rest-before","right","rotate","row-gap","scale","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","shape-rendering","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","speak","speak-as","src","tab-size","table-layout","text-anchor","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip-ink","text-decoration-style","text-decoration-thickness","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-offset","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","translate","unicode-bidi","vector-effect","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","x","y","z-index"].sort().reverse();function Cd(e){const t=e.regex,n=xd(e),r={begin:/-(webkit|moz|ms|o)-(?=[a-z])/},o="and or not only",s=/@-?\w[\w]*(-\w+)*/,i="[a-zA-Z-][a-zA-Z0-9_-]*",l=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE];return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},classNameAliases:{keyframePosition:"selector-tag"},contains:[n.BLOCK_COMMENT,r,n.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{className:"selector-class",begin:"\\."+i,relevance:0},n.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{begin:":("+kd.join("|")+")"},{begin:":(:)?("+Ad.join("|")+")"}]},n.CSS_VARIABLE,{className:"attribute",begin:"\\b("+Od.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,contains:[n.BLOCK_COMMENT,n.HEXCOLOR,n.IMPORTANT,n.CSS_NUMBER_MODE,...l,{begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"},contains:[...l,{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]},n.FUNCTION_DISPATCH]},{begin:t.lookahead(/@/),end:"[{;]",relevance:0,illegal:/:/,contains:[{className:"keyword",begin:s},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:o,attribute:Td.join(" ")},contains:[{begin:/[a-z-]+(?=:)/,className:"attribute"},...l,n.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"\\b("+Rd.join("|")+")\\b"}]}}function Nd(e){return{name:"VBScript in HTML",subLanguage:"xml",contains:[{begin:"<%",end:"%>",subLanguage:"vbscript"}]}}gr.registerLanguage("javascript",yd);gr.registerLanguage("css",Cd);gr.registerLanguage("html",Nd);const Md={name:"CodeBlock",props:{code:{type:String,required:!0},type:{type:String,default:"css"}},mounted(){this.highlightCode()},methods:{highlightCode(){const e=this.$refs.codeBlock;gr.highlightElement(e)}}};function Id(e,t,n,r,o,s){return ge(),xe("pre",null,[t[0]||(t[0]=ut("        ")),Ee("code",{ref:"codeBlock",class:It(`code language-${n.type}`)},`
            `+Kn(n.code)+`
        `,3),t[1]||(t[1]=ut(`
    `))])}const Ld=Ln(Md,[["render",Id]]),Pd=`
.ea-card_wrap {
  border-radius: 4px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  overflow: hidden;
  color: #303133;
  transition: box-shadow 0.3s;
}
.ea-card_wrap.is-always-shadow, .ea-card_wrap.is-hover-shadow:hover {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.ea-card_wrap.is-never-shadow {
  box-shadow: none;
}
.ea-card_wrap .ea-card_content {
  padding: 20px;
}
`;var Nn;class Fd extends st{constructor(){super();_e(this,Nn);const n=this.attachShadow({mode:"open"});n.innerHTML=`
      <div class="ea-card_wrap" part="container">
        <div class="ea-card_header" part="header-wrap">
          <slot name="header"></slot>
        </div>
        <div class="ea-card_content" part="content-wrap">
          <slot></slot>
        </div>
      </div>
    `,Re(this,Nn,n.querySelector(".ea-card_wrap")),this.build(n,Pd)}get shadow(){return this.getAttribute("shadow")||"always"}set shadow(n){this.setAttribute("shadow",n),Y(this,Nn).classList.add(`is-${n}-shadow`)}connectedCallback(){this.shadow=this.shadow}}Nn=new WeakMap;customElements.get("ea-card")||customElements.define("ea-card",Fd);const Bd={name:"SgCard",components:{CodeBlock:Ld},props:{title:{type:String,default:"Card"},code:{type:String,default:""},className:{type:String,default:""}}},Dd={class:"sg-card"},Hd={shadow:"hover"},$d={slot:"header",class:"header"};function zd(e,t,n,r,o,s){const i=Sa("CodeBlock");return ge(),xe("div",Dd,[Ee("ea-card",Hd,[Ee("div",$d,[Ee("span",null,Kn(n.title),1)]),Ee("span",{class:It(`box ${n.className}`)},Kn(n.title),3),ne(i,{code:n.code},null,8,["code"])])])}const sn=Ln(Bd,[["render",zd]]),Ud={class:"part"},jd={__name:"index",setup(e){const t={};return Object.assign(t,{grow:{title:"放大",className:"grow",code:`
.grow {
  transform: scale(1);

  transition: transform 0.3s;
}

.grow:hover {
  transform: scale(1.05);
}
`},shrink:{title:"缩小",className:"shrink",code:`
.shrink {
  transform: scale(1);

  transition: transform 0.3s;
}

.shrink:hover {
  transform: scale(0.95);
}
`},pulse:{title:"心跳",className:"pulse",code:`
.pulse:hover {
  transform: scale(0.9);
  animation: pulse infinite 0.75s;
}

@keyframes pulse {
  50% {
    transform: scale(1.1);
  }
}
`},pulseGrow:{title:"脉冲-放大",className:"pulse-grow",code:`
.pulse-grow:hover {
  animation: pulse-grow infinite 0.75s;
}
@keyframes pulse-grow {
  50% {
    transform: scale(1.1);
  }
}
`},pulseShrink:{title:"心跳-缩小",className:"pulse-shrink",code:`
.pulse-shrink:hover {
  animation: pulse-shrink infinite 0.75s;
}
@keyframes pulse-shrink {
  50% {
    transform: scale(0.9);
  }
}
`},press:{title:"按压/点击",className:"press",code:`
.press:hover {
  animation: press 0.45s;
}
@keyframes press {
  50% {
    transform: scale(0.8);
  }
}
`},pop:{title:"弹起",className:"pop",code:`
.pop:hover {
  animation: pop 0.45s;
}
@keyframes pop {
  50% {
    transform: scale(1.2);
  }
}
`},bounceIn:{title:"小跳跃-放大",className:"bounceIn",code:`
.pop:hover {
  animation: pop 0.45s;
}
@keyframes pop {
  50% {
    transform: scale(1.2);
  }
}
`},bounceOut:{title:"小跳跃-缩小",className:"bounceOut",code:`
.bounceOut {
  transition: transform 0.3s;
}
.bounceOut:hover {
  transform: scale(0.8);
  animation: bounceOut 0.7s ease-in-out;
  animation-delay: 0.2s;
}
@keyframes bounceOut {
  25% {
    transform: scale(0.9);
  }

  50% {
    transform: scale(0.8);
  }

  75% {
    transform: scale(0.85);
  }

  100% {
    transform: scale(0.8);
  }
}
`},rightRotate:{title:"右旋转",className:"rightRotate",code:`
.rightRotate {
  transition: transform 0.3s;
}
.rightRotate:hover {
  transform: rotate(5deg);
}
`},growRotate:{title:"右旋转-变大",className:"growRotate",code:`
.leftRotate {
  transition: transform 0.3s;
}
.leftRotate:hover {
  transform: rotate(-15deg);
}
`},float:{title:"上浮",className:"float",code:`
.float {
  transition: transform 0.3s;
}
.float:hover {
  transform: translateY(-20%);
}
`},sink:{title:"下沉",className:"sink",code:`
.sink {
  transition: transform 0.3s;
}
.sink:hover {
  transform: translateY(20%);
}
`},bob:{title:"上浮-飘动",className:"bob",code:`
.bob {
  transition: transform 0.3s;
}
.bob:hover {
  transform: translateY(-20%);

  animation: bob infinite 1.5s linear;
  animation-delay: 0.3s;
}

@keyframes bob {
  25% {
    transform: translateY(-15%);
  }

  75% {
    transform: translateY(-25%);
  }
}
`},hang:{title:"下沉-飘动",className:"hang",code:`
.hang {
  transition: transform 0.3s;
}
.hang:hover {
  transform: translateY(20%);

  animation: hang infinite 1.5s linear;
  animation-delay: 0.3s;
}

@keyframes hang {
  25% {
    transform: translateY(15%);
  }

  75% {
    transform: translateY(25%);
  }
}
`},skewForward:{title:"倾斜-向前",className:"skewForward",code:`
.skewForward {
  transform-origin: center bottom;
  transition: transform 0.3s;
}
.skewForward:hover {
  transform: skewX(-20deg);
}
    `},skewBackward:{title:"倾斜-向后",className:"skewBackward",code:`
.skewBackward {
  transform-origin: center bottom;
  transition: transform 0.3s;
}
.skewBackward:hover {
  transform: skewX(20deg);
}
    `},wobbleHorizontal:{title:"摆动-水平",className:"wobbleHorizontal",code:`

.wobbleHorizontal:hover {
  animation: wobbleHorizontal 0.75s;
}

@keyframes wobbleHorizontal {
  0% {
    transform: translateX(-20%);
  }
  20% {
    transform: translateX(15%);
  }
  40% {
    transform: translateX(-10%);
  }
  60% {
    transform: translateX(5%);
  }
  80% {
    transform: translateX(-2.5%);
  }
  100% {
    transform: translateX(0%);
  }
}
    `},wobbleVertical:{title:"摆动-垂直",className:"wobbleVertical",code:`
.wobbleVertical:hover {
  animation: wobbleVertical 0.75s;
}

@keyframes wobbleVertical {
  0% {
    transform: translateY(-20%);
  }
  20% {
    transform: translateY(15%);
  }
  40% {
    transform: translateY(-10%);
  }
  60% {
    transform: translateY(5%);
  }
  80% {
    transform: translateY(-2.5%);
  }
  100% {
    transform: translateY(0%);
  }
}
    `},wobbleToBottomRight:{title:"摆动-右下方向",className:"wobbleToBottomRight",code:`
.wobbleToBottomRight:hover {
  animation: wobbleToBottomRight 0.75s;
}

@keyframes wobbleToBottomRight {
  0% {
    transform: translateY(-10%) translateX(-10%);
  }
  20% {
    transform: translateY(8%) translateX(8%);
  }
  40% {
    transform: translateY(-6%) translateX(-6%);
  }
  60% {
    transform: translateY(4%) translateX(4%);
  }
  80% {
    transform: translateY(-2%) translateX(-2%);
  }
  100% {
    transform: translateY(0%) translateX(0%);
  }
}
    `},wobbleToTopRight:{title:"摆动-右上方向",className:"wobbleToTopRight",code:`
.wobbleToTopRight:hover {
  animation: wobbleToTopRight 0.75s;
}

@keyframes wobbleToTopRight {
  0% {
    transform: translateY(-10%) translateX(10%);
  }
  20% {
    transform: translateY(8%) translateX(-8%);
  }
  40% {
    transform: translateY(-6%) translateX(6%);
  }
  60% {
    transform: translateY(4%) translateX(-4%);
  }
  80% {
    transform: translateY(-2%) translateX(2%);
  }
  100% {
    transform: translateY(0%) translateX(0%);
  }
}
    `},puddingTop:{title:"布丁摆-底部固定",className:"puddingTop",code:`
.puddingTop:hover {
  transform-origin: center bottom;
  animation: puddingTop 0.75s;
}

@keyframes puddingTop {
  0% {
    transform: skewX(15deg);
  }
  20% {
    transform: skewX(-12deg);
  }
  40% {
    transform: skewX(9deg);
  }
  60% {
    transform: skewX(-6deg);
  }
  80% {
    transform: skewX(3deg);
  }
  100% {
    transform: skewX(0deg);
  }
}
    `},puddingBottom:{title:"布丁摆-顶部固定",className:"puddingBottom",code:`
.puddingBottom:hover {
  transform-origin: center top;
  animation: puddingBottom 0.75s;
}

@keyframes puddingBottom {
  0% {
    transform: skewX(15deg);
  }
  20% {
    transform: skewX(-12deg);
  }
  40% {
    transform: skewX(9deg);
  }
  60% {
    transform: skewX(-6deg);
  }
  80% {
    transform: skewX(3deg);
  }
  100% {
    transform: skewX(0deg);
  }
}
    `},wobbleSkew:{title:"摇摆-倾斜",className:"wobbleSkew",code:`
.wobbleSkew:hover {
  animation: wobbleSkew 0.75s;
}

@keyframes wobbleSkew {
  0% {
    transform: skewX(15deg);
  }
  20% {
    transform: skewX(-12deg);
  }
  40% {
    transform: skewX(9deg);
  }
  60% {
    transform: skewX(-6deg);
  }
  80% {
    transform: skewX(3deg);
  }
  100% {
    transform: skewX(0deg);
  }
}
    `},buzz:{title:"抖动",className:"buzz",code:`
.buzz:hover {
  animation: buzz 0.15s infinite;
}

@keyframes buzz {
  25% {
    transform: skewX(-5deg);
  }

  75% {
    transform: skewX(5deg);
  }
}
    `},buzzOut:{title:"抖动-寸止",className:"buzzOut",code:`

.buzzOut:hover {
  animation: buzzOut 0.5s;
}

@keyframes buzzOut {
  0% {
    transform: skewX(10deg);
  }

  20% {
    transform: skewX(-8deg);
  }

  40% {
    transform: skewX(6deg);
  }

  60% {
    transform: skewX(-4deg);
  }

  80% {
    transform: skewX(2deg);
  }

  100% {
    transform: skewX(0deg);
  }
}
    `},forward:{title:"偏移-向右",className:"forward",code:`
.forward {
  transition: transform 0.3s;
}
.forward:hover {
  transform: translateX(20%);
}
    `},backward:{title:"偏移-向左",className:"backward",code:`
.backward {
  transition: transform 0.3s;
}
.backward:hover {
  transform: translateX(-20%);
}
    `}}),(n,r)=>(ge(),xe("section",Ud,[(ge(),xe(me,null,on(t,(o,s)=>ne(sn,{key:s,title:o.title,code:o.code,className:o.className},null,8,["title","code","className"])),64))]))}},Vd={class:"part"},Kd={__name:"index",setup(e){const t={};return Object.assign(t,{fill:{title:"填充",className:"fill",code:`
.fill {
    transition: background-color .3s, color .3s;
}

.fill:hover {
    background-color: #409EFF;
    color: white;
}
`},fillBlink:{title:"填充-闪烁",className:"fillBlink",code:`
.fillBlink {
    transition: background-color .3s, color .3s;
}

.fillBlink:hover {
    background-color: #409EFF;
    color: white;

    animation: fillBlink 1s infinite;
    animation-delay: .3s;
}

@keyframes fillBlink {
    50% {
        background-color: #79bbff;
    }
}
`},fillToRight:{title:"填充-向右",className:"fillToRight",code:`
.fillToRight {
    position: relative;

    transform: perspective(1px);

    transition: color .3s;
}

.fillToRight:hover {
    color: white;
}

.fillToRight::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;

    z-index: -1;

    height: 100%;
    width: 0;

    background-color: #409EFF;

    transition: width .3s;
}

.fillToRight:hover::after {
    width: 100%;
}
`},fillToLeft:{title:"填充-向左",className:"fillToLeft",code:`
.fillToLeft {
    position: relative;

    transform: perspective(1px);

    transition: color .3s;
}

.fillToLeft:hover {
    color: white;
}

.fillToLeft::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    top: 0;

    z-index: -1;

    height: 100%;
    width: 0;

    background-color: #409EFF;

    transition: width .3s;
}

.fillToLeft:hover::after {
    width: 100%;
}
`},fillToBottom:{title:"填充-向下",className:"fillToBottom",code:`
.fillToBottom {
    position: relative;

    transform: perspective(1px);

    transition: color .3s;
}

.fillToBottom:hover {
    color: white;
}

.fillToBottom::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    top: 0;

    z-index: -1;

    height: 0;
    width: 100%;

    background-color: #409EFF;

    transition: height .3s;
}

.fillToBottom:hover::after {
    height: 100%;
}
`},fillToTop:{title:"填充-向上",className:"fillToTop",code:`
.fillToTop {
    position: relative;

    transform: perspective(1px);

    transition: color .3s;
}

.fillToTop:hover {
    color: white;
}

.fillToTop::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;

    z-index: -1;

    height: 0;
    width: 100%;

    background-color: #409EFF;

    transition: height .3s;
}

.fillToTop:hover::after {
    height: 100%;
}
`},fillToRightBounce:{title:"填充-向右-回弹",className:"fillToRightBounce",code:`
.fillToRightBounce {
    position: relative;

    transform: perspective(1px);

    transition: color .3s;
}

.fillToRightBounce:hover {
    color: white;
}

.fillToRightBounce::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;

    z-index: -1;

    width: 0;
    height: 100%;

    background-color: #409EFF;

    transition: width .3s;
}

.fillToRightBounce:hover::after {
    width: 100%;

    animation: fillToRightBounce .75s;
    animation-delay: .3s;
}

@keyframes fillToRightBounce {
    25% {
        width: 75%;
    }

    50% {
        width: 100%;
    }

    75% {
        width: 90%;
    }

    100% {
        width: 100%;
    }
}
`},fillToLeftBounce:{title:"填充-向左-回弹",className:"fillToLeftBounce",code:`
.fillToLeftBounce {
    position: relative;

    transform: perspective(1px);

    transition: color .3s;
}

.fillToLeftBounce:hover {
    color: white;
}

.fillToLeftBounce::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;

    z-index: -1;

    width: 0;
    height: 100%;

    background-color: #409EFF;

    transition: width .3s;
}

.fillToLeftBounce:hover::after {
    width: 100%;

    animation: fillToRightBounce .75s;
    animation-delay: .3s;
}

@keyframes fillToLeftBounce {
    25% {
        width: 75%;
    }

    50% {
        width: 100%;
    }

    75% {
        width: 90%;
    }

    100% {
        width: 100%;
    }
}
`},fillToBottomBounce:{title:"填充-向下-回弹",className:"fillToBottomBounce",code:`
.fillToBottomBounce {
    position: relative;

    transform: perspective(1px);

    transition: color .3s;
}

.fillToBottomBounce:hover {
    color: white;
}

.fillToBottomBounce::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;

    z-index: -1;

    height: 0;
    width: 100%;

    background-color: #409EFF;

    transition: height .3s;
}

.fillToBottomBounce:hover::after {
    height: 100%;

    animation: fillToBottomBounce .75s;
    animation-delay: .3s;
}

@keyframes fillToBottomBounce {
    25% {
        height: 75%;
    }

    50% {
        height: 100%;
    }

    75% {
        height: 90%;
    }

    100% {
        height: 100%;
    }
}
`},fillToTopBounce:{title:"填充-向上-回弹",className:"fillToTopBounce",code:`
.fillToTopBounce {
    position: relative;

    transform: perspective(1px);

    transition: color .3s;
}

.fillToTopBounce:hover {
    color: white;
}

.fillToTopBounce::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;

    z-index: -1;

    height: 0;
    width: 100%;

    background-color: #409EFF;

    transition: height .3s;
}

.fillToTopBounce:hover::after {
    height: 100%;

    animation: fillToTopBounce .75s;
    animation-delay: .3s;
}

@keyframes fillToTopBounce {
    25% {
        height: 75%;
    }

    50% {
        height: 100%;
    }

    75% {
        height: 90%;
    }

    100% {
        height: 100%;
    }
}
`},radialOut:{title:"填充-圆形展开",className:"radialOut",code:`
.radialOut {
    position: relative;

    transform: perspective(1px);

    transition: color .3s;

    overflow: hidden;
}

.radialOut:hover {
    color: white;
}

.radialOut::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;

    width: 100%;
    height: 100%;
    border-radius: 50%;

    z-index: -1;

    transform: scale(0);

    background-color: #409EFF;

    transition: transform .5s;
}

.radialOut:hover::after {
    transform: scale(2);
}
`},radialIn:{title:"填充-圆形聚拢",className:"radialIn",code:`
.radialIn {
    position: relative;

    transform: perspective(1px);

    transition: color .3s;

    overflow: hidden;
}

.radialIn:hover {
    color: white;
}

.radialIn::after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;

    width: 200%;
    height: 200%;
    border-radius: 50%;

    z-index: -1;

    transform: translate(-50%, -50%);

    border: 5rem solid #409EFF;

    transition: border .5s, width .5s, height .5s;
}

.radialIn:hover::after {
    width: 0%;
    height: 0%;
}
`},rectangleIn:{title:"填充-矩形聚拢",className:"rectangleIn",code:`
.rectangleIn {
    position: relative;

    transform: perspective(1px);

    transition: color .3s;

    overflow: hidden;
}

.rectangleIn:hover {
    color: white;
}

.rectangleIn::after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;

    width: 200%;
    height: 200%;

    z-index: -1;

    transform: translate(-50%, -50%);

    border: 5rem solid #409EFF;

    transition: border .5s, width .5s, height .5s;
}

.rectangleIn:hover::after {
    width: 0%;
    height: 0%;
}
`},rectangleOut:{title:"填充-矩形展开",className:"rectangleOut",code:`
.rectangleOut {
    position: relative;

    transform: perspective(1px);

    transition: color .3s;

    overflow: hidden;
}

.rectangleOut:hover {
    color: white;
}

.rectangleOut::after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;

    width: 200%;
    height: 200%;

    z-index: -1;

    transform: translate(-50%, -50%) scale(0);
    background-color: #409EFF;

    transition: transform .5s;
}

.rectangleOut:hover::after {
    transform: translate(-50%, -50%) scale(1);
}
`},shutterInHorizontal:{title:"填充-百叶窗-水平聚拢",className:"shutterInHorizontal",code:`
.shutterInHorizontal {
    position: relative;

    transform: perspective(1px);

    transition: color .3s;

    overflow: hidden;
}

.shutterInHorizontal:hover {
    color: white;
}

.shutterInHorizontal::before,
.shutterInHorizontal::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;

    width: 0%;
    height: 100%;

    z-index: -1;

    background-color: #409EFF;

    transition: width .3s;
}

.shutterInHorizontal::before {
    left: 0;
}

.shutterInHorizontal::after {
    right: 0;
}

.shutterInHorizontal:hover::before,
.shutterInHorizontal:hover::after {
    width: 50%;
}
`},shutterOutHorizontal:{title:"填充-百叶窗-水平展开",className:"shutterOutHorizontal",code:`
.shutterOutHorizontal {
    position: relative;

    transform: perspective(1px);

    transition: color .3s;

    overflow: hidden;
}

.shutterOutHorizontal:hover {
    color: white;
}

.shutterOutHorizontal::before,
.shutterOutHorizontal::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;

    width: 0%;
    height: 100%;

    z-index: -1;

    background-color: #409EFF;

    transition: width .3s;
}

.shutterOutHorizontal::before {
    left: 50%;
}

.shutterOutHorizontal::after {
    right: 50%;
}

.shutterOutHorizontal:hover::before,
.shutterOutHorizontal:hover::after {
    width: 50%;
}
`},shutterInVertical:{title:"填充-百叶窗-垂直聚拢",className:"shutterInVertical",code:`
.shutterInVertical {
    position: relative;

    transform: perspective(1px);

    transition: color .3s;

    overflow: hidden;
}

.shutterInVertical:hover {
    color: white;
}

.shutterInVertical::before,
.shutterInVertical::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;

    width: 100%;
    height: 0;

    z-index: -1;

    background-color: #409EFF;

    transition: height .3s;
}

.shutterInVertical::before {
    top: 0;
}

.shutterInVertical::after {
    bottom: 0;
}

.shutterInVertical:hover::before,
.shutterInVertical:hover::after {
    height: 50%;
}
`},shutterOutVertical:{title:"填充-百叶窗-垂直展开",className:"shutterOutVertical",code:`
.shutterOutVertical {
    position: relative;

    transform: perspective(1px);

    transition: color .3s;

    overflow: hidden;
}

.shutterOutVertical:hover {
    color: white;
}

.shutterOutVertical::before,
.shutterOutVertical::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);

    width: 100%;
    height: 0;

    z-index: -1;

    background-color: #409EFF;

    transition: height .3s;
}

.shutterOutVertical:hover::after {
    height: 100%;
}
`}}),(n,r)=>(ge(),xe("section",Vd,[(ge(),xe(me,null,on(t,(o,s)=>ne(sn,{key:s,title:o.title,code:o.code,className:o.className},null,8,["title","code","className"])),64))]))}},Gd={class:"part"},Wd={__name:"index",setup(e){const t={};return Object.assign(t,{borderFade:{title:"填充",className:"borderFade",code:`
.borderFade {
    box-sizing: border-box;
    border: 3px solid transparent;

    transition: border-color .3s;
}

.borderFade:hover {
    border-color: #409EFF;
}
`},hollow:{title:"空心",className:"hollow",code:`
.hollow {
    position: relative;
    box-sizing: border-box;
    perspective: 1px;

}

.hollow::after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    width: calc(100% - 6px);
    height: calc(100% - 6px);

    z-index: -1;

    transition: background-color .3s;
}

.hollow:hover::after {
    background-color: #ffffff;
}
`},trim:{title:"镂空",className:"trim",code:`
.trim {
    position: relative;
    box-sizing: border-box;
    perspective: 1px;

}

.trim::after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    width: calc(100% - 12px);
    height: calc(100% - 12px);

    border: 3px solid transparent;

    z-index: -1;

    transition: border-color .3s;
}

.trim:hover::after {
    border-color: #ffffff;
}
`},rippleOut:{title:"涟漪-散开",className:"rippleOut",code:`
.rippleOut {
    position: relative;
    box-sizing: border-box;
    perspective: 1px;

    outline: 3px solid;
    outline-offset: 0;
    outline-color: transparent;
}

.rippleOut:hover {
    animation: rippleOut .75s;
}

@keyframes rippleOut {
    from {
        outline-color: #ebeef5;
    }

    to {
        outline-color: transparent;
        outline-offset: 5px;
    }
}
`},rippleIn:{title:"涟漪-聚拢",className:"rippleIn",code:`
.rippleIn {
    position: relative;
    box-sizing: border-box;
    perspective: 1px;

    outline: 5px solid;
    outline-color: transparent;
}

.rippleIn:hover {
    animation: rippleIn 1s;
}

@keyframes rippleIn {
    from {
        outline-color: transparent;
        outline-offset: 15px;
    }

    to {
        outline-color: #ebeef5;
        outline-offset: -5px;
    }
}
`},outlineOut:{title:"轮廓-展开",className:"outlineOut",code:`
.outlineOut {
    position: relative;
    box-sizing: border-box;
    perspective: 1px;

    outline: 5px solid #ebeef5;
    outline-offset: 0;

    transition: outline-offset .5s;
}

.outlineOut:hover {
    outline-offset: 10px;
}
`},outlineIn:{title:"轮廓-聚拢",className:"outlineIn",code:`
.outlineIn {
    position: relative;
    box-sizing: border-box;
    perspective: 1px;

    outline: 5px solid transparent;
}

.outlineIn:hover {
    animation: outlineIn .5s forwards;
}

@keyframes outlineIn {
    0% {
        outline-offset: 15px;
    }

    100% {
        outline-color: #ebeef5;
        outline-offset: 10px;
    }
}
`},roundCorners:{title:"圆角",className:"roundCorners",code:`
.roundCorners {
    position: relative;
    box-sizing: border-box;

    transition: border-radius .3s;
}

.roundCorners:hover {
    border-radius: 8px;
}
`},underlineFromLeft:{title:"下划线-从左到右",className:"underlineFromLeft",code:`
.underlineFromLeft {
    position: relative;
    box-sizing: border-box;
}

.underlineFromLeft::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;

    height: 5px;
    width: 0;
    background-color: #409EFF;

    transition: width .3s;
}

.underlineFromLeft:hover::after {
    width: 100%;
}
`},underlineFromCenter:{title:"下划线-从中间展开",className:"underlineFromCenter",code:`
.underlineFromCenter {
    position: relative;
    box-sizing: border-box;
}

.underlineFromCenter::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;

    transform: translateX(-50%);

    height: 5px;
    width: 0;
    background-color: #409EFF;

    transition: width .3s;
}

.underlineFromCenter:hover::after {
    width: 100%;
}
`},underlineFromRight:{title:"下划线-从右到左",className:"underlineFromRight",code:`
.underlineFromRight {
    position: relative;
    box-sizing: border-box;
}

.underlineFromRight::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;

    height: 5px;
    width: 0;
    background-color: #409EFF;

    transition: width .3s;
}

.underlineFromRight:hover::after {
    width: 100%;
}
`},borderFillIn:{title:"边框-内部填充",className:"borderFillIn",code:`
.borderFillIn {
    position: relative;
    box-sizing: border-box;

    transition: box-shadow .3s;
}

.borderFillIn:hover {
    box-shadow: inset 0 0 0 5px #409EFF;
}
`},underlineFillIn:{title:"下划线-底部出现",className:"underlineFillIn",code:`
.underlineFillIn {
    position: relative;
    box-sizing: border-box;
}

.underlineFillIn::after {
    content: '';
    display: block;
    position: absolute;

    bottom: 0;
    left: 0;

    height: 5px;
    width: 100%;

    background-color: #409EFF;

    transform: translateY(5px);

    transition: transform .3s;
}

.underlineFillIn:hover::after {
    transform: translateY(0);
}
`},overlineFillIn:{title:"上划线-顶部出现",className:"overlineFillIn",code:`
.overlineFillIn {
    position: relative;
    box-sizing: border-box;
}

.overlineFillIn::after {
    content: '';
    display: block;
    position: absolute;

    top: 0;
    left: 0;

    height: 5px;
    width: 100%;

    background-color: #409EFF;

    transform: translateY(-6px);

    transition: transform .3s;
}

.overlineFillIn:hover::after {
    transform: translateY(0);
}
`},overlineFromLeft:{title:"上划线-从左到右",className:"overlineFromLeft",code:`
.overlineFromLeft {
    position: relative;
    box-sizing: border-box;
}

.overlineFromLeft::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;

    height: 5px;
    width: 0;
    background-color: #409EFF;

    transition: width .3s;
}

.overlineFromLeft:hover::after {
    width: 100%;
}
`},overlineFromCenter:{title:"上划线-从中间展开",className:"overlineFromCenter",code:`
.overlineFromCenter {
    position: relative;
    box-sizing: border-box;
}

.overlineFromCenter::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 50%;

    transform: translateX(-50%);

    height: 5px;
    width: 0;
    background-color: #409EFF;

    transition: width .3s;
}

.overlineFromCenter:hover::after {
    width: 100%;
}
`},overlineFromRight:{title:"上划线-从右到左",className:"overlineFromRight",code:`
.overlineFromRight {
    position: relative;
    box-sizing: border-box;
}

.overlineFromRight::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;

    height: 5px;
    width: 0;
    background-color: #409EFF;

    transition: width .3s;
}

.overlineFromRight:hover::after {
    width: 100%;
}
`}}),(n,r)=>(ge(),xe("section",Gd,[(ge(),xe(me,null,on(t,(o,s)=>ne(sn,{key:s,title:o.title,code:o.code,className:o.className},null,8,["title","code","className"])),64))]))}},Xd={class:"part"},Yd={__name:"index",setup(e){const t={};return Object.assign(t,{shadow:{title:"阴影",className:"shadow",code:`
.borderFade {
    box-sizing: border-box;
    border: 3px solid transparent;

    transition: border-color .3s;
}

.borderFade:hover {
    border-color: #409EFF;
}
`},growShadow:{title:"阴影-容器变大",className:"growShadow",code:`
.growShadow {
    transition: box-shadow .3s, transform .3s;
}

.growShadow:hover {
    transform: scale(1.1);
    box-shadow: 0 5px 10px -1px rgba(128, 128, 128, 0.4);
}
`},floatShadow:{title:"阴影-容器浮起",className:"floatShadow",code:`
.floatShadow {
    overflow: unset;
    position: relative;
    transition: transform .3s;
}

.floatShadow::after {
    content: '';
    display: block;

    position: absolute;
    bottom: -.5rem;
    left: 0;
    transform: translateY(100%) scaleY(0);
    background-image: linear-gradient(to left, #ebeef5, rgb(160, 160, 160), #ebeef5);

    width: 100%;
    height: 8px;

    border-radius: 50%;

    transition: transform .3s;
}

.floatShadow:hover {
    transform: translateY(-20%);
}

.floatShadow:hover::after {
    transform: translateY(100%) scaleY(1);

}
`},glow:{title:"阴影-四散",className:"glow",code:`
.glow {
    transition: box-shadow .3s;
}

.glow:hover {
    box-shadow: 0 0 5px 5px rgba(128, 128, 128, 0.3);
}
`},shadowRadial:{title:"阴影-径向散开",className:"shadowRadial",code:`
.shadowRadial {
    overflow: unset;
    position: relative;
    transition: transform .3s;
}

.shadowRadial::after,
.shadowRadial::before {
    content: '';
    display: block;

    position: absolute;
    left: 0;
    transform: scaleY(0);
    background-image: linear-gradient(to left, #ebeef5, rgb(160, 160, 160), #ebeef5);

    width: 100%;
    height: 4px;

    border-radius: 50%;

    transition: transform .3s;
}

.shadowRadial::before {
    top: 0;
}

.shadowRadial::after {
    bottom: 0;
}

.shadowRadial:hover::before {
    transform: scaleY(1) translateY(-3px);
}

.shadowRadial:hover::after {
    transform: scaleY(1) translateY(3px);

}
`},boxShadowOutset:{title:"阴影-外部",className:"boxShadowOutset",code:`
.boxShadowOutset {
    transition: box-shadow .3s;
}

.boxShadowOutset:hover {
    box-shadow: 3px 3px 1px 0 rgb(160, 160, 160);
}
`},boxShadowInset:{title:"阴影-内部",className:"boxShadowInset",code:`
.boxShadowInset {
    transition: box-shadow .3s;
}

.boxShadowInset:hover {
    box-shadow: inset 3px 3px 1px 0 rgb(160, 160, 160);
}
`}}),(n,r)=>(ge(),xe("section",Xd,[(ge(),xe(me,null,on(t,(o,s)=>ne(sn,{key:s,title:o.title,code:o.code,className:o.className},null,8,["title","code","className"])),64))]))}},qd={class:"part"},Zd={__name:"index",setup(e){const t={};return Object.assign(t,{bubbleTop:{title:"气泡-上方",className:"bubbleTop",code:`
.bubbleTop {
    position: relative;
    overflow: unset;
}

.bubbleTop::before {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    transform: translate(-50%, -100%);

    border: .5rem solid transparent;
    border-bottom-width: 0rem;
    border-bottom-color: #ebeef5;

    transition: border-bottom-width .3s;
}

.bubbleTop:hover::before {
    border-bottom-width: .5rem;
}
`},bubbleRight:{title:"气泡-右方",className:"bubbleRight",code:`
.bubbleRight {
    position: relative;
    overflow: unset;
}

.bubbleRight::before {
    content: '';
    position: absolute;
    display: block;
    top: 50%;
    right: 0;
    transform: translate(100%, -50%);

    border: .5rem solid transparent;
    border-left-width: 0rem;
    border-left-color: #ebeef5;

    transition: border-left-width .3s;
}

.bubbleRight:hover::before {
    border-left-width: .5rem;
}
`},bubbleBottom:{title:"气泡-下方",className:"bubbleBottom",code:`
.bubbleBottom {
    position: relative;
    overflow: unset;
}

.bubbleBottom::before {
    content: '';
    position: absolute;
    display: block;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 100%);

    border: .5rem solid transparent;
    border-top-width: 0rem;
    border-top-color: #ebeef5;

    transition: border-top-width .3s;
}

.bubbleBottom:hover::before {
    border-top-width: .5rem;
}
`},bubbleLeft:{title:"气泡-左方",className:"bubbleLeft",code:`
.bubbleLeft {
    position: relative;
    overflow: unset;
}

.bubbleLeft::before {
    content: '';
    position: absolute;
    display: block;
    top: 50%;
    left: 0;
    transform: translate(-100%, -50%);

    border: .5rem solid transparent;
    border-right-width: 0rem;
    border-right-color: #ebeef5;

    transition: border-right-width .3s;
}

.bubbleLeft:hover::before {
    border-right-width: .5rem;
}
`},bubbleFloatTop:{title:"气泡-向下浮动",className:"bubbleFloatTop",code:`
.bubbleFloatTop {
    position: relative;
    overflow: unset;

    transition: transform .3s;
}

.bubbleFloatTop::before {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    transform: translate(-50%, -100%);

    border: .5rem solid transparent;
    border-bottom-width: 0rem;
    border-bottom-color: #ebeef5;

    transition: border-bottom-width .3s;
}

.bubbleFloatTop:hover {
    transform: translate(0, 1rem);
}

.bubbleFloatTop:hover::before {
    border-bottom-width: .5rem;
}
`},bubbleFloatRight:{title:"气泡-向右浮动",className:"bubbleFloatRight",code:`
.bubbleFloatRight {
    position: relative;
    overflow: unset;

    transition: transform .3s;
}

.bubbleFloatRight::before {
    content: '';
    position: absolute;
    display: block;
    top: 50%;
    left: 0;
    transform: translate(-100%, -50%);

    border: .5rem solid transparent;
    border-right-width: 0rem;
    border-right-color: #ebeef5;

    transition: border-right-width .3s;
}

.bubbleFloatRight:hover {
    transform: translate(1rem, 0);
}

.bubbleFloatRight:hover::before {
    border-right-width: .5rem;
}
`},bubbleFloatBottom:{title:"气泡-向上浮动",className:"bubbleFloatBottom",code:`
.bubbleFloatBottom {
    position: relative;
    overflow: unset;

    transition: transform .3s;
}

.bubbleFloatBottom::before {
    content: '';
    position: absolute;
    display: block;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 100%);

    border: .5rem solid transparent;
    border-top-width: 0rem;
    border-top-color: #ebeef5;

    transition: border-top-width .3s;
}

.bubbleFloatBottom:hover {
    transform: translate(0, -1rem);
}

.bubbleFloatBottom:hover::before {
    border-top-width: .5rem;
}
`},bubbleFloatLeft:{title:"气泡-向左浮动",className:"bubbleFloatLeft",code:`
.bubbleFloatLeft {
    position: relative;
    overflow: unset;

    transition: transform .3s;
}

.bubbleFloatLeft::before {
    content: '';
    position: absolute;
    display: block;
    top: 50%;
    right: 0;
    transform: translate(100%, -50%);

    border: .5rem solid transparent;
    border-left-width: 0rem;
    border-left-color: #ebeef5;

    transition: border-left-width .3s;
}

.bubbleFloatLeft:hover {
    transform: translate(-1rem, 0);
}

.bubbleFloatLeft:hover::before {
    border-left-width: .5rem;
}
`}}),(n,r)=>(ge(),xe("section",qd,[(ge(),xe(me,null,on(t,(o,s)=>ne(sn,{key:s,title:o.title,code:o.code,className:o.className},null,8,["title","code","className"])),64))]))}},Jd={class:"part"},Qd={__name:"index",setup(e){const t={};return Object.assign(t,{curlTopLeft:{title:"折角-左上方",className:"curlTopLeft",code:`
.curlTopLeft {
    position: relative;
}

.curlTopLeft::after {
    content: '';
    display: block;

    position: absolute;
    left: 0;
    top: 0;

    width: 0;
    height: 0;

    background-image: linear-gradient(135deg, #ffffff 50%, #909299, #e9e9eb);

    transition: width .3s, height .3s;
}

.curlTopLeft:hover::after {
    width: 1rem;
    height: 1rem;
}
`},curlTopRight:{title:"折角-右上方",className:"curlTopRight",code:`
.curlTopRight {
    position: relative;
}

.curlTopRight::after {
    content: '';
    display: block;

    position: absolute;
    right: 0;
    top: 0;

    width: 0;
    height: 0;

    background-image: linear-gradient(-135deg, #ffffff 50%, #909299, #e9e9eb);

    transition: width .3s, height .3s;
}

.curlTopRight:hover::after {
    width: 1rem;
    height: 1rem;
}
`},curlBottomLeft:{title:"折角-左下方",className:"curlBottomLeft",code:`
.curlBottomLeft {
    position: relative;
}

.curlBottomLeft::after {
    content: '';
    display: block;

    position: absolute;
    left: 0;
    bottom: 0;

    width: 0;
    height: 0;

    background-image: linear-gradient(45deg, #ffffff 50%, #909299, #e9e9eb);

    transition: width .3s, height .3s;
}

.curlBottomLeft:hover::after {
    width: 1rem;
    height: 1rem;
}
`},curlBottomRight:{title:"折角-右下方",className:"curlBottomRight",code:`
.curlBottomRight {
    position: relative;
}

.curlBottomRight::after {
    content: '';
    display: block;

    position: absolute;
    right: 0;
    bottom: 0;

    width: 0;
    height: 0;

    background-image: linear-gradient(-45deg, #ffffff 50%, #909299, #e9e9eb);

    transition: width .3s, height .3s;
}

.curlBottomRight:hover::after {
    width: 1rem;
    height: 1rem;
}
`}}),(n,r)=>(ge(),xe("section",Jd,[(ge(),xe(me,null,on(t,(o,s)=>ne(sn,{key:s,title:o.title,code:o.code,className:o.className},null,8,["title","code","className"])),64))]))}},eh=[{path:"/",redirect:"/2DTransitions",meta:{title:"主页"}},{path:"/2DTransitions",component:jd,meta:{title:"2D 过渡动画"}},{path:"/backgroundTransitions",component:Kd,meta:{title:"背景过渡动画"}},{path:"/borderTransitions",component:Wd,meta:{title:"边框过渡动画"}},{path:"/shadowAndGlowTransitions",component:Yd,meta:{title:"阴影过渡动画"}},{path:"/speechBubbles",component:Zd,meta:{title:"气泡框过渡动画"}},{path:"/curls",component:Qd,meta:{title:"折角过渡动画"}}],ml=Uu({history:vu(),routes:eh});ml.beforeEach((e,t,n)=>{document.title=`${e.meta.title} | Ea-effects.css`,e.hash||n()});const Cs={fontelloCSS:"https://cdn.jsdelivr.net/npm/easy-component-ui/components/ea-icon/css/fontello.css"};function th(e){Object.assign(Cs,e),document.dispatchEvent(new CustomEvent("configChanged",{detail:Cs}))}window.addEventListener("DOMContentLoaded",()=>{th({fontelloCSS:new URL("/ea-effects/ea-icon/css/fontello.css",import.meta.url).href})});Hc(xf).use(ml).mount("#app");
