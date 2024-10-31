(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Qc(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const De={},qr=[],Nt=()=>{},m_=()=>!1,Qo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Jc=t=>t.startsWith("onUpdate:"),dt=Object.assign,Yc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},g_=Object.prototype.hasOwnProperty,Ie=(t,e)=>g_.call(t,e),ce=Array.isArray,Hr=t=>gi(t)==="[object Map]",Jo=t=>gi(t)==="[object Set]",Yu=t=>gi(t)==="[object Date]",pe=t=>typeof t=="function",Qe=t=>typeof t=="string",tn=t=>typeof t=="symbol",Ve=t=>t!==null&&typeof t=="object",cf=t=>(Ve(t)||pe(t))&&pe(t.then)&&pe(t.catch),lf=Object.prototype.toString,gi=t=>lf.call(t),__=t=>gi(t).slice(8,-1),uf=t=>gi(t)==="[object Object]",Xc=t=>Qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Hs=Qc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},y_=/-(\w)/g,jt=Yo(t=>t.replace(y_,(e,n)=>n?n.toUpperCase():"")),v_=/\B([A-Z])/g,br=Yo(t=>t.replace(v_,"-$1").toLowerCase()),Xo=Yo(t=>t.charAt(0).toUpperCase()+t.slice(1)),$a=Yo(t=>t?`on${Xo(t)}`:""),Qn=(t,e)=>!Object.is(t,e),co=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},hf=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ro=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Xu;const df=()=>Xu||(Xu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Zc(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Qe(r)?w_(r):Zc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Qe(t)||Ve(t))return t}const E_=/;(?![^(]*\))/g,T_=/:([^]+)/,I_=/\/\*[^]*?\*\//g;function w_(t){const e={};return t.replace(I_,"").split(E_).forEach(n=>{if(n){const r=n.split(T_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function el(t){let e="";if(Qe(t))e=t;else if(ce(t))for(let n=0;n<t.length;n++){const r=el(t[n]);r&&(e+=r+" ")}else if(Ve(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const A_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",R_=Qc(A_);function ff(t){return!!t||t===""}function b_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Zo(t[r],e[r]);return n}function Zo(t,e){if(t===e)return!0;let n=Yu(t),r=Yu(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=tn(t),r=tn(e),n||r)return t===e;if(n=ce(t),r=ce(e),n||r)return n&&r?b_(t,e):!1;if(n=Ve(t),r=Ve(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const a in t){const c=t.hasOwnProperty(a),l=e.hasOwnProperty(a);if(c&&!l||!c&&l||!Zo(t[a],e[a]))return!1}}return String(t)===String(e)}function S_(t,e){return t.findIndex(n=>Zo(n,e))}const pf=t=>!!(t&&t.__v_isRef===!0),Lt=t=>Qe(t)?t:t==null?"":ce(t)||Ve(t)&&(t.toString===lf||!pe(t.toString))?pf(t)?Lt(t.value):JSON.stringify(t,mf,2):String(t),mf=(t,e)=>pf(e)?mf(t,e.value):Hr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[ja(r,i)+" =>"]=s,n),{})}:Jo(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ja(n))}:tn(e)?ja(e):Ve(e)&&!ce(e)&&!uf(e)?String(e):e,ja=(t,e="")=>{var n;return tn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xt;class P_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xt,!e&&xt&&(this.index=(xt.scopes||(xt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=xt;try{return xt=this,e()}finally{xt=n}}}on(){xt=this}off(){xt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function C_(t,e=xt){e&&e.active&&e.effects.push(t)}function k_(){return xt}let fr;class tl{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,C_(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Zn();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(O_(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),er()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=jn,n=fr;try{return jn=!0,fr=this,this._runnings++,Zu(this),this.fn()}finally{eh(this),this._runnings--,fr=n,jn=e}}stop(){this.active&&(Zu(this),eh(this),this.onStop&&this.onStop(),this.active=!1)}}function O_(t){return t.value}function Zu(t){t._trackId++,t._depsLength=0}function eh(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)gf(t.deps[e],t);t.deps.length=t._depsLength}}function gf(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let jn=!0,lc=0;const _f=[];function Zn(){_f.push(jn),jn=!1}function er(){const t=_f.pop();jn=t===void 0?!0:t}function nl(){lc++}function rl(){for(lc--;!lc&&uc.length;)uc.shift()()}function yf(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&gf(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const uc=[];function vf(t,e,n){nl();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&uc.push(r.scheduler)))}rl()}const Ef=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},hc=new WeakMap,pr=Symbol(""),dc=Symbol("");function Et(t,e,n){if(jn&&fr){let r=hc.get(t);r||hc.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Ef(()=>r.delete(n))),yf(fr,s)}}function fn(t,e,n,r,s,i){const a=hc.get(t);if(!a)return;let c=[];if(e==="clear")c=[...a.values()];else if(n==="length"&&ce(t)){const l=Number(r);a.forEach((h,f)=>{(f==="length"||!tn(f)&&f>=l)&&c.push(h)})}else switch(n!==void 0&&c.push(a.get(n)),e){case"add":ce(t)?Xc(n)&&c.push(a.get("length")):(c.push(a.get(pr)),Hr(t)&&c.push(a.get(dc)));break;case"delete":ce(t)||(c.push(a.get(pr)),Hr(t)&&c.push(a.get(dc)));break;case"set":Hr(t)&&c.push(a.get(pr));break}nl();for(const l of c)l&&vf(l,4);rl()}const V_=Qc("__proto__,__v_isRef,__isVue"),Tf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(tn)),th=N_();function N_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Se(this);for(let i=0,a=this.length;i<a;i++)Et(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Se)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Zn(),nl();const r=Se(this)[e].apply(this,n);return rl(),er(),r}}),t}function D_(t){tn(t)||(t=String(t));const e=Se(this);return Et(e,"has",t),e.hasOwnProperty(t)}class If{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?W_:bf:i?Rf:Af).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=ce(e);if(!s){if(a&&Ie(th,n))return Reflect.get(th,n,r);if(n==="hasOwnProperty")return D_}const c=Reflect.get(e,n,r);return(tn(n)?Tf.has(n):V_(n))||(s||Et(e,"get",n),i)?c:Tt(c)?a&&Xc(n)?c:c.value:Ve(c)?s?Sf(c):_i(c):c}}class wf extends If{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=gr(i);if(!Xr(r)&&!gr(r)&&(i=Se(i),r=Se(r)),!ce(e)&&Tt(i)&&!Tt(r))return l?!1:(i.value=r,!0)}const a=ce(e)&&Xc(n)?Number(n)<e.length:Ie(e,n),c=Reflect.set(e,n,r,s);return e===Se(s)&&(a?Qn(r,i)&&fn(e,"set",n,r):fn(e,"add",n,r)),c}deleteProperty(e,n){const r=Ie(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&fn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!tn(n)||!Tf.has(n))&&Et(e,"has",n),r}ownKeys(e){return Et(e,"iterate",ce(e)?"length":pr),Reflect.ownKeys(e)}}class M_ extends If{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const x_=new wf,L_=new M_,F_=new wf(!0);const sl=t=>t,ea=t=>Reflect.getPrototypeOf(t);function Yi(t,e,n=!1,r=!1){t=t.__v_raw;const s=Se(t),i=Se(e);n||(Qn(e,i)&&Et(s,"get",e),Et(s,"get",i));const{has:a}=ea(s),c=r?sl:n?al:ni;if(a.call(s,e))return c(t.get(e));if(a.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function Xi(t,e=!1){const n=this.__v_raw,r=Se(n),s=Se(t);return e||(Qn(t,s)&&Et(r,"has",t),Et(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Zi(t,e=!1){return t=t.__v_raw,!e&&Et(Se(t),"iterate",pr),Reflect.get(t,"size",t)}function nh(t,e=!1){!e&&!Xr(t)&&!gr(t)&&(t=Se(t));const n=Se(this);return ea(n).has.call(n,t)||(n.add(t),fn(n,"add",t,t)),this}function rh(t,e,n=!1){!n&&!Xr(e)&&!gr(e)&&(e=Se(e));const r=Se(this),{has:s,get:i}=ea(r);let a=s.call(r,t);a||(t=Se(t),a=s.call(r,t));const c=i.call(r,t);return r.set(t,e),a?Qn(e,c)&&fn(r,"set",t,e):fn(r,"add",t,e),this}function sh(t){const e=Se(this),{has:n,get:r}=ea(e);let s=n.call(e,t);s||(t=Se(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&fn(e,"delete",t,void 0),i}function ih(){const t=Se(this),e=t.size!==0,n=t.clear();return e&&fn(t,"clear",void 0,void 0),n}function eo(t,e){return function(r,s){const i=this,a=i.__v_raw,c=Se(a),l=e?sl:t?al:ni;return!t&&Et(c,"iterate",pr),a.forEach((h,f)=>r.call(s,l(h),l(f),i))}}function to(t,e,n){return function(...r){const s=this.__v_raw,i=Se(s),a=Hr(i),c=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,h=s[t](...r),f=n?sl:e?al:ni;return!e&&Et(i,"iterate",l?dc:pr),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:c?[f(p[0]),f(p[1])]:f(p),done:g}},[Symbol.iterator](){return this}}}}function Pn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function U_(){const t={get(i){return Yi(this,i)},get size(){return Zi(this)},has:Xi,add:nh,set:rh,delete:sh,clear:ih,forEach:eo(!1,!1)},e={get(i){return Yi(this,i,!1,!0)},get size(){return Zi(this)},has:Xi,add(i){return nh.call(this,i,!0)},set(i,a){return rh.call(this,i,a,!0)},delete:sh,clear:ih,forEach:eo(!1,!0)},n={get(i){return Yi(this,i,!0)},get size(){return Zi(this,!0)},has(i){return Xi.call(this,i,!0)},add:Pn("add"),set:Pn("set"),delete:Pn("delete"),clear:Pn("clear"),forEach:eo(!0,!1)},r={get(i){return Yi(this,i,!0,!0)},get size(){return Zi(this,!0)},has(i){return Xi.call(this,i,!0)},add:Pn("add"),set:Pn("set"),delete:Pn("delete"),clear:Pn("clear"),forEach:eo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=to(i,!1,!1),n[i]=to(i,!0,!1),e[i]=to(i,!1,!0),r[i]=to(i,!0,!0)}),[t,n,e,r]}const[B_,$_,j_,q_]=U_();function il(t,e){const n=e?t?q_:j_:t?$_:B_;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ie(n,s)&&s in r?n:r,s,i)}const H_={get:il(!1,!1)},K_={get:il(!1,!0)},z_={get:il(!0,!1)};const Af=new WeakMap,Rf=new WeakMap,bf=new WeakMap,W_=new WeakMap;function G_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Q_(t){return t.__v_skip||!Object.isExtensible(t)?0:G_(__(t))}function _i(t){return gr(t)?t:ol(t,!1,x_,H_,Af)}function J_(t){return ol(t,!1,F_,K_,Rf)}function Sf(t){return ol(t,!0,L_,z_,bf)}function ol(t,e,n,r,s){if(!Ve(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const a=Q_(t);if(a===0)return t;const c=new Proxy(t,a===2?r:n);return s.set(t,c),c}function Ks(t){return gr(t)?Ks(t.__v_raw):!!(t&&t.__v_isReactive)}function gr(t){return!!(t&&t.__v_isReadonly)}function Xr(t){return!!(t&&t.__v_isShallow)}function Pf(t){return t?!!t.__v_raw:!1}function Se(t){const e=t&&t.__v_raw;return e?Se(e):t}function Y_(t){return Object.isExtensible(t)&&hf(t,"__v_skip",!0),t}const ni=t=>Ve(t)?_i(t):t,al=t=>Ve(t)?Sf(t):t;class Cf{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new tl(()=>e(this._value),()=>lo(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Se(this);return(!e._cacheable||e.effect.dirty)&&Qn(e._value,e._value=e.effect.run())&&lo(e,4),kf(e),e.effect._dirtyLevel>=2&&lo(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function X_(t,e,n=!1){let r,s;const i=pe(t);return i?(r=t,s=Nt):(r=t.get,s=t.set),new Cf(r,s,i||!s,n)}function kf(t){var e;jn&&fr&&(t=Se(t),yf(fr,(e=t.dep)!=null?e:t.dep=Ef(()=>t.dep=void 0,t instanceof Cf?t:void 0)))}function lo(t,e=4,n,r){t=Se(t);const s=t.dep;s&&vf(s,e)}function Tt(t){return!!(t&&t.__v_isRef===!0)}function Ye(t){return Of(t,!1)}function Z_(t){return Of(t,!0)}function Of(t,e){return Tt(t)?t:new ey(t,e)}class ey{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Se(e),this._value=n?e:ni(e)}get value(){return kf(this),this._value}set value(e){const n=this.__v_isShallow||Xr(e)||gr(e);e=n?e:Se(e),Qn(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:ni(e),lo(this,4))}}function bt(t){return Tt(t)?t.value:t}const ty={get:(t,e,n)=>bt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Tt(s)&&!Tt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Vf(t){return Ks(t)?t:new Proxy(t,ty)}/**
* @vue/runtime-core v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qn(t,e,n,r){try{return r?t(...r):t()}catch(s){ta(s,e,n)}}function Bt(t,e,n,r){if(pe(t)){const s=qn(t,e,n,r);return s&&cf(s)&&s.catch(i=>{ta(i,e,n)}),s}if(ce(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Bt(t[i],e,n,r));return s}}function ta(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const a=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const h=i.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](t,a,c)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Zn(),qn(l,null,10,[t,a,c]),er();return}}ny(t,n,s,r)}function ny(t,e,n,r=!0){console.error(t)}let ri=!1,fc=!1;const ut=[];let Gt=0;const Kr=[];let Vn=null,ur=0;const Nf=Promise.resolve();let cl=null;function ll(t){const e=cl||Nf;return t?e.then(this?t.bind(this):t):e}function ry(t){let e=Gt+1,n=ut.length;for(;e<n;){const r=e+n>>>1,s=ut[r],i=si(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function ul(t){(!ut.length||!ut.includes(t,ri&&t.allowRecurse?Gt+1:Gt))&&(t.id==null?ut.push(t):ut.splice(ry(t.id),0,t),Df())}function Df(){!ri&&!fc&&(fc=!0,cl=Nf.then(xf))}function sy(t){const e=ut.indexOf(t);e>Gt&&ut.splice(e,1)}function iy(t){ce(t)?Kr.push(...t):(!Vn||!Vn.includes(t,t.allowRecurse?ur+1:ur))&&Kr.push(t),Df()}function oh(t,e,n=ri?Gt+1:0){for(;n<ut.length;n++){const r=ut[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;ut.splice(n,1),n--,r()}}}function Mf(t){if(Kr.length){const e=[...new Set(Kr)].sort((n,r)=>si(n)-si(r));if(Kr.length=0,Vn){Vn.push(...e);return}for(Vn=e,ur=0;ur<Vn.length;ur++){const n=Vn[ur];n.active!==!1&&n()}Vn=null,ur=0}}const si=t=>t.id==null?1/0:t.id,oy=(t,e)=>{const n=si(t)-si(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function xf(t){fc=!1,ri=!0,ut.sort(oy);try{for(Gt=0;Gt<ut.length;Gt++){const e=ut[Gt];e&&e.active!==!1&&qn(e,e.i,e.i?15:14)}}finally{Gt=0,ut.length=0,Mf(),ri=!1,cl=null,(ut.length||Kr.length)&&xf()}}let St=null,na=null;function bo(t){const e=St;return St=t,na=t&&t.type.__scopeId||null,e}function yi(t){na=t}function vi(){na=null}function _r(t,e=St,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&mh(-1);const i=bo(e);let a;try{a=t(...s)}finally{bo(i),r._d&&mh(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Hn(t,e){if(St===null)return t;const n=aa(St),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,c,l=De]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&Mn(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function ar(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];i&&(c.oldValue=i[a].value);let l=c.dir[r];l&&(Zn(),Bt(l,n,8,[t.el,c,t,e]),er())}}function Lf(t,e){t.shapeFlag&6&&t.component?Lf(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function us(t,e){return pe(t)?dt({name:t.name},e,{setup:t}):t}const uo=t=>!!t.type.__asyncLoader,Ff=t=>t.type.__isKeepAlive;function ay(t,e){Uf(t,"a",e)}function cy(t,e){Uf(t,"da",e)}function Uf(t,e,n=ht){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ra(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ff(s.parent.vnode)&&ly(r,e,n,s),s=s.parent}}function ly(t,e,n,r){const s=ra(e,t,r,!0);Bf(()=>{Yc(r[e],s)},n)}function ra(t,e,n=ht,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{Zn();const c=Ei(n),l=Bt(e,n,t,a);return c(),er(),l});return r?s.unshift(i):s.push(i),i}}const In=t=>(e,n=ht)=>{(!oa||t==="sp")&&ra(t,(...r)=>e(...r),n)},uy=In("bm"),hl=In("m"),hy=In("bu"),dy=In("u"),fy=In("bum"),Bf=In("um"),py=In("sp"),my=In("rtg"),gy=In("rtc");function _y(t,e=ht){ra("ec",t,e)}const yy="components";function hs(t,e){return Ey(yy,t,!0,e)||t}const vy=Symbol.for("v-ndc");function Ey(t,e,n=!0,r=!1){const s=St||ht;if(s){const i=s.type;{const c=uv(i,!1);if(c&&(c===e||c===jt(e)||c===Xo(jt(e))))return i}const a=ah(s[t]||i[t],e)||ah(s.appContext[t],e);return!a&&r?i:a}}function ah(t,e){return t&&(t[e]||t[jt(e)]||t[Xo(jt(e))])}function zs(t,e,n,r){let s;const i=n;if(ce(t)||Qe(t)){s=new Array(t.length);for(let a=0,c=t.length;a<c;a++)s[a]=e(t[a],a,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(Ve(t))if(t[Symbol.iterator])s=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const h=a[c];s[c]=e(t[h],h,c,i)}}else s=[];return s}const pc=t=>t?ip(t)?aa(t):pc(t.parent):null,Ws=dt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>pc(t.parent),$root:t=>pc(t.root),$emit:t=>t.emit,$options:t=>dl(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,ul(t.update)}),$nextTick:t=>t.n||(t.n=ll.bind(t.proxy)),$watch:t=>qy.bind(t)}),qa=(t,e)=>t!==De&&!t.__isScriptSetup&&Ie(t,e),Ty={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const A=a[e];if(A!==void 0)switch(A){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(qa(r,e))return a[e]=1,r[e];if(s!==De&&Ie(s,e))return a[e]=2,s[e];if((h=t.propsOptions[0])&&Ie(h,e))return a[e]=3,i[e];if(n!==De&&Ie(n,e))return a[e]=4,n[e];mc&&(a[e]=0)}}const f=Ws[e];let p,g;if(f)return e==="$attrs"&&Et(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==De&&Ie(n,e))return a[e]=4,n[e];if(g=l.config.globalProperties,Ie(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return qa(s,e)?(s[e]=n,!0):r!==De&&Ie(r,e)?(r[e]=n,!0):Ie(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let c;return!!n[a]||t!==De&&Ie(t,a)||qa(e,a)||(c=i[0])&&Ie(c,a)||Ie(r,a)||Ie(Ws,a)||Ie(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ie(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ch(t){return ce(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let mc=!0;function Iy(t){const e=dl(t),n=t.proxy,r=t.ctx;mc=!1,e.beforeCreate&&lh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:c,provide:l,inject:h,created:f,beforeMount:p,mounted:g,beforeUpdate:A,updated:O,activated:k,deactivated:V,beforeDestroy:B,beforeUnmount:$,destroyed:K,unmounted:Y,render:Z,renderTracked:J,renderTriggered:T,errorCaptured:_,serverPrefetch:E,expose:w,inheritAttrs:R,components:b,directives:v,filters:Xe}=e;if(h&&wy(h,r,null),a)for(const Ee in a){const ye=a[Ee];pe(ye)&&(r[Ee]=ye.bind(n))}if(s){const Ee=s.call(n,n);Ve(Ee)&&(t.data=_i(Ee))}if(mc=!0,i)for(const Ee in i){const ye=i[Ee],pt=pe(ye)?ye.bind(n,n):pe(ye.get)?ye.get.bind(n,n):Nt,Kt=!pe(ye)&&pe(ye.set)?ye.set.bind(n):Nt,wt=Ft({get:pt,set:Kt});Object.defineProperty(r,Ee,{enumerable:!0,configurable:!0,get:()=>wt.value,set:xe=>wt.value=xe})}if(c)for(const Ee in c)$f(c[Ee],r,n,Ee);if(l){const Ee=pe(l)?l.call(n):l;Reflect.ownKeys(Ee).forEach(ye=>{ho(ye,Ee[ye])})}f&&lh(f,t,"c");function Ue(Ee,ye){ce(ye)?ye.forEach(pt=>Ee(pt.bind(n))):ye&&Ee(ye.bind(n))}if(Ue(uy,p),Ue(hl,g),Ue(hy,A),Ue(dy,O),Ue(ay,k),Ue(cy,V),Ue(_y,_),Ue(gy,J),Ue(my,T),Ue(fy,$),Ue(Bf,Y),Ue(py,E),ce(w))if(w.length){const Ee=t.exposed||(t.exposed={});w.forEach(ye=>{Object.defineProperty(Ee,ye,{get:()=>n[ye],set:pt=>n[ye]=pt})})}else t.exposed||(t.exposed={});Z&&t.render===Nt&&(t.render=Z),R!=null&&(t.inheritAttrs=R),b&&(t.components=b),v&&(t.directives=v)}function wy(t,e,n=Nt){ce(t)&&(t=gc(t));for(const r in t){const s=t[r];let i;Ve(s)?"default"in s?i=Jt(s.from||r,s.default,!0):i=Jt(s.from||r):i=Jt(s),Tt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function lh(t,e,n){Bt(ce(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function $f(t,e,n,r){const s=r.includes(".")?tp(n,r):()=>n[r];if(Qe(t)){const i=e[t];pe(i)&&fo(s,i)}else if(pe(t))fo(s,t.bind(n));else if(Ve(t))if(ce(t))t.forEach(i=>$f(i,e,n,r));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&fo(s,i,t)}}function dl(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>So(l,h,a,!0)),So(l,e,a)),Ve(e)&&i.set(e,l),l}function So(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&So(t,i,n,!0),s&&s.forEach(a=>So(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const c=Ay[a]||n&&n[a];t[a]=c?c(t[a],e[a]):e[a]}return t}const Ay={data:uh,props:hh,emits:hh,methods:Ls,computed:Ls,beforeCreate:_t,created:_t,beforeMount:_t,mounted:_t,beforeUpdate:_t,updated:_t,beforeDestroy:_t,beforeUnmount:_t,destroyed:_t,unmounted:_t,activated:_t,deactivated:_t,errorCaptured:_t,serverPrefetch:_t,components:Ls,directives:Ls,watch:by,provide:uh,inject:Ry};function uh(t,e){return e?t?function(){return dt(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function Ry(t,e){return Ls(gc(t),gc(e))}function gc(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function _t(t,e){return t?[...new Set([].concat(t,e))]:e}function Ls(t,e){return t?dt(Object.create(null),t,e):e}function hh(t,e){return t?ce(t)&&ce(e)?[...new Set([...t,...e])]:dt(Object.create(null),ch(t),ch(e??{})):e}function by(t,e){if(!t)return e;if(!e)return t;const n=dt(Object.create(null),t);for(const r in e)n[r]=_t(t[r],e[r]);return n}function jf(){return{app:null,config:{isNativeTag:m_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Sy=0;function Py(t,e){return function(r,s=null){pe(r)||(r=dt({},r)),s!=null&&!Ve(s)&&(s=null);const i=jf(),a=new WeakSet;let c=!1;const l=i.app={_uid:Sy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:dv,get config(){return i.config},set config(h){},use(h,...f){return a.has(h)||(h&&pe(h.install)?(a.add(h),h.install(l,...f)):pe(h)&&(a.add(h),h(l,...f))),l},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),l},component(h,f){return f?(i.components[h]=f,l):i.components[h]},directive(h,f){return f?(i.directives[h]=f,l):i.directives[h]},mount(h,f,p){if(!c){const g=ze(r,s);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),f&&e?e(g,h):t(g,h,p),c=!0,l._container=h,h.__vue_app__=l,aa(g.component)}},unmount(){c&&(t(null,l._container),delete l._container.__vue_app__)},provide(h,f){return i.provides[h]=f,l},runWithContext(h){const f=zr;zr=l;try{return h()}finally{zr=f}}};return l}}let zr=null;function ho(t,e){if(ht){let n=ht.provides;const r=ht.parent&&ht.parent.provides;r===n&&(n=ht.provides=Object.create(r)),n[t]=e}}function Jt(t,e,n=!1){const r=ht||St;if(r||zr){const s=zr?zr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&pe(e)?e.call(r&&r.proxy):e}}const qf={},Hf=()=>Object.create(qf),Kf=t=>Object.getPrototypeOf(t)===qf;function Cy(t,e,n,r=!1){const s={},i=Hf();t.propsDefaults=Object.create(null),zf(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:J_(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function ky(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,c=Se(s),[l]=t.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(sa(t.emitsOptions,g))continue;const A=e[g];if(l)if(Ie(i,g))A!==i[g]&&(i[g]=A,h=!0);else{const O=jt(g);s[O]=_c(l,c,O,A,t,!1)}else A!==i[g]&&(i[g]=A,h=!0)}}}else{zf(t,e,s,i)&&(h=!0);let f;for(const p in c)(!e||!Ie(e,p)&&((f=br(p))===p||!Ie(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=_c(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Ie(e,p))&&(delete i[p],h=!0)}h&&fn(t.attrs,"set","")}function zf(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,c;if(e)for(let l in e){if(Hs(l))continue;const h=e[l];let f;s&&Ie(s,f=jt(l))?!i||!i.includes(f)?n[f]=h:(c||(c={}))[f]=h:sa(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,a=!0)}if(i){const l=Se(n),h=c||De;for(let f=0;f<i.length;f++){const p=i[f];n[p]=_c(s,l,p,h[p],t,!Ie(h,p))}}return a}function _c(t,e,n,r,s,i){const a=t[n];if(a!=null){const c=Ie(a,"default");if(c&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&pe(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=Ei(s);r=h[n]=l.call(null,e),f()}}else r=l}a[0]&&(i&&!c?r=!1:a[1]&&(r===""||r===br(n))&&(r=!0))}return r}const Oy=new WeakMap;function Wf(t,e,n=!1){const r=n?Oy:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},c=[];let l=!1;if(!pe(t)){const f=p=>{l=!0;const[g,A]=Wf(p,e,!0);dt(a,g),A&&c.push(...A)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Ve(t)&&r.set(t,qr),qr;if(ce(i))for(let f=0;f<i.length;f++){const p=jt(i[f]);dh(p)&&(a[p]=De)}else if(i)for(const f in i){const p=jt(f);if(dh(p)){const g=i[f],A=a[p]=ce(g)||pe(g)?{type:g}:dt({},g),O=A.type;let k=!1,V=!0;if(ce(O))for(let B=0;B<O.length;++B){const $=O[B],K=pe($)&&$.name;if(K==="Boolean"){k=!0;break}else K==="String"&&(V=!1)}else k=pe(O)&&O.name==="Boolean";A[0]=k,A[1]=V,(k||Ie(A,"default"))&&c.push(p)}}const h=[a,c];return Ve(t)&&r.set(t,h),h}function dh(t){return t[0]!=="$"&&!Hs(t)}const Gf=t=>t[0]==="_"||t==="$stable",fl=t=>ce(t)?t.map(Wt):[Wt(t)],Vy=(t,e,n)=>{if(e._n)return e;const r=_r((...s)=>fl(e(...s)),n);return r._c=!1,r},Qf=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Gf(s))continue;const i=t[s];if(pe(i))e[s]=Vy(s,i,r);else if(i!=null){const a=fl(i);e[s]=()=>a}}},Jf=(t,e)=>{const n=fl(e);t.slots.default=()=>n},Yf=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Ny=(t,e,n)=>{const r=t.slots=Hf();if(t.vnode.shapeFlag&32){const s=e._;s?(Yf(r,e,n),n&&hf(r,"_",s,!0)):Qf(e,r)}else e&&Jf(t,e)},Dy=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=De;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Yf(s,e,n):(i=!e.$stable,Qf(e,s)),a=e}else e&&(Jf(t,e),a={default:1});if(i)for(const c in s)!Gf(c)&&a[c]==null&&delete s[c]};function yc(t,e,n,r,s=!1){if(ce(t)){t.forEach((g,A)=>yc(g,e&&(ce(e)?e[A]:e),n,r,s));return}if(uo(r)&&!s)return;const i=r.shapeFlag&4?aa(r.component):r.el,a=s?null:i,{i:c,r:l}=t,h=e&&e.r,f=c.refs===De?c.refs={}:c.refs,p=c.setupState;if(h!=null&&h!==l&&(Qe(h)?(f[h]=null,Ie(p,h)&&(p[h]=null)):Tt(h)&&(h.value=null)),pe(l))qn(l,c,12,[a,f]);else{const g=Qe(l),A=Tt(l);if(g||A){const O=()=>{if(t.f){const k=g?Ie(p,l)?p[l]:f[l]:l.value;s?ce(k)&&Yc(k,i):ce(k)?k.includes(i)||k.push(i):g?(f[l]=[i],Ie(p,l)&&(p[l]=f[l])):(l.value=[i],t.k&&(f[t.k]=l.value))}else g?(f[l]=a,Ie(p,l)&&(p[l]=a)):A&&(l.value=a,t.k&&(f[t.k]=a))};a?(O.id=-1,yt(O,n)):O()}}}const My=Symbol("_vte"),xy=t=>t.__isTeleport,yt=Yy;function Ly(t){return Fy(t)}function Fy(t,e){const n=df();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:c,createComment:l,setText:h,setElementText:f,parentNode:p,nextSibling:g,setScopeId:A=Nt,insertStaticContent:O}=t,k=(y,I,P,L=null,D=null,U=null,W=void 0,j=null,H=!!I.dynamicChildren)=>{if(y===I)return;y&&!Ds(y,I)&&(L=z(y),xe(y,D,U,!0),y=null),I.patchFlag===-2&&(H=!1,I.dynamicChildren=null);const{type:F,ref:Q,shapeFlag:re}=I;switch(F){case ia:V(y,I,P,L);break;case yr:B(y,I,P,L);break;case za:y==null&&$(I,P,L,W);break;case vt:b(y,I,P,L,D,U,W,j,H);break;default:re&1?Z(y,I,P,L,D,U,W,j,H):re&6?v(y,I,P,L,D,U,W,j,H):(re&64||re&128)&&F.process(y,I,P,L,D,U,W,j,H,Re)}Q!=null&&D&&yc(Q,y&&y.ref,U,I||y,!I)},V=(y,I,P,L)=>{if(y==null)r(I.el=c(I.children),P,L);else{const D=I.el=y.el;I.children!==y.children&&h(D,I.children)}},B=(y,I,P,L)=>{y==null?r(I.el=l(I.children||""),P,L):I.el=y.el},$=(y,I,P,L)=>{[y.el,y.anchor]=O(y.children,I,P,L,y.el,y.anchor)},K=({el:y,anchor:I},P,L)=>{let D;for(;y&&y!==I;)D=g(y),r(y,P,L),y=D;r(I,P,L)},Y=({el:y,anchor:I})=>{let P;for(;y&&y!==I;)P=g(y),s(y),y=P;s(I)},Z=(y,I,P,L,D,U,W,j,H)=>{I.type==="svg"?W="svg":I.type==="math"&&(W="mathml"),y==null?J(I,P,L,D,U,W,j,H):E(y,I,D,U,W,j,H)},J=(y,I,P,L,D,U,W,j)=>{let H,F;const{props:Q,shapeFlag:re,transition:ne,dirs:te}=y;if(H=y.el=a(y.type,U,Q&&Q.is,Q),re&8?f(H,y.children):re&16&&_(y.children,H,null,L,D,Ha(y,U),W,j),te&&ar(y,null,L,"created"),T(H,y,y.scopeId,W,L),Q){for(const be in Q)be!=="value"&&!Hs(be)&&i(H,be,null,Q[be],U,L);"value"in Q&&i(H,"value",null,Q.value,U),(F=Q.onVnodeBeforeMount)&&zt(F,L,y)}te&&ar(y,null,L,"beforeMount");const oe=Uy(D,ne);oe&&ne.beforeEnter(H),r(H,I,P),((F=Q&&Q.onVnodeMounted)||oe||te)&&yt(()=>{F&&zt(F,L,y),oe&&ne.enter(H),te&&ar(y,null,L,"mounted")},D)},T=(y,I,P,L,D)=>{if(P&&A(y,P),L)for(let U=0;U<L.length;U++)A(y,L[U]);if(D){let U=D.subTree;if(I===U){const W=D.vnode;T(y,W,W.scopeId,W.slotScopeIds,D.parent)}}},_=(y,I,P,L,D,U,W,j,H=0)=>{for(let F=H;F<y.length;F++){const Q=y[F]=j?Nn(y[F]):Wt(y[F]);k(null,Q,I,P,L,D,U,W,j)}},E=(y,I,P,L,D,U,W)=>{const j=I.el=y.el;let{patchFlag:H,dynamicChildren:F,dirs:Q}=I;H|=y.patchFlag&16;const re=y.props||De,ne=I.props||De;let te;if(P&&cr(P,!1),(te=ne.onVnodeBeforeUpdate)&&zt(te,P,I,y),Q&&ar(I,y,P,"beforeUpdate"),P&&cr(P,!0),(re.innerHTML&&ne.innerHTML==null||re.textContent&&ne.textContent==null)&&f(j,""),F?w(y.dynamicChildren,F,j,P,L,Ha(I,D),U):W||ye(y,I,j,null,P,L,Ha(I,D),U,!1),H>0){if(H&16)R(j,re,ne,P,D);else if(H&2&&re.class!==ne.class&&i(j,"class",null,ne.class,D),H&4&&i(j,"style",re.style,ne.style,D),H&8){const oe=I.dynamicProps;for(let be=0;be<oe.length;be++){const Te=oe[be],je=re[Te],At=ne[Te];(At!==je||Te==="value")&&i(j,Te,je,At,D,P)}}H&1&&y.children!==I.children&&f(j,I.children)}else!W&&F==null&&R(j,re,ne,P,D);((te=ne.onVnodeUpdated)||Q)&&yt(()=>{te&&zt(te,P,I,y),Q&&ar(I,y,P,"updated")},L)},w=(y,I,P,L,D,U,W)=>{for(let j=0;j<I.length;j++){const H=y[j],F=I[j],Q=H.el&&(H.type===vt||!Ds(H,F)||H.shapeFlag&70)?p(H.el):P;k(H,F,Q,null,L,D,U,W,!0)}},R=(y,I,P,L,D)=>{if(I!==P){if(I!==De)for(const U in I)!Hs(U)&&!(U in P)&&i(y,U,I[U],null,D,L);for(const U in P){if(Hs(U))continue;const W=P[U],j=I[U];W!==j&&U!=="value"&&i(y,U,j,W,D,L)}"value"in P&&i(y,"value",I.value,P.value,D)}},b=(y,I,P,L,D,U,W,j,H)=>{const F=I.el=y?y.el:c(""),Q=I.anchor=y?y.anchor:c("");let{patchFlag:re,dynamicChildren:ne,slotScopeIds:te}=I;te&&(j=j?j.concat(te):te),y==null?(r(F,P,L),r(Q,P,L),_(I.children||[],P,Q,D,U,W,j,H)):re>0&&re&64&&ne&&y.dynamicChildren?(w(y.dynamicChildren,ne,P,D,U,W,j),(I.key!=null||D&&I===D.subTree)&&Xf(y,I,!0)):ye(y,I,P,Q,D,U,W,j,H)},v=(y,I,P,L,D,U,W,j,H)=>{I.slotScopeIds=j,y==null?I.shapeFlag&512?D.ctx.activate(I,P,L,W,H):Xe(I,P,L,D,U,W,H):Dt(y,I,H)},Xe=(y,I,P,L,D,U,W)=>{const j=y.component=iv(y,L,D);if(Ff(y)&&(j.ctx.renderer=Re),ov(j,!1,W),j.asyncDep){if(D&&D.registerDep(j,Ue,W),!y.el){const H=j.subTree=ze(yr);B(null,H,I,P)}}else Ue(j,y,I,P,D,U,W)},Dt=(y,I,P)=>{const L=I.component=y.component;if(Gy(y,I,P))if(L.asyncDep&&!L.asyncResolved){Ee(L,I,P);return}else L.next=I,sy(L.update),L.effect.dirty=!0,L.update();else I.el=y.el,L.vnode=I},Ue=(y,I,P,L,D,U,W)=>{const j=()=>{if(y.isMounted){let{next:Q,bu:re,u:ne,parent:te,vnode:oe}=y;{const kt=Zf(y);if(kt){Q&&(Q.el=oe.el,Ee(y,Q,W)),kt.asyncDep.then(()=>{y.isUnmounted||j()});return}}let be=Q,Te;cr(y,!1),Q?(Q.el=oe.el,Ee(y,Q,W)):Q=oe,re&&co(re),(Te=Q.props&&Q.props.onVnodeBeforeUpdate)&&zt(Te,te,Q,oe),cr(y,!0);const je=Ka(y),At=y.subTree;y.subTree=je,k(At,je,p(At.el),z(At),y,D,U),Q.el=je.el,be===null&&Qy(y,je.el),ne&&yt(ne,D),(Te=Q.props&&Q.props.onVnodeUpdated)&&yt(()=>zt(Te,te,Q,oe),D)}else{let Q;const{el:re,props:ne}=I,{bm:te,m:oe,parent:be}=y,Te=uo(I);if(cr(y,!1),te&&co(te),!Te&&(Q=ne&&ne.onVnodeBeforeMount)&&zt(Q,be,I),cr(y,!0),re&&fe){const je=()=>{y.subTree=Ka(y),fe(re,y.subTree,y,D,null)};Te?I.type.__asyncLoader().then(()=>!y.isUnmounted&&je()):je()}else{const je=y.subTree=Ka(y);k(null,je,P,L,y,D,U),I.el=je.el}if(oe&&yt(oe,D),!Te&&(Q=ne&&ne.onVnodeMounted)){const je=I;yt(()=>zt(Q,be,je),D)}(I.shapeFlag&256||be&&uo(be.vnode)&&be.vnode.shapeFlag&256)&&y.a&&yt(y.a,D),y.isMounted=!0,I=P=L=null}},H=y.effect=new tl(j,Nt,()=>ul(F),y.scope),F=y.update=()=>{H.dirty&&H.run()};F.i=y,F.id=y.uid,cr(y,!0),F()},Ee=(y,I,P)=>{I.component=y;const L=y.vnode.props;y.vnode=I,y.next=null,ky(y,I.props,L,P),Dy(y,I.children,P),Zn(),oh(y),er()},ye=(y,I,P,L,D,U,W,j,H=!1)=>{const F=y&&y.children,Q=y?y.shapeFlag:0,re=I.children,{patchFlag:ne,shapeFlag:te}=I;if(ne>0){if(ne&128){Kt(F,re,P,L,D,U,W,j,H);return}else if(ne&256){pt(F,re,P,L,D,U,W,j,H);return}}te&8?(Q&16&&X(F,D,U),re!==F&&f(P,re)):Q&16?te&16?Kt(F,re,P,L,D,U,W,j,H):X(F,D,U,!0):(Q&8&&f(P,""),te&16&&_(re,P,L,D,U,W,j,H))},pt=(y,I,P,L,D,U,W,j,H)=>{y=y||qr,I=I||qr;const F=y.length,Q=I.length,re=Math.min(F,Q);let ne;for(ne=0;ne<re;ne++){const te=I[ne]=H?Nn(I[ne]):Wt(I[ne]);k(y[ne],te,P,null,D,U,W,j,H)}F>Q?X(y,D,U,!0,!1,re):_(I,P,L,D,U,W,j,H,re)},Kt=(y,I,P,L,D,U,W,j,H)=>{let F=0;const Q=I.length;let re=y.length-1,ne=Q-1;for(;F<=re&&F<=ne;){const te=y[F],oe=I[F]=H?Nn(I[F]):Wt(I[F]);if(Ds(te,oe))k(te,oe,P,null,D,U,W,j,H);else break;F++}for(;F<=re&&F<=ne;){const te=y[re],oe=I[ne]=H?Nn(I[ne]):Wt(I[ne]);if(Ds(te,oe))k(te,oe,P,null,D,U,W,j,H);else break;re--,ne--}if(F>re){if(F<=ne){const te=ne+1,oe=te<Q?I[te].el:L;for(;F<=ne;)k(null,I[F]=H?Nn(I[F]):Wt(I[F]),P,oe,D,U,W,j,H),F++}}else if(F>ne)for(;F<=re;)xe(y[F],D,U,!0),F++;else{const te=F,oe=F,be=new Map;for(F=oe;F<=ne;F++){const mt=I[F]=H?Nn(I[F]):Wt(I[F]);mt.key!=null&&be.set(mt.key,F)}let Te,je=0;const At=ne-oe+1;let kt=!1,Es=0;const An=new Array(At);for(F=0;F<At;F++)An[F]=0;for(F=te;F<=re;F++){const mt=y[F];if(je>=At){xe(mt,D,U,!0);continue}let Ot;if(mt.key!=null)Ot=be.get(mt.key);else for(Te=oe;Te<=ne;Te++)if(An[Te-oe]===0&&Ds(mt,I[Te])){Ot=Te;break}Ot===void 0?xe(mt,D,U,!0):(An[Ot-oe]=F+1,Ot>=Es?Es=Ot:kt=!0,k(mt,I[Ot],P,null,D,U,W,j,H),je++)}const kr=kt?By(An):qr;for(Te=kr.length-1,F=At-1;F>=0;F--){const mt=oe+F,Ot=I[mt],Or=mt+1<Q?I[mt+1].el:L;An[F]===0?k(null,Ot,P,Or,D,U,W,j,H):kt&&(Te<0||F!==kr[Te]?wt(Ot,P,Or,2):Te--)}}},wt=(y,I,P,L,D=null)=>{const{el:U,type:W,transition:j,children:H,shapeFlag:F}=y;if(F&6){wt(y.component.subTree,I,P,L);return}if(F&128){y.suspense.move(I,P,L);return}if(F&64){W.move(y,I,P,Re);return}if(W===vt){r(U,I,P);for(let re=0;re<H.length;re++)wt(H[re],I,P,L);r(y.anchor,I,P);return}if(W===za){K(y,I,P);return}if(L!==2&&F&1&&j)if(L===0)j.beforeEnter(U),r(U,I,P),yt(()=>j.enter(U),D);else{const{leave:re,delayLeave:ne,afterLeave:te}=j,oe=()=>r(U,I,P),be=()=>{re(U,()=>{oe(),te&&te()})};ne?ne(U,oe,be):be()}else r(U,I,P)},xe=(y,I,P,L=!1,D=!1)=>{const{type:U,props:W,ref:j,children:H,dynamicChildren:F,shapeFlag:Q,patchFlag:re,dirs:ne,cacheIndex:te}=y;if(re===-2&&(D=!1),j!=null&&yc(j,null,P,y,!0),te!=null&&(I.renderCache[te]=void 0),Q&256){I.ctx.deactivate(y);return}const oe=Q&1&&ne,be=!uo(y);let Te;if(be&&(Te=W&&W.onVnodeBeforeUnmount)&&zt(Te,I,y),Q&6)N(y.component,P,L);else{if(Q&128){y.suspense.unmount(P,L);return}oe&&ar(y,null,I,"beforeUnmount"),Q&64?y.type.remove(y,I,P,Re,L):F&&!F.hasOnce&&(U!==vt||re>0&&re&64)?X(F,I,P,!1,!0):(U===vt&&re&384||!D&&Q&16)&&X(H,I,P),L&&Le(y)}(be&&(Te=W&&W.onVnodeUnmounted)||oe)&&yt(()=>{Te&&zt(Te,I,y),oe&&ar(y,null,I,"unmounted")},P)},Le=y=>{const{type:I,el:P,anchor:L,transition:D}=y;if(I===vt){xi(P,L);return}if(I===za){Y(y);return}const U=()=>{s(P),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(y.shapeFlag&1&&D&&!D.persisted){const{leave:W,delayLeave:j}=D,H=()=>W(P,U);j?j(y.el,U,H):H()}else U()},xi=(y,I)=>{let P;for(;y!==I;)P=g(y),s(y),y=P;s(I)},N=(y,I,P)=>{const{bum:L,scope:D,update:U,subTree:W,um:j,m:H,a:F}=y;fh(H),fh(F),L&&co(L),D.stop(),U&&(U.active=!1,xe(W,y,I,P)),j&&yt(j,I),yt(()=>{y.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},X=(y,I,P,L=!1,D=!1,U=0)=>{for(let W=U;W<y.length;W++)xe(y[W],I,P,L,D)},z=y=>{if(y.shapeFlag&6)return z(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const I=g(y.anchor||y.el),P=I&&I[My];return P?g(P):I};let se=!1;const Pe=(y,I,P)=>{y==null?I._vnode&&xe(I._vnode,null,null,!0):k(I._vnode||null,y,I,null,null,null,P),I._vnode=y,se||(se=!0,oh(),Mf(),se=!1)},Re={p:k,um:xe,m:wt,r:Le,mt:Xe,mc:_,pc:ye,pbc:w,n:z,o:t};let me,fe;return{render:Pe,hydrate:me,createApp:Py(Pe,me)}}function Ha({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function cr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Uy(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Xf(t,e,n=!1){const r=t.children,s=e.children;if(ce(r)&&ce(s))for(let i=0;i<r.length;i++){const a=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Nn(s[i]),c.el=a.el),!n&&c.patchFlag!==-2&&Xf(a,c)),c.type===ia&&(c.el=a.el)}}function By(t){const e=t.slice(),n=[0];let r,s,i,a,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)c=i+a>>1,t[n[c]]<h?i=c+1:a=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function Zf(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Zf(e)}function fh(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const $y=Symbol.for("v-scx"),jy=()=>Jt($y),no={};function fo(t,e,n){return ep(t,e,n)}function ep(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:a,onTrigger:c}=De){if(e&&i){const J=e;e=(...T)=>{J(...T),Z()}}const l=ht,h=J=>r===!0?J:Mn(J,r===!1?1:void 0);let f,p=!1,g=!1;if(Tt(t)?(f=()=>t.value,p=Xr(t)):Ks(t)?(f=()=>h(t),p=!0):ce(t)?(g=!0,p=t.some(J=>Ks(J)||Xr(J)),f=()=>t.map(J=>{if(Tt(J))return J.value;if(Ks(J))return h(J);if(pe(J))return qn(J,l,2)})):pe(t)?e?f=()=>qn(t,l,2):f=()=>(A&&A(),Bt(t,l,3,[O])):f=Nt,e&&r){const J=f;f=()=>Mn(J())}let A,O=J=>{A=K.onStop=()=>{qn(J,l,4),A=K.onStop=void 0}},k;if(oa)if(O=Nt,e?n&&Bt(e,l,3,[f(),g?[]:void 0,O]):f(),s==="sync"){const J=jy();k=J.__watcherHandles||(J.__watcherHandles=[])}else return Nt;let V=g?new Array(t.length).fill(no):no;const B=()=>{if(!(!K.active||!K.dirty))if(e){const J=K.run();(r||p||(g?J.some((T,_)=>Qn(T,V[_])):Qn(J,V)))&&(A&&A(),Bt(e,l,3,[J,V===no?void 0:g&&V[0]===no?[]:V,O]),V=J)}else K.run()};B.allowRecurse=!!e;let $;s==="sync"?$=B:s==="post"?$=()=>yt(B,l&&l.suspense):(B.pre=!0,l&&(B.id=l.uid),$=()=>ul(B));const K=new tl(f,Nt,$),Y=k_(),Z=()=>{K.stop(),Y&&Yc(Y.effects,K)};return e?n?B():V=K.run():s==="post"?yt(K.run.bind(K),l&&l.suspense):K.run(),k&&k.push(Z),Z}function qy(t,e,n){const r=this.proxy,s=Qe(t)?t.includes(".")?tp(r,t):()=>r[t]:t.bind(r,r);let i;pe(e)?i=e:(i=e.handler,n=e);const a=Ei(this),c=ep(s,i.bind(r),n);return a(),c}function tp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Mn(t,e=1/0,n){if(e<=0||!Ve(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Tt(t))Mn(t.value,e,n);else if(ce(t))for(let r=0;r<t.length;r++)Mn(t[r],e,n);else if(Jo(t)||Hr(t))t.forEach(r=>{Mn(r,e,n)});else if(uf(t)){for(const r in t)Mn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Mn(t[r],e,n)}return t}const Hy=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${jt(e)}Modifiers`]||t[`${br(e)}Modifiers`];function Ky(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||De;let s=n;const i=e.startsWith("update:"),a=i&&Hy(r,e.slice(7));a&&(a.trim&&(s=n.map(f=>Qe(f)?f.trim():f)),a.number&&(s=n.map(Ro)));let c,l=r[c=$a(e)]||r[c=$a(jt(e))];!l&&i&&(l=r[c=$a(br(e))]),l&&Bt(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Bt(h,t,6,s)}}function np(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},c=!1;if(!pe(t)){const l=h=>{const f=np(h,e,!0);f&&(c=!0,dt(a,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Ve(t)&&r.set(t,null),null):(ce(i)?i.forEach(l=>a[l]=null):dt(a,i),Ve(t)&&r.set(t,a),a)}function sa(t,e){return!t||!Qo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ie(t,e[0].toLowerCase()+e.slice(1))||Ie(t,br(e))||Ie(t,e))}function Ka(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:c,emit:l,render:h,renderCache:f,props:p,data:g,setupState:A,ctx:O,inheritAttrs:k}=t,V=bo(t);let B,$;try{if(n.shapeFlag&4){const Y=s||r,Z=Y;B=Wt(h.call(Z,Y,f,p,A,g,O)),$=c}else{const Y=e;B=Wt(Y.length>1?Y(p,{attrs:c,slots:a,emit:l}):Y(p,null)),$=e.props?c:zy(c)}}catch(Y){Gs.length=0,ta(Y,t,1),B=ze(yr)}let K=B;if($&&k!==!1){const Y=Object.keys($),{shapeFlag:Z}=K;Y.length&&Z&7&&(i&&Y.some(Jc)&&($=Wy($,i)),K=Zr(K,$,!1,!0))}return n.dirs&&(K=Zr(K,null,!1,!0),K.dirs=K.dirs?K.dirs.concat(n.dirs):n.dirs),n.transition&&(K.transition=n.transition),B=K,bo(V),B}const zy=t=>{let e;for(const n in t)(n==="class"||n==="style"||Qo(n))&&((e||(e={}))[n]=t[n]);return e},Wy=(t,e)=>{const n={};for(const r in t)(!Jc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Gy(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ph(r,a,h):!!a;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(a[g]!==r[g]&&!sa(h,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?ph(r,a,h):!0:!!a;return!1}function ph(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!sa(n,i))return!0}return!1}function Qy({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Jy=t=>t.__isSuspense;function Yy(t,e){e&&e.pendingBranch?ce(t)?e.effects.push(...t):e.effects.push(t):iy(t)}const vt=Symbol.for("v-fgt"),ia=Symbol.for("v-txt"),yr=Symbol.for("v-cmt"),za=Symbol.for("v-stc"),Gs=[];let Pt=null;function $e(t=!1){Gs.push(Pt=t?null:[])}function Xy(){Gs.pop(),Pt=Gs[Gs.length-1]||null}let ii=1;function mh(t){ii+=t,t<0&&Pt&&(Pt.hasOnce=!0)}function rp(t){return t.dynamicChildren=ii>0?Pt||qr:null,Xy(),ii>0&&Pt&&Pt.push(t),t}function qe(t,e,n,r,s,i){return rp(G(t,e,n,r,s,i,!0))}function Zy(t,e,n,r,s){return rp(ze(t,e,n,r,s,!0))}function vc(t){return t?t.__v_isVNode===!0:!1}function Ds(t,e){return t.type===e.type&&t.key===e.key}const sp=({key:t})=>t??null,po=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Qe(t)||Tt(t)||pe(t)?{i:St,r:t,k:e,f:!!n}:t:null);function G(t,e=null,n=null,r=0,s=null,i=t===vt?0:1,a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&sp(e),ref:e&&po(e),scopeId:na,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:St};return c?(pl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Qe(n)?8:16),ii>0&&!a&&Pt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Pt.push(l),l}const ze=ev;function ev(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===vy)&&(t=yr),vc(t)){const c=Zr(t,e,!0);return n&&pl(c,n),ii>0&&!i&&Pt&&(c.shapeFlag&6?Pt[Pt.indexOf(t)]=c:Pt.push(c)),c.patchFlag=-2,c}if(hv(t)&&(t=t.__vccOpts),e){e=tv(e);let{class:c,style:l}=e;c&&!Qe(c)&&(e.class=el(c)),Ve(l)&&(Pf(l)&&!ce(l)&&(l=dt({},l)),e.style=Zc(l))}const a=Qe(t)?1:Jy(t)?128:xy(t)?64:Ve(t)?4:pe(t)?2:0;return G(t,e,n,r,s,a,i,!0)}function tv(t){return t?Pf(t)||Kf(t)?dt({},t):t:null}function Zr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:c,transition:l}=t,h=e?nv(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&sp(h),ref:e&&e.ref?n&&i?ce(i)?i.concat(po(e)):[i,po(e)]:po(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==vt?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Zr(t.ssContent),ssFallback:t.ssFallback&&Zr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Lf(f,l.clone(f)),f}function pn(t=" ",e=0){return ze(ia,null,t,e)}function $r(t="",e=!1){return e?($e(),Zy(yr,null,t)):ze(yr,null,t)}function Wt(t){return t==null||typeof t=="boolean"?ze(yr):ce(t)?ze(vt,null,t.slice()):typeof t=="object"?Nn(t):ze(ia,null,String(t))}function Nn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Zr(t)}function pl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ce(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),pl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Kf(e)?e._ctx=St:s===3&&St&&(St.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:St},n=32):(e=String(e),r&64?(n=16,e=[pn(e)]):n=8);t.children=e,t.shapeFlag|=n}function nv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=el([e.class,r.class]));else if(s==="style")e.style=Zc([e.style,r.style]);else if(Qo(s)){const i=e[s],a=r[s];a&&i!==a&&!(ce(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function zt(t,e,n,r=null){Bt(t,e,7,[n,r])}const rv=jf();let sv=0;function iv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||rv,i={uid:sv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new P_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wf(r,s),emitsOptions:np(r,s),emit:null,emitted:null,propsDefaults:De,inheritAttrs:r.inheritAttrs,ctx:De,data:De,props:De,attrs:De,slots:De,refs:De,setupState:De,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ky.bind(null,i),t.ce&&t.ce(i),i}let ht=null,Po,Ec;{const t=df(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Po=e("__VUE_INSTANCE_SETTERS__",n=>ht=n),Ec=e("__VUE_SSR_SETTERS__",n=>oa=n)}const Ei=t=>{const e=ht;return Po(t),t.scope.on(),()=>{t.scope.off(),Po(e)}},gh=()=>{ht&&ht.scope.off(),Po(null)};function ip(t){return t.vnode.shapeFlag&4}let oa=!1;function ov(t,e=!1,n=!1){e&&Ec(e);const{props:r,children:s}=t.vnode,i=ip(t);Cy(t,r,i,e),Ny(t,s,n);const a=i?av(t,e):void 0;return e&&Ec(!1),a}function av(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Ty);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?lv(t):null,i=Ei(t);Zn();const a=qn(r,t,0,[t.props,s]);if(er(),i(),cf(a)){if(a.then(gh,gh),e)return a.then(c=>{_h(t,c,e)}).catch(c=>{ta(c,t,0)});t.asyncDep=a}else _h(t,a,e)}else op(t,e)}function _h(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ve(e)&&(t.setupState=Vf(e)),op(t,n)}let yh;function op(t,e,n){const r=t.type;if(!t.render){if(!e&&yh&&!r.render){const s=r.template||dl(t).template;if(s){const{isCustomElement:i,compilerOptions:a}=t.appContext.config,{delimiters:c,compilerOptions:l}=r,h=dt(dt({isCustomElement:i,delimiters:c},a),l);r.render=yh(s,h)}}t.render=r.render||Nt}{const s=Ei(t);Zn();try{Iy(t)}finally{er(),s()}}}const cv={get(t,e){return Et(t,"get",""),t[e]}};function lv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,cv),slots:t.slots,emit:t.emit,expose:e}}function aa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Vf(Y_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ws)return Ws[n](t)},has(e,n){return n in e||n in Ws}})):t.proxy}function uv(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function hv(t){return pe(t)&&"__vccOpts"in t}const Ft=(t,e)=>X_(t,e,oa);function ap(t,e,n){const r=arguments.length;return r===2?Ve(e)&&!ce(e)?vc(e)?ze(t,null,[e]):ze(t,e):ze(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&vc(n)&&(n=[n]),ze(t,e,n))}const dv="3.4.38";/**
* @vue/runtime-dom v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const fv="http://www.w3.org/2000/svg",pv="http://www.w3.org/1998/Math/MathML",cn=typeof document<"u"?document:null,vh=cn&&cn.createElement("template"),mv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?cn.createElementNS(fv,t):e==="mathml"?cn.createElementNS(pv,t):n?cn.createElement(t,{is:n}):cn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>cn.createTextNode(t),createComment:t=>cn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>cn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{vh.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const c=vh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},gv=Symbol("_vtc");function _v(t,e,n){const r=t[gv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Eh=Symbol("_vod"),yv=Symbol("_vsh"),vv=Symbol(""),Ev=/(^|;)\s*display\s*:/;function Tv(t,e,n){const r=t.style,s=Qe(n);let i=!1;if(n&&!s){if(e)if(Qe(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();n[c]==null&&mo(r,c,"")}else for(const a in e)n[a]==null&&mo(r,a,"");for(const a in n)a==="display"&&(i=!0),mo(r,a,n[a])}else if(s){if(e!==n){const a=r[vv];a&&(n+=";"+a),r.cssText=n,i=Ev.test(n)}}else e&&t.removeAttribute("style");Eh in t&&(t[Eh]=i?r.display:"",t[yv]&&(r.display="none"))}const Th=/\s*!important$/;function mo(t,e,n){if(ce(n))n.forEach(r=>mo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Iv(t,e);Th.test(n)?t.setProperty(br(r),n.replace(Th,""),"important"):t[r]=n}}const Ih=["Webkit","Moz","ms"],Wa={};function Iv(t,e){const n=Wa[e];if(n)return n;let r=jt(e);if(r!=="filter"&&r in t)return Wa[e]=r;r=Xo(r);for(let s=0;s<Ih.length;s++){const i=Ih[s]+r;if(i in t)return Wa[e]=i}return e}const wh="http://www.w3.org/1999/xlink";function Ah(t,e,n,r,s,i=R_(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(wh,e.slice(6,e.length)):t.setAttributeNS(wh,e,n):n==null||i&&!ff(n)?t.removeAttribute(e):t.setAttribute(e,i?"":tn(n)?String(n):n)}function wv(t,e,n,r){if(e==="innerHTML"||e==="textContent"){if(n==null)return;t[e]=n;return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let i=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=ff(n):n==null&&a==="string"?(n="",i=!0):a==="number"&&(n=0,i=!0)}try{t[e]=n}catch{}i&&t.removeAttribute(e)}function hr(t,e,n,r){t.addEventListener(e,n,r)}function Av(t,e,n,r){t.removeEventListener(e,n,r)}const Rh=Symbol("_vei");function Rv(t,e,n,r,s=null){const i=t[Rh]||(t[Rh]={}),a=i[e];if(r&&a)a.value=r;else{const[c,l]=bv(e);if(r){const h=i[e]=Cv(r,s);hr(t,c,h,l)}else a&&(Av(t,c,a,l),i[e]=void 0)}}const bh=/(?:Once|Passive|Capture)$/;function bv(t){let e;if(bh.test(t)){e={};let r;for(;r=t.match(bh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):br(t.slice(2)),e]}let Ga=0;const Sv=Promise.resolve(),Pv=()=>Ga||(Sv.then(()=>Ga=0),Ga=Date.now());function Cv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Bt(kv(r,n.value),e,5,[r])};return n.value=t,n.attached=Pv(),n}function kv(t,e){if(ce(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Sh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Ov=(t,e,n,r,s,i)=>{const a=s==="svg";e==="class"?_v(t,r,a):e==="style"?Tv(t,n,r):Qo(e)?Jc(e)||Rv(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Vv(t,e,r,a))?(wv(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ah(t,e,r,a,i,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Ah(t,e,r,a))};function Vv(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Sh(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Sh(e)&&Qe(n)?!1:e in t}const Co=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ce(e)?n=>co(e,n):e};function Nv(t){t.target.composing=!0}function Ph(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Wr=Symbol("_assign"),vr={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Wr]=Co(s);const i=r||s.props&&s.props.type==="number";hr(t,e?"change":"input",a=>{if(a.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=Ro(c)),t[Wr](c)}),n&&hr(t,"change",()=>{t.value=t.value.trim()}),e||(hr(t,"compositionstart",Nv),hr(t,"compositionend",Ph),hr(t,"change",Ph))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(t[Wr]=Co(a),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ro(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},Dv={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Jo(e);hr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,a=>a.selected).map(a=>n?Ro(ko(a)):ko(a));t[Wr](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,ll(()=>{t._assigning=!1})}),t[Wr]=Co(r)},mounted(t,{value:e,modifiers:{number:n}}){Ch(t,e)},beforeUpdate(t,e,n){t[Wr]=Co(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||Ch(t,e)}};function Ch(t,e,n){const r=t.multiple,s=ce(e);if(!(r&&!s&&!Jo(e))){for(let i=0,a=t.options.length;i<a;i++){const c=t.options[i],l=ko(c);if(r)if(s){const h=typeof l;h==="string"||h==="number"?c.selected=e.some(f=>String(f)===String(l)):c.selected=S_(e,l)>-1}else c.selected=e.has(l);else if(Zo(ko(c),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!r&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ko(t){return"_value"in t?t._value:t.value}const Mv=["ctrl","shift","alt","meta"],xv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Mv.some(n=>t[`${n}Key`]&&!e.includes(n))},Oo=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const c=xv[e[a]];if(c&&c(s,e))return}return t(s,...i)})},Lv=dt({patchProp:Ov},mv);let kh;function Fv(){return kh||(kh=Ly(Lv))}const Uv=(...t)=>{const e=Fv().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=$v(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const a=n(s,!1,Bv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function Bv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function $v(t){return Qe(t)?document.querySelector(t):t}var Oh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},jv=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},lp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,c=a?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|h>>6,A=h&63;l||(A=64,a||(g=64)),r.push(n[f],n[p],n[g],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(cp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new qv;const g=i<<2|c>>4;if(r.push(g),h!==64){const A=c<<4&240|h>>2;if(r.push(A),p!==64){const O=h<<6&192|p;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class qv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hv=function(t){const e=cp(t);return lp.encodeByteArray(e,!0)},Vo=function(t){return Hv(t).replace(/\./g,"")},up=function(t){try{return lp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv=()=>Kv().__FIREBASE_DEFAULTS__,Wv=()=>{if(typeof process>"u"||typeof Oh>"u")return;const t=Oh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Gv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&up(t[1]);return e&&JSON.parse(e)},ca=()=>{try{return zv()||Wv()||Gv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},hp=t=>{var e,n;return(n=(e=ca())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Qv=t=>{const e=hp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},dp=()=>{var t;return(t=ca())===null||t===void 0?void 0:t.config},fp=t=>{var e;return(e=ca())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Vo(JSON.stringify(n)),Vo(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())}function Zv(){var t;const e=(t=ca())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function eE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function tE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nE(){const t=ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function rE(){return!Zv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function sE(){try{return typeof indexedDB=="object"}catch{return!1}}function iE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE="FirebaseError";class wn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=oE,Object.setPrototypeOf(this,wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ti.prototype.create)}}class Ti{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?aE(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new wn(s,c,r)}}function aE(t,e){return t.replace(cE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const cE=/\{\$([^}]+)}/g;function lE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function No(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(Vh(i)&&Vh(a)){if(!No(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Vh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Fs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Us(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function uE(t,e){const n=new hE(t,e);return n.subscribe.bind(n)}class hE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");dE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Qa),s.error===void 0&&(s.error=Qa),s.complete===void 0&&(s.complete=Qa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Qa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t){return t&&t._delegate?t._delegate:t}class Er{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Jv;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mE(e))try{this.getOrInitializeService({instanceIdentifier:lr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=lr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=lr){return this.instances.has(e)}getOptions(e=lr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=lr){return this.component?this.component.multipleInstances?e:lr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pE(t){return t===lr?void 0:t}function mE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new fE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const _E={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},yE=_e.INFO,vE={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},EE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=vE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ml{constructor(e){this.name=e,this._logLevel=yE,this._logHandler=EE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_E[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const TE=(t,e)=>e.some(n=>t instanceof n);let Nh,Dh;function IE(){return Nh||(Nh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wE(){return Dh||(Dh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pp=new WeakMap,Tc=new WeakMap,mp=new WeakMap,Ja=new WeakMap,gl=new WeakMap;function AE(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(Kn(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&pp.set(n,t)}).catch(()=>{}),gl.set(e,t),e}function RE(t){if(Tc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});Tc.set(t,e)}let Ic={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Tc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||mp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function bE(t){Ic=t(Ic)}function SE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ya(this),e,...n);return mp.set(r,e.sort?e.sort():[e]),Kn(r)}:wE().includes(t)?function(...e){return t.apply(Ya(this),e),Kn(pp.get(this))}:function(...e){return Kn(t.apply(Ya(this),e))}}function PE(t){return typeof t=="function"?SE(t):(t instanceof IDBTransaction&&RE(t),TE(t,IE())?new Proxy(t,Ic):t)}function Kn(t){if(t instanceof IDBRequest)return AE(t);if(Ja.has(t))return Ja.get(t);const e=PE(t);return e!==t&&(Ja.set(t,e),gl.set(e,t)),e}const Ya=t=>gl.get(t);function CE(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),c=Kn(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Kn(a.result),l.oldVersion,l.newVersion,Kn(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const kE=["get","getKey","getAll","getAllKeys","count"],OE=["put","add","delete","clear"],Xa=new Map;function Mh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Xa.get(e))return Xa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=OE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||kE.includes(n)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return Xa.set(e,i),i}bE(t=>({...t,get:(e,n,r)=>Mh(e,n)||t.get(e,n,r),has:(e,n)=>!!Mh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(NE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function NE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wc="@firebase/app",xh="0.10.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n=new ml("@firebase/app"),DE="@firebase/app-compat",ME="@firebase/analytics-compat",xE="@firebase/analytics",LE="@firebase/app-check-compat",FE="@firebase/app-check",UE="@firebase/auth",BE="@firebase/auth-compat",$E="@firebase/database",jE="@firebase/database-compat",qE="@firebase/functions",HE="@firebase/functions-compat",KE="@firebase/installations",zE="@firebase/installations-compat",WE="@firebase/messaging",GE="@firebase/messaging-compat",QE="@firebase/performance",JE="@firebase/performance-compat",YE="@firebase/remote-config",XE="@firebase/remote-config-compat",ZE="@firebase/storage",eT="@firebase/storage-compat",tT="@firebase/firestore",nT="@firebase/vertexai-preview",rT="@firebase/firestore-compat",sT="firebase",iT="10.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac="[DEFAULT]",oT={[wc]:"fire-core",[DE]:"fire-core-compat",[xE]:"fire-analytics",[ME]:"fire-analytics-compat",[FE]:"fire-app-check",[LE]:"fire-app-check-compat",[UE]:"fire-auth",[BE]:"fire-auth-compat",[$E]:"fire-rtdb",[jE]:"fire-rtdb-compat",[qE]:"fire-fn",[HE]:"fire-fn-compat",[KE]:"fire-iid",[zE]:"fire-iid-compat",[WE]:"fire-fcm",[GE]:"fire-fcm-compat",[QE]:"fire-perf",[JE]:"fire-perf-compat",[YE]:"fire-rc",[XE]:"fire-rc-compat",[ZE]:"fire-gcs",[eT]:"fire-gcs-compat",[tT]:"fire-fst",[rT]:"fire-fst-compat",[nT]:"fire-vertex","fire-js":"fire-js",[sT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=new Map,aT=new Map,Rc=new Map;function Lh(t,e){try{t.container.addComponent(e)}catch(n){_n.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function es(t){const e=t.name;if(Rc.has(e))return _n.debug(`There were multiple attempts to register component ${e}.`),!1;Rc.set(e,t);for(const n of Do.values())Lh(n,t);for(const n of aT.values())Lh(n,t);return!0}function _l(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Qt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zn=new Ti("app","Firebase",cT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Er("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=iT;function gp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ac,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw zn.create("bad-app-name",{appName:String(s)});if(n||(n=dp()),!n)throw zn.create("no-options");const i=Do.get(s);if(i){if(No(n,i.options)&&No(r,i.config))return i;throw zn.create("duplicate-app",{appName:s})}const a=new gE(s);for(const l of Rc.values())a.addComponent(l);const c=new lT(n,r,a);return Do.set(s,c),c}function _p(t=Ac){const e=Do.get(t);if(!e&&t===Ac&&dp())return gp();if(!e)throw zn.create("no-app",{appName:t});return e}function Wn(t,e,n){var r;let s=(r=oT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_n.warn(c.join(" "));return}es(new Er(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT="firebase-heartbeat-database",hT=1,oi="firebase-heartbeat-store";let Za=null;function yp(){return Za||(Za=CE(uT,hT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(oi)}catch(n){console.warn(n)}}}}).catch(t=>{throw zn.create("idb-open",{originalErrorMessage:t.message})})),Za}async function dT(t){try{const n=(await yp()).transaction(oi),r=await n.objectStore(oi).get(vp(t));return await n.done,r}catch(e){if(e instanceof wn)_n.warn(e.message);else{const n=zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_n.warn(n.message)}}}async function Fh(t,e){try{const r=(await yp()).transaction(oi,"readwrite");await r.objectStore(oi).put(e,vp(t)),await r.done}catch(n){if(n instanceof wn)_n.warn(n.message);else{const r=zn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_n.warn(r.message)}}}function vp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT=1024,pT=30*24*60*60*1e3;class mT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _T(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Uh();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=pT}),this._storage.overwrite(this._heartbeatsCache))}catch(r){_n.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Uh(),{heartbeatsToSend:r,unsentEntries:s}=gT(this._heartbeatsCache.heartbeats),i=Vo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return _n.warn(n),""}}}function Uh(){return new Date().toISOString().substring(0,10)}function gT(t,e=fT){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Bh(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Bh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _T{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sE()?iE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await dT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Bh(t){return Vo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yT(t){es(new Er("platform-logger",e=>new VE(e),"PRIVATE")),es(new Er("heartbeat",e=>new mT(e),"PRIVATE")),Wn(wc,xh,t),Wn(wc,xh,"esm2017"),Wn("fire-js","")}yT("");var $h=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mr,Ep;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,_){function E(){}E.prototype=_.prototype,T.D=_.prototype,T.prototype=new E,T.prototype.constructor=T,T.C=function(w,R,b){for(var v=Array(arguments.length-2),Xe=2;Xe<arguments.length;Xe++)v[Xe-2]=arguments[Xe];return _.prototype[R].apply(w,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,_,E){E||(E=0);var w=Array(16);if(typeof _=="string")for(var R=0;16>R;++R)w[R]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(R=0;16>R;++R)w[R]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=T.g[0],E=T.g[1],R=T.g[2];var b=T.g[3],v=_+(b^E&(R^b))+w[0]+3614090360&4294967295;_=E+(v<<7&4294967295|v>>>25),v=b+(R^_&(E^R))+w[1]+3905402710&4294967295,b=_+(v<<12&4294967295|v>>>20),v=R+(E^b&(_^E))+w[2]+606105819&4294967295,R=b+(v<<17&4294967295|v>>>15),v=E+(_^R&(b^_))+w[3]+3250441966&4294967295,E=R+(v<<22&4294967295|v>>>10),v=_+(b^E&(R^b))+w[4]+4118548399&4294967295,_=E+(v<<7&4294967295|v>>>25),v=b+(R^_&(E^R))+w[5]+1200080426&4294967295,b=_+(v<<12&4294967295|v>>>20),v=R+(E^b&(_^E))+w[6]+2821735955&4294967295,R=b+(v<<17&4294967295|v>>>15),v=E+(_^R&(b^_))+w[7]+4249261313&4294967295,E=R+(v<<22&4294967295|v>>>10),v=_+(b^E&(R^b))+w[8]+1770035416&4294967295,_=E+(v<<7&4294967295|v>>>25),v=b+(R^_&(E^R))+w[9]+2336552879&4294967295,b=_+(v<<12&4294967295|v>>>20),v=R+(E^b&(_^E))+w[10]+4294925233&4294967295,R=b+(v<<17&4294967295|v>>>15),v=E+(_^R&(b^_))+w[11]+2304563134&4294967295,E=R+(v<<22&4294967295|v>>>10),v=_+(b^E&(R^b))+w[12]+1804603682&4294967295,_=E+(v<<7&4294967295|v>>>25),v=b+(R^_&(E^R))+w[13]+4254626195&4294967295,b=_+(v<<12&4294967295|v>>>20),v=R+(E^b&(_^E))+w[14]+2792965006&4294967295,R=b+(v<<17&4294967295|v>>>15),v=E+(_^R&(b^_))+w[15]+1236535329&4294967295,E=R+(v<<22&4294967295|v>>>10),v=_+(R^b&(E^R))+w[1]+4129170786&4294967295,_=E+(v<<5&4294967295|v>>>27),v=b+(E^R&(_^E))+w[6]+3225465664&4294967295,b=_+(v<<9&4294967295|v>>>23),v=R+(_^E&(b^_))+w[11]+643717713&4294967295,R=b+(v<<14&4294967295|v>>>18),v=E+(b^_&(R^b))+w[0]+3921069994&4294967295,E=R+(v<<20&4294967295|v>>>12),v=_+(R^b&(E^R))+w[5]+3593408605&4294967295,_=E+(v<<5&4294967295|v>>>27),v=b+(E^R&(_^E))+w[10]+38016083&4294967295,b=_+(v<<9&4294967295|v>>>23),v=R+(_^E&(b^_))+w[15]+3634488961&4294967295,R=b+(v<<14&4294967295|v>>>18),v=E+(b^_&(R^b))+w[4]+3889429448&4294967295,E=R+(v<<20&4294967295|v>>>12),v=_+(R^b&(E^R))+w[9]+568446438&4294967295,_=E+(v<<5&4294967295|v>>>27),v=b+(E^R&(_^E))+w[14]+3275163606&4294967295,b=_+(v<<9&4294967295|v>>>23),v=R+(_^E&(b^_))+w[3]+4107603335&4294967295,R=b+(v<<14&4294967295|v>>>18),v=E+(b^_&(R^b))+w[8]+1163531501&4294967295,E=R+(v<<20&4294967295|v>>>12),v=_+(R^b&(E^R))+w[13]+2850285829&4294967295,_=E+(v<<5&4294967295|v>>>27),v=b+(E^R&(_^E))+w[2]+4243563512&4294967295,b=_+(v<<9&4294967295|v>>>23),v=R+(_^E&(b^_))+w[7]+1735328473&4294967295,R=b+(v<<14&4294967295|v>>>18),v=E+(b^_&(R^b))+w[12]+2368359562&4294967295,E=R+(v<<20&4294967295|v>>>12),v=_+(E^R^b)+w[5]+4294588738&4294967295,_=E+(v<<4&4294967295|v>>>28),v=b+(_^E^R)+w[8]+2272392833&4294967295,b=_+(v<<11&4294967295|v>>>21),v=R+(b^_^E)+w[11]+1839030562&4294967295,R=b+(v<<16&4294967295|v>>>16),v=E+(R^b^_)+w[14]+4259657740&4294967295,E=R+(v<<23&4294967295|v>>>9),v=_+(E^R^b)+w[1]+2763975236&4294967295,_=E+(v<<4&4294967295|v>>>28),v=b+(_^E^R)+w[4]+1272893353&4294967295,b=_+(v<<11&4294967295|v>>>21),v=R+(b^_^E)+w[7]+4139469664&4294967295,R=b+(v<<16&4294967295|v>>>16),v=E+(R^b^_)+w[10]+3200236656&4294967295,E=R+(v<<23&4294967295|v>>>9),v=_+(E^R^b)+w[13]+681279174&4294967295,_=E+(v<<4&4294967295|v>>>28),v=b+(_^E^R)+w[0]+3936430074&4294967295,b=_+(v<<11&4294967295|v>>>21),v=R+(b^_^E)+w[3]+3572445317&4294967295,R=b+(v<<16&4294967295|v>>>16),v=E+(R^b^_)+w[6]+76029189&4294967295,E=R+(v<<23&4294967295|v>>>9),v=_+(E^R^b)+w[9]+3654602809&4294967295,_=E+(v<<4&4294967295|v>>>28),v=b+(_^E^R)+w[12]+3873151461&4294967295,b=_+(v<<11&4294967295|v>>>21),v=R+(b^_^E)+w[15]+530742520&4294967295,R=b+(v<<16&4294967295|v>>>16),v=E+(R^b^_)+w[2]+3299628645&4294967295,E=R+(v<<23&4294967295|v>>>9),v=_+(R^(E|~b))+w[0]+4096336452&4294967295,_=E+(v<<6&4294967295|v>>>26),v=b+(E^(_|~R))+w[7]+1126891415&4294967295,b=_+(v<<10&4294967295|v>>>22),v=R+(_^(b|~E))+w[14]+2878612391&4294967295,R=b+(v<<15&4294967295|v>>>17),v=E+(b^(R|~_))+w[5]+4237533241&4294967295,E=R+(v<<21&4294967295|v>>>11),v=_+(R^(E|~b))+w[12]+1700485571&4294967295,_=E+(v<<6&4294967295|v>>>26),v=b+(E^(_|~R))+w[3]+2399980690&4294967295,b=_+(v<<10&4294967295|v>>>22),v=R+(_^(b|~E))+w[10]+4293915773&4294967295,R=b+(v<<15&4294967295|v>>>17),v=E+(b^(R|~_))+w[1]+2240044497&4294967295,E=R+(v<<21&4294967295|v>>>11),v=_+(R^(E|~b))+w[8]+1873313359&4294967295,_=E+(v<<6&4294967295|v>>>26),v=b+(E^(_|~R))+w[15]+4264355552&4294967295,b=_+(v<<10&4294967295|v>>>22),v=R+(_^(b|~E))+w[6]+2734768916&4294967295,R=b+(v<<15&4294967295|v>>>17),v=E+(b^(R|~_))+w[13]+1309151649&4294967295,E=R+(v<<21&4294967295|v>>>11),v=_+(R^(E|~b))+w[4]+4149444226&4294967295,_=E+(v<<6&4294967295|v>>>26),v=b+(E^(_|~R))+w[11]+3174756917&4294967295,b=_+(v<<10&4294967295|v>>>22),v=R+(_^(b|~E))+w[2]+718787259&4294967295,R=b+(v<<15&4294967295|v>>>17),v=E+(b^(R|~_))+w[9]+3951481745&4294967295,T.g[0]=T.g[0]+_&4294967295,T.g[1]=T.g[1]+(R+(v<<21&4294967295|v>>>11))&4294967295,T.g[2]=T.g[2]+R&4294967295,T.g[3]=T.g[3]+b&4294967295}r.prototype.u=function(T,_){_===void 0&&(_=T.length);for(var E=_-this.blockSize,w=this.B,R=this.h,b=0;b<_;){if(R==0)for(;b<=E;)s(this,T,b),b+=this.blockSize;if(typeof T=="string"){for(;b<_;)if(w[R++]=T.charCodeAt(b++),R==this.blockSize){s(this,w),R=0;break}}else for(;b<_;)if(w[R++]=T[b++],R==this.blockSize){s(this,w),R=0;break}}this.h=R,this.o+=_},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var _=1;_<T.length-8;++_)T[_]=0;var E=8*this.o;for(_=T.length-8;_<T.length;++_)T[_]=E&255,E/=256;for(this.u(T),T=Array(16),_=E=0;4>_;++_)for(var w=0;32>w;w+=8)T[E++]=this.g[_]>>>w&255;return T};function i(T,_){var E=c;return Object.prototype.hasOwnProperty.call(E,T)?E[T]:E[T]=_(T)}function a(T,_){this.h=_;for(var E=[],w=!0,R=T.length-1;0<=R;R--){var b=T[R]|0;w&&b==_||(E[R]=b,w=!1)}this.g=E}var c={};function l(T){return-128<=T&&128>T?i(T,function(_){return new a([_|0],0>_?-1:0)}):new a([T|0],0>T?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return p;if(0>T)return V(h(-T));for(var _=[],E=1,w=0;T>=E;w++)_[w]=T/E|0,E*=4294967296;return new a(_,0)}function f(T,_){if(T.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(T.charAt(0)=="-")return V(f(T.substring(1),_));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=h(Math.pow(_,8)),w=p,R=0;R<T.length;R+=8){var b=Math.min(8,T.length-R),v=parseInt(T.substring(R,R+b),_);8>b?(b=h(Math.pow(_,b)),w=w.j(b).add(h(v))):(w=w.j(E),w=w.add(h(v)))}return w}var p=l(0),g=l(1),A=l(16777216);t=a.prototype,t.m=function(){if(k(this))return-V(this).m();for(var T=0,_=1,E=0;E<this.g.length;E++){var w=this.i(E);T+=(0<=w?w:4294967296+w)*_,_*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(O(this))return"0";if(k(this))return"-"+V(this).toString(T);for(var _=h(Math.pow(T,6)),E=this,w="";;){var R=Y(E,_).g;E=B(E,R.j(_));var b=((0<E.g.length?E.g[0]:E.h)>>>0).toString(T);if(E=R,O(E))return b+w;for(;6>b.length;)b="0"+b;w=b+w}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function O(T){if(T.h!=0)return!1;for(var _=0;_<T.g.length;_++)if(T.g[_]!=0)return!1;return!0}function k(T){return T.h==-1}t.l=function(T){return T=B(this,T),k(T)?-1:O(T)?0:1};function V(T){for(var _=T.g.length,E=[],w=0;w<_;w++)E[w]=~T.g[w];return new a(E,~T.h).add(g)}t.abs=function(){return k(this)?V(this):this},t.add=function(T){for(var _=Math.max(this.g.length,T.g.length),E=[],w=0,R=0;R<=_;R++){var b=w+(this.i(R)&65535)+(T.i(R)&65535),v=(b>>>16)+(this.i(R)>>>16)+(T.i(R)>>>16);w=v>>>16,b&=65535,v&=65535,E[R]=v<<16|b}return new a(E,E[E.length-1]&-2147483648?-1:0)};function B(T,_){return T.add(V(_))}t.j=function(T){if(O(this)||O(T))return p;if(k(this))return k(T)?V(this).j(V(T)):V(V(this).j(T));if(k(T))return V(this.j(V(T)));if(0>this.l(A)&&0>T.l(A))return h(this.m()*T.m());for(var _=this.g.length+T.g.length,E=[],w=0;w<2*_;w++)E[w]=0;for(w=0;w<this.g.length;w++)for(var R=0;R<T.g.length;R++){var b=this.i(w)>>>16,v=this.i(w)&65535,Xe=T.i(R)>>>16,Dt=T.i(R)&65535;E[2*w+2*R]+=v*Dt,$(E,2*w+2*R),E[2*w+2*R+1]+=b*Dt,$(E,2*w+2*R+1),E[2*w+2*R+1]+=v*Xe,$(E,2*w+2*R+1),E[2*w+2*R+2]+=b*Xe,$(E,2*w+2*R+2)}for(w=0;w<_;w++)E[w]=E[2*w+1]<<16|E[2*w];for(w=_;w<2*_;w++)E[w]=0;return new a(E,0)};function $(T,_){for(;(T[_]&65535)!=T[_];)T[_+1]+=T[_]>>>16,T[_]&=65535,_++}function K(T,_){this.g=T,this.h=_}function Y(T,_){if(O(_))throw Error("division by zero");if(O(T))return new K(p,p);if(k(T))return _=Y(V(T),_),new K(V(_.g),V(_.h));if(k(_))return _=Y(T,V(_)),new K(V(_.g),_.h);if(30<T.g.length){if(k(T)||k(_))throw Error("slowDivide_ only works with positive integers.");for(var E=g,w=_;0>=w.l(T);)E=Z(E),w=Z(w);var R=J(E,1),b=J(w,1);for(w=J(w,2),E=J(E,2);!O(w);){var v=b.add(w);0>=v.l(T)&&(R=R.add(E),b=v),w=J(w,1),E=J(E,1)}return _=B(T,R.j(_)),new K(R,_)}for(R=p;0<=T.l(_);){for(E=Math.max(1,Math.floor(T.m()/_.m())),w=Math.ceil(Math.log(E)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),b=h(E),v=b.j(_);k(v)||0<v.l(T);)E-=w,b=h(E),v=b.j(_);O(b)&&(b=g),R=R.add(b),T=B(T,v)}return new K(R,T)}t.A=function(T){return Y(this,T).h},t.and=function(T){for(var _=Math.max(this.g.length,T.g.length),E=[],w=0;w<_;w++)E[w]=this.i(w)&T.i(w);return new a(E,this.h&T.h)},t.or=function(T){for(var _=Math.max(this.g.length,T.g.length),E=[],w=0;w<_;w++)E[w]=this.i(w)|T.i(w);return new a(E,this.h|T.h)},t.xor=function(T){for(var _=Math.max(this.g.length,T.g.length),E=[],w=0;w<_;w++)E[w]=this.i(w)^T.i(w);return new a(E,this.h^T.h)};function Z(T){for(var _=T.g.length+1,E=[],w=0;w<_;w++)E[w]=T.i(w)<<1|T.i(w-1)>>>31;return new a(E,T.h)}function J(T,_){var E=_>>5;_%=32;for(var w=T.g.length-E,R=[],b=0;b<w;b++)R[b]=0<_?T.i(b+E)>>>_|T.i(b+E+1)<<32-_:T.i(b+E);return new a(R,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ep=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,mr=a}).apply(typeof $h<"u"?$h:typeof self<"u"?self:typeof window<"u"?window:{});var ro=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tp,Ip,Bs,wp,go,bc,Ap,Rp,bp;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ro=="object"&&ro];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)e:{var d=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var S=o[m];if(!(S in d))break e;d=d[S]}o=o[o.length-1],m=d[o],u=u(m),u!=m&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var d=0,m=!1,S={next:function(){if(!m&&d<o.length){var C=d++;return{value:u(C,o[C]),done:!1}}return m=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,d){return o.call.apply(o.bind,arguments)}function p(o,u,d){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,m),o.apply(u,S)}}return function(){return o.apply(u,arguments)}}function g(o,u,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function A(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function O(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(m,S,C){for(var q=Array(arguments.length-2),Ce=2;Ce<arguments.length;Ce++)q[Ce-2]=arguments[Ce];return u.prototype[S].apply(m,q)}}function k(o){const u=o.length;if(0<u){const d=Array(u);for(let m=0;m<u;m++)d[m]=o[m];return d}return[]}function V(o,u){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(l(m)){const S=o.length||0,C=m.length||0;o.length=S+C;for(let q=0;q<C;q++)o[S+q]=m[q]}else o.push(m)}}class B{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function $(o){return/^[\s\xa0]*$/.test(o)}function K(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function Y(o){return Y[" "](o),o}Y[" "]=function(){};var Z=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function J(o,u,d){for(const m in o)u.call(d,o[m],m,o)}function T(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function _(o){const u={};for(const d in o)u[d]=o[d];return u}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(o,u){let d,m;for(let S=1;S<arguments.length;S++){m=arguments[S];for(d in m)o[d]=m[d];for(let C=0;C<E.length;C++)d=E[C],Object.prototype.hasOwnProperty.call(m,d)&&(o[d]=m[d])}}function R(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function b(o){c.setTimeout(()=>{throw o},0)}function v(){var o=pt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class Xe{constructor(){this.h=this.g=null}add(u,d){const m=Dt.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var Dt=new B(()=>new Ue,o=>o.reset());class Ue{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ee,ye=!1,pt=new Xe,Kt=()=>{const o=c.Promise.resolve(void 0);Ee=()=>{o.then(wt)}};var wt=()=>{for(var o;o=v();){try{o.h.call(o.g)}catch(d){b(d)}var u=Dt;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}ye=!1};function xe(){this.s=this.s,this.C=this.C}xe.prototype.s=!1,xe.prototype.ma=function(){this.s||(this.s=!0,this.N())},xe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Le(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Le.prototype.h=function(){this.defaultPrevented=!0};var xi=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return o}();function N(o,u){if(Le.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(Z){e:{try{Y(u.nodeName);var S=!0;break e}catch{}S=!1}S||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:X[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&N.aa.h.call(this)}}O(N,Le);var X={2:"touch",3:"pen",4:"mouse"};N.prototype.h=function(){N.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var z="closure_listenable_"+(1e6*Math.random()|0),se=0;function Pe(o,u,d,m,S){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=S,this.key=++se,this.da=this.fa=!1}function Re(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function me(o){this.src=o,this.g={},this.h=0}me.prototype.add=function(o,u,d,m,S){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var q=y(o,u,m,S);return-1<q?(u=o[q],d||(u.fa=!1)):(u=new Pe(u,this.src,C,!!m,S),u.fa=d,o.push(u)),u};function fe(o,u){var d=u.type;if(d in o.g){var m=o.g[d],S=Array.prototype.indexOf.call(m,u,void 0),C;(C=0<=S)&&Array.prototype.splice.call(m,S,1),C&&(Re(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function y(o,u,d,m){for(var S=0;S<o.length;++S){var C=o[S];if(!C.da&&C.listener==u&&C.capture==!!d&&C.ha==m)return S}return-1}var I="closure_lm_"+(1e6*Math.random()|0),P={};function L(o,u,d,m,S){if(Array.isArray(u)){for(var C=0;C<u.length;C++)L(o,u[C],d,m,S);return null}return d=ne(d),o&&o[z]?o.K(u,d,h(m)?!!m.capture:!!m,S):D(o,u,d,!1,m,S)}function D(o,u,d,m,S,C){if(!u)throw Error("Invalid event type");var q=h(S)?!!S.capture:!!S,Ce=Q(o);if(Ce||(o[I]=Ce=new me(o)),d=Ce.add(u,d,m,q,C),d.proxy)return d;if(m=U(),d.proxy=m,m.src=o,m.listener=d,o.addEventListener)xi||(S=q),S===void 0&&(S=!1),o.addEventListener(u.toString(),m,S);else if(o.attachEvent)o.attachEvent(H(u.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function U(){function o(d){return u.call(o.src,o.listener,d)}const u=F;return o}function W(o,u,d,m,S){if(Array.isArray(u))for(var C=0;C<u.length;C++)W(o,u[C],d,m,S);else m=h(m)?!!m.capture:!!m,d=ne(d),o&&o[z]?(o=o.i,u=String(u).toString(),u in o.g&&(C=o.g[u],d=y(C,d,m,S),-1<d&&(Re(C[d]),Array.prototype.splice.call(C,d,1),C.length==0&&(delete o.g[u],o.h--)))):o&&(o=Q(o))&&(u=o.g[u.toString()],o=-1,u&&(o=y(u,d,m,S)),(d=-1<o?u[o]:null)&&j(d))}function j(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[z])fe(u.i,o);else{var d=o.type,m=o.proxy;u.removeEventListener?u.removeEventListener(d,m,o.capture):u.detachEvent?u.detachEvent(H(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=Q(u))?(fe(d,o),d.h==0&&(d.src=null,u[I]=null)):Re(o)}}}function H(o){return o in P?P[o]:P[o]="on"+o}function F(o,u){if(o.da)o=!0;else{u=new N(u,this);var d=o.listener,m=o.ha||o.src;o.fa&&j(o),o=d.call(m,u)}return o}function Q(o){return o=o[I],o instanceof me?o:null}var re="__closure_events_fn_"+(1e9*Math.random()>>>0);function ne(o){return typeof o=="function"?o:(o[re]||(o[re]=function(u){return o.handleEvent(u)}),o[re])}function te(){xe.call(this),this.i=new me(this),this.M=this,this.F=null}O(te,xe),te.prototype[z]=!0,te.prototype.removeEventListener=function(o,u,d,m){W(this,o,u,d,m)};function oe(o,u){var d,m=o.F;if(m)for(d=[];m;m=m.F)d.push(m);if(o=o.M,m=u.type||u,typeof u=="string")u=new Le(u,o);else if(u instanceof Le)u.target=u.target||o;else{var S=u;u=new Le(m,o),w(u,S)}if(S=!0,d)for(var C=d.length-1;0<=C;C--){var q=u.g=d[C];S=be(q,m,!0,u)&&S}if(q=u.g=o,S=be(q,m,!0,u)&&S,S=be(q,m,!1,u)&&S,d)for(C=0;C<d.length;C++)q=u.g=d[C],S=be(q,m,!1,u)&&S}te.prototype.N=function(){if(te.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],m=0;m<d.length;m++)Re(d[m]);delete o.g[u],o.h--}}this.F=null},te.prototype.K=function(o,u,d,m){return this.i.add(String(o),u,!1,d,m)},te.prototype.L=function(o,u,d,m){return this.i.add(String(o),u,!0,d,m)};function be(o,u,d,m){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,C=0;C<u.length;++C){var q=u[C];if(q&&!q.da&&q.capture==d){var Ce=q.listener,Ze=q.ha||q.src;q.fa&&fe(o.i,q),S=Ce.call(Ze,m)!==!1&&S}}return S&&!m.defaultPrevented}function Te(o,u,d){if(typeof o=="function")d&&(o=g(o,d));else if(o&&typeof o.handleEvent=="function")o=g(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function je(o){o.g=Te(()=>{o.g=null,o.i&&(o.i=!1,je(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class At extends xe{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:je(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function kt(o){xe.call(this),this.h=o,this.g={}}O(kt,xe);var Es=[];function An(o){J(o.g,function(u,d){this.g.hasOwnProperty(d)&&j(u)},o),o.g={}}kt.prototype.N=function(){kt.aa.N.call(this),An(this)},kt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var kr=c.JSON.stringify,mt=c.JSON.parse,Ot=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Or(){}Or.prototype.h=null;function ou(o){return o.h||(o.h=o.i())}function au(){}var Ts={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Sa(){Le.call(this,"d")}O(Sa,Le);function Pa(){Le.call(this,"c")}O(Pa,Le);var rr={},cu=null;function Li(){return cu=cu||new te}rr.La="serverreachability";function lu(o){Le.call(this,rr.La,o)}O(lu,Le);function Is(o){const u=Li();oe(u,new lu(u))}rr.STAT_EVENT="statevent";function uu(o,u){Le.call(this,rr.STAT_EVENT,o),this.stat=u}O(uu,Le);function gt(o){const u=Li();oe(u,new uu(u,o))}rr.Ma="timingevent";function hu(o,u){Le.call(this,rr.Ma,o),this.size=u}O(hu,Le);function ws(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function As(){this.g=!0}As.prototype.xa=function(){this.g=!1};function zg(o,u,d,m,S,C){o.info(function(){if(o.g)if(C)for(var q="",Ce=C.split("&"),Ze=0;Ze<Ce.length;Ze++){var we=Ce[Ze].split("=");if(1<we.length){var it=we[0];we=we[1];var ot=it.split("_");q=2<=ot.length&&ot[1]=="type"?q+(it+"="+we+"&"):q+(it+"=redacted&")}}else q=null;else q=C;return"XMLHTTP REQ ("+m+") [attempt "+S+"]: "+u+`
`+d+`
`+q})}function Wg(o,u,d,m,S,C,q){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+S+"]: "+u+`
`+d+`
`+C+" "+q})}function Vr(o,u,d,m){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Qg(o,d)+(m?" "+m:"")})}function Gg(o,u){o.info(function(){return"TIMEOUT: "+u})}As.prototype.info=function(){};function Qg(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var m=d[o];if(!(2>m.length)){var S=m[1];if(Array.isArray(S)&&!(1>S.length)){var C=S[0];if(C!="noop"&&C!="stop"&&C!="close")for(var q=1;q<S.length;q++)S[q]=""}}}}return kr(d)}catch{return u}}var Fi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},du={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ca;function Ui(){}O(Ui,Or),Ui.prototype.g=function(){return new XMLHttpRequest},Ui.prototype.i=function(){return{}},Ca=new Ui;function Rn(o,u,d,m){this.j=o,this.i=u,this.l=d,this.R=m||1,this.U=new kt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new fu}function fu(){this.i=null,this.g="",this.h=!1}var pu={},ka={};function Oa(o,u,d){o.L=1,o.v=qi(sn(u)),o.m=d,o.P=!0,mu(o,null)}function mu(o,u){o.F=Date.now(),Bi(o),o.A=sn(o.v);var d=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),Cu(d.i,"t",m),o.C=0,d=o.j.J,o.h=new fu,o.g=Wu(o.j,d?u:null,!o.m),0<o.O&&(o.M=new At(g(o.Y,o,o.g),o.O)),u=o.U,d=o.g,m=o.ca;var S="readystatechange";Array.isArray(S)||(S&&(Es[0]=S.toString()),S=Es);for(var C=0;C<S.length;C++){var q=L(d,S[C],m||u.handleEvent,!1,u.h||u);if(!q)break;u.g[q.key]=q}u=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Is(),zg(o.i,o.u,o.A,o.l,o.R,o.m)}Rn.prototype.ca=function(o){o=o.target;const u=this.M;u&&on(o)==3?u.j():this.Y(o)},Rn.prototype.Y=function(o){try{if(o==this.g)e:{const ot=on(this.g);var u=this.g.Ba();const Mr=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||xu(this.g)))){this.J||ot!=4||u==7||(u==8||0>=Mr?Is(3):Is(2)),Va(this);var d=this.g.Z();this.X=d;t:if(gu(this)){var m=xu(this.g);o="";var S=m.length,C=on(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){sr(this),Rs(this);var q="";break t}this.h.i=new c.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,o+=this.h.i.decode(m[u],{stream:!(C&&u==S-1)});m.length=0,this.h.g+=o,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=d==200,Wg(this.i,this.u,this.A,this.l,this.R,ot,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Ce,Ze=this.g;if((Ce=Ze.g?Ze.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(Ce)){var we=Ce;break t}}we=null}if(d=we)Vr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Na(this,d);else{this.o=!1,this.s=3,gt(12),sr(this),Rs(this);break e}}if(this.P){d=!0;let Mt;for(;!this.J&&this.C<q.length;)if(Mt=Jg(this,q),Mt==ka){ot==4&&(this.s=4,gt(14),d=!1),Vr(this.i,this.l,null,"[Incomplete Response]");break}else if(Mt==pu){this.s=4,gt(15),Vr(this.i,this.l,q,"[Invalid Chunk]"),d=!1;break}else Vr(this.i,this.l,Mt,null),Na(this,Mt);if(gu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||q.length!=0||this.h.h||(this.s=1,gt(16),d=!1),this.o=this.o&&d,!d)Vr(this.i,this.l,q,"[Invalid Chunked Response]"),sr(this),Rs(this);else if(0<q.length&&!this.W){this.W=!0;var it=this.j;it.g==this&&it.ba&&!it.M&&(it.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),Ua(it),it.M=!0,gt(11))}}else Vr(this.i,this.l,q,null),Na(this,q);ot==4&&sr(this),this.o&&!this.J&&(ot==4?qu(this.j,this):(this.o=!1,Bi(this)))}else f_(this.g),d==400&&0<q.indexOf("Unknown SID")?(this.s=3,gt(12)):(this.s=0,gt(13)),sr(this),Rs(this)}}}catch{}finally{}};function gu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Jg(o,u){var d=o.C,m=u.indexOf(`
`,d);return m==-1?ka:(d=Number(u.substring(d,m)),isNaN(d)?pu:(m+=1,m+d>u.length?ka:(u=u.slice(m,m+d),o.C=m+d,u)))}Rn.prototype.cancel=function(){this.J=!0,sr(this)};function Bi(o){o.S=Date.now()+o.I,_u(o,o.I)}function _u(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=ws(g(o.ba,o),u)}function Va(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Rn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Gg(this.i,this.A),this.L!=2&&(Is(),gt(17)),sr(this),this.s=2,Rs(this)):_u(this,this.S-o)};function Rs(o){o.j.G==0||o.J||qu(o.j,o)}function sr(o){Va(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,An(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Na(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||Da(d.h,o))){if(!o.K&&Da(d.h,o)&&d.G==3){try{var m=d.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var S=m;if(S[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Gi(d),zi(d);else break e;Fa(d),gt(18)}}else d.za=S[1],0<d.za-d.T&&37500>S[2]&&d.F&&d.v==0&&!d.C&&(d.C=ws(g(d.Za,d),6e3));if(1>=Eu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else or(d,11)}else if((o.K||d.g==o)&&Gi(d),!$(u))for(S=d.Da.g.parse(u),u=0;u<S.length;u++){let we=S[u];if(d.T=we[0],we=we[1],d.G==2)if(we[0]=="c"){d.K=we[1],d.ia=we[2];const it=we[3];it!=null&&(d.la=it,d.j.info("VER="+d.la));const ot=we[4];ot!=null&&(d.Aa=ot,d.j.info("SVER="+d.Aa));const Mr=we[5];Mr!=null&&typeof Mr=="number"&&0<Mr&&(m=1.5*Mr,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Mt=o.g;if(Mt){const Ji=Mt.g?Mt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ji){var C=m.h;C.g||Ji.indexOf("spdy")==-1&&Ji.indexOf("quic")==-1&&Ji.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Ma(C,C.h),C.h=null))}if(m.D){const Ba=Mt.g?Mt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ba&&(m.ya=Ba,Ne(m.I,m.D,Ba))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var q=o;if(m.qa=zu(m,m.J?m.ia:null,m.W),q.K){Tu(m.h,q);var Ce=q,Ze=m.L;Ze&&(Ce.I=Ze),Ce.B&&(Va(Ce),Bi(Ce)),m.g=q}else $u(m);0<d.i.length&&Wi(d)}else we[0]!="stop"&&we[0]!="close"||or(d,7);else d.G==3&&(we[0]=="stop"||we[0]=="close"?we[0]=="stop"?or(d,7):La(d):we[0]!="noop"&&d.l&&d.l.ta(we),d.v=0)}}Is(4)}catch{}}var Yg=class{constructor(o,u){this.g=o,this.map=u}};function yu(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function vu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Eu(o){return o.h?1:o.g?o.g.size:0}function Da(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Ma(o,u){o.g?o.g.add(u):o.h=u}function Tu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}yu.prototype.cancel=function(){if(this.i=Iu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Iu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return k(o.i)}function Xg(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],d=o.length,m=0;m<d;m++)u.push(o[m]);return u}u=[],d=0;for(m in o)u[d++]=o[m];return u}function Zg(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const m in o)u[d++]=m;return u}}}function wu(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=Zg(o),m=Xg(o),S=m.length,C=0;C<S;C++)u.call(void 0,m[C],d&&d[C],o)}var Au=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function e_(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var m=o[d].indexOf("="),S=null;if(0<=m){var C=o[d].substring(0,m);S=o[d].substring(m+1)}else C=o[d];u(C,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function ir(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof ir){this.h=o.h,$i(this,o.j),this.o=o.o,this.g=o.g,ji(this,o.s),this.l=o.l;var u=o.i,d=new Ps;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),Ru(this,d),this.m=o.m}else o&&(u=String(o).match(Au))?(this.h=!1,$i(this,u[1]||"",!0),this.o=bs(u[2]||""),this.g=bs(u[3]||"",!0),ji(this,u[4]),this.l=bs(u[5]||"",!0),Ru(this,u[6]||"",!0),this.m=bs(u[7]||"")):(this.h=!1,this.i=new Ps(null,this.h))}ir.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Ss(u,bu,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Ss(u,bu,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Ss(d,d.charAt(0)=="/"?r_:n_,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Ss(d,i_)),o.join("")};function sn(o){return new ir(o)}function $i(o,u,d){o.j=d?bs(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function ji(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Ru(o,u,d){u instanceof Ps?(o.i=u,o_(o.i,o.h)):(d||(u=Ss(u,s_)),o.i=new Ps(u,o.h))}function Ne(o,u,d){o.i.set(u,d)}function qi(o){return Ne(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function bs(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Ss(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,t_),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function t_(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var bu=/[#\/\?@]/g,n_=/[#\?:]/g,r_=/[#\?]/g,s_=/[#\?@]/g,i_=/#/g;function Ps(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function bn(o){o.g||(o.g=new Map,o.h=0,o.i&&e_(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=Ps.prototype,t.add=function(o,u){bn(this),this.i=null,o=Nr(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function Su(o,u){bn(o),u=Nr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Pu(o,u){return bn(o),u=Nr(o,u),o.g.has(u)}t.forEach=function(o,u){bn(this),this.g.forEach(function(d,m){d.forEach(function(S){o.call(u,S,m,this)},this)},this)},t.na=function(){bn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let m=0;m<u.length;m++){const S=o[m];for(let C=0;C<S.length;C++)d.push(u[m])}return d},t.V=function(o){bn(this);let u=[];if(typeof o=="string")Pu(this,o)&&(u=u.concat(this.g.get(Nr(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},t.set=function(o,u){return bn(this),this.i=null,o=Nr(this,o),Pu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Cu(o,u,d){Su(o,u),0<d.length&&(o.i=null,o.g.set(Nr(o,u),k(d)),o.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var m=u[d];const C=encodeURIComponent(String(m)),q=this.V(m);for(m=0;m<q.length;m++){var S=C;q[m]!==""&&(S+="="+encodeURIComponent(String(q[m]))),o.push(S)}}return this.i=o.join("&")};function Nr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function o_(o,u){u&&!o.j&&(bn(o),o.i=null,o.g.forEach(function(d,m){var S=m.toLowerCase();m!=S&&(Su(this,m),Cu(this,S,d))},o)),o.j=u}function a_(o,u){const d=new As;if(c.Image){const m=new Image;m.onload=A(Sn,d,"TestLoadImage: loaded",!0,u,m),m.onerror=A(Sn,d,"TestLoadImage: error",!1,u,m),m.onabort=A(Sn,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=A(Sn,d,"TestLoadImage: timeout",!1,u,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else u(!1)}function c_(o,u){const d=new As,m=new AbortController,S=setTimeout(()=>{m.abort(),Sn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:m.signal}).then(C=>{clearTimeout(S),C.ok?Sn(d,"TestPingServer: ok",!0,u):Sn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),Sn(d,"TestPingServer: error",!1,u)})}function Sn(o,u,d,m,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),m(d)}catch{}}function l_(){this.g=new Ot}function u_(o,u,d){const m=d||"";try{wu(o,function(S,C){let q=S;h(S)&&(q=kr(S)),u.push(m+C+"="+encodeURIComponent(q))})}catch(S){throw u.push(m+"type="+encodeURIComponent("_badmap")),S}}function Cs(o){this.l=o.Ub||null,this.j=o.eb||!1}O(Cs,Or),Cs.prototype.g=function(){return new Hi(this.l,this.j)},Cs.prototype.i=function(o){return function(){return o}}({});function Hi(o,u){te.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}O(Hi,te),t=Hi.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Os(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ks(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Os(this)),this.g&&(this.readyState=3,Os(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ku(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function ku(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?ks(this):Os(this),this.readyState==3&&ku(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,ks(this))},t.Qa=function(o){this.g&&(this.response=o,ks(this))},t.ga=function(){this.g&&ks(this)};function ks(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Os(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function Os(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Hi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ou(o){let u="";return J(o,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function xa(o,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Ou(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):Ne(o,u,d))}function Be(o){te.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}O(Be,te);var h_=/^https?$/i,d_=["POST","PUT"];t=Be.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ca.g(),this.v=this.o?ou(this.o):ou(Ca),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(C){Vu(this,C);return}if(o=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var S in m)d.set(S,m[S]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const C of m.keys())d.set(C,m.get(C));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(C=>C.toLowerCase()=="content-type"),S=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(d_,u,void 0))||m||S||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,q]of d)this.g.setRequestHeader(C,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Mu(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){Vu(this,C)}};function Vu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Nu(o),Ki(o)}function Nu(o){o.A||(o.A=!0,oe(o,"complete"),oe(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,oe(this,"complete"),oe(this,"abort"),Ki(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ki(this,!0)),Be.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Du(this):this.bb())},t.bb=function(){Du(this)};function Du(o){if(o.h&&typeof a<"u"&&(!o.v[1]||on(o)!=4||o.Z()!=2)){if(o.u&&on(o)==4)Te(o.Ea,0,o);else if(oe(o,"readystatechange"),on(o)==4){o.h=!1;try{const q=o.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=q===0){var S=String(o.D).match(Au)[1]||null;!S&&c.self&&c.self.location&&(S=c.self.location.protocol.slice(0,-1)),m=!h_.test(S?S.toLowerCase():"")}d=m}if(d)oe(o,"complete"),oe(o,"success");else{o.m=6;try{var C=2<on(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",Nu(o)}}finally{Ki(o)}}}}function Ki(o,u){if(o.g){Mu(o);const d=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||oe(o,"ready");try{d.onreadystatechange=m}catch{}}}function Mu(o){o.I&&(c.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function on(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<on(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),mt(u)}};function xu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function f_(o){const u={};o=(o.g&&2<=on(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if($(o[m]))continue;var d=R(o[m]);const S=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const C=u[S]||[];u[S]=C,C.push(d)}T(u,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Vs(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function Lu(o){this.Aa=0,this.i=[],this.j=new As,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Vs("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Vs("baseRetryDelayMs",5e3,o),this.cb=Vs("retryDelaySeedMs",1e4,o),this.Wa=Vs("forwardChannelMaxRetries",2,o),this.wa=Vs("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new yu(o&&o.concurrentRequestLimit),this.Da=new l_,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Lu.prototype,t.la=8,t.G=1,t.connect=function(o,u,d,m){gt(0),this.W=o,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=zu(this,null,this.W),Wi(this)};function La(o){if(Fu(o),o.G==3){var u=o.U++,d=sn(o.I);if(Ne(d,"SID",o.K),Ne(d,"RID",u),Ne(d,"TYPE","terminate"),Ns(o,d),u=new Rn(o,o.j,u),u.L=2,u.v=qi(sn(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=Wu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Bi(u)}Ku(o)}function zi(o){o.g&&(Ua(o),o.g.cancel(),o.g=null)}function Fu(o){zi(o),o.u&&(c.clearTimeout(o.u),o.u=null),Gi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Wi(o){if(!vu(o.h)&&!o.s){o.s=!0;var u=o.Ga;Ee||Kt(),ye||(Ee(),ye=!0),pt.add(u,o),o.B=0}}function p_(o,u){return Eu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=ws(g(o.Ga,o,u),Hu(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const S=new Rn(this,this.j,o);let C=this.o;if(this.S&&(C?(C=_(C),w(C,this.S)):C=this.S),this.m!==null||this.O||(S.H=C,C=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Bu(this,S,u),d=sn(this.I),Ne(d,"RID",o),Ne(d,"CVER",22),this.D&&Ne(d,"X-HTTP-Session-Id",this.D),Ns(this,d),C&&(this.O?u="headers="+encodeURIComponent(String(Ou(C)))+"&"+u:this.m&&xa(d,this.m,C)),Ma(this.h,S),this.Ua&&Ne(d,"TYPE","init"),this.P?(Ne(d,"$req",u),Ne(d,"SID","null"),S.T=!0,Oa(S,d,null)):Oa(S,d,u),this.G=2}}else this.G==3&&(o?Uu(this,o):this.i.length==0||vu(this.h)||Uu(this))};function Uu(o,u){var d;u?d=u.l:d=o.U++;const m=sn(o.I);Ne(m,"SID",o.K),Ne(m,"RID",d),Ne(m,"AID",o.T),Ns(o,m),o.m&&o.o&&xa(m,o.m,o.o),d=new Rn(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Bu(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ma(o.h,d),Oa(d,m,u)}function Ns(o,u){o.H&&J(o.H,function(d,m){Ne(u,m,d)}),o.l&&wu({},function(d,m){Ne(u,m,d)})}function Bu(o,u,d){d=Math.min(o.i.length,d);var m=o.l?g(o.l.Na,o.l,o):null;e:{var S=o.i;let C=-1;for(;;){const q=["count="+d];C==-1?0<d?(C=S[0].g,q.push("ofs="+C)):C=0:q.push("ofs="+C);let Ce=!0;for(let Ze=0;Ze<d;Ze++){let we=S[Ze].g;const it=S[Ze].map;if(we-=C,0>we)C=Math.max(0,S[Ze].g-100),Ce=!1;else try{u_(it,q,"req"+we+"_")}catch{m&&m(it)}}if(Ce){m=q.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,m}function $u(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Ee||Kt(),ye||(Ee(),ye=!0),pt.add(u,o),o.v=0}}function Fa(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=ws(g(o.Fa,o),Hu(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,ju(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=ws(g(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,gt(10),zi(this),ju(this))};function Ua(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function ju(o){o.g=new Rn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=sn(o.qa);Ne(u,"RID","rpc"),Ne(u,"SID",o.K),Ne(u,"AID",o.T),Ne(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Ne(u,"TO",o.ja),Ne(u,"TYPE","xmlhttp"),Ns(o,u),o.m&&o.o&&xa(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=qi(sn(u)),d.m=null,d.P=!0,mu(d,o)}t.Za=function(){this.C!=null&&(this.C=null,zi(this),Fa(this),gt(19))};function Gi(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function qu(o,u){var d=null;if(o.g==u){Gi(o),Ua(o),o.g=null;var m=2}else if(Da(o.h,u))d=u.D,Tu(o.h,u),m=1;else return;if(o.G!=0){if(u.o)if(m==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var S=o.B;m=Li(),oe(m,new hu(m,d)),Wi(o)}else $u(o);else if(S=u.s,S==3||S==0&&0<u.X||!(m==1&&p_(o,u)||m==2&&Fa(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),S){case 1:or(o,5);break;case 4:or(o,10);break;case 3:or(o,6);break;default:or(o,2)}}}function Hu(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function or(o,u){if(o.j.info("Error code "+u),u==2){var d=g(o.fb,o),m=o.Xa;const S=!m;m=new ir(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||$i(m,"https"),qi(m),S?a_(m.toString(),d):c_(m.toString(),d)}else gt(2);o.G=0,o.l&&o.l.sa(u),Ku(o),Fu(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function Ku(o){if(o.G=0,o.ka=[],o.l){const u=Iu(o.h);(u.length!=0||o.i.length!=0)&&(V(o.ka,u),V(o.ka,o.i),o.h.i.length=0,k(o.i),o.i.length=0),o.l.ra()}}function zu(o,u,d){var m=d instanceof ir?sn(d):new ir(d);if(m.g!="")u&&(m.g=u+"."+m.g),ji(m,m.s);else{var S=c.location;m=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var C=new ir(null);m&&$i(C,m),u&&(C.g=u),S&&ji(C,S),d&&(C.l=d),m=C}return d=o.D,u=o.ya,d&&u&&Ne(m,d,u),Ne(m,"VER",o.la),Ns(o,m),m}function Wu(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Be(new Cs({eb:d})):new Be(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Gu(){}t=Gu.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Qi(){}Qi.prototype.g=function(o,u){return new Rt(o,u)};function Rt(o,u){te.call(this),this.g=new Lu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!$(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!$(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Dr(this)}O(Rt,te),Rt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){La(this.g)},Rt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=kr(o),o=d);u.i.push(new Yg(u.Ya++,o)),u.G==3&&Wi(u)},Rt.prototype.N=function(){this.g.l=null,delete this.j,La(this.g),delete this.g,Rt.aa.N.call(this)};function Qu(o){Sa.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}O(Qu,Sa);function Ju(){Pa.call(this),this.status=1}O(Ju,Pa);function Dr(o){this.g=o}O(Dr,Gu),Dr.prototype.ua=function(){oe(this.g,"a")},Dr.prototype.ta=function(o){oe(this.g,new Qu(o))},Dr.prototype.sa=function(o){oe(this.g,new Ju)},Dr.prototype.ra=function(){oe(this.g,"b")},Qi.prototype.createWebChannel=Qi.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,bp=function(){return new Qi},Rp=function(){return Li()},Ap=rr,bc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Fi.NO_ERROR=0,Fi.TIMEOUT=8,Fi.HTTP_ERROR=6,go=Fi,du.COMPLETE="complete",wp=du,au.EventType=Ts,Ts.OPEN="a",Ts.CLOSE="b",Ts.ERROR="c",Ts.MESSAGE="d",te.prototype.listen=te.prototype.K,Bs=au,Ip=Cs,Be.prototype.listenOnce=Be.prototype.L,Be.prototype.getLastError=Be.prototype.Ka,Be.prototype.getLastErrorCode=Be.prototype.Ba,Be.prototype.getStatus=Be.prototype.Z,Be.prototype.getResponseJson=Be.prototype.Oa,Be.prototype.getResponseText=Be.prototype.oa,Be.prototype.send=Be.prototype.ea,Be.prototype.setWithCredentials=Be.prototype.Ha,Tp=Be}).apply(typeof ro<"u"?ro:typeof self<"u"?self:typeof window<"u"?window:{});const jh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fs="10.13.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new ml("@firebase/firestore");function Ms(){return Tr.logLevel}function ee(t,...e){if(Tr.logLevel<=_e.DEBUG){const n=e.map(yl);Tr.debug(`Firestore (${fs}): ${t}`,...n)}}function yn(t,...e){if(Tr.logLevel<=_e.ERROR){const n=e.map(yl);Tr.error(`Firestore (${fs}): ${t}`,...n)}}function ts(t,...e){if(Tr.logLevel<=_e.WARN){const n=e.map(yl);Tr.warn(`Firestore (${fs}): ${t}`,...n)}}function yl(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(t="Unexpected state"){const e=`FIRESTORE (${fs}) INTERNAL ASSERTION FAILED: `+t;throw yn(e),new Error(e)}function Oe(t,e){t||ue()}function de(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends wn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class vT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ct.UNAUTHENTICATED))}shutdown(){}}class ET{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class TT{constructor(e){this.t=e,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new mn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new mn,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new mn)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Oe(typeof r.accessToken=="string"),new Sp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Oe(e===null||typeof e=="string"),new ct(e)}}class IT{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class wT{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new IT(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class AT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class RT{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,ee("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Oe(typeof n.token=="string"),this.R=n.token,new AT(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bT(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=bT(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ae(t,e){return t<e?-1:t>e?1:0}function ns(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ie(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ie(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ie(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ge(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.timestamp=e}static fromTimestamp(e){return new he(e)}static min(){return new he(new Ge(0,0))}static max(){return new he(new Ge(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,n,r){n===void 0?n=0:n>e.length&&ue(),r===void 0?r=e.length-n:r>e.length-n&&ue(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ai.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ai?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),a=n.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Me extends ai{construct(e,n,r){return new Me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ie(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Me(n)}static emptyPath(){return new Me([])}}const ST=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends ai{construct(e,n,r){return new nt(e,n,r)}static isValidIdentifier(e){return ST.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new nt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ie(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new ie(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ie(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new ie(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nt(n)}static emptyPath(){return new nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.path=e}static fromPath(e){return new ae(Me.fromString(e))}static fromName(e){return new ae(Me.fromString(e).popFirst(5))}static empty(){return new ae(Me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ae(new Me(e.slice()))}}function PT(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=he.fromTimestamp(r===1e9?new Ge(n+1,0):new Ge(n,r));return new Jn(s,ae.empty(),e)}function CT(t){return new Jn(t.readTime,t.key,-1)}class Jn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Jn(he.min(),ae.empty(),-1)}static max(){return new Jn(he.max(),ae.empty(),-1)}}function kT(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ae.comparator(t.documentKey,e.documentKey),n!==0?n:Ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class VT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wi(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==OT)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ue(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new x((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof x?n:x.resolve(n)}catch(n){return x.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):x.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):x.reject(n)}static resolve(e){return new x((n,r)=>{n(e)})}static reject(e){return new x((n,r)=>{r(e)})}static waitFor(e){return new x((n,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&n()},l=>r(l))}),a=!0,i===s&&n()})}static or(e){let n=x.resolve(!1);for(const r of e)n=n.next(s=>s?x.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new x((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(f=>{a[h]=f,++c,c===i&&r(a)},f=>s(f))}})}static doWhile(e,n){return new x((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function NT(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ai(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}vl.oe=-1;function la(t){return t==null}function Mo(t){return t===0&&1/t==-1/0}function DT(t){return typeof t=="number"&&Number.isInteger(t)&&!Mo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ps(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Cp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n){this.comparator=e,this.root=n||tt.EMPTY}insert(e,n){return new Fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,tt.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new so(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new so(this.root,e,this.comparator,!1)}getReverseIterator(){return new so(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new so(this.root,e,this.comparator,!0)}}class so{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??tt.RED,this.left=s??tt.EMPTY,this.right=i??tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new tt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return tt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ue();const e=this.left.check();if(e!==this.right.check())throw ue();return e+(this.isRed()?0:1)}}tt.EMPTY=null,tt.RED=!0,tt.BLACK=!1;tt.EMPTY=new class{constructor(){this.size=0}get key(){throw ue()}get value(){throw ue()}get color(){throw ue()}get left(){throw ue()}get right(){throw ue()}copy(e,n,r,s,i){return this}insert(e,n,r){return new tt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Hh(this.data.getIterator())}getIteratorFrom(e){return new Hh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new rt(this.comparator);return n.data=e,n}}class Hh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.fields=e,e.sort(nt.comparator)}static empty(){return new Ut([])}unionWith(e){let n=new rt(nt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ut(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ns(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new kp("Invalid base64 string: "+i):i}}(e);return new st(n)}static fromUint8Array(e){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new st(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}st.EMPTY_BYTE_STRING=new st("");const MT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yn(t){if(Oe(!!t),typeof t=="string"){let e=0;const n=MT.exec(t);if(Oe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:He(t.seconds),nanos:He(t.nanos)}}function He(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ir(t){return typeof t=="string"?st.fromBase64String(t):st.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Tl(t){const e=t.mapValue.fields.__previous_value__;return El(e)?Tl(e):e}function ci(t){const e=Yn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e,n,r,s,i,a,c,l,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}class li{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new li("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof li&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function wr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?El(t)?4:FT(t)?9007199254740991:LT(t)?10:11:ue()}function nn(t,e){if(t===e)return!0;const n=wr(t);if(n!==wr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ci(t).isEqual(ci(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Yn(s.timestampValue),c=Yn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Ir(s.bytesValue).isEqual(Ir(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return He(s.geoPointValue.latitude)===He(i.geoPointValue.latitude)&&He(s.geoPointValue.longitude)===He(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return He(s.integerValue)===He(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=He(s.doubleValue),c=He(i.doubleValue);return a===c?Mo(a)===Mo(c):isNaN(a)&&isNaN(c)}return!1}(t,e);case 9:return ns(t.arrayValue.values||[],e.arrayValue.values||[],nn);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(qh(a)!==qh(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!nn(a[l],c[l])))return!1;return!0}(t,e);default:return ue()}}function ui(t,e){return(t.values||[]).find(n=>nn(n,e))!==void 0}function rs(t,e){if(t===e)return 0;const n=wr(t),r=wr(e);if(n!==r)return Ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ae(t.booleanValue,e.booleanValue);case 2:return function(i,a){const c=He(i.integerValue||i.doubleValue),l=He(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return Kh(t.timestampValue,e.timestampValue);case 4:return Kh(ci(t),ci(e));case 5:return Ae(t.stringValue,e.stringValue);case 6:return function(i,a){const c=Ir(i),l=Ir(a);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=Ae(c[h],l[h]);if(f!==0)return f}return Ae(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,a){const c=Ae(He(i.latitude),He(a.latitude));return c!==0?c:Ae(He(i.longitude),He(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return zh(t.arrayValue,e.arrayValue);case 10:return function(i,a){var c,l,h,f;const p=i.fields||{},g=a.fields||{},A=(c=p.value)===null||c===void 0?void 0:c.arrayValue,O=(l=g.value)===null||l===void 0?void 0:l.arrayValue,k=Ae(((h=A==null?void 0:A.values)===null||h===void 0?void 0:h.length)||0,((f=O==null?void 0:O.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:zh(A,O)}(t.mapValue,e.mapValue);case 11:return function(i,a){if(i===io.mapValue&&a===io.mapValue)return 0;if(i===io.mapValue)return 1;if(a===io.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const g=Ae(l[p],f[p]);if(g!==0)return g;const A=rs(c[l[p]],h[f[p]]);if(A!==0)return A}return Ae(l.length,f.length)}(t.mapValue,e.mapValue);default:throw ue()}}function Kh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ae(t,e);const n=Yn(t),r=Yn(e),s=Ae(n.seconds,r.seconds);return s!==0?s:Ae(n.nanos,r.nanos)}function zh(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=rs(n[s],r[s]);if(i)return i}return Ae(n.length,r.length)}function ss(t){return Sc(t)}function Sc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Yn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ir(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ae.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Sc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Sc(n.fields[a])}`;return s+"}"}(t.mapValue):ue()}function Pc(t){return!!t&&"integerValue"in t}function Il(t){return!!t&&"arrayValue"in t}function Wh(t){return!!t&&"nullValue"in t}function Gh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function _o(t){return!!t&&"mapValue"in t}function LT(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Qs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ps(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Qs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Qs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function FT(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.value=e}static empty(){return new Vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!_o(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qs(n)}setAll(e){let n=nt.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}a?r[c.lastSegment()]=Qs(a):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());_o(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return nn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];_o(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ps(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Vt(Qs(this.value))}}function Op(t){const e=[];return ps(t.fields,(n,r)=>{const s=new nt([n]);if(_o(r)){const i=Op(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Ut(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,n,r,s,i,a,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new lt(e,0,he.min(),he.min(),he.min(),Vt.empty(),0)}static newFoundDocument(e,n,r,s){return new lt(e,1,n,he.min(),r,s,0)}static newNoDocument(e,n){return new lt(e,2,n,he.min(),he.min(),Vt.empty(),0)}static newUnknownDocument(e,n){return new lt(e,3,n,he.min(),he.min(),Vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,n){this.position=e,this.inclusive=n}}function Qh(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=ae.comparator(ae.fromName(a.referenceValue),n.key):r=rs(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Jh(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!nn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,n="asc"){this.field=e,this.dir=n}}function UT(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{}class We extends Vp{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new $T(e,n,r):n==="array-contains"?new HT(e,r):n==="in"?new KT(e,r):n==="not-in"?new zT(e,r):n==="array-contains-any"?new WT(e,r):new We(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new jT(e,r):new qT(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(rs(n,this.value)):n!==null&&wr(this.value)===wr(n)&&this.matchesComparison(rs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rn extends Vp{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new rn(e,n)}matches(e){return Np(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Np(t){return t.op==="and"}function Dp(t){return BT(t)&&Np(t)}function BT(t){for(const e of t.filters)if(e instanceof rn)return!1;return!0}function Cc(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+ss(t.value);if(Dp(t))return t.filters.map(e=>Cc(e)).join(",");{const e=t.filters.map(n=>Cc(n)).join(",");return`${t.op}(${e})`}}function Mp(t,e){return t instanceof We?function(r,s){return s instanceof We&&r.op===s.op&&r.field.isEqual(s.field)&&nn(r.value,s.value)}(t,e):t instanceof rn?function(r,s){return s instanceof rn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&Mp(a,s.filters[c]),!0):!1}(t,e):void ue()}function xp(t){return t instanceof We?function(n){return`${n.field.canonicalString()} ${n.op} ${ss(n.value)}`}(t):t instanceof rn?function(n){return n.op.toString()+" {"+n.getFilters().map(xp).join(" ,")+"}"}(t):"Filter"}class $T extends We{constructor(e,n,r){super(e,n,r),this.key=ae.fromName(r.referenceValue)}matches(e){const n=ae.comparator(e.key,this.key);return this.matchesComparison(n)}}class jT extends We{constructor(e,n){super(e,"in",n),this.keys=Lp("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class qT extends We{constructor(e,n){super(e,"not-in",n),this.keys=Lp("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Lp(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ae.fromName(r.referenceValue))}class HT extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Il(n)&&ui(n.arrayValue,this.value)}}class KT extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ui(this.value.arrayValue,n)}}class zT extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(ui(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ui(this.value.arrayValue,n)}}class WT extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Il(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ui(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e,n=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.ue=null}}function Yh(t,e=null,n=[],r=[],s=null,i=null,a=null){return new GT(t,e,n,r,s,i,a)}function wl(t){const e=de(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Cc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),la(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ss(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ss(r)).join(",")),e.ue=n}return e.ue}function Al(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!UT(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Mp(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Jh(t.startAt,e.startAt)&&Jh(t.endAt,e.endAt)}function kc(t){return ae.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,n=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function QT(t,e,n,r,s,i,a,c){return new ua(t,e,n,r,s,i,a,c)}function Rl(t){return new ua(t)}function Xh(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function JT(t){return t.collectionGroup!==null}function Js(t){const e=de(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new rt(nt.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Lo(i,r))}),n.has(nt.keyField().canonicalString())||e.ce.push(new Lo(nt.keyField(),r))}return e.ce}function Yt(t){const e=de(t);return e.le||(e.le=YT(e,Js(t))),e.le}function YT(t,e){if(t.limitType==="F")return Yh(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Lo(s.field,i)});const n=t.endAt?new xo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new xo(t.startAt.position,t.startAt.inclusive):null;return Yh(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Oc(t,e,n){return new ua(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ha(t,e){return Al(Yt(t),Yt(e))&&t.limitType===e.limitType}function Fp(t){return`${wl(Yt(t))}|lt:${t.limitType}`}function Lr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>xp(s)).join(", ")}]`),la(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ss(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ss(s)).join(",")),`Target(${r})`}(Yt(t))}; limitType=${t.limitType})`}function da(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ae.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Js(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(a,c,l){const h=Qh(a,c,l);return a.inclusive?h<=0:h<0}(r.startAt,Js(r),s)||r.endAt&&!function(a,c,l){const h=Qh(a,c,l);return a.inclusive?h>=0:h>0}(r.endAt,Js(r),s))}(t,e)}function XT(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Up(t){return(e,n)=>{let r=!1;for(const s of Js(t)){const i=ZT(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function ZT(t,e,n){const r=t.field.isKeyField()?ae.comparator(e.key,n.key):function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?rs(l,h):ue()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ue()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ps(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Cp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI=new Fe(ae.comparator);function vn(){return eI}const Bp=new Fe(ae.comparator);function $s(...t){let e=Bp;for(const n of t)e=e.insert(n.key,n);return e}function $p(t){let e=Bp;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function dr(){return Ys()}function jp(){return Ys()}function Ys(){return new ms(t=>t.toString(),(t,e)=>t.isEqual(e))}const tI=new Fe(ae.comparator),nI=new rt(ae.comparator);function ge(...t){let e=nI;for(const n of t)e=e.add(n);return e}const rI=new rt(Ae);function sI(){return rI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mo(e)?"-0":e}}function qp(t){return{integerValue:""+t}}function iI(t,e){return DT(e)?qp(e):bl(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(){this._=void 0}}function oI(t,e,n){return t instanceof Fo?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&El(i)&&(i=Tl(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(n,e):t instanceof hi?Kp(t,e):t instanceof di?zp(t,e):function(s,i){const a=Hp(s,i),c=Zh(a)+Zh(s.Pe);return Pc(a)&&Pc(s.Pe)?qp(c):bl(s.serializer,c)}(t,e)}function aI(t,e,n){return t instanceof hi?Kp(t,e):t instanceof di?zp(t,e):n}function Hp(t,e){return t instanceof Uo?function(r){return Pc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Fo extends fa{}class hi extends fa{constructor(e){super(),this.elements=e}}function Kp(t,e){const n=Wp(e);for(const r of t.elements)n.some(s=>nn(s,r))||n.push(r);return{arrayValue:{values:n}}}class di extends fa{constructor(e){super(),this.elements=e}}function zp(t,e){let n=Wp(e);for(const r of t.elements)n=n.filter(s=>!nn(s,r));return{arrayValue:{values:n}}}class Uo extends fa{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Zh(t){return He(t.integerValue||t.doubleValue)}function Wp(t){return Il(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function cI(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof hi&&s instanceof hi||r instanceof di&&s instanceof di?ns(r.elements,s.elements,nn):r instanceof Uo&&s instanceof Uo?nn(r.Pe,s.Pe):r instanceof Fo&&s instanceof Fo}(t.transform,e.transform)}class lI{constructor(e,n){this.version=e,this.transformResults=n}}class $t{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new $t}static exists(e){return new $t(void 0,e)}static updateTime(e){return new $t(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class pa{}function Gp(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Sl(t.key,$t.none()):new Ri(t.key,t.data,$t.none());{const n=t.data,r=Vt.empty();let s=new rt(nt.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Sr(t.key,r,new Ut(s.toArray()),$t.none())}}function uI(t,e,n){t instanceof Ri?function(s,i,a){const c=s.value.clone(),l=td(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Sr?function(s,i,a){if(!yo(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=td(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(Qp(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function Xs(t,e,n,r){return t instanceof Ri?function(i,a,c,l){if(!yo(i.precondition,a))return c;const h=i.value.clone(),f=nd(i.fieldTransforms,l,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Sr?function(i,a,c,l){if(!yo(i.precondition,a))return c;const h=nd(i.fieldTransforms,l,a),f=a.data;return f.setAll(Qp(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,a,c){return yo(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(t,e,n)}function hI(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Hp(r.transform,s||null);i!=null&&(n===null&&(n=Vt.empty()),n.set(r.field,i))}return n||null}function ed(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ns(r,s,(i,a)=>cI(i,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ri extends pa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Sr extends pa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Qp(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function td(t,e,n){const r=new Map;Oe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,aI(a,c,n[s]))}return r}function nd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,oI(i,a,e))}return r}class Sl extends pa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dI extends pa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&uI(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Xs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Xs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=jp();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=n.has(s.key)?null:c;const l=Gp(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(he.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ge())}isEqual(e){return this.batchId===e.batchId&&ns(this.mutations,e.mutations,(n,r)=>ed(n,r))&&ns(this.baseMutations,e.baseMutations,(n,r)=>ed(n,r))}}class Pl{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Oe(e.mutations.length===r.length);let s=function(){return tI}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Pl(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke,ve;function gI(t){switch(t){default:return ue();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function Jp(t){if(t===void 0)return yn("GRPC error has no .code"),M.UNKNOWN;switch(t){case Ke.OK:return M.OK;case Ke.CANCELLED:return M.CANCELLED;case Ke.UNKNOWN:return M.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return M.INTERNAL;case Ke.UNAVAILABLE:return M.UNAVAILABLE;case Ke.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Ke.NOT_FOUND:return M.NOT_FOUND;case Ke.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Ke.ABORTED:return M.ABORTED;case Ke.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Ke.DATA_LOSS:return M.DATA_LOSS;default:return ue()}}(ve=Ke||(Ke={}))[ve.OK=0]="OK",ve[ve.CANCELLED=1]="CANCELLED",ve[ve.UNKNOWN=2]="UNKNOWN",ve[ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ve[ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ve[ve.NOT_FOUND=5]="NOT_FOUND",ve[ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",ve[ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",ve[ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",ve[ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ve[ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ve[ve.ABORTED=10]="ABORTED",ve[ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",ve[ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",ve[ve.INTERNAL=13]="INTERNAL",ve[ve.UNAVAILABLE=14]="UNAVAILABLE",ve[ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _I(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI=new mr([4294967295,4294967295],0);function rd(t){const e=_I().encode(t),n=new Ep;return n.update(e),new Uint8Array(n.digest())}function sd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new mr([n,r],0),new mr([s,i],0)]}class Cl{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new js(`Invalid padding: ${n}`);if(r<0)throw new js(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new js(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new js(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=mr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(mr.fromNumber(r)));return s.compare(yI)===1&&(s=new mr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=rd(e),[r,s]=sd(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Cl(i,s,n);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ie===0)return;const n=rd(e),[r,s]=sd(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class js extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,bi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ma(he.min(),s,new Fe(Ae),vn(),ge())}}class bi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new bi(r,n,ge(),ge(),ge())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Yp{constructor(e,n){this.targetId=e,this.me=n}}class Xp{constructor(e,n,r=st.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class id{constructor(){this.fe=0,this.ge=ad(),this.pe=st.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ge(),n=ge(),r=ge();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ue()}}),new bi(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=ad()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Oe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class vI{constructor(e){this.Le=e,this.Be=new Map,this.ke=vn(),this.qe=od(),this.Qe=new Fe(Ae)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ue()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(kc(i))if(r===0){const a=new ae(i.path);this.Ue(n,a,lt.newNoDocument(a,he.min()))}else Oe(r===1);else{const a=this.Ye(n);if(a!==r){const c=this.Ze(e),l=c?this.Xe(c,e,a):1;if(l!==0){this.je(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,c;try{a=Ir(r).toUint8Array()}catch(l){if(l instanceof kp)return ts("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Cl(a,s,i)}catch(l){return ts(l instanceof js?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,a)=>{const c=this.Je(a);if(c){if(i.current&&kc(c.target)){const l=new ae(c.target.path);this.ke.get(l)!==null||this.it(a,l)||this.Ue(a,l,lt.newNoDocument(l,e))}i.be&&(n.set(a,i.ve()),i.Ce())}});let r=ge();this.qe.forEach((i,a)=>{let c=!0;a.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new ma(e,n,this.Qe,this.ke,r);return this.ke=vn(),this.qe=od(),this.Qe=new Fe(Ae),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new id,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new rt(Ae),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new id),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function od(){return new Fe(ae.comparator)}function ad(){return new Fe(ae.comparator)}const EI={asc:"ASCENDING",desc:"DESCENDING"},TI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},II={and:"AND",or:"OR"};class wI{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Vc(t,e){return t.useProto3Json||la(e)?e:{value:e}}function Bo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Zp(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function AI(t,e){return Bo(t,e.toTimestamp())}function Xt(t){return Oe(!!t),he.fromTimestamp(function(n){const r=Yn(n);return new Ge(r.seconds,r.nanos)}(t))}function kl(t,e){return Nc(t,e).canonicalString()}function Nc(t,e){const n=function(s){return new Me(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function em(t){const e=Me.fromString(t);return Oe(im(e)),e}function Dc(t,e){return kl(t.databaseId,e.path)}function ec(t,e){const n=em(e);if(n.get(1)!==t.databaseId.projectId)throw new ie(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ie(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ae(nm(n))}function tm(t,e){return kl(t.databaseId,e)}function RI(t){const e=em(t);return e.length===4?Me.emptyPath():nm(e)}function Mc(t){return new Me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function nm(t){return Oe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function cd(t,e,n){return{name:Dc(t,e),fields:n.value.mapValue.fields}}function bI(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ue()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Oe(f===void 0||typeof f=="string"),st.fromBase64String(f||"")):(Oe(f===void 0||f instanceof Buffer||f instanceof Uint8Array),st.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const f=h.code===void 0?M.UNKNOWN:Jp(h.code);return new ie(f,h.message||"")}(a);n=new Xp(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ec(t,r.document.name),i=Xt(r.document.updateTime),a=r.document.createTime?Xt(r.document.createTime):he.min(),c=new Vt({mapValue:{fields:r.document.fields}}),l=lt.newFoundDocument(s,i,a,c),h=r.targetIds||[],f=r.removedTargetIds||[];n=new vo(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ec(t,r.document),i=r.readTime?Xt(r.readTime):he.min(),a=lt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new vo([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ec(t,r.document),i=r.removedTargetIds||[];n=new vo([],i,s,null)}else{if(!("filter"in e))return ue();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new mI(s,i),c=r.targetId;n=new Yp(c,a)}}return n}function SI(t,e){let n;if(e instanceof Ri)n={update:cd(t,e.key,e.value)};else if(e instanceof Sl)n={delete:Dc(t,e.key)};else if(e instanceof Sr)n={update:cd(t,e.key,e.data),updateMask:xI(e.fieldMask)};else{if(!(e instanceof dI))return ue();n={verify:Dc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof Fo)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof hi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof di)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Uo)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw ue()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:AI(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ue()}(t,e.precondition)),n}function PI(t,e){return t&&t.length>0?(Oe(e!==void 0),t.map(n=>function(s,i){let a=s.updateTime?Xt(s.updateTime):Xt(i);return a.isEqual(he.min())&&(a=Xt(i)),new lI(a,s.transformResults||[])}(n,e))):[]}function CI(t,e){return{documents:[tm(t,e.path)]}}function kI(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=tm(t,s);const i=function(h){if(h.length!==0)return sm(rn.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:Fr(g.field),direction:NI(g.dir)}}(f))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const c=Vc(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function OI(t){let e=RI(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Oe(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const g=rm(p);return g instanceof rn&&Dp(g)?g.getFilters():[g]}(n.where));let a=[];n.orderBy&&(a=function(p){return p.map(g=>function(O){return new Lo(Ur(O.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(O.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,la(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(p){const g=!!p.before,A=p.values||[];return new xo(A,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,A=p.values||[];return new xo(A,g)}(n.endAt)),QT(e,s,a,i,c,"F",l,h)}function VI(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ue()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function rm(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ur(n.unaryFilter.field);return We.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ur(n.unaryFilter.field);return We.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ur(n.unaryFilter.field);return We.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ur(n.unaryFilter.field);return We.create(a,"!=",{nullValue:"NULL_VALUE"});default:return ue()}}(t):t.fieldFilter!==void 0?function(n){return We.create(Ur(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ue()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return rn.create(n.compositeFilter.filters.map(r=>rm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ue()}}(n.compositeFilter.op))}(t):ue()}function NI(t){return EI[t]}function DI(t){return TI[t]}function MI(t){return II[t]}function Fr(t){return{fieldPath:t.canonicalString()}}function Ur(t){return nt.fromServerFormat(t.fieldPath)}function sm(t){return t instanceof We?function(n){if(n.op==="=="){if(Gh(n.value))return{unaryFilter:{field:Fr(n.field),op:"IS_NAN"}};if(Wh(n.value))return{unaryFilter:{field:Fr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Gh(n.value))return{unaryFilter:{field:Fr(n.field),op:"IS_NOT_NAN"}};if(Wh(n.value))return{unaryFilter:{field:Fr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fr(n.field),op:DI(n.op),value:n.value}}}(t):t instanceof rn?function(n){const r=n.getFilters().map(s=>sm(s));return r.length===1?r[0]:{compositeFilter:{op:MI(n.op),filters:r}}}(t):ue()}function xI(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function im(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,n,r,s,i=he.min(),a=he.min(),c=st.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Bn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e){this.ct=e}}function FI(t){const e=OI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Oc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(){this.un=new BI}addToCollectionParentIndex(e,n){return this.un.add(n),x.resolve()}getCollectionParents(e,n){return x.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return x.resolve()}deleteFieldIndex(e,n){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,n){return x.resolve()}getDocumentsMatchingTarget(e,n){return x.resolve(null)}getIndexType(e,n){return x.resolve(0)}getFieldIndexes(e,n){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,n){return x.resolve(Jn.min())}getMinOffsetFromCollectionGroup(e,n){return x.resolve(Jn.min())}updateCollectionGroup(e,n,r){return x.resolve()}updateIndexEntries(e,n){return x.resolve()}}class BI{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new rt(Me.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new rt(Me.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new is(0)}static kn(){return new is(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(){this.changes=new ms(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,lt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?x.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Xs(r.mutation,s,Ut.empty(),Ge.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ge()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ge()){const s=dr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let a=$s();return i.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=dr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ge()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{n.set(a,c)})})}computeViews(e,n,r,s){let i=vn();const a=Ys(),c=function(){return Ys()}();return n.forEach((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Sr)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Xs(f.mutation,h,f.mutation.getFieldMask(),Ge.now())):a.set(h.key,Ut.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>a.set(h,f)),n.forEach((h,f)=>{var p;return c.set(h,new jI(f,(p=a.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=Ys();let s=new Fe((a,c)=>a-c),i=ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const c of a)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let f=r.get(l)||Ut.empty();f=c.applyToLocalView(h,f),r.set(l,f);const p=(s.get(c.batchId)||ge()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=jp();f.forEach(g=>{if(!i.has(g)){const A=Gp(n.get(g),r.get(g));A!==null&&p.set(g,A),i=i.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return x.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(a){return ae.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):JT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):x.resolve(dr());let c=-1,l=i;return a.next(h=>x.forEach(h,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?x.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{l=l.insert(f,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,ge())).next(f=>({batchId:c,changes:$p(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ae(n)).next(r=>{let s=$s();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=$s();return this.indexManager.getCollectionParents(e,i).next(c=>x.forEach(c,l=>{const h=function(p,g){return new ua(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,g)=>{a=a.insert(p,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(a=>{i.forEach((l,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,lt.newInvalidDocument(f)))});let c=$s();return a.forEach((l,h)=>{const f=i.get(l);f!==void 0&&Xs(f.mutation,h,Ut.empty(),Ge.now()),da(n,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return x.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Xt(s.createTime)}}(n)),x.resolve()}getNamedQuery(e,n){return x.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:FI(s.bundledQuery),readTime:Xt(s.readTime)}}(n)),x.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(){this.overlays=new Fe(ae.comparator),this.Ir=new Map}getOverlay(e,n){return x.resolve(this.overlays.get(n))}getOverlays(e,n){const r=dr();return x.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),x.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),x.resolve()}getOverlaysForCollection(e,n,r){const s=dr(),i=n.length+1,a=new ae(n.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return x.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Fe((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=dr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=dr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return x.resolve(c)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new pI(n,r));let i=this.Ir.get(n);i===void 0&&(i=ge(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(){this.sessionToken=st.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,x.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(){this.Tr=new rt(Je.Er),this.dr=new rt(Je.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Je(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Je(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new ae(new Me([])),r=new Je(n,e),s=new Je(n,e+1),i=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new ae(new Me([])),r=new Je(n,e),s=new Je(n,e+1);let i=ge();return this.dr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const n=new Je(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Je{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return ae.comparator(e.key,n.key)||Ae(e.wr,n.wr)}static Ar(e,n){return Ae(e.wr,n.wr)||ae.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new rt(Je.Er)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new fI(i,n,r,s);this.mutationQueue.push(a);for(const c of s)this.br=this.br.add(new Je(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return x.resolve(a)}lookupMutationBatch(e,n){return x.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return x.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Je(n,0),s=new Je(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],a=>{const c=this.Dr(a.wr);i.push(c)}),x.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new rt(Ae);return n.forEach(s=>{const i=new Je(s,0),a=new Je(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],c=>{r=r.add(c.wr)})}),x.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ae.isDocumentKey(i)||(i=i.child(""));const a=new Je(new ae(i),0);let c=new rt(Ae);return this.br.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.wr)),!0)},a),x.resolve(this.Cr(c))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Oe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return x.forEach(n.mutations,s=>{const i=new Je(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Je(n,0),s=this.br.firstAfterOrEqual(r);return x.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e){this.Mr=e,this.docs=function(){return new Fe(ae.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return x.resolve(r?r.document.mutableCopy():lt.newInvalidDocument(n))}getEntries(e,n){let r=vn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():lt.newInvalidDocument(s))}),x.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=vn();const a=n.path,c=new ae(a.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||kT(CT(f),r)<=0||(s.has(f.key)||da(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return x.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ue()}Or(e,n){return x.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new QI(this)}getSize(e){return x.resolve(this.size)}}class QI extends $I{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),x.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e){this.persistence=e,this.Nr=new ms(n=>wl(n),Al),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ol,this.targetCount=0,this.kr=is.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),x.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new is(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,x.resolve()}updateTargetData(e,n){return this.Kn(n),x.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),x.waitFor(i).next(()=>s)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return x.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),x.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),x.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),x.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return x.resolve(r)}containsKey(e,n){return x.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e,n){this.qr={},this.overlays={},this.Qr=new vl(0),this.Kr=!1,this.Kr=!0,this.$r=new zI,this.referenceDelegate=e(this),this.Ur=new JI(this),this.indexManager=new UI,this.remoteDocumentCache=function(s){return new GI(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new LI(n),this.Gr=new HI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new KI,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new WI(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const s=new XI(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return x.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class XI extends VT{constructor(e){super(),this.currentSequenceNumber=e}}class Vl{constructor(e){this.persistence=e,this.Jr=new Ol,this.Yr=null}static Zr(e){return new Vl(e)}get Xr(){if(this.Yr)return this.Yr;throw ue()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),x.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),x.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.Xr,r=>{const s=ae.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,he.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return x.or([()=>x.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=ge(),s=ge();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Nl(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return rE()?8:NT(ft())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new ZI;return this.Xi(e,n,a).next(c=>{if(i.result=c,this.zi)return this.es(e,n,a,c.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Ms()<=_e.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",Lr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),x.resolve()):(Ms()<=_e.DEBUG&&ee("QueryEngine","Query:",Lr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Ms()<=_e.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",Lr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yt(n))):x.resolve())}Yi(e,n){if(Xh(n))return x.resolve(null);let r=Yt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Oc(n,null,"F"),r=Yt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=ge(...i);return this.Ji.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.ts(n,c);return this.ns(n,h,a,l.readTime)?this.Yi(e,Oc(n,null,"F")):this.rs(e,h,n,l)}))})))}Zi(e,n,r,s){return Xh(n)||s.isEqual(he.min())?x.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const a=this.ts(n,i);return this.ns(n,a,r,s)?x.resolve(null):(Ms()<=_e.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Lr(n)),this.rs(e,a,n,PT(s,-1)).next(c=>c))})}ts(e,n){let r=new rt(Up(e));return n.forEach((s,i)=>{da(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Ms()<=_e.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",Lr(n)),this.Ji.getDocumentsMatchingQuery(e,n,Jn.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Fe(Ae),this._s=new ms(i=>wl(i),Al),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qI(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function nw(t,e,n,r){return new tw(t,e,n,r)}async function om(t,e){const n=de(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let l=ge();for(const h of s){a.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:c}))})})}function rw(t,e){const n=de(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const p=h.batch,g=p.keys();let A=x.resolve();return g.forEach(O=>{A=A.next(()=>f.getEntry(l,O)).next(k=>{const V=h.docVersions.get(O);Oe(V!==null),k.version.compareTo(V)<0&&(p.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),f.addEntry(k)))})}),A.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=ge();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function am(t){const e=de(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function sw(t,e){const n=de(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const c=[];e.targetChanges.forEach((f,p)=>{const g=s.get(p);if(!g)return;c.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,p)));let A=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?A=A.withResumeToken(st.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),s=s.insert(p,A),function(k,V,B){return k.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(g,A,f)&&c.push(n.Ur.updateTargetData(i,A))});let l=vn(),h=ge();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(iw(i,a,e.documentUpdates).next(f=>{l=f.Ps,h=f.Is})),!r.isEqual(he.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return x.waitFor(c).next(()=>a.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.os=s,i))}function iw(t,e,n){let r=ge(),s=ge();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let a=vn();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(he.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):ee("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Ps:a,Is:s}})}function ow(t,e){const n=de(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function aw(t,e){const n=de(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,x.resolve(s)):n.Ur.allocateTargetId(r).next(a=>(s=new Bn(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function xc(t,e,n){const r=de(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Ai(a))throw a;ee("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function ld(t,e,n){const r=de(t);let s=he.min(),i=ge();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,h,f){const p=de(l),g=p._s.get(f);return g!==void 0?x.resolve(p.os.get(g)):p.Ur.getTargetData(h,f)}(r,a,Yt(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,c.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,n?s:he.min(),n?i:ge())).next(c=>(cw(r,XT(e),c),{documents:c,Ts:i})))}function cw(t,e,n){let r=t.us.get(e)||he.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class ud{constructor(){this.activeTargetIds=sI()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lw{constructor(){this.so=new ud,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new ud,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){ee("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){ee("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oo=null;function tc(){return oo===null?oo=function(){return 268435456+Math.round(2147483648*Math.random())}():oo++,"0x"+oo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="WebChannelConnection";class fw extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,a){const c=tc(),l=this.xo(n,r.toUriEncodedString());ee("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,a),this.No(n,l,h,s).then(f=>(ee("RestConnection",`Received RPC '${n}' ${c}: `,f),f),f=>{throw ts("RestConnection",`RPC '${n}' ${c} failed with error: `,f,"url: ",l,"request:",s),f})}Lo(n,r,s,i,a,c){return this.Mo(n,r,s,i,a)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>n[a]=i),s&&s.headers.forEach((i,a)=>n[a]=i)}xo(n,r){const s=hw[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=tc();return new Promise((a,c)=>{const l=new Tp;l.setWithCredentials(!0),l.listenOnce(wp.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case go.NO_ERROR:const f=l.getResponseJson();ee(at,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),a(f);break;case go.TIMEOUT:ee(at,`RPC '${e}' ${i} timed out`),c(new ie(M.DEADLINE_EXCEEDED,"Request time out"));break;case go.HTTP_ERROR:const p=l.getStatus();if(ee(at,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const A=g==null?void 0:g.error;if(A&&A.status&&A.message){const O=function(V){const B=V.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(B)>=0?B:M.UNKNOWN}(A.status);c(new ie(O,A.message))}else c(new ie(M.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new ie(M.UNAVAILABLE,"Connection failed."));break;default:ue()}}finally{ee(at,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);ee(at,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=tc(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=bp(),c=Rp(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.xmlHttpFactory=new Ip({})),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");ee(at,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=a.createWebChannel(f,l);let g=!1,A=!1;const O=new dw({Io:V=>{A?ee(at,`Not sending because RPC '${e}' stream ${s} is closed:`,V):(g||(ee(at,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),ee(at,`RPC '${e}' stream ${s} sending:`,V),p.send(V))},To:()=>p.close()}),k=(V,B,$)=>{V.listen(B,K=>{try{$(K)}catch(Y){setTimeout(()=>{throw Y},0)}})};return k(p,Bs.EventType.OPEN,()=>{A||(ee(at,`RPC '${e}' stream ${s} transport opened.`),O.yo())}),k(p,Bs.EventType.CLOSE,()=>{A||(A=!0,ee(at,`RPC '${e}' stream ${s} transport closed`),O.So())}),k(p,Bs.EventType.ERROR,V=>{A||(A=!0,ts(at,`RPC '${e}' stream ${s} transport errored:`,V),O.So(new ie(M.UNAVAILABLE,"The operation could not be completed")))}),k(p,Bs.EventType.MESSAGE,V=>{var B;if(!A){const $=V.data[0];Oe(!!$);const K=$,Y=K.error||((B=K[0])===null||B===void 0?void 0:B.error);if(Y){ee(at,`RPC '${e}' stream ${s} received error:`,Y);const Z=Y.status;let J=function(E){const w=Ke[E];if(w!==void 0)return Jp(w)}(Z),T=Y.message;J===void 0&&(J=M.INTERNAL,T="Unknown error status: "+Z+" with message "+Y.message),A=!0,O.So(new ie(J,T)),p.close()}else ee(at,`RPC '${e}' stream ${s} received:`,$),O.bo($)}}),k(c,Ap.STAT_EVENT,V=>{V.stat===bc.PROXY?ee(at,`RPC '${e}' stream ${s} detected buffering proxy`):V.stat===bc.NOPROXY&&ee(at,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{O.wo()},0),O}}function nc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(t){return new wI(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&ee("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e,n,r,s,i,a,c,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new cm(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(yn(n.toString()),yn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new ie(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return ee("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(ee("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pw extends lm{constructor(e,n,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=bI(this.serializer,e),r=function(i){if(!("targetChange"in i))return he.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?he.min():a.readTime?Xt(a.readTime):he.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Mc(this.serializer),n.addTarget=function(i,a){let c;const l=a.target;if(c=kc(l)?{documents:CI(i,l)}:{query:kI(i,l)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Zp(i,a.resumeToken);const h=Vc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(he.min())>0){c.readTime=Bo(i,a.snapshotVersion.toTimestamp());const h=Vc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=VI(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Mc(this.serializer),n.removeTarget=e,this.a_(n)}}class mw extends lm{constructor(e,n,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Oe(!!e.streamToken),this.lastStreamToken=e.streamToken,Oe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=PI(e.writeResults,e.commitTime),r=Xt(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Mc(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>SI(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new ie(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(e,Nc(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ie(M.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(e,Nc(n,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ie(M.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class _w{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(yn(n),this.D_=!1):ee("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{r.enqueueAndForget(async()=>{Pr(this)&&(ee("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=de(l);h.L_.add(4),await Si(h),h.q_.set("Unknown"),h.L_.delete(4),await _a(h)}(this))})}),this.q_=new _w(r,s)}}async function _a(t){if(Pr(t))for(const e of t.B_)await e(!0)}async function Si(t){for(const e of t.B_)await e(!1)}function um(t,e){const n=de(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Ll(n)?xl(n):gs(n).r_()&&Ml(n,e))}function Dl(t,e){const n=de(t),r=gs(n);n.N_.delete(e),r.r_()&&hm(n,e),n.N_.size===0&&(r.r_()?r.o_():Pr(n)&&n.q_.set("Unknown"))}function Ml(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}gs(t).A_(e)}function hm(t,e){t.Q_.xe(e),gs(t).R_(e)}function xl(t){t.Q_=new vI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),gs(t).start(),t.q_.v_()}function Ll(t){return Pr(t)&&!gs(t).n_()&&t.N_.size>0}function Pr(t){return de(t).L_.size===0}function dm(t){t.Q_=void 0}async function vw(t){t.q_.set("Online")}async function Ew(t){t.N_.forEach((e,n)=>{Ml(t,e)})}async function Tw(t,e){dm(t),Ll(t)?(t.q_.M_(e),xl(t)):t.q_.set("Unknown")}async function Iw(t,e,n){if(t.q_.set("Online"),e instanceof Xp&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.N_.delete(c),s.Q_.removeTarget(c))}(t,e)}catch(r){ee("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await $o(t,r)}else if(e instanceof vo?t.Q_.Ke(e):e instanceof Yp?t.Q_.He(e):t.Q_.We(e),!n.isEqual(he.min()))try{const r=await am(t.localStore);n.compareTo(r)>=0&&await function(i,a){const c=i.Q_.rt(a);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,h)=>{const f=i.N_.get(l);if(!f)return;i.N_.set(l,f.withResumeToken(st.EMPTY_BYTE_STRING,f.snapshotVersion)),hm(i,l);const p=new Bn(f.target,l,h,f.sequenceNumber);Ml(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){ee("RemoteStore","Failed to raise snapshot:",r),await $o(t,r)}}async function $o(t,e,n){if(!Ai(e))throw e;t.L_.add(1),await Si(t),t.q_.set("Offline"),n||(n=()=>am(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await _a(t)})}function fm(t,e){return e().catch(n=>$o(t,n,e))}async function ya(t){const e=de(t),n=Xn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;ww(e);)try{const s=await ow(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,Aw(e,s)}catch(s){await $o(e,s)}pm(e)&&mm(e)}function ww(t){return Pr(t)&&t.O_.length<10}function Aw(t,e){t.O_.push(e);const n=Xn(t);n.r_()&&n.V_&&n.m_(e.mutations)}function pm(t){return Pr(t)&&!Xn(t).n_()&&t.O_.length>0}function mm(t){Xn(t).start()}async function Rw(t){Xn(t).p_()}async function bw(t){const e=Xn(t);for(const n of t.O_)e.m_(n.mutations)}async function Sw(t,e,n){const r=t.O_.shift(),s=Pl.from(r,e,n);await fm(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ya(t)}async function Pw(t,e){e&&Xn(t).V_&&await async function(r,s){if(function(a){return gI(a)&&a!==M.ABORTED}(s.code)){const i=r.O_.shift();Xn(r).s_(),await fm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ya(r)}}(t,e),pm(t)&&mm(t)}async function dd(t,e){const n=de(t);n.asyncQueue.verifyOperationInProgress(),ee("RemoteStore","RemoteStore received new credentials");const r=Pr(n);n.L_.add(3),await Si(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await _a(n)}async function Cw(t,e){const n=de(t);e?(n.L_.delete(2),await _a(n)):e||(n.L_.add(2),await Si(n),n.q_.set("Unknown"))}function gs(t){return t.K_||(t.K_=function(n,r,s){const i=de(n);return i.w_(),new pw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:vw.bind(null,t),Ro:Ew.bind(null,t),mo:Tw.bind(null,t),d_:Iw.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Ll(t)?xl(t):t.q_.set("Unknown")):(await t.K_.stop(),dm(t))})),t.K_}function Xn(t){return t.U_||(t.U_=function(n,r,s){const i=de(n);return i.w_(),new mw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Rw.bind(null,t),mo:Pw.bind(null,t),f_:bw.bind(null,t),g_:Sw.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await ya(t)):(await t.U_.stop(),t.O_.length>0&&(ee("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new mn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,c=new Fl(e,n,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ul(t,e){if(yn("AsyncQueue",`${e}: ${t}`),Ai(t))return new ie(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ae.comparator(n.key,r.key):(n,r)=>ae.comparator(n.key,r.key),this.keyedMap=$s(),this.sortedSet=new Fe(this.comparator)}static emptySet(e){return new Gr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Gr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Gr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(){this.W_=new Fe(ae.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ue():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class os{constructor(e,n,r,s,i,a,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const a=[];return n.forEach(c=>{a.push({type:0,doc:c})}),new os(e,n,Gr.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ha(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Ow{constructor(){this.queries=pd(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=de(n),i=s.queries;s.queries=pd(),i.forEach((a,c)=>{for(const l of c.j_)l.onError(r)})})(this,new ie(M.ABORTED,"Firestore shutting down"))}}function pd(){return new ms(t=>Fp(t),ha)}async function gm(t,e){const n=de(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new kw,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const c=Ul(a,`Initialization of query '${Lr(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Bl(n)}async function _m(t,e){const n=de(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const a=i.j_.indexOf(e);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Vw(t,e){const n=de(t);let r=!1;for(const s of e){const i=s.query,a=n.queries.get(i);if(a){for(const c of a.j_)c.X_(s)&&(r=!0);a.z_=s}}r&&Bl(n)}function Nw(t,e,n){const r=de(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Bl(t){t.Y_.forEach(e=>{e.next()})}var Lc,md;(md=Lc||(Lc={})).ea="default",md.Cache="cache";class ym{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new os(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=os.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Lc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e){this.key=e}}class Em{constructor(e){this.key=e}}class Dw{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ge(),this.mutatedKeys=ge(),this.Aa=Up(e),this.Ra=new Gr(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new fd,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const g=s.get(f),A=da(this.query,p)?p:null,O=!!g&&this.mutatedKeys.has(g.key),k=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let V=!1;g&&A?g.data.isEqual(A.data)?O!==k&&(r.track({type:3,doc:A}),V=!0):this.ga(g,A)||(r.track({type:2,doc:A}),V=!0,(l&&this.Aa(A,l)>0||h&&this.Aa(A,h)<0)&&(c=!0)):!g&&A?(r.track({type:0,doc:A}),V=!0):g&&!A&&(r.track({type:1,doc:g}),V=!0,(l||h)&&(c=!0)),V&&(A?(a=a.add(A),i=k?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:a,fa:r,ns:c,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((f,p)=>function(A,O){const k=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ue()}};return k(A)-k(O)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),s=s!=null&&s;const c=n&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,h=l!==this.Ea;return this.Ea=l,a.length!==0||h?{snapshot:new os(this.query,e.Ra,i,a,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new fd,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ge(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new Em(r))}),this.da.forEach(r=>{e.has(r)||n.push(new vm(r))}),n}ba(e){this.Ta=e.Ts,this.da=ge();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return os.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Mw{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class xw{constructor(e){this.key=e,this.va=!1}}class Lw{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new ms(c=>Fp(c),ha),this.Ma=new Map,this.xa=new Set,this.Oa=new Fe(ae.comparator),this.Na=new Map,this.La=new Ol,this.Ba={},this.ka=new Map,this.qa=is.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Fw(t,e,n=!0){const r=bm(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Tm(r,e,n,!0),s}async function Uw(t,e){const n=bm(t);await Tm(n,e,!0,!1)}async function Tm(t,e,n,r){const s=await aw(t.localStore,Yt(e)),i=s.targetId,a=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let c;return r&&(c=await Bw(t,e,i,a==="current",s.resumeToken)),t.isPrimaryClient&&n&&um(t.remoteStore,s),c}async function Bw(t,e,n,r,s){t.Ka=(p,g,A)=>async function(k,V,B,$){let K=V.view.ma(B);K.ns&&(K=await ld(k.localStore,V.query,!1).then(({documents:T})=>V.view.ma(T,K)));const Y=$&&$.targetChanges.get(V.targetId),Z=$&&$.targetMismatches.get(V.targetId)!=null,J=V.view.applyChanges(K,k.isPrimaryClient,Y,Z);return _d(k,V.targetId,J.wa),J.snapshot}(t,p,g,A);const i=await ld(t.localStore,e,!0),a=new Dw(e,i.Ts),c=a.ma(i.documents),l=bi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=a.applyChanges(c,t.isPrimaryClient,l);_d(t,n,h.wa);const f=new Mw(e,n,a);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function $w(t,e,n){const r=de(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(a=>!ha(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await xc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Dl(r.remoteStore,s.targetId),Fc(r,s.targetId)}).catch(wi)):(Fc(r,s.targetId),await xc(r.localStore,s.targetId,!0))}async function jw(t,e){const n=de(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Dl(n.remoteStore,r.targetId))}async function qw(t,e,n){const r=Jw(t);try{const s=await function(a,c){const l=de(a),h=Ge.now(),f=c.reduce((A,O)=>A.add(O.key),ge());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",A=>{let O=vn(),k=ge();return l.cs.getEntries(A,f).next(V=>{O=V,O.forEach((B,$)=>{$.isValidDocument()||(k=k.add(B))})}).next(()=>l.localDocuments.getOverlayedDocuments(A,O)).next(V=>{p=V;const B=[];for(const $ of c){const K=hI($,p.get($.key).overlayedDocument);K!=null&&B.push(new Sr($.key,K,Op(K.value.mapValue),$t.exists(!0)))}return l.mutationQueue.addMutationBatch(A,h,B,c)}).next(V=>{g=V;const B=V.applyToLocalDocumentSet(p,k);return l.documentOverlayCache.saveOverlays(A,V.batchId,B)})}).then(()=>({batchId:g.batchId,changes:$p(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,l){let h=a.Ba[a.currentUser.toKey()];h||(h=new Fe(Ae)),h=h.insert(c,l),a.Ba[a.currentUser.toKey()]=h}(r,s.batchId,n),await Pi(r,s.changes),await ya(r.remoteStore)}catch(s){const i=Ul(s,"Failed to persist write");n.reject(i)}}async function Im(t,e){const n=de(t);try{const r=await sw(n.localStore,e);e.targetChanges.forEach((s,i)=>{const a=n.Na.get(i);a&&(Oe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?Oe(a.va):s.removedDocuments.size>0&&(Oe(a.va),a.va=!1))}),await Pi(n,r,e)}catch(r){await wi(r)}}function gd(t,e,n){const r=de(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,a)=>{const c=a.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const l=de(a);l.onlineState=c;let h=!1;l.queries.forEach((f,p)=>{for(const g of p.j_)g.Z_(c)&&(h=!0)}),h&&Bl(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Hw(t,e,n){const r=de(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let a=new Fe(ae.comparator);a=a.insert(i,lt.newNoDocument(i,he.min()));const c=ge().add(i),l=new ma(he.min(),new Map,new Fe(Ae),a,c);await Im(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),$l(r)}else await xc(r.localStore,e,!1).then(()=>Fc(r,e,n)).catch(wi)}async function Kw(t,e){const n=de(t),r=e.batch.batchId;try{const s=await rw(n.localStore,e);Am(n,r,null),wm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Pi(n,s)}catch(s){await wi(s)}}async function zw(t,e,n){const r=de(t);try{const s=await function(a,c){const l=de(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(Oe(p!==null),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(r.localStore,e);Am(r,e,n),wm(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Pi(r,s)}catch(s){await wi(s)}}function wm(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Am(t,e,n){const r=de(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Fc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||Rm(t,r)})}function Rm(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Dl(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),$l(t))}function _d(t,e,n){for(const r of n)r instanceof vm?(t.La.addReference(r.key,e),Ww(t,r)):r instanceof Em?(ee("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||Rm(t,r.key)):ue()}function Ww(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(ee("SyncEngine","New document in limbo: "+n),t.xa.add(r),$l(t))}function $l(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new ae(Me.fromString(e)),r=t.qa.next();t.Na.set(r,new xw(n)),t.Oa=t.Oa.insert(n,r),um(t.remoteStore,new Bn(Yt(Rl(n.path)),r,"TargetPurposeLimboResolution",vl.oe))}}async function Pi(t,e,n){const r=de(t),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{a.push(r.Ka(l,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Nl.Wi(l.targetId,h);i.push(p)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(l,h){const f=de(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>x.forEach(h,g=>x.forEach(g.$i,A=>f.persistence.referenceDelegate.addReference(p,g.targetId,A)).next(()=>x.forEach(g.Ui,A=>f.persistence.referenceDelegate.removeReference(p,g.targetId,A)))))}catch(p){if(!Ai(p))throw p;ee("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const A=f.os.get(g),O=A.snapshotVersion,k=A.withLastLimboFreeSnapshotVersion(O);f.os=f.os.insert(g,k)}}}(r.localStore,i))}async function Gw(t,e){const n=de(t);if(!n.currentUser.isEqual(e)){ee("SyncEngine","User change. New user:",e.toKey());const r=await om(n.localStore,e);n.currentUser=e,function(i,a){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new ie(M.CANCELLED,a))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Pi(n,r.hs)}}function Qw(t,e){const n=de(t),r=n.Na.get(e);if(r&&r.va)return ge().add(r.key);{let s=ge();const i=n.Ma.get(e);if(!i)return s;for(const a of i){const c=n.Fa.get(a);s=s.unionWith(c.view.Va)}return s}}function bm(t){const e=de(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Im.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Qw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Hw.bind(null,e),e.Ca.d_=Vw.bind(null,e.eventManager),e.Ca.$a=Nw.bind(null,e.eventManager),e}function Jw(t){const e=de(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Kw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zw.bind(null,e),e}class yd{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ga(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return nw(this.persistence,new ew,e.initialUser,this.serializer)}createPersistence(e){return new YI(Vl.Zr,this.serializer)}createSharedClientState(e){return new lw}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Yw{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>gd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Gw.bind(null,this.syncEngine),await Cw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Ow}()}createDatastore(e){const n=ga(e.databaseInfo.databaseId),r=function(i){return new fw(i)}(e.databaseInfo);return function(i,a,c,l){return new gw(i,a,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,a,c){return new yw(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,n=>gd(this.syncEngine,n,0),function(){return hd.D()?new hd:new uw}())}createSyncEngine(e,n){return function(s,i,a,c,l,h,f){const p=new Lw(s,i,a,c,l,h);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=de(s);ee("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Si(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):yn("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ct.UNAUTHENTICATED,this.clientId=Pp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{ee("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(ee("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ie(M.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ul(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function rc(t,e){t.asyncQueue.verifyOperationInProgress(),ee("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await om(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function vd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await eA(t);ee("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>dd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>dd(e.remoteStore,s)),t._onlineComponents=e}function Zw(t){return t.name==="FirebaseError"?t.code===M.FAILED_PRECONDITION||t.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function eA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee("FirestoreClient","Using user provided OfflineComponentProvider");try{await rc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Zw(n))throw n;ts("Error using user provided cache. Falling back to memory cache: "+n),await rc(t,new yd)}}else ee("FirestoreClient","Using default OfflineComponentProvider"),await rc(t,new yd);return t._offlineComponents}async function Pm(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee("FirestoreClient","Using user provided OnlineComponentProvider"),await vd(t,t._uninitializedComponentsProvider._online)):(ee("FirestoreClient","Using default OnlineComponentProvider"),await vd(t,new Yw))),t._onlineComponents}function tA(t){return Pm(t).then(e=>e.syncEngine)}async function Cm(t){const e=await Pm(t),n=e.eventManager;return n.onListen=Fw.bind(null,e.syncEngine),n.onUnlisten=$w.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Uw.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=jw.bind(null,e.syncEngine),n}function nA(t,e,n={}){const r=new mn;return t.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,h){const f=new Sm({next:g=>{a.enqueueAndForget(()=>_m(i,p));const A=g.docs.has(c);!A&&g.fromCache?h.reject(new ie(M.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&g.fromCache&&l&&l.source==="server"?h.reject(new ie(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new ym(Rl(c.path),f,{includeMetadataChanges:!0,_a:!0});return gm(i,p)}(await Cm(t),t.asyncQueue,e,n,r)),r.promise}function rA(t,e,n={}){const r=new mn;return t.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,h){const f=new Sm({next:g=>{a.enqueueAndForget(()=>_m(i,p)),g.fromCache&&l.source==="server"?h.reject(new ie(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new ym(c,f,{includeMetadataChanges:!0,_a:!0});return gm(i,p)}(await Cm(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function km(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(t,e,n){if(!n)throw new ie(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function sA(t,e,n,r){if(e===!0&&r===!0)throw new ie(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Td(t){if(!ae.isDocumentKey(t))throw new ie(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Id(t){if(ae.isDocumentKey(t))throw new ie(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function jl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ue()}function En(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ie(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=jl(t);throw new ie(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ie(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ie(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}sA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=km((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ie(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ie(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ie(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class va{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ie(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ie(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wd(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new vT;switch(r.type){case"firstParty":return new wT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ie(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ed.get(n);r&&(ee("ComponentProvider","Removing Datastore"),Ed.delete(n),r.terminate())}(this),Promise.resolve()}}function iA(t,e,n,r={}){var s;const i=(t=En(t,va))._getSettings(),a=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&ts("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=ct.MOCK_USER;else{c=Yv(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new ie(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ct(h)}t._authCredentials=new ET(new Sp(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ea(this.firestore,e,this._query)}}class Ct{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ct(this.firestore,e,this._key)}}class Gn extends Ea{constructor(e,n,r){super(e,n,Rl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ct(this.firestore,null,new ae(e))}withConverter(e){return new Gn(this.firestore,e,this._path)}}function $n(t,e,...n){if(t=It(t),Om("collection","path",e),t instanceof va){const r=Me.fromString(e,...n);return Id(r),new Gn(t,null,r)}{if(!(t instanceof Ct||t instanceof Gn))throw new ie(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Me.fromString(e,...n));return Id(r),new Gn(t.firestore,null,r)}}function ln(t,e,...n){if(t=It(t),arguments.length===1&&(e=Pp.newId()),Om("doc","path",e),t instanceof va){const r=Me.fromString(e,...n);return Td(r),new Ct(t,null,new ae(r))}{if(!(t instanceof Ct||t instanceof Gn))throw new ie(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Me.fromString(e,...n));return Td(r),new Ct(t.firestore,t instanceof Gn?t.converter:null,new ae(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new cm(this,"async_queue_retry"),this.Eu=()=>{const n=nc();n&&ee("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=nc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=nc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new mn;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!Ai(e))throw e;ee("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw yn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const s=Fl.createAndSchedule(this,e,n,r,i=>this.Vu(i));return this.lu.push(s),s}du(){this.hu&&ue()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}class _s extends va{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new oA}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Vm(this),this._firestoreClient.terminate()}}function Ci(t,e){const n=typeof t=="object"?t:_p(),r=typeof t=="string"?t:"(default)",s=_l(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Qv("firestore");i&&iA(s,...i)}return s}function ql(t){return t._firestoreClient||Vm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Vm(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,h,f){return new xT(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,km(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new Xw(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this._byteString=e}static fromBase64String(e){try{return new as(st.fromBase64String(e))}catch(n){throw new ie(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new as(st.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ie(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ie(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ie(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA=/^__.*__$/;class cA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Sr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ri(e,this.data,n,this.fieldTransforms)}}function Dm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ue()}}class Wl{constructor(e,n,r,s,i,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.yu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new Wl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:r,Du:!1});return s.vu(e),s}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:r,Du:!1});return s.yu(),s}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return jo(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(Dm(this.wu)&&aA.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class lA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ga(e)}Nu(e,n,r,s=!1){return new Wl({wu:e,methodName:n,Ou:r,path:nt.emptyPath(),Du:!1,xu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Mm(t){const e=t._freezeSettings(),n=ga(t._databaseId);return new lA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function xm(t,e,n,r,s,i={}){const a=t.Nu(i.merge||i.mergeFields?2:0,e,n,s);Bm("Data must be an object, but it was:",a,r);const c=Fm(r,a);let l,h;if(i.merge)l=new Ut(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=uA(e,p,n);if(!a.contains(g))throw new ie(M.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);dA(f,g)||f.push(g)}l=new Ut(f),h=a.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=a.fieldTransforms;return new cA(new Vt(c),l,h)}function Lm(t,e){if(Um(t=It(t)))return Bm("Unsupported field value:",e,t),Fm(t,e);if(t instanceof Nm)return function(r,s){if(!Dm(s.wu))throw s.Mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let l=Lm(c,s.Fu(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=It(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return iI(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ge.fromDate(r);return{timestampValue:Bo(s.serializer,i)}}if(r instanceof Ge){const i=new Ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Bo(s.serializer,i)}}if(r instanceof Kl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof as)return{bytesValue:Zp(s.serializer,r._byteString)};if(r instanceof Ct){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Mu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:kl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof zl)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(l=>{if(typeof l!="number")throw c.Mu("VectorValues must only contain numeric values.");return bl(c.serializer,l)})}}}}}}(r,s);throw s.Mu(`Unsupported field value: ${jl(r)}`)}(t,e)}function Fm(t,e){const n={};return Cp(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ps(t,(r,s)=>{const i=Lm(s,e.bu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Um(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ge||t instanceof Kl||t instanceof as||t instanceof Ct||t instanceof Nm||t instanceof zl)}function Bm(t,e,n){if(!Um(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=jl(n);throw r==="an object"?e.Mu(t+" a custom object"):e.Mu(t+" "+r)}}function uA(t,e,n){if((e=It(e))instanceof Hl)return e._internalPath;if(typeof e=="string")return $m(t,e);throw jo("Field path arguments must be of type string or ",t,!1,void 0,n)}const hA=new RegExp("[~\\*/\\[\\]]");function $m(t,e,n){if(e.search(hA)>=0)throw jo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Hl(...e.split("."))._internalPath}catch{throw jo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function jo(t,e,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new ie(M.INVALID_ARGUMENT,c+t+l)}function dA(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new fA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(qm("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class fA extends jm{data(){return super.data()}}function qm(t,e){return typeof e=="string"?$m(t,e):e instanceof Hl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ie(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class mA{convertValue(e,n="none"){switch(wr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ir(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ue()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ps(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>He(a.doubleValue));return new zl(i)}convertGeoPoint(e){return new Kl(He(e.latitude),He(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Tl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ci(e));default:return null}}convertTimestamp(e){const n=Yn(e);return new Ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Me.fromString(e);Oe(im(r));const s=new li(r.get(1),r.get(3)),i=new ae(r.popFirst(5));return s.isEqual(n)||yn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Km extends jm{constructor(e,n,r,s,i,a){super(e,n,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Eo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(qm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Eo extends Km{data(e={}){return super.data(e)}}class gA{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new qs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Eo(this._firestore,this._userDataWriter,r.key,r,new qs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ie(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const l=new Eo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new qs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Eo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new qs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:_A(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function _A(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ue()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(t){t=En(t,Ct);const e=En(t.firestore,_s);return nA(ql(e),t._key).then(n=>yA(e,t,n))}class zm extends mA{constructor(e){super(),this.firestore=e}convertBytes(e){return new as(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,n)}}function Bc(t){t=En(t,Ea);const e=En(t.firestore,_s),n=ql(e),r=new zm(e);return pA(t._query),rA(n,t._query).then(s=>new gA(e,r,t,s))}function $c(t,e,n){t=En(t,Ct);const r=En(t.firestore,_s),s=Hm(t.converter,e);return Gl(r,[xm(Mm(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,$t.none())])}function Ad(t){return Gl(En(t.firestore,_s),[new Sl(t._key,$t.none())])}function Rd(t,e){const n=En(t.firestore,_s),r=ln(t),s=Hm(t.converter,e);return Gl(n,[xm(Mm(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,$t.exists(!1))]).then(()=>r)}function Gl(t,e){return function(r,s){const i=new mn;return r.asyncQueue.enqueueAndForget(async()=>qw(await tA(r),s,i)),i.promise}(ql(t),e)}function yA(t,e,n){const r=n.docs.get(e._key),s=new zm(t);return new Km(t,s,e._key,r,new qs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){fs=s})(ds),es(new Er("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new _s(new TT(r.getProvider("auth-internal")),new RT(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new ie(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new li(h.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Wn(jh,"4.7.1",e),Wn(jh,"4.7.1","esm2017")})();var vA="firebase",EA="10.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wn(vA,EA,"app");function Ql(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Wm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const TA=Wm,Gm=new Ti("auth","Firebase",Wm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo=new ml("@firebase/auth");function IA(t,...e){qo.logLevel<=_e.WARN&&qo.warn(`Auth (${ds}): ${t}`,...e)}function To(t,...e){qo.logLevel<=_e.ERROR&&qo.error(`Auth (${ds}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t,...e){throw Jl(t,...e)}function Zt(t,...e){return Jl(t,...e)}function Qm(t,e,n){const r=Object.assign(Object.assign({},TA()),{[e]:n});return new Ti("auth","Firebase",r).create(e,{appName:t.name})}function gn(t){return Qm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Jl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Gm.create(t,...e)}function le(t,e,...n){if(!t)throw Jl(e,...n)}function un(t){const e="INTERNAL ASSERTION FAILED: "+t;throw To(e),new Error(e)}function Tn(t,e){t||un(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function wA(){return bd()==="http:"||bd()==="https:"}function bd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wA()||eE()||"connection"in navigator)?navigator.onLine:!0}function RA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tn(n>e,"Short delay should be less than long delay!"),this.isMobile=Xv()||tE()}get(){return AA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yl(t,e){Tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA=new ki(3e4,6e4);function tr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function nr(t,e,n,r,s={}){return Ym(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=Ii(Object.assign({key:t.config.apiKey},a)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Jm.fetch()(Xm(t,t.config.apiHost,n,c),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Ym(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},bA),e);try{const s=new CA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw ao(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ao(t,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw ao(t,"email-already-in-use",a);if(l==="USER_DISABLED")throw ao(t,"user-disabled",a);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Qm(t,f,h);qt(t,f)}}catch(s){if(s instanceof wn)throw s;qt(t,"network-request-failed",{message:String(s)})}}async function Oi(t,e,n,r,s={}){const i=await nr(t,e,n,r,s);return"mfaPendingCredential"in i&&qt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Xm(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Yl(t.config,s):`${t.config.apiScheme}://${s}`}function PA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class CA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Zt(this.auth,"network-request-failed")),SA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ao(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Zt(t,e,r);return s.customData._tokenResponse=n,s}function Sd(t){return t!==void 0&&t.enterprise!==void 0}class kA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return PA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function OA(t,e){return nr(t,"GET","/v2/recaptchaConfig",tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VA(t,e){return nr(t,"POST","/v1/accounts:delete",e)}async function Zm(t,e){return nr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function NA(t,e=!1){const n=It(t),r=await n.getIdToken(e),s=Xl(r);le(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Zs(sc(s.auth_time)),issuedAtTime:Zs(sc(s.iat)),expirationTime:Zs(sc(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function sc(t){return Number(t)*1e3}function Xl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return To("JWT malformed, contained fewer than 3 sections"),null;try{const s=up(n);return s?JSON.parse(s):(To("Failed to decode base64 JWT payload"),null)}catch(s){return To("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Pd(t){const e=Xl(t);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wn&&DA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function DA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zs(this.lastLoginAt),this.creationTime=Zs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ho(t){var e;const n=t.auth,r=await t.getIdToken(),s=await fi(t,Zm(n,{idToken:r}));le(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?eg(i.providerUserInfo):[],c=LA(t.providerData,a),l=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new qc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function xA(t){const e=It(t);await Ho(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function LA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function eg(t){return t.map(e=>{var{providerId:n}=e,r=Ql(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FA(t,e){const n=await Ym(t,{},async()=>{const r=Ii({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=Xm(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Jm.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function UA(t,e){return nr(t,"POST","/v2/accounts:revokeToken",tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Pd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){le(e.length!==0,"internal-error");const n=Pd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(le(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await FA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new Qr;return r&&(le(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(le(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(le(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qr,this.toJSON())}_performRefresh(){return un("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(t,e){le(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class hn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ql(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new MA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new qc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await fi(this,this.stsTokenManager.getToken(this.auth,e));return le(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return NA(this,e)}reload(){return xA(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new hn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ho(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qt(this.auth.app))return Promise.reject(gn(this.auth));const e=await this.getIdToken();return await fi(this,VA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,a,c,l,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,A=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,O=(a=n.photoURL)!==null&&a!==void 0?a:void 0,k=(c=n.tenantId)!==null&&c!==void 0?c:void 0,V=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,B=(h=n.createdAt)!==null&&h!==void 0?h:void 0,$=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:K,emailVerified:Y,isAnonymous:Z,providerData:J,stsTokenManager:T}=n;le(K&&T,e,"internal-error");const _=Qr.fromJSON(this.name,T);le(typeof K=="string",e,"internal-error"),Cn(p,e.name),Cn(g,e.name),le(typeof Y=="boolean",e,"internal-error"),le(typeof Z=="boolean",e,"internal-error"),Cn(A,e.name),Cn(O,e.name),Cn(k,e.name),Cn(V,e.name),Cn(B,e.name),Cn($,e.name);const E=new hn({uid:K,auth:e,email:g,emailVerified:Y,displayName:p,isAnonymous:Z,photoURL:O,phoneNumber:A,tenantId:k,stsTokenManager:_,createdAt:B,lastLoginAt:$});return J&&Array.isArray(J)&&(E.providerData=J.map(w=>Object.assign({},w))),V&&(E._redirectEventId=V),E}static async _fromIdTokenResponse(e,n,r=!1){const s=new Qr;s.updateFromServerResponse(n);const i=new hn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ho(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];le(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?eg(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Qr;c.updateFromIdToken(r);const l=new hn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new qc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd=new Map;function dn(t){Tn(t instanceof Function,"Expected a class definition");let e=Cd.get(t);return e?(Tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Cd.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}tg.type="NONE";const kd=tg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(t,e,n){return`firebase:${t}:${e}:${n}`}class Jr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Io(this.userKey,s.apiKey,i),this.fullPersistenceKey=Io("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?hn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Jr(dn(kd),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||dn(kd);const a=Io(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const f=await h._get(a);if(f){const p=hn._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Jr(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Jr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ig(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ng(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ag(e))return"Blackberry";if(cg(e))return"Webos";if(rg(e))return"Safari";if((e.includes("chrome/")||sg(e))&&!e.includes("edge/"))return"Chrome";if(og(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ng(t=ft()){return/firefox\//i.test(t)}function rg(t=ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function sg(t=ft()){return/crios\//i.test(t)}function ig(t=ft()){return/iemobile/i.test(t)}function og(t=ft()){return/android/i.test(t)}function ag(t=ft()){return/blackberry/i.test(t)}function cg(t=ft()){return/webos/i.test(t)}function Zl(t=ft()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function BA(t=ft()){var e;return Zl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $A(){return nE()&&document.documentMode===10}function lg(t=ft()){return Zl(t)||og(t)||cg(t)||ag(t)||/windows phone/i.test(t)||ig(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(t,e=[]){let n;switch(t){case"Browser":n=Od(ft());break;case"Worker":n=`${Od(ft())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ds}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qA(t,e={}){return nr(t,"GET","/v2/passwordPolicy",tr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA=6;class KA{constructor(e){var n,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:HA,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vd(this),this.idTokenSubscription=new Vd(this),this.beforeStateQueue=new jA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=dn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Jr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Zm(this,{idToken:e}),r=await hn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Qt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ho(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=RA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qt(this.app))return Promise.reject(gn(this));const n=e?It(e):null;return n&&le(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qt(this.app)?Promise.reject(gn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qt(this.app)?Promise.reject(gn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await qA(this),n=new KA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ti("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await UA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&dn(e)||this._popupRedirectResolver;le(n,this,"argument-error"),this.redirectPersistenceManager=await Jr.create(this,[dn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(n);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ug(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&IA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Cr(t){return It(t)}class Vd{constructor(e){this.auth=e,this.observer=null,this.addObserver=uE(n=>this.observer=n)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ta={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function WA(t){Ta=t}function hg(t){return Ta.loadJS(t)}function GA(){return Ta.recaptchaEnterpriseScript}function QA(){return Ta.gapiScript}function JA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const YA="recaptcha-enterprise",XA="NO_RECAPTCHA";class ZA{constructor(e){this.type=YA,this.auth=Cr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{OA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new kA(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,a,c){const l=window.grecaptcha;Sd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(XA)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,a)=>{r(this.auth).then(c=>{if(!n&&Sd(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=GA();l.length!==0&&(l+=c),hg(l).then(()=>{s(c,i,a)}).catch(h=>{a(h)})}}).catch(c=>{a(c)})})}}async function Nd(t,e,n,r=!1){const s=new ZA(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:i}):Object.assign(a,{captchaResponse:i}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Hc(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Nd(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Nd(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e0(t,e){const n=_l(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(No(i,e??{}))return s;qt(s,"already-initialized")}return n.initialize({options:e})}function t0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(dn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function n0(t,e,n){const r=Cr(t);le(r._canInitEmulator,r,"emulator-config-failed"),le(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=dg(e),{host:a,port:c}=r0(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s0()}function dg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function r0(t){const e=dg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Dd(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Dd(a)}}}function Dd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function s0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return un("not implemented")}_getIdTokenResponse(e){return un("not implemented")}_linkToIdToken(e,n){return un("not implemented")}_getReauthenticationResolver(e){return un("not implemented")}}async function i0(t,e){return nr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o0(t,e){return Oi(t,"POST","/v1/accounts:signInWithPassword",tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a0(t,e){return Oi(t,"POST","/v1/accounts:signInWithEmailLink",tr(t,e))}async function c0(t,e){return Oi(t,"POST","/v1/accounts:signInWithEmailLink",tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends eu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new pi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new pi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hc(e,n,"signInWithPassword",o0);case"emailLink":return a0(e,{email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hc(e,r,"signUpPassword",i0);case"emailLink":return c0(e,{idToken:n,email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yr(t,e){return Oi(t,"POST","/v1/accounts:signInWithIdp",tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0="http://localhost";class Ar extends eu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ar(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ql(n,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Ar(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Yr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Yr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yr(e,n)}buildRequest(){const e={requestUri:l0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ii(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function h0(t){const e=Fs(Us(t)).link,n=e?Fs(Us(e)).deep_link_id:null,r=Fs(Us(t)).deep_link_id;return(r?Fs(Us(r)).link:null)||r||n||e||t}class tu{constructor(e){var n,r,s,i,a,c;const l=Fs(Us(e)),h=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,p=u0((s=l.mode)!==null&&s!==void 0?s:null);le(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=l.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=h0(e);try{return new tu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(){this.providerId=ys.PROVIDER_ID}static credential(e,n){return pi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=tu.parseLink(n);return le(r,"argument-error"),pi._fromEmailAndCode(e,r.code,r.tenantId)}}ys.PROVIDER_ID="password";ys.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ys.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi extends fg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends Vi{constructor(){super("facebook.com")}static credential(e){return Ar._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";xn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends Vi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ar._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ln.credential(n,r)}catch{return null}}}Ln.GOOGLE_SIGN_IN_METHOD="google.com";Ln.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends Vi{constructor(){super("github.com")}static credential(e){return Ar._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.GITHUB_SIGN_IN_METHOD="github.com";Fn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends Vi{constructor(){super("twitter.com")}static credential(e,n){return Ar._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Un.credential(n,r)}catch{return null}}}Un.TWITTER_SIGN_IN_METHOD="twitter.com";Un.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d0(t,e){return Oi(t,"POST","/v1/accounts:signUp",tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await hn._fromIdTokenResponse(e,r,s),a=Md(r);return new Rr({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Md(r);return new Rr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Md(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko extends wn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ko.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ko(e,n,r,s)}}function pg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ko._fromErrorAndOperation(t,i,e,r):i})}async function f0(t,e,n=!1){const r=await fi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Rr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p0(t,e,n=!1){const{auth:r}=t;if(Qt(r.app))return Promise.reject(gn(r));const s="reauthenticate";try{const i=await fi(t,pg(r,s,e,t),n);le(i.idToken,r,"internal-error");const a=Xl(i.idToken);le(a,r,"internal-error");const{sub:c}=a;return le(t.uid===c,r,"user-mismatch"),Rr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&qt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mg(t,e,n=!1){if(Qt(t.app))return Promise.reject(gn(t));const r="signIn",s=await pg(t,r,e),i=await Rr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function m0(t,e){return mg(Cr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gg(t){const e=Cr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function g0(t,e,n){if(Qt(t.app))return Promise.reject(gn(t));const r=Cr(t),a=await Hc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",d0).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&gg(t),l}),c=await Rr._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function _0(t,e,n){return Qt(t.app)?Promise.reject(gn(t)):m0(It(t),ys.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&gg(t),r})}function y0(t,e,n,r){return It(t).onIdTokenChanged(e,n,r)}function v0(t,e,n){return It(t).beforeAuthStateChanged(e,n)}function E0(t,e,n,r){return It(t).onAuthStateChanged(e,n,r)}function T0(t){return It(t).signOut()}const zo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(zo,"1"),this.storage.removeItem(zo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0=1e3,w0=10;class yg extends _g{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=lg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);$A()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,w0):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},I0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}yg.type="LOCAL";const A0=yg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg extends _g{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}vg.type="SESSION";const Eg=vg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ia(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(n.origin,i)),l=await R0(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ia.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=nu("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(){return window}function S0(t){en().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(){return typeof en().WorkerGlobalScope<"u"&&typeof en().importScripts=="function"}async function P0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function C0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function k0(){return Tg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig="firebaseLocalStorageDb",O0=1,Wo="firebaseLocalStorage",wg="fbase_key";class Ni{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function wa(t,e){return t.transaction([Wo],e?"readwrite":"readonly").objectStore(Wo)}function V0(){const t=indexedDB.deleteDatabase(Ig);return new Ni(t).toPromise()}function Kc(){const t=indexedDB.open(Ig,O0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Wo,{keyPath:wg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Wo)?e(r):(r.close(),await V0(),e(await Kc()))})})}async function xd(t,e,n){const r=wa(t,!0).put({[wg]:e,value:n});return new Ni(r).toPromise()}async function N0(t,e){const n=wa(t,!1).get(e),r=await new Ni(n).toPromise();return r===void 0?null:r.value}function Ld(t,e){const n=wa(t,!0).delete(e);return new Ni(n).toPromise()}const D0=800,M0=3;class Ag{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Kc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>M0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Tg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ia._getInstance(k0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await P0(),!this.activeServiceWorker)return;this.sender=new b0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||C0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Kc();return await xd(e,zo,"1"),await Ld(e,zo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>xd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>N0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ld(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=wa(s,!1).getAll();return new Ni(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),D0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ag.type="LOCAL";const x0=Ag;new ki(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L0(t,e){return e?dn(e):(le(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru extends eu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Yr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Yr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function F0(t){return mg(t.auth,new ru(t),t.bypassAuthState)}function U0(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),p0(n,new ru(t),t.bypassAuthState)}async function B0(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),f0(n,new ru(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return F0;case"linkViaPopup":case"linkViaRedirect":return B0;case"reauthViaPopup":case"reauthViaRedirect":return U0;default:qt(this.auth,"internal-error")}}resolve(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0=new ki(2e3,1e4);class jr extends Rg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,jr.currentPopupAction&&jr.currentPopupAction.cancel(),jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){Tn(this.filter.length===1,"Popup operations only handle one event");const e=nu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$0.get())};e()}}jr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0="pendingRedirect",wo=new Map;class q0 extends Rg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=wo.get(this.auth._key());if(!e){try{const r=await H0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}wo.set(this.auth._key(),e)}return this.bypassAuthState||wo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function H0(t,e){const n=W0(e),r=z0(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function K0(t,e){wo.set(t._key(),e)}function z0(t){return dn(t._redirectPersistence)}function W0(t){return Io(j0,t.config.apiKey,t.name)}async function G0(t,e,n=!1){if(Qt(t.app))return Promise.reject(gn(t));const r=Cr(t),s=L0(r,e),a=await new q0(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0=10*60*1e3;class J0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Y0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!bg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Zt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Q0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fd(e))}saveEventToCache(e){this.cachedEventUids.add(Fd(e)),this.lastProcessedEventTime=Date.now()}}function Fd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function bg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Y0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X0(t,e={}){return nr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,eR=/^https?/;async function tR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await X0(t);for(const n of e)try{if(nR(n))return}catch{}qt(t,"unauthorized-domain")}function nR(t){const e=jc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!eR.test(n))return!1;if(Z0.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR=new ki(3e4,6e4);function Ud(){const t=en().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sR(t){return new Promise((e,n)=>{var r,s,i;function a(){Ud(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ud(),n(Zt(t,"network-request-failed"))},timeout:rR.get()})}if(!((s=(r=en().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=en().gapi)===null||i===void 0)&&i.load)a();else{const c=JA("iframefcb");return en()[c]=()=>{gapi.load?a():n(Zt(t,"network-request-failed"))},hg(`${QA()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Ao=null,e})}let Ao=null;function iR(t){return Ao=Ao||sR(t),Ao}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR=new ki(5e3,15e3),aR="__/auth/iframe",cR="emulator/auth/iframe",lR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hR(t){const e=t.config;le(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Yl(e,cR):`https://${t.config.authDomain}/${aR}`,r={apiKey:e.apiKey,appName:t.name,v:ds},s=uR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ii(r).slice(1)}`}async function dR(t){const e=await iR(t),n=en().gapi;return le(n,t,"internal-error"),e.open({where:document.body,url:hR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Zt(t,"network-request-failed"),c=en().setTimeout(()=>{i(a)},oR.get());function l(){en().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pR=500,mR=600,gR="_blank",_R="http://localhost";class Bd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yR(t,e,n,r=pR,s=mR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},fR),{width:r.toString(),height:s.toString(),top:i,left:a}),h=ft().toLowerCase();n&&(c=sg(h)?gR:n),ng(h)&&(e=e||_R,l.scrollbars="yes");const f=Object.entries(l).reduce((g,[A,O])=>`${g}${A}=${O},`,"");if(BA(h)&&c!=="_self")return vR(e||"",c),new Bd(null);const p=window.open(e||"",c,f);le(p,t,"popup-blocked");try{p.focus()}catch{}return new Bd(p)}function vR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER="__/auth/handler",TR="emulator/auth/handler",IR=encodeURIComponent("fac");async function $d(t,e,n,r,s,i){le(t.config.authDomain,t,"auth-domain-config-required"),le(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ds,eventId:s};if(e instanceof fg){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",lE(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))a[f]=p}if(e instanceof Vi){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(a.scopes=f.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),h=l?`#${IR}=${encodeURIComponent(l)}`:"";return`${wR(t)}?${Ii(c).slice(1)}${h}`}function wR({config:t}){return t.emulator?Yl(t,TR):`https://${t.authDomain}/${ER}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic="webStorageSupport";class AR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Eg,this._completeRedirectFn=G0,this._overrideRedirectResult=K0}async _openPopup(e,n,r,s){var i;Tn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await $d(e,n,r,jc(),s);return yR(e,a,nu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await $d(e,n,r,jc(),s);return S0(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Tn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await dR(e),r=new J0(e);return n.register("authEvent",s=>(le(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ic,{type:ic},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ic];a!==void 0&&n(!!a),qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=tR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return lg()||rg()||Zl()}}const RR=AR;var jd="@firebase/auth",qd="1.7.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function PR(t){es(new Er("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;le(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ug(t)},h=new zA(r,s,i,l);return t0(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),es(new Er("auth-internal",e=>{const n=Cr(e.getProvider("auth").getImmediate());return(r=>new bR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wn(jd,qd,SR(t)),Wn(jd,qd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR=5*60,kR=fp("authIdTokenMaxAge")||CR;let Hd=null;const OR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>kR)return;const s=n==null?void 0:n.token;Hd!==s&&(Hd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Aa(t=_p()){const e=_l(t,"auth");if(e.isInitialized())return e.getImmediate();const n=e0(t,{popupRedirectResolver:RR,persistence:[x0,A0,Eg]}),r=fp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=OR(i.toString());v0(n,a,()=>a(n.currentUser)),y0(n,c=>a(c))}}const s=hp("auth");return s&&n0(n,`http://${s}`),n}function VR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}WA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Zt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",VR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});PR("Browser");const NR={apiKey:"AIzaSyBa5XW3AHAR4QmlZjSStNXaHt8Fxvw9uPQ",authDomain:"mypetrock-ce682.firebaseapp.com",projectId:"mypetrock-ce682",storageBucket:"mypetrock-ce682.appspot.com",messagingSenderId:"379797585264",appId:"1:379797585264:web:6f52b72c047c40c35ee3b5",measurementId:"G-F8WSSTFV6S"},Sg=gp(NR),Pg=Ci(Sg),DR=Aa(Sg),Kd=$n(Pg,"Rock-name"),zd=$n(Pg,"Rock-hats"),MR="/assets/happy-rock-D2-HaVtT.png",xR="/assets/sad-rock-C9twJLg0.png",LR="/assets/festive-rock-naZnNPAk.png";var an=(t=>(t.Happy="Happy",t.Sad="Sad",t.Festive="Festive",t))(an||{}),et=(t=>(t.Cake="cake",t.Carrot="carrot",t.Tomato="tomato",t.Fish="fish",t.Salad="salad",t.Chocolate="chocolate",t.Apple="apple",t.Juice="juice",t))(et||{});const FR="/assets/backgroundmusic-BoMzPVdV.mp3",Di=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Cg=t=>(yi("data-v-389382b6"),t=t(),vi(),t),UR={class:"pet-rock-container"},BR={class:"music-section"},$R={class:"pet-rock-wrapper"},jR=["src","alt"],qR=["src"],HR={style:{position:"absolute",top:"20px",right:"10px","text-decoration":"none"}},KR={class:"name-section"},zR={class:"food-section"},WR=Cg(()=>G("h2",null,"Take care of your pet rock:",-1)),GR={key:0,class:"food-options"},QR=["onClick"],JR={class:"dress-up-section"},YR={key:0},XR=["src","alt","onClick"],ZR={key:0},eb=Cg(()=>G("h2",null,"Pet Rock Names:",-1)),tb={__name:"PetRock",setup(t){const e=Ye({name:"",mood:an.Happy,hat:null}),n=Ye(""),r=Ye([]),s=Ye([]),i=Ye(!1),a=Ye(!1),c=new Audio(FR),l=Ye(!1),h=[{id:1,src:"https://firebasestorage.googleapis.com/v0/b/mypetrock-ce682.appspot.com/o/top-hat.png?alt=media&token=dcc6036a-850c-4538-830d-282277715d0bs",name:"Top Hat"},{id:2,src:"https://firebasestorage.googleapis.com/v0/b/mypetrock-ce682.appspot.com/o/pink-hat.png?alt=media&token=0c01e53d-7c28-4a84-b1d4-ead53e38aded",name:"Pink Hat"},{id:3,src:"https://firebasestorage.googleapis.com/v0/b/mypetrock-ce682.appspot.com/o/red-hat.png?alt=media&token=68858469-07a4-4af3-ba6f-7b38b6d43930",name:"Red Hat"},{id:4,src:"https://firebasestorage.googleapis.com/v0/b/mypetrock-ce682.appspot.com/o/no-hat.png?alt=media&token=a557e9c1-c3f6-4f61-a25b-cec919277692",name:"No Hat"}],f=Ft(()=>{switch(e.value.mood){case an.Happy:return MR;case an.Sad:return xR;case an.Festive:return LR;default:return""}});function p(){l.value?(c.pause(),l.value=!1):(c.play(),l.value=!0)}function g(){i.value=!i.value}async function A(Y){e.value.hat=Y.name==="No Hat"?"":Y.src,e.value.mood=an.Happy,await O(e.value.hat)}async function O(Y){const Z=ln(zd,"rock-hat-doc");await $c(Z,{hat:Y})}async function k(Y){const Z=[et.Cake,et.Chocolate,et.Apple,et.Juice],J=[et.Carrot,et.Tomato,et.Fish,et.Salad],T=s.value.find(_=>_.name===Y);T&&T.mood?e.value.mood=T.mood:Z.includes(Y)?e.value.mood=an.Happy:J.includes(Y)?e.value.mood=an.Sad:e.value.mood=e.value.mood,Y==="Festive"&&(e.value.mood=an.Festive)}function V(){a.value||K(),a.value=!a.value}async function B(){n.value.trim()!==""&&(await $c(ln(Kd,"rock-name-doc"),{name:n.value.trim()}),e.value.name=n.value.trim(),n.value="")}const $=Ci(),K=async()=>{const Y=await Bc($n($,"food"));s.value=Y.docs.map(Z=>({id:Z.id,...Z.data()}))};return hl(async()=>{const Y=ln(Kd,"rock-name-doc"),Z=await Uc(Y);e.value.name=Z.exists()?Z.data().name:"Rocky";const J=ln(zd,"rock-hat-doc"),T=await Uc(J);T.exists()&&(e.value.hat=T.data().hat),K()}),(Y,Z)=>{const J=hs("router-link");return $e(),qe("div",UR,[G("h1",null,Lt(e.value.name)+" is feeling "+Lt(e.value.mood),1),G("div",BR,[G("button",{style:{position:"absolute",top:"20px",left:"10px","text-decoration":"none"},onClick:p},Lt(l.value?"Stop Music":"Play Music"),1)]),G("div",$R,[G("img",{src:f.value,alt:`${e.value.name} is ${e.value.mood}`,class:"pet-rock-image"},null,8,jR),e.value.hat&&e.value.hat!==""?($e(),qe("img",{key:0,src:e.value.hat,alt:"Pet's hat",class:"pet-rock-hat"},null,8,qR)):$r("",!0)]),G("button",HR,[ze(J,{to:"/dashboard"},{default:_r(()=>[pn("Go to account dashboard")]),_:1})]),G("div",KR,[Hn(G("input",{"onUpdate:modelValue":Z[0]||(Z[0]=T=>n.value=T),placeholder:"Enter pet rock name"},null,512),[[vr,n.value]]),G("button",{onClick:B},"Save Name")]),G("div",zR,[WR,G("button",{onClick:V},"Feed"),a.value?($e(),qe("div",GR,[G("button",{onClick:Z[1]||(Z[1]=T=>k(bt(et).Cake))},"🍰"),G("button",{onClick:Z[2]||(Z[2]=T=>k(bt(et).Chocolate))},"🍫"),G("button",{onClick:Z[3]||(Z[3]=T=>k(bt(et).Apple))},"🍎"),G("button",{onClick:Z[4]||(Z[4]=T=>k(bt(et).Juice))},"🥤"),G("button",{onClick:Z[5]||(Z[5]=T=>k(bt(et).Carrot))},"🥕"),G("button",{onClick:Z[6]||(Z[6]=T=>k(bt(et).Tomato))},"🍅"),G("button",{onClick:Z[7]||(Z[7]=T=>k(bt(et).Fish))},"🐟"),G("button",{onClick:Z[8]||(Z[8]=T=>k(bt(et).Salad))},"🥗"),($e(!0),qe(vt,null,zs(s.value,T=>($e(),qe("button",{key:T.id,onClick:_=>k(T.name)},Lt(T.name),9,QR))),128))])):$r("",!0)]),G("div",JR,[G("button",{onClick:g},"Dress up"),i.value?($e(),qe("div",YR,[($e(),qe(vt,null,zs(h,T=>G("img",{key:T.id,src:T.src,alt:T.name,onClick:_=>A(T),class:"hat-option"},null,8,XR)),64))])):$r("",!0)]),r.value.length?($e(),qe("div",ZR,[eb,G("ul",null,[($e(!0),qe(vt,null,zs(r.value,T=>($e(),qe("li",{key:T.id},Lt(T.name),1))),128))])])):$r("",!0)])}}},nb=Di(tb,[["__scopeId","data-v-389382b6"]]),rb={id:"app"},sb=us({__name:"App",setup(t){return(e,n)=>{const r=hs("RouterView");return $e(),qe("div",rb,[ze(r)])}}});/*!
  * vue-router v4.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const kg=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",vs=t=>kg?Symbol(t):"_vr_"+t,ib=vs("rvlm"),Wd=vs("rvd"),Ra=vs("r"),Og=vs("rl"),zc=vs("rvl"),Br=typeof window<"u";function ob(t){return t.__esModule||kg&&t[Symbol.toStringTag]==="Module"}const ke=Object.assign;function oc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const ei=()=>{},ab=/\/$/,cb=t=>t.replace(ab,"");function ac(t,e,n="/"){let r,s={},i="",a="";const c=e.indexOf("?"),l=e.indexOf("#",c>-1?c:0);return c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),a=e.slice(l,e.length)),r=db(r??e,n),{fullPath:r+(i&&"?")+i+a,path:r,query:s,hash:a}}function lb(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Gd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function ub(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&cs(e.matched[r],n.matched[s])&&Vg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function cs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Vg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!hb(t[n],e[n]))return!1;return!0}function hb(t,e){return Array.isArray(t)?Qd(t,e):Array.isArray(e)?Qd(e,t):t===e}function Qd(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function db(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,a;for(i=0;i<r.length;i++)if(a=r[i],!(s===1||a==="."))if(a==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var mi;(function(t){t.pop="pop",t.push="push"})(mi||(mi={}));var ti;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ti||(ti={}));function fb(t){if(!t)if(Br){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),cb(t)}const pb=/^[^#]+#/;function mb(t,e){return t.replace(pb,"#")+e}function gb(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ba=()=>({left:window.pageXOffset,top:window.pageYOffset});function _b(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=gb(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Jd(t,e){return(history.state?history.state.position-e:-1)+t}const Wc=new Map;function yb(t,e){Wc.set(t,e)}function vb(t){const e=Wc.get(t);return Wc.delete(t),e}let Eb=()=>location.protocol+"//"+location.host;function Ng(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),Gd(l,"")}return Gd(n,t)+r+s}function Tb(t,e,n,r){let s=[],i=[],a=null;const c=({state:g})=>{const A=Ng(t,location),O=n.value,k=e.value;let V=0;if(g){if(n.value=A,e.value=g,a&&a===O){a=null;return}V=k?g.position-k.position:0}else r(A);s.forEach(B=>{B(n.value,O,{delta:V,type:mi.pop,direction:V?V>0?ti.forward:ti.back:ti.unknown})})};function l(){a=n.value}function h(g){s.push(g);const A=()=>{const O=s.indexOf(g);O>-1&&s.splice(O,1)};return i.push(A),A}function f(){const{history:g}=window;g.state&&g.replaceState(ke({},g.state,{scroll:ba()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f),{pauseListeners:l,listen:h,destroy:p}}function Yd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ba():null}}function Ib(t){const{history:e,location:n}=window,r={value:Ng(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,h,f){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:Eb()+t+l;try{e[f?"replaceState":"pushState"](h,"",g),s.value=h}catch(A){console.error(A),n[f?"replace":"assign"](g)}}function a(l,h){const f=ke({},e.state,Yd(s.value.back,l,s.value.forward,!0),h,{position:s.value.position});i(l,f,!0),r.value=l}function c(l,h){const f=ke({},s.value,e.state,{forward:l,scroll:ba()});i(f.current,f,!0);const p=ke({},Yd(r.value,l,null),{position:f.position+1},h);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:a}}function wb(t){t=fb(t);const e=Ib(t),n=Tb(t,e.state,e.location,e.replace);function r(i,a=!0){a||n.pauseListeners(),history.go(i)}const s=ke({location:"",base:t,go:r,createHref:mb.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Ab(t){return typeof t=="string"||t&&typeof t=="object"}function Dg(t){return typeof t=="string"||typeof t=="symbol"}const kn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Mg=vs("nf");var Xd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Xd||(Xd={}));function ls(t,e){return ke(new Error,{type:t,[Mg]:!0},e)}function On(t,e){return t instanceof Error&&Mg in t&&(e==null||!!(t.type&e))}const Zd="[^/]+?",Rb={sensitive:!1,strict:!1,start:!0,end:!0},bb=/[.+*?^${}()[\]/\\]/g;function Sb(t,e){const n=ke({},Rb,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const f=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const g=h[p];let A=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(bb,"\\$&"),A+=40;else if(g.type===1){const{value:O,repeatable:k,optional:V,regexp:B}=g;i.push({name:O,repeatable:k,optional:V});const $=B||Zd;if($!==Zd){A+=10;try{new RegExp(`(${$})`)}catch(Y){throw new Error(`Invalid custom RegExp for param "${O}" (${$}): `+Y.message)}}let K=k?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;p||(K=V&&h.length<2?`(?:/${K})`:"/"+K),V&&(K+="?"),s+=K,A+=20,V&&(A+=-8),k&&(A+=-20),$===".*"&&(A+=-50)}f.push(A)}r.push(f)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function c(h){const f=h.match(a),p={};if(!f)return null;for(let g=1;g<f.length;g++){const A=f[g]||"",O=i[g-1];p[O.name]=A&&O.repeatable?A.split("/"):A}return p}function l(h){let f="",p=!1;for(const g of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const A of g)if(A.type===0)f+=A.value;else if(A.type===1){const{value:O,repeatable:k,optional:V}=A,B=O in h?h[O]:"";if(Array.isArray(B)&&!k)throw new Error(`Provided param "${O}" is an array but it is not repeatable (* or + modifiers)`);const $=Array.isArray(B)?B.join("/"):B;if(!$)if(V)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${O}"`);f+=$}}return f}return{re:a,score:r,keys:i,parse:c,stringify:l}}function Pb(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Cb(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Pb(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const kb={type:0,value:""},Ob=/[a-zA-Z0-9_]/;function Vb(t){if(!t)return[[]];if(t==="/")return[[kb]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(A){throw new Error(`ERR (${n})/"${h}": ${A}`)}let n=0,r=n;const s=[];let i;function a(){i&&s.push(i),i=[]}let c=0,l,h="",f="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function g(){h+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(h&&p(),a()):l===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:l==="("?n=2:Ob.test(l)?g():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),a(),s}function Nb(t,e,n){const r=Sb(Vb(t.path),n),s=ke(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Db(t,e){const n=[],r=new Map;e=tf({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,p,g){const A=!g,O=xb(f);O.aliasOf=g&&g.record;const k=tf(e,f),V=[O];if("alias"in f){const K=typeof f.alias=="string"?[f.alias]:f.alias;for(const Y of K)V.push(ke({},O,{components:g?g.record.components:O.components,path:Y,aliasOf:g?g.record:O}))}let B,$;for(const K of V){const{path:Y}=K;if(p&&Y[0]!=="/"){const Z=p.record.path,J=Z[Z.length-1]==="/"?"":"/";K.path=p.record.path+(Y&&J+Y)}if(B=Nb(K,p,k),g?g.alias.push(B):($=$||B,$!==B&&$.alias.push(B),A&&f.name&&!ef(B)&&a(f.name)),"children"in O){const Z=O.children;for(let J=0;J<Z.length;J++)i(Z[J],B,g&&g.children[J])}g=g||B,l(B)}return $?()=>{a($)}:ei}function a(f){if(Dg(f)){const p=r.get(f);p&&(r.delete(f),n.splice(n.indexOf(p),1),p.children.forEach(a),p.alias.forEach(a))}else{const p=n.indexOf(f);p>-1&&(n.splice(p,1),f.record.name&&r.delete(f.record.name),f.children.forEach(a),f.alias.forEach(a))}}function c(){return n}function l(f){let p=0;for(;p<n.length&&Cb(f,n[p])>=0&&(f.record.path!==n[p].record.path||!xg(f,n[p]));)p++;n.splice(p,0,f),f.record.name&&!ef(f)&&r.set(f.record.name,f)}function h(f,p){let g,A={},O,k;if("name"in f&&f.name){if(g=r.get(f.name),!g)throw ls(1,{location:f});k=g.record.name,A=ke(Mb(p.params,g.keys.filter($=>!$.optional).map($=>$.name)),f.params),O=g.stringify(A)}else if("path"in f)O=f.path,g=n.find($=>$.re.test(O)),g&&(A=g.parse(O),k=g.record.name);else{if(g=p.name?r.get(p.name):n.find($=>$.re.test(p.path)),!g)throw ls(1,{location:f,currentLocation:p});k=g.record.name,A=ke({},p.params,f.params),O=g.stringify(A)}const V=[];let B=g;for(;B;)V.unshift(B.record),B=B.parent;return{name:k,path:O,params:A,matched:V,meta:Fb(V)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:h,removeRoute:a,getRoutes:c,getRecordMatcher:s}}function Mb(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function xb(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Lb(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function Lb(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function ef(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Fb(t){return t.reduce((e,n)=>ke(e,n.meta),{})}function tf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function xg(t,e){return e.children.some(n=>n===t||xg(t,n))}const Lg=/#/g,Ub=/&/g,Bb=/\//g,$b=/=/g,jb=/\?/g,Fg=/\+/g,qb=/%5B/g,Hb=/%5D/g,Ug=/%5E/g,Kb=/%60/g,Bg=/%7B/g,zb=/%7C/g,$g=/%7D/g,Wb=/%20/g;function su(t){return encodeURI(""+t).replace(zb,"|").replace(qb,"[").replace(Hb,"]")}function Gb(t){return su(t).replace(Bg,"{").replace($g,"}").replace(Ug,"^")}function Gc(t){return su(t).replace(Fg,"%2B").replace(Wb,"+").replace(Lg,"%23").replace(Ub,"%26").replace(Kb,"`").replace(Bg,"{").replace($g,"}").replace(Ug,"^")}function Qb(t){return Gc(t).replace($b,"%3D")}function Jb(t){return su(t).replace(Lg,"%23").replace(jb,"%3F")}function Yb(t){return t==null?"":Jb(t).replace(Bb,"%2F")}function Go(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Xb(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Fg," "),a=i.indexOf("="),c=Go(a<0?i:i.slice(0,a)),l=a<0?null:Go(i.slice(a+1));if(c in e){let h=e[c];Array.isArray(h)||(h=e[c]=[h]),h.push(l)}else e[c]=l}return e}function nf(t){let e="";for(let n in t){const r=t[n];if(n=Qb(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&Gc(i)):[r&&Gc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Zb(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function xs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Dn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=p=>{p===!1?c(ls(4,{from:n,to:e})):p instanceof Error?c(p):Ab(p)?c(ls(2,{from:e,to:p})):(i&&r.enterCallbacks[s]===i&&typeof p=="function"&&i.push(p),a())},h=t.call(r&&r.instances[s],e,n,l);let f=Promise.resolve(h);t.length<3&&(f=f.then(l)),f.catch(p=>c(p))})}function cc(t,e,n,r){const s=[];for(const i of t)for(const a in i.components){let c=i.components[a];if(!(e!=="beforeRouteEnter"&&!i.instances[a]))if(eS(c)){const h=(c.__vccOpts||c)[e];h&&s.push(Dn(h,n,r,i,a))}else{let l=c();s.push(()=>l.then(h=>{if(!h)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${i.path}"`));const f=ob(h)?h.default:h;i.components[a]=f;const g=(f.__vccOpts||f)[e];return g&&Dn(g,n,r,i,a)()}))}}return s}function eS(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function rf(t){const e=Jt(Ra),n=Jt(Og),r=Ft(()=>e.resolve(bt(t.to))),s=Ft(()=>{const{matched:l}=r.value,{length:h}=l,f=l[h-1],p=n.matched;if(!f||!p.length)return-1;const g=p.findIndex(cs.bind(null,f));if(g>-1)return g;const A=sf(l[h-2]);return h>1&&sf(f)===A&&p[p.length-1].path!==A?p.findIndex(cs.bind(null,l[h-2])):g}),i=Ft(()=>s.value>-1&&sS(n.params,r.value.params)),a=Ft(()=>s.value>-1&&s.value===n.matched.length-1&&Vg(n.params,r.value.params));function c(l={}){return rS(l)?e[bt(t.replace)?"replace":"push"](bt(t.to)).catch(ei):Promise.resolve()}return{route:r,href:Ft(()=>r.value.href),isActive:i,isExactActive:a,navigate:c}}const tS=us({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:rf,setup(t,{slots:e}){const n=_i(rf(t)),{options:r}=Jt(Ra),s=Ft(()=>({[of(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[of(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:ap("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),nS=tS;function rS(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function sS(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,a)=>i!==s[a]))return!1}return!0}function sf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const of=(t,e,n)=>t??e??n,iS=us({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const r=Jt(zc),s=Ft(()=>t.route||r.value),i=Jt(Wd,0),a=Ft(()=>s.value.matched[i]);ho(Wd,i+1),ho(ib,a),ho(zc,s);const c=Ye();return fo(()=>[c.value,a.value,t.name],([l,h,f],[p,g,A])=>{h&&(h.instances[f]=l,g&&g!==h&&l&&l===p&&(h.leaveGuards.size||(h.leaveGuards=g.leaveGuards),h.updateGuards.size||(h.updateGuards=g.updateGuards))),l&&h&&(!g||!cs(h,g)||!p)&&(h.enterCallbacks[f]||[]).forEach(O=>O(l))},{flush:"post"}),()=>{const l=s.value,h=a.value,f=h&&h.components[t.name],p=t.name;if(!f)return af(n.default,{Component:f,route:l});const g=h.props[t.name],A=g?g===!0?l.params:typeof g=="function"?g(l):g:null,k=ap(f,ke({},A,e,{onVnodeUnmounted:V=>{V.component.isUnmounted&&(h.instances[p]=null)},ref:c}));return af(n.default,{Component:k,route:l})||k}}});function af(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const oS=iS;function aS(t){const e=Db(t.routes,t),n=t.parseQuery||Xb,r=t.stringifyQuery||nf,s=t.history,i=xs(),a=xs(),c=xs(),l=Z_(kn);let h=kn;Br&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=oc.bind(null,N=>""+N),p=oc.bind(null,Yb),g=oc.bind(null,Go);function A(N,X){let z,se;return Dg(N)?(z=e.getRecordMatcher(N),se=X):se=N,e.addRoute(se,z)}function O(N){const X=e.getRecordMatcher(N);X&&e.removeRoute(X)}function k(){return e.getRoutes().map(N=>N.record)}function V(N){return!!e.getRecordMatcher(N)}function B(N,X){if(X=ke({},X||l.value),typeof N=="string"){const fe=ac(n,N,X.path),y=e.resolve({path:fe.path},X),I=s.createHref(fe.fullPath);return ke(fe,y,{params:g(y.params),hash:Go(fe.hash),redirectedFrom:void 0,href:I})}let z;if("path"in N)z=ke({},N,{path:ac(n,N.path,X.path).path});else{const fe=ke({},N.params);for(const y in fe)fe[y]==null&&delete fe[y];z=ke({},N,{params:p(N.params)}),X.params=p(X.params)}const se=e.resolve(z,X),Pe=N.hash||"";se.params=f(g(se.params));const Re=lb(r,ke({},N,{hash:Gb(Pe),path:se.path})),me=s.createHref(Re);return ke({fullPath:Re,hash:Pe,query:r===nf?Zb(N.query):N.query||{}},se,{redirectedFrom:void 0,href:me})}function $(N){return typeof N=="string"?ac(n,N,l.value.path):ke({},N)}function K(N,X){if(h!==N)return ls(8,{from:X,to:N})}function Y(N){return T(N)}function Z(N){return Y(ke($(N),{replace:!0}))}function J(N){const X=N.matched[N.matched.length-1];if(X&&X.redirect){const{redirect:z}=X;let se=typeof z=="function"?z(N):z;return typeof se=="string"&&(se=se.includes("?")||se.includes("#")?se=$(se):{path:se},se.params={}),ke({query:N.query,hash:N.hash,params:N.params},se)}}function T(N,X){const z=h=B(N),se=l.value,Pe=N.state,Re=N.force,me=N.replace===!0,fe=J(z);if(fe)return T(ke($(fe),{state:Pe,force:Re,replace:me}),X||z);const y=z;y.redirectedFrom=X;let I;return!Re&&ub(r,se,z)&&(I=ls(16,{to:y,from:se}),Kt(se,se,!0,!1)),(I?Promise.resolve(I):E(y,se)).catch(P=>On(P)?On(P,2)?P:pt(P):Ee(P,y,se)).then(P=>{if(P){if(On(P,2))return T(ke($(P.to),{state:Pe,force:Re,replace:me}),X||y)}else P=R(y,se,!0,me,Pe);return w(y,se,P),P})}function _(N,X){const z=K(N,X);return z?Promise.reject(z):Promise.resolve()}function E(N,X){let z;const[se,Pe,Re]=cS(N,X);z=cc(se.reverse(),"beforeRouteLeave",N,X);for(const fe of se)fe.leaveGuards.forEach(y=>{z.push(Dn(y,N,X))});const me=_.bind(null,N,X);return z.push(me),xr(z).then(()=>{z=[];for(const fe of i.list())z.push(Dn(fe,N,X));return z.push(me),xr(z)}).then(()=>{z=cc(Pe,"beforeRouteUpdate",N,X);for(const fe of Pe)fe.updateGuards.forEach(y=>{z.push(Dn(y,N,X))});return z.push(me),xr(z)}).then(()=>{z=[];for(const fe of N.matched)if(fe.beforeEnter&&!X.matched.includes(fe))if(Array.isArray(fe.beforeEnter))for(const y of fe.beforeEnter)z.push(Dn(y,N,X));else z.push(Dn(fe.beforeEnter,N,X));return z.push(me),xr(z)}).then(()=>(N.matched.forEach(fe=>fe.enterCallbacks={}),z=cc(Re,"beforeRouteEnter",N,X),z.push(me),xr(z))).then(()=>{z=[];for(const fe of a.list())z.push(Dn(fe,N,X));return z.push(me),xr(z)}).catch(fe=>On(fe,8)?fe:Promise.reject(fe))}function w(N,X,z){for(const se of c.list())se(N,X,z)}function R(N,X,z,se,Pe){const Re=K(N,X);if(Re)return Re;const me=X===kn,fe=Br?history.state:{};z&&(se||me?s.replace(N.fullPath,ke({scroll:me&&fe&&fe.scroll},Pe)):s.push(N.fullPath,Pe)),l.value=N,Kt(N,X,z,me),pt()}let b;function v(){b=s.listen((N,X,z)=>{const se=B(N),Pe=J(se);if(Pe){T(ke(Pe,{replace:!0}),se).catch(ei);return}h=se;const Re=l.value;Br&&yb(Jd(Re.fullPath,z.delta),ba()),E(se,Re).catch(me=>On(me,12)?me:On(me,2)?(T(me.to,se).then(fe=>{On(fe,20)&&!z.delta&&z.type===mi.pop&&s.go(-1,!1)}).catch(ei),Promise.reject()):(z.delta&&s.go(-z.delta,!1),Ee(me,se,Re))).then(me=>{me=me||R(se,Re,!1),me&&(z.delta?s.go(-z.delta,!1):z.type===mi.pop&&On(me,20)&&s.go(-1,!1)),w(se,Re,me)}).catch(ei)})}let Xe=xs(),Dt=xs(),Ue;function Ee(N,X,z){pt(N);const se=Dt.list();return se.length?se.forEach(Pe=>Pe(N,X,z)):console.error(N),Promise.reject(N)}function ye(){return Ue&&l.value!==kn?Promise.resolve():new Promise((N,X)=>{Xe.add([N,X])})}function pt(N){return Ue||(Ue=!N,v(),Xe.list().forEach(([X,z])=>N?z(N):X()),Xe.reset()),N}function Kt(N,X,z,se){const{scrollBehavior:Pe}=t;if(!Br||!Pe)return Promise.resolve();const Re=!z&&vb(Jd(N.fullPath,0))||(se||!z)&&history.state&&history.state.scroll||null;return ll().then(()=>Pe(N,X,Re)).then(me=>me&&_b(me)).catch(me=>Ee(me,N,X))}const wt=N=>s.go(N);let xe;const Le=new Set;return{currentRoute:l,addRoute:A,removeRoute:O,hasRoute:V,getRoutes:k,resolve:B,options:t,push:Y,replace:Z,go:wt,back:()=>wt(-1),forward:()=>wt(1),beforeEach:i.add,beforeResolve:a.add,afterEach:c.add,onError:Dt.add,isReady:ye,install(N){const X=this;N.component("RouterLink",nS),N.component("RouterView",oS),N.config.globalProperties.$router=X,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>bt(l)}),Br&&!xe&&l.value===kn&&(xe=!0,Y(s.location).catch(Pe=>{}));const z={};for(const Pe in kn)z[Pe]=Ft(()=>l.value[Pe]);N.provide(Ra,X),N.provide(Og,_i(z)),N.provide(zc,l);const se=N.unmount;Le.add(N),N.unmount=function(){Le.delete(N),Le.size<1&&(h=kn,b&&b(),l.value=kn,xe=!1,Ue=!1),se()}}}}function xr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function cS(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let a=0;a<i;a++){const c=e.matched[a];c&&(t.matched.find(h=>cs(h,c))?r.push(c):n.push(c));const l=t.matched[a];l&&(e.matched.find(h=>cs(h,l))||s.push(l))}return[n,r,s]}function iu(){return Jt(Ra)}const jg=t=>(yi("data-v-4d12ac19"),t=t(),vi(),t),lS={class:"container login-container"},uS=jg(()=>G("h1",null,"Login",-1)),hS=jg(()=>G("button",{type:"submit",class:"submit"},"Login",-1)),dS={key:0,class:"error"},fS=us({__name:"Login",setup(t){const e=Ye(""),n=Ye(""),r=Ye(""),s=iu(),i=async()=>{try{const c=Aa();await _0(c,e.value,n.value),s.push("/dashboard")}catch(c){a(c)}},a=c=>{switch(c.code){case"auth/invalid-email":r.value="The email address is not valid.";break;case"auth/user-disabled":r.value="The user account has been disabled.";break;case"auth/user-not-found":r.value="There is no user corresponding to the given email.";break;case"auth/wrong-password":r.value="The password is invalid for the given email.";break;case"auth/invalid-credential":r.value="Incorrect password. Please try again.";break;default:r.value="An unknown error occurred. Please try again."}};return(c,l)=>{const h=hs("router-link");return $e(),qe("div",lS,[uS,G("form",{onSubmit:Oo(i,["prevent"])},[Hn(G("input",{type:"email","onUpdate:modelValue":l[0]||(l[0]=f=>e.value=f),placeholder:"Email",required:""},null,512),[[vr,e.value]]),Hn(G("input",{type:"password","onUpdate:modelValue":l[1]||(l[1]=f=>n.value=f),placeholder:"Password",required:""},null,512),[[vr,n.value]]),hS],32),G("p",null,[ze(h,{to:"/signup",class:"notauser"},{default:_r(()=>[pn("Don't have an account? Sign Up")]),_:1})]),r.value?($e(),qe("p",dS,Lt(r.value),1)):$r("",!0)])}}}),pS=Di(fS,[["__scopeId","data-v-4d12ac19"]]),qg=t=>(yi("data-v-7a200200"),t=t(),vi(),t),mS={class:"container signup-container"},gS=qg(()=>G("h1",null,"Sign Up",-1)),_S=qg(()=>G("button",{type:"submit",class:"submit"},"Sign Up",-1)),yS={key:0,class:"error"},vS=us({__name:"SignUp",setup(t){const e=Ye(""),n=Ye(""),r=Ye(""),s=iu(),i=async()=>{try{const l=Aa(),h=await g0(l,e.value,n.value);await a(h.user.uid),s.push("/dashboard")}catch(l){c(l)}},a=async l=>{const h=Ci();await $c(ln($n(h,"users"),l),{uid:l,role:"user"})},c=l=>{switch(l.code){case"auth/email-already-in-use":r.value="The email address is already in use by another account.";break;case"auth/invalid-email":r.value="The email address is not valid.";break;case"auth/operation-not-allowed":r.value="Email/password accounts are not enabled.";break;case"auth/weak-password":r.value="The password is too weak.";break;default:r.value="An unknown error occurred. Please try again."}};return(l,h)=>{const f=hs("router-link");return $e(),qe("div",mS,[gS,G("form",{onSubmit:Oo(i,["prevent"])},[Hn(G("input",{type:"email","onUpdate:modelValue":h[0]||(h[0]=p=>e.value=p),placeholder:"Email",required:""},null,512),[[vr,e.value]]),Hn(G("input",{type:"password","onUpdate:modelValue":h[1]||(h[1]=p=>n.value=p),placeholder:"Password",required:""},null,512),[[vr,n.value]]),_S],32),G("p",null,[ze(f,{to:"/login",class:"haveanacc"},{default:_r(()=>[pn("Already have an account? Login")]),_:1})]),r.value?($e(),qe("p",yS,Lt(r.value),1)):$r("",!0)])}}}),ES=Di(vS,[["__scopeId","data-v-7a200200"]]),Mi=t=>(yi("data-v-1aa4119a"),t=t(),vi(),t),TS={class:"dashboard-container"},IS=Mi(()=>G("h1",null,"Dashboard",-1)),wS=Mi(()=>G("p",null,"Welcome to your dashboard!",-1)),AS=Mi(()=>G("br",null,null,-1)),RS={class:"submit"},bS=Mi(()=>G("br",null,null,-1)),SS={class:"submit"},PS=Mi(()=>G("br",null,null,-1)),CS=us({__name:"Dashboard",setup(t){const e=iu();async function n(){try{const r=Aa();await T0(r),e.push("/login")}catch(r){console.error("Error signing out:",r),alert("Failed to logout. Please try again.")}}return(r,s)=>{const i=hs("router-link");return $e(),qe("div",TS,[IS,wS,AS,G("button",RS,[ze(i,{to:"/petrock"},{default:_r(()=>[pn("Take care of your pet rock")]),_:1})]),bS,G("button",SS,[ze(i,{to:"/admin"},{default:_r(()=>[pn("Admin")]),_:1})]),PS,G("button",{class:"logout",onClick:n},"Logout")])}}}),kS=Di(CS,[["__scopeId","data-v-1aa4119a"]]),Ht=t=>(yi("data-v-d9b78b67"),t=t(),vi(),t),OS={class:"admin-container"},VS=Ht(()=>G("h1",null,"Admin Panel",-1)),NS={style:{position:"absolute",top:"10px",right:"10px","text-decoration":"none"}},DS=Ht(()=>G("h2",null,"Existing Rocks",-1)),MS=["onClick"],xS=Ht(()=>G("h2",null,"Add New Rock Name",-1)),LS=Ht(()=>G("button",{type:"submit"},"Add Rock",-1)),FS=Ht(()=>G("h2",null,"Available Food Items",-1)),US=["onClick"],BS=Ht(()=>G("h2",null,"Add New Food Item",-1)),$S=Ht(()=>G("option",{value:"",disabled:""},"Select Mood",-1)),jS=Ht(()=>G("option",{value:"Happy"},"Happy",-1)),qS=Ht(()=>G("option",{value:"Sad"},"Sad",-1)),HS=Ht(()=>G("option",{value:"Festive"},"Festive",-1)),KS=[$S,jS,qS,HS],zS=Ht(()=>G("button",{type:"submit"},"Add Food",-1)),WS={__name:"Admin",setup(t){const e=Ci(),n=Ye([]),r=Ye([]),s=Ye({name:""}),i=Ye({name:""}),a=async()=>{const g=await Bc($n(e,"Rock-name"));n.value=g.docs.map(A=>({id:A.id,...A.data()}))},c=async()=>{s.value.name&&(await Rd($n(e,"Rock-name"),{name:s.value.name}),s.value.name="",a())},l=async g=>{await Ad(ln(e,"Rock-name",g)),a()},h=async()=>{const g=await Bc($n(e,"food"));r.value=g.docs.map(A=>({id:A.id,...A.data()}))},f=async()=>{i.value.name&&i.value.mood&&(await Rd($n(e,"food"),{name:i.value.name,mood:i.value.mood}),i.value={name:"",mood:""},h())},p=async g=>{await Ad(ln(e,"food",g)),h()};return hl(()=>{a(),h()}),(g,A)=>{const O=hs("router-link");return $e(),qe("div",OS,[VS,G("button",NS,[ze(O,{to:"/petrock"},{default:_r(()=>[pn("Go to your pet")]),_:1})]),G("section",null,[DS,G("ul",null,[($e(!0),qe(vt,null,zs(n.value,k=>($e(),qe("li",{key:k.id},[pn(" Name: "+Lt(k.name)+" ",1),G("button",{onClick:V=>l(k.id)},"Delete",8,MS)]))),128))])]),G("section",null,[xS,G("form",{onSubmit:Oo(c,["prevent"])},[Hn(G("input",{type:"text","onUpdate:modelValue":A[0]||(A[0]=k=>s.value.name=k),placeholder:"Enter Rock Name",required:""},null,512),[[vr,s.value.name]]),LS],32)]),G("section",null,[FS,G("ul",null,[($e(!0),qe(vt,null,zs(r.value,k=>($e(),qe("li",{key:k.id},[pn(" Name: "+Lt(k.name)+" - Mood: "+Lt(k.mood)+" ",1),G("button",{onClick:V=>p(k.id)},"Delete",8,US)]))),128))])]),G("section",null,[BS,G("form",{onSubmit:Oo(f,["prevent"])},[Hn(G("input",{type:"text","onUpdate:modelValue":A[1]||(A[1]=k=>i.value.name=k),placeholder:"Food Name",required:""},null,512),[[vr,i.value.name]]),Hn(G("select",{"onUpdate:modelValue":A[2]||(A[2]=k=>i.value.mood=k),required:""},KS,512),[[Dv,i.value.mood]]),zS],32)])])}}},GS=Di(WS,[["__scopeId","data-v-d9b78b67"]]),QS=[{path:"/",redirect:"/login"},{path:"/login",name:"login",component:pS},{path:"/signup",name:"Signup",component:ES},{path:"/dashboard",name:"Dashboard",component:kS,meta:{requiresAuth:!0}},{path:"/petrock",name:"Petrock",component:nb,meta:{requiresAuth:!0}},{path:"/admin",name:"Admin",component:GS,meta:{requiresAuth:!0,requiresAdmin:!0}}],Hg=aS({history:wb(),routes:QS});Hg.beforeEach((t,e,n)=>{if(t.matched.some(r=>r.meta.requiresAuth)){const r=E0(DR,async s=>{if(r(),s)if(t.matched.some(i=>i.meta.requiresAdmin)){const i=Ci(),a=await Uc(ln(i,"users",s.uid));a.exists()&&a.data().role==="admin"?n():n({name:"Dashboard"})}else n();else n({name:"login"})})}else n()});const Kg=Uv(sb);Kg.use(Hg);Kg.mount("#app");
