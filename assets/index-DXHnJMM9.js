var Ir=e=>{throw TypeError(e)};var _n=(e,t,o)=>t.has(e)||Ir("Cannot "+o);var j=(e,t,o)=>(_n(e,t,"read from private field"),o?o.call(e):t.get(e)),we=(e,t,o)=>t.has(e)?Ir("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),Ee=(e,t,o,n)=>(_n(e,t,"write to private field"),n?n.call(e,o):t.set(e,o),o),vn=(e,t,o)=>(_n(e,t,"access private method"),o);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function er(e){const t=Object.create(null);for(const o of e.split(","))t[o]=1;return o=>o in t}const ue={},Vt=[],ct=()=>{},_a=()=>!1,nn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),tr=e=>e.startsWith("onUpdate:"),Ie=Object.assign,or=(e,t)=>{const o=e.indexOf(t);o>-1&&e.splice(o,1)},va=Object.prototype.hasOwnProperty,ie=(e,t)=>va.call(e,t),G=Array.isArray,Kt=e=>rn(e)==="[object Map]",Ls=e=>rn(e)==="[object Set]",q=e=>typeof e=="function",ye=e=>typeof e=="string",St=e=>typeof e=="symbol",pe=e=>e!==null&&typeof e=="object",Ms=e=>(pe(e)||q(e))&&q(e.then)&&q(e.catch),Bs=Object.prototype.toString,rn=e=>Bs.call(e),xa=e=>rn(e).slice(8,-1),Ps=e=>rn(e)==="[object Object]",nr=e=>ye(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ho=er(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),sn=e=>{const t=Object.create(null);return o=>t[o]||(t[o]=e(o))},Ea=/-(\w)/g,tt=sn(e=>e.replace(Ea,(t,o)=>o?o.toUpperCase():"")),ka=/\B([A-Z])/g,$t=sn(e=>e.replace(ka,"-$1").toLowerCase()),an=sn(e=>e.charAt(0).toUpperCase()+e.slice(1)),xn=sn(e=>e?`on${an(e)}`:""),Rt=(e,t)=>!Object.is(e,t),En=(e,...t)=>{for(let o=0;o<e.length;o++)e[o](...t)},Fs=(e,t,o,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:o})},Oa=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ar;const Ds=()=>Ar||(Ar=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function rr(e){if(G(e)){const t={};for(let o=0;o<e.length;o++){const n=e[o],r=ye(n)?Na(n):rr(n);if(r)for(const s in r)t[s]=r[s]}return t}else if(ye(e)||pe(e))return e}const Ra=/;(?![^(]*\))/g,Ta=/:([^]+)/,Sa=/\/\*[^]*?\*\//g;function Na(e){const t={};return e.replace(Sa,"").split(Ra).forEach(o=>{if(o){const n=o.split(Ta);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function Dt(e){let t="";if(ye(e))t=e;else if(G(e))for(let o=0;o<e.length;o++){const n=Dt(e[o]);n&&(t+=n+" ")}else if(pe(e))for(const o in e)e[o]&&(t+=o+" ");return t.trim()}const Ia="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Aa=er(Ia);function zs(e){return!!e||e===""}const $s=e=>!!(e&&e.__v_isRef===!0),Ko=e=>ye(e)?e:e==null?"":G(e)||pe(e)&&(e.toString===Bs||!q(e.toString))?$s(e)?Ko(e.value):JSON.stringify(e,Hs,2):String(e),Hs=(e,t)=>$s(t)?Hs(e,t.value):Kt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((o,[n,r],s)=>(o[kn(n,s)+" =>"]=r,o),{})}:Ls(t)?{[`Set(${t.size})`]:[...t.values()].map(o=>kn(o))}:St(t)?kn(t):pe(t)&&!G(t)&&!Ps(t)?String(t):t,kn=(e,t="")=>{var o;return St(e)?`Symbol(${(o=e.description)!=null?o:t})`:e};/**
* @vue/reactivity v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ve;class Ca{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ve,!t&&Ve&&(this.index=(Ve.scopes||(Ve.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,o;if(this.scopes)for(t=0,o=this.scopes.length;t<o;t++)this.scopes[t].pause();for(t=0,o=this.effects.length;t<o;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,o;if(this.scopes)for(t=0,o=this.scopes.length;t<o;t++)this.scopes[t].resume();for(t=0,o=this.effects.length;t<o;t++)this.effects[t].resume()}}run(t){if(this._active){const o=Ve;try{return Ve=this,t()}finally{Ve=o}}}on(){Ve=this}off(){Ve=this.parent}stop(t){if(this._active){let o,n;for(o=0,n=this.effects.length;o<n;o++)this.effects[o].stop();for(o=0,n=this.cleanups.length;o<n;o++)this.cleanups[o]();if(this.scopes)for(o=0,n=this.scopes.length;o<n;o++)this.scopes[o].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function La(){return Ve}let fe;const On=new WeakSet;class Us{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.nextEffect=void 0,this.cleanup=void 0,this.scheduler=void 0,Ve&&Ve.active&&Ve.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,On.has(this)&&(On.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||(this.flags|=8,this.nextEffect=po,po=this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Cr(this),js(this);const t=fe,o=et;fe=this,et=!0;try{return this.fn()}finally{Ys(this),fe=t,et=o,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)ar(t);this.deps=this.depsTail=void 0,Cr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?On.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){zn(this)&&this.run()}get dirty(){return zn(this)}}let Xs=0,po;function sr(){Xs++}function ir(){if(--Xs>0)return;let e;for(;po;){let t=po;for(po=void 0;t;){const o=t.nextEffect;if(t.nextEffect=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=o}}if(e)throw e}function js(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ys(e){let t,o=e.depsTail;for(let n=o;n;n=n.prevDep)n.version===-1?(n===o&&(o=n.prevDep),ar(n),Ma(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0;e.deps=t,e.depsTail=o}function zn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&Vs(t.dep.computed)||t.dep.version!==t.version)return!0;return!!e._dirty}function Vs(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===yo))return;e.globalVersion=yo;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&!zn(e)){e.flags&=-3;return}const o=fe,n=et;fe=e,et=!0;try{js(e);const r=e.fn(e._value);(t.version===0||Rt(r,e._value))&&(e._value=r,t.version++)}catch(r){throw t.version++,r}finally{fe=o,et=n,Ys(e),e.flags&=-3}}function ar(e){const{dep:t,prevSub:o,nextSub:n}=e;if(o&&(o.nextSub=n,e.prevSub=void 0),n&&(n.prevSub=o,e.nextSub=void 0),t.subs===e&&(t.subs=o),!t.subs&&t.computed){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)ar(r)}}function Ma(e){const{prevDep:t,nextDep:o}=e;t&&(t.nextDep=o,e.prevDep=void 0),o&&(o.prevDep=t,e.nextDep=void 0)}let et=!0;const Ks=[];function Nt(){Ks.push(et),et=!1}function It(){const e=Ks.pop();et=e===void 0?!0:e}function Cr(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const o=fe;fe=void 0;try{t()}finally{fe=o}}}let yo=0;class lr{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0}track(t){if(!fe||!et||fe===this.computed)return;let o=this.activeLink;if(o===void 0||o.sub!==fe)o=this.activeLink={dep:this,sub:fe,version:this.version,nextDep:void 0,prevDep:void 0,nextSub:void 0,prevSub:void 0,prevActiveLink:void 0},fe.deps?(o.prevDep=fe.depsTail,fe.depsTail.nextDep=o,fe.depsTail=o):fe.deps=fe.depsTail=o,fe.flags&4&&Gs(o);else if(o.version===-1&&(o.version=this.version,o.nextDep)){const n=o.nextDep;n.prevDep=o.prevDep,o.prevDep&&(o.prevDep.nextDep=n),o.prevDep=fe.depsTail,o.nextDep=void 0,fe.depsTail.nextDep=o,fe.depsTail=o,fe.deps===o&&(fe.deps=n)}return o}trigger(t){this.version++,yo++,this.notify(t)}notify(t){sr();try{for(let o=this.subs;o;o=o.prevSub)o.sub.notify()}finally{ir()}}}function Gs(e){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)Gs(n)}const o=e.dep.subs;o!==e&&(e.prevSub=o,o&&(o.nextSub=e)),e.dep.subs=e}const $n=new WeakMap,Pt=Symbol(""),Hn=Symbol(""),_o=Symbol("");function Le(e,t,o){if(et&&fe){let n=$n.get(e);n||$n.set(e,n=new Map);let r=n.get(o);r||n.set(o,r=new lr),r.track()}}function bt(e,t,o,n,r,s){const i=$n.get(e);if(!i){yo++;return}const a=l=>{l&&l.trigger()};if(sr(),t==="clear")i.forEach(a);else{const l=G(e),d=l&&nr(o);if(l&&o==="length"){const f=Number(n);i.forEach((h,p)=>{(p==="length"||p===_o||!St(p)&&p>=f)&&a(h)})}else switch(o!==void 0&&a(i.get(o)),d&&a(i.get(_o)),t){case"add":l?d&&a(i.get("length")):(a(i.get(Pt)),Kt(e)&&a(i.get(Hn)));break;case"delete":l||(a(i.get(Pt)),Kt(e)&&a(i.get(Hn)));break;case"set":Kt(e)&&a(i.get(Pt));break}}ir()}function Ut(e){const t=ae(e);return t===e?t:(Le(t,"iterate",_o),qe(e)?t:t.map(Ae))}function ln(e){return Le(e=ae(e),"iterate",_o),e}const Ba={__proto__:null,[Symbol.iterator](){return Rn(this,Symbol.iterator,Ae)},concat(...e){return Ut(this).concat(...e.map(t=>G(t)?Ut(t):t))},entries(){return Rn(this,"entries",e=>(e[1]=Ae(e[1]),e))},every(e,t){return ht(this,"every",e,t,void 0,arguments)},filter(e,t){return ht(this,"filter",e,t,o=>o.map(Ae),arguments)},find(e,t){return ht(this,"find",e,t,Ae,arguments)},findIndex(e,t){return ht(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ht(this,"findLast",e,t,Ae,arguments)},findLastIndex(e,t){return ht(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ht(this,"forEach",e,t,void 0,arguments)},includes(...e){return Tn(this,"includes",e)},indexOf(...e){return Tn(this,"indexOf",e)},join(e){return Ut(this).join(e)},lastIndexOf(...e){return Tn(this,"lastIndexOf",e)},map(e,t){return ht(this,"map",e,t,void 0,arguments)},pop(){return lo(this,"pop")},push(...e){return lo(this,"push",e)},reduce(e,...t){return Lr(this,"reduce",e,t)},reduceRight(e,...t){return Lr(this,"reduceRight",e,t)},shift(){return lo(this,"shift")},some(e,t){return ht(this,"some",e,t,void 0,arguments)},splice(...e){return lo(this,"splice",e)},toReversed(){return Ut(this).toReversed()},toSorted(e){return Ut(this).toSorted(e)},toSpliced(...e){return Ut(this).toSpliced(...e)},unshift(...e){return lo(this,"unshift",e)},values(){return Rn(this,"values",Ae)}};function Rn(e,t,o){const n=ln(e),r=n[t]();return n!==e&&!qe(e)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=o(s.value)),s}),r}const Pa=Array.prototype;function ht(e,t,o,n,r,s){const i=ln(e),a=i!==e&&!qe(e),l=i[t];if(l!==Pa[t]){const h=l.apply(e,s);return a?Ae(h):h}let d=o;i!==e&&(a?d=function(h,p){return o.call(this,Ae(h),p,e)}:o.length>2&&(d=function(h,p){return o.call(this,h,p,e)}));const f=l.call(i,d,n);return a&&r?r(f):f}function Lr(e,t,o,n){const r=ln(e);let s=o;return r!==e&&(qe(e)?o.length>3&&(s=function(i,a,l){return o.call(this,i,a,l,e)}):s=function(i,a,l){return o.call(this,i,Ae(a),l,e)}),r[t](s,...n)}function Tn(e,t,o){const n=ae(e);Le(n,"iterate",_o);const r=n[t](...o);return(r===-1||r===!1)&&dr(o[0])?(o[0]=ae(o[0]),n[t](...o)):r}function lo(e,t,o=[]){Nt(),sr();const n=ae(e)[t].apply(e,o);return ir(),It(),n}const Fa=er("__proto__,__v_isRef,__isVue"),Ws=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(St));function Da(e){St(e)||(e=String(e));const t=ae(this);return Le(t,"has",e),t.hasOwnProperty(e)}class qs{constructor(t=!1,o=!1){this._isReadonly=t,this._isShallow=o}get(t,o,n){const r=this._isReadonly,s=this._isShallow;if(o==="__v_isReactive")return!r;if(o==="__v_isReadonly")return r;if(o==="__v_isShallow")return s;if(o==="__v_raw")return n===(r?s?Za:ei:s?Qs:Js).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const i=G(t);if(!r){let l;if(i&&(l=Ba[o]))return l;if(o==="hasOwnProperty")return Da}const a=Reflect.get(t,o,Te(t)?t:n);return(St(o)?Ws.has(o):Fa(o))||(r||Le(t,"get",o),s)?a:Te(a)?i&&nr(o)?a:a.value:pe(a)?r?oi(a):fn(a):a}}class Zs extends qs{constructor(t=!1){super(!1,t)}set(t,o,n,r){let s=t[o];if(!this._isShallow){const l=zt(s);if(!qe(n)&&!zt(n)&&(s=ae(s),n=ae(n)),!G(t)&&Te(s)&&!Te(n))return l?!1:(s.value=n,!0)}const i=G(t)&&nr(o)?Number(o)<t.length:ie(t,o),a=Reflect.set(t,o,n,Te(t)?t:r);return t===ae(r)&&(i?Rt(n,s)&&bt(t,"set",o,n):bt(t,"add",o,n)),a}deleteProperty(t,o){const n=ie(t,o);t[o];const r=Reflect.deleteProperty(t,o);return r&&n&&bt(t,"delete",o,void 0),r}has(t,o){const n=Reflect.has(t,o);return(!St(o)||!Ws.has(o))&&Le(t,"has",o),n}ownKeys(t){return Le(t,"iterate",G(t)?"length":Pt),Reflect.ownKeys(t)}}class za extends qs{constructor(t=!1){super(!0,t)}set(t,o){return!0}deleteProperty(t,o){return!0}}const $a=new Zs,Ha=new za,Ua=new Zs(!0);const cr=e=>e,cn=e=>Reflect.getPrototypeOf(e);function Fo(e,t,o=!1,n=!1){e=e.__v_raw;const r=ae(e),s=ae(t);o||(Rt(t,s)&&Le(r,"get",t),Le(r,"get",s));const{has:i}=cn(r),a=n?cr:o?hr:Ae;if(i.call(r,t))return a(e.get(t));if(i.call(r,s))return a(e.get(s));e!==r&&e.get(t)}function Do(e,t=!1){const o=this.__v_raw,n=ae(o),r=ae(e);return t||(Rt(e,r)&&Le(n,"has",e),Le(n,"has",r)),e===r?o.has(e):o.has(e)||o.has(r)}function zo(e,t=!1){return e=e.__v_raw,!t&&Le(ae(e),"iterate",Pt),Reflect.get(e,"size",e)}function Mr(e,t=!1){!t&&!qe(e)&&!zt(e)&&(e=ae(e));const o=ae(this);return cn(o).has.call(o,e)||(o.add(e),bt(o,"add",e,e)),this}function Br(e,t,o=!1){!o&&!qe(t)&&!zt(t)&&(t=ae(t));const n=ae(this),{has:r,get:s}=cn(n);let i=r.call(n,e);i||(e=ae(e),i=r.call(n,e));const a=s.call(n,e);return n.set(e,t),i?Rt(t,a)&&bt(n,"set",e,t):bt(n,"add",e,t),this}function Pr(e){const t=ae(this),{has:o,get:n}=cn(t);let r=o.call(t,e);r||(e=ae(e),r=o.call(t,e)),n&&n.call(t,e);const s=t.delete(e);return r&&bt(t,"delete",e,void 0),s}function Fr(){const e=ae(this),t=e.size!==0,o=e.clear();return t&&bt(e,"clear",void 0,void 0),o}function $o(e,t){return function(n,r){const s=this,i=s.__v_raw,a=ae(i),l=t?cr:e?hr:Ae;return!e&&Le(a,"iterate",Pt),i.forEach((d,f)=>n.call(r,l(d),l(f),s))}}function Ho(e,t,o){return function(...n){const r=this.__v_raw,s=ae(r),i=Kt(s),a=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,d=r[e](...n),f=o?cr:t?hr:Ae;return!t&&Le(s,"iterate",l?Hn:Pt),{next(){const{value:h,done:p}=d.next();return p?{value:h,done:p}:{value:a?[f(h[0]),f(h[1])]:f(h),done:p}},[Symbol.iterator](){return this}}}}function yt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Xa(){const e={get(s){return Fo(this,s)},get size(){return zo(this)},has:Do,add:Mr,set:Br,delete:Pr,clear:Fr,forEach:$o(!1,!1)},t={get(s){return Fo(this,s,!1,!0)},get size(){return zo(this)},has:Do,add(s){return Mr.call(this,s,!0)},set(s,i){return Br.call(this,s,i,!0)},delete:Pr,clear:Fr,forEach:$o(!1,!0)},o={get(s){return Fo(this,s,!0)},get size(){return zo(this,!0)},has(s){return Do.call(this,s,!0)},add:yt("add"),set:yt("set"),delete:yt("delete"),clear:yt("clear"),forEach:$o(!0,!1)},n={get(s){return Fo(this,s,!0,!0)},get size(){return zo(this,!0)},has(s){return Do.call(this,s,!0)},add:yt("add"),set:yt("set"),delete:yt("delete"),clear:yt("clear"),forEach:$o(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Ho(s,!1,!1),o[s]=Ho(s,!0,!1),t[s]=Ho(s,!1,!0),n[s]=Ho(s,!0,!0)}),[e,o,t,n]}const[ja,Ya,Va,Ka]=Xa();function fr(e,t){const o=t?e?Ka:Va:e?Ya:ja;return(n,r,s)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?n:Reflect.get(ie(o,r)&&r in n?o:n,r,s)}const Ga={get:fr(!1,!1)},Wa={get:fr(!1,!0)},qa={get:fr(!0,!1)};const Js=new WeakMap,Qs=new WeakMap,ei=new WeakMap,Za=new WeakMap;function Ja(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qa(e){return e.__v_skip||!Object.isExtensible(e)?0:Ja(xa(e))}function fn(e){return zt(e)?e:ur(e,!1,$a,Ga,Js)}function ti(e){return ur(e,!1,Ua,Wa,Qs)}function oi(e){return ur(e,!0,Ha,qa,ei)}function ur(e,t,o,n,r){if(!pe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=r.get(e);if(s)return s;const i=Qa(e);if(i===0)return e;const a=new Proxy(e,i===2?n:o);return r.set(e,a),a}function Gt(e){return zt(e)?Gt(e.__v_raw):!!(e&&e.__v_isReactive)}function zt(e){return!!(e&&e.__v_isReadonly)}function qe(e){return!!(e&&e.__v_isShallow)}function dr(e){return e?!!e.__v_raw:!1}function ae(e){const t=e&&e.__v_raw;return t?ae(t):e}function el(e){return!ie(e,"__v_skip")&&Object.isExtensible(e)&&Fs(e,"__v_skip",!0),e}const Ae=e=>pe(e)?fn(e):e,hr=e=>pe(e)?oi(e):e;function Te(e){return e?e.__v_isRef===!0:!1}function un(e){return ni(e,!1)}function tl(e){return ni(e,!0)}function ni(e,t){return Te(e)?e:new ol(e,t)}class ol{constructor(t,o){this.dep=new lr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=o?t:ae(t),this._value=o?t:Ae(t),this.__v_isShallow=o}get value(){return this.dep.track(),this._value}set value(t){const o=this._rawValue,n=this.__v_isShallow||qe(t)||zt(t);t=n?t:ae(t),Rt(t,o)&&(this._rawValue=t,this._value=n?t:Ae(t),this.dep.trigger())}}function Ke(e){return Te(e)?e.value:e}const nl={get:(e,t,o)=>t==="__v_raw"?e:Ke(Reflect.get(e,t,o)),set:(e,t,o,n)=>{const r=e[t];return Te(r)&&!Te(o)?(r.value=o,!0):Reflect.set(e,t,o,n)}};function ri(e){return Gt(e)?e:new Proxy(e,nl)}class rl{constructor(t,o,n){this.fn=t,this.setter=o,this._value=void 0,this.dep=new lr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=yo-1,this.effect=this,this.__v_isReadonly=!o,this.isSSR=n}notify(){this.flags|=16,fe!==this&&this.dep.notify()}get value(){const t=this.dep.track();return Vs(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function sl(e,t,o=!1){let n,r;return q(e)?n=e:(n=e.get,r=e.set),new rl(n,r,o)}const Uo={},Go=new WeakMap;let Mt;function il(e,t=!1,o=Mt){if(o){let n=Go.get(o);n||Go.set(o,n=[]),n.push(e)}}function al(e,t,o=ue){const{immediate:n,deep:r,once:s,scheduler:i,augmentJob:a,call:l}=o,d=M=>r?M:qe(M)||r===!1||r===0?kt(M,1):kt(M);let f,h,p,g,B=!1,L=!1;if(Te(e)?(h=()=>e.value,B=qe(e)):Gt(e)?(h=()=>d(e),B=!0):G(e)?(L=!0,B=e.some(M=>Gt(M)||qe(M)),h=()=>e.map(M=>{if(Te(M))return M.value;if(Gt(M))return d(M);if(q(M))return l?l(M,2):M()})):q(e)?t?h=l?()=>l(e,2):e:h=()=>{if(p){Nt();try{p()}finally{It()}}const M=Mt;Mt=f;try{return l?l(e,3,[g]):e(g)}finally{Mt=M}}:h=ct,t&&r){const M=h,oe=r===!0?1/0:r;h=()=>kt(M(),oe)}const K=La(),$=()=>{f.stop(),K&&or(K.effects,f)};if(s)if(t){const M=t;t=(...oe)=>{M(...oe),$()}}else{const M=h;h=()=>{M(),$()}}let P=L?new Array(e.length).fill(Uo):Uo;const z=M=>{if(!(!(f.flags&1)||!f.dirty&&!M))if(t){const oe=f.run();if(r||B||(L?oe.some((de,ce)=>Rt(de,P[ce])):Rt(oe,P))){p&&p();const de=Mt;Mt=f;try{const ce=[oe,P===Uo?void 0:L&&P[0]===Uo?[]:P,g];l?l(t,3,ce):t(...ce),P=oe}finally{Mt=de}}}else f.run()};return a&&a(z),f=new Us(h),f.scheduler=i?()=>i(z,!1):z,g=M=>il(M,!1,f),p=f.onStop=()=>{const M=Go.get(f);if(M){if(l)l(M,4);else for(const oe of M)oe();Go.delete(f)}},t?n?z(!0):P=f.run():i?i(z.bind(null,!0),!0):f.run(),$.pause=f.pause.bind(f),$.resume=f.resume.bind(f),$.stop=$,$}function kt(e,t=1/0,o){if(t<=0||!pe(e)||e.__v_skip||(o=o||new Set,o.has(e)))return e;if(o.add(e),t--,Te(e))kt(e.value,t,o);else if(G(e))for(let n=0;n<e.length;n++)kt(e[n],t,o);else if(Ls(e)||Kt(e))e.forEach(n=>{kt(n,t,o)});else if(Ps(e)){for(const n in e)kt(e[n],t,o);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&kt(e[n],t,o)}return e}/**
* @vue/runtime-core v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Mo(e,t,o,n){try{return n?e(...n):e()}catch(r){dn(r,t,o)}}function ut(e,t,o,n){if(q(e)){const r=Mo(e,t,o,n);return r&&Ms(r)&&r.catch(s=>{dn(s,t,o)}),r}if(G(e)){const r=[];for(let s=0;s<e.length;s++)r.push(ut(e[s],t,o,n));return r}}function dn(e,t,o,n=!0){const r=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||ue;if(t){let a=t.parent;const l=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${o}`;for(;a;){const f=a.ec;if(f){for(let h=0;h<f.length;h++)if(f[h](e,l,d)===!1)return}a=a.parent}if(s){Nt(),Mo(s,null,10,[e,l,d]),It();return}}ll(e,o,r,n,i)}function ll(e,t,o,n=!0,r=!1){if(r)throw e;console.error(e)}let vo=!1,Un=!1;const ze=[];let it=0;const Wt=[];let vt=null,jt=0;const si=Promise.resolve();let pr=null;function ii(e){const t=pr||si;return e?t.then(this?e.bind(this):e):t}function cl(e){let t=vo?it+1:0,o=ze.length;for(;t<o;){const n=t+o>>>1,r=ze[n],s=xo(r);s<e||s===e&&r.flags&2?t=n+1:o=n}return t}function mr(e){if(!(e.flags&1)){const t=xo(e),o=ze[ze.length-1];!o||!(e.flags&2)&&t>=xo(o)?ze.push(e):ze.splice(cl(t),0,e),e.flags|=1,ai()}}function ai(){!vo&&!Un&&(Un=!0,pr=si.then(ci))}function fl(e){G(e)?Wt.push(...e):vt&&e.id===-1?vt.splice(jt+1,0,e):e.flags&1||(Wt.push(e),e.flags|=1),ai()}function Dr(e,t,o=vo?it+1:0){for(;o<ze.length;o++){const n=ze[o];if(n&&n.flags&2){if(e&&n.id!==e.uid)continue;ze.splice(o,1),o--,n.flags&4&&(n.flags&=-2),n(),n.flags&=-2}}}function li(e){if(Wt.length){const t=[...new Set(Wt)].sort((o,n)=>xo(o)-xo(n));if(Wt.length=0,vt){vt.push(...t);return}for(vt=t,jt=0;jt<vt.length;jt++){const o=vt[jt];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}vt=null,jt=0}}const xo=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ci(e){Un=!1,vo=!0;try{for(it=0;it<ze.length;it++){const t=ze[it];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Mo(t,t.i,t.i?15:14),t.flags&=-2)}}finally{for(;it<ze.length;it++){const t=ze[it];t&&(t.flags&=-2)}it=0,ze.length=0,li(),vo=!1,pr=null,(ze.length||Wt.length)&&ci()}}let $e=null,fi=null;function Wo(e){const t=$e;return $e=e,fi=e&&e.type.__scopeId||null,t}function Se(e,t=$e,o){if(!t||e._n)return e;const n=(...r)=>{n._d&&Kr(-1);const s=Wo(t);let i;try{i=e(...r)}finally{Wo(s),n._d&&Kr(1)}return i};return n._n=!0,n._c=!0,n._d=!0,n}function Ct(e,t,o,n){const r=e.dirs,s=t&&t.dirs;for(let i=0;i<r.length;i++){const a=r[i];s&&(a.oldValue=s[i].value);let l=a.dir[n];l&&(Nt(),ut(l,o,8,[e.el,a,e,t]),It())}}const ul=Symbol("_vte"),dl=e=>e.__isTeleport;function gr(e,t){e.shapeFlag&6&&e.component?(e.transition=t,gr(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function ui(e,t){return q(e)?Ie({name:e.name},t,{setup:e}):e}function di(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Xn(e,t,o,n,r=!1){if(G(e)){e.forEach((B,L)=>Xn(B,t&&(G(t)?t[L]:t),o,n,r));return}if(qt(n)&&!r)return;const s=n.shapeFlag&4?_r(n.component):n.el,i=r?null:s,{i:a,r:l}=e,d=t&&t.r,f=a.refs===ue?a.refs={}:a.refs,h=a.setupState,p=ae(h),g=h===ue?()=>!1:B=>ie(p,B);if(d!=null&&d!==l&&(ye(d)?(f[d]=null,g(d)&&(h[d]=null)):Te(d)&&(d.value=null)),q(l))Mo(l,a,12,[i,f]);else{const B=ye(l),L=Te(l);if(B||L){const K=()=>{if(e.f){const $=B?g(l)?h[l]:f[l]:l.value;r?G($)&&or($,s):G($)?$.includes(s)||$.push(s):B?(f[l]=[s],g(l)&&(h[l]=f[l])):(l.value=[s],e.k&&(f[e.k]=l.value))}else B?(f[l]=i,g(l)&&(h[l]=i)):L&&(l.value=i,e.k&&(f[e.k]=i))};i?(K.id=-1,Ye(K,o)):K()}}}const qt=e=>!!e.type.__asyncLoader,hi=e=>e.type.__isKeepAlive;function hl(e,t){pi(e,"a",t)}function pl(e,t){pi(e,"da",t)}function pi(e,t,o=Ce){const n=e.__wdc||(e.__wdc=()=>{let r=o;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(hn(t,n,o),o){let r=o.parent;for(;r&&r.parent;)hi(r.parent.vnode)&&ml(n,t,o,r),r=r.parent}}function ml(e,t,o,n){const r=hn(t,e,n,!0);mi(()=>{or(n[t],r)},o)}function hn(e,t,o=Ce,n=!1){if(o){const r=o[e]||(o[e]=[]),s=t.__weh||(t.__weh=(...i)=>{Nt();const a=Bo(o),l=ut(t,o,e,i);return a(),It(),l});return n?r.unshift(s):r.push(s),s}}const wt=e=>(t,o=Ce)=>{(!gn||e==="sp")&&hn(e,(...n)=>t(...n),o)},gl=wt("bm"),bl=wt("m"),wl=wt("bu"),yl=wt("u"),_l=wt("bum"),mi=wt("um"),vl=wt("sp"),xl=wt("rtg"),El=wt("rtc");function kl(e,t=Ce){hn("ec",e,t)}const Ol="components";function Rl(e,t){return Sl(Ol,e,!0,t)||e}const Tl=Symbol.for("v-ndc");function Sl(e,t,o=!0,n=!1){const r=$e||Ce;if(r){const s=r.type;{const a=gc(s,!1);if(a&&(a===t||a===tt(t)||a===an(tt(t))))return s}const i=zr(r[e]||s[e],t)||zr(r.appContext[e],t);return!i&&n?s:i}}function zr(e,t){return e&&(e[t]||e[tt(t)]||e[an(tt(t))])}function _e(e,t,o,n){let r;const s=o,i=G(e);if(i||ye(e)){const a=i&&Gt(e);let l=!1;a&&(l=!qe(e),e=ln(e)),r=new Array(e.length);for(let d=0,f=e.length;d<f;d++)r[d]=t(l?Ae(e[d]):e[d],d,void 0,s)}else if(typeof e=="number"){r=new Array(e);for(let a=0;a<e;a++)r[a]=t(a+1,a,void 0,s)}else if(pe(e))if(e[Symbol.iterator])r=Array.from(e,(a,l)=>t(a,l,void 0,s));else{const a=Object.keys(e);r=new Array(a.length);for(let l=0,d=a.length;l<d;l++){const f=a[l];r[l]=t(e[f],f,l,s)}}else r=[];return r}function Nl(e,t,o={},n,r){if($e.ce||$e.parent&&qt($e.parent)&&$e.parent.ce)return V(),Gn(Q,null,[U("slot",o,n)],64);let s=e[t];s&&s._c&&(s._d=!1),V();const i=s&&gi(s(o)),a=Gn(Q,{key:(o.key||i&&i.key||`_${t}`)+(!i&&n?"_fb":"")},i||[],i&&e._===1?64:-2);return s&&s._c&&(s._d=!0),a}function gi(e){return e.some(t=>Zo(t)?!(t.type===Tt||t.type===Q&&!gi(t.children)):!0)?e:null}const jn=e=>e?Pi(e)?_r(e):jn(e.parent):null,mo=Ie(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>jn(e.parent),$root:e=>jn(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>br(e),$forceUpdate:e=>e.f||(e.f=()=>{mr(e.update)}),$nextTick:e=>e.n||(e.n=ii.bind(e.proxy)),$watch:e=>ql.bind(e)}),Sn=(e,t)=>e!==ue&&!e.__isScriptSetup&&ie(e,t),Il={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:o,setupState:n,data:r,props:s,accessCache:i,type:a,appContext:l}=e;let d;if(t[0]!=="$"){const g=i[t];if(g!==void 0)switch(g){case 1:return n[t];case 2:return r[t];case 4:return o[t];case 3:return s[t]}else{if(Sn(n,t))return i[t]=1,n[t];if(r!==ue&&ie(r,t))return i[t]=2,r[t];if((d=e.propsOptions[0])&&ie(d,t))return i[t]=3,s[t];if(o!==ue&&ie(o,t))return i[t]=4,o[t];Yn&&(i[t]=0)}}const f=mo[t];let h,p;if(f)return t==="$attrs"&&Le(e.attrs,"get",""),f(e);if((h=a.__cssModules)&&(h=h[t]))return h;if(o!==ue&&ie(o,t))return i[t]=4,o[t];if(p=l.config.globalProperties,ie(p,t))return p[t]},set({_:e},t,o){const{data:n,setupState:r,ctx:s}=e;return Sn(r,t)?(r[t]=o,!0):n!==ue&&ie(n,t)?(n[t]=o,!0):ie(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=o,!0)},has({_:{data:e,setupState:t,accessCache:o,ctx:n,appContext:r,propsOptions:s}},i){let a;return!!o[i]||e!==ue&&ie(e,i)||Sn(t,i)||(a=s[0])&&ie(a,i)||ie(n,i)||ie(mo,i)||ie(r.config.globalProperties,i)},defineProperty(e,t,o){return o.get!=null?e._.accessCache[t]=0:ie(o,"value")&&this.set(e,t,o.value,null),Reflect.defineProperty(e,t,o)}};function $r(e){return G(e)?e.reduce((t,o)=>(t[o]=null,t),{}):e}let Yn=!0;function Al(e){const t=br(e),o=e.proxy,n=e.ctx;Yn=!1,t.beforeCreate&&Hr(t.beforeCreate,e,"bc");const{data:r,computed:s,methods:i,watch:a,provide:l,inject:d,created:f,beforeMount:h,mounted:p,beforeUpdate:g,updated:B,activated:L,deactivated:K,beforeDestroy:$,beforeUnmount:P,destroyed:z,unmounted:M,render:oe,renderTracked:de,renderTriggered:ce,errorCaptured:Me,serverPrefetch:xe,expose:Be,inheritAttrs:Ue,components:Ze,directives:He,filters:dt}=t;if(d&&Cl(d,n,null),i)for(const w in i){const R=i[w];q(R)&&(n[w]=R.bind(o))}if(r){const w=r.call(o,o);pe(w)&&(e.data=fn(w))}if(Yn=!0,s)for(const w in s){const R=s[w],X=q(R)?R.bind(o,o):q(R.get)?R.get.bind(o,o):ct,J=!q(R)&&q(R.set)?R.set.bind(o):ct,te=We({get:X,set:J});Object.defineProperty(n,w,{enumerable:!0,configurable:!0,get:()=>te.value,set:se=>te.value=se})}if(a)for(const w in a)bi(a[w],n,o,w);if(l){const w=q(l)?l.call(o):l;Reflect.ownKeys(w).forEach(R=>{jo(R,w[R])})}f&&Hr(f,e,"c");function me(w,R){G(R)?R.forEach(X=>w(X.bind(o))):R&&w(R.bind(o))}if(me(gl,h),me(bl,p),me(wl,g),me(yl,B),me(hl,L),me(pl,K),me(kl,Me),me(El,de),me(xl,ce),me(_l,P),me(mi,M),me(vl,xe),G(Be))if(Be.length){const w=e.exposed||(e.exposed={});Be.forEach(R=>{Object.defineProperty(w,R,{get:()=>o[R],set:X=>o[R]=X})})}else e.exposed||(e.exposed={});oe&&e.render===ct&&(e.render=oe),Ue!=null&&(e.inheritAttrs=Ue),Ze&&(e.components=Ze),He&&(e.directives=He),xe&&di(e)}function Cl(e,t,o=ct){G(e)&&(e=Vn(e));for(const n in e){const r=e[n];let s;pe(r)?"default"in r?s=ft(r.from||n,r.default,!0):s=ft(r.from||n):s=ft(r),Te(s)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:i=>s.value=i}):t[n]=s}}function Hr(e,t,o){ut(G(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,o)}function bi(e,t,o,n){let r=n.includes(".")?Ai(o,n):()=>o[n];if(ye(e)){const s=t[e];q(s)&&Jt(r,s)}else if(q(e))Jt(r,e.bind(o));else if(pe(e))if(G(e))e.forEach(s=>bi(s,t,o,n));else{const s=q(e.handler)?e.handler.bind(o):t[e.handler];q(s)&&Jt(r,s,e)}}function br(e){const t=e.type,{mixins:o,extends:n}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:i}}=e.appContext,a=s.get(t);let l;return a?l=a:!r.length&&!o&&!n?l=t:(l={},r.length&&r.forEach(d=>qo(l,d,i,!0)),qo(l,t,i)),pe(t)&&s.set(t,l),l}function qo(e,t,o,n=!1){const{mixins:r,extends:s}=t;s&&qo(e,s,o,!0),r&&r.forEach(i=>qo(e,i,o,!0));for(const i in t)if(!(n&&i==="expose")){const a=Ll[i]||o&&o[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const Ll={data:Ur,props:Xr,emits:Xr,methods:uo,computed:uo,beforeCreate:De,created:De,beforeMount:De,mounted:De,beforeUpdate:De,updated:De,beforeDestroy:De,beforeUnmount:De,destroyed:De,unmounted:De,activated:De,deactivated:De,errorCaptured:De,serverPrefetch:De,components:uo,directives:uo,watch:Bl,provide:Ur,inject:Ml};function Ur(e,t){return t?e?function(){return Ie(q(e)?e.call(this,this):e,q(t)?t.call(this,this):t)}:t:e}function Ml(e,t){return uo(Vn(e),Vn(t))}function Vn(e){if(G(e)){const t={};for(let o=0;o<e.length;o++)t[e[o]]=e[o];return t}return e}function De(e,t){return e?[...new Set([].concat(e,t))]:t}function uo(e,t){return e?Ie(Object.create(null),e,t):t}function Xr(e,t){return e?G(e)&&G(t)?[...new Set([...e,...t])]:Ie(Object.create(null),$r(e),$r(t??{})):t}function Bl(e,t){if(!e)return t;if(!t)return e;const o=Ie(Object.create(null),e);for(const n in t)o[n]=De(e[n],t[n]);return o}function wi(){return{app:null,config:{isNativeTag:_a,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Pl=0;function Fl(e,t){return function(n,r=null){q(n)||(n=Ie({},n)),r!=null&&!pe(r)&&(r=null);const s=wi(),i=new WeakSet,a=[];let l=!1;const d=s.app={_uid:Pl++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:wc,get config(){return s.config},set config(f){},use(f,...h){return i.has(f)||(f&&q(f.install)?(i.add(f),f.install(d,...h)):q(f)&&(i.add(f),f(d,...h))),d},mixin(f){return s.mixins.includes(f)||s.mixins.push(f),d},component(f,h){return h?(s.components[f]=h,d):s.components[f]},directive(f,h){return h?(s.directives[f]=h,d):s.directives[f]},mount(f,h,p){if(!l){const g=d._ceVNode||U(n,r);return g.appContext=s,p===!0?p="svg":p===!1&&(p=void 0),h&&t?t(g,f):e(g,f,p),l=!0,d._container=f,f.__vue_app__=d,_r(g.component)}},onUnmount(f){a.push(f)},unmount(){l&&(ut(a,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(f,h){return s.provides[f]=h,d},runWithContext(f){const h=Zt;Zt=d;try{return f()}finally{Zt=h}}};return d}}let Zt=null;function jo(e,t){if(Ce){let o=Ce.provides;const n=Ce.parent&&Ce.parent.provides;n===o&&(o=Ce.provides=Object.create(n)),o[e]=t}}function ft(e,t,o=!1){const n=Ce||$e;if(n||Zt){const r=Zt?Zt._context.provides:n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return o&&q(t)?t.call(n&&n.proxy):t}}const yi={},_i=()=>Object.create(yi),vi=e=>Object.getPrototypeOf(e)===yi;function Dl(e,t,o,n=!1){const r={},s=_i();e.propsDefaults=Object.create(null),xi(e,t,r,s);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);o?e.props=n?r:ti(r):e.type.props?e.props=r:e.props=s,e.attrs=s}function zl(e,t,o,n){const{props:r,attrs:s,vnode:{patchFlag:i}}=e,a=ae(r),[l]=e.propsOptions;let d=!1;if((n||i>0)&&!(i&16)){if(i&8){const f=e.vnode.dynamicProps;for(let h=0;h<f.length;h++){let p=f[h];if(pn(e.emitsOptions,p))continue;const g=t[p];if(l)if(ie(s,p))g!==s[p]&&(s[p]=g,d=!0);else{const B=tt(p);r[B]=Kn(l,a,B,g,e,!1)}else g!==s[p]&&(s[p]=g,d=!0)}}}else{xi(e,t,r,s)&&(d=!0);let f;for(const h in a)(!t||!ie(t,h)&&((f=$t(h))===h||!ie(t,f)))&&(l?o&&(o[h]!==void 0||o[f]!==void 0)&&(r[h]=Kn(l,a,h,void 0,e,!0)):delete r[h]);if(s!==a)for(const h in s)(!t||!ie(t,h))&&(delete s[h],d=!0)}d&&bt(e.attrs,"set","")}function xi(e,t,o,n){const[r,s]=e.propsOptions;let i=!1,a;if(t)for(let l in t){if(ho(l))continue;const d=t[l];let f;r&&ie(r,f=tt(l))?!s||!s.includes(f)?o[f]=d:(a||(a={}))[f]=d:pn(e.emitsOptions,l)||(!(l in n)||d!==n[l])&&(n[l]=d,i=!0)}if(s){const l=ae(o),d=a||ue;for(let f=0;f<s.length;f++){const h=s[f];o[h]=Kn(r,l,h,d[h],e,!ie(d,h))}}return i}function Kn(e,t,o,n,r,s){const i=e[o];if(i!=null){const a=ie(i,"default");if(a&&n===void 0){const l=i.default;if(i.type!==Function&&!i.skipFactory&&q(l)){const{propsDefaults:d}=r;if(o in d)n=d[o];else{const f=Bo(r);n=d[o]=l.call(null,t),f()}}else n=l;r.ce&&r.ce._setProp(o,n)}i[0]&&(s&&!a?n=!1:i[1]&&(n===""||n===$t(o))&&(n=!0))}return n}const $l=new WeakMap;function Ei(e,t,o=!1){const n=o?$l:t.propsCache,r=n.get(e);if(r)return r;const s=e.props,i={},a=[];let l=!1;if(!q(e)){const f=h=>{l=!0;const[p,g]=Ei(h,t,!0);Ie(i,p),g&&a.push(...g)};!o&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!s&&!l)return pe(e)&&n.set(e,Vt),Vt;if(G(s))for(let f=0;f<s.length;f++){const h=tt(s[f]);jr(h)&&(i[h]=ue)}else if(s)for(const f in s){const h=tt(f);if(jr(h)){const p=s[f],g=i[h]=G(p)||q(p)?{type:p}:Ie({},p),B=g.type;let L=!1,K=!0;if(G(B))for(let $=0;$<B.length;++$){const P=B[$],z=q(P)&&P.name;if(z==="Boolean"){L=!0;break}else z==="String"&&(K=!1)}else L=q(B)&&B.name==="Boolean";g[0]=L,g[1]=K,(L||ie(g,"default"))&&a.push(h)}}const d=[i,a];return pe(e)&&n.set(e,d),d}function jr(e){return e[0]!=="$"&&!ho(e)}const ki=e=>e[0]==="_"||e==="$stable",wr=e=>G(e)?e.map(lt):[lt(e)],Hl=(e,t,o)=>{if(t._n)return t;const n=Se((...r)=>wr(t(...r)),o);return n._c=!1,n},Oi=(e,t,o)=>{const n=e._ctx;for(const r in e){if(ki(r))continue;const s=e[r];if(q(s))t[r]=Hl(r,s,n);else if(s!=null){const i=wr(s);t[r]=()=>i}}},Ri=(e,t)=>{const o=wr(t);e.slots.default=()=>o},Ti=(e,t,o)=>{for(const n in t)(o||n!=="_")&&(e[n]=t[n])},Ul=(e,t,o)=>{const n=e.slots=_i();if(e.vnode.shapeFlag&32){const r=t._;r?(Ti(n,t,o),o&&Fs(n,"_",r,!0)):Oi(t,n)}else t&&Ri(e,t)},Xl=(e,t,o)=>{const{vnode:n,slots:r}=e;let s=!0,i=ue;if(n.shapeFlag&32){const a=t._;a?o&&a===1?s=!1:Ti(r,t,o):(s=!t.$stable,Oi(t,r)),i=t}else t&&(Ri(e,t),i={default:1});if(s)for(const a in r)!ki(a)&&i[a]==null&&delete r[a]},Ye=nc;function jl(e){return Yl(e)}function Yl(e,t){const o=Ds();o.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:i,createText:a,createComment:l,setText:d,setElementText:f,parentNode:h,nextSibling:p,setScopeId:g=ct,insertStaticContent:B}=e,L=(c,u,m,x=null,y=null,k=null,_=void 0,S=null,O=!!u.dynamicChildren)=>{if(c===u)return;c&&!co(c,u)&&(x=v(c),se(c,y,k,!0),c=null),u.patchFlag===-2&&(O=!1,u.dynamicChildren=null);const{type:b,ref:H,shapeFlag:N}=u;switch(b){case mn:K(c,u,m,x);break;case Tt:$(c,u,m,x);break;case An:c==null&&P(u,m,x,_);break;case Q:Ze(c,u,m,x,y,k,_,S,O);break;default:N&1?oe(c,u,m,x,y,k,_,S,O):N&6?He(c,u,m,x,y,k,_,S,O):(N&64||N&128)&&b.process(c,u,m,x,y,k,_,S,O,F)}H!=null&&y&&Xn(H,c&&c.ref,k,u||c,!u)},K=(c,u,m,x)=>{if(c==null)n(u.el=a(u.children),m,x);else{const y=u.el=c.el;u.children!==c.children&&d(y,u.children)}},$=(c,u,m,x)=>{c==null?n(u.el=l(u.children||""),m,x):u.el=c.el},P=(c,u,m,x)=>{[c.el,c.anchor]=B(c.children,u,m,x,c.el,c.anchor)},z=({el:c,anchor:u},m,x)=>{let y;for(;c&&c!==u;)y=p(c),n(c,m,x),c=y;n(u,m,x)},M=({el:c,anchor:u})=>{let m;for(;c&&c!==u;)m=p(c),r(c),c=m;r(u)},oe=(c,u,m,x,y,k,_,S,O)=>{u.type==="svg"?_="svg":u.type==="math"&&(_="mathml"),c==null?de(u,m,x,y,k,_,S,O):xe(c,u,y,k,_,S,O)},de=(c,u,m,x,y,k,_,S)=>{let O,b;const{props:H,shapeFlag:N,transition:D,dirs:Y}=c;if(O=c.el=i(c.type,k,H&&H.is,H),N&8?f(O,c.children):N&16&&Me(c.children,O,null,x,y,Nn(c,k),_,S),Y&&Ct(c,null,x,"created"),ce(O,c,c.scopeId,_,x),H){for(const T in H)T!=="value"&&!ho(T)&&s(O,T,null,H[T],k,x);"value"in H&&s(O,"value",null,H.value,k),(b=H.onVnodeBeforeMount)&&st(b,x,c)}Y&&Ct(c,null,x,"beforeMount");const E=Vl(y,D);E&&D.beforeEnter(O),n(O,u,m),((b=H&&H.onVnodeMounted)||E||Y)&&Ye(()=>{b&&st(b,x,c),E&&D.enter(O),Y&&Ct(c,null,x,"mounted")},y)},ce=(c,u,m,x,y)=>{if(m&&g(c,m),x)for(let k=0;k<x.length;k++)g(c,x[k]);if(y){let k=y.subTree;if(u===k||Li(k.type)&&(k.ssContent===u||k.ssFallback===u)){const _=y.vnode;ce(c,_,_.scopeId,_.slotScopeIds,y.parent)}}},Me=(c,u,m,x,y,k,_,S,O=0)=>{for(let b=O;b<c.length;b++){const H=c[b]=S?xt(c[b]):lt(c[b]);L(null,H,u,m,x,y,k,_,S)}},xe=(c,u,m,x,y,k,_)=>{const S=u.el=c.el;let{patchFlag:O,dynamicChildren:b,dirs:H}=u;O|=c.patchFlag&16;const N=c.props||ue,D=u.props||ue;let Y;if(m&&Lt(m,!1),(Y=D.onVnodeBeforeUpdate)&&st(Y,m,u,c),H&&Ct(u,c,m,"beforeUpdate"),m&&Lt(m,!0),(N.innerHTML&&D.innerHTML==null||N.textContent&&D.textContent==null)&&f(S,""),b?Be(c.dynamicChildren,b,S,m,x,Nn(u,y),k):_||R(c,u,S,null,m,x,Nn(u,y),k,!1),O>0){if(O&16)Ue(S,N,D,m,y);else if(O&2&&N.class!==D.class&&s(S,"class",null,D.class,y),O&4&&s(S,"style",N.style,D.style,y),O&8){const E=u.dynamicProps;for(let T=0;T<E.length;T++){const C=E[T],W=N[C],ne=D[C];(ne!==W||C==="value")&&s(S,C,W,ne,y,m)}}O&1&&c.children!==u.children&&f(S,u.children)}else!_&&b==null&&Ue(S,N,D,m,y);((Y=D.onVnodeUpdated)||H)&&Ye(()=>{Y&&st(Y,m,u,c),H&&Ct(u,c,m,"updated")},x)},Be=(c,u,m,x,y,k,_)=>{for(let S=0;S<u.length;S++){const O=c[S],b=u[S],H=O.el&&(O.type===Q||!co(O,b)||O.shapeFlag&70)?h(O.el):m;L(O,b,H,null,x,y,k,_,!0)}},Ue=(c,u,m,x,y)=>{if(u!==m){if(u!==ue)for(const k in u)!ho(k)&&!(k in m)&&s(c,k,u[k],null,y,x);for(const k in m){if(ho(k))continue;const _=m[k],S=u[k];_!==S&&k!=="value"&&s(c,k,S,_,y,x)}"value"in m&&s(c,"value",u.value,m.value,y)}},Ze=(c,u,m,x,y,k,_,S,O)=>{const b=u.el=c?c.el:a(""),H=u.anchor=c?c.anchor:a("");let{patchFlag:N,dynamicChildren:D,slotScopeIds:Y}=u;Y&&(S=S?S.concat(Y):Y),c==null?(n(b,m,x),n(H,m,x),Me(u.children||[],m,H,y,k,_,S,O)):N>0&&N&64&&D&&c.dynamicChildren?(Be(c.dynamicChildren,D,m,y,k,_,S),(u.key!=null||y&&u===y.subTree)&&Si(c,u,!0)):R(c,u,m,H,y,k,_,S,O)},He=(c,u,m,x,y,k,_,S,O)=>{u.slotScopeIds=S,c==null?u.shapeFlag&512?y.ctx.activate(u,m,x,_,O):dt(u,m,x,y,k,_,O):Xe(c,u,O)},dt=(c,u,m,x,y,k,_)=>{const S=c.component=uc(c,x,y);if(hi(c)&&(S.ctx.renderer=F),dc(S,!1,_),S.asyncDep){if(y&&y.registerDep(S,me,_),!c.el){const O=S.subTree=U(Tt);$(null,O,u,m)}}else me(S,c,u,m,y,k,_)},Xe=(c,u,m)=>{const x=u.component=c.component;if(tc(c,u,m))if(x.asyncDep&&!x.asyncResolved){w(x,u,m);return}else x.next=u,x.update();else u.el=c.el,x.vnode=u},me=(c,u,m,x,y,k,_)=>{const S=()=>{if(c.isMounted){let{next:N,bu:D,u:Y,parent:E,vnode:T}=c;{const Pe=Ni(c);if(Pe){N&&(N.el=T.el,w(c,N,_)),Pe.asyncDep.then(()=>{c.isUnmounted||S()});return}}let C=N,W;Lt(c,!1),N?(N.el=T.el,w(c,N,_)):N=T,D&&En(D),(W=N.props&&N.props.onVnodeBeforeUpdate)&&st(W,E,N,T),Lt(c,!0);const ne=In(c),be=c.subTree;c.subTree=ne,L(be,ne,h(be.el),v(be),c,y,k),N.el=ne.el,C===null&&oc(c,ne.el),Y&&Ye(Y,y),(W=N.props&&N.props.onVnodeUpdated)&&Ye(()=>st(W,E,N,T),y)}else{let N;const{el:D,props:Y}=u,{bm:E,m:T,parent:C,root:W,type:ne}=c,be=qt(u);if(Lt(c,!1),E&&En(E),!be&&(N=Y&&Y.onVnodeBeforeMount)&&st(N,C,u),Lt(c,!0),D&&he){const Pe=()=>{c.subTree=In(c),he(D,c.subTree,c,y,null)};be&&ne.__asyncHydrate?ne.__asyncHydrate(D,c,Pe):Pe()}else{W.ce&&W.ce._injectChildStyle(ne);const Pe=c.subTree=In(c);L(null,Pe,m,x,c,y,k),u.el=Pe.el}if(T&&Ye(T,y),!be&&(N=Y&&Y.onVnodeMounted)){const Pe=u;Ye(()=>st(N,C,Pe),y)}(u.shapeFlag&256||C&&qt(C.vnode)&&C.vnode.shapeFlag&256)&&c.a&&Ye(c.a,y),c.isMounted=!0,u=m=x=null}};c.scope.on();const O=c.effect=new Us(S);c.scope.off();const b=c.update=O.run.bind(O),H=c.job=O.runIfDirty.bind(O);H.i=c,H.id=c.uid,O.scheduler=()=>mr(H),Lt(c,!0),b()},w=(c,u,m)=>{u.component=c;const x=c.vnode.props;c.vnode=u,c.next=null,zl(c,u.props,x,m),Xl(c,u.children,m),Nt(),Dr(c),It()},R=(c,u,m,x,y,k,_,S,O=!1)=>{const b=c&&c.children,H=c?c.shapeFlag:0,N=u.children,{patchFlag:D,shapeFlag:Y}=u;if(D>0){if(D&128){J(b,N,m,x,y,k,_,S,O);return}else if(D&256){X(b,N,m,x,y,k,_,S,O);return}}Y&8?(H&16&&ge(b,y,k),N!==b&&f(m,N)):H&16?Y&16?J(b,N,m,x,y,k,_,S,O):ge(b,y,k,!0):(H&8&&f(m,""),Y&16&&Me(N,m,x,y,k,_,S,O))},X=(c,u,m,x,y,k,_,S,O)=>{c=c||Vt,u=u||Vt;const b=c.length,H=u.length,N=Math.min(b,H);let D;for(D=0;D<N;D++){const Y=u[D]=O?xt(u[D]):lt(u[D]);L(c[D],Y,m,null,y,k,_,S,O)}b>H?ge(c,y,k,!0,!1,N):Me(u,m,x,y,k,_,S,O,N)},J=(c,u,m,x,y,k,_,S,O)=>{let b=0;const H=u.length;let N=c.length-1,D=H-1;for(;b<=N&&b<=D;){const Y=c[b],E=u[b]=O?xt(u[b]):lt(u[b]);if(co(Y,E))L(Y,E,m,null,y,k,_,S,O);else break;b++}for(;b<=N&&b<=D;){const Y=c[N],E=u[D]=O?xt(u[D]):lt(u[D]);if(co(Y,E))L(Y,E,m,null,y,k,_,S,O);else break;N--,D--}if(b>N){if(b<=D){const Y=D+1,E=Y<H?u[Y].el:x;for(;b<=D;)L(null,u[b]=O?xt(u[b]):lt(u[b]),m,E,y,k,_,S,O),b++}}else if(b>D)for(;b<=N;)se(c[b],y,k,!0),b++;else{const Y=b,E=b,T=new Map;for(b=E;b<=D;b++){const je=u[b]=O?xt(u[b]):lt(u[b]);je.key!=null&&T.set(je.key,b)}let C,W=0;const ne=D-E+1;let be=!1,Pe=0;const At=new Array(ne);for(b=0;b<ne;b++)At[b]=0;for(b=Y;b<=N;b++){const je=c[b];if(W>=ne){se(je,y,k,!0);continue}let rt;if(je.key!=null)rt=T.get(je.key);else for(C=E;C<=D;C++)if(At[C-E]===0&&co(je,u[C])){rt=C;break}rt===void 0?se(je,y,k,!0):(At[rt-E]=b+1,rt>=Pe?Pe=rt:be=!0,L(je,u[rt],m,null,y,k,_,S,O),W++)}const Sr=be?Kl(At):Vt;for(C=Sr.length-1,b=ne-1;b>=0;b--){const je=E+b,rt=u[je],Nr=je+1<H?u[je+1].el:x;At[b]===0?L(null,rt,m,Nr,y,k,_,S,O):be&&(C<0||b!==Sr[C]?te(rt,m,Nr,2):C--)}}},te=(c,u,m,x,y=null)=>{const{el:k,type:_,transition:S,children:O,shapeFlag:b}=c;if(b&6){te(c.component.subTree,u,m,x);return}if(b&128){c.suspense.move(u,m,x);return}if(b&64){_.move(c,u,m,F);return}if(_===Q){n(k,u,m);for(let N=0;N<O.length;N++)te(O[N],u,m,x);n(c.anchor,u,m);return}if(_===An){z(c,u,m);return}if(x!==2&&b&1&&S)if(x===0)S.beforeEnter(k),n(k,u,m),Ye(()=>S.enter(k),y);else{const{leave:N,delayLeave:D,afterLeave:Y}=S,E=()=>n(k,u,m),T=()=>{N(k,()=>{E(),Y&&Y()})};D?D(k,E,T):T()}else n(k,u,m)},se=(c,u,m,x=!1,y=!1)=>{const{type:k,props:_,ref:S,children:O,dynamicChildren:b,shapeFlag:H,patchFlag:N,dirs:D,cacheIndex:Y}=c;if(N===-2&&(y=!1),S!=null&&Xn(S,null,m,c,!0),Y!=null&&(u.renderCache[Y]=void 0),H&256){u.ctx.deactivate(c);return}const E=H&1&&D,T=!qt(c);let C;if(T&&(C=_&&_.onVnodeBeforeUnmount)&&st(C,u,c),H&6)Oe(c.component,m,x);else{if(H&128){c.suspense.unmount(m,x);return}E&&Ct(c,null,u,"beforeUnmount"),H&64?c.type.remove(c,u,m,F,x):b&&!b.hasOnce&&(k!==Q||N>0&&N&64)?ge(b,u,m,!1,!0):(k===Q&&N&384||!y&&H&16)&&ge(O,u,m),x&&ke(c)}(T&&(C=_&&_.onVnodeUnmounted)||E)&&Ye(()=>{C&&st(C,u,c),E&&Ct(c,null,u,"unmounted")},m)},ke=c=>{const{type:u,el:m,anchor:x,transition:y}=c;if(u===Q){Je(m,x);return}if(u===An){M(c);return}const k=()=>{r(m),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(c.shapeFlag&1&&y&&!y.persisted){const{leave:_,delayLeave:S}=y,O=()=>_(m,k);S?S(c.el,k,O):O()}else k()},Je=(c,u)=>{let m;for(;c!==u;)m=p(c),r(c),c=m;r(u)},Oe=(c,u,m)=>{const{bum:x,scope:y,job:k,subTree:_,um:S,m:O,a:b}=c;Yr(O),Yr(b),x&&En(x),y.stop(),k&&(k.flags|=8,se(_,c,u,m)),S&&Ye(S,u),Ye(()=>{c.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},ge=(c,u,m,x=!1,y=!1,k=0)=>{for(let _=k;_<c.length;_++)se(c[_],u,m,x,y)},v=c=>{if(c.shapeFlag&6)return v(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const u=p(c.anchor||c.el),m=u&&u[ul];return m?p(m):u};let A=!1;const I=(c,u,m)=>{c==null?u._vnode&&se(u._vnode,null,null,!0):L(u._vnode||null,c,u,null,null,null,m),u._vnode=c,A||(A=!0,Dr(),li(),A=!1)},F={p:L,um:se,m:te,r:ke,mt:dt,mc:Me,pc:R,pbc:Be,n:v,o:e};let re,he;return{render:I,hydrate:re,createApp:Fl(I,re)}}function Nn({type:e,props:t},o){return o==="svg"&&e==="foreignObject"||o==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:o}function Lt({effect:e,job:t},o){o?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Vl(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Si(e,t,o=!1){const n=e.children,r=t.children;if(G(n)&&G(r))for(let s=0;s<n.length;s++){const i=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=xt(r[s]),a.el=i.el),!o&&a.patchFlag!==-2&&Si(i,a)),a.type===mn&&(a.el=i.el)}}function Kl(e){const t=e.slice(),o=[0];let n,r,s,i,a;const l=e.length;for(n=0;n<l;n++){const d=e[n];if(d!==0){if(r=o[o.length-1],e[r]<d){t[n]=r,o.push(n);continue}for(s=0,i=o.length-1;s<i;)a=s+i>>1,e[o[a]]<d?s=a+1:i=a;d<e[o[s]]&&(s>0&&(t[n]=o[s-1]),o[s]=n)}}for(s=o.length,i=o[s-1];s-- >0;)o[s]=i,i=t[i];return o}function Ni(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ni(t)}function Yr(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Gl=Symbol.for("v-scx"),Wl=()=>ft(Gl);function Jt(e,t,o){return Ii(e,t,o)}function Ii(e,t,o=ue){const{immediate:n,deep:r,flush:s,once:i}=o,a=Ie({},o);let l;if(gn)if(s==="sync"){const p=Wl();l=p.__watcherHandles||(p.__watcherHandles=[])}else if(!t||n)a.once=!0;else return{stop:ct,resume:ct,pause:ct};const d=Ce;a.call=(p,g,B)=>ut(p,d,g,B);let f=!1;s==="post"?a.scheduler=p=>{Ye(p,d&&d.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(p,g)=>{g?p():mr(p)}),a.augmentJob=p=>{t&&(p.flags|=4),f&&(p.flags|=2,d&&(p.id=d.uid,p.i=d))};const h=al(e,t,a);return l&&l.push(h),h}function ql(e,t,o){const n=this.proxy,r=ye(e)?e.includes(".")?Ai(n,e):()=>n[e]:e.bind(n,n);let s;q(t)?s=t:(s=t.handler,o=t);const i=Bo(this),a=Ii(r,s.bind(n),o);return i(),a}function Ai(e,t){const o=t.split(".");return()=>{let n=e;for(let r=0;r<o.length&&n;r++)n=n[o[r]];return n}}const Zl=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${tt(t)}Modifiers`]||e[`${$t(t)}Modifiers`];function Jl(e,t,...o){if(e.isUnmounted)return;const n=e.vnode.props||ue;let r=o;const s=t.startsWith("update:"),i=s&&Zl(n,t.slice(7));i&&(i.trim&&(r=o.map(f=>ye(f)?f.trim():f)),i.number&&(r=o.map(Oa)));let a,l=n[a=xn(t)]||n[a=xn(tt(t))];!l&&s&&(l=n[a=xn($t(t))]),l&&ut(l,e,6,r);const d=n[a+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,ut(d,e,6,r)}}function Ci(e,t,o=!1){const n=t.emitsCache,r=n.get(e);if(r!==void 0)return r;const s=e.emits;let i={},a=!1;if(!q(e)){const l=d=>{const f=Ci(d,t,!0);f&&(a=!0,Ie(i,f))};!o&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!a?(pe(e)&&n.set(e,null),null):(G(s)?s.forEach(l=>i[l]=null):Ie(i,s),pe(e)&&n.set(e,i),i)}function pn(e,t){return!e||!nn(t)?!1:(t=t.slice(2).replace(/Once$/,""),ie(e,t[0].toLowerCase()+t.slice(1))||ie(e,$t(t))||ie(e,t))}function In(e){const{type:t,vnode:o,proxy:n,withProxy:r,propsOptions:[s],slots:i,attrs:a,emit:l,render:d,renderCache:f,props:h,data:p,setupState:g,ctx:B,inheritAttrs:L}=e,K=Wo(e);let $,P;try{if(o.shapeFlag&4){const M=r||n,oe=M;$=lt(d.call(oe,M,f,h,g,p,B)),P=a}else{const M=t;$=lt(M.length>1?M(h,{attrs:a,slots:i,emit:l}):M(h,null)),P=t.props?a:Ql(a)}}catch(M){go.length=0,dn(M,e,1),$=U(Tt)}let z=$;if(P&&L!==!1){const M=Object.keys(P),{shapeFlag:oe}=z;M.length&&oe&7&&(s&&M.some(tr)&&(P=ec(P,s)),z=ro(z,P,!1,!0))}return o.dirs&&(z=ro(z,null,!1,!0),z.dirs=z.dirs?z.dirs.concat(o.dirs):o.dirs),o.transition&&gr(z,o.transition),$=z,Wo(K),$}const Ql=e=>{let t;for(const o in e)(o==="class"||o==="style"||nn(o))&&((t||(t={}))[o]=e[o]);return t},ec=(e,t)=>{const o={};for(const n in e)(!tr(n)||!(n.slice(9)in t))&&(o[n]=e[n]);return o};function tc(e,t,o){const{props:n,children:r,component:s}=e,{props:i,children:a,patchFlag:l}=t,d=s.emitsOptions;if(t.dirs||t.transition)return!0;if(o&&l>=0){if(l&1024)return!0;if(l&16)return n?Vr(n,i,d):!!i;if(l&8){const f=t.dynamicProps;for(let h=0;h<f.length;h++){const p=f[h];if(i[p]!==n[p]&&!pn(d,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===i?!1:n?i?Vr(n,i,d):!0:!!i;return!1}function Vr(e,t,o){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(t[s]!==e[s]&&!pn(o,s))return!0}return!1}function oc({vnode:e,parent:t},o){for(;t;){const n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.el=e.el),n===e)(e=t.vnode).el=o,t=t.parent;else break}}const Li=e=>e.__isSuspense;function nc(e,t){t&&t.pendingBranch?G(e)?t.effects.push(...e):t.effects.push(e):fl(e)}const Q=Symbol.for("v-fgt"),mn=Symbol.for("v-txt"),Tt=Symbol.for("v-cmt"),An=Symbol.for("v-stc"),go=[];let Ge=null;function V(e=!1){go.push(Ge=e?null:[])}function rc(){go.pop(),Ge=go[go.length-1]||null}let Eo=1;function Kr(e){Eo+=e,e<0&&Ge&&(Ge.hasOnce=!0)}function Mi(e){return e.dynamicChildren=Eo>0?Ge||Vt:null,rc(),Eo>0&&Ge&&Ge.push(e),e}function Z(e,t,o,n,r,s){return Mi(ee(e,t,o,n,r,s,!0))}function Gn(e,t,o,n,r){return Mi(U(e,t,o,n,r,!0))}function Zo(e){return e?e.__v_isVNode===!0:!1}function co(e,t){return e.type===t.type&&e.key===t.key}const Bi=({key:e})=>e??null,Yo=({ref:e,ref_key:t,ref_for:o})=>(typeof e=="number"&&(e=""+e),e!=null?ye(e)||Te(e)||q(e)?{i:$e,r:e,k:t,f:!!o}:e:null);function ee(e,t=null,o=null,n=0,r=null,s=e===Q?0:1,i=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Bi(t),ref:t&&Yo(t),scopeId:fi,slotScopeIds:null,children:o,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:$e};return a?(yr(l,o),s&128&&e.normalize(l)):o&&(l.shapeFlag|=ye(o)?8:16),Eo>0&&!i&&Ge&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Ge.push(l),l}const U=sc;function sc(e,t=null,o=null,n=0,r=null,s=!1){if((!e||e===Tl)&&(e=Tt),Zo(e)){const a=ro(e,t,!0);return o&&yr(a,o),Eo>0&&!s&&Ge&&(a.shapeFlag&6?Ge[Ge.indexOf(e)]=a:Ge.push(a)),a.patchFlag=-2,a}if(bc(e)&&(e=e.__vccOpts),t){t=ic(t);let{class:a,style:l}=t;a&&!ye(a)&&(t.class=Dt(a)),pe(l)&&(dr(l)&&!G(l)&&(l=Ie({},l)),t.style=rr(l))}const i=ye(e)?1:Li(e)?128:dl(e)?64:pe(e)?4:q(e)?2:0;return ee(e,t,o,n,r,i,s,!0)}function ic(e){return e?dr(e)||vi(e)?Ie({},e):e:null}function ro(e,t,o=!1,n=!1){const{props:r,ref:s,patchFlag:i,children:a,transition:l}=e,d=t?lc(r||{},t):r,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&Bi(d),ref:t&&t.ref?o&&s?G(s)?s.concat(Yo(t)):[s,Yo(t)]:Yo(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Q?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ro(e.ssContent),ssFallback:e.ssFallback&&ro(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&n&&gr(f,l.clone(f)),f}function Re(e=" ",t=0){return U(mn,null,e,t)}function ac(e="",t=!1){return t?(V(),Gn(Tt,null,e)):U(Tt,null,e)}function lt(e){return e==null||typeof e=="boolean"?U(Tt):G(e)?U(Q,null,e.slice()):typeof e=="object"?xt(e):U(mn,null,String(e))}function xt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ro(e)}function yr(e,t){let o=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(G(t))o=16;else if(typeof t=="object")if(n&65){const r=t.default;r&&(r._c&&(r._d=!1),yr(e,r()),r._c&&(r._d=!0));return}else{o=32;const r=t._;!r&&!vi(t)?t._ctx=$e:r===3&&$e&&($e.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else q(t)?(t={default:t,_ctx:$e},o=32):(t=String(t),n&64?(o=16,t=[Re(t)]):o=8);e.children=t,e.shapeFlag|=o}function lc(...e){const t={};for(let o=0;o<e.length;o++){const n=e[o];for(const r in n)if(r==="class")t.class!==n.class&&(t.class=Dt([t.class,n.class]));else if(r==="style")t.style=rr([t.style,n.style]);else if(nn(r)){const s=t[r],i=n[r];i&&s!==i&&!(G(s)&&s.includes(i))&&(t[r]=s?[].concat(s,i):i)}else r!==""&&(t[r]=n[r])}return t}function st(e,t,o,n=null){ut(e,t,7,[o,n])}const cc=wi();let fc=0;function uc(e,t,o){const n=e.type,r=(t?t.appContext:e.appContext)||cc,s={uid:fc++,vnode:e,type:n,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ca(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ei(n,r),emitsOptions:Ci(n,r),emit:null,emitted:null,propsDefaults:ue,inheritAttrs:n.inheritAttrs,ctx:ue,data:ue,props:ue,attrs:ue,slots:ue,refs:ue,setupState:ue,setupContext:null,suspense:o,suspenseId:o?o.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Jl.bind(null,s),e.ce&&e.ce(s),s}let Ce=null,Jo,Wn;{const e=Ds(),t=(o,n)=>{let r;return(r=e[o])||(r=e[o]=[]),r.push(n),s=>{r.length>1?r.forEach(i=>i(s)):r[0](s)}};Jo=t("__VUE_INSTANCE_SETTERS__",o=>Ce=o),Wn=t("__VUE_SSR_SETTERS__",o=>gn=o)}const Bo=e=>{const t=Ce;return Jo(e),e.scope.on(),()=>{e.scope.off(),Jo(t)}},Gr=()=>{Ce&&Ce.scope.off(),Jo(null)};function Pi(e){return e.vnode.shapeFlag&4}let gn=!1;function dc(e,t=!1,o=!1){t&&Wn(t);const{props:n,children:r}=e.vnode,s=Pi(e);Dl(e,n,s,t),Ul(e,r,o);const i=s?hc(e,t):void 0;return t&&Wn(!1),i}function hc(e,t){const o=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Il);const{setup:n}=o;if(n){const r=e.setupContext=n.length>1?mc(e):null,s=Bo(e);Nt();const i=Mo(n,e,0,[e.props,r]);if(It(),s(),Ms(i)){if(qt(e)||di(e),i.then(Gr,Gr),t)return i.then(a=>{Wr(e,a,t)}).catch(a=>{dn(a,e,0)});e.asyncDep=i}else Wr(e,i,t)}else Fi(e,t)}function Wr(e,t,o){q(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:pe(t)&&(e.setupState=ri(t)),Fi(e,o)}let qr;function Fi(e,t,o){const n=e.type;if(!e.render){if(!t&&qr&&!n.render){const r=n.template||br(e).template;if(r){const{isCustomElement:s,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:l}=n,d=Ie(Ie({isCustomElement:s,delimiters:a},i),l);n.render=qr(r,d)}}e.render=n.render||ct}{const r=Bo(e);Nt();try{Al(e)}finally{It(),r()}}}const pc={get(e,t){return Le(e,"get",""),e[t]}};function mc(e){const t=o=>{e.exposed=o||{}};return{attrs:new Proxy(e.attrs,pc),slots:e.slots,emit:e.emit,expose:t}}function _r(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ri(el(e.exposed)),{get(t,o){if(o in t)return t[o];if(o in mo)return mo[o](e)},has(t,o){return o in t||o in mo}})):e.proxy}function gc(e,t=!0){return q(e)?e.displayName||e.name:e.name||t&&e.__name}function bc(e){return q(e)&&"__vccOpts"in e}const We=(e,t)=>sl(e,t,gn);function Di(e,t,o){const n=arguments.length;return n===2?pe(t)&&!G(t)?Zo(t)?U(e,null,[t]):U(e,t):U(e,null,t):(n>3?o=Array.prototype.slice.call(arguments,2):n===3&&Zo(o)&&(o=[o]),U(e,t,o))}const wc="3.5.4";/**
* @vue/runtime-dom v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qn;const Zr=typeof window<"u"&&window.trustedTypes;if(Zr)try{qn=Zr.createPolicy("vue",{createHTML:e=>e})}catch{}const zi=qn?e=>qn.createHTML(e):e=>e,yc="http://www.w3.org/2000/svg",_c="http://www.w3.org/1998/Math/MathML",mt=typeof document<"u"?document:null,Jr=mt&&mt.createElement("template"),vc={insert:(e,t,o)=>{t.insertBefore(e,o||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,o,n)=>{const r=t==="svg"?mt.createElementNS(yc,e):t==="mathml"?mt.createElementNS(_c,e):o?mt.createElement(e,{is:o}):mt.createElement(e);return e==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:e=>mt.createTextNode(e),createComment:e=>mt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>mt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,o,n,r,s){const i=o?o.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),o),!(r===s||!(r=r.nextSibling)););else{Jr.innerHTML=zi(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);const a=Jr.content;if(n==="svg"||n==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,o)}return[i?i.nextSibling:t.firstChild,o?o.previousSibling:t.lastChild]}},xc=Symbol("_vtc");function Ec(e,t,o){const n=e[xc];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):o?e.setAttribute("class",t):e.className=t}const Qr=Symbol("_vod"),kc=Symbol("_vsh"),Oc=Symbol(""),Rc=/(^|;)\s*display\s*:/;function Tc(e,t,o){const n=e.style,r=ye(o);let s=!1;if(o&&!r){if(t)if(ye(t))for(const i of t.split(";")){const a=i.slice(0,i.indexOf(":")).trim();o[a]==null&&Vo(n,a,"")}else for(const i in t)o[i]==null&&Vo(n,i,"");for(const i in o)i==="display"&&(s=!0),Vo(n,i,o[i])}else if(r){if(t!==o){const i=n[Oc];i&&(o+=";"+i),n.cssText=o,s=Rc.test(o)}}else t&&e.removeAttribute("style");Qr in e&&(e[Qr]=s?n.display:"",e[kc]&&(n.display="none"))}const es=/\s*!important$/;function Vo(e,t,o){if(G(o))o.forEach(n=>Vo(e,t,n));else if(o==null&&(o=""),t.startsWith("--"))e.setProperty(t,o);else{const n=Sc(e,t);es.test(o)?e.setProperty($t(n),o.replace(es,""),"important"):e[n]=o}}const ts=["Webkit","Moz","ms"],Cn={};function Sc(e,t){const o=Cn[t];if(o)return o;let n=tt(t);if(n!=="filter"&&n in e)return Cn[t]=n;n=an(n);for(let r=0;r<ts.length;r++){const s=ts[r]+n;if(s in e)return Cn[t]=s}return t}const os="http://www.w3.org/1999/xlink";function ns(e,t,o,n,r,s=Aa(t)){n&&t.startsWith("xlink:")?o==null?e.removeAttributeNS(os,t.slice(6,t.length)):e.setAttributeNS(os,t,o):o==null||s&&!zs(o)?e.removeAttribute(t):e.setAttribute(t,s?"":St(o)?String(o):o)}function Nc(e,t,o,n){if(t==="innerHTML"||t==="textContent"){o!=null&&(e[t]=t==="innerHTML"?zi(o):o);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const i=r==="OPTION"?e.getAttribute("value")||"":e.value,a=o==null?e.type==="checkbox"?"on":"":String(o);(i!==a||!("_value"in e))&&(e.value=a),o==null&&e.removeAttribute(t),e._value=o;return}let s=!1;if(o===""||o==null){const i=typeof e[t];i==="boolean"?o=zs(o):o==null&&i==="string"?(o="",s=!0):i==="number"&&(o=0,s=!0)}try{e[t]=o}catch{}s&&e.removeAttribute(t)}function Ic(e,t,o,n){e.addEventListener(t,o,n)}function Ac(e,t,o,n){e.removeEventListener(t,o,n)}const rs=Symbol("_vei");function Cc(e,t,o,n,r=null){const s=e[rs]||(e[rs]={}),i=s[t];if(n&&i)i.value=n;else{const[a,l]=Lc(t);if(n){const d=s[t]=Pc(n,r);Ic(e,a,d,l)}else i&&(Ac(e,a,i,l),s[t]=void 0)}}const ss=/(?:Once|Passive|Capture)$/;function Lc(e){let t;if(ss.test(e)){t={};let n;for(;n=e.match(ss);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):$t(e.slice(2)),t]}let Ln=0;const Mc=Promise.resolve(),Bc=()=>Ln||(Mc.then(()=>Ln=0),Ln=Date.now());function Pc(e,t){const o=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=o.attached)return;ut(Fc(n,o.value),t,5,[n])};return o.value=e,o.attached=Bc(),o}function Fc(e,t){if(G(t)){const o=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{o.call(e),e._stopped=!0},t.map(n=>r=>!r._stopped&&n&&n(r))}else return t}const is=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Dc=(e,t,o,n,r,s)=>{const i=r==="svg";t==="class"?Ec(e,n,i):t==="style"?Tc(e,o,n):nn(t)?tr(t)||Cc(e,t,o,n,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):zc(e,t,n,i))?(Nc(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ns(e,t,n,i,s,t!=="value")):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),ns(e,t,n,i))};function zc(e,t,o,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&is(t)&&q(o));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return is(t)&&ye(o)?!1:!!(t in e||e._isVueCE&&(/[A-Z]/.test(t)||!ye(o)))}const $c=Ie({patchProp:Dc},vc);let as;function Hc(){return as||(as=jl($c))}const Uc=(...e)=>{const t=Hc().createApp(...e),{mount:o}=t;return t.mount=n=>{const r=jc(n);if(!r)return;const s=t._component;!q(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const i=o(r,!1,Xc(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},t};function Xc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function jc(e){return ye(e)?document.querySelector(e):e}/*!
  * vue-router v4.4.4
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Yt=typeof document<"u";function $i(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Yc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&$i(e.default)}const le=Object.assign;function Mn(e,t){const o={};for(const n in t){const r=t[n];o[n]=ot(r)?r.map(e):e(r)}return o}const bo=()=>{},ot=Array.isArray,Hi=/#/g,Vc=/&/g,Kc=/\//g,Gc=/=/g,Wc=/\?/g,Ui=/\+/g,qc=/%5B/g,Zc=/%5D/g,Xi=/%5E/g,Jc=/%60/g,ji=/%7B/g,Qc=/%7C/g,Yi=/%7D/g,ef=/%20/g;function vr(e){return encodeURI(""+e).replace(Qc,"|").replace(qc,"[").replace(Zc,"]")}function tf(e){return vr(e).replace(ji,"{").replace(Yi,"}").replace(Xi,"^")}function Zn(e){return vr(e).replace(Ui,"%2B").replace(ef,"+").replace(Hi,"%23").replace(Vc,"%26").replace(Jc,"`").replace(ji,"{").replace(Yi,"}").replace(Xi,"^")}function of(e){return Zn(e).replace(Gc,"%3D")}function nf(e){return vr(e).replace(Hi,"%23").replace(Wc,"%3F")}function rf(e){return e==null?"":nf(e).replace(Kc,"%2F")}function ko(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const sf=/\/$/,af=e=>e.replace(sf,"");function Bn(e,t,o="/"){let n,r={},s="",i="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(n=t.slice(0,l),s=t.slice(l+1,a>-1?a:t.length),r=e(s)),a>-1&&(n=n||t.slice(0,a),i=t.slice(a,t.length)),n=uf(n??t,o),{fullPath:n+(s&&"?")+s+i,path:n,query:r,hash:ko(i)}}function lf(e,t){const o=t.query?e(t.query):"";return t.path+(o&&"?")+o+(t.hash||"")}function ls(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function cf(e,t,o){const n=t.matched.length-1,r=o.matched.length-1;return n>-1&&n===r&&so(t.matched[n],o.matched[r])&&Vi(t.params,o.params)&&e(t.query)===e(o.query)&&t.hash===o.hash}function so(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Vi(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const o in e)if(!ff(e[o],t[o]))return!1;return!0}function ff(e,t){return ot(e)?cs(e,t):ot(t)?cs(t,e):e===t}function cs(e,t){return ot(t)?e.length===t.length&&e.every((o,n)=>o===t[n]):e.length===1&&e[0]===t}function uf(e,t){if(e.startsWith("/"))return e;if(!e)return t;const o=t.split("/"),n=e.split("/"),r=n[n.length-1];(r===".."||r===".")&&n.push("");let s=o.length-1,i,a;for(i=0;i<n.length;i++)if(a=n[i],a!==".")if(a==="..")s>1&&s--;else break;return o.slice(0,s).join("/")+"/"+n.slice(i).join("/")}const _t={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Oo;(function(e){e.pop="pop",e.push="push"})(Oo||(Oo={}));var wo;(function(e){e.back="back",e.forward="forward",e.unknown=""})(wo||(wo={}));function df(e){if(!e)if(Yt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),af(e)}const hf=/^[^#]+#/;function pf(e,t){return e.replace(hf,"#")+t}function mf(e,t){const o=document.documentElement.getBoundingClientRect(),n=e.getBoundingClientRect();return{behavior:t.behavior,left:n.left-o.left-(t.left||0),top:n.top-o.top-(t.top||0)}}const bn=()=>({left:window.scrollX,top:window.scrollY});function gf(e){let t;if("el"in e){const o=e.el,n=typeof o=="string"&&o.startsWith("#"),r=typeof o=="string"?n?document.getElementById(o.slice(1)):document.querySelector(o):o;if(!r)return;t=mf(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function fs(e,t){return(history.state?history.state.position-t:-1)+e}const Jn=new Map;function bf(e,t){Jn.set(e,t)}function wf(e){const t=Jn.get(e);return Jn.delete(e),t}let yf=()=>location.protocol+"//"+location.host;function Ki(e,t){const{pathname:o,search:n,hash:r}=t,s=e.indexOf("#");if(s>-1){let a=r.includes(e.slice(s))?e.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),ls(l,"")}return ls(o,e)+n+r}function _f(e,t,o,n){let r=[],s=[],i=null;const a=({state:p})=>{const g=Ki(e,location),B=o.value,L=t.value;let K=0;if(p){if(o.value=g,t.value=p,i&&i===B){i=null;return}K=L?p.position-L.position:0}else n(g);r.forEach($=>{$(o.value,B,{delta:K,type:Oo.pop,direction:K?K>0?wo.forward:wo.back:wo.unknown})})};function l(){i=o.value}function d(p){r.push(p);const g=()=>{const B=r.indexOf(p);B>-1&&r.splice(B,1)};return s.push(g),g}function f(){const{history:p}=window;p.state&&p.replaceState(le({},p.state,{scroll:bn()}),"")}function h(){for(const p of s)p();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:d,destroy:h}}function us(e,t,o,n=!1,r=!1){return{back:e,current:t,forward:o,replaced:n,position:window.history.length,scroll:r?bn():null}}function vf(e){const{history:t,location:o}=window,n={value:Ki(e,o)},r={value:t.state};r.value||s(n.value,{back:null,current:n.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(l,d,f){const h=e.indexOf("#"),p=h>-1?(o.host&&document.querySelector("base")?e:e.slice(h))+l:yf()+e+l;try{t[f?"replaceState":"pushState"](d,"",p),r.value=d}catch(g){console.error(g),o[f?"replace":"assign"](p)}}function i(l,d){const f=le({},t.state,us(r.value.back,l,r.value.forward,!0),d,{position:r.value.position});s(l,f,!0),n.value=l}function a(l,d){const f=le({},r.value,t.state,{forward:l,scroll:bn()});s(f.current,f,!0);const h=le({},us(n.value,l,null),{position:f.position+1},d);s(l,h,!1),n.value=l}return{location:n,state:r,push:a,replace:i}}function xf(e){e=df(e);const t=vf(e),o=_f(e,t.state,t.location,t.replace);function n(s,i=!0){i||o.pauseListeners(),history.go(s)}const r=le({location:"",base:e,go:n,createHref:pf.bind(null,e)},t,o);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function Ef(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),xf(e)}function kf(e){return typeof e=="string"||e&&typeof e=="object"}function Gi(e){return typeof e=="string"||typeof e=="symbol"}const Wi=Symbol("");var ds;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ds||(ds={}));function io(e,t){return le(new Error,{type:e,[Wi]:!0},t)}function pt(e,t){return e instanceof Error&&Wi in e&&(t==null||!!(e.type&t))}const hs="[^/]+?",Of={sensitive:!1,strict:!1,start:!0,end:!0},Rf=/[.+*?^${}()[\]/\\]/g;function Tf(e,t){const o=le({},Of,t),n=[];let r=o.start?"^":"";const s=[];for(const d of e){const f=d.length?[]:[90];o.strict&&!d.length&&(r+="/");for(let h=0;h<d.length;h++){const p=d[h];let g=40+(o.sensitive?.25:0);if(p.type===0)h||(r+="/"),r+=p.value.replace(Rf,"\\$&"),g+=40;else if(p.type===1){const{value:B,repeatable:L,optional:K,regexp:$}=p;s.push({name:B,repeatable:L,optional:K});const P=$||hs;if(P!==hs){g+=10;try{new RegExp(`(${P})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${B}" (${P}): `+M.message)}}let z=L?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;h||(z=K&&d.length<2?`(?:/${z})`:"/"+z),K&&(z+="?"),r+=z,g+=20,K&&(g+=-8),L&&(g+=-20),P===".*"&&(g+=-50)}f.push(g)}n.push(f)}if(o.strict&&o.end){const d=n.length-1;n[d][n[d].length-1]+=.7000000000000001}o.strict||(r+="/?"),o.end?r+="$":o.strict&&(r+="(?:/|$)");const i=new RegExp(r,o.sensitive?"":"i");function a(d){const f=d.match(i),h={};if(!f)return null;for(let p=1;p<f.length;p++){const g=f[p]||"",B=s[p-1];h[B.name]=g&&B.repeatable?g.split("/"):g}return h}function l(d){let f="",h=!1;for(const p of e){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const g of p)if(g.type===0)f+=g.value;else if(g.type===1){const{value:B,repeatable:L,optional:K}=g,$=B in d?d[B]:"";if(ot($)&&!L)throw new Error(`Provided param "${B}" is an array but it is not repeatable (* or + modifiers)`);const P=ot($)?$.join("/"):$;if(!P)if(K)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${B}"`);f+=P}}return f||"/"}return{re:i,score:n,keys:s,parse:a,stringify:l}}function Sf(e,t){let o=0;for(;o<e.length&&o<t.length;){const n=t[o]-e[o];if(n)return n;o++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function qi(e,t){let o=0;const n=e.score,r=t.score;for(;o<n.length&&o<r.length;){const s=Sf(n[o],r[o]);if(s)return s;o++}if(Math.abs(r.length-n.length)===1){if(ps(n))return 1;if(ps(r))return-1}return r.length-n.length}function ps(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Nf={type:0,value:""},If=/[a-zA-Z0-9_]/;function Af(e){if(!e)return[[]];if(e==="/")return[[Nf]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${o})/"${d}": ${g}`)}let o=0,n=o;const r=[];let s;function i(){s&&r.push(s),s=[]}let a=0,l,d="",f="";function h(){d&&(o===0?s.push({type:0,value:d}):o===1||o===2||o===3?(s.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:d,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),d="")}function p(){d+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&o!==2){n=o,o=4;continue}switch(o){case 0:l==="/"?(d&&h(),i()):l===":"?(h(),o=1):p();break;case 4:p(),o=n;break;case 1:l==="("?o=2:If.test(l)?p():(h(),o=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:o=3:f+=l;break;case 3:h(),o=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,f="";break;default:t("Unknown state");break}}return o===2&&t(`Unfinished custom RegExp for param "${d}"`),h(),i(),r}function Cf(e,t,o){const n=Tf(Af(e.path),o),r=le(n,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Lf(e,t){const o=[],n=new Map;t=bs({strict:!1,end:!0,sensitive:!1},t);function r(h){return n.get(h)}function s(h,p,g){const B=!g,L=Mf(h);L.aliasOf=g&&g.record;const K=bs(t,h),$=[L];if("alias"in h){const M=typeof h.alias=="string"?[h.alias]:h.alias;for(const oe of M)$.push(le({},L,{components:g?g.record.components:L.components,path:oe,aliasOf:g?g.record:L}))}let P,z;for(const M of $){const{path:oe}=M;if(p&&oe[0]!=="/"){const de=p.record.path,ce=de[de.length-1]==="/"?"":"/";M.path=p.record.path+(oe&&ce+oe)}if(P=Cf(M,p,K),g?g.alias.push(P):(z=z||P,z!==P&&z.alias.push(P),B&&h.name&&!gs(P)&&i(h.name)),Zi(P)&&l(P),L.children){const de=L.children;for(let ce=0;ce<de.length;ce++)s(de[ce],P,g&&g.children[ce])}g=g||P}return z?()=>{i(z)}:bo}function i(h){if(Gi(h)){const p=n.get(h);p&&(n.delete(h),o.splice(o.indexOf(p),1),p.children.forEach(i),p.alias.forEach(i))}else{const p=o.indexOf(h);p>-1&&(o.splice(p,1),h.record.name&&n.delete(h.record.name),h.children.forEach(i),h.alias.forEach(i))}}function a(){return o}function l(h){const p=Ff(h,o);o.splice(p,0,h),h.record.name&&!gs(h)&&n.set(h.record.name,h)}function d(h,p){let g,B={},L,K;if("name"in h&&h.name){if(g=n.get(h.name),!g)throw io(1,{location:h});K=g.record.name,B=le(ms(p.params,g.keys.filter(z=>!z.optional).concat(g.parent?g.parent.keys.filter(z=>z.optional):[]).map(z=>z.name)),h.params&&ms(h.params,g.keys.map(z=>z.name))),L=g.stringify(B)}else if(h.path!=null)L=h.path,g=o.find(z=>z.re.test(L)),g&&(B=g.parse(L),K=g.record.name);else{if(g=p.name?n.get(p.name):o.find(z=>z.re.test(p.path)),!g)throw io(1,{location:h,currentLocation:p});K=g.record.name,B=le({},p.params,h.params),L=g.stringify(B)}const $=[];let P=g;for(;P;)$.unshift(P.record),P=P.parent;return{name:K,path:L,params:B,matched:$,meta:Pf($)}}e.forEach(h=>s(h));function f(){o.length=0,n.clear()}return{addRoute:s,resolve:d,removeRoute:i,clearRoutes:f,getRoutes:a,getRecordMatcher:r}}function ms(e,t){const o={};for(const n of t)n in e&&(o[n]=e[n]);return o}function Mf(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Bf(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},mods:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Bf(e){const t={},o=e.props||!1;if("component"in e)t.default=o;else for(const n in e.components)t[n]=typeof o=="object"?o[n]:o;return t}function gs(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Pf(e){return e.reduce((t,o)=>le(t,o.meta),{})}function bs(e,t){const o={};for(const n in e)o[n]=n in t?t[n]:e[n];return o}function Ff(e,t){let o=0,n=t.length;for(;o!==n;){const s=o+n>>1;qi(e,t[s])<0?n=s:o=s+1}const r=Df(e);return r&&(n=t.lastIndexOf(r,n-1)),n}function Df(e){let t=e;for(;t=t.parent;)if(Zi(t)&&qi(e,t)===0)return t}function Zi({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function zf(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(Ui," "),i=s.indexOf("="),a=ko(i<0?s:s.slice(0,i)),l=i<0?null:ko(s.slice(i+1));if(a in t){let d=t[a];ot(d)||(d=t[a]=[d]),d.push(l)}else t[a]=l}return t}function ws(e){let t="";for(let o in e){const n=e[o];if(o=of(o),n==null){n!==void 0&&(t+=(t.length?"&":"")+o);continue}(ot(n)?n.map(s=>s&&Zn(s)):[n&&Zn(n)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+o,s!=null&&(t+="="+s))})}return t}function $f(e){const t={};for(const o in e){const n=e[o];n!==void 0&&(t[o]=ot(n)?n.map(r=>r==null?null:""+r):n==null?n:""+n)}return t}const Hf=Symbol(""),ys=Symbol(""),xr=Symbol(""),Er=Symbol(""),Qn=Symbol("");function fo(){let e=[];function t(n){return e.push(n),()=>{const r=e.indexOf(n);r>-1&&e.splice(r,1)}}function o(){e=[]}return{add:t,list:()=>e.slice(),reset:o}}function Et(e,t,o,n,r,s=i=>i()){const i=n&&(n.enterCallbacks[r]=n.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const d=p=>{p===!1?l(io(4,{from:o,to:t})):p instanceof Error?l(p):kf(p)?l(io(2,{from:t,to:p})):(i&&n.enterCallbacks[r]===i&&typeof p=="function"&&i.push(p),a())},f=s(()=>e.call(n&&n.instances[r],t,o,d));let h=Promise.resolve(f);e.length<3&&(h=h.then(d)),h.catch(p=>l(p))})}function Pn(e,t,o,n,r=s=>s()){const s=[];for(const i of e)for(const a in i.components){let l=i.components[a];if(!(t!=="beforeRouteEnter"&&!i.instances[a]))if($i(l)){const f=(l.__vccOpts||l)[t];f&&s.push(Et(f,o,n,i,a,r))}else{let d=l();s.push(()=>d.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);const h=Yc(f)?f.default:f;i.mods[a]=f,i.components[a]=h;const g=(h.__vccOpts||h)[t];return g&&Et(g,o,n,i,a,r)()}))}}return s}function _s(e){const t=ft(xr),o=ft(Er),n=We(()=>{const l=Ke(e.to);return t.resolve(l)}),r=We(()=>{const{matched:l}=n.value,{length:d}=l,f=l[d-1],h=o.matched;if(!f||!h.length)return-1;const p=h.findIndex(so.bind(null,f));if(p>-1)return p;const g=vs(l[d-2]);return d>1&&vs(f)===g&&h[h.length-1].path!==g?h.findIndex(so.bind(null,l[d-2])):p}),s=We(()=>r.value>-1&&jf(o.params,n.value.params)),i=We(()=>r.value>-1&&r.value===o.matched.length-1&&Vi(o.params,n.value.params));function a(l={}){return Xf(l)?t[Ke(e.replace)?"replace":"push"](Ke(e.to)).catch(bo):Promise.resolve()}return{route:n,href:We(()=>n.value.href),isActive:s,isExactActive:i,navigate:a}}const Uf=ui({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:_s,setup(e,{slots:t}){const o=fn(_s(e)),{options:n}=ft(xr),r=We(()=>({[xs(e.activeClass,n.linkActiveClass,"router-link-active")]:o.isActive,[xs(e.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:o.isExactActive}));return()=>{const s=t.default&&t.default(o);return e.custom?s:Di("a",{"aria-current":o.isExactActive?e.ariaCurrentValue:null,href:o.href,onClick:o.navigate,class:r.value},s)}}}),Ji=Uf;function Xf(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function jf(e,t){for(const o in t){const n=t[o],r=e[o];if(typeof n=="string"){if(n!==r)return!1}else if(!ot(r)||r.length!==n.length||n.some((s,i)=>s!==r[i]))return!1}return!0}function vs(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const xs=(e,t,o)=>e??t??o,Yf=ui({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:o}){const n=ft(Qn),r=We(()=>e.route||n.value),s=ft(ys,0),i=We(()=>{let d=Ke(s);const{matched:f}=r.value;let h;for(;(h=f[d])&&!h.components;)d++;return d}),a=We(()=>r.value.matched[i.value]);jo(ys,We(()=>i.value+1)),jo(Hf,a),jo(Qn,r);const l=un();return Jt(()=>[l.value,a.value,e.name],([d,f,h],[p,g,B])=>{f&&(f.instances[h]=d,g&&g!==f&&d&&d===p&&(f.leaveGuards.size||(f.leaveGuards=g.leaveGuards),f.updateGuards.size||(f.updateGuards=g.updateGuards))),d&&f&&(!g||!so(f,g)||!p)&&(f.enterCallbacks[h]||[]).forEach(L=>L(d))},{flush:"post"}),()=>{const d=r.value,f=e.name,h=a.value,p=h&&h.components[f];if(!p)return Es(o.default,{Component:p,route:d});const g=h.props[f],B=g?g===!0?d.params:typeof g=="function"?g(d):g:null,K=Di(p,le({},B,t,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(h.instances[f]=null)},ref:l}));return Es(o.default,{Component:K,route:d})||K}}});function Es(e,t){if(!e)return null;const o=e(t);return o.length===1?o[0]:o}const Qi=Yf;function Vf(e){const t=Lf(e.routes,e),o=e.parseQuery||zf,n=e.stringifyQuery||ws,r=e.history,s=fo(),i=fo(),a=fo(),l=tl(_t);let d=_t;Yt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Mn.bind(null,v=>""+v),h=Mn.bind(null,rf),p=Mn.bind(null,ko);function g(v,A){let I,F;return Gi(v)?(I=t.getRecordMatcher(v),F=A):F=v,t.addRoute(F,I)}function B(v){const A=t.getRecordMatcher(v);A&&t.removeRoute(A)}function L(){return t.getRoutes().map(v=>v.record)}function K(v){return!!t.getRecordMatcher(v)}function $(v,A){if(A=le({},A||l.value),typeof v=="string"){const u=Bn(o,v,A.path),m=t.resolve({path:u.path},A),x=r.createHref(u.fullPath);return le(u,m,{params:p(m.params),hash:ko(u.hash),redirectedFrom:void 0,href:x})}let I;if(v.path!=null)I=le({},v,{path:Bn(o,v.path,A.path).path});else{const u=le({},v.params);for(const m in u)u[m]==null&&delete u[m];I=le({},v,{params:h(u)}),A.params=h(A.params)}const F=t.resolve(I,A),re=v.hash||"";F.params=f(p(F.params));const he=lf(n,le({},v,{hash:tf(re),path:F.path})),c=r.createHref(he);return le({fullPath:he,hash:re,query:n===ws?$f(v.query):v.query||{}},F,{redirectedFrom:void 0,href:c})}function P(v){return typeof v=="string"?Bn(o,v,l.value.path):le({},v)}function z(v,A){if(d!==v)return io(8,{from:A,to:v})}function M(v){return ce(v)}function oe(v){return M(le(P(v),{replace:!0}))}function de(v){const A=v.matched[v.matched.length-1];if(A&&A.redirect){const{redirect:I}=A;let F=typeof I=="function"?I(v):I;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=P(F):{path:F},F.params={}),le({query:v.query,hash:v.hash,params:F.path!=null?{}:v.params},F)}}function ce(v,A){const I=d=$(v),F=l.value,re=v.state,he=v.force,c=v.replace===!0,u=de(I);if(u)return ce(le(P(u),{state:typeof u=="object"?le({},re,u.state):re,force:he,replace:c}),A||I);const m=I;m.redirectedFrom=A;let x;return!he&&cf(n,F,I)&&(x=io(16,{to:m,from:F}),te(F,F,!0,!1)),(x?Promise.resolve(x):Be(m,F)).catch(y=>pt(y)?pt(y,2)?y:J(y):R(y,m,F)).then(y=>{if(y){if(pt(y,2))return ce(le({replace:c},P(y.to),{state:typeof y.to=="object"?le({},re,y.to.state):re,force:he}),A||m)}else y=Ze(m,F,!0,c,re);return Ue(m,F,y),y})}function Me(v,A){const I=z(v,A);return I?Promise.reject(I):Promise.resolve()}function xe(v){const A=Je.values().next().value;return A&&typeof A.runWithContext=="function"?A.runWithContext(v):v()}function Be(v,A){let I;const[F,re,he]=Kf(v,A);I=Pn(F.reverse(),"beforeRouteLeave",v,A);for(const u of F)u.leaveGuards.forEach(m=>{I.push(Et(m,v,A))});const c=Me.bind(null,v,A);return I.push(c),ge(I).then(()=>{I=[];for(const u of s.list())I.push(Et(u,v,A));return I.push(c),ge(I)}).then(()=>{I=Pn(re,"beforeRouteUpdate",v,A);for(const u of re)u.updateGuards.forEach(m=>{I.push(Et(m,v,A))});return I.push(c),ge(I)}).then(()=>{I=[];for(const u of he)if(u.beforeEnter)if(ot(u.beforeEnter))for(const m of u.beforeEnter)I.push(Et(m,v,A));else I.push(Et(u.beforeEnter,v,A));return I.push(c),ge(I)}).then(()=>(v.matched.forEach(u=>u.enterCallbacks={}),I=Pn(he,"beforeRouteEnter",v,A,xe),I.push(c),ge(I))).then(()=>{I=[];for(const u of i.list())I.push(Et(u,v,A));return I.push(c),ge(I)}).catch(u=>pt(u,8)?u:Promise.reject(u))}function Ue(v,A,I){a.list().forEach(F=>xe(()=>F(v,A,I)))}function Ze(v,A,I,F,re){const he=z(v,A);if(he)return he;const c=A===_t,u=Yt?history.state:{};I&&(F||c?r.replace(v.fullPath,le({scroll:c&&u&&u.scroll},re)):r.push(v.fullPath,re)),l.value=v,te(v,A,I,c),J()}let He;function dt(){He||(He=r.listen((v,A,I)=>{if(!Oe.listening)return;const F=$(v),re=de(F);if(re){ce(le(re,{replace:!0}),F).catch(bo);return}d=F;const he=l.value;Yt&&bf(fs(he.fullPath,I.delta),bn()),Be(F,he).catch(c=>pt(c,12)?c:pt(c,2)?(ce(c.to,F).then(u=>{pt(u,20)&&!I.delta&&I.type===Oo.pop&&r.go(-1,!1)}).catch(bo),Promise.reject()):(I.delta&&r.go(-I.delta,!1),R(c,F,he))).then(c=>{c=c||Ze(F,he,!1),c&&(I.delta&&!pt(c,8)?r.go(-I.delta,!1):I.type===Oo.pop&&pt(c,20)&&r.go(-1,!1)),Ue(F,he,c)}).catch(bo)}))}let Xe=fo(),me=fo(),w;function R(v,A,I){J(v);const F=me.list();return F.length?F.forEach(re=>re(v,A,I)):console.error(v),Promise.reject(v)}function X(){return w&&l.value!==_t?Promise.resolve():new Promise((v,A)=>{Xe.add([v,A])})}function J(v){return w||(w=!v,dt(),Xe.list().forEach(([A,I])=>v?I(v):A()),Xe.reset()),v}function te(v,A,I,F){const{scrollBehavior:re}=e;if(!Yt||!re)return Promise.resolve();const he=!I&&wf(fs(v.fullPath,0))||(F||!I)&&history.state&&history.state.scroll||null;return ii().then(()=>re(v,A,he)).then(c=>c&&gf(c)).catch(c=>R(c,v,A))}const se=v=>r.go(v);let ke;const Je=new Set,Oe={currentRoute:l,listening:!0,addRoute:g,removeRoute:B,clearRoutes:t.clearRoutes,hasRoute:K,getRoutes:L,resolve:$,options:e,push:M,replace:oe,go:se,back:()=>se(-1),forward:()=>se(1),beforeEach:s.add,beforeResolve:i.add,afterEach:a.add,onError:me.add,isReady:X,install(v){const A=this;v.component("RouterLink",Ji),v.component("RouterView",Qi),v.config.globalProperties.$router=A,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Ke(l)}),Yt&&!ke&&l.value===_t&&(ke=!0,M(r.location).catch(re=>{}));const I={};for(const re in _t)Object.defineProperty(I,re,{get:()=>l.value[re],enumerable:!0});v.provide(xr,A),v.provide(Er,ti(I)),v.provide(Qn,l);const F=v.unmount;Je.add(v),v.unmount=function(){Je.delete(v),Je.size<1&&(d=_t,He&&He(),He=null,l.value=_t,ke=!1,w=!1),F()}}};function ge(v){return v.reduce((A,I)=>A.then(()=>xe(I)),Promise.resolve())}return Oe}function Kf(e,t){const o=[],n=[],r=[],s=Math.max(t.matched.length,e.matched.length);for(let i=0;i<s;i++){const a=t.matched[i];a&&(e.matched.find(d=>so(d,a))?n.push(a):o.push(a));const l=e.matched[i];l&&(t.matched.find(d=>so(d,l))||r.push(l))}return[o,n,r]}function ea(e){return ft(Er)}const Gf="/ea-effects/favicon.ico";function Wf(e,t){const o=document.createElement("link");o.href=t,o.rel="stylesheet",e.appendChild(o)}class nt extends HTMLElement{constructor(){super(),this.isProduction=!1,this.isProduction=!0}toggleAttribute(t,o,n){o?(this.setAttribute(t,o),n&&this.dom.classList.add(n)):(this.hasAttribute(t)&&this.removeAttribute(t),n&&this.dom.classList.remove(n))}toggleAttr(t,o){o?this.setAttribute(t,o):this.removeAttribute(t)}getAttrBoolean(t){const o=this.getAttribute(t);return o==="true"||o===""}getAttrNumber(t){const o=this.getAttribute(t);return o?Number(o):0}build(t,o){if(this.isProduction){const n=document.createElement("style");n.innerHTML=o,this.shadowRoot.appendChild(n)}else Wf(t,new URL(this.nodeName.toLowerCase()+"/index.css",import.meta.url).href)}}var Bt,So,en,ta;class qf extends HTMLElement{constructor(){super();we(this,en);we(this,Bt);we(this,So);const o=this.attachShadow({mode:"open"});o.innerHTML=`
            <link id="fontello-stylesheet" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easy-component-ui/components/ea-icon/css/fontello.css">
            <i class="ea-icon_wrap" part="container">
                <slot></slot>
            </i>
        `,Ee(this,Bt,o.querySelector(".ea-icon_wrap")),Ee(this,So,o.querySelector("#fontello-stylesheet")),document.addEventListener("configChanged",n=>{vn(this,en,ta).call(this,n.detail)})}get icon(){return this.getAttribute("icon")||""}set icon(o){this.setAttribute("icon",o),j(this,Bt).className=`${o}`}get color(){return this.getAttribute("color")||""}set color(o){this.setAttribute("color",o),j(this,Bt).style.color=o}get size(){return this.getAttribute("size")||""}set size(o){this.setAttribute("size",o),j(this,Bt).style.fontSize=`${o}px`}connectedCallback(){this.icon=this.icon,this.color=this.color,this.size=this.size,document.dispatchEvent(new CustomEvent("ea-icon-ready"))}}Bt=new WeakMap,So=new WeakMap,en=new WeakSet,ta=function(o){j(this,So).href=o.fontelloCSS};window.customElements.get("ea-icon")||window.customElements.define("ea-icon",qf);const Zf=`
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
`;var Qe;class Jf extends nt{constructor(){super();we(this,Qe);const o=this.attachShadow({mode:"open"});o.innerHTML=`
            <div class="ea-menu-item_wrap" part="container">
                <slot></slot>
            </div>
        `,Ee(this,Qe,o.querySelector(".ea-menu-item_wrap")),this.build(o,Zf)}get actived(){return this.getAttrBoolean("actived")}set actived(o){this.setAttribute("actived",o),this.isSubItem?j(this,Qe).classList.toggle("is-sub-actived",o):j(this,Qe).classList.toggle("is-actived",o)}get isSubItem(){return this.getAttrBoolean("is-sub-item")}set isSubItem(o){o&&this.setAttribute("is-sub-item",o)}get backgroundColor(){return this.getAttribute("background-color")||"#fff"}set backgroundColor(o){this.setAttribute("background-color",o),j(this,Qe).style.setProperty("--normal-bgc",o)}get textColor(){return this.getAttribute("text-color")||"#303133"}set textColor(o){this.setAttribute("text-color",o),j(this,Qe).style.setProperty("--normal-text-color",o)}get activeTextColor(){return this.getAttribute("active-text-color")||"#409eff"}set activeTextColor(o){this.setAttribute("active-text-color",o),j(this,Qe).style.setProperty("--actived-text-color",o)}get disabled(){return this.getAttrBoolean("disabled")}set disabled(o){this.setAttribute("disabled",o),j(this,Qe).classList.toggle("is-disabled",o)}connectedCallback(){this.actived=this.actived,this.disabled=this.disabled,j(this,Qe).addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("item-selected",{detail:{index:this.index,title:this.textContent}}))})}}Qe=new WeakMap;customElements.get("ea-menu-item")||customElements.define("ea-menu-item",Jf);const Po=(e,t)=>{const o=e.__vccOpts||e;for(const[n,r]of t)o[n]=r;return o},Qf=["actived"],eu={__name:"MyRoute",props:{to:String},setup(e){const t=ea(),o={activeRoute:un(t.path)||""};return Jt(t,n=>{o.activeRoute.value=n.path}),(n,r)=>(V(),Z("ea-menu-item",{class:"rl-item",actived:o.activeRoute.value===e.to},[U(Ke(Ji),{to:e.to,activeClass:"active"},{default:Se(()=>[Nl(n.$slots,"default",{},void 0,!0)]),_:3},8,["to"])],8,Qf))}},Fe=Po(eu,[["__scopeId","data-v-62147355"]]),tu={__name:"Router",setup(e){return(t,o)=>(V(),Z(Q,null,[U(Fe,{to:"/2DTransitions"},{default:Se(()=>o[0]||(o[0]=[Re("Hover | 2D 过渡动画")])),_:1}),U(Fe,{to:"/backgroundTransitions"},{default:Se(()=>o[1]||(o[1]=[Re(" Hover | 背景（background）过渡动画 ")])),_:1}),U(Fe,{to:"/borderTransitions"},{default:Se(()=>o[2]||(o[2]=[Re("Hover | 边框（border）过渡动画")])),_:1}),U(Fe,{to:"/shadowAndGlowTransitions"},{default:Se(()=>o[3]||(o[3]=[Re(" Hover | 阴影（box-shadow）过渡动画 ")])),_:1}),U(Fe,{to:"/speechBubbles"},{default:Se(()=>o[4]||(o[4]=[Re("Hover | 气泡框过渡动画")])),_:1}),U(Fe,{to:"/curls"},{default:Se(()=>o[5]||(o[5]=[Re("Hover | 折角过渡动画")])),_:1}),U(Fe,{to:"/attentionSeekers"},{default:Se(()=>o[6]||(o[6]=[Re("Animate | 吸引眼球动画")])),_:1}),U(Fe,{to:"/backEntrancesAndBackExits"},{default:Se(()=>o[7]||(o[7]=[Re("Animate | 后进后出动画")])),_:1}),U(Fe,{to:"/bouncingEntrancesAndBouncingExits"},{default:Se(()=>o[8]||(o[8]=[Re(" Animate | 弹出弹入动画 ")])),_:1}),U(Fe,{to:"/fadeInAndFadeOut"},{default:Se(()=>o[9]||(o[9]=[Re(" Animate | 淡入淡出动画 ")])),_:1}),U(Fe,{to:"/flippers"},{default:Se(()=>o[10]||(o[10]=[Re(" Animate | 翻转动画 ")])),_:1}),U(Fe,{to:"/lightspeed"},{default:Se(()=>o[11]||(o[11]=[Re(" Animate | 光速动画 ")])),_:1}),U(Fe,{to:"/rotatingEntrancesAndRotatingExits"},{default:Se(()=>o[12]||(o[12]=[Re(" Animate | 旋转动画 ")])),_:1}),U(Fe,{to:"/specials"},{default:Se(()=>o[13]||(o[13]=[Re(" Animate | 特殊效果 ")])),_:1}),U(Fe,{to:"/zoomingEntrancesAndZoomingExits"},{default:Se(()=>o[14]||(o[14]=[Re(" Animate | 放大缩小动画 ")])),_:1})],64))}},ou=`
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
`;var No,tn,oa;class nu extends nt{constructor(){super();we(this,tn);we(this,No);const o=this.attachShadow({mode:"open"});o.innerHTML=`
            <div class="ea-container_wrap" part="container">
                <slot></slot>
            </div>
        `,Ee(this,No,o.querySelector(".ea-container_wrap")),this.build(o,ou)}get CONTAINER_TYPE(){return["ea-header","ea-main","ea-footer","ea-container","ea-aside"]}get direction(){return["horizontal","vertical"].includes(this.getAttribute("direction"))||"horizontal"}set direction(o){this.setAttribute("direction",o),j(this,No).classList.toggle("is-vertical",o==="horizontal")}connectedCallback(){const o=Array.from(this.children);vn(this,tn,oa).call(this,o)}}No=new WeakMap,tn=new WeakSet,oa=function(o){const n=o.map(r=>r.tagName.toLowerCase());o.forEach(r=>{this.CONTAINER_TYPE.includes(r.tagName.toLowerCase())||r.remove(),r.tagName.toLowerCase()==="ea-container"&&(r.style.flex="1")}),n.includes("ea-header")||n.includes("ea-footer")?this.direction="horizontal":this.direction=this.direction};customElements.get("ea-container")||customElements.define("ea-container",nu);const ru=`
.ea-aside_wrap {
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
}
.ea-aside_wrap ::slotted(ea-main) {
  overflow: auto;
}
`;var Io;class su extends nt{constructor(){super();we(this,Io);const o=this.attachShadow({mode:"open"});o.innerHTML=`
            <aside class="ea-aside_wrap" part="container">
                <slot></slot>
            </aside>
        `,Ee(this,Io,o.querySelector(".ea-aside_wrap")),this.build(o,ru)}get width(){return this.getAttrNumber("width")||200}set width(o){this.setAttribute("width",o),j(this,Io).style.width=`${o}px`}connectedCallback(){this.width=this.width}}Io=new WeakMap;customElements.get("ea-aside")||customElements.define("ea-aside",su);const na=(e,t=0)=>{let o=setTimeout(()=>{clearTimeout(o),o=null,e()},t)},Fn=e=>{e.actived=!1};function iu(e,t,o){e.forEach(Fn),t.forEach(Fn),o.forEach(Fn)}function au(e,t,o){e.forEach((n,r)=>{n.itemIndex=r,n.addEventListener("item-selected",s=>{const i=s.detail.title;iu(e,t,o),n.actived=!0,this.dispatchEvent(new CustomEvent("select",{detail:{index:r,title:i}}))})})}const lu=`
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
`;var at,on,Ao;class fu extends nt{constructor(){super();we(this,at);we(this,on);we(this,Ao);const o=this.attachShadow({mode:"open"});o.innerHTML=`
            <div class="ea-submenu_wrap" part="container">
                <div class="ea-submenu_title_wrap" part="title-wrap">
                    <slot name="title"></slot>
                    <ea-icon class="ea-submenu_dropdown_icon" icon="icon-angle-down" part="dropdown-icon"></ea-icon>
                </div>
                <div class="ea-submenu_items_wrap" part="dropdown-wrap">
                    <slot></slot>
                </div>
            </div>
        `,Ee(this,at,o.querySelector(".ea-submenu_wrap")),Ee(this,on,o.querySelector(".ea-submenu_title_wrap")),Ee(this,Ao,o.querySelector(".ea-submenu_items_wrap")),this.build(o,cu)}get actived(){return this.getAttrBoolean("actived")}set actived(o){this.setAttribute("actived",o),j(this,at).classList.toggle("is-actived",o)}get backgroundColor(){return this.getAttribute("background-color")||"#fff"}set backgroundColor(o){this.setAttribute("background-color",o),j(this,at).style.setProperty("--normal-bgc",o)}get textColor(){return this.getAttribute("text-color")||"#303133"}set textColor(o){this.setAttribute("text-color",o),j(this,at).style.setProperty("--normal-text-color",o)}get activeTextColor(){return this.getAttribute("active-text-color")||"#409eff"}set activeTextColor(o){this.setAttribute("active-text-color",o),j(this,at).style.setProperty("--actived-text-color",o)}get disabled(){return this.getAttrBoolean("disabled")}set disabled(o){this.setAttribute("disabled",o),j(this,at).classList.toggle("is-disabled",o)}get mode(){return this.getAttribute("mode")||"horizontal"}set mode(o){this.setAttribute("mode",o),j(this,at).classList.toggle("is-vertical",o==="vertical")}connectedCallback(){this.disabled=this.disabled,this.querySelectorAll("ea-menu-item").forEach((n,r)=>{n.isSubItem=!0,n.addEventListener("item-selected",s=>{this.actived=!0})}),na(()=>{j(this,Ao).style.display="block"},20)}}at=new WeakMap,on=new WeakMap,Ao=new WeakMap;customElements.get("ea-submenu")||customElements.define("ea-submenu",fu);const uu=`
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
`;var gt,Co,Qt;class du extends nt{constructor(){super();we(this,gt);we(this,Co);we(this,Qt);const o=this.attachShadow({mode:"open"});o.innerHTML=`
            <div class="ea-menu-item-group_wrap" part="container">
                <div class="ea-submenu_title_wrap" part="title-wrap">
                    <slot name="title"></slot>
                    <ea-icon class="ea-submenu_dropdown_icon" icon="icon-angle-down" part="dropdown-icon"></ea-icon>
                </div>
                <div class="ea-submenu_items_wrap" part="dropdown-wrap">
                    <slot></slot>
                </div>
            </div>
        `,Ee(this,gt,o.querySelector(".ea-menu-item-group_wrap")),Ee(this,Co,o.querySelector(".ea-submenu_title_wrap")),Ee(this,Qt,o.querySelector(".ea-submenu_items_wrap")),this.build(o,uu)}get actived(){return this.getAttrBoolean("actived")}set actived(o){this.setAttribute("actived",o),j(this,gt).classList.toggle("is-actived",o)}get backgroundColor(){return this.getAttribute("background-color")||"#fff"}set backgroundColor(o){this.setAttribute("background-color",o),j(this,gt).style.setProperty("--normal-bgc",o)}get textColor(){return this.getAttribute("text-color")||"#303133"}set textColor(o){this.setAttribute("text-color",o),j(this,gt).style.setProperty("--normal-text-color",o)}get activeTextColor(){return this.getAttribute("active-text-color")||"#409eff"}set activeTextColor(o){this.setAttribute("active-text-color",o),j(this,gt).style.setProperty("--actived-text-color",o)}get collapse(){return this.getAttrBoolean("collapse")||!1}set collapse(o){this.setAttribute("collapse",o),j(this,Qt).style.height=o?j(this,Qt).scrollHeight+"px":"0",j(this,gt).classList.toggle("is-open",o)}connectedCallback(){this.style.width="100%",this.querySelectorAll("ea-menu-item").forEach(n=>{n.isSubItem=!0,n.addEventListener("item-selected",r=>{na(()=>{this.actived=!0},20)})}),j(this,Co).addEventListener("click",n=>{this.collapse=!this.collapse})}}gt=new WeakMap,Co=new WeakMap,Qt=new WeakMap;customElements.get("ea-menu-item-group")||customElements.define("ea-menu-item-group",du);var eo;class hu extends nt{constructor(){super();we(this,eo);const o=this.attachShadow({mode:"open"});o.innerHTML=`
            <div class="ea-menu_wrap" part="container">
                <slot></slot>
            </div>
        `,Ee(this,eo,o.querySelector(".ea-menu_wrap")),this.build(o,lu)}get mode(){return this.getAttribute("mode")||"vertical"}set mode(o){this.setAttribute("mode",o),j(this,eo).classList.toggle("is-vertical",o==="vertical"),this.querySelectorAll("ea-submenu").forEach(n=>{n.mode=o})}get backgroundColor(){return this.getAttribute("background-color")||"#fff"}set backgroundColor(o){this.setAttribute("background-color",o),j(this,eo).style.backgroundColor=o}get textColor(){return this.getAttribute("text-color")||"#303133"}set textColor(o){this.setAttribute("text-color",o)}get activeTextColor(){return this.getAttribute("active-text-color")||"#409eff"}set activeTextColor(o){this.setAttribute("active-text-color",o)}get collapse(){return this.getAttrBoolean("collapse")}set collapse(o){this.toggleAttr("collapse",o),this.querySelectorAll("ea-menu-item-group").forEach(n=>{this.mode==="vertical"&&(n.collapse=!o)})}connectedCallback(){this.mode=this.mode,this.collapse=!0,this.backgroundColor=this.backgroundColor,this.textColor=this.textColor,this.activeTextColor=this.activeTextColor;const o=this.querySelectorAll("ea-menu-item"),n=this.querySelectorAll("ea-submenu"),r=this.querySelectorAll("ea-menu-item-group");au.call(this,o,n,r);const s=(i,a)=>{i.backgroundColor=this.backgroundColor,i.textColor=this.textColor,i.activeTextColor=this.activeTextColor};o.forEach(s),n.forEach(s),r.forEach(s)}}eo=new WeakMap;customElements.get("ea-menu")||customElements.define("ea-menu",hu);const pu={width:"200"},mu={mode:"vertical"},gu={__name:"MyAside",setup(e){return(t,o)=>(V(),Z("ea-aside",pu,[o[0]||(o[0]=ee("ea-header",{class:"aside-header"},[ee("div",{class:"logo"},[ee("img",{src:Gf,alt:""})]),ee("b",{class:"aside-title"},"ea-effects")],-1)),ee("ea-menu",mu,[U(tu)])]))}},bu=Po(gu,[["__scopeId","data-v-56b791c4"]]),wu=`
.ea-header_wrap {
  box-sizing: border-box;
  padding: 0 20px;

  height: 60px;

  color: #333;

  overflow: hidden;
}
`;var to;class yu extends nt{constructor(){super();we(this,to);const o=this.attachShadow({mode:"open"});o.innerHTML=`
            <header class="ea-header_wrap" part="container">
                <slot></slot>
            </header>
        `,Ee(this,to,o.querySelector(".ea-header_wrap")),this.build(o,wu)}get height(){return this.getAttrNumber("height")||60}set height(o){this.setAttribute("height",o),j(this,to).style.height=`${o}px`,j(this,to).style.lineHeight=`${o}px`}connectedCallback(){this.height=this.height}}to=new WeakMap;customElements.get("ea-header")||customElements.define("ea-header",yu);const _u=`
.ea-footer_wrap {
  box-sizing: border-box;
  padding: 0 20px;

  height: 60px;

  color: #333;

  overflow: hidden;
}
`;var oo;class vu extends nt{constructor(){super();we(this,oo);const o=this.attachShadow({mode:"open"});o.innerHTML=`
            <footer class="ea-footer_wrap" part="container">
                <slot></slot>
            </footer>
        `,Ee(this,oo,o.querySelector(".ea-footer_wrap")),this.build(o,_u)}get height(){return this.getAttrNumber("height")||60}set height(o){this.setAttribute("height",o),j(this,oo).style.height=`${o}px`,j(this,oo).style.lineHeight=`${o}px`}connectedCallback(){this.height=this.height}}oo=new WeakMap;customElements.get("ea-footer")||customElements.define("ea-footer",vu);const xu=`
.ea-main_wrap {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 20px;
  overflow: auto;
  color: #333;
}
`;class Eu extends nt{constructor(){super();const t=this.attachShadow({mode:"open"});t.innerHTML=`
            <main class="ea-main_wrap" part="container">
                <slot></slot>
            </main>
        `,this.build(t,xu)}}customElements.get("ea-main")||customElements.define("ea-main",Eu);const ku={__name:"App",setup(e){let t=un(!1);const o=ea();return Jt(o,()=>{t.value=!1}),(n,r)=>(V(),Z("ea-container",{class:Dt(`container ${Ke(t)?"open":""}`),direction:"vertical"},[U(bu,{class:Dt("my-aside")}),ee("ea-container",null,[ee("ea-header",null,[ee("ea-icon",{icon:"icon-th-list",class:"toggle-aside-btn",onClick:r[0]||(r[0]=s=>Te(t)?t.value=!Ke(t):t=!Ke(t))}),ee("section",{class:"mask",onClick:r[1]||(r[1]=s=>Te(t)?t.value=!Ke(t):t=!Ke(t))})]),ee("ea-main",null,[U(Ke(Qi))])])],2))}},Ou=Po(ku,[["__scopeId","data-v-d19ae1c7"]]);function Ru(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function ra(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(t=>{const o=e[t],n=typeof o;(n==="object"||n==="function")&&!Object.isFrozen(o)&&ra(o)}),e}class ks{constructor(t){t.data===void 0&&(t.data={}),this.data=t.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function sa(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function Ot(e,...t){const o=Object.create(null);for(const n in e)o[n]=e[n];return t.forEach(function(n){for(const r in n)o[r]=n[r]}),o}const Tu="</span>",Os=e=>!!e.scope,Su=(e,{prefix:t})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const o=e.split(".");return[`${t}${o.shift()}`,...o.map((n,r)=>`${n}${"_".repeat(r+1)}`)].join(" ")}return`${t}${e}`};class Nu{constructor(t,o){this.buffer="",this.classPrefix=o.classPrefix,t.walk(this)}addText(t){this.buffer+=sa(t)}openNode(t){if(!Os(t))return;const o=Su(t.scope,{prefix:this.classPrefix});this.span(o)}closeNode(t){Os(t)&&(this.buffer+=Tu)}value(){return this.buffer}span(t){this.buffer+=`<span class="${t}">`}}const Rs=(e={})=>{const t={children:[]};return Object.assign(t,e),t};class kr{constructor(){this.rootNode=Rs(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(t){this.top.children.push(t)}openNode(t){const o=Rs({scope:t});this.add(o),this.stack.push(o)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(t){return this.constructor._walk(t,this.rootNode)}static _walk(t,o){return typeof o=="string"?t.addText(o):o.children&&(t.openNode(o),o.children.forEach(n=>this._walk(t,n)),t.closeNode(o)),t}static _collapse(t){typeof t!="string"&&t.children&&(t.children.every(o=>typeof o=="string")?t.children=[t.children.join("")]:t.children.forEach(o=>{kr._collapse(o)}))}}class Iu extends kr{constructor(t){super(),this.options=t}addText(t){t!==""&&this.add(t)}startScope(t){this.openNode(t)}endScope(){this.closeNode()}__addSublanguage(t,o){const n=t.root;o&&(n.scope=`language:${o}`),this.add(n)}toHTML(){return new Nu(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function Ro(e){return e?typeof e=="string"?e:e.source:null}function ia(e){return Ht("(?=",e,")")}function Au(e){return Ht("(?:",e,")*")}function Cu(e){return Ht("(?:",e,")?")}function Ht(...e){return e.map(o=>Ro(o)).join("")}function Lu(e){const t=e[e.length-1];return typeof t=="object"&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}function Or(...e){return"("+(Lu(e).capture?"":"?:")+e.map(n=>Ro(n)).join("|")+")"}function aa(e){return new RegExp(e.toString()+"|").exec("").length-1}function Mu(e,t){const o=e&&e.exec(t);return o&&o.index===0}const Bu=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Rr(e,{joinWith:t}){let o=0;return e.map(n=>{o+=1;const r=o;let s=Ro(n),i="";for(;s.length>0;){const a=Bu.exec(s);if(!a){i+=s;break}i+=s.substring(0,a.index),s=s.substring(a.index+a[0].length),a[0][0]==="\\"&&a[1]?i+="\\"+String(Number(a[1])+r):(i+=a[0],a[0]==="("&&o++)}return i}).map(n=>`(${n})`).join(t)}const Pu=/\b\B/,la="[a-zA-Z]\\w*",Tr="[a-zA-Z_]\\w*",ca="\\b\\d+(\\.\\d+)?",fa="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",ua="\\b(0b[01]+)",Fu="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Du=(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=Ht(t,/.*\b/,e.binary,/\b.*/)),Ot({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(o,n)=>{o.index!==0&&n.ignoreMatch()}},e)},To={begin:"\\\\[\\s\\S]",relevance:0},zu={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[To]},$u={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[To]},Hu={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},wn=function(e,t,o={}){const n=Ot({scope:"comment",begin:e,end:t,contains:[]},o);n.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const r=Or("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return n.contains.push({begin:Ht(/[ ]+/,"(",r,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),n},Uu=wn("//","$"),Xu=wn("/\\*","\\*/"),ju=wn("#","$"),Yu={scope:"number",begin:ca,relevance:0},Vu={scope:"number",begin:fa,relevance:0},Ku={scope:"number",begin:ua,relevance:0},Gu={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[To,{begin:/\[/,end:/\]/,relevance:0,contains:[To]}]},Wu={scope:"title",begin:la,relevance:0},qu={scope:"title",begin:Tr,relevance:0},Zu={begin:"\\.\\s*"+Tr,relevance:0},Ju=function(e){return Object.assign(e,{"on:begin":(t,o)=>{o.data._beginMatch=t[1]},"on:end":(t,o)=>{o.data._beginMatch!==t[1]&&o.ignoreMatch()}})};var Xo=Object.freeze({__proto__:null,APOS_STRING_MODE:zu,BACKSLASH_ESCAPE:To,BINARY_NUMBER_MODE:Ku,BINARY_NUMBER_RE:ua,COMMENT:wn,C_BLOCK_COMMENT_MODE:Xu,C_LINE_COMMENT_MODE:Uu,C_NUMBER_MODE:Vu,C_NUMBER_RE:fa,END_SAME_AS_BEGIN:Ju,HASH_COMMENT_MODE:ju,IDENT_RE:la,MATCH_NOTHING_RE:Pu,METHOD_GUARD:Zu,NUMBER_MODE:Yu,NUMBER_RE:ca,PHRASAL_WORDS_MODE:Hu,QUOTE_STRING_MODE:$u,REGEXP_MODE:Gu,RE_STARTERS_RE:Fu,SHEBANG:Du,TITLE_MODE:Wu,UNDERSCORE_IDENT_RE:Tr,UNDERSCORE_TITLE_MODE:qu});function Qu(e,t){e.input[e.index-1]==="."&&t.ignoreMatch()}function ed(e,t){e.className!==void 0&&(e.scope=e.className,delete e.className)}function td(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=Qu,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function od(e,t){Array.isArray(e.illegal)&&(e.illegal=Or(...e.illegal))}function nd(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function rd(e,t){e.relevance===void 0&&(e.relevance=1)}const sd=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const o=Object.assign({},e);Object.keys(e).forEach(n=>{delete e[n]}),e.keywords=o.keywords,e.begin=Ht(o.beforeMatch,ia(o.begin)),e.starts={relevance:0,contains:[Object.assign(o,{endsParent:!0})]},e.relevance=0,delete o.beforeMatch},id=["of","and","for","in","not","or","if","then","parent","list","value"],ad="keyword";function da(e,t,o=ad){const n=Object.create(null);return typeof e=="string"?r(o,e.split(" ")):Array.isArray(e)?r(o,e):Object.keys(e).forEach(function(s){Object.assign(n,da(e[s],t,s))}),n;function r(s,i){t&&(i=i.map(a=>a.toLowerCase())),i.forEach(function(a){const l=a.split("|");n[l[0]]=[s,ld(l[0],l[1])]})}}function ld(e,t){return t?Number(t):cd(e)?0:1}function cd(e){return id.includes(e.toLowerCase())}const Ts={},Ft=e=>{console.error(e)},Ss=(e,...t)=>{console.log(`WARN: ${e}`,...t)},Xt=(e,t)=>{Ts[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),Ts[`${e}/${t}`]=!0)},Qo=new Error;function ha(e,t,{key:o}){let n=0;const r=e[o],s={},i={};for(let a=1;a<=t.length;a++)i[a+n]=r[a],s[a+n]=!0,n+=aa(t[a-1]);e[o]=i,e[o]._emit=s,e[o]._multi=!0}function fd(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw Ft("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Qo;if(typeof e.beginScope!="object"||e.beginScope===null)throw Ft("beginScope must be object"),Qo;ha(e,e.begin,{key:"beginScope"}),e.begin=Rr(e.begin,{joinWith:""})}}function ud(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw Ft("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Qo;if(typeof e.endScope!="object"||e.endScope===null)throw Ft("endScope must be object"),Qo;ha(e,e.end,{key:"endScope"}),e.end=Rr(e.end,{joinWith:""})}}function dd(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function hd(e){dd(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),fd(e),ud(e)}function pd(e){function t(i,a){return new RegExp(Ro(i),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(a?"g":""))}class o{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(a,l){l.position=this.position++,this.matchIndexes[this.matchAt]=l,this.regexes.push([l,a]),this.matchAt+=aa(a)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const a=this.regexes.map(l=>l[1]);this.matcherRe=t(Rr(a,{joinWith:"|"}),!0),this.lastIndex=0}exec(a){this.matcherRe.lastIndex=this.lastIndex;const l=this.matcherRe.exec(a);if(!l)return null;const d=l.findIndex((h,p)=>p>0&&h!==void 0),f=this.matchIndexes[d];return l.splice(0,d),Object.assign(l,f)}}class n{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(a){if(this.multiRegexes[a])return this.multiRegexes[a];const l=new o;return this.rules.slice(a).forEach(([d,f])=>l.addRule(d,f)),l.compile(),this.multiRegexes[a]=l,l}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(a,l){this.rules.push([a,l]),l.type==="begin"&&this.count++}exec(a){const l=this.getMatcher(this.regexIndex);l.lastIndex=this.lastIndex;let d=l.exec(a);if(this.resumingScanAtSamePosition()&&!(d&&d.index===this.lastIndex)){const f=this.getMatcher(0);f.lastIndex=this.lastIndex+1,d=f.exec(a)}return d&&(this.regexIndex+=d.position+1,this.regexIndex===this.count&&this.considerAll()),d}}function r(i){const a=new n;return i.contains.forEach(l=>a.addRule(l.begin,{rule:l,type:"begin"})),i.terminatorEnd&&a.addRule(i.terminatorEnd,{type:"end"}),i.illegal&&a.addRule(i.illegal,{type:"illegal"}),a}function s(i,a){const l=i;if(i.isCompiled)return l;[ed,nd,hd,sd].forEach(f=>f(i,a)),e.compilerExtensions.forEach(f=>f(i,a)),i.__beforeBegin=null,[td,od,rd].forEach(f=>f(i,a)),i.isCompiled=!0;let d=null;return typeof i.keywords=="object"&&i.keywords.$pattern&&(i.keywords=Object.assign({},i.keywords),d=i.keywords.$pattern,delete i.keywords.$pattern),d=d||/\w+/,i.keywords&&(i.keywords=da(i.keywords,e.case_insensitive)),l.keywordPatternRe=t(d,!0),a&&(i.begin||(i.begin=/\B|\b/),l.beginRe=t(l.begin),!i.end&&!i.endsWithParent&&(i.end=/\B|\b/),i.end&&(l.endRe=t(l.end)),l.terminatorEnd=Ro(l.end)||"",i.endsWithParent&&a.terminatorEnd&&(l.terminatorEnd+=(i.end?"|":"")+a.terminatorEnd)),i.illegal&&(l.illegalRe=t(i.illegal)),i.contains||(i.contains=[]),i.contains=[].concat(...i.contains.map(function(f){return md(f==="self"?i:f)})),i.contains.forEach(function(f){s(f,l)}),i.starts&&s(i.starts,a),l.matcher=r(l),l}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=Ot(e.classNameAliases||{}),s(e)}function pa(e){return e?e.endsWithParent||pa(e.starts):!1}function md(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return Ot(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:pa(e)?Ot(e,{starts:e.starts?Ot(e.starts):null}):Object.isFrozen(e)?Ot(e):e}var gd="11.10.0";class bd extends Error{constructor(t,o){super(t),this.name="HTMLInjectionError",this.html=o}}const Dn=sa,Ns=Ot,Is=Symbol("nomatch"),wd=7,ma=function(e){const t=Object.create(null),o=Object.create(null),n=[];let r=!0;const s="Could not find the language '{}', did you forget to load/include a language module?",i={disableAutodetect:!0,name:"Plain text",contains:[]};let a={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:Iu};function l(w){return a.noHighlightRe.test(w)}function d(w){let R=w.className+" ";R+=w.parentNode?w.parentNode.className:"";const X=a.languageDetectRe.exec(R);if(X){const J=xe(X[1]);return J||(Ss(s.replace("{}",X[1])),Ss("Falling back to no-highlight mode for this block.",w)),J?X[1]:"no-highlight"}return R.split(/\s+/).find(J=>l(J)||xe(J))}function f(w,R,X){let J="",te="";typeof R=="object"?(J=w,X=R.ignoreIllegals,te=R.language):(Xt("10.7.0","highlight(lang, code, ...args) has been deprecated."),Xt("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),te=w,J=R),X===void 0&&(X=!0);const se={code:J,language:te};Xe("before:highlight",se);const ke=se.result?se.result:h(se.language,se.code,X);return ke.code=se.code,Xe("after:highlight",ke),ke}function h(w,R,X,J){const te=Object.create(null);function se(E,T){return E.keywords[T]}function ke(){if(!_.keywords){O.addText(b);return}let E=0;_.keywordPatternRe.lastIndex=0;let T=_.keywordPatternRe.exec(b),C="";for(;T;){C+=b.substring(E,T.index);const W=x.case_insensitive?T[0].toLowerCase():T[0],ne=se(_,W);if(ne){const[be,Pe]=ne;if(O.addText(C),C="",te[W]=(te[W]||0)+1,te[W]<=wd&&(H+=Pe),be.startsWith("_"))C+=T[0];else{const At=x.classNameAliases[be]||be;ge(T[0],At)}}else C+=T[0];E=_.keywordPatternRe.lastIndex,T=_.keywordPatternRe.exec(b)}C+=b.substring(E),O.addText(C)}function Je(){if(b==="")return;let E=null;if(typeof _.subLanguage=="string"){if(!t[_.subLanguage]){O.addText(b);return}E=h(_.subLanguage,b,!0,S[_.subLanguage]),S[_.subLanguage]=E._top}else E=g(b,_.subLanguage.length?_.subLanguage:null);_.relevance>0&&(H+=E.relevance),O.__addSublanguage(E._emitter,E.language)}function Oe(){_.subLanguage!=null?Je():ke(),b=""}function ge(E,T){E!==""&&(O.startScope(T),O.addText(E),O.endScope())}function v(E,T){let C=1;const W=T.length-1;for(;C<=W;){if(!E._emit[C]){C++;continue}const ne=x.classNameAliases[E[C]]||E[C],be=T[C];ne?ge(be,ne):(b=be,ke(),b=""),C++}}function A(E,T){return E.scope&&typeof E.scope=="string"&&O.openNode(x.classNameAliases[E.scope]||E.scope),E.beginScope&&(E.beginScope._wrap?(ge(b,x.classNameAliases[E.beginScope._wrap]||E.beginScope._wrap),b=""):E.beginScope._multi&&(v(E.beginScope,T),b="")),_=Object.create(E,{parent:{value:_}}),_}function I(E,T,C){let W=Mu(E.endRe,C);if(W){if(E["on:end"]){const ne=new ks(E);E["on:end"](T,ne),ne.isMatchIgnored&&(W=!1)}if(W){for(;E.endsParent&&E.parent;)E=E.parent;return E}}if(E.endsWithParent)return I(E.parent,T,C)}function F(E){return _.matcher.regexIndex===0?(b+=E[0],1):(Y=!0,0)}function re(E){const T=E[0],C=E.rule,W=new ks(C),ne=[C.__beforeBegin,C["on:begin"]];for(const be of ne)if(be&&(be(E,W),W.isMatchIgnored))return F(T);return C.skip?b+=T:(C.excludeBegin&&(b+=T),Oe(),!C.returnBegin&&!C.excludeBegin&&(b=T)),A(C,E),C.returnBegin?0:T.length}function he(E){const T=E[0],C=R.substring(E.index),W=I(_,E,C);if(!W)return Is;const ne=_;_.endScope&&_.endScope._wrap?(Oe(),ge(T,_.endScope._wrap)):_.endScope&&_.endScope._multi?(Oe(),v(_.endScope,E)):ne.skip?b+=T:(ne.returnEnd||ne.excludeEnd||(b+=T),Oe(),ne.excludeEnd&&(b=T));do _.scope&&O.closeNode(),!_.skip&&!_.subLanguage&&(H+=_.relevance),_=_.parent;while(_!==W.parent);return W.starts&&A(W.starts,E),ne.returnEnd?0:T.length}function c(){const E=[];for(let T=_;T!==x;T=T.parent)T.scope&&E.unshift(T.scope);E.forEach(T=>O.openNode(T))}let u={};function m(E,T){const C=T&&T[0];if(b+=E,C==null)return Oe(),0;if(u.type==="begin"&&T.type==="end"&&u.index===T.index&&C===""){if(b+=R.slice(T.index,T.index+1),!r){const W=new Error(`0 width match regex (${w})`);throw W.languageName=w,W.badRule=u.rule,W}return 1}if(u=T,T.type==="begin")return re(T);if(T.type==="illegal"&&!X){const W=new Error('Illegal lexeme "'+C+'" for mode "'+(_.scope||"<unnamed>")+'"');throw W.mode=_,W}else if(T.type==="end"){const W=he(T);if(W!==Is)return W}if(T.type==="illegal"&&C==="")return 1;if(D>1e5&&D>T.index*3)throw new Error("potential infinite loop, way more iterations than matches");return b+=C,C.length}const x=xe(w);if(!x)throw Ft(s.replace("{}",w)),new Error('Unknown language: "'+w+'"');const y=pd(x);let k="",_=J||y;const S={},O=new a.__emitter(a);c();let b="",H=0,N=0,D=0,Y=!1;try{if(x.__emitTokens)x.__emitTokens(R,O);else{for(_.matcher.considerAll();;){D++,Y?Y=!1:_.matcher.considerAll(),_.matcher.lastIndex=N;const E=_.matcher.exec(R);if(!E)break;const T=R.substring(N,E.index),C=m(T,E);N=E.index+C}m(R.substring(N))}return O.finalize(),k=O.toHTML(),{language:w,value:k,relevance:H,illegal:!1,_emitter:O,_top:_}}catch(E){if(E.message&&E.message.includes("Illegal"))return{language:w,value:Dn(R),illegal:!0,relevance:0,_illegalBy:{message:E.message,index:N,context:R.slice(N-100,N+100),mode:E.mode,resultSoFar:k},_emitter:O};if(r)return{language:w,value:Dn(R),illegal:!1,relevance:0,errorRaised:E,_emitter:O,_top:_};throw E}}function p(w){const R={value:Dn(w),illegal:!1,relevance:0,_top:i,_emitter:new a.__emitter(a)};return R._emitter.addText(w),R}function g(w,R){R=R||a.languages||Object.keys(t);const X=p(w),J=R.filter(xe).filter(Ue).map(Oe=>h(Oe,w,!1));J.unshift(X);const te=J.sort((Oe,ge)=>{if(Oe.relevance!==ge.relevance)return ge.relevance-Oe.relevance;if(Oe.language&&ge.language){if(xe(Oe.language).supersetOf===ge.language)return 1;if(xe(ge.language).supersetOf===Oe.language)return-1}return 0}),[se,ke]=te,Je=se;return Je.secondBest=ke,Je}function B(w,R,X){const J=R&&o[R]||X;w.classList.add("hljs"),w.classList.add(`language-${J}`)}function L(w){let R=null;const X=d(w);if(l(X))return;if(Xe("before:highlightElement",{el:w,language:X}),w.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",w);return}if(w.children.length>0&&(a.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(w)),a.throwUnescapedHTML))throw new bd("One of your code blocks includes unescaped HTML.",w.innerHTML);R=w;const J=R.textContent,te=X?f(J,{language:X,ignoreIllegals:!0}):g(J);w.innerHTML=te.value,w.dataset.highlighted="yes",B(w,X,te.language),w.result={language:te.language,re:te.relevance,relevance:te.relevance},te.secondBest&&(w.secondBest={language:te.secondBest.language,relevance:te.secondBest.relevance}),Xe("after:highlightElement",{el:w,result:te,text:J})}function K(w){a=Ns(a,w)}const $=()=>{M(),Xt("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function P(){M(),Xt("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let z=!1;function M(){if(document.readyState==="loading"){z=!0;return}document.querySelectorAll(a.cssSelector).forEach(L)}function oe(){z&&M()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",oe,!1);function de(w,R){let X=null;try{X=R(e)}catch(J){if(Ft("Language definition for '{}' could not be registered.".replace("{}",w)),r)Ft(J);else throw J;X=i}X.name||(X.name=w),t[w]=X,X.rawDefinition=R.bind(null,e),X.aliases&&Be(X.aliases,{languageName:w})}function ce(w){delete t[w];for(const R of Object.keys(o))o[R]===w&&delete o[R]}function Me(){return Object.keys(t)}function xe(w){return w=(w||"").toLowerCase(),t[w]||t[o[w]]}function Be(w,{languageName:R}){typeof w=="string"&&(w=[w]),w.forEach(X=>{o[X.toLowerCase()]=R})}function Ue(w){const R=xe(w);return R&&!R.disableAutodetect}function Ze(w){w["before:highlightBlock"]&&!w["before:highlightElement"]&&(w["before:highlightElement"]=R=>{w["before:highlightBlock"](Object.assign({block:R.el},R))}),w["after:highlightBlock"]&&!w["after:highlightElement"]&&(w["after:highlightElement"]=R=>{w["after:highlightBlock"](Object.assign({block:R.el},R))})}function He(w){Ze(w),n.push(w)}function dt(w){const R=n.indexOf(w);R!==-1&&n.splice(R,1)}function Xe(w,R){const X=w;n.forEach(function(J){J[X]&&J[X](R)})}function me(w){return Xt("10.7.0","highlightBlock will be removed entirely in v12.0"),Xt("10.7.0","Please use highlightElement now."),L(w)}Object.assign(e,{highlight:f,highlightAuto:g,highlightAll:M,highlightElement:L,highlightBlock:me,configure:K,initHighlighting:$,initHighlightingOnLoad:P,registerLanguage:de,unregisterLanguage:ce,listLanguages:Me,getLanguage:xe,registerAliases:Be,autoDetection:Ue,inherit:Ns,addPlugin:He,removePlugin:dt}),e.debugMode=function(){r=!1},e.safeMode=function(){r=!0},e.versionString=gd,e.regex={concat:Ht,lookahead:ia,either:Or,optional:Cu,anyNumberOfTimes:Au};for(const w in Xo)typeof Xo[w]=="object"&&ra(Xo[w]);return Object.assign(e,Xo),e},ao=ma({});ao.newInstance=()=>ma({});var yd=ao;ao.HighlightJS=ao;ao.default=ao;const yn=Ru(yd),As="[A-Za-z$_][0-9A-Za-z$_]*",_d=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],vd=["true","false","null","undefined","NaN","Infinity"],ga=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],ba=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],wa=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],xd=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],Ed=[].concat(wa,ga,ba);function kd(e){const t=e.regex,o=(R,{after:X})=>{const J="</"+R[0].slice(1);return R.input.indexOf(J,X)!==-1},n=As,r={begin:"<>",end:"</>"},s=/<[A-Za-z0-9\\._:-]+\s*\/>/,i={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(R,X)=>{const J=R[0].length+R.index,te=R.input[J];if(te==="<"||te===","){X.ignoreMatch();return}te===">"&&(o(R,{after:J})||X.ignoreMatch());let se;const ke=R.input.substring(J);if(se=ke.match(/^\s*=/)){X.ignoreMatch();return}if((se=ke.match(/^\s+extends\s+/))&&se.index===0){X.ignoreMatch();return}}},a={$pattern:As,keyword:_d,literal:vd,built_in:Ed,"variable.language":xd},l="[0-9](_?[0-9])*",d=`\\.(${l})`,f="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",h={className:"number",variants:[{begin:`(\\b(${f})((${d})|\\.)?|(${d}))[eE][+-]?(${l})\\b`},{begin:`\\b(${f})\\b((${d})\\b|\\.)?|(${d})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},p={className:"subst",begin:"\\$\\{",end:"\\}",keywords:a,contains:[]},g={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,p],subLanguage:"xml"}},B={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,p],subLanguage:"css"}},L={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,p],subLanguage:"graphql"}},K={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,p]},P={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:n+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},z=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,g,B,L,K,{match:/\$\d+/},h];p.contains=z.concat({begin:/\{/,end:/\}/,keywords:a,contains:["self"].concat(z)});const M=[].concat(P,p.contains),oe=M.concat([{begin:/(\s*)\(/,end:/\)/,keywords:a,contains:["self"].concat(M)}]),de={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:oe},ce={variants:[{match:[/class/,/\s+/,n,/\s+/,/extends/,/\s+/,t.concat(n,"(",t.concat(/\./,n),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,n],scope:{1:"keyword",3:"title.class"}}]},Me={relevance:0,match:t.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...ga,...ba]}},xe={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},Be={variants:[{match:[/function/,/\s+/,n,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[de],illegal:/%/},Ue={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function Ze(R){return t.concat("(?!",R.join("|"),")")}const He={match:t.concat(/\b/,Ze([...wa,"super","import"].map(R=>`${R}\\s*\\(`)),n,t.lookahead(/\s*\(/)),className:"title.function",relevance:0},dt={begin:t.concat(/\./,t.lookahead(t.concat(n,/(?![0-9A-Za-z$_(])/))),end:n,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},Xe={match:[/get|set/,/\s+/,n,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},de]},me="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",w={match:[/const|var|let/,/\s+/,n,/\s*/,/=\s*/,/(async\s*)?/,t.lookahead(me)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[de]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:a,exports:{PARAMS_CONTAINS:oe,CLASS_REFERENCE:Me},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),xe,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,g,B,L,K,P,{match:/\$\d+/},h,Me,{className:"attr",begin:n+t.lookahead(":"),relevance:0},w,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[P,e.REGEXP_MODE,{className:"function",begin:me,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:oe}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:r.begin,end:r.end},{match:s},{begin:i.begin,"on:begin":i.isTrulyOpeningTag,end:i.end}],subLanguage:"xml",contains:[{begin:i.begin,end:i.end,skip:!0,contains:["self"]}]}]},Be,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[de,e.inherit(e.TITLE_MODE,{begin:n,className:"title.function"})]},{match:/\.\.\./,relevance:0},dt,{match:"\\$"+n,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[de]},He,Ue,ce,Xe,{match:/\$[(.]/}]}}const Od=e=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:e.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z_][A-Za-z0-9_-]*/}}),Rd=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","optgroup","option","p","picture","q","quote","samp","section","select","source","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],Td=["defs","g","marker","mask","pattern","svg","switch","symbol","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feGaussianBlur","feImage","feMerge","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","linearGradient","radialGradient","stop","circle","ellipse","image","line","path","polygon","polyline","rect","text","use","textPath","tspan","foreignObject","clipPath"],Sd=[...Rd,...Td],Nd=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"].sort().reverse(),Id=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"].sort().reverse(),Ad=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"].sort().reverse(),Cd=["accent-color","align-content","align-items","align-self","alignment-baseline","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","baseline-shift","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-end-end-radius","border-end-start-radius","border-right-color","border-right-style","border-right-width","border-spacing","border-start-end-radius","border-start-start-radius","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","cx","cy","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","color-scheme","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","empty-cells","enable-background","fill","fill-opacity","fill-rule","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","flood-color","flood-opacity","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-horizontal","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","inset","inset-block","inset-block-end","inset-block-start","inset-inline","inset-inline-end","inset-inline-start","isolation","kerning","justify-content","justify-items","justify-self","left","letter-spacing","lighting-color","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","marker","marker-end","marker-mid","marker-start","mask","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","r","resize","rest","rest-after","rest-before","right","rotate","row-gap","scale","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","shape-rendering","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","speak","speak-as","src","tab-size","table-layout","text-anchor","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip-ink","text-decoration-style","text-decoration-thickness","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-offset","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","translate","unicode-bidi","vector-effect","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","x","y","z-index"].sort().reverse();function Ld(e){const t=e.regex,o=Od(e),n={begin:/-(webkit|moz|ms|o)-(?=[a-z])/},r="and or not only",s=/@-?\w[\w]*(-\w+)*/,i="[a-zA-Z-][a-zA-Z0-9_-]*",a=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE];return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},classNameAliases:{keyframePosition:"selector-tag"},contains:[o.BLOCK_COMMENT,n,o.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{className:"selector-class",begin:"\\."+i,relevance:0},o.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{begin:":("+Id.join("|")+")"},{begin:":(:)?("+Ad.join("|")+")"}]},o.CSS_VARIABLE,{className:"attribute",begin:"\\b("+Cd.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,contains:[o.BLOCK_COMMENT,o.HEXCOLOR,o.IMPORTANT,o.CSS_NUMBER_MODE,...a,{begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"},contains:[...a,{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]},o.FUNCTION_DISPATCH]},{begin:t.lookahead(/@/),end:"[{;]",relevance:0,illegal:/:/,contains:[{className:"keyword",begin:s},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:r,attribute:Nd.join(" ")},contains:[{begin:/[a-z-]+(?=:)/,className:"attribute"},...a,o.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"\\b("+Sd.join("|")+")\\b"}]}}function Md(e){return{name:"VBScript in HTML",subLanguage:"xml",contains:[{begin:"<%",end:"%>",subLanguage:"vbscript"}]}}yn.registerLanguage("javascript",kd);yn.registerLanguage("css",Ld);yn.registerLanguage("html",Md);const Bd={name:"CodeBlock",props:{code:{type:String,required:!0},type:{type:String,default:"css"}},mounted(){this.highlightCode()},methods:{highlightCode(){const e=this.$refs.codeBlock;yn.highlightElement(e)}}};function Pd(e,t,o,n,r,s){return V(),Z("pre",null,[t[0]||(t[0]=Re("        ")),ee("code",{ref:"codeBlock",class:Dt(`code language-${o.type}`)},`
            `+Ko(o.code)+`
        `,3),t[1]||(t[1]=Re(`
    `))])}const Fd=Po(Bd,[["render",Pd]]),Dd=`
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
`;var Lo;class zd extends nt{constructor(){super();we(this,Lo);const o=this.attachShadow({mode:"open"});o.innerHTML=`
      <div class="ea-card_wrap" part="container">
        <div class="ea-card_header" part="header-wrap">
          <slot name="header"></slot>
        </div>
        <div class="ea-card_content" part="content-wrap">
          <slot></slot>
        </div>
      </div>
    `,Ee(this,Lo,o.querySelector(".ea-card_wrap")),this.build(o,Dd)}get shadow(){return this.getAttribute("shadow")||"always"}set shadow(o){this.setAttribute("shadow",o),j(this,Lo).classList.add(`is-${o}-shadow`)}connectedCallback(){this.shadow=this.shadow}}Lo=new WeakMap;customElements.get("ea-card")||customElements.define("ea-card",zd);const $d={name:"SgCard",components:{CodeBlock:Fd},props:{title:{type:String,default:"Card"},code:{type:String,default:""},className:{type:String,default:""},hasButton:{type:Boolean,default:!1}},setup(e){let t=un(e.hasButton);const o=We(()=>({[e.className]:t.value?"":e.className,box:!0}));return{isAnimated:t,animateClassName:o,toggleClass:s=>{t.value=!1},animationend:()=>{t.value=!0}}}},Hd={class:"sg-card"},Ud={shadow:"hover"},Xd={slot:"header",class:"header"};function jd(e,t,o,n,r,s){const i=Rl("CodeBlock");return V(),Z("div",Hd,[ee("ea-card",Ud,[ee("div",Xd,[ee("span",null,Ko(o.title),1),o.hasButton?(V(),Z("ea-button",{key:0,onClick:t[0]||(t[0]=(...a)=>n.toggleClass&&n.toggleClass(...a))}," 点击执行动画 ")):ac("",!0)]),ee("span",{class:Dt(n.animateClassName),onAnimationend:t[1]||(t[1]=(...a)=>n.animationend&&n.animationend(...a))},Ko(o.title),35),U(i,{code:o.code},null,8,["code"])])])}const ve=Po($d,[["render",jd]]),Yd={class:"part"},Vd={__name:"index",setup(e){const t={};return Object.assign(t,{grow:{title:"放大",className:"grow",code:`
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
    `}}),(o,n)=>(V(),Z("section",Yd,[(V(),Z(Q,null,_e(t,(r,s)=>U(ve,{key:s,title:r.title,code:r.code,className:r.className},null,8,["title","code","className"])),64))]))}},Kd={class:"part"},Gd={__name:"index",setup(e){const t={};return Object.assign(t,{fill:{title:"填充",className:"fill",code:`
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
`}}),(o,n)=>(V(),Z("section",Kd,[(V(),Z(Q,null,_e(t,(r,s)=>U(ve,{key:s,title:r.title,code:r.code,className:r.className},null,8,["title","code","className"])),64))]))}},Wd={class:"part"},qd={__name:"index",setup(e){const t={};return Object.assign(t,{borderFade:{title:"填充",className:"borderFade",code:`
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
`}}),(o,n)=>(V(),Z("section",Wd,[(V(),Z(Q,null,_e(t,(r,s)=>U(ve,{key:s,title:r.title,code:r.code,className:r.className},null,8,["title","code","className"])),64))]))}},Zd={class:"part"},Jd={__name:"index",setup(e){const t={};return Object.assign(t,{shadow:{title:"阴影",className:"shadow",code:`
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
`}}),(o,n)=>(V(),Z("section",Zd,[(V(),Z(Q,null,_e(t,(r,s)=>U(ve,{key:s,title:r.title,code:r.code,className:r.className},null,8,["title","code","className"])),64))]))}},Qd={class:"part"},eh={__name:"index",setup(e){const t={};return Object.assign(t,{bubbleTop:{title:"气泡-上方",className:"bubbleTop",code:`
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
`}}),(o,n)=>(V(),Z("section",Qd,[(V(),Z(Q,null,_e(t,(r,s)=>U(ve,{key:s,title:r.title,code:r.code,className:r.className},null,8,["title","code","className"])),64))]))}},th={class:"part"},oh={__name:"index",setup(e){const t={};return Object.assign(t,{curlTopLeft:{title:"折角-左上方",className:"curlTopLeft",code:`
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
`}}),(o,n)=>(V(),Z("section",th,[(V(),Z(Q,null,_e(t,(r,s)=>U(ve,{key:s,title:r.title,code:r.code,className:r.className},null,8,["title","code","className"])),64))]))}},nh={class:"part"},rh={__name:"index",setup(e){const t={};return Object.assign(t,{bounce:{title:"跳跃",className:"bounce",code:`
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
`}}),(o,n)=>(V(),Z("section",nh,[(V(),Z(Q,null,_e(t,(r,s)=>U(ve,{key:s,title:r.title,code:r.code,className:r.className},null,8,["title","code","className"])),64))]))}},sh=`
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
`;var no,Ne;class lh extends nt{constructor(){super();we(this,no,"button");we(this,Ne);const o=this.attachShadow({mode:"open"});this.getAttribute("href")?(o.innerHTML=ih,Ee(this,no,"a")):(o.innerHTML=sh,Ee(this,no,"button")),Ee(this,Ne,o.querySelector(".ea-button")),this.build(o,ah)}get BUTTON_STYLE(){return["plain","round"]}get BUTTON_TYPE(){return["normal","primary","success","warning","danger","text"]}get BUTTON_SIZE(){return["medium","small","mini"]}get disabled(){return this.getAttrBoolean("disabled")}set disabled(o){this.toggleAttr("disabled",o),j(this,Ne).classList.toggle("disabled",o),this.style.cursor=o?"not-allowed":"pointer",o&&j(this,Ne).setAttribute("disabled",o)}get plain(){return this.getAttrBoolean("plain")}set plain(o){this.toggleAttr("plain",o),j(this,Ne).classList.toggle("plain",o)}get round(){return this.getAttrBoolean("round")}set round(o){this.toggleAttr("round",o),j(this,Ne).classList.toggle("round",o)}get type(){const o=this.getAttribute("type");return this.BUTTON_TYPE.includes(o)?o:"normal"}set type(o){this.setAttribute("type",o),j(this,Ne).classList.add(o)}get size(){const o=this.getAttribute("size");return this.BUTTON_SIZE.includes(o)?o:"medium"}set size(o){this.toggleAttr("size",o),j(this,Ne).classList.add(o)}get loading(){return this.getAttrBoolean("loading")}set loading(o){var n;if(this.toggleAttr("loading",o),this.disabled=o,o){const r=document.createElement("ea-icon");r.id="ea-loading-icon",r.icon="icon-spin6 animate-spin",j(this,Ne).insertBefore(r,j(this,Ne).firstChild)}else{const r=(n=j(this,Ne))==null?void 0:n.querySelectorAll("#ea-loading-icon");(r==null?void 0:r.length)>0&&(r==null||r.forEach(s=>s.remove()))}}get icon(){return this.getAttribute("icon")||""}set icon(o){if(this.setAttribute("icon",o),o&&!j(this,Ne).querySelector("ea-icon")){const n=document.createElement("ea-icon");n.icon=o,n.part="icon",j(this,Ne).insertBefore(n,j(this,Ne).firstChild)}}get href(){return this.getAttribute("href")||""}set href(o){j(this,no)!=="button"&&(this.setAttribute("href",o),j(this,Ne).setAttribute("href",o))}connectedCallback(){this.plain=this.plain,this.round=this.round,this.type=this.type,this.size=this.size,this.icon=this.icon,this.disabled=this.disabled,this.href=this.href,this.loading&&(this.loading=this.loading)}}no=new WeakMap,Ne=new WeakMap;window.customElements.get("ea-button")||window.customElements.define("ea-button",lh);const ch={class:"part"},fh={class:"part"},uh={__name:"index",setup(e){const t={backInTop:{title:"从上出现",className:"backInTop",code:`
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
`}},o={backOutTop:{title:"从上退出",className:"backOutTop",code:`
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
`}};return(n,r)=>(V(),Z(Q,null,[r[0]||(r[0]=ee("h2",null,"从后面进入",-1)),ee("section",ch,[(V(),Z(Q,null,_e(t,(s,i)=>U(ve,{key:i,title:s.title,code:s.code,className:s.className,hasButton:!0},null,8,["title","code","className"])),64))]),r[1]||(r[1]=ee("h2",null,"从后面退出",-1)),ee("section",fh,[(V(),Z(Q,null,_e(o,(s,i)=>U(ve,{key:i,title:s.title,code:s.code,className:s.className,hasButton:!0},null,8,["title","code","className"])),64))])],64))}},dh={class:"part"},hh={class:"part"},ph={__name:"index",setup(e){const t={bounceIn:{title:"弹跳出现",className:"bounceIn",code:`
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
`}},o={bounceInRight:{title:"弹跳出现-从右方",className:"bounceInRight",code:`
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
`}};return(n,r)=>(V(),Z(Q,null,[r[0]||(r[0]=ee("h2",null,"弹跳进入",-1)),ee("section",dh,[(V(),Z(Q,null,_e(t,(s,i)=>U(ve,{key:i,title:s.title,code:s.code,className:s.className,hasButton:!0},null,8,["title","code","className"])),64))]),r[1]||(r[1]=ee("h2",null,"弹跳退出",-1)),ee("section",hh,[(V(),Z(Q,null,_e(o,(s,i)=>U(ve,{key:i,title:s.title,code:s.code,className:s.className,hasButton:!0},null,8,["title","code","className"])),64))])],64))}},mh={class:"part"},gh={class:"part"},bh={__name:"index",setup(e){const t={fadeIn:{title:"淡入",className:"fadeIn",code:`
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
`}},o={fadeOut:{title:"淡出",className:"fadeOut",code:`
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
`}};return(n,r)=>(V(),Z(Q,null,[r[0]||(r[0]=ee("h2",null,"淡入",-1)),ee("section",mh,[(V(),Z(Q,null,_e(t,(s,i)=>U(ve,{key:i,title:s.title,code:s.code,className:s.className,hasButton:!0},null,8,["title","code","className"])),64))]),r[1]||(r[1]=ee("h2",null,"淡出",-1)),ee("section",gh,[(V(),Z(Q,null,_e(o,(s,i)=>U(ve,{key:i,title:s.title,code:s.code,className:s.className,hasButton:!0},null,8,["title","code","className"])),64))])],64))}},wh={class:"part"},yh={__name:"index",setup(e){const t={flip:{title:"翻转",className:"flip",code:`
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
`}};return(o,n)=>(V(),Z("section",wh,[(V(),Z(Q,null,_e(t,(r,s)=>U(ve,{key:s,title:r.title,code:r.code,className:r.className,hasButton:!0},null,8,["title","code","className"])),64))]))}},_h={class:"part"},vh={__name:"index",setup(e){const t={lightSpeedInRight:{title:"光速-从右进入",className:"lightSpeedInRight",code:`
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
`}};return(o,n)=>(V(),Z("section",_h,[(V(),Z(Q,null,_e(t,(r,s)=>U(ve,{key:s,title:r.title,code:r.code,className:r.className,hasButton:!0},null,8,["title","code","className"])),64))]))}},xh={class:"part"},Eh={class:"part"},kh={__name:"index",setup(e){const t={rotateIn:{title:"旋转进入",className:"rotateIn",code:`
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
`}},o={rotateOut:{title:"旋转退出",className:"rotateOut",code:`
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
`}};return(n,r)=>(V(),Z(Q,null,[r[0]||(r[0]=ee("h2",null,"进入",-1)),ee("section",xh,[(V(),Z(Q,null,_e(t,(s,i)=>U(ve,{key:i,title:s.title,code:s.code,className:s.className,hasButton:!0},null,8,["title","code","className"])),64))]),r[1]||(r[1]=ee("h2",null,"退出",-1)),ee("section",Eh,[(V(),Z(Q,null,_e(o,(s,i)=>U(ve,{key:i,title:s.title,code:s.code,className:s.className,hasButton:!0},null,8,["title","code","className"])),64))])],64))}},Oh={class:"part"},Rh={__name:"index",setup(e){const t={hinge:{title:"铰链",className:"hinge",code:`
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
`}};return(o,n)=>(V(),Z("section",Oh,[(V(),Z(Q,null,_e(t,(r,s)=>U(ve,{key:s,title:r.title,code:r.code,className:r.className,hasButton:!0},null,8,["title","code","className"])),64))]))}},Th={class:"part"},Sh={class:"part"},Nh={__name:"index",setup(e){const t={zoomIn:{title:"放大-出现",className:"zoomIn",code:`
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
  `}},o={zoomOut:{title:"放大-退出",className:"zoomOut",code:`
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
`}};return(n,r)=>(V(),Z(Q,null,[r[0]||(r[0]=ee("h2",null,"缩放进入",-1)),ee("section",Th,[(V(),Z(Q,null,_e(t,(s,i)=>U(ve,{key:i,title:s.title,code:s.code,className:s.className,hasButton:!0},null,8,["title","code","className"])),64))]),r[1]||(r[1]=ee("h2",null,"缩放退出",-1)),ee("section",Sh,[(V(),Z(Q,null,_e(o,(s,i)=>U(ve,{key:i,title:s.title,code:s.code,className:s.className,hasButton:!0},null,8,["title","code","className"])),64))])],64))}},Ih=[{path:"/",redirect:"/2DTransitions",meta:{title:"主页"}},{path:"/2DTransitions",component:Vd,meta:{title:"2D 过渡动画"}},{path:"/backgroundTransitions",component:Gd,meta:{title:"背景过渡动画"}},{path:"/borderTransitions",component:qd,meta:{title:"边框过渡动画"}},{path:"/shadowAndGlowTransitions",component:Jd,meta:{title:"阴影过渡动画"}},{path:"/speechBubbles",component:eh,meta:{title:"气泡框过渡动画"}},{path:"/curls",component:oh,meta:{title:"折角过渡动画"}},{path:"/attentionSeekers",component:rh,meta:{title:"吸引眼球动画"}},{path:"/backEntrancesAndBackExits",component:uh,meta:{title:"后进后出动画"}},{path:"/bouncingEntrancesAndBouncingExits",component:ph,meta:{title:"弹出弹入动画"}},{path:"/fadeInAndFadeOut",component:bh,meta:{title:"淡入淡出动画"}},{path:"/flippers",component:yh,meta:{title:"翻转动画"}},{path:"/lightspeed",component:vh,meta:{title:"光速动画"}},{path:"/rotatingEntrancesAndRotatingExits",component:kh,meta:{title:"旋转动画"}},{path:"/specials",component:Rh,meta:{title:"特殊效果"}},{path:"/zoomingEntrancesAndZoomingExits",component:Nh,meta:{title:"放大缩小动画"}}],ya=Vf({history:Ef(),routes:Ih});ya.beforeEach((e,t,o)=>{document.title=`${e.meta.title} | Ea-effects.css`,e.hash||o()});const Cs={fontelloCSS:"https://cdn.jsdelivr.net/npm/easy-component-ui/components/ea-icon/css/fontello.css"};function Ah(e){Object.assign(Cs,e),document.dispatchEvent(new CustomEvent("configChanged",{detail:Cs}))}window.addEventListener("DOMContentLoaded",()=>{Ah({fontelloCSS:new URL("/ea-effects/ea-icon/css/fontello.css",import.meta.url).href})});Uc(Ou).use(ya).mount("#app");
