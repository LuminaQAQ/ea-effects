var To=e=>{throw TypeError(e)};var mr=(e,t,n)=>t.has(e)||To("Cannot "+n);var W=(e,t,n)=>(mr(e,t,"read from private field"),n?n.call(e):t.get(e)),ye=(e,t,n)=>t.has(e)?To("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),ke=(e,t,n,r)=>(mr(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),br=(e,t,n)=>(mr(e,t,"access private method"),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();/**
* @vue/shared v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Wr(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const le={},Xt=[],rt=()=>{},wl=()=>!1,tr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),qr=e=>e.startsWith("onUpdate:"),Se=Object.assign,Zr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},vl=Object.prototype.hasOwnProperty,ne=(e,t)=>vl.call(e,t),V=Array.isArray,Vt=e=>nr(e)==="[object Map]",Cs=e=>nr(e)==="[object Set]",K=e=>typeof e=="function",me=e=>typeof e=="string",Et=e=>typeof e=="symbol",ue=e=>e!==null&&typeof e=="object",Ms=e=>(ue(e)||K(e))&&K(e.then)&&K(e.catch),Is=Object.prototype.toString,nr=e=>Is.call(e),_l=e=>nr(e).slice(8,-1),Ls=e=>nr(e)==="[object Object]",Jr=e=>me(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,fn=Wr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),rr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},yl=/-(\w)/g,We=rr(e=>e.replace(yl,(t,n)=>n?n.toUpperCase():"")),xl=/\B([A-Z])/g,Bt=rr(e=>e.replace(xl,"-$1").toLowerCase()),or=rr(e=>e.charAt(0).toUpperCase()+e.slice(1)),wr=rr(e=>e?`on${or(e)}`:""),xt=(e,t)=>!Object.is(e,t),vr=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Ps=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},El=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ao;const Bs=()=>Ao||(Ao=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qr(e){if(V(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=me(r)?Tl(r):Qr(r);if(o)for(const s in o)t[s]=o[s]}return t}else if(me(e)||ue(e))return e}const Sl=/;(?![^(]*\))/g,kl=/:([^]+)/,Rl=/\/\*[^]*?\*\//g;function Tl(e){const t={};return e.replace(Rl,"").split(Sl).forEach(n=>{if(n){const r=n.split(kl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Lt(e){let t="";if(me(e))t=e;else if(V(e))for(let n=0;n<e.length;n++){const r=Lt(e[n]);r&&(t+=r+" ")}else if(ue(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Al="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ol=Wr(Al);function Fs(e){return!!e||e===""}const Ds=e=>!!(e&&e.__v_isRef===!0),Vn=e=>me(e)?e:e==null?"":V(e)||ue(e)&&(e.toString===Is||!K(e.toString))?Ds(e)?Vn(e.value):JSON.stringify(e,Hs,2):String(e),Hs=(e,t)=>Ds(t)?Hs(e,t.value):Vt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,o],s)=>(n[_r(r,s)+" =>"]=o,n),{})}:Cs(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>_r(n))}:Et(t)?_r(t):ue(t)&&!V(t)&&!Ls(t)?String(t):t,_r=(e,t="")=>{var n;return Et(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $e;class Nl{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=$e,!t&&$e&&(this.index=($e.scopes||($e.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=$e;try{return $e=this,t()}finally{$e=n}}}on(){$e=this}off(){$e=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function Cl(){return $e}let ie;const yr=new WeakSet;class $s{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.nextEffect=void 0,this.cleanup=void 0,this.scheduler=void 0,$e&&$e.active&&$e.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,yr.has(this)&&(yr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||(this.flags|=8,this.nextEffect=dn,dn=this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Oo(this),js(this);const t=ie,n=Ge;ie=this,Ge=!0;try{return this.fn()}finally{Us(this),ie=t,Ge=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)no(t);this.deps=this.depsTail=void 0,Oo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?yr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Pr(this)&&this.run()}get dirty(){return Pr(this)}}let zs=0,dn;function eo(){zs++}function to(){if(--zs>0)return;let e;for(;dn;){let t=dn;for(dn=void 0;t;){const n=t.nextEffect;if(t.nextEffect=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function js(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Us(e){let t,n=e.depsTail;for(let r=n;r;r=r.prevDep)r.version===-1?(r===n&&(n=r.prevDep),no(r),Ml(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0;e.deps=t,e.depsTail=n}function Pr(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&Xs(t.dep.computed)||t.dep.version!==t.version)return!0;return!!e._dirty}function Xs(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===bn))return;e.globalVersion=bn;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&!Pr(e)){e.flags&=-3;return}const n=ie,r=Ge;ie=e,Ge=!0;try{js(e);const o=e.fn(e._value);(t.version===0||xt(o,e._value))&&(e._value=o,t.version++)}catch(o){throw t.version++,o}finally{ie=n,Ge=r,Us(e),e.flags&=-3}}function no(e){const{dep:t,prevSub:n,nextSub:r}=e;if(n&&(n.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=n,e.nextSub=void 0),t.subs===e&&(t.subs=n),!t.subs&&t.computed){t.computed.flags&=-5;for(let o=t.computed.deps;o;o=o.nextDep)no(o)}}function Ml(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ge=!0;const Vs=[];function St(){Vs.push(Ge),Ge=!1}function kt(){const e=Vs.pop();Ge=e===void 0?!0:e}function Oo(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ie;ie=void 0;try{t()}finally{ie=n}}}let bn=0;class ro{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0}track(t){if(!ie||!Ge||ie===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ie)n=this.activeLink={dep:this,sub:ie,version:this.version,nextDep:void 0,prevDep:void 0,nextSub:void 0,prevSub:void 0,prevActiveLink:void 0},ie.deps?(n.prevDep=ie.depsTail,ie.depsTail.nextDep=n,ie.depsTail=n):ie.deps=ie.depsTail=n,ie.flags&4&&Ys(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ie.depsTail,n.nextDep=void 0,ie.depsTail.nextDep=n,ie.depsTail=n,ie.deps===n&&(ie.deps=r)}return n}trigger(t){this.version++,bn++,this.notify(t)}notify(t){eo();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()}finally{to()}}}function Ys(e){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)Ys(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}const Br=new WeakMap,Mt=Symbol(""),Fr=Symbol(""),wn=Symbol("");function Ae(e,t,n){if(Ge&&ie){let r=Br.get(e);r||Br.set(e,r=new Map);let o=r.get(n);o||r.set(n,o=new ro),o.track()}}function ht(e,t,n,r,o,s){const i=Br.get(e);if(!i){bn++;return}const l=a=>{a&&a.trigger()};if(eo(),t==="clear")i.forEach(l);else{const a=V(e),d=a&&Jr(n);if(a&&n==="length"){const u=Number(r);i.forEach((h,p)=>{(p==="length"||p===wn||!Et(p)&&p>=u)&&l(h)})}else switch(n!==void 0&&l(i.get(n)),d&&l(i.get(wn)),t){case"add":a?d&&l(i.get("length")):(l(i.get(Mt)),Vt(e)&&l(i.get(Fr)));break;case"delete":a||(l(i.get(Mt)),Vt(e)&&l(i.get(Fr)));break;case"set":Vt(e)&&l(i.get(Mt));break}}to()}function $t(e){const t=re(e);return t===e?t:(Ae(t,"iterate",wn),Ue(e)?t:t.map(Re))}function sr(e){return Ae(e=re(e),"iterate",wn),e}const Il={__proto__:null,[Symbol.iterator](){return xr(this,Symbol.iterator,Re)},concat(...e){return $t(this).concat(...e.map(t=>V(t)?$t(t):t))},entries(){return xr(this,"entries",e=>(e[1]=Re(e[1]),e))},every(e,t){return at(this,"every",e,t,void 0,arguments)},filter(e,t){return at(this,"filter",e,t,n=>n.map(Re),arguments)},find(e,t){return at(this,"find",e,t,Re,arguments)},findIndex(e,t){return at(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return at(this,"findLast",e,t,Re,arguments)},findLastIndex(e,t){return at(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return at(this,"forEach",e,t,void 0,arguments)},includes(...e){return Er(this,"includes",e)},indexOf(...e){return Er(this,"indexOf",e)},join(e){return $t(this).join(e)},lastIndexOf(...e){return Er(this,"lastIndexOf",e)},map(e,t){return at(this,"map",e,t,void 0,arguments)},pop(){return ln(this,"pop")},push(...e){return ln(this,"push",e)},reduce(e,...t){return No(this,"reduce",e,t)},reduceRight(e,...t){return No(this,"reduceRight",e,t)},shift(){return ln(this,"shift")},some(e,t){return at(this,"some",e,t,void 0,arguments)},splice(...e){return ln(this,"splice",e)},toReversed(){return $t(this).toReversed()},toSorted(e){return $t(this).toSorted(e)},toSpliced(...e){return $t(this).toSpliced(...e)},unshift(...e){return ln(this,"unshift",e)},values(){return xr(this,"values",Re)}};function xr(e,t,n){const r=sr(e),o=r[t]();return r!==e&&!Ue(e)&&(o._next=o.next,o.next=()=>{const s=o._next();return s.value&&(s.value=n(s.value)),s}),o}const Ll=Array.prototype;function at(e,t,n,r,o,s){const i=sr(e),l=i!==e&&!Ue(e),a=i[t];if(a!==Ll[t]){const h=a.apply(e,s);return l?Re(h):h}let d=n;i!==e&&(l?d=function(h,p){return n.call(this,Re(h),p,e)}:n.length>2&&(d=function(h,p){return n.call(this,h,p,e)}));const u=a.call(i,d,r);return l&&o?o(u):u}function No(e,t,n,r){const o=sr(e);let s=n;return o!==e&&(Ue(e)?n.length>3&&(s=function(i,l,a){return n.call(this,i,l,a,e)}):s=function(i,l,a){return n.call(this,i,Re(l),a,e)}),o[t](s,...r)}function Er(e,t,n){const r=re(e);Ae(r,"iterate",wn);const o=r[t](...n);return(o===-1||o===!1)&&lo(n[0])?(n[0]=re(n[0]),r[t](...n)):o}function ln(e,t,n=[]){St(),eo();const r=re(e)[t].apply(e,n);return to(),kt(),r}const Pl=Wr("__proto__,__v_isRef,__isVue"),Ks=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Et));function Bl(e){Et(e)||(e=String(e));const t=re(this);return Ae(t,"has",e),t.hasOwnProperty(e)}class Gs{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const o=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(o?s?Wl:Js:s?Zs:qs).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const i=V(t);if(!o){let a;if(i&&(a=Il[n]))return a;if(n==="hasOwnProperty")return Bl}const l=Reflect.get(t,n,xe(t)?t:r);return(Et(n)?Ks.has(n):Pl(n))||(o||Ae(t,"get",n),s)?l:xe(l)?i&&Jr(n)?l:l.value:ue(l)?o?ei(l):lr(l):l}}class Ws extends Gs{constructor(t=!1){super(!1,t)}set(t,n,r,o){let s=t[n];if(!this._isShallow){const a=Pt(s);if(!Ue(r)&&!Pt(r)&&(s=re(s),r=re(r)),!V(t)&&xe(s)&&!xe(r))return a?!1:(s.value=r,!0)}const i=V(t)&&Jr(n)?Number(n)<t.length:ne(t,n),l=Reflect.set(t,n,r,xe(t)?t:o);return t===re(o)&&(i?xt(r,s)&&ht(t,"set",n,r):ht(t,"add",n,r)),l}deleteProperty(t,n){const r=ne(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&r&&ht(t,"delete",n,void 0),o}has(t,n){const r=Reflect.has(t,n);return(!Et(n)||!Ks.has(n))&&Ae(t,"has",n),r}ownKeys(t){return Ae(t,"iterate",V(t)?"length":Mt),Reflect.ownKeys(t)}}class Fl extends Gs{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Dl=new Ws,Hl=new Fl,$l=new Ws(!0);const oo=e=>e,ir=e=>Reflect.getPrototypeOf(e);function Pn(e,t,n=!1,r=!1){e=e.__v_raw;const o=re(e),s=re(t);n||(xt(t,s)&&Ae(o,"get",t),Ae(o,"get",s));const{has:i}=ir(o),l=r?oo:n?ao:Re;if(i.call(o,t))return l(e.get(t));if(i.call(o,s))return l(e.get(s));e!==o&&e.get(t)}function Bn(e,t=!1){const n=this.__v_raw,r=re(n),o=re(e);return t||(xt(e,o)&&Ae(r,"has",e),Ae(r,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function Fn(e,t=!1){return e=e.__v_raw,!t&&Ae(re(e),"iterate",Mt),Reflect.get(e,"size",e)}function Co(e,t=!1){!t&&!Ue(e)&&!Pt(e)&&(e=re(e));const n=re(this);return ir(n).has.call(n,e)||(n.add(e),ht(n,"add",e,e)),this}function Mo(e,t,n=!1){!n&&!Ue(t)&&!Pt(t)&&(t=re(t));const r=re(this),{has:o,get:s}=ir(r);let i=o.call(r,e);i||(e=re(e),i=o.call(r,e));const l=s.call(r,e);return r.set(e,t),i?xt(t,l)&&ht(r,"set",e,t):ht(r,"add",e,t),this}function Io(e){const t=re(this),{has:n,get:r}=ir(t);let o=n.call(t,e);o||(e=re(e),o=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return o&&ht(t,"delete",e,void 0),s}function Lo(){const e=re(this),t=e.size!==0,n=e.clear();return t&&ht(e,"clear",void 0,void 0),n}function Dn(e,t){return function(r,o){const s=this,i=s.__v_raw,l=re(i),a=t?oo:e?ao:Re;return!e&&Ae(l,"iterate",Mt),i.forEach((d,u)=>r.call(o,a(d),a(u),s))}}function Hn(e,t,n){return function(...r){const o=this.__v_raw,s=re(o),i=Vt(s),l=e==="entries"||e===Symbol.iterator&&i,a=e==="keys"&&i,d=o[e](...r),u=n?oo:t?ao:Re;return!t&&Ae(s,"iterate",a?Fr:Mt),{next(){const{value:h,done:p}=d.next();return p?{value:h,done:p}:{value:l?[u(h[0]),u(h[1])]:u(h),done:p}},[Symbol.iterator](){return this}}}}function gt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function zl(){const e={get(s){return Pn(this,s)},get size(){return Fn(this)},has:Bn,add:Co,set:Mo,delete:Io,clear:Lo,forEach:Dn(!1,!1)},t={get(s){return Pn(this,s,!1,!0)},get size(){return Fn(this)},has:Bn,add(s){return Co.call(this,s,!0)},set(s,i){return Mo.call(this,s,i,!0)},delete:Io,clear:Lo,forEach:Dn(!1,!0)},n={get(s){return Pn(this,s,!0)},get size(){return Fn(this,!0)},has(s){return Bn.call(this,s,!0)},add:gt("add"),set:gt("set"),delete:gt("delete"),clear:gt("clear"),forEach:Dn(!0,!1)},r={get(s){return Pn(this,s,!0,!0)},get size(){return Fn(this,!0)},has(s){return Bn.call(this,s,!0)},add:gt("add"),set:gt("set"),delete:gt("delete"),clear:gt("clear"),forEach:Dn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Hn(s,!1,!1),n[s]=Hn(s,!0,!1),t[s]=Hn(s,!1,!0),r[s]=Hn(s,!0,!0)}),[e,n,t,r]}const[jl,Ul,Xl,Vl]=zl();function so(e,t){const n=t?e?Vl:Xl:e?Ul:jl;return(r,o,s)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(ne(n,o)&&o in r?n:r,o,s)}const Yl={get:so(!1,!1)},Kl={get:so(!1,!0)},Gl={get:so(!0,!1)};const qs=new WeakMap,Zs=new WeakMap,Js=new WeakMap,Wl=new WeakMap;function ql(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zl(e){return e.__v_skip||!Object.isExtensible(e)?0:ql(_l(e))}function lr(e){return Pt(e)?e:io(e,!1,Dl,Yl,qs)}function Qs(e){return io(e,!1,$l,Kl,Zs)}function ei(e){return io(e,!0,Hl,Gl,Js)}function io(e,t,n,r,o){if(!ue(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=o.get(e);if(s)return s;const i=Zl(e);if(i===0)return e;const l=new Proxy(e,i===2?r:n);return o.set(e,l),l}function Yt(e){return Pt(e)?Yt(e.__v_raw):!!(e&&e.__v_isReactive)}function Pt(e){return!!(e&&e.__v_isReadonly)}function Ue(e){return!!(e&&e.__v_isShallow)}function lo(e){return e?!!e.__v_raw:!1}function re(e){const t=e&&e.__v_raw;return t?re(t):e}function Jl(e){return!ne(e,"__v_skip")&&Object.isExtensible(e)&&Ps(e,"__v_skip",!0),e}const Re=e=>ue(e)?lr(e):e,ao=e=>ue(e)?ei(e):e;function xe(e){return e?e.__v_isRef===!0:!1}function co(e){return ti(e,!1)}function Ql(e){return ti(e,!0)}function ti(e,t){return xe(e)?e:new ea(e,t)}class ea{constructor(t,n){this.dep=new ro,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:re(t),this._value=n?t:Re(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||Ue(t)||Pt(t);t=r?t:re(t),xt(t,n)&&(this._rawValue=t,this._value=r?t:Re(t),this.dep.trigger())}}function ze(e){return xe(e)?e.value:e}const ta={get:(e,t,n)=>t==="__v_raw"?e:ze(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return xe(o)&&!xe(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function ni(e){return Yt(e)?e:new Proxy(e,ta)}class na{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new ro(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=bn-1,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){this.flags|=16,ie!==this&&this.dep.notify()}get value(){const t=this.dep.track();return Xs(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function ra(e,t,n=!1){let r,o;return K(e)?r=e:(r=e.get,o=e.set),new na(r,o,n)}const $n={},Yn=new WeakMap;let Nt;function oa(e,t=!1,n=Nt){if(n){let r=Yn.get(n);r||Yn.set(n,r=[]),r.push(e)}}function sa(e,t,n=le){const{immediate:r,deep:o,once:s,scheduler:i,augmentJob:l,call:a}=n,d=L=>o?L:Ue(L)||o===!1||o===0?_t(L,1):_t(L);let u,h,p,m,P=!1,I=!1;if(xe(e)?(h=()=>e.value,P=Ue(e)):Yt(e)?(h=()=>d(e),P=!0):V(e)?(I=!0,P=e.some(L=>Yt(L)||Ue(L)),h=()=>e.map(L=>{if(xe(L))return L.value;if(Yt(L))return d(L);if(K(L))return a?a(L,2):L()})):K(e)?t?h=a?()=>a(e,2):e:h=()=>{if(p){St();try{p()}finally{kt()}}const L=Nt;Nt=u;try{return a?a(e,3,[m]):e(m)}finally{Nt=L}}:h=rt,t&&o){const L=h,Z=o===!0?1/0:o;h=()=>_t(L(),Z)}const X=Cl(),$=()=>{u.stop(),X&&Zr(X.effects,u)};if(s)if(t){const L=t;t=(...Z)=>{L(...Z),$()}}else{const L=h;h=()=>{L(),$()}}let B=I?new Array(e.length).fill($n):$n;const H=L=>{if(!(!(u.flags&1)||!u.dirty&&!L))if(t){const Z=u.run();if(o||P||(I?Z.some((ae,se)=>xt(ae,B[se])):xt(Z,B))){p&&p();const ae=Nt;Nt=u;try{const se=[Z,B===$n?void 0:I&&B[0]===$n?[]:B,m];a?a(t,3,se):t(...se),B=Z}finally{Nt=ae}}}else u.run()};return l&&l(H),u=new $s(h),u.scheduler=i?()=>i(H,!1):H,m=L=>oa(L,!1,u),p=u.onStop=()=>{const L=Yn.get(u);if(L){if(a)a(L,4);else for(const Z of L)Z();Yn.delete(u)}},t?r?H(!0):B=u.run():i?i(H.bind(null,!0),!0):u.run(),$.pause=u.pause.bind(u),$.resume=u.resume.bind(u),$.stop=$,$}function _t(e,t=1/0,n){if(t<=0||!ue(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,xe(e))_t(e.value,t,n);else if(V(e))for(let r=0;r<e.length;r++)_t(e[r],t,n);else if(Cs(e)||Vt(e))e.forEach(r=>{_t(r,t,n)});else if(Ls(e)){for(const r in e)_t(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&_t(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Mn(e,t,n,r){try{return r?e(...r):e()}catch(o){ar(o,t,n)}}function st(e,t,n,r){if(K(e)){const o=Mn(e,t,n,r);return o&&Ms(o)&&o.catch(s=>{ar(s,t,n)}),o}if(V(e)){const o=[];for(let s=0;s<e.length;s++)o.push(st(e[s],t,n,r));return o}}function ar(e,t,n,r=!0){const o=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||le;if(t){let l=t.parent;const a=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](e,a,d)===!1)return}l=l.parent}if(s){St(),Mn(s,null,10,[e,a,d]),kt();return}}ia(e,n,o,r,i)}function ia(e,t,n,r=!0,o=!1){if(o)throw e;console.error(e)}let vn=!1,Dr=!1;const Ie=[];let Qe=0;const Kt=[];let bt=null,jt=0;const ri=Promise.resolve();let uo=null;function oi(e){const t=uo||ri;return e?t.then(this?e.bind(this):e):t}function la(e){let t=vn?Qe+1:0,n=Ie.length;for(;t<n;){const r=t+n>>>1,o=Ie[r],s=_n(o);s<e||s===e&&o.flags&2?t=r+1:n=r}return t}function fo(e){if(!(e.flags&1)){const t=_n(e),n=Ie[Ie.length-1];!n||!(e.flags&2)&&t>=_n(n)?Ie.push(e):Ie.splice(la(t),0,e),e.flags|=1,si()}}function si(){!vn&&!Dr&&(Dr=!0,uo=ri.then(li))}function aa(e){V(e)?Kt.push(...e):bt&&e.id===-1?bt.splice(jt+1,0,e):e.flags&1||(Kt.push(e),e.flags|=1),si()}function Po(e,t,n=vn?Qe+1:0){for(;n<Ie.length;n++){const r=Ie[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;Ie.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&=-2}}}function ii(e){if(Kt.length){const t=[...new Set(Kt)].sort((n,r)=>_n(n)-_n(r));if(Kt.length=0,bt){bt.push(...t);return}for(bt=t,jt=0;jt<bt.length;jt++){const n=bt[jt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}bt=null,jt=0}}const _n=e=>e.id==null?e.flags&2?-1:1/0:e.id;function li(e){Dr=!1,vn=!0;try{for(Qe=0;Qe<Ie.length;Qe++){const t=Ie[Qe];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Mn(t,t.i,t.i?15:14),t.flags&=-2)}}finally{for(;Qe<Ie.length;Qe++){const t=Ie[Qe];t&&(t.flags&=-2)}Qe=0,Ie.length=0,ii(),vn=!1,uo=null,(Ie.length||Kt.length)&&li()}}let Le=null,ai=null;function Kn(e){const t=Le;return Le=e,ai=e&&e.type.__scopeId||null,t}function ut(e,t=Le,n){if(!t||e._n)return e;const r=(...o)=>{r._d&&Xo(-1);const s=Kn(t);let i;try{i=e(...o)}finally{Kn(s),r._d&&Xo(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function Tt(e,t,n,r){const o=e.dirs,s=t&&t.dirs;for(let i=0;i<o.length;i++){const l=o[i];s&&(l.oldValue=s[i].value);let a=l.dir[r];a&&(St(),st(a,n,8,[e.el,l,e,t]),kt())}}const ca=Symbol("_vte"),ua=e=>e.__isTeleport;function ho(e,t){e.shapeFlag&6&&e.component?(e.transition=t,ho(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function ci(e,t){return K(e)?Se({name:e.name},t,{setup:e}):e}function ui(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Hr(e,t,n,r,o=!1){if(V(e)){e.forEach((P,I)=>Hr(P,t&&(V(t)?t[I]:t),n,r,o));return}if(Gt(r)&&!o)return;const s=r.shapeFlag&4?bo(r.component):r.el,i=o?null:s,{i:l,r:a}=e,d=t&&t.r,u=l.refs===le?l.refs={}:l.refs,h=l.setupState,p=re(h),m=h===le?()=>!1:P=>ne(p,P);if(d!=null&&d!==a&&(me(d)?(u[d]=null,m(d)&&(h[d]=null)):xe(d)&&(d.value=null)),K(a))Mn(a,l,12,[i,u]);else{const P=me(a),I=xe(a);if(P||I){const X=()=>{if(e.f){const $=P?m(a)?h[a]:u[a]:a.value;o?V($)&&Zr($,s):V($)?$.includes(s)||$.push(s):P?(u[a]=[s],m(a)&&(h[a]=u[a])):(a.value=[s],e.k&&(u[e.k]=a.value))}else P?(u[a]=i,m(a)&&(h[a]=i)):I&&(a.value=i,e.k&&(u[e.k]=i))};i?(X.id=-1,He(X,n)):X()}}}const Gt=e=>!!e.type.__asyncLoader,fi=e=>e.type.__isKeepAlive;function fa(e,t){di(e,"a",t)}function da(e,t){di(e,"da",t)}function di(e,t,n=Te){const r=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(cr(t,r,n),n){let o=n.parent;for(;o&&o.parent;)fi(o.parent.vnode)&&ha(r,t,n,o),o=o.parent}}function ha(e,t,n,r){const o=cr(t,e,r,!0);hi(()=>{Zr(r[t],o)},n)}function cr(e,t,n=Te,r=!1){if(n){const o=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...i)=>{St();const l=In(n),a=st(t,n,e,i);return l(),kt(),a});return r?o.unshift(s):o.push(s),s}}const pt=e=>(t,n=Te)=>{(!dr||e==="sp")&&cr(e,(...r)=>t(...r),n)},pa=pt("bm"),ga=pt("m"),ma=pt("bu"),ba=pt("u"),wa=pt("bum"),hi=pt("um"),va=pt("sp"),_a=pt("rtg"),ya=pt("rtc");function xa(e,t=Te){cr("ec",e,t)}const Ea="components";function Sa(e,t){return Ra(Ea,e,!0,t)||e}const ka=Symbol.for("v-ndc");function Ra(e,t,n=!0,r=!1){const o=Le||Te;if(o){const s=o.type;{const l=hc(s,!1);if(l&&(l===t||l===We(t)||l===or(We(t))))return s}const i=Bo(o[e]||s[e],t)||Bo(o.appContext[e],t);return!i&&r?s:i}}function Bo(e,t){return e&&(e[t]||e[We(t)]||e[or(We(t))])}function Ft(e,t,n,r){let o;const s=n,i=V(e);if(i||me(e)){const l=i&&Yt(e);let a=!1;l&&(a=!Ue(e),e=sr(e)),o=new Array(e.length);for(let d=0,u=e.length;d<u;d++)o[d]=t(a?Re(e[d]):e[d],d,void 0,s)}else if(typeof e=="number"){o=new Array(e);for(let l=0;l<e;l++)o[l]=t(l+1,l,void 0,s)}else if(ue(e))if(e[Symbol.iterator])o=Array.from(e,(l,a)=>t(l,a,void 0,s));else{const l=Object.keys(e);o=new Array(l.length);for(let a=0,d=l.length;a<d;a++){const u=l[a];o[a]=t(e[u],u,a,s)}}else o=[];return o}function Ta(e,t,n={},r,o){if(Le.ce||Le.parent&&Gt(Le.parent)&&Le.parent.ce)return he(),Vo(ge,null,[Q("slot",n,r)],64);let s=e[t];s&&s._c&&(s._d=!1),he();const i=s&&pi(s(n)),l=Vo(ge,{key:(n.key||i&&i.key||`_${t}`)+(!i&&r?"_fb":"")},i||[],i&&e._===1?64:-2);return s&&s._c&&(s._d=!0),l}function pi(e){return e.some(t=>Wn(t)?!(t.type===tn||t.type===ge&&!pi(t.children)):!0)?e:null}const $r=e=>e?Li(e)?bo(e):$r(e.parent):null,hn=Se(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>$r(e.parent),$root:e=>$r(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>po(e),$forceUpdate:e=>e.f||(e.f=()=>{fo(e.update)}),$nextTick:e=>e.n||(e.n=oi.bind(e.proxy)),$watch:e=>Ga.bind(e)}),Sr=(e,t)=>e!==le&&!e.__isScriptSetup&&ne(e,t),Aa={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:o,props:s,accessCache:i,type:l,appContext:a}=e;let d;if(t[0]!=="$"){const m=i[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return o[t];case 4:return n[t];case 3:return s[t]}else{if(Sr(r,t))return i[t]=1,r[t];if(o!==le&&ne(o,t))return i[t]=2,o[t];if((d=e.propsOptions[0])&&ne(d,t))return i[t]=3,s[t];if(n!==le&&ne(n,t))return i[t]=4,n[t];zr&&(i[t]=0)}}const u=hn[t];let h,p;if(u)return t==="$attrs"&&Ae(e.attrs,"get",""),u(e);if((h=l.__cssModules)&&(h=h[t]))return h;if(n!==le&&ne(n,t))return i[t]=4,n[t];if(p=a.config.globalProperties,ne(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:o,ctx:s}=e;return Sr(o,t)?(o[t]=n,!0):r!==le&&ne(r,t)?(r[t]=n,!0):ne(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,propsOptions:s}},i){let l;return!!n[i]||e!==le&&ne(e,i)||Sr(t,i)||(l=s[0])&&ne(l,i)||ne(r,i)||ne(hn,i)||ne(o.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ne(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Fo(e){return V(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let zr=!0;function Oa(e){const t=po(e),n=e.proxy,r=e.ctx;zr=!1,t.beforeCreate&&Do(t.beforeCreate,e,"bc");const{data:o,computed:s,methods:i,watch:l,provide:a,inject:d,created:u,beforeMount:h,mounted:p,beforeUpdate:m,updated:P,activated:I,deactivated:X,beforeDestroy:$,beforeUnmount:B,destroyed:H,unmounted:L,render:Z,renderTracked:ae,renderTriggered:se,errorCaptured:Oe,serverPrefetch:we,expose:Ne,inheritAttrs:Be,components:Xe,directives:Pe,filters:lt}=t;if(d&&Na(d,r,null),i)for(const w in i){const R=i[w];K(R)&&(r[w]=R.bind(n))}if(o){const w=o.call(n,n);ue(w)&&(e.data=lr(w))}if(zr=!0,s)for(const w in s){const R=s[w],j=K(R)?R.bind(n,n):K(R.get)?R.get.bind(n,n):rt,G=!K(R)&&K(R.set)?R.set.bind(n):rt,q=Ke({get:j,set:G});Object.defineProperty(r,w,{enumerable:!0,configurable:!0,get:()=>q.value,set:te=>q.value=te})}if(l)for(const w in l)gi(l[w],r,n,w);if(a){const w=K(a)?a.call(n):a;Reflect.ownKeys(w).forEach(R=>{jn(R,w[R])})}u&&Do(u,e,"c");function fe(w,R){V(R)?R.forEach(j=>w(j.bind(n))):R&&w(R.bind(n))}if(fe(pa,h),fe(ga,p),fe(ma,m),fe(ba,P),fe(fa,I),fe(da,X),fe(xa,Oe),fe(ya,ae),fe(_a,se),fe(wa,B),fe(hi,L),fe(va,we),V(Ne))if(Ne.length){const w=e.exposed||(e.exposed={});Ne.forEach(R=>{Object.defineProperty(w,R,{get:()=>n[R],set:j=>n[R]=j})})}else e.exposed||(e.exposed={});Z&&e.render===rt&&(e.render=Z),Be!=null&&(e.inheritAttrs=Be),Xe&&(e.components=Xe),Pe&&(e.directives=Pe),we&&ui(e)}function Na(e,t,n=rt){V(e)&&(e=jr(e));for(const r in e){const o=e[r];let s;ue(o)?"default"in o?s=ot(o.from||r,o.default,!0):s=ot(o.from||r):s=ot(o),xe(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:i=>s.value=i}):t[r]=s}}function Do(e,t,n){st(V(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function gi(e,t,n,r){let o=r.includes(".")?Oi(n,r):()=>n[r];if(me(e)){const s=t[e];K(s)&&qt(o,s)}else if(K(e))qt(o,e.bind(n));else if(ue(e))if(V(e))e.forEach(s=>gi(s,t,n,r));else{const s=K(e.handler)?e.handler.bind(n):t[e.handler];K(s)&&qt(o,s,e)}}function po(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:i}}=e.appContext,l=s.get(t);let a;return l?a=l:!o.length&&!n&&!r?a=t:(a={},o.length&&o.forEach(d=>Gn(a,d,i,!0)),Gn(a,t,i)),ue(t)&&s.set(t,a),a}function Gn(e,t,n,r=!1){const{mixins:o,extends:s}=t;s&&Gn(e,s,n,!0),o&&o.forEach(i=>Gn(e,i,n,!0));for(const i in t)if(!(r&&i==="expose")){const l=Ca[i]||n&&n[i];e[i]=l?l(e[i],t[i]):t[i]}return e}const Ca={data:Ho,props:$o,emits:$o,methods:un,computed:un,beforeCreate:Me,created:Me,beforeMount:Me,mounted:Me,beforeUpdate:Me,updated:Me,beforeDestroy:Me,beforeUnmount:Me,destroyed:Me,unmounted:Me,activated:Me,deactivated:Me,errorCaptured:Me,serverPrefetch:Me,components:un,directives:un,watch:Ia,provide:Ho,inject:Ma};function Ho(e,t){return t?e?function(){return Se(K(e)?e.call(this,this):e,K(t)?t.call(this,this):t)}:t:e}function Ma(e,t){return un(jr(e),jr(t))}function jr(e){if(V(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Me(e,t){return e?[...new Set([].concat(e,t))]:t}function un(e,t){return e?Se(Object.create(null),e,t):t}function $o(e,t){return e?V(e)&&V(t)?[...new Set([...e,...t])]:Se(Object.create(null),Fo(e),Fo(t??{})):t}function Ia(e,t){if(!e)return t;if(!t)return e;const n=Se(Object.create(null),e);for(const r in t)n[r]=Me(e[r],t[r]);return n}function mi(){return{app:null,config:{isNativeTag:wl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let La=0;function Pa(e,t){return function(r,o=null){K(r)||(r=Se({},r)),o!=null&&!ue(o)&&(o=null);const s=mi(),i=new WeakSet,l=[];let a=!1;const d=s.app={_uid:La++,_component:r,_props:o,_container:null,_context:s,_instance:null,version:gc,get config(){return s.config},set config(u){},use(u,...h){return i.has(u)||(u&&K(u.install)?(i.add(u),u.install(d,...h)):K(u)&&(i.add(u),u(d,...h))),d},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),d},component(u,h){return h?(s.components[u]=h,d):s.components[u]},directive(u,h){return h?(s.directives[u]=h,d):s.directives[u]},mount(u,h,p){if(!a){const m=d._ceVNode||Q(r,o);return m.appContext=s,p===!0?p="svg":p===!1&&(p=void 0),h&&t?t(m,u):e(m,u,p),a=!0,d._container=u,u.__vue_app__=d,bo(m.component)}},onUnmount(u){l.push(u)},unmount(){a&&(st(l,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(u,h){return s.provides[u]=h,d},runWithContext(u){const h=Wt;Wt=d;try{return u()}finally{Wt=h}}};return d}}let Wt=null;function jn(e,t){if(Te){let n=Te.provides;const r=Te.parent&&Te.parent.provides;r===n&&(n=Te.provides=Object.create(r)),n[e]=t}}function ot(e,t,n=!1){const r=Te||Le;if(r||Wt){const o=Wt?Wt._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&K(t)?t.call(r&&r.proxy):t}}const bi={},wi=()=>Object.create(bi),vi=e=>Object.getPrototypeOf(e)===bi;function Ba(e,t,n,r=!1){const o={},s=wi();e.propsDefaults=Object.create(null),_i(e,t,o,s);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);n?e.props=r?o:Qs(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function Fa(e,t,n,r){const{props:o,attrs:s,vnode:{patchFlag:i}}=e,l=re(o),[a]=e.propsOptions;let d=!1;if((r||i>0)&&!(i&16)){if(i&8){const u=e.vnode.dynamicProps;for(let h=0;h<u.length;h++){let p=u[h];if(ur(e.emitsOptions,p))continue;const m=t[p];if(a)if(ne(s,p))m!==s[p]&&(s[p]=m,d=!0);else{const P=We(p);o[P]=Ur(a,l,P,m,e,!1)}else m!==s[p]&&(s[p]=m,d=!0)}}}else{_i(e,t,o,s)&&(d=!0);let u;for(const h in l)(!t||!ne(t,h)&&((u=Bt(h))===h||!ne(t,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(o[h]=Ur(a,l,h,void 0,e,!0)):delete o[h]);if(s!==l)for(const h in s)(!t||!ne(t,h))&&(delete s[h],d=!0)}d&&ht(e.attrs,"set","")}function _i(e,t,n,r){const[o,s]=e.propsOptions;let i=!1,l;if(t)for(let a in t){if(fn(a))continue;const d=t[a];let u;o&&ne(o,u=We(a))?!s||!s.includes(u)?n[u]=d:(l||(l={}))[u]=d:ur(e.emitsOptions,a)||(!(a in r)||d!==r[a])&&(r[a]=d,i=!0)}if(s){const a=re(n),d=l||le;for(let u=0;u<s.length;u++){const h=s[u];n[h]=Ur(o,a,h,d[h],e,!ne(d,h))}}return i}function Ur(e,t,n,r,o,s){const i=e[n];if(i!=null){const l=ne(i,"default");if(l&&r===void 0){const a=i.default;if(i.type!==Function&&!i.skipFactory&&K(a)){const{propsDefaults:d}=o;if(n in d)r=d[n];else{const u=In(o);r=d[n]=a.call(null,t),u()}}else r=a;o.ce&&o.ce._setProp(n,r)}i[0]&&(s&&!l?r=!1:i[1]&&(r===""||r===Bt(n))&&(r=!0))}return r}const Da=new WeakMap;function yi(e,t,n=!1){const r=n?Da:t.propsCache,o=r.get(e);if(o)return o;const s=e.props,i={},l=[];let a=!1;if(!K(e)){const u=h=>{a=!0;const[p,m]=yi(h,t,!0);Se(i,p),m&&l.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!a)return ue(e)&&r.set(e,Xt),Xt;if(V(s))for(let u=0;u<s.length;u++){const h=We(s[u]);zo(h)&&(i[h]=le)}else if(s)for(const u in s){const h=We(u);if(zo(h)){const p=s[u],m=i[h]=V(p)||K(p)?{type:p}:Se({},p),P=m.type;let I=!1,X=!0;if(V(P))for(let $=0;$<P.length;++$){const B=P[$],H=K(B)&&B.name;if(H==="Boolean"){I=!0;break}else H==="String"&&(X=!1)}else I=K(P)&&P.name==="Boolean";m[0]=I,m[1]=X,(I||ne(m,"default"))&&l.push(h)}}const d=[i,l];return ue(e)&&r.set(e,d),d}function zo(e){return e[0]!=="$"&&!fn(e)}const xi=e=>e[0]==="_"||e==="$stable",go=e=>V(e)?e.map(nt):[nt(e)],Ha=(e,t,n)=>{if(t._n)return t;const r=ut((...o)=>go(t(...o)),n);return r._c=!1,r},Ei=(e,t,n)=>{const r=e._ctx;for(const o in e){if(xi(o))continue;const s=e[o];if(K(s))t[o]=Ha(o,s,r);else if(s!=null){const i=go(s);t[o]=()=>i}}},Si=(e,t)=>{const n=go(t);e.slots.default=()=>n},ki=(e,t,n)=>{for(const r in t)(n||r!=="_")&&(e[r]=t[r])},$a=(e,t,n)=>{const r=e.slots=wi();if(e.vnode.shapeFlag&32){const o=t._;o?(ki(r,t,n),n&&Ps(r,"_",o,!0)):Ei(t,r)}else t&&Si(e,t)},za=(e,t,n)=>{const{vnode:r,slots:o}=e;let s=!0,i=le;if(r.shapeFlag&32){const l=t._;l?n&&l===1?s=!1:ki(o,t,n):(s=!t.$stable,Ei(t,o)),i=t}else t&&(Si(e,t),i={default:1});if(s)for(const l in o)!xi(l)&&i[l]==null&&delete o[l]},He=tc;function ja(e){return Ua(e)}function Ua(e,t){const n=Bs();n.__VUE__=!0;const{insert:r,remove:o,patchProp:s,createElement:i,createText:l,createComment:a,setText:d,setElementText:u,parentNode:h,nextSibling:p,setScopeId:m=rt,insertStaticContent:P}=e,I=(c,f,g,x=null,v=null,S=null,_=void 0,A=null,k=!!f.dynamicChildren)=>{if(c===f)return;c&&!an(c,f)&&(x=y(c),te(c,v,S,!0),c=null),f.patchFlag===-2&&(k=!1,f.dynamicChildren=null);const{type:b,ref:z,shapeFlag:O}=f;switch(b){case fr:X(c,f,g,x);break;case tn:$(c,f,g,x);break;case Tr:c==null&&B(f,g,x,_);break;case ge:Xe(c,f,g,x,v,S,_,A,k);break;default:O&1?Z(c,f,g,x,v,S,_,A,k):O&6?Pe(c,f,g,x,v,S,_,A,k):(O&64||O&128)&&b.process(c,f,g,x,v,S,_,A,k,F)}z!=null&&v&&Hr(z,c&&c.ref,S,f||c,!f)},X=(c,f,g,x)=>{if(c==null)r(f.el=l(f.children),g,x);else{const v=f.el=c.el;f.children!==c.children&&d(v,f.children)}},$=(c,f,g,x)=>{c==null?r(f.el=a(f.children||""),g,x):f.el=c.el},B=(c,f,g,x)=>{[c.el,c.anchor]=P(c.children,f,g,x,c.el,c.anchor)},H=({el:c,anchor:f},g,x)=>{let v;for(;c&&c!==f;)v=p(c),r(c,g,x),c=v;r(f,g,x)},L=({el:c,anchor:f})=>{let g;for(;c&&c!==f;)g=p(c),o(c),c=g;o(f)},Z=(c,f,g,x,v,S,_,A,k)=>{f.type==="svg"?_="svg":f.type==="math"&&(_="mathml"),c==null?ae(f,g,x,v,S,_,A,k):we(c,f,v,S,_,A,k)},ae=(c,f,g,x,v,S,_,A)=>{let k,b;const{props:z,shapeFlag:O,transition:D,dirs:U}=c;if(k=c.el=i(c.type,S,z&&z.is,z),O&8?u(k,c.children):O&16&&Oe(c.children,k,null,x,v,kr(c,S),_,A),U&&Tt(c,null,x,"created"),se(k,c,c.scopeId,_,x),z){for(const T in z)T!=="value"&&!fn(T)&&s(k,T,null,z[T],S,x);"value"in z&&s(k,"value",null,z.value,S),(b=z.onVnodeBeforeMount)&&Je(b,x,c)}U&&Tt(c,null,x,"beforeMount");const E=Xa(v,D);E&&D.beforeEnter(k),r(k,f,g),((b=z&&z.onVnodeMounted)||E||U)&&He(()=>{b&&Je(b,x,c),E&&D.enter(k),U&&Tt(c,null,x,"mounted")},v)},se=(c,f,g,x,v)=>{if(g&&m(c,g),x)for(let S=0;S<x.length;S++)m(c,x[S]);if(v){let S=v.subTree;if(f===S||Ci(S.type)&&(S.ssContent===f||S.ssFallback===f)){const _=v.vnode;se(c,_,_.scopeId,_.slotScopeIds,v.parent)}}},Oe=(c,f,g,x,v,S,_,A,k=0)=>{for(let b=k;b<c.length;b++){const z=c[b]=A?wt(c[b]):nt(c[b]);I(null,z,f,g,x,v,S,_,A)}},we=(c,f,g,x,v,S,_)=>{const A=f.el=c.el;let{patchFlag:k,dynamicChildren:b,dirs:z}=f;k|=c.patchFlag&16;const O=c.props||le,D=f.props||le;let U;if(g&&At(g,!1),(U=D.onVnodeBeforeUpdate)&&Je(U,g,f,c),z&&Tt(f,c,g,"beforeUpdate"),g&&At(g,!0),(O.innerHTML&&D.innerHTML==null||O.textContent&&D.textContent==null)&&u(A,""),b?Ne(c.dynamicChildren,b,A,g,x,kr(f,v),S):_||R(c,f,A,null,g,x,kr(f,v),S,!1),k>0){if(k&16)Be(A,O,D,g,v);else if(k&2&&O.class!==D.class&&s(A,"class",null,D.class,v),k&4&&s(A,"style",O.style,D.style,v),k&8){const E=f.dynamicProps;for(let T=0;T<E.length;T++){const M=E[T],Y=O[M],J=D[M];(J!==Y||M==="value")&&s(A,M,Y,J,v,g)}}k&1&&c.children!==f.children&&u(A,f.children)}else!_&&b==null&&Be(A,O,D,g,v);((U=D.onVnodeUpdated)||z)&&He(()=>{U&&Je(U,g,f,c),z&&Tt(f,c,g,"updated")},x)},Ne=(c,f,g,x,v,S,_)=>{for(let A=0;A<f.length;A++){const k=c[A],b=f[A],z=k.el&&(k.type===ge||!an(k,b)||k.shapeFlag&70)?h(k.el):g;I(k,b,z,null,x,v,S,_,!0)}},Be=(c,f,g,x,v)=>{if(f!==g){if(f!==le)for(const S in f)!fn(S)&&!(S in g)&&s(c,S,f[S],null,v,x);for(const S in g){if(fn(S))continue;const _=g[S],A=f[S];_!==A&&S!=="value"&&s(c,S,A,_,v,x)}"value"in g&&s(c,"value",f.value,g.value,v)}},Xe=(c,f,g,x,v,S,_,A,k)=>{const b=f.el=c?c.el:l(""),z=f.anchor=c?c.anchor:l("");let{patchFlag:O,dynamicChildren:D,slotScopeIds:U}=f;U&&(A=A?A.concat(U):U),c==null?(r(b,g,x),r(z,g,x),Oe(f.children||[],g,z,v,S,_,A,k)):O>0&&O&64&&D&&c.dynamicChildren?(Ne(c.dynamicChildren,D,g,v,S,_,A),(f.key!=null||v&&f===v.subTree)&&Ri(c,f,!0)):R(c,f,g,z,v,S,_,A,k)},Pe=(c,f,g,x,v,S,_,A,k)=>{f.slotScopeIds=A,c==null?f.shapeFlag&512?v.ctx.activate(f,g,x,_,k):lt(f,g,x,v,S,_,k):Fe(c,f,k)},lt=(c,f,g,x,v,S,_)=>{const A=c.component=ac(c,x,v);if(fi(c)&&(A.ctx.renderer=F),cc(A,!1,_),A.asyncDep){if(v&&v.registerDep(A,fe,_),!c.el){const k=A.subTree=Q(tn);$(null,k,f,g)}}else fe(A,c,f,g,v,S,_)},Fe=(c,f,g)=>{const x=f.component=c.component;if(Qa(c,f,g))if(x.asyncDep&&!x.asyncResolved){w(x,f,g);return}else x.next=f,x.update();else f.el=c.el,x.vnode=f},fe=(c,f,g,x,v,S,_)=>{const A=()=>{if(c.isMounted){let{next:O,bu:D,u:U,parent:E,vnode:T}=c;{const Ce=Ti(c);if(Ce){O&&(O.el=T.el,w(c,O,_)),Ce.asyncDep.then(()=>{c.isUnmounted||A()});return}}let M=O,Y;At(c,!1),O?(O.el=T.el,w(c,O,_)):O=T,D&&vr(D),(Y=O.props&&O.props.onVnodeBeforeUpdate)&&Je(Y,E,O,T),At(c,!0);const J=Rr(c),pe=c.subTree;c.subTree=J,I(pe,J,h(pe.el),y(pe),c,v,S),O.el=J.el,M===null&&ec(c,J.el),U&&He(U,v),(Y=O.props&&O.props.onVnodeUpdated)&&He(()=>Je(Y,E,O,T),v)}else{let O;const{el:D,props:U}=f,{bm:E,m:T,parent:M,root:Y,type:J}=c,pe=Gt(f);if(At(c,!1),E&&vr(E),!pe&&(O=U&&U.onVnodeBeforeMount)&&Je(O,M,f),At(c,!0),D&&ce){const Ce=()=>{c.subTree=Rr(c),ce(D,c.subTree,c,v,null)};pe&&J.__asyncHydrate?J.__asyncHydrate(D,c,Ce):Ce()}else{Y.ce&&Y.ce._injectChildStyle(J);const Ce=c.subTree=Rr(c);I(null,Ce,g,x,c,v,S),f.el=Ce.el}if(T&&He(T,v),!pe&&(O=U&&U.onVnodeMounted)){const Ce=f;He(()=>Je(O,M,Ce),v)}(f.shapeFlag&256||M&&Gt(M.vnode)&&M.vnode.shapeFlag&256)&&c.a&&He(c.a,v),c.isMounted=!0,f=g=x=null}};c.scope.on();const k=c.effect=new $s(A);c.scope.off();const b=c.update=k.run.bind(k),z=c.job=k.runIfDirty.bind(k);z.i=c,z.id=c.uid,k.scheduler=()=>fo(z),At(c,!0),b()},w=(c,f,g)=>{f.component=c;const x=c.vnode.props;c.vnode=f,c.next=null,Fa(c,f.props,x,g),za(c,f.children,g),St(),Po(c),kt()},R=(c,f,g,x,v,S,_,A,k=!1)=>{const b=c&&c.children,z=c?c.shapeFlag:0,O=f.children,{patchFlag:D,shapeFlag:U}=f;if(D>0){if(D&128){G(b,O,g,x,v,S,_,A,k);return}else if(D&256){j(b,O,g,x,v,S,_,A,k);return}}U&8?(z&16&&de(b,v,S),O!==b&&u(g,O)):z&16?U&16?G(b,O,g,x,v,S,_,A,k):de(b,v,S,!0):(z&8&&u(g,""),U&16&&Oe(O,g,x,v,S,_,A,k))},j=(c,f,g,x,v,S,_,A,k)=>{c=c||Xt,f=f||Xt;const b=c.length,z=f.length,O=Math.min(b,z);let D;for(D=0;D<O;D++){const U=f[D]=k?wt(f[D]):nt(f[D]);I(c[D],U,g,null,v,S,_,A,k)}b>z?de(c,v,S,!0,!1,O):Oe(f,g,x,v,S,_,A,k,O)},G=(c,f,g,x,v,S,_,A,k)=>{let b=0;const z=f.length;let O=c.length-1,D=z-1;for(;b<=O&&b<=D;){const U=c[b],E=f[b]=k?wt(f[b]):nt(f[b]);if(an(U,E))I(U,E,g,null,v,S,_,A,k);else break;b++}for(;b<=O&&b<=D;){const U=c[O],E=f[D]=k?wt(f[D]):nt(f[D]);if(an(U,E))I(U,E,g,null,v,S,_,A,k);else break;O--,D--}if(b>O){if(b<=D){const U=D+1,E=U<z?f[U].el:x;for(;b<=D;)I(null,f[b]=k?wt(f[b]):nt(f[b]),g,E,v,S,_,A,k),b++}}else if(b>D)for(;b<=O;)te(c[b],v,S,!0),b++;else{const U=b,E=b,T=new Map;for(b=E;b<=D;b++){const De=f[b]=k?wt(f[b]):nt(f[b]);De.key!=null&&T.set(De.key,b)}let M,Y=0;const J=D-E+1;let pe=!1,Ce=0;const Rt=new Array(J);for(b=0;b<J;b++)Rt[b]=0;for(b=U;b<=O;b++){const De=c[b];if(Y>=J){te(De,v,S,!0);continue}let Ze;if(De.key!=null)Ze=T.get(De.key);else for(M=E;M<=D;M++)if(Rt[M-E]===0&&an(De,f[M])){Ze=M;break}Ze===void 0?te(De,v,S,!0):(Rt[Ze-E]=b+1,Ze>=Ce?Ce=Ze:pe=!0,I(De,f[Ze],g,null,v,S,_,A,k),Y++)}const ko=pe?Va(Rt):Xt;for(M=ko.length-1,b=J-1;b>=0;b--){const De=E+b,Ze=f[De],Ro=De+1<z?f[De+1].el:x;Rt[b]===0?I(null,Ze,g,Ro,v,S,_,A,k):pe&&(M<0||b!==ko[M]?q(Ze,g,Ro,2):M--)}}},q=(c,f,g,x,v=null)=>{const{el:S,type:_,transition:A,children:k,shapeFlag:b}=c;if(b&6){q(c.component.subTree,f,g,x);return}if(b&128){c.suspense.move(f,g,x);return}if(b&64){_.move(c,f,g,F);return}if(_===ge){r(S,f,g);for(let O=0;O<k.length;O++)q(k[O],f,g,x);r(c.anchor,f,g);return}if(_===Tr){H(c,f,g);return}if(x!==2&&b&1&&A)if(x===0)A.beforeEnter(S),r(S,f,g),He(()=>A.enter(S),v);else{const{leave:O,delayLeave:D,afterLeave:U}=A,E=()=>r(S,f,g),T=()=>{O(S,()=>{E(),U&&U()})};D?D(S,E,T):T()}else r(S,f,g)},te=(c,f,g,x=!1,v=!1)=>{const{type:S,props:_,ref:A,children:k,dynamicChildren:b,shapeFlag:z,patchFlag:O,dirs:D,cacheIndex:U}=c;if(O===-2&&(v=!1),A!=null&&Hr(A,null,g,c,!0),U!=null&&(f.renderCache[U]=void 0),z&256){f.ctx.deactivate(c);return}const E=z&1&&D,T=!Gt(c);let M;if(T&&(M=_&&_.onVnodeBeforeUnmount)&&Je(M,f,c),z&6)_e(c.component,g,x);else{if(z&128){c.suspense.unmount(g,x);return}E&&Tt(c,null,f,"beforeUnmount"),z&64?c.type.remove(c,f,g,F,x):b&&!b.hasOnce&&(S!==ge||O>0&&O&64)?de(b,f,g,!1,!0):(S===ge&&O&384||!v&&z&16)&&de(k,f,g),x&&ve(c)}(T&&(M=_&&_.onVnodeUnmounted)||E)&&He(()=>{M&&Je(M,f,c),E&&Tt(c,null,f,"unmounted")},g)},ve=c=>{const{type:f,el:g,anchor:x,transition:v}=c;if(f===ge){Ve(g,x);return}if(f===Tr){L(c);return}const S=()=>{o(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(c.shapeFlag&1&&v&&!v.persisted){const{leave:_,delayLeave:A}=v,k=()=>_(g,S);A?A(c.el,S,k):k()}else S()},Ve=(c,f)=>{let g;for(;c!==f;)g=p(c),o(c),c=g;o(f)},_e=(c,f,g)=>{const{bum:x,scope:v,job:S,subTree:_,um:A,m:k,a:b}=c;jo(k),jo(b),x&&vr(x),v.stop(),S&&(S.flags|=8,te(_,c,f,g)),A&&He(A,f),He(()=>{c.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},de=(c,f,g,x=!1,v=!1,S=0)=>{for(let _=S;_<c.length;_++)te(c[_],f,g,x,v)},y=c=>{if(c.shapeFlag&6)return y(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const f=p(c.anchor||c.el),g=f&&f[ca];return g?p(g):f};let C=!1;const N=(c,f,g)=>{c==null?f._vnode&&te(f._vnode,null,null,!0):I(f._vnode||null,c,f,null,null,null,g),f._vnode=c,C||(C=!0,Po(),ii(),C=!1)},F={p:I,um:te,m:q,r:ve,mt:lt,mc:Oe,pc:R,pbc:Ne,n:y,o:e};let ee,ce;return{render:N,hydrate:ee,createApp:Pa(N,ee)}}function kr({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function At({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Xa(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ri(e,t,n=!1){const r=e.children,o=t.children;if(V(r)&&V(o))for(let s=0;s<r.length;s++){const i=r[s];let l=o[s];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=o[s]=wt(o[s]),l.el=i.el),!n&&l.patchFlag!==-2&&Ri(i,l)),l.type===fr&&(l.el=i.el)}}function Va(e){const t=e.slice(),n=[0];let r,o,s,i,l;const a=e.length;for(r=0;r<a;r++){const d=e[r];if(d!==0){if(o=n[n.length-1],e[o]<d){t[r]=o,n.push(r);continue}for(s=0,i=n.length-1;s<i;)l=s+i>>1,e[n[l]]<d?s=l+1:i=l;d<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,i=n[s-1];s-- >0;)n[s]=i,i=t[i];return n}function Ti(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ti(t)}function jo(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Ya=Symbol.for("v-scx"),Ka=()=>ot(Ya);function qt(e,t,n){return Ai(e,t,n)}function Ai(e,t,n=le){const{immediate:r,deep:o,flush:s,once:i}=n,l=Se({},n);let a;if(dr)if(s==="sync"){const p=Ka();a=p.__watcherHandles||(p.__watcherHandles=[])}else if(!t||r)l.once=!0;else return{stop:rt,resume:rt,pause:rt};const d=Te;l.call=(p,m,P)=>st(p,d,m,P);let u=!1;s==="post"?l.scheduler=p=>{He(p,d&&d.suspense)}:s!=="sync"&&(u=!0,l.scheduler=(p,m)=>{m?p():fo(p)}),l.augmentJob=p=>{t&&(p.flags|=4),u&&(p.flags|=2,d&&(p.id=d.uid,p.i=d))};const h=sa(e,t,l);return a&&a.push(h),h}function Ga(e,t,n){const r=this.proxy,o=me(e)?e.includes(".")?Oi(r,e):()=>r[e]:e.bind(r,r);let s;K(t)?s=t:(s=t.handler,n=t);const i=In(this),l=Ai(o,s.bind(r),n);return i(),l}function Oi(e,t){const n=t.split(".");return()=>{let r=e;for(let o=0;o<n.length&&r;o++)r=r[n[o]];return r}}const Wa=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${We(t)}Modifiers`]||e[`${Bt(t)}Modifiers`];function qa(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||le;let o=n;const s=t.startsWith("update:"),i=s&&Wa(r,t.slice(7));i&&(i.trim&&(o=n.map(u=>me(u)?u.trim():u)),i.number&&(o=n.map(El)));let l,a=r[l=wr(t)]||r[l=wr(We(t))];!a&&s&&(a=r[l=wr(Bt(t))]),a&&st(a,e,6,o);const d=r[l+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,st(d,e,6,o)}}function Ni(e,t,n=!1){const r=t.emitsCache,o=r.get(e);if(o!==void 0)return o;const s=e.emits;let i={},l=!1;if(!K(e)){const a=d=>{const u=Ni(d,t,!0);u&&(l=!0,Se(i,u))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!s&&!l?(ue(e)&&r.set(e,null),null):(V(s)?s.forEach(a=>i[a]=null):Se(i,s),ue(e)&&r.set(e,i),i)}function ur(e,t){return!e||!tr(t)?!1:(t=t.slice(2).replace(/Once$/,""),ne(e,t[0].toLowerCase()+t.slice(1))||ne(e,Bt(t))||ne(e,t))}function Rr(e){const{type:t,vnode:n,proxy:r,withProxy:o,propsOptions:[s],slots:i,attrs:l,emit:a,render:d,renderCache:u,props:h,data:p,setupState:m,ctx:P,inheritAttrs:I}=e,X=Kn(e);let $,B;try{if(n.shapeFlag&4){const L=o||r,Z=L;$=nt(d.call(Z,L,u,h,m,p,P)),B=l}else{const L=t;$=nt(L.length>1?L(h,{attrs:l,slots:i,emit:a}):L(h,null)),B=t.props?l:Za(l)}}catch(L){pn.length=0,ar(L,e,1),$=Q(tn)}let H=$;if(B&&I!==!1){const L=Object.keys(B),{shapeFlag:Z}=H;L.length&&Z&7&&(s&&L.some(qr)&&(B=Ja(B,s)),H=nn(H,B,!1,!0))}return n.dirs&&(H=nn(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&ho(H,n.transition),$=H,Kn(X),$}const Za=e=>{let t;for(const n in e)(n==="class"||n==="style"||tr(n))&&((t||(t={}))[n]=e[n]);return t},Ja=(e,t)=>{const n={};for(const r in e)(!qr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Qa(e,t,n){const{props:r,children:o,component:s}=e,{props:i,children:l,patchFlag:a}=t,d=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?Uo(r,i,d):!!i;if(a&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const p=u[h];if(i[p]!==r[p]&&!ur(d,p))return!0}}}else return(o||l)&&(!l||!l.$stable)?!0:r===i?!1:r?i?Uo(r,i,d):!0:!!i;return!1}function Uo(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const s=r[o];if(t[s]!==e[s]&&!ur(n,s))return!0}return!1}function ec({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Ci=e=>e.__isSuspense;function tc(e,t){t&&t.pendingBranch?V(e)?t.effects.push(...e):t.effects.push(e):aa(e)}const ge=Symbol.for("v-fgt"),fr=Symbol.for("v-txt"),tn=Symbol.for("v-cmt"),Tr=Symbol.for("v-stc"),pn=[];let je=null;function he(e=!1){pn.push(je=e?null:[])}function nc(){pn.pop(),je=pn[pn.length-1]||null}let yn=1;function Xo(e){yn+=e,e<0&&je&&(je.hasOnce=!0)}function Mi(e){return e.dynamicChildren=yn>0?je||Xt:null,nc(),yn>0&&je&&je.push(e),e}function be(e,t,n,r,o,s){return Mi(Ee(e,t,n,r,o,s,!0))}function Vo(e,t,n,r,o){return Mi(Q(e,t,n,r,o,!0))}function Wn(e){return e?e.__v_isVNode===!0:!1}function an(e,t){return e.type===t.type&&e.key===t.key}const Ii=({key:e})=>e??null,Un=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?me(e)||xe(e)||K(e)?{i:Le,r:e,k:t,f:!!n}:e:null);function Ee(e,t=null,n=null,r=0,o=null,s=e===ge?0:1,i=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ii(t),ref:t&&Un(t),scopeId:ai,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Le};return l?(mo(a,n),s&128&&e.normalize(a)):n&&(a.shapeFlag|=me(n)?8:16),yn>0&&!i&&je&&(a.patchFlag>0||s&6)&&a.patchFlag!==32&&je.push(a),a}const Q=rc;function rc(e,t=null,n=null,r=0,o=null,s=!1){if((!e||e===ka)&&(e=tn),Wn(e)){const l=nn(e,t,!0);return n&&mo(l,n),yn>0&&!s&&je&&(l.shapeFlag&6?je[je.indexOf(e)]=l:je.push(l)),l.patchFlag=-2,l}if(pc(e)&&(e=e.__vccOpts),t){t=oc(t);let{class:l,style:a}=t;l&&!me(l)&&(t.class=Lt(l)),ue(a)&&(lo(a)&&!V(a)&&(a=Se({},a)),t.style=Qr(a))}const i=me(e)?1:Ci(e)?128:ua(e)?64:ue(e)?4:K(e)?2:0;return Ee(e,t,n,r,o,i,s,!0)}function oc(e){return e?lo(e)||vi(e)?Se({},e):e:null}function nn(e,t,n=!1,r=!1){const{props:o,ref:s,patchFlag:i,children:l,transition:a}=e,d=t?sc(o||{},t):o,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&Ii(d),ref:t&&t.ref?n&&s?V(s)?s.concat(Un(t)):[s,Un(t)]:Un(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ge?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&nn(e.ssContent),ssFallback:e.ssFallback&&nn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&r&&ho(u,a.clone(u)),u}function et(e=" ",t=0){return Q(fr,null,e,t)}function nt(e){return e==null||typeof e=="boolean"?Q(tn):V(e)?Q(ge,null,e.slice()):typeof e=="object"?wt(e):Q(fr,null,String(e))}function wt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:nn(e)}function mo(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(V(t))n=16;else if(typeof t=="object")if(r&65){const o=t.default;o&&(o._c&&(o._d=!1),mo(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!vi(t)?t._ctx=Le:o===3&&Le&&(Le.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else K(t)?(t={default:t,_ctx:Le},n=32):(t=String(t),r&64?(n=16,t=[et(t)]):n=8);e.children=t,e.shapeFlag|=n}function sc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const o in r)if(o==="class")t.class!==r.class&&(t.class=Lt([t.class,r.class]));else if(o==="style")t.style=Qr([t.style,r.style]);else if(tr(o)){const s=t[o],i=r[o];i&&s!==i&&!(V(s)&&s.includes(i))&&(t[o]=s?[].concat(s,i):i)}else o!==""&&(t[o]=r[o])}return t}function Je(e,t,n,r=null){st(e,t,7,[n,r])}const ic=mi();let lc=0;function ac(e,t,n){const r=e.type,o=(t?t.appContext:e.appContext)||ic,s={uid:lc++,vnode:e,type:r,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Nl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yi(r,o),emitsOptions:Ni(r,o),emit:null,emitted:null,propsDefaults:le,inheritAttrs:r.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=qa.bind(null,s),e.ce&&e.ce(s),s}let Te=null,qn,Xr;{const e=Bs(),t=(n,r)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(r),s=>{o.length>1?o.forEach(i=>i(s)):o[0](s)}};qn=t("__VUE_INSTANCE_SETTERS__",n=>Te=n),Xr=t("__VUE_SSR_SETTERS__",n=>dr=n)}const In=e=>{const t=Te;return qn(e),e.scope.on(),()=>{e.scope.off(),qn(t)}},Yo=()=>{Te&&Te.scope.off(),qn(null)};function Li(e){return e.vnode.shapeFlag&4}let dr=!1;function cc(e,t=!1,n=!1){t&&Xr(t);const{props:r,children:o}=e.vnode,s=Li(e);Ba(e,r,s,t),$a(e,o,n);const i=s?uc(e,t):void 0;return t&&Xr(!1),i}function uc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Aa);const{setup:r}=n;if(r){const o=e.setupContext=r.length>1?dc(e):null,s=In(e);St();const i=Mn(r,e,0,[e.props,o]);if(kt(),s(),Ms(i)){if(Gt(e)||ui(e),i.then(Yo,Yo),t)return i.then(l=>{Ko(e,l,t)}).catch(l=>{ar(l,e,0)});e.asyncDep=i}else Ko(e,i,t)}else Pi(e,t)}function Ko(e,t,n){K(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ue(t)&&(e.setupState=ni(t)),Pi(e,n)}let Go;function Pi(e,t,n){const r=e.type;if(!e.render){if(!t&&Go&&!r.render){const o=r.template||po(e).template;if(o){const{isCustomElement:s,compilerOptions:i}=e.appContext.config,{delimiters:l,compilerOptions:a}=r,d=Se(Se({isCustomElement:s,delimiters:l},i),a);r.render=Go(o,d)}}e.render=r.render||rt}{const o=In(e);St();try{Oa(e)}finally{kt(),o()}}}const fc={get(e,t){return Ae(e,"get",""),e[t]}};function dc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,fc),slots:e.slots,emit:e.emit,expose:t}}function bo(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ni(Jl(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in hn)return hn[n](e)},has(t,n){return n in t||n in hn}})):e.proxy}function hc(e,t=!0){return K(e)?e.displayName||e.name:e.name||t&&e.__name}function pc(e){return K(e)&&"__vccOpts"in e}const Ke=(e,t)=>ra(e,t,dr);function Bi(e,t,n){const r=arguments.length;return r===2?ue(t)&&!V(t)?Wn(t)?Q(e,null,[t]):Q(e,t):Q(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Wn(n)&&(n=[n]),Q(e,t,n))}const gc="3.5.4";/**
* @vue/runtime-dom v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Vr;const Wo=typeof window<"u"&&window.trustedTypes;if(Wo)try{Vr=Wo.createPolicy("vue",{createHTML:e=>e})}catch{}const Fi=Vr?e=>Vr.createHTML(e):e=>e,mc="http://www.w3.org/2000/svg",bc="http://www.w3.org/1998/Math/MathML",ft=typeof document<"u"?document:null,qo=ft&&ft.createElement("template"),wc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const o=t==="svg"?ft.createElementNS(mc,e):t==="mathml"?ft.createElementNS(bc,e):n?ft.createElement(e,{is:n}):ft.createElement(e);return e==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:e=>ft.createTextNode(e),createComment:e=>ft.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ft.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,o,s){const i=n?n.previousSibling:t.lastChild;if(o&&(o===s||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===s||!(o=o.nextSibling)););else{qo.innerHTML=Fi(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const l=qo.content;if(r==="svg"||r==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},vc=Symbol("_vtc");function _c(e,t,n){const r=e[vc];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Zo=Symbol("_vod"),yc=Symbol("_vsh"),xc=Symbol(""),Ec=/(^|;)\s*display\s*:/;function Sc(e,t,n){const r=e.style,o=me(n);let s=!1;if(n&&!o){if(t)if(me(t))for(const i of t.split(";")){const l=i.slice(0,i.indexOf(":")).trim();n[l]==null&&Xn(r,l,"")}else for(const i in t)n[i]==null&&Xn(r,i,"");for(const i in n)i==="display"&&(s=!0),Xn(r,i,n[i])}else if(o){if(t!==n){const i=r[xc];i&&(n+=";"+i),r.cssText=n,s=Ec.test(n)}}else t&&e.removeAttribute("style");Zo in e&&(e[Zo]=s?r.display:"",e[yc]&&(r.display="none"))}const Jo=/\s*!important$/;function Xn(e,t,n){if(V(n))n.forEach(r=>Xn(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=kc(e,t);Jo.test(n)?e.setProperty(Bt(r),n.replace(Jo,""),"important"):e[r]=n}}const Qo=["Webkit","Moz","ms"],Ar={};function kc(e,t){const n=Ar[t];if(n)return n;let r=We(t);if(r!=="filter"&&r in e)return Ar[t]=r;r=or(r);for(let o=0;o<Qo.length;o++){const s=Qo[o]+r;if(s in e)return Ar[t]=s}return t}const es="http://www.w3.org/1999/xlink";function ts(e,t,n,r,o,s=Ol(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(es,t.slice(6,t.length)):e.setAttributeNS(es,t,n):n==null||s&&!Fs(n)?e.removeAttribute(t):e.setAttribute(t,s?"":Et(n)?String(n):n)}function Rc(e,t,n,r){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Fi(n):n);return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const i=o==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(i!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let s=!1;if(n===""||n==null){const i=typeof e[t];i==="boolean"?n=Fs(n):n==null&&i==="string"?(n="",s=!0):i==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function Tc(e,t,n,r){e.addEventListener(t,n,r)}function Ac(e,t,n,r){e.removeEventListener(t,n,r)}const ns=Symbol("_vei");function Oc(e,t,n,r,o=null){const s=e[ns]||(e[ns]={}),i=s[t];if(r&&i)i.value=r;else{const[l,a]=Nc(t);if(r){const d=s[t]=Ic(r,o);Tc(e,l,d,a)}else i&&(Ac(e,l,i,a),s[t]=void 0)}}const rs=/(?:Once|Passive|Capture)$/;function Nc(e){let t;if(rs.test(e)){t={};let r;for(;r=e.match(rs);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Bt(e.slice(2)),t]}let Or=0;const Cc=Promise.resolve(),Mc=()=>Or||(Cc.then(()=>Or=0),Or=Date.now());function Ic(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;st(Lc(r,n.value),t,5,[r])};return n.value=e,n.attached=Mc(),n}function Lc(e,t){if(V(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>o=>!o._stopped&&r&&r(o))}else return t}const os=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Pc=(e,t,n,r,o,s)=>{const i=o==="svg";t==="class"?_c(e,r,i):t==="style"?Sc(e,n,r):tr(t)?qr(t)||Oc(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Bc(e,t,r,i))?(Rc(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ts(e,t,r,i,s,t!=="value")):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),ts(e,t,r,i))};function Bc(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&os(t)&&K(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return os(t)&&me(n)?!1:!!(t in e||e._isVueCE&&(/[A-Z]/.test(t)||!me(n)))}const Fc=Se({patchProp:Pc},wc);let ss;function Dc(){return ss||(ss=ja(Fc))}const Hc=(...e)=>{const t=Dc().createApp(...e),{mount:n}=t;return t.mount=r=>{const o=zc(r);if(!o)return;const s=t._component;!K(s)&&!s.render&&!s.template&&(s.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const i=n(o,!1,$c(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t};function $c(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function zc(e){return me(e)?document.querySelector(e):e}/*!
  * vue-router v4.4.4
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ut=typeof document<"u";function Di(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function jc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Di(e.default)}const oe=Object.assign;function Nr(e,t){const n={};for(const r in t){const o=t[r];n[r]=qe(o)?o.map(e):e(o)}return n}const gn=()=>{},qe=Array.isArray,Hi=/#/g,Uc=/&/g,Xc=/\//g,Vc=/=/g,Yc=/\?/g,$i=/\+/g,Kc=/%5B/g,Gc=/%5D/g,zi=/%5E/g,Wc=/%60/g,ji=/%7B/g,qc=/%7C/g,Ui=/%7D/g,Zc=/%20/g;function wo(e){return encodeURI(""+e).replace(qc,"|").replace(Kc,"[").replace(Gc,"]")}function Jc(e){return wo(e).replace(ji,"{").replace(Ui,"}").replace(zi,"^")}function Yr(e){return wo(e).replace($i,"%2B").replace(Zc,"+").replace(Hi,"%23").replace(Uc,"%26").replace(Wc,"`").replace(ji,"{").replace(Ui,"}").replace(zi,"^")}function Qc(e){return Yr(e).replace(Vc,"%3D")}function eu(e){return wo(e).replace(Hi,"%23").replace(Yc,"%3F")}function tu(e){return e==null?"":eu(e).replace(Xc,"%2F")}function xn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const nu=/\/$/,ru=e=>e.replace(nu,"");function Cr(e,t,n="/"){let r,o={},s="",i="";const l=t.indexOf("#");let a=t.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(r=t.slice(0,a),s=t.slice(a+1,l>-1?l:t.length),o=e(s)),l>-1&&(r=r||t.slice(0,l),i=t.slice(l,t.length)),r=lu(r??t,n),{fullPath:r+(s&&"?")+s+i,path:r,query:o,hash:xn(i)}}function ou(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function is(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function su(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&rn(t.matched[r],n.matched[o])&&Xi(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function rn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Xi(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!iu(e[n],t[n]))return!1;return!0}function iu(e,t){return qe(e)?ls(e,t):qe(t)?ls(t,e):e===t}function ls(e,t){return qe(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function lu(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let s=n.length-1,i,l;for(i=0;i<r.length;i++)if(l=r[i],l!==".")if(l==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i).join("/")}const mt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var En;(function(e){e.pop="pop",e.push="push"})(En||(En={}));var mn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(mn||(mn={}));function au(e){if(!e)if(Ut){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),ru(e)}const cu=/^[^#]+#/;function uu(e,t){return e.replace(cu,"#")+t}function fu(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const hr=()=>({left:window.scrollX,top:window.scrollY});function du(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=fu(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function as(e,t){return(history.state?history.state.position-t:-1)+e}const Kr=new Map;function hu(e,t){Kr.set(e,t)}function pu(e){const t=Kr.get(e);return Kr.delete(e),t}let gu=()=>location.protocol+"//"+location.host;function Vi(e,t){const{pathname:n,search:r,hash:o}=t,s=e.indexOf("#");if(s>-1){let l=o.includes(e.slice(s))?e.slice(s).length:1,a=o.slice(l);return a[0]!=="/"&&(a="/"+a),is(a,"")}return is(n,e)+r+o}function mu(e,t,n,r){let o=[],s=[],i=null;const l=({state:p})=>{const m=Vi(e,location),P=n.value,I=t.value;let X=0;if(p){if(n.value=m,t.value=p,i&&i===P){i=null;return}X=I?p.position-I.position:0}else r(m);o.forEach($=>{$(n.value,P,{delta:X,type:En.pop,direction:X?X>0?mn.forward:mn.back:mn.unknown})})};function a(){i=n.value}function d(p){o.push(p);const m=()=>{const P=o.indexOf(p);P>-1&&o.splice(P,1)};return s.push(m),m}function u(){const{history:p}=window;p.state&&p.replaceState(oe({},p.state,{scroll:hr()}),"")}function h(){for(const p of s)p();s=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:d,destroy:h}}function cs(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?hr():null}}function bu(e){const{history:t,location:n}=window,r={value:Vi(e,n)},o={value:t.state};o.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(a,d,u){const h=e.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?e:e.slice(h))+a:gu()+e+a;try{t[u?"replaceState":"pushState"](d,"",p),o.value=d}catch(m){console.error(m),n[u?"replace":"assign"](p)}}function i(a,d){const u=oe({},t.state,cs(o.value.back,a,o.value.forward,!0),d,{position:o.value.position});s(a,u,!0),r.value=a}function l(a,d){const u=oe({},o.value,t.state,{forward:a,scroll:hr()});s(u.current,u,!0);const h=oe({},cs(r.value,a,null),{position:u.position+1},d);s(a,h,!1),r.value=a}return{location:r,state:o,push:l,replace:i}}function wu(e){e=au(e);const t=bu(e),n=mu(e,t.state,t.location,t.replace);function r(s,i=!0){i||n.pauseListeners(),history.go(s)}const o=oe({location:"",base:e,go:r,createHref:uu.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function vu(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),wu(e)}function _u(e){return typeof e=="string"||e&&typeof e=="object"}function Yi(e){return typeof e=="string"||typeof e=="symbol"}const Ki=Symbol("");var us;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(us||(us={}));function on(e,t){return oe(new Error,{type:e,[Ki]:!0},t)}function ct(e,t){return e instanceof Error&&Ki in e&&(t==null||!!(e.type&t))}const fs="[^/]+?",yu={sensitive:!1,strict:!1,start:!0,end:!0},xu=/[.+*?^${}()[\]/\\]/g;function Eu(e,t){const n=oe({},yu,t),r=[];let o=n.start?"^":"";const s=[];for(const d of e){const u=d.length?[]:[90];n.strict&&!d.length&&(o+="/");for(let h=0;h<d.length;h++){const p=d[h];let m=40+(n.sensitive?.25:0);if(p.type===0)h||(o+="/"),o+=p.value.replace(xu,"\\$&"),m+=40;else if(p.type===1){const{value:P,repeatable:I,optional:X,regexp:$}=p;s.push({name:P,repeatable:I,optional:X});const B=$||fs;if(B!==fs){m+=10;try{new RegExp(`(${B})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${P}" (${B}): `+L.message)}}let H=I?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;h||(H=X&&d.length<2?`(?:/${H})`:"/"+H),X&&(H+="?"),o+=H,m+=20,X&&(m+=-8),I&&(m+=-20),B===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const d=r.length-1;r[d][r[d].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const i=new RegExp(o,n.sensitive?"":"i");function l(d){const u=d.match(i),h={};if(!u)return null;for(let p=1;p<u.length;p++){const m=u[p]||"",P=s[p-1];h[P.name]=m&&P.repeatable?m.split("/"):m}return h}function a(d){let u="",h=!1;for(const p of e){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const m of p)if(m.type===0)u+=m.value;else if(m.type===1){const{value:P,repeatable:I,optional:X}=m,$=P in d?d[P]:"";if(qe($)&&!I)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const B=qe($)?$.join("/"):$;if(!B)if(X)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${P}"`);u+=B}}return u||"/"}return{re:i,score:r,keys:s,parse:l,stringify:a}}function Su(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Gi(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const s=Su(r[n],o[n]);if(s)return s;n++}if(Math.abs(o.length-r.length)===1){if(ds(r))return 1;if(ds(o))return-1}return o.length-r.length}function ds(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const ku={type:0,value:""},Ru=/[a-zA-Z0-9_]/;function Tu(e){if(!e)return[[]];if(e==="/")return[[ku]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${d}": ${m}`)}let n=0,r=n;const o=[];let s;function i(){s&&o.push(s),s=[]}let l=0,a,d="",u="";function h(){d&&(n===0?s.push({type:0,value:d}):n===1||n===2||n===3?(s.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:d,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),d="")}function p(){d+=a}for(;l<e.length;){if(a=e[l++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(d&&h(),i()):a===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:a==="("?n=2:Ru.test(a)?p():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${d}"`),h(),i(),o}function Au(e,t,n){const r=Eu(Tu(e.path),n),o=oe(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function Ou(e,t){const n=[],r=new Map;t=gs({strict:!1,end:!0,sensitive:!1},t);function o(h){return r.get(h)}function s(h,p,m){const P=!m,I=Nu(h);I.aliasOf=m&&m.record;const X=gs(t,h),$=[I];if("alias"in h){const L=typeof h.alias=="string"?[h.alias]:h.alias;for(const Z of L)$.push(oe({},I,{components:m?m.record.components:I.components,path:Z,aliasOf:m?m.record:I}))}let B,H;for(const L of $){const{path:Z}=L;if(p&&Z[0]!=="/"){const ae=p.record.path,se=ae[ae.length-1]==="/"?"":"/";L.path=p.record.path+(Z&&se+Z)}if(B=Au(L,p,X),m?m.alias.push(B):(H=H||B,H!==B&&H.alias.push(B),P&&h.name&&!ps(B)&&i(h.name)),Wi(B)&&a(B),I.children){const ae=I.children;for(let se=0;se<ae.length;se++)s(ae[se],B,m&&m.children[se])}m=m||B}return H?()=>{i(H)}:gn}function i(h){if(Yi(h)){const p=r.get(h);p&&(r.delete(h),n.splice(n.indexOf(p),1),p.children.forEach(i),p.alias.forEach(i))}else{const p=n.indexOf(h);p>-1&&(n.splice(p,1),h.record.name&&r.delete(h.record.name),h.children.forEach(i),h.alias.forEach(i))}}function l(){return n}function a(h){const p=Iu(h,n);n.splice(p,0,h),h.record.name&&!ps(h)&&r.set(h.record.name,h)}function d(h,p){let m,P={},I,X;if("name"in h&&h.name){if(m=r.get(h.name),!m)throw on(1,{location:h});X=m.record.name,P=oe(hs(p.params,m.keys.filter(H=>!H.optional).concat(m.parent?m.parent.keys.filter(H=>H.optional):[]).map(H=>H.name)),h.params&&hs(h.params,m.keys.map(H=>H.name))),I=m.stringify(P)}else if(h.path!=null)I=h.path,m=n.find(H=>H.re.test(I)),m&&(P=m.parse(I),X=m.record.name);else{if(m=p.name?r.get(p.name):n.find(H=>H.re.test(p.path)),!m)throw on(1,{location:h,currentLocation:p});X=m.record.name,P=oe({},p.params,h.params),I=m.stringify(P)}const $=[];let B=m;for(;B;)$.unshift(B.record),B=B.parent;return{name:X,path:I,params:P,matched:$,meta:Mu($)}}e.forEach(h=>s(h));function u(){n.length=0,r.clear()}return{addRoute:s,resolve:d,removeRoute:i,clearRoutes:u,getRoutes:l,getRecordMatcher:o}}function hs(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Nu(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Cu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},mods:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Cu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function ps(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Mu(e){return e.reduce((t,n)=>oe(t,n.meta),{})}function gs(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Iu(e,t){let n=0,r=t.length;for(;n!==r;){const s=n+r>>1;Gi(e,t[s])<0?r=s:n=s+1}const o=Lu(e);return o&&(r=t.lastIndexOf(o,r-1)),r}function Lu(e){let t=e;for(;t=t.parent;)if(Wi(t)&&Gi(e,t)===0)return t}function Wi({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Pu(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const s=r[o].replace($i," "),i=s.indexOf("="),l=xn(i<0?s:s.slice(0,i)),a=i<0?null:xn(s.slice(i+1));if(l in t){let d=t[l];qe(d)||(d=t[l]=[d]),d.push(a)}else t[l]=a}return t}function ms(e){let t="";for(let n in e){const r=e[n];if(n=Qc(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(qe(r)?r.map(s=>s&&Yr(s)):[r&&Yr(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function Bu(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=qe(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const Fu=Symbol(""),bs=Symbol(""),vo=Symbol(""),_o=Symbol(""),Gr=Symbol("");function cn(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function vt(e,t,n,r,o,s=i=>i()){const i=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((l,a)=>{const d=p=>{p===!1?a(on(4,{from:n,to:t})):p instanceof Error?a(p):_u(p)?a(on(2,{from:t,to:p})):(i&&r.enterCallbacks[o]===i&&typeof p=="function"&&i.push(p),l())},u=s(()=>e.call(r&&r.instances[o],t,n,d));let h=Promise.resolve(u);e.length<3&&(h=h.then(d)),h.catch(p=>a(p))})}function Mr(e,t,n,r,o=s=>s()){const s=[];for(const i of e)for(const l in i.components){let a=i.components[l];if(!(t!=="beforeRouteEnter"&&!i.instances[l]))if(Di(a)){const u=(a.__vccOpts||a)[t];u&&s.push(vt(u,n,r,i,l,o))}else{let d=a();s.push(()=>d.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${l}" at "${i.path}"`);const h=jc(u)?u.default:u;i.mods[l]=u,i.components[l]=h;const m=(h.__vccOpts||h)[t];return m&&vt(m,n,r,i,l,o)()}))}}return s}function ws(e){const t=ot(vo),n=ot(_o),r=Ke(()=>{const a=ze(e.to);return t.resolve(a)}),o=Ke(()=>{const{matched:a}=r.value,{length:d}=a,u=a[d-1],h=n.matched;if(!u||!h.length)return-1;const p=h.findIndex(rn.bind(null,u));if(p>-1)return p;const m=vs(a[d-2]);return d>1&&vs(u)===m&&h[h.length-1].path!==m?h.findIndex(rn.bind(null,a[d-2])):p}),s=Ke(()=>o.value>-1&&$u(n.params,r.value.params)),i=Ke(()=>o.value>-1&&o.value===n.matched.length-1&&Xi(n.params,r.value.params));function l(a={}){return Hu(a)?t[ze(e.replace)?"replace":"push"](ze(e.to)).catch(gn):Promise.resolve()}return{route:r,href:Ke(()=>r.value.href),isActive:s,isExactActive:i,navigate:l}}const Du=ci({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ws,setup(e,{slots:t}){const n=lr(ws(e)),{options:r}=ot(vo),o=Ke(()=>({[_s(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[_s(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:Bi("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},s)}}}),qi=Du;function Hu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function $u(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!qe(o)||o.length!==r.length||r.some((s,i)=>s!==o[i]))return!1}return!0}function vs(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const _s=(e,t,n)=>e??t??n,zu=ci({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=ot(Gr),o=Ke(()=>e.route||r.value),s=ot(bs,0),i=Ke(()=>{let d=ze(s);const{matched:u}=o.value;let h;for(;(h=u[d])&&!h.components;)d++;return d}),l=Ke(()=>o.value.matched[i.value]);jn(bs,Ke(()=>i.value+1)),jn(Fu,l),jn(Gr,o);const a=co();return qt(()=>[a.value,l.value,e.name],([d,u,h],[p,m,P])=>{u&&(u.instances[h]=d,m&&m!==u&&d&&d===p&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),d&&u&&(!m||!rn(u,m)||!p)&&(u.enterCallbacks[h]||[]).forEach(I=>I(d))},{flush:"post"}),()=>{const d=o.value,u=e.name,h=l.value,p=h&&h.components[u];if(!p)return ys(n.default,{Component:p,route:d});const m=h.props[u],P=m?m===!0?d.params:typeof m=="function"?m(d):m:null,X=Bi(p,oe({},P,t,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(h.instances[u]=null)},ref:a}));return ys(n.default,{Component:X,route:d})||X}}});function ys(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Zi=zu;function ju(e){const t=Ou(e.routes,e),n=e.parseQuery||Pu,r=e.stringifyQuery||ms,o=e.history,s=cn(),i=cn(),l=cn(),a=Ql(mt);let d=mt;Ut&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Nr.bind(null,y=>""+y),h=Nr.bind(null,tu),p=Nr.bind(null,xn);function m(y,C){let N,F;return Yi(y)?(N=t.getRecordMatcher(y),F=C):F=y,t.addRoute(F,N)}function P(y){const C=t.getRecordMatcher(y);C&&t.removeRoute(C)}function I(){return t.getRoutes().map(y=>y.record)}function X(y){return!!t.getRecordMatcher(y)}function $(y,C){if(C=oe({},C||a.value),typeof y=="string"){const f=Cr(n,y,C.path),g=t.resolve({path:f.path},C),x=o.createHref(f.fullPath);return oe(f,g,{params:p(g.params),hash:xn(f.hash),redirectedFrom:void 0,href:x})}let N;if(y.path!=null)N=oe({},y,{path:Cr(n,y.path,C.path).path});else{const f=oe({},y.params);for(const g in f)f[g]==null&&delete f[g];N=oe({},y,{params:h(f)}),C.params=h(C.params)}const F=t.resolve(N,C),ee=y.hash||"";F.params=u(p(F.params));const ce=ou(r,oe({},y,{hash:Jc(ee),path:F.path})),c=o.createHref(ce);return oe({fullPath:ce,hash:ee,query:r===ms?Bu(y.query):y.query||{}},F,{redirectedFrom:void 0,href:c})}function B(y){return typeof y=="string"?Cr(n,y,a.value.path):oe({},y)}function H(y,C){if(d!==y)return on(8,{from:C,to:y})}function L(y){return se(y)}function Z(y){return L(oe(B(y),{replace:!0}))}function ae(y){const C=y.matched[y.matched.length-1];if(C&&C.redirect){const{redirect:N}=C;let F=typeof N=="function"?N(y):N;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=B(F):{path:F},F.params={}),oe({query:y.query,hash:y.hash,params:F.path!=null?{}:y.params},F)}}function se(y,C){const N=d=$(y),F=a.value,ee=y.state,ce=y.force,c=y.replace===!0,f=ae(N);if(f)return se(oe(B(f),{state:typeof f=="object"?oe({},ee,f.state):ee,force:ce,replace:c}),C||N);const g=N;g.redirectedFrom=C;let x;return!ce&&su(r,F,N)&&(x=on(16,{to:g,from:F}),q(F,F,!0,!1)),(x?Promise.resolve(x):Ne(g,F)).catch(v=>ct(v)?ct(v,2)?v:G(v):R(v,g,F)).then(v=>{if(v){if(ct(v,2))return se(oe({replace:c},B(v.to),{state:typeof v.to=="object"?oe({},ee,v.to.state):ee,force:ce}),C||g)}else v=Xe(g,F,!0,c,ee);return Be(g,F,v),v})}function Oe(y,C){const N=H(y,C);return N?Promise.reject(N):Promise.resolve()}function we(y){const C=Ve.values().next().value;return C&&typeof C.runWithContext=="function"?C.runWithContext(y):y()}function Ne(y,C){let N;const[F,ee,ce]=Uu(y,C);N=Mr(F.reverse(),"beforeRouteLeave",y,C);for(const f of F)f.leaveGuards.forEach(g=>{N.push(vt(g,y,C))});const c=Oe.bind(null,y,C);return N.push(c),de(N).then(()=>{N=[];for(const f of s.list())N.push(vt(f,y,C));return N.push(c),de(N)}).then(()=>{N=Mr(ee,"beforeRouteUpdate",y,C);for(const f of ee)f.updateGuards.forEach(g=>{N.push(vt(g,y,C))});return N.push(c),de(N)}).then(()=>{N=[];for(const f of ce)if(f.beforeEnter)if(qe(f.beforeEnter))for(const g of f.beforeEnter)N.push(vt(g,y,C));else N.push(vt(f.beforeEnter,y,C));return N.push(c),de(N)}).then(()=>(y.matched.forEach(f=>f.enterCallbacks={}),N=Mr(ce,"beforeRouteEnter",y,C,we),N.push(c),de(N))).then(()=>{N=[];for(const f of i.list())N.push(vt(f,y,C));return N.push(c),de(N)}).catch(f=>ct(f,8)?f:Promise.reject(f))}function Be(y,C,N){l.list().forEach(F=>we(()=>F(y,C,N)))}function Xe(y,C,N,F,ee){const ce=H(y,C);if(ce)return ce;const c=C===mt,f=Ut?history.state:{};N&&(F||c?o.replace(y.fullPath,oe({scroll:c&&f&&f.scroll},ee)):o.push(y.fullPath,ee)),a.value=y,q(y,C,N,c),G()}let Pe;function lt(){Pe||(Pe=o.listen((y,C,N)=>{if(!_e.listening)return;const F=$(y),ee=ae(F);if(ee){se(oe(ee,{replace:!0}),F).catch(gn);return}d=F;const ce=a.value;Ut&&hu(as(ce.fullPath,N.delta),hr()),Ne(F,ce).catch(c=>ct(c,12)?c:ct(c,2)?(se(c.to,F).then(f=>{ct(f,20)&&!N.delta&&N.type===En.pop&&o.go(-1,!1)}).catch(gn),Promise.reject()):(N.delta&&o.go(-N.delta,!1),R(c,F,ce))).then(c=>{c=c||Xe(F,ce,!1),c&&(N.delta&&!ct(c,8)?o.go(-N.delta,!1):N.type===En.pop&&ct(c,20)&&o.go(-1,!1)),Be(F,ce,c)}).catch(gn)}))}let Fe=cn(),fe=cn(),w;function R(y,C,N){G(y);const F=fe.list();return F.length?F.forEach(ee=>ee(y,C,N)):console.error(y),Promise.reject(y)}function j(){return w&&a.value!==mt?Promise.resolve():new Promise((y,C)=>{Fe.add([y,C])})}function G(y){return w||(w=!y,lt(),Fe.list().forEach(([C,N])=>y?N(y):C()),Fe.reset()),y}function q(y,C,N,F){const{scrollBehavior:ee}=e;if(!Ut||!ee)return Promise.resolve();const ce=!N&&pu(as(y.fullPath,0))||(F||!N)&&history.state&&history.state.scroll||null;return oi().then(()=>ee(y,C,ce)).then(c=>c&&du(c)).catch(c=>R(c,y,C))}const te=y=>o.go(y);let ve;const Ve=new Set,_e={currentRoute:a,listening:!0,addRoute:m,removeRoute:P,clearRoutes:t.clearRoutes,hasRoute:X,getRoutes:I,resolve:$,options:e,push:L,replace:Z,go:te,back:()=>te(-1),forward:()=>te(1),beforeEach:s.add,beforeResolve:i.add,afterEach:l.add,onError:fe.add,isReady:j,install(y){const C=this;y.component("RouterLink",qi),y.component("RouterView",Zi),y.config.globalProperties.$router=C,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>ze(a)}),Ut&&!ve&&a.value===mt&&(ve=!0,L(o.location).catch(ee=>{}));const N={};for(const ee in mt)Object.defineProperty(N,ee,{get:()=>a.value[ee],enumerable:!0});y.provide(vo,C),y.provide(_o,Qs(N)),y.provide(Gr,a);const F=y.unmount;Ve.add(y),y.unmount=function(){Ve.delete(y),Ve.size<1&&(d=mt,Pe&&Pe(),Pe=null,a.value=mt,ve=!1,w=!1),F()}}};function de(y){return y.reduce((C,N)=>C.then(()=>we(N)),Promise.resolve())}return _e}function Uu(e,t){const n=[],r=[],o=[],s=Math.max(t.matched.length,e.matched.length);for(let i=0;i<s;i++){const l=t.matched[i];l&&(e.matched.find(d=>rn(d,l))?r.push(l):n.push(l));const a=e.matched[i];a&&(t.matched.find(d=>rn(d,a))||o.push(a))}return[n,r,o]}function Ji(e){return ot(_o)}const Xu="/ea-effects/favicon.ico";function Vu(e,t){const n=document.createElement("link");n.href=t,n.rel="stylesheet",e.appendChild(n)}class it extends HTMLElement{constructor(){super(),this.isProduction=!1,this.isProduction=!0}toggleAttribute(t,n,r){n?(this.setAttribute(t,n),r&&this.dom.classList.add(r)):(this.hasAttribute(t)&&this.removeAttribute(t),r&&this.dom.classList.remove(r))}toggleAttr(t,n){n?this.setAttribute(t,n):this.removeAttribute(t)}getAttrBoolean(t){const n=this.getAttribute(t);return n==="true"||n===""}getAttrNumber(t){const n=this.getAttribute(t);return n?Number(n):0}build(t,n){if(this.isProduction){const r=document.createElement("style");r.innerHTML=n,this.shadowRoot.appendChild(r)}else Vu(t,new URL(this.nodeName.toLowerCase()+"/index.css",import.meta.url).href)}}var Ct,Rn,Jn,Qi;class Yu extends HTMLElement{constructor(){super();ye(this,Jn);ye(this,Ct);ye(this,Rn);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <link id="fontello-stylesheet" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easy-component-ui/components/ea-icon/css/fontello.css">
            <i class="ea-icon_wrap" part="container">
                <slot></slot>
            </i>
        `,ke(this,Ct,n.querySelector(".ea-icon_wrap")),ke(this,Rn,n.querySelector("#fontello-stylesheet")),document.addEventListener("configChanged",r=>{br(this,Jn,Qi).call(this,r.detail)})}get icon(){return this.getAttribute("icon")||""}set icon(n){this.setAttribute("icon",n),W(this,Ct).className=`${n}`}get color(){return this.getAttribute("color")||""}set color(n){this.setAttribute("color",n),W(this,Ct).style.color=n}get size(){return this.getAttribute("size")||""}set size(n){this.setAttribute("size",n),W(this,Ct).style.fontSize=`${n}px`}connectedCallback(){this.icon=this.icon,this.color=this.color,this.size=this.size,document.dispatchEvent(new CustomEvent("ea-icon-ready"))}}Ct=new WeakMap,Rn=new WeakMap,Jn=new WeakSet,Qi=function(n){W(this,Rn).href=n.fontelloCSS};window.customElements.get("ea-icon")||window.customElements.define("ea-icon",Yu);const Ku=`
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
`;var Ye;class Gu extends it{constructor(){super();ye(this,Ye);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <div class="ea-menu-item_wrap" part="container">
                <slot></slot>
            </div>
        `,ke(this,Ye,n.querySelector(".ea-menu-item_wrap")),this.build(n,Ku)}get actived(){return this.getAttrBoolean("actived")}set actived(n){this.setAttribute("actived",n),this.isSubItem?W(this,Ye).classList.toggle("is-sub-actived",n):W(this,Ye).classList.toggle("is-actived",n)}get isSubItem(){return this.getAttrBoolean("is-sub-item")}set isSubItem(n){n&&this.setAttribute("is-sub-item",n)}get backgroundColor(){return this.getAttribute("background-color")||"#fff"}set backgroundColor(n){this.setAttribute("background-color",n),W(this,Ye).style.setProperty("--normal-bgc",n)}get textColor(){return this.getAttribute("text-color")||"#303133"}set textColor(n){this.setAttribute("text-color",n),W(this,Ye).style.setProperty("--normal-text-color",n)}get activeTextColor(){return this.getAttribute("active-text-color")||"#409eff"}set activeTextColor(n){this.setAttribute("active-text-color",n),W(this,Ye).style.setProperty("--actived-text-color",n)}get disabled(){return this.getAttrBoolean("disabled")}set disabled(n){this.setAttribute("disabled",n),W(this,Ye).classList.toggle("is-disabled",n)}connectedCallback(){this.actived=this.actived,this.disabled=this.disabled,W(this,Ye).addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("item-selected",{detail:{index:this.index,title:this.textContent}}))})}}Ye=new WeakMap;customElements.get("ea-menu-item")||customElements.define("ea-menu-item",Gu);const Ln=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n},Wu=["actived"],qu={__name:"MyRoute",props:{to:String},setup(e){const t=Ji(),n={activeRoute:co(t.path)||""};return qt(t,r=>{n.activeRoute.value=r.path}),(r,o)=>(he(),be("ea-menu-item",{class:"rl-item",actived:n.activeRoute.value===e.to},[Q(ze(qi),{to:e.to,activeClass:"active"},{default:ut(()=>[Ta(r.$slots,"default",{},void 0,!0)]),_:3},8,["to"])],8,Wu))}},Ot=Ln(qu,[["__scopeId","data-v-62147355"]]),Zu={__name:"Router",setup(e){return(t,n)=>(he(),be(ge,null,[Q(Ot,{to:"/2DTransitions"},{default:ut(()=>n[0]||(n[0]=[et("Hover | 2D 过渡动画")])),_:1}),Q(Ot,{to:"/backgroundTransitions"},{default:ut(()=>n[1]||(n[1]=[et(" Hover | 背景（background）过渡动画 ")])),_:1}),Q(Ot,{to:"/borderTransitions"},{default:ut(()=>n[2]||(n[2]=[et("Hover | 边框（border）过渡动画")])),_:1}),Q(Ot,{to:"/shadowAndGlowTransitions"},{default:ut(()=>n[3]||(n[3]=[et(" Hover | 阴影（box-shadow）过渡动画 ")])),_:1}),Q(Ot,{to:"/speechBubbles"},{default:ut(()=>n[4]||(n[4]=[et("Hover | 气泡框过渡动画")])),_:1}),Q(Ot,{to:"/curls"},{default:ut(()=>n[5]||(n[5]=[et("Hover | 折角过渡动画")])),_:1}),Q(Ot,{to:"/attentionSeekers"},{default:ut(()=>n[6]||(n[6]=[et("Animate | 吸引眼球动画")])),_:1})],64))}},Ju=`
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
`;var Tn,Qn,el;class Qu extends it{constructor(){super();ye(this,Qn);ye(this,Tn);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <div class="ea-container_wrap" part="container">
                <slot></slot>
            </div>
        `,ke(this,Tn,n.querySelector(".ea-container_wrap")),this.build(n,Ju)}get CONTAINER_TYPE(){return["ea-header","ea-main","ea-footer","ea-container","ea-aside"]}get direction(){return["horizontal","vertical"].includes(this.getAttribute("direction"))||"horizontal"}set direction(n){this.setAttribute("direction",n),W(this,Tn).classList.toggle("is-vertical",n==="horizontal")}connectedCallback(){const n=Array.from(this.children);br(this,Qn,el).call(this,n)}}Tn=new WeakMap,Qn=new WeakSet,el=function(n){const r=n.map(o=>o.tagName.toLowerCase());n.forEach(o=>{this.CONTAINER_TYPE.includes(o.tagName.toLowerCase())||o.remove(),o.tagName.toLowerCase()==="ea-container"&&(o.style.flex="1")}),r.includes("ea-header")||r.includes("ea-footer")?this.direction="horizontal":this.direction=this.direction};customElements.get("ea-container")||customElements.define("ea-container",Qu);const ef=`
.ea-aside_wrap {
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
}
.ea-aside_wrap ::slotted(ea-main) {
  overflow: auto;
}
`;var An;class tf extends it{constructor(){super();ye(this,An);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <aside class="ea-aside_wrap" part="container">
                <slot></slot>
            </aside>
        `,ke(this,An,n.querySelector(".ea-aside_wrap")),this.build(n,ef)}get width(){return this.getAttrNumber("width")||200}set width(n){this.setAttribute("width",n),W(this,An).style.width=`${n}px`}connectedCallback(){this.width=this.width}}An=new WeakMap;customElements.get("ea-aside")||customElements.define("ea-aside",tf);const tl=(e,t=0)=>{let n=setTimeout(()=>{clearTimeout(n),n=null,e()},t)},Ir=e=>{e.actived=!1};function nf(e,t,n){e.forEach(Ir),t.forEach(Ir),n.forEach(Ir)}function rf(e,t,n){e.forEach((r,o)=>{r.itemIndex=o,r.addEventListener("item-selected",s=>{const i=s.detail.title;nf(e,t,n),r.actived=!0,this.dispatchEvent(new CustomEvent("select",{detail:{index:o,title:i}}))})})}const of=`
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
`;var tt,er,On;class lf extends it{constructor(){super();ye(this,tt);ye(this,er);ye(this,On);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <div class="ea-submenu_wrap" part="container">
                <div class="ea-submenu_title_wrap" part="title-wrap">
                    <slot name="title"></slot>
                    <ea-icon class="ea-submenu_dropdown_icon" icon="icon-angle-down" part="dropdown-icon"></ea-icon>
                </div>
                <div class="ea-submenu_items_wrap" part="dropdown-wrap">
                    <slot></slot>
                </div>
            </div>
        `,ke(this,tt,n.querySelector(".ea-submenu_wrap")),ke(this,er,n.querySelector(".ea-submenu_title_wrap")),ke(this,On,n.querySelector(".ea-submenu_items_wrap")),this.build(n,sf)}get actived(){return this.getAttrBoolean("actived")}set actived(n){this.setAttribute("actived",n),W(this,tt).classList.toggle("is-actived",n)}get backgroundColor(){return this.getAttribute("background-color")||"#fff"}set backgroundColor(n){this.setAttribute("background-color",n),W(this,tt).style.setProperty("--normal-bgc",n)}get textColor(){return this.getAttribute("text-color")||"#303133"}set textColor(n){this.setAttribute("text-color",n),W(this,tt).style.setProperty("--normal-text-color",n)}get activeTextColor(){return this.getAttribute("active-text-color")||"#409eff"}set activeTextColor(n){this.setAttribute("active-text-color",n),W(this,tt).style.setProperty("--actived-text-color",n)}get disabled(){return this.getAttrBoolean("disabled")}set disabled(n){this.setAttribute("disabled",n),W(this,tt).classList.toggle("is-disabled",n)}get mode(){return this.getAttribute("mode")||"horizontal"}set mode(n){this.setAttribute("mode",n),W(this,tt).classList.toggle("is-vertical",n==="vertical")}connectedCallback(){this.disabled=this.disabled,this.querySelectorAll("ea-menu-item").forEach((r,o)=>{r.isSubItem=!0,r.addEventListener("item-selected",s=>{this.actived=!0})}),tl(()=>{W(this,On).style.display="block"},20)}}tt=new WeakMap,er=new WeakMap,On=new WeakMap;customElements.get("ea-submenu")||customElements.define("ea-submenu",lf);const af=`
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
`;var dt,Nn,Zt;class cf extends it{constructor(){super();ye(this,dt);ye(this,Nn);ye(this,Zt);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <div class="ea-menu-item-group_wrap" part="container">
                <div class="ea-submenu_title_wrap" part="title-wrap">
                    <slot name="title"></slot>
                    <ea-icon class="ea-submenu_dropdown_icon" icon="icon-angle-down" part="dropdown-icon"></ea-icon>
                </div>
                <div class="ea-submenu_items_wrap" part="dropdown-wrap">
                    <slot></slot>
                </div>
            </div>
        `,ke(this,dt,n.querySelector(".ea-menu-item-group_wrap")),ke(this,Nn,n.querySelector(".ea-submenu_title_wrap")),ke(this,Zt,n.querySelector(".ea-submenu_items_wrap")),this.build(n,af)}get actived(){return this.getAttrBoolean("actived")}set actived(n){this.setAttribute("actived",n),W(this,dt).classList.toggle("is-actived",n)}get backgroundColor(){return this.getAttribute("background-color")||"#fff"}set backgroundColor(n){this.setAttribute("background-color",n),W(this,dt).style.setProperty("--normal-bgc",n)}get textColor(){return this.getAttribute("text-color")||"#303133"}set textColor(n){this.setAttribute("text-color",n),W(this,dt).style.setProperty("--normal-text-color",n)}get activeTextColor(){return this.getAttribute("active-text-color")||"#409eff"}set activeTextColor(n){this.setAttribute("active-text-color",n),W(this,dt).style.setProperty("--actived-text-color",n)}get collapse(){return this.getAttrBoolean("collapse")||!1}set collapse(n){this.setAttribute("collapse",n),W(this,Zt).style.height=n?W(this,Zt).scrollHeight+"px":"0",W(this,dt).classList.toggle("is-open",n)}connectedCallback(){this.style.width="100%",this.querySelectorAll("ea-menu-item").forEach(r=>{r.isSubItem=!0,r.addEventListener("item-selected",o=>{tl(()=>{this.actived=!0},20)})}),W(this,Nn).addEventListener("click",r=>{this.collapse=!this.collapse})}}dt=new WeakMap,Nn=new WeakMap,Zt=new WeakMap;customElements.get("ea-menu-item-group")||customElements.define("ea-menu-item-group",cf);var Jt;class uf extends it{constructor(){super();ye(this,Jt);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <div class="ea-menu_wrap" part="container">
                <slot></slot>
            </div>
        `,ke(this,Jt,n.querySelector(".ea-menu_wrap")),this.build(n,of)}get mode(){return this.getAttribute("mode")||"vertical"}set mode(n){this.setAttribute("mode",n),W(this,Jt).classList.toggle("is-vertical",n==="vertical"),this.querySelectorAll("ea-submenu").forEach(r=>{r.mode=n})}get backgroundColor(){return this.getAttribute("background-color")||"#fff"}set backgroundColor(n){this.setAttribute("background-color",n),W(this,Jt).style.backgroundColor=n}get textColor(){return this.getAttribute("text-color")||"#303133"}set textColor(n){this.setAttribute("text-color",n)}get activeTextColor(){return this.getAttribute("active-text-color")||"#409eff"}set activeTextColor(n){this.setAttribute("active-text-color",n)}get collapse(){return this.getAttrBoolean("collapse")}set collapse(n){this.toggleAttr("collapse",n),this.querySelectorAll("ea-menu-item-group").forEach(r=>{this.mode==="vertical"&&(r.collapse=!n)})}connectedCallback(){this.mode=this.mode,this.collapse=!0,this.backgroundColor=this.backgroundColor,this.textColor=this.textColor,this.activeTextColor=this.activeTextColor;const n=this.querySelectorAll("ea-menu-item"),r=this.querySelectorAll("ea-submenu"),o=this.querySelectorAll("ea-menu-item-group");rf.call(this,n,r,o);const s=(i,l)=>{i.backgroundColor=this.backgroundColor,i.textColor=this.textColor,i.activeTextColor=this.activeTextColor};n.forEach(s),r.forEach(s),o.forEach(s)}}Jt=new WeakMap;customElements.get("ea-menu")||customElements.define("ea-menu",uf);const ff={width:"200"},df={mode:"vertical"},hf={__name:"MyAside",setup(e){return(t,n)=>(he(),be("ea-aside",ff,[n[0]||(n[0]=Ee("ea-header",{class:"aside-header"},[Ee("div",{class:"logo"},[Ee("img",{src:Xu,alt:""})]),Ee("b",{class:"aside-title"},"ea-effects")],-1)),Ee("ea-menu",df,[Q(Zu)])]))}},pf=Ln(hf,[["__scopeId","data-v-56b791c4"]]),gf=`
.ea-header_wrap {
  box-sizing: border-box;
  padding: 0 20px;

  height: 60px;

  color: #333;

  overflow: hidden;
}
`;var Qt;class mf extends it{constructor(){super();ye(this,Qt);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <header class="ea-header_wrap" part="container">
                <slot></slot>
            </header>
        `,ke(this,Qt,n.querySelector(".ea-header_wrap")),this.build(n,gf)}get height(){return this.getAttrNumber("height")||60}set height(n){this.setAttribute("height",n),W(this,Qt).style.height=`${n}px`,W(this,Qt).style.lineHeight=`${n}px`}connectedCallback(){this.height=this.height}}Qt=new WeakMap;customElements.get("ea-header")||customElements.define("ea-header",mf);const bf=`
.ea-footer_wrap {
  box-sizing: border-box;
  padding: 0 20px;

  height: 60px;

  color: #333;

  overflow: hidden;
}
`;var en;class wf extends it{constructor(){super();ye(this,en);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <footer class="ea-footer_wrap" part="container">
                <slot></slot>
            </footer>
        `,ke(this,en,n.querySelector(".ea-footer_wrap")),this.build(n,bf)}get height(){return this.getAttrNumber("height")||60}set height(n){this.setAttribute("height",n),W(this,en).style.height=`${n}px`,W(this,en).style.lineHeight=`${n}px`}connectedCallback(){this.height=this.height}}en=new WeakMap;customElements.get("ea-footer")||customElements.define("ea-footer",wf);const vf=`
.ea-main_wrap {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 20px;
  overflow: auto;
  color: #333;
}
`;class _f extends it{constructor(){super();const t=this.attachShadow({mode:"open"});t.innerHTML=`
            <main class="ea-main_wrap" part="container">
                <slot></slot>
            </main>
        `,this.build(t,vf)}}customElements.get("ea-main")||customElements.define("ea-main",_f);const yf={__name:"App",setup(e){let t=co(!1);const n=Ji();return qt(n,()=>{t.value=!1}),(r,o)=>(he(),be("ea-container",{class:Lt(`container ${ze(t)?"open":""}`),direction:"vertical"},[Q(pf,{class:Lt("my-aside")}),Ee("ea-container",null,[Ee("ea-header",null,[Ee("ea-icon",{icon:"icon-th-list",class:"toggle-aside-btn",onClick:o[0]||(o[0]=s=>xe(t)?t.value=!ze(t):t=!ze(t))}),Ee("section",{class:"mask",onClick:o[1]||(o[1]=s=>xe(t)?t.value=!ze(t):t=!ze(t))})]),Ee("ea-main",null,[Q(ze(Zi))])])],2))}},xf=Ln(yf,[["__scopeId","data-v-d19ae1c7"]]);function Ef(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function nl(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(t=>{const n=e[t],r=typeof n;(r==="object"||r==="function")&&!Object.isFrozen(n)&&nl(n)}),e}class xs{constructor(t){t.data===void 0&&(t.data={}),this.data=t.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function rl(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function yt(e,...t){const n=Object.create(null);for(const r in e)n[r]=e[r];return t.forEach(function(r){for(const o in r)n[o]=r[o]}),n}const Sf="</span>",Es=e=>!!e.scope,kf=(e,{prefix:t})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const n=e.split(".");return[`${t}${n.shift()}`,...n.map((r,o)=>`${r}${"_".repeat(o+1)}`)].join(" ")}return`${t}${e}`};class Rf{constructor(t,n){this.buffer="",this.classPrefix=n.classPrefix,t.walk(this)}addText(t){this.buffer+=rl(t)}openNode(t){if(!Es(t))return;const n=kf(t.scope,{prefix:this.classPrefix});this.span(n)}closeNode(t){Es(t)&&(this.buffer+=Sf)}value(){return this.buffer}span(t){this.buffer+=`<span class="${t}">`}}const Ss=(e={})=>{const t={children:[]};return Object.assign(t,e),t};class yo{constructor(){this.rootNode=Ss(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(t){this.top.children.push(t)}openNode(t){const n=Ss({scope:t});this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(t){return this.constructor._walk(t,this.rootNode)}static _walk(t,n){return typeof n=="string"?t.addText(n):n.children&&(t.openNode(n),n.children.forEach(r=>this._walk(t,r)),t.closeNode(n)),t}static _collapse(t){typeof t!="string"&&t.children&&(t.children.every(n=>typeof n=="string")?t.children=[t.children.join("")]:t.children.forEach(n=>{yo._collapse(n)}))}}class Tf extends yo{constructor(t){super(),this.options=t}addText(t){t!==""&&this.add(t)}startScope(t){this.openNode(t)}endScope(){this.closeNode()}__addSublanguage(t,n){const r=t.root;n&&(r.scope=`language:${n}`),this.add(r)}toHTML(){return new Rf(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function Sn(e){return e?typeof e=="string"?e:e.source:null}function ol(e){return Dt("(?=",e,")")}function Af(e){return Dt("(?:",e,")*")}function Of(e){return Dt("(?:",e,")?")}function Dt(...e){return e.map(n=>Sn(n)).join("")}function Nf(e){const t=e[e.length-1];return typeof t=="object"&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}function xo(...e){return"("+(Nf(e).capture?"":"?:")+e.map(r=>Sn(r)).join("|")+")"}function sl(e){return new RegExp(e.toString()+"|").exec("").length-1}function Cf(e,t){const n=e&&e.exec(t);return n&&n.index===0}const Mf=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Eo(e,{joinWith:t}){let n=0;return e.map(r=>{n+=1;const o=n;let s=Sn(r),i="";for(;s.length>0;){const l=Mf.exec(s);if(!l){i+=s;break}i+=s.substring(0,l.index),s=s.substring(l.index+l[0].length),l[0][0]==="\\"&&l[1]?i+="\\"+String(Number(l[1])+o):(i+=l[0],l[0]==="("&&n++)}return i}).map(r=>`(${r})`).join(t)}const If=/\b\B/,il="[a-zA-Z]\\w*",So="[a-zA-Z_]\\w*",ll="\\b\\d+(\\.\\d+)?",al="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",cl="\\b(0b[01]+)",Lf="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Pf=(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=Dt(t,/.*\b/,e.binary,/\b.*/)),yt({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(n,r)=>{n.index!==0&&r.ignoreMatch()}},e)},kn={begin:"\\\\[\\s\\S]",relevance:0},Bf={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[kn]},Ff={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[kn]},Df={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},pr=function(e,t,n={}){const r=yt({scope:"comment",begin:e,end:t,contains:[]},n);r.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const o=xo("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return r.contains.push({begin:Dt(/[ ]+/,"(",o,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),r},Hf=pr("//","$"),$f=pr("/\\*","\\*/"),zf=pr("#","$"),jf={scope:"number",begin:ll,relevance:0},Uf={scope:"number",begin:al,relevance:0},Xf={scope:"number",begin:cl,relevance:0},Vf={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[kn,{begin:/\[/,end:/\]/,relevance:0,contains:[kn]}]},Yf={scope:"title",begin:il,relevance:0},Kf={scope:"title",begin:So,relevance:0},Gf={begin:"\\.\\s*"+So,relevance:0},Wf=function(e){return Object.assign(e,{"on:begin":(t,n)=>{n.data._beginMatch=t[1]},"on:end":(t,n)=>{n.data._beginMatch!==t[1]&&n.ignoreMatch()}})};var zn=Object.freeze({__proto__:null,APOS_STRING_MODE:Bf,BACKSLASH_ESCAPE:kn,BINARY_NUMBER_MODE:Xf,BINARY_NUMBER_RE:cl,COMMENT:pr,C_BLOCK_COMMENT_MODE:$f,C_LINE_COMMENT_MODE:Hf,C_NUMBER_MODE:Uf,C_NUMBER_RE:al,END_SAME_AS_BEGIN:Wf,HASH_COMMENT_MODE:zf,IDENT_RE:il,MATCH_NOTHING_RE:If,METHOD_GUARD:Gf,NUMBER_MODE:jf,NUMBER_RE:ll,PHRASAL_WORDS_MODE:Df,QUOTE_STRING_MODE:Ff,REGEXP_MODE:Vf,RE_STARTERS_RE:Lf,SHEBANG:Pf,TITLE_MODE:Yf,UNDERSCORE_IDENT_RE:So,UNDERSCORE_TITLE_MODE:Kf});function qf(e,t){e.input[e.index-1]==="."&&t.ignoreMatch()}function Zf(e,t){e.className!==void 0&&(e.scope=e.className,delete e.className)}function Jf(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=qf,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function Qf(e,t){Array.isArray(e.illegal)&&(e.illegal=xo(...e.illegal))}function ed(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function td(e,t){e.relevance===void 0&&(e.relevance=1)}const nd=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const n=Object.assign({},e);Object.keys(e).forEach(r=>{delete e[r]}),e.keywords=n.keywords,e.begin=Dt(n.beforeMatch,ol(n.begin)),e.starts={relevance:0,contains:[Object.assign(n,{endsParent:!0})]},e.relevance=0,delete n.beforeMatch},rd=["of","and","for","in","not","or","if","then","parent","list","value"],od="keyword";function ul(e,t,n=od){const r=Object.create(null);return typeof e=="string"?o(n,e.split(" ")):Array.isArray(e)?o(n,e):Object.keys(e).forEach(function(s){Object.assign(r,ul(e[s],t,s))}),r;function o(s,i){t&&(i=i.map(l=>l.toLowerCase())),i.forEach(function(l){const a=l.split("|");r[a[0]]=[s,sd(a[0],a[1])]})}}function sd(e,t){return t?Number(t):id(e)?0:1}function id(e){return rd.includes(e.toLowerCase())}const ks={},It=e=>{console.error(e)},Rs=(e,...t)=>{console.log(`WARN: ${e}`,...t)},zt=(e,t)=>{ks[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),ks[`${e}/${t}`]=!0)},Zn=new Error;function fl(e,t,{key:n}){let r=0;const o=e[n],s={},i={};for(let l=1;l<=t.length;l++)i[l+r]=o[l],s[l+r]=!0,r+=sl(t[l-1]);e[n]=i,e[n]._emit=s,e[n]._multi=!0}function ld(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw It("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Zn;if(typeof e.beginScope!="object"||e.beginScope===null)throw It("beginScope must be object"),Zn;fl(e,e.begin,{key:"beginScope"}),e.begin=Eo(e.begin,{joinWith:""})}}function ad(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw It("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Zn;if(typeof e.endScope!="object"||e.endScope===null)throw It("endScope must be object"),Zn;fl(e,e.end,{key:"endScope"}),e.end=Eo(e.end,{joinWith:""})}}function cd(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function ud(e){cd(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),ld(e),ad(e)}function fd(e){function t(i,l){return new RegExp(Sn(i),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(l?"g":""))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(l,a){a.position=this.position++,this.matchIndexes[this.matchAt]=a,this.regexes.push([a,l]),this.matchAt+=sl(l)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const l=this.regexes.map(a=>a[1]);this.matcherRe=t(Eo(l,{joinWith:"|"}),!0),this.lastIndex=0}exec(l){this.matcherRe.lastIndex=this.lastIndex;const a=this.matcherRe.exec(l);if(!a)return null;const d=a.findIndex((h,p)=>p>0&&h!==void 0),u=this.matchIndexes[d];return a.splice(0,d),Object.assign(a,u)}}class r{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(l){if(this.multiRegexes[l])return this.multiRegexes[l];const a=new n;return this.rules.slice(l).forEach(([d,u])=>a.addRule(d,u)),a.compile(),this.multiRegexes[l]=a,a}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(l,a){this.rules.push([l,a]),a.type==="begin"&&this.count++}exec(l){const a=this.getMatcher(this.regexIndex);a.lastIndex=this.lastIndex;let d=a.exec(l);if(this.resumingScanAtSamePosition()&&!(d&&d.index===this.lastIndex)){const u=this.getMatcher(0);u.lastIndex=this.lastIndex+1,d=u.exec(l)}return d&&(this.regexIndex+=d.position+1,this.regexIndex===this.count&&this.considerAll()),d}}function o(i){const l=new r;return i.contains.forEach(a=>l.addRule(a.begin,{rule:a,type:"begin"})),i.terminatorEnd&&l.addRule(i.terminatorEnd,{type:"end"}),i.illegal&&l.addRule(i.illegal,{type:"illegal"}),l}function s(i,l){const a=i;if(i.isCompiled)return a;[Zf,ed,ud,nd].forEach(u=>u(i,l)),e.compilerExtensions.forEach(u=>u(i,l)),i.__beforeBegin=null,[Jf,Qf,td].forEach(u=>u(i,l)),i.isCompiled=!0;let d=null;return typeof i.keywords=="object"&&i.keywords.$pattern&&(i.keywords=Object.assign({},i.keywords),d=i.keywords.$pattern,delete i.keywords.$pattern),d=d||/\w+/,i.keywords&&(i.keywords=ul(i.keywords,e.case_insensitive)),a.keywordPatternRe=t(d,!0),l&&(i.begin||(i.begin=/\B|\b/),a.beginRe=t(a.begin),!i.end&&!i.endsWithParent&&(i.end=/\B|\b/),i.end&&(a.endRe=t(a.end)),a.terminatorEnd=Sn(a.end)||"",i.endsWithParent&&l.terminatorEnd&&(a.terminatorEnd+=(i.end?"|":"")+l.terminatorEnd)),i.illegal&&(a.illegalRe=t(i.illegal)),i.contains||(i.contains=[]),i.contains=[].concat(...i.contains.map(function(u){return dd(u==="self"?i:u)})),i.contains.forEach(function(u){s(u,a)}),i.starts&&s(i.starts,l),a.matcher=o(a),a}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=yt(e.classNameAliases||{}),s(e)}function dl(e){return e?e.endsWithParent||dl(e.starts):!1}function dd(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return yt(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:dl(e)?yt(e,{starts:e.starts?yt(e.starts):null}):Object.isFrozen(e)?yt(e):e}var hd="11.10.0";class pd extends Error{constructor(t,n){super(t),this.name="HTMLInjectionError",this.html=n}}const Lr=rl,Ts=yt,As=Symbol("nomatch"),gd=7,hl=function(e){const t=Object.create(null),n=Object.create(null),r=[];let o=!0;const s="Could not find the language '{}', did you forget to load/include a language module?",i={disableAutodetect:!0,name:"Plain text",contains:[]};let l={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:Tf};function a(w){return l.noHighlightRe.test(w)}function d(w){let R=w.className+" ";R+=w.parentNode?w.parentNode.className:"";const j=l.languageDetectRe.exec(R);if(j){const G=we(j[1]);return G||(Rs(s.replace("{}",j[1])),Rs("Falling back to no-highlight mode for this block.",w)),G?j[1]:"no-highlight"}return R.split(/\s+/).find(G=>a(G)||we(G))}function u(w,R,j){let G="",q="";typeof R=="object"?(G=w,j=R.ignoreIllegals,q=R.language):(zt("10.7.0","highlight(lang, code, ...args) has been deprecated."),zt("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),q=w,G=R),j===void 0&&(j=!0);const te={code:G,language:q};Fe("before:highlight",te);const ve=te.result?te.result:h(te.language,te.code,j);return ve.code=te.code,Fe("after:highlight",ve),ve}function h(w,R,j,G){const q=Object.create(null);function te(E,T){return E.keywords[T]}function ve(){if(!_.keywords){k.addText(b);return}let E=0;_.keywordPatternRe.lastIndex=0;let T=_.keywordPatternRe.exec(b),M="";for(;T;){M+=b.substring(E,T.index);const Y=x.case_insensitive?T[0].toLowerCase():T[0],J=te(_,Y);if(J){const[pe,Ce]=J;if(k.addText(M),M="",q[Y]=(q[Y]||0)+1,q[Y]<=gd&&(z+=Ce),pe.startsWith("_"))M+=T[0];else{const Rt=x.classNameAliases[pe]||pe;de(T[0],Rt)}}else M+=T[0];E=_.keywordPatternRe.lastIndex,T=_.keywordPatternRe.exec(b)}M+=b.substring(E),k.addText(M)}function Ve(){if(b==="")return;let E=null;if(typeof _.subLanguage=="string"){if(!t[_.subLanguage]){k.addText(b);return}E=h(_.subLanguage,b,!0,A[_.subLanguage]),A[_.subLanguage]=E._top}else E=m(b,_.subLanguage.length?_.subLanguage:null);_.relevance>0&&(z+=E.relevance),k.__addSublanguage(E._emitter,E.language)}function _e(){_.subLanguage!=null?Ve():ve(),b=""}function de(E,T){E!==""&&(k.startScope(T),k.addText(E),k.endScope())}function y(E,T){let M=1;const Y=T.length-1;for(;M<=Y;){if(!E._emit[M]){M++;continue}const J=x.classNameAliases[E[M]]||E[M],pe=T[M];J?de(pe,J):(b=pe,ve(),b=""),M++}}function C(E,T){return E.scope&&typeof E.scope=="string"&&k.openNode(x.classNameAliases[E.scope]||E.scope),E.beginScope&&(E.beginScope._wrap?(de(b,x.classNameAliases[E.beginScope._wrap]||E.beginScope._wrap),b=""):E.beginScope._multi&&(y(E.beginScope,T),b="")),_=Object.create(E,{parent:{value:_}}),_}function N(E,T,M){let Y=Cf(E.endRe,M);if(Y){if(E["on:end"]){const J=new xs(E);E["on:end"](T,J),J.isMatchIgnored&&(Y=!1)}if(Y){for(;E.endsParent&&E.parent;)E=E.parent;return E}}if(E.endsWithParent)return N(E.parent,T,M)}function F(E){return _.matcher.regexIndex===0?(b+=E[0],1):(U=!0,0)}function ee(E){const T=E[0],M=E.rule,Y=new xs(M),J=[M.__beforeBegin,M["on:begin"]];for(const pe of J)if(pe&&(pe(E,Y),Y.isMatchIgnored))return F(T);return M.skip?b+=T:(M.excludeBegin&&(b+=T),_e(),!M.returnBegin&&!M.excludeBegin&&(b=T)),C(M,E),M.returnBegin?0:T.length}function ce(E){const T=E[0],M=R.substring(E.index),Y=N(_,E,M);if(!Y)return As;const J=_;_.endScope&&_.endScope._wrap?(_e(),de(T,_.endScope._wrap)):_.endScope&&_.endScope._multi?(_e(),y(_.endScope,E)):J.skip?b+=T:(J.returnEnd||J.excludeEnd||(b+=T),_e(),J.excludeEnd&&(b=T));do _.scope&&k.closeNode(),!_.skip&&!_.subLanguage&&(z+=_.relevance),_=_.parent;while(_!==Y.parent);return Y.starts&&C(Y.starts,E),J.returnEnd?0:T.length}function c(){const E=[];for(let T=_;T!==x;T=T.parent)T.scope&&E.unshift(T.scope);E.forEach(T=>k.openNode(T))}let f={};function g(E,T){const M=T&&T[0];if(b+=E,M==null)return _e(),0;if(f.type==="begin"&&T.type==="end"&&f.index===T.index&&M===""){if(b+=R.slice(T.index,T.index+1),!o){const Y=new Error(`0 width match regex (${w})`);throw Y.languageName=w,Y.badRule=f.rule,Y}return 1}if(f=T,T.type==="begin")return ee(T);if(T.type==="illegal"&&!j){const Y=new Error('Illegal lexeme "'+M+'" for mode "'+(_.scope||"<unnamed>")+'"');throw Y.mode=_,Y}else if(T.type==="end"){const Y=ce(T);if(Y!==As)return Y}if(T.type==="illegal"&&M==="")return 1;if(D>1e5&&D>T.index*3)throw new Error("potential infinite loop, way more iterations than matches");return b+=M,M.length}const x=we(w);if(!x)throw It(s.replace("{}",w)),new Error('Unknown language: "'+w+'"');const v=fd(x);let S="",_=G||v;const A={},k=new l.__emitter(l);c();let b="",z=0,O=0,D=0,U=!1;try{if(x.__emitTokens)x.__emitTokens(R,k);else{for(_.matcher.considerAll();;){D++,U?U=!1:_.matcher.considerAll(),_.matcher.lastIndex=O;const E=_.matcher.exec(R);if(!E)break;const T=R.substring(O,E.index),M=g(T,E);O=E.index+M}g(R.substring(O))}return k.finalize(),S=k.toHTML(),{language:w,value:S,relevance:z,illegal:!1,_emitter:k,_top:_}}catch(E){if(E.message&&E.message.includes("Illegal"))return{language:w,value:Lr(R),illegal:!0,relevance:0,_illegalBy:{message:E.message,index:O,context:R.slice(O-100,O+100),mode:E.mode,resultSoFar:S},_emitter:k};if(o)return{language:w,value:Lr(R),illegal:!1,relevance:0,errorRaised:E,_emitter:k,_top:_};throw E}}function p(w){const R={value:Lr(w),illegal:!1,relevance:0,_top:i,_emitter:new l.__emitter(l)};return R._emitter.addText(w),R}function m(w,R){R=R||l.languages||Object.keys(t);const j=p(w),G=R.filter(we).filter(Be).map(_e=>h(_e,w,!1));G.unshift(j);const q=G.sort((_e,de)=>{if(_e.relevance!==de.relevance)return de.relevance-_e.relevance;if(_e.language&&de.language){if(we(_e.language).supersetOf===de.language)return 1;if(we(de.language).supersetOf===_e.language)return-1}return 0}),[te,ve]=q,Ve=te;return Ve.secondBest=ve,Ve}function P(w,R,j){const G=R&&n[R]||j;w.classList.add("hljs"),w.classList.add(`language-${G}`)}function I(w){let R=null;const j=d(w);if(a(j))return;if(Fe("before:highlightElement",{el:w,language:j}),w.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",w);return}if(w.children.length>0&&(l.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(w)),l.throwUnescapedHTML))throw new pd("One of your code blocks includes unescaped HTML.",w.innerHTML);R=w;const G=R.textContent,q=j?u(G,{language:j,ignoreIllegals:!0}):m(G);w.innerHTML=q.value,w.dataset.highlighted="yes",P(w,j,q.language),w.result={language:q.language,re:q.relevance,relevance:q.relevance},q.secondBest&&(w.secondBest={language:q.secondBest.language,relevance:q.secondBest.relevance}),Fe("after:highlightElement",{el:w,result:q,text:G})}function X(w){l=Ts(l,w)}const $=()=>{L(),zt("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function B(){L(),zt("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let H=!1;function L(){if(document.readyState==="loading"){H=!0;return}document.querySelectorAll(l.cssSelector).forEach(I)}function Z(){H&&L()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",Z,!1);function ae(w,R){let j=null;try{j=R(e)}catch(G){if(It("Language definition for '{}' could not be registered.".replace("{}",w)),o)It(G);else throw G;j=i}j.name||(j.name=w),t[w]=j,j.rawDefinition=R.bind(null,e),j.aliases&&Ne(j.aliases,{languageName:w})}function se(w){delete t[w];for(const R of Object.keys(n))n[R]===w&&delete n[R]}function Oe(){return Object.keys(t)}function we(w){return w=(w||"").toLowerCase(),t[w]||t[n[w]]}function Ne(w,{languageName:R}){typeof w=="string"&&(w=[w]),w.forEach(j=>{n[j.toLowerCase()]=R})}function Be(w){const R=we(w);return R&&!R.disableAutodetect}function Xe(w){w["before:highlightBlock"]&&!w["before:highlightElement"]&&(w["before:highlightElement"]=R=>{w["before:highlightBlock"](Object.assign({block:R.el},R))}),w["after:highlightBlock"]&&!w["after:highlightElement"]&&(w["after:highlightElement"]=R=>{w["after:highlightBlock"](Object.assign({block:R.el},R))})}function Pe(w){Xe(w),r.push(w)}function lt(w){const R=r.indexOf(w);R!==-1&&r.splice(R,1)}function Fe(w,R){const j=w;r.forEach(function(G){G[j]&&G[j](R)})}function fe(w){return zt("10.7.0","highlightBlock will be removed entirely in v12.0"),zt("10.7.0","Please use highlightElement now."),I(w)}Object.assign(e,{highlight:u,highlightAuto:m,highlightAll:L,highlightElement:I,highlightBlock:fe,configure:X,initHighlighting:$,initHighlightingOnLoad:B,registerLanguage:ae,unregisterLanguage:se,listLanguages:Oe,getLanguage:we,registerAliases:Ne,autoDetection:Be,inherit:Ts,addPlugin:Pe,removePlugin:lt}),e.debugMode=function(){o=!1},e.safeMode=function(){o=!0},e.versionString=hd,e.regex={concat:Dt,lookahead:ol,either:xo,optional:Of,anyNumberOfTimes:Af};for(const w in zn)typeof zn[w]=="object"&&nl(zn[w]);return Object.assign(e,zn),e},sn=hl({});sn.newInstance=()=>hl({});var md=sn;sn.HighlightJS=sn;sn.default=sn;const gr=Ef(md),Os="[A-Za-z$_][0-9A-Za-z$_]*",bd=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],wd=["true","false","null","undefined","NaN","Infinity"],pl=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],gl=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],ml=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],vd=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],_d=[].concat(ml,pl,gl);function yd(e){const t=e.regex,n=(R,{after:j})=>{const G="</"+R[0].slice(1);return R.input.indexOf(G,j)!==-1},r=Os,o={begin:"<>",end:"</>"},s=/<[A-Za-z0-9\\._:-]+\s*\/>/,i={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(R,j)=>{const G=R[0].length+R.index,q=R.input[G];if(q==="<"||q===","){j.ignoreMatch();return}q===">"&&(n(R,{after:G})||j.ignoreMatch());let te;const ve=R.input.substring(G);if(te=ve.match(/^\s*=/)){j.ignoreMatch();return}if((te=ve.match(/^\s+extends\s+/))&&te.index===0){j.ignoreMatch();return}}},l={$pattern:Os,keyword:bd,literal:wd,built_in:_d,"variable.language":vd},a="[0-9](_?[0-9])*",d=`\\.(${a})`,u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",h={className:"number",variants:[{begin:`(\\b(${u})((${d})|\\.)?|(${d}))[eE][+-]?(${a})\\b`},{begin:`\\b(${u})\\b((${d})\\b|\\.)?|(${d})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},p={className:"subst",begin:"\\$\\{",end:"\\}",keywords:l,contains:[]},m={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,p],subLanguage:"xml"}},P={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,p],subLanguage:"css"}},I={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,p],subLanguage:"graphql"}},X={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,p]},B={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:r+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},H=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,m,P,I,X,{match:/\$\d+/},h];p.contains=H.concat({begin:/\{/,end:/\}/,keywords:l,contains:["self"].concat(H)});const L=[].concat(B,p.contains),Z=L.concat([{begin:/(\s*)\(/,end:/\)/,keywords:l,contains:["self"].concat(L)}]),ae={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:Z},se={variants:[{match:[/class/,/\s+/,r,/\s+/,/extends/,/\s+/,t.concat(r,"(",t.concat(/\./,r),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,r],scope:{1:"keyword",3:"title.class"}}]},Oe={relevance:0,match:t.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...pl,...gl]}},we={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},Ne={variants:[{match:[/function/,/\s+/,r,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[ae],illegal:/%/},Be={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function Xe(R){return t.concat("(?!",R.join("|"),")")}const Pe={match:t.concat(/\b/,Xe([...ml,"super","import"].map(R=>`${R}\\s*\\(`)),r,t.lookahead(/\s*\(/)),className:"title.function",relevance:0},lt={begin:t.concat(/\./,t.lookahead(t.concat(r,/(?![0-9A-Za-z$_(])/))),end:r,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},Fe={match:[/get|set/,/\s+/,r,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},ae]},fe="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",w={match:[/const|var|let/,/\s+/,r,/\s*/,/=\s*/,/(async\s*)?/,t.lookahead(fe)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[ae]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:l,exports:{PARAMS_CONTAINS:Z,CLASS_REFERENCE:Oe},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),we,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,m,P,I,X,B,{match:/\$\d+/},h,Oe,{className:"attr",begin:r+t.lookahead(":"),relevance:0},w,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[B,e.REGEXP_MODE,{className:"function",begin:fe,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:Z}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:o.begin,end:o.end},{match:s},{begin:i.begin,"on:begin":i.isTrulyOpeningTag,end:i.end}],subLanguage:"xml",contains:[{begin:i.begin,end:i.end,skip:!0,contains:["self"]}]}]},Ne,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[ae,e.inherit(e.TITLE_MODE,{begin:r,className:"title.function"})]},{match:/\.\.\./,relevance:0},lt,{match:"\\$"+r,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[ae]},Pe,Be,se,Fe,{match:/\$[(.]/}]}}const xd=e=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:e.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z_][A-Za-z0-9_-]*/}}),Ed=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","optgroup","option","p","picture","q","quote","samp","section","select","source","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],Sd=["defs","g","marker","mask","pattern","svg","switch","symbol","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feGaussianBlur","feImage","feMerge","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","linearGradient","radialGradient","stop","circle","ellipse","image","line","path","polygon","polyline","rect","text","use","textPath","tspan","foreignObject","clipPath"],kd=[...Ed,...Sd],Rd=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"].sort().reverse(),Td=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"].sort().reverse(),Ad=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"].sort().reverse(),Od=["accent-color","align-content","align-items","align-self","alignment-baseline","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","baseline-shift","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-end-end-radius","border-end-start-radius","border-right-color","border-right-style","border-right-width","border-spacing","border-start-end-radius","border-start-start-radius","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","cx","cy","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","color-scheme","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","empty-cells","enable-background","fill","fill-opacity","fill-rule","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","flood-color","flood-opacity","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-horizontal","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","inset","inset-block","inset-block-end","inset-block-start","inset-inline","inset-inline-end","inset-inline-start","isolation","kerning","justify-content","justify-items","justify-self","left","letter-spacing","lighting-color","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","marker","marker-end","marker-mid","marker-start","mask","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","r","resize","rest","rest-after","rest-before","right","rotate","row-gap","scale","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","shape-rendering","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","speak","speak-as","src","tab-size","table-layout","text-anchor","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip-ink","text-decoration-style","text-decoration-thickness","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-offset","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","translate","unicode-bidi","vector-effect","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","x","y","z-index"].sort().reverse();function Nd(e){const t=e.regex,n=xd(e),r={begin:/-(webkit|moz|ms|o)-(?=[a-z])/},o="and or not only",s=/@-?\w[\w]*(-\w+)*/,i="[a-zA-Z-][a-zA-Z0-9_-]*",l=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE];return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},classNameAliases:{keyframePosition:"selector-tag"},contains:[n.BLOCK_COMMENT,r,n.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{className:"selector-class",begin:"\\."+i,relevance:0},n.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{begin:":("+Td.join("|")+")"},{begin:":(:)?("+Ad.join("|")+")"}]},n.CSS_VARIABLE,{className:"attribute",begin:"\\b("+Od.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,contains:[n.BLOCK_COMMENT,n.HEXCOLOR,n.IMPORTANT,n.CSS_NUMBER_MODE,...l,{begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"},contains:[...l,{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]},n.FUNCTION_DISPATCH]},{begin:t.lookahead(/@/),end:"[{;]",relevance:0,illegal:/:/,contains:[{className:"keyword",begin:s},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:o,attribute:Rd.join(" ")},contains:[{begin:/[a-z-]+(?=:)/,className:"attribute"},...l,n.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"\\b("+kd.join("|")+")\\b"}]}}function Cd(e){return{name:"VBScript in HTML",subLanguage:"xml",contains:[{begin:"<%",end:"%>",subLanguage:"vbscript"}]}}gr.registerLanguage("javascript",yd);gr.registerLanguage("css",Nd);gr.registerLanguage("html",Cd);const Md={name:"CodeBlock",props:{code:{type:String,required:!0},type:{type:String,default:"css"}},mounted(){this.highlightCode()},methods:{highlightCode(){const e=this.$refs.codeBlock;gr.highlightElement(e)}}};function Id(e,t,n,r,o,s){return he(),be("pre",null,[t[0]||(t[0]=et("        ")),Ee("code",{ref:"codeBlock",class:Lt(`code language-${n.type}`)},`
            `+Vn(n.code)+`
        `,3),t[1]||(t[1]=et(`
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
`;var Cn;class Bd extends it{constructor(){super();ye(this,Cn);const n=this.attachShadow({mode:"open"});n.innerHTML=`
      <div class="ea-card_wrap" part="container">
        <div class="ea-card_header" part="header-wrap">
          <slot name="header"></slot>
        </div>
        <div class="ea-card_content" part="content-wrap">
          <slot></slot>
        </div>
      </div>
    `,ke(this,Cn,n.querySelector(".ea-card_wrap")),this.build(n,Pd)}get shadow(){return this.getAttribute("shadow")||"always"}set shadow(n){this.setAttribute("shadow",n),W(this,Cn).classList.add(`is-${n}-shadow`)}connectedCallback(){this.shadow=this.shadow}}Cn=new WeakMap;customElements.get("ea-card")||customElements.define("ea-card",Bd);const Fd={name:"SgCard",components:{CodeBlock:Ld},props:{title:{type:String,default:"Card"},code:{type:String,default:""},className:{type:String,default:""}}},Dd={class:"sg-card"},Hd={shadow:"hover"},$d={slot:"header",class:"header"};function zd(e,t,n,r,o,s){const i=Sa("CodeBlock");return he(),be("div",Dd,[Ee("ea-card",Hd,[Ee("div",$d,[Ee("span",null,Vn(n.title),1)]),Ee("span",{class:Lt(`box ${n.className}`)},Vn(n.title),3),Q(i,{code:n.code},null,8,["code"])])])}const Ht=Ln(Fd,[["render",zd]]),jd={class:"part"},Ud={__name:"index",setup(e){const t={};return Object.assign(t,{grow:{title:"放大",className:"grow",code:`
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
    `}}),(n,r)=>(he(),be("section",jd,[(he(),be(ge,null,Ft(t,(o,s)=>Q(Ht,{key:s,title:o.title,code:o.code,className:o.className},null,8,["title","code","className"])),64))]))}},Xd={class:"part"},Vd={__name:"index",setup(e){const t={};return Object.assign(t,{fill:{title:"填充",className:"fill",code:`
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
`}}),(n,r)=>(he(),be("section",Xd,[(he(),be(ge,null,Ft(t,(o,s)=>Q(Ht,{key:s,title:o.title,code:o.code,className:o.className},null,8,["title","code","className"])),64))]))}},Yd={class:"part"},Kd={__name:"index",setup(e){const t={};return Object.assign(t,{borderFade:{title:"填充",className:"borderFade",code:`
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
`}}),(n,r)=>(he(),be("section",Yd,[(he(),be(ge,null,Ft(t,(o,s)=>Q(Ht,{key:s,title:o.title,code:o.code,className:o.className},null,8,["title","code","className"])),64))]))}},Gd={class:"part"},Wd={__name:"index",setup(e){const t={};return Object.assign(t,{shadow:{title:"阴影",className:"shadow",code:`
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
`}}),(n,r)=>(he(),be("section",Gd,[(he(),be(ge,null,Ft(t,(o,s)=>Q(Ht,{key:s,title:o.title,code:o.code,className:o.className},null,8,["title","code","className"])),64))]))}},qd={class:"part"},Zd={__name:"index",setup(e){const t={};return Object.assign(t,{bubbleTop:{title:"气泡-上方",className:"bubbleTop",code:`
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
`}}),(n,r)=>(he(),be("section",qd,[(he(),be(ge,null,Ft(t,(o,s)=>Q(Ht,{key:s,title:o.title,code:o.code,className:o.className},null,8,["title","code","className"])),64))]))}},Jd={class:"part"},Qd={__name:"index",setup(e){const t={};return Object.assign(t,{curlTopLeft:{title:"折角-左上方",className:"curlTopLeft",code:`
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
`}}),(n,r)=>(he(),be("section",Jd,[(he(),be(ge,null,Ft(t,(o,s)=>Q(Ht,{key:s,title:o.title,code:o.code,className:o.className},null,8,["title","code","className"])),64))]))}},eh={class:"part"},th={__name:"index",setup(e){const t={};return Object.assign(t,{bounce:{title:"跳跃",className:"bounce",code:`
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
`}}),(n,r)=>(he(),be("section",eh,[(he(),be(ge,null,Ft(t,(o,s)=>Q(Ht,{key:s,title:o.title,code:o.code,className:o.className},null,8,["title","code","className"])),64))]))}},nh=[{path:"/",redirect:"/2DTransitions",meta:{title:"主页"}},{path:"/2DTransitions",component:Ud,meta:{title:"2D 过渡动画"}},{path:"/backgroundTransitions",component:Vd,meta:{title:"背景过渡动画"}},{path:"/borderTransitions",component:Kd,meta:{title:"边框过渡动画"}},{path:"/shadowAndGlowTransitions",component:Wd,meta:{title:"阴影过渡动画"}},{path:"/speechBubbles",component:Zd,meta:{title:"气泡框过渡动画"}},{path:"/curls",component:Qd,meta:{title:"折角过渡动画"}},{path:"/attentionSeekers",component:th,meta:{title:"吸引眼球动画"}}],bl=ju({history:vu(),routes:nh});bl.beforeEach((e,t,n)=>{document.title=`${e.meta.title} | Ea-effects.css`,e.hash||n()});const Ns={fontelloCSS:"https://cdn.jsdelivr.net/npm/easy-component-ui/components/ea-icon/css/fontello.css"};function rh(e){Object.assign(Ns,e),document.dispatchEvent(new CustomEvent("configChanged",{detail:Ns}))}window.addEventListener("DOMContentLoaded",()=>{rh({fontelloCSS:new URL("/ea-effects/ea-icon/css/fontello.css",import.meta.url).href})});Hc(xf).use(bl).mount("#app");
