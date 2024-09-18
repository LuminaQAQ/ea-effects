var kr=e=>{throw TypeError(e)};var mo=(e,t,n)=>t.has(e)||kr("Cannot "+n);var Y=(e,t,n)=>(mo(e,t,"read from private field"),n?n.call(e):t.get(e)),_e=(e,t,n)=>t.has(e)?kr("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),Re=(e,t,n,o)=>(mo(e,t,"write to private field"),o?o.call(e,n):t.set(e,n),n),wo=(e,t,n)=>(mo(e,t,"access private method"),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function qo(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const le={},Ut=[],nt=()=>{},wl=()=>!1,to=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Zo=e=>e.startsWith("onUpdate:"),Se=Object.assign,Jo=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},vl=Object.prototype.hasOwnProperty,te=(e,t)=>vl.call(e,t),K=Array.isArray,jt=e=>no(e)==="[object Map]",Ns=e=>no(e)==="[object Set]",W=e=>typeof e=="function",pe=e=>typeof e=="string",Et=e=>typeof e=="symbol",ue=e=>e!==null&&typeof e=="object",Ms=e=>(ue(e)||W(e))&&W(e.then)&&W(e.catch),Is=Object.prototype.toString,no=e=>Is.call(e),_l=e=>no(e).slice(8,-1),Ps=e=>no(e)==="[object Object]",Qo=e=>pe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,fn=qo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),oo=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},yl=/-(\w)/g,Ye=oo(e=>e.replace(yl,(t,n)=>n?n.toUpperCase():"")),xl=/\B([A-Z])/g,Bt=oo(e=>e.replace(xl,"-$1").toLowerCase()),ro=oo(e=>e.charAt(0).toUpperCase()+e.slice(1)),vo=oo(e=>e?`on${ro(e)}`:""),xt=(e,t)=>!Object.is(e,t),_o=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Bs=(e,t,n,o=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:o,value:n})},El=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ar;const Ls=()=>Ar||(Ar=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function er(e){if(K(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],r=pe(o)?kl(o):er(o);if(r)for(const s in r)t[s]=r[s]}return t}else if(pe(e)||ue(e))return e}const Sl=/;(?![^(]*\))/g,Rl=/:([^]+)/,Tl=/\/\*[^]*?\*\//g;function kl(e){const t={};return e.replace(Tl,"").split(Sl).forEach(n=>{if(n){const o=n.split(Rl);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function It(e){let t="";if(pe(e))t=e;else if(K(e))for(let n=0;n<e.length;n++){const o=It(e[n]);o&&(t+=o+" ")}else if(ue(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Al="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ol=qo(Al);function Fs(e){return!!e||e===""}const Ds=e=>!!(e&&e.__v_isRef===!0),Kn=e=>pe(e)?e:e==null?"":K(e)||ue(e)&&(e.toString===Is||!W(e.toString))?Ds(e)?Kn(e.value):JSON.stringify(e,Hs,2):String(e),Hs=(e,t)=>Ds(t)?Hs(e,t.value):jt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[o,r],s)=>(n[yo(o,s)+" =>"]=r,n),{})}:Ns(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>yo(n))}:Et(t)?yo(t):ue(t)&&!K(t)&&!Ps(t)?String(t):t,yo=(e,t="")=>{var n;return Et(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $e;class Cl{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=$e,!t&&$e&&(this.index=($e.scopes||($e.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=$e;try{return $e=this,t()}finally{$e=n}}}on(){$e=this}off(){$e=this.parent}stop(t){if(this._active){let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Nl(){return $e}let ie;const xo=new WeakSet;class $s{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.nextEffect=void 0,this.cleanup=void 0,this.scheduler=void 0,$e&&$e.active&&$e.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,xo.has(this)&&(xo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||(this.flags|=8,this.nextEffect=dn,dn=this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Or(this),Us(this);const t=ie,n=Xe;ie=this,Xe=!0;try{return this.fn()}finally{js(this),ie=t,Xe=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)or(t);this.deps=this.depsTail=void 0,Or(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?xo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Lo(this)&&this.run()}get dirty(){return Lo(this)}}let zs=0,dn;function tr(){zs++}function nr(){if(--zs>0)return;let e;for(;dn;){let t=dn;for(dn=void 0;t;){const n=t.nextEffect;if(t.nextEffect=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(o){e||(e=o)}t=n}}if(e)throw e}function Us(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function js(e){let t,n=e.depsTail;for(let o=n;o;o=o.prevDep)o.version===-1?(o===n&&(n=o.prevDep),or(o),Ml(o)):t=o,o.dep.activeLink=o.prevActiveLink,o.prevActiveLink=void 0;e.deps=t,e.depsTail=n}function Lo(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&Vs(t.dep.computed)||t.dep.version!==t.version)return!0;return!!e._dirty}function Vs(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===mn))return;e.globalVersion=mn;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&!Lo(e)){e.flags&=-3;return}const n=ie,o=Xe;ie=e,Xe=!0;try{Us(e);const r=e.fn(e._value);(t.version===0||xt(r,e._value))&&(e._value=r,t.version++)}catch(r){throw t.version++,r}finally{ie=n,Xe=o,js(e),e.flags&=-3}}function or(e){const{dep:t,prevSub:n,nextSub:o}=e;if(n&&(n.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=n,e.nextSub=void 0),t.subs===e&&(t.subs=n),!t.subs&&t.computed){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)or(r)}}function Ml(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Xe=!0;const Ks=[];function St(){Ks.push(Xe),Xe=!1}function Rt(){const e=Ks.pop();Xe=e===void 0?!0:e}function Or(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ie;ie=void 0;try{t()}finally{ie=n}}}let mn=0;class rr{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0}track(t){if(!ie||!Xe||ie===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ie)n=this.activeLink={dep:this,sub:ie,version:this.version,nextDep:void 0,prevDep:void 0,nextSub:void 0,prevSub:void 0,prevActiveLink:void 0},ie.deps?(n.prevDep=ie.depsTail,ie.depsTail.nextDep=n,ie.depsTail=n):ie.deps=ie.depsTail=n,ie.flags&4&&Gs(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const o=n.nextDep;o.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=o),n.prevDep=ie.depsTail,n.nextDep=void 0,ie.depsTail.nextDep=n,ie.depsTail=n,ie.deps===n&&(ie.deps=o)}return n}trigger(t){this.version++,mn++,this.notify(t)}notify(t){tr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()}finally{nr()}}}function Gs(e){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let o=t.deps;o;o=o.nextDep)Gs(o)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}const Fo=new WeakMap,Nt=Symbol(""),Do=Symbol(""),wn=Symbol("");function Ae(e,t,n){if(Xe&&ie){let o=Fo.get(e);o||Fo.set(e,o=new Map);let r=o.get(n);r||o.set(n,r=new rr),r.track()}}function dt(e,t,n,o,r,s){const i=Fo.get(e);if(!i){mn++;return}const l=a=>{a&&a.trigger()};if(tr(),t==="clear")i.forEach(l);else{const a=K(e),d=a&&Qo(n);if(a&&n==="length"){const u=Number(o);i.forEach((h,p)=>{(p==="length"||p===wn||!Et(p)&&p>=u)&&l(h)})}else switch(n!==void 0&&l(i.get(n)),d&&l(i.get(wn)),t){case"add":a?d&&l(i.get("length")):(l(i.get(Nt)),jt(e)&&l(i.get(Do)));break;case"delete":a||(l(i.get(Nt)),jt(e)&&l(i.get(Do)));break;case"set":jt(e)&&l(i.get(Nt));break}}nr()}function Ft(e){const t=oe(e);return t===e?t:(Ae(t,"iterate",wn),je(e)?t:t.map(Te))}function so(e){return Ae(e=oe(e),"iterate",wn),e}const Il={__proto__:null,[Symbol.iterator](){return Eo(this,Symbol.iterator,Te)},concat(...e){return Ft(this).concat(...e.map(t=>K(t)?Ft(t):t))},entries(){return Eo(this,"entries",e=>(e[1]=Te(e[1]),e))},every(e,t){return lt(this,"every",e,t,void 0,arguments)},filter(e,t){return lt(this,"filter",e,t,n=>n.map(Te),arguments)},find(e,t){return lt(this,"find",e,t,Te,arguments)},findIndex(e,t){return lt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return lt(this,"findLast",e,t,Te,arguments)},findLastIndex(e,t){return lt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return lt(this,"forEach",e,t,void 0,arguments)},includes(...e){return So(this,"includes",e)},indexOf(...e){return So(this,"indexOf",e)},join(e){return Ft(this).join(e)},lastIndexOf(...e){return So(this,"lastIndexOf",e)},map(e,t){return lt(this,"map",e,t,void 0,arguments)},pop(){return ln(this,"pop")},push(...e){return ln(this,"push",e)},reduce(e,...t){return Cr(this,"reduce",e,t)},reduceRight(e,...t){return Cr(this,"reduceRight",e,t)},shift(){return ln(this,"shift")},some(e,t){return lt(this,"some",e,t,void 0,arguments)},splice(...e){return ln(this,"splice",e)},toReversed(){return Ft(this).toReversed()},toSorted(e){return Ft(this).toSorted(e)},toSpliced(...e){return Ft(this).toSpliced(...e)},unshift(...e){return ln(this,"unshift",e)},values(){return Eo(this,"values",Te)}};function Eo(e,t,n){const o=so(e),r=o[t]();return o!==e&&!je(e)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=n(s.value)),s}),r}const Pl=Array.prototype;function lt(e,t,n,o,r,s){const i=so(e),l=i!==e&&!je(e),a=i[t];if(a!==Pl[t]){const h=a.apply(e,s);return l?Te(h):h}let d=n;i!==e&&(l?d=function(h,p){return n.call(this,Te(h),p,e)}:n.length>2&&(d=function(h,p){return n.call(this,h,p,e)}));const u=a.call(i,d,o);return l&&r?r(u):u}function Cr(e,t,n,o){const r=so(e);let s=n;return r!==e&&(je(e)?n.length>3&&(s=function(i,l,a){return n.call(this,i,l,a,e)}):s=function(i,l,a){return n.call(this,i,Te(l),a,e)}),r[t](s,...o)}function So(e,t,n){const o=oe(e);Ae(o,"iterate",wn);const r=o[t](...n);return(r===-1||r===!1)&&ar(n[0])?(n[0]=oe(n[0]),o[t](...n)):r}function ln(e,t,n=[]){St(),tr();const o=oe(e)[t].apply(e,n);return nr(),Rt(),o}const Bl=qo("__proto__,__v_isRef,__isVue"),Ws=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Et));function Ll(e){Et(e)||(e=String(e));const t=oe(this);return Ae(t,"has",e),t.hasOwnProperty(e)}class Xs{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,o){const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return o===(r?s?Yl:Js:s?Zs:qs).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(o)?t:void 0;const i=K(t);if(!r){let a;if(i&&(a=Il[n]))return a;if(n==="hasOwnProperty")return Ll}const l=Reflect.get(t,n,ye(t)?t:o);return(Et(n)?Ws.has(n):Bl(n))||(r||Ae(t,"get",n),s)?l:ye(l)?i&&Qo(n)?l:l.value:ue(l)?r?ei(l):lo(l):l}}class Ys extends Xs{constructor(t=!1){super(!1,t)}set(t,n,o,r){let s=t[n];if(!this._isShallow){const a=Pt(s);if(!je(o)&&!Pt(o)&&(s=oe(s),o=oe(o)),!K(t)&&ye(s)&&!ye(o))return a?!1:(s.value=o,!0)}const i=K(t)&&Qo(n)?Number(n)<t.length:te(t,n),l=Reflect.set(t,n,o,ye(t)?t:r);return t===oe(r)&&(i?xt(o,s)&&dt(t,"set",n,o):dt(t,"add",n,o)),l}deleteProperty(t,n){const o=te(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&o&&dt(t,"delete",n,void 0),r}has(t,n){const o=Reflect.has(t,n);return(!Et(n)||!Ws.has(n))&&Ae(t,"has",n),o}ownKeys(t){return Ae(t,"iterate",K(t)?"length":Nt),Reflect.ownKeys(t)}}class Fl extends Xs{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Dl=new Ys,Hl=new Fl,$l=new Ys(!0);const sr=e=>e,io=e=>Reflect.getPrototypeOf(e);function Bn(e,t,n=!1,o=!1){e=e.__v_raw;const r=oe(e),s=oe(t);n||(xt(t,s)&&Ae(r,"get",t),Ae(r,"get",s));const{has:i}=io(r),l=o?sr:n?cr:Te;if(i.call(r,t))return l(e.get(t));if(i.call(r,s))return l(e.get(s));e!==r&&e.get(t)}function Ln(e,t=!1){const n=this.__v_raw,o=oe(n),r=oe(e);return t||(xt(e,r)&&Ae(o,"has",e),Ae(o,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function Fn(e,t=!1){return e=e.__v_raw,!t&&Ae(oe(e),"iterate",Nt),Reflect.get(e,"size",e)}function Nr(e,t=!1){!t&&!je(e)&&!Pt(e)&&(e=oe(e));const n=oe(this);return io(n).has.call(n,e)||(n.add(e),dt(n,"add",e,e)),this}function Mr(e,t,n=!1){!n&&!je(t)&&!Pt(t)&&(t=oe(t));const o=oe(this),{has:r,get:s}=io(o);let i=r.call(o,e);i||(e=oe(e),i=r.call(o,e));const l=s.call(o,e);return o.set(e,t),i?xt(t,l)&&dt(o,"set",e,t):dt(o,"add",e,t),this}function Ir(e){const t=oe(this),{has:n,get:o}=io(t);let r=n.call(t,e);r||(e=oe(e),r=n.call(t,e)),o&&o.call(t,e);const s=t.delete(e);return r&&dt(t,"delete",e,void 0),s}function Pr(){const e=oe(this),t=e.size!==0,n=e.clear();return t&&dt(e,"clear",void 0,void 0),n}function Dn(e,t){return function(o,r){const s=this,i=s.__v_raw,l=oe(i),a=t?sr:e?cr:Te;return!e&&Ae(l,"iterate",Nt),i.forEach((d,u)=>o.call(r,a(d),a(u),s))}}function Hn(e,t,n){return function(...o){const r=this.__v_raw,s=oe(r),i=jt(s),l=e==="entries"||e===Symbol.iterator&&i,a=e==="keys"&&i,d=r[e](...o),u=n?sr:t?cr:Te;return!t&&Ae(s,"iterate",a?Do:Nt),{next(){const{value:h,done:p}=d.next();return p?{value:h,done:p}:{value:l?[u(h[0]),u(h[1])]:u(h),done:p}},[Symbol.iterator](){return this}}}}function pt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function zl(){const e={get(s){return Bn(this,s)},get size(){return Fn(this)},has:Ln,add:Nr,set:Mr,delete:Ir,clear:Pr,forEach:Dn(!1,!1)},t={get(s){return Bn(this,s,!1,!0)},get size(){return Fn(this)},has:Ln,add(s){return Nr.call(this,s,!0)},set(s,i){return Mr.call(this,s,i,!0)},delete:Ir,clear:Pr,forEach:Dn(!1,!0)},n={get(s){return Bn(this,s,!0)},get size(){return Fn(this,!0)},has(s){return Ln.call(this,s,!0)},add:pt("add"),set:pt("set"),delete:pt("delete"),clear:pt("clear"),forEach:Dn(!0,!1)},o={get(s){return Bn(this,s,!0,!0)},get size(){return Fn(this,!0)},has(s){return Ln.call(this,s,!0)},add:pt("add"),set:pt("set"),delete:pt("delete"),clear:pt("clear"),forEach:Dn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Hn(s,!1,!1),n[s]=Hn(s,!0,!1),t[s]=Hn(s,!1,!0),o[s]=Hn(s,!0,!0)}),[e,n,t,o]}const[Ul,jl,Vl,Kl]=zl();function ir(e,t){const n=t?e?Kl:Vl:e?jl:Ul;return(o,r,s)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?o:Reflect.get(te(n,r)&&r in o?n:o,r,s)}const Gl={get:ir(!1,!1)},Wl={get:ir(!1,!0)},Xl={get:ir(!0,!1)};const qs=new WeakMap,Zs=new WeakMap,Js=new WeakMap,Yl=new WeakMap;function ql(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zl(e){return e.__v_skip||!Object.isExtensible(e)?0:ql(_l(e))}function lo(e){return Pt(e)?e:lr(e,!1,Dl,Gl,qs)}function Qs(e){return lr(e,!1,$l,Wl,Zs)}function ei(e){return lr(e,!0,Hl,Xl,Js)}function lr(e,t,n,o,r){if(!ue(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=r.get(e);if(s)return s;const i=Zl(e);if(i===0)return e;const l=new Proxy(e,i===2?o:n);return r.set(e,l),l}function Vt(e){return Pt(e)?Vt(e.__v_raw):!!(e&&e.__v_isReactive)}function Pt(e){return!!(e&&e.__v_isReadonly)}function je(e){return!!(e&&e.__v_isShallow)}function ar(e){return e?!!e.__v_raw:!1}function oe(e){const t=e&&e.__v_raw;return t?oe(t):e}function Jl(e){return!te(e,"__v_skip")&&Object.isExtensible(e)&&Bs(e,"__v_skip",!0),e}const Te=e=>ue(e)?lo(e):e,cr=e=>ue(e)?ei(e):e;function ye(e){return e?e.__v_isRef===!0:!1}function ur(e){return ti(e,!1)}function Ql(e){return ti(e,!0)}function ti(e,t){return ye(e)?e:new ea(e,t)}class ea{constructor(t,n){this.dep=new rr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:oe(t),this._value=n?t:Te(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,o=this.__v_isShallow||je(t)||Pt(t);t=o?t:oe(t),xt(t,n)&&(this._rawValue=t,this._value=o?t:Te(t),this.dep.trigger())}}function ze(e){return ye(e)?e.value:e}const ta={get:(e,t,n)=>t==="__v_raw"?e:ze(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const r=e[t];return ye(r)&&!ye(n)?(r.value=n,!0):Reflect.set(e,t,n,o)}};function ni(e){return Vt(e)?e:new Proxy(e,ta)}class na{constructor(t,n,o){this.fn=t,this.setter=n,this._value=void 0,this.dep=new rr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=mn-1,this.effect=this,this.__v_isReadonly=!n,this.isSSR=o}notify(){this.flags|=16,ie!==this&&this.dep.notify()}get value(){const t=this.dep.track();return Vs(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function oa(e,t,n=!1){let o,r;return W(e)?o=e:(o=e.get,r=e.set),new na(o,r,n)}const $n={},Gn=new WeakMap;let Ot;function ra(e,t=!1,n=Ot){if(n){let o=Gn.get(n);o||Gn.set(n,o=[]),o.push(e)}}function sa(e,t,n=le){const{immediate:o,deep:r,once:s,scheduler:i,augmentJob:l,call:a}=n,d=P=>r?P:je(P)||r===!1||r===0?_t(P,1):_t(P);let u,h,p,b,B=!1,I=!1;if(ye(e)?(h=()=>e.value,B=je(e)):Vt(e)?(h=()=>d(e),B=!0):K(e)?(I=!0,B=e.some(P=>Vt(P)||je(P)),h=()=>e.map(P=>{if(ye(P))return P.value;if(Vt(P))return d(P);if(W(P))return a?a(P,2):P()})):W(e)?t?h=a?()=>a(e,2):e:h=()=>{if(p){St();try{p()}finally{Rt()}}const P=Ot;Ot=u;try{return a?a(e,3,[b]):e(b)}finally{Ot=P}}:h=nt,t&&r){const P=h,Z=r===!0?1/0:r;h=()=>_t(P(),Z)}const V=Nl(),$=()=>{u.stop(),V&&Jo(V.effects,u)};if(s)if(t){const P=t;t=(...Z)=>{P(...Z),$()}}else{const P=h;h=()=>{P(),$()}}let L=I?new Array(e.length).fill($n):$n;const H=P=>{if(!(!(u.flags&1)||!u.dirty&&!P))if(t){const Z=u.run();if(r||B||(I?Z.some((ae,se)=>xt(ae,L[se])):xt(Z,L))){p&&p();const ae=Ot;Ot=u;try{const se=[Z,L===$n?void 0:I&&L[0]===$n?[]:L,b];a?a(t,3,se):t(...se),L=Z}finally{Ot=ae}}}else u.run()};return l&&l(H),u=new $s(h),u.scheduler=i?()=>i(H,!1):H,b=P=>ra(P,!1,u),p=u.onStop=()=>{const P=Gn.get(u);if(P){if(a)a(P,4);else for(const Z of P)Z();Gn.delete(u)}},t?o?H(!0):L=u.run():i?i(H.bind(null,!0),!0):u.run(),$.pause=u.pause.bind(u),$.resume=u.resume.bind(u),$.stop=$,$}function _t(e,t=1/0,n){if(t<=0||!ue(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,ye(e))_t(e.value,t,n);else if(K(e))for(let o=0;o<e.length;o++)_t(e[o],t,n);else if(Ns(e)||jt(e))e.forEach(o=>{_t(o,t,n)});else if(Ps(e)){for(const o in e)_t(e[o],t,n);for(const o of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,o)&&_t(e[o],t,n)}return e}/**
* @vue/runtime-core v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Mn(e,t,n,o){try{return o?e(...o):e()}catch(r){ao(r,t,n)}}function rt(e,t,n,o){if(W(e)){const r=Mn(e,t,n,o);return r&&Ms(r)&&r.catch(s=>{ao(s,t,n)}),r}if(K(e)){const r=[];for(let s=0;s<e.length;s++)r.push(rt(e[s],t,n,o));return r}}function ao(e,t,n,o=!0){const r=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||le;if(t){let l=t.parent;const a=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](e,a,d)===!1)return}l=l.parent}if(s){St(),Mn(s,null,10,[e,a,d]),Rt();return}}ia(e,n,r,o,i)}function ia(e,t,n,o=!0,r=!1){if(r)throw e;console.error(e)}let vn=!1,Ho=!1;const Ie=[];let Qe=0;const Kt=[];let bt=null,$t=0;const oi=Promise.resolve();let fr=null;function ri(e){const t=fr||oi;return e?t.then(this?e.bind(this):e):t}function la(e){let t=vn?Qe+1:0,n=Ie.length;for(;t<n;){const o=t+n>>>1,r=Ie[o],s=_n(r);s<e||s===e&&r.flags&2?t=o+1:n=o}return t}function dr(e){if(!(e.flags&1)){const t=_n(e),n=Ie[Ie.length-1];!n||!(e.flags&2)&&t>=_n(n)?Ie.push(e):Ie.splice(la(t),0,e),e.flags|=1,si()}}function si(){!vn&&!Ho&&(Ho=!0,fr=oi.then(li))}function aa(e){K(e)?Kt.push(...e):bt&&e.id===-1?bt.splice($t+1,0,e):e.flags&1||(Kt.push(e),e.flags|=1),si()}function Br(e,t,n=vn?Qe+1:0){for(;n<Ie.length;n++){const o=Ie[n];if(o&&o.flags&2){if(e&&o.id!==e.uid)continue;Ie.splice(n,1),n--,o.flags&4&&(o.flags&=-2),o(),o.flags&=-2}}}function ii(e){if(Kt.length){const t=[...new Set(Kt)].sort((n,o)=>_n(n)-_n(o));if(Kt.length=0,bt){bt.push(...t);return}for(bt=t,$t=0;$t<bt.length;$t++){const n=bt[$t];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}bt=null,$t=0}}const _n=e=>e.id==null?e.flags&2?-1:1/0:e.id;function li(e){Ho=!1,vn=!0;try{for(Qe=0;Qe<Ie.length;Qe++){const t=Ie[Qe];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Mn(t,t.i,t.i?15:14),t.flags&=-2)}}finally{for(;Qe<Ie.length;Qe++){const t=Ie[Qe];t&&(t.flags&=-2)}Qe=0,Ie.length=0,ii(),vn=!1,fr=null,(Ie.length||Kt.length)&&li()}}let Pe=null,ai=null;function Wn(e){const t=Pe;return Pe=e,ai=e&&e.type.__scopeId||null,t}function mt(e,t=Pe,n){if(!t||e._n)return e;const o=(...r)=>{o._d&&Vr(-1);const s=Wn(t);let i;try{i=e(...r)}finally{Wn(s),o._d&&Vr(1)}return i};return o._n=!0,o._c=!0,o._d=!0,o}function kt(e,t,n,o){const r=e.dirs,s=t&&t.dirs;for(let i=0;i<r.length;i++){const l=r[i];s&&(l.oldValue=s[i].value);let a=l.dir[o];a&&(St(),rt(a,n,8,[e.el,l,e,t]),Rt())}}const ca=Symbol("_vte"),ua=e=>e.__isTeleport;function hr(e,t){e.shapeFlag&6&&e.component?(e.transition=t,hr(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function ci(e,t){return W(e)?Se({name:e.name},t,{setup:e}):e}function ui(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function $o(e,t,n,o,r=!1){if(K(e)){e.forEach((B,I)=>$o(B,t&&(K(t)?t[I]:t),n,o,r));return}if(Gt(o)&&!r)return;const s=o.shapeFlag&4?mr(o.component):o.el,i=r?null:s,{i:l,r:a}=e,d=t&&t.r,u=l.refs===le?l.refs={}:l.refs,h=l.setupState,p=oe(h),b=h===le?()=>!1:B=>te(p,B);if(d!=null&&d!==a&&(pe(d)?(u[d]=null,b(d)&&(h[d]=null)):ye(d)&&(d.value=null)),W(a))Mn(a,l,12,[i,u]);else{const B=pe(a),I=ye(a);if(B||I){const V=()=>{if(e.f){const $=B?b(a)?h[a]:u[a]:a.value;r?K($)&&Jo($,s):K($)?$.includes(s)||$.push(s):B?(u[a]=[s],b(a)&&(h[a]=u[a])):(a.value=[s],e.k&&(u[e.k]=a.value))}else B?(u[a]=i,b(a)&&(h[a]=i)):I&&(a.value=i,e.k&&(u[e.k]=i))};i?(V.id=-1,He(V,n)):V()}}}const Gt=e=>!!e.type.__asyncLoader,fi=e=>e.type.__isKeepAlive;function fa(e,t){di(e,"a",t)}function da(e,t){di(e,"da",t)}function di(e,t,n=ke){const o=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(co(t,o,n),n){let r=n.parent;for(;r&&r.parent;)fi(r.parent.vnode)&&ha(o,t,n,r),r=r.parent}}function ha(e,t,n,o){const r=co(t,e,o,!0);hi(()=>{Jo(o[t],r)},n)}function co(e,t,n=ke,o=!1){if(n){const r=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...i)=>{St();const l=In(n),a=rt(t,n,e,i);return l(),Rt(),a});return o?r.unshift(s):r.push(s),s}}const ht=e=>(t,n=ke)=>{(!ho||e==="sp")&&co(e,(...o)=>t(...o),n)},pa=ht("bm"),ga=ht("m"),ba=ht("bu"),ma=ht("u"),wa=ht("bum"),hi=ht("um"),va=ht("sp"),_a=ht("rtg"),ya=ht("rtc");function xa(e,t=ke){co("ec",e,t)}const Ea="components";function Sa(e,t){return Ta(Ea,e,!0,t)||e}const Ra=Symbol.for("v-ndc");function Ta(e,t,n=!0,o=!1){const r=Pe||ke;if(r){const s=r.type;{const l=hc(s,!1);if(l&&(l===t||l===Ye(t)||l===ro(Ye(t))))return s}const i=Lr(r[e]||s[e],t)||Lr(r.appContext[e],t);return!i&&o?s:i}}function Lr(e,t){return e&&(e[t]||e[Ye(t)]||e[ro(Ye(t))])}function rn(e,t,n,o){let r;const s=n,i=K(e);if(i||pe(e)){const l=i&&Vt(e);let a=!1;l&&(a=!je(e),e=so(e)),r=new Array(e.length);for(let d=0,u=e.length;d<u;d++)r[d]=t(a?Te(e[d]):e[d],d,void 0,s)}else if(typeof e=="number"){r=new Array(e);for(let l=0;l<e;l++)r[l]=t(l+1,l,void 0,s)}else if(ue(e))if(e[Symbol.iterator])r=Array.from(e,(l,a)=>t(l,a,void 0,s));else{const l=Object.keys(e);r=new Array(l.length);for(let a=0,d=l.length;a<d;a++){const u=l[a];r[a]=t(e[u],u,a,s)}}else r=[];return r}function ka(e,t,n={},o,r){if(Pe.ce||Pe.parent&&Gt(Pe.parent)&&Pe.parent.ce)return ge(),Kr(me,null,[ne("slot",n,o)],64);let s=e[t];s&&s._c&&(s._d=!1),ge();const i=s&&pi(s(n)),l=Kr(me,{key:(n.key||i&&i.key||`_${t}`)+(!i&&o?"_fb":"")},i||[],i&&e._===1?64:-2);return s&&s._c&&(s._d=!0),l}function pi(e){return e.some(t=>Yn(t)?!(t.type===Qt||t.type===me&&!pi(t.children)):!0)?e:null}const zo=e=>e?Pi(e)?mr(e):zo(e.parent):null,hn=Se(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>zo(e.parent),$root:e=>zo(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>pr(e),$forceUpdate:e=>e.f||(e.f=()=>{dr(e.update)}),$nextTick:e=>e.n||(e.n=ri.bind(e.proxy)),$watch:e=>Xa.bind(e)}),Ro=(e,t)=>e!==le&&!e.__isScriptSetup&&te(e,t),Aa={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:o,data:r,props:s,accessCache:i,type:l,appContext:a}=e;let d;if(t[0]!=="$"){const b=i[t];if(b!==void 0)switch(b){case 1:return o[t];case 2:return r[t];case 4:return n[t];case 3:return s[t]}else{if(Ro(o,t))return i[t]=1,o[t];if(r!==le&&te(r,t))return i[t]=2,r[t];if((d=e.propsOptions[0])&&te(d,t))return i[t]=3,s[t];if(n!==le&&te(n,t))return i[t]=4,n[t];Uo&&(i[t]=0)}}const u=hn[t];let h,p;if(u)return t==="$attrs"&&Ae(e.attrs,"get",""),u(e);if((h=l.__cssModules)&&(h=h[t]))return h;if(n!==le&&te(n,t))return i[t]=4,n[t];if(p=a.config.globalProperties,te(p,t))return p[t]},set({_:e},t,n){const{data:o,setupState:r,ctx:s}=e;return Ro(r,t)?(r[t]=n,!0):o!==le&&te(o,t)?(o[t]=n,!0):te(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:r,propsOptions:s}},i){let l;return!!n[i]||e!==le&&te(e,i)||Ro(t,i)||(l=s[0])&&te(l,i)||te(o,i)||te(hn,i)||te(r.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:te(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Fr(e){return K(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Uo=!0;function Oa(e){const t=pr(e),n=e.proxy,o=e.ctx;Uo=!1,t.beforeCreate&&Dr(t.beforeCreate,e,"bc");const{data:r,computed:s,methods:i,watch:l,provide:a,inject:d,created:u,beforeMount:h,mounted:p,beforeUpdate:b,updated:B,activated:I,deactivated:V,beforeDestroy:$,beforeUnmount:L,destroyed:H,unmounted:P,render:Z,renderTracked:ae,renderTriggered:se,errorCaptured:Oe,serverPrefetch:be,expose:Ce,inheritAttrs:Le,components:Ve,directives:Be,filters:it}=t;if(d&&Ca(d,o,null),i)for(const w in i){const T=i[w];W(T)&&(o[w]=T.bind(n))}if(r){const w=r.call(n,n);ue(w)&&(e.data=lo(w))}if(Uo=!0,s)for(const w in s){const T=s[w],U=W(T)?T.bind(n,n):W(T.get)?T.get.bind(n,n):nt,X=!W(T)&&W(T.set)?T.set.bind(n):nt,q=We({get:U,set:X});Object.defineProperty(o,w,{enumerable:!0,configurable:!0,get:()=>q.value,set:ee=>q.value=ee})}if(l)for(const w in l)gi(l[w],o,n,w);if(a){const w=W(a)?a.call(n):a;Reflect.ownKeys(w).forEach(T=>{Un(T,w[T])})}u&&Dr(u,e,"c");function fe(w,T){K(T)?T.forEach(U=>w(U.bind(n))):T&&w(T.bind(n))}if(fe(pa,h),fe(ga,p),fe(ba,b),fe(ma,B),fe(fa,I),fe(da,V),fe(xa,Oe),fe(ya,ae),fe(_a,se),fe(wa,L),fe(hi,P),fe(va,be),K(Ce))if(Ce.length){const w=e.exposed||(e.exposed={});Ce.forEach(T=>{Object.defineProperty(w,T,{get:()=>n[T],set:U=>n[T]=U})})}else e.exposed||(e.exposed={});Z&&e.render===nt&&(e.render=Z),Le!=null&&(e.inheritAttrs=Le),Ve&&(e.components=Ve),Be&&(e.directives=Be),be&&ui(e)}function Ca(e,t,n=nt){K(e)&&(e=jo(e));for(const o in e){const r=e[o];let s;ue(r)?"default"in r?s=ot(r.from||o,r.default,!0):s=ot(r.from||o):s=ot(r),ye(s)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>s.value,set:i=>s.value=i}):t[o]=s}}function Dr(e,t,n){rt(K(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,n)}function gi(e,t,n,o){let r=o.includes(".")?Oi(n,o):()=>n[o];if(pe(e)){const s=t[e];W(s)&&Xt(r,s)}else if(W(e))Xt(r,e.bind(n));else if(ue(e))if(K(e))e.forEach(s=>gi(s,t,n,o));else{const s=W(e.handler)?e.handler.bind(n):t[e.handler];W(s)&&Xt(r,s,e)}}function pr(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:i}}=e.appContext,l=s.get(t);let a;return l?a=l:!r.length&&!n&&!o?a=t:(a={},r.length&&r.forEach(d=>Xn(a,d,i,!0)),Xn(a,t,i)),ue(t)&&s.set(t,a),a}function Xn(e,t,n,o=!1){const{mixins:r,extends:s}=t;s&&Xn(e,s,n,!0),r&&r.forEach(i=>Xn(e,i,n,!0));for(const i in t)if(!(o&&i==="expose")){const l=Na[i]||n&&n[i];e[i]=l?l(e[i],t[i]):t[i]}return e}const Na={data:Hr,props:$r,emits:$r,methods:un,computed:un,beforeCreate:Me,created:Me,beforeMount:Me,mounted:Me,beforeUpdate:Me,updated:Me,beforeDestroy:Me,beforeUnmount:Me,destroyed:Me,unmounted:Me,activated:Me,deactivated:Me,errorCaptured:Me,serverPrefetch:Me,components:un,directives:un,watch:Ia,provide:Hr,inject:Ma};function Hr(e,t){return t?e?function(){return Se(W(e)?e.call(this,this):e,W(t)?t.call(this,this):t)}:t:e}function Ma(e,t){return un(jo(e),jo(t))}function jo(e){if(K(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Me(e,t){return e?[...new Set([].concat(e,t))]:t}function un(e,t){return e?Se(Object.create(null),e,t):t}function $r(e,t){return e?K(e)&&K(t)?[...new Set([...e,...t])]:Se(Object.create(null),Fr(e),Fr(t??{})):t}function Ia(e,t){if(!e)return t;if(!t)return e;const n=Se(Object.create(null),e);for(const o in t)n[o]=Me(e[o],t[o]);return n}function bi(){return{app:null,config:{isNativeTag:wl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Pa=0;function Ba(e,t){return function(o,r=null){W(o)||(o=Se({},o)),r!=null&&!ue(r)&&(r=null);const s=bi(),i=new WeakSet,l=[];let a=!1;const d=s.app={_uid:Pa++,_component:o,_props:r,_container:null,_context:s,_instance:null,version:gc,get config(){return s.config},set config(u){},use(u,...h){return i.has(u)||(u&&W(u.install)?(i.add(u),u.install(d,...h)):W(u)&&(i.add(u),u(d,...h))),d},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),d},component(u,h){return h?(s.components[u]=h,d):s.components[u]},directive(u,h){return h?(s.directives[u]=h,d):s.directives[u]},mount(u,h,p){if(!a){const b=d._ceVNode||ne(o,r);return b.appContext=s,p===!0?p="svg":p===!1&&(p=void 0),h&&t?t(b,u):e(b,u,p),a=!0,d._container=u,u.__vue_app__=d,mr(b.component)}},onUnmount(u){l.push(u)},unmount(){a&&(rt(l,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(u,h){return s.provides[u]=h,d},runWithContext(u){const h=Wt;Wt=d;try{return u()}finally{Wt=h}}};return d}}let Wt=null;function Un(e,t){if(ke){let n=ke.provides;const o=ke.parent&&ke.parent.provides;o===n&&(n=ke.provides=Object.create(o)),n[e]=t}}function ot(e,t,n=!1){const o=ke||Pe;if(o||Wt){const r=Wt?Wt._context.provides:o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&W(t)?t.call(o&&o.proxy):t}}const mi={},wi=()=>Object.create(mi),vi=e=>Object.getPrototypeOf(e)===mi;function La(e,t,n,o=!1){const r={},s=wi();e.propsDefaults=Object.create(null),_i(e,t,r,s);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);n?e.props=o?r:Qs(r):e.type.props?e.props=r:e.props=s,e.attrs=s}function Fa(e,t,n,o){const{props:r,attrs:s,vnode:{patchFlag:i}}=e,l=oe(r),[a]=e.propsOptions;let d=!1;if((o||i>0)&&!(i&16)){if(i&8){const u=e.vnode.dynamicProps;for(let h=0;h<u.length;h++){let p=u[h];if(uo(e.emitsOptions,p))continue;const b=t[p];if(a)if(te(s,p))b!==s[p]&&(s[p]=b,d=!0);else{const B=Ye(p);r[B]=Vo(a,l,B,b,e,!1)}else b!==s[p]&&(s[p]=b,d=!0)}}}else{_i(e,t,r,s)&&(d=!0);let u;for(const h in l)(!t||!te(t,h)&&((u=Bt(h))===h||!te(t,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Vo(a,l,h,void 0,e,!0)):delete r[h]);if(s!==l)for(const h in s)(!t||!te(t,h))&&(delete s[h],d=!0)}d&&dt(e.attrs,"set","")}function _i(e,t,n,o){const[r,s]=e.propsOptions;let i=!1,l;if(t)for(let a in t){if(fn(a))continue;const d=t[a];let u;r&&te(r,u=Ye(a))?!s||!s.includes(u)?n[u]=d:(l||(l={}))[u]=d:uo(e.emitsOptions,a)||(!(a in o)||d!==o[a])&&(o[a]=d,i=!0)}if(s){const a=oe(n),d=l||le;for(let u=0;u<s.length;u++){const h=s[u];n[h]=Vo(r,a,h,d[h],e,!te(d,h))}}return i}function Vo(e,t,n,o,r,s){const i=e[n];if(i!=null){const l=te(i,"default");if(l&&o===void 0){const a=i.default;if(i.type!==Function&&!i.skipFactory&&W(a)){const{propsDefaults:d}=r;if(n in d)o=d[n];else{const u=In(r);o=d[n]=a.call(null,t),u()}}else o=a;r.ce&&r.ce._setProp(n,o)}i[0]&&(s&&!l?o=!1:i[1]&&(o===""||o===Bt(n))&&(o=!0))}return o}const Da=new WeakMap;function yi(e,t,n=!1){const o=n?Da:t.propsCache,r=o.get(e);if(r)return r;const s=e.props,i={},l=[];let a=!1;if(!W(e)){const u=h=>{a=!0;const[p,b]=yi(h,t,!0);Se(i,p),b&&l.push(...b)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!a)return ue(e)&&o.set(e,Ut),Ut;if(K(s))for(let u=0;u<s.length;u++){const h=Ye(s[u]);zr(h)&&(i[h]=le)}else if(s)for(const u in s){const h=Ye(u);if(zr(h)){const p=s[u],b=i[h]=K(p)||W(p)?{type:p}:Se({},p),B=b.type;let I=!1,V=!0;if(K(B))for(let $=0;$<B.length;++$){const L=B[$],H=W(L)&&L.name;if(H==="Boolean"){I=!0;break}else H==="String"&&(V=!1)}else I=W(B)&&B.name==="Boolean";b[0]=I,b[1]=V,(I||te(b,"default"))&&l.push(h)}}const d=[i,l];return ue(e)&&o.set(e,d),d}function zr(e){return e[0]!=="$"&&!fn(e)}const xi=e=>e[0]==="_"||e==="$stable",gr=e=>K(e)?e.map(tt):[tt(e)],Ha=(e,t,n)=>{if(t._n)return t;const o=mt((...r)=>gr(t(...r)),n);return o._c=!1,o},Ei=(e,t,n)=>{const o=e._ctx;for(const r in e){if(xi(r))continue;const s=e[r];if(W(s))t[r]=Ha(r,s,o);else if(s!=null){const i=gr(s);t[r]=()=>i}}},Si=(e,t)=>{const n=gr(t);e.slots.default=()=>n},Ri=(e,t,n)=>{for(const o in t)(n||o!=="_")&&(e[o]=t[o])},$a=(e,t,n)=>{const o=e.slots=wi();if(e.vnode.shapeFlag&32){const r=t._;r?(Ri(o,t,n),n&&Bs(o,"_",r,!0)):Ei(t,o)}else t&&Si(e,t)},za=(e,t,n)=>{const{vnode:o,slots:r}=e;let s=!0,i=le;if(o.shapeFlag&32){const l=t._;l?n&&l===1?s=!1:Ri(r,t,n):(s=!t.$stable,Ei(t,r)),i=t}else t&&(Si(e,t),i={default:1});if(s)for(const l in r)!xi(l)&&i[l]==null&&delete r[l]},He=tc;function Ua(e){return ja(e)}function ja(e,t){const n=Ls();n.__VUE__=!0;const{insert:o,remove:r,patchProp:s,createElement:i,createText:l,createComment:a,setText:d,setElementText:u,parentNode:h,nextSibling:p,setScopeId:b=nt,insertStaticContent:B}=e,I=(c,f,g,x=null,v=null,S=null,_=void 0,A=null,R=!!f.dynamicChildren)=>{if(c===f)return;c&&!an(c,f)&&(x=y(c),ee(c,v,S,!0),c=null),f.patchFlag===-2&&(R=!1,f.dynamicChildren=null);const{type:m,ref:z,shapeFlag:O}=f;switch(m){case fo:V(c,f,g,x);break;case Qt:$(c,f,g,x);break;case Ao:c==null&&L(f,g,x,_);break;case me:Ve(c,f,g,x,v,S,_,A,R);break;default:O&1?Z(c,f,g,x,v,S,_,A,R):O&6?Be(c,f,g,x,v,S,_,A,R):(O&64||O&128)&&m.process(c,f,g,x,v,S,_,A,R,F)}z!=null&&v&&$o(z,c&&c.ref,S,f||c,!f)},V=(c,f,g,x)=>{if(c==null)o(f.el=l(f.children),g,x);else{const v=f.el=c.el;f.children!==c.children&&d(v,f.children)}},$=(c,f,g,x)=>{c==null?o(f.el=a(f.children||""),g,x):f.el=c.el},L=(c,f,g,x)=>{[c.el,c.anchor]=B(c.children,f,g,x,c.el,c.anchor)},H=({el:c,anchor:f},g,x)=>{let v;for(;c&&c!==f;)v=p(c),o(c,g,x),c=v;o(f,g,x)},P=({el:c,anchor:f})=>{let g;for(;c&&c!==f;)g=p(c),r(c),c=g;r(f)},Z=(c,f,g,x,v,S,_,A,R)=>{f.type==="svg"?_="svg":f.type==="math"&&(_="mathml"),c==null?ae(f,g,x,v,S,_,A,R):be(c,f,v,S,_,A,R)},ae=(c,f,g,x,v,S,_,A)=>{let R,m;const{props:z,shapeFlag:O,transition:D,dirs:j}=c;if(R=c.el=i(c.type,S,z&&z.is,z),O&8?u(R,c.children):O&16&&Oe(c.children,R,null,x,v,To(c,S),_,A),j&&kt(c,null,x,"created"),se(R,c,c.scopeId,_,x),z){for(const k in z)k!=="value"&&!fn(k)&&s(R,k,null,z[k],S,x);"value"in z&&s(R,"value",null,z.value,S),(m=z.onVnodeBeforeMount)&&Je(m,x,c)}j&&kt(c,null,x,"beforeMount");const E=Va(v,D);E&&D.beforeEnter(R),o(R,f,g),((m=z&&z.onVnodeMounted)||E||j)&&He(()=>{m&&Je(m,x,c),E&&D.enter(R),j&&kt(c,null,x,"mounted")},v)},se=(c,f,g,x,v)=>{if(g&&b(c,g),x)for(let S=0;S<x.length;S++)b(c,x[S]);if(v){let S=v.subTree;if(f===S||Ni(S.type)&&(S.ssContent===f||S.ssFallback===f)){const _=v.vnode;se(c,_,_.scopeId,_.slotScopeIds,v.parent)}}},Oe=(c,f,g,x,v,S,_,A,R=0)=>{for(let m=R;m<c.length;m++){const z=c[m]=A?wt(c[m]):tt(c[m]);I(null,z,f,g,x,v,S,_,A)}},be=(c,f,g,x,v,S,_)=>{const A=f.el=c.el;let{patchFlag:R,dynamicChildren:m,dirs:z}=f;R|=c.patchFlag&16;const O=c.props||le,D=f.props||le;let j;if(g&&At(g,!1),(j=D.onVnodeBeforeUpdate)&&Je(j,g,f,c),z&&kt(f,c,g,"beforeUpdate"),g&&At(g,!0),(O.innerHTML&&D.innerHTML==null||O.textContent&&D.textContent==null)&&u(A,""),m?Ce(c.dynamicChildren,m,A,g,x,To(f,v),S):_||T(c,f,A,null,g,x,To(f,v),S,!1),R>0){if(R&16)Le(A,O,D,g,v);else if(R&2&&O.class!==D.class&&s(A,"class",null,D.class,v),R&4&&s(A,"style",O.style,D.style,v),R&8){const E=f.dynamicProps;for(let k=0;k<E.length;k++){const M=E[k],G=O[M],J=D[M];(J!==G||M==="value")&&s(A,M,G,J,v,g)}}R&1&&c.children!==f.children&&u(A,f.children)}else!_&&m==null&&Le(A,O,D,g,v);((j=D.onVnodeUpdated)||z)&&He(()=>{j&&Je(j,g,f,c),z&&kt(f,c,g,"updated")},x)},Ce=(c,f,g,x,v,S,_)=>{for(let A=0;A<f.length;A++){const R=c[A],m=f[A],z=R.el&&(R.type===me||!an(R,m)||R.shapeFlag&70)?h(R.el):g;I(R,m,z,null,x,v,S,_,!0)}},Le=(c,f,g,x,v)=>{if(f!==g){if(f!==le)for(const S in f)!fn(S)&&!(S in g)&&s(c,S,f[S],null,v,x);for(const S in g){if(fn(S))continue;const _=g[S],A=f[S];_!==A&&S!=="value"&&s(c,S,A,_,v,x)}"value"in g&&s(c,"value",f.value,g.value,v)}},Ve=(c,f,g,x,v,S,_,A,R)=>{const m=f.el=c?c.el:l(""),z=f.anchor=c?c.anchor:l("");let{patchFlag:O,dynamicChildren:D,slotScopeIds:j}=f;j&&(A=A?A.concat(j):j),c==null?(o(m,g,x),o(z,g,x),Oe(f.children||[],g,z,v,S,_,A,R)):O>0&&O&64&&D&&c.dynamicChildren?(Ce(c.dynamicChildren,D,g,v,S,_,A),(f.key!=null||v&&f===v.subTree)&&Ti(c,f,!0)):T(c,f,g,z,v,S,_,A,R)},Be=(c,f,g,x,v,S,_,A,R)=>{f.slotScopeIds=A,c==null?f.shapeFlag&512?v.ctx.activate(f,g,x,_,R):it(f,g,x,v,S,_,R):Fe(c,f,R)},it=(c,f,g,x,v,S,_)=>{const A=c.component=ac(c,x,v);if(fi(c)&&(A.ctx.renderer=F),cc(A,!1,_),A.asyncDep){if(v&&v.registerDep(A,fe,_),!c.el){const R=A.subTree=ne(Qt);$(null,R,f,g)}}else fe(A,c,f,g,v,S,_)},Fe=(c,f,g)=>{const x=f.component=c.component;if(Qa(c,f,g))if(x.asyncDep&&!x.asyncResolved){w(x,f,g);return}else x.next=f,x.update();else f.el=c.el,x.vnode=f},fe=(c,f,g,x,v,S,_)=>{const A=()=>{if(c.isMounted){let{next:O,bu:D,u:j,parent:E,vnode:k}=c;{const Ne=ki(c);if(Ne){O&&(O.el=k.el,w(c,O,_)),Ne.asyncDep.then(()=>{c.isUnmounted||A()});return}}let M=O,G;At(c,!1),O?(O.el=k.el,w(c,O,_)):O=k,D&&_o(D),(G=O.props&&O.props.onVnodeBeforeUpdate)&&Je(G,E,O,k),At(c,!0);const J=ko(c),he=c.subTree;c.subTree=J,I(he,J,h(he.el),y(he),c,v,S),O.el=J.el,M===null&&ec(c,J.el),j&&He(j,v),(G=O.props&&O.props.onVnodeUpdated)&&He(()=>Je(G,E,O,k),v)}else{let O;const{el:D,props:j}=f,{bm:E,m:k,parent:M,root:G,type:J}=c,he=Gt(f);if(At(c,!1),E&&_o(E),!he&&(O=j&&j.onVnodeBeforeMount)&&Je(O,M,f),At(c,!0),D&&ce){const Ne=()=>{c.subTree=ko(c),ce(D,c.subTree,c,v,null)};he&&J.__asyncHydrate?J.__asyncHydrate(D,c,Ne):Ne()}else{G.ce&&G.ce._injectChildStyle(J);const Ne=c.subTree=ko(c);I(null,Ne,g,x,c,v,S),f.el=Ne.el}if(k&&He(k,v),!he&&(O=j&&j.onVnodeMounted)){const Ne=f;He(()=>Je(O,M,Ne),v)}(f.shapeFlag&256||M&&Gt(M.vnode)&&M.vnode.shapeFlag&256)&&c.a&&He(c.a,v),c.isMounted=!0,f=g=x=null}};c.scope.on();const R=c.effect=new $s(A);c.scope.off();const m=c.update=R.run.bind(R),z=c.job=R.runIfDirty.bind(R);z.i=c,z.id=c.uid,R.scheduler=()=>dr(z),At(c,!0),m()},w=(c,f,g)=>{f.component=c;const x=c.vnode.props;c.vnode=f,c.next=null,Fa(c,f.props,x,g),za(c,f.children,g),St(),Br(c),Rt()},T=(c,f,g,x,v,S,_,A,R=!1)=>{const m=c&&c.children,z=c?c.shapeFlag:0,O=f.children,{patchFlag:D,shapeFlag:j}=f;if(D>0){if(D&128){X(m,O,g,x,v,S,_,A,R);return}else if(D&256){U(m,O,g,x,v,S,_,A,R);return}}j&8?(z&16&&de(m,v,S),O!==m&&u(g,O)):z&16?j&16?X(m,O,g,x,v,S,_,A,R):de(m,v,S,!0):(z&8&&u(g,""),j&16&&Oe(O,g,x,v,S,_,A,R))},U=(c,f,g,x,v,S,_,A,R)=>{c=c||Ut,f=f||Ut;const m=c.length,z=f.length,O=Math.min(m,z);let D;for(D=0;D<O;D++){const j=f[D]=R?wt(f[D]):tt(f[D]);I(c[D],j,g,null,v,S,_,A,R)}m>z?de(c,v,S,!0,!1,O):Oe(f,g,x,v,S,_,A,R,O)},X=(c,f,g,x,v,S,_,A,R)=>{let m=0;const z=f.length;let O=c.length-1,D=z-1;for(;m<=O&&m<=D;){const j=c[m],E=f[m]=R?wt(f[m]):tt(f[m]);if(an(j,E))I(j,E,g,null,v,S,_,A,R);else break;m++}for(;m<=O&&m<=D;){const j=c[O],E=f[D]=R?wt(f[D]):tt(f[D]);if(an(j,E))I(j,E,g,null,v,S,_,A,R);else break;O--,D--}if(m>O){if(m<=D){const j=D+1,E=j<z?f[j].el:x;for(;m<=D;)I(null,f[m]=R?wt(f[m]):tt(f[m]),g,E,v,S,_,A,R),m++}}else if(m>D)for(;m<=O;)ee(c[m],v,S,!0),m++;else{const j=m,E=m,k=new Map;for(m=E;m<=D;m++){const De=f[m]=R?wt(f[m]):tt(f[m]);De.key!=null&&k.set(De.key,m)}let M,G=0;const J=D-E+1;let he=!1,Ne=0;const Tt=new Array(J);for(m=0;m<J;m++)Tt[m]=0;for(m=j;m<=O;m++){const De=c[m];if(G>=J){ee(De,v,S,!0);continue}let Ze;if(De.key!=null)Ze=k.get(De.key);else for(M=E;M<=D;M++)if(Tt[M-E]===0&&an(De,f[M])){Ze=M;break}Ze===void 0?ee(De,v,S,!0):(Tt[Ze-E]=m+1,Ze>=Ne?Ne=Ze:he=!0,I(De,f[Ze],g,null,v,S,_,A,R),G++)}const Rr=he?Ka(Tt):Ut;for(M=Rr.length-1,m=J-1;m>=0;m--){const De=E+m,Ze=f[De],Tr=De+1<z?f[De+1].el:x;Tt[m]===0?I(null,Ze,g,Tr,v,S,_,A,R):he&&(M<0||m!==Rr[M]?q(Ze,g,Tr,2):M--)}}},q=(c,f,g,x,v=null)=>{const{el:S,type:_,transition:A,children:R,shapeFlag:m}=c;if(m&6){q(c.component.subTree,f,g,x);return}if(m&128){c.suspense.move(f,g,x);return}if(m&64){_.move(c,f,g,F);return}if(_===me){o(S,f,g);for(let O=0;O<R.length;O++)q(R[O],f,g,x);o(c.anchor,f,g);return}if(_===Ao){H(c,f,g);return}if(x!==2&&m&1&&A)if(x===0)A.beforeEnter(S),o(S,f,g),He(()=>A.enter(S),v);else{const{leave:O,delayLeave:D,afterLeave:j}=A,E=()=>o(S,f,g),k=()=>{O(S,()=>{E(),j&&j()})};D?D(S,E,k):k()}else o(S,f,g)},ee=(c,f,g,x=!1,v=!1)=>{const{type:S,props:_,ref:A,children:R,dynamicChildren:m,shapeFlag:z,patchFlag:O,dirs:D,cacheIndex:j}=c;if(O===-2&&(v=!1),A!=null&&$o(A,null,g,c,!0),j!=null&&(f.renderCache[j]=void 0),z&256){f.ctx.deactivate(c);return}const E=z&1&&D,k=!Gt(c);let M;if(k&&(M=_&&_.onVnodeBeforeUnmount)&&Je(M,f,c),z&6)ve(c.component,g,x);else{if(z&128){c.suspense.unmount(g,x);return}E&&kt(c,null,f,"beforeUnmount"),z&64?c.type.remove(c,f,g,F,x):m&&!m.hasOnce&&(S!==me||O>0&&O&64)?de(m,f,g,!1,!0):(S===me&&O&384||!v&&z&16)&&de(R,f,g),x&&we(c)}(k&&(M=_&&_.onVnodeUnmounted)||E)&&He(()=>{M&&Je(M,f,c),E&&kt(c,null,f,"unmounted")},g)},we=c=>{const{type:f,el:g,anchor:x,transition:v}=c;if(f===me){Ke(g,x);return}if(f===Ao){P(c);return}const S=()=>{r(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(c.shapeFlag&1&&v&&!v.persisted){const{leave:_,delayLeave:A}=v,R=()=>_(g,S);A?A(c.el,S,R):R()}else S()},Ke=(c,f)=>{let g;for(;c!==f;)g=p(c),r(c),c=g;r(f)},ve=(c,f,g)=>{const{bum:x,scope:v,job:S,subTree:_,um:A,m:R,a:m}=c;Ur(R),Ur(m),x&&_o(x),v.stop(),S&&(S.flags|=8,ee(_,c,f,g)),A&&He(A,f),He(()=>{c.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},de=(c,f,g,x=!1,v=!1,S=0)=>{for(let _=S;_<c.length;_++)ee(c[_],f,g,x,v)},y=c=>{if(c.shapeFlag&6)return y(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const f=p(c.anchor||c.el),g=f&&f[ca];return g?p(g):f};let N=!1;const C=(c,f,g)=>{c==null?f._vnode&&ee(f._vnode,null,null,!0):I(f._vnode||null,c,f,null,null,null,g),f._vnode=c,N||(N=!0,Br(),ii(),N=!1)},F={p:I,um:ee,m:q,r:we,mt:it,mc:Oe,pc:T,pbc:Ce,n:y,o:e};let Q,ce;return{render:C,hydrate:Q,createApp:Ba(C,Q)}}function To({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function At({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Va(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ti(e,t,n=!1){const o=e.children,r=t.children;if(K(o)&&K(r))for(let s=0;s<o.length;s++){const i=o[s];let l=r[s];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[s]=wt(r[s]),l.el=i.el),!n&&l.patchFlag!==-2&&Ti(i,l)),l.type===fo&&(l.el=i.el)}}function Ka(e){const t=e.slice(),n=[0];let o,r,s,i,l;const a=e.length;for(o=0;o<a;o++){const d=e[o];if(d!==0){if(r=n[n.length-1],e[r]<d){t[o]=r,n.push(o);continue}for(s=0,i=n.length-1;s<i;)l=s+i>>1,e[n[l]]<d?s=l+1:i=l;d<e[n[s]]&&(s>0&&(t[o]=n[s-1]),n[s]=o)}}for(s=n.length,i=n[s-1];s-- >0;)n[s]=i,i=t[i];return n}function ki(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ki(t)}function Ur(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Ga=Symbol.for("v-scx"),Wa=()=>ot(Ga);function Xt(e,t,n){return Ai(e,t,n)}function Ai(e,t,n=le){const{immediate:o,deep:r,flush:s,once:i}=n,l=Se({},n);let a;if(ho)if(s==="sync"){const p=Wa();a=p.__watcherHandles||(p.__watcherHandles=[])}else if(!t||o)l.once=!0;else return{stop:nt,resume:nt,pause:nt};const d=ke;l.call=(p,b,B)=>rt(p,d,b,B);let u=!1;s==="post"?l.scheduler=p=>{He(p,d&&d.suspense)}:s!=="sync"&&(u=!0,l.scheduler=(p,b)=>{b?p():dr(p)}),l.augmentJob=p=>{t&&(p.flags|=4),u&&(p.flags|=2,d&&(p.id=d.uid,p.i=d))};const h=sa(e,t,l);return a&&a.push(h),h}function Xa(e,t,n){const o=this.proxy,r=pe(e)?e.includes(".")?Oi(o,e):()=>o[e]:e.bind(o,o);let s;W(t)?s=t:(s=t.handler,n=t);const i=In(this),l=Ai(r,s.bind(o),n);return i(),l}function Oi(e,t){const n=t.split(".");return()=>{let o=e;for(let r=0;r<n.length&&o;r++)o=o[n[r]];return o}}const Ya=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ye(t)}Modifiers`]||e[`${Bt(t)}Modifiers`];function qa(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||le;let r=n;const s=t.startsWith("update:"),i=s&&Ya(o,t.slice(7));i&&(i.trim&&(r=n.map(u=>pe(u)?u.trim():u)),i.number&&(r=n.map(El)));let l,a=o[l=vo(t)]||o[l=vo(Ye(t))];!a&&s&&(a=o[l=vo(Bt(t))]),a&&rt(a,e,6,r);const d=o[l+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,rt(d,e,6,r)}}function Ci(e,t,n=!1){const o=t.emitsCache,r=o.get(e);if(r!==void 0)return r;const s=e.emits;let i={},l=!1;if(!W(e)){const a=d=>{const u=Ci(d,t,!0);u&&(l=!0,Se(i,u))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!s&&!l?(ue(e)&&o.set(e,null),null):(K(s)?s.forEach(a=>i[a]=null):Se(i,s),ue(e)&&o.set(e,i),i)}function uo(e,t){return!e||!to(t)?!1:(t=t.slice(2).replace(/Once$/,""),te(e,t[0].toLowerCase()+t.slice(1))||te(e,Bt(t))||te(e,t))}function ko(e){const{type:t,vnode:n,proxy:o,withProxy:r,propsOptions:[s],slots:i,attrs:l,emit:a,render:d,renderCache:u,props:h,data:p,setupState:b,ctx:B,inheritAttrs:I}=e,V=Wn(e);let $,L;try{if(n.shapeFlag&4){const P=r||o,Z=P;$=tt(d.call(Z,P,u,h,b,p,B)),L=l}else{const P=t;$=tt(P.length>1?P(h,{attrs:l,slots:i,emit:a}):P(h,null)),L=t.props?l:Za(l)}}catch(P){pn.length=0,ao(P,e,1),$=ne(Qt)}let H=$;if(L&&I!==!1){const P=Object.keys(L),{shapeFlag:Z}=H;P.length&&Z&7&&(s&&P.some(Zo)&&(L=Ja(L,s)),H=en(H,L,!1,!0))}return n.dirs&&(H=en(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&hr(H,n.transition),$=H,Wn(V),$}const Za=e=>{let t;for(const n in e)(n==="class"||n==="style"||to(n))&&((t||(t={}))[n]=e[n]);return t},Ja=(e,t)=>{const n={};for(const o in e)(!Zo(o)||!(o.slice(9)in t))&&(n[o]=e[o]);return n};function Qa(e,t,n){const{props:o,children:r,component:s}=e,{props:i,children:l,patchFlag:a}=t,d=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return o?jr(o,i,d):!!i;if(a&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const p=u[h];if(i[p]!==o[p]&&!uo(d,p))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:o===i?!1:o?i?jr(o,i,d):!0:!!i;return!1}function jr(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let r=0;r<o.length;r++){const s=o[r];if(t[s]!==e[s]&&!uo(n,s))return!0}return!1}function ec({vnode:e,parent:t},n){for(;t;){const o=t.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.el=e.el),o===e)(e=t.vnode).el=n,t=t.parent;else break}}const Ni=e=>e.__isSuspense;function tc(e,t){t&&t.pendingBranch?K(e)?t.effects.push(...e):t.effects.push(e):aa(e)}const me=Symbol.for("v-fgt"),fo=Symbol.for("v-txt"),Qt=Symbol.for("v-cmt"),Ao=Symbol.for("v-stc"),pn=[];let Ue=null;function ge(e=!1){pn.push(Ue=e?null:[])}function nc(){pn.pop(),Ue=pn[pn.length-1]||null}let yn=1;function Vr(e){yn+=e,e<0&&Ue&&(Ue.hasOnce=!0)}function Mi(e){return e.dynamicChildren=yn>0?Ue||Ut:null,nc(),yn>0&&Ue&&Ue.push(e),e}function xe(e,t,n,o,r,s){return Mi(Ee(e,t,n,o,r,s,!0))}function Kr(e,t,n,o,r){return Mi(ne(e,t,n,o,r,!0))}function Yn(e){return e?e.__v_isVNode===!0:!1}function an(e,t){return e.type===t.type&&e.key===t.key}const Ii=({key:e})=>e??null,jn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?pe(e)||ye(e)||W(e)?{i:Pe,r:e,k:t,f:!!n}:e:null);function Ee(e,t=null,n=null,o=0,r=null,s=e===me?0:1,i=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ii(t),ref:t&&jn(t),scopeId:ai,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Pe};return l?(br(a,n),s&128&&e.normalize(a)):n&&(a.shapeFlag|=pe(n)?8:16),yn>0&&!i&&Ue&&(a.patchFlag>0||s&6)&&a.patchFlag!==32&&Ue.push(a),a}const ne=oc;function oc(e,t=null,n=null,o=0,r=null,s=!1){if((!e||e===Ra)&&(e=Qt),Yn(e)){const l=en(e,t,!0);return n&&br(l,n),yn>0&&!s&&Ue&&(l.shapeFlag&6?Ue[Ue.indexOf(e)]=l:Ue.push(l)),l.patchFlag=-2,l}if(pc(e)&&(e=e.__vccOpts),t){t=rc(t);let{class:l,style:a}=t;l&&!pe(l)&&(t.class=It(l)),ue(a)&&(ar(a)&&!K(a)&&(a=Se({},a)),t.style=er(a))}const i=pe(e)?1:Ni(e)?128:ua(e)?64:ue(e)?4:W(e)?2:0;return Ee(e,t,n,o,r,i,s,!0)}function rc(e){return e?ar(e)||vi(e)?Se({},e):e:null}function en(e,t,n=!1,o=!1){const{props:r,ref:s,patchFlag:i,children:l,transition:a}=e,d=t?sc(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&Ii(d),ref:t&&t.ref?n&&s?K(s)?s.concat(jn(t)):[s,jn(t)]:jn(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==me?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&en(e.ssContent),ssFallback:e.ssFallback&&en(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&o&&hr(u,a.clone(u)),u}function ut(e=" ",t=0){return ne(fo,null,e,t)}function tt(e){return e==null||typeof e=="boolean"?ne(Qt):K(e)?ne(me,null,e.slice()):typeof e=="object"?wt(e):ne(fo,null,String(e))}function wt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:en(e)}function br(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(K(t))n=16;else if(typeof t=="object")if(o&65){const r=t.default;r&&(r._c&&(r._d=!1),br(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!vi(t)?t._ctx=Pe:r===3&&Pe&&(Pe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else W(t)?(t={default:t,_ctx:Pe},n=32):(t=String(t),o&64?(n=16,t=[ut(t)]):n=8);e.children=t,e.shapeFlag|=n}function sc(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const r in o)if(r==="class")t.class!==o.class&&(t.class=It([t.class,o.class]));else if(r==="style")t.style=er([t.style,o.style]);else if(to(r)){const s=t[r],i=o[r];i&&s!==i&&!(K(s)&&s.includes(i))&&(t[r]=s?[].concat(s,i):i)}else r!==""&&(t[r]=o[r])}return t}function Je(e,t,n,o=null){rt(e,t,7,[n,o])}const ic=bi();let lc=0;function ac(e,t,n){const o=e.type,r=(t?t.appContext:e.appContext)||ic,s={uid:lc++,vnode:e,type:o,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Cl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yi(o,r),emitsOptions:Ci(o,r),emit:null,emitted:null,propsDefaults:le,inheritAttrs:o.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=qa.bind(null,s),e.ce&&e.ce(s),s}let ke=null,qn,Ko;{const e=Ls(),t=(n,o)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(o),s=>{r.length>1?r.forEach(i=>i(s)):r[0](s)}};qn=t("__VUE_INSTANCE_SETTERS__",n=>ke=n),Ko=t("__VUE_SSR_SETTERS__",n=>ho=n)}const In=e=>{const t=ke;return qn(e),e.scope.on(),()=>{e.scope.off(),qn(t)}},Gr=()=>{ke&&ke.scope.off(),qn(null)};function Pi(e){return e.vnode.shapeFlag&4}let ho=!1;function cc(e,t=!1,n=!1){t&&Ko(t);const{props:o,children:r}=e.vnode,s=Pi(e);La(e,o,s,t),$a(e,r,n);const i=s?uc(e,t):void 0;return t&&Ko(!1),i}function uc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Aa);const{setup:o}=n;if(o){const r=e.setupContext=o.length>1?dc(e):null,s=In(e);St();const i=Mn(o,e,0,[e.props,r]);if(Rt(),s(),Ms(i)){if(Gt(e)||ui(e),i.then(Gr,Gr),t)return i.then(l=>{Wr(e,l,t)}).catch(l=>{ao(l,e,0)});e.asyncDep=i}else Wr(e,i,t)}else Bi(e,t)}function Wr(e,t,n){W(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ue(t)&&(e.setupState=ni(t)),Bi(e,n)}let Xr;function Bi(e,t,n){const o=e.type;if(!e.render){if(!t&&Xr&&!o.render){const r=o.template||pr(e).template;if(r){const{isCustomElement:s,compilerOptions:i}=e.appContext.config,{delimiters:l,compilerOptions:a}=o,d=Se(Se({isCustomElement:s,delimiters:l},i),a);o.render=Xr(r,d)}}e.render=o.render||nt}{const r=In(e);St();try{Oa(e)}finally{Rt(),r()}}}const fc={get(e,t){return Ae(e,"get",""),e[t]}};function dc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,fc),slots:e.slots,emit:e.emit,expose:t}}function mr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ni(Jl(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in hn)return hn[n](e)},has(t,n){return n in t||n in hn}})):e.proxy}function hc(e,t=!0){return W(e)?e.displayName||e.name:e.name||t&&e.__name}function pc(e){return W(e)&&"__vccOpts"in e}const We=(e,t)=>oa(e,t,ho);function Li(e,t,n){const o=arguments.length;return o===2?ue(t)&&!K(t)?Yn(t)?ne(e,null,[t]):ne(e,t):ne(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&Yn(n)&&(n=[n]),ne(e,t,n))}const gc="3.5.4";/**
* @vue/runtime-dom v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Go;const Yr=typeof window<"u"&&window.trustedTypes;if(Yr)try{Go=Yr.createPolicy("vue",{createHTML:e=>e})}catch{}const Fi=Go?e=>Go.createHTML(e):e=>e,bc="http://www.w3.org/2000/svg",mc="http://www.w3.org/1998/Math/MathML",ct=typeof document<"u"?document:null,qr=ct&&ct.createElement("template"),wc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const r=t==="svg"?ct.createElementNS(bc,e):t==="mathml"?ct.createElementNS(mc,e):n?ct.createElement(e,{is:n}):ct.createElement(e);return e==="select"&&o&&o.multiple!=null&&r.setAttribute("multiple",o.multiple),r},createText:e=>ct.createTextNode(e),createComment:e=>ct.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ct.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,o,r,s){const i=n?n.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{qr.innerHTML=Fi(o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e);const l=qr.content;if(o==="svg"||o==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},vc=Symbol("_vtc");function _c(e,t,n){const o=e[vc];o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Zr=Symbol("_vod"),yc=Symbol("_vsh"),xc=Symbol(""),Ec=/(^|;)\s*display\s*:/;function Sc(e,t,n){const o=e.style,r=pe(n);let s=!1;if(n&&!r){if(t)if(pe(t))for(const i of t.split(";")){const l=i.slice(0,i.indexOf(":")).trim();n[l]==null&&Vn(o,l,"")}else for(const i in t)n[i]==null&&Vn(o,i,"");for(const i in n)i==="display"&&(s=!0),Vn(o,i,n[i])}else if(r){if(t!==n){const i=o[xc];i&&(n+=";"+i),o.cssText=n,s=Ec.test(n)}}else t&&e.removeAttribute("style");Zr in e&&(e[Zr]=s?o.display:"",e[yc]&&(o.display="none"))}const Jr=/\s*!important$/;function Vn(e,t,n){if(K(n))n.forEach(o=>Vn(e,t,o));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const o=Rc(e,t);Jr.test(n)?e.setProperty(Bt(o),n.replace(Jr,""),"important"):e[o]=n}}const Qr=["Webkit","Moz","ms"],Oo={};function Rc(e,t){const n=Oo[t];if(n)return n;let o=Ye(t);if(o!=="filter"&&o in e)return Oo[t]=o;o=ro(o);for(let r=0;r<Qr.length;r++){const s=Qr[r]+o;if(s in e)return Oo[t]=s}return t}const es="http://www.w3.org/1999/xlink";function ts(e,t,n,o,r,s=Ol(t)){o&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(es,t.slice(6,t.length)):e.setAttributeNS(es,t,n):n==null||s&&!Fs(n)?e.removeAttribute(t):e.setAttribute(t,s?"":Et(n)?String(n):n)}function Tc(e,t,n,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Fi(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const i=r==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(i!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let s=!1;if(n===""||n==null){const i=typeof e[t];i==="boolean"?n=Fs(n):n==null&&i==="string"?(n="",s=!0):i==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function kc(e,t,n,o){e.addEventListener(t,n,o)}function Ac(e,t,n,o){e.removeEventListener(t,n,o)}const ns=Symbol("_vei");function Oc(e,t,n,o,r=null){const s=e[ns]||(e[ns]={}),i=s[t];if(o&&i)i.value=o;else{const[l,a]=Cc(t);if(o){const d=s[t]=Ic(o,r);kc(e,l,d,a)}else i&&(Ac(e,l,i,a),s[t]=void 0)}}const os=/(?:Once|Passive|Capture)$/;function Cc(e){let t;if(os.test(e)){t={};let o;for(;o=e.match(os);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Bt(e.slice(2)),t]}let Co=0;const Nc=Promise.resolve(),Mc=()=>Co||(Nc.then(()=>Co=0),Co=Date.now());function Ic(e,t){const n=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=n.attached)return;rt(Pc(o,n.value),t,5,[o])};return n.value=e,n.attached=Mc(),n}function Pc(e,t){if(K(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(o=>r=>!r._stopped&&o&&o(r))}else return t}const rs=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Bc=(e,t,n,o,r,s)=>{const i=r==="svg";t==="class"?_c(e,o,i):t==="style"?Sc(e,n,o):to(t)?Zo(t)||Oc(e,t,n,o,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Lc(e,t,o,i))?(Tc(e,t,o),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ts(e,t,o,i,s,t!=="value")):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),ts(e,t,o,i))};function Lc(e,t,n,o){if(o)return!!(t==="innerHTML"||t==="textContent"||t in e&&rs(t)&&W(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return rs(t)&&pe(n)?!1:!!(t in e||e._isVueCE&&(/[A-Z]/.test(t)||!pe(n)))}const Fc=Se({patchProp:Bc},wc);let ss;function Dc(){return ss||(ss=Ua(Fc))}const Hc=(...e)=>{const t=Dc().createApp(...e),{mount:n}=t;return t.mount=o=>{const r=zc(o);if(!r)return;const s=t._component;!W(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const i=n(r,!1,$c(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},t};function $c(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function zc(e){return pe(e)?document.querySelector(e):e}/*!
  * vue-router v4.4.4
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const zt=typeof document<"u";function Di(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Uc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Di(e.default)}const re=Object.assign;function No(e,t){const n={};for(const o in t){const r=t[o];n[o]=qe(r)?r.map(e):e(r)}return n}const gn=()=>{},qe=Array.isArray,Hi=/#/g,jc=/&/g,Vc=/\//g,Kc=/=/g,Gc=/\?/g,$i=/\+/g,Wc=/%5B/g,Xc=/%5D/g,zi=/%5E/g,Yc=/%60/g,Ui=/%7B/g,qc=/%7C/g,ji=/%7D/g,Zc=/%20/g;function wr(e){return encodeURI(""+e).replace(qc,"|").replace(Wc,"[").replace(Xc,"]")}function Jc(e){return wr(e).replace(Ui,"{").replace(ji,"}").replace(zi,"^")}function Wo(e){return wr(e).replace($i,"%2B").replace(Zc,"+").replace(Hi,"%23").replace(jc,"%26").replace(Yc,"`").replace(Ui,"{").replace(ji,"}").replace(zi,"^")}function Qc(e){return Wo(e).replace(Kc,"%3D")}function eu(e){return wr(e).replace(Hi,"%23").replace(Gc,"%3F")}function tu(e){return e==null?"":eu(e).replace(Vc,"%2F")}function xn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const nu=/\/$/,ou=e=>e.replace(nu,"");function Mo(e,t,n="/"){let o,r={},s="",i="";const l=t.indexOf("#");let a=t.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(o=t.slice(0,a),s=t.slice(a+1,l>-1?l:t.length),r=e(s)),l>-1&&(o=o||t.slice(0,l),i=t.slice(l,t.length)),o=lu(o??t,n),{fullPath:o+(s&&"?")+s+i,path:o,query:r,hash:xn(i)}}function ru(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function is(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function su(e,t,n){const o=t.matched.length-1,r=n.matched.length-1;return o>-1&&o===r&&tn(t.matched[o],n.matched[r])&&Vi(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function tn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Vi(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!iu(e[n],t[n]))return!1;return!0}function iu(e,t){return qe(e)?ls(e,t):qe(t)?ls(t,e):e===t}function ls(e,t){return qe(t)?e.length===t.length&&e.every((n,o)=>n===t[o]):e.length===1&&e[0]===t}function lu(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),o=e.split("/"),r=o[o.length-1];(r===".."||r===".")&&o.push("");let s=n.length-1,i,l;for(i=0;i<o.length;i++)if(l=o[i],l!==".")if(l==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+o.slice(i).join("/")}const gt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var En;(function(e){e.pop="pop",e.push="push"})(En||(En={}));var bn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(bn||(bn={}));function au(e){if(!e)if(zt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),ou(e)}const cu=/^[^#]+#/;function uu(e,t){return e.replace(cu,"#")+t}function fu(e,t){const n=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:t.behavior,left:o.left-n.left-(t.left||0),top:o.top-n.top-(t.top||0)}}const po=()=>({left:window.scrollX,top:window.scrollY});function du(e){let t;if("el"in e){const n=e.el,o=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?o?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=fu(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function as(e,t){return(history.state?history.state.position-t:-1)+e}const Xo=new Map;function hu(e,t){Xo.set(e,t)}function pu(e){const t=Xo.get(e);return Xo.delete(e),t}let gu=()=>location.protocol+"//"+location.host;function Ki(e,t){const{pathname:n,search:o,hash:r}=t,s=e.indexOf("#");if(s>-1){let l=r.includes(e.slice(s))?e.slice(s).length:1,a=r.slice(l);return a[0]!=="/"&&(a="/"+a),is(a,"")}return is(n,e)+o+r}function bu(e,t,n,o){let r=[],s=[],i=null;const l=({state:p})=>{const b=Ki(e,location),B=n.value,I=t.value;let V=0;if(p){if(n.value=b,t.value=p,i&&i===B){i=null;return}V=I?p.position-I.position:0}else o(b);r.forEach($=>{$(n.value,B,{delta:V,type:En.pop,direction:V?V>0?bn.forward:bn.back:bn.unknown})})};function a(){i=n.value}function d(p){r.push(p);const b=()=>{const B=r.indexOf(p);B>-1&&r.splice(B,1)};return s.push(b),b}function u(){const{history:p}=window;p.state&&p.replaceState(re({},p.state,{scroll:po()}),"")}function h(){for(const p of s)p();s=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:d,destroy:h}}function cs(e,t,n,o=!1,r=!1){return{back:e,current:t,forward:n,replaced:o,position:window.history.length,scroll:r?po():null}}function mu(e){const{history:t,location:n}=window,o={value:Ki(e,n)},r={value:t.state};r.value||s(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(a,d,u){const h=e.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?e:e.slice(h))+a:gu()+e+a;try{t[u?"replaceState":"pushState"](d,"",p),r.value=d}catch(b){console.error(b),n[u?"replace":"assign"](p)}}function i(a,d){const u=re({},t.state,cs(r.value.back,a,r.value.forward,!0),d,{position:r.value.position});s(a,u,!0),o.value=a}function l(a,d){const u=re({},r.value,t.state,{forward:a,scroll:po()});s(u.current,u,!0);const h=re({},cs(o.value,a,null),{position:u.position+1},d);s(a,h,!1),o.value=a}return{location:o,state:r,push:l,replace:i}}function wu(e){e=au(e);const t=mu(e),n=bu(e,t.state,t.location,t.replace);function o(s,i=!0){i||n.pauseListeners(),history.go(s)}const r=re({location:"",base:e,go:o,createHref:uu.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function vu(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),wu(e)}function _u(e){return typeof e=="string"||e&&typeof e=="object"}function Gi(e){return typeof e=="string"||typeof e=="symbol"}const Wi=Symbol("");var us;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(us||(us={}));function nn(e,t){return re(new Error,{type:e,[Wi]:!0},t)}function at(e,t){return e instanceof Error&&Wi in e&&(t==null||!!(e.type&t))}const fs="[^/]+?",yu={sensitive:!1,strict:!1,start:!0,end:!0},xu=/[.+*?^${}()[\]/\\]/g;function Eu(e,t){const n=re({},yu,t),o=[];let r=n.start?"^":"";const s=[];for(const d of e){const u=d.length?[]:[90];n.strict&&!d.length&&(r+="/");for(let h=0;h<d.length;h++){const p=d[h];let b=40+(n.sensitive?.25:0);if(p.type===0)h||(r+="/"),r+=p.value.replace(xu,"\\$&"),b+=40;else if(p.type===1){const{value:B,repeatable:I,optional:V,regexp:$}=p;s.push({name:B,repeatable:I,optional:V});const L=$||fs;if(L!==fs){b+=10;try{new RegExp(`(${L})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${B}" (${L}): `+P.message)}}let H=I?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;h||(H=V&&d.length<2?`(?:/${H})`:"/"+H),V&&(H+="?"),r+=H,b+=20,V&&(b+=-8),I&&(b+=-20),L===".*"&&(b+=-50)}u.push(b)}o.push(u)}if(n.strict&&n.end){const d=o.length-1;o[d][o[d].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const i=new RegExp(r,n.sensitive?"":"i");function l(d){const u=d.match(i),h={};if(!u)return null;for(let p=1;p<u.length;p++){const b=u[p]||"",B=s[p-1];h[B.name]=b&&B.repeatable?b.split("/"):b}return h}function a(d){let u="",h=!1;for(const p of e){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const b of p)if(b.type===0)u+=b.value;else if(b.type===1){const{value:B,repeatable:I,optional:V}=b,$=B in d?d[B]:"";if(qe($)&&!I)throw new Error(`Provided param "${B}" is an array but it is not repeatable (* or + modifiers)`);const L=qe($)?$.join("/"):$;if(!L)if(V)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${B}"`);u+=L}}return u||"/"}return{re:i,score:o,keys:s,parse:l,stringify:a}}function Su(e,t){let n=0;for(;n<e.length&&n<t.length;){const o=t[n]-e[n];if(o)return o;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Xi(e,t){let n=0;const o=e.score,r=t.score;for(;n<o.length&&n<r.length;){const s=Su(o[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-o.length)===1){if(ds(o))return 1;if(ds(r))return-1}return r.length-o.length}function ds(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Ru={type:0,value:""},Tu=/[a-zA-Z0-9_]/;function ku(e){if(!e)return[[]];if(e==="/")return[[Ru]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(b){throw new Error(`ERR (${n})/"${d}": ${b}`)}let n=0,o=n;const r=[];let s;function i(){s&&r.push(s),s=[]}let l=0,a,d="",u="";function h(){d&&(n===0?s.push({type:0,value:d}):n===1||n===2||n===3?(s.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:d,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),d="")}function p(){d+=a}for(;l<e.length;){if(a=e[l++],a==="\\"&&n!==2){o=n,n=4;continue}switch(n){case 0:a==="/"?(d&&h(),i()):a===":"?(h(),n=1):p();break;case 4:p(),n=o;break;case 1:a==="("?n=2:Tu.test(a)?p():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${d}"`),h(),i(),r}function Au(e,t,n){const o=Eu(ku(e.path),n),r=re(o,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Ou(e,t){const n=[],o=new Map;t=gs({strict:!1,end:!0,sensitive:!1},t);function r(h){return o.get(h)}function s(h,p,b){const B=!b,I=Cu(h);I.aliasOf=b&&b.record;const V=gs(t,h),$=[I];if("alias"in h){const P=typeof h.alias=="string"?[h.alias]:h.alias;for(const Z of P)$.push(re({},I,{components:b?b.record.components:I.components,path:Z,aliasOf:b?b.record:I}))}let L,H;for(const P of $){const{path:Z}=P;if(p&&Z[0]!=="/"){const ae=p.record.path,se=ae[ae.length-1]==="/"?"":"/";P.path=p.record.path+(Z&&se+Z)}if(L=Au(P,p,V),b?b.alias.push(L):(H=H||L,H!==L&&H.alias.push(L),B&&h.name&&!ps(L)&&i(h.name)),Yi(L)&&a(L),I.children){const ae=I.children;for(let se=0;se<ae.length;se++)s(ae[se],L,b&&b.children[se])}b=b||L}return H?()=>{i(H)}:gn}function i(h){if(Gi(h)){const p=o.get(h);p&&(o.delete(h),n.splice(n.indexOf(p),1),p.children.forEach(i),p.alias.forEach(i))}else{const p=n.indexOf(h);p>-1&&(n.splice(p,1),h.record.name&&o.delete(h.record.name),h.children.forEach(i),h.alias.forEach(i))}}function l(){return n}function a(h){const p=Iu(h,n);n.splice(p,0,h),h.record.name&&!ps(h)&&o.set(h.record.name,h)}function d(h,p){let b,B={},I,V;if("name"in h&&h.name){if(b=o.get(h.name),!b)throw nn(1,{location:h});V=b.record.name,B=re(hs(p.params,b.keys.filter(H=>!H.optional).concat(b.parent?b.parent.keys.filter(H=>H.optional):[]).map(H=>H.name)),h.params&&hs(h.params,b.keys.map(H=>H.name))),I=b.stringify(B)}else if(h.path!=null)I=h.path,b=n.find(H=>H.re.test(I)),b&&(B=b.parse(I),V=b.record.name);else{if(b=p.name?o.get(p.name):n.find(H=>H.re.test(p.path)),!b)throw nn(1,{location:h,currentLocation:p});V=b.record.name,B=re({},p.params,h.params),I=b.stringify(B)}const $=[];let L=b;for(;L;)$.unshift(L.record),L=L.parent;return{name:V,path:I,params:B,matched:$,meta:Mu($)}}e.forEach(h=>s(h));function u(){n.length=0,o.clear()}return{addRoute:s,resolve:d,removeRoute:i,clearRoutes:u,getRoutes:l,getRecordMatcher:r}}function hs(e,t){const n={};for(const o of t)o in e&&(n[o]=e[o]);return n}function Cu(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Nu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},mods:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Nu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const o in e.components)t[o]=typeof n=="object"?n[o]:n;return t}function ps(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Mu(e){return e.reduce((t,n)=>re(t,n.meta),{})}function gs(e,t){const n={};for(const o in e)n[o]=o in t?t[o]:e[o];return n}function Iu(e,t){let n=0,o=t.length;for(;n!==o;){const s=n+o>>1;Xi(e,t[s])<0?o=s:n=s+1}const r=Pu(e);return r&&(o=t.lastIndexOf(r,o-1)),o}function Pu(e){let t=e;for(;t=t.parent;)if(Yi(t)&&Xi(e,t)===0)return t}function Yi({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Bu(e){const t={};if(e===""||e==="?")return t;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<o.length;++r){const s=o[r].replace($i," "),i=s.indexOf("="),l=xn(i<0?s:s.slice(0,i)),a=i<0?null:xn(s.slice(i+1));if(l in t){let d=t[l];qe(d)||(d=t[l]=[d]),d.push(a)}else t[l]=a}return t}function bs(e){let t="";for(let n in e){const o=e[n];if(n=Qc(n),o==null){o!==void 0&&(t+=(t.length?"&":"")+n);continue}(qe(o)?o.map(s=>s&&Wo(s)):[o&&Wo(o)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function Lu(e){const t={};for(const n in e){const o=e[n];o!==void 0&&(t[n]=qe(o)?o.map(r=>r==null?null:""+r):o==null?o:""+o)}return t}const Fu=Symbol(""),ms=Symbol(""),vr=Symbol(""),_r=Symbol(""),Yo=Symbol("");function cn(){let e=[];function t(o){return e.push(o),()=>{const r=e.indexOf(o);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function vt(e,t,n,o,r,s=i=>i()){const i=o&&(o.enterCallbacks[r]=o.enterCallbacks[r]||[]);return()=>new Promise((l,a)=>{const d=p=>{p===!1?a(nn(4,{from:n,to:t})):p instanceof Error?a(p):_u(p)?a(nn(2,{from:t,to:p})):(i&&o.enterCallbacks[r]===i&&typeof p=="function"&&i.push(p),l())},u=s(()=>e.call(o&&o.instances[r],t,n,d));let h=Promise.resolve(u);e.length<3&&(h=h.then(d)),h.catch(p=>a(p))})}function Io(e,t,n,o,r=s=>s()){const s=[];for(const i of e)for(const l in i.components){let a=i.components[l];if(!(t!=="beforeRouteEnter"&&!i.instances[l]))if(Di(a)){const u=(a.__vccOpts||a)[t];u&&s.push(vt(u,n,o,i,l,r))}else{let d=a();s.push(()=>d.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${l}" at "${i.path}"`);const h=Uc(u)?u.default:u;i.mods[l]=u,i.components[l]=h;const b=(h.__vccOpts||h)[t];return b&&vt(b,n,o,i,l,r)()}))}}return s}function ws(e){const t=ot(vr),n=ot(_r),o=We(()=>{const a=ze(e.to);return t.resolve(a)}),r=We(()=>{const{matched:a}=o.value,{length:d}=a,u=a[d-1],h=n.matched;if(!u||!h.length)return-1;const p=h.findIndex(tn.bind(null,u));if(p>-1)return p;const b=vs(a[d-2]);return d>1&&vs(u)===b&&h[h.length-1].path!==b?h.findIndex(tn.bind(null,a[d-2])):p}),s=We(()=>r.value>-1&&$u(n.params,o.value.params)),i=We(()=>r.value>-1&&r.value===n.matched.length-1&&Vi(n.params,o.value.params));function l(a={}){return Hu(a)?t[ze(e.replace)?"replace":"push"](ze(e.to)).catch(gn):Promise.resolve()}return{route:o,href:We(()=>o.value.href),isActive:s,isExactActive:i,navigate:l}}const Du=ci({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ws,setup(e,{slots:t}){const n=lo(ws(e)),{options:o}=ot(vr),r=We(()=>({[_s(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[_s(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:Li("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),qi=Du;function Hu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function $u(e,t){for(const n in t){const o=t[n],r=e[n];if(typeof o=="string"){if(o!==r)return!1}else if(!qe(r)||r.length!==o.length||o.some((s,i)=>s!==r[i]))return!1}return!0}function vs(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const _s=(e,t,n)=>e??t??n,zu=ci({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const o=ot(Yo),r=We(()=>e.route||o.value),s=ot(ms,0),i=We(()=>{let d=ze(s);const{matched:u}=r.value;let h;for(;(h=u[d])&&!h.components;)d++;return d}),l=We(()=>r.value.matched[i.value]);Un(ms,We(()=>i.value+1)),Un(Fu,l),Un(Yo,r);const a=ur();return Xt(()=>[a.value,l.value,e.name],([d,u,h],[p,b,B])=>{u&&(u.instances[h]=d,b&&b!==u&&d&&d===p&&(u.leaveGuards.size||(u.leaveGuards=b.leaveGuards),u.updateGuards.size||(u.updateGuards=b.updateGuards))),d&&u&&(!b||!tn(u,b)||!p)&&(u.enterCallbacks[h]||[]).forEach(I=>I(d))},{flush:"post"}),()=>{const d=r.value,u=e.name,h=l.value,p=h&&h.components[u];if(!p)return ys(n.default,{Component:p,route:d});const b=h.props[u],B=b?b===!0?d.params:typeof b=="function"?b(d):b:null,V=Li(p,re({},B,t,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(h.instances[u]=null)},ref:a}));return ys(n.default,{Component:V,route:d})||V}}});function ys(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Zi=zu;function Uu(e){const t=Ou(e.routes,e),n=e.parseQuery||Bu,o=e.stringifyQuery||bs,r=e.history,s=cn(),i=cn(),l=cn(),a=Ql(gt);let d=gt;zt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=No.bind(null,y=>""+y),h=No.bind(null,tu),p=No.bind(null,xn);function b(y,N){let C,F;return Gi(y)?(C=t.getRecordMatcher(y),F=N):F=y,t.addRoute(F,C)}function B(y){const N=t.getRecordMatcher(y);N&&t.removeRoute(N)}function I(){return t.getRoutes().map(y=>y.record)}function V(y){return!!t.getRecordMatcher(y)}function $(y,N){if(N=re({},N||a.value),typeof y=="string"){const f=Mo(n,y,N.path),g=t.resolve({path:f.path},N),x=r.createHref(f.fullPath);return re(f,g,{params:p(g.params),hash:xn(f.hash),redirectedFrom:void 0,href:x})}let C;if(y.path!=null)C=re({},y,{path:Mo(n,y.path,N.path).path});else{const f=re({},y.params);for(const g in f)f[g]==null&&delete f[g];C=re({},y,{params:h(f)}),N.params=h(N.params)}const F=t.resolve(C,N),Q=y.hash||"";F.params=u(p(F.params));const ce=ru(o,re({},y,{hash:Jc(Q),path:F.path})),c=r.createHref(ce);return re({fullPath:ce,hash:Q,query:o===bs?Lu(y.query):y.query||{}},F,{redirectedFrom:void 0,href:c})}function L(y){return typeof y=="string"?Mo(n,y,a.value.path):re({},y)}function H(y,N){if(d!==y)return nn(8,{from:N,to:y})}function P(y){return se(y)}function Z(y){return P(re(L(y),{replace:!0}))}function ae(y){const N=y.matched[y.matched.length-1];if(N&&N.redirect){const{redirect:C}=N;let F=typeof C=="function"?C(y):C;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=L(F):{path:F},F.params={}),re({query:y.query,hash:y.hash,params:F.path!=null?{}:y.params},F)}}function se(y,N){const C=d=$(y),F=a.value,Q=y.state,ce=y.force,c=y.replace===!0,f=ae(C);if(f)return se(re(L(f),{state:typeof f=="object"?re({},Q,f.state):Q,force:ce,replace:c}),N||C);const g=C;g.redirectedFrom=N;let x;return!ce&&su(o,F,C)&&(x=nn(16,{to:g,from:F}),q(F,F,!0,!1)),(x?Promise.resolve(x):Ce(g,F)).catch(v=>at(v)?at(v,2)?v:X(v):T(v,g,F)).then(v=>{if(v){if(at(v,2))return se(re({replace:c},L(v.to),{state:typeof v.to=="object"?re({},Q,v.to.state):Q,force:ce}),N||g)}else v=Ve(g,F,!0,c,Q);return Le(g,F,v),v})}function Oe(y,N){const C=H(y,N);return C?Promise.reject(C):Promise.resolve()}function be(y){const N=Ke.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(y):y()}function Ce(y,N){let C;const[F,Q,ce]=ju(y,N);C=Io(F.reverse(),"beforeRouteLeave",y,N);for(const f of F)f.leaveGuards.forEach(g=>{C.push(vt(g,y,N))});const c=Oe.bind(null,y,N);return C.push(c),de(C).then(()=>{C=[];for(const f of s.list())C.push(vt(f,y,N));return C.push(c),de(C)}).then(()=>{C=Io(Q,"beforeRouteUpdate",y,N);for(const f of Q)f.updateGuards.forEach(g=>{C.push(vt(g,y,N))});return C.push(c),de(C)}).then(()=>{C=[];for(const f of ce)if(f.beforeEnter)if(qe(f.beforeEnter))for(const g of f.beforeEnter)C.push(vt(g,y,N));else C.push(vt(f.beforeEnter,y,N));return C.push(c),de(C)}).then(()=>(y.matched.forEach(f=>f.enterCallbacks={}),C=Io(ce,"beforeRouteEnter",y,N,be),C.push(c),de(C))).then(()=>{C=[];for(const f of i.list())C.push(vt(f,y,N));return C.push(c),de(C)}).catch(f=>at(f,8)?f:Promise.reject(f))}function Le(y,N,C){l.list().forEach(F=>be(()=>F(y,N,C)))}function Ve(y,N,C,F,Q){const ce=H(y,N);if(ce)return ce;const c=N===gt,f=zt?history.state:{};C&&(F||c?r.replace(y.fullPath,re({scroll:c&&f&&f.scroll},Q)):r.push(y.fullPath,Q)),a.value=y,q(y,N,C,c),X()}let Be;function it(){Be||(Be=r.listen((y,N,C)=>{if(!ve.listening)return;const F=$(y),Q=ae(F);if(Q){se(re(Q,{replace:!0}),F).catch(gn);return}d=F;const ce=a.value;zt&&hu(as(ce.fullPath,C.delta),po()),Ce(F,ce).catch(c=>at(c,12)?c:at(c,2)?(se(c.to,F).then(f=>{at(f,20)&&!C.delta&&C.type===En.pop&&r.go(-1,!1)}).catch(gn),Promise.reject()):(C.delta&&r.go(-C.delta,!1),T(c,F,ce))).then(c=>{c=c||Ve(F,ce,!1),c&&(C.delta&&!at(c,8)?r.go(-C.delta,!1):C.type===En.pop&&at(c,20)&&r.go(-1,!1)),Le(F,ce,c)}).catch(gn)}))}let Fe=cn(),fe=cn(),w;function T(y,N,C){X(y);const F=fe.list();return F.length?F.forEach(Q=>Q(y,N,C)):console.error(y),Promise.reject(y)}function U(){return w&&a.value!==gt?Promise.resolve():new Promise((y,N)=>{Fe.add([y,N])})}function X(y){return w||(w=!y,it(),Fe.list().forEach(([N,C])=>y?C(y):N()),Fe.reset()),y}function q(y,N,C,F){const{scrollBehavior:Q}=e;if(!zt||!Q)return Promise.resolve();const ce=!C&&pu(as(y.fullPath,0))||(F||!C)&&history.state&&history.state.scroll||null;return ri().then(()=>Q(y,N,ce)).then(c=>c&&du(c)).catch(c=>T(c,y,N))}const ee=y=>r.go(y);let we;const Ke=new Set,ve={currentRoute:a,listening:!0,addRoute:b,removeRoute:B,clearRoutes:t.clearRoutes,hasRoute:V,getRoutes:I,resolve:$,options:e,push:P,replace:Z,go:ee,back:()=>ee(-1),forward:()=>ee(1),beforeEach:s.add,beforeResolve:i.add,afterEach:l.add,onError:fe.add,isReady:U,install(y){const N=this;y.component("RouterLink",qi),y.component("RouterView",Zi),y.config.globalProperties.$router=N,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>ze(a)}),zt&&!we&&a.value===gt&&(we=!0,P(r.location).catch(Q=>{}));const C={};for(const Q in gt)Object.defineProperty(C,Q,{get:()=>a.value[Q],enumerable:!0});y.provide(vr,N),y.provide(_r,Qs(C)),y.provide(Yo,a);const F=y.unmount;Ke.add(y),y.unmount=function(){Ke.delete(y),Ke.size<1&&(d=gt,Be&&Be(),Be=null,a.value=gt,we=!1,w=!1),F()}}};function de(y){return y.reduce((N,C)=>N.then(()=>be(C)),Promise.resolve())}return ve}function ju(e,t){const n=[],o=[],r=[],s=Math.max(t.matched.length,e.matched.length);for(let i=0;i<s;i++){const l=t.matched[i];l&&(e.matched.find(d=>tn(d,l))?o.push(l):n.push(l));const a=e.matched[i];a&&(t.matched.find(d=>tn(d,a))||r.push(a))}return[n,o,r]}function Ji(e){return ot(_r)}const Vu="/ea-effects/favicon.ico";function Ku(e,t){const n=document.createElement("link");n.href=t,n.rel="stylesheet",e.appendChild(n)}class st extends HTMLElement{constructor(){super(),this.isProduction=!1,this.isProduction=!0}toggleAttribute(t,n,o){n?(this.setAttribute(t,n),o&&this.dom.classList.add(o)):(this.hasAttribute(t)&&this.removeAttribute(t),o&&this.dom.classList.remove(o))}toggleAttr(t,n){n?this.setAttribute(t,n):this.removeAttribute(t)}getAttrBoolean(t){const n=this.getAttribute(t);return n==="true"||n===""}getAttrNumber(t){const n=this.getAttribute(t);return n?Number(n):0}build(t,n){if(this.isProduction){const o=document.createElement("style");o.innerHTML=n,this.shadowRoot.appendChild(o)}else Ku(t,new URL(this.nodeName.toLowerCase()+"/index.css",import.meta.url).href)}}var Ct,Tn,Jn,Qi;class Gu extends HTMLElement{constructor(){super();_e(this,Jn);_e(this,Ct);_e(this,Tn);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <link id="fontello-stylesheet" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easy-component-ui/components/ea-icon/css/fontello.css">
            <i class="ea-icon_wrap" part="container">
                <slot></slot>
            </i>
        `,Re(this,Ct,n.querySelector(".ea-icon_wrap")),Re(this,Tn,n.querySelector("#fontello-stylesheet")),document.addEventListener("configChanged",o=>{wo(this,Jn,Qi).call(this,o.detail)})}get icon(){return this.getAttribute("icon")||""}set icon(n){this.setAttribute("icon",n),Y(this,Ct).className=`${n}`}get color(){return this.getAttribute("color")||""}set color(n){this.setAttribute("color",n),Y(this,Ct).style.color=n}get size(){return this.getAttribute("size")||""}set size(n){this.setAttribute("size",n),Y(this,Ct).style.fontSize=`${n}px`}connectedCallback(){this.icon=this.icon,this.color=this.color,this.size=this.size,document.dispatchEvent(new CustomEvent("ea-icon-ready"))}}Ct=new WeakMap,Tn=new WeakMap,Jn=new WeakSet,Qi=function(n){Y(this,Tn).href=n.fontelloCSS};window.customElements.get("ea-icon")||window.customElements.define("ea-icon",Gu);const Wu=`
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
        `,Re(this,Ge,n.querySelector(".ea-menu-item_wrap")),this.build(n,Wu)}get actived(){return this.getAttrBoolean("actived")}set actived(n){this.setAttribute("actived",n),this.isSubItem?Y(this,Ge).classList.toggle("is-sub-actived",n):Y(this,Ge).classList.toggle("is-actived",n)}get isSubItem(){return this.getAttrBoolean("is-sub-item")}set isSubItem(n){n&&this.setAttribute("is-sub-item",n)}get backgroundColor(){return this.getAttribute("background-color")||"#fff"}set backgroundColor(n){this.setAttribute("background-color",n),Y(this,Ge).style.setProperty("--normal-bgc",n)}get textColor(){return this.getAttribute("text-color")||"#303133"}set textColor(n){this.setAttribute("text-color",n),Y(this,Ge).style.setProperty("--normal-text-color",n)}get activeTextColor(){return this.getAttribute("active-text-color")||"#409eff"}set activeTextColor(n){this.setAttribute("active-text-color",n),Y(this,Ge).style.setProperty("--actived-text-color",n)}get disabled(){return this.getAttrBoolean("disabled")}set disabled(n){this.setAttribute("disabled",n),Y(this,Ge).classList.toggle("is-disabled",n)}connectedCallback(){this.actived=this.actived,this.disabled=this.disabled,Y(this,Ge).addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("item-selected",{detail:{index:this.index,title:this.textContent}}))})}}Ge=new WeakMap;customElements.get("ea-menu-item")||customElements.define("ea-menu-item",Xu);const Pn=(e,t)=>{const n=e.__vccOpts||e;for(const[o,r]of t)n[o]=r;return n},Yu=["actived"],qu={__name:"MyRoute",props:{to:String},setup(e){const t=Ji(),n={activeRoute:ur(t.path)||""};return Xt(t,o=>{n.activeRoute.value=o.path}),(o,r)=>(ge(),xe("ea-menu-item",{class:"rl-item",actived:n.activeRoute.value===e.to},[ne(ze(qi),{to:e.to,activeClass:"active"},{default:mt(()=>[ka(o.$slots,"default",{},void 0,!0)]),_:3},8,["to"])],8,Yu))}},Dt=Pn(qu,[["__scopeId","data-v-62147355"]]),Zu={__name:"Router",setup(e){return(t,n)=>(ge(),xe(me,null,[ne(Dt,{to:"/2DTransitions"},{default:mt(()=>n[0]||(n[0]=[ut("Hover | 2D 过渡动画")])),_:1}),ne(Dt,{to:"/backgroundTransitions"},{default:mt(()=>n[1]||(n[1]=[ut(" Hover | 背景（background）过渡动画 ")])),_:1}),ne(Dt,{to:"/borderTransitions"},{default:mt(()=>n[2]||(n[2]=[ut("Hover | 边框（border）过渡动画")])),_:1}),ne(Dt,{to:"/shadowAndGlowTransitions"},{default:mt(()=>n[3]||(n[3]=[ut(" Hover | 阴影（box-shadow）过渡动画 ")])),_:1}),ne(Dt,{to:"/speechBubbles"},{default:mt(()=>n[4]||(n[4]=[ut("Hover | 气泡框过渡动画")])),_:1}),ne(Dt,{to:"/curls"},{default:mt(()=>n[5]||(n[5]=[ut("Hover | 折角过渡动画")])),_:1})],64))}},Ju=`
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
        `,Re(this,kn,n.querySelector(".ea-container_wrap")),this.build(n,Ju)}get CONTAINER_TYPE(){return["ea-header","ea-main","ea-footer","ea-container","ea-aside"]}get direction(){return["horizontal","vertical"].includes(this.getAttribute("direction"))||"horizontal"}set direction(n){this.setAttribute("direction",n),Y(this,kn).classList.toggle("is-vertical",n==="horizontal")}connectedCallback(){const n=Array.from(this.children);wo(this,Qn,el).call(this,n)}}kn=new WeakMap,Qn=new WeakSet,el=function(n){const o=n.map(r=>r.tagName.toLowerCase());n.forEach(r=>{this.CONTAINER_TYPE.includes(r.tagName.toLowerCase())||r.remove(),r.tagName.toLowerCase()==="ea-container"&&(r.style.flex="1")}),o.includes("ea-header")||o.includes("ea-footer")?this.direction="horizontal":this.direction=this.direction};customElements.get("ea-container")||customElements.define("ea-container",Qu);const ef=`
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
        `,Re(this,An,n.querySelector(".ea-aside_wrap")),this.build(n,ef)}get width(){return this.getAttrNumber("width")||200}set width(n){this.setAttribute("width",n),Y(this,An).style.width=`${n}px`}connectedCallback(){this.width=this.width}}An=new WeakMap;customElements.get("ea-aside")||customElements.define("ea-aside",tf);const tl=(e,t=0)=>{let n=setTimeout(()=>{clearTimeout(n),n=null,e()},t)},Po=e=>{e.actived=!1};function nf(e,t,n){e.forEach(Po),t.forEach(Po),n.forEach(Po)}function of(e,t,n){e.forEach((o,r)=>{o.itemIndex=r,o.addEventListener("item-selected",s=>{const i=s.detail.title;nf(e,t,n),o.actived=!0,this.dispatchEvent(new CustomEvent("select",{detail:{index:r,title:i}}))})})}const rf=`
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
`;var et,eo,On;class lf extends st{constructor(){super();_e(this,et);_e(this,eo);_e(this,On);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <div class="ea-submenu_wrap" part="container">
                <div class="ea-submenu_title_wrap" part="title-wrap">
                    <slot name="title"></slot>
                    <ea-icon class="ea-submenu_dropdown_icon" icon="icon-angle-down" part="dropdown-icon"></ea-icon>
                </div>
                <div class="ea-submenu_items_wrap" part="dropdown-wrap">
                    <slot></slot>
                </div>
            </div>
        `,Re(this,et,n.querySelector(".ea-submenu_wrap")),Re(this,eo,n.querySelector(".ea-submenu_title_wrap")),Re(this,On,n.querySelector(".ea-submenu_items_wrap")),this.build(n,sf)}get actived(){return this.getAttrBoolean("actived")}set actived(n){this.setAttribute("actived",n),Y(this,et).classList.toggle("is-actived",n)}get backgroundColor(){return this.getAttribute("background-color")||"#fff"}set backgroundColor(n){this.setAttribute("background-color",n),Y(this,et).style.setProperty("--normal-bgc",n)}get textColor(){return this.getAttribute("text-color")||"#303133"}set textColor(n){this.setAttribute("text-color",n),Y(this,et).style.setProperty("--normal-text-color",n)}get activeTextColor(){return this.getAttribute("active-text-color")||"#409eff"}set activeTextColor(n){this.setAttribute("active-text-color",n),Y(this,et).style.setProperty("--actived-text-color",n)}get disabled(){return this.getAttrBoolean("disabled")}set disabled(n){this.setAttribute("disabled",n),Y(this,et).classList.toggle("is-disabled",n)}get mode(){return this.getAttribute("mode")||"horizontal"}set mode(n){this.setAttribute("mode",n),Y(this,et).classList.toggle("is-vertical",n==="vertical")}connectedCallback(){this.disabled=this.disabled,this.querySelectorAll("ea-menu-item").forEach((o,r)=>{o.isSubItem=!0,o.addEventListener("item-selected",s=>{this.actived=!0})}),tl(()=>{Y(this,On).style.display="block"},20)}}et=new WeakMap,eo=new WeakMap,On=new WeakMap;customElements.get("ea-submenu")||customElements.define("ea-submenu",lf);const af=`
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
        `,Re(this,ft,n.querySelector(".ea-menu-item-group_wrap")),Re(this,Cn,n.querySelector(".ea-submenu_title_wrap")),Re(this,Yt,n.querySelector(".ea-submenu_items_wrap")),this.build(n,af)}get actived(){return this.getAttrBoolean("actived")}set actived(n){this.setAttribute("actived",n),Y(this,ft).classList.toggle("is-actived",n)}get backgroundColor(){return this.getAttribute("background-color")||"#fff"}set backgroundColor(n){this.setAttribute("background-color",n),Y(this,ft).style.setProperty("--normal-bgc",n)}get textColor(){return this.getAttribute("text-color")||"#303133"}set textColor(n){this.setAttribute("text-color",n),Y(this,ft).style.setProperty("--normal-text-color",n)}get activeTextColor(){return this.getAttribute("active-text-color")||"#409eff"}set activeTextColor(n){this.setAttribute("active-text-color",n),Y(this,ft).style.setProperty("--actived-text-color",n)}get collapse(){return this.getAttrBoolean("collapse")||!1}set collapse(n){this.setAttribute("collapse",n),Y(this,Yt).style.height=n?Y(this,Yt).scrollHeight+"px":"0",Y(this,ft).classList.toggle("is-open",n)}connectedCallback(){this.style.width="100%",this.querySelectorAll("ea-menu-item").forEach(o=>{o.isSubItem=!0,o.addEventListener("item-selected",r=>{tl(()=>{this.actived=!0},20)})}),Y(this,Cn).addEventListener("click",o=>{this.collapse=!this.collapse})}}ft=new WeakMap,Cn=new WeakMap,Yt=new WeakMap;customElements.get("ea-menu-item-group")||customElements.define("ea-menu-item-group",cf);var qt;class uf extends st{constructor(){super();_e(this,qt);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <div class="ea-menu_wrap" part="container">
                <slot></slot>
            </div>
        `,Re(this,qt,n.querySelector(".ea-menu_wrap")),this.build(n,rf)}get mode(){return this.getAttribute("mode")||"vertical"}set mode(n){this.setAttribute("mode",n),Y(this,qt).classList.toggle("is-vertical",n==="vertical"),this.querySelectorAll("ea-submenu").forEach(o=>{o.mode=n})}get backgroundColor(){return this.getAttribute("background-color")||"#fff"}set backgroundColor(n){this.setAttribute("background-color",n),Y(this,qt).style.backgroundColor=n}get textColor(){return this.getAttribute("text-color")||"#303133"}set textColor(n){this.setAttribute("text-color",n)}get activeTextColor(){return this.getAttribute("active-text-color")||"#409eff"}set activeTextColor(n){this.setAttribute("active-text-color",n)}get collapse(){return this.getAttrBoolean("collapse")}set collapse(n){this.toggleAttr("collapse",n),this.querySelectorAll("ea-menu-item-group").forEach(o=>{this.mode==="vertical"&&(o.collapse=!n)})}connectedCallback(){this.mode=this.mode,this.collapse=!0,this.backgroundColor=this.backgroundColor,this.textColor=this.textColor,this.activeTextColor=this.activeTextColor;const n=this.querySelectorAll("ea-menu-item"),o=this.querySelectorAll("ea-submenu"),r=this.querySelectorAll("ea-menu-item-group");of.call(this,n,o,r);const s=(i,l)=>{i.backgroundColor=this.backgroundColor,i.textColor=this.textColor,i.activeTextColor=this.activeTextColor};n.forEach(s),o.forEach(s),r.forEach(s)}}qt=new WeakMap;customElements.get("ea-menu")||customElements.define("ea-menu",uf);const ff={width:"200"},df={mode:"vertical"},hf={__name:"MyAside",setup(e){return(t,n)=>(ge(),xe("ea-aside",ff,[n[0]||(n[0]=Ee("ea-header",{class:"aside-header"},[Ee("div",{class:"logo"},[Ee("img",{src:Vu,alt:""})]),Ee("b",{class:"aside-title"},"ea-effects")],-1)),Ee("ea-menu",df,[ne(Zu)])]))}},pf=Pn(hf,[["__scopeId","data-v-56b791c4"]]),gf=`
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
        `,this.build(t,vf)}}customElements.get("ea-main")||customElements.define("ea-main",_f);const yf={__name:"App",setup(e){let t=ur(!1);const n=Ji();return Xt(n,()=>{t.value=!1}),(o,r)=>(ge(),xe("ea-container",{class:It(`container ${ze(t)?"open":""}`),direction:"vertical"},[ne(pf,{class:It("my-aside")}),Ee("ea-container",null,[Ee("ea-header",null,[Ee("ea-icon",{icon:"icon-th-list",class:"toggle-aside-btn",onClick:r[0]||(r[0]=s=>ye(t)?t.value=!ze(t):t=!ze(t))}),Ee("section",{class:"mask",onClick:r[1]||(r[1]=s=>ye(t)?t.value=!ze(t):t=!ze(t))})]),Ee("ea-main",null,[ne(ze(Zi))])])],2))}},xf=Pn(yf,[["__scopeId","data-v-d19ae1c7"]]);function Ef(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function nl(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(t=>{const n=e[t],o=typeof n;(o==="object"||o==="function")&&!Object.isFrozen(n)&&nl(n)}),e}class xs{constructor(t){t.data===void 0&&(t.data={}),this.data=t.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function ol(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function yt(e,...t){const n=Object.create(null);for(const o in e)n[o]=e[o];return t.forEach(function(o){for(const r in o)n[r]=o[r]}),n}const Sf="</span>",Es=e=>!!e.scope,Rf=(e,{prefix:t})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const n=e.split(".");return[`${t}${n.shift()}`,...n.map((o,r)=>`${o}${"_".repeat(r+1)}`)].join(" ")}return`${t}${e}`};class Tf{constructor(t,n){this.buffer="",this.classPrefix=n.classPrefix,t.walk(this)}addText(t){this.buffer+=ol(t)}openNode(t){if(!Es(t))return;const n=Rf(t.scope,{prefix:this.classPrefix});this.span(n)}closeNode(t){Es(t)&&(this.buffer+=Sf)}value(){return this.buffer}span(t){this.buffer+=`<span class="${t}">`}}const Ss=(e={})=>{const t={children:[]};return Object.assign(t,e),t};class yr{constructor(){this.rootNode=Ss(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(t){this.top.children.push(t)}openNode(t){const n=Ss({scope:t});this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(t){return this.constructor._walk(t,this.rootNode)}static _walk(t,n){return typeof n=="string"?t.addText(n):n.children&&(t.openNode(n),n.children.forEach(o=>this._walk(t,o)),t.closeNode(n)),t}static _collapse(t){typeof t!="string"&&t.children&&(t.children.every(n=>typeof n=="string")?t.children=[t.children.join("")]:t.children.forEach(n=>{yr._collapse(n)}))}}class kf extends yr{constructor(t){super(),this.options=t}addText(t){t!==""&&this.add(t)}startScope(t){this.openNode(t)}endScope(){this.closeNode()}__addSublanguage(t,n){const o=t.root;n&&(o.scope=`language:${n}`),this.add(o)}toHTML(){return new Tf(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function Sn(e){return e?typeof e=="string"?e:e.source:null}function rl(e){return Lt("(?=",e,")")}function Af(e){return Lt("(?:",e,")*")}function Of(e){return Lt("(?:",e,")?")}function Lt(...e){return e.map(n=>Sn(n)).join("")}function Cf(e){const t=e[e.length-1];return typeof t=="object"&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}function xr(...e){return"("+(Cf(e).capture?"":"?:")+e.map(o=>Sn(o)).join("|")+")"}function sl(e){return new RegExp(e.toString()+"|").exec("").length-1}function Nf(e,t){const n=e&&e.exec(t);return n&&n.index===0}const Mf=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Er(e,{joinWith:t}){let n=0;return e.map(o=>{n+=1;const r=n;let s=Sn(o),i="";for(;s.length>0;){const l=Mf.exec(s);if(!l){i+=s;break}i+=s.substring(0,l.index),s=s.substring(l.index+l[0].length),l[0][0]==="\\"&&l[1]?i+="\\"+String(Number(l[1])+r):(i+=l[0],l[0]==="("&&n++)}return i}).map(o=>`(${o})`).join(t)}const If=/\b\B/,il="[a-zA-Z]\\w*",Sr="[a-zA-Z_]\\w*",ll="\\b\\d+(\\.\\d+)?",al="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",cl="\\b(0b[01]+)",Pf="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Bf=(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=Lt(t,/.*\b/,e.binary,/\b.*/)),yt({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(n,o)=>{n.index!==0&&o.ignoreMatch()}},e)},Rn={begin:"\\\\[\\s\\S]",relevance:0},Lf={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[Rn]},Ff={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[Rn]},Df={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},go=function(e,t,n={}){const o=yt({scope:"comment",begin:e,end:t,contains:[]},n);o.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const r=xr("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return o.contains.push({begin:Lt(/[ ]+/,"(",r,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),o},Hf=go("//","$"),$f=go("/\\*","\\*/"),zf=go("#","$"),Uf={scope:"number",begin:ll,relevance:0},jf={scope:"number",begin:al,relevance:0},Vf={scope:"number",begin:cl,relevance:0},Kf={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[Rn,{begin:/\[/,end:/\]/,relevance:0,contains:[Rn]}]},Gf={scope:"title",begin:il,relevance:0},Wf={scope:"title",begin:Sr,relevance:0},Xf={begin:"\\.\\s*"+Sr,relevance:0},Yf=function(e){return Object.assign(e,{"on:begin":(t,n)=>{n.data._beginMatch=t[1]},"on:end":(t,n)=>{n.data._beginMatch!==t[1]&&n.ignoreMatch()}})};var zn=Object.freeze({__proto__:null,APOS_STRING_MODE:Lf,BACKSLASH_ESCAPE:Rn,BINARY_NUMBER_MODE:Vf,BINARY_NUMBER_RE:cl,COMMENT:go,C_BLOCK_COMMENT_MODE:$f,C_LINE_COMMENT_MODE:Hf,C_NUMBER_MODE:jf,C_NUMBER_RE:al,END_SAME_AS_BEGIN:Yf,HASH_COMMENT_MODE:zf,IDENT_RE:il,MATCH_NOTHING_RE:If,METHOD_GUARD:Xf,NUMBER_MODE:Uf,NUMBER_RE:ll,PHRASAL_WORDS_MODE:Df,QUOTE_STRING_MODE:Ff,REGEXP_MODE:Kf,RE_STARTERS_RE:Pf,SHEBANG:Bf,TITLE_MODE:Gf,UNDERSCORE_IDENT_RE:Sr,UNDERSCORE_TITLE_MODE:Wf});function qf(e,t){e.input[e.index-1]==="."&&t.ignoreMatch()}function Zf(e,t){e.className!==void 0&&(e.scope=e.className,delete e.className)}function Jf(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=qf,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function Qf(e,t){Array.isArray(e.illegal)&&(e.illegal=xr(...e.illegal))}function ed(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function td(e,t){e.relevance===void 0&&(e.relevance=1)}const nd=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const n=Object.assign({},e);Object.keys(e).forEach(o=>{delete e[o]}),e.keywords=n.keywords,e.begin=Lt(n.beforeMatch,rl(n.begin)),e.starts={relevance:0,contains:[Object.assign(n,{endsParent:!0})]},e.relevance=0,delete n.beforeMatch},od=["of","and","for","in","not","or","if","then","parent","list","value"],rd="keyword";function ul(e,t,n=rd){const o=Object.create(null);return typeof e=="string"?r(n,e.split(" ")):Array.isArray(e)?r(n,e):Object.keys(e).forEach(function(s){Object.assign(o,ul(e[s],t,s))}),o;function r(s,i){t&&(i=i.map(l=>l.toLowerCase())),i.forEach(function(l){const a=l.split("|");o[a[0]]=[s,sd(a[0],a[1])]})}}function sd(e,t){return t?Number(t):id(e)?0:1}function id(e){return od.includes(e.toLowerCase())}const Rs={},Mt=e=>{console.error(e)},Ts=(e,...t)=>{console.log(`WARN: ${e}`,...t)},Ht=(e,t)=>{Rs[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),Rs[`${e}/${t}`]=!0)},Zn=new Error;function fl(e,t,{key:n}){let o=0;const r=e[n],s={},i={};for(let l=1;l<=t.length;l++)i[l+o]=r[l],s[l+o]=!0,o+=sl(t[l-1]);e[n]=i,e[n]._emit=s,e[n]._multi=!0}function ld(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw Mt("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Zn;if(typeof e.beginScope!="object"||e.beginScope===null)throw Mt("beginScope must be object"),Zn;fl(e,e.begin,{key:"beginScope"}),e.begin=Er(e.begin,{joinWith:""})}}function ad(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw Mt("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Zn;if(typeof e.endScope!="object"||e.endScope===null)throw Mt("endScope must be object"),Zn;fl(e,e.end,{key:"endScope"}),e.end=Er(e.end,{joinWith:""})}}function cd(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function ud(e){cd(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),ld(e),ad(e)}function fd(e){function t(i,l){return new RegExp(Sn(i),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(l?"g":""))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(l,a){a.position=this.position++,this.matchIndexes[this.matchAt]=a,this.regexes.push([a,l]),this.matchAt+=sl(l)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const l=this.regexes.map(a=>a[1]);this.matcherRe=t(Er(l,{joinWith:"|"}),!0),this.lastIndex=0}exec(l){this.matcherRe.lastIndex=this.lastIndex;const a=this.matcherRe.exec(l);if(!a)return null;const d=a.findIndex((h,p)=>p>0&&h!==void 0),u=this.matchIndexes[d];return a.splice(0,d),Object.assign(a,u)}}class o{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(l){if(this.multiRegexes[l])return this.multiRegexes[l];const a=new n;return this.rules.slice(l).forEach(([d,u])=>a.addRule(d,u)),a.compile(),this.multiRegexes[l]=a,a}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(l,a){this.rules.push([l,a]),a.type==="begin"&&this.count++}exec(l){const a=this.getMatcher(this.regexIndex);a.lastIndex=this.lastIndex;let d=a.exec(l);if(this.resumingScanAtSamePosition()&&!(d&&d.index===this.lastIndex)){const u=this.getMatcher(0);u.lastIndex=this.lastIndex+1,d=u.exec(l)}return d&&(this.regexIndex+=d.position+1,this.regexIndex===this.count&&this.considerAll()),d}}function r(i){const l=new o;return i.contains.forEach(a=>l.addRule(a.begin,{rule:a,type:"begin"})),i.terminatorEnd&&l.addRule(i.terminatorEnd,{type:"end"}),i.illegal&&l.addRule(i.illegal,{type:"illegal"}),l}function s(i,l){const a=i;if(i.isCompiled)return a;[Zf,ed,ud,nd].forEach(u=>u(i,l)),e.compilerExtensions.forEach(u=>u(i,l)),i.__beforeBegin=null,[Jf,Qf,td].forEach(u=>u(i,l)),i.isCompiled=!0;let d=null;return typeof i.keywords=="object"&&i.keywords.$pattern&&(i.keywords=Object.assign({},i.keywords),d=i.keywords.$pattern,delete i.keywords.$pattern),d=d||/\w+/,i.keywords&&(i.keywords=ul(i.keywords,e.case_insensitive)),a.keywordPatternRe=t(d,!0),l&&(i.begin||(i.begin=/\B|\b/),a.beginRe=t(a.begin),!i.end&&!i.endsWithParent&&(i.end=/\B|\b/),i.end&&(a.endRe=t(a.end)),a.terminatorEnd=Sn(a.end)||"",i.endsWithParent&&l.terminatorEnd&&(a.terminatorEnd+=(i.end?"|":"")+l.terminatorEnd)),i.illegal&&(a.illegalRe=t(i.illegal)),i.contains||(i.contains=[]),i.contains=[].concat(...i.contains.map(function(u){return dd(u==="self"?i:u)})),i.contains.forEach(function(u){s(u,a)}),i.starts&&s(i.starts,l),a.matcher=r(a),a}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=yt(e.classNameAliases||{}),s(e)}function dl(e){return e?e.endsWithParent||dl(e.starts):!1}function dd(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return yt(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:dl(e)?yt(e,{starts:e.starts?yt(e.starts):null}):Object.isFrozen(e)?yt(e):e}var hd="11.10.0";class pd extends Error{constructor(t,n){super(t),this.name="HTMLInjectionError",this.html=n}}const Bo=ol,ks=yt,As=Symbol("nomatch"),gd=7,hl=function(e){const t=Object.create(null),n=Object.create(null),o=[];let r=!0;const s="Could not find the language '{}', did you forget to load/include a language module?",i={disableAutodetect:!0,name:"Plain text",contains:[]};let l={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:kf};function a(w){return l.noHighlightRe.test(w)}function d(w){let T=w.className+" ";T+=w.parentNode?w.parentNode.className:"";const U=l.languageDetectRe.exec(T);if(U){const X=be(U[1]);return X||(Ts(s.replace("{}",U[1])),Ts("Falling back to no-highlight mode for this block.",w)),X?U[1]:"no-highlight"}return T.split(/\s+/).find(X=>a(X)||be(X))}function u(w,T,U){let X="",q="";typeof T=="object"?(X=w,U=T.ignoreIllegals,q=T.language):(Ht("10.7.0","highlight(lang, code, ...args) has been deprecated."),Ht("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),q=w,X=T),U===void 0&&(U=!0);const ee={code:X,language:q};Fe("before:highlight",ee);const we=ee.result?ee.result:h(ee.language,ee.code,U);return we.code=ee.code,Fe("after:highlight",we),we}function h(w,T,U,X){const q=Object.create(null);function ee(E,k){return E.keywords[k]}function we(){if(!_.keywords){R.addText(m);return}let E=0;_.keywordPatternRe.lastIndex=0;let k=_.keywordPatternRe.exec(m),M="";for(;k;){M+=m.substring(E,k.index);const G=x.case_insensitive?k[0].toLowerCase():k[0],J=ee(_,G);if(J){const[he,Ne]=J;if(R.addText(M),M="",q[G]=(q[G]||0)+1,q[G]<=gd&&(z+=Ne),he.startsWith("_"))M+=k[0];else{const Tt=x.classNameAliases[he]||he;de(k[0],Tt)}}else M+=k[0];E=_.keywordPatternRe.lastIndex,k=_.keywordPatternRe.exec(m)}M+=m.substring(E),R.addText(M)}function Ke(){if(m==="")return;let E=null;if(typeof _.subLanguage=="string"){if(!t[_.subLanguage]){R.addText(m);return}E=h(_.subLanguage,m,!0,A[_.subLanguage]),A[_.subLanguage]=E._top}else E=b(m,_.subLanguage.length?_.subLanguage:null);_.relevance>0&&(z+=E.relevance),R.__addSublanguage(E._emitter,E.language)}function ve(){_.subLanguage!=null?Ke():we(),m=""}function de(E,k){E!==""&&(R.startScope(k),R.addText(E),R.endScope())}function y(E,k){let M=1;const G=k.length-1;for(;M<=G;){if(!E._emit[M]){M++;continue}const J=x.classNameAliases[E[M]]||E[M],he=k[M];J?de(he,J):(m=he,we(),m=""),M++}}function N(E,k){return E.scope&&typeof E.scope=="string"&&R.openNode(x.classNameAliases[E.scope]||E.scope),E.beginScope&&(E.beginScope._wrap?(de(m,x.classNameAliases[E.beginScope._wrap]||E.beginScope._wrap),m=""):E.beginScope._multi&&(y(E.beginScope,k),m="")),_=Object.create(E,{parent:{value:_}}),_}function C(E,k,M){let G=Nf(E.endRe,M);if(G){if(E["on:end"]){const J=new xs(E);E["on:end"](k,J),J.isMatchIgnored&&(G=!1)}if(G){for(;E.endsParent&&E.parent;)E=E.parent;return E}}if(E.endsWithParent)return C(E.parent,k,M)}function F(E){return _.matcher.regexIndex===0?(m+=E[0],1):(j=!0,0)}function Q(E){const k=E[0],M=E.rule,G=new xs(M),J=[M.__beforeBegin,M["on:begin"]];for(const he of J)if(he&&(he(E,G),G.isMatchIgnored))return F(k);return M.skip?m+=k:(M.excludeBegin&&(m+=k),ve(),!M.returnBegin&&!M.excludeBegin&&(m=k)),N(M,E),M.returnBegin?0:k.length}function ce(E){const k=E[0],M=T.substring(E.index),G=C(_,E,M);if(!G)return As;const J=_;_.endScope&&_.endScope._wrap?(ve(),de(k,_.endScope._wrap)):_.endScope&&_.endScope._multi?(ve(),y(_.endScope,E)):J.skip?m+=k:(J.returnEnd||J.excludeEnd||(m+=k),ve(),J.excludeEnd&&(m=k));do _.scope&&R.closeNode(),!_.skip&&!_.subLanguage&&(z+=_.relevance),_=_.parent;while(_!==G.parent);return G.starts&&N(G.starts,E),J.returnEnd?0:k.length}function c(){const E=[];for(let k=_;k!==x;k=k.parent)k.scope&&E.unshift(k.scope);E.forEach(k=>R.openNode(k))}let f={};function g(E,k){const M=k&&k[0];if(m+=E,M==null)return ve(),0;if(f.type==="begin"&&k.type==="end"&&f.index===k.index&&M===""){if(m+=T.slice(k.index,k.index+1),!r){const G=new Error(`0 width match regex (${w})`);throw G.languageName=w,G.badRule=f.rule,G}return 1}if(f=k,k.type==="begin")return Q(k);if(k.type==="illegal"&&!U){const G=new Error('Illegal lexeme "'+M+'" for mode "'+(_.scope||"<unnamed>")+'"');throw G.mode=_,G}else if(k.type==="end"){const G=ce(k);if(G!==As)return G}if(k.type==="illegal"&&M==="")return 1;if(D>1e5&&D>k.index*3)throw new Error("potential infinite loop, way more iterations than matches");return m+=M,M.length}const x=be(w);if(!x)throw Mt(s.replace("{}",w)),new Error('Unknown language: "'+w+'"');const v=fd(x);let S="",_=X||v;const A={},R=new l.__emitter(l);c();let m="",z=0,O=0,D=0,j=!1;try{if(x.__emitTokens)x.__emitTokens(T,R);else{for(_.matcher.considerAll();;){D++,j?j=!1:_.matcher.considerAll(),_.matcher.lastIndex=O;const E=_.matcher.exec(T);if(!E)break;const k=T.substring(O,E.index),M=g(k,E);O=E.index+M}g(T.substring(O))}return R.finalize(),S=R.toHTML(),{language:w,value:S,relevance:z,illegal:!1,_emitter:R,_top:_}}catch(E){if(E.message&&E.message.includes("Illegal"))return{language:w,value:Bo(T),illegal:!0,relevance:0,_illegalBy:{message:E.message,index:O,context:T.slice(O-100,O+100),mode:E.mode,resultSoFar:S},_emitter:R};if(r)return{language:w,value:Bo(T),illegal:!1,relevance:0,errorRaised:E,_emitter:R,_top:_};throw E}}function p(w){const T={value:Bo(w),illegal:!1,relevance:0,_top:i,_emitter:new l.__emitter(l)};return T._emitter.addText(w),T}function b(w,T){T=T||l.languages||Object.keys(t);const U=p(w),X=T.filter(be).filter(Le).map(ve=>h(ve,w,!1));X.unshift(U);const q=X.sort((ve,de)=>{if(ve.relevance!==de.relevance)return de.relevance-ve.relevance;if(ve.language&&de.language){if(be(ve.language).supersetOf===de.language)return 1;if(be(de.language).supersetOf===ve.language)return-1}return 0}),[ee,we]=q,Ke=ee;return Ke.secondBest=we,Ke}function B(w,T,U){const X=T&&n[T]||U;w.classList.add("hljs"),w.classList.add(`language-${X}`)}function I(w){let T=null;const U=d(w);if(a(U))return;if(Fe("before:highlightElement",{el:w,language:U}),w.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",w);return}if(w.children.length>0&&(l.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(w)),l.throwUnescapedHTML))throw new pd("One of your code blocks includes unescaped HTML.",w.innerHTML);T=w;const X=T.textContent,q=U?u(X,{language:U,ignoreIllegals:!0}):b(X);w.innerHTML=q.value,w.dataset.highlighted="yes",B(w,U,q.language),w.result={language:q.language,re:q.relevance,relevance:q.relevance},q.secondBest&&(w.secondBest={language:q.secondBest.language,relevance:q.secondBest.relevance}),Fe("after:highlightElement",{el:w,result:q,text:X})}function V(w){l=ks(l,w)}const $=()=>{P(),Ht("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function L(){P(),Ht("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let H=!1;function P(){if(document.readyState==="loading"){H=!0;return}document.querySelectorAll(l.cssSelector).forEach(I)}function Z(){H&&P()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",Z,!1);function ae(w,T){let U=null;try{U=T(e)}catch(X){if(Mt("Language definition for '{}' could not be registered.".replace("{}",w)),r)Mt(X);else throw X;U=i}U.name||(U.name=w),t[w]=U,U.rawDefinition=T.bind(null,e),U.aliases&&Ce(U.aliases,{languageName:w})}function se(w){delete t[w];for(const T of Object.keys(n))n[T]===w&&delete n[T]}function Oe(){return Object.keys(t)}function be(w){return w=(w||"").toLowerCase(),t[w]||t[n[w]]}function Ce(w,{languageName:T}){typeof w=="string"&&(w=[w]),w.forEach(U=>{n[U.toLowerCase()]=T})}function Le(w){const T=be(w);return T&&!T.disableAutodetect}function Ve(w){w["before:highlightBlock"]&&!w["before:highlightElement"]&&(w["before:highlightElement"]=T=>{w["before:highlightBlock"](Object.assign({block:T.el},T))}),w["after:highlightBlock"]&&!w["after:highlightElement"]&&(w["after:highlightElement"]=T=>{w["after:highlightBlock"](Object.assign({block:T.el},T))})}function Be(w){Ve(w),o.push(w)}function it(w){const T=o.indexOf(w);T!==-1&&o.splice(T,1)}function Fe(w,T){const U=w;o.forEach(function(X){X[U]&&X[U](T)})}function fe(w){return Ht("10.7.0","highlightBlock will be removed entirely in v12.0"),Ht("10.7.0","Please use highlightElement now."),I(w)}Object.assign(e,{highlight:u,highlightAuto:b,highlightAll:P,highlightElement:I,highlightBlock:fe,configure:V,initHighlighting:$,initHighlightingOnLoad:L,registerLanguage:ae,unregisterLanguage:se,listLanguages:Oe,getLanguage:be,registerAliases:Ce,autoDetection:Le,inherit:ks,addPlugin:Be,removePlugin:it}),e.debugMode=function(){r=!1},e.safeMode=function(){r=!0},e.versionString=hd,e.regex={concat:Lt,lookahead:rl,either:xr,optional:Of,anyNumberOfTimes:Af};for(const w in zn)typeof zn[w]=="object"&&nl(zn[w]);return Object.assign(e,zn),e},on=hl({});on.newInstance=()=>hl({});var bd=on;on.HighlightJS=on;on.default=on;const bo=Ef(bd),Os="[A-Za-z$_][0-9A-Za-z$_]*",md=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],wd=["true","false","null","undefined","NaN","Infinity"],pl=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],gl=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],bl=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],vd=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],_d=[].concat(bl,pl,gl);function yd(e){const t=e.regex,n=(T,{after:U})=>{const X="</"+T[0].slice(1);return T.input.indexOf(X,U)!==-1},o=Os,r={begin:"<>",end:"</>"},s=/<[A-Za-z0-9\\._:-]+\s*\/>/,i={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(T,U)=>{const X=T[0].length+T.index,q=T.input[X];if(q==="<"||q===","){U.ignoreMatch();return}q===">"&&(n(T,{after:X})||U.ignoreMatch());let ee;const we=T.input.substring(X);if(ee=we.match(/^\s*=/)){U.ignoreMatch();return}if((ee=we.match(/^\s+extends\s+/))&&ee.index===0){U.ignoreMatch();return}}},l={$pattern:Os,keyword:md,literal:wd,built_in:_d,"variable.language":vd},a="[0-9](_?[0-9])*",d=`\\.(${a})`,u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",h={className:"number",variants:[{begin:`(\\b(${u})((${d})|\\.)?|(${d}))[eE][+-]?(${a})\\b`},{begin:`\\b(${u})\\b((${d})\\b|\\.)?|(${d})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},p={className:"subst",begin:"\\$\\{",end:"\\}",keywords:l,contains:[]},b={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,p],subLanguage:"xml"}},B={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,p],subLanguage:"css"}},I={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,p],subLanguage:"graphql"}},V={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,p]},L={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:o+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},H=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,b,B,I,V,{match:/\$\d+/},h];p.contains=H.concat({begin:/\{/,end:/\}/,keywords:l,contains:["self"].concat(H)});const P=[].concat(L,p.contains),Z=P.concat([{begin:/(\s*)\(/,end:/\)/,keywords:l,contains:["self"].concat(P)}]),ae={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:Z},se={variants:[{match:[/class/,/\s+/,o,/\s+/,/extends/,/\s+/,t.concat(o,"(",t.concat(/\./,o),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,o],scope:{1:"keyword",3:"title.class"}}]},Oe={relevance:0,match:t.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...pl,...gl]}},be={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},Ce={variants:[{match:[/function/,/\s+/,o,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[ae],illegal:/%/},Le={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function Ve(T){return t.concat("(?!",T.join("|"),")")}const Be={match:t.concat(/\b/,Ve([...bl,"super","import"].map(T=>`${T}\\s*\\(`)),o,t.lookahead(/\s*\(/)),className:"title.function",relevance:0},it={begin:t.concat(/\./,t.lookahead(t.concat(o,/(?![0-9A-Za-z$_(])/))),end:o,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},Fe={match:[/get|set/,/\s+/,o,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},ae]},fe="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",w={match:[/const|var|let/,/\s+/,o,/\s*/,/=\s*/,/(async\s*)?/,t.lookahead(fe)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[ae]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:l,exports:{PARAMS_CONTAINS:Z,CLASS_REFERENCE:Oe},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),be,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,b,B,I,V,L,{match:/\$\d+/},h,Oe,{className:"attr",begin:o+t.lookahead(":"),relevance:0},w,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[L,e.REGEXP_MODE,{className:"function",begin:fe,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:Z}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:r.begin,end:r.end},{match:s},{begin:i.begin,"on:begin":i.isTrulyOpeningTag,end:i.end}],subLanguage:"xml",contains:[{begin:i.begin,end:i.end,skip:!0,contains:["self"]}]}]},Ce,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[ae,e.inherit(e.TITLE_MODE,{begin:o,className:"title.function"})]},{match:/\.\.\./,relevance:0},it,{match:"\\$"+o,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[ae]},Be,Le,se,Fe,{match:/\$[(.]/}]}}const xd=e=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:e.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z_][A-Za-z0-9_-]*/}}),Ed=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","optgroup","option","p","picture","q","quote","samp","section","select","source","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],Sd=["defs","g","marker","mask","pattern","svg","switch","symbol","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feGaussianBlur","feImage","feMerge","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","linearGradient","radialGradient","stop","circle","ellipse","image","line","path","polygon","polyline","rect","text","use","textPath","tspan","foreignObject","clipPath"],Rd=[...Ed,...Sd],Td=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"].sort().reverse(),kd=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"].sort().reverse(),Ad=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"].sort().reverse(),Od=["accent-color","align-content","align-items","align-self","alignment-baseline","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","baseline-shift","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-end-end-radius","border-end-start-radius","border-right-color","border-right-style","border-right-width","border-spacing","border-start-end-radius","border-start-start-radius","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","cx","cy","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","color-scheme","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","empty-cells","enable-background","fill","fill-opacity","fill-rule","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","flood-color","flood-opacity","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-horizontal","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","inset","inset-block","inset-block-end","inset-block-start","inset-inline","inset-inline-end","inset-inline-start","isolation","kerning","justify-content","justify-items","justify-self","left","letter-spacing","lighting-color","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","marker","marker-end","marker-mid","marker-start","mask","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","r","resize","rest","rest-after","rest-before","right","rotate","row-gap","scale","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","shape-rendering","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","speak","speak-as","src","tab-size","table-layout","text-anchor","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip-ink","text-decoration-style","text-decoration-thickness","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-offset","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","translate","unicode-bidi","vector-effect","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","x","y","z-index"].sort().reverse();function Cd(e){const t=e.regex,n=xd(e),o={begin:/-(webkit|moz|ms|o)-(?=[a-z])/},r="and or not only",s=/@-?\w[\w]*(-\w+)*/,i="[a-zA-Z-][a-zA-Z0-9_-]*",l=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE];return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},classNameAliases:{keyframePosition:"selector-tag"},contains:[n.BLOCK_COMMENT,o,n.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{className:"selector-class",begin:"\\."+i,relevance:0},n.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{begin:":("+kd.join("|")+")"},{begin:":(:)?("+Ad.join("|")+")"}]},n.CSS_VARIABLE,{className:"attribute",begin:"\\b("+Od.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,contains:[n.BLOCK_COMMENT,n.HEXCOLOR,n.IMPORTANT,n.CSS_NUMBER_MODE,...l,{begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"},contains:[...l,{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]},n.FUNCTION_DISPATCH]},{begin:t.lookahead(/@/),end:"[{;]",relevance:0,illegal:/:/,contains:[{className:"keyword",begin:s},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:r,attribute:Td.join(" ")},contains:[{begin:/[a-z-]+(?=:)/,className:"attribute"},...l,n.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"\\b("+Rd.join("|")+")\\b"}]}}function Nd(e){return{name:"VBScript in HTML",subLanguage:"xml",contains:[{begin:"<%",end:"%>",subLanguage:"vbscript"}]}}bo.registerLanguage("javascript",yd);bo.registerLanguage("css",Cd);bo.registerLanguage("html",Nd);const Md={name:"CodeBlock",props:{code:{type:String,required:!0},type:{type:String,default:"css"}},mounted(){this.highlightCode()},methods:{highlightCode(){const e=this.$refs.codeBlock;bo.highlightElement(e)}}};function Id(e,t,n,o,r,s){return ge(),xe("pre",null,[t[0]||(t[0]=ut("        ")),Ee("code",{ref:"codeBlock",class:It(`code language-${n.type}`)},`
            `+Kn(n.code)+`
        `,3),t[1]||(t[1]=ut(`
    `))])}const Pd=Pn(Md,[["render",Id]]),Bd=`
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
`;var Nn;class Ld extends st{constructor(){super();_e(this,Nn);const n=this.attachShadow({mode:"open"});n.innerHTML=`
      <div class="ea-card_wrap" part="container">
        <div class="ea-card_header" part="header-wrap">
          <slot name="header"></slot>
        </div>
        <div class="ea-card_content" part="content-wrap">
          <slot></slot>
        </div>
      </div>
    `,Re(this,Nn,n.querySelector(".ea-card_wrap")),this.build(n,Bd)}get shadow(){return this.getAttribute("shadow")||"always"}set shadow(n){this.setAttribute("shadow",n),Y(this,Nn).classList.add(`is-${n}-shadow`)}connectedCallback(){this.shadow=this.shadow}}Nn=new WeakMap;customElements.get("ea-card")||customElements.define("ea-card",Ld);const Fd={name:"SgCard",components:{CodeBlock:Pd},props:{title:{type:String,default:"Card"},code:{type:String,default:""},className:{type:String,default:""}}},Dd={class:"sg-card"},Hd={shadow:"hover"},$d={slot:"header",class:"header"};function zd(e,t,n,o,r,s){const i=Sa("CodeBlock");return ge(),xe("div",Dd,[Ee("ea-card",Hd,[Ee("div",$d,[Ee("span",null,Kn(n.title),1)]),Ee("span",{class:It(`box ${n.className}`)},Kn(n.title),3),ne(i,{code:n.code},null,8,["code"])])])}const sn=Pn(Fd,[["render",zd]]),Ud={class:"part"},jd={__name:"index",setup(e){const t={};return Object.assign(t,{grow:{title:"放大",className:"grow",code:`
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
    `}}),(n,o)=>(ge(),xe("section",Ud,[(ge(),xe(me,null,rn(t,(r,s)=>ne(sn,{key:s,title:r.title,code:r.code,className:r.className},null,8,["title","code","className"])),64))]))}},Vd={class:"part"},Kd={__name:"index",setup(e){const t={};return Object.assign(t,{fill:{title:"填充",className:"fill",code:`
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
`}}),(n,o)=>(ge(),xe("section",Vd,[(ge(),xe(me,null,rn(t,(r,s)=>ne(sn,{key:s,title:r.title,code:r.code,className:r.className},null,8,["title","code","className"])),64))]))}},Gd={class:"part"},Wd={__name:"index",setup(e){const t={};return Object.assign(t,{borderFade:{title:"填充",className:"borderFade",code:`
.borderFade {
    box-sizing: border-box;
    border: 3px solid transparent;

    transition: border-color .3s;
}

.borderFade:hover {
    border-color: #409EFF;
}
`},hollow:{title:"空心",className:"hollow",code:`
.fill {
    transition: background-color .3s, color .3s;
}

.fill:hover {
    background-color: #409EFF;
    color: white;
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
`}}),(n,o)=>(ge(),xe("section",Gd,[(ge(),xe(me,null,rn(t,(r,s)=>ne(sn,{key:s,title:r.title,code:r.code,className:r.className},null,8,["title","code","className"])),64))]))}},Xd={class:"part"},Yd={__name:"index",setup(e){const t={};return Object.assign(t,{shadow:{title:"阴影",className:"shadow",code:`
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
`}}),(n,o)=>(ge(),xe("section",Xd,[(ge(),xe(me,null,rn(t,(r,s)=>ne(sn,{key:s,title:r.title,code:r.code,className:r.className},null,8,["title","code","className"])),64))]))}},qd={class:"part"},Zd={__name:"index",setup(e){const t={};return Object.assign(t,{bubbleTop:{title:"气泡-上方",className:"bubbleTop",code:`
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
`}}),(n,o)=>(ge(),xe("section",qd,[(ge(),xe(me,null,rn(t,(r,s)=>ne(sn,{key:s,title:r.title,code:r.code,className:r.className},null,8,["title","code","className"])),64))]))}},Jd={class:"part"},Qd={__name:"index",setup(e){const t={};return Object.assign(t,{curlTopLeft:{title:"折角-左上方",className:"curlTopLeft",code:`
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
`}}),(n,o)=>(ge(),xe("section",Jd,[(ge(),xe(me,null,rn(t,(r,s)=>ne(sn,{key:s,title:r.title,code:r.code,className:r.className},null,8,["title","code","className"])),64))]))}},eh=[{path:"/",redirect:"/2DTransitions",meta:{title:"主页"}},{path:"/2DTransitions",component:jd,meta:{title:"2D 过渡动画"}},{path:"/backgroundTransitions",component:Kd,meta:{title:"背景过渡动画"}},{path:"/borderTransitions",component:Wd,meta:{title:"边框过渡动画"}},{path:"/shadowAndGlowTransitions",component:Yd,meta:{title:"阴影过渡动画"}},{path:"/speechBubbles",component:Zd,meta:{title:"气泡框过渡动画"}},{path:"/curls",component:Qd,meta:{title:"折角过渡动画"}}],ml=Uu({history:vu(),routes:eh});ml.beforeEach((e,t,n)=>{document.title=`${e.meta.title} | Ea-effects.css`,e.hash||n()});const Cs={fontelloCSS:"https://cdn.jsdelivr.net/npm/easy-component-ui/components/ea-icon/css/fontello.css"};function th(e){Object.assign(Cs,e),document.dispatchEvent(new CustomEvent("configChanged",{detail:Cs}))}window.addEventListener("DOMContentLoaded",()=>{th({fontelloCSS:new URL("/ea-effects/ea-icon/css/fontello.css",import.meta.url).href})});Hc(xf).use(ml).mount("#app");
