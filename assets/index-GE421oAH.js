var Nr=e=>{throw TypeError(e)};var _o=(e,t,n)=>t.has(e)||Nr("Cannot "+n);var U=(e,t,n)=>(_o(e,t,"read from private field"),n?n.call(e):t.get(e)),we=(e,t,n)=>t.has(e)?Nr("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),ye=(e,t,n,o)=>(_o(e,t,"write to private field"),o?o.call(e,n):t.set(e,n),n),yo=(e,t,n)=>(_o(e,t,"access private method"),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function er(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const le={},Vt=[],it=()=>{},_a=()=>!1,oo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),tr=e=>e.startsWith("onUpdate:"),Te=Object.assign,nr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ya=Object.prototype.hasOwnProperty,ne=(e,t)=>ya.call(e,t),V=Array.isArray,Kt=e=>ro(e)==="[object Map]",Ms=e=>ro(e)==="[object Set]",G=e=>typeof e=="function",ve=e=>typeof e=="string",At=e=>typeof e=="symbol",de=e=>e!==null&&typeof e=="object",Bs=e=>(de(e)||G(e))&&G(e.then)&&G(e.catch),Ls=Object.prototype.toString,ro=e=>Ls.call(e),xa=e=>ro(e).slice(8,-1),Ps=e=>ro(e)==="[object Object]",or=e=>ve(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,hn=er(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),so=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ea=/-(\w)/g,Ze=so(e=>e.replace(Ea,(t,n)=>n?n.toUpperCase():"")),ka=/\B([A-Z])/g,zt=so(e=>e.replace(ka,"-$1").toLowerCase()),io=so(e=>e.charAt(0).toUpperCase()+e.slice(1)),xo=so(e=>e?`on${io(e)}`:""),Tt=(e,t)=>!Object.is(e,t),Eo=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Fs=(e,t,n,o=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:o,value:n})},Sa=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Cr;const Ds=()=>Cr||(Cr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function rr(e){if(V(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],r=ve(o)?Oa(o):rr(o);if(r)for(const s in r)t[s]=r[s]}return t}else if(ve(e)||de(e))return e}const Ta=/;(?![^(]*\))/g,Ra=/:([^]+)/,Aa=/\/\*[^]*?\*\//g;function Oa(e){const t={};return e.replace(Aa,"").split(Ta).forEach(n=>{if(n){const o=n.split(Ra);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function Dt(e){let t="";if(ve(e))t=e;else if(V(e))for(let n=0;n<e.length;n++){const o=Dt(e[n]);o&&(t+=o+" ")}else if(de(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Na="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ca=er(Na);function Hs(e){return!!e||e===""}const zs=e=>!!(e&&e.__v_isRef===!0),Kn=e=>ve(e)?e:e==null?"":V(e)||de(e)&&(e.toString===Ls||!G(e.toString))?zs(e)?Kn(e.value):JSON.stringify(e,$s,2):String(e),$s=(e,t)=>zs(t)?$s(e,t.value):Kt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[o,r],s)=>(n[ko(o,s)+" =>"]=r,n),{})}:Ms(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>ko(n))}:At(t)?ko(t):de(t)&&!V(t)&&!Ps(t)?String(t):t,ko=(e,t="")=>{var n;return At(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $e;class Ia{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=$e,!t&&$e&&(this.index=($e.scopes||($e.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=$e;try{return $e=this,t()}finally{$e=n}}}on(){$e=this}off(){$e=this.parent}stop(t){if(this._active){let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Ma(){return $e}let ie;const So=new WeakSet;class js{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.nextEffect=void 0,this.cleanup=void 0,this.scheduler=void 0,$e&&$e.active&&$e.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,So.has(this)&&(So.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||(this.flags|=8,this.nextEffect=pn,pn=this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ir(this),Xs(this);const t=ie,n=qe;ie=this,qe=!0;try{return this.fn()}finally{Ys(this),ie=t,qe=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)ar(t);this.deps=this.depsTail=void 0,Ir(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?So.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ho(this)&&this.run()}get dirty(){return Ho(this)}}let Us=0,pn;function sr(){Us++}function ir(){if(--Us>0)return;let e;for(;pn;){let t=pn;for(pn=void 0;t;){const n=t.nextEffect;if(t.nextEffect=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(o){e||(e=o)}t=n}}if(e)throw e}function Xs(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ys(e){let t,n=e.depsTail;for(let o=n;o;o=o.prevDep)o.version===-1?(o===n&&(n=o.prevDep),ar(o),Ba(o)):t=o,o.dep.activeLink=o.prevActiveLink,o.prevActiveLink=void 0;e.deps=t,e.depsTail=n}function Ho(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&Vs(t.dep.computed)||t.dep.version!==t.version)return!0;return!!e._dirty}function Vs(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===vn))return;e.globalVersion=vn;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&!Ho(e)){e.flags&=-3;return}const n=ie,o=qe;ie=e,qe=!0;try{Xs(e);const r=e.fn(e._value);(t.version===0||Tt(r,e._value))&&(e._value=r,t.version++)}catch(r){throw t.version++,r}finally{ie=n,qe=o,Ys(e),e.flags&=-3}}function ar(e){const{dep:t,prevSub:n,nextSub:o}=e;if(n&&(n.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=n,e.nextSub=void 0),t.subs===e&&(t.subs=n),!t.subs&&t.computed){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)ar(r)}}function Ba(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let qe=!0;const Ks=[];function Ot(){Ks.push(qe),qe=!1}function Nt(){const e=Ks.pop();qe=e===void 0?!0:e}function Ir(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ie;ie=void 0;try{t()}finally{ie=n}}}let vn=0;class lr{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0}track(t){if(!ie||!qe||ie===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ie)n=this.activeLink={dep:this,sub:ie,version:this.version,nextDep:void 0,prevDep:void 0,nextSub:void 0,prevSub:void 0,prevActiveLink:void 0},ie.deps?(n.prevDep=ie.depsTail,ie.depsTail.nextDep=n,ie.depsTail=n):ie.deps=ie.depsTail=n,ie.flags&4&&Gs(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const o=n.nextDep;o.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=o),n.prevDep=ie.depsTail,n.nextDep=void 0,ie.depsTail.nextDep=n,ie.depsTail=n,ie.deps===n&&(ie.deps=o)}return n}trigger(t){this.version++,vn++,this.notify(t)}notify(t){sr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()}finally{ir()}}}function Gs(e){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let o=t.deps;o;o=o.nextDep)Gs(o)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}const zo=new WeakMap,Pt=Symbol(""),$o=Symbol(""),_n=Symbol("");function Oe(e,t,n){if(qe&&ie){let o=zo.get(e);o||zo.set(e,o=new Map);let r=o.get(n);r||o.set(n,r=new lr),r.track()}}function pt(e,t,n,o,r,s){const i=zo.get(e);if(!i){vn++;return}const a=l=>{l&&l.trigger()};if(sr(),t==="clear")i.forEach(a);else{const l=V(e),d=l&&or(n);if(l&&n==="length"){const u=Number(o);i.forEach((h,p)=>{(p==="length"||p===_n||!At(p)&&p>=u)&&a(h)})}else switch(n!==void 0&&a(i.get(n)),d&&a(i.get(_n)),t){case"add":l?d&&a(i.get("length")):(a(i.get(Pt)),Kt(e)&&a(i.get($o)));break;case"delete":l||(a(i.get(Pt)),Kt(e)&&a(i.get($o)));break;case"set":Kt(e)&&a(i.get(Pt));break}}ir()}function jt(e){const t=oe(e);return t===e?t:(Oe(t,"iterate",_n),Ye(e)?t:t.map(Re))}function ao(e){return Oe(e=oe(e),"iterate",_n),e}const La={__proto__:null,[Symbol.iterator](){return To(this,Symbol.iterator,Re)},concat(...e){return jt(this).concat(...e.map(t=>V(t)?jt(t):t))},entries(){return To(this,"entries",e=>(e[1]=Re(e[1]),e))},every(e,t){return ut(this,"every",e,t,void 0,arguments)},filter(e,t){return ut(this,"filter",e,t,n=>n.map(Re),arguments)},find(e,t){return ut(this,"find",e,t,Re,arguments)},findIndex(e,t){return ut(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ut(this,"findLast",e,t,Re,arguments)},findLastIndex(e,t){return ut(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ut(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ro(this,"includes",e)},indexOf(...e){return Ro(this,"indexOf",e)},join(e){return jt(this).join(e)},lastIndexOf(...e){return Ro(this,"lastIndexOf",e)},map(e,t){return ut(this,"map",e,t,void 0,arguments)},pop(){return cn(this,"pop")},push(...e){return cn(this,"push",e)},reduce(e,...t){return Mr(this,"reduce",e,t)},reduceRight(e,...t){return Mr(this,"reduceRight",e,t)},shift(){return cn(this,"shift")},some(e,t){return ut(this,"some",e,t,void 0,arguments)},splice(...e){return cn(this,"splice",e)},toReversed(){return jt(this).toReversed()},toSorted(e){return jt(this).toSorted(e)},toSpliced(...e){return jt(this).toSpliced(...e)},unshift(...e){return cn(this,"unshift",e)},values(){return To(this,"values",Re)}};function To(e,t,n){const o=ao(e),r=o[t]();return o!==e&&!Ye(e)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=n(s.value)),s}),r}const Pa=Array.prototype;function ut(e,t,n,o,r,s){const i=ao(e),a=i!==e&&!Ye(e),l=i[t];if(l!==Pa[t]){const h=l.apply(e,s);return a?Re(h):h}let d=n;i!==e&&(a?d=function(h,p){return n.call(this,Re(h),p,e)}:n.length>2&&(d=function(h,p){return n.call(this,h,p,e)}));const u=l.call(i,d,o);return a&&r?r(u):u}function Mr(e,t,n,o){const r=ao(e);let s=n;return r!==e&&(Ye(e)?n.length>3&&(s=function(i,a,l){return n.call(this,i,a,l,e)}):s=function(i,a,l){return n.call(this,i,Re(a),l,e)}),r[t](s,...o)}function Ro(e,t,n){const o=oe(e);Oe(o,"iterate",_n);const r=o[t](...n);return(r===-1||r===!1)&&dr(n[0])?(n[0]=oe(n[0]),o[t](...n)):r}function cn(e,t,n=[]){Ot(),sr();const o=oe(e)[t].apply(e,n);return ir(),Nt(),o}const Fa=er("__proto__,__v_isRef,__isVue"),Ws=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(At));function Da(e){At(e)||(e=String(e));const t=oe(this);return Oe(t,"has",e),t.hasOwnProperty(e)}class qs{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,o){const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return o===(r?s?Za:ei:s?Qs:Js).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(o)?t:void 0;const i=V(t);if(!r){let l;if(i&&(l=La[n]))return l;if(n==="hasOwnProperty")return Da}const a=Reflect.get(t,n,ke(t)?t:o);return(At(n)?Ws.has(n):Fa(n))||(r||Oe(t,"get",n),s)?a:ke(a)?i&&or(n)?a:a.value:de(a)?r?ni(a):co(a):a}}class Zs extends qs{constructor(t=!1){super(!1,t)}set(t,n,o,r){let s=t[n];if(!this._isShallow){const l=Ht(s);if(!Ye(o)&&!Ht(o)&&(s=oe(s),o=oe(o)),!V(t)&&ke(s)&&!ke(o))return l?!1:(s.value=o,!0)}const i=V(t)&&or(n)?Number(n)<t.length:ne(t,n),a=Reflect.set(t,n,o,ke(t)?t:r);return t===oe(r)&&(i?Tt(o,s)&&pt(t,"set",n,o):pt(t,"add",n,o)),a}deleteProperty(t,n){const o=ne(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&o&&pt(t,"delete",n,void 0),r}has(t,n){const o=Reflect.has(t,n);return(!At(n)||!Ws.has(n))&&Oe(t,"has",n),o}ownKeys(t){return Oe(t,"iterate",V(t)?"length":Pt),Reflect.ownKeys(t)}}class Ha extends qs{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const za=new Zs,$a=new Ha,ja=new Zs(!0);const cr=e=>e,lo=e=>Reflect.getPrototypeOf(e);function Fn(e,t,n=!1,o=!1){e=e.__v_raw;const r=oe(e),s=oe(t);n||(Tt(t,s)&&Oe(r,"get",t),Oe(r,"get",s));const{has:i}=lo(r),a=o?cr:n?hr:Re;if(i.call(r,t))return a(e.get(t));if(i.call(r,s))return a(e.get(s));e!==r&&e.get(t)}function Dn(e,t=!1){const n=this.__v_raw,o=oe(n),r=oe(e);return t||(Tt(e,r)&&Oe(o,"has",e),Oe(o,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function Hn(e,t=!1){return e=e.__v_raw,!t&&Oe(oe(e),"iterate",Pt),Reflect.get(e,"size",e)}function Br(e,t=!1){!t&&!Ye(e)&&!Ht(e)&&(e=oe(e));const n=oe(this);return lo(n).has.call(n,e)||(n.add(e),pt(n,"add",e,e)),this}function Lr(e,t,n=!1){!n&&!Ye(t)&&!Ht(t)&&(t=oe(t));const o=oe(this),{has:r,get:s}=lo(o);let i=r.call(o,e);i||(e=oe(e),i=r.call(o,e));const a=s.call(o,e);return o.set(e,t),i?Tt(t,a)&&pt(o,"set",e,t):pt(o,"add",e,t),this}function Pr(e){const t=oe(this),{has:n,get:o}=lo(t);let r=n.call(t,e);r||(e=oe(e),r=n.call(t,e)),o&&o.call(t,e);const s=t.delete(e);return r&&pt(t,"delete",e,void 0),s}function Fr(){const e=oe(this),t=e.size!==0,n=e.clear();return t&&pt(e,"clear",void 0,void 0),n}function zn(e,t){return function(o,r){const s=this,i=s.__v_raw,a=oe(i),l=t?cr:e?hr:Re;return!e&&Oe(a,"iterate",Pt),i.forEach((d,u)=>o.call(r,l(d),l(u),s))}}function $n(e,t,n){return function(...o){const r=this.__v_raw,s=oe(r),i=Kt(s),a=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,d=r[e](...o),u=n?cr:t?hr:Re;return!t&&Oe(s,"iterate",l?$o:Pt),{next(){const{value:h,done:p}=d.next();return p?{value:h,done:p}:{value:a?[u(h[0]),u(h[1])]:u(h),done:p}},[Symbol.iterator](){return this}}}}function wt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Ua(){const e={get(s){return Fn(this,s)},get size(){return Hn(this)},has:Dn,add:Br,set:Lr,delete:Pr,clear:Fr,forEach:zn(!1,!1)},t={get(s){return Fn(this,s,!1,!0)},get size(){return Hn(this)},has:Dn,add(s){return Br.call(this,s,!0)},set(s,i){return Lr.call(this,s,i,!0)},delete:Pr,clear:Fr,forEach:zn(!1,!0)},n={get(s){return Fn(this,s,!0)},get size(){return Hn(this,!0)},has(s){return Dn.call(this,s,!0)},add:wt("add"),set:wt("set"),delete:wt("delete"),clear:wt("clear"),forEach:zn(!0,!1)},o={get(s){return Fn(this,s,!0,!0)},get size(){return Hn(this,!0)},has(s){return Dn.call(this,s,!0)},add:wt("add"),set:wt("set"),delete:wt("delete"),clear:wt("clear"),forEach:zn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=$n(s,!1,!1),n[s]=$n(s,!0,!1),t[s]=$n(s,!1,!0),o[s]=$n(s,!0,!0)}),[e,n,t,o]}const[Xa,Ya,Va,Ka]=Ua();function ur(e,t){const n=t?e?Ka:Va:e?Ya:Xa;return(o,r,s)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?o:Reflect.get(ne(n,r)&&r in o?n:o,r,s)}const Ga={get:ur(!1,!1)},Wa={get:ur(!1,!0)},qa={get:ur(!0,!1)};const Js=new WeakMap,Qs=new WeakMap,ei=new WeakMap,Za=new WeakMap;function Ja(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qa(e){return e.__v_skip||!Object.isExtensible(e)?0:Ja(xa(e))}function co(e){return Ht(e)?e:fr(e,!1,za,Ga,Js)}function ti(e){return fr(e,!1,ja,Wa,Qs)}function ni(e){return fr(e,!0,$a,qa,ei)}function fr(e,t,n,o,r){if(!de(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=r.get(e);if(s)return s;const i=Qa(e);if(i===0)return e;const a=new Proxy(e,i===2?o:n);return r.set(e,a),a}function Gt(e){return Ht(e)?Gt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ht(e){return!!(e&&e.__v_isReadonly)}function Ye(e){return!!(e&&e.__v_isShallow)}function dr(e){return e?!!e.__v_raw:!1}function oe(e){const t=e&&e.__v_raw;return t?oe(t):e}function el(e){return!ne(e,"__v_skip")&&Object.isExtensible(e)&&Fs(e,"__v_skip",!0),e}const Re=e=>de(e)?co(e):e,hr=e=>de(e)?ni(e):e;function ke(e){return e?e.__v_isRef===!0:!1}function uo(e){return oi(e,!1)}function tl(e){return oi(e,!0)}function oi(e,t){return ke(e)?e:new nl(e,t)}class nl{constructor(t,n){this.dep=new lr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:oe(t),this._value=n?t:Re(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,o=this.__v_isShallow||Ye(t)||Ht(t);t=o?t:oe(t),Tt(t,n)&&(this._rawValue=t,this._value=o?t:Re(t),this.dep.trigger())}}function je(e){return ke(e)?e.value:e}const ol={get:(e,t,n)=>t==="__v_raw"?e:je(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const r=e[t];return ke(r)&&!ke(n)?(r.value=n,!0):Reflect.set(e,t,n,o)}};function ri(e){return Gt(e)?e:new Proxy(e,ol)}class rl{constructor(t,n,o){this.fn=t,this.setter=n,this._value=void 0,this.dep=new lr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=vn-1,this.effect=this,this.__v_isReadonly=!n,this.isSSR=o}notify(){this.flags|=16,ie!==this&&this.dep.notify()}get value(){const t=this.dep.track();return Vs(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function sl(e,t,n=!1){let o,r;return G(e)?o=e:(o=e.get,r=e.set),new rl(o,r,n)}const jn={},Gn=new WeakMap;let Bt;function il(e,t=!1,n=Bt){if(n){let o=Gn.get(n);o||Gn.set(n,o=[]),o.push(e)}}function al(e,t,n=le){const{immediate:o,deep:r,once:s,scheduler:i,augmentJob:a,call:l}=n,d=B=>r?B:Ye(B)||r===!1||r===0?kt(B,1):kt(B);let u,h,p,b,L=!1,M=!1;if(ke(e)?(h=()=>e.value,L=Ye(e)):Gt(e)?(h=()=>d(e),L=!0):V(e)?(M=!0,L=e.some(B=>Gt(B)||Ye(B)),h=()=>e.map(B=>{if(ke(B))return B.value;if(Gt(B))return d(B);if(G(B))return l?l(B,2):B()})):G(e)?t?h=l?()=>l(e,2):e:h=()=>{if(p){Ot();try{p()}finally{Nt()}}const B=Bt;Bt=u;try{return l?l(e,3,[b]):e(b)}finally{Bt=B}}:h=it,t&&r){const B=h,J=r===!0?1/0:r;h=()=>kt(B(),J)}const Y=Ma(),z=()=>{u.stop(),Y&&nr(Y.effects,u)};if(s)if(t){const B=t;t=(...J)=>{B(...J),z()}}else{const B=h;h=()=>{B(),z()}}let P=M?new Array(e.length).fill(jn):jn;const H=B=>{if(!(!(u.flags&1)||!u.dirty&&!B))if(t){const J=u.run();if(r||L||(M?J.some((ce,se)=>Tt(ce,P[se])):Tt(J,P))){p&&p();const ce=Bt;Bt=u;try{const se=[J,P===jn?void 0:M&&P[0]===jn?[]:P,b];l?l(t,3,se):t(...se),P=J}finally{Bt=ce}}}else u.run()};return a&&a(H),u=new js(h),u.scheduler=i?()=>i(H,!1):H,b=B=>il(B,!1,u),p=u.onStop=()=>{const B=Gn.get(u);if(B){if(l)l(B,4);else for(const J of B)J();Gn.delete(u)}},t?o?H(!0):P=u.run():i?i(H.bind(null,!0),!0):u.run(),z.pause=u.pause.bind(u),z.resume=u.resume.bind(u),z.stop=z,z}function kt(e,t=1/0,n){if(t<=0||!de(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,ke(e))kt(e.value,t,n);else if(V(e))for(let o=0;o<e.length;o++)kt(e[o],t,n);else if(Ms(e)||Kt(e))e.forEach(o=>{kt(o,t,n)});else if(Ps(e)){for(const o in e)kt(e[o],t,n);for(const o of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,o)&&kt(e[o],t,n)}return e}/**
* @vue/runtime-core v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Bn(e,t,n,o){try{return o?e(...o):e()}catch(r){fo(r,t,n)}}function lt(e,t,n,o){if(G(e)){const r=Bn(e,t,n,o);return r&&Bs(r)&&r.catch(s=>{fo(s,t,n)}),r}if(V(e)){const r=[];for(let s=0;s<e.length;s++)r.push(lt(e[s],t,n,o));return r}}function fo(e,t,n,o=!0){const r=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||le;if(t){let a=t.parent;const l=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](e,l,d)===!1)return}a=a.parent}if(s){Ot(),Bn(s,null,10,[e,l,d]),Nt();return}}ll(e,n,r,o,i)}function ll(e,t,n,o=!0,r=!1){if(r)throw e;console.error(e)}let yn=!1,jo=!1;const Be=[];let nt=0;const Wt=[];let yt=null,Xt=0;const si=Promise.resolve();let pr=null;function ii(e){const t=pr||si;return e?t.then(this?e.bind(this):e):t}function cl(e){let t=yn?nt+1:0,n=Be.length;for(;t<n;){const o=t+n>>>1,r=Be[o],s=xn(r);s<e||s===e&&r.flags&2?t=o+1:n=o}return t}function gr(e){if(!(e.flags&1)){const t=xn(e),n=Be[Be.length-1];!n||!(e.flags&2)&&t>=xn(n)?Be.push(e):Be.splice(cl(t),0,e),e.flags|=1,ai()}}function ai(){!yn&&!jo&&(jo=!0,pr=si.then(ci))}function ul(e){V(e)?Wt.push(...e):yt&&e.id===-1?yt.splice(Xt+1,0,e):e.flags&1||(Wt.push(e),e.flags|=1),ai()}function Dr(e,t,n=yn?nt+1:0){for(;n<Be.length;n++){const o=Be[n];if(o&&o.flags&2){if(e&&o.id!==e.uid)continue;Be.splice(n,1),n--,o.flags&4&&(o.flags&=-2),o(),o.flags&=-2}}}function li(e){if(Wt.length){const t=[...new Set(Wt)].sort((n,o)=>xn(n)-xn(o));if(Wt.length=0,yt){yt.push(...t);return}for(yt=t,Xt=0;Xt<yt.length;Xt++){const n=yt[Xt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}yt=null,Xt=0}}const xn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ci(e){jo=!1,yn=!0;try{for(nt=0;nt<Be.length;nt++){const t=Be[nt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Bn(t,t.i,t.i?15:14),t.flags&=-2)}}finally{for(;nt<Be.length;nt++){const t=Be[nt];t&&(t.flags&=-2)}nt=0,Be.length=0,li(),yn=!1,pr=null,(Be.length||Wt.length)&&ci()}}let Le=null,ui=null;function Wn(e){const t=Le;return Le=e,ui=e&&e.type.__scopeId||null,t}function ot(e,t=Le,n){if(!t||e._n)return e;const o=(...r)=>{o._d&&Kr(-1);const s=Wn(t);let i;try{i=e(...r)}finally{Wn(s),o._d&&Kr(1)}return i};return o._n=!0,o._c=!0,o._d=!0,o}function It(e,t,n,o){const r=e.dirs,s=t&&t.dirs;for(let i=0;i<r.length;i++){const a=r[i];s&&(a.oldValue=s[i].value);let l=a.dir[o];l&&(Ot(),lt(l,n,8,[e.el,a,e,t]),Nt())}}const fl=Symbol("_vte"),dl=e=>e.__isTeleport;function br(e,t){e.shapeFlag&6&&e.component?(e.transition=t,br(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function fi(e,t){return G(e)?Te({name:e.name},t,{setup:e}):e}function di(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Uo(e,t,n,o,r=!1){if(V(e)){e.forEach((L,M)=>Uo(L,t&&(V(t)?t[M]:t),n,o,r));return}if(qt(o)&&!r)return;const s=o.shapeFlag&4?_r(o.component):o.el,i=r?null:s,{i:a,r:l}=e,d=t&&t.r,u=a.refs===le?a.refs={}:a.refs,h=a.setupState,p=oe(h),b=h===le?()=>!1:L=>ne(p,L);if(d!=null&&d!==l&&(ve(d)?(u[d]=null,b(d)&&(h[d]=null)):ke(d)&&(d.value=null)),G(l))Bn(l,a,12,[i,u]);else{const L=ve(l),M=ke(l);if(L||M){const Y=()=>{if(e.f){const z=L?b(l)?h[l]:u[l]:l.value;r?V(z)&&nr(z,s):V(z)?z.includes(s)||z.push(s):L?(u[l]=[s],b(l)&&(h[l]=u[l])):(l.value=[s],e.k&&(u[e.k]=l.value))}else L?(u[l]=i,b(l)&&(h[l]=i)):M&&(l.value=i,e.k&&(u[e.k]=i))};i?(Y.id=-1,ze(Y,n)):Y()}}}const qt=e=>!!e.type.__asyncLoader,hi=e=>e.type.__isKeepAlive;function hl(e,t){pi(e,"a",t)}function pl(e,t){pi(e,"da",t)}function pi(e,t,n=Ae){const o=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(ho(t,o,n),n){let r=n.parent;for(;r&&r.parent;)hi(r.parent.vnode)&&gl(o,t,n,r),r=r.parent}}function gl(e,t,n,o){const r=ho(t,e,o,!0);gi(()=>{nr(o[t],r)},n)}function ho(e,t,n=Ae,o=!1){if(n){const r=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...i)=>{Ot();const a=Ln(n),l=lt(t,n,e,i);return a(),Nt(),l});return o?r.unshift(s):r.push(s),s}}const mt=e=>(t,n=Ae)=>{(!bo||e==="sp")&&ho(e,(...o)=>t(...o),n)},bl=mt("bm"),ml=mt("m"),wl=mt("bu"),vl=mt("u"),_l=mt("bum"),gi=mt("um"),yl=mt("sp"),xl=mt("rtg"),El=mt("rtc");function kl(e,t=Ae){ho("ec",e,t)}const Sl="components";function Tl(e,t){return Al(Sl,e,!0,t)||e}const Rl=Symbol.for("v-ndc");function Al(e,t,n=!0,o=!1){const r=Le||Ae;if(r){const s=r.type;{const a=bc(s,!1);if(a&&(a===t||a===Ze(t)||a===io(Ze(t))))return s}const i=Hr(r[e]||s[e],t)||Hr(r.appContext[e],t);return!i&&o?s:i}}function Hr(e,t){return e&&(e[t]||e[Ze(t)]||e[io(Ze(t))])}function gt(e,t,n,o){let r;const s=n,i=V(e);if(i||ve(e)){const a=i&&Gt(e);let l=!1;a&&(l=!Ye(e),e=ao(e)),r=new Array(e.length);for(let d=0,u=e.length;d<u;d++)r[d]=t(l?Re(e[d]):e[d],d,void 0,s)}else if(typeof e=="number"){r=new Array(e);for(let a=0;a<e;a++)r[a]=t(a+1,a,void 0,s)}else if(de(e))if(e[Symbol.iterator])r=Array.from(e,(a,l)=>t(a,l,void 0,s));else{const a=Object.keys(e);r=new Array(a.length);for(let l=0,d=a.length;l<d;l++){const u=a[l];r[l]=t(e[u],u,l,s)}}else r=[];return r}function Ol(e,t,n={},o,r){if(Le.ce||Le.parent&&qt(Le.parent)&&Le.parent.ce)return ae(),Go(ge,null,[q("slot",n,o)],64);let s=e[t];s&&s._c&&(s._d=!1),ae();const i=s&&bi(s(n)),a=Go(ge,{key:(n.key||i&&i.key||`_${t}`)+(!i&&o?"_fb":"")},i||[],i&&e._===1?64:-2);return s&&s._c&&(s._d=!0),a}function bi(e){return e.some(t=>Zn(t)?!(t.type===Rt||t.type===ge&&!bi(t.children)):!0)?e:null}const Xo=e=>e?Pi(e)?_r(e):Xo(e.parent):null,gn=Te(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Xo(e.parent),$root:e=>Xo(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>mr(e),$forceUpdate:e=>e.f||(e.f=()=>{gr(e.update)}),$nextTick:e=>e.n||(e.n=ii.bind(e.proxy)),$watch:e=>ql.bind(e)}),Ao=(e,t)=>e!==le&&!e.__isScriptSetup&&ne(e,t),Nl={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:o,data:r,props:s,accessCache:i,type:a,appContext:l}=e;let d;if(t[0]!=="$"){const b=i[t];if(b!==void 0)switch(b){case 1:return o[t];case 2:return r[t];case 4:return n[t];case 3:return s[t]}else{if(Ao(o,t))return i[t]=1,o[t];if(r!==le&&ne(r,t))return i[t]=2,r[t];if((d=e.propsOptions[0])&&ne(d,t))return i[t]=3,s[t];if(n!==le&&ne(n,t))return i[t]=4,n[t];Yo&&(i[t]=0)}}const u=gn[t];let h,p;if(u)return t==="$attrs"&&Oe(e.attrs,"get",""),u(e);if((h=a.__cssModules)&&(h=h[t]))return h;if(n!==le&&ne(n,t))return i[t]=4,n[t];if(p=l.config.globalProperties,ne(p,t))return p[t]},set({_:e},t,n){const{data:o,setupState:r,ctx:s}=e;return Ao(r,t)?(r[t]=n,!0):o!==le&&ne(o,t)?(o[t]=n,!0):ne(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:r,propsOptions:s}},i){let a;return!!n[i]||e!==le&&ne(e,i)||Ao(t,i)||(a=s[0])&&ne(a,i)||ne(o,i)||ne(gn,i)||ne(r.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ne(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function zr(e){return V(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Yo=!0;function Cl(e){const t=mr(e),n=e.proxy,o=e.ctx;Yo=!1,t.beforeCreate&&$r(t.beforeCreate,e,"bc");const{data:r,computed:s,methods:i,watch:a,provide:l,inject:d,created:u,beforeMount:h,mounted:p,beforeUpdate:b,updated:L,activated:M,deactivated:Y,beforeDestroy:z,beforeUnmount:P,destroyed:H,unmounted:B,render:J,renderTracked:ce,renderTriggered:se,errorCaptured:Ne,serverPrefetch:_e,expose:Ce,inheritAttrs:Fe,components:Ve,directives:Pe,filters:ct}=t;if(d&&Il(d,o,null),i)for(const w in i){const T=i[w];G(T)&&(o[w]=T.bind(n))}if(r){const w=r.call(n,n);de(w)&&(e.data=co(w))}if(Yo=!0,s)for(const w in s){const T=s[w],j=G(T)?T.bind(n,n):G(T.get)?T.get.bind(n,n):it,W=!G(T)&&G(T.set)?T.set.bind(n):it,Z=Xe({get:j,set:W});Object.defineProperty(o,w,{enumerable:!0,configurable:!0,get:()=>Z.value,set:te=>Z.value=te})}if(a)for(const w in a)mi(a[w],o,n,w);if(l){const w=G(l)?l.call(n):l;Reflect.ownKeys(w).forEach(T=>{Xn(T,w[T])})}u&&$r(u,e,"c");function he(w,T){V(T)?T.forEach(j=>w(j.bind(n))):T&&w(T.bind(n))}if(he(bl,h),he(ml,p),he(wl,b),he(vl,L),he(hl,M),he(pl,Y),he(kl,Ne),he(El,ce),he(xl,se),he(_l,P),he(gi,B),he(yl,_e),V(Ce))if(Ce.length){const w=e.exposed||(e.exposed={});Ce.forEach(T=>{Object.defineProperty(w,T,{get:()=>n[T],set:j=>n[T]=j})})}else e.exposed||(e.exposed={});J&&e.render===it&&(e.render=J),Fe!=null&&(e.inheritAttrs=Fe),Ve&&(e.components=Ve),Pe&&(e.directives=Pe),_e&&di(e)}function Il(e,t,n=it){V(e)&&(e=Vo(e));for(const o in e){const r=e[o];let s;de(r)?"default"in r?s=at(r.from||o,r.default,!0):s=at(r.from||o):s=at(r),ke(s)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>s.value,set:i=>s.value=i}):t[o]=s}}function $r(e,t,n){lt(V(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,n)}function mi(e,t,n,o){let r=o.includes(".")?Ci(n,o):()=>n[o];if(ve(e)){const s=t[e];G(s)&&Jt(r,s)}else if(G(e))Jt(r,e.bind(n));else if(de(e))if(V(e))e.forEach(s=>mi(s,t,n,o));else{const s=G(e.handler)?e.handler.bind(n):t[e.handler];G(s)&&Jt(r,s,e)}}function mr(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:i}}=e.appContext,a=s.get(t);let l;return a?l=a:!r.length&&!n&&!o?l=t:(l={},r.length&&r.forEach(d=>qn(l,d,i,!0)),qn(l,t,i)),de(t)&&s.set(t,l),l}function qn(e,t,n,o=!1){const{mixins:r,extends:s}=t;s&&qn(e,s,n,!0),r&&r.forEach(i=>qn(e,i,n,!0));for(const i in t)if(!(o&&i==="expose")){const a=Ml[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const Ml={data:jr,props:Ur,emits:Ur,methods:dn,computed:dn,beforeCreate:Me,created:Me,beforeMount:Me,mounted:Me,beforeUpdate:Me,updated:Me,beforeDestroy:Me,beforeUnmount:Me,destroyed:Me,unmounted:Me,activated:Me,deactivated:Me,errorCaptured:Me,serverPrefetch:Me,components:dn,directives:dn,watch:Ll,provide:jr,inject:Bl};function jr(e,t){return t?e?function(){return Te(G(e)?e.call(this,this):e,G(t)?t.call(this,this):t)}:t:e}function Bl(e,t){return dn(Vo(e),Vo(t))}function Vo(e){if(V(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Me(e,t){return e?[...new Set([].concat(e,t))]:t}function dn(e,t){return e?Te(Object.create(null),e,t):t}function Ur(e,t){return e?V(e)&&V(t)?[...new Set([...e,...t])]:Te(Object.create(null),zr(e),zr(t??{})):t}function Ll(e,t){if(!e)return t;if(!t)return e;const n=Te(Object.create(null),e);for(const o in t)n[o]=Me(e[o],t[o]);return n}function wi(){return{app:null,config:{isNativeTag:_a,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Pl=0;function Fl(e,t){return function(o,r=null){G(o)||(o=Te({},o)),r!=null&&!de(r)&&(r=null);const s=wi(),i=new WeakSet,a=[];let l=!1;const d=s.app={_uid:Pl++,_component:o,_props:r,_container:null,_context:s,_instance:null,version:wc,get config(){return s.config},set config(u){},use(u,...h){return i.has(u)||(u&&G(u.install)?(i.add(u),u.install(d,...h)):G(u)&&(i.add(u),u(d,...h))),d},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),d},component(u,h){return h?(s.components[u]=h,d):s.components[u]},directive(u,h){return h?(s.directives[u]=h,d):s.directives[u]},mount(u,h,p){if(!l){const b=d._ceVNode||q(o,r);return b.appContext=s,p===!0?p="svg":p===!1&&(p=void 0),h&&t?t(b,u):e(b,u,p),l=!0,d._container=u,u.__vue_app__=d,_r(b.component)}},onUnmount(u){a.push(u)},unmount(){l&&(lt(a,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(u,h){return s.provides[u]=h,d},runWithContext(u){const h=Zt;Zt=d;try{return u()}finally{Zt=h}}};return d}}let Zt=null;function Xn(e,t){if(Ae){let n=Ae.provides;const o=Ae.parent&&Ae.parent.provides;o===n&&(n=Ae.provides=Object.create(o)),n[e]=t}}function at(e,t,n=!1){const o=Ae||Le;if(o||Zt){const r=Zt?Zt._context.provides:o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&G(t)?t.call(o&&o.proxy):t}}const vi={},_i=()=>Object.create(vi),yi=e=>Object.getPrototypeOf(e)===vi;function Dl(e,t,n,o=!1){const r={},s=_i();e.propsDefaults=Object.create(null),xi(e,t,r,s);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);n?e.props=o?r:ti(r):e.type.props?e.props=r:e.props=s,e.attrs=s}function Hl(e,t,n,o){const{props:r,attrs:s,vnode:{patchFlag:i}}=e,a=oe(r),[l]=e.propsOptions;let d=!1;if((o||i>0)&&!(i&16)){if(i&8){const u=e.vnode.dynamicProps;for(let h=0;h<u.length;h++){let p=u[h];if(po(e.emitsOptions,p))continue;const b=t[p];if(l)if(ne(s,p))b!==s[p]&&(s[p]=b,d=!0);else{const L=Ze(p);r[L]=Ko(l,a,L,b,e,!1)}else b!==s[p]&&(s[p]=b,d=!0)}}}else{xi(e,t,r,s)&&(d=!0);let u;for(const h in a)(!t||!ne(t,h)&&((u=zt(h))===h||!ne(t,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Ko(l,a,h,void 0,e,!0)):delete r[h]);if(s!==a)for(const h in s)(!t||!ne(t,h))&&(delete s[h],d=!0)}d&&pt(e.attrs,"set","")}function xi(e,t,n,o){const[r,s]=e.propsOptions;let i=!1,a;if(t)for(let l in t){if(hn(l))continue;const d=t[l];let u;r&&ne(r,u=Ze(l))?!s||!s.includes(u)?n[u]=d:(a||(a={}))[u]=d:po(e.emitsOptions,l)||(!(l in o)||d!==o[l])&&(o[l]=d,i=!0)}if(s){const l=oe(n),d=a||le;for(let u=0;u<s.length;u++){const h=s[u];n[h]=Ko(r,l,h,d[h],e,!ne(d,h))}}return i}function Ko(e,t,n,o,r,s){const i=e[n];if(i!=null){const a=ne(i,"default");if(a&&o===void 0){const l=i.default;if(i.type!==Function&&!i.skipFactory&&G(l)){const{propsDefaults:d}=r;if(n in d)o=d[n];else{const u=Ln(r);o=d[n]=l.call(null,t),u()}}else o=l;r.ce&&r.ce._setProp(n,o)}i[0]&&(s&&!a?o=!1:i[1]&&(o===""||o===zt(n))&&(o=!0))}return o}const zl=new WeakMap;function Ei(e,t,n=!1){const o=n?zl:t.propsCache,r=o.get(e);if(r)return r;const s=e.props,i={},a=[];let l=!1;if(!G(e)){const u=h=>{l=!0;const[p,b]=Ei(h,t,!0);Te(i,p),b&&a.push(...b)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!l)return de(e)&&o.set(e,Vt),Vt;if(V(s))for(let u=0;u<s.length;u++){const h=Ze(s[u]);Xr(h)&&(i[h]=le)}else if(s)for(const u in s){const h=Ze(u);if(Xr(h)){const p=s[u],b=i[h]=V(p)||G(p)?{type:p}:Te({},p),L=b.type;let M=!1,Y=!0;if(V(L))for(let z=0;z<L.length;++z){const P=L[z],H=G(P)&&P.name;if(H==="Boolean"){M=!0;break}else H==="String"&&(Y=!1)}else M=G(L)&&L.name==="Boolean";b[0]=M,b[1]=Y,(M||ne(b,"default"))&&a.push(h)}}const d=[i,a];return de(e)&&o.set(e,d),d}function Xr(e){return e[0]!=="$"&&!hn(e)}const ki=e=>e[0]==="_"||e==="$stable",wr=e=>V(e)?e.map(st):[st(e)],$l=(e,t,n)=>{if(t._n)return t;const o=ot((...r)=>wr(t(...r)),n);return o._c=!1,o},Si=(e,t,n)=>{const o=e._ctx;for(const r in e){if(ki(r))continue;const s=e[r];if(G(s))t[r]=$l(r,s,o);else if(s!=null){const i=wr(s);t[r]=()=>i}}},Ti=(e,t)=>{const n=wr(t);e.slots.default=()=>n},Ri=(e,t,n)=>{for(const o in t)(n||o!=="_")&&(e[o]=t[o])},jl=(e,t,n)=>{const o=e.slots=_i();if(e.vnode.shapeFlag&32){const r=t._;r?(Ri(o,t,n),n&&Fs(o,"_",r,!0)):Si(t,o)}else t&&Ti(e,t)},Ul=(e,t,n)=>{const{vnode:o,slots:r}=e;let s=!0,i=le;if(o.shapeFlag&32){const a=t._;a?n&&a===1?s=!1:Ri(r,t,n):(s=!t.$stable,Si(t,r)),i=t}else t&&(Ti(e,t),i={default:1});if(s)for(const a in r)!ki(a)&&i[a]==null&&delete r[a]},ze=oc;function Xl(e){return Yl(e)}function Yl(e,t){const n=Ds();n.__VUE__=!0;const{insert:o,remove:r,patchProp:s,createElement:i,createText:a,createComment:l,setText:d,setElementText:u,parentNode:h,nextSibling:p,setScopeId:b=it,insertStaticContent:L}=e,M=(c,f,g,x=null,v=null,k=null,_=void 0,A=null,S=!!f.dynamicChildren)=>{if(c===f)return;c&&!un(c,f)&&(x=y(c),te(c,v,k,!0),c=null),f.patchFlag===-2&&(S=!1,f.dynamicChildren=null);const{type:m,ref:$,shapeFlag:O}=f;switch(m){case go:Y(c,f,g,x);break;case Rt:z(c,f,g,x);break;case Co:c==null&&P(f,g,x,_);break;case ge:Ve(c,f,g,x,v,k,_,A,S);break;default:O&1?J(c,f,g,x,v,k,_,A,S):O&6?Pe(c,f,g,x,v,k,_,A,S):(O&64||O&128)&&m.process(c,f,g,x,v,k,_,A,S,F)}$!=null&&v&&Uo($,c&&c.ref,k,f||c,!f)},Y=(c,f,g,x)=>{if(c==null)o(f.el=a(f.children),g,x);else{const v=f.el=c.el;f.children!==c.children&&d(v,f.children)}},z=(c,f,g,x)=>{c==null?o(f.el=l(f.children||""),g,x):f.el=c.el},P=(c,f,g,x)=>{[c.el,c.anchor]=L(c.children,f,g,x,c.el,c.anchor)},H=({el:c,anchor:f},g,x)=>{let v;for(;c&&c!==f;)v=p(c),o(c,g,x),c=v;o(f,g,x)},B=({el:c,anchor:f})=>{let g;for(;c&&c!==f;)g=p(c),r(c),c=g;r(f)},J=(c,f,g,x,v,k,_,A,S)=>{f.type==="svg"?_="svg":f.type==="math"&&(_="mathml"),c==null?ce(f,g,x,v,k,_,A,S):_e(c,f,v,k,_,A,S)},ce=(c,f,g,x,v,k,_,A)=>{let S,m;const{props:$,shapeFlag:O,transition:D,dirs:X}=c;if(S=c.el=i(c.type,k,$&&$.is,$),O&8?u(S,c.children):O&16&&Ne(c.children,S,null,x,v,Oo(c,k),_,A),X&&It(c,null,x,"created"),se(S,c,c.scopeId,_,x),$){for(const R in $)R!=="value"&&!hn(R)&&s(S,R,null,$[R],k,x);"value"in $&&s(S,"value",null,$.value,k),(m=$.onVnodeBeforeMount)&&tt(m,x,c)}X&&It(c,null,x,"beforeMount");const E=Vl(v,D);E&&D.beforeEnter(S),o(S,f,g),((m=$&&$.onVnodeMounted)||E||X)&&ze(()=>{m&&tt(m,x,c),E&&D.enter(S),X&&It(c,null,x,"mounted")},v)},se=(c,f,g,x,v)=>{if(g&&b(c,g),x)for(let k=0;k<x.length;k++)b(c,x[k]);if(v){let k=v.subTree;if(f===k||Mi(k.type)&&(k.ssContent===f||k.ssFallback===f)){const _=v.vnode;se(c,_,_.scopeId,_.slotScopeIds,v.parent)}}},Ne=(c,f,g,x,v,k,_,A,S=0)=>{for(let m=S;m<c.length;m++){const $=c[m]=A?xt(c[m]):st(c[m]);M(null,$,f,g,x,v,k,_,A)}},_e=(c,f,g,x,v,k,_)=>{const A=f.el=c.el;let{patchFlag:S,dynamicChildren:m,dirs:$}=f;S|=c.patchFlag&16;const O=c.props||le,D=f.props||le;let X;if(g&&Mt(g,!1),(X=D.onVnodeBeforeUpdate)&&tt(X,g,f,c),$&&It(f,c,g,"beforeUpdate"),g&&Mt(g,!0),(O.innerHTML&&D.innerHTML==null||O.textContent&&D.textContent==null)&&u(A,""),m?Ce(c.dynamicChildren,m,A,g,x,Oo(f,v),k):_||T(c,f,A,null,g,x,Oo(f,v),k,!1),S>0){if(S&16)Fe(A,O,D,g,v);else if(S&2&&O.class!==D.class&&s(A,"class",null,D.class,v),S&4&&s(A,"style",O.style,D.style,v),S&8){const E=f.dynamicProps;for(let R=0;R<E.length;R++){const I=E[R],K=O[I],Q=D[I];(Q!==K||I==="value")&&s(A,I,K,Q,v,g)}}S&1&&c.children!==f.children&&u(A,f.children)}else!_&&m==null&&Fe(A,O,D,g,v);((X=D.onVnodeUpdated)||$)&&ze(()=>{X&&tt(X,g,f,c),$&&It(f,c,g,"updated")},x)},Ce=(c,f,g,x,v,k,_)=>{for(let A=0;A<f.length;A++){const S=c[A],m=f[A],$=S.el&&(S.type===ge||!un(S,m)||S.shapeFlag&70)?h(S.el):g;M(S,m,$,null,x,v,k,_,!0)}},Fe=(c,f,g,x,v)=>{if(f!==g){if(f!==le)for(const k in f)!hn(k)&&!(k in g)&&s(c,k,f[k],null,v,x);for(const k in g){if(hn(k))continue;const _=g[k],A=f[k];_!==A&&k!=="value"&&s(c,k,A,_,v,x)}"value"in g&&s(c,"value",f.value,g.value,v)}},Ve=(c,f,g,x,v,k,_,A,S)=>{const m=f.el=c?c.el:a(""),$=f.anchor=c?c.anchor:a("");let{patchFlag:O,dynamicChildren:D,slotScopeIds:X}=f;X&&(A=A?A.concat(X):X),c==null?(o(m,g,x),o($,g,x),Ne(f.children||[],g,$,v,k,_,A,S)):O>0&&O&64&&D&&c.dynamicChildren?(Ce(c.dynamicChildren,D,g,v,k,_,A),(f.key!=null||v&&f===v.subTree)&&Ai(c,f,!0)):T(c,f,g,$,v,k,_,A,S)},Pe=(c,f,g,x,v,k,_,A,S)=>{f.slotScopeIds=A,c==null?f.shapeFlag&512?v.ctx.activate(f,g,x,_,S):ct(f,g,x,v,k,_,S):De(c,f,S)},ct=(c,f,g,x,v,k,_)=>{const A=c.component=fc(c,x,v);if(hi(c)&&(A.ctx.renderer=F),dc(A,!1,_),A.asyncDep){if(v&&v.registerDep(A,he,_),!c.el){const S=A.subTree=q(Rt);z(null,S,f,g)}}else he(A,c,f,g,v,k,_)},De=(c,f,g)=>{const x=f.component=c.component;if(tc(c,f,g))if(x.asyncDep&&!x.asyncResolved){w(x,f,g);return}else x.next=f,x.update();else f.el=c.el,x.vnode=f},he=(c,f,g,x,v,k,_)=>{const A=()=>{if(c.isMounted){let{next:O,bu:D,u:X,parent:E,vnode:R}=c;{const Ie=Oi(c);if(Ie){O&&(O.el=R.el,w(c,O,_)),Ie.asyncDep.then(()=>{c.isUnmounted||A()});return}}let I=O,K;Mt(c,!1),O?(O.el=R.el,w(c,O,_)):O=R,D&&Eo(D),(K=O.props&&O.props.onVnodeBeforeUpdate)&&tt(K,E,O,R),Mt(c,!0);const Q=No(c),be=c.subTree;c.subTree=Q,M(be,Q,h(be.el),y(be),c,v,k),O.el=Q.el,I===null&&nc(c,Q.el),X&&ze(X,v),(K=O.props&&O.props.onVnodeUpdated)&&ze(()=>tt(K,E,O,R),v)}else{let O;const{el:D,props:X}=f,{bm:E,m:R,parent:I,root:K,type:Q}=c,be=qt(f);if(Mt(c,!1),E&&Eo(E),!be&&(O=X&&X.onVnodeBeforeMount)&&tt(O,I,f),Mt(c,!0),D&&ue){const Ie=()=>{c.subTree=No(c),ue(D,c.subTree,c,v,null)};be&&Q.__asyncHydrate?Q.__asyncHydrate(D,c,Ie):Ie()}else{K.ce&&K.ce._injectChildStyle(Q);const Ie=c.subTree=No(c);M(null,Ie,g,x,c,v,k),f.el=Ie.el}if(R&&ze(R,v),!be&&(O=X&&X.onVnodeMounted)){const Ie=f;ze(()=>tt(O,I,Ie),v)}(f.shapeFlag&256||I&&qt(I.vnode)&&I.vnode.shapeFlag&256)&&c.a&&ze(c.a,v),c.isMounted=!0,f=g=x=null}};c.scope.on();const S=c.effect=new js(A);c.scope.off();const m=c.update=S.run.bind(S),$=c.job=S.runIfDirty.bind(S);$.i=c,$.id=c.uid,S.scheduler=()=>gr($),Mt(c,!0),m()},w=(c,f,g)=>{f.component=c;const x=c.vnode.props;c.vnode=f,c.next=null,Hl(c,f.props,x,g),Ul(c,f.children,g),Ot(),Dr(c),Nt()},T=(c,f,g,x,v,k,_,A,S=!1)=>{const m=c&&c.children,$=c?c.shapeFlag:0,O=f.children,{patchFlag:D,shapeFlag:X}=f;if(D>0){if(D&128){W(m,O,g,x,v,k,_,A,S);return}else if(D&256){j(m,O,g,x,v,k,_,A,S);return}}X&8?($&16&&pe(m,v,k),O!==m&&u(g,O)):$&16?X&16?W(m,O,g,x,v,k,_,A,S):pe(m,v,k,!0):($&8&&u(g,""),X&16&&Ne(O,g,x,v,k,_,A,S))},j=(c,f,g,x,v,k,_,A,S)=>{c=c||Vt,f=f||Vt;const m=c.length,$=f.length,O=Math.min(m,$);let D;for(D=0;D<O;D++){const X=f[D]=S?xt(f[D]):st(f[D]);M(c[D],X,g,null,v,k,_,A,S)}m>$?pe(c,v,k,!0,!1,O):Ne(f,g,x,v,k,_,A,S,O)},W=(c,f,g,x,v,k,_,A,S)=>{let m=0;const $=f.length;let O=c.length-1,D=$-1;for(;m<=O&&m<=D;){const X=c[m],E=f[m]=S?xt(f[m]):st(f[m]);if(un(X,E))M(X,E,g,null,v,k,_,A,S);else break;m++}for(;m<=O&&m<=D;){const X=c[O],E=f[D]=S?xt(f[D]):st(f[D]);if(un(X,E))M(X,E,g,null,v,k,_,A,S);else break;O--,D--}if(m>O){if(m<=D){const X=D+1,E=X<$?f[X].el:x;for(;m<=D;)M(null,f[m]=S?xt(f[m]):st(f[m]),g,E,v,k,_,A,S),m++}}else if(m>D)for(;m<=O;)te(c[m],v,k,!0),m++;else{const X=m,E=m,R=new Map;for(m=E;m<=D;m++){const He=f[m]=S?xt(f[m]):st(f[m]);He.key!=null&&R.set(He.key,m)}let I,K=0;const Q=D-E+1;let be=!1,Ie=0;const Ct=new Array(Q);for(m=0;m<Q;m++)Ct[m]=0;for(m=X;m<=O;m++){const He=c[m];if(K>=Q){te(He,v,k,!0);continue}let et;if(He.key!=null)et=R.get(He.key);else for(I=E;I<=D;I++)if(Ct[I-E]===0&&un(He,f[I])){et=I;break}et===void 0?te(He,v,k,!0):(Ct[et-E]=m+1,et>=Ie?Ie=et:be=!0,M(He,f[et],g,null,v,k,_,A,S),K++)}const Ar=be?Kl(Ct):Vt;for(I=Ar.length-1,m=Q-1;m>=0;m--){const He=E+m,et=f[He],Or=He+1<$?f[He+1].el:x;Ct[m]===0?M(null,et,g,Or,v,k,_,A,S):be&&(I<0||m!==Ar[I]?Z(et,g,Or,2):I--)}}},Z=(c,f,g,x,v=null)=>{const{el:k,type:_,transition:A,children:S,shapeFlag:m}=c;if(m&6){Z(c.component.subTree,f,g,x);return}if(m&128){c.suspense.move(f,g,x);return}if(m&64){_.move(c,f,g,F);return}if(_===ge){o(k,f,g);for(let O=0;O<S.length;O++)Z(S[O],f,g,x);o(c.anchor,f,g);return}if(_===Co){H(c,f,g);return}if(x!==2&&m&1&&A)if(x===0)A.beforeEnter(k),o(k,f,g),ze(()=>A.enter(k),v);else{const{leave:O,delayLeave:D,afterLeave:X}=A,E=()=>o(k,f,g),R=()=>{O(k,()=>{E(),X&&X()})};D?D(k,E,R):R()}else o(k,f,g)},te=(c,f,g,x=!1,v=!1)=>{const{type:k,props:_,ref:A,children:S,dynamicChildren:m,shapeFlag:$,patchFlag:O,dirs:D,cacheIndex:X}=c;if(O===-2&&(v=!1),A!=null&&Uo(A,null,g,c,!0),X!=null&&(f.renderCache[X]=void 0),$&256){f.ctx.deactivate(c);return}const E=$&1&&D,R=!qt(c);let I;if(R&&(I=_&&_.onVnodeBeforeUnmount)&&tt(I,f,c),$&6)Ee(c.component,g,x);else{if($&128){c.suspense.unmount(g,x);return}E&&It(c,null,f,"beforeUnmount"),$&64?c.type.remove(c,f,g,F,x):m&&!m.hasOnce&&(k!==ge||O>0&&O&64)?pe(m,f,g,!1,!0):(k===ge&&O&384||!v&&$&16)&&pe(S,f,g),x&&xe(c)}(R&&(I=_&&_.onVnodeUnmounted)||E)&&ze(()=>{I&&tt(I,f,c),E&&It(c,null,f,"unmounted")},g)},xe=c=>{const{type:f,el:g,anchor:x,transition:v}=c;if(f===ge){Ke(g,x);return}if(f===Co){B(c);return}const k=()=>{r(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(c.shapeFlag&1&&v&&!v.persisted){const{leave:_,delayLeave:A}=v,S=()=>_(g,k);A?A(c.el,k,S):S()}else k()},Ke=(c,f)=>{let g;for(;c!==f;)g=p(c),r(c),c=g;r(f)},Ee=(c,f,g)=>{const{bum:x,scope:v,job:k,subTree:_,um:A,m:S,a:m}=c;Yr(S),Yr(m),x&&Eo(x),v.stop(),k&&(k.flags|=8,te(_,c,f,g)),A&&ze(A,f),ze(()=>{c.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},pe=(c,f,g,x=!1,v=!1,k=0)=>{for(let _=k;_<c.length;_++)te(c[_],f,g,x,v)},y=c=>{if(c.shapeFlag&6)return y(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const f=p(c.anchor||c.el),g=f&&f[fl];return g?p(g):f};let C=!1;const N=(c,f,g)=>{c==null?f._vnode&&te(f._vnode,null,null,!0):M(f._vnode||null,c,f,null,null,null,g),f._vnode=c,C||(C=!0,Dr(),li(),C=!1)},F={p:M,um:te,m:Z,r:xe,mt:ct,mc:Ne,pc:T,pbc:Ce,n:y,o:e};let ee,ue;return{render:N,hydrate:ee,createApp:Fl(N,ee)}}function Oo({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Mt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Vl(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ai(e,t,n=!1){const o=e.children,r=t.children;if(V(o)&&V(r))for(let s=0;s<o.length;s++){const i=o[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=xt(r[s]),a.el=i.el),!n&&a.patchFlag!==-2&&Ai(i,a)),a.type===go&&(a.el=i.el)}}function Kl(e){const t=e.slice(),n=[0];let o,r,s,i,a;const l=e.length;for(o=0;o<l;o++){const d=e[o];if(d!==0){if(r=n[n.length-1],e[r]<d){t[o]=r,n.push(o);continue}for(s=0,i=n.length-1;s<i;)a=s+i>>1,e[n[a]]<d?s=a+1:i=a;d<e[n[s]]&&(s>0&&(t[o]=n[s-1]),n[s]=o)}}for(s=n.length,i=n[s-1];s-- >0;)n[s]=i,i=t[i];return n}function Oi(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Oi(t)}function Yr(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Gl=Symbol.for("v-scx"),Wl=()=>at(Gl);function Jt(e,t,n){return Ni(e,t,n)}function Ni(e,t,n=le){const{immediate:o,deep:r,flush:s,once:i}=n,a=Te({},n);let l;if(bo)if(s==="sync"){const p=Wl();l=p.__watcherHandles||(p.__watcherHandles=[])}else if(!t||o)a.once=!0;else return{stop:it,resume:it,pause:it};const d=Ae;a.call=(p,b,L)=>lt(p,d,b,L);let u=!1;s==="post"?a.scheduler=p=>{ze(p,d&&d.suspense)}:s!=="sync"&&(u=!0,a.scheduler=(p,b)=>{b?p():gr(p)}),a.augmentJob=p=>{t&&(p.flags|=4),u&&(p.flags|=2,d&&(p.id=d.uid,p.i=d))};const h=al(e,t,a);return l&&l.push(h),h}function ql(e,t,n){const o=this.proxy,r=ve(e)?e.includes(".")?Ci(o,e):()=>o[e]:e.bind(o,o);let s;G(t)?s=t:(s=t.handler,n=t);const i=Ln(this),a=Ni(r,s.bind(o),n);return i(),a}function Ci(e,t){const n=t.split(".");return()=>{let o=e;for(let r=0;r<n.length&&o;r++)o=o[n[r]];return o}}const Zl=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ze(t)}Modifiers`]||e[`${zt(t)}Modifiers`];function Jl(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||le;let r=n;const s=t.startsWith("update:"),i=s&&Zl(o,t.slice(7));i&&(i.trim&&(r=n.map(u=>ve(u)?u.trim():u)),i.number&&(r=n.map(Sa)));let a,l=o[a=xo(t)]||o[a=xo(Ze(t))];!l&&s&&(l=o[a=xo(zt(t))]),l&&lt(l,e,6,r);const d=o[a+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,lt(d,e,6,r)}}function Ii(e,t,n=!1){const o=t.emitsCache,r=o.get(e);if(r!==void 0)return r;const s=e.emits;let i={},a=!1;if(!G(e)){const l=d=>{const u=Ii(d,t,!0);u&&(a=!0,Te(i,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!a?(de(e)&&o.set(e,null),null):(V(s)?s.forEach(l=>i[l]=null):Te(i,s),de(e)&&o.set(e,i),i)}function po(e,t){return!e||!oo(t)?!1:(t=t.slice(2).replace(/Once$/,""),ne(e,t[0].toLowerCase()+t.slice(1))||ne(e,zt(t))||ne(e,t))}function No(e){const{type:t,vnode:n,proxy:o,withProxy:r,propsOptions:[s],slots:i,attrs:a,emit:l,render:d,renderCache:u,props:h,data:p,setupState:b,ctx:L,inheritAttrs:M}=e,Y=Wn(e);let z,P;try{if(n.shapeFlag&4){const B=r||o,J=B;z=st(d.call(J,B,u,h,b,p,L)),P=a}else{const B=t;z=st(B.length>1?B(h,{attrs:a,slots:i,emit:l}):B(h,null)),P=t.props?a:Ql(a)}}catch(B){bn.length=0,fo(B,e,1),z=q(Rt)}let H=z;if(P&&M!==!1){const B=Object.keys(P),{shapeFlag:J}=H;B.length&&J&7&&(s&&B.some(tr)&&(P=ec(P,s)),H=rn(H,P,!1,!0))}return n.dirs&&(H=rn(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&br(H,n.transition),z=H,Wn(Y),z}const Ql=e=>{let t;for(const n in e)(n==="class"||n==="style"||oo(n))&&((t||(t={}))[n]=e[n]);return t},ec=(e,t)=>{const n={};for(const o in e)(!tr(o)||!(o.slice(9)in t))&&(n[o]=e[o]);return n};function tc(e,t,n){const{props:o,children:r,component:s}=e,{props:i,children:a,patchFlag:l}=t,d=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return o?Vr(o,i,d):!!i;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const p=u[h];if(i[p]!==o[p]&&!po(d,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:o===i?!1:o?i?Vr(o,i,d):!0:!!i;return!1}function Vr(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let r=0;r<o.length;r++){const s=o[r];if(t[s]!==e[s]&&!po(n,s))return!0}return!1}function nc({vnode:e,parent:t},n){for(;t;){const o=t.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.el=e.el),o===e)(e=t.vnode).el=n,t=t.parent;else break}}const Mi=e=>e.__isSuspense;function oc(e,t){t&&t.pendingBranch?V(e)?t.effects.push(...e):t.effects.push(e):ul(e)}const ge=Symbol.for("v-fgt"),go=Symbol.for("v-txt"),Rt=Symbol.for("v-cmt"),Co=Symbol.for("v-stc"),bn=[];let Ue=null;function ae(e=!1){bn.push(Ue=e?null:[])}function rc(){bn.pop(),Ue=bn[bn.length-1]||null}let En=1;function Kr(e){En+=e,e<0&&Ue&&(Ue.hasOnce=!0)}function Bi(e){return e.dynamicChildren=En>0?Ue||Vt:null,rc(),En>0&&Ue&&Ue.push(e),e}function fe(e,t,n,o,r,s){return Bi(me(e,t,n,o,r,s,!0))}function Go(e,t,n,o,r){return Bi(q(e,t,n,o,r,!0))}function Zn(e){return e?e.__v_isVNode===!0:!1}function un(e,t){return e.type===t.type&&e.key===t.key}const Li=({key:e})=>e??null,Yn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ve(e)||ke(e)||G(e)?{i:Le,r:e,k:t,f:!!n}:e:null);function me(e,t=null,n=null,o=0,r=null,s=e===ge?0:1,i=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Li(t),ref:t&&Yn(t),scopeId:ui,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Le};return a?(vr(l,n),s&128&&e.normalize(l)):n&&(l.shapeFlag|=ve(n)?8:16),En>0&&!i&&Ue&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Ue.push(l),l}const q=sc;function sc(e,t=null,n=null,o=0,r=null,s=!1){if((!e||e===Rl)&&(e=Rt),Zn(e)){const a=rn(e,t,!0);return n&&vr(a,n),En>0&&!s&&Ue&&(a.shapeFlag&6?Ue[Ue.indexOf(e)]=a:Ue.push(a)),a.patchFlag=-2,a}if(mc(e)&&(e=e.__vccOpts),t){t=ic(t);let{class:a,style:l}=t;a&&!ve(a)&&(t.class=Dt(a)),de(l)&&(dr(l)&&!V(l)&&(l=Te({},l)),t.style=rr(l))}const i=ve(e)?1:Mi(e)?128:dl(e)?64:de(e)?4:G(e)?2:0;return me(e,t,n,o,r,i,s,!0)}function ic(e){return e?dr(e)||yi(e)?Te({},e):e:null}function rn(e,t,n=!1,o=!1){const{props:r,ref:s,patchFlag:i,children:a,transition:l}=e,d=t?lc(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&Li(d),ref:t&&t.ref?n&&s?V(s)?s.concat(Yn(t)):[s,Yn(t)]:Yn(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ge?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&rn(e.ssContent),ssFallback:e.ssFallback&&rn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&o&&br(u,l.clone(u)),u}function Ge(e=" ",t=0){return q(go,null,e,t)}function ac(e="",t=!1){return t?(ae(),Go(Rt,null,e)):q(Rt,null,e)}function st(e){return e==null||typeof e=="boolean"?q(Rt):V(e)?q(ge,null,e.slice()):typeof e=="object"?xt(e):q(go,null,String(e))}function xt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:rn(e)}function vr(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(V(t))n=16;else if(typeof t=="object")if(o&65){const r=t.default;r&&(r._c&&(r._d=!1),vr(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!yi(t)?t._ctx=Le:r===3&&Le&&(Le.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else G(t)?(t={default:t,_ctx:Le},n=32):(t=String(t),o&64?(n=16,t=[Ge(t)]):n=8);e.children=t,e.shapeFlag|=n}function lc(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const r in o)if(r==="class")t.class!==o.class&&(t.class=Dt([t.class,o.class]));else if(r==="style")t.style=rr([t.style,o.style]);else if(oo(r)){const s=t[r],i=o[r];i&&s!==i&&!(V(s)&&s.includes(i))&&(t[r]=s?[].concat(s,i):i)}else r!==""&&(t[r]=o[r])}return t}function tt(e,t,n,o=null){lt(e,t,7,[n,o])}const cc=wi();let uc=0;function fc(e,t,n){const o=e.type,r=(t?t.appContext:e.appContext)||cc,s={uid:uc++,vnode:e,type:o,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ia(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ei(o,r),emitsOptions:Ii(o,r),emit:null,emitted:null,propsDefaults:le,inheritAttrs:o.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Jl.bind(null,s),e.ce&&e.ce(s),s}let Ae=null,Jn,Wo;{const e=Ds(),t=(n,o)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(o),s=>{r.length>1?r.forEach(i=>i(s)):r[0](s)}};Jn=t("__VUE_INSTANCE_SETTERS__",n=>Ae=n),Wo=t("__VUE_SSR_SETTERS__",n=>bo=n)}const Ln=e=>{const t=Ae;return Jn(e),e.scope.on(),()=>{e.scope.off(),Jn(t)}},Gr=()=>{Ae&&Ae.scope.off(),Jn(null)};function Pi(e){return e.vnode.shapeFlag&4}let bo=!1;function dc(e,t=!1,n=!1){t&&Wo(t);const{props:o,children:r}=e.vnode,s=Pi(e);Dl(e,o,s,t),jl(e,r,n);const i=s?hc(e,t):void 0;return t&&Wo(!1),i}function hc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Nl);const{setup:o}=n;if(o){const r=e.setupContext=o.length>1?gc(e):null,s=Ln(e);Ot();const i=Bn(o,e,0,[e.props,r]);if(Nt(),s(),Bs(i)){if(qt(e)||di(e),i.then(Gr,Gr),t)return i.then(a=>{Wr(e,a,t)}).catch(a=>{fo(a,e,0)});e.asyncDep=i}else Wr(e,i,t)}else Fi(e,t)}function Wr(e,t,n){G(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:de(t)&&(e.setupState=ri(t)),Fi(e,n)}let qr;function Fi(e,t,n){const o=e.type;if(!e.render){if(!t&&qr&&!o.render){const r=o.template||mr(e).template;if(r){const{isCustomElement:s,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:l}=o,d=Te(Te({isCustomElement:s,delimiters:a},i),l);o.render=qr(r,d)}}e.render=o.render||it}{const r=Ln(e);Ot();try{Cl(e)}finally{Nt(),r()}}}const pc={get(e,t){return Oe(e,"get",""),e[t]}};function gc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,pc),slots:e.slots,emit:e.emit,expose:t}}function _r(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ri(el(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in gn)return gn[n](e)},has(t,n){return n in t||n in gn}})):e.proxy}function bc(e,t=!0){return G(e)?e.displayName||e.name:e.name||t&&e.__name}function mc(e){return G(e)&&"__vccOpts"in e}const Xe=(e,t)=>sl(e,t,bo);function Di(e,t,n){const o=arguments.length;return o===2?de(t)&&!V(t)?Zn(t)?q(e,null,[t]):q(e,t):q(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&Zn(n)&&(n=[n]),q(e,t,n))}const wc="3.5.4";/**
* @vue/runtime-dom v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qo;const Zr=typeof window<"u"&&window.trustedTypes;if(Zr)try{qo=Zr.createPolicy("vue",{createHTML:e=>e})}catch{}const Hi=qo?e=>qo.createHTML(e):e=>e,vc="http://www.w3.org/2000/svg",_c="http://www.w3.org/1998/Math/MathML",dt=typeof document<"u"?document:null,Jr=dt&&dt.createElement("template"),yc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const r=t==="svg"?dt.createElementNS(vc,e):t==="mathml"?dt.createElementNS(_c,e):n?dt.createElement(e,{is:n}):dt.createElement(e);return e==="select"&&o&&o.multiple!=null&&r.setAttribute("multiple",o.multiple),r},createText:e=>dt.createTextNode(e),createComment:e=>dt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>dt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,o,r,s){const i=n?n.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Jr.innerHTML=Hi(o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e);const a=Jr.content;if(o==="svg"||o==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},xc=Symbol("_vtc");function Ec(e,t,n){const o=e[xc];o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Qr=Symbol("_vod"),kc=Symbol("_vsh"),Sc=Symbol(""),Tc=/(^|;)\s*display\s*:/;function Rc(e,t,n){const o=e.style,r=ve(n);let s=!1;if(n&&!r){if(t)if(ve(t))for(const i of t.split(";")){const a=i.slice(0,i.indexOf(":")).trim();n[a]==null&&Vn(o,a,"")}else for(const i in t)n[i]==null&&Vn(o,i,"");for(const i in n)i==="display"&&(s=!0),Vn(o,i,n[i])}else if(r){if(t!==n){const i=o[Sc];i&&(n+=";"+i),o.cssText=n,s=Tc.test(n)}}else t&&e.removeAttribute("style");Qr in e&&(e[Qr]=s?o.display:"",e[kc]&&(o.display="none"))}const es=/\s*!important$/;function Vn(e,t,n){if(V(n))n.forEach(o=>Vn(e,t,o));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const o=Ac(e,t);es.test(n)?e.setProperty(zt(o),n.replace(es,""),"important"):e[o]=n}}const ts=["Webkit","Moz","ms"],Io={};function Ac(e,t){const n=Io[t];if(n)return n;let o=Ze(t);if(o!=="filter"&&o in e)return Io[t]=o;o=io(o);for(let r=0;r<ts.length;r++){const s=ts[r]+o;if(s in e)return Io[t]=s}return t}const ns="http://www.w3.org/1999/xlink";function os(e,t,n,o,r,s=Ca(t)){o&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(ns,t.slice(6,t.length)):e.setAttributeNS(ns,t,n):n==null||s&&!Hs(n)?e.removeAttribute(t):e.setAttribute(t,s?"":At(n)?String(n):n)}function Oc(e,t,n,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Hi(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const i=r==="OPTION"?e.getAttribute("value")||"":e.value,a=n==null?e.type==="checkbox"?"on":"":String(n);(i!==a||!("_value"in e))&&(e.value=a),n==null&&e.removeAttribute(t),e._value=n;return}let s=!1;if(n===""||n==null){const i=typeof e[t];i==="boolean"?n=Hs(n):n==null&&i==="string"?(n="",s=!0):i==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function Nc(e,t,n,o){e.addEventListener(t,n,o)}function Cc(e,t,n,o){e.removeEventListener(t,n,o)}const rs=Symbol("_vei");function Ic(e,t,n,o,r=null){const s=e[rs]||(e[rs]={}),i=s[t];if(o&&i)i.value=o;else{const[a,l]=Mc(t);if(o){const d=s[t]=Pc(o,r);Nc(e,a,d,l)}else i&&(Cc(e,a,i,l),s[t]=void 0)}}const ss=/(?:Once|Passive|Capture)$/;function Mc(e){let t;if(ss.test(e)){t={};let o;for(;o=e.match(ss);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):zt(e.slice(2)),t]}let Mo=0;const Bc=Promise.resolve(),Lc=()=>Mo||(Bc.then(()=>Mo=0),Mo=Date.now());function Pc(e,t){const n=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=n.attached)return;lt(Fc(o,n.value),t,5,[o])};return n.value=e,n.attached=Lc(),n}function Fc(e,t){if(V(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(o=>r=>!r._stopped&&o&&o(r))}else return t}const is=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Dc=(e,t,n,o,r,s)=>{const i=r==="svg";t==="class"?Ec(e,o,i):t==="style"?Rc(e,n,o):oo(t)?tr(t)||Ic(e,t,n,o,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Hc(e,t,o,i))?(Oc(e,t,o),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&os(e,t,o,i,s,t!=="value")):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),os(e,t,o,i))};function Hc(e,t,n,o){if(o)return!!(t==="innerHTML"||t==="textContent"||t in e&&is(t)&&G(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return is(t)&&ve(n)?!1:!!(t in e||e._isVueCE&&(/[A-Z]/.test(t)||!ve(n)))}const zc=Te({patchProp:Dc},yc);let as;function $c(){return as||(as=Xl(zc))}const jc=(...e)=>{const t=$c().createApp(...e),{mount:n}=t;return t.mount=o=>{const r=Xc(o);if(!r)return;const s=t._component;!G(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const i=n(r,!1,Uc(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},t};function Uc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Xc(e){return ve(e)?document.querySelector(e):e}/*!
  * vue-router v4.4.4
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Yt=typeof document<"u";function zi(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Yc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&zi(e.default)}const re=Object.assign;function Bo(e,t){const n={};for(const o in t){const r=t[o];n[o]=Je(r)?r.map(e):e(r)}return n}const mn=()=>{},Je=Array.isArray,$i=/#/g,Vc=/&/g,Kc=/\//g,Gc=/=/g,Wc=/\?/g,ji=/\+/g,qc=/%5B/g,Zc=/%5D/g,Ui=/%5E/g,Jc=/%60/g,Xi=/%7B/g,Qc=/%7C/g,Yi=/%7D/g,eu=/%20/g;function yr(e){return encodeURI(""+e).replace(Qc,"|").replace(qc,"[").replace(Zc,"]")}function tu(e){return yr(e).replace(Xi,"{").replace(Yi,"}").replace(Ui,"^")}function Zo(e){return yr(e).replace(ji,"%2B").replace(eu,"+").replace($i,"%23").replace(Vc,"%26").replace(Jc,"`").replace(Xi,"{").replace(Yi,"}").replace(Ui,"^")}function nu(e){return Zo(e).replace(Gc,"%3D")}function ou(e){return yr(e).replace($i,"%23").replace(Wc,"%3F")}function ru(e){return e==null?"":ou(e).replace(Kc,"%2F")}function kn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const su=/\/$/,iu=e=>e.replace(su,"");function Lo(e,t,n="/"){let o,r={},s="",i="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(o=t.slice(0,l),s=t.slice(l+1,a>-1?a:t.length),r=e(s)),a>-1&&(o=o||t.slice(0,a),i=t.slice(a,t.length)),o=uu(o??t,n),{fullPath:o+(s&&"?")+s+i,path:o,query:r,hash:kn(i)}}function au(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ls(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function lu(e,t,n){const o=t.matched.length-1,r=n.matched.length-1;return o>-1&&o===r&&sn(t.matched[o],n.matched[r])&&Vi(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function sn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Vi(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!cu(e[n],t[n]))return!1;return!0}function cu(e,t){return Je(e)?cs(e,t):Je(t)?cs(t,e):e===t}function cs(e,t){return Je(t)?e.length===t.length&&e.every((n,o)=>n===t[o]):e.length===1&&e[0]===t}function uu(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),o=e.split("/"),r=o[o.length-1];(r===".."||r===".")&&o.push("");let s=n.length-1,i,a;for(i=0;i<o.length;i++)if(a=o[i],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+o.slice(i).join("/")}const vt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Sn;(function(e){e.pop="pop",e.push="push"})(Sn||(Sn={}));var wn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(wn||(wn={}));function fu(e){if(!e)if(Yt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),iu(e)}const du=/^[^#]+#/;function hu(e,t){return e.replace(du,"#")+t}function pu(e,t){const n=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:t.behavior,left:o.left-n.left-(t.left||0),top:o.top-n.top-(t.top||0)}}const mo=()=>({left:window.scrollX,top:window.scrollY});function gu(e){let t;if("el"in e){const n=e.el,o=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?o?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=pu(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function us(e,t){return(history.state?history.state.position-t:-1)+e}const Jo=new Map;function bu(e,t){Jo.set(e,t)}function mu(e){const t=Jo.get(e);return Jo.delete(e),t}let wu=()=>location.protocol+"//"+location.host;function Ki(e,t){const{pathname:n,search:o,hash:r}=t,s=e.indexOf("#");if(s>-1){let a=r.includes(e.slice(s))?e.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),ls(l,"")}return ls(n,e)+o+r}function vu(e,t,n,o){let r=[],s=[],i=null;const a=({state:p})=>{const b=Ki(e,location),L=n.value,M=t.value;let Y=0;if(p){if(n.value=b,t.value=p,i&&i===L){i=null;return}Y=M?p.position-M.position:0}else o(b);r.forEach(z=>{z(n.value,L,{delta:Y,type:Sn.pop,direction:Y?Y>0?wn.forward:wn.back:wn.unknown})})};function l(){i=n.value}function d(p){r.push(p);const b=()=>{const L=r.indexOf(p);L>-1&&r.splice(L,1)};return s.push(b),b}function u(){const{history:p}=window;p.state&&p.replaceState(re({},p.state,{scroll:mo()}),"")}function h(){for(const p of s)p();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:d,destroy:h}}function fs(e,t,n,o=!1,r=!1){return{back:e,current:t,forward:n,replaced:o,position:window.history.length,scroll:r?mo():null}}function _u(e){const{history:t,location:n}=window,o={value:Ki(e,n)},r={value:t.state};r.value||s(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(l,d,u){const h=e.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?e:e.slice(h))+l:wu()+e+l;try{t[u?"replaceState":"pushState"](d,"",p),r.value=d}catch(b){console.error(b),n[u?"replace":"assign"](p)}}function i(l,d){const u=re({},t.state,fs(r.value.back,l,r.value.forward,!0),d,{position:r.value.position});s(l,u,!0),o.value=l}function a(l,d){const u=re({},r.value,t.state,{forward:l,scroll:mo()});s(u.current,u,!0);const h=re({},fs(o.value,l,null),{position:u.position+1},d);s(l,h,!1),o.value=l}return{location:o,state:r,push:a,replace:i}}function yu(e){e=fu(e);const t=_u(e),n=vu(e,t.state,t.location,t.replace);function o(s,i=!0){i||n.pauseListeners(),history.go(s)}const r=re({location:"",base:e,go:o,createHref:hu.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function xu(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),yu(e)}function Eu(e){return typeof e=="string"||e&&typeof e=="object"}function Gi(e){return typeof e=="string"||typeof e=="symbol"}const Wi=Symbol("");var ds;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ds||(ds={}));function an(e,t){return re(new Error,{type:e,[Wi]:!0},t)}function ft(e,t){return e instanceof Error&&Wi in e&&(t==null||!!(e.type&t))}const hs="[^/]+?",ku={sensitive:!1,strict:!1,start:!0,end:!0},Su=/[.+*?^${}()[\]/\\]/g;function Tu(e,t){const n=re({},ku,t),o=[];let r=n.start?"^":"";const s=[];for(const d of e){const u=d.length?[]:[90];n.strict&&!d.length&&(r+="/");for(let h=0;h<d.length;h++){const p=d[h];let b=40+(n.sensitive?.25:0);if(p.type===0)h||(r+="/"),r+=p.value.replace(Su,"\\$&"),b+=40;else if(p.type===1){const{value:L,repeatable:M,optional:Y,regexp:z}=p;s.push({name:L,repeatable:M,optional:Y});const P=z||hs;if(P!==hs){b+=10;try{new RegExp(`(${P})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${L}" (${P}): `+B.message)}}let H=M?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;h||(H=Y&&d.length<2?`(?:/${H})`:"/"+H),Y&&(H+="?"),r+=H,b+=20,Y&&(b+=-8),M&&(b+=-20),P===".*"&&(b+=-50)}u.push(b)}o.push(u)}if(n.strict&&n.end){const d=o.length-1;o[d][o[d].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const i=new RegExp(r,n.sensitive?"":"i");function a(d){const u=d.match(i),h={};if(!u)return null;for(let p=1;p<u.length;p++){const b=u[p]||"",L=s[p-1];h[L.name]=b&&L.repeatable?b.split("/"):b}return h}function l(d){let u="",h=!1;for(const p of e){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const b of p)if(b.type===0)u+=b.value;else if(b.type===1){const{value:L,repeatable:M,optional:Y}=b,z=L in d?d[L]:"";if(Je(z)&&!M)throw new Error(`Provided param "${L}" is an array but it is not repeatable (* or + modifiers)`);const P=Je(z)?z.join("/"):z;if(!P)if(Y)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${L}"`);u+=P}}return u||"/"}return{re:i,score:o,keys:s,parse:a,stringify:l}}function Ru(e,t){let n=0;for(;n<e.length&&n<t.length;){const o=t[n]-e[n];if(o)return o;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function qi(e,t){let n=0;const o=e.score,r=t.score;for(;n<o.length&&n<r.length;){const s=Ru(o[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-o.length)===1){if(ps(o))return 1;if(ps(r))return-1}return r.length-o.length}function ps(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Au={type:0,value:""},Ou=/[a-zA-Z0-9_]/;function Nu(e){if(!e)return[[]];if(e==="/")return[[Au]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(b){throw new Error(`ERR (${n})/"${d}": ${b}`)}let n=0,o=n;const r=[];let s;function i(){s&&r.push(s),s=[]}let a=0,l,d="",u="";function h(){d&&(n===0?s.push({type:0,value:d}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:d,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),d="")}function p(){d+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==2){o=n,n=4;continue}switch(n){case 0:l==="/"?(d&&h(),i()):l===":"?(h(),n=1):p();break;case 4:p(),n=o;break;case 1:l==="("?n=2:Ou.test(l)?p():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${d}"`),h(),i(),r}function Cu(e,t,n){const o=Tu(Nu(e.path),n),r=re(o,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Iu(e,t){const n=[],o=new Map;t=ms({strict:!1,end:!0,sensitive:!1},t);function r(h){return o.get(h)}function s(h,p,b){const L=!b,M=Mu(h);M.aliasOf=b&&b.record;const Y=ms(t,h),z=[M];if("alias"in h){const B=typeof h.alias=="string"?[h.alias]:h.alias;for(const J of B)z.push(re({},M,{components:b?b.record.components:M.components,path:J,aliasOf:b?b.record:M}))}let P,H;for(const B of z){const{path:J}=B;if(p&&J[0]!=="/"){const ce=p.record.path,se=ce[ce.length-1]==="/"?"":"/";B.path=p.record.path+(J&&se+J)}if(P=Cu(B,p,Y),b?b.alias.push(P):(H=H||P,H!==P&&H.alias.push(P),L&&h.name&&!bs(P)&&i(h.name)),Zi(P)&&l(P),M.children){const ce=M.children;for(let se=0;se<ce.length;se++)s(ce[se],P,b&&b.children[se])}b=b||P}return H?()=>{i(H)}:mn}function i(h){if(Gi(h)){const p=o.get(h);p&&(o.delete(h),n.splice(n.indexOf(p),1),p.children.forEach(i),p.alias.forEach(i))}else{const p=n.indexOf(h);p>-1&&(n.splice(p,1),h.record.name&&o.delete(h.record.name),h.children.forEach(i),h.alias.forEach(i))}}function a(){return n}function l(h){const p=Pu(h,n);n.splice(p,0,h),h.record.name&&!bs(h)&&o.set(h.record.name,h)}function d(h,p){let b,L={},M,Y;if("name"in h&&h.name){if(b=o.get(h.name),!b)throw an(1,{location:h});Y=b.record.name,L=re(gs(p.params,b.keys.filter(H=>!H.optional).concat(b.parent?b.parent.keys.filter(H=>H.optional):[]).map(H=>H.name)),h.params&&gs(h.params,b.keys.map(H=>H.name))),M=b.stringify(L)}else if(h.path!=null)M=h.path,b=n.find(H=>H.re.test(M)),b&&(L=b.parse(M),Y=b.record.name);else{if(b=p.name?o.get(p.name):n.find(H=>H.re.test(p.path)),!b)throw an(1,{location:h,currentLocation:p});Y=b.record.name,L=re({},p.params,h.params),M=b.stringify(L)}const z=[];let P=b;for(;P;)z.unshift(P.record),P=P.parent;return{name:Y,path:M,params:L,matched:z,meta:Lu(z)}}e.forEach(h=>s(h));function u(){n.length=0,o.clear()}return{addRoute:s,resolve:d,removeRoute:i,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function gs(e,t){const n={};for(const o of t)o in e&&(n[o]=e[o]);return n}function Mu(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Bu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},mods:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Bu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const o in e.components)t[o]=typeof n=="object"?n[o]:n;return t}function bs(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Lu(e){return e.reduce((t,n)=>re(t,n.meta),{})}function ms(e,t){const n={};for(const o in e)n[o]=o in t?t[o]:e[o];return n}function Pu(e,t){let n=0,o=t.length;for(;n!==o;){const s=n+o>>1;qi(e,t[s])<0?o=s:n=s+1}const r=Fu(e);return r&&(o=t.lastIndexOf(r,o-1)),o}function Fu(e){let t=e;for(;t=t.parent;)if(Zi(t)&&qi(e,t)===0)return t}function Zi({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Du(e){const t={};if(e===""||e==="?")return t;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<o.length;++r){const s=o[r].replace(ji," "),i=s.indexOf("="),a=kn(i<0?s:s.slice(0,i)),l=i<0?null:kn(s.slice(i+1));if(a in t){let d=t[a];Je(d)||(d=t[a]=[d]),d.push(l)}else t[a]=l}return t}function ws(e){let t="";for(let n in e){const o=e[n];if(n=nu(n),o==null){o!==void 0&&(t+=(t.length?"&":"")+n);continue}(Je(o)?o.map(s=>s&&Zo(s)):[o&&Zo(o)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function Hu(e){const t={};for(const n in e){const o=e[n];o!==void 0&&(t[n]=Je(o)?o.map(r=>r==null?null:""+r):o==null?o:""+o)}return t}const zu=Symbol(""),vs=Symbol(""),xr=Symbol(""),Er=Symbol(""),Qo=Symbol("");function fn(){let e=[];function t(o){return e.push(o),()=>{const r=e.indexOf(o);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Et(e,t,n,o,r,s=i=>i()){const i=o&&(o.enterCallbacks[r]=o.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const d=p=>{p===!1?l(an(4,{from:n,to:t})):p instanceof Error?l(p):Eu(p)?l(an(2,{from:t,to:p})):(i&&o.enterCallbacks[r]===i&&typeof p=="function"&&i.push(p),a())},u=s(()=>e.call(o&&o.instances[r],t,n,d));let h=Promise.resolve(u);e.length<3&&(h=h.then(d)),h.catch(p=>l(p))})}function Po(e,t,n,o,r=s=>s()){const s=[];for(const i of e)for(const a in i.components){let l=i.components[a];if(!(t!=="beforeRouteEnter"&&!i.instances[a]))if(zi(l)){const u=(l.__vccOpts||l)[t];u&&s.push(Et(u,n,o,i,a,r))}else{let d=l();s.push(()=>d.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);const h=Yc(u)?u.default:u;i.mods[a]=u,i.components[a]=h;const b=(h.__vccOpts||h)[t];return b&&Et(b,n,o,i,a,r)()}))}}return s}function _s(e){const t=at(xr),n=at(Er),o=Xe(()=>{const l=je(e.to);return t.resolve(l)}),r=Xe(()=>{const{matched:l}=o.value,{length:d}=l,u=l[d-1],h=n.matched;if(!u||!h.length)return-1;const p=h.findIndex(sn.bind(null,u));if(p>-1)return p;const b=ys(l[d-2]);return d>1&&ys(u)===b&&h[h.length-1].path!==b?h.findIndex(sn.bind(null,l[d-2])):p}),s=Xe(()=>r.value>-1&&Uu(n.params,o.value.params)),i=Xe(()=>r.value>-1&&r.value===n.matched.length-1&&Vi(n.params,o.value.params));function a(l={}){return ju(l)?t[je(e.replace)?"replace":"push"](je(e.to)).catch(mn):Promise.resolve()}return{route:o,href:Xe(()=>o.value.href),isActive:s,isExactActive:i,navigate:a}}const $u=fi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:_s,setup(e,{slots:t}){const n=co(_s(e)),{options:o}=at(xr),r=Xe(()=>({[xs(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[xs(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:Di("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),Ji=$u;function ju(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Uu(e,t){for(const n in t){const o=t[n],r=e[n];if(typeof o=="string"){if(o!==r)return!1}else if(!Je(r)||r.length!==o.length||o.some((s,i)=>s!==r[i]))return!1}return!0}function ys(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const xs=(e,t,n)=>e??t??n,Xu=fi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const o=at(Qo),r=Xe(()=>e.route||o.value),s=at(vs,0),i=Xe(()=>{let d=je(s);const{matched:u}=r.value;let h;for(;(h=u[d])&&!h.components;)d++;return d}),a=Xe(()=>r.value.matched[i.value]);Xn(vs,Xe(()=>i.value+1)),Xn(zu,a),Xn(Qo,r);const l=uo();return Jt(()=>[l.value,a.value,e.name],([d,u,h],[p,b,L])=>{u&&(u.instances[h]=d,b&&b!==u&&d&&d===p&&(u.leaveGuards.size||(u.leaveGuards=b.leaveGuards),u.updateGuards.size||(u.updateGuards=b.updateGuards))),d&&u&&(!b||!sn(u,b)||!p)&&(u.enterCallbacks[h]||[]).forEach(M=>M(d))},{flush:"post"}),()=>{const d=r.value,u=e.name,h=a.value,p=h&&h.components[u];if(!p)return Es(n.default,{Component:p,route:d});const b=h.props[u],L=b?b===!0?d.params:typeof b=="function"?b(d):b:null,Y=Di(p,re({},L,t,{onVnodeUnmounted:z=>{z.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Es(n.default,{Component:Y,route:d})||Y}}});function Es(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Qi=Xu;function Yu(e){const t=Iu(e.routes,e),n=e.parseQuery||Du,o=e.stringifyQuery||ws,r=e.history,s=fn(),i=fn(),a=fn(),l=tl(vt);let d=vt;Yt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Bo.bind(null,y=>""+y),h=Bo.bind(null,ru),p=Bo.bind(null,kn);function b(y,C){let N,F;return Gi(y)?(N=t.getRecordMatcher(y),F=C):F=y,t.addRoute(F,N)}function L(y){const C=t.getRecordMatcher(y);C&&t.removeRoute(C)}function M(){return t.getRoutes().map(y=>y.record)}function Y(y){return!!t.getRecordMatcher(y)}function z(y,C){if(C=re({},C||l.value),typeof y=="string"){const f=Lo(n,y,C.path),g=t.resolve({path:f.path},C),x=r.createHref(f.fullPath);return re(f,g,{params:p(g.params),hash:kn(f.hash),redirectedFrom:void 0,href:x})}let N;if(y.path!=null)N=re({},y,{path:Lo(n,y.path,C.path).path});else{const f=re({},y.params);for(const g in f)f[g]==null&&delete f[g];N=re({},y,{params:h(f)}),C.params=h(C.params)}const F=t.resolve(N,C),ee=y.hash||"";F.params=u(p(F.params));const ue=au(o,re({},y,{hash:tu(ee),path:F.path})),c=r.createHref(ue);return re({fullPath:ue,hash:ee,query:o===ws?Hu(y.query):y.query||{}},F,{redirectedFrom:void 0,href:c})}function P(y){return typeof y=="string"?Lo(n,y,l.value.path):re({},y)}function H(y,C){if(d!==y)return an(8,{from:C,to:y})}function B(y){return se(y)}function J(y){return B(re(P(y),{replace:!0}))}function ce(y){const C=y.matched[y.matched.length-1];if(C&&C.redirect){const{redirect:N}=C;let F=typeof N=="function"?N(y):N;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=P(F):{path:F},F.params={}),re({query:y.query,hash:y.hash,params:F.path!=null?{}:y.params},F)}}function se(y,C){const N=d=z(y),F=l.value,ee=y.state,ue=y.force,c=y.replace===!0,f=ce(N);if(f)return se(re(P(f),{state:typeof f=="object"?re({},ee,f.state):ee,force:ue,replace:c}),C||N);const g=N;g.redirectedFrom=C;let x;return!ue&&lu(o,F,N)&&(x=an(16,{to:g,from:F}),Z(F,F,!0,!1)),(x?Promise.resolve(x):Ce(g,F)).catch(v=>ft(v)?ft(v,2)?v:W(v):T(v,g,F)).then(v=>{if(v){if(ft(v,2))return se(re({replace:c},P(v.to),{state:typeof v.to=="object"?re({},ee,v.to.state):ee,force:ue}),C||g)}else v=Ve(g,F,!0,c,ee);return Fe(g,F,v),v})}function Ne(y,C){const N=H(y,C);return N?Promise.reject(N):Promise.resolve()}function _e(y){const C=Ke.values().next().value;return C&&typeof C.runWithContext=="function"?C.runWithContext(y):y()}function Ce(y,C){let N;const[F,ee,ue]=Vu(y,C);N=Po(F.reverse(),"beforeRouteLeave",y,C);for(const f of F)f.leaveGuards.forEach(g=>{N.push(Et(g,y,C))});const c=Ne.bind(null,y,C);return N.push(c),pe(N).then(()=>{N=[];for(const f of s.list())N.push(Et(f,y,C));return N.push(c),pe(N)}).then(()=>{N=Po(ee,"beforeRouteUpdate",y,C);for(const f of ee)f.updateGuards.forEach(g=>{N.push(Et(g,y,C))});return N.push(c),pe(N)}).then(()=>{N=[];for(const f of ue)if(f.beforeEnter)if(Je(f.beforeEnter))for(const g of f.beforeEnter)N.push(Et(g,y,C));else N.push(Et(f.beforeEnter,y,C));return N.push(c),pe(N)}).then(()=>(y.matched.forEach(f=>f.enterCallbacks={}),N=Po(ue,"beforeRouteEnter",y,C,_e),N.push(c),pe(N))).then(()=>{N=[];for(const f of i.list())N.push(Et(f,y,C));return N.push(c),pe(N)}).catch(f=>ft(f,8)?f:Promise.reject(f))}function Fe(y,C,N){a.list().forEach(F=>_e(()=>F(y,C,N)))}function Ve(y,C,N,F,ee){const ue=H(y,C);if(ue)return ue;const c=C===vt,f=Yt?history.state:{};N&&(F||c?r.replace(y.fullPath,re({scroll:c&&f&&f.scroll},ee)):r.push(y.fullPath,ee)),l.value=y,Z(y,C,N,c),W()}let Pe;function ct(){Pe||(Pe=r.listen((y,C,N)=>{if(!Ee.listening)return;const F=z(y),ee=ce(F);if(ee){se(re(ee,{replace:!0}),F).catch(mn);return}d=F;const ue=l.value;Yt&&bu(us(ue.fullPath,N.delta),mo()),Ce(F,ue).catch(c=>ft(c,12)?c:ft(c,2)?(se(c.to,F).then(f=>{ft(f,20)&&!N.delta&&N.type===Sn.pop&&r.go(-1,!1)}).catch(mn),Promise.reject()):(N.delta&&r.go(-N.delta,!1),T(c,F,ue))).then(c=>{c=c||Ve(F,ue,!1),c&&(N.delta&&!ft(c,8)?r.go(-N.delta,!1):N.type===Sn.pop&&ft(c,20)&&r.go(-1,!1)),Fe(F,ue,c)}).catch(mn)}))}let De=fn(),he=fn(),w;function T(y,C,N){W(y);const F=he.list();return F.length?F.forEach(ee=>ee(y,C,N)):console.error(y),Promise.reject(y)}function j(){return w&&l.value!==vt?Promise.resolve():new Promise((y,C)=>{De.add([y,C])})}function W(y){return w||(w=!y,ct(),De.list().forEach(([C,N])=>y?N(y):C()),De.reset()),y}function Z(y,C,N,F){const{scrollBehavior:ee}=e;if(!Yt||!ee)return Promise.resolve();const ue=!N&&mu(us(y.fullPath,0))||(F||!N)&&history.state&&history.state.scroll||null;return ii().then(()=>ee(y,C,ue)).then(c=>c&&gu(c)).catch(c=>T(c,y,C))}const te=y=>r.go(y);let xe;const Ke=new Set,Ee={currentRoute:l,listening:!0,addRoute:b,removeRoute:L,clearRoutes:t.clearRoutes,hasRoute:Y,getRoutes:M,resolve:z,options:e,push:B,replace:J,go:te,back:()=>te(-1),forward:()=>te(1),beforeEach:s.add,beforeResolve:i.add,afterEach:a.add,onError:he.add,isReady:j,install(y){const C=this;y.component("RouterLink",Ji),y.component("RouterView",Qi),y.config.globalProperties.$router=C,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>je(l)}),Yt&&!xe&&l.value===vt&&(xe=!0,B(r.location).catch(ee=>{}));const N={};for(const ee in vt)Object.defineProperty(N,ee,{get:()=>l.value[ee],enumerable:!0});y.provide(xr,C),y.provide(Er,ti(N)),y.provide(Qo,l);const F=y.unmount;Ke.add(y),y.unmount=function(){Ke.delete(y),Ke.size<1&&(d=vt,Pe&&Pe(),Pe=null,l.value=vt,xe=!1,w=!1),F()}}};function pe(y){return y.reduce((C,N)=>C.then(()=>_e(N)),Promise.resolve())}return Ee}function Vu(e,t){const n=[],o=[],r=[],s=Math.max(t.matched.length,e.matched.length);for(let i=0;i<s;i++){const a=t.matched[i];a&&(e.matched.find(d=>sn(d,a))?o.push(a):n.push(a));const l=e.matched[i];l&&(t.matched.find(d=>sn(d,l))||r.push(l))}return[n,o,r]}function ea(e){return at(Er)}const Ku="/ea-effects/favicon.ico";function Gu(e,t){const n=document.createElement("link");n.href=t,n.rel="stylesheet",e.appendChild(n)}class Qe extends HTMLElement{constructor(){super(),this.isProduction=!1,this.isProduction=!0}toggleAttribute(t,n,o){n?(this.setAttribute(t,n),o&&this.dom.classList.add(o)):(this.hasAttribute(t)&&this.removeAttribute(t),o&&this.dom.classList.remove(o))}toggleAttr(t,n){n?this.setAttribute(t,n):this.removeAttribute(t)}getAttrBoolean(t){const n=this.getAttribute(t);return n==="true"||n===""}getAttrNumber(t){const n=this.getAttribute(t);return n?Number(n):0}build(t,n){if(this.isProduction){const o=document.createElement("style");o.innerHTML=n,this.shadowRoot.appendChild(o)}else Gu(t,new URL(this.nodeName.toLowerCase()+"/index.css",import.meta.url).href)}}var Lt,An,eo,ta;class Wu extends HTMLElement{constructor(){super();we(this,eo);we(this,Lt);we(this,An);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <link id="fontello-stylesheet" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easy-component-ui/components/ea-icon/css/fontello.css">
            <i class="ea-icon_wrap" part="container">
                <slot></slot>
            </i>
        `,ye(this,Lt,n.querySelector(".ea-icon_wrap")),ye(this,An,n.querySelector("#fontello-stylesheet")),document.addEventListener("configChanged",o=>{yo(this,eo,ta).call(this,o.detail)})}get icon(){return this.getAttribute("icon")||""}set icon(n){this.setAttribute("icon",n),U(this,Lt).className=`${n}`}get color(){return this.getAttribute("color")||""}set color(n){this.setAttribute("color",n),U(this,Lt).style.color=n}get size(){return this.getAttribute("size")||""}set size(n){this.setAttribute("size",n),U(this,Lt).style.fontSize=`${n}px`}connectedCallback(){this.icon=this.icon,this.color=this.color,this.size=this.size,document.dispatchEvent(new CustomEvent("ea-icon-ready"))}}Lt=new WeakMap,An=new WeakMap,eo=new WeakSet,ta=function(n){U(this,An).href=n.fontelloCSS};window.customElements.get("ea-icon")||window.customElements.define("ea-icon",Wu);const qu=`
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
`;var We;class Zu extends Qe{constructor(){super();we(this,We);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <div class="ea-menu-item_wrap" part="container">
                <slot></slot>
            </div>
        `,ye(this,We,n.querySelector(".ea-menu-item_wrap")),this.build(n,qu)}get actived(){return this.getAttrBoolean("actived")}set actived(n){this.setAttribute("actived",n),this.isSubItem?U(this,We).classList.toggle("is-sub-actived",n):U(this,We).classList.toggle("is-actived",n)}get isSubItem(){return this.getAttrBoolean("is-sub-item")}set isSubItem(n){n&&this.setAttribute("is-sub-item",n)}get backgroundColor(){return this.getAttribute("background-color")||"#fff"}set backgroundColor(n){this.setAttribute("background-color",n),U(this,We).style.setProperty("--normal-bgc",n)}get textColor(){return this.getAttribute("text-color")||"#303133"}set textColor(n){this.setAttribute("text-color",n),U(this,We).style.setProperty("--normal-text-color",n)}get activeTextColor(){return this.getAttribute("active-text-color")||"#409eff"}set activeTextColor(n){this.setAttribute("active-text-color",n),U(this,We).style.setProperty("--actived-text-color",n)}get disabled(){return this.getAttrBoolean("disabled")}set disabled(n){this.setAttribute("disabled",n),U(this,We).classList.toggle("is-disabled",n)}connectedCallback(){this.actived=this.actived,this.disabled=this.disabled,U(this,We).addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("item-selected",{detail:{index:this.index,title:this.textContent}}))})}}We=new WeakMap;customElements.get("ea-menu-item")||customElements.define("ea-menu-item",Zu);const Pn=(e,t)=>{const n=e.__vccOpts||e;for(const[o,r]of t)n[o]=r;return n},Ju=["actived"],Qu={__name:"MyRoute",props:{to:String},setup(e){const t=ea(),n={activeRoute:uo(t.path)||""};return Jt(t,o=>{n.activeRoute.value=o.path}),(o,r)=>(ae(),fe("ea-menu-item",{class:"rl-item",actived:n.activeRoute.value===e.to},[q(je(Ji),{to:e.to,activeClass:"active"},{default:ot(()=>[Ol(o.$slots,"default",{},void 0,!0)]),_:3},8,["to"])],8,Ju))}},_t=Pn(Qu,[["__scopeId","data-v-62147355"]]),ef={__name:"Router",setup(e){return(t,n)=>(ae(),fe(ge,null,[q(_t,{to:"/2DTransitions"},{default:ot(()=>n[0]||(n[0]=[Ge("Hover | 2D 过渡动画")])),_:1}),q(_t,{to:"/backgroundTransitions"},{default:ot(()=>n[1]||(n[1]=[Ge(" Hover | 背景（background）过渡动画 ")])),_:1}),q(_t,{to:"/borderTransitions"},{default:ot(()=>n[2]||(n[2]=[Ge("Hover | 边框（border）过渡动画")])),_:1}),q(_t,{to:"/shadowAndGlowTransitions"},{default:ot(()=>n[3]||(n[3]=[Ge(" Hover | 阴影（box-shadow）过渡动画 ")])),_:1}),q(_t,{to:"/speechBubbles"},{default:ot(()=>n[4]||(n[4]=[Ge("Hover | 气泡框过渡动画")])),_:1}),q(_t,{to:"/curls"},{default:ot(()=>n[5]||(n[5]=[Ge("Hover | 折角过渡动画")])),_:1}),q(_t,{to:"/attentionSeekers"},{default:ot(()=>n[6]||(n[6]=[Ge("Animate | 吸引眼球动画")])),_:1}),q(_t,{to:"/backEntrancesAndBackExits"},{default:ot(()=>n[7]||(n[7]=[Ge("Animate | 后进后出动画")])),_:1})],64))}},tf=`
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
`;var On,to,na;class nf extends Qe{constructor(){super();we(this,to);we(this,On);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <div class="ea-container_wrap" part="container">
                <slot></slot>
            </div>
        `,ye(this,On,n.querySelector(".ea-container_wrap")),this.build(n,tf)}get CONTAINER_TYPE(){return["ea-header","ea-main","ea-footer","ea-container","ea-aside"]}get direction(){return["horizontal","vertical"].includes(this.getAttribute("direction"))||"horizontal"}set direction(n){this.setAttribute("direction",n),U(this,On).classList.toggle("is-vertical",n==="horizontal")}connectedCallback(){const n=Array.from(this.children);yo(this,to,na).call(this,n)}}On=new WeakMap,to=new WeakSet,na=function(n){const o=n.map(r=>r.tagName.toLowerCase());n.forEach(r=>{this.CONTAINER_TYPE.includes(r.tagName.toLowerCase())||r.remove(),r.tagName.toLowerCase()==="ea-container"&&(r.style.flex="1")}),o.includes("ea-header")||o.includes("ea-footer")?this.direction="horizontal":this.direction=this.direction};customElements.get("ea-container")||customElements.define("ea-container",nf);const of=`
.ea-aside_wrap {
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
}
.ea-aside_wrap ::slotted(ea-main) {
  overflow: auto;
}
`;var Nn;class rf extends Qe{constructor(){super();we(this,Nn);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <aside class="ea-aside_wrap" part="container">
                <slot></slot>
            </aside>
        `,ye(this,Nn,n.querySelector(".ea-aside_wrap")),this.build(n,of)}get width(){return this.getAttrNumber("width")||200}set width(n){this.setAttribute("width",n),U(this,Nn).style.width=`${n}px`}connectedCallback(){this.width=this.width}}Nn=new WeakMap;customElements.get("ea-aside")||customElements.define("ea-aside",rf);const oa=(e,t=0)=>{let n=setTimeout(()=>{clearTimeout(n),n=null,e()},t)},Fo=e=>{e.actived=!1};function sf(e,t,n){e.forEach(Fo),t.forEach(Fo),n.forEach(Fo)}function af(e,t,n){e.forEach((o,r)=>{o.itemIndex=r,o.addEventListener("item-selected",s=>{const i=s.detail.title;sf(e,t,n),o.actived=!0,this.dispatchEvent(new CustomEvent("select",{detail:{index:r,title:i}}))})})}const lf=`
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
`,cf=`
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
`;var rt,no,Cn;class uf extends Qe{constructor(){super();we(this,rt);we(this,no);we(this,Cn);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <div class="ea-submenu_wrap" part="container">
                <div class="ea-submenu_title_wrap" part="title-wrap">
                    <slot name="title"></slot>
                    <ea-icon class="ea-submenu_dropdown_icon" icon="icon-angle-down" part="dropdown-icon"></ea-icon>
                </div>
                <div class="ea-submenu_items_wrap" part="dropdown-wrap">
                    <slot></slot>
                </div>
            </div>
        `,ye(this,rt,n.querySelector(".ea-submenu_wrap")),ye(this,no,n.querySelector(".ea-submenu_title_wrap")),ye(this,Cn,n.querySelector(".ea-submenu_items_wrap")),this.build(n,cf)}get actived(){return this.getAttrBoolean("actived")}set actived(n){this.setAttribute("actived",n),U(this,rt).classList.toggle("is-actived",n)}get backgroundColor(){return this.getAttribute("background-color")||"#fff"}set backgroundColor(n){this.setAttribute("background-color",n),U(this,rt).style.setProperty("--normal-bgc",n)}get textColor(){return this.getAttribute("text-color")||"#303133"}set textColor(n){this.setAttribute("text-color",n),U(this,rt).style.setProperty("--normal-text-color",n)}get activeTextColor(){return this.getAttribute("active-text-color")||"#409eff"}set activeTextColor(n){this.setAttribute("active-text-color",n),U(this,rt).style.setProperty("--actived-text-color",n)}get disabled(){return this.getAttrBoolean("disabled")}set disabled(n){this.setAttribute("disabled",n),U(this,rt).classList.toggle("is-disabled",n)}get mode(){return this.getAttribute("mode")||"horizontal"}set mode(n){this.setAttribute("mode",n),U(this,rt).classList.toggle("is-vertical",n==="vertical")}connectedCallback(){this.disabled=this.disabled,this.querySelectorAll("ea-menu-item").forEach((o,r)=>{o.isSubItem=!0,o.addEventListener("item-selected",s=>{this.actived=!0})}),oa(()=>{U(this,Cn).style.display="block"},20)}}rt=new WeakMap,no=new WeakMap,Cn=new WeakMap;customElements.get("ea-submenu")||customElements.define("ea-submenu",uf);const ff=`
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
`;var ht,In,Qt;class df extends Qe{constructor(){super();we(this,ht);we(this,In);we(this,Qt);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <div class="ea-menu-item-group_wrap" part="container">
                <div class="ea-submenu_title_wrap" part="title-wrap">
                    <slot name="title"></slot>
                    <ea-icon class="ea-submenu_dropdown_icon" icon="icon-angle-down" part="dropdown-icon"></ea-icon>
                </div>
                <div class="ea-submenu_items_wrap" part="dropdown-wrap">
                    <slot></slot>
                </div>
            </div>
        `,ye(this,ht,n.querySelector(".ea-menu-item-group_wrap")),ye(this,In,n.querySelector(".ea-submenu_title_wrap")),ye(this,Qt,n.querySelector(".ea-submenu_items_wrap")),this.build(n,ff)}get actived(){return this.getAttrBoolean("actived")}set actived(n){this.setAttribute("actived",n),U(this,ht).classList.toggle("is-actived",n)}get backgroundColor(){return this.getAttribute("background-color")||"#fff"}set backgroundColor(n){this.setAttribute("background-color",n),U(this,ht).style.setProperty("--normal-bgc",n)}get textColor(){return this.getAttribute("text-color")||"#303133"}set textColor(n){this.setAttribute("text-color",n),U(this,ht).style.setProperty("--normal-text-color",n)}get activeTextColor(){return this.getAttribute("active-text-color")||"#409eff"}set activeTextColor(n){this.setAttribute("active-text-color",n),U(this,ht).style.setProperty("--actived-text-color",n)}get collapse(){return this.getAttrBoolean("collapse")||!1}set collapse(n){this.setAttribute("collapse",n),U(this,Qt).style.height=n?U(this,Qt).scrollHeight+"px":"0",U(this,ht).classList.toggle("is-open",n)}connectedCallback(){this.style.width="100%",this.querySelectorAll("ea-menu-item").forEach(o=>{o.isSubItem=!0,o.addEventListener("item-selected",r=>{oa(()=>{this.actived=!0},20)})}),U(this,In).addEventListener("click",o=>{this.collapse=!this.collapse})}}ht=new WeakMap,In=new WeakMap,Qt=new WeakMap;customElements.get("ea-menu-item-group")||customElements.define("ea-menu-item-group",df);var en;class hf extends Qe{constructor(){super();we(this,en);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <div class="ea-menu_wrap" part="container">
                <slot></slot>
            </div>
        `,ye(this,en,n.querySelector(".ea-menu_wrap")),this.build(n,lf)}get mode(){return this.getAttribute("mode")||"vertical"}set mode(n){this.setAttribute("mode",n),U(this,en).classList.toggle("is-vertical",n==="vertical"),this.querySelectorAll("ea-submenu").forEach(o=>{o.mode=n})}get backgroundColor(){return this.getAttribute("background-color")||"#fff"}set backgroundColor(n){this.setAttribute("background-color",n),U(this,en).style.backgroundColor=n}get textColor(){return this.getAttribute("text-color")||"#303133"}set textColor(n){this.setAttribute("text-color",n)}get activeTextColor(){return this.getAttribute("active-text-color")||"#409eff"}set activeTextColor(n){this.setAttribute("active-text-color",n)}get collapse(){return this.getAttrBoolean("collapse")}set collapse(n){this.toggleAttr("collapse",n),this.querySelectorAll("ea-menu-item-group").forEach(o=>{this.mode==="vertical"&&(o.collapse=!n)})}connectedCallback(){this.mode=this.mode,this.collapse=!0,this.backgroundColor=this.backgroundColor,this.textColor=this.textColor,this.activeTextColor=this.activeTextColor;const n=this.querySelectorAll("ea-menu-item"),o=this.querySelectorAll("ea-submenu"),r=this.querySelectorAll("ea-menu-item-group");af.call(this,n,o,r);const s=(i,a)=>{i.backgroundColor=this.backgroundColor,i.textColor=this.textColor,i.activeTextColor=this.activeTextColor};n.forEach(s),o.forEach(s),r.forEach(s)}}en=new WeakMap;customElements.get("ea-menu")||customElements.define("ea-menu",hf);const pf={width:"200"},gf={mode:"vertical"},bf={__name:"MyAside",setup(e){return(t,n)=>(ae(),fe("ea-aside",pf,[n[0]||(n[0]=me("ea-header",{class:"aside-header"},[me("div",{class:"logo"},[me("img",{src:Ku,alt:""})]),me("b",{class:"aside-title"},"ea-effects")],-1)),me("ea-menu",gf,[q(ef)])]))}},mf=Pn(bf,[["__scopeId","data-v-56b791c4"]]),wf=`
.ea-header_wrap {
  box-sizing: border-box;
  padding: 0 20px;

  height: 60px;

  color: #333;

  overflow: hidden;
}
`;var tn;class vf extends Qe{constructor(){super();we(this,tn);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <header class="ea-header_wrap" part="container">
                <slot></slot>
            </header>
        `,ye(this,tn,n.querySelector(".ea-header_wrap")),this.build(n,wf)}get height(){return this.getAttrNumber("height")||60}set height(n){this.setAttribute("height",n),U(this,tn).style.height=`${n}px`,U(this,tn).style.lineHeight=`${n}px`}connectedCallback(){this.height=this.height}}tn=new WeakMap;customElements.get("ea-header")||customElements.define("ea-header",vf);const _f=`
.ea-footer_wrap {
  box-sizing: border-box;
  padding: 0 20px;

  height: 60px;

  color: #333;

  overflow: hidden;
}
`;var nn;class yf extends Qe{constructor(){super();we(this,nn);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <footer class="ea-footer_wrap" part="container">
                <slot></slot>
            </footer>
        `,ye(this,nn,n.querySelector(".ea-footer_wrap")),this.build(n,_f)}get height(){return this.getAttrNumber("height")||60}set height(n){this.setAttribute("height",n),U(this,nn).style.height=`${n}px`,U(this,nn).style.lineHeight=`${n}px`}connectedCallback(){this.height=this.height}}nn=new WeakMap;customElements.get("ea-footer")||customElements.define("ea-footer",yf);const xf=`
.ea-main_wrap {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 20px;
  overflow: auto;
  color: #333;
}
`;class Ef extends Qe{constructor(){super();const t=this.attachShadow({mode:"open"});t.innerHTML=`
            <main class="ea-main_wrap" part="container">
                <slot></slot>
            </main>
        `,this.build(t,xf)}}customElements.get("ea-main")||customElements.define("ea-main",Ef);const kf={__name:"App",setup(e){let t=uo(!1);const n=ea();return Jt(n,()=>{t.value=!1}),(o,r)=>(ae(),fe("ea-container",{class:Dt(`container ${je(t)?"open":""}`),direction:"vertical"},[q(mf,{class:Dt("my-aside")}),me("ea-container",null,[me("ea-header",null,[me("ea-icon",{icon:"icon-th-list",class:"toggle-aside-btn",onClick:r[0]||(r[0]=s=>ke(t)?t.value=!je(t):t=!je(t))}),me("section",{class:"mask",onClick:r[1]||(r[1]=s=>ke(t)?t.value=!je(t):t=!je(t))})]),me("ea-main",null,[q(je(Qi))])])],2))}},Sf=Pn(kf,[["__scopeId","data-v-d19ae1c7"]]);function Tf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function ra(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(t=>{const n=e[t],o=typeof n;(o==="object"||o==="function")&&!Object.isFrozen(n)&&ra(n)}),e}class ks{constructor(t){t.data===void 0&&(t.data={}),this.data=t.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function sa(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function St(e,...t){const n=Object.create(null);for(const o in e)n[o]=e[o];return t.forEach(function(o){for(const r in o)n[r]=o[r]}),n}const Rf="</span>",Ss=e=>!!e.scope,Af=(e,{prefix:t})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const n=e.split(".");return[`${t}${n.shift()}`,...n.map((o,r)=>`${o}${"_".repeat(r+1)}`)].join(" ")}return`${t}${e}`};class Of{constructor(t,n){this.buffer="",this.classPrefix=n.classPrefix,t.walk(this)}addText(t){this.buffer+=sa(t)}openNode(t){if(!Ss(t))return;const n=Af(t.scope,{prefix:this.classPrefix});this.span(n)}closeNode(t){Ss(t)&&(this.buffer+=Rf)}value(){return this.buffer}span(t){this.buffer+=`<span class="${t}">`}}const Ts=(e={})=>{const t={children:[]};return Object.assign(t,e),t};class kr{constructor(){this.rootNode=Ts(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(t){this.top.children.push(t)}openNode(t){const n=Ts({scope:t});this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(t){return this.constructor._walk(t,this.rootNode)}static _walk(t,n){return typeof n=="string"?t.addText(n):n.children&&(t.openNode(n),n.children.forEach(o=>this._walk(t,o)),t.closeNode(n)),t}static _collapse(t){typeof t!="string"&&t.children&&(t.children.every(n=>typeof n=="string")?t.children=[t.children.join("")]:t.children.forEach(n=>{kr._collapse(n)}))}}class Nf extends kr{constructor(t){super(),this.options=t}addText(t){t!==""&&this.add(t)}startScope(t){this.openNode(t)}endScope(){this.closeNode()}__addSublanguage(t,n){const o=t.root;n&&(o.scope=`language:${n}`),this.add(o)}toHTML(){return new Of(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function Tn(e){return e?typeof e=="string"?e:e.source:null}function ia(e){return $t("(?=",e,")")}function Cf(e){return $t("(?:",e,")*")}function If(e){return $t("(?:",e,")?")}function $t(...e){return e.map(n=>Tn(n)).join("")}function Mf(e){const t=e[e.length-1];return typeof t=="object"&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}function Sr(...e){return"("+(Mf(e).capture?"":"?:")+e.map(o=>Tn(o)).join("|")+")"}function aa(e){return new RegExp(e.toString()+"|").exec("").length-1}function Bf(e,t){const n=e&&e.exec(t);return n&&n.index===0}const Lf=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Tr(e,{joinWith:t}){let n=0;return e.map(o=>{n+=1;const r=n;let s=Tn(o),i="";for(;s.length>0;){const a=Lf.exec(s);if(!a){i+=s;break}i+=s.substring(0,a.index),s=s.substring(a.index+a[0].length),a[0][0]==="\\"&&a[1]?i+="\\"+String(Number(a[1])+r):(i+=a[0],a[0]==="("&&n++)}return i}).map(o=>`(${o})`).join(t)}const Pf=/\b\B/,la="[a-zA-Z]\\w*",Rr="[a-zA-Z_]\\w*",ca="\\b\\d+(\\.\\d+)?",ua="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",fa="\\b(0b[01]+)",Ff="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Df=(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=$t(t,/.*\b/,e.binary,/\b.*/)),St({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(n,o)=>{n.index!==0&&o.ignoreMatch()}},e)},Rn={begin:"\\\\[\\s\\S]",relevance:0},Hf={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[Rn]},zf={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[Rn]},$f={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},wo=function(e,t,n={}){const o=St({scope:"comment",begin:e,end:t,contains:[]},n);o.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const r=Sr("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return o.contains.push({begin:$t(/[ ]+/,"(",r,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),o},jf=wo("//","$"),Uf=wo("/\\*","\\*/"),Xf=wo("#","$"),Yf={scope:"number",begin:ca,relevance:0},Vf={scope:"number",begin:ua,relevance:0},Kf={scope:"number",begin:fa,relevance:0},Gf={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[Rn,{begin:/\[/,end:/\]/,relevance:0,contains:[Rn]}]},Wf={scope:"title",begin:la,relevance:0},qf={scope:"title",begin:Rr,relevance:0},Zf={begin:"\\.\\s*"+Rr,relevance:0},Jf=function(e){return Object.assign(e,{"on:begin":(t,n)=>{n.data._beginMatch=t[1]},"on:end":(t,n)=>{n.data._beginMatch!==t[1]&&n.ignoreMatch()}})};var Un=Object.freeze({__proto__:null,APOS_STRING_MODE:Hf,BACKSLASH_ESCAPE:Rn,BINARY_NUMBER_MODE:Kf,BINARY_NUMBER_RE:fa,COMMENT:wo,C_BLOCK_COMMENT_MODE:Uf,C_LINE_COMMENT_MODE:jf,C_NUMBER_MODE:Vf,C_NUMBER_RE:ua,END_SAME_AS_BEGIN:Jf,HASH_COMMENT_MODE:Xf,IDENT_RE:la,MATCH_NOTHING_RE:Pf,METHOD_GUARD:Zf,NUMBER_MODE:Yf,NUMBER_RE:ca,PHRASAL_WORDS_MODE:$f,QUOTE_STRING_MODE:zf,REGEXP_MODE:Gf,RE_STARTERS_RE:Ff,SHEBANG:Df,TITLE_MODE:Wf,UNDERSCORE_IDENT_RE:Rr,UNDERSCORE_TITLE_MODE:qf});function Qf(e,t){e.input[e.index-1]==="."&&t.ignoreMatch()}function ed(e,t){e.className!==void 0&&(e.scope=e.className,delete e.className)}function td(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=Qf,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function nd(e,t){Array.isArray(e.illegal)&&(e.illegal=Sr(...e.illegal))}function od(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function rd(e,t){e.relevance===void 0&&(e.relevance=1)}const sd=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const n=Object.assign({},e);Object.keys(e).forEach(o=>{delete e[o]}),e.keywords=n.keywords,e.begin=$t(n.beforeMatch,ia(n.begin)),e.starts={relevance:0,contains:[Object.assign(n,{endsParent:!0})]},e.relevance=0,delete n.beforeMatch},id=["of","and","for","in","not","or","if","then","parent","list","value"],ad="keyword";function da(e,t,n=ad){const o=Object.create(null);return typeof e=="string"?r(n,e.split(" ")):Array.isArray(e)?r(n,e):Object.keys(e).forEach(function(s){Object.assign(o,da(e[s],t,s))}),o;function r(s,i){t&&(i=i.map(a=>a.toLowerCase())),i.forEach(function(a){const l=a.split("|");o[l[0]]=[s,ld(l[0],l[1])]})}}function ld(e,t){return t?Number(t):cd(e)?0:1}function cd(e){return id.includes(e.toLowerCase())}const Rs={},Ft=e=>{console.error(e)},As=(e,...t)=>{console.log(`WARN: ${e}`,...t)},Ut=(e,t)=>{Rs[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),Rs[`${e}/${t}`]=!0)},Qn=new Error;function ha(e,t,{key:n}){let o=0;const r=e[n],s={},i={};for(let a=1;a<=t.length;a++)i[a+o]=r[a],s[a+o]=!0,o+=aa(t[a-1]);e[n]=i,e[n]._emit=s,e[n]._multi=!0}function ud(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw Ft("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Qn;if(typeof e.beginScope!="object"||e.beginScope===null)throw Ft("beginScope must be object"),Qn;ha(e,e.begin,{key:"beginScope"}),e.begin=Tr(e.begin,{joinWith:""})}}function fd(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw Ft("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Qn;if(typeof e.endScope!="object"||e.endScope===null)throw Ft("endScope must be object"),Qn;ha(e,e.end,{key:"endScope"}),e.end=Tr(e.end,{joinWith:""})}}function dd(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function hd(e){dd(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),ud(e),fd(e)}function pd(e){function t(i,a){return new RegExp(Tn(i),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(a?"g":""))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(a,l){l.position=this.position++,this.matchIndexes[this.matchAt]=l,this.regexes.push([l,a]),this.matchAt+=aa(a)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const a=this.regexes.map(l=>l[1]);this.matcherRe=t(Tr(a,{joinWith:"|"}),!0),this.lastIndex=0}exec(a){this.matcherRe.lastIndex=this.lastIndex;const l=this.matcherRe.exec(a);if(!l)return null;const d=l.findIndex((h,p)=>p>0&&h!==void 0),u=this.matchIndexes[d];return l.splice(0,d),Object.assign(l,u)}}class o{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(a){if(this.multiRegexes[a])return this.multiRegexes[a];const l=new n;return this.rules.slice(a).forEach(([d,u])=>l.addRule(d,u)),l.compile(),this.multiRegexes[a]=l,l}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(a,l){this.rules.push([a,l]),l.type==="begin"&&this.count++}exec(a){const l=this.getMatcher(this.regexIndex);l.lastIndex=this.lastIndex;let d=l.exec(a);if(this.resumingScanAtSamePosition()&&!(d&&d.index===this.lastIndex)){const u=this.getMatcher(0);u.lastIndex=this.lastIndex+1,d=u.exec(a)}return d&&(this.regexIndex+=d.position+1,this.regexIndex===this.count&&this.considerAll()),d}}function r(i){const a=new o;return i.contains.forEach(l=>a.addRule(l.begin,{rule:l,type:"begin"})),i.terminatorEnd&&a.addRule(i.terminatorEnd,{type:"end"}),i.illegal&&a.addRule(i.illegal,{type:"illegal"}),a}function s(i,a){const l=i;if(i.isCompiled)return l;[ed,od,hd,sd].forEach(u=>u(i,a)),e.compilerExtensions.forEach(u=>u(i,a)),i.__beforeBegin=null,[td,nd,rd].forEach(u=>u(i,a)),i.isCompiled=!0;let d=null;return typeof i.keywords=="object"&&i.keywords.$pattern&&(i.keywords=Object.assign({},i.keywords),d=i.keywords.$pattern,delete i.keywords.$pattern),d=d||/\w+/,i.keywords&&(i.keywords=da(i.keywords,e.case_insensitive)),l.keywordPatternRe=t(d,!0),a&&(i.begin||(i.begin=/\B|\b/),l.beginRe=t(l.begin),!i.end&&!i.endsWithParent&&(i.end=/\B|\b/),i.end&&(l.endRe=t(l.end)),l.terminatorEnd=Tn(l.end)||"",i.endsWithParent&&a.terminatorEnd&&(l.terminatorEnd+=(i.end?"|":"")+a.terminatorEnd)),i.illegal&&(l.illegalRe=t(i.illegal)),i.contains||(i.contains=[]),i.contains=[].concat(...i.contains.map(function(u){return gd(u==="self"?i:u)})),i.contains.forEach(function(u){s(u,l)}),i.starts&&s(i.starts,a),l.matcher=r(l),l}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=St(e.classNameAliases||{}),s(e)}function pa(e){return e?e.endsWithParent||pa(e.starts):!1}function gd(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return St(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:pa(e)?St(e,{starts:e.starts?St(e.starts):null}):Object.isFrozen(e)?St(e):e}var bd="11.10.0";class md extends Error{constructor(t,n){super(t),this.name="HTMLInjectionError",this.html=n}}const Do=sa,Os=St,Ns=Symbol("nomatch"),wd=7,ga=function(e){const t=Object.create(null),n=Object.create(null),o=[];let r=!0;const s="Could not find the language '{}', did you forget to load/include a language module?",i={disableAutodetect:!0,name:"Plain text",contains:[]};let a={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:Nf};function l(w){return a.noHighlightRe.test(w)}function d(w){let T=w.className+" ";T+=w.parentNode?w.parentNode.className:"";const j=a.languageDetectRe.exec(T);if(j){const W=_e(j[1]);return W||(As(s.replace("{}",j[1])),As("Falling back to no-highlight mode for this block.",w)),W?j[1]:"no-highlight"}return T.split(/\s+/).find(W=>l(W)||_e(W))}function u(w,T,j){let W="",Z="";typeof T=="object"?(W=w,j=T.ignoreIllegals,Z=T.language):(Ut("10.7.0","highlight(lang, code, ...args) has been deprecated."),Ut("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),Z=w,W=T),j===void 0&&(j=!0);const te={code:W,language:Z};De("before:highlight",te);const xe=te.result?te.result:h(te.language,te.code,j);return xe.code=te.code,De("after:highlight",xe),xe}function h(w,T,j,W){const Z=Object.create(null);function te(E,R){return E.keywords[R]}function xe(){if(!_.keywords){S.addText(m);return}let E=0;_.keywordPatternRe.lastIndex=0;let R=_.keywordPatternRe.exec(m),I="";for(;R;){I+=m.substring(E,R.index);const K=x.case_insensitive?R[0].toLowerCase():R[0],Q=te(_,K);if(Q){const[be,Ie]=Q;if(S.addText(I),I="",Z[K]=(Z[K]||0)+1,Z[K]<=wd&&($+=Ie),be.startsWith("_"))I+=R[0];else{const Ct=x.classNameAliases[be]||be;pe(R[0],Ct)}}else I+=R[0];E=_.keywordPatternRe.lastIndex,R=_.keywordPatternRe.exec(m)}I+=m.substring(E),S.addText(I)}function Ke(){if(m==="")return;let E=null;if(typeof _.subLanguage=="string"){if(!t[_.subLanguage]){S.addText(m);return}E=h(_.subLanguage,m,!0,A[_.subLanguage]),A[_.subLanguage]=E._top}else E=b(m,_.subLanguage.length?_.subLanguage:null);_.relevance>0&&($+=E.relevance),S.__addSublanguage(E._emitter,E.language)}function Ee(){_.subLanguage!=null?Ke():xe(),m=""}function pe(E,R){E!==""&&(S.startScope(R),S.addText(E),S.endScope())}function y(E,R){let I=1;const K=R.length-1;for(;I<=K;){if(!E._emit[I]){I++;continue}const Q=x.classNameAliases[E[I]]||E[I],be=R[I];Q?pe(be,Q):(m=be,xe(),m=""),I++}}function C(E,R){return E.scope&&typeof E.scope=="string"&&S.openNode(x.classNameAliases[E.scope]||E.scope),E.beginScope&&(E.beginScope._wrap?(pe(m,x.classNameAliases[E.beginScope._wrap]||E.beginScope._wrap),m=""):E.beginScope._multi&&(y(E.beginScope,R),m="")),_=Object.create(E,{parent:{value:_}}),_}function N(E,R,I){let K=Bf(E.endRe,I);if(K){if(E["on:end"]){const Q=new ks(E);E["on:end"](R,Q),Q.isMatchIgnored&&(K=!1)}if(K){for(;E.endsParent&&E.parent;)E=E.parent;return E}}if(E.endsWithParent)return N(E.parent,R,I)}function F(E){return _.matcher.regexIndex===0?(m+=E[0],1):(X=!0,0)}function ee(E){const R=E[0],I=E.rule,K=new ks(I),Q=[I.__beforeBegin,I["on:begin"]];for(const be of Q)if(be&&(be(E,K),K.isMatchIgnored))return F(R);return I.skip?m+=R:(I.excludeBegin&&(m+=R),Ee(),!I.returnBegin&&!I.excludeBegin&&(m=R)),C(I,E),I.returnBegin?0:R.length}function ue(E){const R=E[0],I=T.substring(E.index),K=N(_,E,I);if(!K)return Ns;const Q=_;_.endScope&&_.endScope._wrap?(Ee(),pe(R,_.endScope._wrap)):_.endScope&&_.endScope._multi?(Ee(),y(_.endScope,E)):Q.skip?m+=R:(Q.returnEnd||Q.excludeEnd||(m+=R),Ee(),Q.excludeEnd&&(m=R));do _.scope&&S.closeNode(),!_.skip&&!_.subLanguage&&($+=_.relevance),_=_.parent;while(_!==K.parent);return K.starts&&C(K.starts,E),Q.returnEnd?0:R.length}function c(){const E=[];for(let R=_;R!==x;R=R.parent)R.scope&&E.unshift(R.scope);E.forEach(R=>S.openNode(R))}let f={};function g(E,R){const I=R&&R[0];if(m+=E,I==null)return Ee(),0;if(f.type==="begin"&&R.type==="end"&&f.index===R.index&&I===""){if(m+=T.slice(R.index,R.index+1),!r){const K=new Error(`0 width match regex (${w})`);throw K.languageName=w,K.badRule=f.rule,K}return 1}if(f=R,R.type==="begin")return ee(R);if(R.type==="illegal"&&!j){const K=new Error('Illegal lexeme "'+I+'" for mode "'+(_.scope||"<unnamed>")+'"');throw K.mode=_,K}else if(R.type==="end"){const K=ue(R);if(K!==Ns)return K}if(R.type==="illegal"&&I==="")return 1;if(D>1e5&&D>R.index*3)throw new Error("potential infinite loop, way more iterations than matches");return m+=I,I.length}const x=_e(w);if(!x)throw Ft(s.replace("{}",w)),new Error('Unknown language: "'+w+'"');const v=pd(x);let k="",_=W||v;const A={},S=new a.__emitter(a);c();let m="",$=0,O=0,D=0,X=!1;try{if(x.__emitTokens)x.__emitTokens(T,S);else{for(_.matcher.considerAll();;){D++,X?X=!1:_.matcher.considerAll(),_.matcher.lastIndex=O;const E=_.matcher.exec(T);if(!E)break;const R=T.substring(O,E.index),I=g(R,E);O=E.index+I}g(T.substring(O))}return S.finalize(),k=S.toHTML(),{language:w,value:k,relevance:$,illegal:!1,_emitter:S,_top:_}}catch(E){if(E.message&&E.message.includes("Illegal"))return{language:w,value:Do(T),illegal:!0,relevance:0,_illegalBy:{message:E.message,index:O,context:T.slice(O-100,O+100),mode:E.mode,resultSoFar:k},_emitter:S};if(r)return{language:w,value:Do(T),illegal:!1,relevance:0,errorRaised:E,_emitter:S,_top:_};throw E}}function p(w){const T={value:Do(w),illegal:!1,relevance:0,_top:i,_emitter:new a.__emitter(a)};return T._emitter.addText(w),T}function b(w,T){T=T||a.languages||Object.keys(t);const j=p(w),W=T.filter(_e).filter(Fe).map(Ee=>h(Ee,w,!1));W.unshift(j);const Z=W.sort((Ee,pe)=>{if(Ee.relevance!==pe.relevance)return pe.relevance-Ee.relevance;if(Ee.language&&pe.language){if(_e(Ee.language).supersetOf===pe.language)return 1;if(_e(pe.language).supersetOf===Ee.language)return-1}return 0}),[te,xe]=Z,Ke=te;return Ke.secondBest=xe,Ke}function L(w,T,j){const W=T&&n[T]||j;w.classList.add("hljs"),w.classList.add(`language-${W}`)}function M(w){let T=null;const j=d(w);if(l(j))return;if(De("before:highlightElement",{el:w,language:j}),w.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",w);return}if(w.children.length>0&&(a.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(w)),a.throwUnescapedHTML))throw new md("One of your code blocks includes unescaped HTML.",w.innerHTML);T=w;const W=T.textContent,Z=j?u(W,{language:j,ignoreIllegals:!0}):b(W);w.innerHTML=Z.value,w.dataset.highlighted="yes",L(w,j,Z.language),w.result={language:Z.language,re:Z.relevance,relevance:Z.relevance},Z.secondBest&&(w.secondBest={language:Z.secondBest.language,relevance:Z.secondBest.relevance}),De("after:highlightElement",{el:w,result:Z,text:W})}function Y(w){a=Os(a,w)}const z=()=>{B(),Ut("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function P(){B(),Ut("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let H=!1;function B(){if(document.readyState==="loading"){H=!0;return}document.querySelectorAll(a.cssSelector).forEach(M)}function J(){H&&B()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",J,!1);function ce(w,T){let j=null;try{j=T(e)}catch(W){if(Ft("Language definition for '{}' could not be registered.".replace("{}",w)),r)Ft(W);else throw W;j=i}j.name||(j.name=w),t[w]=j,j.rawDefinition=T.bind(null,e),j.aliases&&Ce(j.aliases,{languageName:w})}function se(w){delete t[w];for(const T of Object.keys(n))n[T]===w&&delete n[T]}function Ne(){return Object.keys(t)}function _e(w){return w=(w||"").toLowerCase(),t[w]||t[n[w]]}function Ce(w,{languageName:T}){typeof w=="string"&&(w=[w]),w.forEach(j=>{n[j.toLowerCase()]=T})}function Fe(w){const T=_e(w);return T&&!T.disableAutodetect}function Ve(w){w["before:highlightBlock"]&&!w["before:highlightElement"]&&(w["before:highlightElement"]=T=>{w["before:highlightBlock"](Object.assign({block:T.el},T))}),w["after:highlightBlock"]&&!w["after:highlightElement"]&&(w["after:highlightElement"]=T=>{w["after:highlightBlock"](Object.assign({block:T.el},T))})}function Pe(w){Ve(w),o.push(w)}function ct(w){const T=o.indexOf(w);T!==-1&&o.splice(T,1)}function De(w,T){const j=w;o.forEach(function(W){W[j]&&W[j](T)})}function he(w){return Ut("10.7.0","highlightBlock will be removed entirely in v12.0"),Ut("10.7.0","Please use highlightElement now."),M(w)}Object.assign(e,{highlight:u,highlightAuto:b,highlightAll:B,highlightElement:M,highlightBlock:he,configure:Y,initHighlighting:z,initHighlightingOnLoad:P,registerLanguage:ce,unregisterLanguage:se,listLanguages:Ne,getLanguage:_e,registerAliases:Ce,autoDetection:Fe,inherit:Os,addPlugin:Pe,removePlugin:ct}),e.debugMode=function(){r=!1},e.safeMode=function(){r=!0},e.versionString=bd,e.regex={concat:$t,lookahead:ia,either:Sr,optional:If,anyNumberOfTimes:Cf};for(const w in Un)typeof Un[w]=="object"&&ra(Un[w]);return Object.assign(e,Un),e},ln=ga({});ln.newInstance=()=>ga({});var vd=ln;ln.HighlightJS=ln;ln.default=ln;const vo=Tf(vd),Cs="[A-Za-z$_][0-9A-Za-z$_]*",_d=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],yd=["true","false","null","undefined","NaN","Infinity"],ba=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],ma=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],wa=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],xd=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],Ed=[].concat(wa,ba,ma);function kd(e){const t=e.regex,n=(T,{after:j})=>{const W="</"+T[0].slice(1);return T.input.indexOf(W,j)!==-1},o=Cs,r={begin:"<>",end:"</>"},s=/<[A-Za-z0-9\\._:-]+\s*\/>/,i={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(T,j)=>{const W=T[0].length+T.index,Z=T.input[W];if(Z==="<"||Z===","){j.ignoreMatch();return}Z===">"&&(n(T,{after:W})||j.ignoreMatch());let te;const xe=T.input.substring(W);if(te=xe.match(/^\s*=/)){j.ignoreMatch();return}if((te=xe.match(/^\s+extends\s+/))&&te.index===0){j.ignoreMatch();return}}},a={$pattern:Cs,keyword:_d,literal:yd,built_in:Ed,"variable.language":xd},l="[0-9](_?[0-9])*",d=`\\.(${l})`,u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",h={className:"number",variants:[{begin:`(\\b(${u})((${d})|\\.)?|(${d}))[eE][+-]?(${l})\\b`},{begin:`\\b(${u})\\b((${d})\\b|\\.)?|(${d})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},p={className:"subst",begin:"\\$\\{",end:"\\}",keywords:a,contains:[]},b={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,p],subLanguage:"xml"}},L={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,p],subLanguage:"css"}},M={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,p],subLanguage:"graphql"}},Y={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,p]},P={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:o+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},H=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,b,L,M,Y,{match:/\$\d+/},h];p.contains=H.concat({begin:/\{/,end:/\}/,keywords:a,contains:["self"].concat(H)});const B=[].concat(P,p.contains),J=B.concat([{begin:/(\s*)\(/,end:/\)/,keywords:a,contains:["self"].concat(B)}]),ce={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:J},se={variants:[{match:[/class/,/\s+/,o,/\s+/,/extends/,/\s+/,t.concat(o,"(",t.concat(/\./,o),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,o],scope:{1:"keyword",3:"title.class"}}]},Ne={relevance:0,match:t.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...ba,...ma]}},_e={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},Ce={variants:[{match:[/function/,/\s+/,o,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[ce],illegal:/%/},Fe={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function Ve(T){return t.concat("(?!",T.join("|"),")")}const Pe={match:t.concat(/\b/,Ve([...wa,"super","import"].map(T=>`${T}\\s*\\(`)),o,t.lookahead(/\s*\(/)),className:"title.function",relevance:0},ct={begin:t.concat(/\./,t.lookahead(t.concat(o,/(?![0-9A-Za-z$_(])/))),end:o,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},De={match:[/get|set/,/\s+/,o,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},ce]},he="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",w={match:[/const|var|let/,/\s+/,o,/\s*/,/=\s*/,/(async\s*)?/,t.lookahead(he)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[ce]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:a,exports:{PARAMS_CONTAINS:J,CLASS_REFERENCE:Ne},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),_e,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,b,L,M,Y,P,{match:/\$\d+/},h,Ne,{className:"attr",begin:o+t.lookahead(":"),relevance:0},w,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[P,e.REGEXP_MODE,{className:"function",begin:he,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:J}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:r.begin,end:r.end},{match:s},{begin:i.begin,"on:begin":i.isTrulyOpeningTag,end:i.end}],subLanguage:"xml",contains:[{begin:i.begin,end:i.end,skip:!0,contains:["self"]}]}]},Ce,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[ce,e.inherit(e.TITLE_MODE,{begin:o,className:"title.function"})]},{match:/\.\.\./,relevance:0},ct,{match:"\\$"+o,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[ce]},Pe,Fe,se,De,{match:/\$[(.]/}]}}const Sd=e=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:e.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z_][A-Za-z0-9_-]*/}}),Td=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","optgroup","option","p","picture","q","quote","samp","section","select","source","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],Rd=["defs","g","marker","mask","pattern","svg","switch","symbol","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feGaussianBlur","feImage","feMerge","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","linearGradient","radialGradient","stop","circle","ellipse","image","line","path","polygon","polyline","rect","text","use","textPath","tspan","foreignObject","clipPath"],Ad=[...Td,...Rd],Od=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"].sort().reverse(),Nd=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"].sort().reverse(),Cd=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"].sort().reverse(),Id=["accent-color","align-content","align-items","align-self","alignment-baseline","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","baseline-shift","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-end-end-radius","border-end-start-radius","border-right-color","border-right-style","border-right-width","border-spacing","border-start-end-radius","border-start-start-radius","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","cx","cy","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","color-scheme","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","empty-cells","enable-background","fill","fill-opacity","fill-rule","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","flood-color","flood-opacity","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-horizontal","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","inset","inset-block","inset-block-end","inset-block-start","inset-inline","inset-inline-end","inset-inline-start","isolation","kerning","justify-content","justify-items","justify-self","left","letter-spacing","lighting-color","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","marker","marker-end","marker-mid","marker-start","mask","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","r","resize","rest","rest-after","rest-before","right","rotate","row-gap","scale","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","shape-rendering","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","speak","speak-as","src","tab-size","table-layout","text-anchor","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip-ink","text-decoration-style","text-decoration-thickness","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-offset","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","translate","unicode-bidi","vector-effect","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","x","y","z-index"].sort().reverse();function Md(e){const t=e.regex,n=Sd(e),o={begin:/-(webkit|moz|ms|o)-(?=[a-z])/},r="and or not only",s=/@-?\w[\w]*(-\w+)*/,i="[a-zA-Z-][a-zA-Z0-9_-]*",a=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE];return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},classNameAliases:{keyframePosition:"selector-tag"},contains:[n.BLOCK_COMMENT,o,n.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{className:"selector-class",begin:"\\."+i,relevance:0},n.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{begin:":("+Nd.join("|")+")"},{begin:":(:)?("+Cd.join("|")+")"}]},n.CSS_VARIABLE,{className:"attribute",begin:"\\b("+Id.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,contains:[n.BLOCK_COMMENT,n.HEXCOLOR,n.IMPORTANT,n.CSS_NUMBER_MODE,...a,{begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"},contains:[...a,{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]},n.FUNCTION_DISPATCH]},{begin:t.lookahead(/@/),end:"[{;]",relevance:0,illegal:/:/,contains:[{className:"keyword",begin:s},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:r,attribute:Od.join(" ")},contains:[{begin:/[a-z-]+(?=:)/,className:"attribute"},...a,n.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"\\b("+Ad.join("|")+")\\b"}]}}function Bd(e){return{name:"VBScript in HTML",subLanguage:"xml",contains:[{begin:"<%",end:"%>",subLanguage:"vbscript"}]}}vo.registerLanguage("javascript",kd);vo.registerLanguage("css",Md);vo.registerLanguage("html",Bd);const Ld={name:"CodeBlock",props:{code:{type:String,required:!0},type:{type:String,default:"css"}},mounted(){this.highlightCode()},methods:{highlightCode(){const e=this.$refs.codeBlock;vo.highlightElement(e)}}};function Pd(e,t,n,o,r,s){return ae(),fe("pre",null,[t[0]||(t[0]=Ge("        ")),me("code",{ref:"codeBlock",class:Dt(`code language-${n.type}`)},`
            `+Kn(n.code)+`
        `,3),t[1]||(t[1]=Ge(`
    `))])}const Fd=Pn(Ld,[["render",Pd]]),Dd=`
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
`;var Mn;class Hd extends Qe{constructor(){super();we(this,Mn);const n=this.attachShadow({mode:"open"});n.innerHTML=`
      <div class="ea-card_wrap" part="container">
        <div class="ea-card_header" part="header-wrap">
          <slot name="header"></slot>
        </div>
        <div class="ea-card_content" part="content-wrap">
          <slot></slot>
        </div>
      </div>
    `,ye(this,Mn,n.querySelector(".ea-card_wrap")),this.build(n,Dd)}get shadow(){return this.getAttribute("shadow")||"always"}set shadow(n){this.setAttribute("shadow",n),U(this,Mn).classList.add(`is-${n}-shadow`)}connectedCallback(){this.shadow=this.shadow}}Mn=new WeakMap;customElements.get("ea-card")||customElements.define("ea-card",Hd);const zd={name:"SgCard",components:{CodeBlock:Fd},props:{title:{type:String,default:"Card"},code:{type:String,default:""},className:{type:String,default:""},hasButton:{type:Boolean,default:!1}},setup(e){let t=uo(e.hasButton);const n=Xe(()=>({[e.className]:t.value?"":e.className,box:!0}));return{isAnimated:t,animateClassName:n,toggleClass:s=>{t.value=!1},animationend:()=>{t.value=!0}}}},$d={class:"sg-card"},jd={shadow:"hover"},Ud={slot:"header",class:"header"};function Xd(e,t,n,o,r,s){const i=Tl("CodeBlock");return ae(),fe("div",$d,[me("ea-card",jd,[me("div",Ud,[me("span",null,Kn(n.title),1),n.hasButton?(ae(),fe("ea-button",{key:0,onClick:t[0]||(t[0]=(...a)=>o.toggleClass&&o.toggleClass(...a))}," 点击执行动画 ")):ac("",!0)]),me("span",{class:Dt(o.animateClassName),onAnimationend:t[1]||(t[1]=(...a)=>o.animationend&&o.animationend(...a))},Kn(n.title),35),q(i,{code:n.code},null,8,["code"])])])}const bt=Pn(zd,[["render",Xd]]),Yd={class:"part"},Vd={__name:"index",setup(e){const t={};return Object.assign(t,{grow:{title:"放大",className:"grow",code:`
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
    `}}),(n,o)=>(ae(),fe("section",Yd,[(ae(),fe(ge,null,gt(t,(r,s)=>q(bt,{key:s,title:r.title,code:r.code,className:r.className},null,8,["title","code","className"])),64))]))}},Kd={class:"part"},Gd={__name:"index",setup(e){const t={};return Object.assign(t,{fill:{title:"填充",className:"fill",code:`
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
`}}),(n,o)=>(ae(),fe("section",Kd,[(ae(),fe(ge,null,gt(t,(r,s)=>q(bt,{key:s,title:r.title,code:r.code,className:r.className},null,8,["title","code","className"])),64))]))}},Wd={class:"part"},qd={__name:"index",setup(e){const t={};return Object.assign(t,{borderFade:{title:"填充",className:"borderFade",code:`
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
`}}),(n,o)=>(ae(),fe("section",Wd,[(ae(),fe(ge,null,gt(t,(r,s)=>q(bt,{key:s,title:r.title,code:r.code,className:r.className},null,8,["title","code","className"])),64))]))}},Zd={class:"part"},Jd={__name:"index",setup(e){const t={};return Object.assign(t,{shadow:{title:"阴影",className:"shadow",code:`
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
`}}),(n,o)=>(ae(),fe("section",Zd,[(ae(),fe(ge,null,gt(t,(r,s)=>q(bt,{key:s,title:r.title,code:r.code,className:r.className},null,8,["title","code","className"])),64))]))}},Qd={class:"part"},eh={__name:"index",setup(e){const t={};return Object.assign(t,{bubbleTop:{title:"气泡-上方",className:"bubbleTop",code:`
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
`}}),(n,o)=>(ae(),fe("section",Qd,[(ae(),fe(ge,null,gt(t,(r,s)=>q(bt,{key:s,title:r.title,code:r.code,className:r.className},null,8,["title","code","className"])),64))]))}},th={class:"part"},nh={__name:"index",setup(e){const t={};return Object.assign(t,{curlTopLeft:{title:"折角-左上方",className:"curlTopLeft",code:`
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
`}}),(n,o)=>(ae(),fe("section",th,[(ae(),fe(ge,null,gt(t,(r,s)=>q(bt,{key:s,title:r.title,code:r.code,className:r.className},null,8,["title","code","className"])),64))]))}},oh={class:"part"},rh={__name:"index",setup(e){const t={};return Object.assign(t,{bounce:{title:"跳跃",className:"bounce",code:`
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
`}}),(n,o)=>(ae(),fe("section",oh,[(ae(),fe(ge,null,gt(t,(r,s)=>q(bt,{key:s,title:r.title,code:r.code,className:r.className},null,8,["title","code","className"])),64))]))}},sh=`
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
`;var on,Se;class lh extends Qe{constructor(){super();we(this,on,"button");we(this,Se);const n=this.attachShadow({mode:"open"});this.getAttribute("href")?(n.innerHTML=ih,ye(this,on,"a")):(n.innerHTML=sh,ye(this,on,"button")),ye(this,Se,n.querySelector(".ea-button")),this.build(n,ah)}get BUTTON_STYLE(){return["plain","round"]}get BUTTON_TYPE(){return["normal","primary","success","warning","danger","text"]}get BUTTON_SIZE(){return["medium","small","mini"]}get disabled(){return this.getAttrBoolean("disabled")}set disabled(n){this.toggleAttr("disabled",n),U(this,Se).classList.toggle("disabled",n),this.style.cursor=n?"not-allowed":"pointer",n&&U(this,Se).setAttribute("disabled",n)}get plain(){return this.getAttrBoolean("plain")}set plain(n){this.toggleAttr("plain",n),U(this,Se).classList.toggle("plain",n)}get round(){return this.getAttrBoolean("round")}set round(n){this.toggleAttr("round",n),U(this,Se).classList.toggle("round",n)}get type(){const n=this.getAttribute("type");return this.BUTTON_TYPE.includes(n)?n:"normal"}set type(n){this.setAttribute("type",n),U(this,Se).classList.add(n)}get size(){const n=this.getAttribute("size");return this.BUTTON_SIZE.includes(n)?n:"medium"}set size(n){this.toggleAttr("size",n),U(this,Se).classList.add(n)}get loading(){return this.getAttrBoolean("loading")}set loading(n){var o;if(this.toggleAttr("loading",n),this.disabled=n,n){const r=document.createElement("ea-icon");r.id="ea-loading-icon",r.icon="icon-spin6 animate-spin",U(this,Se).insertBefore(r,U(this,Se).firstChild)}else{const r=(o=U(this,Se))==null?void 0:o.querySelectorAll("#ea-loading-icon");(r==null?void 0:r.length)>0&&(r==null||r.forEach(s=>s.remove()))}}get icon(){return this.getAttribute("icon")||""}set icon(n){if(this.setAttribute("icon",n),n&&!U(this,Se).querySelector("ea-icon")){const o=document.createElement("ea-icon");o.icon=n,o.part="icon",U(this,Se).insertBefore(o,U(this,Se).firstChild)}}get href(){return this.getAttribute("href")||""}set href(n){U(this,on)!=="button"&&(this.setAttribute("href",n),U(this,Se).setAttribute("href",n))}connectedCallback(){this.plain=this.plain,this.round=this.round,this.type=this.type,this.size=this.size,this.icon=this.icon,this.disabled=this.disabled,this.href=this.href,this.loading&&(this.loading=this.loading)}}on=new WeakMap,Se=new WeakMap;window.customElements.get("ea-button")||window.customElements.define("ea-button",lh);const ch={class:"part"},uh={class:"part"},fh={__name:"index",setup(e){const t={backInTop:{title:"从上出现",className:"backInTop",code:`
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
`}};return(o,r)=>(ae(),fe(ge,null,[r[0]||(r[0]=me("h2",null,"从后面进入",-1)),me("section",ch,[(ae(),fe(ge,null,gt(t,(s,i)=>q(bt,{key:i,title:s.title,code:s.code,className:s.className,hasButton:!0},null,8,["title","code","className"])),64))]),r[1]||(r[1]=me("h2",null,"从后面退出",-1)),me("section",uh,[(ae(),fe(ge,null,gt(n,(s,i)=>q(bt,{key:i,title:s.title,code:s.code,className:s.className,hasButton:!0},null,8,["title","code","className"])),64))])],64))}},dh=[{path:"/",redirect:"/2DTransitions",meta:{title:"主页"}},{path:"/2DTransitions",component:Vd,meta:{title:"2D 过渡动画"}},{path:"/backgroundTransitions",component:Gd,meta:{title:"背景过渡动画"}},{path:"/borderTransitions",component:qd,meta:{title:"边框过渡动画"}},{path:"/shadowAndGlowTransitions",component:Jd,meta:{title:"阴影过渡动画"}},{path:"/speechBubbles",component:eh,meta:{title:"气泡框过渡动画"}},{path:"/curls",component:nh,meta:{title:"折角过渡动画"}},{path:"/attentionSeekers",component:rh,meta:{title:"吸引眼球动画"}},{path:"/backEntrancesAndBackExits",component:fh,meta:{title:"后进后出动画"}}],va=Yu({history:xu(),routes:dh});va.beforeEach((e,t,n)=>{document.title=`${e.meta.title} | Ea-effects.css`,e.hash||n()});const Is={fontelloCSS:"https://cdn.jsdelivr.net/npm/easy-component-ui/components/ea-icon/css/fontello.css"};function hh(e){Object.assign(Is,e),document.dispatchEvent(new CustomEvent("configChanged",{detail:Is}))}window.addEventListener("DOMContentLoaded",()=>{hh({fontelloCSS:new URL("/ea-effects/ea-icon/css/fontello.css",import.meta.url).href})});jc(Sf).use(va).mount("#app");
