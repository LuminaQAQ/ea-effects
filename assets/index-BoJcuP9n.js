var Tr=e=>{throw TypeError(e)};var _o=(e,t,n)=>t.has(e)||Tr("Cannot "+n);var j=(e,t,n)=>(_o(e,t,"read from private field"),n?n.call(e):t.get(e)),_e=(e,t,n)=>t.has(e)?Tr("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),Ee=(e,t,n,o)=>(_o(e,t,"write to private field"),o?o.call(e,n):t.set(e,n),n),vo=(e,t,n)=>(_o(e,t,"access private method"),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function er(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ue={},Vt=[],ct=()=>{},_a=()=>!1,oo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),tr=e=>e.startsWith("onUpdate:"),Te=Object.assign,nr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},va=Object.prototype.hasOwnProperty,ie=(e,t)=>va.call(e,t),W=Array.isArray,Kt=e=>ro(e)==="[object Map]",Ls=e=>ro(e)==="[object Set]",Z=e=>typeof e=="function",ve=e=>typeof e=="string",Nt=e=>typeof e=="symbol",pe=e=>e!==null&&typeof e=="object",Ms=e=>(pe(e)||Z(e))&&Z(e.then)&&Z(e.catch),Bs=Object.prototype.toString,ro=e=>Bs.call(e),xa=e=>ro(e).slice(8,-1),Ps=e=>ro(e)==="[object Object]",or=e=>ve(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,hn=er(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),so=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ea=/-(\w)/g,tt=so(e=>e.replace(Ea,(t,n)=>n?n.toUpperCase():"")),ka=/\B([A-Z])/g,$t=so(e=>e.replace(ka,"-$1").toLowerCase()),io=so(e=>e.charAt(0).toUpperCase()+e.slice(1)),xo=so(e=>e?`on${io(e)}`:""),Rt=(e,t)=>!Object.is(e,t),Eo=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Fs=(e,t,n,o=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:o,value:n})},Oa=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ar;const Ds=()=>Ar||(Ar=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function rr(e){if(W(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],r=ve(o)?Sa(o):rr(o);if(r)for(const s in r)t[s]=r[s]}return t}else if(ve(e)||pe(e))return e}const Ra=/;(?![^(]*\))/g,Ia=/:([^]+)/,Na=/\/\*[^]*?\*\//g;function Sa(e){const t={};return e.replace(Na,"").split(Ra).forEach(n=>{if(n){const o=n.split(Ia);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function Dt(e){let t="";if(ve(e))t=e;else if(W(e))for(let n=0;n<e.length;n++){const o=Dt(e[n]);o&&(t+=o+" ")}else if(pe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ta="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Aa=er(Ta);function zs(e){return!!e||e===""}const $s=e=>!!(e&&e.__v_isRef===!0),Kn=e=>ve(e)?e:e==null?"":W(e)||pe(e)&&(e.toString===Bs||!Z(e.toString))?$s(e)?Kn(e.value):JSON.stringify(e,Hs,2):String(e),Hs=(e,t)=>$s(t)?Hs(e,t.value):Kt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[o,r],s)=>(n[ko(o,s)+" =>"]=r,n),{})}:Ls(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>ko(n))}:Nt(t)?ko(t):pe(t)&&!W(t)&&!Ps(t)?String(t):t,ko=(e,t="")=>{var n;return Nt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ve;class Ca{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ve,!t&&Ve&&(this.index=(Ve.scopes||(Ve.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Ve;try{return Ve=this,t()}finally{Ve=n}}}on(){Ve=this}off(){Ve=this.parent}stop(t){if(this._active){let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function La(){return Ve}let fe;const Oo=new WeakSet;class Us{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.nextEffect=void 0,this.cleanup=void 0,this.scheduler=void 0,Ve&&Ve.active&&Ve.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Oo.has(this)&&(Oo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||(this.flags|=8,this.nextEffect=pn,pn=this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Cr(this),js(this);const t=fe,n=et;fe=this,et=!0;try{return this.fn()}finally{Ys(this),fe=t,et=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)ar(t);this.deps=this.depsTail=void 0,Cr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Oo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){zo(this)&&this.run()}get dirty(){return zo(this)}}let Xs=0,pn;function sr(){Xs++}function ir(){if(--Xs>0)return;let e;for(;pn;){let t=pn;for(pn=void 0;t;){const n=t.nextEffect;if(t.nextEffect=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(o){e||(e=o)}t=n}}if(e)throw e}function js(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ys(e){let t,n=e.depsTail;for(let o=n;o;o=o.prevDep)o.version===-1?(o===n&&(n=o.prevDep),ar(o),Ma(o)):t=o,o.dep.activeLink=o.prevActiveLink,o.prevActiveLink=void 0;e.deps=t,e.depsTail=n}function zo(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&Vs(t.dep.computed)||t.dep.version!==t.version)return!0;return!!e._dirty}function Vs(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===yn))return;e.globalVersion=yn;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&!zo(e)){e.flags&=-3;return}const n=fe,o=et;fe=e,et=!0;try{js(e);const r=e.fn(e._value);(t.version===0||Rt(r,e._value))&&(e._value=r,t.version++)}catch(r){throw t.version++,r}finally{fe=n,et=o,Ys(e),e.flags&=-3}}function ar(e){const{dep:t,prevSub:n,nextSub:o}=e;if(n&&(n.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=n,e.nextSub=void 0),t.subs===e&&(t.subs=n),!t.subs&&t.computed){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)ar(r)}}function Ma(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let et=!0;const Ks=[];function St(){Ks.push(et),et=!1}function Tt(){const e=Ks.pop();et=e===void 0?!0:e}function Cr(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=fe;fe=void 0;try{t()}finally{fe=n}}}let yn=0;class lr{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0}track(t){if(!fe||!et||fe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==fe)n=this.activeLink={dep:this,sub:fe,version:this.version,nextDep:void 0,prevDep:void 0,nextSub:void 0,prevSub:void 0,prevActiveLink:void 0},fe.deps?(n.prevDep=fe.depsTail,fe.depsTail.nextDep=n,fe.depsTail=n):fe.deps=fe.depsTail=n,fe.flags&4&&Gs(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const o=n.nextDep;o.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=o),n.prevDep=fe.depsTail,n.nextDep=void 0,fe.depsTail.nextDep=n,fe.depsTail=n,fe.deps===n&&(fe.deps=o)}return n}trigger(t){this.version++,yn++,this.notify(t)}notify(t){sr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()}finally{ir()}}}function Gs(e){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let o=t.deps;o;o=o.nextDep)Gs(o)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}const $o=new WeakMap,Pt=Symbol(""),Ho=Symbol(""),_n=Symbol("");function Me(e,t,n){if(et&&fe){let o=$o.get(e);o||$o.set(e,o=new Map);let r=o.get(n);r||o.set(n,r=new lr),r.track()}}function bt(e,t,n,o,r,s){const i=$o.get(e);if(!i){yn++;return}const a=l=>{l&&l.trigger()};if(sr(),t==="clear")i.forEach(a);else{const l=W(e),d=l&&or(n);if(l&&n==="length"){const f=Number(o);i.forEach((h,p)=>{(p==="length"||p===_n||!Nt(p)&&p>=f)&&a(h)})}else switch(n!==void 0&&a(i.get(n)),d&&a(i.get(_n)),t){case"add":l?d&&a(i.get("length")):(a(i.get(Pt)),Kt(e)&&a(i.get(Ho)));break;case"delete":l||(a(i.get(Pt)),Kt(e)&&a(i.get(Ho)));break;case"set":Kt(e)&&a(i.get(Pt));break}}ir()}function Ut(e){const t=ae(e);return t===e?t:(Me(t,"iterate",_n),qe(e)?t:t.map(Ce))}function ao(e){return Me(e=ae(e),"iterate",_n),e}const Ba={__proto__:null,[Symbol.iterator](){return Ro(this,Symbol.iterator,Ce)},concat(...e){return Ut(this).concat(...e.map(t=>W(t)?Ut(t):t))},entries(){return Ro(this,"entries",e=>(e[1]=Ce(e[1]),e))},every(e,t){return ht(this,"every",e,t,void 0,arguments)},filter(e,t){return ht(this,"filter",e,t,n=>n.map(Ce),arguments)},find(e,t){return ht(this,"find",e,t,Ce,arguments)},findIndex(e,t){return ht(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ht(this,"findLast",e,t,Ce,arguments)},findLastIndex(e,t){return ht(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ht(this,"forEach",e,t,void 0,arguments)},includes(...e){return Io(this,"includes",e)},indexOf(...e){return Io(this,"indexOf",e)},join(e){return Ut(this).join(e)},lastIndexOf(...e){return Io(this,"lastIndexOf",e)},map(e,t){return ht(this,"map",e,t,void 0,arguments)},pop(){return cn(this,"pop")},push(...e){return cn(this,"push",e)},reduce(e,...t){return Lr(this,"reduce",e,t)},reduceRight(e,...t){return Lr(this,"reduceRight",e,t)},shift(){return cn(this,"shift")},some(e,t){return ht(this,"some",e,t,void 0,arguments)},splice(...e){return cn(this,"splice",e)},toReversed(){return Ut(this).toReversed()},toSorted(e){return Ut(this).toSorted(e)},toSpliced(...e){return Ut(this).toSpliced(...e)},unshift(...e){return cn(this,"unshift",e)},values(){return Ro(this,"values",Ce)}};function Ro(e,t,n){const o=ao(e),r=o[t]();return o!==e&&!qe(e)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=n(s.value)),s}),r}const Pa=Array.prototype;function ht(e,t,n,o,r,s){const i=ao(e),a=i!==e&&!qe(e),l=i[t];if(l!==Pa[t]){const h=l.apply(e,s);return a?Ce(h):h}let d=n;i!==e&&(a?d=function(h,p){return n.call(this,Ce(h),p,e)}:n.length>2&&(d=function(h,p){return n.call(this,h,p,e)}));const f=l.call(i,d,o);return a&&r?r(f):f}function Lr(e,t,n,o){const r=ao(e);let s=n;return r!==e&&(qe(e)?n.length>3&&(s=function(i,a,l){return n.call(this,i,a,l,e)}):s=function(i,a,l){return n.call(this,i,Ce(a),l,e)}),r[t](s,...o)}function Io(e,t,n){const o=ae(e);Me(o,"iterate",_n);const r=o[t](...n);return(r===-1||r===!1)&&dr(n[0])?(n[0]=ae(n[0]),o[t](...n)):r}function cn(e,t,n=[]){St(),sr();const o=ae(e)[t].apply(e,n);return ir(),Tt(),o}const Fa=er("__proto__,__v_isRef,__isVue"),Ws=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Nt));function Da(e){Nt(e)||(e=String(e));const t=ae(this);return Me(t,"has",e),t.hasOwnProperty(e)}class qs{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,o){const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return o===(r?s?Za:ei:s?Qs:Js).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(o)?t:void 0;const i=W(t);if(!r){let l;if(i&&(l=Ba[n]))return l;if(n==="hasOwnProperty")return Da}const a=Reflect.get(t,n,Ne(t)?t:o);return(Nt(n)?Ws.has(n):Fa(n))||(r||Me(t,"get",n),s)?a:Ne(a)?i&&or(n)?a:a.value:pe(a)?r?ni(a):co(a):a}}class Zs extends qs{constructor(t=!1){super(!1,t)}set(t,n,o,r){let s=t[n];if(!this._isShallow){const l=zt(s);if(!qe(o)&&!zt(o)&&(s=ae(s),o=ae(o)),!W(t)&&Ne(s)&&!Ne(o))return l?!1:(s.value=o,!0)}const i=W(t)&&or(n)?Number(n)<t.length:ie(t,n),a=Reflect.set(t,n,o,Ne(t)?t:r);return t===ae(r)&&(i?Rt(o,s)&&bt(t,"set",n,o):bt(t,"add",n,o)),a}deleteProperty(t,n){const o=ie(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&o&&bt(t,"delete",n,void 0),r}has(t,n){const o=Reflect.has(t,n);return(!Nt(n)||!Ws.has(n))&&Me(t,"has",n),o}ownKeys(t){return Me(t,"iterate",W(t)?"length":Pt),Reflect.ownKeys(t)}}class za extends qs{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const $a=new Zs,Ha=new za,Ua=new Zs(!0);const cr=e=>e,lo=e=>Reflect.getPrototypeOf(e);function Fn(e,t,n=!1,o=!1){e=e.__v_raw;const r=ae(e),s=ae(t);n||(Rt(t,s)&&Me(r,"get",t),Me(r,"get",s));const{has:i}=lo(r),a=o?cr:n?hr:Ce;if(i.call(r,t))return a(e.get(t));if(i.call(r,s))return a(e.get(s));e!==r&&e.get(t)}function Dn(e,t=!1){const n=this.__v_raw,o=ae(n),r=ae(e);return t||(Rt(e,r)&&Me(o,"has",e),Me(o,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function zn(e,t=!1){return e=e.__v_raw,!t&&Me(ae(e),"iterate",Pt),Reflect.get(e,"size",e)}function Mr(e,t=!1){!t&&!qe(e)&&!zt(e)&&(e=ae(e));const n=ae(this);return lo(n).has.call(n,e)||(n.add(e),bt(n,"add",e,e)),this}function Br(e,t,n=!1){!n&&!qe(t)&&!zt(t)&&(t=ae(t));const o=ae(this),{has:r,get:s}=lo(o);let i=r.call(o,e);i||(e=ae(e),i=r.call(o,e));const a=s.call(o,e);return o.set(e,t),i?Rt(t,a)&&bt(o,"set",e,t):bt(o,"add",e,t),this}function Pr(e){const t=ae(this),{has:n,get:o}=lo(t);let r=n.call(t,e);r||(e=ae(e),r=n.call(t,e)),o&&o.call(t,e);const s=t.delete(e);return r&&bt(t,"delete",e,void 0),s}function Fr(){const e=ae(this),t=e.size!==0,n=e.clear();return t&&bt(e,"clear",void 0,void 0),n}function $n(e,t){return function(o,r){const s=this,i=s.__v_raw,a=ae(i),l=t?cr:e?hr:Ce;return!e&&Me(a,"iterate",Pt),i.forEach((d,f)=>o.call(r,l(d),l(f),s))}}function Hn(e,t,n){return function(...o){const r=this.__v_raw,s=ae(r),i=Kt(s),a=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,d=r[e](...o),f=n?cr:t?hr:Ce;return!t&&Me(s,"iterate",l?Ho:Pt),{next(){const{value:h,done:p}=d.next();return p?{value:h,done:p}:{value:a?[f(h[0]),f(h[1])]:f(h),done:p}},[Symbol.iterator](){return this}}}}function yt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Xa(){const e={get(s){return Fn(this,s)},get size(){return zn(this)},has:Dn,add:Mr,set:Br,delete:Pr,clear:Fr,forEach:$n(!1,!1)},t={get(s){return Fn(this,s,!1,!0)},get size(){return zn(this)},has:Dn,add(s){return Mr.call(this,s,!0)},set(s,i){return Br.call(this,s,i,!0)},delete:Pr,clear:Fr,forEach:$n(!1,!0)},n={get(s){return Fn(this,s,!0)},get size(){return zn(this,!0)},has(s){return Dn.call(this,s,!0)},add:yt("add"),set:yt("set"),delete:yt("delete"),clear:yt("clear"),forEach:$n(!0,!1)},o={get(s){return Fn(this,s,!0,!0)},get size(){return zn(this,!0)},has(s){return Dn.call(this,s,!0)},add:yt("add"),set:yt("set"),delete:yt("delete"),clear:yt("clear"),forEach:$n(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Hn(s,!1,!1),n[s]=Hn(s,!0,!1),t[s]=Hn(s,!1,!0),o[s]=Hn(s,!0,!0)}),[e,n,t,o]}const[ja,Ya,Va,Ka]=Xa();function fr(e,t){const n=t?e?Ka:Va:e?Ya:ja;return(o,r,s)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?o:Reflect.get(ie(n,r)&&r in o?n:o,r,s)}const Ga={get:fr(!1,!1)},Wa={get:fr(!1,!0)},qa={get:fr(!0,!1)};const Js=new WeakMap,Qs=new WeakMap,ei=new WeakMap,Za=new WeakMap;function Ja(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qa(e){return e.__v_skip||!Object.isExtensible(e)?0:Ja(xa(e))}function co(e){return zt(e)?e:ur(e,!1,$a,Ga,Js)}function ti(e){return ur(e,!1,Ua,Wa,Qs)}function ni(e){return ur(e,!0,Ha,qa,ei)}function ur(e,t,n,o,r){if(!pe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=r.get(e);if(s)return s;const i=Qa(e);if(i===0)return e;const a=new Proxy(e,i===2?o:n);return r.set(e,a),a}function Gt(e){return zt(e)?Gt(e.__v_raw):!!(e&&e.__v_isReactive)}function zt(e){return!!(e&&e.__v_isReadonly)}function qe(e){return!!(e&&e.__v_isShallow)}function dr(e){return e?!!e.__v_raw:!1}function ae(e){const t=e&&e.__v_raw;return t?ae(t):e}function el(e){return!ie(e,"__v_skip")&&Object.isExtensible(e)&&Fs(e,"__v_skip",!0),e}const Ce=e=>pe(e)?co(e):e,hr=e=>pe(e)?ni(e):e;function Ne(e){return e?e.__v_isRef===!0:!1}function fo(e){return oi(e,!1)}function tl(e){return oi(e,!0)}function oi(e,t){return Ne(e)?e:new nl(e,t)}class nl{constructor(t,n){this.dep=new lr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:ae(t),this._value=n?t:Ce(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,o=this.__v_isShallow||qe(t)||zt(t);t=o?t:ae(t),Rt(t,n)&&(this._rawValue=t,this._value=o?t:Ce(t),this.dep.trigger())}}function Ke(e){return Ne(e)?e.value:e}const ol={get:(e,t,n)=>t==="__v_raw"?e:Ke(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const r=e[t];return Ne(r)&&!Ne(n)?(r.value=n,!0):Reflect.set(e,t,n,o)}};function ri(e){return Gt(e)?e:new Proxy(e,ol)}class rl{constructor(t,n,o){this.fn=t,this.setter=n,this._value=void 0,this.dep=new lr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=yn-1,this.effect=this,this.__v_isReadonly=!n,this.isSSR=o}notify(){this.flags|=16,fe!==this&&this.dep.notify()}get value(){const t=this.dep.track();return Vs(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function sl(e,t,n=!1){let o,r;return Z(e)?o=e:(o=e.get,r=e.set),new rl(o,r,n)}const Un={},Gn=new WeakMap;let Mt;function il(e,t=!1,n=Mt){if(n){let o=Gn.get(n);o||Gn.set(n,o=[]),o.push(e)}}function al(e,t,n=ue){const{immediate:o,deep:r,once:s,scheduler:i,augmentJob:a,call:l}=n,d=M=>r?M:qe(M)||r===!1||r===0?kt(M,1):kt(M);let f,h,p,g,B=!1,L=!1;if(Ne(e)?(h=()=>e.value,B=qe(e)):Gt(e)?(h=()=>d(e),B=!0):W(e)?(L=!0,B=e.some(M=>Gt(M)||qe(M)),h=()=>e.map(M=>{if(Ne(M))return M.value;if(Gt(M))return d(M);if(Z(M))return l?l(M,2):M()})):Z(e)?t?h=l?()=>l(e,2):e:h=()=>{if(p){St();try{p()}finally{Tt()}}const M=Mt;Mt=f;try{return l?l(e,3,[g]):e(g)}finally{Mt=M}}:h=ct,t&&r){const M=h,ne=r===!0?1/0:r;h=()=>kt(M(),ne)}const G=La(),H=()=>{f.stop(),G&&nr(G.effects,f)};if(s)if(t){const M=t;t=(...ne)=>{M(...ne),H()}}else{const M=h;h=()=>{M(),H()}}let P=L?new Array(e.length).fill(Un):Un;const $=M=>{if(!(!(f.flags&1)||!f.dirty&&!M))if(t){const ne=f.run();if(r||B||(L?ne.some((de,ce)=>Rt(de,P[ce])):Rt(ne,P))){p&&p();const de=Mt;Mt=f;try{const ce=[ne,P===Un?void 0:L&&P[0]===Un?[]:P,g];l?l(t,3,ce):t(...ce),P=ne}finally{Mt=de}}}else f.run()};return a&&a($),f=new Us(h),f.scheduler=i?()=>i($,!1):$,g=M=>il(M,!1,f),p=f.onStop=()=>{const M=Gn.get(f);if(M){if(l)l(M,4);else for(const ne of M)ne();Gn.delete(f)}},t?o?$(!0):P=f.run():i?i($.bind(null,!0),!0):f.run(),H.pause=f.pause.bind(f),H.resume=f.resume.bind(f),H.stop=H,H}function kt(e,t=1/0,n){if(t<=0||!pe(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Ne(e))kt(e.value,t,n);else if(W(e))for(let o=0;o<e.length;o++)kt(e[o],t,n);else if(Ls(e)||Kt(e))e.forEach(o=>{kt(o,t,n)});else if(Ps(e)){for(const o in e)kt(e[o],t,n);for(const o of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,o)&&kt(e[o],t,n)}return e}/**
* @vue/runtime-core v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Mn(e,t,n,o){try{return o?e(...o):e()}catch(r){uo(r,t,n)}}function ut(e,t,n,o){if(Z(e)){const r=Mn(e,t,n,o);return r&&Ms(r)&&r.catch(s=>{uo(s,t,n)}),r}if(W(e)){const r=[];for(let s=0;s<e.length;s++)r.push(ut(e[s],t,n,o));return r}}function uo(e,t,n,o=!0){const r=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||ue;if(t){let a=t.parent;const l=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const f=a.ec;if(f){for(let h=0;h<f.length;h++)if(f[h](e,l,d)===!1)return}a=a.parent}if(s){St(),Mn(s,null,10,[e,l,d]),Tt();return}}ll(e,n,r,o,i)}function ll(e,t,n,o=!0,r=!1){if(r)throw e;console.error(e)}let vn=!1,Uo=!1;const ze=[];let it=0;const Wt=[];let vt=null,jt=0;const si=Promise.resolve();let pr=null;function ii(e){const t=pr||si;return e?t.then(this?e.bind(this):e):t}function cl(e){let t=vn?it+1:0,n=ze.length;for(;t<n;){const o=t+n>>>1,r=ze[o],s=xn(r);s<e||s===e&&r.flags&2?t=o+1:n=o}return t}function mr(e){if(!(e.flags&1)){const t=xn(e),n=ze[ze.length-1];!n||!(e.flags&2)&&t>=xn(n)?ze.push(e):ze.splice(cl(t),0,e),e.flags|=1,ai()}}function ai(){!vn&&!Uo&&(Uo=!0,pr=si.then(ci))}function fl(e){W(e)?Wt.push(...e):vt&&e.id===-1?vt.splice(jt+1,0,e):e.flags&1||(Wt.push(e),e.flags|=1),ai()}function Dr(e,t,n=vn?it+1:0){for(;n<ze.length;n++){const o=ze[n];if(o&&o.flags&2){if(e&&o.id!==e.uid)continue;ze.splice(n,1),n--,o.flags&4&&(o.flags&=-2),o(),o.flags&=-2}}}function li(e){if(Wt.length){const t=[...new Set(Wt)].sort((n,o)=>xn(n)-xn(o));if(Wt.length=0,vt){vt.push(...t);return}for(vt=t,jt=0;jt<vt.length;jt++){const n=vt[jt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}vt=null,jt=0}}const xn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ci(e){Uo=!1,vn=!0;try{for(it=0;it<ze.length;it++){const t=ze[it];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Mn(t,t.i,t.i?15:14),t.flags&=-2)}}finally{for(;it<ze.length;it++){const t=ze[it];t&&(t.flags&=-2)}it=0,ze.length=0,li(),vn=!1,pr=null,(ze.length||Wt.length)&&ci()}}let $e=null,fi=null;function Wn(e){const t=$e;return $e=e,fi=e&&e.type.__scopeId||null,t}function Ie(e,t=$e,n){if(!t||e._n)return e;const o=(...r)=>{o._d&&Kr(-1);const s=Wn(t);let i;try{i=e(...r)}finally{Wn(s),o._d&&Kr(1)}return i};return o._n=!0,o._c=!0,o._d=!0,o}function Ct(e,t,n,o){const r=e.dirs,s=t&&t.dirs;for(let i=0;i<r.length;i++){const a=r[i];s&&(a.oldValue=s[i].value);let l=a.dir[o];l&&(St(),ut(l,n,8,[e.el,a,e,t]),Tt())}}const ul=Symbol("_vte"),dl=e=>e.__isTeleport;function gr(e,t){e.shapeFlag&6&&e.component?(e.transition=t,gr(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function ui(e,t){return Z(e)?Te({name:e.name},t,{setup:e}):e}function di(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Xo(e,t,n,o,r=!1){if(W(e)){e.forEach((B,L)=>Xo(B,t&&(W(t)?t[L]:t),n,o,r));return}if(qt(o)&&!r)return;const s=o.shapeFlag&4?_r(o.component):o.el,i=r?null:s,{i:a,r:l}=e,d=t&&t.r,f=a.refs===ue?a.refs={}:a.refs,h=a.setupState,p=ae(h),g=h===ue?()=>!1:B=>ie(p,B);if(d!=null&&d!==l&&(ve(d)?(f[d]=null,g(d)&&(h[d]=null)):Ne(d)&&(d.value=null)),Z(l))Mn(l,a,12,[i,f]);else{const B=ve(l),L=Ne(l);if(B||L){const G=()=>{if(e.f){const H=B?g(l)?h[l]:f[l]:l.value;r?W(H)&&nr(H,s):W(H)?H.includes(s)||H.push(s):B?(f[l]=[s],g(l)&&(h[l]=f[l])):(l.value=[s],e.k&&(f[e.k]=l.value))}else B?(f[l]=i,g(l)&&(h[l]=i)):L&&(l.value=i,e.k&&(f[e.k]=i))};i?(G.id=-1,Ye(G,n)):G()}}}const qt=e=>!!e.type.__asyncLoader,hi=e=>e.type.__isKeepAlive;function hl(e,t){pi(e,"a",t)}function pl(e,t){pi(e,"da",t)}function pi(e,t,n=Le){const o=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(ho(t,o,n),n){let r=n.parent;for(;r&&r.parent;)hi(r.parent.vnode)&&ml(o,t,n,r),r=r.parent}}function ml(e,t,n,o){const r=ho(t,e,o,!0);mi(()=>{nr(o[t],r)},n)}function ho(e,t,n=Le,o=!1){if(n){const r=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...i)=>{St();const a=Bn(n),l=ut(t,n,e,i);return a(),Tt(),l});return o?r.unshift(s):r.push(s),s}}const wt=e=>(t,n=Le)=>{(!go||e==="sp")&&ho(e,(...o)=>t(...o),n)},gl=wt("bm"),bl=wt("m"),wl=wt("bu"),yl=wt("u"),_l=wt("bum"),mi=wt("um"),vl=wt("sp"),xl=wt("rtg"),El=wt("rtc");function kl(e,t=Le){ho("ec",e,t)}const Ol="components";function Rl(e,t){return Nl(Ol,e,!0,t)||e}const Il=Symbol.for("v-ndc");function Nl(e,t,n=!0,o=!1){const r=$e||Le;if(r){const s=r.type;{const a=gc(s,!1);if(a&&(a===t||a===tt(t)||a===io(tt(t))))return s}const i=zr(r[e]||s[e],t)||zr(r.appContext[e],t);return!i&&o?s:i}}function zr(e,t){return e&&(e[t]||e[tt(t)]||e[io(tt(t))])}function be(e,t,n,o){let r;const s=n,i=W(e);if(i||ve(e)){const a=i&&Gt(e);let l=!1;a&&(l=!qe(e),e=ao(e)),r=new Array(e.length);for(let d=0,f=e.length;d<f;d++)r[d]=t(l?Ce(e[d]):e[d],d,void 0,s)}else if(typeof e=="number"){r=new Array(e);for(let a=0;a<e;a++)r[a]=t(a+1,a,void 0,s)}else if(pe(e))if(e[Symbol.iterator])r=Array.from(e,(a,l)=>t(a,l,void 0,s));else{const a=Object.keys(e);r=new Array(a.length);for(let l=0,d=a.length;l<d;l++){const f=a[l];r[l]=t(e[f],f,l,s)}}else r=[];return r}function Sl(e,t,n={},o,r){if($e.ce||$e.parent&&qt($e.parent)&&$e.parent.ce)return V(),Go(Q,null,[z("slot",n,o)],64);let s=e[t];s&&s._c&&(s._d=!1),V();const i=s&&gi(s(n)),a=Go(Q,{key:(n.key||i&&i.key||`_${t}`)+(!i&&o?"_fb":"")},i||[],i&&e._===1?64:-2);return s&&s._c&&(s._d=!0),a}function gi(e){return e.some(t=>Zn(t)?!(t.type===It||t.type===Q&&!gi(t.children)):!0)?e:null}const jo=e=>e?Pi(e)?_r(e):jo(e.parent):null,mn=Te(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>jo(e.parent),$root:e=>jo(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>br(e),$forceUpdate:e=>e.f||(e.f=()=>{mr(e.update)}),$nextTick:e=>e.n||(e.n=ii.bind(e.proxy)),$watch:e=>ql.bind(e)}),No=(e,t)=>e!==ue&&!e.__isScriptSetup&&ie(e,t),Tl={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:o,data:r,props:s,accessCache:i,type:a,appContext:l}=e;let d;if(t[0]!=="$"){const g=i[t];if(g!==void 0)switch(g){case 1:return o[t];case 2:return r[t];case 4:return n[t];case 3:return s[t]}else{if(No(o,t))return i[t]=1,o[t];if(r!==ue&&ie(r,t))return i[t]=2,r[t];if((d=e.propsOptions[0])&&ie(d,t))return i[t]=3,s[t];if(n!==ue&&ie(n,t))return i[t]=4,n[t];Yo&&(i[t]=0)}}const f=mn[t];let h,p;if(f)return t==="$attrs"&&Me(e.attrs,"get",""),f(e);if((h=a.__cssModules)&&(h=h[t]))return h;if(n!==ue&&ie(n,t))return i[t]=4,n[t];if(p=l.config.globalProperties,ie(p,t))return p[t]},set({_:e},t,n){const{data:o,setupState:r,ctx:s}=e;return No(r,t)?(r[t]=n,!0):o!==ue&&ie(o,t)?(o[t]=n,!0):ie(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:r,propsOptions:s}},i){let a;return!!n[i]||e!==ue&&ie(e,i)||No(t,i)||(a=s[0])&&ie(a,i)||ie(o,i)||ie(mn,i)||ie(r.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ie(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function $r(e){return W(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Yo=!0;function Al(e){const t=br(e),n=e.proxy,o=e.ctx;Yo=!1,t.beforeCreate&&Hr(t.beforeCreate,e,"bc");const{data:r,computed:s,methods:i,watch:a,provide:l,inject:d,created:f,beforeMount:h,mounted:p,beforeUpdate:g,updated:B,activated:L,deactivated:G,beforeDestroy:H,beforeUnmount:P,destroyed:$,unmounted:M,render:ne,renderTracked:de,renderTriggered:ce,errorCaptured:Be,serverPrefetch:xe,expose:Pe,inheritAttrs:Ue,components:Ze,directives:He,filters:dt}=t;if(d&&Cl(d,o,null),i)for(const w in i){const R=i[w];Z(R)&&(o[w]=R.bind(n))}if(r){const w=r.call(n,n);pe(w)&&(e.data=co(w))}if(Yo=!0,s)for(const w in s){const R=s[w],X=Z(R)?R.bind(n,n):Z(R.get)?R.get.bind(n,n):ct,J=!Z(R)&&Z(R.set)?R.set.bind(n):ct,te=We({get:X,set:J});Object.defineProperty(o,w,{enumerable:!0,configurable:!0,get:()=>te.value,set:se=>te.value=se})}if(a)for(const w in a)bi(a[w],o,n,w);if(l){const w=Z(l)?l.call(n):l;Reflect.ownKeys(w).forEach(R=>{jn(R,w[R])})}f&&Hr(f,e,"c");function me(w,R){W(R)?R.forEach(X=>w(X.bind(n))):R&&w(R.bind(n))}if(me(gl,h),me(bl,p),me(wl,g),me(yl,B),me(hl,L),me(pl,G),me(kl,Be),me(El,de),me(xl,ce),me(_l,P),me(mi,M),me(vl,xe),W(Pe))if(Pe.length){const w=e.exposed||(e.exposed={});Pe.forEach(R=>{Object.defineProperty(w,R,{get:()=>n[R],set:X=>n[R]=X})})}else e.exposed||(e.exposed={});ne&&e.render===ct&&(e.render=ne),Ue!=null&&(e.inheritAttrs=Ue),Ze&&(e.components=Ze),He&&(e.directives=He),xe&&di(e)}function Cl(e,t,n=ct){W(e)&&(e=Vo(e));for(const o in e){const r=e[o];let s;pe(r)?"default"in r?s=ft(r.from||o,r.default,!0):s=ft(r.from||o):s=ft(r),Ne(s)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>s.value,set:i=>s.value=i}):t[o]=s}}function Hr(e,t,n){ut(W(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,n)}function bi(e,t,n,o){let r=o.includes(".")?Ai(n,o):()=>n[o];if(ve(e)){const s=t[e];Z(s)&&Jt(r,s)}else if(Z(e))Jt(r,e.bind(n));else if(pe(e))if(W(e))e.forEach(s=>bi(s,t,n,o));else{const s=Z(e.handler)?e.handler.bind(n):t[e.handler];Z(s)&&Jt(r,s,e)}}function br(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:i}}=e.appContext,a=s.get(t);let l;return a?l=a:!r.length&&!n&&!o?l=t:(l={},r.length&&r.forEach(d=>qn(l,d,i,!0)),qn(l,t,i)),pe(t)&&s.set(t,l),l}function qn(e,t,n,o=!1){const{mixins:r,extends:s}=t;s&&qn(e,s,n,!0),r&&r.forEach(i=>qn(e,i,n,!0));for(const i in t)if(!(o&&i==="expose")){const a=Ll[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const Ll={data:Ur,props:Xr,emits:Xr,methods:dn,computed:dn,beforeCreate:De,created:De,beforeMount:De,mounted:De,beforeUpdate:De,updated:De,beforeDestroy:De,beforeUnmount:De,destroyed:De,unmounted:De,activated:De,deactivated:De,errorCaptured:De,serverPrefetch:De,components:dn,directives:dn,watch:Bl,provide:Ur,inject:Ml};function Ur(e,t){return t?e?function(){return Te(Z(e)?e.call(this,this):e,Z(t)?t.call(this,this):t)}:t:e}function Ml(e,t){return dn(Vo(e),Vo(t))}function Vo(e){if(W(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function De(e,t){return e?[...new Set([].concat(e,t))]:t}function dn(e,t){return e?Te(Object.create(null),e,t):t}function Xr(e,t){return e?W(e)&&W(t)?[...new Set([...e,...t])]:Te(Object.create(null),$r(e),$r(t??{})):t}function Bl(e,t){if(!e)return t;if(!t)return e;const n=Te(Object.create(null),e);for(const o in t)n[o]=De(e[o],t[o]);return n}function wi(){return{app:null,config:{isNativeTag:_a,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Pl=0;function Fl(e,t){return function(o,r=null){Z(o)||(o=Te({},o)),r!=null&&!pe(r)&&(r=null);const s=wi(),i=new WeakSet,a=[];let l=!1;const d=s.app={_uid:Pl++,_component:o,_props:r,_container:null,_context:s,_instance:null,version:wc,get config(){return s.config},set config(f){},use(f,...h){return i.has(f)||(f&&Z(f.install)?(i.add(f),f.install(d,...h)):Z(f)&&(i.add(f),f(d,...h))),d},mixin(f){return s.mixins.includes(f)||s.mixins.push(f),d},component(f,h){return h?(s.components[f]=h,d):s.components[f]},directive(f,h){return h?(s.directives[f]=h,d):s.directives[f]},mount(f,h,p){if(!l){const g=d._ceVNode||z(o,r);return g.appContext=s,p===!0?p="svg":p===!1&&(p=void 0),h&&t?t(g,f):e(g,f,p),l=!0,d._container=f,f.__vue_app__=d,_r(g.component)}},onUnmount(f){a.push(f)},unmount(){l&&(ut(a,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(f,h){return s.provides[f]=h,d},runWithContext(f){const h=Zt;Zt=d;try{return f()}finally{Zt=h}}};return d}}let Zt=null;function jn(e,t){if(Le){let n=Le.provides;const o=Le.parent&&Le.parent.provides;o===n&&(n=Le.provides=Object.create(o)),n[e]=t}}function ft(e,t,n=!1){const o=Le||$e;if(o||Zt){const r=Zt?Zt._context.provides:o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&Z(t)?t.call(o&&o.proxy):t}}const yi={},_i=()=>Object.create(yi),vi=e=>Object.getPrototypeOf(e)===yi;function Dl(e,t,n,o=!1){const r={},s=_i();e.propsDefaults=Object.create(null),xi(e,t,r,s);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);n?e.props=o?r:ti(r):e.type.props?e.props=r:e.props=s,e.attrs=s}function zl(e,t,n,o){const{props:r,attrs:s,vnode:{patchFlag:i}}=e,a=ae(r),[l]=e.propsOptions;let d=!1;if((o||i>0)&&!(i&16)){if(i&8){const f=e.vnode.dynamicProps;for(let h=0;h<f.length;h++){let p=f[h];if(po(e.emitsOptions,p))continue;const g=t[p];if(l)if(ie(s,p))g!==s[p]&&(s[p]=g,d=!0);else{const B=tt(p);r[B]=Ko(l,a,B,g,e,!1)}else g!==s[p]&&(s[p]=g,d=!0)}}}else{xi(e,t,r,s)&&(d=!0);let f;for(const h in a)(!t||!ie(t,h)&&((f=$t(h))===h||!ie(t,f)))&&(l?n&&(n[h]!==void 0||n[f]!==void 0)&&(r[h]=Ko(l,a,h,void 0,e,!0)):delete r[h]);if(s!==a)for(const h in s)(!t||!ie(t,h))&&(delete s[h],d=!0)}d&&bt(e.attrs,"set","")}function xi(e,t,n,o){const[r,s]=e.propsOptions;let i=!1,a;if(t)for(let l in t){if(hn(l))continue;const d=t[l];let f;r&&ie(r,f=tt(l))?!s||!s.includes(f)?n[f]=d:(a||(a={}))[f]=d:po(e.emitsOptions,l)||(!(l in o)||d!==o[l])&&(o[l]=d,i=!0)}if(s){const l=ae(n),d=a||ue;for(let f=0;f<s.length;f++){const h=s[f];n[h]=Ko(r,l,h,d[h],e,!ie(d,h))}}return i}function Ko(e,t,n,o,r,s){const i=e[n];if(i!=null){const a=ie(i,"default");if(a&&o===void 0){const l=i.default;if(i.type!==Function&&!i.skipFactory&&Z(l)){const{propsDefaults:d}=r;if(n in d)o=d[n];else{const f=Bn(r);o=d[n]=l.call(null,t),f()}}else o=l;r.ce&&r.ce._setProp(n,o)}i[0]&&(s&&!a?o=!1:i[1]&&(o===""||o===$t(n))&&(o=!0))}return o}const $l=new WeakMap;function Ei(e,t,n=!1){const o=n?$l:t.propsCache,r=o.get(e);if(r)return r;const s=e.props,i={},a=[];let l=!1;if(!Z(e)){const f=h=>{l=!0;const[p,g]=Ei(h,t,!0);Te(i,p),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!s&&!l)return pe(e)&&o.set(e,Vt),Vt;if(W(s))for(let f=0;f<s.length;f++){const h=tt(s[f]);jr(h)&&(i[h]=ue)}else if(s)for(const f in s){const h=tt(f);if(jr(h)){const p=s[f],g=i[h]=W(p)||Z(p)?{type:p}:Te({},p),B=g.type;let L=!1,G=!0;if(W(B))for(let H=0;H<B.length;++H){const P=B[H],$=Z(P)&&P.name;if($==="Boolean"){L=!0;break}else $==="String"&&(G=!1)}else L=Z(B)&&B.name==="Boolean";g[0]=L,g[1]=G,(L||ie(g,"default"))&&a.push(h)}}const d=[i,a];return pe(e)&&o.set(e,d),d}function jr(e){return e[0]!=="$"&&!hn(e)}const ki=e=>e[0]==="_"||e==="$stable",wr=e=>W(e)?e.map(lt):[lt(e)],Hl=(e,t,n)=>{if(t._n)return t;const o=Ie((...r)=>wr(t(...r)),n);return o._c=!1,o},Oi=(e,t,n)=>{const o=e._ctx;for(const r in e){if(ki(r))continue;const s=e[r];if(Z(s))t[r]=Hl(r,s,o);else if(s!=null){const i=wr(s);t[r]=()=>i}}},Ri=(e,t)=>{const n=wr(t);e.slots.default=()=>n},Ii=(e,t,n)=>{for(const o in t)(n||o!=="_")&&(e[o]=t[o])},Ul=(e,t,n)=>{const o=e.slots=_i();if(e.vnode.shapeFlag&32){const r=t._;r?(Ii(o,t,n),n&&Fs(o,"_",r,!0)):Oi(t,o)}else t&&Ri(e,t)},Xl=(e,t,n)=>{const{vnode:o,slots:r}=e;let s=!0,i=ue;if(o.shapeFlag&32){const a=t._;a?n&&a===1?s=!1:Ii(r,t,n):(s=!t.$stable,Oi(t,r)),i=t}else t&&(Ri(e,t),i={default:1});if(s)for(const a in r)!ki(a)&&i[a]==null&&delete r[a]},Ye=oc;function jl(e){return Yl(e)}function Yl(e,t){const n=Ds();n.__VUE__=!0;const{insert:o,remove:r,patchProp:s,createElement:i,createText:a,createComment:l,setText:d,setElementText:f,parentNode:h,nextSibling:p,setScopeId:g=ct,insertStaticContent:B}=e,L=(c,u,m,x=null,y=null,k=null,_=void 0,N=null,O=!!u.dynamicChildren)=>{if(c===u)return;c&&!fn(c,u)&&(x=v(c),se(c,y,k,!0),c=null),u.patchFlag===-2&&(O=!1,u.dynamicChildren=null);const{type:b,ref:U,shapeFlag:S}=u;switch(b){case mo:G(c,u,m,x);break;case It:H(c,u,m,x);break;case Ao:c==null&&P(u,m,x,_);break;case Q:Ze(c,u,m,x,y,k,_,N,O);break;default:S&1?ne(c,u,m,x,y,k,_,N,O):S&6?He(c,u,m,x,y,k,_,N,O):(S&64||S&128)&&b.process(c,u,m,x,y,k,_,N,O,F)}U!=null&&y&&Xo(U,c&&c.ref,k,u||c,!u)},G=(c,u,m,x)=>{if(c==null)o(u.el=a(u.children),m,x);else{const y=u.el=c.el;u.children!==c.children&&d(y,u.children)}},H=(c,u,m,x)=>{c==null?o(u.el=l(u.children||""),m,x):u.el=c.el},P=(c,u,m,x)=>{[c.el,c.anchor]=B(c.children,u,m,x,c.el,c.anchor)},$=({el:c,anchor:u},m,x)=>{let y;for(;c&&c!==u;)y=p(c),o(c,m,x),c=y;o(u,m,x)},M=({el:c,anchor:u})=>{let m;for(;c&&c!==u;)m=p(c),r(c),c=m;r(u)},ne=(c,u,m,x,y,k,_,N,O)=>{u.type==="svg"?_="svg":u.type==="math"&&(_="mathml"),c==null?de(u,m,x,y,k,_,N,O):xe(c,u,y,k,_,N,O)},de=(c,u,m,x,y,k,_,N)=>{let O,b;const{props:U,shapeFlag:S,transition:D,dirs:Y}=c;if(O=c.el=i(c.type,k,U&&U.is,U),S&8?f(O,c.children):S&16&&Be(c.children,O,null,x,y,So(c,k),_,N),Y&&Ct(c,null,x,"created"),ce(O,c,c.scopeId,_,x),U){for(const I in U)I!=="value"&&!hn(I)&&s(O,I,null,U[I],k,x);"value"in U&&s(O,"value",null,U.value,k),(b=U.onVnodeBeforeMount)&&st(b,x,c)}Y&&Ct(c,null,x,"beforeMount");const E=Vl(y,D);E&&D.beforeEnter(O),o(O,u,m),((b=U&&U.onVnodeMounted)||E||Y)&&Ye(()=>{b&&st(b,x,c),E&&D.enter(O),Y&&Ct(c,null,x,"mounted")},y)},ce=(c,u,m,x,y)=>{if(m&&g(c,m),x)for(let k=0;k<x.length;k++)g(c,x[k]);if(y){let k=y.subTree;if(u===k||Li(k.type)&&(k.ssContent===u||k.ssFallback===u)){const _=y.vnode;ce(c,_,_.scopeId,_.slotScopeIds,y.parent)}}},Be=(c,u,m,x,y,k,_,N,O=0)=>{for(let b=O;b<c.length;b++){const U=c[b]=N?xt(c[b]):lt(c[b]);L(null,U,u,m,x,y,k,_,N)}},xe=(c,u,m,x,y,k,_)=>{const N=u.el=c.el;let{patchFlag:O,dynamicChildren:b,dirs:U}=u;O|=c.patchFlag&16;const S=c.props||ue,D=u.props||ue;let Y;if(m&&Lt(m,!1),(Y=D.onVnodeBeforeUpdate)&&st(Y,m,u,c),U&&Ct(u,c,m,"beforeUpdate"),m&&Lt(m,!0),(S.innerHTML&&D.innerHTML==null||S.textContent&&D.textContent==null)&&f(N,""),b?Pe(c.dynamicChildren,b,N,m,x,So(u,y),k):_||R(c,u,N,null,m,x,So(u,y),k,!1),O>0){if(O&16)Ue(N,S,D,m,y);else if(O&2&&S.class!==D.class&&s(N,"class",null,D.class,y),O&4&&s(N,"style",S.style,D.style,y),O&8){const E=u.dynamicProps;for(let I=0;I<E.length;I++){const C=E[I],q=S[C],oe=D[C];(oe!==q||C==="value")&&s(N,C,q,oe,y,m)}}O&1&&c.children!==u.children&&f(N,u.children)}else!_&&b==null&&Ue(N,S,D,m,y);((Y=D.onVnodeUpdated)||U)&&Ye(()=>{Y&&st(Y,m,u,c),U&&Ct(u,c,m,"updated")},x)},Pe=(c,u,m,x,y,k,_)=>{for(let N=0;N<u.length;N++){const O=c[N],b=u[N],U=O.el&&(O.type===Q||!fn(O,b)||O.shapeFlag&70)?h(O.el):m;L(O,b,U,null,x,y,k,_,!0)}},Ue=(c,u,m,x,y)=>{if(u!==m){if(u!==ue)for(const k in u)!hn(k)&&!(k in m)&&s(c,k,u[k],null,y,x);for(const k in m){if(hn(k))continue;const _=m[k],N=u[k];_!==N&&k!=="value"&&s(c,k,N,_,y,x)}"value"in m&&s(c,"value",u.value,m.value,y)}},Ze=(c,u,m,x,y,k,_,N,O)=>{const b=u.el=c?c.el:a(""),U=u.anchor=c?c.anchor:a("");let{patchFlag:S,dynamicChildren:D,slotScopeIds:Y}=u;Y&&(N=N?N.concat(Y):Y),c==null?(o(b,m,x),o(U,m,x),Be(u.children||[],m,U,y,k,_,N,O)):S>0&&S&64&&D&&c.dynamicChildren?(Pe(c.dynamicChildren,D,m,y,k,_,N),(u.key!=null||y&&u===y.subTree)&&Ni(c,u,!0)):R(c,u,m,U,y,k,_,N,O)},He=(c,u,m,x,y,k,_,N,O)=>{u.slotScopeIds=N,c==null?u.shapeFlag&512?y.ctx.activate(u,m,x,_,O):dt(u,m,x,y,k,_,O):Xe(c,u,O)},dt=(c,u,m,x,y,k,_)=>{const N=c.component=uc(c,x,y);if(hi(c)&&(N.ctx.renderer=F),dc(N,!1,_),N.asyncDep){if(y&&y.registerDep(N,me,_),!c.el){const O=N.subTree=z(It);H(null,O,u,m)}}else me(N,c,u,m,y,k,_)},Xe=(c,u,m)=>{const x=u.component=c.component;if(tc(c,u,m))if(x.asyncDep&&!x.asyncResolved){w(x,u,m);return}else x.next=u,x.update();else u.el=c.el,x.vnode=u},me=(c,u,m,x,y,k,_)=>{const N=()=>{if(c.isMounted){let{next:S,bu:D,u:Y,parent:E,vnode:I}=c;{const Fe=Si(c);if(Fe){S&&(S.el=I.el,w(c,S,_)),Fe.asyncDep.then(()=>{c.isUnmounted||N()});return}}let C=S,q;Lt(c,!1),S?(S.el=I.el,w(c,S,_)):S=I,D&&Eo(D),(q=S.props&&S.props.onVnodeBeforeUpdate)&&st(q,E,S,I),Lt(c,!0);const oe=To(c),ye=c.subTree;c.subTree=oe,L(ye,oe,h(ye.el),v(ye),c,y,k),S.el=oe.el,C===null&&nc(c,oe.el),Y&&Ye(Y,y),(q=S.props&&S.props.onVnodeUpdated)&&Ye(()=>st(q,E,S,I),y)}else{let S;const{el:D,props:Y}=u,{bm:E,m:I,parent:C,root:q,type:oe}=c,ye=qt(u);if(Lt(c,!1),E&&Eo(E),!ye&&(S=Y&&Y.onVnodeBeforeMount)&&st(S,C,u),Lt(c,!0),D&&he){const Fe=()=>{c.subTree=To(c),he(D,c.subTree,c,y,null)};ye&&oe.__asyncHydrate?oe.__asyncHydrate(D,c,Fe):Fe()}else{q.ce&&q.ce._injectChildStyle(oe);const Fe=c.subTree=To(c);L(null,Fe,m,x,c,y,k),u.el=Fe.el}if(I&&Ye(I,y),!ye&&(S=Y&&Y.onVnodeMounted)){const Fe=u;Ye(()=>st(S,C,Fe),y)}(u.shapeFlag&256||C&&qt(C.vnode)&&C.vnode.shapeFlag&256)&&c.a&&Ye(c.a,y),c.isMounted=!0,u=m=x=null}};c.scope.on();const O=c.effect=new Us(N);c.scope.off();const b=c.update=O.run.bind(O),U=c.job=O.runIfDirty.bind(O);U.i=c,U.id=c.uid,O.scheduler=()=>mr(U),Lt(c,!0),b()},w=(c,u,m)=>{u.component=c;const x=c.vnode.props;c.vnode=u,c.next=null,zl(c,u.props,x,m),Xl(c,u.children,m),St(),Dr(c),Tt()},R=(c,u,m,x,y,k,_,N,O=!1)=>{const b=c&&c.children,U=c?c.shapeFlag:0,S=u.children,{patchFlag:D,shapeFlag:Y}=u;if(D>0){if(D&128){J(b,S,m,x,y,k,_,N,O);return}else if(D&256){X(b,S,m,x,y,k,_,N,O);return}}Y&8?(U&16&&ge(b,y,k),S!==b&&f(m,S)):U&16?Y&16?J(b,S,m,x,y,k,_,N,O):ge(b,y,k,!0):(U&8&&f(m,""),Y&16&&Be(S,m,x,y,k,_,N,O))},X=(c,u,m,x,y,k,_,N,O)=>{c=c||Vt,u=u||Vt;const b=c.length,U=u.length,S=Math.min(b,U);let D;for(D=0;D<S;D++){const Y=u[D]=O?xt(u[D]):lt(u[D]);L(c[D],Y,m,null,y,k,_,N,O)}b>U?ge(c,y,k,!0,!1,S):Be(u,m,x,y,k,_,N,O,S)},J=(c,u,m,x,y,k,_,N,O)=>{let b=0;const U=u.length;let S=c.length-1,D=U-1;for(;b<=S&&b<=D;){const Y=c[b],E=u[b]=O?xt(u[b]):lt(u[b]);if(fn(Y,E))L(Y,E,m,null,y,k,_,N,O);else break;b++}for(;b<=S&&b<=D;){const Y=c[S],E=u[D]=O?xt(u[D]):lt(u[D]);if(fn(Y,E))L(Y,E,m,null,y,k,_,N,O);else break;S--,D--}if(b>S){if(b<=D){const Y=D+1,E=Y<U?u[Y].el:x;for(;b<=D;)L(null,u[b]=O?xt(u[b]):lt(u[b]),m,E,y,k,_,N,O),b++}}else if(b>D)for(;b<=S;)se(c[b],y,k,!0),b++;else{const Y=b,E=b,I=new Map;for(b=E;b<=D;b++){const je=u[b]=O?xt(u[b]):lt(u[b]);je.key!=null&&I.set(je.key,b)}let C,q=0;const oe=D-E+1;let ye=!1,Fe=0;const At=new Array(oe);for(b=0;b<oe;b++)At[b]=0;for(b=Y;b<=S;b++){const je=c[b];if(q>=oe){se(je,y,k,!0);continue}let rt;if(je.key!=null)rt=I.get(je.key);else for(C=E;C<=D;C++)if(At[C-E]===0&&fn(je,u[C])){rt=C;break}rt===void 0?se(je,y,k,!0):(At[rt-E]=b+1,rt>=Fe?Fe=rt:ye=!0,L(je,u[rt],m,null,y,k,_,N,O),q++)}const Nr=ye?Kl(At):Vt;for(C=Nr.length-1,b=oe-1;b>=0;b--){const je=E+b,rt=u[je],Sr=je+1<U?u[je+1].el:x;At[b]===0?L(null,rt,m,Sr,y,k,_,N,O):ye&&(C<0||b!==Nr[C]?te(rt,m,Sr,2):C--)}}},te=(c,u,m,x,y=null)=>{const{el:k,type:_,transition:N,children:O,shapeFlag:b}=c;if(b&6){te(c.component.subTree,u,m,x);return}if(b&128){c.suspense.move(u,m,x);return}if(b&64){_.move(c,u,m,F);return}if(_===Q){o(k,u,m);for(let S=0;S<O.length;S++)te(O[S],u,m,x);o(c.anchor,u,m);return}if(_===Ao){$(c,u,m);return}if(x!==2&&b&1&&N)if(x===0)N.beforeEnter(k),o(k,u,m),Ye(()=>N.enter(k),y);else{const{leave:S,delayLeave:D,afterLeave:Y}=N,E=()=>o(k,u,m),I=()=>{S(k,()=>{E(),Y&&Y()})};D?D(k,E,I):I()}else o(k,u,m)},se=(c,u,m,x=!1,y=!1)=>{const{type:k,props:_,ref:N,children:O,dynamicChildren:b,shapeFlag:U,patchFlag:S,dirs:D,cacheIndex:Y}=c;if(S===-2&&(y=!1),N!=null&&Xo(N,null,m,c,!0),Y!=null&&(u.renderCache[Y]=void 0),U&256){u.ctx.deactivate(c);return}const E=U&1&&D,I=!qt(c);let C;if(I&&(C=_&&_.onVnodeBeforeUnmount)&&st(C,u,c),U&6)Re(c.component,m,x);else{if(U&128){c.suspense.unmount(m,x);return}E&&Ct(c,null,u,"beforeUnmount"),U&64?c.type.remove(c,u,m,F,x):b&&!b.hasOnce&&(k!==Q||S>0&&S&64)?ge(b,u,m,!1,!0):(k===Q&&S&384||!y&&U&16)&&ge(O,u,m),x&&Oe(c)}(I&&(C=_&&_.onVnodeUnmounted)||E)&&Ye(()=>{C&&st(C,u,c),E&&Ct(c,null,u,"unmounted")},m)},Oe=c=>{const{type:u,el:m,anchor:x,transition:y}=c;if(u===Q){Je(m,x);return}if(u===Ao){M(c);return}const k=()=>{r(m),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(c.shapeFlag&1&&y&&!y.persisted){const{leave:_,delayLeave:N}=y,O=()=>_(m,k);N?N(c.el,k,O):O()}else k()},Je=(c,u)=>{let m;for(;c!==u;)m=p(c),r(c),c=m;r(u)},Re=(c,u,m)=>{const{bum:x,scope:y,job:k,subTree:_,um:N,m:O,a:b}=c;Yr(O),Yr(b),x&&Eo(x),y.stop(),k&&(k.flags|=8,se(_,c,u,m)),N&&Ye(N,u),Ye(()=>{c.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},ge=(c,u,m,x=!1,y=!1,k=0)=>{for(let _=k;_<c.length;_++)se(c[_],u,m,x,y)},v=c=>{if(c.shapeFlag&6)return v(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const u=p(c.anchor||c.el),m=u&&u[ul];return m?p(m):u};let A=!1;const T=(c,u,m)=>{c==null?u._vnode&&se(u._vnode,null,null,!0):L(u._vnode||null,c,u,null,null,null,m),u._vnode=c,A||(A=!0,Dr(),li(),A=!1)},F={p:L,um:se,m:te,r:Oe,mt:dt,mc:Be,pc:R,pbc:Pe,n:v,o:e};let re,he;return{render:T,hydrate:re,createApp:Fl(T,re)}}function So({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Lt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Vl(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ni(e,t,n=!1){const o=e.children,r=t.children;if(W(o)&&W(r))for(let s=0;s<o.length;s++){const i=o[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=xt(r[s]),a.el=i.el),!n&&a.patchFlag!==-2&&Ni(i,a)),a.type===mo&&(a.el=i.el)}}function Kl(e){const t=e.slice(),n=[0];let o,r,s,i,a;const l=e.length;for(o=0;o<l;o++){const d=e[o];if(d!==0){if(r=n[n.length-1],e[r]<d){t[o]=r,n.push(o);continue}for(s=0,i=n.length-1;s<i;)a=s+i>>1,e[n[a]]<d?s=a+1:i=a;d<e[n[s]]&&(s>0&&(t[o]=n[s-1]),n[s]=o)}}for(s=n.length,i=n[s-1];s-- >0;)n[s]=i,i=t[i];return n}function Si(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Si(t)}function Yr(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Gl=Symbol.for("v-scx"),Wl=()=>ft(Gl);function Jt(e,t,n){return Ti(e,t,n)}function Ti(e,t,n=ue){const{immediate:o,deep:r,flush:s,once:i}=n,a=Te({},n);let l;if(go)if(s==="sync"){const p=Wl();l=p.__watcherHandles||(p.__watcherHandles=[])}else if(!t||o)a.once=!0;else return{stop:ct,resume:ct,pause:ct};const d=Le;a.call=(p,g,B)=>ut(p,d,g,B);let f=!1;s==="post"?a.scheduler=p=>{Ye(p,d&&d.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(p,g)=>{g?p():mr(p)}),a.augmentJob=p=>{t&&(p.flags|=4),f&&(p.flags|=2,d&&(p.id=d.uid,p.i=d))};const h=al(e,t,a);return l&&l.push(h),h}function ql(e,t,n){const o=this.proxy,r=ve(e)?e.includes(".")?Ai(o,e):()=>o[e]:e.bind(o,o);let s;Z(t)?s=t:(s=t.handler,n=t);const i=Bn(this),a=Ti(r,s.bind(o),n);return i(),a}function Ai(e,t){const n=t.split(".");return()=>{let o=e;for(let r=0;r<n.length&&o;r++)o=o[n[r]];return o}}const Zl=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${tt(t)}Modifiers`]||e[`${$t(t)}Modifiers`];function Jl(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||ue;let r=n;const s=t.startsWith("update:"),i=s&&Zl(o,t.slice(7));i&&(i.trim&&(r=n.map(f=>ve(f)?f.trim():f)),i.number&&(r=n.map(Oa)));let a,l=o[a=xo(t)]||o[a=xo(tt(t))];!l&&s&&(l=o[a=xo($t(t))]),l&&ut(l,e,6,r);const d=o[a+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,ut(d,e,6,r)}}function Ci(e,t,n=!1){const o=t.emitsCache,r=o.get(e);if(r!==void 0)return r;const s=e.emits;let i={},a=!1;if(!Z(e)){const l=d=>{const f=Ci(d,t,!0);f&&(a=!0,Te(i,f))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!a?(pe(e)&&o.set(e,null),null):(W(s)?s.forEach(l=>i[l]=null):Te(i,s),pe(e)&&o.set(e,i),i)}function po(e,t){return!e||!oo(t)?!1:(t=t.slice(2).replace(/Once$/,""),ie(e,t[0].toLowerCase()+t.slice(1))||ie(e,$t(t))||ie(e,t))}function To(e){const{type:t,vnode:n,proxy:o,withProxy:r,propsOptions:[s],slots:i,attrs:a,emit:l,render:d,renderCache:f,props:h,data:p,setupState:g,ctx:B,inheritAttrs:L}=e,G=Wn(e);let H,P;try{if(n.shapeFlag&4){const M=r||o,ne=M;H=lt(d.call(ne,M,f,h,g,p,B)),P=a}else{const M=t;H=lt(M.length>1?M(h,{attrs:a,slots:i,emit:l}):M(h,null)),P=t.props?a:Ql(a)}}catch(M){gn.length=0,uo(M,e,1),H=z(It)}let $=H;if(P&&L!==!1){const M=Object.keys(P),{shapeFlag:ne}=$;M.length&&ne&7&&(s&&M.some(tr)&&(P=ec(P,s)),$=rn($,P,!1,!0))}return n.dirs&&($=rn($,null,!1,!0),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&gr($,n.transition),H=$,Wn(G),H}const Ql=e=>{let t;for(const n in e)(n==="class"||n==="style"||oo(n))&&((t||(t={}))[n]=e[n]);return t},ec=(e,t)=>{const n={};for(const o in e)(!tr(o)||!(o.slice(9)in t))&&(n[o]=e[o]);return n};function tc(e,t,n){const{props:o,children:r,component:s}=e,{props:i,children:a,patchFlag:l}=t,d=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return o?Vr(o,i,d):!!i;if(l&8){const f=t.dynamicProps;for(let h=0;h<f.length;h++){const p=f[h];if(i[p]!==o[p]&&!po(d,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:o===i?!1:o?i?Vr(o,i,d):!0:!!i;return!1}function Vr(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let r=0;r<o.length;r++){const s=o[r];if(t[s]!==e[s]&&!po(n,s))return!0}return!1}function nc({vnode:e,parent:t},n){for(;t;){const o=t.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.el=e.el),o===e)(e=t.vnode).el=n,t=t.parent;else break}}const Li=e=>e.__isSuspense;function oc(e,t){t&&t.pendingBranch?W(e)?t.effects.push(...e):t.effects.push(e):fl(e)}const Q=Symbol.for("v-fgt"),mo=Symbol.for("v-txt"),It=Symbol.for("v-cmt"),Ao=Symbol.for("v-stc"),gn=[];let Ge=null;function V(e=!1){gn.push(Ge=e?null:[])}function rc(){gn.pop(),Ge=gn[gn.length-1]||null}let En=1;function Kr(e){En+=e,e<0&&Ge&&(Ge.hasOnce=!0)}function Mi(e){return e.dynamicChildren=En>0?Ge||Vt:null,rc(),En>0&&Ge&&Ge.push(e),e}function K(e,t,n,o,r,s){return Mi(ee(e,t,n,o,r,s,!0))}function Go(e,t,n,o,r){return Mi(z(e,t,n,o,r,!0))}function Zn(e){return e?e.__v_isVNode===!0:!1}function fn(e,t){return e.type===t.type&&e.key===t.key}const Bi=({key:e})=>e??null,Yn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ve(e)||Ne(e)||Z(e)?{i:$e,r:e,k:t,f:!!n}:e:null);function ee(e,t=null,n=null,o=0,r=null,s=e===Q?0:1,i=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Bi(t),ref:t&&Yn(t),scopeId:fi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:$e};return a?(yr(l,n),s&128&&e.normalize(l)):n&&(l.shapeFlag|=ve(n)?8:16),En>0&&!i&&Ge&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Ge.push(l),l}const z=sc;function sc(e,t=null,n=null,o=0,r=null,s=!1){if((!e||e===Il)&&(e=It),Zn(e)){const a=rn(e,t,!0);return n&&yr(a,n),En>0&&!s&&Ge&&(a.shapeFlag&6?Ge[Ge.indexOf(e)]=a:Ge.push(a)),a.patchFlag=-2,a}if(bc(e)&&(e=e.__vccOpts),t){t=ic(t);let{class:a,style:l}=t;a&&!ve(a)&&(t.class=Dt(a)),pe(l)&&(dr(l)&&!W(l)&&(l=Te({},l)),t.style=rr(l))}const i=ve(e)?1:Li(e)?128:dl(e)?64:pe(e)?4:Z(e)?2:0;return ee(e,t,n,o,r,i,s,!0)}function ic(e){return e?dr(e)||vi(e)?Te({},e):e:null}function rn(e,t,n=!1,o=!1){const{props:r,ref:s,patchFlag:i,children:a,transition:l}=e,d=t?lc(r||{},t):r,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&Bi(d),ref:t&&t.ref?n&&s?W(s)?s.concat(Yn(t)):[s,Yn(t)]:Yn(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Q?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&rn(e.ssContent),ssFallback:e.ssFallback&&rn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&o&&gr(f,l.clone(f)),f}function ke(e=" ",t=0){return z(mo,null,e,t)}function ac(e="",t=!1){return t?(V(),Go(It,null,e)):z(It,null,e)}function lt(e){return e==null||typeof e=="boolean"?z(It):W(e)?z(Q,null,e.slice()):typeof e=="object"?xt(e):z(mo,null,String(e))}function xt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:rn(e)}function yr(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(W(t))n=16;else if(typeof t=="object")if(o&65){const r=t.default;r&&(r._c&&(r._d=!1),yr(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!vi(t)?t._ctx=$e:r===3&&$e&&($e.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Z(t)?(t={default:t,_ctx:$e},n=32):(t=String(t),o&64?(n=16,t=[ke(t)]):n=8);e.children=t,e.shapeFlag|=n}function lc(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const r in o)if(r==="class")t.class!==o.class&&(t.class=Dt([t.class,o.class]));else if(r==="style")t.style=rr([t.style,o.style]);else if(oo(r)){const s=t[r],i=o[r];i&&s!==i&&!(W(s)&&s.includes(i))&&(t[r]=s?[].concat(s,i):i)}else r!==""&&(t[r]=o[r])}return t}function st(e,t,n,o=null){ut(e,t,7,[n,o])}const cc=wi();let fc=0;function uc(e,t,n){const o=e.type,r=(t?t.appContext:e.appContext)||cc,s={uid:fc++,vnode:e,type:o,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ca(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ei(o,r),emitsOptions:Ci(o,r),emit:null,emitted:null,propsDefaults:ue,inheritAttrs:o.inheritAttrs,ctx:ue,data:ue,props:ue,attrs:ue,slots:ue,refs:ue,setupState:ue,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Jl.bind(null,s),e.ce&&e.ce(s),s}let Le=null,Jn,Wo;{const e=Ds(),t=(n,o)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(o),s=>{r.length>1?r.forEach(i=>i(s)):r[0](s)}};Jn=t("__VUE_INSTANCE_SETTERS__",n=>Le=n),Wo=t("__VUE_SSR_SETTERS__",n=>go=n)}const Bn=e=>{const t=Le;return Jn(e),e.scope.on(),()=>{e.scope.off(),Jn(t)}},Gr=()=>{Le&&Le.scope.off(),Jn(null)};function Pi(e){return e.vnode.shapeFlag&4}let go=!1;function dc(e,t=!1,n=!1){t&&Wo(t);const{props:o,children:r}=e.vnode,s=Pi(e);Dl(e,o,s,t),Ul(e,r,n);const i=s?hc(e,t):void 0;return t&&Wo(!1),i}function hc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Tl);const{setup:o}=n;if(o){const r=e.setupContext=o.length>1?mc(e):null,s=Bn(e);St();const i=Mn(o,e,0,[e.props,r]);if(Tt(),s(),Ms(i)){if(qt(e)||di(e),i.then(Gr,Gr),t)return i.then(a=>{Wr(e,a,t)}).catch(a=>{uo(a,e,0)});e.asyncDep=i}else Wr(e,i,t)}else Fi(e,t)}function Wr(e,t,n){Z(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:pe(t)&&(e.setupState=ri(t)),Fi(e,n)}let qr;function Fi(e,t,n){const o=e.type;if(!e.render){if(!t&&qr&&!o.render){const r=o.template||br(e).template;if(r){const{isCustomElement:s,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:l}=o,d=Te(Te({isCustomElement:s,delimiters:a},i),l);o.render=qr(r,d)}}e.render=o.render||ct}{const r=Bn(e);St();try{Al(e)}finally{Tt(),r()}}}const pc={get(e,t){return Me(e,"get",""),e[t]}};function mc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,pc),slots:e.slots,emit:e.emit,expose:t}}function _r(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ri(el(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in mn)return mn[n](e)},has(t,n){return n in t||n in mn}})):e.proxy}function gc(e,t=!0){return Z(e)?e.displayName||e.name:e.name||t&&e.__name}function bc(e){return Z(e)&&"__vccOpts"in e}const We=(e,t)=>sl(e,t,go);function Di(e,t,n){const o=arguments.length;return o===2?pe(t)&&!W(t)?Zn(t)?z(e,null,[t]):z(e,t):z(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&Zn(n)&&(n=[n]),z(e,t,n))}const wc="3.5.4";/**
* @vue/runtime-dom v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qo;const Zr=typeof window<"u"&&window.trustedTypes;if(Zr)try{qo=Zr.createPolicy("vue",{createHTML:e=>e})}catch{}const zi=qo?e=>qo.createHTML(e):e=>e,yc="http://www.w3.org/2000/svg",_c="http://www.w3.org/1998/Math/MathML",mt=typeof document<"u"?document:null,Jr=mt&&mt.createElement("template"),vc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const r=t==="svg"?mt.createElementNS(yc,e):t==="mathml"?mt.createElementNS(_c,e):n?mt.createElement(e,{is:n}):mt.createElement(e);return e==="select"&&o&&o.multiple!=null&&r.setAttribute("multiple",o.multiple),r},createText:e=>mt.createTextNode(e),createComment:e=>mt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>mt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,o,r,s){const i=n?n.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Jr.innerHTML=zi(o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e);const a=Jr.content;if(o==="svg"||o==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},xc=Symbol("_vtc");function Ec(e,t,n){const o=e[xc];o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Qr=Symbol("_vod"),kc=Symbol("_vsh"),Oc=Symbol(""),Rc=/(^|;)\s*display\s*:/;function Ic(e,t,n){const o=e.style,r=ve(n);let s=!1;if(n&&!r){if(t)if(ve(t))for(const i of t.split(";")){const a=i.slice(0,i.indexOf(":")).trim();n[a]==null&&Vn(o,a,"")}else for(const i in t)n[i]==null&&Vn(o,i,"");for(const i in n)i==="display"&&(s=!0),Vn(o,i,n[i])}else if(r){if(t!==n){const i=o[Oc];i&&(n+=";"+i),o.cssText=n,s=Rc.test(n)}}else t&&e.removeAttribute("style");Qr in e&&(e[Qr]=s?o.display:"",e[kc]&&(o.display="none"))}const es=/\s*!important$/;function Vn(e,t,n){if(W(n))n.forEach(o=>Vn(e,t,o));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const o=Nc(e,t);es.test(n)?e.setProperty($t(o),n.replace(es,""),"important"):e[o]=n}}const ts=["Webkit","Moz","ms"],Co={};function Nc(e,t){const n=Co[t];if(n)return n;let o=tt(t);if(o!=="filter"&&o in e)return Co[t]=o;o=io(o);for(let r=0;r<ts.length;r++){const s=ts[r]+o;if(s in e)return Co[t]=s}return t}const ns="http://www.w3.org/1999/xlink";function os(e,t,n,o,r,s=Aa(t)){o&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(ns,t.slice(6,t.length)):e.setAttributeNS(ns,t,n):n==null||s&&!zs(n)?e.removeAttribute(t):e.setAttribute(t,s?"":Nt(n)?String(n):n)}function Sc(e,t,n,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?zi(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const i=r==="OPTION"?e.getAttribute("value")||"":e.value,a=n==null?e.type==="checkbox"?"on":"":String(n);(i!==a||!("_value"in e))&&(e.value=a),n==null&&e.removeAttribute(t),e._value=n;return}let s=!1;if(n===""||n==null){const i=typeof e[t];i==="boolean"?n=zs(n):n==null&&i==="string"?(n="",s=!0):i==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function Tc(e,t,n,o){e.addEventListener(t,n,o)}function Ac(e,t,n,o){e.removeEventListener(t,n,o)}const rs=Symbol("_vei");function Cc(e,t,n,o,r=null){const s=e[rs]||(e[rs]={}),i=s[t];if(o&&i)i.value=o;else{const[a,l]=Lc(t);if(o){const d=s[t]=Pc(o,r);Tc(e,a,d,l)}else i&&(Ac(e,a,i,l),s[t]=void 0)}}const ss=/(?:Once|Passive|Capture)$/;function Lc(e){let t;if(ss.test(e)){t={};let o;for(;o=e.match(ss);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):$t(e.slice(2)),t]}let Lo=0;const Mc=Promise.resolve(),Bc=()=>Lo||(Mc.then(()=>Lo=0),Lo=Date.now());function Pc(e,t){const n=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=n.attached)return;ut(Fc(o,n.value),t,5,[o])};return n.value=e,n.attached=Bc(),n}function Fc(e,t){if(W(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(o=>r=>!r._stopped&&o&&o(r))}else return t}const is=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Dc=(e,t,n,o,r,s)=>{const i=r==="svg";t==="class"?Ec(e,o,i):t==="style"?Ic(e,n,o):oo(t)?tr(t)||Cc(e,t,n,o,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):zc(e,t,o,i))?(Sc(e,t,o),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&os(e,t,o,i,s,t!=="value")):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),os(e,t,o,i))};function zc(e,t,n,o){if(o)return!!(t==="innerHTML"||t==="textContent"||t in e&&is(t)&&Z(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return is(t)&&ve(n)?!1:!!(t in e||e._isVueCE&&(/[A-Z]/.test(t)||!ve(n)))}const $c=Te({patchProp:Dc},vc);let as;function Hc(){return as||(as=jl($c))}const Uc=(...e)=>{const t=Hc().createApp(...e),{mount:n}=t;return t.mount=o=>{const r=jc(o);if(!r)return;const s=t._component;!Z(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const i=n(r,!1,Xc(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},t};function Xc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function jc(e){return ve(e)?document.querySelector(e):e}/*!
  * vue-router v4.4.4
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Yt=typeof document<"u";function $i(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Yc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&$i(e.default)}const le=Object.assign;function Mo(e,t){const n={};for(const o in t){const r=t[o];n[o]=nt(r)?r.map(e):e(r)}return n}const bn=()=>{},nt=Array.isArray,Hi=/#/g,Vc=/&/g,Kc=/\//g,Gc=/=/g,Wc=/\?/g,Ui=/\+/g,qc=/%5B/g,Zc=/%5D/g,Xi=/%5E/g,Jc=/%60/g,ji=/%7B/g,Qc=/%7C/g,Yi=/%7D/g,ef=/%20/g;function vr(e){return encodeURI(""+e).replace(Qc,"|").replace(qc,"[").replace(Zc,"]")}function tf(e){return vr(e).replace(ji,"{").replace(Yi,"}").replace(Xi,"^")}function Zo(e){return vr(e).replace(Ui,"%2B").replace(ef,"+").replace(Hi,"%23").replace(Vc,"%26").replace(Jc,"`").replace(ji,"{").replace(Yi,"}").replace(Xi,"^")}function nf(e){return Zo(e).replace(Gc,"%3D")}function of(e){return vr(e).replace(Hi,"%23").replace(Wc,"%3F")}function rf(e){return e==null?"":of(e).replace(Kc,"%2F")}function kn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const sf=/\/$/,af=e=>e.replace(sf,"");function Bo(e,t,n="/"){let o,r={},s="",i="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(o=t.slice(0,l),s=t.slice(l+1,a>-1?a:t.length),r=e(s)),a>-1&&(o=o||t.slice(0,a),i=t.slice(a,t.length)),o=uf(o??t,n),{fullPath:o+(s&&"?")+s+i,path:o,query:r,hash:kn(i)}}function lf(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ls(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function cf(e,t,n){const o=t.matched.length-1,r=n.matched.length-1;return o>-1&&o===r&&sn(t.matched[o],n.matched[r])&&Vi(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function sn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Vi(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!ff(e[n],t[n]))return!1;return!0}function ff(e,t){return nt(e)?cs(e,t):nt(t)?cs(t,e):e===t}function cs(e,t){return nt(t)?e.length===t.length&&e.every((n,o)=>n===t[o]):e.length===1&&e[0]===t}function uf(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),o=e.split("/"),r=o[o.length-1];(r===".."||r===".")&&o.push("");let s=n.length-1,i,a;for(i=0;i<o.length;i++)if(a=o[i],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+o.slice(i).join("/")}const _t={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var On;(function(e){e.pop="pop",e.push="push"})(On||(On={}));var wn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(wn||(wn={}));function df(e){if(!e)if(Yt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),af(e)}const hf=/^[^#]+#/;function pf(e,t){return e.replace(hf,"#")+t}function mf(e,t){const n=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:t.behavior,left:o.left-n.left-(t.left||0),top:o.top-n.top-(t.top||0)}}const bo=()=>({left:window.scrollX,top:window.scrollY});function gf(e){let t;if("el"in e){const n=e.el,o=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?o?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=mf(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function fs(e,t){return(history.state?history.state.position-t:-1)+e}const Jo=new Map;function bf(e,t){Jo.set(e,t)}function wf(e){const t=Jo.get(e);return Jo.delete(e),t}let yf=()=>location.protocol+"//"+location.host;function Ki(e,t){const{pathname:n,search:o,hash:r}=t,s=e.indexOf("#");if(s>-1){let a=r.includes(e.slice(s))?e.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),ls(l,"")}return ls(n,e)+o+r}function _f(e,t,n,o){let r=[],s=[],i=null;const a=({state:p})=>{const g=Ki(e,location),B=n.value,L=t.value;let G=0;if(p){if(n.value=g,t.value=p,i&&i===B){i=null;return}G=L?p.position-L.position:0}else o(g);r.forEach(H=>{H(n.value,B,{delta:G,type:On.pop,direction:G?G>0?wn.forward:wn.back:wn.unknown})})};function l(){i=n.value}function d(p){r.push(p);const g=()=>{const B=r.indexOf(p);B>-1&&r.splice(B,1)};return s.push(g),g}function f(){const{history:p}=window;p.state&&p.replaceState(le({},p.state,{scroll:bo()}),"")}function h(){for(const p of s)p();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:d,destroy:h}}function us(e,t,n,o=!1,r=!1){return{back:e,current:t,forward:n,replaced:o,position:window.history.length,scroll:r?bo():null}}function vf(e){const{history:t,location:n}=window,o={value:Ki(e,n)},r={value:t.state};r.value||s(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(l,d,f){const h=e.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?e:e.slice(h))+l:yf()+e+l;try{t[f?"replaceState":"pushState"](d,"",p),r.value=d}catch(g){console.error(g),n[f?"replace":"assign"](p)}}function i(l,d){const f=le({},t.state,us(r.value.back,l,r.value.forward,!0),d,{position:r.value.position});s(l,f,!0),o.value=l}function a(l,d){const f=le({},r.value,t.state,{forward:l,scroll:bo()});s(f.current,f,!0);const h=le({},us(o.value,l,null),{position:f.position+1},d);s(l,h,!1),o.value=l}return{location:o,state:r,push:a,replace:i}}function xf(e){e=df(e);const t=vf(e),n=_f(e,t.state,t.location,t.replace);function o(s,i=!0){i||n.pauseListeners(),history.go(s)}const r=le({location:"",base:e,go:o,createHref:pf.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function Ef(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),xf(e)}function kf(e){return typeof e=="string"||e&&typeof e=="object"}function Gi(e){return typeof e=="string"||typeof e=="symbol"}const Wi=Symbol("");var ds;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ds||(ds={}));function an(e,t){return le(new Error,{type:e,[Wi]:!0},t)}function pt(e,t){return e instanceof Error&&Wi in e&&(t==null||!!(e.type&t))}const hs="[^/]+?",Of={sensitive:!1,strict:!1,start:!0,end:!0},Rf=/[.+*?^${}()[\]/\\]/g;function If(e,t){const n=le({},Of,t),o=[];let r=n.start?"^":"";const s=[];for(const d of e){const f=d.length?[]:[90];n.strict&&!d.length&&(r+="/");for(let h=0;h<d.length;h++){const p=d[h];let g=40+(n.sensitive?.25:0);if(p.type===0)h||(r+="/"),r+=p.value.replace(Rf,"\\$&"),g+=40;else if(p.type===1){const{value:B,repeatable:L,optional:G,regexp:H}=p;s.push({name:B,repeatable:L,optional:G});const P=H||hs;if(P!==hs){g+=10;try{new RegExp(`(${P})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${B}" (${P}): `+M.message)}}let $=L?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;h||($=G&&d.length<2?`(?:/${$})`:"/"+$),G&&($+="?"),r+=$,g+=20,G&&(g+=-8),L&&(g+=-20),P===".*"&&(g+=-50)}f.push(g)}o.push(f)}if(n.strict&&n.end){const d=o.length-1;o[d][o[d].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const i=new RegExp(r,n.sensitive?"":"i");function a(d){const f=d.match(i),h={};if(!f)return null;for(let p=1;p<f.length;p++){const g=f[p]||"",B=s[p-1];h[B.name]=g&&B.repeatable?g.split("/"):g}return h}function l(d){let f="",h=!1;for(const p of e){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const g of p)if(g.type===0)f+=g.value;else if(g.type===1){const{value:B,repeatable:L,optional:G}=g,H=B in d?d[B]:"";if(nt(H)&&!L)throw new Error(`Provided param "${B}" is an array but it is not repeatable (* or + modifiers)`);const P=nt(H)?H.join("/"):H;if(!P)if(G)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${B}"`);f+=P}}return f||"/"}return{re:i,score:o,keys:s,parse:a,stringify:l}}function Nf(e,t){let n=0;for(;n<e.length&&n<t.length;){const o=t[n]-e[n];if(o)return o;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function qi(e,t){let n=0;const o=e.score,r=t.score;for(;n<o.length&&n<r.length;){const s=Nf(o[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-o.length)===1){if(ps(o))return 1;if(ps(r))return-1}return r.length-o.length}function ps(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Sf={type:0,value:""},Tf=/[a-zA-Z0-9_]/;function Af(e){if(!e)return[[]];if(e==="/")return[[Sf]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${d}": ${g}`)}let n=0,o=n;const r=[];let s;function i(){s&&r.push(s),s=[]}let a=0,l,d="",f="";function h(){d&&(n===0?s.push({type:0,value:d}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:d,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),d="")}function p(){d+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==2){o=n,n=4;continue}switch(n){case 0:l==="/"?(d&&h(),i()):l===":"?(h(),n=1):p();break;case 4:p(),n=o;break;case 1:l==="("?n=2:Tf.test(l)?p():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${d}"`),h(),i(),r}function Cf(e,t,n){const o=If(Af(e.path),n),r=le(o,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Lf(e,t){const n=[],o=new Map;t=bs({strict:!1,end:!0,sensitive:!1},t);function r(h){return o.get(h)}function s(h,p,g){const B=!g,L=Mf(h);L.aliasOf=g&&g.record;const G=bs(t,h),H=[L];if("alias"in h){const M=typeof h.alias=="string"?[h.alias]:h.alias;for(const ne of M)H.push(le({},L,{components:g?g.record.components:L.components,path:ne,aliasOf:g?g.record:L}))}let P,$;for(const M of H){const{path:ne}=M;if(p&&ne[0]!=="/"){const de=p.record.path,ce=de[de.length-1]==="/"?"":"/";M.path=p.record.path+(ne&&ce+ne)}if(P=Cf(M,p,G),g?g.alias.push(P):($=$||P,$!==P&&$.alias.push(P),B&&h.name&&!gs(P)&&i(h.name)),Zi(P)&&l(P),L.children){const de=L.children;for(let ce=0;ce<de.length;ce++)s(de[ce],P,g&&g.children[ce])}g=g||P}return $?()=>{i($)}:bn}function i(h){if(Gi(h)){const p=o.get(h);p&&(o.delete(h),n.splice(n.indexOf(p),1),p.children.forEach(i),p.alias.forEach(i))}else{const p=n.indexOf(h);p>-1&&(n.splice(p,1),h.record.name&&o.delete(h.record.name),h.children.forEach(i),h.alias.forEach(i))}}function a(){return n}function l(h){const p=Ff(h,n);n.splice(p,0,h),h.record.name&&!gs(h)&&o.set(h.record.name,h)}function d(h,p){let g,B={},L,G;if("name"in h&&h.name){if(g=o.get(h.name),!g)throw an(1,{location:h});G=g.record.name,B=le(ms(p.params,g.keys.filter($=>!$.optional).concat(g.parent?g.parent.keys.filter($=>$.optional):[]).map($=>$.name)),h.params&&ms(h.params,g.keys.map($=>$.name))),L=g.stringify(B)}else if(h.path!=null)L=h.path,g=n.find($=>$.re.test(L)),g&&(B=g.parse(L),G=g.record.name);else{if(g=p.name?o.get(p.name):n.find($=>$.re.test(p.path)),!g)throw an(1,{location:h,currentLocation:p});G=g.record.name,B=le({},p.params,h.params),L=g.stringify(B)}const H=[];let P=g;for(;P;)H.unshift(P.record),P=P.parent;return{name:G,path:L,params:B,matched:H,meta:Pf(H)}}e.forEach(h=>s(h));function f(){n.length=0,o.clear()}return{addRoute:s,resolve:d,removeRoute:i,clearRoutes:f,getRoutes:a,getRecordMatcher:r}}function ms(e,t){const n={};for(const o of t)o in e&&(n[o]=e[o]);return n}function Mf(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Bf(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},mods:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Bf(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const o in e.components)t[o]=typeof n=="object"?n[o]:n;return t}function gs(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Pf(e){return e.reduce((t,n)=>le(t,n.meta),{})}function bs(e,t){const n={};for(const o in e)n[o]=o in t?t[o]:e[o];return n}function Ff(e,t){let n=0,o=t.length;for(;n!==o;){const s=n+o>>1;qi(e,t[s])<0?o=s:n=s+1}const r=Df(e);return r&&(o=t.lastIndexOf(r,o-1)),o}function Df(e){let t=e;for(;t=t.parent;)if(Zi(t)&&qi(e,t)===0)return t}function Zi({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function zf(e){const t={};if(e===""||e==="?")return t;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<o.length;++r){const s=o[r].replace(Ui," "),i=s.indexOf("="),a=kn(i<0?s:s.slice(0,i)),l=i<0?null:kn(s.slice(i+1));if(a in t){let d=t[a];nt(d)||(d=t[a]=[d]),d.push(l)}else t[a]=l}return t}function ws(e){let t="";for(let n in e){const o=e[n];if(n=nf(n),o==null){o!==void 0&&(t+=(t.length?"&":"")+n);continue}(nt(o)?o.map(s=>s&&Zo(s)):[o&&Zo(o)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function $f(e){const t={};for(const n in e){const o=e[n];o!==void 0&&(t[n]=nt(o)?o.map(r=>r==null?null:""+r):o==null?o:""+o)}return t}const Hf=Symbol(""),ys=Symbol(""),xr=Symbol(""),Er=Symbol(""),Qo=Symbol("");function un(){let e=[];function t(o){return e.push(o),()=>{const r=e.indexOf(o);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Et(e,t,n,o,r,s=i=>i()){const i=o&&(o.enterCallbacks[r]=o.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const d=p=>{p===!1?l(an(4,{from:n,to:t})):p instanceof Error?l(p):kf(p)?l(an(2,{from:t,to:p})):(i&&o.enterCallbacks[r]===i&&typeof p=="function"&&i.push(p),a())},f=s(()=>e.call(o&&o.instances[r],t,n,d));let h=Promise.resolve(f);e.length<3&&(h=h.then(d)),h.catch(p=>l(p))})}function Po(e,t,n,o,r=s=>s()){const s=[];for(const i of e)for(const a in i.components){let l=i.components[a];if(!(t!=="beforeRouteEnter"&&!i.instances[a]))if($i(l)){const f=(l.__vccOpts||l)[t];f&&s.push(Et(f,n,o,i,a,r))}else{let d=l();s.push(()=>d.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);const h=Yc(f)?f.default:f;i.mods[a]=f,i.components[a]=h;const g=(h.__vccOpts||h)[t];return g&&Et(g,n,o,i,a,r)()}))}}return s}function _s(e){const t=ft(xr),n=ft(Er),o=We(()=>{const l=Ke(e.to);return t.resolve(l)}),r=We(()=>{const{matched:l}=o.value,{length:d}=l,f=l[d-1],h=n.matched;if(!f||!h.length)return-1;const p=h.findIndex(sn.bind(null,f));if(p>-1)return p;const g=vs(l[d-2]);return d>1&&vs(f)===g&&h[h.length-1].path!==g?h.findIndex(sn.bind(null,l[d-2])):p}),s=We(()=>r.value>-1&&jf(n.params,o.value.params)),i=We(()=>r.value>-1&&r.value===n.matched.length-1&&Vi(n.params,o.value.params));function a(l={}){return Xf(l)?t[Ke(e.replace)?"replace":"push"](Ke(e.to)).catch(bn):Promise.resolve()}return{route:o,href:We(()=>o.value.href),isActive:s,isExactActive:i,navigate:a}}const Uf=ui({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:_s,setup(e,{slots:t}){const n=co(_s(e)),{options:o}=ft(xr),r=We(()=>({[xs(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[xs(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:Di("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),Ji=Uf;function Xf(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function jf(e,t){for(const n in t){const o=t[n],r=e[n];if(typeof o=="string"){if(o!==r)return!1}else if(!nt(r)||r.length!==o.length||o.some((s,i)=>s!==r[i]))return!1}return!0}function vs(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const xs=(e,t,n)=>e??t??n,Yf=ui({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const o=ft(Qo),r=We(()=>e.route||o.value),s=ft(ys,0),i=We(()=>{let d=Ke(s);const{matched:f}=r.value;let h;for(;(h=f[d])&&!h.components;)d++;return d}),a=We(()=>r.value.matched[i.value]);jn(ys,We(()=>i.value+1)),jn(Hf,a),jn(Qo,r);const l=fo();return Jt(()=>[l.value,a.value,e.name],([d,f,h],[p,g,B])=>{f&&(f.instances[h]=d,g&&g!==f&&d&&d===p&&(f.leaveGuards.size||(f.leaveGuards=g.leaveGuards),f.updateGuards.size||(f.updateGuards=g.updateGuards))),d&&f&&(!g||!sn(f,g)||!p)&&(f.enterCallbacks[h]||[]).forEach(L=>L(d))},{flush:"post"}),()=>{const d=r.value,f=e.name,h=a.value,p=h&&h.components[f];if(!p)return Es(n.default,{Component:p,route:d});const g=h.props[f],B=g?g===!0?d.params:typeof g=="function"?g(d):g:null,G=Di(p,le({},B,t,{onVnodeUnmounted:H=>{H.component.isUnmounted&&(h.instances[f]=null)},ref:l}));return Es(n.default,{Component:G,route:d})||G}}});function Es(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Qi=Yf;function Vf(e){const t=Lf(e.routes,e),n=e.parseQuery||zf,o=e.stringifyQuery||ws,r=e.history,s=un(),i=un(),a=un(),l=tl(_t);let d=_t;Yt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Mo.bind(null,v=>""+v),h=Mo.bind(null,rf),p=Mo.bind(null,kn);function g(v,A){let T,F;return Gi(v)?(T=t.getRecordMatcher(v),F=A):F=v,t.addRoute(F,T)}function B(v){const A=t.getRecordMatcher(v);A&&t.removeRoute(A)}function L(){return t.getRoutes().map(v=>v.record)}function G(v){return!!t.getRecordMatcher(v)}function H(v,A){if(A=le({},A||l.value),typeof v=="string"){const u=Bo(n,v,A.path),m=t.resolve({path:u.path},A),x=r.createHref(u.fullPath);return le(u,m,{params:p(m.params),hash:kn(u.hash),redirectedFrom:void 0,href:x})}let T;if(v.path!=null)T=le({},v,{path:Bo(n,v.path,A.path).path});else{const u=le({},v.params);for(const m in u)u[m]==null&&delete u[m];T=le({},v,{params:h(u)}),A.params=h(A.params)}const F=t.resolve(T,A),re=v.hash||"";F.params=f(p(F.params));const he=lf(o,le({},v,{hash:tf(re),path:F.path})),c=r.createHref(he);return le({fullPath:he,hash:re,query:o===ws?$f(v.query):v.query||{}},F,{redirectedFrom:void 0,href:c})}function P(v){return typeof v=="string"?Bo(n,v,l.value.path):le({},v)}function $(v,A){if(d!==v)return an(8,{from:A,to:v})}function M(v){return ce(v)}function ne(v){return M(le(P(v),{replace:!0}))}function de(v){const A=v.matched[v.matched.length-1];if(A&&A.redirect){const{redirect:T}=A;let F=typeof T=="function"?T(v):T;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=P(F):{path:F},F.params={}),le({query:v.query,hash:v.hash,params:F.path!=null?{}:v.params},F)}}function ce(v,A){const T=d=H(v),F=l.value,re=v.state,he=v.force,c=v.replace===!0,u=de(T);if(u)return ce(le(P(u),{state:typeof u=="object"?le({},re,u.state):re,force:he,replace:c}),A||T);const m=T;m.redirectedFrom=A;let x;return!he&&cf(o,F,T)&&(x=an(16,{to:m,from:F}),te(F,F,!0,!1)),(x?Promise.resolve(x):Pe(m,F)).catch(y=>pt(y)?pt(y,2)?y:J(y):R(y,m,F)).then(y=>{if(y){if(pt(y,2))return ce(le({replace:c},P(y.to),{state:typeof y.to=="object"?le({},re,y.to.state):re,force:he}),A||m)}else y=Ze(m,F,!0,c,re);return Ue(m,F,y),y})}function Be(v,A){const T=$(v,A);return T?Promise.reject(T):Promise.resolve()}function xe(v){const A=Je.values().next().value;return A&&typeof A.runWithContext=="function"?A.runWithContext(v):v()}function Pe(v,A){let T;const[F,re,he]=Kf(v,A);T=Po(F.reverse(),"beforeRouteLeave",v,A);for(const u of F)u.leaveGuards.forEach(m=>{T.push(Et(m,v,A))});const c=Be.bind(null,v,A);return T.push(c),ge(T).then(()=>{T=[];for(const u of s.list())T.push(Et(u,v,A));return T.push(c),ge(T)}).then(()=>{T=Po(re,"beforeRouteUpdate",v,A);for(const u of re)u.updateGuards.forEach(m=>{T.push(Et(m,v,A))});return T.push(c),ge(T)}).then(()=>{T=[];for(const u of he)if(u.beforeEnter)if(nt(u.beforeEnter))for(const m of u.beforeEnter)T.push(Et(m,v,A));else T.push(Et(u.beforeEnter,v,A));return T.push(c),ge(T)}).then(()=>(v.matched.forEach(u=>u.enterCallbacks={}),T=Po(he,"beforeRouteEnter",v,A,xe),T.push(c),ge(T))).then(()=>{T=[];for(const u of i.list())T.push(Et(u,v,A));return T.push(c),ge(T)}).catch(u=>pt(u,8)?u:Promise.reject(u))}function Ue(v,A,T){a.list().forEach(F=>xe(()=>F(v,A,T)))}function Ze(v,A,T,F,re){const he=$(v,A);if(he)return he;const c=A===_t,u=Yt?history.state:{};T&&(F||c?r.replace(v.fullPath,le({scroll:c&&u&&u.scroll},re)):r.push(v.fullPath,re)),l.value=v,te(v,A,T,c),J()}let He;function dt(){He||(He=r.listen((v,A,T)=>{if(!Re.listening)return;const F=H(v),re=de(F);if(re){ce(le(re,{replace:!0}),F).catch(bn);return}d=F;const he=l.value;Yt&&bf(fs(he.fullPath,T.delta),bo()),Pe(F,he).catch(c=>pt(c,12)?c:pt(c,2)?(ce(c.to,F).then(u=>{pt(u,20)&&!T.delta&&T.type===On.pop&&r.go(-1,!1)}).catch(bn),Promise.reject()):(T.delta&&r.go(-T.delta,!1),R(c,F,he))).then(c=>{c=c||Ze(F,he,!1),c&&(T.delta&&!pt(c,8)?r.go(-T.delta,!1):T.type===On.pop&&pt(c,20)&&r.go(-1,!1)),Ue(F,he,c)}).catch(bn)}))}let Xe=un(),me=un(),w;function R(v,A,T){J(v);const F=me.list();return F.length?F.forEach(re=>re(v,A,T)):console.error(v),Promise.reject(v)}function X(){return w&&l.value!==_t?Promise.resolve():new Promise((v,A)=>{Xe.add([v,A])})}function J(v){return w||(w=!v,dt(),Xe.list().forEach(([A,T])=>v?T(v):A()),Xe.reset()),v}function te(v,A,T,F){const{scrollBehavior:re}=e;if(!Yt||!re)return Promise.resolve();const he=!T&&wf(fs(v.fullPath,0))||(F||!T)&&history.state&&history.state.scroll||null;return ii().then(()=>re(v,A,he)).then(c=>c&&gf(c)).catch(c=>R(c,v,A))}const se=v=>r.go(v);let Oe;const Je=new Set,Re={currentRoute:l,listening:!0,addRoute:g,removeRoute:B,clearRoutes:t.clearRoutes,hasRoute:G,getRoutes:L,resolve:H,options:e,push:M,replace:ne,go:se,back:()=>se(-1),forward:()=>se(1),beforeEach:s.add,beforeResolve:i.add,afterEach:a.add,onError:me.add,isReady:X,install(v){const A=this;v.component("RouterLink",Ji),v.component("RouterView",Qi),v.config.globalProperties.$router=A,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Ke(l)}),Yt&&!Oe&&l.value===_t&&(Oe=!0,M(r.location).catch(re=>{}));const T={};for(const re in _t)Object.defineProperty(T,re,{get:()=>l.value[re],enumerable:!0});v.provide(xr,A),v.provide(Er,ti(T)),v.provide(Qo,l);const F=v.unmount;Je.add(v),v.unmount=function(){Je.delete(v),Je.size<1&&(d=_t,He&&He(),He=null,l.value=_t,Oe=!1,w=!1),F()}}};function ge(v){return v.reduce((A,T)=>A.then(()=>xe(T)),Promise.resolve())}return Re}function Kf(e,t){const n=[],o=[],r=[],s=Math.max(t.matched.length,e.matched.length);for(let i=0;i<s;i++){const a=t.matched[i];a&&(e.matched.find(d=>sn(d,a))?o.push(a):n.push(a));const l=e.matched[i];l&&(t.matched.find(d=>sn(d,l))||r.push(l))}return[n,o,r]}function ea(e){return ft(Er)}const Gf="/ea-effects/favicon.ico";function Wf(e,t){const n=document.createElement("link");n.href=t,n.rel="stylesheet",e.appendChild(n)}class ot extends HTMLElement{constructor(){super(),this.isProduction=!1,this.isProduction=!0}toggleAttribute(t,n,o){n?(this.setAttribute(t,n),o&&this.dom.classList.add(o)):(this.hasAttribute(t)&&this.removeAttribute(t),o&&this.dom.classList.remove(o))}toggleAttr(t,n){n?this.setAttribute(t,n):this.removeAttribute(t)}getAttrBoolean(t){const n=this.getAttribute(t);return n==="true"||n===""}getAttrNumber(t){const n=this.getAttribute(t);return n?Number(n):0}build(t,n){if(this.isProduction){const o=document.createElement("style");o.innerHTML=n,this.shadowRoot.appendChild(o)}else Wf(t,new URL(this.nodeName.toLowerCase()+"/index.css",import.meta.url).href)}}var Bt,Nn,eo,ta;class qf extends HTMLElement{constructor(){super();_e(this,eo);_e(this,Bt);_e(this,Nn);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <link id="fontello-stylesheet" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easy-component-ui/components/ea-icon/css/fontello.css">
            <i class="ea-icon_wrap" part="container">
                <slot></slot>
            </i>
        `,Ee(this,Bt,n.querySelector(".ea-icon_wrap")),Ee(this,Nn,n.querySelector("#fontello-stylesheet")),document.addEventListener("configChanged",o=>{vo(this,eo,ta).call(this,o.detail)})}get icon(){return this.getAttribute("icon")||""}set icon(n){this.setAttribute("icon",n),j(this,Bt).className=`${n}`}get color(){return this.getAttribute("color")||""}set color(n){this.setAttribute("color",n),j(this,Bt).style.color=n}get size(){return this.getAttribute("size")||""}set size(n){this.setAttribute("size",n),j(this,Bt).style.fontSize=`${n}px`}connectedCallback(){this.icon=this.icon,this.color=this.color,this.size=this.size,document.dispatchEvent(new CustomEvent("ea-icon-ready"))}}Bt=new WeakMap,Nn=new WeakMap,eo=new WeakSet,ta=function(n){j(this,Nn).href=n.fontelloCSS};window.customElements.get("ea-icon")||window.customElements.define("ea-icon",qf);const Zf=`
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
`;var Qe;class Jf extends ot{constructor(){super();_e(this,Qe);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <div class="ea-menu-item_wrap" part="container">
                <slot></slot>
            </div>
        `,Ee(this,Qe,n.querySelector(".ea-menu-item_wrap")),this.build(n,Zf)}get actived(){return this.getAttrBoolean("actived")}set actived(n){this.setAttribute("actived",n),this.isSubItem?j(this,Qe).classList.toggle("is-sub-actived",n):j(this,Qe).classList.toggle("is-actived",n)}get isSubItem(){return this.getAttrBoolean("is-sub-item")}set isSubItem(n){n&&this.setAttribute("is-sub-item",n)}get backgroundColor(){return this.getAttribute("background-color")||"#fff"}set backgroundColor(n){this.setAttribute("background-color",n),j(this,Qe).style.setProperty("--normal-bgc",n)}get textColor(){return this.getAttribute("text-color")||"#303133"}set textColor(n){this.setAttribute("text-color",n),j(this,Qe).style.setProperty("--normal-text-color",n)}get activeTextColor(){return this.getAttribute("active-text-color")||"#409eff"}set activeTextColor(n){this.setAttribute("active-text-color",n),j(this,Qe).style.setProperty("--actived-text-color",n)}get disabled(){return this.getAttrBoolean("disabled")}set disabled(n){this.setAttribute("disabled",n),j(this,Qe).classList.toggle("is-disabled",n)}connectedCallback(){this.actived=this.actived,this.disabled=this.disabled,j(this,Qe).addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("item-selected",{detail:{index:this.index,title:this.textContent}}))})}}Qe=new WeakMap;customElements.get("ea-menu-item")||customElements.define("ea-menu-item",Jf);const Pn=(e,t)=>{const n=e.__vccOpts||e;for(const[o,r]of t)n[o]=r;return n},Qf=["actived"],eu={__name:"MyRoute",props:{to:String},setup(e){const t=ea(),n={activeRoute:fo(t.path)||""};return Jt(t,o=>{n.activeRoute.value=o.path}),(o,r)=>(V(),K("ea-menu-item",{class:"rl-item",actived:n.activeRoute.value===e.to},[z(Ke(Ji),{to:e.to,activeClass:"active"},{default:Ie(()=>[Sl(o.$slots,"default",{},void 0,!0)]),_:3},8,["to"])],8,Qf))}},Ae=Pn(eu,[["__scopeId","data-v-62147355"]]),tu={__name:"Router",setup(e){return(t,n)=>(V(),K(Q,null,[z(Ae,{to:"/2DTransitions"},{default:Ie(()=>n[0]||(n[0]=[ke("Hover | 2D 过渡动画")])),_:1}),z(Ae,{to:"/backgroundTransitions"},{default:Ie(()=>n[1]||(n[1]=[ke(" Hover | 背景（background）过渡动画 ")])),_:1}),z(Ae,{to:"/borderTransitions"},{default:Ie(()=>n[2]||(n[2]=[ke("Hover | 边框（border）过渡动画")])),_:1}),z(Ae,{to:"/shadowAndGlowTransitions"},{default:Ie(()=>n[3]||(n[3]=[ke(" Hover | 阴影（box-shadow）过渡动画 ")])),_:1}),z(Ae,{to:"/speechBubbles"},{default:Ie(()=>n[4]||(n[4]=[ke("Hover | 气泡框过渡动画")])),_:1}),z(Ae,{to:"/curls"},{default:Ie(()=>n[5]||(n[5]=[ke("Hover | 折角过渡动画")])),_:1}),z(Ae,{to:"/attentionSeekers"},{default:Ie(()=>n[6]||(n[6]=[ke("Animate | 吸引眼球动画")])),_:1}),z(Ae,{to:"/backEntrancesAndBackExits"},{default:Ie(()=>n[7]||(n[7]=[ke("Animate | 后进后出动画")])),_:1}),z(Ae,{to:"/bouncingEntrancesAndBouncingExits"},{default:Ie(()=>n[8]||(n[8]=[ke(" Animate | 弹出弹入动画 ")])),_:1}),z(Ae,{to:"/fadeInAndFadeOut"},{default:Ie(()=>n[9]||(n[9]=[ke(" Animate | 淡入淡出动画 ")])),_:1}),z(Ae,{to:"/flippers"},{default:Ie(()=>n[10]||(n[10]=[ke(" Animate | 翻转动画 ")])),_:1}),z(Ae,{to:"/lightspeed"},{default:Ie(()=>n[11]||(n[11]=[ke(" Animate | 光速动画 ")])),_:1}),z(Ae,{to:"/rotatingEntrancesAndRotatingExits"},{default:Ie(()=>n[12]||(n[12]=[ke(" Animate | 旋转动画 ")])),_:1}),z(Ae,{to:"/specials"},{default:Ie(()=>n[13]||(n[13]=[ke(" Animate | 特殊效果 ")])),_:1}),z(Ae,{to:"/zoomingEntrancesAndZoomingExits"},{default:Ie(()=>n[14]||(n[14]=[ke(" Animate | 放大缩小动画 ")])),_:1}),z(Ae,{to:"/slidingEntrancesSlidingExits"},{default:Ie(()=>n[15]||(n[15]=[ke(" Animate | 滑入滑出动画 ")])),_:1})],64))}},nu=`
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
`;var Sn,to,na;class ou extends ot{constructor(){super();_e(this,to);_e(this,Sn);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <div class="ea-container_wrap" part="container">
                <slot></slot>
            </div>
        `,Ee(this,Sn,n.querySelector(".ea-container_wrap")),this.build(n,nu)}get CONTAINER_TYPE(){return["ea-header","ea-main","ea-footer","ea-container","ea-aside"]}get direction(){return["horizontal","vertical"].includes(this.getAttribute("direction"))||"horizontal"}set direction(n){this.setAttribute("direction",n),j(this,Sn).classList.toggle("is-vertical",n==="horizontal")}connectedCallback(){const n=Array.from(this.children);vo(this,to,na).call(this,n)}}Sn=new WeakMap,to=new WeakSet,na=function(n){const o=n.map(r=>r.tagName.toLowerCase());n.forEach(r=>{this.CONTAINER_TYPE.includes(r.tagName.toLowerCase())||r.remove(),r.tagName.toLowerCase()==="ea-container"&&(r.style.flex="1")}),o.includes("ea-header")||o.includes("ea-footer")?this.direction="horizontal":this.direction=this.direction};customElements.get("ea-container")||customElements.define("ea-container",ou);const ru=`
.ea-aside_wrap {
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
}
.ea-aside_wrap ::slotted(ea-main) {
  overflow: auto;
}
`;var Tn;class su extends ot{constructor(){super();_e(this,Tn);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <aside class="ea-aside_wrap" part="container">
                <slot></slot>
            </aside>
        `,Ee(this,Tn,n.querySelector(".ea-aside_wrap")),this.build(n,ru)}get width(){return this.getAttrNumber("width")||200}set width(n){this.setAttribute("width",n),j(this,Tn).style.width=`${n}px`}connectedCallback(){this.width=this.width}}Tn=new WeakMap;customElements.get("ea-aside")||customElements.define("ea-aside",su);const oa=(e,t=0)=>{let n=setTimeout(()=>{clearTimeout(n),n=null,e()},t)},Fo=e=>{e.actived=!1};function iu(e,t,n){e.forEach(Fo),t.forEach(Fo),n.forEach(Fo)}function au(e,t,n){e.forEach((o,r)=>{o.itemIndex=r,o.addEventListener("item-selected",s=>{const i=s.detail.title;iu(e,t,n),o.actived=!0,this.dispatchEvent(new CustomEvent("select",{detail:{index:r,title:i}}))})})}const lu=`
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
`,cu=`
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
`;var at,no,An;class fu extends ot{constructor(){super();_e(this,at);_e(this,no);_e(this,An);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <div class="ea-submenu_wrap" part="container">
                <div class="ea-submenu_title_wrap" part="title-wrap">
                    <slot name="title"></slot>
                    <ea-icon class="ea-submenu_dropdown_icon" icon="icon-angle-down" part="dropdown-icon"></ea-icon>
                </div>
                <div class="ea-submenu_items_wrap" part="dropdown-wrap">
                    <slot></slot>
                </div>
            </div>
        `,Ee(this,at,n.querySelector(".ea-submenu_wrap")),Ee(this,no,n.querySelector(".ea-submenu_title_wrap")),Ee(this,An,n.querySelector(".ea-submenu_items_wrap")),this.build(n,cu)}get actived(){return this.getAttrBoolean("actived")}set actived(n){this.setAttribute("actived",n),j(this,at).classList.toggle("is-actived",n)}get backgroundColor(){return this.getAttribute("background-color")||"#fff"}set backgroundColor(n){this.setAttribute("background-color",n),j(this,at).style.setProperty("--normal-bgc",n)}get textColor(){return this.getAttribute("text-color")||"#303133"}set textColor(n){this.setAttribute("text-color",n),j(this,at).style.setProperty("--normal-text-color",n)}get activeTextColor(){return this.getAttribute("active-text-color")||"#409eff"}set activeTextColor(n){this.setAttribute("active-text-color",n),j(this,at).style.setProperty("--actived-text-color",n)}get disabled(){return this.getAttrBoolean("disabled")}set disabled(n){this.setAttribute("disabled",n),j(this,at).classList.toggle("is-disabled",n)}get mode(){return this.getAttribute("mode")||"horizontal"}set mode(n){this.setAttribute("mode",n),j(this,at).classList.toggle("is-vertical",n==="vertical")}connectedCallback(){this.disabled=this.disabled,this.querySelectorAll("ea-menu-item").forEach((o,r)=>{o.isSubItem=!0,o.addEventListener("item-selected",s=>{this.actived=!0})}),oa(()=>{j(this,An).style.display="block"},20)}}at=new WeakMap,no=new WeakMap,An=new WeakMap;customElements.get("ea-submenu")||customElements.define("ea-submenu",fu);const uu=`
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
`;var gt,Cn,Qt;class du extends ot{constructor(){super();_e(this,gt);_e(this,Cn);_e(this,Qt);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <div class="ea-menu-item-group_wrap" part="container">
                <div class="ea-submenu_title_wrap" part="title-wrap">
                    <slot name="title"></slot>
                    <ea-icon class="ea-submenu_dropdown_icon" icon="icon-angle-down" part="dropdown-icon"></ea-icon>
                </div>
                <div class="ea-submenu_items_wrap" part="dropdown-wrap">
                    <slot></slot>
                </div>
            </div>
        `,Ee(this,gt,n.querySelector(".ea-menu-item-group_wrap")),Ee(this,Cn,n.querySelector(".ea-submenu_title_wrap")),Ee(this,Qt,n.querySelector(".ea-submenu_items_wrap")),this.build(n,uu)}get actived(){return this.getAttrBoolean("actived")}set actived(n){this.setAttribute("actived",n),j(this,gt).classList.toggle("is-actived",n)}get backgroundColor(){return this.getAttribute("background-color")||"#fff"}set backgroundColor(n){this.setAttribute("background-color",n),j(this,gt).style.setProperty("--normal-bgc",n)}get textColor(){return this.getAttribute("text-color")||"#303133"}set textColor(n){this.setAttribute("text-color",n),j(this,gt).style.setProperty("--normal-text-color",n)}get activeTextColor(){return this.getAttribute("active-text-color")||"#409eff"}set activeTextColor(n){this.setAttribute("active-text-color",n),j(this,gt).style.setProperty("--actived-text-color",n)}get collapse(){return this.getAttrBoolean("collapse")||!1}set collapse(n){this.setAttribute("collapse",n),j(this,Qt).style.height=n?j(this,Qt).scrollHeight+"px":"0",j(this,gt).classList.toggle("is-open",n)}connectedCallback(){this.style.width="100%",this.querySelectorAll("ea-menu-item").forEach(o=>{o.isSubItem=!0,o.addEventListener("item-selected",r=>{oa(()=>{this.actived=!0},20)})}),j(this,Cn).addEventListener("click",o=>{this.collapse=!this.collapse})}}gt=new WeakMap,Cn=new WeakMap,Qt=new WeakMap;customElements.get("ea-menu-item-group")||customElements.define("ea-menu-item-group",du);var en;class hu extends ot{constructor(){super();_e(this,en);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <div class="ea-menu_wrap" part="container">
                <slot></slot>
            </div>
        `,Ee(this,en,n.querySelector(".ea-menu_wrap")),this.build(n,lu)}get mode(){return this.getAttribute("mode")||"vertical"}set mode(n){this.setAttribute("mode",n),j(this,en).classList.toggle("is-vertical",n==="vertical"),this.querySelectorAll("ea-submenu").forEach(o=>{o.mode=n})}get backgroundColor(){return this.getAttribute("background-color")||"#fff"}set backgroundColor(n){this.setAttribute("background-color",n),j(this,en).style.backgroundColor=n}get textColor(){return this.getAttribute("text-color")||"#303133"}set textColor(n){this.setAttribute("text-color",n)}get activeTextColor(){return this.getAttribute("active-text-color")||"#409eff"}set activeTextColor(n){this.setAttribute("active-text-color",n)}get collapse(){return this.getAttrBoolean("collapse")}set collapse(n){this.toggleAttr("collapse",n),this.querySelectorAll("ea-menu-item-group").forEach(o=>{this.mode==="vertical"&&(o.collapse=!n)})}connectedCallback(){this.mode=this.mode,this.collapse=!0,this.backgroundColor=this.backgroundColor,this.textColor=this.textColor,this.activeTextColor=this.activeTextColor;const n=this.querySelectorAll("ea-menu-item"),o=this.querySelectorAll("ea-submenu"),r=this.querySelectorAll("ea-menu-item-group");au.call(this,n,o,r);const s=(i,a)=>{i.backgroundColor=this.backgroundColor,i.textColor=this.textColor,i.activeTextColor=this.activeTextColor};n.forEach(s),o.forEach(s),r.forEach(s)}}en=new WeakMap;customElements.get("ea-menu")||customElements.define("ea-menu",hu);const pu={width:"200"},mu={mode:"vertical"},gu={__name:"MyAside",setup(e){return(t,n)=>(V(),K("ea-aside",pu,[n[0]||(n[0]=ee("ea-header",{class:"aside-header"},[ee("div",{class:"logo"},[ee("img",{src:Gf,alt:""})]),ee("b",{class:"aside-title"},"ea-effects")],-1)),ee("ea-menu",mu,[z(tu)])]))}},bu=Pn(gu,[["__scopeId","data-v-56b791c4"]]),wu=`
.ea-header_wrap {
  box-sizing: border-box;
  padding: 0 20px;

  height: 60px;

  color: #333;

  overflow: hidden;
}
`;var tn;class yu extends ot{constructor(){super();_e(this,tn);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <header class="ea-header_wrap" part="container">
                <slot></slot>
            </header>
        `,Ee(this,tn,n.querySelector(".ea-header_wrap")),this.build(n,wu)}get height(){return this.getAttrNumber("height")||60}set height(n){this.setAttribute("height",n),j(this,tn).style.height=`${n}px`,j(this,tn).style.lineHeight=`${n}px`}connectedCallback(){this.height=this.height}}tn=new WeakMap;customElements.get("ea-header")||customElements.define("ea-header",yu);const _u=`
.ea-footer_wrap {
  box-sizing: border-box;
  padding: 0 20px;

  height: 60px;

  color: #333;

  overflow: hidden;
}
`;var nn;class vu extends ot{constructor(){super();_e(this,nn);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <footer class="ea-footer_wrap" part="container">
                <slot></slot>
            </footer>
        `,Ee(this,nn,n.querySelector(".ea-footer_wrap")),this.build(n,_u)}get height(){return this.getAttrNumber("height")||60}set height(n){this.setAttribute("height",n),j(this,nn).style.height=`${n}px`,j(this,nn).style.lineHeight=`${n}px`}connectedCallback(){this.height=this.height}}nn=new WeakMap;customElements.get("ea-footer")||customElements.define("ea-footer",vu);const xu=`
.ea-main_wrap {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 20px;
  overflow: auto;
  color: #333;
}
`;class Eu extends ot{constructor(){super();const t=this.attachShadow({mode:"open"});t.innerHTML=`
            <main class="ea-main_wrap" part="container">
                <slot></slot>
            </main>
        `,this.build(t,xu)}}customElements.get("ea-main")||customElements.define("ea-main",Eu);const ku={__name:"App",setup(e){let t=fo(!1);const n=ea();return Jt(n,()=>{t.value=!1}),(o,r)=>(V(),K("ea-container",{class:Dt(`container ${Ke(t)?"open":""}`),direction:"vertical"},[z(bu,{class:Dt("my-aside")}),ee("ea-container",null,[ee("ea-header",null,[ee("ea-icon",{icon:"icon-th-list",class:"toggle-aside-btn",onClick:r[0]||(r[0]=s=>Ne(t)?t.value=!Ke(t):t=!Ke(t))}),ee("section",{class:"mask",onClick:r[1]||(r[1]=s=>Ne(t)?t.value=!Ke(t):t=!Ke(t))})]),ee("ea-main",null,[z(Ke(Qi))])])],2))}},Ou=Pn(ku,[["__scopeId","data-v-d19ae1c7"]]);function Ru(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function ra(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(t=>{const n=e[t],o=typeof n;(o==="object"||o==="function")&&!Object.isFrozen(n)&&ra(n)}),e}class ks{constructor(t){t.data===void 0&&(t.data={}),this.data=t.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function sa(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function Ot(e,...t){const n=Object.create(null);for(const o in e)n[o]=e[o];return t.forEach(function(o){for(const r in o)n[r]=o[r]}),n}const Iu="</span>",Os=e=>!!e.scope,Nu=(e,{prefix:t})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const n=e.split(".");return[`${t}${n.shift()}`,...n.map((o,r)=>`${o}${"_".repeat(r+1)}`)].join(" ")}return`${t}${e}`};class Su{constructor(t,n){this.buffer="",this.classPrefix=n.classPrefix,t.walk(this)}addText(t){this.buffer+=sa(t)}openNode(t){if(!Os(t))return;const n=Nu(t.scope,{prefix:this.classPrefix});this.span(n)}closeNode(t){Os(t)&&(this.buffer+=Iu)}value(){return this.buffer}span(t){this.buffer+=`<span class="${t}">`}}const Rs=(e={})=>{const t={children:[]};return Object.assign(t,e),t};class kr{constructor(){this.rootNode=Rs(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(t){this.top.children.push(t)}openNode(t){const n=Rs({scope:t});this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(t){return this.constructor._walk(t,this.rootNode)}static _walk(t,n){return typeof n=="string"?t.addText(n):n.children&&(t.openNode(n),n.children.forEach(o=>this._walk(t,o)),t.closeNode(n)),t}static _collapse(t){typeof t!="string"&&t.children&&(t.children.every(n=>typeof n=="string")?t.children=[t.children.join("")]:t.children.forEach(n=>{kr._collapse(n)}))}}class Tu extends kr{constructor(t){super(),this.options=t}addText(t){t!==""&&this.add(t)}startScope(t){this.openNode(t)}endScope(){this.closeNode()}__addSublanguage(t,n){const o=t.root;n&&(o.scope=`language:${n}`),this.add(o)}toHTML(){return new Su(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function Rn(e){return e?typeof e=="string"?e:e.source:null}function ia(e){return Ht("(?=",e,")")}function Au(e){return Ht("(?:",e,")*")}function Cu(e){return Ht("(?:",e,")?")}function Ht(...e){return e.map(n=>Rn(n)).join("")}function Lu(e){const t=e[e.length-1];return typeof t=="object"&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}function Or(...e){return"("+(Lu(e).capture?"":"?:")+e.map(o=>Rn(o)).join("|")+")"}function aa(e){return new RegExp(e.toString()+"|").exec("").length-1}function Mu(e,t){const n=e&&e.exec(t);return n&&n.index===0}const Bu=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Rr(e,{joinWith:t}){let n=0;return e.map(o=>{n+=1;const r=n;let s=Rn(o),i="";for(;s.length>0;){const a=Bu.exec(s);if(!a){i+=s;break}i+=s.substring(0,a.index),s=s.substring(a.index+a[0].length),a[0][0]==="\\"&&a[1]?i+="\\"+String(Number(a[1])+r):(i+=a[0],a[0]==="("&&n++)}return i}).map(o=>`(${o})`).join(t)}const Pu=/\b\B/,la="[a-zA-Z]\\w*",Ir="[a-zA-Z_]\\w*",ca="\\b\\d+(\\.\\d+)?",fa="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",ua="\\b(0b[01]+)",Fu="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Du=(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=Ht(t,/.*\b/,e.binary,/\b.*/)),Ot({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(n,o)=>{n.index!==0&&o.ignoreMatch()}},e)},In={begin:"\\\\[\\s\\S]",relevance:0},zu={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[In]},$u={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[In]},Hu={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},wo=function(e,t,n={}){const o=Ot({scope:"comment",begin:e,end:t,contains:[]},n);o.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const r=Or("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return o.contains.push({begin:Ht(/[ ]+/,"(",r,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),o},Uu=wo("//","$"),Xu=wo("/\\*","\\*/"),ju=wo("#","$"),Yu={scope:"number",begin:ca,relevance:0},Vu={scope:"number",begin:fa,relevance:0},Ku={scope:"number",begin:ua,relevance:0},Gu={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[In,{begin:/\[/,end:/\]/,relevance:0,contains:[In]}]},Wu={scope:"title",begin:la,relevance:0},qu={scope:"title",begin:Ir,relevance:0},Zu={begin:"\\.\\s*"+Ir,relevance:0},Ju=function(e){return Object.assign(e,{"on:begin":(t,n)=>{n.data._beginMatch=t[1]},"on:end":(t,n)=>{n.data._beginMatch!==t[1]&&n.ignoreMatch()}})};var Xn=Object.freeze({__proto__:null,APOS_STRING_MODE:zu,BACKSLASH_ESCAPE:In,BINARY_NUMBER_MODE:Ku,BINARY_NUMBER_RE:ua,COMMENT:wo,C_BLOCK_COMMENT_MODE:Xu,C_LINE_COMMENT_MODE:Uu,C_NUMBER_MODE:Vu,C_NUMBER_RE:fa,END_SAME_AS_BEGIN:Ju,HASH_COMMENT_MODE:ju,IDENT_RE:la,MATCH_NOTHING_RE:Pu,METHOD_GUARD:Zu,NUMBER_MODE:Yu,NUMBER_RE:ca,PHRASAL_WORDS_MODE:Hu,QUOTE_STRING_MODE:$u,REGEXP_MODE:Gu,RE_STARTERS_RE:Fu,SHEBANG:Du,TITLE_MODE:Wu,UNDERSCORE_IDENT_RE:Ir,UNDERSCORE_TITLE_MODE:qu});function Qu(e,t){e.input[e.index-1]==="."&&t.ignoreMatch()}function ed(e,t){e.className!==void 0&&(e.scope=e.className,delete e.className)}function td(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=Qu,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function nd(e,t){Array.isArray(e.illegal)&&(e.illegal=Or(...e.illegal))}function od(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function rd(e,t){e.relevance===void 0&&(e.relevance=1)}const sd=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const n=Object.assign({},e);Object.keys(e).forEach(o=>{delete e[o]}),e.keywords=n.keywords,e.begin=Ht(n.beforeMatch,ia(n.begin)),e.starts={relevance:0,contains:[Object.assign(n,{endsParent:!0})]},e.relevance=0,delete n.beforeMatch},id=["of","and","for","in","not","or","if","then","parent","list","value"],ad="keyword";function da(e,t,n=ad){const o=Object.create(null);return typeof e=="string"?r(n,e.split(" ")):Array.isArray(e)?r(n,e):Object.keys(e).forEach(function(s){Object.assign(o,da(e[s],t,s))}),o;function r(s,i){t&&(i=i.map(a=>a.toLowerCase())),i.forEach(function(a){const l=a.split("|");o[l[0]]=[s,ld(l[0],l[1])]})}}function ld(e,t){return t?Number(t):cd(e)?0:1}function cd(e){return id.includes(e.toLowerCase())}const Is={},Ft=e=>{console.error(e)},Ns=(e,...t)=>{console.log(`WARN: ${e}`,...t)},Xt=(e,t)=>{Is[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),Is[`${e}/${t}`]=!0)},Qn=new Error;function ha(e,t,{key:n}){let o=0;const r=e[n],s={},i={};for(let a=1;a<=t.length;a++)i[a+o]=r[a],s[a+o]=!0,o+=aa(t[a-1]);e[n]=i,e[n]._emit=s,e[n]._multi=!0}function fd(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw Ft("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Qn;if(typeof e.beginScope!="object"||e.beginScope===null)throw Ft("beginScope must be object"),Qn;ha(e,e.begin,{key:"beginScope"}),e.begin=Rr(e.begin,{joinWith:""})}}function ud(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw Ft("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Qn;if(typeof e.endScope!="object"||e.endScope===null)throw Ft("endScope must be object"),Qn;ha(e,e.end,{key:"endScope"}),e.end=Rr(e.end,{joinWith:""})}}function dd(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function hd(e){dd(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),fd(e),ud(e)}function pd(e){function t(i,a){return new RegExp(Rn(i),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(a?"g":""))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(a,l){l.position=this.position++,this.matchIndexes[this.matchAt]=l,this.regexes.push([l,a]),this.matchAt+=aa(a)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const a=this.regexes.map(l=>l[1]);this.matcherRe=t(Rr(a,{joinWith:"|"}),!0),this.lastIndex=0}exec(a){this.matcherRe.lastIndex=this.lastIndex;const l=this.matcherRe.exec(a);if(!l)return null;const d=l.findIndex((h,p)=>p>0&&h!==void 0),f=this.matchIndexes[d];return l.splice(0,d),Object.assign(l,f)}}class o{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(a){if(this.multiRegexes[a])return this.multiRegexes[a];const l=new n;return this.rules.slice(a).forEach(([d,f])=>l.addRule(d,f)),l.compile(),this.multiRegexes[a]=l,l}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(a,l){this.rules.push([a,l]),l.type==="begin"&&this.count++}exec(a){const l=this.getMatcher(this.regexIndex);l.lastIndex=this.lastIndex;let d=l.exec(a);if(this.resumingScanAtSamePosition()&&!(d&&d.index===this.lastIndex)){const f=this.getMatcher(0);f.lastIndex=this.lastIndex+1,d=f.exec(a)}return d&&(this.regexIndex+=d.position+1,this.regexIndex===this.count&&this.considerAll()),d}}function r(i){const a=new o;return i.contains.forEach(l=>a.addRule(l.begin,{rule:l,type:"begin"})),i.terminatorEnd&&a.addRule(i.terminatorEnd,{type:"end"}),i.illegal&&a.addRule(i.illegal,{type:"illegal"}),a}function s(i,a){const l=i;if(i.isCompiled)return l;[ed,od,hd,sd].forEach(f=>f(i,a)),e.compilerExtensions.forEach(f=>f(i,a)),i.__beforeBegin=null,[td,nd,rd].forEach(f=>f(i,a)),i.isCompiled=!0;let d=null;return typeof i.keywords=="object"&&i.keywords.$pattern&&(i.keywords=Object.assign({},i.keywords),d=i.keywords.$pattern,delete i.keywords.$pattern),d=d||/\w+/,i.keywords&&(i.keywords=da(i.keywords,e.case_insensitive)),l.keywordPatternRe=t(d,!0),a&&(i.begin||(i.begin=/\B|\b/),l.beginRe=t(l.begin),!i.end&&!i.endsWithParent&&(i.end=/\B|\b/),i.end&&(l.endRe=t(l.end)),l.terminatorEnd=Rn(l.end)||"",i.endsWithParent&&a.terminatorEnd&&(l.terminatorEnd+=(i.end?"|":"")+a.terminatorEnd)),i.illegal&&(l.illegalRe=t(i.illegal)),i.contains||(i.contains=[]),i.contains=[].concat(...i.contains.map(function(f){return md(f==="self"?i:f)})),i.contains.forEach(function(f){s(f,l)}),i.starts&&s(i.starts,a),l.matcher=r(l),l}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=Ot(e.classNameAliases||{}),s(e)}function pa(e){return e?e.endsWithParent||pa(e.starts):!1}function md(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return Ot(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:pa(e)?Ot(e,{starts:e.starts?Ot(e.starts):null}):Object.isFrozen(e)?Ot(e):e}var gd="11.10.0";class bd extends Error{constructor(t,n){super(t),this.name="HTMLInjectionError",this.html=n}}const Do=sa,Ss=Ot,Ts=Symbol("nomatch"),wd=7,ma=function(e){const t=Object.create(null),n=Object.create(null),o=[];let r=!0;const s="Could not find the language '{}', did you forget to load/include a language module?",i={disableAutodetect:!0,name:"Plain text",contains:[]};let a={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:Tu};function l(w){return a.noHighlightRe.test(w)}function d(w){let R=w.className+" ";R+=w.parentNode?w.parentNode.className:"";const X=a.languageDetectRe.exec(R);if(X){const J=xe(X[1]);return J||(Ns(s.replace("{}",X[1])),Ns("Falling back to no-highlight mode for this block.",w)),J?X[1]:"no-highlight"}return R.split(/\s+/).find(J=>l(J)||xe(J))}function f(w,R,X){let J="",te="";typeof R=="object"?(J=w,X=R.ignoreIllegals,te=R.language):(Xt("10.7.0","highlight(lang, code, ...args) has been deprecated."),Xt("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),te=w,J=R),X===void 0&&(X=!0);const se={code:J,language:te};Xe("before:highlight",se);const Oe=se.result?se.result:h(se.language,se.code,X);return Oe.code=se.code,Xe("after:highlight",Oe),Oe}function h(w,R,X,J){const te=Object.create(null);function se(E,I){return E.keywords[I]}function Oe(){if(!_.keywords){O.addText(b);return}let E=0;_.keywordPatternRe.lastIndex=0;let I=_.keywordPatternRe.exec(b),C="";for(;I;){C+=b.substring(E,I.index);const q=x.case_insensitive?I[0].toLowerCase():I[0],oe=se(_,q);if(oe){const[ye,Fe]=oe;if(O.addText(C),C="",te[q]=(te[q]||0)+1,te[q]<=wd&&(U+=Fe),ye.startsWith("_"))C+=I[0];else{const At=x.classNameAliases[ye]||ye;ge(I[0],At)}}else C+=I[0];E=_.keywordPatternRe.lastIndex,I=_.keywordPatternRe.exec(b)}C+=b.substring(E),O.addText(C)}function Je(){if(b==="")return;let E=null;if(typeof _.subLanguage=="string"){if(!t[_.subLanguage]){O.addText(b);return}E=h(_.subLanguage,b,!0,N[_.subLanguage]),N[_.subLanguage]=E._top}else E=g(b,_.subLanguage.length?_.subLanguage:null);_.relevance>0&&(U+=E.relevance),O.__addSublanguage(E._emitter,E.language)}function Re(){_.subLanguage!=null?Je():Oe(),b=""}function ge(E,I){E!==""&&(O.startScope(I),O.addText(E),O.endScope())}function v(E,I){let C=1;const q=I.length-1;for(;C<=q;){if(!E._emit[C]){C++;continue}const oe=x.classNameAliases[E[C]]||E[C],ye=I[C];oe?ge(ye,oe):(b=ye,Oe(),b=""),C++}}function A(E,I){return E.scope&&typeof E.scope=="string"&&O.openNode(x.classNameAliases[E.scope]||E.scope),E.beginScope&&(E.beginScope._wrap?(ge(b,x.classNameAliases[E.beginScope._wrap]||E.beginScope._wrap),b=""):E.beginScope._multi&&(v(E.beginScope,I),b="")),_=Object.create(E,{parent:{value:_}}),_}function T(E,I,C){let q=Mu(E.endRe,C);if(q){if(E["on:end"]){const oe=new ks(E);E["on:end"](I,oe),oe.isMatchIgnored&&(q=!1)}if(q){for(;E.endsParent&&E.parent;)E=E.parent;return E}}if(E.endsWithParent)return T(E.parent,I,C)}function F(E){return _.matcher.regexIndex===0?(b+=E[0],1):(Y=!0,0)}function re(E){const I=E[0],C=E.rule,q=new ks(C),oe=[C.__beforeBegin,C["on:begin"]];for(const ye of oe)if(ye&&(ye(E,q),q.isMatchIgnored))return F(I);return C.skip?b+=I:(C.excludeBegin&&(b+=I),Re(),!C.returnBegin&&!C.excludeBegin&&(b=I)),A(C,E),C.returnBegin?0:I.length}function he(E){const I=E[0],C=R.substring(E.index),q=T(_,E,C);if(!q)return Ts;const oe=_;_.endScope&&_.endScope._wrap?(Re(),ge(I,_.endScope._wrap)):_.endScope&&_.endScope._multi?(Re(),v(_.endScope,E)):oe.skip?b+=I:(oe.returnEnd||oe.excludeEnd||(b+=I),Re(),oe.excludeEnd&&(b=I));do _.scope&&O.closeNode(),!_.skip&&!_.subLanguage&&(U+=_.relevance),_=_.parent;while(_!==q.parent);return q.starts&&A(q.starts,E),oe.returnEnd?0:I.length}function c(){const E=[];for(let I=_;I!==x;I=I.parent)I.scope&&E.unshift(I.scope);E.forEach(I=>O.openNode(I))}let u={};function m(E,I){const C=I&&I[0];if(b+=E,C==null)return Re(),0;if(u.type==="begin"&&I.type==="end"&&u.index===I.index&&C===""){if(b+=R.slice(I.index,I.index+1),!r){const q=new Error(`0 width match regex (${w})`);throw q.languageName=w,q.badRule=u.rule,q}return 1}if(u=I,I.type==="begin")return re(I);if(I.type==="illegal"&&!X){const q=new Error('Illegal lexeme "'+C+'" for mode "'+(_.scope||"<unnamed>")+'"');throw q.mode=_,q}else if(I.type==="end"){const q=he(I);if(q!==Ts)return q}if(I.type==="illegal"&&C==="")return 1;if(D>1e5&&D>I.index*3)throw new Error("potential infinite loop, way more iterations than matches");return b+=C,C.length}const x=xe(w);if(!x)throw Ft(s.replace("{}",w)),new Error('Unknown language: "'+w+'"');const y=pd(x);let k="",_=J||y;const N={},O=new a.__emitter(a);c();let b="",U=0,S=0,D=0,Y=!1;try{if(x.__emitTokens)x.__emitTokens(R,O);else{for(_.matcher.considerAll();;){D++,Y?Y=!1:_.matcher.considerAll(),_.matcher.lastIndex=S;const E=_.matcher.exec(R);if(!E)break;const I=R.substring(S,E.index),C=m(I,E);S=E.index+C}m(R.substring(S))}return O.finalize(),k=O.toHTML(),{language:w,value:k,relevance:U,illegal:!1,_emitter:O,_top:_}}catch(E){if(E.message&&E.message.includes("Illegal"))return{language:w,value:Do(R),illegal:!0,relevance:0,_illegalBy:{message:E.message,index:S,context:R.slice(S-100,S+100),mode:E.mode,resultSoFar:k},_emitter:O};if(r)return{language:w,value:Do(R),illegal:!1,relevance:0,errorRaised:E,_emitter:O,_top:_};throw E}}function p(w){const R={value:Do(w),illegal:!1,relevance:0,_top:i,_emitter:new a.__emitter(a)};return R._emitter.addText(w),R}function g(w,R){R=R||a.languages||Object.keys(t);const X=p(w),J=R.filter(xe).filter(Ue).map(Re=>h(Re,w,!1));J.unshift(X);const te=J.sort((Re,ge)=>{if(Re.relevance!==ge.relevance)return ge.relevance-Re.relevance;if(Re.language&&ge.language){if(xe(Re.language).supersetOf===ge.language)return 1;if(xe(ge.language).supersetOf===Re.language)return-1}return 0}),[se,Oe]=te,Je=se;return Je.secondBest=Oe,Je}function B(w,R,X){const J=R&&n[R]||X;w.classList.add("hljs"),w.classList.add(`language-${J}`)}function L(w){let R=null;const X=d(w);if(l(X))return;if(Xe("before:highlightElement",{el:w,language:X}),w.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",w);return}if(w.children.length>0&&(a.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(w)),a.throwUnescapedHTML))throw new bd("One of your code blocks includes unescaped HTML.",w.innerHTML);R=w;const J=R.textContent,te=X?f(J,{language:X,ignoreIllegals:!0}):g(J);w.innerHTML=te.value,w.dataset.highlighted="yes",B(w,X,te.language),w.result={language:te.language,re:te.relevance,relevance:te.relevance},te.secondBest&&(w.secondBest={language:te.secondBest.language,relevance:te.secondBest.relevance}),Xe("after:highlightElement",{el:w,result:te,text:J})}function G(w){a=Ss(a,w)}const H=()=>{M(),Xt("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function P(){M(),Xt("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let $=!1;function M(){if(document.readyState==="loading"){$=!0;return}document.querySelectorAll(a.cssSelector).forEach(L)}function ne(){$&&M()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",ne,!1);function de(w,R){let X=null;try{X=R(e)}catch(J){if(Ft("Language definition for '{}' could not be registered.".replace("{}",w)),r)Ft(J);else throw J;X=i}X.name||(X.name=w),t[w]=X,X.rawDefinition=R.bind(null,e),X.aliases&&Pe(X.aliases,{languageName:w})}function ce(w){delete t[w];for(const R of Object.keys(n))n[R]===w&&delete n[R]}function Be(){return Object.keys(t)}function xe(w){return w=(w||"").toLowerCase(),t[w]||t[n[w]]}function Pe(w,{languageName:R}){typeof w=="string"&&(w=[w]),w.forEach(X=>{n[X.toLowerCase()]=R})}function Ue(w){const R=xe(w);return R&&!R.disableAutodetect}function Ze(w){w["before:highlightBlock"]&&!w["before:highlightElement"]&&(w["before:highlightElement"]=R=>{w["before:highlightBlock"](Object.assign({block:R.el},R))}),w["after:highlightBlock"]&&!w["after:highlightElement"]&&(w["after:highlightElement"]=R=>{w["after:highlightBlock"](Object.assign({block:R.el},R))})}function He(w){Ze(w),o.push(w)}function dt(w){const R=o.indexOf(w);R!==-1&&o.splice(R,1)}function Xe(w,R){const X=w;o.forEach(function(J){J[X]&&J[X](R)})}function me(w){return Xt("10.7.0","highlightBlock will be removed entirely in v12.0"),Xt("10.7.0","Please use highlightElement now."),L(w)}Object.assign(e,{highlight:f,highlightAuto:g,highlightAll:M,highlightElement:L,highlightBlock:me,configure:G,initHighlighting:H,initHighlightingOnLoad:P,registerLanguage:de,unregisterLanguage:ce,listLanguages:Be,getLanguage:xe,registerAliases:Pe,autoDetection:Ue,inherit:Ss,addPlugin:He,removePlugin:dt}),e.debugMode=function(){r=!1},e.safeMode=function(){r=!0},e.versionString=gd,e.regex={concat:Ht,lookahead:ia,either:Or,optional:Cu,anyNumberOfTimes:Au};for(const w in Xn)typeof Xn[w]=="object"&&ra(Xn[w]);return Object.assign(e,Xn),e},ln=ma({});ln.newInstance=()=>ma({});var yd=ln;ln.HighlightJS=ln;ln.default=ln;const yo=Ru(yd),As="[A-Za-z$_][0-9A-Za-z$_]*",_d=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],vd=["true","false","null","undefined","NaN","Infinity"],ga=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],ba=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],wa=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],xd=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],Ed=[].concat(wa,ga,ba);function kd(e){const t=e.regex,n=(R,{after:X})=>{const J="</"+R[0].slice(1);return R.input.indexOf(J,X)!==-1},o=As,r={begin:"<>",end:"</>"},s=/<[A-Za-z0-9\\._:-]+\s*\/>/,i={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(R,X)=>{const J=R[0].length+R.index,te=R.input[J];if(te==="<"||te===","){X.ignoreMatch();return}te===">"&&(n(R,{after:J})||X.ignoreMatch());let se;const Oe=R.input.substring(J);if(se=Oe.match(/^\s*=/)){X.ignoreMatch();return}if((se=Oe.match(/^\s+extends\s+/))&&se.index===0){X.ignoreMatch();return}}},a={$pattern:As,keyword:_d,literal:vd,built_in:Ed,"variable.language":xd},l="[0-9](_?[0-9])*",d=`\\.(${l})`,f="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",h={className:"number",variants:[{begin:`(\\b(${f})((${d})|\\.)?|(${d}))[eE][+-]?(${l})\\b`},{begin:`\\b(${f})\\b((${d})\\b|\\.)?|(${d})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},p={className:"subst",begin:"\\$\\{",end:"\\}",keywords:a,contains:[]},g={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,p],subLanguage:"xml"}},B={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,p],subLanguage:"css"}},L={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,p],subLanguage:"graphql"}},G={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,p]},P={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:o+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},$=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,g,B,L,G,{match:/\$\d+/},h];p.contains=$.concat({begin:/\{/,end:/\}/,keywords:a,contains:["self"].concat($)});const M=[].concat(P,p.contains),ne=M.concat([{begin:/(\s*)\(/,end:/\)/,keywords:a,contains:["self"].concat(M)}]),de={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:ne},ce={variants:[{match:[/class/,/\s+/,o,/\s+/,/extends/,/\s+/,t.concat(o,"(",t.concat(/\./,o),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,o],scope:{1:"keyword",3:"title.class"}}]},Be={relevance:0,match:t.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...ga,...ba]}},xe={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},Pe={variants:[{match:[/function/,/\s+/,o,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[de],illegal:/%/},Ue={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function Ze(R){return t.concat("(?!",R.join("|"),")")}const He={match:t.concat(/\b/,Ze([...wa,"super","import"].map(R=>`${R}\\s*\\(`)),o,t.lookahead(/\s*\(/)),className:"title.function",relevance:0},dt={begin:t.concat(/\./,t.lookahead(t.concat(o,/(?![0-9A-Za-z$_(])/))),end:o,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},Xe={match:[/get|set/,/\s+/,o,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},de]},me="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",w={match:[/const|var|let/,/\s+/,o,/\s*/,/=\s*/,/(async\s*)?/,t.lookahead(me)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[de]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:a,exports:{PARAMS_CONTAINS:ne,CLASS_REFERENCE:Be},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),xe,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,g,B,L,G,P,{match:/\$\d+/},h,Be,{className:"attr",begin:o+t.lookahead(":"),relevance:0},w,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[P,e.REGEXP_MODE,{className:"function",begin:me,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:ne}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:r.begin,end:r.end},{match:s},{begin:i.begin,"on:begin":i.isTrulyOpeningTag,end:i.end}],subLanguage:"xml",contains:[{begin:i.begin,end:i.end,skip:!0,contains:["self"]}]}]},Pe,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[de,e.inherit(e.TITLE_MODE,{begin:o,className:"title.function"})]},{match:/\.\.\./,relevance:0},dt,{match:"\\$"+o,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[de]},He,Ue,ce,Xe,{match:/\$[(.]/}]}}const Od=e=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:e.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z_][A-Za-z0-9_-]*/}}),Rd=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","optgroup","option","p","picture","q","quote","samp","section","select","source","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],Id=["defs","g","marker","mask","pattern","svg","switch","symbol","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feGaussianBlur","feImage","feMerge","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","linearGradient","radialGradient","stop","circle","ellipse","image","line","path","polygon","polyline","rect","text","use","textPath","tspan","foreignObject","clipPath"],Nd=[...Rd,...Id],Sd=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"].sort().reverse(),Td=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"].sort().reverse(),Ad=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"].sort().reverse(),Cd=["accent-color","align-content","align-items","align-self","alignment-baseline","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","baseline-shift","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-end-end-radius","border-end-start-radius","border-right-color","border-right-style","border-right-width","border-spacing","border-start-end-radius","border-start-start-radius","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","cx","cy","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","color-scheme","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","empty-cells","enable-background","fill","fill-opacity","fill-rule","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","flood-color","flood-opacity","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-horizontal","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","inset","inset-block","inset-block-end","inset-block-start","inset-inline","inset-inline-end","inset-inline-start","isolation","kerning","justify-content","justify-items","justify-self","left","letter-spacing","lighting-color","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","marker","marker-end","marker-mid","marker-start","mask","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","r","resize","rest","rest-after","rest-before","right","rotate","row-gap","scale","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","shape-rendering","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","speak","speak-as","src","tab-size","table-layout","text-anchor","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip-ink","text-decoration-style","text-decoration-thickness","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-offset","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","translate","unicode-bidi","vector-effect","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","x","y","z-index"].sort().reverse();function Ld(e){const t=e.regex,n=Od(e),o={begin:/-(webkit|moz|ms|o)-(?=[a-z])/},r="and or not only",s=/@-?\w[\w]*(-\w+)*/,i="[a-zA-Z-][a-zA-Z0-9_-]*",a=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE];return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},classNameAliases:{keyframePosition:"selector-tag"},contains:[n.BLOCK_COMMENT,o,n.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{className:"selector-class",begin:"\\."+i,relevance:0},n.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{begin:":("+Td.join("|")+")"},{begin:":(:)?("+Ad.join("|")+")"}]},n.CSS_VARIABLE,{className:"attribute",begin:"\\b("+Cd.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,contains:[n.BLOCK_COMMENT,n.HEXCOLOR,n.IMPORTANT,n.CSS_NUMBER_MODE,...a,{begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"},contains:[...a,{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]},n.FUNCTION_DISPATCH]},{begin:t.lookahead(/@/),end:"[{;]",relevance:0,illegal:/:/,contains:[{className:"keyword",begin:s},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:r,attribute:Sd.join(" ")},contains:[{begin:/[a-z-]+(?=:)/,className:"attribute"},...a,n.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"\\b("+Nd.join("|")+")\\b"}]}}function Md(e){return{name:"VBScript in HTML",subLanguage:"xml",contains:[{begin:"<%",end:"%>",subLanguage:"vbscript"}]}}yo.registerLanguage("javascript",kd);yo.registerLanguage("css",Ld);yo.registerLanguage("html",Md);const Bd={name:"CodeBlock",props:{code:{type:String,required:!0},type:{type:String,default:"css"}},mounted(){this.highlightCode()},methods:{highlightCode(){const e=this.$refs.codeBlock;yo.highlightElement(e)}}};function Pd(e,t,n,o,r,s){return V(),K("pre",null,[t[0]||(t[0]=ke("        ")),ee("code",{ref:"codeBlock",class:Dt(`code language-${n.type}`)},`
            `+Kn(n.code)+`
        `,3),t[1]||(t[1]=ke(`
    `))])}const Fd=Pn(Bd,[["render",Pd]]),Dd=`
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
`;var Ln;class zd extends ot{constructor(){super();_e(this,Ln);const n=this.attachShadow({mode:"open"});n.innerHTML=`
      <div class="ea-card_wrap" part="container">
        <div class="ea-card_header" part="header-wrap">
          <slot name="header"></slot>
        </div>
        <div class="ea-card_content" part="content-wrap">
          <slot></slot>
        </div>
      </div>
    `,Ee(this,Ln,n.querySelector(".ea-card_wrap")),this.build(n,Dd)}get shadow(){return this.getAttribute("shadow")||"always"}set shadow(n){this.setAttribute("shadow",n),j(this,Ln).classList.add(`is-${n}-shadow`)}connectedCallback(){this.shadow=this.shadow}}Ln=new WeakMap;customElements.get("ea-card")||customElements.define("ea-card",zd);const $d={name:"SgCard",components:{CodeBlock:Fd},props:{title:{type:String,default:"Card"},code:{type:String,default:""},className:{type:String,default:""},hasButton:{type:Boolean,default:!1}},setup(e){let t=fo(e.hasButton);const n=We(()=>({[e.className]:t.value?"":e.className,box:!0}));return{isAnimated:t,animateClassName:n,toggleClass:s=>{t.value=!1},animationend:()=>{t.value=!0}}}},Hd={class:"sg-card"},Ud={shadow:"hover"},Xd={slot:"header",class:"header"};function jd(e,t,n,o,r,s){const i=Rl("CodeBlock");return V(),K("div",Hd,[ee("ea-card",Ud,[ee("div",Xd,[ee("span",null,Kn(n.title),1),n.hasButton?(V(),K("ea-button",{key:0,onClick:t[0]||(t[0]=(...a)=>o.toggleClass&&o.toggleClass(...a))}," 点击执行动画 ")):ac("",!0)]),ee("span",{class:Dt(o.animateClassName),onAnimationend:t[1]||(t[1]=(...a)=>o.animationend&&o.animationend(...a))},Kn(n.title),35),z(i,{code:n.code},null,8,["code"])])])}const we=Pn($d,[["render",jd]]),Yd={class:"part"},Vd={__name:"index",setup(e){const t={};return Object.assign(t,{grow:{title:"放大",className:"grow",code:`
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
    `}}),(n,o)=>(V(),K("section",Yd,[(V(),K(Q,null,be(t,(r,s)=>z(we,{key:s,title:r.title,code:r.code,className:r.className},null,8,["title","code","className"])),64))]))}},Kd={class:"part"},Gd={__name:"index",setup(e){const t={};return Object.assign(t,{fill:{title:"填充",className:"fill",code:`
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
`}}),(n,o)=>(V(),K("section",Kd,[(V(),K(Q,null,be(t,(r,s)=>z(we,{key:s,title:r.title,code:r.code,className:r.className},null,8,["title","code","className"])),64))]))}},Wd={class:"part"},qd={__name:"index",setup(e){const t={};return Object.assign(t,{borderFade:{title:"填充",className:"borderFade",code:`
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
`}}),(n,o)=>(V(),K("section",Wd,[(V(),K(Q,null,be(t,(r,s)=>z(we,{key:s,title:r.title,code:r.code,className:r.className},null,8,["title","code","className"])),64))]))}},Zd={class:"part"},Jd={__name:"index",setup(e){const t={};return Object.assign(t,{shadow:{title:"阴影",className:"shadow",code:`
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
`}}),(n,o)=>(V(),K("section",Zd,[(V(),K(Q,null,be(t,(r,s)=>z(we,{key:s,title:r.title,code:r.code,className:r.className},null,8,["title","code","className"])),64))]))}},Qd={class:"part"},eh={__name:"index",setup(e){const t={};return Object.assign(t,{bubbleTop:{title:"气泡-上方",className:"bubbleTop",code:`
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
`}}),(n,o)=>(V(),K("section",Qd,[(V(),K(Q,null,be(t,(r,s)=>z(we,{key:s,title:r.title,code:r.code,className:r.className},null,8,["title","code","className"])),64))]))}},th={class:"part"},nh={__name:"index",setup(e){const t={};return Object.assign(t,{curlTopLeft:{title:"折角-左上方",className:"curlTopLeft",code:`
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
`}}),(n,o)=>(V(),K("section",th,[(V(),K(Q,null,be(t,(r,s)=>z(we,{key:s,title:r.title,code:r.code,className:r.className},null,8,["title","code","className"])),64))]))}},oh={class:"part"},rh={__name:"index",setup(e){const t={};return Object.assign(t,{bounce:{title:"跳跃",className:"bounce",code:`
.bounce:hover {
    animation: bounce .75s;
}

@keyframes bounce {
    0% {
        transform: translateY(-40%);
    }

    20% {
        transform: translateY(0%);
    }

    40% {
        transform: translateY(-20%);
    }

    60% {
        transform: translateY(0%);
    }

    80% {
        transform: translateY(-10%);
    }

}
`},flash:{title:"闪烁",className:"flash",code:`
.flash:hover {
    animation: flash 1s;
}

@keyframes flash {
    25% {
        filter: opacity(0);
    }

    50% {
        filter: opacity(1);
    }

    75% {
        filter: opacity(0);
    }
}
`},rubberBand:{title:"橡皮筋",className:"rubberBand",code:`
.rubberBand:hover {
    animation: rubberBand 1s;
}

@keyframes rubberBand {
    16% {
        transform: scaleX(1.6) scaleY(0.6);
    }

    32% {
        transform: scaleX(1) scaleY(1);
    }

    48% {
        transform: scaleX(1.5) scaleY(0.7);
    }

    64% {
        transform: scaleX(1) scaleY(1);
    }

    80% {
        transform: scaleX(1.2) scaleY(0.9);
    }

    100% {
        transform: scaleX(1) scaleY(1);
    }
}
`},shakeX:{title:"抖动-水平",className:"shakeX",code:`
.shakeX:hover {
    animation: shakeX 1s;
}

@keyframes shakeX {
    12.5% {
        transform: translateX(-10%);
    }

    25% {
        transform: translateX(10%);
    }

    37.5% {
        transform: translateX(-10%);
    }

    50% {
        transform: translateX(10%);
    }

    62.5% {
        transform: translateX(-10%);
    }

    75% {
        transform: translateX(10%);
    }

    87.5% {
        transform: translateX(-10%);
    }
}
`},shakeY:{title:"抖动-垂直",className:"shakeY",code:`
.shakeY:hover {
    animation: shakeY 1s;
}

@keyframes shakeY {
    12.5% {
        transform: translateY(-15%);
    }

    25% {
        transform: translateY(15%);
    }

    37.5% {
        transform: translateY(-15%);
    }

    50% {
        transform: translateY(15%);
    }

    62.5% {
        transform: translateY(-15%);
    }

    75% {
        transform: translateY(15%);
    }

    87.5% {
        transform: translateY(-15%);
    }
}
`},headShake:{title:"摇头",className:"headShake",code:`
.headShake:hover {
    animation: headShake .5s;
}

@keyframes headShake {
    25% {
        transform: translateX(-10%);
    }

    50% {
        transform: translateX(5%);
    }

    75% {
        transform: translateX(-2.5%);
    }
}
`},swing:{title:"秋千摆",className:"swing",code:`
.swing:hover {
    transform-origin: center top;
    animation: swing .75s ease-out;
}

@keyframes swing {
    20% {
        transform: rotate(-30deg);
    }

    40% {
        transform: rotate(22.5deg);
    }

    60% {
        transform: rotate(-15deg);
    }

    80% {
        transform: rotate(7.5deg);
    }
}
`},tada:{title:"tada🎉",className:"tada",code:`
.tada:hover {
    animation: tada 1s;
}

@keyframes tada {
    25% {
        transform: rotate(-15deg);
    }

    30% {
        transform: rotate(-15deg);
    }

    40% {
        transform: rotate(0deg) scale(1.3);
    }

    50% {
        transform: rotate(10deg) scale(1.3);
    }

    60% {
        transform: rotate(-10deg) scale(1.3);
    }

    70% {
        transform: rotate(10deg) scale(1.3);
    }

    80% {
        transform: rotate(-10deg) scale(1.3);
    }

    90% {
        transform: rotate(10deg) scale(1.3);
    }
}
`},wobble:{title:"摇晃",className:"wobble",code:`
.wobble:hover {
    animation: wobble 1s;
}

@keyframes wobble {

    14% {
        transform: rotate(-10deg) translateX(-30%);
    }

    28% {
        transform: rotate(10deg) translateX(30%);
    }

    42% {
        transform: rotate(-10deg) translateX(-30%);
    }

    56% {
        transform: rotate(10deg) translateX(30%);
    }

    70% {
        transform: rotate(-10deg) translateX(-30%);
    }

    84% {
        transform: rotate(10deg) translateX(30%);
    }
}
`},jello:{title:"果冻",className:"jello",code:`
.jello:hover {
    transform-origin: center top;
    animation: jello .75s;
}

@keyframes jello {

    20% {
        transform: skew(-20deg) rotate(-20deg);
    }

    40% {
        transform: skew(10deg) rotate(10deg);
    }

    60% {
        transform: skew(-5deg) rotate(-5deg);
    }

    80% {
        transform: skew(2.5deg) rotate(2.5deg);
    }
}
`}}),(n,o)=>(V(),K("section",oh,[(V(),K(Q,null,be(t,(r,s)=>z(we,{key:s,title:r.title,code:r.code,className:r.className},null,8,["title","code","className"])),64))]))}},sh=`
<button class="ea-button" part="container">
    <slot></slot>
</button>
`,ih=`
<a class="ea-button" part="container">
    <slot></slot>
</a>
`,ah=`
:host {
  --border-radius: 6px;
}

.ea-button {
  box-sizing: border-box;
  padding: 0.5rem;
  border-radius: var(--border-radius);
  cursor: pointer;
  font-size: 1rem;
  line-height: 1.25;
  font-weight: 500;
  transition: background-color 0.1s, color 0.1s;
  text-decoration: none;
  will-change: width;
}
.ea-button.normal {
  border: 1px solid #dcdfe6;
  color: #606266;
  background-color: transparent;
}
.ea-button.normal.disabled {
  background-color: rgba(64, 64, 64, 0) !important;
  border-color: white !important;
  color: white !important;
  pointer-events: none;
  border-color: #ebedf1 !important;
  color: #babcbe !important;
}
.ea-button.normal.plain {
  background-color: rgba(92, 92, 92, 0);
  border-color: white;
  color: transparent;
  background-color: transparent;
  color: #606266;
  border-color: #dcdfe6;
}
.ea-button.normal.plain:hover {
  background-color: transparent;
}
.ea-button.normal:hover {
  border-color: rgba(160, 207, 255, 0.4);
  color: #3a9bff;
  background-color: rgba(160, 207, 255, 0.05);
}
.ea-button.normal:active {
  background-color: rgba(7, 130, 255, 0.05);
}
.ea-button.primary {
  border: 1px solid #409eff;
  color: #fff;
  background-color: #409eff;
}
.ea-button.primary.disabled {
  background-color: #c0dfff !important;
  border-color: #c0dfff !important;
  color: white !important;
  pointer-events: none;
}
.ea-button.primary.plain {
  background-color: #f8fbff;
  border-color: #c0dfff;
  color: #409eff;
}
.ea-button.primary:hover {
  border-color: #73b8ff;
  color: white;
  background-color: #73b8ff;
}
.ea-button.primary:active {
  background-color: #006bd9;
}
.ea-button.success {
  border: 1px solid #67c23a;
  color: #fff;
  background-color: #67c23a;
}
.ea-button.success.disabled {
  background-color: #b2e19b !important;
  border-color: #b2e19b !important;
  color: white !important;
  pointer-events: none;
}
.ea-button.success.plain {
  background-color: #d3eec6;
  border-color: #b2e19b;
  color: #67c23a;
}
.ea-button.success:hover {
  border-color: #85cf60;
  color: white;
  background-color: #85cf60;
}
.ea-button.success:active {
  background-color: #3d7323;
}
.ea-button.info {
  border: 1px solid #909399;
  color: #fff;
  background-color: #909399;
}
.ea-button.info.disabled {
  background-color: #d2d4d6 !important;
  border-color: #d2d4d6 !important;
  color: white !important;
  pointer-events: none;
}
.ea-button.info.plain {
  background-color: #f0f0f1;
  border-color: #d2d4d6;
  color: #909399;
}
.ea-button.info:hover {
  border-color: #abadb1;
  color: white;
  background-color: #abadb1;
}
.ea-button.info:active {
  background-color: #5d6066;
}
.ea-button.warning {
  border: 1px solid #e6a23c;
  color: #fff;
  background-color: #e6a23c;
}
.ea-button.warning.disabled {
  background-color: #f4d8ad !important;
  border-color: #f4d8ad !important;
  color: white !important;
  pointer-events: none;
}
.ea-button.warning.plain {
  background-color: #fbf0df;
  border-color: #f4d8ad;
  color: #e6a23c;
}
.ea-button.warning:hover {
  border-color: #ecb869;
  color: white;
  background-color: #ecb869;
}
.ea-button.warning:active {
  background-color: #a76d15;
}
.ea-button.danger {
  border: 1px solid #f56c6c;
  color: #fff;
  background-color: #f56c6c;
}
.ea-button.danger.disabled {
  background-color: #fde3e3 !important;
  border-color: #fde3e3 !important;
  color: white !important;
  pointer-events: none;
}
.ea-button.danger.plain {
  background-color: white;
  border-color: #fde3e3;
  color: #f56c6c;
  background-color: #fde8e8;
}
.ea-button.danger:hover {
  border-color: #f89c9c;
  color: white;
  background-color: #f89c9c;
}
.ea-button.danger:active {
  background-color: #eb1010;
}
.ea-button.text {
  border: 1px solid transparent;
  color: #409eff;
  background-color: transparent;
}
.ea-button.text.disabled {
  background-color: rgba(64, 64, 64, 0) !important;
  border-color: rgba(64, 64, 64, 0) !important;
  color: white !important;
  pointer-events: none;
  color: #c0c4cc !important;
}
.ea-button.text.plain {
  background-color: rgba(92, 92, 92, 0);
  border-color: rgba(64, 64, 64, 0);
  color: transparent;
}
.ea-button.text:hover {
  border-color: rgba(26, 26, 26, 0);
  color: #73b8ff;
  background-color: rgba(26, 26, 26, 0);
}
.ea-button.text:active {
  background-color: rgba(0, 0, 0, 0);
}
.ea-button.round {
  border-radius: 999px;
}
.ea-button.medium {
  font-size: 14px;
}
.ea-button.small {
  font-size: 12px;
}
.ea-button.mini {
  font-size: 10px;
}
`;var on,Se;class lh extends ot{constructor(){super();_e(this,on,"button");_e(this,Se);const n=this.attachShadow({mode:"open"});this.getAttribute("href")?(n.innerHTML=ih,Ee(this,on,"a")):(n.innerHTML=sh,Ee(this,on,"button")),Ee(this,Se,n.querySelector(".ea-button")),this.build(n,ah)}get BUTTON_STYLE(){return["plain","round"]}get BUTTON_TYPE(){return["normal","primary","success","warning","danger","text"]}get BUTTON_SIZE(){return["medium","small","mini"]}get disabled(){return this.getAttrBoolean("disabled")}set disabled(n){this.toggleAttr("disabled",n),j(this,Se).classList.toggle("disabled",n),this.style.cursor=n?"not-allowed":"pointer",n&&j(this,Se).setAttribute("disabled",n)}get plain(){return this.getAttrBoolean("plain")}set plain(n){this.toggleAttr("plain",n),j(this,Se).classList.toggle("plain",n)}get round(){return this.getAttrBoolean("round")}set round(n){this.toggleAttr("round",n),j(this,Se).classList.toggle("round",n)}get type(){const n=this.getAttribute("type");return this.BUTTON_TYPE.includes(n)?n:"normal"}set type(n){this.setAttribute("type",n),j(this,Se).classList.add(n)}get size(){const n=this.getAttribute("size");return this.BUTTON_SIZE.includes(n)?n:"medium"}set size(n){this.toggleAttr("size",n),j(this,Se).classList.add(n)}get loading(){return this.getAttrBoolean("loading")}set loading(n){var o;if(this.toggleAttr("loading",n),this.disabled=n,n){const r=document.createElement("ea-icon");r.id="ea-loading-icon",r.icon="icon-spin6 animate-spin",j(this,Se).insertBefore(r,j(this,Se).firstChild)}else{const r=(o=j(this,Se))==null?void 0:o.querySelectorAll("#ea-loading-icon");(r==null?void 0:r.length)>0&&(r==null||r.forEach(s=>s.remove()))}}get icon(){return this.getAttribute("icon")||""}set icon(n){if(this.setAttribute("icon",n),n&&!j(this,Se).querySelector("ea-icon")){const o=document.createElement("ea-icon");o.icon=n,o.part="icon",j(this,Se).insertBefore(o,j(this,Se).firstChild)}}get href(){return this.getAttribute("href")||""}set href(n){j(this,on)!=="button"&&(this.setAttribute("href",n),j(this,Se).setAttribute("href",n))}connectedCallback(){this.plain=this.plain,this.round=this.round,this.type=this.type,this.size=this.size,this.icon=this.icon,this.disabled=this.disabled,this.href=this.href,this.loading&&(this.loading=this.loading)}}on=new WeakMap,Se=new WeakMap;window.customElements.get("ea-button")||window.customElements.define("ea-button",lh);const ch={class:"part"},fh={class:"part"},uh={__name:"index",setup(e){const t={backInTop:{title:"从上出现",className:"backInTop",code:`
.backInTop {
    animation: backInTop .75s;
}

@keyframes backInTop {
    0% {
        transform: translate(0, -100%) scale(0.6);
    }

    50% {
        transform: translate(0, 0) scale(0.6);
    }

    100% {
        transform: translate(0, 0)scale(1);
    }
}
`},backInLeft:{title:"从左出现",className:"backInLeft",code:`
.backInLeft {
    animation: backInLeft .75s;
}

@keyframes backInLeft {
    0% {
        transform: translate(-100%, 0) scale(0.6);
    }

    50% {
        transform: translate(0, 0) scale(0.6);
    }

    100% {
        transform: translate(0, 0)scale(1);
    }
}
`},backInBottom:{title:"从下出现",className:"backInBottom",code:`
.backInBottom {
    animation: backInBottom .75s;
}

@keyframes backInBottom {
    0% {
        transform: translate(0, 100%) scale(0.6);
    }

    50% {
        transform: translate(0, 0) scale(0.6);
    }

    100% {
        transform: translate(0, 0)scale(1);
    }
}
`},backInRight:{title:"从右出现",className:"backInRight",code:`
.backInRight {
    animation: backInRight .75s;
}

@keyframes backInRight {
    0% {
        transform: translate(100%, 0) scale(0.6);
    }

    50% {
        transform: translate(0, 0) scale(0.6);
    }

    100% {
        transform: translate(0, 0)scale(1);
    }
}
`}},n={backOutTop:{title:"从上退出",className:"backOutTop",code:`
.backOutTop {
    animation: backOutTop .75s;
}

@keyframes backOutTop {
    0% {
        transform: translate(0, 0);
    }

    50% {
        transform: translate(0, 0) scale(0.6);
    }

    100% {
        transform: translate(0, -100%) scale(0.6);
    }
}
`},backOutLeft:{title:"从左退出",className:"backOutLeft",code:`
.backOutLeft {
    animation: backOutLeft .75s;
}

@keyframes backOutLeft {
    0% {
        transform: translate(0, 0)scale(1);
    }

    50% {
        transform: translate(0, 0) scale(0.6);
    }

    100% {
        transform: translate(-100%, 0) scale(0.6);
    }
}
`},backOutBottom:{title:"从下退出",className:"backOutBottom",code:`
.backOutBottom {
    animation: backOutBottom .75s;
}

@keyframes backOutBottom {
    0% {
        transform: translate(0, 0)scale(1);
    }

    50% {
        transform: translate(0, 0) scale(0.6);
    }

    100% {
        transform: translate(0, 100%) scale(0.6);
    }
}
`},backOutRight:{title:"从右退出",className:"backOutRight",code:`
.backInRight {
    animation: backInRight .75s;
}

@keyframes backInRight {
    0% {
        transform: translate(100%, 0) scale(0.6);
    }

    50% {
        transform: translate(0, 0) scale(0.6);
    }

    100% {
        transform: translate(0, 0)scale(1);
    }
}
`}};return(o,r)=>(V(),K(Q,null,[r[0]||(r[0]=ee("h2",null,"从后面进入",-1)),ee("section",ch,[(V(),K(Q,null,be(t,(s,i)=>z(we,{key:i,title:s.title,code:s.code,className:s.className,hasButton:!0},null,8,["title","code","className"])),64))]),r[1]||(r[1]=ee("h2",null,"从后面退出",-1)),ee("section",fh,[(V(),K(Q,null,be(n,(s,i)=>z(we,{key:i,title:s.title,code:s.code,className:s.className,hasButton:!0},null,8,["title","code","className"])),64))])],64))}},dh={class:"part"},hh={class:"part"},ph={__name:"index",setup(e){const t={bounceIn:{title:"弹跳出现",className:"bounceIn",code:`
.bounceIn {
    animation: bounceIn .75s;
}

@keyframes bounceIn {
    0% {
        filter: opacity(0);
        transform: scale(1.3);
    }

    20% {
        transform: scale(1);
    }

    40% {
        transform: scale(1.2);
    }

    60% {
        transform: scale(1);
    }

    80% {
        transform: scale(1.1);
    }
}
`},bounceInDown:{title:"弹跳出现-从上方",className:"bounceInDown",code:`
.bounceInDown {
    animation: bounceInDown .75s;
}

@keyframes bounceInDown {
    0% {
        transform: translateY(-500%);
    }

    20% {
        transform: scale(1) translateY(20%);
    }

    40% {
        transform: scale(1.2);
    }

    60% {
        transform: scale(1);
    }

    80% {
        transform: scale(1.1);
    }
}
`},bounceInLeft:{title:"弹跳出现-从左方",className:"bounceInLeft",code:`
.bounceInLeft {
    animation: bounceInLeft .75s;
}

@keyframes bounceInLeft {
    0% {
        transform: translateX(-500%);
    }

    20% {
        transform: scale(1) translateX(20%);
    }

    40% {
        transform: scale(1.2);
    }

    60% {
        transform: scale(1);
    }

    80% {
        transform: scale(1.1);
    }
}
`},bounceInTop:{title:"弹跳出现-从下方",className:"bounceInTop",code:`
.bounceInTop {
    animation: bounceInTop .75s;
}

@keyframes bounceInTop {
    0% {
        transform: translateY(500%);
    }

    20% {
        transform: scale(1) translateY(-20%);
    }

    40% {
        transform: scale(1.2);
    }

    60% {
        transform: scale(1);
    }

    80% {
        transform: scale(1.1);
    }
}
`},bounceInRight:{title:"弹跳出现-从右方",className:"bounceInRight",code:`
.bounceInRight {
    animation: bounceInRight .75s;
}

@keyframes bounceInRight {
    0% {
        transform: translateX(500%);
    }

    20% {
        transform: scale(1) translateX(-20%);
    }

    40% {
        transform: scale(1.2);
    }

    60% {
        transform: scale(1);
    }

    80% {
        transform: scale(1.1);
    }
}
`}},n={bounceInRight:{title:"弹跳出现-从右方",className:"bounceInRight",code:`
.bounceInRight {
    animation: bounceInRight .75s;
}

@keyframes bounceInRight {
    0% {
        transform: translateX(500%);
    }

    20% {
        transform: scale(1) translateX(-20%);
    }

    40% {
        transform: scale(1.2);
    }

    60% {
        transform: scale(1);
    }

    80% {
        transform: scale(1.1);
    }
}
`},bounceOut:{title:"弹跳退出",className:"bounceOut",code:`
.bounceOut {
    animation: bounceOut .75s;
}

@keyframes bounceOut {

    20% {
        transform: scale(1);
    }

    40% {
        transform: scale(0.7);
    }

    60% {
        transform: scale(1);
    }

    80% {
        transform: scale(0.6);
    }

    100% {
        transform: scale(0);
    }
}
`},bounceOutDown:{title:"弹跳退出-从上方",className:"bounceOutDown",code:`
.bounceOutDown {
    animation: bounceOutDown .75s;
}

@keyframes bounceOutDown {
    20% {
        transform: translateY(20%);
    }

    40% {
        transform: translateY(-10%);
    }

    60% {
        transform: translateY(10%);
    }

    100% {
        transform: translateY(-500%);
    }
}
`},bounceOutLeft:{title:"弹跳退出-从左方",className:"bounceOutLeft",code:`
.bounceOutLeft {
    animation: bounceOutLeft .75s;
}

@keyframes bounceOutLeft {
    20% {
        transform: translateX(-20%);
    }

    40% {
        transform: translateX(10%);
    }

    60% {
        transform: translateX(-10%);
    }

    100% {
        transform: translateX(-500%);
    }
}
`},bounceOutUp:{title:"弹跳退出-从下方",className:"bounceOutUp",code:`
.bounceOutUp {
    animation: bounceOutUp .75s;
}

@keyframes bounceOutUp {
    20% {
        transform: translateY(20%);
    }

    40% {
        transform: translateY(-10%);
    }

    60% {
        transform: translateY(10%);
    }

    100% {
        transform: translateY(500%);
    }
}
`},bounceOutRight:{title:"弹跳退出-从右方",className:"bounceOutRight",code:`
.bounceOutRight {
    animation: bounceOutRight .75s;
}

@keyframes bounceOutRight {
    20% {
        transform: translateX(20%);
    }

    40% {
        transform: translateX(-10%);
    }

    60% {
        transform: translateX(10%);
    }

    100% {
        transform: translateX(500%);
    }
}
`}};return(o,r)=>(V(),K(Q,null,[r[0]||(r[0]=ee("h2",null,"弹跳进入",-1)),ee("section",dh,[(V(),K(Q,null,be(t,(s,i)=>z(we,{key:i,title:s.title,code:s.code,className:s.className,hasButton:!0},null,8,["title","code","className"])),64))]),r[1]||(r[1]=ee("h2",null,"弹跳退出",-1)),ee("section",hh,[(V(),K(Q,null,be(n,(s,i)=>z(we,{key:i,title:s.title,code:s.code,className:s.className,hasButton:!0},null,8,["title","code","className"])),64))])],64))}},mh={class:"part"},gh={class:"part"},bh={__name:"index",setup(e){const t={fadeIn:{title:"淡入",className:"fadeIn",code:`
.fadeIn {
    animation: fadeIn .75s;
}

@keyframes fadeIn {
    from {
        filter: opacity(0);
    }
}
`},fadeInDown:{title:"淡入-从上进入",className:"fadeInDown",code:`
.fadeInDown {
    animation: fadeInDown .75s;
}

@keyframes fadeInDown {
    from {
        filter: opacity(0);
        transform: translateY(-50%);
    }
}
`},fadeInLeft:{title:"淡入-从左进入",className:"fadeInLeft",code:`
.fadeInLeft {
    animation: fadeInLeft .75s;
}

@keyframes fadeInLeft {
    from {
        filter: opacity(0);
        transform: translateX(-50%);
    }
}
`},fadeInRight:{title:"淡入-从右进入",className:"fadeInRight",code:`
.fadeInRight {
    animation: fadeInRight .75s;
}

@keyframes fadeInRight {
    from {
        filter: opacity(0);
        transform: translateX(50%);
    }

    to {
        filter: opacity(1);
    }
}
`},fadeInDown:{title:"淡入-从上进入",className:"fadeInDown",code:`
.fadeInDown {
    animation: fadeInDown .75s;
}

@keyframes fadeInDown {
    from {
        filter: opacity(0);
        transform: translateY(-50%);
    }
}
`},fadeInUp:{title:"淡入-从下进入",className:"fadeInUp",code:`
.fadeInUp {
    animation: fadeInUp .75s;
}

@keyframes fadeInUp {
    from {
        filter: opacity(0);
        transform: translateY(50%);
    }
}
`},fadeInTopLeft:{title:"淡入-从左上进入",className:"fadeInTopLeft",code:`
.fadeInTopLeft {
    animation: fadeInTopLeft .75s;
}

@keyframes fadeInTopLeft {
    from {
        filter: opacity(0);
        transform: translate(-50%, -50%);
    }
}
`},fadeInTopRight:{title:"淡入-从右上进入",className:"fadeInTopRight",code:`
.fadeInTopRight {
    animation: fadeInTopRight .75s;
}

@keyframes fadeInTopRight {
    from {
        filter: opacity(0);
        transform: translate(50%, -50%);
    }
}
`},fadeInBottomLeft:{title:"淡入-从左下进入",className:"fadeInBottomLeft",code:`
.fadeInBottomLeft {
    animation: fadeInBottomLeft .75s;
}

@keyframes fadeInBottomLeft {
    from {
        filter: opacity(0);
        transform: translate(-50%, 50%);
    }
}
`},fadeInBottomRight:{title:"淡入-从右下进入",className:"fadeInBottomRight",code:`
.fadeInBottomRight {
    animation: fadeInBottomRight .75s;
}

@keyframes fadeInBottomRight {
    from {
        filter: opacity(0);
        transform: translate(50%, 50%);
    }
}
`}},n={fadeOut:{title:"淡出",className:"fadeOut",code:`
.fadeOut {
    animation: fadeOut .75s reverse ease-out;
}

@keyframes fadeOut {
    from {
        filter: opacity(0);
    }
}
`},fadeOutDown:{title:"淡出-向下退出",className:"fadeOutDown",code:`
.fadeOutDown {
    animation: fadeOutDown .75s reverse;
}

@keyframes fadeOutDown {
    from {
        filter: opacity(0);
        transform: translateY(50%);
    }
}
`},fadeOutLeft:{title:"淡出-向左退出",className:"fadeOutLeft",code:`
.fadeOutLeft {
    animation: fadeOutLeft .75s reverse ease-out;
}

@keyframes fadeOutLeft {
    from {
        filter: opacity(0);
        transform: translateX(-50%);
    }
}
`},fadeOutRight:{title:"淡出-向左退出",className:"fadeOutRight",code:`
.fadeOutRight {
    animation: fadeOutRight .75s reverse ease-out;
}

@keyframes fadeOutRight {
    from {
        filter: opacity(0);
        transform: translateX(50%);
    }
}
`},fadeOutUp:{title:"淡出-向上退出",className:"fadeOutUp",code:`
.fadeOutUp {
    animation: fadeOutUp .75s reverse;
}

@keyframes fadeOutUp {
    from {
        filter: opacity(0);
        transform: translateY(-50%);
    }
}
`},fadeOutTopLeft:{title:"淡出-向左上退出",className:"fadeOutTopLeft",code:`
.fadeOutTopLeft {
    animation: fadeOutTopLeft .75s reverse;
}

@keyframes fadeOutTopLeft {
    from {
        filter: opacity(0);
        transform: translate(-50%, -50%);
    }
}
`},fadeOutTopRight:{title:"淡出-向右上退出",className:"fadeOutTopRight",code:`
.fadeOutTopRight {
    animation: fadeOutTopRight .75s reverse;
}

@keyframes fadeOutTopRight {
    from {
        filter: opacity(0);
        transform: translate(50%, -50%);
    }
}
`},fadeOutBottomLeft:{title:"淡出-向左下退出",className:"fadeOutBottomLeft",code:`
.fadeOutBottomLeft {
    animation: fadeOutBottomLeft .75s reverse;
}

@keyframes fadeOutBottomLeft {
    from {
        filter: opacity(0);
        transform: translate(-50%, 50%);
    }
}
`},fadeOutBottomRight:{title:"淡出-向左下退出",className:"fadeOutBottomRight",code:`
.fadeOutBottomRight {
    animation: fadeOutBottomRight .75s reverse;
}

@keyframes fadeOutBottomRight {
    from {
        filter: opacity(0);
        transform: translate(50%, 50%);
    }
}
`}};return(o,r)=>(V(),K(Q,null,[r[0]||(r[0]=ee("h2",null,"淡入",-1)),ee("section",mh,[(V(),K(Q,null,be(t,(s,i)=>z(we,{key:i,title:s.title,code:s.code,className:s.className,hasButton:!0},null,8,["title","code","className"])),64))]),r[1]||(r[1]=ee("h2",null,"淡出",-1)),ee("section",gh,[(V(),K(Q,null,be(n,(s,i)=>z(we,{key:i,title:s.title,code:s.code,className:s.className,hasButton:!0},null,8,["title","code","className"])),64))])],64))}},wh={class:"part"},yh={__name:"index",setup(e){const t={flip:{title:"翻转",className:"flip",code:`
.flip {
    animation: flip .75s;
}

@keyframes flip {
    50% {
        transform: rotateY(180deg) scale(1.5);
    }

    to {
        transform: rotateY(360deg);
    }
}
`},flipInX:{title:"翻转-x轴",className:"flipInX",code:`
.flipInX {
    animation: flipInX 1.5s;
}

@keyframes flipInX {
    from {
        transform: rotateX(90deg);
        filter: opacity(0.5);
    }

    25% {
        transform: rotateX(-25deg);
    }

    50% {
        transform: rotateX(25deg);
        filter: opacity(1);
    }

    75% {
        transform: rotateX(-15deg);
    }

    to {
        transform: rotateX(0);
    }
}
`},flipInY:{title:"翻转-y轴",className:"flipInY",code:`
.flipInY {
    animation: flipInY 1.5s;
}

@keyframes flipInY {
    from {
        transform: rotateY(90deg);
        filter: opacity(0.5);
    }

    25% {
        transform: rotateY(-25deg);
    }

    50% {
        transform: rotateY(25deg);
        filter: opacity(1);
    }

    75% {
        transform: rotateY(-15deg);
    }

    to {
        transform: rotateY(0);
    }
}
`},flipOutX:{title:"翻转退出-x轴",className:"flipOutX",code:`
.flipOutX {
    animation: flipOutX .75s ease-out;
}

@keyframes flipOutX {
    33% {
        transform: rotateY(45deg);
    }

    66% {
        filter: opacity(1);
    }

    to {
        transform: rotateY(-180deg);
        filter: opacity(0);
    }
}
`},flipOutY:{title:"翻转退出-y轴",className:"flipOutY",code:`
.flipOutY {
    animation: flipOutY .75s ease-out;
}

@keyframes flipOutY {
    33% {
        transform: rotateX(45deg);
    }

    66% {
        filter: opacity(1);
    }

    to {
        transform: rotateX(-180deg);
        filter: opacity(0);
    }
}
`}};return(n,o)=>(V(),K("section",wh,[(V(),K(Q,null,be(t,(r,s)=>z(we,{key:s,title:r.title,code:r.code,className:r.className,hasButton:!0},null,8,["title","code","className"])),64))]))}},_h={class:"part"},vh={__name:"index",setup(e){const t={lightSpeedInRight:{title:"光速-从右进入",className:"lightSpeedInRight",code:`
.lightSpeedInRight {
    animation: lightSpeedInRight .75s;
}

@keyframes lightSpeedInRight {
    from {
        transform: translateX(100%) skew(30deg);
        filter: opacity(0);
    }

    50% {
        transform: translateX(0) skew(-30deg);
        filter: opacity(1);
    }

    75% {
        transform: skew(15deg);
    }
}
`},lightSpeedInLeft:{title:"光速-从左进入",className:"lightSpeedInLeft",code:`
.lightSpeedInLeft {
    animation: lightSpeedInLeft .75s;
}

@keyframes lightSpeedInLeft {
    from {
        transform: translateX(-100%) skew(-30deg);
        filter: opacity(0);
    }

    50% {
        transform: translateX(0) skew(30deg);
        filter: opacity(1);
    }

    75% {
        transform: skew(-15deg);
    }
}
`},lightSpeedOutRight:{title:"光速-向右退出",className:"lightSpeedOutRight",code:`
.lightSpeedOutRight {
    animation: lightSpeedOutRight .75s ease-in;
}

@keyframes lightSpeedOutRight {
    to {
        transform: translateX(100%) skew(30deg);
        filter: opacity(0);
    }
}
`},lightSpeedOutLeft:{title:"光速-向左退出",className:"lightSpeedOutLeft",code:`
.lightSpeedOutLeft {
    animation: lightSpeedOutLeft .75s ease-in;
}

@keyframes lightSpeedOutLeft {
    to {
        transform: translateX(-100%) skew(-30deg);
        filter: opacity(0);
    }
}
`}};return(n,o)=>(V(),K("section",_h,[(V(),K(Q,null,be(t,(r,s)=>z(we,{key:s,title:r.title,code:r.code,className:r.className,hasButton:!0},null,8,["title","code","className"])),64))]))}},xh={class:"part"},Eh={class:"part"},kh={__name:"index",setup(e){const t={rotateIn:{title:"旋转进入",className:"rotateIn",code:`
.rotateIn {
    animation: rotateIn .75s;
}

@keyframes rotateIn {
    from {
        transform: rotate(225deg);
        filter: opacity(0);
    }
}
`},rotateInDownLeft:{title:"旋转进入-左下",className:"rotateInDownLeft",code:`
.rotateInDownLeft {
    animation: rotateInDownLeft .75s;
}

@keyframes rotateInDownLeft {
    from {
        transform-origin: left bottom;
        transform: rotate(-45deg);
        filter: opacity(0);
    }

    to {
        transform-origin: left bottom;
    }
}
`},rotateInUpLeft:{title:"旋转进入-右上",className:"rotateInUpLeft",code:`
.rotateInDownRight {
    animation: rotateInDownRight .75s;
}

@keyframes rotateInDownRight {
    from {
        transform-origin: left top;
        transform: rotate(45deg);
        filter: opacity(0);
    }

    to {
        transform-origin: left top;
    }
}
`},rotateInUpRight:{title:"旋转进入-右上",className:"rotateInUpRight",code:`
.rotateInUpRight {
    animation: rotateInUpRight .75s;
}

@keyframes rotateInUpRight {
    from {
        transform-origin: right top;
        transform: rotate(45deg);
        filter: opacity(0);
    }

    to {
        transform-origin: right top;
    }
}
`}},n={rotateOut:{title:"旋转退出",className:"rotateOut",code:`
.rotateOut {
    animation: rotateOut .75s;
}

@keyframes rotateOut {
    to {
        transform: rotate(225deg);
        filter: opacity(0);
    }
}
`},rotateOutUpLeft:{title:"旋转退出-左上",className:"rotateOutUpLeft",code:`
.rotateOutUpLeft {
    animation: rotateOutUpLeft .75s;
}

@keyframes rotateOutUpLeft {
    from {
        transform-origin: left bottom;
    }

    to {
        transform-origin: left bottom;
        transform: rotate(-45deg);
        filter: opacity(0);
    }
}
`},rotateOutUpRight:{title:"旋转退出-右上",className:"rotateOutUpRight",code:`
.rotateOutUpRight {
    animation: rotateOutUpRight .75s;
}

@keyframes rotateOutUpRight {
    from {
        transform-origin: right bottom;
    }

    to {
        transform-origin: right bottom;
        transform: rotate(45deg);
        filter: opacity(0);
    }
}
`},rotateOutDownLeft:{title:"旋转退出-右下",className:"rotateOutDownLeft",code:`
.rotateOutDownLeft {
    animation: rotateOutDownLeft .75s;
}

@keyframes rotateOutDownLeft {
    from {
        transform-origin: left top;
    }

    to {
        transform-origin: left top;
        transform: rotate(45deg);
        filter: opacity(0);
    }
}
`},rotateOutDownRight:{title:"旋转退出-右下",className:"rotateOutDownRight",code:`
.rotateOutDownRight {
    animation: rotateOutDownRight .75s;
}

@keyframes rotateOutDownRight {
    from {
        transform-origin: right top;
    }

    to {
        transform-origin: right top;
        transform: rotate(-45deg);
        filter: opacity(0);
    }
}
`}};return(o,r)=>(V(),K(Q,null,[r[0]||(r[0]=ee("h2",null,"进入",-1)),ee("section",xh,[(V(),K(Q,null,be(t,(s,i)=>z(we,{key:i,title:s.title,code:s.code,className:s.className,hasButton:!0},null,8,["title","code","className"])),64))]),r[1]||(r[1]=ee("h2",null,"退出",-1)),ee("section",Eh,[(V(),K(Q,null,be(n,(s,i)=>z(we,{key:i,title:s.title,code:s.code,className:s.className,hasButton:!0},null,8,["title","code","className"])),64))])],64))}},Oh={class:"part"},Rh={__name:"index",setup(e){const t={hinge:{title:"铰链",className:"hinge",code:`
.hinge {
    animation: hinge 2.5s;
}

@keyframes hinge {
    0% {
        transform-origin: left top;
    }

    10% {
        transform: rotate(75deg);
    }

    20% {
        transform: rotate(45deg);
    }

    30% {
        transform: rotate(75deg);
    }

    40% {
        transform: rotate(60deg) translateY(0) translateX(0);
    }

    100% {
        transform-origin: left top;
        transform: rotate(60deg) translateY(500%) translateX(500%);
    }
}
`},jackInTheBox:{title:"跳跳盒",className:"jackInTheBox",code:`
.jackInTheBox {
    animation: jackInTheBox .5s;
}

@keyframes jackInTheBox {
    0% {
        scale: 0;
    }

    20% {
        transform: rotate(15deg);
    }

    40% {
        transform: rotate(-10deg);
        scale: 1.2;
    }

    60% {
        transform: rotate(5deg);
    }

    100% {
        scale: 1;
    }
}
`},rollIn:{title:"翻滚-进入",className:"rollIn",code:`
.rollIn {
    animation: rollIn 1s;
}

@keyframes rollIn {
    0% {
        transform-origin: left bottom;
        transform: translateX(-100%) rotate(-125deg);
    }

    100% {
        transform-origin: left bottom;
    }
}
`},rollOut:{title:"翻滚-退出",className:"rollOut",code:`
.rollOut {
    animation: rollOut 1s;
}

@keyframes rollOut {
    0% {
        transform-origin: right bottom;
    }

    100% {
        transform-origin: right bottom;
        transform: translateX(100%) rotate(125deg);
    }
}
`}};return(n,o)=>(V(),K("section",Oh,[(V(),K(Q,null,be(t,(r,s)=>z(we,{key:s,title:r.title,code:r.code,className:r.className,hasButton:!0},null,8,["title","code","className"])),64))]))}},Ih={class:"part"},Nh={class:"part"},Sh={__name:"index",setup(e){const t={zoomIn:{title:"放大-出现",className:"zoomIn",code:`
.zoomIn {
    animation: zoomIn .5s;
}

@keyframes zoomIn {
    from {
        transform: scale(0);
    }
}
`},zoomInUp:{title:"放大-从上出现",className:"zoomInUp",code:`
.zoomInDown {
    animation: zoomInDown .5s ease-in;
}

@keyframes zoomInDown {
    from {
        transform: center bottom;
        transform: scale(0) translateY(-500%);
    }

    80% {
        transform: scale(.8) translateY(20%);
    }

    to {
        transform: center bottom;
        transform: scale(1);
    }
}
`},zoomInLeft:{title:"放大-从左出现",className:"zoomInLeft",code:`
.zoomInLeft {
    animation: zoomInLeft .5s ease-in;
}

@keyframes zoomInLeft {
    from {
        transform: scale(0) translateX(-500%);
    }
}
`},zoomInRight:{title:"放大-从右出现",className:"zoomInRight",code:`
.zoomInRight {
    animation: zoomInRight .5s ease-in;
}

@keyframes zoomInRight {
    from {
        transform: scale(0) translateX(500%);
    }
}
`},zoomInDown:{title:"放大-从下出现",className:"zoomInDown",code:`
.zoomInDown {
    animation: zoomInDown .5s ease-in;
}

@keyframes zoomInDown {
    from {
        transform: scale(0) translateY(500%);
    }
}
  `}},n={zoomOut:{title:"放大-退出",className:"zoomOut",code:`
.zoomOut {
    animation: zoomOut .5s;
}

@keyframes zoomOut {
    to {
        transform: scale(0);
    }
}
`},zoomOutUp:{title:"放大-从上退出",className:"zoomOutUp",code:`
.zoomOutUp {
    animation: zoomOutUp .75s ease-in;
}

@keyframes zoomOutUp {
    50% {
        transform: scale(.5);
    }

    to {
        transform: translateY(-1000%);
    }
}
`},zoomOutLeft:{title:"放大-从左退出",className:"zoomOutLeft",code:`
.zoomOutLeft {
    animation: zoomOutLeft .75s ease-in;
}

@keyframes zoomOutLeft {
    50% {
        transform: scale(0.5);
    }

    to {
        transform: scale(0) translateX(-1000%);
    }
}
`},zoomOutRight:{title:"放大-从右退出",className:"zoomOutRight",code:`
.zoomOutRight {
    animation: zoomOutRight .75s ease-in;
}

@keyframes zoomOutRight {
    50% {
        transform: scale(0.5);
    }

    to {
        transform: scale(0) translateX(1000%);
    }
}
`},zoomOutDown:{title:"放大-从下退出",className:"zoomOutDown",code:`
.zoomOutDown {
    animation: zoomOutDown .75s ease-in;
}

@keyframes zoomOutDown {
    50% {
        transform: scale(0.5);
    }

    to {
        transform: scale(0) translateY(1000%);
    }
}
`}};return(o,r)=>(V(),K(Q,null,[r[0]||(r[0]=ee("h2",null,"缩放进入",-1)),ee("section",Ih,[(V(),K(Q,null,be(t,(s,i)=>z(we,{key:i,title:s.title,code:s.code,className:s.className,hasButton:!0},null,8,["title","code","className"])),64))]),r[1]||(r[1]=ee("h2",null,"缩放退出",-1)),ee("section",Nh,[(V(),K(Q,null,be(n,(s,i)=>z(we,{key:i,title:s.title,code:s.code,className:s.className,hasButton:!0},null,8,["title","code","className"])),64))])],64))}},Th={class:"part"},Ah={class:"part"},Ch={__name:"index",setup(e){const t={slideInUp:{title:"滑动进入-从上",className:"slideInUp",code:`
.slideInDown {
    animation: slideInDown .5s ease-out;
}

@keyframes slideInDown {
    from {
        transform: translateY(-200%);
    }
}
`},slideInLeft:{title:"滑动进入-从左",className:"slideInLeft",code:`
.slideInLeft {
    animation: slideInLeft .5s ease-out;
}

@keyframes slideInLeft {
    from {
        transform: translateX(-200%);
    }
}
`},slideInRight:{title:"滑动进入-从右",className:"slideInRight",code:`
.slideInLeft {
    animation: slideInLeft .5s ease-out;
}

@keyframes slideInLeft {
    from {
        transform: translateX(-200%);
    }
}
`},slideInDown:{title:"滑动进入-从上",className:"slideInDown",code:`
.slideInDown {
    animation: slideInDown .5s ease-out;
}

@keyframes slideInDown {
    from {
        transform: translateY(200%);
    }
}
`}},n={slideOutDown:{title:"滑动退出-向下",className:"slideOutDown",code:`
.slideOutDown {
    animation: slideOutDown .75s ease-out;
}

@keyframes slideOutDown {
    to {
        transform: translateY(200%);
    }
}
`},slideOutLeft:{title:"滑动退出-向左",className:"slideOutLeft",code:`
.slideOutLeft {
    animation: slideOutLeft .75s ease-out;
}

@keyframes slideOutLeft {
    to {
        transform: translateX(-200%);
    }
}
`},slideOutRight:{title:"滑动退出-向右",className:"slideOutRight",code:`
.slideOutRight {
    animation: slideOutRight .5s ease-out;
}

@keyframes slideOutRight {
    to {
        transform: translateX(200%);
    }
}
`},slideOutUp:{title:"滑动退出-向上",className:"slideOutUp",code:`
.slideOutUp {
    animation: slideOutUp .5s ease-out;
}

@keyframes slideOutUp {
    to {
        transform: translateY(-200%);
    }
}
`}};return(o,r)=>(V(),K(Q,null,[r[0]||(r[0]=ee("h2",null,"滑动进入",-1)),ee("section",Th,[(V(),K(Q,null,be(t,(s,i)=>z(we,{key:i,title:s.title,code:s.code,className:s.className,hasButton:!0},null,8,["title","code","className"])),64))]),r[1]||(r[1]=ee("h2",null,"滑动退出",-1)),ee("section",Ah,[(V(),K(Q,null,be(n,(s,i)=>z(we,{key:i,title:s.title,code:s.code,className:s.className,hasButton:!0},null,8,["title","code","className"])),64))])],64))}},Lh=[{path:"/",redirect:"/2DTransitions",meta:{title:"主页"}},{path:"/2DTransitions",component:Vd,meta:{title:"2D 过渡动画"}},{path:"/backgroundTransitions",component:Gd,meta:{title:"背景过渡动画"}},{path:"/borderTransitions",component:qd,meta:{title:"边框过渡动画"}},{path:"/shadowAndGlowTransitions",component:Jd,meta:{title:"阴影过渡动画"}},{path:"/speechBubbles",component:eh,meta:{title:"气泡框过渡动画"}},{path:"/curls",component:nh,meta:{title:"折角过渡动画"}},{path:"/attentionSeekers",component:rh,meta:{title:"吸引眼球动画"}},{path:"/backEntrancesAndBackExits",component:uh,meta:{title:"后进后出动画"}},{path:"/bouncingEntrancesAndBouncingExits",component:ph,meta:{title:"弹出弹入动画"}},{path:"/fadeInAndFadeOut",component:bh,meta:{title:"淡入淡出动画"}},{path:"/flippers",component:yh,meta:{title:"翻转动画"}},{path:"/lightspeed",component:vh,meta:{title:"光速动画"}},{path:"/rotatingEntrancesAndRotatingExits",component:kh,meta:{title:"旋转动画"}},{path:"/specials",component:Rh,meta:{title:"特殊效果"}},{path:"/zoomingEntrancesAndZoomingExits",component:Sh,meta:{title:"放大缩小动画"}},{path:"/slidingEntrancesSlidingExits",component:Ch,meta:{title:"滑入滑出动画"}}],ya=Vf({history:Ef(),routes:Lh});ya.beforeEach((e,t,n)=>{document.title=`${e.meta.title} | Ea-effects.css`,e.hash||n()});const Cs={fontelloCSS:"https://cdn.jsdelivr.net/npm/easy-component-ui/components/ea-icon/css/fontello.css"};function Mh(e){Object.assign(Cs,e),document.dispatchEvent(new CustomEvent("configChanged",{detail:Cs}))}window.addEventListener("DOMContentLoaded",()=>{Mh({fontelloCSS:new URL("/ea-effects/ea-icon/css/fontello.css",import.meta.url).href})});Uc(Ou).use(ya).mount("#app");
