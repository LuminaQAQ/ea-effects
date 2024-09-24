var Ar=e=>{throw TypeError(e)};var vo=(e,t,n)=>t.has(e)||Ar("Cannot "+n);var X=(e,t,n)=>(vo(e,t,"read from private field"),n?n.call(e):t.get(e)),we=(e,t,n)=>t.has(e)?Ar("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),ye=(e,t,n,o)=>(vo(e,t,"write to private field"),o?o.call(e,n):t.set(e,n),n),yo=(e,t,n)=>(vo(e,t,"access private method"),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function er(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ue={},Vt=[],ct=()=>{},va=()=>!1,oo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),tr=e=>e.startsWith("onUpdate:"),Oe=Object.assign,nr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ya=Object.prototype.hasOwnProperty,se=(e,t)=>ya.call(e,t),K=Array.isArray,Kt=e=>ro(e)==="[object Map]",Ms=e=>ro(e)==="[object Set]",W=e=>typeof e=="function",_e=e=>typeof e=="string",Tt=e=>typeof e=="symbol",pe=e=>e!==null&&typeof e=="object",Ls=e=>(pe(e)||W(e))&&W(e.then)&&W(e.catch),Bs=Object.prototype.toString,ro=e=>Bs.call(e),xa=e=>ro(e).slice(8,-1),Ps=e=>ro(e)==="[object Object]",or=e=>_e(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,hn=er(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),so=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ea=/-(\w)/g,tt=so(e=>e.replace(Ea,(t,n)=>n?n.toUpperCase():"")),ka=/\B([A-Z])/g,Ht=so(e=>e.replace(ka,"-$1").toLowerCase()),io=so(e=>e.charAt(0).toUpperCase()+e.slice(1)),xo=so(e=>e?`on${io(e)}`:""),Ot=(e,t)=>!Object.is(e,t),Eo=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Fs=(e,t,n,o=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:o,value:n})},Ra=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ir;const Ds=()=>Ir||(Ir=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function rr(e){if(K(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],r=_e(o)?Na(o):rr(o);if(r)for(const s in r)t[s]=r[s]}return t}else if(_e(e)||pe(e))return e}const Oa=/;(?![^(]*\))/g,Sa=/:([^]+)/,Ta=/\/\*[^]*?\*\//g;function Na(e){const t={};return e.replace(Ta,"").split(Oa).forEach(n=>{if(n){const o=n.split(Sa);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function Dt(e){let t="";if(_e(e))t=e;else if(K(e))for(let n=0;n<e.length;n++){const o=Dt(e[n]);o&&(t+=o+" ")}else if(pe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Aa="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ia=er(Aa);function $s(e){return!!e||e===""}const Hs=e=>!!(e&&e.__v_isRef===!0),Kn=e=>_e(e)?e:e==null?"":K(e)||pe(e)&&(e.toString===Bs||!W(e.toString))?Hs(e)?Kn(e.value):JSON.stringify(e,zs,2):String(e),zs=(e,t)=>Hs(t)?zs(e,t.value):Kt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[o,r],s)=>(n[ko(o,s)+" =>"]=r,n),{})}:Ms(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>ko(n))}:Tt(t)?ko(t):pe(t)&&!K(t)&&!Ps(t)?String(t):t,ko=(e,t="")=>{var n;return Tt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ye;class Ca{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ye,!t&&Ye&&(this.index=(Ye.scopes||(Ye.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Ye;try{return Ye=this,t()}finally{Ye=n}}}on(){Ye=this}off(){Ye=this.parent}stop(t){if(this._active){let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Ma(){return Ye}let fe;const Ro=new WeakSet;class Us{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.nextEffect=void 0,this.cleanup=void 0,this.scheduler=void 0,Ye&&Ye.active&&Ye.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ro.has(this)&&(Ro.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||(this.flags|=8,this.nextEffect=pn,pn=this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Cr(this),js(this);const t=fe,n=et;fe=this,et=!0;try{return this.fn()}finally{Ys(this),fe=t,et=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)ar(t);this.deps=this.depsTail=void 0,Cr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ro.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){$o(this)&&this.run()}get dirty(){return $o(this)}}let Xs=0,pn;function sr(){Xs++}function ir(){if(--Xs>0)return;let e;for(;pn;){let t=pn;for(pn=void 0;t;){const n=t.nextEffect;if(t.nextEffect=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(o){e||(e=o)}t=n}}if(e)throw e}function js(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ys(e){let t,n=e.depsTail;for(let o=n;o;o=o.prevDep)o.version===-1?(o===n&&(n=o.prevDep),ar(o),La(o)):t=o,o.dep.activeLink=o.prevActiveLink,o.prevActiveLink=void 0;e.deps=t,e.depsTail=n}function $o(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&Vs(t.dep.computed)||t.dep.version!==t.version)return!0;return!!e._dirty}function Vs(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===_n))return;e.globalVersion=_n;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&!$o(e)){e.flags&=-3;return}const n=fe,o=et;fe=e,et=!0;try{js(e);const r=e.fn(e._value);(t.version===0||Ot(r,e._value))&&(e._value=r,t.version++)}catch(r){throw t.version++,r}finally{fe=n,et=o,Ys(e),e.flags&=-3}}function ar(e){const{dep:t,prevSub:n,nextSub:o}=e;if(n&&(n.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=n,e.nextSub=void 0),t.subs===e&&(t.subs=n),!t.subs&&t.computed){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)ar(r)}}function La(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let et=!0;const Ks=[];function Nt(){Ks.push(et),et=!1}function At(){const e=Ks.pop();et=e===void 0?!0:e}function Cr(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=fe;fe=void 0;try{t()}finally{fe=n}}}let _n=0;class lr{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0}track(t){if(!fe||!et||fe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==fe)n=this.activeLink={dep:this,sub:fe,version:this.version,nextDep:void 0,prevDep:void 0,nextSub:void 0,prevSub:void 0,prevActiveLink:void 0},fe.deps?(n.prevDep=fe.depsTail,fe.depsTail.nextDep=n,fe.depsTail=n):fe.deps=fe.depsTail=n,fe.flags&4&&Gs(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const o=n.nextDep;o.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=o),n.prevDep=fe.depsTail,n.nextDep=void 0,fe.depsTail.nextDep=n,fe.depsTail=n,fe.deps===n&&(fe.deps=o)}return n}trigger(t){this.version++,_n++,this.notify(t)}notify(t){sr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()}finally{ir()}}}function Gs(e){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let o=t.deps;o;o=o.nextDep)Gs(o)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}const Ho=new WeakMap,Pt=Symbol(""),zo=Symbol(""),vn=Symbol("");function Ne(e,t,n){if(et&&fe){let o=Ho.get(e);o||Ho.set(e,o=new Map);let r=o.get(n);r||o.set(n,r=new lr),r.track()}}function bt(e,t,n,o,r,s){const i=Ho.get(e);if(!i){_n++;return}const a=l=>{l&&l.trigger()};if(sr(),t==="clear")i.forEach(a);else{const l=K(e),d=l&&or(n);if(l&&n==="length"){const f=Number(o);i.forEach((h,p)=>{(p==="length"||p===vn||!Tt(p)&&p>=f)&&a(h)})}else switch(n!==void 0&&a(i.get(n)),d&&a(i.get(vn)),t){case"add":l?d&&a(i.get("length")):(a(i.get(Pt)),Kt(e)&&a(i.get(zo)));break;case"delete":l||(a(i.get(Pt)),Kt(e)&&a(i.get(zo)));break;case"set":Kt(e)&&a(i.get(Pt));break}}ir()}function Ut(e){const t=ie(e);return t===e?t:(Ne(t,"iterate",vn),qe(e)?t:t.map(Se))}function ao(e){return Ne(e=ie(e),"iterate",vn),e}const Ba={__proto__:null,[Symbol.iterator](){return Oo(this,Symbol.iterator,Se)},concat(...e){return Ut(this).concat(...e.map(t=>K(t)?Ut(t):t))},entries(){return Oo(this,"entries",e=>(e[1]=Se(e[1]),e))},every(e,t){return ht(this,"every",e,t,void 0,arguments)},filter(e,t){return ht(this,"filter",e,t,n=>n.map(Se),arguments)},find(e,t){return ht(this,"find",e,t,Se,arguments)},findIndex(e,t){return ht(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ht(this,"findLast",e,t,Se,arguments)},findLastIndex(e,t){return ht(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ht(this,"forEach",e,t,void 0,arguments)},includes(...e){return So(this,"includes",e)},indexOf(...e){return So(this,"indexOf",e)},join(e){return Ut(this).join(e)},lastIndexOf(...e){return So(this,"lastIndexOf",e)},map(e,t){return ht(this,"map",e,t,void 0,arguments)},pop(){return cn(this,"pop")},push(...e){return cn(this,"push",e)},reduce(e,...t){return Mr(this,"reduce",e,t)},reduceRight(e,...t){return Mr(this,"reduceRight",e,t)},shift(){return cn(this,"shift")},some(e,t){return ht(this,"some",e,t,void 0,arguments)},splice(...e){return cn(this,"splice",e)},toReversed(){return Ut(this).toReversed()},toSorted(e){return Ut(this).toSorted(e)},toSpliced(...e){return Ut(this).toSpliced(...e)},unshift(...e){return cn(this,"unshift",e)},values(){return Oo(this,"values",Se)}};function Oo(e,t,n){const o=ao(e),r=o[t]();return o!==e&&!qe(e)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=n(s.value)),s}),r}const Pa=Array.prototype;function ht(e,t,n,o,r,s){const i=ao(e),a=i!==e&&!qe(e),l=i[t];if(l!==Pa[t]){const h=l.apply(e,s);return a?Se(h):h}let d=n;i!==e&&(a?d=function(h,p){return n.call(this,Se(h),p,e)}:n.length>2&&(d=function(h,p){return n.call(this,h,p,e)}));const f=l.call(i,d,o);return a&&r?r(f):f}function Mr(e,t,n,o){const r=ao(e);let s=n;return r!==e&&(qe(e)?n.length>3&&(s=function(i,a,l){return n.call(this,i,a,l,e)}):s=function(i,a,l){return n.call(this,i,Se(a),l,e)}),r[t](s,...o)}function So(e,t,n){const o=ie(e);Ne(o,"iterate",vn);const r=o[t](...n);return(r===-1||r===!1)&&dr(n[0])?(n[0]=ie(n[0]),o[t](...n)):r}function cn(e,t,n=[]){Nt(),sr();const o=ie(e)[t].apply(e,n);return ir(),At(),o}const Fa=er("__proto__,__v_isRef,__isVue"),Ws=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Tt));function Da(e){Tt(e)||(e=String(e));const t=ie(this);return Ne(t,"has",e),t.hasOwnProperty(e)}class qs{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,o){const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return o===(r?s?Za:ei:s?Qs:Js).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(o)?t:void 0;const i=K(t);if(!r){let l;if(i&&(l=Ba[n]))return l;if(n==="hasOwnProperty")return Da}const a=Reflect.get(t,n,ke(t)?t:o);return(Tt(n)?Ws.has(n):Fa(n))||(r||Ne(t,"get",n),s)?a:ke(a)?i&&or(n)?a:a.value:pe(a)?r?ni(a):co(a):a}}class Zs extends qs{constructor(t=!1){super(!1,t)}set(t,n,o,r){let s=t[n];if(!this._isShallow){const l=$t(s);if(!qe(o)&&!$t(o)&&(s=ie(s),o=ie(o)),!K(t)&&ke(s)&&!ke(o))return l?!1:(s.value=o,!0)}const i=K(t)&&or(n)?Number(n)<t.length:se(t,n),a=Reflect.set(t,n,o,ke(t)?t:r);return t===ie(r)&&(i?Ot(o,s)&&bt(t,"set",n,o):bt(t,"add",n,o)),a}deleteProperty(t,n){const o=se(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&o&&bt(t,"delete",n,void 0),r}has(t,n){const o=Reflect.has(t,n);return(!Tt(n)||!Ws.has(n))&&Ne(t,"has",n),o}ownKeys(t){return Ne(t,"iterate",K(t)?"length":Pt),Reflect.ownKeys(t)}}class $a extends qs{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Ha=new Zs,za=new $a,Ua=new Zs(!0);const cr=e=>e,lo=e=>Reflect.getPrototypeOf(e);function Fn(e,t,n=!1,o=!1){e=e.__v_raw;const r=ie(e),s=ie(t);n||(Ot(t,s)&&Ne(r,"get",t),Ne(r,"get",s));const{has:i}=lo(r),a=o?cr:n?hr:Se;if(i.call(r,t))return a(e.get(t));if(i.call(r,s))return a(e.get(s));e!==r&&e.get(t)}function Dn(e,t=!1){const n=this.__v_raw,o=ie(n),r=ie(e);return t||(Ot(e,r)&&Ne(o,"has",e),Ne(o,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function $n(e,t=!1){return e=e.__v_raw,!t&&Ne(ie(e),"iterate",Pt),Reflect.get(e,"size",e)}function Lr(e,t=!1){!t&&!qe(e)&&!$t(e)&&(e=ie(e));const n=ie(this);return lo(n).has.call(n,e)||(n.add(e),bt(n,"add",e,e)),this}function Br(e,t,n=!1){!n&&!qe(t)&&!$t(t)&&(t=ie(t));const o=ie(this),{has:r,get:s}=lo(o);let i=r.call(o,e);i||(e=ie(e),i=r.call(o,e));const a=s.call(o,e);return o.set(e,t),i?Ot(t,a)&&bt(o,"set",e,t):bt(o,"add",e,t),this}function Pr(e){const t=ie(this),{has:n,get:o}=lo(t);let r=n.call(t,e);r||(e=ie(e),r=n.call(t,e)),o&&o.call(t,e);const s=t.delete(e);return r&&bt(t,"delete",e,void 0),s}function Fr(){const e=ie(this),t=e.size!==0,n=e.clear();return t&&bt(e,"clear",void 0,void 0),n}function Hn(e,t){return function(o,r){const s=this,i=s.__v_raw,a=ie(i),l=t?cr:e?hr:Se;return!e&&Ne(a,"iterate",Pt),i.forEach((d,f)=>o.call(r,l(d),l(f),s))}}function zn(e,t,n){return function(...o){const r=this.__v_raw,s=ie(r),i=Kt(s),a=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,d=r[e](...o),f=n?cr:t?hr:Se;return!t&&Ne(s,"iterate",l?zo:Pt),{next(){const{value:h,done:p}=d.next();return p?{value:h,done:p}:{value:a?[f(h[0]),f(h[1])]:f(h),done:p}},[Symbol.iterator](){return this}}}}function _t(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Xa(){const e={get(s){return Fn(this,s)},get size(){return $n(this)},has:Dn,add:Lr,set:Br,delete:Pr,clear:Fr,forEach:Hn(!1,!1)},t={get(s){return Fn(this,s,!1,!0)},get size(){return $n(this)},has:Dn,add(s){return Lr.call(this,s,!0)},set(s,i){return Br.call(this,s,i,!0)},delete:Pr,clear:Fr,forEach:Hn(!1,!0)},n={get(s){return Fn(this,s,!0)},get size(){return $n(this,!0)},has(s){return Dn.call(this,s,!0)},add:_t("add"),set:_t("set"),delete:_t("delete"),clear:_t("clear"),forEach:Hn(!0,!1)},o={get(s){return Fn(this,s,!0,!0)},get size(){return $n(this,!0)},has(s){return Dn.call(this,s,!0)},add:_t("add"),set:_t("set"),delete:_t("delete"),clear:_t("clear"),forEach:Hn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=zn(s,!1,!1),n[s]=zn(s,!0,!1),t[s]=zn(s,!1,!0),o[s]=zn(s,!0,!0)}),[e,n,t,o]}const[ja,Ya,Va,Ka]=Xa();function fr(e,t){const n=t?e?Ka:Va:e?Ya:ja;return(o,r,s)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?o:Reflect.get(se(n,r)&&r in o?n:o,r,s)}const Ga={get:fr(!1,!1)},Wa={get:fr(!1,!0)},qa={get:fr(!0,!1)};const Js=new WeakMap,Qs=new WeakMap,ei=new WeakMap,Za=new WeakMap;function Ja(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qa(e){return e.__v_skip||!Object.isExtensible(e)?0:Ja(xa(e))}function co(e){return $t(e)?e:ur(e,!1,Ha,Ga,Js)}function ti(e){return ur(e,!1,Ua,Wa,Qs)}function ni(e){return ur(e,!0,za,qa,ei)}function ur(e,t,n,o,r){if(!pe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=r.get(e);if(s)return s;const i=Qa(e);if(i===0)return e;const a=new Proxy(e,i===2?o:n);return r.set(e,a),a}function Gt(e){return $t(e)?Gt(e.__v_raw):!!(e&&e.__v_isReactive)}function $t(e){return!!(e&&e.__v_isReadonly)}function qe(e){return!!(e&&e.__v_isShallow)}function dr(e){return e?!!e.__v_raw:!1}function ie(e){const t=e&&e.__v_raw;return t?ie(t):e}function el(e){return!se(e,"__v_skip")&&Object.isExtensible(e)&&Fs(e,"__v_skip",!0),e}const Se=e=>pe(e)?co(e):e,hr=e=>pe(e)?ni(e):e;function ke(e){return e?e.__v_isRef===!0:!1}function fo(e){return oi(e,!1)}function tl(e){return oi(e,!0)}function oi(e,t){return ke(e)?e:new nl(e,t)}class nl{constructor(t,n){this.dep=new lr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:ie(t),this._value=n?t:Se(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,o=this.__v_isShallow||qe(t)||$t(t);t=o?t:ie(t),Ot(t,n)&&(this._rawValue=t,this._value=o?t:Se(t),this.dep.trigger())}}function Ve(e){return ke(e)?e.value:e}const ol={get:(e,t,n)=>t==="__v_raw"?e:Ve(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const r=e[t];return ke(r)&&!ke(n)?(r.value=n,!0):Reflect.set(e,t,n,o)}};function ri(e){return Gt(e)?e:new Proxy(e,ol)}class rl{constructor(t,n,o){this.fn=t,this.setter=n,this._value=void 0,this.dep=new lr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=_n-1,this.effect=this,this.__v_isReadonly=!n,this.isSSR=o}notify(){this.flags|=16,fe!==this&&this.dep.notify()}get value(){const t=this.dep.track();return Vs(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function sl(e,t,n=!1){let o,r;return W(e)?o=e:(o=e.get,r=e.set),new rl(o,r,n)}const Un={},Gn=new WeakMap;let Lt;function il(e,t=!1,n=Lt){if(n){let o=Gn.get(n);o||Gn.set(n,o=[]),o.push(e)}}function al(e,t,n=ue){const{immediate:o,deep:r,once:s,scheduler:i,augmentJob:a,call:l}=n,d=L=>r?L:qe(L)||r===!1||r===0?kt(L,1):kt(L);let f,h,p,m,B=!1,M=!1;if(ke(e)?(h=()=>e.value,B=qe(e)):Gt(e)?(h=()=>d(e),B=!0):K(e)?(M=!0,B=e.some(L=>Gt(L)||qe(L)),h=()=>e.map(L=>{if(ke(L))return L.value;if(Gt(L))return d(L);if(W(L))return l?l(L,2):L()})):W(e)?t?h=l?()=>l(e,2):e:h=()=>{if(p){Nt();try{p()}finally{At()}}const L=Lt;Lt=f;try{return l?l(e,3,[m]):e(m)}finally{Lt=L}}:h=ct,t&&r){const L=h,ee=r===!0?1/0:r;h=()=>kt(L(),ee)}const V=Ma(),H=()=>{f.stop(),V&&nr(V.effects,f)};if(s)if(t){const L=t;t=(...ee)=>{L(...ee),H()}}else{const L=h;h=()=>{L(),H()}}let P=M?new Array(e.length).fill(Un):Un;const $=L=>{if(!(!(f.flags&1)||!f.dirty&&!L))if(t){const ee=f.run();if(r||B||(M?ee.some((de,ce)=>Ot(de,P[ce])):Ot(ee,P))){p&&p();const de=Lt;Lt=f;try{const ce=[ee,P===Un?void 0:M&&P[0]===Un?[]:P,m];l?l(t,3,ce):t(...ce),P=ee}finally{Lt=de}}}else f.run()};return a&&a($),f=new Us(h),f.scheduler=i?()=>i($,!1):$,m=L=>il(L,!1,f),p=f.onStop=()=>{const L=Gn.get(f);if(L){if(l)l(L,4);else for(const ee of L)ee();Gn.delete(f)}},t?o?$(!0):P=f.run():i?i($.bind(null,!0),!0):f.run(),H.pause=f.pause.bind(f),H.resume=f.resume.bind(f),H.stop=H,H}function kt(e,t=1/0,n){if(t<=0||!pe(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,ke(e))kt(e.value,t,n);else if(K(e))for(let o=0;o<e.length;o++)kt(e[o],t,n);else if(Ms(e)||Kt(e))e.forEach(o=>{kt(o,t,n)});else if(Ps(e)){for(const o in e)kt(e[o],t,n);for(const o of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,o)&&kt(e[o],t,n)}return e}/**
* @vue/runtime-core v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ln(e,t,n,o){try{return o?e(...o):e()}catch(r){uo(r,t,n)}}function ut(e,t,n,o){if(W(e)){const r=Ln(e,t,n,o);return r&&Ls(r)&&r.catch(s=>{uo(s,t,n)}),r}if(K(e)){const r=[];for(let s=0;s<e.length;s++)r.push(ut(e[s],t,n,o));return r}}function uo(e,t,n,o=!0){const r=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||ue;if(t){let a=t.parent;const l=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const f=a.ec;if(f){for(let h=0;h<f.length;h++)if(f[h](e,l,d)===!1)return}a=a.parent}if(s){Nt(),Ln(s,null,10,[e,l,d]),At();return}}ll(e,n,r,o,i)}function ll(e,t,n,o=!0,r=!1){if(r)throw e;console.error(e)}let yn=!1,Uo=!1;const Be=[];let it=0;const Wt=[];let yt=null,jt=0;const si=Promise.resolve();let pr=null;function ii(e){const t=pr||si;return e?t.then(this?e.bind(this):e):t}function cl(e){let t=yn?it+1:0,n=Be.length;for(;t<n;){const o=t+n>>>1,r=Be[o],s=xn(r);s<e||s===e&&r.flags&2?t=o+1:n=o}return t}function gr(e){if(!(e.flags&1)){const t=xn(e),n=Be[Be.length-1];!n||!(e.flags&2)&&t>=xn(n)?Be.push(e):Be.splice(cl(t),0,e),e.flags|=1,ai()}}function ai(){!yn&&!Uo&&(Uo=!0,pr=si.then(ci))}function fl(e){K(e)?Wt.push(...e):yt&&e.id===-1?yt.splice(jt+1,0,e):e.flags&1||(Wt.push(e),e.flags|=1),ai()}function Dr(e,t,n=yn?it+1:0){for(;n<Be.length;n++){const o=Be[n];if(o&&o.flags&2){if(e&&o.id!==e.uid)continue;Be.splice(n,1),n--,o.flags&4&&(o.flags&=-2),o(),o.flags&=-2}}}function li(e){if(Wt.length){const t=[...new Set(Wt)].sort((n,o)=>xn(n)-xn(o));if(Wt.length=0,yt){yt.push(...t);return}for(yt=t,jt=0;jt<yt.length;jt++){const n=yt[jt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}yt=null,jt=0}}const xn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ci(e){Uo=!1,yn=!0;try{for(it=0;it<Be.length;it++){const t=Be[it];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Ln(t,t.i,t.i?15:14),t.flags&=-2)}}finally{for(;it<Be.length;it++){const t=Be[it];t&&(t.flags&=-2)}it=0,Be.length=0,li(),yn=!1,pr=null,(Be.length||Wt.length)&&ci()}}let Pe=null,fi=null;function Wn(e){const t=Pe;return Pe=e,fi=e&&e.type.__scopeId||null,t}function He(e,t=Pe,n){if(!t||e._n)return e;const o=(...r)=>{o._d&&Kr(-1);const s=Wn(t);let i;try{i=e(...r)}finally{Wn(s),o._d&&Kr(1)}return i};return o._n=!0,o._c=!0,o._d=!0,o}function Ct(e,t,n,o){const r=e.dirs,s=t&&t.dirs;for(let i=0;i<r.length;i++){const a=r[i];s&&(a.oldValue=s[i].value);let l=a.dir[o];l&&(Nt(),ut(l,n,8,[e.el,a,e,t]),At())}}const ul=Symbol("_vte"),dl=e=>e.__isTeleport;function mr(e,t){e.shapeFlag&6&&e.component?(e.transition=t,mr(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function ui(e,t){return W(e)?Oe({name:e.name},t,{setup:e}):e}function di(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Xo(e,t,n,o,r=!1){if(K(e)){e.forEach((B,M)=>Xo(B,t&&(K(t)?t[M]:t),n,o,r));return}if(qt(o)&&!r)return;const s=o.shapeFlag&4?vr(o.component):o.el,i=r?null:s,{i:a,r:l}=e,d=t&&t.r,f=a.refs===ue?a.refs={}:a.refs,h=a.setupState,p=ie(h),m=h===ue?()=>!1:B=>se(p,B);if(d!=null&&d!==l&&(_e(d)?(f[d]=null,m(d)&&(h[d]=null)):ke(d)&&(d.value=null)),W(l))Ln(l,a,12,[i,f]);else{const B=_e(l),M=ke(l);if(B||M){const V=()=>{if(e.f){const H=B?m(l)?h[l]:f[l]:l.value;r?K(H)&&nr(H,s):K(H)?H.includes(s)||H.push(s):B?(f[l]=[s],m(l)&&(h[l]=f[l])):(l.value=[s],e.k&&(f[e.k]=l.value))}else B?(f[l]=i,m(l)&&(h[l]=i)):M&&(l.value=i,e.k&&(f[e.k]=i))};i?(V.id=-1,je(V,n)):V()}}}const qt=e=>!!e.type.__asyncLoader,hi=e=>e.type.__isKeepAlive;function hl(e,t){pi(e,"a",t)}function pl(e,t){pi(e,"da",t)}function pi(e,t,n=Te){const o=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(ho(t,o,n),n){let r=n.parent;for(;r&&r.parent;)hi(r.parent.vnode)&&gl(o,t,n,r),r=r.parent}}function gl(e,t,n,o){const r=ho(t,e,o,!0);gi(()=>{nr(o[t],r)},n)}function ho(e,t,n=Te,o=!1){if(n){const r=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...i)=>{Nt();const a=Bn(n),l=ut(t,n,e,i);return a(),At(),l});return o?r.unshift(s):r.push(s),s}}const wt=e=>(t,n=Te)=>{(!mo||e==="sp")&&ho(e,(...o)=>t(...o),n)},ml=wt("bm"),bl=wt("m"),wl=wt("bu"),_l=wt("u"),vl=wt("bum"),gi=wt("um"),yl=wt("sp"),xl=wt("rtg"),El=wt("rtc");function kl(e,t=Te){ho("ec",e,t)}const Rl="components";function Ol(e,t){return Tl(Rl,e,!0,t)||e}const Sl=Symbol.for("v-ndc");function Tl(e,t,n=!0,o=!1){const r=Pe||Te;if(r){const s=r.type;{const a=mc(s,!1);if(a&&(a===t||a===tt(t)||a===io(tt(t))))return s}const i=$r(r[e]||s[e],t)||$r(r.appContext[e],t);return!i&&o?s:i}}function $r(e,t){return e&&(e[t]||e[tt(t)]||e[io(tt(t))])}function Fe(e,t,n,o){let r;const s=n,i=K(e);if(i||_e(e)){const a=i&&Gt(e);let l=!1;a&&(l=!qe(e),e=ao(e)),r=new Array(e.length);for(let d=0,f=e.length;d<f;d++)r[d]=t(l?Se(e[d]):e[d],d,void 0,s)}else if(typeof e=="number"){r=new Array(e);for(let a=0;a<e;a++)r[a]=t(a+1,a,void 0,s)}else if(pe(e))if(e[Symbol.iterator])r=Array.from(e,(a,l)=>t(a,l,void 0,s));else{const a=Object.keys(e);r=new Array(a.length);for(let l=0,d=a.length;l<d;l++){const f=a[l];r[l]=t(e[f],f,l,s)}}else r=[];return r}function Nl(e,t,n={},o,r){if(Pe.ce||Pe.parent&&qt(Pe.parent)&&Pe.parent.ce)return Z(),Go(oe,null,[Y("slot",n,o)],64);let s=e[t];s&&s._c&&(s._d=!1),Z();const i=s&&mi(s(n)),a=Go(oe,{key:(n.key||i&&i.key||`_${t}`)+(!i&&o?"_fb":"")},i||[],i&&e._===1?64:-2);return s&&s._c&&(s._d=!0),a}function mi(e){return e.some(t=>Zn(t)?!(t.type===St||t.type===oe&&!mi(t.children)):!0)?e:null}const jo=e=>e?Pi(e)?vr(e):jo(e.parent):null,gn=Oe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>jo(e.parent),$root:e=>jo(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>br(e),$forceUpdate:e=>e.f||(e.f=()=>{gr(e.update)}),$nextTick:e=>e.n||(e.n=ii.bind(e.proxy)),$watch:e=>ql.bind(e)}),To=(e,t)=>e!==ue&&!e.__isScriptSetup&&se(e,t),Al={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:o,data:r,props:s,accessCache:i,type:a,appContext:l}=e;let d;if(t[0]!=="$"){const m=i[t];if(m!==void 0)switch(m){case 1:return o[t];case 2:return r[t];case 4:return n[t];case 3:return s[t]}else{if(To(o,t))return i[t]=1,o[t];if(r!==ue&&se(r,t))return i[t]=2,r[t];if((d=e.propsOptions[0])&&se(d,t))return i[t]=3,s[t];if(n!==ue&&se(n,t))return i[t]=4,n[t];Yo&&(i[t]=0)}}const f=gn[t];let h,p;if(f)return t==="$attrs"&&Ne(e.attrs,"get",""),f(e);if((h=a.__cssModules)&&(h=h[t]))return h;if(n!==ue&&se(n,t))return i[t]=4,n[t];if(p=l.config.globalProperties,se(p,t))return p[t]},set({_:e},t,n){const{data:o,setupState:r,ctx:s}=e;return To(r,t)?(r[t]=n,!0):o!==ue&&se(o,t)?(o[t]=n,!0):se(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:r,propsOptions:s}},i){let a;return!!n[i]||e!==ue&&se(e,i)||To(t,i)||(a=s[0])&&se(a,i)||se(o,i)||se(gn,i)||se(r.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:se(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Hr(e){return K(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Yo=!0;function Il(e){const t=br(e),n=e.proxy,o=e.ctx;Yo=!1,t.beforeCreate&&zr(t.beforeCreate,e,"bc");const{data:r,computed:s,methods:i,watch:a,provide:l,inject:d,created:f,beforeMount:h,mounted:p,beforeUpdate:m,updated:B,activated:M,deactivated:V,beforeDestroy:H,beforeUnmount:P,destroyed:$,unmounted:L,render:ee,renderTracked:de,renderTriggered:ce,errorCaptured:Ae,serverPrefetch:ve,expose:Ie,inheritAttrs:ze,components:Ze,directives:$e,filters:dt}=t;if(d&&Cl(d,o,null),i)for(const w in i){const O=i[w];W(O)&&(o[w]=O.bind(n))}if(r){const w=r.call(n,n);pe(w)&&(e.data=co(w))}if(Yo=!0,s)for(const w in s){const O=s[w],U=W(O)?O.bind(n,n):W(O.get)?O.get.bind(n,n):ct,q=!W(O)&&W(O.set)?O.set.bind(n):ct,J=We({get:U,set:q});Object.defineProperty(o,w,{enumerable:!0,configurable:!0,get:()=>J.value,set:re=>J.value=re})}if(a)for(const w in a)bi(a[w],o,n,w);if(l){const w=W(l)?l.call(n):l;Reflect.ownKeys(w).forEach(O=>{jn(O,w[O])})}f&&zr(f,e,"c");function ge(w,O){K(O)?O.forEach(U=>w(U.bind(n))):O&&w(O.bind(n))}if(ge(ml,h),ge(bl,p),ge(wl,m),ge(_l,B),ge(hl,M),ge(pl,V),ge(kl,Ae),ge(El,de),ge(xl,ce),ge(vl,P),ge(gi,L),ge(yl,ve),K(Ie))if(Ie.length){const w=e.exposed||(e.exposed={});Ie.forEach(O=>{Object.defineProperty(w,O,{get:()=>n[O],set:U=>n[O]=U})})}else e.exposed||(e.exposed={});ee&&e.render===ct&&(e.render=ee),ze!=null&&(e.inheritAttrs=ze),Ze&&(e.components=Ze),$e&&(e.directives=$e),ve&&di(e)}function Cl(e,t,n=ct){K(e)&&(e=Vo(e));for(const o in e){const r=e[o];let s;pe(r)?"default"in r?s=ft(r.from||o,r.default,!0):s=ft(r.from||o):s=ft(r),ke(s)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>s.value,set:i=>s.value=i}):t[o]=s}}function zr(e,t,n){ut(K(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,n)}function bi(e,t,n,o){let r=o.includes(".")?Ii(n,o):()=>n[o];if(_e(e)){const s=t[e];W(s)&&Jt(r,s)}else if(W(e))Jt(r,e.bind(n));else if(pe(e))if(K(e))e.forEach(s=>bi(s,t,n,o));else{const s=W(e.handler)?e.handler.bind(n):t[e.handler];W(s)&&Jt(r,s,e)}}function br(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:i}}=e.appContext,a=s.get(t);let l;return a?l=a:!r.length&&!n&&!o?l=t:(l={},r.length&&r.forEach(d=>qn(l,d,i,!0)),qn(l,t,i)),pe(t)&&s.set(t,l),l}function qn(e,t,n,o=!1){const{mixins:r,extends:s}=t;s&&qn(e,s,n,!0),r&&r.forEach(i=>qn(e,i,n,!0));for(const i in t)if(!(o&&i==="expose")){const a=Ml[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const Ml={data:Ur,props:Xr,emits:Xr,methods:dn,computed:dn,beforeCreate:Me,created:Me,beforeMount:Me,mounted:Me,beforeUpdate:Me,updated:Me,beforeDestroy:Me,beforeUnmount:Me,destroyed:Me,unmounted:Me,activated:Me,deactivated:Me,errorCaptured:Me,serverPrefetch:Me,components:dn,directives:dn,watch:Bl,provide:Ur,inject:Ll};function Ur(e,t){return t?e?function(){return Oe(W(e)?e.call(this,this):e,W(t)?t.call(this,this):t)}:t:e}function Ll(e,t){return dn(Vo(e),Vo(t))}function Vo(e){if(K(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Me(e,t){return e?[...new Set([].concat(e,t))]:t}function dn(e,t){return e?Oe(Object.create(null),e,t):t}function Xr(e,t){return e?K(e)&&K(t)?[...new Set([...e,...t])]:Oe(Object.create(null),Hr(e),Hr(t??{})):t}function Bl(e,t){if(!e)return t;if(!t)return e;const n=Oe(Object.create(null),e);for(const o in t)n[o]=Me(e[o],t[o]);return n}function wi(){return{app:null,config:{isNativeTag:va,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Pl=0;function Fl(e,t){return function(o,r=null){W(o)||(o=Oe({},o)),r!=null&&!pe(r)&&(r=null);const s=wi(),i=new WeakSet,a=[];let l=!1;const d=s.app={_uid:Pl++,_component:o,_props:r,_container:null,_context:s,_instance:null,version:wc,get config(){return s.config},set config(f){},use(f,...h){return i.has(f)||(f&&W(f.install)?(i.add(f),f.install(d,...h)):W(f)&&(i.add(f),f(d,...h))),d},mixin(f){return s.mixins.includes(f)||s.mixins.push(f),d},component(f,h){return h?(s.components[f]=h,d):s.components[f]},directive(f,h){return h?(s.directives[f]=h,d):s.directives[f]},mount(f,h,p){if(!l){const m=d._ceVNode||Y(o,r);return m.appContext=s,p===!0?p="svg":p===!1&&(p=void 0),h&&t?t(m,f):e(m,f,p),l=!0,d._container=f,f.__vue_app__=d,vr(m.component)}},onUnmount(f){a.push(f)},unmount(){l&&(ut(a,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(f,h){return s.provides[f]=h,d},runWithContext(f){const h=Zt;Zt=d;try{return f()}finally{Zt=h}}};return d}}let Zt=null;function jn(e,t){if(Te){let n=Te.provides;const o=Te.parent&&Te.parent.provides;o===n&&(n=Te.provides=Object.create(o)),n[e]=t}}function ft(e,t,n=!1){const o=Te||Pe;if(o||Zt){const r=Zt?Zt._context.provides:o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&W(t)?t.call(o&&o.proxy):t}}const _i={},vi=()=>Object.create(_i),yi=e=>Object.getPrototypeOf(e)===_i;function Dl(e,t,n,o=!1){const r={},s=vi();e.propsDefaults=Object.create(null),xi(e,t,r,s);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);n?e.props=o?r:ti(r):e.type.props?e.props=r:e.props=s,e.attrs=s}function $l(e,t,n,o){const{props:r,attrs:s,vnode:{patchFlag:i}}=e,a=ie(r),[l]=e.propsOptions;let d=!1;if((o||i>0)&&!(i&16)){if(i&8){const f=e.vnode.dynamicProps;for(let h=0;h<f.length;h++){let p=f[h];if(po(e.emitsOptions,p))continue;const m=t[p];if(l)if(se(s,p))m!==s[p]&&(s[p]=m,d=!0);else{const B=tt(p);r[B]=Ko(l,a,B,m,e,!1)}else m!==s[p]&&(s[p]=m,d=!0)}}}else{xi(e,t,r,s)&&(d=!0);let f;for(const h in a)(!t||!se(t,h)&&((f=Ht(h))===h||!se(t,f)))&&(l?n&&(n[h]!==void 0||n[f]!==void 0)&&(r[h]=Ko(l,a,h,void 0,e,!0)):delete r[h]);if(s!==a)for(const h in s)(!t||!se(t,h))&&(delete s[h],d=!0)}d&&bt(e.attrs,"set","")}function xi(e,t,n,o){const[r,s]=e.propsOptions;let i=!1,a;if(t)for(let l in t){if(hn(l))continue;const d=t[l];let f;r&&se(r,f=tt(l))?!s||!s.includes(f)?n[f]=d:(a||(a={}))[f]=d:po(e.emitsOptions,l)||(!(l in o)||d!==o[l])&&(o[l]=d,i=!0)}if(s){const l=ie(n),d=a||ue;for(let f=0;f<s.length;f++){const h=s[f];n[h]=Ko(r,l,h,d[h],e,!se(d,h))}}return i}function Ko(e,t,n,o,r,s){const i=e[n];if(i!=null){const a=se(i,"default");if(a&&o===void 0){const l=i.default;if(i.type!==Function&&!i.skipFactory&&W(l)){const{propsDefaults:d}=r;if(n in d)o=d[n];else{const f=Bn(r);o=d[n]=l.call(null,t),f()}}else o=l;r.ce&&r.ce._setProp(n,o)}i[0]&&(s&&!a?o=!1:i[1]&&(o===""||o===Ht(n))&&(o=!0))}return o}const Hl=new WeakMap;function Ei(e,t,n=!1){const o=n?Hl:t.propsCache,r=o.get(e);if(r)return r;const s=e.props,i={},a=[];let l=!1;if(!W(e)){const f=h=>{l=!0;const[p,m]=Ei(h,t,!0);Oe(i,p),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!s&&!l)return pe(e)&&o.set(e,Vt),Vt;if(K(s))for(let f=0;f<s.length;f++){const h=tt(s[f]);jr(h)&&(i[h]=ue)}else if(s)for(const f in s){const h=tt(f);if(jr(h)){const p=s[f],m=i[h]=K(p)||W(p)?{type:p}:Oe({},p),B=m.type;let M=!1,V=!0;if(K(B))for(let H=0;H<B.length;++H){const P=B[H],$=W(P)&&P.name;if($==="Boolean"){M=!0;break}else $==="String"&&(V=!1)}else M=W(B)&&B.name==="Boolean";m[0]=M,m[1]=V,(M||se(m,"default"))&&a.push(h)}}const d=[i,a];return pe(e)&&o.set(e,d),d}function jr(e){return e[0]!=="$"&&!hn(e)}const ki=e=>e[0]==="_"||e==="$stable",wr=e=>K(e)?e.map(lt):[lt(e)],zl=(e,t,n)=>{if(t._n)return t;const o=He((...r)=>wr(t(...r)),n);return o._c=!1,o},Ri=(e,t,n)=>{const o=e._ctx;for(const r in e){if(ki(r))continue;const s=e[r];if(W(s))t[r]=zl(r,s,o);else if(s!=null){const i=wr(s);t[r]=()=>i}}},Oi=(e,t)=>{const n=wr(t);e.slots.default=()=>n},Si=(e,t,n)=>{for(const o in t)(n||o!=="_")&&(e[o]=t[o])},Ul=(e,t,n)=>{const o=e.slots=vi();if(e.vnode.shapeFlag&32){const r=t._;r?(Si(o,t,n),n&&Fs(o,"_",r,!0)):Ri(t,o)}else t&&Oi(e,t)},Xl=(e,t,n)=>{const{vnode:o,slots:r}=e;let s=!0,i=ue;if(o.shapeFlag&32){const a=t._;a?n&&a===1?s=!1:Si(r,t,n):(s=!t.$stable,Ri(t,r)),i=t}else t&&(Oi(e,t),i={default:1});if(s)for(const a in r)!ki(a)&&i[a]==null&&delete r[a]},je=oc;function jl(e){return Yl(e)}function Yl(e,t){const n=Ds();n.__VUE__=!0;const{insert:o,remove:r,patchProp:s,createElement:i,createText:a,createComment:l,setText:d,setElementText:f,parentNode:h,nextSibling:p,setScopeId:m=ct,insertStaticContent:B}=e,M=(c,u,g,x=null,_=null,k=null,v=void 0,T=null,R=!!u.dynamicChildren)=>{if(c===u)return;c&&!fn(c,u)&&(x=y(c),re(c,_,k,!0),c=null),u.patchFlag===-2&&(R=!1,u.dynamicChildren=null);const{type:b,ref:z,shapeFlag:N}=u;switch(b){case go:V(c,u,g,x);break;case St:H(c,u,g,x);break;case Io:c==null&&P(u,g,x,v);break;case oe:Ze(c,u,g,x,_,k,v,T,R);break;default:N&1?ee(c,u,g,x,_,k,v,T,R):N&6?$e(c,u,g,x,_,k,v,T,R):(N&64||N&128)&&b.process(c,u,g,x,_,k,v,T,R,F)}z!=null&&_&&Xo(z,c&&c.ref,k,u||c,!u)},V=(c,u,g,x)=>{if(c==null)o(u.el=a(u.children),g,x);else{const _=u.el=c.el;u.children!==c.children&&d(_,u.children)}},H=(c,u,g,x)=>{c==null?o(u.el=l(u.children||""),g,x):u.el=c.el},P=(c,u,g,x)=>{[c.el,c.anchor]=B(c.children,u,g,x,c.el,c.anchor)},$=({el:c,anchor:u},g,x)=>{let _;for(;c&&c!==u;)_=p(c),o(c,g,x),c=_;o(u,g,x)},L=({el:c,anchor:u})=>{let g;for(;c&&c!==u;)g=p(c),r(c),c=g;r(u)},ee=(c,u,g,x,_,k,v,T,R)=>{u.type==="svg"?v="svg":u.type==="math"&&(v="mathml"),c==null?de(u,g,x,_,k,v,T,R):ve(c,u,_,k,v,T,R)},de=(c,u,g,x,_,k,v,T)=>{let R,b;const{props:z,shapeFlag:N,transition:D,dirs:j}=c;if(R=c.el=i(c.type,k,z&&z.is,z),N&8?f(R,c.children):N&16&&Ae(c.children,R,null,x,_,No(c,k),v,T),j&&Ct(c,null,x,"created"),ce(R,c,c.scopeId,v,x),z){for(const S in z)S!=="value"&&!hn(S)&&s(R,S,null,z[S],k,x);"value"in z&&s(R,"value",null,z.value,k),(b=z.onVnodeBeforeMount)&&st(b,x,c)}j&&Ct(c,null,x,"beforeMount");const E=Vl(_,D);E&&D.beforeEnter(R),o(R,u,g),((b=z&&z.onVnodeMounted)||E||j)&&je(()=>{b&&st(b,x,c),E&&D.enter(R),j&&Ct(c,null,x,"mounted")},_)},ce=(c,u,g,x,_)=>{if(g&&m(c,g),x)for(let k=0;k<x.length;k++)m(c,x[k]);if(_){let k=_.subTree;if(u===k||Mi(k.type)&&(k.ssContent===u||k.ssFallback===u)){const v=_.vnode;ce(c,v,v.scopeId,v.slotScopeIds,_.parent)}}},Ae=(c,u,g,x,_,k,v,T,R=0)=>{for(let b=R;b<c.length;b++){const z=c[b]=T?xt(c[b]):lt(c[b]);M(null,z,u,g,x,_,k,v,T)}},ve=(c,u,g,x,_,k,v)=>{const T=u.el=c.el;let{patchFlag:R,dynamicChildren:b,dirs:z}=u;R|=c.patchFlag&16;const N=c.props||ue,D=u.props||ue;let j;if(g&&Mt(g,!1),(j=D.onVnodeBeforeUpdate)&&st(j,g,u,c),z&&Ct(u,c,g,"beforeUpdate"),g&&Mt(g,!0),(N.innerHTML&&D.innerHTML==null||N.textContent&&D.textContent==null)&&f(T,""),b?Ie(c.dynamicChildren,b,T,g,x,No(u,_),k):v||O(c,u,T,null,g,x,No(u,_),k,!1),R>0){if(R&16)ze(T,N,D,g,_);else if(R&2&&N.class!==D.class&&s(T,"class",null,D.class,_),R&4&&s(T,"style",N.style,D.style,_),R&8){const E=u.dynamicProps;for(let S=0;S<E.length;S++){const C=E[S],G=N[C],te=D[C];(te!==G||C==="value")&&s(T,C,G,te,_,g)}}R&1&&c.children!==u.children&&f(T,u.children)}else!v&&b==null&&ze(T,N,D,g,_);((j=D.onVnodeUpdated)||z)&&je(()=>{j&&st(j,g,u,c),z&&Ct(u,c,g,"updated")},x)},Ie=(c,u,g,x,_,k,v)=>{for(let T=0;T<u.length;T++){const R=c[T],b=u[T],z=R.el&&(R.type===oe||!fn(R,b)||R.shapeFlag&70)?h(R.el):g;M(R,b,z,null,x,_,k,v,!0)}},ze=(c,u,g,x,_)=>{if(u!==g){if(u!==ue)for(const k in u)!hn(k)&&!(k in g)&&s(c,k,u[k],null,_,x);for(const k in g){if(hn(k))continue;const v=g[k],T=u[k];v!==T&&k!=="value"&&s(c,k,T,v,_,x)}"value"in g&&s(c,"value",u.value,g.value,_)}},Ze=(c,u,g,x,_,k,v,T,R)=>{const b=u.el=c?c.el:a(""),z=u.anchor=c?c.anchor:a("");let{patchFlag:N,dynamicChildren:D,slotScopeIds:j}=u;j&&(T=T?T.concat(j):j),c==null?(o(b,g,x),o(z,g,x),Ae(u.children||[],g,z,_,k,v,T,R)):N>0&&N&64&&D&&c.dynamicChildren?(Ie(c.dynamicChildren,D,g,_,k,v,T),(u.key!=null||_&&u===_.subTree)&&Ti(c,u,!0)):O(c,u,g,z,_,k,v,T,R)},$e=(c,u,g,x,_,k,v,T,R)=>{u.slotScopeIds=T,c==null?u.shapeFlag&512?_.ctx.activate(u,g,x,v,R):dt(u,g,x,_,k,v,R):Ue(c,u,R)},dt=(c,u,g,x,_,k,v)=>{const T=c.component=uc(c,x,_);if(hi(c)&&(T.ctx.renderer=F),dc(T,!1,v),T.asyncDep){if(_&&_.registerDep(T,ge,v),!c.el){const R=T.subTree=Y(St);H(null,R,u,g)}}else ge(T,c,u,g,_,k,v)},Ue=(c,u,g)=>{const x=u.component=c.component;if(tc(c,u,g))if(x.asyncDep&&!x.asyncResolved){w(x,u,g);return}else x.next=u,x.update();else u.el=c.el,x.vnode=u},ge=(c,u,g,x,_,k,v)=>{const T=()=>{if(c.isMounted){let{next:N,bu:D,u:j,parent:E,vnode:S}=c;{const Ce=Ni(c);if(Ce){N&&(N.el=S.el,w(c,N,v)),Ce.asyncDep.then(()=>{c.isUnmounted||T()});return}}let C=N,G;Mt(c,!1),N?(N.el=S.el,w(c,N,v)):N=S,D&&Eo(D),(G=N.props&&N.props.onVnodeBeforeUpdate)&&st(G,E,N,S),Mt(c,!0);const te=Ao(c),be=c.subTree;c.subTree=te,M(be,te,h(be.el),y(be),c,_,k),N.el=te.el,C===null&&nc(c,te.el),j&&je(j,_),(G=N.props&&N.props.onVnodeUpdated)&&je(()=>st(G,E,N,S),_)}else{let N;const{el:D,props:j}=u,{bm:E,m:S,parent:C,root:G,type:te}=c,be=qt(u);if(Mt(c,!1),E&&Eo(E),!be&&(N=j&&j.onVnodeBeforeMount)&&st(N,C,u),Mt(c,!0),D&&he){const Ce=()=>{c.subTree=Ao(c),he(D,c.subTree,c,_,null)};be&&te.__asyncHydrate?te.__asyncHydrate(D,c,Ce):Ce()}else{G.ce&&G.ce._injectChildStyle(te);const Ce=c.subTree=Ao(c);M(null,Ce,g,x,c,_,k),u.el=Ce.el}if(S&&je(S,_),!be&&(N=j&&j.onVnodeMounted)){const Ce=u;je(()=>st(N,C,Ce),_)}(u.shapeFlag&256||C&&qt(C.vnode)&&C.vnode.shapeFlag&256)&&c.a&&je(c.a,_),c.isMounted=!0,u=g=x=null}};c.scope.on();const R=c.effect=new Us(T);c.scope.off();const b=c.update=R.run.bind(R),z=c.job=R.runIfDirty.bind(R);z.i=c,z.id=c.uid,R.scheduler=()=>gr(z),Mt(c,!0),b()},w=(c,u,g)=>{u.component=c;const x=c.vnode.props;c.vnode=u,c.next=null,$l(c,u.props,x,g),Xl(c,u.children,g),Nt(),Dr(c),At()},O=(c,u,g,x,_,k,v,T,R=!1)=>{const b=c&&c.children,z=c?c.shapeFlag:0,N=u.children,{patchFlag:D,shapeFlag:j}=u;if(D>0){if(D&128){q(b,N,g,x,_,k,v,T,R);return}else if(D&256){U(b,N,g,x,_,k,v,T,R);return}}j&8?(z&16&&me(b,_,k),N!==b&&f(g,N)):z&16?j&16?q(b,N,g,x,_,k,v,T,R):me(b,_,k,!0):(z&8&&f(g,""),j&16&&Ae(N,g,x,_,k,v,T,R))},U=(c,u,g,x,_,k,v,T,R)=>{c=c||Vt,u=u||Vt;const b=c.length,z=u.length,N=Math.min(b,z);let D;for(D=0;D<N;D++){const j=u[D]=R?xt(u[D]):lt(u[D]);M(c[D],j,g,null,_,k,v,T,R)}b>z?me(c,_,k,!0,!1,N):Ae(u,g,x,_,k,v,T,R,N)},q=(c,u,g,x,_,k,v,T,R)=>{let b=0;const z=u.length;let N=c.length-1,D=z-1;for(;b<=N&&b<=D;){const j=c[b],E=u[b]=R?xt(u[b]):lt(u[b]);if(fn(j,E))M(j,E,g,null,_,k,v,T,R);else break;b++}for(;b<=N&&b<=D;){const j=c[N],E=u[D]=R?xt(u[D]):lt(u[D]);if(fn(j,E))M(j,E,g,null,_,k,v,T,R);else break;N--,D--}if(b>N){if(b<=D){const j=D+1,E=j<z?u[j].el:x;for(;b<=D;)M(null,u[b]=R?xt(u[b]):lt(u[b]),g,E,_,k,v,T,R),b++}}else if(b>D)for(;b<=N;)re(c[b],_,k,!0),b++;else{const j=b,E=b,S=new Map;for(b=E;b<=D;b++){const Xe=u[b]=R?xt(u[b]):lt(u[b]);Xe.key!=null&&S.set(Xe.key,b)}let C,G=0;const te=D-E+1;let be=!1,Ce=0;const It=new Array(te);for(b=0;b<te;b++)It[b]=0;for(b=j;b<=N;b++){const Xe=c[b];if(G>=te){re(Xe,_,k,!0);continue}let rt;if(Xe.key!=null)rt=S.get(Xe.key);else for(C=E;C<=D;C++)if(It[C-E]===0&&fn(Xe,u[C])){rt=C;break}rt===void 0?re(Xe,_,k,!0):(It[rt-E]=b+1,rt>=Ce?Ce=rt:be=!0,M(Xe,u[rt],g,null,_,k,v,T,R),G++)}const Tr=be?Kl(It):Vt;for(C=Tr.length-1,b=te-1;b>=0;b--){const Xe=E+b,rt=u[Xe],Nr=Xe+1<z?u[Xe+1].el:x;It[b]===0?M(null,rt,g,Nr,_,k,v,T,R):be&&(C<0||b!==Tr[C]?J(rt,g,Nr,2):C--)}}},J=(c,u,g,x,_=null)=>{const{el:k,type:v,transition:T,children:R,shapeFlag:b}=c;if(b&6){J(c.component.subTree,u,g,x);return}if(b&128){c.suspense.move(u,g,x);return}if(b&64){v.move(c,u,g,F);return}if(v===oe){o(k,u,g);for(let N=0;N<R.length;N++)J(R[N],u,g,x);o(c.anchor,u,g);return}if(v===Io){$(c,u,g);return}if(x!==2&&b&1&&T)if(x===0)T.beforeEnter(k),o(k,u,g),je(()=>T.enter(k),_);else{const{leave:N,delayLeave:D,afterLeave:j}=T,E=()=>o(k,u,g),S=()=>{N(k,()=>{E(),j&&j()})};D?D(k,E,S):S()}else o(k,u,g)},re=(c,u,g,x=!1,_=!1)=>{const{type:k,props:v,ref:T,children:R,dynamicChildren:b,shapeFlag:z,patchFlag:N,dirs:D,cacheIndex:j}=c;if(N===-2&&(_=!1),T!=null&&Xo(T,null,g,c,!0),j!=null&&(u.renderCache[j]=void 0),z&256){u.ctx.deactivate(c);return}const E=z&1&&D,S=!qt(c);let C;if(S&&(C=v&&v.onVnodeBeforeUnmount)&&st(C,u,c),z&6)Ee(c.component,g,x);else{if(z&128){c.suspense.unmount(g,x);return}E&&Ct(c,null,u,"beforeUnmount"),z&64?c.type.remove(c,u,g,F,x):b&&!b.hasOnce&&(k!==oe||N>0&&N&64)?me(b,u,g,!1,!0):(k===oe&&N&384||!_&&z&16)&&me(R,u,g),x&&xe(c)}(S&&(C=v&&v.onVnodeUnmounted)||E)&&je(()=>{C&&st(C,u,c),E&&Ct(c,null,u,"unmounted")},g)},xe=c=>{const{type:u,el:g,anchor:x,transition:_}=c;if(u===oe){Je(g,x);return}if(u===Io){L(c);return}const k=()=>{r(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(c.shapeFlag&1&&_&&!_.persisted){const{leave:v,delayLeave:T}=_,R=()=>v(g,k);T?T(c.el,k,R):R()}else k()},Je=(c,u)=>{let g;for(;c!==u;)g=p(c),r(c),c=g;r(u)},Ee=(c,u,g)=>{const{bum:x,scope:_,job:k,subTree:v,um:T,m:R,a:b}=c;Yr(R),Yr(b),x&&Eo(x),_.stop(),k&&(k.flags|=8,re(v,c,u,g)),T&&je(T,u),je(()=>{c.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},me=(c,u,g,x=!1,_=!1,k=0)=>{for(let v=k;v<c.length;v++)re(c[v],u,g,x,_)},y=c=>{if(c.shapeFlag&6)return y(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const u=p(c.anchor||c.el),g=u&&u[ul];return g?p(g):u};let I=!1;const A=(c,u,g)=>{c==null?u._vnode&&re(u._vnode,null,null,!0):M(u._vnode||null,c,u,null,null,null,g),u._vnode=c,I||(I=!0,Dr(),li(),I=!1)},F={p:M,um:re,m:J,r:xe,mt:dt,mc:Ae,pc:O,pbc:Ie,n:y,o:e};let ne,he;return{render:A,hydrate:ne,createApp:Fl(A,ne)}}function No({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Mt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Vl(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ti(e,t,n=!1){const o=e.children,r=t.children;if(K(o)&&K(r))for(let s=0;s<o.length;s++){const i=o[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=xt(r[s]),a.el=i.el),!n&&a.patchFlag!==-2&&Ti(i,a)),a.type===go&&(a.el=i.el)}}function Kl(e){const t=e.slice(),n=[0];let o,r,s,i,a;const l=e.length;for(o=0;o<l;o++){const d=e[o];if(d!==0){if(r=n[n.length-1],e[r]<d){t[o]=r,n.push(o);continue}for(s=0,i=n.length-1;s<i;)a=s+i>>1,e[n[a]]<d?s=a+1:i=a;d<e[n[s]]&&(s>0&&(t[o]=n[s-1]),n[s]=o)}}for(s=n.length,i=n[s-1];s-- >0;)n[s]=i,i=t[i];return n}function Ni(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ni(t)}function Yr(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Gl=Symbol.for("v-scx"),Wl=()=>ft(Gl);function Jt(e,t,n){return Ai(e,t,n)}function Ai(e,t,n=ue){const{immediate:o,deep:r,flush:s,once:i}=n,a=Oe({},n);let l;if(mo)if(s==="sync"){const p=Wl();l=p.__watcherHandles||(p.__watcherHandles=[])}else if(!t||o)a.once=!0;else return{stop:ct,resume:ct,pause:ct};const d=Te;a.call=(p,m,B)=>ut(p,d,m,B);let f=!1;s==="post"?a.scheduler=p=>{je(p,d&&d.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(p,m)=>{m?p():gr(p)}),a.augmentJob=p=>{t&&(p.flags|=4),f&&(p.flags|=2,d&&(p.id=d.uid,p.i=d))};const h=al(e,t,a);return l&&l.push(h),h}function ql(e,t,n){const o=this.proxy,r=_e(e)?e.includes(".")?Ii(o,e):()=>o[e]:e.bind(o,o);let s;W(t)?s=t:(s=t.handler,n=t);const i=Bn(this),a=Ai(r,s.bind(o),n);return i(),a}function Ii(e,t){const n=t.split(".");return()=>{let o=e;for(let r=0;r<n.length&&o;r++)o=o[n[r]];return o}}const Zl=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${tt(t)}Modifiers`]||e[`${Ht(t)}Modifiers`];function Jl(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||ue;let r=n;const s=t.startsWith("update:"),i=s&&Zl(o,t.slice(7));i&&(i.trim&&(r=n.map(f=>_e(f)?f.trim():f)),i.number&&(r=n.map(Ra)));let a,l=o[a=xo(t)]||o[a=xo(tt(t))];!l&&s&&(l=o[a=xo(Ht(t))]),l&&ut(l,e,6,r);const d=o[a+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,ut(d,e,6,r)}}function Ci(e,t,n=!1){const o=t.emitsCache,r=o.get(e);if(r!==void 0)return r;const s=e.emits;let i={},a=!1;if(!W(e)){const l=d=>{const f=Ci(d,t,!0);f&&(a=!0,Oe(i,f))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!a?(pe(e)&&o.set(e,null),null):(K(s)?s.forEach(l=>i[l]=null):Oe(i,s),pe(e)&&o.set(e,i),i)}function po(e,t){return!e||!oo(t)?!1:(t=t.slice(2).replace(/Once$/,""),se(e,t[0].toLowerCase()+t.slice(1))||se(e,Ht(t))||se(e,t))}function Ao(e){const{type:t,vnode:n,proxy:o,withProxy:r,propsOptions:[s],slots:i,attrs:a,emit:l,render:d,renderCache:f,props:h,data:p,setupState:m,ctx:B,inheritAttrs:M}=e,V=Wn(e);let H,P;try{if(n.shapeFlag&4){const L=r||o,ee=L;H=lt(d.call(ee,L,f,h,m,p,B)),P=a}else{const L=t;H=lt(L.length>1?L(h,{attrs:a,slots:i,emit:l}):L(h,null)),P=t.props?a:Ql(a)}}catch(L){mn.length=0,uo(L,e,1),H=Y(St)}let $=H;if(P&&M!==!1){const L=Object.keys(P),{shapeFlag:ee}=$;L.length&&ee&7&&(s&&L.some(tr)&&(P=ec(P,s)),$=rn($,P,!1,!0))}return n.dirs&&($=rn($,null,!1,!0),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&mr($,n.transition),H=$,Wn(V),H}const Ql=e=>{let t;for(const n in e)(n==="class"||n==="style"||oo(n))&&((t||(t={}))[n]=e[n]);return t},ec=(e,t)=>{const n={};for(const o in e)(!tr(o)||!(o.slice(9)in t))&&(n[o]=e[o]);return n};function tc(e,t,n){const{props:o,children:r,component:s}=e,{props:i,children:a,patchFlag:l}=t,d=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return o?Vr(o,i,d):!!i;if(l&8){const f=t.dynamicProps;for(let h=0;h<f.length;h++){const p=f[h];if(i[p]!==o[p]&&!po(d,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:o===i?!1:o?i?Vr(o,i,d):!0:!!i;return!1}function Vr(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let r=0;r<o.length;r++){const s=o[r];if(t[s]!==e[s]&&!po(n,s))return!0}return!1}function nc({vnode:e,parent:t},n){for(;t;){const o=t.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.el=e.el),o===e)(e=t.vnode).el=n,t=t.parent;else break}}const Mi=e=>e.__isSuspense;function oc(e,t){t&&t.pendingBranch?K(e)?t.effects.push(...e):t.effects.push(e):fl(e)}const oe=Symbol.for("v-fgt"),go=Symbol.for("v-txt"),St=Symbol.for("v-cmt"),Io=Symbol.for("v-stc"),mn=[];let Ke=null;function Z(e=!1){mn.push(Ke=e?null:[])}function rc(){mn.pop(),Ke=mn[mn.length-1]||null}let En=1;function Kr(e){En+=e,e<0&&Ke&&(Ke.hasOnce=!0)}function Li(e){return e.dynamicChildren=En>0?Ke||Vt:null,rc(),En>0&&Ke&&Ke.push(e),e}function Q(e,t,n,o,r,s){return Li(le(e,t,n,o,r,s,!0))}function Go(e,t,n,o,r){return Li(Y(e,t,n,o,r,!0))}function Zn(e){return e?e.__v_isVNode===!0:!1}function fn(e,t){return e.type===t.type&&e.key===t.key}const Bi=({key:e})=>e??null,Yn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?_e(e)||ke(e)||W(e)?{i:Pe,r:e,k:t,f:!!n}:e:null);function le(e,t=null,n=null,o=0,r=null,s=e===oe?0:1,i=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Bi(t),ref:t&&Yn(t),scopeId:fi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Pe};return a?(_r(l,n),s&128&&e.normalize(l)):n&&(l.shapeFlag|=_e(n)?8:16),En>0&&!i&&Ke&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Ke.push(l),l}const Y=sc;function sc(e,t=null,n=null,o=0,r=null,s=!1){if((!e||e===Sl)&&(e=St),Zn(e)){const a=rn(e,t,!0);return n&&_r(a,n),En>0&&!s&&Ke&&(a.shapeFlag&6?Ke[Ke.indexOf(e)]=a:Ke.push(a)),a.patchFlag=-2,a}if(bc(e)&&(e=e.__vccOpts),t){t=ic(t);let{class:a,style:l}=t;a&&!_e(a)&&(t.class=Dt(a)),pe(l)&&(dr(l)&&!K(l)&&(l=Oe({},l)),t.style=rr(l))}const i=_e(e)?1:Mi(e)?128:dl(e)?64:pe(e)?4:W(e)?2:0;return le(e,t,n,o,r,i,s,!0)}function ic(e){return e?dr(e)||yi(e)?Oe({},e):e:null}function rn(e,t,n=!1,o=!1){const{props:r,ref:s,patchFlag:i,children:a,transition:l}=e,d=t?lc(r||{},t):r,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&Bi(d),ref:t&&t.ref?n&&s?K(s)?s.concat(Yn(t)):[s,Yn(t)]:Yn(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==oe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&rn(e.ssContent),ssFallback:e.ssFallback&&rn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&o&&mr(f,l.clone(f)),f}function Le(e=" ",t=0){return Y(go,null,e,t)}function ac(e="",t=!1){return t?(Z(),Go(St,null,e)):Y(St,null,e)}function lt(e){return e==null||typeof e=="boolean"?Y(St):K(e)?Y(oe,null,e.slice()):typeof e=="object"?xt(e):Y(go,null,String(e))}function xt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:rn(e)}function _r(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(K(t))n=16;else if(typeof t=="object")if(o&65){const r=t.default;r&&(r._c&&(r._d=!1),_r(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!yi(t)?t._ctx=Pe:r===3&&Pe&&(Pe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else W(t)?(t={default:t,_ctx:Pe},n=32):(t=String(t),o&64?(n=16,t=[Le(t)]):n=8);e.children=t,e.shapeFlag|=n}function lc(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const r in o)if(r==="class")t.class!==o.class&&(t.class=Dt([t.class,o.class]));else if(r==="style")t.style=rr([t.style,o.style]);else if(oo(r)){const s=t[r],i=o[r];i&&s!==i&&!(K(s)&&s.includes(i))&&(t[r]=s?[].concat(s,i):i)}else r!==""&&(t[r]=o[r])}return t}function st(e,t,n,o=null){ut(e,t,7,[n,o])}const cc=wi();let fc=0;function uc(e,t,n){const o=e.type,r=(t?t.appContext:e.appContext)||cc,s={uid:fc++,vnode:e,type:o,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ca(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ei(o,r),emitsOptions:Ci(o,r),emit:null,emitted:null,propsDefaults:ue,inheritAttrs:o.inheritAttrs,ctx:ue,data:ue,props:ue,attrs:ue,slots:ue,refs:ue,setupState:ue,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Jl.bind(null,s),e.ce&&e.ce(s),s}let Te=null,Jn,Wo;{const e=Ds(),t=(n,o)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(o),s=>{r.length>1?r.forEach(i=>i(s)):r[0](s)}};Jn=t("__VUE_INSTANCE_SETTERS__",n=>Te=n),Wo=t("__VUE_SSR_SETTERS__",n=>mo=n)}const Bn=e=>{const t=Te;return Jn(e),e.scope.on(),()=>{e.scope.off(),Jn(t)}},Gr=()=>{Te&&Te.scope.off(),Jn(null)};function Pi(e){return e.vnode.shapeFlag&4}let mo=!1;function dc(e,t=!1,n=!1){t&&Wo(t);const{props:o,children:r}=e.vnode,s=Pi(e);Dl(e,o,s,t),Ul(e,r,n);const i=s?hc(e,t):void 0;return t&&Wo(!1),i}function hc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Al);const{setup:o}=n;if(o){const r=e.setupContext=o.length>1?gc(e):null,s=Bn(e);Nt();const i=Ln(o,e,0,[e.props,r]);if(At(),s(),Ls(i)){if(qt(e)||di(e),i.then(Gr,Gr),t)return i.then(a=>{Wr(e,a,t)}).catch(a=>{uo(a,e,0)});e.asyncDep=i}else Wr(e,i,t)}else Fi(e,t)}function Wr(e,t,n){W(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:pe(t)&&(e.setupState=ri(t)),Fi(e,n)}let qr;function Fi(e,t,n){const o=e.type;if(!e.render){if(!t&&qr&&!o.render){const r=o.template||br(e).template;if(r){const{isCustomElement:s,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:l}=o,d=Oe(Oe({isCustomElement:s,delimiters:a},i),l);o.render=qr(r,d)}}e.render=o.render||ct}{const r=Bn(e);Nt();try{Il(e)}finally{At(),r()}}}const pc={get(e,t){return Ne(e,"get",""),e[t]}};function gc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,pc),slots:e.slots,emit:e.emit,expose:t}}function vr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ri(el(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in gn)return gn[n](e)},has(t,n){return n in t||n in gn}})):e.proxy}function mc(e,t=!0){return W(e)?e.displayName||e.name:e.name||t&&e.__name}function bc(e){return W(e)&&"__vccOpts"in e}const We=(e,t)=>sl(e,t,mo);function Di(e,t,n){const o=arguments.length;return o===2?pe(t)&&!K(t)?Zn(t)?Y(e,null,[t]):Y(e,t):Y(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&Zn(n)&&(n=[n]),Y(e,t,n))}const wc="3.5.4";/**
* @vue/runtime-dom v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qo;const Zr=typeof window<"u"&&window.trustedTypes;if(Zr)try{qo=Zr.createPolicy("vue",{createHTML:e=>e})}catch{}const $i=qo?e=>qo.createHTML(e):e=>e,_c="http://www.w3.org/2000/svg",vc="http://www.w3.org/1998/Math/MathML",gt=typeof document<"u"?document:null,Jr=gt&&gt.createElement("template"),yc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const r=t==="svg"?gt.createElementNS(_c,e):t==="mathml"?gt.createElementNS(vc,e):n?gt.createElement(e,{is:n}):gt.createElement(e);return e==="select"&&o&&o.multiple!=null&&r.setAttribute("multiple",o.multiple),r},createText:e=>gt.createTextNode(e),createComment:e=>gt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>gt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,o,r,s){const i=n?n.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Jr.innerHTML=$i(o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e);const a=Jr.content;if(o==="svg"||o==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},xc=Symbol("_vtc");function Ec(e,t,n){const o=e[xc];o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Qr=Symbol("_vod"),kc=Symbol("_vsh"),Rc=Symbol(""),Oc=/(^|;)\s*display\s*:/;function Sc(e,t,n){const o=e.style,r=_e(n);let s=!1;if(n&&!r){if(t)if(_e(t))for(const i of t.split(";")){const a=i.slice(0,i.indexOf(":")).trim();n[a]==null&&Vn(o,a,"")}else for(const i in t)n[i]==null&&Vn(o,i,"");for(const i in n)i==="display"&&(s=!0),Vn(o,i,n[i])}else if(r){if(t!==n){const i=o[Rc];i&&(n+=";"+i),o.cssText=n,s=Oc.test(n)}}else t&&e.removeAttribute("style");Qr in e&&(e[Qr]=s?o.display:"",e[kc]&&(o.display="none"))}const es=/\s*!important$/;function Vn(e,t,n){if(K(n))n.forEach(o=>Vn(e,t,o));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const o=Tc(e,t);es.test(n)?e.setProperty(Ht(o),n.replace(es,""),"important"):e[o]=n}}const ts=["Webkit","Moz","ms"],Co={};function Tc(e,t){const n=Co[t];if(n)return n;let o=tt(t);if(o!=="filter"&&o in e)return Co[t]=o;o=io(o);for(let r=0;r<ts.length;r++){const s=ts[r]+o;if(s in e)return Co[t]=s}return t}const ns="http://www.w3.org/1999/xlink";function os(e,t,n,o,r,s=Ia(t)){o&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(ns,t.slice(6,t.length)):e.setAttributeNS(ns,t,n):n==null||s&&!$s(n)?e.removeAttribute(t):e.setAttribute(t,s?"":Tt(n)?String(n):n)}function Nc(e,t,n,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?$i(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const i=r==="OPTION"?e.getAttribute("value")||"":e.value,a=n==null?e.type==="checkbox"?"on":"":String(n);(i!==a||!("_value"in e))&&(e.value=a),n==null&&e.removeAttribute(t),e._value=n;return}let s=!1;if(n===""||n==null){const i=typeof e[t];i==="boolean"?n=$s(n):n==null&&i==="string"?(n="",s=!0):i==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function Ac(e,t,n,o){e.addEventListener(t,n,o)}function Ic(e,t,n,o){e.removeEventListener(t,n,o)}const rs=Symbol("_vei");function Cc(e,t,n,o,r=null){const s=e[rs]||(e[rs]={}),i=s[t];if(o&&i)i.value=o;else{const[a,l]=Mc(t);if(o){const d=s[t]=Pc(o,r);Ac(e,a,d,l)}else i&&(Ic(e,a,i,l),s[t]=void 0)}}const ss=/(?:Once|Passive|Capture)$/;function Mc(e){let t;if(ss.test(e)){t={};let o;for(;o=e.match(ss);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ht(e.slice(2)),t]}let Mo=0;const Lc=Promise.resolve(),Bc=()=>Mo||(Lc.then(()=>Mo=0),Mo=Date.now());function Pc(e,t){const n=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=n.attached)return;ut(Fc(o,n.value),t,5,[o])};return n.value=e,n.attached=Bc(),n}function Fc(e,t){if(K(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(o=>r=>!r._stopped&&o&&o(r))}else return t}const is=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Dc=(e,t,n,o,r,s)=>{const i=r==="svg";t==="class"?Ec(e,o,i):t==="style"?Sc(e,n,o):oo(t)?tr(t)||Cc(e,t,n,o,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):$c(e,t,o,i))?(Nc(e,t,o),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&os(e,t,o,i,s,t!=="value")):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),os(e,t,o,i))};function $c(e,t,n,o){if(o)return!!(t==="innerHTML"||t==="textContent"||t in e&&is(t)&&W(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return is(t)&&_e(n)?!1:!!(t in e||e._isVueCE&&(/[A-Z]/.test(t)||!_e(n)))}const Hc=Oe({patchProp:Dc},yc);let as;function zc(){return as||(as=jl(Hc))}const Uc=(...e)=>{const t=zc().createApp(...e),{mount:n}=t;return t.mount=o=>{const r=jc(o);if(!r)return;const s=t._component;!W(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const i=n(r,!1,Xc(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},t};function Xc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function jc(e){return _e(e)?document.querySelector(e):e}/*!
  * vue-router v4.4.4
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Yt=typeof document<"u";function Hi(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Yc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Hi(e.default)}const ae=Object.assign;function Lo(e,t){const n={};for(const o in t){const r=t[o];n[o]=nt(r)?r.map(e):e(r)}return n}const bn=()=>{},nt=Array.isArray,zi=/#/g,Vc=/&/g,Kc=/\//g,Gc=/=/g,Wc=/\?/g,Ui=/\+/g,qc=/%5B/g,Zc=/%5D/g,Xi=/%5E/g,Jc=/%60/g,ji=/%7B/g,Qc=/%7C/g,Yi=/%7D/g,ef=/%20/g;function yr(e){return encodeURI(""+e).replace(Qc,"|").replace(qc,"[").replace(Zc,"]")}function tf(e){return yr(e).replace(ji,"{").replace(Yi,"}").replace(Xi,"^")}function Zo(e){return yr(e).replace(Ui,"%2B").replace(ef,"+").replace(zi,"%23").replace(Vc,"%26").replace(Jc,"`").replace(ji,"{").replace(Yi,"}").replace(Xi,"^")}function nf(e){return Zo(e).replace(Gc,"%3D")}function of(e){return yr(e).replace(zi,"%23").replace(Wc,"%3F")}function rf(e){return e==null?"":of(e).replace(Kc,"%2F")}function kn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const sf=/\/$/,af=e=>e.replace(sf,"");function Bo(e,t,n="/"){let o,r={},s="",i="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(o=t.slice(0,l),s=t.slice(l+1,a>-1?a:t.length),r=e(s)),a>-1&&(o=o||t.slice(0,a),i=t.slice(a,t.length)),o=uf(o??t,n),{fullPath:o+(s&&"?")+s+i,path:o,query:r,hash:kn(i)}}function lf(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ls(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function cf(e,t,n){const o=t.matched.length-1,r=n.matched.length-1;return o>-1&&o===r&&sn(t.matched[o],n.matched[r])&&Vi(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function sn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Vi(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!ff(e[n],t[n]))return!1;return!0}function ff(e,t){return nt(e)?cs(e,t):nt(t)?cs(t,e):e===t}function cs(e,t){return nt(t)?e.length===t.length&&e.every((n,o)=>n===t[o]):e.length===1&&e[0]===t}function uf(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),o=e.split("/"),r=o[o.length-1];(r===".."||r===".")&&o.push("");let s=n.length-1,i,a;for(i=0;i<o.length;i++)if(a=o[i],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+o.slice(i).join("/")}const vt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Rn;(function(e){e.pop="pop",e.push="push"})(Rn||(Rn={}));var wn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(wn||(wn={}));function df(e){if(!e)if(Yt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),af(e)}const hf=/^[^#]+#/;function pf(e,t){return e.replace(hf,"#")+t}function gf(e,t){const n=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:t.behavior,left:o.left-n.left-(t.left||0),top:o.top-n.top-(t.top||0)}}const bo=()=>({left:window.scrollX,top:window.scrollY});function mf(e){let t;if("el"in e){const n=e.el,o=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?o?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=gf(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function fs(e,t){return(history.state?history.state.position-t:-1)+e}const Jo=new Map;function bf(e,t){Jo.set(e,t)}function wf(e){const t=Jo.get(e);return Jo.delete(e),t}let _f=()=>location.protocol+"//"+location.host;function Ki(e,t){const{pathname:n,search:o,hash:r}=t,s=e.indexOf("#");if(s>-1){let a=r.includes(e.slice(s))?e.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),ls(l,"")}return ls(n,e)+o+r}function vf(e,t,n,o){let r=[],s=[],i=null;const a=({state:p})=>{const m=Ki(e,location),B=n.value,M=t.value;let V=0;if(p){if(n.value=m,t.value=p,i&&i===B){i=null;return}V=M?p.position-M.position:0}else o(m);r.forEach(H=>{H(n.value,B,{delta:V,type:Rn.pop,direction:V?V>0?wn.forward:wn.back:wn.unknown})})};function l(){i=n.value}function d(p){r.push(p);const m=()=>{const B=r.indexOf(p);B>-1&&r.splice(B,1)};return s.push(m),m}function f(){const{history:p}=window;p.state&&p.replaceState(ae({},p.state,{scroll:bo()}),"")}function h(){for(const p of s)p();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:d,destroy:h}}function us(e,t,n,o=!1,r=!1){return{back:e,current:t,forward:n,replaced:o,position:window.history.length,scroll:r?bo():null}}function yf(e){const{history:t,location:n}=window,o={value:Ki(e,n)},r={value:t.state};r.value||s(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(l,d,f){const h=e.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?e:e.slice(h))+l:_f()+e+l;try{t[f?"replaceState":"pushState"](d,"",p),r.value=d}catch(m){console.error(m),n[f?"replace":"assign"](p)}}function i(l,d){const f=ae({},t.state,us(r.value.back,l,r.value.forward,!0),d,{position:r.value.position});s(l,f,!0),o.value=l}function a(l,d){const f=ae({},r.value,t.state,{forward:l,scroll:bo()});s(f.current,f,!0);const h=ae({},us(o.value,l,null),{position:f.position+1},d);s(l,h,!1),o.value=l}return{location:o,state:r,push:a,replace:i}}function xf(e){e=df(e);const t=yf(e),n=vf(e,t.state,t.location,t.replace);function o(s,i=!0){i||n.pauseListeners(),history.go(s)}const r=ae({location:"",base:e,go:o,createHref:pf.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function Ef(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),xf(e)}function kf(e){return typeof e=="string"||e&&typeof e=="object"}function Gi(e){return typeof e=="string"||typeof e=="symbol"}const Wi=Symbol("");var ds;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ds||(ds={}));function an(e,t){return ae(new Error,{type:e,[Wi]:!0},t)}function pt(e,t){return e instanceof Error&&Wi in e&&(t==null||!!(e.type&t))}const hs="[^/]+?",Rf={sensitive:!1,strict:!1,start:!0,end:!0},Of=/[.+*?^${}()[\]/\\]/g;function Sf(e,t){const n=ae({},Rf,t),o=[];let r=n.start?"^":"";const s=[];for(const d of e){const f=d.length?[]:[90];n.strict&&!d.length&&(r+="/");for(let h=0;h<d.length;h++){const p=d[h];let m=40+(n.sensitive?.25:0);if(p.type===0)h||(r+="/"),r+=p.value.replace(Of,"\\$&"),m+=40;else if(p.type===1){const{value:B,repeatable:M,optional:V,regexp:H}=p;s.push({name:B,repeatable:M,optional:V});const P=H||hs;if(P!==hs){m+=10;try{new RegExp(`(${P})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${B}" (${P}): `+L.message)}}let $=M?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;h||($=V&&d.length<2?`(?:/${$})`:"/"+$),V&&($+="?"),r+=$,m+=20,V&&(m+=-8),M&&(m+=-20),P===".*"&&(m+=-50)}f.push(m)}o.push(f)}if(n.strict&&n.end){const d=o.length-1;o[d][o[d].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const i=new RegExp(r,n.sensitive?"":"i");function a(d){const f=d.match(i),h={};if(!f)return null;for(let p=1;p<f.length;p++){const m=f[p]||"",B=s[p-1];h[B.name]=m&&B.repeatable?m.split("/"):m}return h}function l(d){let f="",h=!1;for(const p of e){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const m of p)if(m.type===0)f+=m.value;else if(m.type===1){const{value:B,repeatable:M,optional:V}=m,H=B in d?d[B]:"";if(nt(H)&&!M)throw new Error(`Provided param "${B}" is an array but it is not repeatable (* or + modifiers)`);const P=nt(H)?H.join("/"):H;if(!P)if(V)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${B}"`);f+=P}}return f||"/"}return{re:i,score:o,keys:s,parse:a,stringify:l}}function Tf(e,t){let n=0;for(;n<e.length&&n<t.length;){const o=t[n]-e[n];if(o)return o;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function qi(e,t){let n=0;const o=e.score,r=t.score;for(;n<o.length&&n<r.length;){const s=Tf(o[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-o.length)===1){if(ps(o))return 1;if(ps(r))return-1}return r.length-o.length}function ps(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Nf={type:0,value:""},Af=/[a-zA-Z0-9_]/;function If(e){if(!e)return[[]];if(e==="/")return[[Nf]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${d}": ${m}`)}let n=0,o=n;const r=[];let s;function i(){s&&r.push(s),s=[]}let a=0,l,d="",f="";function h(){d&&(n===0?s.push({type:0,value:d}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:d,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),d="")}function p(){d+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==2){o=n,n=4;continue}switch(n){case 0:l==="/"?(d&&h(),i()):l===":"?(h(),n=1):p();break;case 4:p(),n=o;break;case 1:l==="("?n=2:Af.test(l)?p():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${d}"`),h(),i(),r}function Cf(e,t,n){const o=Sf(If(e.path),n),r=ae(o,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Mf(e,t){const n=[],o=new Map;t=bs({strict:!1,end:!0,sensitive:!1},t);function r(h){return o.get(h)}function s(h,p,m){const B=!m,M=Lf(h);M.aliasOf=m&&m.record;const V=bs(t,h),H=[M];if("alias"in h){const L=typeof h.alias=="string"?[h.alias]:h.alias;for(const ee of L)H.push(ae({},M,{components:m?m.record.components:M.components,path:ee,aliasOf:m?m.record:M}))}let P,$;for(const L of H){const{path:ee}=L;if(p&&ee[0]!=="/"){const de=p.record.path,ce=de[de.length-1]==="/"?"":"/";L.path=p.record.path+(ee&&ce+ee)}if(P=Cf(L,p,V),m?m.alias.push(P):($=$||P,$!==P&&$.alias.push(P),B&&h.name&&!ms(P)&&i(h.name)),Zi(P)&&l(P),M.children){const de=M.children;for(let ce=0;ce<de.length;ce++)s(de[ce],P,m&&m.children[ce])}m=m||P}return $?()=>{i($)}:bn}function i(h){if(Gi(h)){const p=o.get(h);p&&(o.delete(h),n.splice(n.indexOf(p),1),p.children.forEach(i),p.alias.forEach(i))}else{const p=n.indexOf(h);p>-1&&(n.splice(p,1),h.record.name&&o.delete(h.record.name),h.children.forEach(i),h.alias.forEach(i))}}function a(){return n}function l(h){const p=Ff(h,n);n.splice(p,0,h),h.record.name&&!ms(h)&&o.set(h.record.name,h)}function d(h,p){let m,B={},M,V;if("name"in h&&h.name){if(m=o.get(h.name),!m)throw an(1,{location:h});V=m.record.name,B=ae(gs(p.params,m.keys.filter($=>!$.optional).concat(m.parent?m.parent.keys.filter($=>$.optional):[]).map($=>$.name)),h.params&&gs(h.params,m.keys.map($=>$.name))),M=m.stringify(B)}else if(h.path!=null)M=h.path,m=n.find($=>$.re.test(M)),m&&(B=m.parse(M),V=m.record.name);else{if(m=p.name?o.get(p.name):n.find($=>$.re.test(p.path)),!m)throw an(1,{location:h,currentLocation:p});V=m.record.name,B=ae({},p.params,h.params),M=m.stringify(B)}const H=[];let P=m;for(;P;)H.unshift(P.record),P=P.parent;return{name:V,path:M,params:B,matched:H,meta:Pf(H)}}e.forEach(h=>s(h));function f(){n.length=0,o.clear()}return{addRoute:s,resolve:d,removeRoute:i,clearRoutes:f,getRoutes:a,getRecordMatcher:r}}function gs(e,t){const n={};for(const o of t)o in e&&(n[o]=e[o]);return n}function Lf(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Bf(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},mods:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Bf(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const o in e.components)t[o]=typeof n=="object"?n[o]:n;return t}function ms(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Pf(e){return e.reduce((t,n)=>ae(t,n.meta),{})}function bs(e,t){const n={};for(const o in e)n[o]=o in t?t[o]:e[o];return n}function Ff(e,t){let n=0,o=t.length;for(;n!==o;){const s=n+o>>1;qi(e,t[s])<0?o=s:n=s+1}const r=Df(e);return r&&(o=t.lastIndexOf(r,o-1)),o}function Df(e){let t=e;for(;t=t.parent;)if(Zi(t)&&qi(e,t)===0)return t}function Zi({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function $f(e){const t={};if(e===""||e==="?")return t;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<o.length;++r){const s=o[r].replace(Ui," "),i=s.indexOf("="),a=kn(i<0?s:s.slice(0,i)),l=i<0?null:kn(s.slice(i+1));if(a in t){let d=t[a];nt(d)||(d=t[a]=[d]),d.push(l)}else t[a]=l}return t}function ws(e){let t="";for(let n in e){const o=e[n];if(n=nf(n),o==null){o!==void 0&&(t+=(t.length?"&":"")+n);continue}(nt(o)?o.map(s=>s&&Zo(s)):[o&&Zo(o)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function Hf(e){const t={};for(const n in e){const o=e[n];o!==void 0&&(t[n]=nt(o)?o.map(r=>r==null?null:""+r):o==null?o:""+o)}return t}const zf=Symbol(""),_s=Symbol(""),xr=Symbol(""),Er=Symbol(""),Qo=Symbol("");function un(){let e=[];function t(o){return e.push(o),()=>{const r=e.indexOf(o);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Et(e,t,n,o,r,s=i=>i()){const i=o&&(o.enterCallbacks[r]=o.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const d=p=>{p===!1?l(an(4,{from:n,to:t})):p instanceof Error?l(p):kf(p)?l(an(2,{from:t,to:p})):(i&&o.enterCallbacks[r]===i&&typeof p=="function"&&i.push(p),a())},f=s(()=>e.call(o&&o.instances[r],t,n,d));let h=Promise.resolve(f);e.length<3&&(h=h.then(d)),h.catch(p=>l(p))})}function Po(e,t,n,o,r=s=>s()){const s=[];for(const i of e)for(const a in i.components){let l=i.components[a];if(!(t!=="beforeRouteEnter"&&!i.instances[a]))if(Hi(l)){const f=(l.__vccOpts||l)[t];f&&s.push(Et(f,n,o,i,a,r))}else{let d=l();s.push(()=>d.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);const h=Yc(f)?f.default:f;i.mods[a]=f,i.components[a]=h;const m=(h.__vccOpts||h)[t];return m&&Et(m,n,o,i,a,r)()}))}}return s}function vs(e){const t=ft(xr),n=ft(Er),o=We(()=>{const l=Ve(e.to);return t.resolve(l)}),r=We(()=>{const{matched:l}=o.value,{length:d}=l,f=l[d-1],h=n.matched;if(!f||!h.length)return-1;const p=h.findIndex(sn.bind(null,f));if(p>-1)return p;const m=ys(l[d-2]);return d>1&&ys(f)===m&&h[h.length-1].path!==m?h.findIndex(sn.bind(null,l[d-2])):p}),s=We(()=>r.value>-1&&jf(n.params,o.value.params)),i=We(()=>r.value>-1&&r.value===n.matched.length-1&&Vi(n.params,o.value.params));function a(l={}){return Xf(l)?t[Ve(e.replace)?"replace":"push"](Ve(e.to)).catch(bn):Promise.resolve()}return{route:o,href:We(()=>o.value.href),isActive:s,isExactActive:i,navigate:a}}const Uf=ui({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:vs,setup(e,{slots:t}){const n=co(vs(e)),{options:o}=ft(xr),r=We(()=>({[xs(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[xs(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:Di("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),Ji=Uf;function Xf(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function jf(e,t){for(const n in t){const o=t[n],r=e[n];if(typeof o=="string"){if(o!==r)return!1}else if(!nt(r)||r.length!==o.length||o.some((s,i)=>s!==r[i]))return!1}return!0}function ys(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const xs=(e,t,n)=>e??t??n,Yf=ui({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const o=ft(Qo),r=We(()=>e.route||o.value),s=ft(_s,0),i=We(()=>{let d=Ve(s);const{matched:f}=r.value;let h;for(;(h=f[d])&&!h.components;)d++;return d}),a=We(()=>r.value.matched[i.value]);jn(_s,We(()=>i.value+1)),jn(zf,a),jn(Qo,r);const l=fo();return Jt(()=>[l.value,a.value,e.name],([d,f,h],[p,m,B])=>{f&&(f.instances[h]=d,m&&m!==f&&d&&d===p&&(f.leaveGuards.size||(f.leaveGuards=m.leaveGuards),f.updateGuards.size||(f.updateGuards=m.updateGuards))),d&&f&&(!m||!sn(f,m)||!p)&&(f.enterCallbacks[h]||[]).forEach(M=>M(d))},{flush:"post"}),()=>{const d=r.value,f=e.name,h=a.value,p=h&&h.components[f];if(!p)return Es(n.default,{Component:p,route:d});const m=h.props[f],B=m?m===!0?d.params:typeof m=="function"?m(d):m:null,V=Di(p,ae({},B,t,{onVnodeUnmounted:H=>{H.component.isUnmounted&&(h.instances[f]=null)},ref:l}));return Es(n.default,{Component:V,route:d})||V}}});function Es(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Qi=Yf;function Vf(e){const t=Mf(e.routes,e),n=e.parseQuery||$f,o=e.stringifyQuery||ws,r=e.history,s=un(),i=un(),a=un(),l=tl(vt);let d=vt;Yt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Lo.bind(null,y=>""+y),h=Lo.bind(null,rf),p=Lo.bind(null,kn);function m(y,I){let A,F;return Gi(y)?(A=t.getRecordMatcher(y),F=I):F=y,t.addRoute(F,A)}function B(y){const I=t.getRecordMatcher(y);I&&t.removeRoute(I)}function M(){return t.getRoutes().map(y=>y.record)}function V(y){return!!t.getRecordMatcher(y)}function H(y,I){if(I=ae({},I||l.value),typeof y=="string"){const u=Bo(n,y,I.path),g=t.resolve({path:u.path},I),x=r.createHref(u.fullPath);return ae(u,g,{params:p(g.params),hash:kn(u.hash),redirectedFrom:void 0,href:x})}let A;if(y.path!=null)A=ae({},y,{path:Bo(n,y.path,I.path).path});else{const u=ae({},y.params);for(const g in u)u[g]==null&&delete u[g];A=ae({},y,{params:h(u)}),I.params=h(I.params)}const F=t.resolve(A,I),ne=y.hash||"";F.params=f(p(F.params));const he=lf(o,ae({},y,{hash:tf(ne),path:F.path})),c=r.createHref(he);return ae({fullPath:he,hash:ne,query:o===ws?Hf(y.query):y.query||{}},F,{redirectedFrom:void 0,href:c})}function P(y){return typeof y=="string"?Bo(n,y,l.value.path):ae({},y)}function $(y,I){if(d!==y)return an(8,{from:I,to:y})}function L(y){return ce(y)}function ee(y){return L(ae(P(y),{replace:!0}))}function de(y){const I=y.matched[y.matched.length-1];if(I&&I.redirect){const{redirect:A}=I;let F=typeof A=="function"?A(y):A;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=P(F):{path:F},F.params={}),ae({query:y.query,hash:y.hash,params:F.path!=null?{}:y.params},F)}}function ce(y,I){const A=d=H(y),F=l.value,ne=y.state,he=y.force,c=y.replace===!0,u=de(A);if(u)return ce(ae(P(u),{state:typeof u=="object"?ae({},ne,u.state):ne,force:he,replace:c}),I||A);const g=A;g.redirectedFrom=I;let x;return!he&&cf(o,F,A)&&(x=an(16,{to:g,from:F}),J(F,F,!0,!1)),(x?Promise.resolve(x):Ie(g,F)).catch(_=>pt(_)?pt(_,2)?_:q(_):O(_,g,F)).then(_=>{if(_){if(pt(_,2))return ce(ae({replace:c},P(_.to),{state:typeof _.to=="object"?ae({},ne,_.to.state):ne,force:he}),I||g)}else _=Ze(g,F,!0,c,ne);return ze(g,F,_),_})}function Ae(y,I){const A=$(y,I);return A?Promise.reject(A):Promise.resolve()}function ve(y){const I=Je.values().next().value;return I&&typeof I.runWithContext=="function"?I.runWithContext(y):y()}function Ie(y,I){let A;const[F,ne,he]=Kf(y,I);A=Po(F.reverse(),"beforeRouteLeave",y,I);for(const u of F)u.leaveGuards.forEach(g=>{A.push(Et(g,y,I))});const c=Ae.bind(null,y,I);return A.push(c),me(A).then(()=>{A=[];for(const u of s.list())A.push(Et(u,y,I));return A.push(c),me(A)}).then(()=>{A=Po(ne,"beforeRouteUpdate",y,I);for(const u of ne)u.updateGuards.forEach(g=>{A.push(Et(g,y,I))});return A.push(c),me(A)}).then(()=>{A=[];for(const u of he)if(u.beforeEnter)if(nt(u.beforeEnter))for(const g of u.beforeEnter)A.push(Et(g,y,I));else A.push(Et(u.beforeEnter,y,I));return A.push(c),me(A)}).then(()=>(y.matched.forEach(u=>u.enterCallbacks={}),A=Po(he,"beforeRouteEnter",y,I,ve),A.push(c),me(A))).then(()=>{A=[];for(const u of i.list())A.push(Et(u,y,I));return A.push(c),me(A)}).catch(u=>pt(u,8)?u:Promise.reject(u))}function ze(y,I,A){a.list().forEach(F=>ve(()=>F(y,I,A)))}function Ze(y,I,A,F,ne){const he=$(y,I);if(he)return he;const c=I===vt,u=Yt?history.state:{};A&&(F||c?r.replace(y.fullPath,ae({scroll:c&&u&&u.scroll},ne)):r.push(y.fullPath,ne)),l.value=y,J(y,I,A,c),q()}let $e;function dt(){$e||($e=r.listen((y,I,A)=>{if(!Ee.listening)return;const F=H(y),ne=de(F);if(ne){ce(ae(ne,{replace:!0}),F).catch(bn);return}d=F;const he=l.value;Yt&&bf(fs(he.fullPath,A.delta),bo()),Ie(F,he).catch(c=>pt(c,12)?c:pt(c,2)?(ce(c.to,F).then(u=>{pt(u,20)&&!A.delta&&A.type===Rn.pop&&r.go(-1,!1)}).catch(bn),Promise.reject()):(A.delta&&r.go(-A.delta,!1),O(c,F,he))).then(c=>{c=c||Ze(F,he,!1),c&&(A.delta&&!pt(c,8)?r.go(-A.delta,!1):A.type===Rn.pop&&pt(c,20)&&r.go(-1,!1)),ze(F,he,c)}).catch(bn)}))}let Ue=un(),ge=un(),w;function O(y,I,A){q(y);const F=ge.list();return F.length?F.forEach(ne=>ne(y,I,A)):console.error(y),Promise.reject(y)}function U(){return w&&l.value!==vt?Promise.resolve():new Promise((y,I)=>{Ue.add([y,I])})}function q(y){return w||(w=!y,dt(),Ue.list().forEach(([I,A])=>y?A(y):I()),Ue.reset()),y}function J(y,I,A,F){const{scrollBehavior:ne}=e;if(!Yt||!ne)return Promise.resolve();const he=!A&&wf(fs(y.fullPath,0))||(F||!A)&&history.state&&history.state.scroll||null;return ii().then(()=>ne(y,I,he)).then(c=>c&&mf(c)).catch(c=>O(c,y,I))}const re=y=>r.go(y);let xe;const Je=new Set,Ee={currentRoute:l,listening:!0,addRoute:m,removeRoute:B,clearRoutes:t.clearRoutes,hasRoute:V,getRoutes:M,resolve:H,options:e,push:L,replace:ee,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:s.add,beforeResolve:i.add,afterEach:a.add,onError:ge.add,isReady:U,install(y){const I=this;y.component("RouterLink",Ji),y.component("RouterView",Qi),y.config.globalProperties.$router=I,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Ve(l)}),Yt&&!xe&&l.value===vt&&(xe=!0,L(r.location).catch(ne=>{}));const A={};for(const ne in vt)Object.defineProperty(A,ne,{get:()=>l.value[ne],enumerable:!0});y.provide(xr,I),y.provide(Er,ti(A)),y.provide(Qo,l);const F=y.unmount;Je.add(y),y.unmount=function(){Je.delete(y),Je.size<1&&(d=vt,$e&&$e(),$e=null,l.value=vt,xe=!1,w=!1),F()}}};function me(y){return y.reduce((I,A)=>I.then(()=>ve(A)),Promise.resolve())}return Ee}function Kf(e,t){const n=[],o=[],r=[],s=Math.max(t.matched.length,e.matched.length);for(let i=0;i<s;i++){const a=t.matched[i];a&&(e.matched.find(d=>sn(d,a))?o.push(a):n.push(a));const l=e.matched[i];l&&(t.matched.find(d=>sn(d,l))||r.push(l))}return[n,o,r]}function ea(e){return ft(Er)}const Gf="/ea-effects/favicon.ico";function Wf(e,t){const n=document.createElement("link");n.href=t,n.rel="stylesheet",e.appendChild(n)}class ot extends HTMLElement{constructor(){super(),this.isProduction=!1,this.isProduction=!0}toggleAttribute(t,n,o){n?(this.setAttribute(t,n),o&&this.dom.classList.add(o)):(this.hasAttribute(t)&&this.removeAttribute(t),o&&this.dom.classList.remove(o))}toggleAttr(t,n){n?this.setAttribute(t,n):this.removeAttribute(t)}getAttrBoolean(t){const n=this.getAttribute(t);return n==="true"||n===""}getAttrNumber(t){const n=this.getAttribute(t);return n?Number(n):0}build(t,n){if(this.isProduction){const o=document.createElement("style");o.innerHTML=n,this.shadowRoot.appendChild(o)}else Wf(t,new URL(this.nodeName.toLowerCase()+"/index.css",import.meta.url).href)}}var Bt,Tn,eo,ta;class qf extends HTMLElement{constructor(){super();we(this,eo);we(this,Bt);we(this,Tn);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <link id="fontello-stylesheet" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easy-component-ui/components/ea-icon/css/fontello.css">
            <i class="ea-icon_wrap" part="container">
                <slot></slot>
            </i>
        `,ye(this,Bt,n.querySelector(".ea-icon_wrap")),ye(this,Tn,n.querySelector("#fontello-stylesheet")),document.addEventListener("configChanged",o=>{yo(this,eo,ta).call(this,o.detail)})}get icon(){return this.getAttribute("icon")||""}set icon(n){this.setAttribute("icon",n),X(this,Bt).className=`${n}`}get color(){return this.getAttribute("color")||""}set color(n){this.setAttribute("color",n),X(this,Bt).style.color=n}get size(){return this.getAttribute("size")||""}set size(n){this.setAttribute("size",n),X(this,Bt).style.fontSize=`${n}px`}connectedCallback(){this.icon=this.icon,this.color=this.color,this.size=this.size,document.dispatchEvent(new CustomEvent("ea-icon-ready"))}}Bt=new WeakMap,Tn=new WeakMap,eo=new WeakSet,ta=function(n){X(this,Tn).href=n.fontelloCSS};window.customElements.get("ea-icon")||window.customElements.define("ea-icon",qf);const Zf=`
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
`;var Qe;class Jf extends ot{constructor(){super();we(this,Qe);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <div class="ea-menu-item_wrap" part="container">
                <slot></slot>
            </div>
        `,ye(this,Qe,n.querySelector(".ea-menu-item_wrap")),this.build(n,Zf)}get actived(){return this.getAttrBoolean("actived")}set actived(n){this.setAttribute("actived",n),this.isSubItem?X(this,Qe).classList.toggle("is-sub-actived",n):X(this,Qe).classList.toggle("is-actived",n)}get isSubItem(){return this.getAttrBoolean("is-sub-item")}set isSubItem(n){n&&this.setAttribute("is-sub-item",n)}get backgroundColor(){return this.getAttribute("background-color")||"#fff"}set backgroundColor(n){this.setAttribute("background-color",n),X(this,Qe).style.setProperty("--normal-bgc",n)}get textColor(){return this.getAttribute("text-color")||"#303133"}set textColor(n){this.setAttribute("text-color",n),X(this,Qe).style.setProperty("--normal-text-color",n)}get activeTextColor(){return this.getAttribute("active-text-color")||"#409eff"}set activeTextColor(n){this.setAttribute("active-text-color",n),X(this,Qe).style.setProperty("--actived-text-color",n)}get disabled(){return this.getAttrBoolean("disabled")}set disabled(n){this.setAttribute("disabled",n),X(this,Qe).classList.toggle("is-disabled",n)}connectedCallback(){this.actived=this.actived,this.disabled=this.disabled,X(this,Qe).addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("item-selected",{detail:{index:this.index,title:this.textContent}}))})}}Qe=new WeakMap;customElements.get("ea-menu-item")||customElements.define("ea-menu-item",Jf);const Pn=(e,t)=>{const n=e.__vccOpts||e;for(const[o,r]of t)n[o]=r;return n},Qf=["actived"],eu={__name:"MyRoute",props:{to:String},setup(e){const t=ea(),n={activeRoute:fo(t.path)||""};return Jt(t,o=>{n.activeRoute.value=o.path}),(o,r)=>(Z(),Q("ea-menu-item",{class:"rl-item",actived:n.activeRoute.value===e.to},[Y(Ve(Ji),{to:e.to,activeClass:"active"},{default:He(()=>[Nl(o.$slots,"default",{},void 0,!0)]),_:3},8,["to"])],8,Qf))}},Ge=Pn(eu,[["__scopeId","data-v-62147355"]]),tu={__name:"Router",setup(e){return(t,n)=>(Z(),Q(oe,null,[Y(Ge,{to:"/2DTransitions"},{default:He(()=>n[0]||(n[0]=[Le("Hover | 2D 过渡动画")])),_:1}),Y(Ge,{to:"/backgroundTransitions"},{default:He(()=>n[1]||(n[1]=[Le(" Hover | 背景（background）过渡动画 ")])),_:1}),Y(Ge,{to:"/borderTransitions"},{default:He(()=>n[2]||(n[2]=[Le("Hover | 边框（border）过渡动画")])),_:1}),Y(Ge,{to:"/shadowAndGlowTransitions"},{default:He(()=>n[3]||(n[3]=[Le(" Hover | 阴影（box-shadow）过渡动画 ")])),_:1}),Y(Ge,{to:"/speechBubbles"},{default:He(()=>n[4]||(n[4]=[Le("Hover | 气泡框过渡动画")])),_:1}),Y(Ge,{to:"/curls"},{default:He(()=>n[5]||(n[5]=[Le("Hover | 折角过渡动画")])),_:1}),Y(Ge,{to:"/attentionSeekers"},{default:He(()=>n[6]||(n[6]=[Le("Animate | 吸引眼球动画")])),_:1}),Y(Ge,{to:"/backEntrancesAndBackExits"},{default:He(()=>n[7]||(n[7]=[Le("Animate | 后进后出动画")])),_:1}),Y(Ge,{to:"/bouncingEntrancesAndBouncingExits"},{default:He(()=>n[8]||(n[8]=[Le(" Animate | 弹出弹入动画 ")])),_:1}),Y(Ge,{to:"/fadeInAndFadeOut"},{default:He(()=>n[9]||(n[9]=[Le(" Animate | 淡入淡出动画 ")])),_:1}),Y(Ge,{to:"/flippers"},{default:He(()=>n[10]||(n[10]=[Le(" Animate | 翻转动画 ")])),_:1}),Y(Ge,{to:"/lightspeed"},{default:He(()=>n[11]||(n[11]=[Le(" Animate | 光速动画 ")])),_:1})],64))}},nu=`
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
`;var Nn,to,na;class ou extends ot{constructor(){super();we(this,to);we(this,Nn);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <div class="ea-container_wrap" part="container">
                <slot></slot>
            </div>
        `,ye(this,Nn,n.querySelector(".ea-container_wrap")),this.build(n,nu)}get CONTAINER_TYPE(){return["ea-header","ea-main","ea-footer","ea-container","ea-aside"]}get direction(){return["horizontal","vertical"].includes(this.getAttribute("direction"))||"horizontal"}set direction(n){this.setAttribute("direction",n),X(this,Nn).classList.toggle("is-vertical",n==="horizontal")}connectedCallback(){const n=Array.from(this.children);yo(this,to,na).call(this,n)}}Nn=new WeakMap,to=new WeakSet,na=function(n){const o=n.map(r=>r.tagName.toLowerCase());n.forEach(r=>{this.CONTAINER_TYPE.includes(r.tagName.toLowerCase())||r.remove(),r.tagName.toLowerCase()==="ea-container"&&(r.style.flex="1")}),o.includes("ea-header")||o.includes("ea-footer")?this.direction="horizontal":this.direction=this.direction};customElements.get("ea-container")||customElements.define("ea-container",ou);const ru=`
.ea-aside_wrap {
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
}
.ea-aside_wrap ::slotted(ea-main) {
  overflow: auto;
}
`;var An;class su extends ot{constructor(){super();we(this,An);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <aside class="ea-aside_wrap" part="container">
                <slot></slot>
            </aside>
        `,ye(this,An,n.querySelector(".ea-aside_wrap")),this.build(n,ru)}get width(){return this.getAttrNumber("width")||200}set width(n){this.setAttribute("width",n),X(this,An).style.width=`${n}px`}connectedCallback(){this.width=this.width}}An=new WeakMap;customElements.get("ea-aside")||customElements.define("ea-aside",su);const oa=(e,t=0)=>{let n=setTimeout(()=>{clearTimeout(n),n=null,e()},t)},Fo=e=>{e.actived=!1};function iu(e,t,n){e.forEach(Fo),t.forEach(Fo),n.forEach(Fo)}function au(e,t,n){e.forEach((o,r)=>{o.itemIndex=r,o.addEventListener("item-selected",s=>{const i=s.detail.title;iu(e,t,n),o.actived=!0,this.dispatchEvent(new CustomEvent("select",{detail:{index:r,title:i}}))})})}const lu=`
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
`;var at,no,In;class fu extends ot{constructor(){super();we(this,at);we(this,no);we(this,In);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <div class="ea-submenu_wrap" part="container">
                <div class="ea-submenu_title_wrap" part="title-wrap">
                    <slot name="title"></slot>
                    <ea-icon class="ea-submenu_dropdown_icon" icon="icon-angle-down" part="dropdown-icon"></ea-icon>
                </div>
                <div class="ea-submenu_items_wrap" part="dropdown-wrap">
                    <slot></slot>
                </div>
            </div>
        `,ye(this,at,n.querySelector(".ea-submenu_wrap")),ye(this,no,n.querySelector(".ea-submenu_title_wrap")),ye(this,In,n.querySelector(".ea-submenu_items_wrap")),this.build(n,cu)}get actived(){return this.getAttrBoolean("actived")}set actived(n){this.setAttribute("actived",n),X(this,at).classList.toggle("is-actived",n)}get backgroundColor(){return this.getAttribute("background-color")||"#fff"}set backgroundColor(n){this.setAttribute("background-color",n),X(this,at).style.setProperty("--normal-bgc",n)}get textColor(){return this.getAttribute("text-color")||"#303133"}set textColor(n){this.setAttribute("text-color",n),X(this,at).style.setProperty("--normal-text-color",n)}get activeTextColor(){return this.getAttribute("active-text-color")||"#409eff"}set activeTextColor(n){this.setAttribute("active-text-color",n),X(this,at).style.setProperty("--actived-text-color",n)}get disabled(){return this.getAttrBoolean("disabled")}set disabled(n){this.setAttribute("disabled",n),X(this,at).classList.toggle("is-disabled",n)}get mode(){return this.getAttribute("mode")||"horizontal"}set mode(n){this.setAttribute("mode",n),X(this,at).classList.toggle("is-vertical",n==="vertical")}connectedCallback(){this.disabled=this.disabled,this.querySelectorAll("ea-menu-item").forEach((o,r)=>{o.isSubItem=!0,o.addEventListener("item-selected",s=>{this.actived=!0})}),oa(()=>{X(this,In).style.display="block"},20)}}at=new WeakMap,no=new WeakMap,In=new WeakMap;customElements.get("ea-submenu")||customElements.define("ea-submenu",fu);const uu=`
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
`;var mt,Cn,Qt;class du extends ot{constructor(){super();we(this,mt);we(this,Cn);we(this,Qt);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <div class="ea-menu-item-group_wrap" part="container">
                <div class="ea-submenu_title_wrap" part="title-wrap">
                    <slot name="title"></slot>
                    <ea-icon class="ea-submenu_dropdown_icon" icon="icon-angle-down" part="dropdown-icon"></ea-icon>
                </div>
                <div class="ea-submenu_items_wrap" part="dropdown-wrap">
                    <slot></slot>
                </div>
            </div>
        `,ye(this,mt,n.querySelector(".ea-menu-item-group_wrap")),ye(this,Cn,n.querySelector(".ea-submenu_title_wrap")),ye(this,Qt,n.querySelector(".ea-submenu_items_wrap")),this.build(n,uu)}get actived(){return this.getAttrBoolean("actived")}set actived(n){this.setAttribute("actived",n),X(this,mt).classList.toggle("is-actived",n)}get backgroundColor(){return this.getAttribute("background-color")||"#fff"}set backgroundColor(n){this.setAttribute("background-color",n),X(this,mt).style.setProperty("--normal-bgc",n)}get textColor(){return this.getAttribute("text-color")||"#303133"}set textColor(n){this.setAttribute("text-color",n),X(this,mt).style.setProperty("--normal-text-color",n)}get activeTextColor(){return this.getAttribute("active-text-color")||"#409eff"}set activeTextColor(n){this.setAttribute("active-text-color",n),X(this,mt).style.setProperty("--actived-text-color",n)}get collapse(){return this.getAttrBoolean("collapse")||!1}set collapse(n){this.setAttribute("collapse",n),X(this,Qt).style.height=n?X(this,Qt).scrollHeight+"px":"0",X(this,mt).classList.toggle("is-open",n)}connectedCallback(){this.style.width="100%",this.querySelectorAll("ea-menu-item").forEach(o=>{o.isSubItem=!0,o.addEventListener("item-selected",r=>{oa(()=>{this.actived=!0},20)})}),X(this,Cn).addEventListener("click",o=>{this.collapse=!this.collapse})}}mt=new WeakMap,Cn=new WeakMap,Qt=new WeakMap;customElements.get("ea-menu-item-group")||customElements.define("ea-menu-item-group",du);var en;class hu extends ot{constructor(){super();we(this,en);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <div class="ea-menu_wrap" part="container">
                <slot></slot>
            </div>
        `,ye(this,en,n.querySelector(".ea-menu_wrap")),this.build(n,lu)}get mode(){return this.getAttribute("mode")||"vertical"}set mode(n){this.setAttribute("mode",n),X(this,en).classList.toggle("is-vertical",n==="vertical"),this.querySelectorAll("ea-submenu").forEach(o=>{o.mode=n})}get backgroundColor(){return this.getAttribute("background-color")||"#fff"}set backgroundColor(n){this.setAttribute("background-color",n),X(this,en).style.backgroundColor=n}get textColor(){return this.getAttribute("text-color")||"#303133"}set textColor(n){this.setAttribute("text-color",n)}get activeTextColor(){return this.getAttribute("active-text-color")||"#409eff"}set activeTextColor(n){this.setAttribute("active-text-color",n)}get collapse(){return this.getAttrBoolean("collapse")}set collapse(n){this.toggleAttr("collapse",n),this.querySelectorAll("ea-menu-item-group").forEach(o=>{this.mode==="vertical"&&(o.collapse=!n)})}connectedCallback(){this.mode=this.mode,this.collapse=!0,this.backgroundColor=this.backgroundColor,this.textColor=this.textColor,this.activeTextColor=this.activeTextColor;const n=this.querySelectorAll("ea-menu-item"),o=this.querySelectorAll("ea-submenu"),r=this.querySelectorAll("ea-menu-item-group");au.call(this,n,o,r);const s=(i,a)=>{i.backgroundColor=this.backgroundColor,i.textColor=this.textColor,i.activeTextColor=this.activeTextColor};n.forEach(s),o.forEach(s),r.forEach(s)}}en=new WeakMap;customElements.get("ea-menu")||customElements.define("ea-menu",hu);const pu={width:"200"},gu={mode:"vertical"},mu={__name:"MyAside",setup(e){return(t,n)=>(Z(),Q("ea-aside",pu,[n[0]||(n[0]=le("ea-header",{class:"aside-header"},[le("div",{class:"logo"},[le("img",{src:Gf,alt:""})]),le("b",{class:"aside-title"},"ea-effects")],-1)),le("ea-menu",gu,[Y(tu)])]))}},bu=Pn(mu,[["__scopeId","data-v-56b791c4"]]),wu=`
.ea-header_wrap {
  box-sizing: border-box;
  padding: 0 20px;

  height: 60px;

  color: #333;

  overflow: hidden;
}
`;var tn;class _u extends ot{constructor(){super();we(this,tn);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <header class="ea-header_wrap" part="container">
                <slot></slot>
            </header>
        `,ye(this,tn,n.querySelector(".ea-header_wrap")),this.build(n,wu)}get height(){return this.getAttrNumber("height")||60}set height(n){this.setAttribute("height",n),X(this,tn).style.height=`${n}px`,X(this,tn).style.lineHeight=`${n}px`}connectedCallback(){this.height=this.height}}tn=new WeakMap;customElements.get("ea-header")||customElements.define("ea-header",_u);const vu=`
.ea-footer_wrap {
  box-sizing: border-box;
  padding: 0 20px;

  height: 60px;

  color: #333;

  overflow: hidden;
}
`;var nn;class yu extends ot{constructor(){super();we(this,nn);const n=this.attachShadow({mode:"open"});n.innerHTML=`
            <footer class="ea-footer_wrap" part="container">
                <slot></slot>
            </footer>
        `,ye(this,nn,n.querySelector(".ea-footer_wrap")),this.build(n,vu)}get height(){return this.getAttrNumber("height")||60}set height(n){this.setAttribute("height",n),X(this,nn).style.height=`${n}px`,X(this,nn).style.lineHeight=`${n}px`}connectedCallback(){this.height=this.height}}nn=new WeakMap;customElements.get("ea-footer")||customElements.define("ea-footer",yu);const xu=`
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
        `,this.build(t,xu)}}customElements.get("ea-main")||customElements.define("ea-main",Eu);const ku={__name:"App",setup(e){let t=fo(!1);const n=ea();return Jt(n,()=>{t.value=!1}),(o,r)=>(Z(),Q("ea-container",{class:Dt(`container ${Ve(t)?"open":""}`),direction:"vertical"},[Y(bu,{class:Dt("my-aside")}),le("ea-container",null,[le("ea-header",null,[le("ea-icon",{icon:"icon-th-list",class:"toggle-aside-btn",onClick:r[0]||(r[0]=s=>ke(t)?t.value=!Ve(t):t=!Ve(t))}),le("section",{class:"mask",onClick:r[1]||(r[1]=s=>ke(t)?t.value=!Ve(t):t=!Ve(t))})]),le("ea-main",null,[Y(Ve(Qi))])])],2))}},Ru=Pn(ku,[["__scopeId","data-v-d19ae1c7"]]);function Ou(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function ra(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(t=>{const n=e[t],o=typeof n;(o==="object"||o==="function")&&!Object.isFrozen(n)&&ra(n)}),e}class ks{constructor(t){t.data===void 0&&(t.data={}),this.data=t.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function sa(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function Rt(e,...t){const n=Object.create(null);for(const o in e)n[o]=e[o];return t.forEach(function(o){for(const r in o)n[r]=o[r]}),n}const Su="</span>",Rs=e=>!!e.scope,Tu=(e,{prefix:t})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const n=e.split(".");return[`${t}${n.shift()}`,...n.map((o,r)=>`${o}${"_".repeat(r+1)}`)].join(" ")}return`${t}${e}`};class Nu{constructor(t,n){this.buffer="",this.classPrefix=n.classPrefix,t.walk(this)}addText(t){this.buffer+=sa(t)}openNode(t){if(!Rs(t))return;const n=Tu(t.scope,{prefix:this.classPrefix});this.span(n)}closeNode(t){Rs(t)&&(this.buffer+=Su)}value(){return this.buffer}span(t){this.buffer+=`<span class="${t}">`}}const Os=(e={})=>{const t={children:[]};return Object.assign(t,e),t};class kr{constructor(){this.rootNode=Os(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(t){this.top.children.push(t)}openNode(t){const n=Os({scope:t});this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(t){return this.constructor._walk(t,this.rootNode)}static _walk(t,n){return typeof n=="string"?t.addText(n):n.children&&(t.openNode(n),n.children.forEach(o=>this._walk(t,o)),t.closeNode(n)),t}static _collapse(t){typeof t!="string"&&t.children&&(t.children.every(n=>typeof n=="string")?t.children=[t.children.join("")]:t.children.forEach(n=>{kr._collapse(n)}))}}class Au extends kr{constructor(t){super(),this.options=t}addText(t){t!==""&&this.add(t)}startScope(t){this.openNode(t)}endScope(){this.closeNode()}__addSublanguage(t,n){const o=t.root;n&&(o.scope=`language:${n}`),this.add(o)}toHTML(){return new Nu(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function On(e){return e?typeof e=="string"?e:e.source:null}function ia(e){return zt("(?=",e,")")}function Iu(e){return zt("(?:",e,")*")}function Cu(e){return zt("(?:",e,")?")}function zt(...e){return e.map(n=>On(n)).join("")}function Mu(e){const t=e[e.length-1];return typeof t=="object"&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}function Rr(...e){return"("+(Mu(e).capture?"":"?:")+e.map(o=>On(o)).join("|")+")"}function aa(e){return new RegExp(e.toString()+"|").exec("").length-1}function Lu(e,t){const n=e&&e.exec(t);return n&&n.index===0}const Bu=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Or(e,{joinWith:t}){let n=0;return e.map(o=>{n+=1;const r=n;let s=On(o),i="";for(;s.length>0;){const a=Bu.exec(s);if(!a){i+=s;break}i+=s.substring(0,a.index),s=s.substring(a.index+a[0].length),a[0][0]==="\\"&&a[1]?i+="\\"+String(Number(a[1])+r):(i+=a[0],a[0]==="("&&n++)}return i}).map(o=>`(${o})`).join(t)}const Pu=/\b\B/,la="[a-zA-Z]\\w*",Sr="[a-zA-Z_]\\w*",ca="\\b\\d+(\\.\\d+)?",fa="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",ua="\\b(0b[01]+)",Fu="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Du=(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=zt(t,/.*\b/,e.binary,/\b.*/)),Rt({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(n,o)=>{n.index!==0&&o.ignoreMatch()}},e)},Sn={begin:"\\\\[\\s\\S]",relevance:0},$u={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[Sn]},Hu={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[Sn]},zu={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},wo=function(e,t,n={}){const o=Rt({scope:"comment",begin:e,end:t,contains:[]},n);o.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const r=Rr("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return o.contains.push({begin:zt(/[ ]+/,"(",r,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),o},Uu=wo("//","$"),Xu=wo("/\\*","\\*/"),ju=wo("#","$"),Yu={scope:"number",begin:ca,relevance:0},Vu={scope:"number",begin:fa,relevance:0},Ku={scope:"number",begin:ua,relevance:0},Gu={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[Sn,{begin:/\[/,end:/\]/,relevance:0,contains:[Sn]}]},Wu={scope:"title",begin:la,relevance:0},qu={scope:"title",begin:Sr,relevance:0},Zu={begin:"\\.\\s*"+Sr,relevance:0},Ju=function(e){return Object.assign(e,{"on:begin":(t,n)=>{n.data._beginMatch=t[1]},"on:end":(t,n)=>{n.data._beginMatch!==t[1]&&n.ignoreMatch()}})};var Xn=Object.freeze({__proto__:null,APOS_STRING_MODE:$u,BACKSLASH_ESCAPE:Sn,BINARY_NUMBER_MODE:Ku,BINARY_NUMBER_RE:ua,COMMENT:wo,C_BLOCK_COMMENT_MODE:Xu,C_LINE_COMMENT_MODE:Uu,C_NUMBER_MODE:Vu,C_NUMBER_RE:fa,END_SAME_AS_BEGIN:Ju,HASH_COMMENT_MODE:ju,IDENT_RE:la,MATCH_NOTHING_RE:Pu,METHOD_GUARD:Zu,NUMBER_MODE:Yu,NUMBER_RE:ca,PHRASAL_WORDS_MODE:zu,QUOTE_STRING_MODE:Hu,REGEXP_MODE:Gu,RE_STARTERS_RE:Fu,SHEBANG:Du,TITLE_MODE:Wu,UNDERSCORE_IDENT_RE:Sr,UNDERSCORE_TITLE_MODE:qu});function Qu(e,t){e.input[e.index-1]==="."&&t.ignoreMatch()}function ed(e,t){e.className!==void 0&&(e.scope=e.className,delete e.className)}function td(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=Qu,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function nd(e,t){Array.isArray(e.illegal)&&(e.illegal=Rr(...e.illegal))}function od(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function rd(e,t){e.relevance===void 0&&(e.relevance=1)}const sd=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const n=Object.assign({},e);Object.keys(e).forEach(o=>{delete e[o]}),e.keywords=n.keywords,e.begin=zt(n.beforeMatch,ia(n.begin)),e.starts={relevance:0,contains:[Object.assign(n,{endsParent:!0})]},e.relevance=0,delete n.beforeMatch},id=["of","and","for","in","not","or","if","then","parent","list","value"],ad="keyword";function da(e,t,n=ad){const o=Object.create(null);return typeof e=="string"?r(n,e.split(" ")):Array.isArray(e)?r(n,e):Object.keys(e).forEach(function(s){Object.assign(o,da(e[s],t,s))}),o;function r(s,i){t&&(i=i.map(a=>a.toLowerCase())),i.forEach(function(a){const l=a.split("|");o[l[0]]=[s,ld(l[0],l[1])]})}}function ld(e,t){return t?Number(t):cd(e)?0:1}function cd(e){return id.includes(e.toLowerCase())}const Ss={},Ft=e=>{console.error(e)},Ts=(e,...t)=>{console.log(`WARN: ${e}`,...t)},Xt=(e,t)=>{Ss[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),Ss[`${e}/${t}`]=!0)},Qn=new Error;function ha(e,t,{key:n}){let o=0;const r=e[n],s={},i={};for(let a=1;a<=t.length;a++)i[a+o]=r[a],s[a+o]=!0,o+=aa(t[a-1]);e[n]=i,e[n]._emit=s,e[n]._multi=!0}function fd(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw Ft("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Qn;if(typeof e.beginScope!="object"||e.beginScope===null)throw Ft("beginScope must be object"),Qn;ha(e,e.begin,{key:"beginScope"}),e.begin=Or(e.begin,{joinWith:""})}}function ud(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw Ft("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Qn;if(typeof e.endScope!="object"||e.endScope===null)throw Ft("endScope must be object"),Qn;ha(e,e.end,{key:"endScope"}),e.end=Or(e.end,{joinWith:""})}}function dd(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function hd(e){dd(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),fd(e),ud(e)}function pd(e){function t(i,a){return new RegExp(On(i),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(a?"g":""))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(a,l){l.position=this.position++,this.matchIndexes[this.matchAt]=l,this.regexes.push([l,a]),this.matchAt+=aa(a)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const a=this.regexes.map(l=>l[1]);this.matcherRe=t(Or(a,{joinWith:"|"}),!0),this.lastIndex=0}exec(a){this.matcherRe.lastIndex=this.lastIndex;const l=this.matcherRe.exec(a);if(!l)return null;const d=l.findIndex((h,p)=>p>0&&h!==void 0),f=this.matchIndexes[d];return l.splice(0,d),Object.assign(l,f)}}class o{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(a){if(this.multiRegexes[a])return this.multiRegexes[a];const l=new n;return this.rules.slice(a).forEach(([d,f])=>l.addRule(d,f)),l.compile(),this.multiRegexes[a]=l,l}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(a,l){this.rules.push([a,l]),l.type==="begin"&&this.count++}exec(a){const l=this.getMatcher(this.regexIndex);l.lastIndex=this.lastIndex;let d=l.exec(a);if(this.resumingScanAtSamePosition()&&!(d&&d.index===this.lastIndex)){const f=this.getMatcher(0);f.lastIndex=this.lastIndex+1,d=f.exec(a)}return d&&(this.regexIndex+=d.position+1,this.regexIndex===this.count&&this.considerAll()),d}}function r(i){const a=new o;return i.contains.forEach(l=>a.addRule(l.begin,{rule:l,type:"begin"})),i.terminatorEnd&&a.addRule(i.terminatorEnd,{type:"end"}),i.illegal&&a.addRule(i.illegal,{type:"illegal"}),a}function s(i,a){const l=i;if(i.isCompiled)return l;[ed,od,hd,sd].forEach(f=>f(i,a)),e.compilerExtensions.forEach(f=>f(i,a)),i.__beforeBegin=null,[td,nd,rd].forEach(f=>f(i,a)),i.isCompiled=!0;let d=null;return typeof i.keywords=="object"&&i.keywords.$pattern&&(i.keywords=Object.assign({},i.keywords),d=i.keywords.$pattern,delete i.keywords.$pattern),d=d||/\w+/,i.keywords&&(i.keywords=da(i.keywords,e.case_insensitive)),l.keywordPatternRe=t(d,!0),a&&(i.begin||(i.begin=/\B|\b/),l.beginRe=t(l.begin),!i.end&&!i.endsWithParent&&(i.end=/\B|\b/),i.end&&(l.endRe=t(l.end)),l.terminatorEnd=On(l.end)||"",i.endsWithParent&&a.terminatorEnd&&(l.terminatorEnd+=(i.end?"|":"")+a.terminatorEnd)),i.illegal&&(l.illegalRe=t(i.illegal)),i.contains||(i.contains=[]),i.contains=[].concat(...i.contains.map(function(f){return gd(f==="self"?i:f)})),i.contains.forEach(function(f){s(f,l)}),i.starts&&s(i.starts,a),l.matcher=r(l),l}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=Rt(e.classNameAliases||{}),s(e)}function pa(e){return e?e.endsWithParent||pa(e.starts):!1}function gd(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return Rt(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:pa(e)?Rt(e,{starts:e.starts?Rt(e.starts):null}):Object.isFrozen(e)?Rt(e):e}var md="11.10.0";class bd extends Error{constructor(t,n){super(t),this.name="HTMLInjectionError",this.html=n}}const Do=sa,Ns=Rt,As=Symbol("nomatch"),wd=7,ga=function(e){const t=Object.create(null),n=Object.create(null),o=[];let r=!0;const s="Could not find the language '{}', did you forget to load/include a language module?",i={disableAutodetect:!0,name:"Plain text",contains:[]};let a={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:Au};function l(w){return a.noHighlightRe.test(w)}function d(w){let O=w.className+" ";O+=w.parentNode?w.parentNode.className:"";const U=a.languageDetectRe.exec(O);if(U){const q=ve(U[1]);return q||(Ts(s.replace("{}",U[1])),Ts("Falling back to no-highlight mode for this block.",w)),q?U[1]:"no-highlight"}return O.split(/\s+/).find(q=>l(q)||ve(q))}function f(w,O,U){let q="",J="";typeof O=="object"?(q=w,U=O.ignoreIllegals,J=O.language):(Xt("10.7.0","highlight(lang, code, ...args) has been deprecated."),Xt("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),J=w,q=O),U===void 0&&(U=!0);const re={code:q,language:J};Ue("before:highlight",re);const xe=re.result?re.result:h(re.language,re.code,U);return xe.code=re.code,Ue("after:highlight",xe),xe}function h(w,O,U,q){const J=Object.create(null);function re(E,S){return E.keywords[S]}function xe(){if(!v.keywords){R.addText(b);return}let E=0;v.keywordPatternRe.lastIndex=0;let S=v.keywordPatternRe.exec(b),C="";for(;S;){C+=b.substring(E,S.index);const G=x.case_insensitive?S[0].toLowerCase():S[0],te=re(v,G);if(te){const[be,Ce]=te;if(R.addText(C),C="",J[G]=(J[G]||0)+1,J[G]<=wd&&(z+=Ce),be.startsWith("_"))C+=S[0];else{const It=x.classNameAliases[be]||be;me(S[0],It)}}else C+=S[0];E=v.keywordPatternRe.lastIndex,S=v.keywordPatternRe.exec(b)}C+=b.substring(E),R.addText(C)}function Je(){if(b==="")return;let E=null;if(typeof v.subLanguage=="string"){if(!t[v.subLanguage]){R.addText(b);return}E=h(v.subLanguage,b,!0,T[v.subLanguage]),T[v.subLanguage]=E._top}else E=m(b,v.subLanguage.length?v.subLanguage:null);v.relevance>0&&(z+=E.relevance),R.__addSublanguage(E._emitter,E.language)}function Ee(){v.subLanguage!=null?Je():xe(),b=""}function me(E,S){E!==""&&(R.startScope(S),R.addText(E),R.endScope())}function y(E,S){let C=1;const G=S.length-1;for(;C<=G;){if(!E._emit[C]){C++;continue}const te=x.classNameAliases[E[C]]||E[C],be=S[C];te?me(be,te):(b=be,xe(),b=""),C++}}function I(E,S){return E.scope&&typeof E.scope=="string"&&R.openNode(x.classNameAliases[E.scope]||E.scope),E.beginScope&&(E.beginScope._wrap?(me(b,x.classNameAliases[E.beginScope._wrap]||E.beginScope._wrap),b=""):E.beginScope._multi&&(y(E.beginScope,S),b="")),v=Object.create(E,{parent:{value:v}}),v}function A(E,S,C){let G=Lu(E.endRe,C);if(G){if(E["on:end"]){const te=new ks(E);E["on:end"](S,te),te.isMatchIgnored&&(G=!1)}if(G){for(;E.endsParent&&E.parent;)E=E.parent;return E}}if(E.endsWithParent)return A(E.parent,S,C)}function F(E){return v.matcher.regexIndex===0?(b+=E[0],1):(j=!0,0)}function ne(E){const S=E[0],C=E.rule,G=new ks(C),te=[C.__beforeBegin,C["on:begin"]];for(const be of te)if(be&&(be(E,G),G.isMatchIgnored))return F(S);return C.skip?b+=S:(C.excludeBegin&&(b+=S),Ee(),!C.returnBegin&&!C.excludeBegin&&(b=S)),I(C,E),C.returnBegin?0:S.length}function he(E){const S=E[0],C=O.substring(E.index),G=A(v,E,C);if(!G)return As;const te=v;v.endScope&&v.endScope._wrap?(Ee(),me(S,v.endScope._wrap)):v.endScope&&v.endScope._multi?(Ee(),y(v.endScope,E)):te.skip?b+=S:(te.returnEnd||te.excludeEnd||(b+=S),Ee(),te.excludeEnd&&(b=S));do v.scope&&R.closeNode(),!v.skip&&!v.subLanguage&&(z+=v.relevance),v=v.parent;while(v!==G.parent);return G.starts&&I(G.starts,E),te.returnEnd?0:S.length}function c(){const E=[];for(let S=v;S!==x;S=S.parent)S.scope&&E.unshift(S.scope);E.forEach(S=>R.openNode(S))}let u={};function g(E,S){const C=S&&S[0];if(b+=E,C==null)return Ee(),0;if(u.type==="begin"&&S.type==="end"&&u.index===S.index&&C===""){if(b+=O.slice(S.index,S.index+1),!r){const G=new Error(`0 width match regex (${w})`);throw G.languageName=w,G.badRule=u.rule,G}return 1}if(u=S,S.type==="begin")return ne(S);if(S.type==="illegal"&&!U){const G=new Error('Illegal lexeme "'+C+'" for mode "'+(v.scope||"<unnamed>")+'"');throw G.mode=v,G}else if(S.type==="end"){const G=he(S);if(G!==As)return G}if(S.type==="illegal"&&C==="")return 1;if(D>1e5&&D>S.index*3)throw new Error("potential infinite loop, way more iterations than matches");return b+=C,C.length}const x=ve(w);if(!x)throw Ft(s.replace("{}",w)),new Error('Unknown language: "'+w+'"');const _=pd(x);let k="",v=q||_;const T={},R=new a.__emitter(a);c();let b="",z=0,N=0,D=0,j=!1;try{if(x.__emitTokens)x.__emitTokens(O,R);else{for(v.matcher.considerAll();;){D++,j?j=!1:v.matcher.considerAll(),v.matcher.lastIndex=N;const E=v.matcher.exec(O);if(!E)break;const S=O.substring(N,E.index),C=g(S,E);N=E.index+C}g(O.substring(N))}return R.finalize(),k=R.toHTML(),{language:w,value:k,relevance:z,illegal:!1,_emitter:R,_top:v}}catch(E){if(E.message&&E.message.includes("Illegal"))return{language:w,value:Do(O),illegal:!0,relevance:0,_illegalBy:{message:E.message,index:N,context:O.slice(N-100,N+100),mode:E.mode,resultSoFar:k},_emitter:R};if(r)return{language:w,value:Do(O),illegal:!1,relevance:0,errorRaised:E,_emitter:R,_top:v};throw E}}function p(w){const O={value:Do(w),illegal:!1,relevance:0,_top:i,_emitter:new a.__emitter(a)};return O._emitter.addText(w),O}function m(w,O){O=O||a.languages||Object.keys(t);const U=p(w),q=O.filter(ve).filter(ze).map(Ee=>h(Ee,w,!1));q.unshift(U);const J=q.sort((Ee,me)=>{if(Ee.relevance!==me.relevance)return me.relevance-Ee.relevance;if(Ee.language&&me.language){if(ve(Ee.language).supersetOf===me.language)return 1;if(ve(me.language).supersetOf===Ee.language)return-1}return 0}),[re,xe]=J,Je=re;return Je.secondBest=xe,Je}function B(w,O,U){const q=O&&n[O]||U;w.classList.add("hljs"),w.classList.add(`language-${q}`)}function M(w){let O=null;const U=d(w);if(l(U))return;if(Ue("before:highlightElement",{el:w,language:U}),w.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",w);return}if(w.children.length>0&&(a.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(w)),a.throwUnescapedHTML))throw new bd("One of your code blocks includes unescaped HTML.",w.innerHTML);O=w;const q=O.textContent,J=U?f(q,{language:U,ignoreIllegals:!0}):m(q);w.innerHTML=J.value,w.dataset.highlighted="yes",B(w,U,J.language),w.result={language:J.language,re:J.relevance,relevance:J.relevance},J.secondBest&&(w.secondBest={language:J.secondBest.language,relevance:J.secondBest.relevance}),Ue("after:highlightElement",{el:w,result:J,text:q})}function V(w){a=Ns(a,w)}const H=()=>{L(),Xt("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function P(){L(),Xt("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let $=!1;function L(){if(document.readyState==="loading"){$=!0;return}document.querySelectorAll(a.cssSelector).forEach(M)}function ee(){$&&L()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",ee,!1);function de(w,O){let U=null;try{U=O(e)}catch(q){if(Ft("Language definition for '{}' could not be registered.".replace("{}",w)),r)Ft(q);else throw q;U=i}U.name||(U.name=w),t[w]=U,U.rawDefinition=O.bind(null,e),U.aliases&&Ie(U.aliases,{languageName:w})}function ce(w){delete t[w];for(const O of Object.keys(n))n[O]===w&&delete n[O]}function Ae(){return Object.keys(t)}function ve(w){return w=(w||"").toLowerCase(),t[w]||t[n[w]]}function Ie(w,{languageName:O}){typeof w=="string"&&(w=[w]),w.forEach(U=>{n[U.toLowerCase()]=O})}function ze(w){const O=ve(w);return O&&!O.disableAutodetect}function Ze(w){w["before:highlightBlock"]&&!w["before:highlightElement"]&&(w["before:highlightElement"]=O=>{w["before:highlightBlock"](Object.assign({block:O.el},O))}),w["after:highlightBlock"]&&!w["after:highlightElement"]&&(w["after:highlightElement"]=O=>{w["after:highlightBlock"](Object.assign({block:O.el},O))})}function $e(w){Ze(w),o.push(w)}function dt(w){const O=o.indexOf(w);O!==-1&&o.splice(O,1)}function Ue(w,O){const U=w;o.forEach(function(q){q[U]&&q[U](O)})}function ge(w){return Xt("10.7.0","highlightBlock will be removed entirely in v12.0"),Xt("10.7.0","Please use highlightElement now."),M(w)}Object.assign(e,{highlight:f,highlightAuto:m,highlightAll:L,highlightElement:M,highlightBlock:ge,configure:V,initHighlighting:H,initHighlightingOnLoad:P,registerLanguage:de,unregisterLanguage:ce,listLanguages:Ae,getLanguage:ve,registerAliases:Ie,autoDetection:ze,inherit:Ns,addPlugin:$e,removePlugin:dt}),e.debugMode=function(){r=!1},e.safeMode=function(){r=!0},e.versionString=md,e.regex={concat:zt,lookahead:ia,either:Rr,optional:Cu,anyNumberOfTimes:Iu};for(const w in Xn)typeof Xn[w]=="object"&&ra(Xn[w]);return Object.assign(e,Xn),e},ln=ga({});ln.newInstance=()=>ga({});var _d=ln;ln.HighlightJS=ln;ln.default=ln;const _o=Ou(_d),Is="[A-Za-z$_][0-9A-Za-z$_]*",vd=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],yd=["true","false","null","undefined","NaN","Infinity"],ma=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],ba=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],wa=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],xd=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],Ed=[].concat(wa,ma,ba);function kd(e){const t=e.regex,n=(O,{after:U})=>{const q="</"+O[0].slice(1);return O.input.indexOf(q,U)!==-1},o=Is,r={begin:"<>",end:"</>"},s=/<[A-Za-z0-9\\._:-]+\s*\/>/,i={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(O,U)=>{const q=O[0].length+O.index,J=O.input[q];if(J==="<"||J===","){U.ignoreMatch();return}J===">"&&(n(O,{after:q})||U.ignoreMatch());let re;const xe=O.input.substring(q);if(re=xe.match(/^\s*=/)){U.ignoreMatch();return}if((re=xe.match(/^\s+extends\s+/))&&re.index===0){U.ignoreMatch();return}}},a={$pattern:Is,keyword:vd,literal:yd,built_in:Ed,"variable.language":xd},l="[0-9](_?[0-9])*",d=`\\.(${l})`,f="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",h={className:"number",variants:[{begin:`(\\b(${f})((${d})|\\.)?|(${d}))[eE][+-]?(${l})\\b`},{begin:`\\b(${f})\\b((${d})\\b|\\.)?|(${d})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},p={className:"subst",begin:"\\$\\{",end:"\\}",keywords:a,contains:[]},m={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,p],subLanguage:"xml"}},B={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,p],subLanguage:"css"}},M={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,p],subLanguage:"graphql"}},V={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,p]},P={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:o+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},$=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,m,B,M,V,{match:/\$\d+/},h];p.contains=$.concat({begin:/\{/,end:/\}/,keywords:a,contains:["self"].concat($)});const L=[].concat(P,p.contains),ee=L.concat([{begin:/(\s*)\(/,end:/\)/,keywords:a,contains:["self"].concat(L)}]),de={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:ee},ce={variants:[{match:[/class/,/\s+/,o,/\s+/,/extends/,/\s+/,t.concat(o,"(",t.concat(/\./,o),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,o],scope:{1:"keyword",3:"title.class"}}]},Ae={relevance:0,match:t.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...ma,...ba]}},ve={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},Ie={variants:[{match:[/function/,/\s+/,o,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[de],illegal:/%/},ze={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function Ze(O){return t.concat("(?!",O.join("|"),")")}const $e={match:t.concat(/\b/,Ze([...wa,"super","import"].map(O=>`${O}\\s*\\(`)),o,t.lookahead(/\s*\(/)),className:"title.function",relevance:0},dt={begin:t.concat(/\./,t.lookahead(t.concat(o,/(?![0-9A-Za-z$_(])/))),end:o,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},Ue={match:[/get|set/,/\s+/,o,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},de]},ge="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",w={match:[/const|var|let/,/\s+/,o,/\s*/,/=\s*/,/(async\s*)?/,t.lookahead(ge)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[de]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:a,exports:{PARAMS_CONTAINS:ee,CLASS_REFERENCE:Ae},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),ve,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,m,B,M,V,P,{match:/\$\d+/},h,Ae,{className:"attr",begin:o+t.lookahead(":"),relevance:0},w,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[P,e.REGEXP_MODE,{className:"function",begin:ge,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:ee}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:r.begin,end:r.end},{match:s},{begin:i.begin,"on:begin":i.isTrulyOpeningTag,end:i.end}],subLanguage:"xml",contains:[{begin:i.begin,end:i.end,skip:!0,contains:["self"]}]}]},Ie,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[de,e.inherit(e.TITLE_MODE,{begin:o,className:"title.function"})]},{match:/\.\.\./,relevance:0},dt,{match:"\\$"+o,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[de]},$e,ze,ce,Ue,{match:/\$[(.]/}]}}const Rd=e=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:e.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z_][A-Za-z0-9_-]*/}}),Od=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","optgroup","option","p","picture","q","quote","samp","section","select","source","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],Sd=["defs","g","marker","mask","pattern","svg","switch","symbol","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feGaussianBlur","feImage","feMerge","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","linearGradient","radialGradient","stop","circle","ellipse","image","line","path","polygon","polyline","rect","text","use","textPath","tspan","foreignObject","clipPath"],Td=[...Od,...Sd],Nd=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"].sort().reverse(),Ad=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"].sort().reverse(),Id=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"].sort().reverse(),Cd=["accent-color","align-content","align-items","align-self","alignment-baseline","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","baseline-shift","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-end-end-radius","border-end-start-radius","border-right-color","border-right-style","border-right-width","border-spacing","border-start-end-radius","border-start-start-radius","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","cx","cy","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","color-scheme","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","empty-cells","enable-background","fill","fill-opacity","fill-rule","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","flood-color","flood-opacity","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-horizontal","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","inset","inset-block","inset-block-end","inset-block-start","inset-inline","inset-inline-end","inset-inline-start","isolation","kerning","justify-content","justify-items","justify-self","left","letter-spacing","lighting-color","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","marker","marker-end","marker-mid","marker-start","mask","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","r","resize","rest","rest-after","rest-before","right","rotate","row-gap","scale","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","shape-rendering","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","speak","speak-as","src","tab-size","table-layout","text-anchor","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip-ink","text-decoration-style","text-decoration-thickness","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-offset","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","translate","unicode-bidi","vector-effect","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","x","y","z-index"].sort().reverse();function Md(e){const t=e.regex,n=Rd(e),o={begin:/-(webkit|moz|ms|o)-(?=[a-z])/},r="and or not only",s=/@-?\w[\w]*(-\w+)*/,i="[a-zA-Z-][a-zA-Z0-9_-]*",a=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE];return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},classNameAliases:{keyframePosition:"selector-tag"},contains:[n.BLOCK_COMMENT,o,n.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{className:"selector-class",begin:"\\."+i,relevance:0},n.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{begin:":("+Ad.join("|")+")"},{begin:":(:)?("+Id.join("|")+")"}]},n.CSS_VARIABLE,{className:"attribute",begin:"\\b("+Cd.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,contains:[n.BLOCK_COMMENT,n.HEXCOLOR,n.IMPORTANT,n.CSS_NUMBER_MODE,...a,{begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"},contains:[...a,{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]},n.FUNCTION_DISPATCH]},{begin:t.lookahead(/@/),end:"[{;]",relevance:0,illegal:/:/,contains:[{className:"keyword",begin:s},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:r,attribute:Nd.join(" ")},contains:[{begin:/[a-z-]+(?=:)/,className:"attribute"},...a,n.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"\\b("+Td.join("|")+")\\b"}]}}function Ld(e){return{name:"VBScript in HTML",subLanguage:"xml",contains:[{begin:"<%",end:"%>",subLanguage:"vbscript"}]}}_o.registerLanguage("javascript",kd);_o.registerLanguage("css",Md);_o.registerLanguage("html",Ld);const Bd={name:"CodeBlock",props:{code:{type:String,required:!0},type:{type:String,default:"css"}},mounted(){this.highlightCode()},methods:{highlightCode(){const e=this.$refs.codeBlock;_o.highlightElement(e)}}};function Pd(e,t,n,o,r,s){return Z(),Q("pre",null,[t[0]||(t[0]=Le("        ")),le("code",{ref:"codeBlock",class:Dt(`code language-${n.type}`)},`
            `+Kn(n.code)+`
        `,3),t[1]||(t[1]=Le(`
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
`;var Mn;class $d extends ot{constructor(){super();we(this,Mn);const n=this.attachShadow({mode:"open"});n.innerHTML=`
      <div class="ea-card_wrap" part="container">
        <div class="ea-card_header" part="header-wrap">
          <slot name="header"></slot>
        </div>
        <div class="ea-card_content" part="content-wrap">
          <slot></slot>
        </div>
      </div>
    `,ye(this,Mn,n.querySelector(".ea-card_wrap")),this.build(n,Dd)}get shadow(){return this.getAttribute("shadow")||"always"}set shadow(n){this.setAttribute("shadow",n),X(this,Mn).classList.add(`is-${n}-shadow`)}connectedCallback(){this.shadow=this.shadow}}Mn=new WeakMap;customElements.get("ea-card")||customElements.define("ea-card",$d);const Hd={name:"SgCard",components:{CodeBlock:Fd},props:{title:{type:String,default:"Card"},code:{type:String,default:""},className:{type:String,default:""},hasButton:{type:Boolean,default:!1}},setup(e){let t=fo(e.hasButton);const n=We(()=>({[e.className]:t.value?"":e.className,box:!0}));return{isAnimated:t,animateClassName:n,toggleClass:s=>{t.value=!1},animationend:()=>{t.value=!0}}}},zd={class:"sg-card"},Ud={shadow:"hover"},Xd={slot:"header",class:"header"};function jd(e,t,n,o,r,s){const i=Ol("CodeBlock");return Z(),Q("div",zd,[le("ea-card",Ud,[le("div",Xd,[le("span",null,Kn(n.title),1),n.hasButton?(Z(),Q("ea-button",{key:0,onClick:t[0]||(t[0]=(...a)=>o.toggleClass&&o.toggleClass(...a))}," 点击执行动画 ")):ac("",!0)]),le("span",{class:Dt(o.animateClassName),onAnimationend:t[1]||(t[1]=(...a)=>o.animationend&&o.animationend(...a))},Kn(n.title),35),Y(i,{code:n.code},null,8,["code"])])])}const De=Pn(Hd,[["render",jd]]),Yd={class:"part"},Vd={__name:"index",setup(e){const t={};return Object.assign(t,{grow:{title:"放大",className:"grow",code:`
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
    `}}),(n,o)=>(Z(),Q("section",Yd,[(Z(),Q(oe,null,Fe(t,(r,s)=>Y(De,{key:s,title:r.title,code:r.code,className:r.className},null,8,["title","code","className"])),64))]))}},Kd={class:"part"},Gd={__name:"index",setup(e){const t={};return Object.assign(t,{fill:{title:"填充",className:"fill",code:`
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
`}}),(n,o)=>(Z(),Q("section",Kd,[(Z(),Q(oe,null,Fe(t,(r,s)=>Y(De,{key:s,title:r.title,code:r.code,className:r.className},null,8,["title","code","className"])),64))]))}},Wd={class:"part"},qd={__name:"index",setup(e){const t={};return Object.assign(t,{borderFade:{title:"填充",className:"borderFade",code:`
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
`}}),(n,o)=>(Z(),Q("section",Wd,[(Z(),Q(oe,null,Fe(t,(r,s)=>Y(De,{key:s,title:r.title,code:r.code,className:r.className},null,8,["title","code","className"])),64))]))}},Zd={class:"part"},Jd={__name:"index",setup(e){const t={};return Object.assign(t,{shadow:{title:"阴影",className:"shadow",code:`
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
`}}),(n,o)=>(Z(),Q("section",Zd,[(Z(),Q(oe,null,Fe(t,(r,s)=>Y(De,{key:s,title:r.title,code:r.code,className:r.className},null,8,["title","code","className"])),64))]))}},Qd={class:"part"},eh={__name:"index",setup(e){const t={};return Object.assign(t,{bubbleTop:{title:"气泡-上方",className:"bubbleTop",code:`
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
`}}),(n,o)=>(Z(),Q("section",Qd,[(Z(),Q(oe,null,Fe(t,(r,s)=>Y(De,{key:s,title:r.title,code:r.code,className:r.className},null,8,["title","code","className"])),64))]))}},th={class:"part"},nh={__name:"index",setup(e){const t={};return Object.assign(t,{curlTopLeft:{title:"折角-左上方",className:"curlTopLeft",code:`
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
`}}),(n,o)=>(Z(),Q("section",th,[(Z(),Q(oe,null,Fe(t,(r,s)=>Y(De,{key:s,title:r.title,code:r.code,className:r.className},null,8,["title","code","className"])),64))]))}},oh={class:"part"},rh={__name:"index",setup(e){const t={};return Object.assign(t,{bounce:{title:"跳跃",className:"bounce",code:`
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
`}}),(n,o)=>(Z(),Q("section",oh,[(Z(),Q(oe,null,Fe(t,(r,s)=>Y(De,{key:s,title:r.title,code:r.code,className:r.className},null,8,["title","code","className"])),64))]))}},sh=`
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
`;var on,Re;class lh extends ot{constructor(){super();we(this,on,"button");we(this,Re);const n=this.attachShadow({mode:"open"});this.getAttribute("href")?(n.innerHTML=ih,ye(this,on,"a")):(n.innerHTML=sh,ye(this,on,"button")),ye(this,Re,n.querySelector(".ea-button")),this.build(n,ah)}get BUTTON_STYLE(){return["plain","round"]}get BUTTON_TYPE(){return["normal","primary","success","warning","danger","text"]}get BUTTON_SIZE(){return["medium","small","mini"]}get disabled(){return this.getAttrBoolean("disabled")}set disabled(n){this.toggleAttr("disabled",n),X(this,Re).classList.toggle("disabled",n),this.style.cursor=n?"not-allowed":"pointer",n&&X(this,Re).setAttribute("disabled",n)}get plain(){return this.getAttrBoolean("plain")}set plain(n){this.toggleAttr("plain",n),X(this,Re).classList.toggle("plain",n)}get round(){return this.getAttrBoolean("round")}set round(n){this.toggleAttr("round",n),X(this,Re).classList.toggle("round",n)}get type(){const n=this.getAttribute("type");return this.BUTTON_TYPE.includes(n)?n:"normal"}set type(n){this.setAttribute("type",n),X(this,Re).classList.add(n)}get size(){const n=this.getAttribute("size");return this.BUTTON_SIZE.includes(n)?n:"medium"}set size(n){this.toggleAttr("size",n),X(this,Re).classList.add(n)}get loading(){return this.getAttrBoolean("loading")}set loading(n){var o;if(this.toggleAttr("loading",n),this.disabled=n,n){const r=document.createElement("ea-icon");r.id="ea-loading-icon",r.icon="icon-spin6 animate-spin",X(this,Re).insertBefore(r,X(this,Re).firstChild)}else{const r=(o=X(this,Re))==null?void 0:o.querySelectorAll("#ea-loading-icon");(r==null?void 0:r.length)>0&&(r==null||r.forEach(s=>s.remove()))}}get icon(){return this.getAttribute("icon")||""}set icon(n){if(this.setAttribute("icon",n),n&&!X(this,Re).querySelector("ea-icon")){const o=document.createElement("ea-icon");o.icon=n,o.part="icon",X(this,Re).insertBefore(o,X(this,Re).firstChild)}}get href(){return this.getAttribute("href")||""}set href(n){X(this,on)!=="button"&&(this.setAttribute("href",n),X(this,Re).setAttribute("href",n))}connectedCallback(){this.plain=this.plain,this.round=this.round,this.type=this.type,this.size=this.size,this.icon=this.icon,this.disabled=this.disabled,this.href=this.href,this.loading&&(this.loading=this.loading)}}on=new WeakMap,Re=new WeakMap;window.customElements.get("ea-button")||window.customElements.define("ea-button",lh);const ch={class:"part"},fh={class:"part"},uh={__name:"index",setup(e){const t={backInTop:{title:"从上出现",className:"backInTop",code:`
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
`}};return(o,r)=>(Z(),Q(oe,null,[r[0]||(r[0]=le("h2",null,"从后面进入",-1)),le("section",ch,[(Z(),Q(oe,null,Fe(t,(s,i)=>Y(De,{key:i,title:s.title,code:s.code,className:s.className,hasButton:!0},null,8,["title","code","className"])),64))]),r[1]||(r[1]=le("h2",null,"从后面退出",-1)),le("section",fh,[(Z(),Q(oe,null,Fe(n,(s,i)=>Y(De,{key:i,title:s.title,code:s.code,className:s.className,hasButton:!0},null,8,["title","code","className"])),64))])],64))}},dh={class:"part"},hh={class:"part"},ph={__name:"index",setup(e){const t={bounceIn:{title:"弹跳出现",className:"bounceIn",code:`
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
`}};return(o,r)=>(Z(),Q(oe,null,[r[0]||(r[0]=le("h2",null,"弹跳进入",-1)),le("section",dh,[(Z(),Q(oe,null,Fe(t,(s,i)=>Y(De,{key:i,title:s.title,code:s.code,className:s.className,hasButton:!0},null,8,["title","code","className"])),64))]),r[1]||(r[1]=le("h2",null,"弹跳退出",-1)),le("section",hh,[(Z(),Q(oe,null,Fe(n,(s,i)=>Y(De,{key:i,title:s.title,code:s.code,className:s.className,hasButton:!0},null,8,["title","code","className"])),64))])],64))}},gh={class:"part"},mh={class:"part"},bh={__name:"index",setup(e){const t={fadeIn:{title:"淡入",className:"fadeIn",code:`
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
`}};return(o,r)=>(Z(),Q(oe,null,[r[0]||(r[0]=le("h2",null,"淡入",-1)),le("section",gh,[(Z(),Q(oe,null,Fe(t,(s,i)=>Y(De,{key:i,title:s.title,code:s.code,className:s.className,hasButton:!0},null,8,["title","code","className"])),64))]),r[1]||(r[1]=le("h2",null,"淡出",-1)),le("section",mh,[(Z(),Q(oe,null,Fe(n,(s,i)=>Y(De,{key:i,title:s.title,code:s.code,className:s.className,hasButton:!0},null,8,["title","code","className"])),64))])],64))}},wh={class:"part"},_h={__name:"index",setup(e){const t={flip:{title:"翻转",className:"flip",code:`
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
`}};return(n,o)=>(Z(),Q("section",wh,[(Z(),Q(oe,null,Fe(t,(r,s)=>Y(De,{key:s,title:r.title,code:r.code,className:r.className,hasButton:!0},null,8,["title","code","className"])),64))]))}},vh={class:"part"},yh={__name:"index",setup(e){const t={lightSpeedInRight:{title:"光速-从右进入",className:"lightSpeedInRight",code:`
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
`}};return(n,o)=>(Z(),Q("section",vh,[(Z(),Q(oe,null,Fe(t,(r,s)=>Y(De,{key:s,title:r.title,code:r.code,className:r.className,hasButton:!0},null,8,["title","code","className"])),64))]))}},xh=[{path:"/",redirect:"/2DTransitions",meta:{title:"主页"}},{path:"/2DTransitions",component:Vd,meta:{title:"2D 过渡动画"}},{path:"/backgroundTransitions",component:Gd,meta:{title:"背景过渡动画"}},{path:"/borderTransitions",component:qd,meta:{title:"边框过渡动画"}},{path:"/shadowAndGlowTransitions",component:Jd,meta:{title:"阴影过渡动画"}},{path:"/speechBubbles",component:eh,meta:{title:"气泡框过渡动画"}},{path:"/curls",component:nh,meta:{title:"折角过渡动画"}},{path:"/attentionSeekers",component:rh,meta:{title:"吸引眼球动画"}},{path:"/backEntrancesAndBackExits",component:uh,meta:{title:"后进后出动画"}},{path:"/bouncingEntrancesAndBouncingExits",component:ph,meta:{title:"弹出弹入动画"}},{path:"/fadeInAndFadeOut",component:bh,meta:{title:"淡入淡出动画"}},{path:"/flippers",component:_h,meta:{title:"翻转动画"}},{path:"/lightspeed",component:yh,meta:{title:"翻转动画"}}],_a=Vf({history:Ef(),routes:xh});_a.beforeEach((e,t,n)=>{document.title=`${e.meta.title} | Ea-effects.css`,e.hash||n()});const Cs={fontelloCSS:"https://cdn.jsdelivr.net/npm/easy-component-ui/components/ea-icon/css/fontello.css"};function Eh(e){Object.assign(Cs,e),document.dispatchEvent(new CustomEvent("configChanged",{detail:Cs}))}window.addEventListener("DOMContentLoaded",()=>{Eh({fontelloCSS:new URL("/ea-effects/ea-icon/css/fontello.css",import.meta.url).href})});Uc(Ru).use(_a).mount("#app");
