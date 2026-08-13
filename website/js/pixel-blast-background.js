var MS=Object.create;var Dg=Object.defineProperty;var ES=Object.getOwnPropertyDescriptor;var TS=Object.getOwnPropertyNames;var bS=Object.getPrototypeOf,wS=Object.prototype.hasOwnProperty;var bi=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(n){throw e=0,n}};var CS=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of TS(e))!wS.call(t,s)&&s!==n&&Dg(t,s,{get:()=>e[s],enumerable:!(i=ES(e,s))||i.enumerable});return t};var $r=(t,e,n)=>(n=t!=null?MS(bS(t)):{},CS(e||!t||!t.__esModule?Dg(n,"default",{value:t,enumerable:!0}):n,t));var Hg=bi(bt=>{"use strict";function Sh(t,e){var n=t.length;t.push(e);e:for(;0<n;){var i=n-1>>>1,s=t[i];if(0<$l(s,e))t[i]=e,t[n]=s,n=i;else break e}}function wi(t){return t.length===0?null:t[0]}function tc(t){if(t.length===0)return null;var e=t[0],n=t.pop();if(n!==e){t[0]=n;e:for(var i=0,s=t.length,r=s>>>1;i<r;){var a=2*(i+1)-1,o=t[a],l=a+1,c=t[l];if(0>$l(o,n))l<s&&0>$l(c,o)?(t[i]=c,t[l]=n,i=l):(t[i]=o,t[a]=n,i=a);else if(l<s&&0>$l(c,n))t[i]=c,t[l]=n,i=l;else break e}}return e}function $l(t,e){var n=t.sortIndex-e.sortIndex;return n!==0?n:t.id-e.id}bt.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(Ug=performance,bt.unstable_now=function(){return Ug.now()}):(yh=Date,Bg=yh.now(),bt.unstable_now=function(){return yh.now()-Bg});var Ug,yh,Bg,Vi=[],gs=[],RS=1,$n=null,fn=3,Mh=!1,_o=!1,Ao=!1,Eh=!1,Pg=typeof setTimeout=="function"?setTimeout:null,Ng=typeof clearTimeout=="function"?clearTimeout:null,Ig=typeof setImmediate<"u"?setImmediate:null;function ec(t){for(var e=wi(gs);e!==null;){if(e.callback===null)tc(gs);else if(e.startTime<=t)tc(gs),e.sortIndex=e.expirationTime,Sh(Vi,e);else break;e=wi(gs)}}function Th(t){if(Ao=!1,ec(t),!_o)if(wi(Vi)!==null)_o=!0,ta||(ta=!0,ea());else{var e=wi(gs);e!==null&&bh(Th,e.startTime-t)}}var ta=!1,So=-1,Og=5,Fg=-1;function zg(){return Eh?!0:!(bt.unstable_now()-Fg<Og)}function _h(){if(Eh=!1,ta){var t=bt.unstable_now();Fg=t;var e=!0;try{e:{_o=!1,Ao&&(Ao=!1,Ng(So),So=-1),Mh=!0;var n=fn;try{t:{for(ec(t),$n=wi(Vi);$n!==null&&!($n.expirationTime>t&&zg());){var i=$n.callback;if(typeof i=="function"){$n.callback=null,fn=$n.priorityLevel;var s=i($n.expirationTime<=t);if(t=bt.unstable_now(),typeof s=="function"){$n.callback=s,ec(t),e=!0;break t}$n===wi(Vi)&&tc(Vi),ec(t)}else tc(Vi);$n=wi(Vi)}if($n!==null)e=!0;else{var r=wi(gs);r!==null&&bh(Th,r.startTime-t),e=!1}}break e}finally{$n=null,fn=n,Mh=!1}e=void 0}}finally{e?ea():ta=!1}}}var ea;typeof Ig=="function"?ea=function(){Ig(_h)}:typeof MessageChannel<"u"?(Ah=new MessageChannel,Lg=Ah.port2,Ah.port1.onmessage=_h,ea=function(){Lg.postMessage(null)}):ea=function(){Pg(_h,0)};var Ah,Lg;function bh(t,e){So=Pg(function(){t(bt.unstable_now())},e)}bt.unstable_IdlePriority=5;bt.unstable_ImmediatePriority=1;bt.unstable_LowPriority=4;bt.unstable_NormalPriority=3;bt.unstable_Profiling=null;bt.unstable_UserBlockingPriority=2;bt.unstable_cancelCallback=function(t){t.callback=null};bt.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Og=0<t?Math.floor(1e3/t):5};bt.unstable_getCurrentPriorityLevel=function(){return fn};bt.unstable_next=function(t){switch(fn){case 1:case 2:case 3:var e=3;break;default:e=fn}var n=fn;fn=e;try{return t()}finally{fn=n}};bt.unstable_requestPaint=function(){Eh=!0};bt.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var n=fn;fn=t;try{return e()}finally{fn=n}};bt.unstable_scheduleCallback=function(t,e,n){var i=bt.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,t){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,t={id:RS++,callback:e,priorityLevel:t,startTime:n,expirationTime:s,sortIndex:-1},n>i?(t.sortIndex=n,Sh(gs,t),wi(Vi)===null&&t===wi(gs)&&(Ao?(Ng(So),So=-1):Ao=!0,bh(Th,n-i))):(t.sortIndex=s,Sh(Vi,t),_o||Mh||(_o=!0,ta||(ta=!0,ea()))),t};bt.unstable_shouldYield=zg;bt.unstable_wrapCallback=function(t){var e=fn;return function(){var n=fn;fn=e;try{return t.apply(this,arguments)}finally{fn=n}}}});var Vg=bi((DR,Gg)=>{"use strict";Gg.exports=Hg()});var $g=bi(Pe=>{"use strict";var Rh=Symbol.for("react.transitional.element"),DS=Symbol.for("react.portal"),US=Symbol.for("react.fragment"),BS=Symbol.for("react.strict_mode"),IS=Symbol.for("react.profiler"),LS=Symbol.for("react.consumer"),PS=Symbol.for("react.context"),NS=Symbol.for("react.forward_ref"),OS=Symbol.for("react.suspense"),FS=Symbol.for("react.memo"),qg=Symbol.for("react.lazy"),zS=Symbol.for("react.activity"),kg=Symbol.iterator;function HS(t){return t===null||typeof t!="object"?null:(t=kg&&t[kg]||t["@@iterator"],typeof t=="function"?t:null)}var Qg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zg=Object.assign,Kg={};function ia(t,e,n){this.props=t,this.context=e,this.refs=Kg,this.updater=n||Qg}ia.prototype.isReactComponent={};ia.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ia.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Jg(){}Jg.prototype=ia.prototype;function Dh(t,e,n){this.props=t,this.context=e,this.refs=Kg,this.updater=n||Qg}var Uh=Dh.prototype=new Jg;Uh.constructor=Dh;Zg(Uh,ia.prototype);Uh.isPureReactComponent=!0;var Wg=Array.isArray;function Ch(){}var _t={H:null,A:null,T:null,S:null},jg=Object.prototype.hasOwnProperty;function Bh(t,e,n){var i=n.ref;return{$$typeof:Rh,type:t,key:e,ref:i!==void 0?i:null,props:n}}function GS(t,e){return Bh(t.type,e,t.props)}function Ih(t){return typeof t=="object"&&t!==null&&t.$$typeof===Rh}function VS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Xg=/\/+/g;function wh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?VS(""+t.key):e.toString(36)}function kS(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(Ch,Ch):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function na(t,e,n,i,s){var r=typeof t;(r==="undefined"||r==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(r){case"bigint":case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Rh:case DS:a=!0;break;case qg:return a=t._init,na(a(t._payload),e,n,i,s)}}if(a)return s=s(t),a=i===""?"."+wh(t,0):i,Wg(s)?(n="",a!=null&&(n=a.replace(Xg,"$&/")+"/"),na(s,e,n,"",function(c){return c})):s!=null&&(Ih(s)&&(s=GS(s,n+(s.key==null||t&&t.key===s.key?"":(""+s.key).replace(Xg,"$&/")+"/")+a)),e.push(s)),1;a=0;var o=i===""?".":i+":";if(Wg(t))for(var l=0;l<t.length;l++)i=t[l],r=o+wh(i,l),a+=na(i,e,n,r,s);else if(l=HS(t),typeof l=="function")for(t=l.call(t),l=0;!(i=t.next()).done;)i=i.value,r=o+wh(i,l++),a+=na(i,e,n,r,s);else if(r==="object"){if(typeof t.then=="function")return na(kS(t),e,n,i,s);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return a}function nc(t,e,n){if(t==null)return t;var i=[],s=0;return na(t,i,"","",function(r){return e.call(n,r,s++)}),i}function WS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Yg=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},XS={map:nc,forEach:function(t,e,n){nc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return nc(t,function(){e++}),e},toArray:function(t){return nc(t,function(e){return e})||[]},only:function(t){if(!Ih(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Pe.Activity=zS;Pe.Children=XS;Pe.Component=ia;Pe.Fragment=US;Pe.Profiler=IS;Pe.PureComponent=Dh;Pe.StrictMode=BS;Pe.Suspense=OS;Pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=_t;Pe.__COMPILER_RUNTIME={__proto__:null,c:function(t){return _t.H.useMemoCache(t)}};Pe.cache=function(t){return function(){return t.apply(null,arguments)}};Pe.cacheSignal=function(){return null};Pe.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var i=Zg({},t.props),s=t.key;if(e!=null)for(r in e.key!==void 0&&(s=""+e.key),e)!jg.call(e,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&e.ref===void 0||(i[r]=e[r]);var r=arguments.length-2;if(r===1)i.children=n;else if(1<r){for(var a=Array(r),o=0;o<r;o++)a[o]=arguments[o+2];i.children=a}return Bh(t.type,s,i)};Pe.createContext=function(t){return t={$$typeof:PS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:LS,_context:t},t};Pe.createElement=function(t,e,n){var i,s={},r=null;if(e!=null)for(i in e.key!==void 0&&(r=""+e.key),e)jg.call(e,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=e[i]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var o=Array(a),l=0;l<a;l++)o[l]=arguments[l+2];s.children=o}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)s[i]===void 0&&(s[i]=a[i]);return Bh(t,r,s)};Pe.createRef=function(){return{current:null}};Pe.forwardRef=function(t){return{$$typeof:NS,render:t}};Pe.isValidElement=Ih;Pe.lazy=function(t){return{$$typeof:qg,_payload:{_status:-1,_result:t},_init:WS}};Pe.memo=function(t,e){return{$$typeof:FS,type:t,compare:e===void 0?null:e}};Pe.startTransition=function(t){var e=_t.T,n={};_t.T=n;try{var i=t(),s=_t.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Ch,Yg)}catch(r){Yg(r)}finally{e!==null&&n.types!==null&&(e.types=n.types),_t.T=e}};Pe.unstable_useCacheRefresh=function(){return _t.H.useCacheRefresh()};Pe.use=function(t){return _t.H.use(t)};Pe.useActionState=function(t,e,n){return _t.H.useActionState(t,e,n)};Pe.useCallback=function(t,e){return _t.H.useCallback(t,e)};Pe.useContext=function(t){return _t.H.useContext(t)};Pe.useDebugValue=function(){};Pe.useDeferredValue=function(t,e){return _t.H.useDeferredValue(t,e)};Pe.useEffect=function(t,e){return _t.H.useEffect(t,e)};Pe.useEffectEvent=function(t){return _t.H.useEffectEvent(t)};Pe.useId=function(){return _t.H.useId()};Pe.useImperativeHandle=function(t,e,n){return _t.H.useImperativeHandle(t,e,n)};Pe.useInsertionEffect=function(t,e){return _t.H.useInsertionEffect(t,e)};Pe.useLayoutEffect=function(t,e){return _t.H.useLayoutEffect(t,e)};Pe.useMemo=function(t,e){return _t.H.useMemo(t,e)};Pe.useOptimistic=function(t,e){return _t.H.useOptimistic(t,e)};Pe.useReducer=function(t,e,n){return _t.H.useReducer(t,e,n)};Pe.useRef=function(t){return _t.H.useRef(t)};Pe.useState=function(t){return _t.H.useState(t)};Pe.useSyncExternalStore=function(t,e,n){return _t.H.useSyncExternalStore(t,e,n)};Pe.useTransition=function(){return _t.H.useTransition()};Pe.version="19.2.8"});var ic=bi((BR,ev)=>{"use strict";ev.exports=$g()});var nv=bi(An=>{"use strict";var YS=ic();function tv(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function vs(){}var _n={d:{f:vs,r:function(){throw Error(tv(522))},D:vs,C:vs,L:vs,m:vs,X:vs,S:vs,M:vs},p:0,findDOMNode:null},qS=Symbol.for("react.portal");function QS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qS,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}var Mo=YS.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function sc(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=_n;An.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(tv(299));return QS(t,e,null,n)};An.flushSync=function(t){var e=Mo.T,n=_n.p;try{if(Mo.T=null,_n.p=2,t)return t()}finally{Mo.T=e,_n.p=n,_n.d.f()}};An.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,_n.d.C(t,e))};An.prefetchDNS=function(t){typeof t=="string"&&_n.d.D(t)};An.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var n=e.as,i=sc(n,e.crossOrigin),s=typeof e.integrity=="string"?e.integrity:void 0,r=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;n==="style"?_n.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:r}):n==="script"&&_n.d.X(t,{crossOrigin:i,integrity:s,fetchPriority:r,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};An.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var n=sc(e.as,e.crossOrigin);_n.d.M(t,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&_n.d.M(t)};An.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var n=e.as,i=sc(n,e.crossOrigin);_n.d.L(t,n,{crossOrigin:i,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};An.preloadModule=function(t,e){if(typeof t=="string")if(e){var n=sc(e.as,e.crossOrigin);_n.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else _n.d.m(t)};An.requestFormReset=function(t){_n.d.r(t)};An.unstable_batchedUpdates=function(t,e){return t(e)};An.useFormState=function(t,e,n){return Mo.H.useFormState(t,e,n)};An.useFormStatus=function(){return Mo.H.useHostTransitionStatus()};An.version="19.2.8"});var rv=bi((LR,sv)=>{"use strict";function iv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(iv)}catch(t){console.error(t)}}iv(),sv.exports=nv()});var v_=bi(Ru=>{"use strict";var Yt=Vg(),U0=ic(),ZS=rv();function q(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function B0(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function cl(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function I0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function L0(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function av(t){if(cl(t)!==t)throw Error(q(188))}function KS(t){var e=t.alternate;if(!e){if(e=cl(t),e===null)throw Error(q(188));return e!==t?null:t}for(var n=t,i=e;;){var s=n.return;if(s===null)break;var r=s.alternate;if(r===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===r.child){for(r=s.child;r;){if(r===n)return av(s),t;if(r===i)return av(s),e;r=r.sibling}throw Error(q(188))}if(n.return!==i.return)n=s,i=r;else{for(var a=!1,o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a){for(o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a)throw Error(q(189))}}if(n.alternate!==i)throw Error(q(190))}if(n.tag!==3)throw Error(q(188));return n.stateNode.current===n?t:e}function P0(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=P0(t),e!==null)return e;t=t.sibling}return null}var Mt=Object.assign,JS=Symbol.for("react.element"),rc=Symbol.for("react.transitional.element"),Uo=Symbol.for("react.portal"),ca=Symbol.for("react.fragment"),N0=Symbol.for("react.strict_mode"),dd=Symbol.for("react.profiler"),O0=Symbol.for("react.consumer"),Ki=Symbol.for("react.context"),lp=Symbol.for("react.forward_ref"),pd=Symbol.for("react.suspense"),md=Symbol.for("react.suspense_list"),cp=Symbol.for("react.memo"),xs=Symbol.for("react.lazy"),gd=Symbol.for("react.activity"),jS=Symbol.for("react.memo_cache_sentinel"),ov=Symbol.iterator;function Eo(t){return t===null||typeof t!="object"?null:(t=ov&&t[ov]||t["@@iterator"],typeof t=="function"?t:null)}var $S=Symbol.for("react.client.reference");function vd(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===$S?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ca:return"Fragment";case dd:return"Profiler";case N0:return"StrictMode";case pd:return"Suspense";case md:return"SuspenseList";case gd:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Uo:return"Portal";case Ki:return t.displayName||"Context";case O0:return(t._context.displayName||"Context")+".Consumer";case lp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case cp:return e=t.displayName||null,e!==null?e:vd(t.type)||"Memo";case xs:e=t._payload,t=t._init;try{return vd(t(e))}catch{}}return null}var Bo=Array.isArray,De=U0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,it=ZS.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,vr={pending:!1,data:null,method:null,action:null},xd=[],ua=-1;function Bi(t){return{current:t}}function nn(t){0>ua||(t.current=xd[ua],xd[ua]=null,ua--)}function vt(t,e){ua++,xd[ua]=t.current,t.current=e}var Ui=Bi(null),Zo=Bi(null),Rs=Bi(null),Fc=Bi(null);function zc(t,e){switch(vt(Rs,e),vt(Zo,t),vt(Ui,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?p0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=p0(e),t=i_(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}nn(Ui),vt(Ui,t)}function Ca(){nn(Ui),nn(Zo),nn(Rs)}function yd(t){t.memoizedState!==null&&vt(Fc,t);var e=Ui.current,n=i_(e,t.type);e!==n&&(vt(Zo,t),vt(Ui,n))}function Hc(t){Zo.current===t&&(nn(Ui),nn(Zo)),Fc.current===t&&(nn(Fc),al._currentValue=vr)}var Lh,lv;function dr(t){if(Lh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Lh=e&&e[1]||"",lv=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Lh+t+lv}var Ph=!1;function Nh(t,e){if(!t||Ph)return"";Ph=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(p){var h=p}Reflect.construct(t,[],d)}else{try{d.call()}catch(p){h=p}t.call(d.prototype)}}else{try{throw Error()}catch(p){h=p}(d=t())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(p){if(p&&h&&typeof p.stack=="string")return[p.stack,h.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),a=r[0],o=r[1];if(a&&o){var l=a.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var f=`
`+l[i].replace(" at new "," at ");return t.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",t.displayName)),f}while(1<=i&&0<=s);break}}}finally{Ph=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?dr(n):""}function e1(t,e){switch(t.tag){case 26:case 27:case 5:return dr(t.type);case 16:return dr("Lazy");case 13:return t.child!==e&&e!==null?dr("Suspense Fallback"):dr("Suspense");case 19:return dr("SuspenseList");case 0:case 15:return Nh(t.type,!1);case 11:return Nh(t.type.render,!1);case 1:return Nh(t.type,!0);case 31:return dr("Activity");default:return""}}function cv(t){try{var e="",n=null;do e+=e1(t,n),n=t,t=t.return;while(t);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var _d=Object.prototype.hasOwnProperty,up=Yt.unstable_scheduleCallback,Oh=Yt.unstable_cancelCallback,t1=Yt.unstable_shouldYield,n1=Yt.unstable_requestPaint,zn=Yt.unstable_now,i1=Yt.unstable_getCurrentPriorityLevel,F0=Yt.unstable_ImmediatePriority,z0=Yt.unstable_UserBlockingPriority,Gc=Yt.unstable_NormalPriority,s1=Yt.unstable_LowPriority,H0=Yt.unstable_IdlePriority,r1=Yt.log,a1=Yt.unstable_setDisableYieldValue,ul=null,Hn=null;function Es(t){if(typeof r1=="function"&&a1(t),Hn&&typeof Hn.setStrictMode=="function")try{Hn.setStrictMode(ul,t)}catch{}}var Gn=Math.clz32?Math.clz32:c1,o1=Math.log,l1=Math.LN2;function c1(t){return t>>>=0,t===0?32:31-(o1(t)/l1|0)|0}var ac=256,oc=262144,lc=4194304;function pr(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function du(t,e,n){var i=t.pendingLanes;if(i===0)return 0;var s=0,r=t.suspendedLanes,a=t.pingedLanes;t=t.warmLanes;var o=i&134217727;return o!==0?(i=o&~r,i!==0?s=pr(i):(a&=o,a!==0?s=pr(a):n||(n=o&~t,n!==0&&(s=pr(n))))):(o=i&~r,o!==0?s=pr(o):a!==0?s=pr(a):n||(n=i&~t,n!==0&&(s=pr(n)))),s===0?0:e!==0&&e!==s&&(e&r)===0&&(r=s&-s,n=e&-e,r>=n||r===32&&(n&4194048)!==0)?e:s}function fl(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function u1(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function G0(){var t=lc;return lc<<=1,(lc&62914560)===0&&(lc=4194304),t}function Fh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function hl(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function f1(t,e,n,i,s,r){var a=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var o=t.entanglements,l=t.expirationTimes,c=t.hiddenUpdates;for(n=a&~n;0<n;){var f=31-Gn(n),d=1<<f;o[f]=0,l[f]=-1;var h=c[f];if(h!==null)for(c[f]=null,f=0;f<h.length;f++){var p=h[f];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&V0(t,i,0),r!==0&&s===0&&t.tag!==0&&(t.suspendedLanes|=r&~(a&~e))}function V0(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-Gn(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|n&261930}function k0(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Gn(n),s=1<<i;s&e|t[i]&e&&(t[i]|=e),n&=~s}}function W0(t,e){var n=e&-e;return n=(n&42)!==0?1:fp(n),(n&(t.suspendedLanes|e))!==0?0:n}function fp(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function hp(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function X0(){var t=it.p;return t!==0?t:(t=window.event,t===void 0?32:p_(t.type))}function uv(t,e){var n=it.p;try{return it.p=t,e()}finally{it.p=n}}var Vs=Math.random().toString(36).slice(2),an="__reactFiber$"+Vs,Dn="__reactProps$"+Vs,za="__reactContainer$"+Vs,Ad="__reactEvents$"+Vs,h1="__reactListeners$"+Vs,d1="__reactHandles$"+Vs,fv="__reactResources$"+Vs,dl="__reactMarker$"+Vs;function dp(t){delete t[an],delete t[Dn],delete t[Ad],delete t[h1],delete t[d1]}function fa(t){var e=t[an];if(e)return e;for(var n=t.parentNode;n;){if(e=n[za]||n[an]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=y0(t);t!==null;){if(n=t[an])return n;t=y0(t)}return e}t=n,n=t.parentNode}return null}function Ha(t){if(t=t[an]||t[za]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Io(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(q(33))}function Aa(t){var e=t[fv];return e||(e=t[fv]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function tn(t){t[dl]=!0}var Y0=new Set,q0={};function wr(t,e){Ra(t,e),Ra(t+"Capture",e)}function Ra(t,e){for(q0[t]=e,t=0;t<e.length;t++)Y0.add(e[t])}var p1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),hv={},dv={};function m1(t){return _d.call(dv,t)?!0:_d.call(hv,t)?!1:p1.test(t)?dv[t]=!0:(hv[t]=!0,!1)}function Mc(t,e,n){if(m1(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function cc(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function ki(t,e,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+i)}}function ti(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Q0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function g1(t,e,n){var i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,r=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(a){n=""+a,r.call(this,a)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Sd(t){if(!t._valueTracker){var e=Q0(t)?"checked":"value";t._valueTracker=g1(t,e,""+t[e])}}function Z0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Q0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Vc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var v1=/[\n"\\]/g;function si(t){return t.replace(v1,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Md(t,e,n,i,s,r,a,o){t.name="",a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"?t.type=a:t.removeAttribute("type"),e!=null?a==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+ti(e)):t.value!==""+ti(e)&&(t.value=""+ti(e)):a!=="submit"&&a!=="reset"||t.removeAttribute("value"),e!=null?Ed(t,a,ti(e)):n!=null?Ed(t,a,ti(n)):i!=null&&t.removeAttribute("value"),s==null&&r!=null&&(t.defaultChecked=!!r),s!=null&&(t.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+ti(o):t.removeAttribute("name")}function K0(t,e,n,i,s,r,a,o){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.type=r),e!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||e!=null)){Sd(t);return}n=n!=null?""+ti(n):"",e=e!=null?""+ti(e):n,o||e===t.value||(t.value=e),t.defaultValue=e}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=o?t.checked:!!i,t.defaultChecked=!!i,a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(t.name=a),Sd(t)}function Ed(t,e,n){e==="number"&&Vc(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function Sa(t,e,n,i){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ti(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,i&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function J0(t,e,n){if(e!=null&&(e=""+ti(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+ti(n):""}function j0(t,e,n,i){if(e==null){if(i!=null){if(n!=null)throw Error(q(92));if(Bo(i)){if(1<i.length)throw Error(q(93));i=i[0]}n=i}n==null&&(n=""),e=n}n=ti(e),t.defaultValue=n,i=t.textContent,i===n&&i!==""&&i!==null&&(t.value=i),Sd(t)}function Da(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var x1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function pv(t,e,n){var i=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,n):typeof n!="number"||n===0||x1.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function $0(t,e,n){if(e!=null&&typeof e!="object")throw Error(q(62));if(t=t.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var s in e)i=e[s],e.hasOwnProperty(s)&&n[s]!==i&&pv(t,s,i)}else for(var r in e)e.hasOwnProperty(r)&&pv(t,r,e[r])}function pp(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var y1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ec(t){return _1.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ji(){}var Td=null;function mp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ha=null,Ma=null;function mv(t){var e=Ha(t);if(e&&(t=e.stateNode)){var n=t[Dn]||null;e:switch(t=e.stateNode,e.type){case"input":if(Md(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+si(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var s=i[Dn]||null;if(!s)throw Error(q(90));Md(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(e=0;e<n.length;e++)i=n[e],i.form===t.form&&Z0(i)}break e;case"textarea":J0(t,n.value,n.defaultValue);break e;case"select":e=n.value,e!=null&&Sa(t,!!n.multiple,e,!1)}}}var zh=!1;function ex(t,e,n){if(zh)return t(e,n);zh=!0;try{var i=t(e);return i}finally{if(zh=!1,(ha!==null||Ma!==null)&&(Tu(),ha&&(e=ha,t=Ma,Ma=ha=null,mv(e),t)))for(e=0;e<t.length;e++)mv(t[e])}}function Ko(t,e){var n=t.stateNode;if(n===null)return null;var i=n[Dn]||null;if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(q(231,e,typeof n));return n}var ns=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bd=!1;if(ns)try{sa={},Object.defineProperty(sa,"passive",{get:function(){bd=!0}}),window.addEventListener("test",sa,sa),window.removeEventListener("test",sa,sa)}catch{bd=!1}var sa,Ts=null,gp=null,Tc=null;function tx(){if(Tc)return Tc;var t,e=gp,n=e.length,i,s="value"in Ts?Ts.value:Ts.textContent,r=s.length;for(t=0;t<n&&e[t]===s[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===s[r-i];i++);return Tc=s.slice(t,1<i?1-i:void 0)}function bc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function uc(){return!0}function gv(){return!1}function Un(t){function e(n,i,s,r,a){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=r,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?uc:gv,this.isPropagationStopped=gv,this}return Mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=uc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=uc)},persist:function(){},isPersistent:uc}),e}var Cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pu=Un(Cr),pl=Mt({},Cr,{view:0,detail:0}),A1=Un(pl),Hh,Gh,To,mu=Mt({},pl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==To&&(To&&t.type==="mousemove"?(Hh=t.screenX-To.screenX,Gh=t.screenY-To.screenY):Gh=Hh=0,To=t),Hh)},movementY:function(t){return"movementY"in t?t.movementY:Gh}}),vv=Un(mu),S1=Mt({},mu,{dataTransfer:0}),M1=Un(S1),E1=Mt({},pl,{relatedTarget:0}),Vh=Un(E1),T1=Mt({},Cr,{animationName:0,elapsedTime:0,pseudoElement:0}),b1=Un(T1),w1=Mt({},Cr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),C1=Un(w1),R1=Mt({},Cr,{data:0}),xv=Un(R1),D1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},U1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function I1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=B1[t])?!!e[t]:!1}function vp(){return I1}var L1=Mt({},pl,{key:function(t){if(t.key){var e=D1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=bc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?U1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vp,charCode:function(t){return t.type==="keypress"?bc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),P1=Un(L1),N1=Mt({},mu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yv=Un(N1),O1=Mt({},pl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vp}),F1=Un(O1),z1=Mt({},Cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),H1=Un(z1),G1=Mt({},mu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),V1=Un(G1),k1=Mt({},Cr,{newState:0,oldState:0}),W1=Un(k1),X1=[9,13,27,32],xp=ns&&"CompositionEvent"in window,No=null;ns&&"documentMode"in document&&(No=document.documentMode);var Y1=ns&&"TextEvent"in window&&!No,nx=ns&&(!xp||No&&8<No&&11>=No),_v=" ",Av=!1;function ix(t,e){switch(t){case"keyup":return X1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var da=!1;function q1(t,e){switch(t){case"compositionend":return sx(e);case"keypress":return e.which!==32?null:(Av=!0,_v);case"textInput":return t=e.data,t===_v&&Av?null:t;default:return null}}function Q1(t,e){if(da)return t==="compositionend"||!xp&&ix(t,e)?(t=tx(),Tc=gp=Ts=null,da=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return nx&&e.locale!=="ko"?null:e.data;default:return null}}var Z1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Z1[t.type]:e==="textarea"}function rx(t,e,n,i){ha?Ma?Ma.push(i):Ma=[i]:ha=i,e=au(e,"onChange"),0<e.length&&(n=new pu("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Oo=null,Jo=null;function K1(t){e_(t,0)}function gu(t){var e=Io(t);if(Z0(e))return t}function Mv(t,e){if(t==="change")return e}var ax=!1;ns&&(ns?(hc="oninput"in document,hc||(kh=document.createElement("div"),kh.setAttribute("oninput","return;"),hc=typeof kh.oninput=="function"),fc=hc):fc=!1,ax=fc&&(!document.documentMode||9<document.documentMode));var fc,hc,kh;function Ev(){Oo&&(Oo.detachEvent("onpropertychange",ox),Jo=Oo=null)}function ox(t){if(t.propertyName==="value"&&gu(Jo)){var e=[];rx(e,Jo,t,mp(t)),ex(K1,e)}}function J1(t,e,n){t==="focusin"?(Ev(),Oo=e,Jo=n,Oo.attachEvent("onpropertychange",ox)):t==="focusout"&&Ev()}function j1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gu(Jo)}function $1(t,e){if(t==="click")return gu(e)}function eM(t,e){if(t==="input"||t==="change")return gu(e)}function tM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var kn=typeof Object.is=="function"?Object.is:tM;function jo(t,e){if(kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!_d.call(e,s)||!kn(t[s],e[s]))return!1}return!0}function Tv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bv(t,e){var n=Tv(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Tv(n)}}function lx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?lx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function cx(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Vc(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Vc(t.document)}return e}function yp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var nM=ns&&"documentMode"in document&&11>=document.documentMode,pa=null,wd=null,Fo=null,Cd=!1;function wv(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cd||pa==null||pa!==Vc(i)||(i=pa,"selectionStart"in i&&yp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Fo&&jo(Fo,i)||(Fo=i,i=au(wd,"onSelect"),0<i.length&&(e=new pu("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=pa)))}function hr(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ma={animationend:hr("Animation","AnimationEnd"),animationiteration:hr("Animation","AnimationIteration"),animationstart:hr("Animation","AnimationStart"),transitionrun:hr("Transition","TransitionRun"),transitionstart:hr("Transition","TransitionStart"),transitioncancel:hr("Transition","TransitionCancel"),transitionend:hr("Transition","TransitionEnd")},Wh={},ux={};ns&&(ux=document.createElement("div").style,"AnimationEvent"in window||(delete ma.animationend.animation,delete ma.animationiteration.animation,delete ma.animationstart.animation),"TransitionEvent"in window||delete ma.transitionend.transition);function Rr(t){if(Wh[t])return Wh[t];if(!ma[t])return t;var e=ma[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ux)return Wh[t]=e[n];return t}var fx=Rr("animationend"),hx=Rr("animationiteration"),dx=Rr("animationstart"),iM=Rr("transitionrun"),sM=Rr("transitionstart"),rM=Rr("transitioncancel"),px=Rr("transitionend"),mx=new Map,Rd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Rd.push("scrollEnd");function vi(t,e){mx.set(t,e),wr(e,[t])}var kc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ei=[],ga=0,_p=0;function vu(){for(var t=ga,e=_p=ga=0;e<t;){var n=ei[e];ei[e++]=null;var i=ei[e];ei[e++]=null;var s=ei[e];ei[e++]=null;var r=ei[e];if(ei[e++]=null,i!==null&&s!==null){var a=i.pending;a===null?s.next=s:(s.next=a.next,a.next=s),i.pending=s}r!==0&&gx(n,s,r)}}function xu(t,e,n,i){ei[ga++]=t,ei[ga++]=e,ei[ga++]=n,ei[ga++]=i,_p|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function Ap(t,e,n,i){return xu(t,e,n,i),Wc(t)}function Dr(t,e){return xu(t,null,null,e),Wc(t)}function gx(t,e,n){t.lanes|=n;var i=t.alternate;i!==null&&(i.lanes|=n);for(var s=!1,r=t.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),r.tag===22&&(t=r.stateNode,t===null||t._visibility&1||(s=!0)),t=r,r=r.return;return t.tag===3?(r=t.stateNode,s&&e!==null&&(s=31-Gn(n),t=r.hiddenUpdates,i=t[s],i===null?t[s]=[e]:i.push(e),e.lane=n|536870912),r):null}function Wc(t){if(50<qo)throw qo=0,Kd=null,Error(q(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var va={};function aM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(t,e,n,i){return new aM(t,e,n,i)}function Sp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $i(t,e){var n=t.alternate;return n===null?(n=On(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function vx(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function wc(t,e,n,i,s,r){var a=0;if(i=t,typeof t=="function")Sp(t)&&(a=1);else if(typeof t=="string")a=cE(t,n,Ui.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case gd:return t=On(31,n,e,s),t.elementType=gd,t.lanes=r,t;case ca:return xr(n.children,s,r,e);case N0:a=8,s|=24;break;case dd:return t=On(12,n,e,s|2),t.elementType=dd,t.lanes=r,t;case pd:return t=On(13,n,e,s),t.elementType=pd,t.lanes=r,t;case md:return t=On(19,n,e,s),t.elementType=md,t.lanes=r,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ki:a=10;break e;case O0:a=9;break e;case lp:a=11;break e;case cp:a=14;break e;case xs:a=16,i=null;break e}a=29,n=Error(q(130,t===null?"null":typeof t,"")),i=null}return e=On(a,n,e,s),e.elementType=t,e.type=i,e.lanes=r,e}function xr(t,e,n,i){return t=On(7,t,i,e),t.lanes=n,t}function Xh(t,e,n){return t=On(6,t,null,e),t.lanes=n,t}function xx(t){var e=On(18,null,null,0);return e.stateNode=t,e}function Yh(t,e,n){return e=On(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Cv=new WeakMap;function ri(t,e){if(typeof t=="object"&&t!==null){var n=Cv.get(t);return n!==void 0?n:(e={value:t,source:e,stack:cv(e)},Cv.set(t,e),e)}return{value:t,source:e,stack:cv(e)}}var xa=[],ya=0,Xc=null,$o=0,ni=[],ii=0,Fs=null,Ci=1,Ri="";function Qi(t,e){xa[ya++]=$o,xa[ya++]=Xc,Xc=t,$o=e}function yx(t,e,n){ni[ii++]=Ci,ni[ii++]=Ri,ni[ii++]=Fs,Fs=t;var i=Ci;t=Ri;var s=32-Gn(i)-1;i&=~(1<<s),n+=1;var r=32-Gn(e)+s;if(30<r){var a=s-s%5;r=(i&(1<<a)-1).toString(32),i>>=a,s-=a,Ci=1<<32-Gn(e)+s|n<<s|i,Ri=r+t}else Ci=1<<r|n<<s|i,Ri=t}function Mp(t){t.return!==null&&(Qi(t,1),yx(t,1,0))}function Ep(t){for(;t===Xc;)Xc=xa[--ya],xa[ya]=null,$o=xa[--ya],xa[ya]=null;for(;t===Fs;)Fs=ni[--ii],ni[ii]=null,Ri=ni[--ii],ni[ii]=null,Ci=ni[--ii],ni[ii]=null}function _x(t,e){ni[ii++]=Ci,ni[ii++]=Ri,ni[ii++]=Fs,Ci=e.id,Ri=e.overflow,Fs=t}var on=null,St=null,qe=!1,Ds=null,ai=!1,Dd=Error(q(519));function zs(t){var e=Error(q(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw el(ri(e,t)),Dd}function Rv(t){var e=t.stateNode,n=t.type,i=t.memoizedProps;switch(e[an]=t,e[Dn]=i,n){case"dialog":ke("cancel",e),ke("close",e);break;case"iframe":case"object":case"embed":ke("load",e);break;case"video":case"audio":for(n=0;n<sl.length;n++)ke(sl[n],e);break;case"source":ke("error",e);break;case"img":case"image":case"link":ke("error",e),ke("load",e);break;case"details":ke("toggle",e);break;case"input":ke("invalid",e),K0(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":ke("invalid",e);break;case"textarea":ke("invalid",e),j0(e,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||i.suppressHydrationWarning===!0||n_(e.textContent,n)?(i.popover!=null&&(ke("beforetoggle",e),ke("toggle",e)),i.onScroll!=null&&ke("scroll",e),i.onScrollEnd!=null&&ke("scrollend",e),i.onClick!=null&&(e.onclick=Ji),e=!0):e=!1,e||zs(t,!0)}function Dv(t){for(on=t.return;on;)switch(on.tag){case 5:case 31:case 13:ai=!1;return;case 27:case 3:ai=!0;return;default:on=on.return}}function ra(t){if(t!==on)return!1;if(!qe)return Dv(t),qe=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||tp(t.type,t.memoizedProps)),n=!n),n&&St&&zs(t),Dv(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(q(317));St=x0(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(q(317));St=x0(t)}else e===27?(e=St,ks(t.type)?(t=rp,rp=null,St=t):St=e):St=on?li(t.stateNode.nextSibling):null;return!0}function Sr(){St=on=null,qe=!1}function qh(){var t=Ds;return t!==null&&(Cn===null?Cn=t:Cn.push.apply(Cn,t),Ds=null),t}function el(t){Ds===null?Ds=[t]:Ds.push(t)}var Ud=Bi(null),Ur=null,ji=null;function _s(t,e,n){vt(Ud,e._currentValue),e._currentValue=n}function es(t){t._currentValue=Ud.current,nn(Ud)}function Bd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Id(t,e,n,i){var s=t.child;for(s!==null&&(s.return=t);s!==null;){var r=s.dependencies;if(r!==null){var a=s.child;r=r.firstContext;e:for(;r!==null;){var o=r;r=s;for(var l=0;l<e.length;l++)if(o.context===e[l]){r.lanes|=n,o=r.alternate,o!==null&&(o.lanes|=n),Bd(r.return,n,t),i||(a=null);break e}r=o.next}}else if(s.tag===18){if(a=s.return,a===null)throw Error(q(341));a.lanes|=n,r=a.alternate,r!==null&&(r.lanes|=n),Bd(a,n,t),a=null}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}}function Ga(t,e,n,i){t=null;for(var s=e,r=!1;s!==null;){if(!r){if((s.flags&524288)!==0)r=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var a=s.alternate;if(a===null)throw Error(q(387));if(a=a.memoizedProps,a!==null){var o=s.type;kn(s.pendingProps.value,a.value)||(t!==null?t.push(o):t=[o])}}else if(s===Fc.current){if(a=s.alternate,a===null)throw Error(q(387));a.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(t!==null?t.push(al):t=[al])}s=s.return}t!==null&&Id(e,t,n,i),e.flags|=262144}function Yc(t){for(t=t.firstContext;t!==null;){if(!kn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Mr(t){Ur=t,ji=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ln(t){return Ax(Ur,t)}function dc(t,e){return Ur===null&&Mr(t),Ax(t,e)}function Ax(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},ji===null){if(t===null)throw Error(q(308));ji=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else ji=ji.next=e;return n}var oM=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},lM=Yt.unstable_scheduleCallback,cM=Yt.unstable_NormalPriority,Ht={$$typeof:Ki,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tp(){return{controller:new oM,data:new Map,refCount:0}}function ml(t){t.refCount--,t.refCount===0&&lM(cM,function(){t.controller.abort()})}var zo=null,Ld=0,Ua=0,Ea=null;function uM(t,e){if(zo===null){var n=zo=[];Ld=0,Ua=Kp(),Ea={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Ld++,e.then(Uv,Uv),e}function Uv(){if(--Ld===0&&zo!==null){Ea!==null&&(Ea.status="fulfilled");var t=zo;zo=null,Ua=0,Ea=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function fM(t,e){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var s=0;s<n.length;s++)(0,n[s])(e)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var Bv=De.S;De.S=function(t,e){Py=zn(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&uM(t,e),Bv!==null&&Bv(t,e)};var yr=Bi(null);function bp(){var t=yr.current;return t!==null?t:mt.pooledCache}function Cc(t,e){e===null?vt(yr,yr.current):vt(yr,e.pool)}function Sx(){var t=bp();return t===null?null:{parent:Ht._currentValue,pool:t}}var Va=Error(q(460)),wp=Error(q(474)),yu=Error(q(542)),qc={then:function(){}};function Iv(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Mx(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(Ji,Ji),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Pv(t),t;default:if(typeof e.status=="string")e.then(Ji,Ji);else{if(t=mt,t!==null&&100<t.shellSuspendCounter)throw Error(q(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var s=e;s.status="fulfilled",s.value=i}},function(i){if(e.status==="pending"){var s=e;s.status="rejected",s.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Pv(t),t}throw _r=e,Va}}function mr(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(_r=n,Va):n}}var _r=null;function Lv(){if(_r===null)throw Error(q(459));var t=_r;return _r=null,t}function Pv(t){if(t===Va||t===yu)throw Error(q(483))}var Ta=null,tl=0;function pc(t){var e=tl;return tl+=1,Ta===null&&(Ta=[]),Mx(Ta,t,e)}function bo(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function mc(t,e){throw e.$$typeof===JS?Error(q(525)):(t=Object.prototype.toString.call(e),Error(q(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Ex(t){function e(u,g){if(t){var v=u.deletions;v===null?(u.deletions=[g],u.flags|=16):v.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u){for(var g=new Map;u!==null;)u.key!==null?g.set(u.key,u):g.set(u.index,u),u=u.sibling;return g}function s(u,g){return u=$i(u,g),u.index=0,u.sibling=null,u}function r(u,g,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<g?(u.flags|=67108866,g):v):(u.flags|=67108866,g)):(u.flags|=1048576,g)}function a(u){return t&&u.alternate===null&&(u.flags|=67108866),u}function o(u,g,v,y){return g===null||g.tag!==6?(g=Xh(v,u.mode,y),g.return=u,g):(g=s(g,v),g.return=u,g)}function l(u,g,v,y){var b=v.type;return b===ca?f(u,g,v.props.children,y,v.key):g!==null&&(g.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===xs&&mr(b)===g.type)?(g=s(g,v.props),bo(g,v),g.return=u,g):(g=wc(v.type,v.key,v.props,null,u.mode,y),bo(g,v),g.return=u,g)}function c(u,g,v,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=Yh(v,u.mode,y),g.return=u,g):(g=s(g,v.children||[]),g.return=u,g)}function f(u,g,v,y,b){return g===null||g.tag!==7?(g=xr(v,u.mode,y,b),g.return=u,g):(g=s(g,v),g.return=u,g)}function d(u,g,v){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=Xh(""+g,u.mode,v),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case rc:return v=wc(g.type,g.key,g.props,null,u.mode,v),bo(v,g),v.return=u,v;case Uo:return g=Yh(g,u.mode,v),g.return=u,g;case xs:return g=mr(g),d(u,g,v)}if(Bo(g)||Eo(g))return g=xr(g,u.mode,v,null),g.return=u,g;if(typeof g.then=="function")return d(u,pc(g),v);if(g.$$typeof===Ki)return d(u,dc(u,g),v);mc(u,g)}return null}function h(u,g,v,y){var b=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return b!==null?null:o(u,g,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case rc:return v.key===b?l(u,g,v,y):null;case Uo:return v.key===b?c(u,g,v,y):null;case xs:return v=mr(v),h(u,g,v,y)}if(Bo(v)||Eo(v))return b!==null?null:f(u,g,v,y,null);if(typeof v.then=="function")return h(u,g,pc(v),y);if(v.$$typeof===Ki)return h(u,g,dc(u,v),y);mc(u,v)}return null}function p(u,g,v,y,b){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return u=u.get(v)||null,o(g,u,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case rc:return u=u.get(y.key===null?v:y.key)||null,l(g,u,y,b);case Uo:return u=u.get(y.key===null?v:y.key)||null,c(g,u,y,b);case xs:return y=mr(y),p(u,g,v,y,b)}if(Bo(y)||Eo(y))return u=u.get(v)||null,f(g,u,y,b,null);if(typeof y.then=="function")return p(u,g,v,pc(y),b);if(y.$$typeof===Ki)return p(u,g,v,dc(g,y),b);mc(g,y)}return null}function x(u,g,v,y){for(var b=null,C=null,w=g,U=g=0,M=null;w!==null&&U<v.length;U++){w.index>U?(M=w,w=null):M=w.sibling;var E=h(u,w,v[U],y);if(E===null){w===null&&(w=M);break}t&&w&&E.alternate===null&&e(u,w),g=r(E,g,U),C===null?b=E:C.sibling=E,C=E,w=M}if(U===v.length)return n(u,w),qe&&Qi(u,U),b;if(w===null){for(;U<v.length;U++)w=d(u,v[U],y),w!==null&&(g=r(w,g,U),C===null?b=w:C.sibling=w,C=w);return qe&&Qi(u,U),b}for(w=i(w);U<v.length;U++)M=p(w,u,U,v[U],y),M!==null&&(t&&M.alternate!==null&&w.delete(M.key===null?U:M.key),g=r(M,g,U),C===null?b=M:C.sibling=M,C=M);return t&&w.forEach(function(D){return e(u,D)}),qe&&Qi(u,U),b}function _(u,g,v,y){if(v==null)throw Error(q(151));for(var b=null,C=null,w=g,U=g=0,M=null,E=v.next();w!==null&&!E.done;U++,E=v.next()){w.index>U?(M=w,w=null):M=w.sibling;var D=h(u,w,E.value,y);if(D===null){w===null&&(w=M);break}t&&w&&D.alternate===null&&e(u,w),g=r(D,g,U),C===null?b=D:C.sibling=D,C=D,w=M}if(E.done)return n(u,w),qe&&Qi(u,U),b;if(w===null){for(;!E.done;U++,E=v.next())E=d(u,E.value,y),E!==null&&(g=r(E,g,U),C===null?b=E:C.sibling=E,C=E);return qe&&Qi(u,U),b}for(w=i(w);!E.done;U++,E=v.next())E=p(w,u,U,E.value,y),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?U:E.key),g=r(E,g,U),C===null?b=E:C.sibling=E,C=E);return t&&w.forEach(function(G){return e(u,G)}),qe&&Qi(u,U),b}function m(u,g,v,y){if(typeof v=="object"&&v!==null&&v.type===ca&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case rc:e:{for(var b=v.key;g!==null;){if(g.key===b){if(b=v.type,b===ca){if(g.tag===7){n(u,g.sibling),y=s(g,v.props.children),y.return=u,u=y;break e}}else if(g.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===xs&&mr(b)===g.type){n(u,g.sibling),y=s(g,v.props),bo(y,v),y.return=u,u=y;break e}n(u,g);break}else e(u,g);g=g.sibling}v.type===ca?(y=xr(v.props.children,u.mode,y,v.key),y.return=u,u=y):(y=wc(v.type,v.key,v.props,null,u.mode,y),bo(y,v),y.return=u,u=y)}return a(u);case Uo:e:{for(b=v.key;g!==null;){if(g.key===b)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(u,g.sibling),y=s(g,v.children||[]),y.return=u,u=y;break e}else{n(u,g);break}else e(u,g);g=g.sibling}y=Yh(v,u.mode,y),y.return=u,u=y}return a(u);case xs:return v=mr(v),m(u,g,v,y)}if(Bo(v))return x(u,g,v,y);if(Eo(v)){if(b=Eo(v),typeof b!="function")throw Error(q(150));return v=b.call(v),_(u,g,v,y)}if(typeof v.then=="function")return m(u,g,pc(v),y);if(v.$$typeof===Ki)return m(u,g,dc(u,v),y);mc(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,g!==null&&g.tag===6?(n(u,g.sibling),y=s(g,v),y.return=u,u=y):(n(u,g),y=Xh(v,u.mode,y),y.return=u,u=y),a(u)):n(u,g)}return function(u,g,v,y){try{tl=0;var b=m(u,g,v,y);return Ta=null,b}catch(w){if(w===Va||w===yu)throw w;var C=On(29,w,null,u.mode);return C.lanes=y,C.return=u,C}}}var Er=Ex(!0),Tx=Ex(!1),ys=!1;function Cp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pd(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Us(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Bs(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(nt&2)!==0){var s=i.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),i.pending=e,e=Wc(t),gx(t,null,n),e}return xu(t,i,e,n),Wc(t)}function Ho(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,k0(t,n)}}function Qh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var a={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?s=r=a:r=r.next=a,n=n.next}while(n!==null);r===null?s=r=e:r=r.next=e}else s=r=e;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var Nd=!1;function Go(){if(Nd){var t=Ea;if(t!==null)throw t}}function Vo(t,e,n,i){Nd=!1;var s=t.updateQueue;ys=!1;var r=s.firstBaseUpdate,a=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?r=c:a.next=c,a=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(r!==null){var d=s.baseState;a=0,f=c=l=null,o=r;do{var h=o.lane&-536870913,p=h!==o.lane;if(p?(Ye&h)===h:(i&h)===h){h!==0&&h===Ua&&(Nd=!0),f!==null&&(f=f.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var x=t,_=o;h=e;var m=n;switch(_.tag){case 1:if(x=_.payload,typeof x=="function"){d=x.call(m,d,h);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=_.payload,h=typeof x=="function"?x.call(m,d,h):x,h==null)break e;d=Mt({},d,h);break e;case 2:ys=!0}}h=o.callback,h!==null&&(t.flags|=64,p&&(t.flags|=8192),p=s.callbacks,p===null?s.callbacks=[h]:p.push(h))}else p={lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=p,l=d):f=f.next=p,a|=h;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;p=o,o=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);f===null&&(l=d),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=f,r===null&&(s.shared.lanes=0),Gs|=a,t.lanes=a,t.memoizedState=d}}function bx(t,e){if(typeof t!="function")throw Error(q(191,t));t.call(e)}function wx(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)bx(n[t],e)}var Ba=Bi(null),Qc=Bi(0);function Nv(t,e){t=as,vt(Qc,t),vt(Ba,e),as=t|e.baseLanes}function Od(){vt(Qc,as),vt(Ba,Ba.current)}function Rp(){as=Qc.current,nn(Ba),nn(Qc)}var Wn=Bi(null),oi=null;function As(t){var e=t.alternate;vt(Pt,Pt.current&1),vt(Wn,t),oi===null&&(e===null||Ba.current!==null||e.memoizedState!==null)&&(oi=t)}function Fd(t){vt(Pt,Pt.current),vt(Wn,t),oi===null&&(oi=t)}function Cx(t){t.tag===22?(vt(Pt,Pt.current),vt(Wn,t),oi===null&&(oi=t)):Ss(t)}function Ss(){vt(Pt,Pt.current),vt(Wn,Wn.current)}function Nn(t){nn(Wn),oi===t&&(oi=null),nn(Pt)}var Pt=Bi(0);function Zc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||ip(n)||sp(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var is=0,Ne=null,ht=null,Ft=null,Kc=!1,ba=!1,Tr=!1,Jc=0,nl=0,wa=null,hM=0;function Ut(){throw Error(q(321))}function Dp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!kn(t[n],e[n]))return!1;return!0}function Up(t,e,n,i,s,r){return is=r,Ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,De.H=t===null||t.memoizedState===null?ry:Vp,Tr=!1,r=n(i,s),Tr=!1,ba&&(r=Dx(e,n,i,s)),Rx(t),r}function Rx(t){De.H=il;var e=ht!==null&&ht.next!==null;if(is=0,Ft=ht=Ne=null,Kc=!1,nl=0,wa=null,e)throw Error(q(300));t===null||Gt||(t=t.dependencies,t!==null&&Yc(t)&&(Gt=!0))}function Dx(t,e,n,i){Ne=t;var s=0;do{if(ba&&(wa=null),nl=0,ba=!1,25<=s)throw Error(q(301));if(s+=1,Ft=ht=null,t.updateQueue!=null){var r=t.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}De.H=ay,r=e(n,i)}while(ba);return r}function dM(){var t=De.H,e=t.useState()[0];return e=typeof e.then=="function"?gl(e):e,t=t.useState()[0],(ht!==null?ht.memoizedState:null)!==t&&(Ne.flags|=1024),e}function Bp(){var t=Jc!==0;return Jc=0,t}function Ip(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Lp(t){if(Kc){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Kc=!1}is=0,Ft=ht=Ne=null,ba=!1,nl=Jc=0,wa=null}function Sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?Ne.memoizedState=Ft=t:Ft=Ft.next=t,Ft}function Nt(){if(ht===null){var t=Ne.alternate;t=t!==null?t.memoizedState:null}else t=ht.next;var e=Ft===null?Ne.memoizedState:Ft.next;if(e!==null)Ft=e,ht=t;else{if(t===null)throw Ne.alternate===null?Error(q(467)):Error(q(310));ht=t,t={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},Ft===null?Ne.memoizedState=Ft=t:Ft=Ft.next=t}return Ft}function _u(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function gl(t){var e=nl;return nl+=1,wa===null&&(wa=[]),t=Mx(wa,t,e),e=Ne,(Ft===null?e.memoizedState:Ft.next)===null&&(e=e.alternate,De.H=e===null||e.memoizedState===null?ry:Vp),t}function Au(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return gl(t);if(t.$$typeof===Ki)return ln(t)}throw Error(q(438,String(t)))}function Pp(t){var e=null,n=Ne.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var i=Ne.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(s){return s.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=_u(),Ne.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),i=0;i<t;i++)n[i]=jS;return e.index++,n}function ss(t,e){return typeof e=="function"?e(t):e}function Rc(t){var e=Nt();return Np(e,ht,t)}function Np(t,e,n){var i=t.queue;if(i===null)throw Error(q(311));i.lastRenderedReducer=n;var s=t.baseQueue,r=i.pending;if(r!==null){if(s!==null){var a=s.next;s.next=r.next,r.next=a}e.baseQueue=s=r,i.pending=null}if(r=t.baseState,s===null)t.memoizedState=r;else{e=s.next;var o=a=null,l=null,c=e,f=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(Ye&d)===d:(is&d)===d){var h=c.revertLane;if(h===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===Ua&&(f=!0);else if((is&h)===h){c=c.next,h===Ua&&(f=!0);continue}else d={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,a=r):l=l.next=d,Ne.lanes|=h,Gs|=h;d=c.action,Tr&&n(r,d),r=c.hasEagerState?c.eagerState:n(r,d)}else h={lane:d,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=h,a=r):l=l.next=h,Ne.lanes|=d,Gs|=d;c=c.next}while(c!==null&&c!==e);if(l===null?a=r:l.next=o,!kn(r,t.memoizedState)&&(Gt=!0,f&&(n=Ea,n!==null)))throw n;t.memoizedState=r,t.baseState=a,t.baseQueue=l,i.lastRenderedState=r}return s===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function Zh(t){var e=Nt(),n=e.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=t;var i=n.dispatch,s=n.pending,r=e.memoizedState;if(s!==null){n.pending=null;var a=s=s.next;do r=t(r,a.action),a=a.next;while(a!==s);kn(r,e.memoizedState)||(Gt=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),n.lastRenderedState=r}return[r,i]}function Ux(t,e,n){var i=Ne,s=Nt(),r=qe;if(r){if(n===void 0)throw Error(q(407));n=n()}else n=e();var a=!kn((ht||s).memoizedState,n);if(a&&(s.memoizedState=n,Gt=!0),s=s.queue,Op(Lx.bind(null,i,s,t),[t]),s.getSnapshot!==e||a||Ft!==null&&Ft.memoizedState.tag&1){if(i.flags|=2048,Ia(9,{destroy:void 0},Ix.bind(null,i,s,n,e),null),mt===null)throw Error(q(349));r||(is&127)!==0||Bx(i,e,n)}return n}function Bx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ne.updateQueue,e===null?(e=_u(),Ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ix(t,e,n,i){e.value=n,e.getSnapshot=i,Px(e)&&Nx(t)}function Lx(t,e,n){return n(function(){Px(e)&&Nx(t)})}function Px(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!kn(t,n)}catch{return!0}}function Nx(t){var e=Dr(t,2);e!==null&&Rn(e,t,2)}function zd(t){var e=Sn();if(typeof t=="function"){var n=t;if(t=n(),Tr){Es(!0);try{n()}finally{Es(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ss,lastRenderedState:t},e}function Ox(t,e,n,i){return t.baseState=n,Np(t,ht,typeof i=="function"?i:ss)}function pM(t,e,n,i,s){if(Mu(t))throw Error(q(485));if(t=e.action,t!==null){var r={payload:s,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(a){r.listeners.push(a)}};De.T!==null?n(!0):r.isTransition=!1,i(r),n=e.pending,n===null?(r.next=e.pending=r,Fx(e,r)):(r.next=n.next,e.pending=n.next=r)}}function Fx(t,e){var n=e.action,i=e.payload,s=t.state;if(e.isTransition){var r=De.T,a={};De.T=a;try{var o=n(s,i),l=De.S;l!==null&&l(a,o),Ov(t,e,o)}catch(c){Hd(t,e,c)}finally{r!==null&&a.types!==null&&(r.types=a.types),De.T=r}}else try{r=n(s,i),Ov(t,e,r)}catch(c){Hd(t,e,c)}}function Ov(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Fv(t,e,i)},function(i){return Hd(t,e,i)}):Fv(t,e,n)}function Fv(t,e,n){e.status="fulfilled",e.value=n,zx(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,Fx(t,n)))}function Hd(t,e,n){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=n,zx(e),e=e.next;while(e!==i)}t.action=null}function zx(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Hx(t,e){return e}function zv(t,e){if(qe){var n=mt.formState;if(n!==null){e:{var i=Ne;if(qe){if(St){t:{for(var s=St,r=ai;s.nodeType!==8;){if(!r){s=null;break t}if(s=li(s.nextSibling),s===null){s=null;break t}}r=s.data,s=r==="F!"||r==="F"?s:null}if(s){St=li(s.nextSibling),i=s.data==="F!";break e}}zs(i)}i=!1}i&&(e=n[0])}}return n=Sn(),n.memoizedState=n.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hx,lastRenderedState:e},n.queue=i,n=ny.bind(null,Ne,i),i.dispatch=n,i=zd(!1),r=Gp.bind(null,Ne,!1,i.queue),i=Sn(),s={state:e,dispatch:null,action:t,pending:null},i.queue=s,n=pM.bind(null,Ne,s,r,n),s.dispatch=n,i.memoizedState=t,[e,n,!1]}function Hv(t){var e=Nt();return Gx(e,ht,t)}function Gx(t,e,n){if(e=Np(t,e,Hx)[0],t=Rc(ss)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=gl(e)}catch(a){throw a===Va?yu:a}else i=e;e=Nt();var s=e.queue,r=s.dispatch;return n!==e.memoizedState&&(Ne.flags|=2048,Ia(9,{destroy:void 0},mM.bind(null,s,n),null)),[i,r,t]}function mM(t,e){t.action=e}function Gv(t){var e=Nt(),n=ht;if(n!==null)return Gx(e,n,t);Nt(),e=e.memoizedState,n=Nt();var i=n.queue.dispatch;return n.memoizedState=t,[e,i,!1]}function Ia(t,e,n,i){return t={tag:t,create:n,deps:i,inst:e,next:null},e=Ne.updateQueue,e===null&&(e=_u(),Ne.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t),t}function Vx(){return Nt().memoizedState}function Dc(t,e,n,i){var s=Sn();Ne.flags|=t,s.memoizedState=Ia(1|e,{destroy:void 0},n,i===void 0?null:i)}function Su(t,e,n,i){var s=Nt();i=i===void 0?null:i;var r=s.memoizedState.inst;ht!==null&&i!==null&&Dp(i,ht.memoizedState.deps)?s.memoizedState=Ia(e,r,n,i):(Ne.flags|=t,s.memoizedState=Ia(1|e,r,n,i))}function Vv(t,e){Dc(8390656,8,t,e)}function Op(t,e){Su(2048,8,t,e)}function gM(t){Ne.flags|=4;var e=Ne.updateQueue;if(e===null)e=_u(),Ne.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function kx(t){var e=Nt().memoizedState;return gM({ref:e,nextImpl:t}),function(){if((nt&2)!==0)throw Error(q(440));return e.impl.apply(void 0,arguments)}}function Wx(t,e){return Su(4,2,t,e)}function Xx(t,e){return Su(4,4,t,e)}function Yx(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function qx(t,e,n){n=n!=null?n.concat([t]):null,Su(4,4,Yx.bind(null,e,t),n)}function Fp(){}function Qx(t,e){var n=Nt();e=e===void 0?null:e;var i=n.memoizedState;return e!==null&&Dp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Zx(t,e){var n=Nt();e=e===void 0?null:e;var i=n.memoizedState;if(e!==null&&Dp(e,i[1]))return i[0];if(i=t(),Tr){Es(!0);try{t()}finally{Es(!1)}}return n.memoizedState=[i,e],i}function zp(t,e,n){return n===void 0||(is&1073741824)!==0&&(Ye&261930)===0?t.memoizedState=e:(t.memoizedState=n,t=Oy(),Ne.lanes|=t,Gs|=t,n)}function Kx(t,e,n,i){return kn(n,e)?n:Ba.current!==null?(t=zp(t,n,i),kn(t,e)||(Gt=!0),t):(is&42)===0||(is&1073741824)!==0&&(Ye&261930)===0?(Gt=!0,t.memoizedState=n):(t=Oy(),Ne.lanes|=t,Gs|=t,e)}function Jx(t,e,n,i,s){var r=it.p;it.p=r!==0&&8>r?r:8;var a=De.T,o={};De.T=o,Gp(t,!1,e,n);try{var l=s(),c=De.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=fM(l,i);ko(t,e,f,Vn(t))}else ko(t,e,i,Vn(t))}catch(d){ko(t,e,{then:function(){},status:"rejected",reason:d},Vn())}finally{it.p=r,a!==null&&o.types!==null&&(a.types=o.types),De.T=a}}function vM(){}function Gd(t,e,n,i){if(t.tag!==5)throw Error(q(476));var s=jx(t).queue;Jx(t,s,e,vr,n===null?vM:function(){return $x(t),n(i)})}function jx(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:vr,baseState:vr,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ss,lastRenderedState:vr},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ss,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function $x(t){var e=jx(t);e.next===null&&(e=t.alternate.memoizedState),ko(t,e.next.queue,{},Vn())}function Hp(){return ln(al)}function ey(){return Nt().memoizedState}function ty(){return Nt().memoizedState}function xM(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=Vn();t=Us(n);var i=Bs(e,t,n);i!==null&&(Rn(i,e,n),Ho(i,e,n)),e={cache:Tp()},t.payload=e;return}e=e.return}}function yM(t,e,n){var i=Vn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Mu(t)?iy(e,n):(n=Ap(t,e,n,i),n!==null&&(Rn(n,t,i),sy(n,e,i)))}function ny(t,e,n){var i=Vn();ko(t,e,n,i)}function ko(t,e,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Mu(t))iy(e,s);else{var r=t.alternate;if(t.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var a=e.lastRenderedState,o=r(a,n);if(s.hasEagerState=!0,s.eagerState=o,kn(o,a))return xu(t,e,s,0),mt===null&&vu(),!1}catch{}if(n=Ap(t,e,s,i),n!==null)return Rn(n,t,i),sy(n,e,i),!0}return!1}function Gp(t,e,n,i){if(i={lane:2,revertLane:Kp(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Mu(t)){if(e)throw Error(q(479))}else e=Ap(t,n,i,2),e!==null&&Rn(e,t,2)}function Mu(t){var e=t.alternate;return t===Ne||e!==null&&e===Ne}function iy(t,e){ba=Kc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function sy(t,e,n){if((n&4194048)!==0){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,k0(t,n)}}var il={readContext:ln,use:Au,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useLayoutEffect:Ut,useInsertionEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useSyncExternalStore:Ut,useId:Ut,useHostTransitionStatus:Ut,useFormState:Ut,useActionState:Ut,useOptimistic:Ut,useMemoCache:Ut,useCacheRefresh:Ut};il.useEffectEvent=Ut;var ry={readContext:ln,use:Au,useCallback:function(t,e){return Sn().memoizedState=[t,e===void 0?null:e],t},useContext:ln,useEffect:Vv,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Dc(4194308,4,Yx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Dc(4194308,4,t,e)},useInsertionEffect:function(t,e){Dc(4,2,t,e)},useMemo:function(t,e){var n=Sn();e=e===void 0?null:e;var i=t();if(Tr){Es(!0);try{t()}finally{Es(!1)}}return n.memoizedState=[i,e],i},useReducer:function(t,e,n){var i=Sn();if(n!==void 0){var s=n(e);if(Tr){Es(!0);try{n(e)}finally{Es(!1)}}}else s=e;return i.memoizedState=i.baseState=s,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:s},i.queue=t,t=t.dispatch=yM.bind(null,Ne,t),[i.memoizedState,t]},useRef:function(t){var e=Sn();return t={current:t},e.memoizedState=t},useState:function(t){t=zd(t);var e=t.queue,n=ny.bind(null,Ne,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:Fp,useDeferredValue:function(t,e){var n=Sn();return zp(n,t,e)},useTransition:function(){var t=zd(!1);return t=Jx.bind(null,Ne,t.queue,!0,!1),Sn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var i=Ne,s=Sn();if(qe){if(n===void 0)throw Error(q(407));n=n()}else{if(n=e(),mt===null)throw Error(q(349));(Ye&127)!==0||Bx(i,e,n)}s.memoizedState=n;var r={value:n,getSnapshot:e};return s.queue=r,Vv(Lx.bind(null,i,r,t),[t]),i.flags|=2048,Ia(9,{destroy:void 0},Ix.bind(null,i,r,n,e),null),n},useId:function(){var t=Sn(),e=mt.identifierPrefix;if(qe){var n=Ri,i=Ci;n=(i&~(1<<32-Gn(i)-1)).toString(32)+n,e="_"+e+"R_"+n,n=Jc++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=hM++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Hp,useFormState:zv,useActionState:zv,useOptimistic:function(t){var e=Sn();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=Gp.bind(null,Ne,!0,n),n.dispatch=e,[t,e]},useMemoCache:Pp,useCacheRefresh:function(){return Sn().memoizedState=xM.bind(null,Ne)},useEffectEvent:function(t){var e=Sn(),n={impl:t};return e.memoizedState=n,function(){if((nt&2)!==0)throw Error(q(440));return n.impl.apply(void 0,arguments)}}},Vp={readContext:ln,use:Au,useCallback:Qx,useContext:ln,useEffect:Op,useImperativeHandle:qx,useInsertionEffect:Wx,useLayoutEffect:Xx,useMemo:Zx,useReducer:Rc,useRef:Vx,useState:function(){return Rc(ss)},useDebugValue:Fp,useDeferredValue:function(t,e){var n=Nt();return Kx(n,ht.memoizedState,t,e)},useTransition:function(){var t=Rc(ss)[0],e=Nt().memoizedState;return[typeof t=="boolean"?t:gl(t),e]},useSyncExternalStore:Ux,useId:ey,useHostTransitionStatus:Hp,useFormState:Hv,useActionState:Hv,useOptimistic:function(t,e){var n=Nt();return Ox(n,ht,t,e)},useMemoCache:Pp,useCacheRefresh:ty};Vp.useEffectEvent=kx;var ay={readContext:ln,use:Au,useCallback:Qx,useContext:ln,useEffect:Op,useImperativeHandle:qx,useInsertionEffect:Wx,useLayoutEffect:Xx,useMemo:Zx,useReducer:Zh,useRef:Vx,useState:function(){return Zh(ss)},useDebugValue:Fp,useDeferredValue:function(t,e){var n=Nt();return ht===null?zp(n,t,e):Kx(n,ht.memoizedState,t,e)},useTransition:function(){var t=Zh(ss)[0],e=Nt().memoizedState;return[typeof t=="boolean"?t:gl(t),e]},useSyncExternalStore:Ux,useId:ey,useHostTransitionStatus:Hp,useFormState:Gv,useActionState:Gv,useOptimistic:function(t,e){var n=Nt();return ht!==null?Ox(n,ht,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:Pp,useCacheRefresh:ty};ay.useEffectEvent=kx;function Kh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Vd={enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Vn(),s=Us(i);s.payload=e,n!=null&&(s.callback=n),e=Bs(t,s,i),e!==null&&(Rn(e,t,i),Ho(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Vn(),s=Us(i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Bs(t,s,i),e!==null&&(Rn(e,t,i),Ho(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Vn(),i=Us(n);i.tag=2,e!=null&&(i.callback=e),e=Bs(t,i,n),e!==null&&(Rn(e,t,n),Ho(e,t,n))}};function kv(t,e,n,i,s,r,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,r,a):e.prototype&&e.prototype.isPureReactComponent?!jo(n,i)||!jo(s,r):!0}function Wv(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Vd.enqueueReplaceState(e,e.state,null)}function br(t,e){var n=e;if("ref"in e){n={};for(var i in e)i!=="ref"&&(n[i]=e[i])}if(t=t.defaultProps){n===e&&(n=Mt({},n));for(var s in t)n[s]===void 0&&(n[s]=t[s])}return n}function oy(t){kc(t)}function ly(t){console.error(t)}function cy(t){kc(t)}function jc(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function Xv(t,e,n){try{var i=t.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function kd(t,e,n){return n=Us(n),n.tag=3,n.payload={element:null},n.callback=function(){jc(t,e)},n}function uy(t){return t=Us(t),t.tag=3,t}function fy(t,e,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var r=i.value;t.payload=function(){return s(r)},t.callback=function(){Xv(e,n,i)}}var a=n.stateNode;a!==null&&typeof a.componentDidCatch=="function"&&(t.callback=function(){Xv(e,n,i),typeof s!="function"&&(Is===null?Is=new Set([this]):Is.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function _M(t,e,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=n.alternate,e!==null&&Ga(e,n,s,!0),n=Wn.current,n!==null){switch(n.tag){case 31:case 13:return oi===null?iu():n.alternate===null&&Bt===0&&(Bt=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===qc?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([i]):e.add(i),od(t,i,s)),!1;case 22:return n.flags|=65536,i===qc?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([i]):n.add(i)),od(t,i,s)),!1}throw Error(q(435,n.tag))}return od(t,i,s),iu(),!1}if(qe)return e=Wn.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=s,i!==Dd&&(t=Error(q(422),{cause:i}),el(ri(t,n)))):(i!==Dd&&(e=Error(q(423),{cause:i}),el(ri(e,n))),t=t.current.alternate,t.flags|=65536,s&=-s,t.lanes|=s,i=ri(i,n),s=kd(t.stateNode,i,s),Qh(t,s),Bt!==4&&(Bt=2)),!1;var r=Error(q(520),{cause:i});if(r=ri(r,n),Yo===null?Yo=[r]:Yo.push(r),Bt!==4&&(Bt=2),e===null)return!0;i=ri(i,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=s&-s,n.lanes|=t,t=kd(n.stateNode,i,t),Qh(n,t),!1;case 1:if(e=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Is===null||!Is.has(r))))return n.flags|=65536,s&=-s,n.lanes|=s,s=uy(s),fy(s,t,n,i),Qh(n,s),!1}n=n.return}while(n!==null);return!1}var kp=Error(q(461)),Gt=!1;function rn(t,e,n,i){e.child=t===null?Tx(e,null,n,i):Er(e,t.child,n,i)}function Yv(t,e,n,i,s){n=n.render;var r=e.ref;if("ref"in i){var a={};for(var o in i)o!=="ref"&&(a[o]=i[o])}else a=i;return Mr(e),i=Up(t,e,n,a,r,s),o=Bp(),t!==null&&!Gt?(Ip(t,e,s),rs(t,e,s)):(qe&&o&&Mp(e),e.flags|=1,rn(t,e,i,s),e.child)}function qv(t,e,n,i,s){if(t===null){var r=n.type;return typeof r=="function"&&!Sp(r)&&r.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=r,hy(t,e,r,i,s)):(t=wc(n.type,null,i,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(r=t.child,!Wp(t,s)){var a=r.memoizedProps;if(n=n.compare,n=n!==null?n:jo,n(a,i)&&t.ref===e.ref)return rs(t,e,s)}return e.flags|=1,t=$i(r,i),t.ref=e.ref,t.return=e,e.child=t}function hy(t,e,n,i,s){if(t!==null){var r=t.memoizedProps;if(jo(r,i)&&t.ref===e.ref)if(Gt=!1,e.pendingProps=i=r,Wp(t,s))(t.flags&131072)!==0&&(Gt=!0);else return e.lanes=t.lanes,rs(t,e,s)}return Wd(t,e,n,i,s)}function dy(t,e,n,i){var s=i.children,r=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((e.flags&128)!==0){if(r=r!==null?r.baseLanes|n:n,t!==null){for(i=e.child=t.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~r}else i=0,e.child=null;return Qv(t,e,r,n,i)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Cc(e,r!==null?r.cachePool:null),r!==null?Nv(e,r):Od(),Cx(e);else return i=e.lanes=536870912,Qv(t,e,r!==null?r.baseLanes|n:n,n,i)}else r!==null?(Cc(e,r.cachePool),Nv(e,r),Ss(e),e.memoizedState=null):(t!==null&&Cc(e,null),Od(),Ss(e));return rn(t,e,s,n),e.child}function Lo(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Qv(t,e,n,i,s){var r=bp();return r=r===null?null:{parent:Ht._currentValue,pool:r},e.memoizedState={baseLanes:n,cachePool:r},t!==null&&Cc(e,null),Od(),Cx(e),t!==null&&Ga(t,e,i,!0),e.childLanes=s,null}function Uc(t,e){return e=$c({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Zv(t,e,n){return Er(e,t.child,null,n),t=Uc(e,e.pendingProps),t.flags|=2,Nn(e),e.memoizedState=null,t}function AM(t,e,n){var i=e.pendingProps,s=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(qe){if(i.mode==="hidden")return t=Uc(e,i),e.lanes=536870912,Lo(null,t);if(Fd(e),(t=St)?(t=r_(t,ai),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Fs!==null?{id:Ci,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},n=xx(t),n.return=e,e.child=n,on=e,St=null)):t=null,t===null)throw zs(e);return e.lanes=536870912,null}return Uc(e,i)}var r=t.memoizedState;if(r!==null){var a=r.dehydrated;if(Fd(e),s)if(e.flags&256)e.flags&=-257,e=Zv(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(q(558));else if(Gt||Ga(t,e,n,!1),s=(n&t.childLanes)!==0,Gt||s){if(i=mt,i!==null&&(a=W0(i,n),a!==0&&a!==r.retryLane))throw r.retryLane=a,Dr(t,a),Rn(i,t,a),kp;iu(),e=Zv(t,e,n)}else t=r.treeContext,St=li(a.nextSibling),on=e,qe=!0,Ds=null,ai=!1,t!==null&&_x(e,t),e=Uc(e,i),e.flags|=4096;return e}return t=$i(t.child,{mode:i.mode,children:i.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Bc(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(q(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function Wd(t,e,n,i,s){return Mr(e),n=Up(t,e,n,i,void 0,s),i=Bp(),t!==null&&!Gt?(Ip(t,e,s),rs(t,e,s)):(qe&&i&&Mp(e),e.flags|=1,rn(t,e,n,s),e.child)}function Kv(t,e,n,i,s,r){return Mr(e),e.updateQueue=null,n=Dx(e,i,n,s),Rx(t),i=Bp(),t!==null&&!Gt?(Ip(t,e,r),rs(t,e,r)):(qe&&i&&Mp(e),e.flags|=1,rn(t,e,n,r),e.child)}function Jv(t,e,n,i,s){if(Mr(e),e.stateNode===null){var r=va,a=n.contextType;typeof a=="object"&&a!==null&&(r=ln(a)),r=new n(i,r),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Vd,e.stateNode=r,r._reactInternals=e,r=e.stateNode,r.props=i,r.state=e.memoizedState,r.refs={},Cp(e),a=n.contextType,r.context=typeof a=="object"&&a!==null?ln(a):va,r.state=e.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(Kh(e,n,a,i),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(a=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),a!==r.state&&Vd.enqueueReplaceState(r,r.state,null),Vo(e,i,r,s),Go(),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){r=e.stateNode;var o=e.memoizedProps,l=br(n,o);r.props=l;var c=r.context,f=n.contextType;a=va,typeof f=="object"&&f!==null&&(a=ln(f));var d=n.getDerivedStateFromProps;f=typeof d=="function"||typeof r.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,f||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o||c!==a)&&Wv(e,r,i,a),ys=!1;var h=e.memoizedState;r.state=h,Vo(e,i,r,s),Go(),c=e.memoizedState,o||h!==c||ys?(typeof d=="function"&&(Kh(e,n,d,i),c=e.memoizedState),(l=ys||kv(e,n,l,i,h,c,a))?(f||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(e.flags|=4194308)):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),r.props=i,r.state=c,r.context=a,i=l):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{r=e.stateNode,Pd(t,e),a=e.memoizedProps,f=br(n,a),r.props=f,d=e.pendingProps,h=r.context,c=n.contextType,l=va,typeof c=="object"&&c!==null&&(l=ln(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Wv(e,r,i,l),ys=!1,h=e.memoizedState,r.state=h,Vo(e,i,r,s),Go();var p=e.memoizedState;a!==d||h!==p||ys||t!==null&&t.dependencies!==null&&Yc(t.dependencies)?(typeof o=="function"&&(Kh(e,n,o,i),p=e.memoizedState),(f=ys||kv(e,n,f,i,h,p,l)||t!==null&&t.dependencies!==null&&Yc(t.dependencies))?(c||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,p,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,p,l)),typeof r.componentDidUpdate=="function"&&(e.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof r.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=p),r.props=i,r.state=p,r.context=l,i=f):(typeof r.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return r=i,Bc(t,e),i=(e.flags&128)!==0,r||i?(r=e.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:r.render(),e.flags|=1,t!==null&&i?(e.child=Er(e,t.child,null,s),e.child=Er(e,null,n,s)):rn(t,e,n,s),e.memoizedState=r.state,t=e.child):t=rs(t,e,s),t}function jv(t,e,n,i){return Sr(),e.flags|=256,rn(t,e,n,i),e.child}var Jh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function jh(t){return{baseLanes:t,cachePool:Sx()}}function $h(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=Fn),t}function py(t,e,n){var i=e.pendingProps,s=!1,r=(e.flags&128)!==0,a;if((a=r)||(a=t!==null&&t.memoizedState===null?!1:(Pt.current&2)!==0),a&&(s=!0,e.flags&=-129),a=(e.flags&32)!==0,e.flags&=-33,t===null){if(qe){if(s?As(e):Ss(e),(t=St)?(t=r_(t,ai),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Fs!==null?{id:Ci,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},n=xx(t),n.return=e,e.child=n,on=e,St=null)):t=null,t===null)throw zs(e);return sp(t)?e.lanes=32:e.lanes=536870912,null}var o=i.children;return i=i.fallback,s?(Ss(e),s=e.mode,o=$c({mode:"hidden",children:o},s),i=xr(i,s,n,null),o.return=e,i.return=e,o.sibling=i,e.child=o,i=e.child,i.memoizedState=jh(n),i.childLanes=$h(t,a,n),e.memoizedState=Jh,Lo(null,i)):(As(e),Xd(e,o))}var l=t.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(r)e.flags&256?(As(e),e.flags&=-257,e=ed(t,e,n)):e.memoizedState!==null?(Ss(e),e.child=t.child,e.flags|=128,e=null):(Ss(e),o=i.fallback,s=e.mode,i=$c({mode:"visible",children:i.children},s),o=xr(o,s,n,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,Er(e,t.child,null,n),i=e.child,i.memoizedState=jh(n),i.childLanes=$h(t,a,n),e.memoizedState=Jh,e=Lo(null,i));else if(As(e),sp(o)){if(a=o.nextSibling&&o.nextSibling.dataset,a)var c=a.dgst;a=c,i=Error(q(419)),i.stack="",i.digest=a,el({value:i,source:null,stack:null}),e=ed(t,e,n)}else if(Gt||Ga(t,e,n,!1),a=(n&t.childLanes)!==0,Gt||a){if(a=mt,a!==null&&(i=W0(a,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,Dr(t,i),Rn(a,t,i),kp;ip(o)||iu(),e=ed(t,e,n)}else ip(o)?(e.flags|=192,e.child=t.child,e=null):(t=l.treeContext,St=li(o.nextSibling),on=e,qe=!0,Ds=null,ai=!1,t!==null&&_x(e,t),e=Xd(e,i.children),e.flags|=4096);return e}return s?(Ss(e),o=i.fallback,s=e.mode,l=t.child,c=l.sibling,i=$i(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=$i(c,o):(o=xr(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,Lo(null,i),i=e.child,o=t.child.memoizedState,o===null?o=jh(n):(s=o.cachePool,s!==null?(l=Ht._currentValue,s=s.parent!==l?{parent:l,pool:l}:s):s=Sx(),o={baseLanes:o.baseLanes|n,cachePool:s}),i.memoizedState=o,i.childLanes=$h(t,a,n),e.memoizedState=Jh,Lo(t.child,i)):(As(e),n=t.child,t=n.sibling,n=$i(n,{mode:"visible",children:i.children}),n.return=e,n.sibling=null,t!==null&&(a=e.deletions,a===null?(e.deletions=[t],e.flags|=16):a.push(t)),e.child=n,e.memoizedState=null,n)}function Xd(t,e){return e=$c({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function $c(t,e){return t=On(22,t,null,e),t.lanes=0,t}function ed(t,e,n){return Er(e,t.child,null,n),t=Xd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function $v(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Bd(t.return,e,n)}function td(t,e,n,i,s,r){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:r}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=s,a.treeForkCount=r)}function my(t,e,n){var i=e.pendingProps,s=i.revealOrder,r=i.tail;i=i.children;var a=Pt.current,o=(a&2)!==0;if(o?(a=a&1|2,e.flags|=128):a&=1,vt(Pt,a),rn(t,e,i,n),i=qe?$o:0,!o&&t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$v(t,n,e);else if(t.tag===19)$v(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Zc(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),td(e,!1,s,n,r,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Zc(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}td(e,!0,n,null,r,i);break;case"together":td(e,!1,null,null,void 0,i);break;default:e.memoizedState=null}return e.child}function rs(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Gs|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(Ga(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(q(153));if(e.child!==null){for(t=e.child,n=$i(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=$i(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Wp(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Yc(t)))}function SM(t,e,n){switch(e.tag){case 3:zc(e,e.stateNode.containerInfo),_s(e,Ht,t.memoizedState.cache),Sr();break;case 27:case 5:yd(e);break;case 4:zc(e,e.stateNode.containerInfo);break;case 10:_s(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Fd(e),null;break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(As(e),e.flags|=128,null):(n&e.child.childLanes)!==0?py(t,e,n):(As(e),t=rs(t,e,n),t!==null?t.sibling:null);As(e);break;case 19:var s=(t.flags&128)!==0;if(i=(n&e.childLanes)!==0,i||(Ga(t,e,n,!1),i=(n&e.childLanes)!==0),s){if(i)return my(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),vt(Pt,Pt.current),i)break;return null;case 22:return e.lanes=0,dy(t,e,n,e.pendingProps);case 24:_s(e,Ht,t.memoizedState.cache)}return rs(t,e,n)}function gy(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Gt=!0;else{if(!Wp(t,n)&&(e.flags&128)===0)return Gt=!1,SM(t,e,n);Gt=(t.flags&131072)!==0}else Gt=!1,qe&&(e.flags&1048576)!==0&&yx(e,$o,e.index);switch(e.lanes=0,e.tag){case 16:e:{var i=e.pendingProps;if(t=mr(e.elementType),e.type=t,typeof t=="function")Sp(t)?(i=br(t,i),e.tag=1,e=Jv(null,e,t,i,n)):(e.tag=0,e=Wd(null,e,t,i,n));else{if(t!=null){var s=t.$$typeof;if(s===lp){e.tag=11,e=Yv(null,e,t,i,n);break e}else if(s===cp){e.tag=14,e=qv(null,e,t,i,n);break e}}throw e=vd(t)||t,Error(q(306,e,""))}}return e;case 0:return Wd(t,e,e.type,e.pendingProps,n);case 1:return i=e.type,s=br(i,e.pendingProps),Jv(t,e,i,s,n);case 3:e:{if(zc(e,e.stateNode.containerInfo),t===null)throw Error(q(387));i=e.pendingProps;var r=e.memoizedState;s=r.element,Pd(t,e),Vo(e,i,null,n);var a=e.memoizedState;if(i=a.cache,_s(e,Ht,i),i!==r.cache&&Id(e,[Ht],n,!0),Go(),i=a.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:a.cache},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){e=jv(t,e,i,n);break e}else if(i!==s){s=ri(Error(q(424)),e),el(s),e=jv(t,e,i,n);break e}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,St=li(t.firstChild),on=e,qe=!0,Ds=null,ai=!0,n=Tx(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Sr(),i===s){e=rs(t,e,n);break e}rn(t,e,i,n)}e=e.child}return e;case 26:return Bc(t,e),t===null?(n=A0(e.type,null,e.pendingProps,null))?e.memoizedState=n:qe||(n=e.type,t=e.pendingProps,i=ou(Rs.current).createElement(n),i[an]=e,i[Dn]=t,cn(i,n,t),tn(i),e.stateNode=i):e.memoizedState=A0(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return yd(e),t===null&&qe&&(i=e.stateNode=a_(e.type,e.pendingProps,Rs.current),on=e,ai=!0,s=St,ks(e.type)?(rp=s,St=li(i.firstChild)):St=s),rn(t,e,e.pendingProps.children,n),Bc(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&qe&&((s=i=St)&&(i=KM(i,e.type,e.pendingProps,ai),i!==null?(e.stateNode=i,on=e,St=li(i.firstChild),ai=!1,s=!0):s=!1),s||zs(e)),yd(e),s=e.type,r=e.pendingProps,a=t!==null?t.memoizedProps:null,i=r.children,tp(s,r)?i=null:a!==null&&tp(s,a)&&(e.flags|=32),e.memoizedState!==null&&(s=Up(t,e,dM,null,null,n),al._currentValue=s),Bc(t,e),rn(t,e,i,n),e.child;case 6:return t===null&&qe&&((t=n=St)&&(n=JM(n,e.pendingProps,ai),n!==null?(e.stateNode=n,on=e,St=null,t=!0):t=!1),t||zs(e)),null;case 13:return py(t,e,n);case 4:return zc(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Er(e,null,i,n):rn(t,e,i,n),e.child;case 11:return Yv(t,e,e.type,e.pendingProps,n);case 7:return rn(t,e,e.pendingProps,n),e.child;case 8:return rn(t,e,e.pendingProps.children,n),e.child;case 12:return rn(t,e,e.pendingProps.children,n),e.child;case 10:return i=e.pendingProps,_s(e,e.type,i.value),rn(t,e,i.children,n),e.child;case 9:return s=e.type._context,i=e.pendingProps.children,Mr(e),s=ln(s),i=i(s),e.flags|=1,rn(t,e,i,n),e.child;case 14:return qv(t,e,e.type,e.pendingProps,n);case 15:return hy(t,e,e.type,e.pendingProps,n);case 19:return my(t,e,n);case 31:return AM(t,e,n);case 22:return dy(t,e,n,e.pendingProps);case 24:return Mr(e),i=ln(Ht),t===null?(s=bp(),s===null&&(s=mt,r=Tp(),s.pooledCache=r,r.refCount++,r!==null&&(s.pooledCacheLanes|=n),s=r),e.memoizedState={parent:i,cache:s},Cp(e),_s(e,Ht,s)):((t.lanes&n)!==0&&(Pd(t,e),Vo(e,null,null,n),Go()),s=t.memoizedState,r=e.memoizedState,s.parent!==i?(s={parent:i,cache:i},e.memoizedState=s,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=s),_s(e,Ht,i)):(i=r.cache,_s(e,Ht,i),i!==s.cache&&Id(e,[Ht],n,!0))),rn(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(q(156,e.tag))}function Wi(t){t.flags|=4}function nd(t,e,n,i,s){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(s&335544128)===s)if(t.stateNode.complete)t.flags|=8192;else if(Hy())t.flags|=8192;else throw _r=qc,wp}else t.flags&=-16777217}function e0(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!c_(e))if(Hy())t.flags|=8192;else throw _r=qc,wp}function gc(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?G0():536870912,t.lanes|=e,La|=e)}function wo(t,e){if(!qe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function At(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function MM(t,e,n){var i=e.pendingProps;switch(Ep(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return At(e),null;case 1:return At(e),null;case 3:return n=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),es(Ht),Ca(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(ra(e)?Wi(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,qh())),At(e),null;case 26:var s=e.type,r=e.memoizedState;return t===null?(Wi(e),r!==null?(At(e),e0(e,r)):(At(e),nd(e,s,null,i,n))):r?r!==t.memoizedState?(Wi(e),At(e),e0(e,r)):(At(e),e.flags&=-16777217):(t=t.memoizedProps,t!==i&&Wi(e),At(e),nd(e,s,t,i,n)),null;case 27:if(Hc(e),n=Rs.current,s=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Wi(e);else{if(!i){if(e.stateNode===null)throw Error(q(166));return At(e),null}t=Ui.current,ra(e)?Rv(e,t):(t=a_(s,i,n),e.stateNode=t,Wi(e))}return At(e),null;case 5:if(Hc(e),s=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Wi(e);else{if(!i){if(e.stateNode===null)throw Error(q(166));return At(e),null}if(r=Ui.current,ra(e))Rv(e,r);else{var a=ou(Rs.current);switch(r){case 1:r=a.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:r=a.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":r=a.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":r=a.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":r=a.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof i.is=="string"?a.createElement("select",{is:i.is}):a.createElement("select"),i.multiple?r.multiple=!0:i.size&&(r.size=i.size);break;default:r=typeof i.is=="string"?a.createElement(s,{is:i.is}):a.createElement(s)}}r[an]=e,r[Dn]=i;e:for(a=e.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}e.stateNode=r;e:switch(cn(r,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Wi(e)}}return At(e),nd(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&Wi(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(q(166));if(t=Rs.current,ra(e)){if(t=e.stateNode,n=e.memoizedProps,i=null,s=on,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}t[an]=e,t=!!(t.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||n_(t.nodeValue,n)),t||zs(e,!0)}else t=ou(t).createTextNode(i),t[an]=e,e.stateNode=t}return At(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(i=ra(e),n!==null){if(t===null){if(!i)throw Error(q(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(q(557));t[an]=e}else Sr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;At(e),t=!1}else n=qh(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(Nn(e),e):(Nn(e),null);if((e.flags&128)!==0)throw Error(q(558))}return At(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(s=ra(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(q(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(q(317));s[an]=e}else Sr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;At(e),s=!1}else s=qh(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),s=!0;if(!s)return e.flags&256?(Nn(e),e):(Nn(e),null)}return Nn(e),(e.flags&128)!==0?(e.lanes=n,e):(n=i!==null,t=t!==null&&t.memoizedState!==null,n&&(i=e.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==s&&(i.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),gc(e,e.updateQueue),At(e),null);case 4:return Ca(),t===null&&Jp(e.stateNode.containerInfo),At(e),null;case 10:return es(e.type),At(e),null;case 19:if(nn(Pt),i=e.memoizedState,i===null)return At(e),null;if(s=(e.flags&128)!==0,r=i.rendering,r===null)if(s)wo(i,!1);else{if(Bt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(r=Zc(t),r!==null){for(e.flags|=128,wo(i,!1),t=r.updateQueue,e.updateQueue=t,gc(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)vx(n,t),n=n.sibling;return vt(Pt,Pt.current&1|2),qe&&Qi(e,i.treeForkCount),e.child}t=t.sibling}i.tail!==null&&zn()>tu&&(e.flags|=128,s=!0,wo(i,!1),e.lanes=4194304)}else{if(!s)if(t=Zc(r),t!==null){if(e.flags|=128,s=!0,t=t.updateQueue,e.updateQueue=t,gc(e,t),wo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!qe)return At(e),null}else 2*zn()-i.renderingStartTime>tu&&n!==536870912&&(e.flags|=128,s=!0,wo(i,!1),e.lanes=4194304);i.isBackwards?(r.sibling=e.child,e.child=r):(t=i.last,t!==null?t.sibling=r:e.child=r,i.last=r)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=zn(),t.sibling=null,n=Pt.current,vt(Pt,s?n&1|2:n&1),qe&&Qi(e,i.treeForkCount),t):(At(e),null);case 22:case 23:return Nn(e),Rp(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?(n&536870912)!==0&&(e.flags&128)===0&&(At(e),e.subtreeFlags&6&&(e.flags|=8192)):At(e),n=e.updateQueue,n!==null&&gc(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048),t!==null&&nn(yr),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),es(Ht),At(e),null;case 25:return null;case 30:return null}throw Error(q(156,e.tag))}function EM(t,e){switch(Ep(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return es(Ht),Ca(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Hc(e),null;case 31:if(e.memoizedState!==null){if(Nn(e),e.alternate===null)throw Error(q(340));Sr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Nn(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(q(340));Sr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return nn(Pt),null;case 4:return Ca(),null;case 10:return es(e.type),null;case 22:case 23:return Nn(e),Rp(),t!==null&&nn(yr),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return es(Ht),null;case 25:return null;default:return null}}function vy(t,e){switch(Ep(e),e.tag){case 3:es(Ht),Ca();break;case 26:case 27:case 5:Hc(e);break;case 4:Ca();break;case 31:e.memoizedState!==null&&Nn(e);break;case 13:Nn(e);break;case 19:nn(Pt);break;case 10:es(e.type);break;case 22:case 23:Nn(e),Rp(),t!==null&&nn(yr);break;case 24:es(Ht)}}function vl(t,e){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&t)===t){i=void 0;var r=n.create,a=n.inst;i=r(),a.destroy=i}n=n.next}while(n!==s)}}catch(o){lt(e,e.return,o)}}function Hs(t,e,n){try{var i=e.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var r=s.next;i=r;do{if((i.tag&t)===t){var a=i.inst,o=a.destroy;if(o!==void 0){a.destroy=void 0,s=e;var l=n,c=o;try{c()}catch(f){lt(s,l,f)}}}i=i.next}while(i!==r)}}catch(f){lt(e,e.return,f)}}function xy(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{wx(e,n)}catch(i){lt(t,t.return,i)}}}function yy(t,e,n){n.props=br(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(i){lt(t,e,i)}}function Wo(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof n=="function"?t.refCleanup=n(i):n.current=i}}catch(s){lt(t,e,s)}}function Di(t,e){var n=t.ref,i=t.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){lt(t,e,s)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){lt(t,e,s)}else n.current=null}function _y(t){var e=t.type,n=t.memoizedProps,i=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){lt(t,t.return,s)}}function id(t,e,n){try{var i=t.stateNode;WM(i,t.type,n,e),i[Dn]=e}catch(s){lt(t,t.return,s)}}function Ay(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ks(t.type)||t.tag===4}function sd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ay(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ks(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ji));else if(i!==4&&(i===27&&ks(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(Yd(t,e,n),t=t.sibling;t!==null;)Yd(t,e,n),t=t.sibling}function eu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(i===27&&ks(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(eu(t,e,n),t=t.sibling;t!==null;)eu(t,e,n),t=t.sibling}function Sy(t){var e=t.stateNode,n=t.memoizedProps;try{for(var i=t.type,s=e.attributes;s.length;)e.removeAttributeNode(s[0]);cn(e,i,n),e[an]=t,e[Dn]=n}catch(r){lt(t,t.return,r)}}var Zi=!1,zt=!1,rd=!1,t0=typeof WeakSet=="function"?WeakSet:Set,en=null;function TM(t,e){if(t=t.containerInfo,$d=fu,t=cx(t),yp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,f=0,d=t,h=null;t:for(;;){for(var p;d!==n||s!==0&&d.nodeType!==3||(o=a+s),d!==r||i!==0&&d.nodeType!==3||(l=a+i),d.nodeType===3&&(a+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++c===s&&(o=a),h===r&&++f===i&&(l=a),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ep={focusedElem:t,selectionRange:n},fu=!1,en=e;en!==null;)if(e=en,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,en=t;else for(;en!==null;){switch(e=en,r=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)s=t[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&r!==null){t=void 0,n=e,s=r.memoizedProps,r=r.memoizedState,i=n.stateNode;try{var x=br(n.type,s);t=i.getSnapshotBeforeUpdate(x,r),i.__reactInternalSnapshotBeforeUpdate=t}catch(_){lt(n,n.return,_)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)np(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":np(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(q(163))}if(t=e.sibling,t!==null){t.return=e.return,en=t;break}en=e.return}}function My(t,e,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Yi(t,n),i&4&&vl(5,n);break;case 1:if(Yi(t,n),i&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(a){lt(n,n.return,a)}else{var s=br(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(s,e,t.__reactInternalSnapshotBeforeUpdate)}catch(a){lt(n,n.return,a)}}i&64&&xy(n),i&512&&Wo(n,n.return);break;case 3:if(Yi(t,n),i&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{wx(t,e)}catch(a){lt(n,n.return,a)}}break;case 27:e===null&&i&4&&Sy(n);case 26:case 5:Yi(t,n),e===null&&i&4&&_y(n),i&512&&Wo(n,n.return);break;case 12:Yi(t,n);break;case 31:Yi(t,n),i&4&&by(t,n);break;case 13:Yi(t,n),i&4&&wy(t,n),i&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=LM.bind(null,n),jM(t,n))));break;case 22:if(i=n.memoizedState!==null||Zi,!i){e=e!==null&&e.memoizedState!==null||zt,s=Zi;var r=zt;Zi=i,(zt=e)&&!r?qi(t,n,(n.subtreeFlags&8772)!==0):Yi(t,n),Zi=s,zt=r}break;case 30:break;default:Yi(t,n)}}function Ey(t){var e=t.alternate;e!==null&&(t.alternate=null,Ey(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&dp(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var wt=null,wn=!1;function Xi(t,e,n){for(n=n.child;n!==null;)Ty(t,e,n),n=n.sibling}function Ty(t,e,n){if(Hn&&typeof Hn.onCommitFiberUnmount=="function")try{Hn.onCommitFiberUnmount(ul,n)}catch{}switch(n.tag){case 26:zt||Di(n,e),Xi(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:zt||Di(n,e);var i=wt,s=wn;ks(n.type)&&(wt=n.stateNode,wn=!1),Xi(t,e,n),Qo(n.stateNode),wt=i,wn=s;break;case 5:zt||Di(n,e);case 6:if(i=wt,s=wn,wt=null,Xi(t,e,n),wt=i,wn=s,wt!==null)if(wn)try{(wt.nodeType===9?wt.body:wt.nodeName==="HTML"?wt.ownerDocument.body:wt).removeChild(n.stateNode)}catch(r){lt(n,e,r)}else try{wt.removeChild(n.stateNode)}catch(r){lt(n,e,r)}break;case 18:wt!==null&&(wn?(t=wt,g0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Fa(t)):g0(wt,n.stateNode));break;case 4:i=wt,s=wn,wt=n.stateNode.containerInfo,wn=!0,Xi(t,e,n),wt=i,wn=s;break;case 0:case 11:case 14:case 15:Hs(2,n,e),zt||Hs(4,n,e),Xi(t,e,n);break;case 1:zt||(Di(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"&&yy(n,e,i)),Xi(t,e,n);break;case 21:Xi(t,e,n);break;case 22:zt=(i=zt)||n.memoizedState!==null,Xi(t,e,n),zt=i;break;default:Xi(t,e,n)}}function by(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Fa(t)}catch(n){lt(e,e.return,n)}}}function wy(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Fa(t)}catch(n){lt(e,e.return,n)}}function bM(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new t0),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new t0),e;default:throw Error(q(435,t.tag))}}function vc(t,e){var n=bM(t);e.forEach(function(i){if(!n.has(i)){n.add(i);var s=PM.bind(null,t,i);i.then(s,s)}})}function Tn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],r=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 27:if(ks(o.type)){wt=o.stateNode,wn=!1;break e}break;case 5:wt=o.stateNode,wn=!1;break e;case 3:case 4:wt=o.stateNode.containerInfo,wn=!0;break e}o=o.return}if(wt===null)throw Error(q(160));Ty(r,a,s),wt=null,wn=!1,r=s.alternate,r!==null&&(r.return=null),s.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Cy(e,t),e=e.sibling}var gi=null;function Cy(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Tn(e,t),bn(t),i&4&&(Hs(3,t,t.return),vl(3,t),Hs(5,t,t.return));break;case 1:Tn(e,t),bn(t),i&512&&(zt||n===null||Di(n,n.return)),i&64&&Zi&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=gi;if(Tn(e,t),bn(t),i&512&&(zt||n===null||Di(n,n.return)),i&4){var r=n!==null?n.memoizedState:null;if(i=t.memoizedState,n===null)if(i===null)if(t.stateNode===null){e:{i=t.type,n=t.memoizedProps,s=s.ownerDocument||s;t:switch(i){case"title":r=s.getElementsByTagName("title")[0],(!r||r[dl]||r[an]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=s.createElement(i),s.head.insertBefore(r,s.querySelector("head > title"))),cn(r,i,n),r[an]=t,tn(r),i=r;break e;case"link":var a=M0("link","href",s).get(i+(n.href||""));if(a){for(var o=0;o<a.length;o++)if(r=a[o],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(o,1);break t}}r=s.createElement(i),cn(r,i,n),s.head.appendChild(r);break;case"meta":if(a=M0("meta","content",s).get(i+(n.content||""))){for(o=0;o<a.length;o++)if(r=a[o],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(o,1);break t}}r=s.createElement(i),cn(r,i,n),s.head.appendChild(r);break;default:throw Error(q(468,i))}r[an]=t,tn(r),i=r}t.stateNode=i}else E0(s,t.type,t.stateNode);else t.stateNode=S0(s,i,t.memoizedProps);else r!==i?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,i===null?E0(s,t.type,t.stateNode):S0(s,i,t.memoizedProps)):i===null&&t.stateNode!==null&&id(t,t.memoizedProps,n.memoizedProps)}break;case 27:Tn(e,t),bn(t),i&512&&(zt||n===null||Di(n,n.return)),n!==null&&i&4&&id(t,t.memoizedProps,n.memoizedProps);break;case 5:if(Tn(e,t),bn(t),i&512&&(zt||n===null||Di(n,n.return)),t.flags&32){s=t.stateNode;try{Da(s,"")}catch(x){lt(t,t.return,x)}}i&4&&t.stateNode!=null&&(s=t.memoizedProps,id(t,s,n!==null?n.memoizedProps:s)),i&1024&&(rd=!0);break;case 6:if(Tn(e,t),bn(t),i&4){if(t.stateNode===null)throw Error(q(162));i=t.memoizedProps,n=t.stateNode;try{n.nodeValue=i}catch(x){lt(t,t.return,x)}}break;case 3:if(Pc=null,s=gi,gi=lu(e.containerInfo),Tn(e,t),gi=s,bn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Fa(e.containerInfo)}catch(x){lt(t,t.return,x)}rd&&(rd=!1,Ry(t));break;case 4:i=gi,gi=lu(t.stateNode.containerInfo),Tn(e,t),bn(t),gi=i;break;case 12:Tn(e,t),bn(t);break;case 31:Tn(e,t),bn(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,vc(t,i)));break;case 13:Tn(e,t),bn(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Eu=zn()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,vc(t,i)));break;case 22:s=t.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=Zi,f=zt;if(Zi=c||s,zt=f||l,Tn(e,t),zt=f,Zi=c,bn(t),i&8192)e:for(e=t.stateNode,e._visibility=s?e._visibility&-2:e._visibility|1,s&&(n===null||l||Zi||zt||gr(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){l=n=e;try{if(r=l.stateNode,s)a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none";else{o=l.stateNode;var d=l.memoizedProps.style,h=d!=null&&d.hasOwnProperty("display")?d.display:null;o.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(x){lt(l,l.return,x)}}}else if(e.tag===6){if(n===null){l=e;try{l.stateNode.nodeValue=s?"":l.memoizedProps}catch(x){lt(l,l.return,x)}}}else if(e.tag===18){if(n===null){l=e;try{var p=l.stateNode;s?v0(p,!0):v0(l.stateNode,!1)}catch(x){lt(l,l.return,x)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,vc(t,n))));break;case 19:Tn(e,t),bn(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,vc(t,i)));break;case 30:break;case 21:break;default:Tn(e,t),bn(t)}}function bn(t){var e=t.flags;if(e&2){try{for(var n,i=t.return;i!==null;){if(Ay(i)){n=i;break}i=i.return}if(n==null)throw Error(q(160));switch(n.tag){case 27:var s=n.stateNode,r=sd(t);eu(t,r,s);break;case 5:var a=n.stateNode;n.flags&32&&(Da(a,""),n.flags&=-33);var o=sd(t);eu(t,o,a);break;case 3:case 4:var l=n.stateNode.containerInfo,c=sd(t);Yd(t,c,l);break;default:throw Error(q(161))}}catch(f){lt(t,t.return,f)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ry(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Ry(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Yi(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)My(t,e.alternate,e),e=e.sibling}function gr(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Hs(4,e,e.return),gr(e);break;case 1:Di(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&yy(e,e.return,n),gr(e);break;case 27:Qo(e.stateNode);case 26:case 5:Di(e,e.return),gr(e);break;case 22:e.memoizedState===null&&gr(e);break;case 30:gr(e);break;default:gr(e)}t=t.sibling}}function qi(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,s=t,r=e,a=r.flags;switch(r.tag){case 0:case 11:case 15:qi(s,r,n),vl(4,r);break;case 1:if(qi(s,r,n),i=r,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(c){lt(i,i.return,c)}if(i=r,s=i.updateQueue,s!==null){var o=i.stateNode;try{var l=s.shared.hiddenCallbacks;if(l!==null)for(s.shared.hiddenCallbacks=null,s=0;s<l.length;s++)bx(l[s],o)}catch(c){lt(i,i.return,c)}}n&&a&64&&xy(r),Wo(r,r.return);break;case 27:Sy(r);case 26:case 5:qi(s,r,n),n&&i===null&&a&4&&_y(r),Wo(r,r.return);break;case 12:qi(s,r,n);break;case 31:qi(s,r,n),n&&a&4&&by(s,r);break;case 13:qi(s,r,n),n&&a&4&&wy(s,r);break;case 22:r.memoizedState===null&&qi(s,r,n),Wo(r,r.return);break;case 30:break;default:qi(s,r,n)}e=e.sibling}}function Xp(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&ml(n))}function Yp(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ml(t))}function mi(t,e,n,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Dy(t,e,n,i),e=e.sibling}function Dy(t,e,n,i){var s=e.flags;switch(e.tag){case 0:case 11:case 15:mi(t,e,n,i),s&2048&&vl(9,e);break;case 1:mi(t,e,n,i);break;case 3:mi(t,e,n,i),s&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ml(t)));break;case 12:if(s&2048){mi(t,e,n,i),t=e.stateNode;try{var r=e.memoizedProps,a=r.id,o=r.onPostCommit;typeof o=="function"&&o(a,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(l){lt(e,e.return,l)}}else mi(t,e,n,i);break;case 31:mi(t,e,n,i);break;case 13:mi(t,e,n,i);break;case 23:break;case 22:r=e.stateNode,a=e.alternate,e.memoizedState!==null?r._visibility&2?mi(t,e,n,i):Xo(t,e):r._visibility&2?mi(t,e,n,i):(r._visibility|=2,oa(t,e,n,i,(e.subtreeFlags&10256)!==0||!1)),s&2048&&Xp(a,e);break;case 24:mi(t,e,n,i),s&2048&&Yp(e.alternate,e);break;default:mi(t,e,n,i)}}function oa(t,e,n,i,s){for(s=s&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var r=t,a=e,o=n,l=i,c=a.flags;switch(a.tag){case 0:case 11:case 15:oa(r,a,o,l,s),vl(8,a);break;case 23:break;case 22:var f=a.stateNode;a.memoizedState!==null?f._visibility&2?oa(r,a,o,l,s):Xo(r,a):(f._visibility|=2,oa(r,a,o,l,s)),s&&c&2048&&Xp(a.alternate,a);break;case 24:oa(r,a,o,l,s),s&&c&2048&&Yp(a.alternate,a);break;default:oa(r,a,o,l,s)}e=e.sibling}}function Xo(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,i=e,s=i.flags;switch(i.tag){case 22:Xo(n,i),s&2048&&Xp(i.alternate,i);break;case 24:Xo(n,i),s&2048&&Yp(i.alternate,i);break;default:Xo(n,i)}e=e.sibling}}var Po=8192;function aa(t,e,n){if(t.subtreeFlags&Po)for(t=t.child;t!==null;)Uy(t,e,n),t=t.sibling}function Uy(t,e,n){switch(t.tag){case 26:aa(t,e,n),t.flags&Po&&t.memoizedState!==null&&uE(n,gi,t.memoizedState,t.memoizedProps);break;case 5:aa(t,e,n);break;case 3:case 4:var i=gi;gi=lu(t.stateNode.containerInfo),aa(t,e,n),gi=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=Po,Po=16777216,aa(t,e,n),Po=i):aa(t,e,n));break;default:aa(t,e,n)}}function By(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Co(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];en=i,Ly(i,t)}By(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Iy(t),t=t.sibling}function Iy(t){switch(t.tag){case 0:case 11:case 15:Co(t),t.flags&2048&&Hs(9,t,t.return);break;case 3:Co(t);break;case 12:Co(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Ic(t)):Co(t);break;default:Co(t)}}function Ic(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];en=i,Ly(i,t)}By(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Hs(8,e,e.return),Ic(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,Ic(e));break;default:Ic(e)}t=t.sibling}}function Ly(t,e){for(;en!==null;){var n=en;switch(n.tag){case 0:case 11:case 15:Hs(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:ml(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,en=i;else e:for(n=t;en!==null;){i=en;var s=i.sibling,r=i.return;if(Ey(i),i===n){en=null;break e}if(s!==null){s.return=r,en=s;break e}en=r}}}var wM={getCacheForType:function(t){var e=ln(Ht),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return ln(Ht).controller.signal}},CM=typeof WeakMap=="function"?WeakMap:Map,nt=0,mt=null,We=null,Ye=0,ot=0,Pn=null,bs=!1,ka=!1,qp=!1,as=0,Bt=0,Gs=0,Ar=0,Qp=0,Fn=0,La=0,Yo=null,Cn=null,qd=!1,Eu=0,Py=0,tu=1/0,nu=null,Is=null,Xt=0,Ls=null,Pa=null,ts=0,Qd=0,Zd=null,Ny=null,qo=0,Kd=null;function Vn(){return(nt&2)!==0&&Ye!==0?Ye&-Ye:De.T!==null?Kp():X0()}function Oy(){if(Fn===0)if((Ye&536870912)===0||qe){var t=oc;oc<<=1,(oc&3932160)===0&&(oc=262144),Fn=t}else Fn=536870912;return t=Wn.current,t!==null&&(t.flags|=32),Fn}function Rn(t,e,n){(t===mt&&(ot===2||ot===9)||t.cancelPendingCommit!==null)&&(Na(t,0),ws(t,Ye,Fn,!1)),hl(t,n),((nt&2)===0||t!==mt)&&(t===mt&&((nt&2)===0&&(Ar|=n),Bt===4&&ws(t,Ye,Fn,!1)),Ii(t))}function Fy(t,e,n){if((nt&6)!==0)throw Error(q(327));var i=!n&&(e&127)===0&&(e&t.expiredLanes)===0||fl(t,e),s=i?UM(t,e):ad(t,e,!0),r=i;do{if(s===0){ka&&!i&&ws(t,e,0,!1);break}else{if(n=t.current.alternate,r&&!RM(n)){s=ad(t,e,!1),r=!1;continue}if(s===2){if(r=e,t.errorRecoveryDisabledLanes&r)var a=0;else a=t.pendingLanes&-536870913,a=a!==0?a:a&536870912?536870912:0;if(a!==0){e=a;e:{var o=t;s=Yo;var l=o.current.memoizedState.isDehydrated;if(l&&(Na(o,a).flags|=256),a=ad(o,a,!1),a!==2){if(qp&&!l){o.errorRecoveryDisabledLanes|=r,Ar|=r,s=4;break e}r=Cn,Cn=s,r!==null&&(Cn===null?Cn=r:Cn.push.apply(Cn,r))}s=a}if(r=!1,s!==2)continue}}if(s===1){Na(t,0),ws(t,e,0,!0);break}e:{switch(i=t,r=s,r){case 0:case 1:throw Error(q(345));case 4:if((e&4194048)!==e)break;case 6:ws(i,e,Fn,!bs);break e;case 2:Cn=null;break;case 3:case 5:break;default:throw Error(q(329))}if((e&62914560)===e&&(s=Eu+300-zn(),10<s)){if(ws(i,e,Fn,!bs),du(i,0,!0)!==0)break e;ts=e,i.timeoutHandle=s_(n0.bind(null,i,n,Cn,nu,qd,e,Fn,Ar,La,bs,r,"Throttled",-0,0),s);break e}n0(i,n,Cn,nu,qd,e,Fn,Ar,La,bs,r,null,-0,0)}}break}while(!0);Ii(t)}function n0(t,e,n,i,s,r,a,o,l,c,f,d,h,p){if(t.timeoutHandle=-1,d=e.subtreeFlags,d&8192||(d&16785408)===16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ji},Uy(e,r,d);var x=(r&62914560)===r?Eu-zn():(r&4194048)===r?Py-zn():0;if(x=fE(d,x),x!==null){ts=r,t.cancelPendingCommit=x(s0.bind(null,t,e,r,n,i,s,a,o,l,f,d,null,h,p)),ws(t,r,a,!c);return}}s0(t,e,r,n,i,s,a,o,l)}function RM(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],r=s.getSnapshot;s=s.value;try{if(!kn(r(),s))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ws(t,e,n,i){e&=~Qp,e&=~Ar,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var s=e;0<s;){var r=31-Gn(s),a=1<<r;i[r]=-1,s&=~a}n!==0&&V0(t,n,e)}function Tu(){return(nt&6)===0?(xl(0,!1),!1):!0}function Zp(){if(We!==null){if(ot===0)var t=We.return;else t=We,ji=Ur=null,Lp(t),Ta=null,tl=0,t=We;for(;t!==null;)vy(t.alternate,t),t=t.return;We=null}}function Na(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,qM(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),ts=0,Zp(),mt=t,We=n=$i(t.current,null),Ye=e,ot=0,Pn=null,bs=!1,ka=fl(t,e),qp=!1,La=Fn=Qp=Ar=Gs=Bt=0,Cn=Yo=null,qd=!1,(e&8)!==0&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var s=31-Gn(i),r=1<<s;e|=t[s],i&=~r}return as=e,vu(),n}function zy(t,e){Ne=null,De.H=il,e===Va||e===yu?(e=Lv(),ot=3):e===wp?(e=Lv(),ot=4):ot=e===kp?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Pn=e,We===null&&(Bt=1,jc(t,ri(e,t.current)))}function Hy(){var t=Wn.current;return t===null?!0:(Ye&4194048)===Ye?oi===null:(Ye&62914560)===Ye||(Ye&536870912)!==0?t===oi:!1}function Gy(){var t=De.H;return De.H=il,t===null?il:t}function Vy(){var t=De.A;return De.A=wM,t}function iu(){Bt=4,bs||(Ye&4194048)!==Ye&&Wn.current!==null||(ka=!0),(Gs&134217727)===0&&(Ar&134217727)===0||mt===null||ws(mt,Ye,Fn,!1)}function ad(t,e,n){var i=nt;nt|=2;var s=Gy(),r=Vy();(mt!==t||Ye!==e)&&(nu=null,Na(t,e)),e=!1;var a=Bt;e:do try{if(ot!==0&&We!==null){var o=We,l=Pn;switch(ot){case 8:Zp(),a=6;break e;case 3:case 2:case 9:case 6:Wn.current===null&&(e=!0);var c=ot;if(ot=0,Pn=null,_a(t,o,l,c),n&&ka){a=0;break e}break;default:c=ot,ot=0,Pn=null,_a(t,o,l,c)}}DM(),a=Bt;break}catch(f){zy(t,f)}while(!0);return e&&t.shellSuspendCounter++,ji=Ur=null,nt=i,De.H=s,De.A=r,We===null&&(mt=null,Ye=0,vu()),a}function DM(){for(;We!==null;)ky(We)}function UM(t,e){var n=nt;nt|=2;var i=Gy(),s=Vy();mt!==t||Ye!==e?(nu=null,tu=zn()+500,Na(t,e)):ka=fl(t,e);e:do try{if(ot!==0&&We!==null){e=We;var r=Pn;t:switch(ot){case 1:ot=0,Pn=null,_a(t,e,r,1);break;case 2:case 9:if(Iv(r)){ot=0,Pn=null,i0(e);break}e=function(){ot!==2&&ot!==9||mt!==t||(ot=7),Ii(t)},r.then(e,e);break e;case 3:ot=7;break e;case 4:ot=5;break e;case 7:Iv(r)?(ot=0,Pn=null,i0(e)):(ot=0,Pn=null,_a(t,e,r,7));break;case 5:var a=null;switch(We.tag){case 26:a=We.memoizedState;case 5:case 27:var o=We;if(a?c_(a):o.stateNode.complete){ot=0,Pn=null;var l=o.sibling;if(l!==null)We=l;else{var c=o.return;c!==null?(We=c,bu(c)):We=null}break t}}ot=0,Pn=null,_a(t,e,r,5);break;case 6:ot=0,Pn=null,_a(t,e,r,6);break;case 8:Zp(),Bt=6;break e;default:throw Error(q(462))}}BM();break}catch(f){zy(t,f)}while(!0);return ji=Ur=null,De.H=i,De.A=s,nt=n,We!==null?0:(mt=null,Ye=0,vu(),Bt)}function BM(){for(;We!==null&&!t1();)ky(We)}function ky(t){var e=gy(t.alternate,t,as);t.memoizedProps=t.pendingProps,e===null?bu(t):We=e}function i0(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=Kv(n,e,e.pendingProps,e.type,void 0,Ye);break;case 11:e=Kv(n,e,e.pendingProps,e.type.render,e.ref,Ye);break;case 5:Lp(e);default:vy(n,e),e=We=vx(e,as),e=gy(n,e,as)}t.memoizedProps=t.pendingProps,e===null?bu(t):We=e}function _a(t,e,n,i){ji=Ur=null,Lp(e),Ta=null,tl=0;var s=e.return;try{if(_M(t,s,e,n,Ye)){Bt=1,jc(t,ri(n,t.current)),We=null;return}}catch(r){if(s!==null)throw We=s,r;Bt=1,jc(t,ri(n,t.current)),We=null;return}e.flags&32768?(qe||i===1?t=!0:ka||(Ye&536870912)!==0?t=!1:(bs=t=!0,(i===2||i===9||i===3||i===6)&&(i=Wn.current,i!==null&&i.tag===13&&(i.flags|=16384))),Wy(e,t)):bu(e)}function bu(t){var e=t;do{if((e.flags&32768)!==0){Wy(e,bs);return}t=e.return;var n=MM(e.alternate,e,as);if(n!==null){We=n;return}if(e=e.sibling,e!==null){We=e;return}We=e=t}while(e!==null);Bt===0&&(Bt=5)}function Wy(t,e){do{var n=EM(t.alternate,t);if(n!==null){n.flags&=32767,We=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){We=t;return}We=t=n}while(t!==null);Bt=6,We=null}function s0(t,e,n,i,s,r,a,o,l){t.cancelPendingCommit=null;do wu();while(Xt!==0);if((nt&6)!==0)throw Error(q(327));if(e!==null){if(e===t.current)throw Error(q(177));if(r=e.lanes|e.childLanes,r|=_p,f1(t,n,r,a,o,l),t===mt&&(We=mt=null,Ye=0),Pa=e,Ls=t,ts=n,Qd=r,Zd=s,Ny=i,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,NM(Gc,function(){return Zy(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||i){i=De.T,De.T=null,s=it.p,it.p=2,a=nt,nt|=4;try{TM(t,e,n)}finally{nt=a,it.p=s,De.T=i}}Xt=1,Xy(),Yy(),qy()}}function Xy(){if(Xt===1){Xt=0;var t=Ls,e=Pa,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=De.T,De.T=null;var i=it.p;it.p=2;var s=nt;nt|=4;try{Cy(e,t);var r=ep,a=cx(t.containerInfo),o=r.focusedElem,l=r.selectionRange;if(a!==o&&o&&o.ownerDocument&&lx(o.ownerDocument.documentElement,o)){if(l!==null&&yp(o)){var c=l.start,f=l.end;if(f===void 0&&(f=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(f,o.value.length);else{var d=o.ownerDocument||document,h=d&&d.defaultView||window;if(h.getSelection){var p=h.getSelection(),x=o.textContent.length,_=Math.min(l.start,x),m=l.end===void 0?_:Math.min(l.end,x);!p.extend&&_>m&&(a=m,m=_,_=a);var u=bv(o,_),g=bv(o,m);if(u&&g&&(p.rangeCount!==1||p.anchorNode!==u.node||p.anchorOffset!==u.offset||p.focusNode!==g.node||p.focusOffset!==g.offset)){var v=d.createRange();v.setStart(u.node,u.offset),p.removeAllRanges(),_>m?(p.addRange(v),p.extend(g.node,g.offset)):(v.setEnd(g.node,g.offset),p.addRange(v))}}}}for(d=[],p=o;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var y=d[o];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}fu=!!$d,ep=$d=null}finally{nt=s,it.p=i,De.T=n}}t.current=e,Xt=2}}function Yy(){if(Xt===2){Xt=0;var t=Ls,e=Pa,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=De.T,De.T=null;var i=it.p;it.p=2;var s=nt;nt|=4;try{My(t,e.alternate,e)}finally{nt=s,it.p=i,De.T=n}}Xt=3}}function qy(){if(Xt===4||Xt===3){Xt=0,n1();var t=Ls,e=Pa,n=ts,i=Ny;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Xt=5:(Xt=0,Pa=Ls=null,Qy(t,t.pendingLanes));var s=t.pendingLanes;if(s===0&&(Is=null),hp(n),e=e.stateNode,Hn&&typeof Hn.onCommitFiberRoot=="function")try{Hn.onCommitFiberRoot(ul,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=De.T,s=it.p,it.p=2,De.T=null;try{for(var r=t.onRecoverableError,a=0;a<i.length;a++){var o=i[a];r(o.value,{componentStack:o.stack})}}finally{De.T=e,it.p=s}}(ts&3)!==0&&wu(),Ii(t),s=t.pendingLanes,(n&261930)!==0&&(s&42)!==0?t===Kd?qo++:(qo=0,Kd=t):qo=0,xl(0,!1)}}function Qy(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,ml(e)))}function wu(){return Xy(),Yy(),qy(),Zy()}function Zy(){if(Xt!==5)return!1;var t=Ls,e=Qd;Qd=0;var n=hp(ts),i=De.T,s=it.p;try{it.p=32>n?32:n,De.T=null,n=Zd,Zd=null;var r=Ls,a=ts;if(Xt=0,Pa=Ls=null,ts=0,(nt&6)!==0)throw Error(q(331));var o=nt;if(nt|=4,Iy(r.current),Dy(r,r.current,a,n),nt=o,xl(0,!1),Hn&&typeof Hn.onPostCommitFiberRoot=="function")try{Hn.onPostCommitFiberRoot(ul,r)}catch{}return!0}finally{it.p=s,De.T=i,Qy(t,e)}}function r0(t,e,n){e=ri(n,e),e=kd(t.stateNode,e,2),t=Bs(t,e,2),t!==null&&(hl(t,2),Ii(t))}function lt(t,e,n){if(t.tag===3)r0(t,t,n);else for(;e!==null;){if(e.tag===3){r0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Is===null||!Is.has(i))){t=ri(n,t),n=uy(2),i=Bs(e,n,2),i!==null&&(fy(n,i,e,t),hl(i,2),Ii(i));break}}e=e.return}}function od(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new CM;var s=new Set;i.set(e,s)}else s=i.get(e),s===void 0&&(s=new Set,i.set(e,s));s.has(n)||(qp=!0,s.add(n),t=IM.bind(null,t,e,n),e.then(t,t))}function IM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,mt===t&&(Ye&n)===n&&(Bt===4||Bt===3&&(Ye&62914560)===Ye&&300>zn()-Eu?(nt&2)===0&&Na(t,0):Qp|=n,La===Ye&&(La=0)),Ii(t)}function Ky(t,e){e===0&&(e=G0()),t=Dr(t,e),t!==null&&(hl(t,e),Ii(t))}function LM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ky(t,n)}function PM(t,e){var n=0;switch(t.tag){case 31:case 13:var i=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(q(314))}i!==null&&i.delete(e),Ky(t,n)}function NM(t,e){return up(t,e)}var su=null,la=null,Jd=!1,ru=!1,ld=!1,Cs=0;function Ii(t){t!==la&&t.next===null&&(la===null?su=la=t:la=la.next=t),ru=!0,Jd||(Jd=!0,FM())}function xl(t,e){if(!ld&&ru){ld=!0;do for(var n=!1,i=su;i!==null;){if(!e)if(t!==0){var s=i.pendingLanes;if(s===0)var r=0;else{var a=i.suspendedLanes,o=i.pingedLanes;r=(1<<31-Gn(42|t)+1)-1,r&=s&~(a&~o),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,a0(i,r))}else r=Ye,r=du(i,i===mt?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(r&3)===0||fl(i,r)||(n=!0,a0(i,r));i=i.next}while(n);ld=!1}}function OM(){Jy()}function Jy(){ru=Jd=!1;var t=0;Cs!==0&&YM()&&(t=Cs);for(var e=zn(),n=null,i=su;i!==null;){var s=i.next,r=jy(i,e);r===0?(i.next=null,n===null?su=s:n.next=s,s===null&&(la=n)):(n=i,(t!==0||(r&3)!==0)&&(ru=!0)),i=s}Xt!==0&&Xt!==5||xl(t,!1),Cs!==0&&(Cs=0)}function jy(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,s=t.expirationTimes,r=t.pendingLanes&-62914561;0<r;){var a=31-Gn(r),o=1<<a,l=s[a];l===-1?((o&n)===0||(o&i)!==0)&&(s[a]=u1(o,e)):l<=e&&(t.expiredLanes|=o),r&=~o}if(e=mt,n=Ye,n=du(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,n===0||t===e&&(ot===2||ot===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&Oh(i),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||fl(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(i!==null&&Oh(i),hp(n)){case 2:case 8:n=z0;break;case 32:n=Gc;break;case 268435456:n=H0;break;default:n=Gc}return i=$y.bind(null,t),n=up(n,i),t.callbackPriority=e,t.callbackNode=n,e}return i!==null&&i!==null&&Oh(i),t.callbackPriority=2,t.callbackNode=null,2}function $y(t,e){if(Xt!==0&&Xt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(wu()&&t.callbackNode!==n)return null;var i=Ye;return i=du(t,t===mt?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(Fy(t,i,e),jy(t,zn()),t.callbackNode!=null&&t.callbackNode===n?$y.bind(null,t):null)}function a0(t,e){if(wu())return null;Fy(t,e,!0)}function FM(){QM(function(){(nt&6)!==0?up(F0,OM):Jy()})}function Kp(){if(Cs===0){var t=Ua;t===0&&(t=ac,ac<<=1,(ac&261888)===0&&(ac=256)),Cs=t}return Cs}function o0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ec(""+t)}function l0(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function zM(t,e,n,i,s){if(e==="submit"&&n&&n.stateNode===s){var r=o0((s[Dn]||null).action),a=i.submitter;a&&(e=(e=a[Dn]||null)?o0(e.formAction):a.getAttribute("formAction"),e!==null&&(r=e,a=null));var o=new pu("action","action",null,i,s);t.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Cs!==0){var l=a?l0(s,a):new FormData(s);Gd(n,{pending:!0,data:l,method:s.method,action:r},null,l)}}else typeof r=="function"&&(o.preventDefault(),l=a?l0(s,a):new FormData(s),Gd(n,{pending:!0,data:l,method:s.method,action:r},r,l))},currentTarget:s}]})}}for(xc=0;xc<Rd.length;xc++)yc=Rd[xc],c0=yc.toLowerCase(),u0=yc[0].toUpperCase()+yc.slice(1),vi(c0,"on"+u0);var yc,c0,u0,xc;vi(fx,"onAnimationEnd");vi(hx,"onAnimationIteration");vi(dx,"onAnimationStart");vi("dblclick","onDoubleClick");vi("focusin","onFocus");vi("focusout","onBlur");vi(iM,"onTransitionRun");vi(sM,"onTransitionStart");vi(rM,"onTransitionCancel");vi(px,"onTransitionEnd");Ra("onMouseEnter",["mouseout","mouseover"]);Ra("onMouseLeave",["mouseout","mouseover"]);Ra("onPointerEnter",["pointerout","pointerover"]);Ra("onPointerLeave",["pointerout","pointerover"]);wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wr("onBeforeInput",["compositionend","keypress","textInput","paste"]);wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),HM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(sl));function e_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],s=i.event;i=i.listeners;e:{var r=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==r&&s.isPropagationStopped())break e;r=o,s.currentTarget=c;try{r(s)}catch(f){kc(f)}s.currentTarget=null,r=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==r&&s.isPropagationStopped())break e;r=o,s.currentTarget=c;try{r(s)}catch(f){kc(f)}s.currentTarget=null,r=l}}}}function ke(t,e){var n=e[Ad];n===void 0&&(n=e[Ad]=new Set);var i=t+"__bubble";n.has(i)||(t_(e,t,2,!1),n.add(i))}function cd(t,e,n){var i=0;e&&(i|=4),t_(n,t,i,e)}var _c="_reactListening"+Math.random().toString(36).slice(2);function Jp(t){if(!t[_c]){t[_c]=!0,Y0.forEach(function(n){n!=="selectionchange"&&(HM.has(n)||cd(n,!1,t),cd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[_c]||(e[_c]=!0,cd("selectionchange",!1,e))}}function t_(t,e,n,i){switch(p_(e)){case 2:var s=pE;break;case 8:s=mE;break;default:s=tm}n=s.bind(null,e,n,t),s=void 0,!bd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),i?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function ud(t,e,n,i,s){var r=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===s)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&a.stateNode.containerInfo===s)return;a=a.return}for(;o!==null;){if(a=fa(o),a===null)return;if(l=a.tag,l===5||l===6||l===26||l===27){i=r=a;continue e}o=o.parentNode}}i=i.return}ex(function(){var c=r,f=mp(n),d=[];e:{var h=mx.get(t);if(h!==void 0){var p=pu,x=t;switch(t){case"keypress":if(bc(n)===0)break e;case"keydown":case"keyup":p=P1;break;case"focusin":x="focus",p=Vh;break;case"focusout":x="blur",p=Vh;break;case"beforeblur":case"afterblur":p=Vh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=vv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=M1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=F1;break;case fx:case hx:case dx:p=b1;break;case px:p=H1;break;case"scroll":case"scrollend":p=A1;break;case"wheel":p=V1;break;case"copy":case"cut":case"paste":p=C1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=yv;break;case"toggle":case"beforetoggle":p=W1}var _=(e&4)!==0,m=!_&&(t==="scroll"||t==="scrollend"),u=_?h!==null?h+"Capture":null:h;_=[];for(var g=c,v;g!==null;){var y=g;if(v=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||v===null||u===null||(y=Ko(g,u),y!=null&&_.push(rl(g,y,v))),m)break;g=g.return}0<_.length&&(h=new p(h,x,null,n,f),d.push({event:h,listeners:_}))}}if((e&7)===0){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Td&&(x=n.relatedTarget||n.fromElement)&&(fa(x)||x[za]))break e;if((p||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=c,x=x?fa(x):null,x!==null&&(m=cl(x),_=x.tag,x!==m||_!==5&&_!==27&&_!==6)&&(x=null)):(p=null,x=c),p!==x)){if(_=vv,y="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(_=yv,y="onPointerLeave",u="onPointerEnter",g="pointer"),m=p==null?h:Io(p),v=x==null?h:Io(x),h=new _(y,g+"leave",p,n,f),h.target=m,h.relatedTarget=v,y=null,fa(f)===c&&(_=new _(u,g+"enter",x,n,f),_.target=v,_.relatedTarget=m,y=_),m=y,p&&x)t:{for(_=GM,u=p,g=x,v=0,y=u;y;y=_(y))v++;y=0;for(var b=g;b;b=_(b))y++;for(;0<v-y;)u=_(u),v--;for(;0<y-v;)g=_(g),y--;for(;v--;){if(u===g||g!==null&&u===g.alternate){_=u;break t}u=_(u),g=_(g)}_=null}else _=null;p!==null&&f0(d,h,p,_,!1),x!==null&&m!==null&&f0(d,m,x,_,!0)}}e:{if(h=c?Io(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var C=Mv;else if(Sv(h))if(ax)C=eM;else{C=j1;var w=J1}else p=h.nodeName,!p||p.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?c&&pp(c.elementType)&&(C=Mv):C=$1;if(C&&(C=C(t,c))){rx(d,C,n,f);break e}w&&w(t,h,c),t==="focusout"&&c&&h.type==="number"&&c.memoizedProps.value!=null&&Ed(h,"number",h.value)}switch(w=c?Io(c):window,t){case"focusin":(Sv(w)||w.contentEditable==="true")&&(pa=w,wd=c,Fo=null);break;case"focusout":Fo=wd=pa=null;break;case"mousedown":Cd=!0;break;case"contextmenu":case"mouseup":case"dragend":Cd=!1,wv(d,n,f);break;case"selectionchange":if(nM)break;case"keydown":case"keyup":wv(d,n,f)}var U;if(xp)e:{switch(t){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else da?ix(t,n)&&(M="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(nx&&n.locale!=="ko"&&(da||M!=="onCompositionStart"?M==="onCompositionEnd"&&da&&(U=tx()):(Ts=f,gp="value"in Ts?Ts.value:Ts.textContent,da=!0)),w=au(c,M),0<w.length&&(M=new xv(M,t,null,n,f),d.push({event:M,listeners:w}),U?M.data=U:(U=sx(n),U!==null&&(M.data=U)))),(U=Y1?q1(t,n):Q1(t,n))&&(M=au(c,"onBeforeInput"),0<M.length&&(w=new xv("onBeforeInput","beforeinput",null,n,f),d.push({event:w,listeners:M}),w.data=U)),zM(d,t,c,n,f)}e_(d,e)})}function rl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function au(t,e){for(var n=e+"Capture",i=[];t!==null;){var s=t,r=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||r===null||(s=Ko(t,n),s!=null&&i.unshift(rl(t,s,r)),s=Ko(t,e),s!=null&&i.push(rl(t,s,r))),t.tag===3)return i;t=t.return}return[]}function GM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function f0(t,e,n,i,s){for(var r=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=Ko(n,r),c!=null&&a.unshift(rl(n,c,l))):s||(c=Ko(n,r),c!=null&&a.push(rl(n,c,l)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var VM=/\r\n?/g,kM=/\u0000|\uFFFD/g;function h0(t){return(typeof t=="string"?t:""+t).replace(VM,`
`).replace(kM,"")}function n_(t,e){return e=h0(e),h0(t)===e}function ft(t,e,n,i,s,r){switch(n){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||Da(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&Da(t,""+i);break;case"className":cc(t,"class",i);break;case"tabIndex":cc(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":cc(t,n,i);break;case"style":$0(t,i,r);break;case"data":if(e!=="object"){cc(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Ec(""+i),t.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(e!=="input"&&ft(t,e,"name",s.name,s,null),ft(t,e,"formEncType",s.formEncType,s,null),ft(t,e,"formMethod",s.formMethod,s,null),ft(t,e,"formTarget",s.formTarget,s,null)):(ft(t,e,"encType",s.encType,s,null),ft(t,e,"method",s.method,s,null),ft(t,e,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Ec(""+i),t.setAttribute(n,i);break;case"onClick":i!=null&&(t.onclick=Ji);break;case"onScroll":i!=null&&ke("scroll",t);break;case"onScrollEnd":i!=null&&ke("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(q(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(q(60));t.innerHTML=n}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}n=Ec(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""+i):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":i===!0?t.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(n,i):t.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(n):t.setAttribute(n,i);break;case"popover":ke("beforetoggle",t),ke("toggle",t),Mc(t,"popover",i);break;case"xlinkActuate":ki(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":ki(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":ki(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":ki(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":ki(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":ki(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":ki(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":ki(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":ki(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Mc(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=y1.get(n)||n,Mc(t,n,i))}}function jd(t,e,n,i,s,r){switch(n){case"style":$0(t,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(q(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(q(60));t.innerHTML=n}}break;case"children":typeof i=="string"?Da(t,i):(typeof i=="number"||typeof i=="bigint")&&Da(t,""+i);break;case"onScroll":i!=null&&ke("scroll",t);break;case"onScrollEnd":i!=null&&ke("scrollend",t);break;case"onClick":i!=null&&(t.onclick=Ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!q0.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),e=n.slice(2,s?n.length-7:void 0),r=t[Dn]||null,r=r!=null?r[n]:null,typeof r=="function"&&t.removeEventListener(e,r,s),typeof i=="function")){typeof r!="function"&&r!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,i,s);break e}n in t?t[n]=i:i===!0?t.setAttribute(n,""):Mc(t,n,i)}}}function cn(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ke("error",t),ke("load",t);var i=!1,s=!1,r;for(r in n)if(n.hasOwnProperty(r)){var a=n[r];if(a!=null)switch(r){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(q(137,e));default:ft(t,e,r,a,n,null)}}s&&ft(t,e,"srcSet",n.srcSet,n,null),i&&ft(t,e,"src",n.src,n,null);return;case"input":ke("invalid",t);var o=r=a=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var f=n[i];if(f!=null)switch(i){case"name":s=f;break;case"type":a=f;break;case"checked":l=f;break;case"defaultChecked":c=f;break;case"value":r=f;break;case"defaultValue":o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(q(137,e));break;default:ft(t,e,i,f,n,null)}}K0(t,r,o,l,c,a,s,!1);return;case"select":ke("invalid",t),i=a=r=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":r=o;break;case"defaultValue":a=o;break;case"multiple":i=o;default:ft(t,e,s,o,n,null)}e=r,n=a,t.multiple=!!i,e!=null?Sa(t,!!i,e,!1):n!=null&&Sa(t,!!i,n,!0);return;case"textarea":ke("invalid",t),r=s=i=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":i=o;break;case"defaultValue":s=o;break;case"children":r=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(q(91));break;default:ft(t,e,a,o,n,null)}j0(t,i,s,r);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?t.selected=i&&typeof i!="function"&&typeof i!="symbol":ft(t,e,l,i,n,null));return;case"dialog":ke("beforetoggle",t),ke("toggle",t),ke("cancel",t),ke("close",t);break;case"iframe":case"object":ke("load",t);break;case"video":case"audio":for(i=0;i<sl.length;i++)ke(sl[i],t);break;case"image":ke("error",t),ke("load",t);break;case"details":ke("toggle",t);break;case"embed":case"source":case"link":ke("error",t),ke("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(q(137,e));default:ft(t,e,c,i,n,null)}return;default:if(pp(e)){for(f in n)n.hasOwnProperty(f)&&(i=n[f],i!==void 0&&jd(t,e,f,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&ft(t,e,o,i,n,null))}function WM(t,e,n,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,r=null,a=null,o=null,l=null,c=null,f=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||ft(t,e,p,null,i,d)}}for(var h in i){var p=i[h];if(d=n[h],i.hasOwnProperty(h)&&(p!=null||d!=null))switch(h){case"type":r=p;break;case"name":s=p;break;case"checked":c=p;break;case"defaultChecked":f=p;break;case"value":a=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(q(137,e));break;default:p!==d&&ft(t,e,h,p,i,d)}}Md(t,a,o,l,c,f,r,s);return;case"select":p=a=o=h=null;for(r in n)if(l=n[r],n.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(r)||ft(t,e,r,null,i,l)}for(s in i)if(r=i[s],l=n[s],i.hasOwnProperty(s)&&(r!=null||l!=null))switch(s){case"value":h=r;break;case"defaultValue":o=r;break;case"multiple":a=r;default:r!==l&&ft(t,e,s,r,i,l)}e=o,n=a,i=p,h!=null?Sa(t,!!n,h,!1):!!i!=!!n&&(e!=null?Sa(t,!!n,e,!0):Sa(t,!!n,n?[]:"",!1));return;case"textarea":p=h=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ft(t,e,o,null,i,s)}for(a in i)if(s=i[a],r=n[a],i.hasOwnProperty(a)&&(s!=null||r!=null))switch(a){case"value":h=s;break;case"defaultValue":p=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(q(91));break;default:s!==r&&ft(t,e,a,s,i,r)}J0(t,h,p);return;case"option":for(var x in n)h=n[x],n.hasOwnProperty(x)&&h!=null&&!i.hasOwnProperty(x)&&(x==="selected"?t.selected=!1:ft(t,e,x,null,i,h));for(l in i)h=i[l],p=n[l],i.hasOwnProperty(l)&&h!==p&&(h!=null||p!=null)&&(l==="selected"?t.selected=h&&typeof h!="function"&&typeof h!="symbol":ft(t,e,l,h,i,p));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _ in n)h=n[_],n.hasOwnProperty(_)&&h!=null&&!i.hasOwnProperty(_)&&ft(t,e,_,null,i,h);for(c in i)if(h=i[c],p=n[c],i.hasOwnProperty(c)&&h!==p&&(h!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(q(137,e));break;default:ft(t,e,c,h,i,p)}return;default:if(pp(e)){for(var m in n)h=n[m],n.hasOwnProperty(m)&&h!==void 0&&!i.hasOwnProperty(m)&&jd(t,e,m,void 0,i,h);for(f in i)h=i[f],p=n[f],!i.hasOwnProperty(f)||h===p||h===void 0&&p===void 0||jd(t,e,f,h,i,p);return}}for(var u in n)h=n[u],n.hasOwnProperty(u)&&h!=null&&!i.hasOwnProperty(u)&&ft(t,e,u,null,i,h);for(d in i)h=i[d],p=n[d],!i.hasOwnProperty(d)||h===p||h==null&&p==null||ft(t,e,d,h,i,p)}function d0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function XM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],r=s.transferSize,a=s.initiatorType,o=s.duration;if(r&&o&&d0(a)){for(a=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var f=l.transferSize,d=l.initiatorType;f&&d0(d)&&(l=l.responseEnd,a+=f*(l<o?1:(o-c)/(l-c)))}if(--i,e+=8*(r+a)/(s.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var $d=null,ep=null;function ou(t){return t.nodeType===9?t:t.ownerDocument}function p0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function i_(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function tp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var fd=null;function YM(){var t=window.event;return t&&t.type==="popstate"?t===fd?!1:(fd=t,!0):(fd=null,!1)}var s_=typeof setTimeout=="function"?setTimeout:void 0,qM=typeof clearTimeout=="function"?clearTimeout:void 0,m0=typeof Promise=="function"?Promise:void 0,QM=typeof queueMicrotask=="function"?queueMicrotask:typeof m0<"u"?function(t){return m0.resolve(null).then(t).catch(ZM)}:s_;function ZM(t){setTimeout(function(){throw t})}function ks(t){return t==="head"}function g0(t,e){var n=e,i=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){t.removeChild(s),Fa(e);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Qo(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,Qo(n);for(var r=n.firstChild;r;){var a=r.nextSibling,o=r.nodeName;r[dl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=a}}else n==="body"&&Qo(t.ownerDocument.body);n=s}while(n);Fa(e)}function v0(t,e){var n=t;t=0;do{var i=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=i}while(n)}function np(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":np(n),dp(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function KM(t,e,n,i){for(;t.nodeType===1;){var s=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[dl])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(r=t.getAttribute("rel"),r==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(r!==s.rel||t.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||t.getAttribute("title")!==(s.title==null?null:s.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(r=t.getAttribute("src"),(r!==(s.src==null?null:s.src)||t.getAttribute("type")!==(s.type==null?null:s.type)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&r&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var r=s.name==null?null:""+s.name;if(s.type==="hidden"&&t.getAttribute("name")===r)return t}else return t;if(t=li(t.nextSibling),t===null)break}return null}function JM(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=li(t.nextSibling),t===null))return null;return t}function r_(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=li(t.nextSibling),t===null))return null;return t}function ip(t){return t.data==="$?"||t.data==="$~"}function sp(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function jM(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var i=function(){e(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function li(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var rp=null;function x0(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return li(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function y0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function a_(t,e,n){switch(e=ou(n),t){case"html":if(t=e.documentElement,!t)throw Error(q(452));return t;case"head":if(t=e.head,!t)throw Error(q(453));return t;case"body":if(t=e.body,!t)throw Error(q(454));return t;default:throw Error(q(451))}}function Qo(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);dp(t)}var ci=new Map,_0=new Set;function lu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var os=it.d;it.d={f:$M,r:eE,D:tE,C:nE,L:iE,m:sE,X:aE,S:rE,M:oE};function $M(){var t=os.f(),e=Tu();return t||e}function eE(t){var e=Ha(t);e!==null&&e.tag===5&&e.type==="form"?$x(e):os.r(t)}var Wa=typeof document>"u"?null:document;function o_(t,e,n){var i=Wa;if(i&&typeof e=="string"&&e){var s=si(e);s='link[rel="'+t+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),_0.has(s)||(_0.add(s),t={rel:t,crossOrigin:n,href:e},i.querySelector(s)===null&&(e=i.createElement("link"),cn(e,"link",t),tn(e),i.head.appendChild(e)))}}function tE(t){os.D(t),o_("dns-prefetch",t,null)}function nE(t,e){os.C(t,e),o_("preconnect",t,e)}function iE(t,e,n){os.L(t,e,n);var i=Wa;if(i&&t&&e){var s='link[rel="preload"][as="'+si(e)+'"]';e==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+si(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+si(n.imageSizes)+'"]')):s+='[href="'+si(t)+'"]';var r=s;switch(e){case"style":r=Oa(t);break;case"script":r=Xa(t)}ci.has(r)||(t=Mt({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),ci.set(r,t),i.querySelector(s)!==null||e==="style"&&i.querySelector(yl(r))||e==="script"&&i.querySelector(_l(r))||(e=i.createElement("link"),cn(e,"link",t),tn(e),i.head.appendChild(e)))}}function sE(t,e){os.m(t,e);var n=Wa;if(n&&t){var i=e&&typeof e.as=="string"?e.as:"script",s='link[rel="modulepreload"][as="'+si(i)+'"][href="'+si(t)+'"]',r=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Xa(t)}if(!ci.has(r)&&(t=Mt({rel:"modulepreload",href:t},e),ci.set(r,t),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(_l(r)))return}i=n.createElement("link"),cn(i,"link",t),tn(i),n.head.appendChild(i)}}}function rE(t,e,n){os.S(t,e,n);var i=Wa;if(i&&t){var s=Aa(i).hoistableStyles,r=Oa(t);e=e||"default";var a=s.get(r);if(!a){var o={loading:0,preload:null};if(a=i.querySelector(yl(r)))o.loading=5;else{t=Mt({rel:"stylesheet",href:t,"data-precedence":e},n),(n=ci.get(r))&&jp(t,n);var l=a=i.createElement("link");tn(l),cn(l,"link",t),l._p=new Promise(function(c,f){l.onload=c,l.onerror=f}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Lc(a,e,i)}a={type:"stylesheet",instance:a,count:1,state:o},s.set(r,a)}}}function aE(t,e){os.X(t,e);var n=Wa;if(n&&t){var i=Aa(n).hoistableScripts,s=Xa(t),r=i.get(s);r||(r=n.querySelector(_l(s)),r||(t=Mt({src:t,async:!0},e),(e=ci.get(s))&&$p(t,e),r=n.createElement("script"),tn(r),cn(r,"link",t),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(s,r))}}function oE(t,e){os.M(t,e);var n=Wa;if(n&&t){var i=Aa(n).hoistableScripts,s=Xa(t),r=i.get(s);r||(r=n.querySelector(_l(s)),r||(t=Mt({src:t,async:!0,type:"module"},e),(e=ci.get(s))&&$p(t,e),r=n.createElement("script"),tn(r),cn(r,"link",t),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(s,r))}}function A0(t,e,n,i){var s=(s=Rs.current)?lu(s):null;if(!s)throw Error(q(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Oa(n.href),n=Aa(s).hoistableStyles,i=n.get(e),i||(i={type:"style",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Oa(n.href);var r=Aa(s).hoistableStyles,a=r.get(t);if(a||(s=s.ownerDocument||s,a={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(t,a),(r=s.querySelector(yl(t)))&&!r._p&&(a.instance=r,a.state.loading=5),ci.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ci.set(t,n),r||lE(s,t,n,a.state))),e&&i===null)throw Error(q(528,""));return a}if(e&&i!==null)throw Error(q(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Xa(n),n=Aa(s).hoistableScripts,i=n.get(e),i||(i={type:"script",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(q(444,t))}}function Oa(t){return'href="'+si(t)+'"'}function yl(t){return'link[rel="stylesheet"]['+t+"]"}function l_(t){return Mt({},t,{"data-precedence":t.precedence,precedence:null})}function lE(t,e,n,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),cn(e,"link",n),tn(e),t.head.appendChild(e))}function Xa(t){return'[src="'+si(t)+'"]'}function _l(t){return"script[async]"+t}function S0(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+si(n.href)+'"]');if(i)return e.instance=i,tn(i),i;var s=Mt({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),tn(i),cn(i,"style",s),Lc(i,n.precedence,t),e.instance=i;case"stylesheet":s=Oa(n.href);var r=t.querySelector(yl(s));if(r)return e.state.loading|=4,e.instance=r,tn(r),r;i=l_(n),(s=ci.get(s))&&jp(i,s),r=(t.ownerDocument||t).createElement("link"),tn(r);var a=r;return a._p=new Promise(function(o,l){a.onload=o,a.onerror=l}),cn(r,"link",i),e.state.loading|=4,Lc(r,n.precedence,t),e.instance=r;case"script":return r=Xa(n.src),(s=t.querySelector(_l(r)))?(e.instance=s,tn(s),s):(i=n,(s=ci.get(r))&&(i=Mt({},n),$p(i,s)),t=t.ownerDocument||t,s=t.createElement("script"),tn(s),cn(s,"link",i),t.head.appendChild(s),e.instance=s);case"void":return null;default:throw Error(q(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(i=e.instance,e.state.loading|=4,Lc(i,n.precedence,t));return e.instance}function Lc(t,e,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,r=s,a=0;a<i.length;a++){var o=i[a];if(o.dataset.precedence===e)r=o;else if(r!==s)break}r?r.parentNode.insertBefore(t,r.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function jp(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function $p(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Pc=null;function M0(t,e,n){if(Pc===null){var i=new Map,s=Pc=new Map;s.set(n,i)}else s=Pc,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(t))return i;for(i.set(t,null),n=n.getElementsByTagName(t),s=0;s<n.length;s++){var r=n[s];if(!(r[dl]||r[an]||t==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var a=r.getAttribute(e)||"";a=t+a;var o=i.get(a);o?o.push(r):i.set(a,[r])}}return i}function E0(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function cE(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function c_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function uE(t,e,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=Oa(i.href),r=e.querySelector(yl(s));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=cu.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=r,tn(r);return}r=e.ownerDocument||e,i=l_(i),(s=ci.get(s))&&jp(i,s),r=r.createElement("link"),tn(r);var a=r;a._p=new Promise(function(o,l){a.onload=o,a.onerror=l}),cn(r,"link",i),n.instance=r}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(t.count++,n=cu.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var hd=0;function fE(t,e){return t.stylesheets&&t.count===0&&Nc(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var i=setTimeout(function(){if(t.stylesheets&&Nc(t,t.stylesheets),t.unsuspend){var r=t.unsuspend;t.unsuspend=null,r()}},6e4+e);0<t.imgBytes&&hd===0&&(hd=62500*XM());var s=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Nc(t,t.stylesheets),t.unsuspend)){var r=t.unsuspend;t.unsuspend=null,r()}},(t.imgBytes>hd?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function cu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Nc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var uu=null;function Nc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,uu=new Map,e.forEach(hE,t),uu=null,cu.call(t))}function hE(t,e){if(!(e.state.loading&4)){var n=uu.get(t);if(n)var i=n.get(null);else{n=new Map,uu.set(t,n);for(var s=t.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<s.length;r++){var a=s[r];(a.nodeName==="LINK"||a.getAttribute("media")!=="not all")&&(n.set(a.dataset.precedence,a),i=a)}i&&n.set(null,i)}s=e.instance,a=s.getAttribute("data-precedence"),r=n.get(a)||i,r===i&&n.set(null,s),n.set(a,s),this.count++,i=cu.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),r?r.parentNode.insertBefore(s,r.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(s,t.firstChild)),e.state.loading|=4}}var al={$$typeof:Ki,Provider:null,Consumer:null,_currentValue:vr,_currentValue2:vr,_threadCount:0};function dE(t,e,n,i,s,r,a,o,l){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Fh(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fh(0),this.hiddenUpdates=Fh(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=r,this.onRecoverableError=a,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function u_(t,e,n,i,s,r,a,o,l,c,f,d){return t=new dE(t,e,n,a,l,c,f,d,o),e=1,r===!0&&(e|=24),r=On(3,null,null,e),t.current=r,r.stateNode=t,e=Tp(),e.refCount++,t.pooledCache=e,e.refCount++,r.memoizedState={element:i,isDehydrated:n,cache:e},Cp(r),t}function f_(t){return t?(t=va,t):va}function h_(t,e,n,i,s,r){s=f_(s),i.context===null?i.context=s:i.pendingContext=s,i=Us(e),i.payload={element:n},r=r===void 0?null:r,r!==null&&(i.callback=r),n=Bs(t,i,e),n!==null&&(Rn(n,t,e),Ho(n,t,e))}function T0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function em(t,e){T0(t,e),(t=t.alternate)&&T0(t,e)}function d_(t){if(t.tag===13||t.tag===31){var e=Dr(t,67108864);e!==null&&Rn(e,t,67108864),em(t,67108864)}}function b0(t){if(t.tag===13||t.tag===31){var e=Vn();e=fp(e);var n=Dr(t,e);n!==null&&Rn(n,t,e),em(t,e)}}var fu=!0;function pE(t,e,n,i){var s=De.T;De.T=null;var r=it.p;try{it.p=2,tm(t,e,n,i)}finally{it.p=r,De.T=s}}function mE(t,e,n,i){var s=De.T;De.T=null;var r=it.p;try{it.p=8,tm(t,e,n,i)}finally{it.p=r,De.T=s}}function tm(t,e,n,i){if(fu){var s=ap(i);if(s===null)ud(t,e,i,hu,n),w0(t,i);else if(vE(s,t,e,n,i))i.stopPropagation();else if(w0(t,i),e&4&&-1<gE.indexOf(t)){for(;s!==null;){var r=Ha(s);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var a=pr(r.pendingLanes);if(a!==0){var o=r;for(o.pendingLanes|=2,o.entangledLanes|=2;a;){var l=1<<31-Gn(a);o.entanglements[1]|=l,a&=~l}Ii(r),(nt&6)===0&&(tu=zn()+500,xl(0,!1))}}break;case 31:case 13:o=Dr(r,2),o!==null&&Rn(o,r,2),Tu(),em(r,2)}if(r=ap(i),r===null&&ud(t,e,i,hu,n),r===s)break;s=r}s!==null&&i.stopPropagation()}else ud(t,e,i,null,n)}}function ap(t){return t=mp(t),nm(t)}var hu=null;function nm(t){if(hu=null,t=fa(t),t!==null){var e=cl(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=I0(e),t!==null)return t;t=null}else if(n===31){if(t=L0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return hu=t,null}function p_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(i1()){case F0:return 2;case z0:return 8;case Gc:case s1:return 32;case H0:return 268435456;default:return 32}default:return 32}}var op=!1,Ps=null,Ns=null,Os=null,ol=new Map,ll=new Map,Ms=[],gE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function w0(t,e){switch(t){case"focusin":case"focusout":Ps=null;break;case"dragenter":case"dragleave":Ns=null;break;case"mouseover":case"mouseout":Os=null;break;case"pointerover":case"pointerout":ol.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ll.delete(e.pointerId)}}function Ro(t,e,n,i,s,r){return t===null||t.nativeEvent!==r?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[s]},e!==null&&(e=Ha(e),e!==null&&d_(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function vE(t,e,n,i,s){switch(e){case"focusin":return Ps=Ro(Ps,t,e,n,i,s),!0;case"dragenter":return Ns=Ro(Ns,t,e,n,i,s),!0;case"mouseover":return Os=Ro(Os,t,e,n,i,s),!0;case"pointerover":var r=s.pointerId;return ol.set(r,Ro(ol.get(r)||null,t,e,n,i,s)),!0;case"gotpointercapture":return r=s.pointerId,ll.set(r,Ro(ll.get(r)||null,t,e,n,i,s)),!0}return!1}function m_(t){var e=fa(t.target);if(e!==null){var n=cl(e);if(n!==null){if(e=n.tag,e===13){if(e=I0(n),e!==null){t.blockedOn=e,uv(t.priority,function(){b0(n)});return}}else if(e===31){if(e=L0(n),e!==null){t.blockedOn=e,uv(t.priority,function(){b0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Oc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ap(t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Td=i,n.target.dispatchEvent(i),Td=null}else return e=Ha(n),e!==null&&d_(e),t.blockedOn=n,!1;e.shift()}return!0}function C0(t,e,n){Oc(t)&&n.delete(e)}function xE(){op=!1,Ps!==null&&Oc(Ps)&&(Ps=null),Ns!==null&&Oc(Ns)&&(Ns=null),Os!==null&&Oc(Os)&&(Os=null),ol.forEach(C0),ll.forEach(C0)}function Ac(t,e){t.blockedOn===e&&(t.blockedOn=null,op||(op=!0,Yt.unstable_scheduleCallback(Yt.unstable_NormalPriority,xE)))}var Sc=null;function R0(t){Sc!==t&&(Sc=t,Yt.unstable_scheduleCallback(Yt.unstable_NormalPriority,function(){Sc===t&&(Sc=null);for(var e=0;e<t.length;e+=3){var n=t[e],i=t[e+1],s=t[e+2];if(typeof i!="function"){if(nm(i||n)===null)continue;break}var r=Ha(n);r!==null&&(t.splice(e,3),e-=3,Gd(r,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function Fa(t){function e(l){return Ac(l,t)}Ps!==null&&Ac(Ps,t),Ns!==null&&Ac(Ns,t),Os!==null&&Ac(Os,t),ol.forEach(e),ll.forEach(e);for(var n=0;n<Ms.length;n++){var i=Ms[n];i.blockedOn===t&&(i.blockedOn=null)}for(;0<Ms.length&&(n=Ms[0],n.blockedOn===null);)m_(n),n.blockedOn===null&&Ms.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],r=n[i+1],a=s[Dn]||null;if(typeof r=="function")a||R0(n);else if(a){var o=null;if(r&&r.hasAttribute("formAction")){if(s=r,a=r[Dn]||null)o=a.formAction;else if(nm(s)!==null)continue}else o=a.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),R0(n)}}}function g_(){function t(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(a){return s=a})},focusReset:"manual",scroll:"manual"})}function e(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),s!==null&&(s(),s=null)}}}function im(t){this._internalRoot=t}Cu.prototype.render=im.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(q(409));var n=e.current,i=Vn();h_(n,i,t,e,null,null)};Cu.prototype.unmount=im.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;h_(t.current,2,null,t,null,null),Tu(),e[za]=null}};function Cu(t){this._internalRoot=t}Cu.prototype.unstable_scheduleHydration=function(t){if(t){var e=X0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ms.length&&e!==0&&e<Ms[n].priority;n++);Ms.splice(n,0,t),n===0&&m_(t)}};var D0=U0.version;if(D0!=="19.2.8")throw Error(q(527,D0,"19.2.8"));it.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(q(188)):(t=Object.keys(t).join(","),Error(q(268,t)));return t=KS(e),t=t!==null?P0(t):null,t=t===null?null:t.stateNode,t};var yE={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:De,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Do=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Do.isDisabled&&Do.supportsFiber))try{ul=Do.inject(yE),Hn=Do}catch{}var Do;Ru.createRoot=function(t,e){if(!B0(t))throw Error(q(299));var n=!1,i="",s=oy,r=ly,a=cy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(s=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(a=e.onRecoverableError)),e=u_(t,1,!1,null,null,n,i,null,s,r,a,g_),t[za]=e.current,Jp(t),new im(e)};Ru.hydrateRoot=function(t,e,n){if(!B0(t))throw Error(q(299));var i=!1,s="",r=oy,a=ly,o=cy,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(a=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),e=u_(t,1,!0,e,n??null,i,s,l,r,a,o,g_),e.context=f_(null),n=e.current,i=Vn(),i=fp(i),s=Us(i),s.callback=null,Bs(n,s,i),n=i,e.current.lanes=n,hl(e,n),Ii(e),t[za]=e.current,Jp(t),new Cu(e)};Ru.version="19.2.8"});var __=bi((NR,y_)=>{"use strict";function x_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x_)}catch(t){console.error(t)}}x_(),y_.exports=v_()});var cS=bi(gh=>{"use strict";var AR=Symbol.for("react.transitional.element"),SR=Symbol.for("react.fragment");function lS(t,e,n){var i=null;if(n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),"key"in e){n={};for(var s in e)s!=="key"&&(n[s]=e[s])}else n=e;return e=n.ref,{$$typeof:AR,type:t,key:i,ref:e!==void 0?e:null,props:n}}gh.Fragment=SR;gh.jsx=lS;gh.jsxs=lS});var Kl=bi((aL,uS)=>{"use strict";uS.exports=cS()});var mS=$r(__(),1);var F_=0,Im=1,z_=2;var Lm=1,H_=2,Fi=3,Si=0,Wt=1,Mn=2,Zn=0,Fr=1,Pm=2,Nm=3,Om=4,G_=5,js=100,V_=101,k_=102,W_=103,X_=104,Y_=200,q_=201,Q_=202,Z_=203,Zu=204,Ku=205,K_=206,J_=207,j_=208,$_=209,eA=210,tA=211,nA=212,iA=213,sA=214,_f=0,fo=1,Af=2,zr=3,Sf=4,Mf=5,Ef=6,Tf=7,Fm=0,rA=1,aA=2,ms=0,oA=1,lA=2,cA=3,uA=4,fA=5,hA=6,dA=7;var zm=300,kr=301,Wr=302,bf=303,wf=304,Gl=306,Ju=1e3,Js=1001,ju=1002,fi=1003,pA=1004;var Vl=1005;var kt=1006,Cf=1007;var sr=1008;var un=1009,Hm=1010,Gm=1011,ho=1012,Rf=1013,rr=1014,di=1015,po=1016,Df=1017,Uf=1018,ar=1020,Vm=35902,km=35899,Wm=1021,Xm=1022,pi=1023,ro=1026,or=1027,Ym=1028,Bf=1029,qm=1030,If=1031;var Lf=1033,kl=33776,Wl=33777,Xl=33778,Yl=33779,Pf=35840,Nf=35841,Of=35842,Ff=35843,zf=36196,Hf=37492,Gf=37496,Vf=37808,kf=37809,Wf=37810,Xf=37811,Yf=37812,qf=37813,Qf=37814,Zf=37815,Kf=37816,Jf=37817,jf=37818,$f=37819,eh=37820,th=37821,nh=36492,ih=36494,sh=36495,rh=36283,ah=36284,oh=36285,lh=36286;var bl=2300,$u=2301,Qu=2302,wm=2400,Cm=2401,Rm=2402;var zi=3200,mA=3201;var gA=0,vA=1,Kn="",Tt="srgb",Mi="srgb-linear",wl="linear",ct="srgb";var Nr=7680;var Dm=519,xA=512,yA=513,_A=514,Qm=515,AA=516,SA=517,MA=518,EA=519,Um=35044;var ql="300 es",Ai=2e3,Cl=2001;var qn=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let n=this._listeners;if(n===void 0)return;let i=n[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var sm=Math.PI/180,ef=180/Math.PI;function Ql(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[t&255]+hn[t>>8&255]+hn[t>>16&255]+hn[t>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[n&63|128]+hn[n>>8&255]+"-"+hn[n>>16&255]+hn[n>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function Qe(t,e,n){return Math.max(e,Math.min(n,t))}function _E(t,e){return(t%e+e)%e}function rm(t,e,n){return(1-n)*t+n*e}function Al(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Bn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}var Oe=class t{constructor(e=0,n=0){t.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ps=class{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,a,o){let l=i[s+0],c=i[s+1],f=i[s+2],d=i[s+3],h=r[a+0],p=r[a+1],x=r[a+2],_=r[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d;return}if(o===1){e[n+0]=h,e[n+1]=p,e[n+2]=x,e[n+3]=_;return}if(d!==_||l!==h||c!==p||f!==x){let m=1-o,u=l*h+c*p+f*x+d*_,g=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){let b=Math.sqrt(v),C=Math.atan2(b,u*g);m=Math.sin(m*C)/b,o=Math.sin(o*C)/b}let y=o*g;if(l=l*m+h*y,c=c*m+p*y,f=f*m+x*y,d=d*m+_*y,m===1-o){let b=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=b,c*=b,f*=b,d*=b}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],f=i[s+3],d=r[a],h=r[a+1],p=r[a+2],x=r[a+3];return e[n]=o*x+f*d+l*p-c*h,e[n+1]=l*x+f*h+c*d-o*p,e[n+2]=c*x+f*p+o*h-l*d,e[n+3]=f*x-o*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(s/2),d=o(r/2),h=l(i/2),p=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=h*f*d+c*p*x,this._y=c*p*d-h*f*x,this._z=c*f*x+h*p*d,this._w=c*f*d-h*p*x;break;case"YXZ":this._x=h*f*d+c*p*x,this._y=c*p*d-h*f*x,this._z=c*f*x-h*p*d,this._w=c*f*d+h*p*x;break;case"ZXY":this._x=h*f*d-c*p*x,this._y=c*p*d+h*f*x,this._z=c*f*x+h*p*d,this._w=c*f*d-h*p*x;break;case"ZYX":this._x=h*f*d-c*p*x,this._y=c*p*d+h*f*x,this._z=c*f*x-h*p*d,this._w=c*f*d+h*p*x;break;case"YZX":this._x=h*f*d+c*p*x,this._y=c*p*d+h*f*x,this._z=c*f*x-h*p*d,this._w=c*f*d-h*p*x;break;case"XZY":this._x=h*f*d-c*p*x,this._y=c*p*d-h*f*x,this._z=c*f*x+h*p*d,this._w=c*f*d+h*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],s=n[4],r=n[8],a=n[1],o=n[5],l=n[9],c=n[2],f=n[6],d=n[10],h=i+o+d;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(f-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+f)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,s=e._y,r=e._z,a=e._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+a*o+s*c-r*l,this._y=s*f+a*l+r*o-i*c,this._z=r*f+a*c+i*l-s*o,this._w=a*f-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-n;return this._w=p*a+n*this._w,this._x=p*i+n*this._x,this._y=p*s+n*this._y,this._z=p*r+n*this._z,this.normalize(),this}let c=Math.sqrt(l),f=Math.atan2(c,o),d=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=a*d+this._w*h,this._x=i*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class t{constructor(e=0,n=0,i=0){t.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(A_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(A_.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let n=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),f=2*(o*n-r*s),d=2*(r*i-a*n);return this.x=n+l*c+a*d-o*f,this.y=i+l*f+o*c-r*d,this.z=s+l*d+r*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,s=e.y,r=e.z,a=n.x,o=n.y,l=n.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return am.copy(this).projectOnVector(e),this.sub(am)}reflect(e){return this.sub(am.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},am=new z,A_=new ps,Fe=class t{constructor(e,n,i,s,r,a,o,l,c){t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,a,o,l,c)}set(e,n,i,s,r,a,o,l,c){let f=this.elements;return f[0]=e,f[1]=s,f[2]=o,f[3]=n,f[4]=r,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],d=i[7],h=i[2],p=i[5],x=i[8],_=s[0],m=s[3],u=s[6],g=s[1],v=s[4],y=s[7],b=s[2],C=s[5],w=s[8];return r[0]=a*_+o*g+l*b,r[3]=a*m+o*v+l*C,r[6]=a*u+o*y+l*w,r[1]=c*_+f*g+d*b,r[4]=c*m+f*v+d*C,r[7]=c*u+f*y+d*w,r[2]=h*_+p*g+x*b,r[5]=h*m+p*v+x*C,r[8]=h*u+p*y+x*w,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return n*a*f-n*o*c-i*r*f+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],d=f*a-o*c,h=o*l-f*r,p=c*r-a*l,x=n*d+i*h+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/x;return e[0]=d*_,e[1]=(s*c-f*i)*_,e[2]=(o*i-s*a)*_,e[3]=h*_,e[4]=(f*n-s*l)*_,e[5]=(s*r-o*n)*_,e[6]=p*_,e[7]=(i*l-c*n)*_,e[8]=(a*n-i*r)*_,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(om.makeScale(e,n)),this}rotate(e){return this.premultiply(om.makeRotation(-e)),this}translate(e,n){return this.premultiply(om.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},om=new Fe;function Zm(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Rl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function TA(){let t=Rl("canvas");return t.style.display="block",t}var S_={};function ao(t){t in S_||(S_[t]=!0,console.warn(t))}function bA(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var M_=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),E_=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function AE(){let t={enabled:!0,workingColorSpace:Mi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ct&&(s.r=ds(s.r),s.g=ds(s.g),s.b=ds(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(s.r=so(s.r),s.g=so(s.g),s.b=so(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Kn?wl:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ao("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ao("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Mi]:{primaries:e,whitePoint:i,transfer:wl,toXYZ:M_,fromXYZ:E_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:M_,fromXYZ:E_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),t}var $e=AE();function ds(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function so(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var Ya,tf=class{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ya===void 0&&(Ya=Rl("canvas")),Ya.width=e.width,Ya.height=e.height;let s=Ya.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ya}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=Rl("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ds(r[a]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ds(n[i]/255)*255):n[i]=ds(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},SE=0,oo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:SE++}),this.uuid=Ql(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(lm(s[a].image)):r.push(lm(s[a]))}else r=lm(s);i.url=r}return n||(e.images[this.uuid]=i),i}};function lm(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?tf.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ME=0,cm=new z,Qt=class t extends qn{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=Js,s=Js,r=kt,a=sr,o=pi,l=un,c=t.DEFAULT_ANISOTROPY,f=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ME++}),this.uuid=Ql(),this.name="",this.source=new oo(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(cm).x}get height(){return this.source.getSize(cm).y}get depth(){return this.source.getSize(cm).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let n in e){let i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ju:e.x=e.x-Math.floor(e.x);break;case Js:e.x=e.x<0?0:1;break;case ju:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ju:e.y=e.y-Math.floor(e.y);break;case Js:e.y=e.y<0?0:1;break;case ju:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=zm;Qt.DEFAULT_ANISOTROPY=1;var It=class t{constructor(e=0,n=0,i=0,s=1){t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*n+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*n+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*n+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r,l=e.elements,c=l[0],f=l[4],d=l[8],h=l[1],p=l[5],x=l[9],_=l[2],m=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-_)<.01&&Math.abs(x-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+_)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let v=(c+1)/2,y=(p+1)/2,b=(u+1)/2,C=(f+h)/4,w=(d+_)/4,U=(x+m)/4;return v>y&&v>b?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=C/i,r=w/i):y>b?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=C/s,r=U/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=w/r,s=U/r),this.set(i,s,r,n),this}let g=Math.sqrt((m-x)*(m-x)+(d-_)*(d-_)+(h-f)*(h-f));return Math.abs(g)<.001&&(g=1),this.x=(m-x)/g,this.y=(d-_)/g,this.z=(h-f)/g,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this.w=Qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this.w=Qe(this.w,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},nf=class extends qn{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new It(0,0,e,n),this.scissorTest=!1,this.viewport=new It(0,0,e,n);let s={width:e,height:n,depth:i.depth},r=new Qt(s);this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let n={minFilter:kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},e.textures[n].image);this.textures[n].source=new oo(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zt=class extends nf{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},Dl=class extends Qt{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=fi,this.minFilter=fi,this.wrapR=Js,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var sf=class extends Qt{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=fi,this.minFilter=fi,this.wrapR=Js,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $s=class{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(xi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(xi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=xi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,xi):xi.fromBufferAttribute(r,a),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Du.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Du.copy(i.boundingBox)),Du.applyMatrix4(e.matrixWorld),this.union(Du)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sl),Uu.subVectors(this.max,Sl),qa.subVectors(e.a,Sl),Qa.subVectors(e.b,Sl),Za.subVectors(e.c,Sl),Ws.subVectors(Qa,qa),Xs.subVectors(Za,Qa),Br.subVectors(qa,Za);let n=[0,-Ws.z,Ws.y,0,-Xs.z,Xs.y,0,-Br.z,Br.y,Ws.z,0,-Ws.x,Xs.z,0,-Xs.x,Br.z,0,-Br.x,-Ws.y,Ws.x,0,-Xs.y,Xs.x,0,-Br.y,Br.x,0];return!um(n,qa,Qa,Za,Uu)||(n=[1,0,0,0,1,0,0,0,1],!um(n,qa,Qa,Za,Uu))?!1:(Bu.crossVectors(Ws,Xs),n=[Bu.x,Bu.y,Bu.z],um(n,qa,Qa,Za,Uu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ls[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ls[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ls[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ls[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ls[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ls[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ls[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ls[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ls),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ls=[new z,new z,new z,new z,new z,new z,new z,new z],xi=new z,Du=new $s,qa=new z,Qa=new z,Za=new z,Ws=new z,Xs=new z,Br=new z,Sl=new z,Uu=new z,Bu=new z,Ir=new z;function um(t,e,n,i,s){for(let r=0,a=t.length-3;r<=a;r+=3){Ir.fromArray(t,r);let o=s.x*Math.abs(Ir.x)+s.y*Math.abs(Ir.y)+s.z*Math.abs(Ir.z),l=e.dot(Ir),c=n.dot(Ir),f=i.dot(Ir);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}var EE=new $s,Ml=new z,fm=new z,lo=class{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):EE.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ml.subVectors(e,this.center);let n=Ml.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Ml,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fm.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ml.copy(e.center).add(fm)),this.expandByPoint(Ml.copy(e.center).sub(fm))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},cs=new z,hm=new z,Iu=new z,Ys=new z,dm=new z,Lu=new z,pm=new z,rf=class{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cs)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=cs.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(cs.copy(this.origin).addScaledVector(this.direction,n),cs.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){hm.copy(e).add(n).multiplyScalar(.5),Iu.copy(n).sub(e).normalize(),Ys.copy(this.origin).sub(hm);let r=e.distanceTo(n)*.5,a=-this.direction.dot(Iu),o=Ys.dot(this.direction),l=-Ys.dot(Iu),c=Ys.lengthSq(),f=Math.abs(1-a*a),d,h,p,x;if(f>0)if(d=a*l-o,h=a*o-l,x=r*f,d>=0)if(h>=-x)if(h<=x){let _=1/f;d*=_,h*=_,p=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-x?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c):h<=x?(d=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(hm).addScaledVector(Iu,h),p}intersectSphere(e,n){cs.subVectors(e.center,this.origin);let i=cs.dot(this.direction),s=cs.dot(cs)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,a,o,l,c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),f>=0?(r=(e.min.y-h.y)*f,a=(e.max.y-h.y)*f):(r=(e.max.y-h.y)*f,a=(e.min.y-h.y)*f),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,cs)!==null}intersectTriangle(e,n,i,s,r){dm.subVectors(n,e),Lu.subVectors(i,e),pm.crossVectors(dm,Lu);let a=this.direction.dot(pm),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ys.subVectors(this.origin,e);let l=o*this.direction.dot(Lu.crossVectors(Ys,Lu));if(l<0)return null;let c=o*this.direction.dot(dm.cross(Ys));if(c<0||l+c>a)return null;let f=-o*Ys.dot(pm);return f<0?null:this.at(f/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},qt=class t{constructor(e,n,i,s,r,a,o,l,c,f,d,h,p,x,_,m){t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,a,o,l,c,f,d,h,p,x,_,m)}set(e,n,i,s,r,a,o,l,c,f,d,h,p,x,_,m){let u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=f,u[10]=d,u[14]=h,u[3]=p,u[7]=x,u[11]=_,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){let n=this.elements,i=e.elements,s=1/Ka.setFromMatrixColumn(e,0).length(),r=1/Ka.setFromMatrixColumn(e,1).length(),a=1/Ka.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),f=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=a*f,p=a*d,x=o*f,_=o*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=p+x*c,n[5]=h-_*c,n[9]=-o*l,n[2]=_-h*c,n[6]=x+p*c,n[10]=a*l}else if(e.order==="YXZ"){let h=l*f,p=l*d,x=c*f,_=c*d;n[0]=h+_*o,n[4]=x*o-p,n[8]=a*c,n[1]=a*d,n[5]=a*f,n[9]=-o,n[2]=p*o-x,n[6]=_+h*o,n[10]=a*l}else if(e.order==="ZXY"){let h=l*f,p=l*d,x=c*f,_=c*d;n[0]=h-_*o,n[4]=-a*d,n[8]=x+p*o,n[1]=p+x*o,n[5]=a*f,n[9]=_-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){let h=a*f,p=a*d,x=o*f,_=o*d;n[0]=l*f,n[4]=x*c-p,n[8]=h*c+_,n[1]=l*d,n[5]=_*c+h,n[9]=p*c-x,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){let h=a*l,p=a*c,x=o*l,_=o*c;n[0]=l*f,n[4]=_-h*d,n[8]=x*d+p,n[1]=d,n[5]=a*f,n[9]=-o*f,n[2]=-c*f,n[6]=p*d+x,n[10]=h-_*d}else if(e.order==="XZY"){let h=a*l,p=a*c,x=o*l,_=o*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=h*d+_,n[5]=a*f,n[9]=p*d-x,n[2]=x*d-p,n[6]=o*f,n[10]=_*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(TE,e,bE)}lookAt(e,n,i){let s=this.elements;return Xn.subVectors(e,n),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),qs.crossVectors(i,Xn),qs.lengthSq()===0&&(Math.abs(i.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),qs.crossVectors(i,Xn)),qs.normalize(),Pu.crossVectors(Xn,qs),s[0]=qs.x,s[4]=Pu.x,s[8]=Xn.x,s[1]=qs.y,s[5]=Pu.y,s[9]=Xn.y,s[2]=qs.z,s[6]=Pu.z,s[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],d=i[5],h=i[9],p=i[13],x=i[2],_=i[6],m=i[10],u=i[14],g=i[3],v=i[7],y=i[11],b=i[15],C=s[0],w=s[4],U=s[8],M=s[12],E=s[1],D=s[5],G=s[9],k=s[13],Y=s[2],O=s[6],N=s[10],J=s[14],V=s[3],se=s[7],pe=s[11],Me=s[15];return r[0]=a*C+o*E+l*Y+c*V,r[4]=a*w+o*D+l*O+c*se,r[8]=a*U+o*G+l*N+c*pe,r[12]=a*M+o*k+l*J+c*Me,r[1]=f*C+d*E+h*Y+p*V,r[5]=f*w+d*D+h*O+p*se,r[9]=f*U+d*G+h*N+p*pe,r[13]=f*M+d*k+h*J+p*Me,r[2]=x*C+_*E+m*Y+u*V,r[6]=x*w+_*D+m*O+u*se,r[10]=x*U+_*G+m*N+u*pe,r[14]=x*M+_*k+m*J+u*Me,r[3]=g*C+v*E+y*Y+b*V,r[7]=g*w+v*D+y*O+b*se,r[11]=g*U+v*G+y*N+b*pe,r[15]=g*M+v*k+y*J+b*Me,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],d=e[6],h=e[10],p=e[14],x=e[3],_=e[7],m=e[11],u=e[15];return x*(+r*l*d-s*c*d-r*o*h+i*c*h+s*o*p-i*l*p)+_*(+n*l*p-n*c*h+r*a*h-s*a*p+s*c*f-r*l*f)+m*(+n*c*d-n*o*p-r*a*d+i*a*p+r*o*f-i*c*f)+u*(-s*o*f-n*l*d+n*o*h+s*a*d-i*a*h+i*l*f)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],d=e[9],h=e[10],p=e[11],x=e[12],_=e[13],m=e[14],u=e[15],g=d*m*c-_*h*c+_*l*p-o*m*p-d*l*u+o*h*u,v=x*h*c-f*m*c-x*l*p+a*m*p+f*l*u-a*h*u,y=f*_*c-x*d*c+x*o*p-a*_*p-f*o*u+a*d*u,b=x*d*l-f*_*l-x*o*h+a*_*h+f*o*m-a*d*m,C=n*g+i*v+s*y+r*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/C;return e[0]=g*w,e[1]=(_*h*r-d*m*r-_*s*p+i*m*p+d*s*u-i*h*u)*w,e[2]=(o*m*r-_*l*r+_*s*c-i*m*c-o*s*u+i*l*u)*w,e[3]=(d*l*r-o*h*r-d*s*c+i*h*c+o*s*p-i*l*p)*w,e[4]=v*w,e[5]=(f*m*r-x*h*r+x*s*p-n*m*p-f*s*u+n*h*u)*w,e[6]=(x*l*r-a*m*r-x*s*c+n*m*c+a*s*u-n*l*u)*w,e[7]=(a*h*r-f*l*r+f*s*c-n*h*c-a*s*p+n*l*p)*w,e[8]=y*w,e[9]=(x*d*r-f*_*r-x*i*p+n*_*p+f*i*u-n*d*u)*w,e[10]=(a*_*r-x*o*r+x*i*c-n*_*c-a*i*u+n*o*u)*w,e[11]=(f*o*r-a*d*r-f*i*c+n*d*c+a*i*p-n*o*p)*w,e[12]=b*w,e[13]=(f*_*s-x*d*s+x*i*h-n*_*h-f*i*m+n*d*m)*w,e[14]=(x*o*s-a*_*s-x*i*l+n*_*l+a*i*m-n*o*m)*w,e[15]=(a*d*s-f*o*s+f*i*l-n*d*l-a*i*h+n*o*h)*w,this}scale(e){let n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),s=Math.sin(n),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,f=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,f*o+i,f*l-s*a,0,c*l-s*o,f*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){let s=this.elements,r=n._x,a=n._y,o=n._z,l=n._w,c=r+r,f=a+a,d=o+o,h=r*c,p=r*f,x=r*d,_=a*f,m=a*d,u=o*d,g=l*c,v=l*f,y=l*d,b=i.x,C=i.y,w=i.z;return s[0]=(1-(_+u))*b,s[1]=(p+y)*b,s[2]=(x-v)*b,s[3]=0,s[4]=(p-y)*C,s[5]=(1-(h+u))*C,s[6]=(m+g)*C,s[7]=0,s[8]=(x+v)*w,s[9]=(m-g)*w,s[10]=(1-(h+_))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){let s=this.elements,r=Ka.set(s[0],s[1],s[2]).length(),a=Ka.set(s[4],s[5],s[6]).length(),o=Ka.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],yi.copy(this);let c=1/r,f=1/a,d=1/o;return yi.elements[0]*=c,yi.elements[1]*=c,yi.elements[2]*=c,yi.elements[4]*=f,yi.elements[5]*=f,yi.elements[6]*=f,yi.elements[8]*=d,yi.elements[9]*=d,yi.elements[10]*=d,n.setFromRotationMatrix(yi),i.x=r,i.y=a,i.z=o,this}makePerspective(e,n,i,s,r,a,o=Ai,l=!1){let c=this.elements,f=2*r/(n-e),d=2*r/(i-s),h=(n+e)/(n-e),p=(i+s)/(i-s),x,_;if(l)x=r/(a-r),_=a*r/(a-r);else if(o===Ai)x=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Cl)x=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,r,a,o=Ai,l=!1){let c=this.elements,f=2/(n-e),d=2/(i-s),h=-(n+e)/(n-e),p=-(i+s)/(i-s),x,_;if(l)x=1/(a-r),_=a/(a-r);else if(o===Ai)x=-2/(a-r),_=-(a+r)/(a-r);else if(o===Cl)x=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},Ka=new z,yi=new qt,TE=new z(0,0,0),bE=new z(1,1,1),qs=new z,Pu=new z,Xn=new z,T_=new qt,b_=new ps,Ni=class t{constructor(e=0,n=0,i=0,s=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],f=s[9],d=s[2],h=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return T_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(T_,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return b_.setFromEuler(this),this.setFromQuaternion(b_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ni.DEFAULT_ORDER="XYZ";var Ul=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},wE=0,w_=new z,Ja=new ps,us=new qt,Nu=new z,El=new z,CE=new z,RE=new ps,C_=new z(1,0,0),R_=new z(0,1,0),D_=new z(0,0,1),U_={type:"added"},DE={type:"removed"},ja={type:"childadded",child:null},mm={type:"childremoved",child:null},hi=class t extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=Ql(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new z,n=new Ni,i=new ps,s=new z(1,1,1);function r(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qt},normalMatrix:{value:new Fe}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ul,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ja.setFromAxisAngle(e,n),this.quaternion.multiply(Ja),this}rotateOnWorldAxis(e,n){return Ja.setFromAxisAngle(e,n),this.quaternion.premultiply(Ja),this}rotateX(e){return this.rotateOnAxis(C_,e)}rotateY(e){return this.rotateOnAxis(R_,e)}rotateZ(e){return this.rotateOnAxis(D_,e)}translateOnAxis(e,n){return w_.copy(e).applyQuaternion(this.quaternion),this.position.add(w_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(C_,e)}translateY(e){return this.translateOnAxis(R_,e)}translateZ(e){return this.translateOnAxis(D_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(us.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Nu.copy(e):Nu.set(e,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),El.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?us.lookAt(El,Nu,this.up):us.lookAt(Nu,El,this.up),this.quaternion.setFromRotationMatrix(us),s&&(us.extractRotation(s.matrixWorld),Ja.setFromRotationMatrix(us),this.quaternion.premultiply(Ja.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(U_),ja.child=e,this.dispatchEvent(ja),ja.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(DE),mm.child=e,this.dispatchEvent(mm),mm.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),us.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),us.multiply(e.parent.matrixWorld)),e.applyMatrix4(us),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(U_),ja.child=e,this.dispatchEvent(ja),ja.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(El,e,CE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(El,RE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(n){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),d=a(e.shapes),h=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=s,i;function a(o){let l=[];for(let c in o){let f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};hi.DEFAULT_UP=new z(0,1,0);hi.DEFAULT_MATRIX_AUTO_UPDATE=!0;hi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _i=new z,fs=new z,gm=new z,hs=new z,$a=new z,eo=new z,B_=new z,vm=new z,xm=new z,ym=new z,_m=new It,Am=new It,Sm=new It,Ks=class t{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),_i.subVectors(e,n),s.cross(_i);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){_i.subVectors(s,n),fs.subVectors(i,n),gm.subVectors(e,n);let a=_i.dot(_i),o=_i.dot(fs),l=_i.dot(gm),c=fs.dot(fs),f=fs.dot(gm),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,p=(c*l-o*f)*h,x=(a*f-o*l)*h;return r.set(1-p-x,x,p)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,hs)===null?!1:hs.x>=0&&hs.y>=0&&hs.x+hs.y<=1}static getInterpolation(e,n,i,s,r,a,o,l){return this.getBarycoord(e,n,i,s,hs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hs.x),l.addScaledVector(a,hs.y),l.addScaledVector(o,hs.z),l)}static getInterpolatedAttribute(e,n,i,s,r,a){return _m.setScalar(0),Am.setScalar(0),Sm.setScalar(0),_m.fromBufferAttribute(e,n),Am.fromBufferAttribute(e,i),Sm.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(_m,r.x),a.addScaledVector(Am,r.y),a.addScaledVector(Sm,r.z),a}static isFrontFacing(e,n,i,s){return _i.subVectors(i,n),fs.subVectors(e,n),_i.cross(fs).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),fs.subVectors(this.a,this.b),_i.cross(fs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return t.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,s=this.b,r=this.c,a,o;$a.subVectors(s,i),eo.subVectors(r,i),vm.subVectors(e,i);let l=$a.dot(vm),c=eo.dot(vm);if(l<=0&&c<=0)return n.copy(i);xm.subVectors(e,s);let f=$a.dot(xm),d=eo.dot(xm);if(f>=0&&d<=f)return n.copy(s);let h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return a=l/(l-f),n.copy(i).addScaledVector($a,a);ym.subVectors(e,r);let p=$a.dot(ym),x=eo.dot(ym);if(x>=0&&p<=x)return n.copy(r);let _=p*c-l*x;if(_<=0&&c>=0&&x<=0)return o=c/(c-x),n.copy(i).addScaledVector(eo,o);let m=f*x-p*d;if(m<=0&&d-f>=0&&p-x>=0)return B_.subVectors(r,s),o=(d-f)/(d-f+(p-x)),n.copy(s).addScaledVector(B_,o);let u=1/(m+_+h);return a=_*u,o=h*u,n.copy(i).addScaledVector($a,a).addScaledVector(eo,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},wA={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qs={h:0,s:0,l:0},Ou={h:0,s:0,l:0};function Mm(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var Ze=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=$e.workingColorSpace){return this.r=e,this.g=n,this.b=i,$e.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=$e.workingColorSpace){if(e=_E(e,1),n=Qe(n,0,1),i=Qe(i,0,1),n===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+n):i+n-i*n,a=2*i-r;this.r=Mm(a,r,e+1/3),this.g=Mm(a,r,e),this.b=Mm(a,r,e-1/3)}return $e.colorSpaceToWorking(this,s),this}setStyle(e,n=Tt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Tt){let i=wA[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ds(e.r),this.g=ds(e.g),this.b=ds(e.b),this}copyLinearToSRGB(e){return this.r=so(e.r),this.g=so(e.g),this.b=so(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return $e.workingToColorSpace(dn.copy(this),e),Math.round(Qe(dn.r*255,0,255))*65536+Math.round(Qe(dn.g*255,0,255))*256+Math.round(Qe(dn.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=$e.workingColorSpace){$e.workingToColorSpace(dn.copy(this),n);let i=dn.r,s=dn.g,r=dn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,f=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=f<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=$e.workingColorSpace){return $e.workingToColorSpace(dn.copy(this),n),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=Tt){$e.workingToColorSpace(dn.copy(this),e);let n=dn.r,i=dn.g,s=dn.b;return e!==Tt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Qs),this.setHSL(Qs.h+e,Qs.s+n,Qs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Qs),e.getHSL(Ou);let i=rm(Qs.h,Ou.h,n),s=rm(Qs.s,Ou.s,n),r=rm(Qs.l,Ou.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dn=new Ze;Ze.NAMES=wA;var UE=0,Ei=class extends qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:UE++}),this.uuid=Ql(),this.name="",this.type="Material",this.blending=Fr,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zu,this.blendDst=Ku,this.blendEquation=js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nr,this.stencilZFail=Nr,this.stencilZPass=Nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fr&&(i.blending=this.blending),this.side!==Si&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Zu&&(i.blendSrc=this.blendSrc),this.blendDst!==Ku&&(i.blendDst=this.blendDst),this.blendEquation!==js&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==zr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Nr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Nr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Nr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(n){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Bl=class extends Ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=Fm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Vt=new z,Fu=new Oe,BE=0,mn=class{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:BE++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Um,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Fu.fromBufferAttribute(this,n),Fu.applyMatrix3(e),this.setXY(n,Fu.x,Fu.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix3(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix4(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyNormalMatrix(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.transformDirection(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Al(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Al(n,this.array)),n}setX(e,n){return this.normalized&&(n=Bn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Al(n,this.array)),n}setY(e,n){return this.normalized&&(n=Bn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Al(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Bn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Al(n,this.array)),n}setW(e,n){return this.normalized&&(n=Bn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Bn(n,this.array),i=Bn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=Bn(n,this.array),i=Bn(i,this.array),s=Bn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=Bn(n,this.array),i=Bn(i,this.array),s=Bn(s,this.array),r=Bn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Um&&(e.usage=this.usage),e}};var Il=class extends mn{constructor(e,n,i){super(new Uint16Array(e),n,i)}};var Ll=class extends mn{constructor(e,n,i){super(new Uint32Array(e),n,i)}};var Pi=class extends mn{constructor(e,n,i){super(new Float32Array(e),n,i)}},IE=0,ui=new qt,Em=new hi,to=new z,Yn=new $s,Tl=new $s,sn=new z,Oi=class t extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IE++}),this.uuid=Ql(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zm(e)?Ll:Il)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Fe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,n,i){return ui.makeTranslation(e,n,i),this.applyMatrix4(ui),this}scale(e,n,i){return ui.makeScale(e,n,i),this.applyMatrix4(ui),this}lookAt(e){return Em.lookAt(e),Em.updateMatrix(),this.applyMatrix4(Em.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(to).negate(),this.translate(to.x,to.y,to.z),this}setFromPoints(e){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Pi(i,3))}else{let i=Math.min(e.length,n.count);for(let s=0;s<i;s++){let r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $s);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){let r=n[i];Yn.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lo);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let i=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){let o=n[r];Tl.setFromBufferAttribute(o),this.morphTargetsRelative?(sn.addVectors(Yn.min,Tl.min),Yn.expandByPoint(sn),sn.addVectors(Yn.max,Tl.max),Yn.expandByPoint(sn)):(Yn.expandByPoint(Tl.min),Yn.expandByPoint(Tl.max))}Yn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)sn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(sn));if(n)for(let r=0,a=n.length;r<a;r++){let o=n[r],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)sn.fromBufferAttribute(o,c),l&&(to.fromBufferAttribute(e,c),sn.add(to)),s=Math.max(s,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new z,l[U]=new z;let c=new z,f=new z,d=new z,h=new Oe,p=new Oe,x=new Oe,_=new z,m=new z;function u(U,M,E){c.fromBufferAttribute(i,U),f.fromBufferAttribute(i,M),d.fromBufferAttribute(i,E),h.fromBufferAttribute(r,U),p.fromBufferAttribute(r,M),x.fromBufferAttribute(r,E),f.sub(c),d.sub(c),p.sub(h),x.sub(h);let D=1/(p.x*x.y-x.x*p.y);isFinite(D)&&(_.copy(f).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(D),m.copy(d).multiplyScalar(p.x).addScaledVector(f,-x.x).multiplyScalar(D),o[U].add(_),o[M].add(_),o[E].add(_),l[U].add(m),l[M].add(m),l[E].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let U=0,M=g.length;U<M;++U){let E=g[U],D=E.start,G=E.count;for(let k=D,Y=D+G;k<Y;k+=3)u(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let v=new z,y=new z,b=new z,C=new z;function w(U){b.fromBufferAttribute(s,U),C.copy(b);let M=o[U];v.copy(M),v.sub(b.multiplyScalar(b.dot(M))).normalize(),y.crossVectors(C,M);let D=y.dot(l[U])<0?-1:1;a.setXYZW(U,v.x,v.y,v.z,D)}for(let U=0,M=g.length;U<M;++U){let E=g[U],D=E.start,G=E.count;for(let k=D,Y=D+G;k<Y;k+=3)w(e.getX(k+0)),w(e.getX(k+1)),w(e.getX(k+2))}}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let s=new z,r=new z,a=new z,o=new z,l=new z,c=new z,f=new z,d=new z;if(e)for(let h=0,p=e.count;h<p;h+=3){let x=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(n,x),r.fromBufferAttribute(n,_),a.fromBufferAttribute(n,m),f.subVectors(a,r),d.subVectors(s,r),f.cross(d),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(f),l.add(f),c.add(f),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)s.fromBufferAttribute(n,h+0),r.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),f.subVectors(a,r),d.subVectors(s,r),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)sn.fromBufferAttribute(e,n),sn.normalize(),e.setXYZ(n,sn.x,sn.y,sn.z)}toNonIndexed(){function e(o,l){let c=o.array,f=o.itemSize,d=o.normalized,h=new c.constructor(l.length*f),p=0,x=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*f;for(let u=0;u<f;u++)h[x++]=c[p++]}return new mn(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);n.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let f=0,d=c.length;f<d;f++){let h=c[f],p=e(h,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){let p=c[d];f.push(p.toJSON(e.data))}f.length>0&&(s[l]=f,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(n))}let r=e.morphAttributes;for(let c in r){let f=[],d=r[c];for(let h=0,p=d.length;h<p;h++)f.push(d[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,f=a.length;c<f;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},I_=new qt,Lr=new rf,zu=new lo,L_=new z,Hu=new z,Gu=new z,Vu=new z,Tm=new z,ku=new z,P_=new z,Wu=new z,gn=class extends hi{constructor(e=new Oi,n=new Bl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,n){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ku.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let f=o[l],d=r[l];f!==0&&(Tm.fromBufferAttribute(d,e),a?ku.addScaledVector(Tm,f):ku.addScaledVector(Tm.sub(n),f))}n.add(ku)}return n}raycast(e,n){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zu.copy(i.boundingSphere),zu.applyMatrix4(r),Lr.copy(e.ray).recast(e.near),!(zu.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(zu,L_)===null||Lr.origin.distanceToSquared(L_)>(e.far-e.near)**2))&&(I_.copy(r).invert(),Lr.copy(e.ray).applyMatrix4(I_),!(i.boundingBox!==null&&Lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Lr)))}_computeIntersections(e,n,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,_=h.length;x<_;x++){let m=h[x],u=a[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,b=v;y<b;y+=3){let C=o.getX(y),w=o.getX(y+1),U=o.getX(y+2);s=Xu(this,u,e,i,c,f,d,C,w,U),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let x=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=x,u=_;m<u;m+=3){let g=o.getX(m),v=o.getX(m+1),y=o.getX(m+2);s=Xu(this,a,e,i,c,f,d,g,v,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,_=h.length;x<_;x++){let m=h[x],u=a[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,b=v;y<b;y+=3){let C=y,w=y+1,U=y+2;s=Xu(this,u,e,i,c,f,d,C,w,U),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let x=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=x,u=_;m<u;m+=3){let g=m,v=m+1,y=m+2;s=Xu(this,a,e,i,c,f,d,g,v,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function LE(t,e,n,i,s,r,a,o){let l;if(e.side===Wt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Si,o),l===null)return null;Wu.copy(o),Wu.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(Wu);return c<n.near||c>n.far?null:{distance:c,point:Wu.clone(),object:t}}function Xu(t,e,n,i,s,r,a,o,l,c){t.getVertexPosition(o,Hu),t.getVertexPosition(l,Gu),t.getVertexPosition(c,Vu);let f=LE(t,e,n,i,Hu,Gu,Vu,P_);if(f){let d=new z;Ks.getBarycoord(P_,Hu,Gu,Vu,d),s&&(f.uv=Ks.getInterpolatedAttribute(s,o,l,c,d,new Oe)),r&&(f.uv1=Ks.getInterpolatedAttribute(r,o,l,c,d,new Oe)),a&&(f.normal=Ks.getInterpolatedAttribute(a,o,l,c,d,new z),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new z,materialIndex:0};Ks.getNormal(Hu,Gu,Vu,h.normal),f.face=h,f.barycoord=d}return f}var co=class t extends Oi{constructor(e=1,n=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],f=[],d=[],h=0,p=0;x("z","y","x",-1,-1,i,n,e,a,r,0),x("z","y","x",1,-1,i,n,-e,a,r,1),x("x","z","y",1,1,e,i,n,s,a,2),x("x","z","y",1,-1,e,i,-n,s,a,3),x("x","y","z",1,-1,e,n,i,s,r,4),x("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Pi(c,3)),this.setAttribute("normal",new Pi(f,3)),this.setAttribute("uv",new Pi(d,2));function x(_,m,u,g,v,y,b,C,w,U,M){let E=y/w,D=b/U,G=y/2,k=b/2,Y=C/2,O=w+1,N=U+1,J=0,V=0,se=new z;for(let pe=0;pe<N;pe++){let Me=pe*D-k;for(let He=0;He<O;He++){let rt=He*E-G;se[_]=rt*g,se[m]=Me*v,se[u]=Y,c.push(se.x,se.y,se.z),se[_]=0,se[m]=0,se[u]=C>0?1:-1,f.push(se.x,se.y,se.z),d.push(He/w),d.push(1-pe/U),J+=1}}for(let pe=0;pe<U;pe++)for(let Me=0;Me<w;Me++){let He=h+Me+O*pe,rt=h+Me+O*(pe+1),dt=h+(Me+1)+O*(pe+1),je=h+(Me+1)+O*pe;l.push(He,rt,je),l.push(rt,dt,je),V+=6}o.addGroup(p,V,M),p+=V,h+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Xr(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function vn(t){let e={};for(let n=0;n<t.length;n++){let i=Xr(t[n]);for(let s in i)e[s]=i[s]}return e}function PE(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Km(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}var CA={clone:Xr,merge:vn},NE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,OE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Kt=class extends Ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=NE,this.fragmentShader=OE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xr(e.uniforms),this.uniformsGroups=PE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?n.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[s]={type:"m4",value:a.toArray()}:n.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},Pl=class extends hi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=Ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Zs=new z,N_=new Oe,O_=new Oe,pn=class extends Pl{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=ef*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(sm*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ef*2*Math.atan(Math.tan(sm*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Zs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zs.x,Zs.y).multiplyScalar(-e/Zs.z),Zs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zs.x,Zs.y).multiplyScalar(-e/Zs.z)}getViewSize(e,n){return this.getViewBounds(e,N_,O_),n.subVectors(O_,N_)}setViewOffset(e,n,i,s,r,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(sm*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,n-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},no=-90,io=1,af=class extends hi{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new pn(no,io,e,n);s.layers=this.layers,this.add(s);let r=new pn(no,io,e,n);r.layers=this.layers,this.add(r);let a=new pn(no,io,e,n);a.layers=this.layers,this.add(a);let o=new pn(no,io,e,n);o.layers=this.layers,this.add(o);let l=new pn(no,io,e,n);l.layers=this.layers,this.add(l);let c=new pn(no,io,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,s,r,a,o,l]=n;for(let c of n)this.remove(c);if(e===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Cl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(n,r),e.setRenderTarget(i,1,s),e.render(n,a),e.setRenderTarget(i,2,s),e.render(n,o),e.setRenderTarget(i,3,s),e.render(n,l),e.setRenderTarget(i,4,s),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(n,f),e.setRenderTarget(d,h,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},Nl=class extends Qt{constructor(e=[],n=kr,i,s,r,a,o,l,c,f){super(e,n,i,s,r,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},of=class extends Zt{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Nl(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new co(5,5,5),r=new Kt({name:"CubemapFromEquirect",uniforms:Xr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wt,blending:Zn});r.uniforms.tEquirect.value=n;let a=new gn(s,r),o=n.minFilter;return n.minFilter===sr&&(n.minFilter=kt),new af(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,s);e.setRenderTarget(r)}},Or=class extends hi{constructor(){super(),this.isGroup=!0,this.type="Group"}},FE={type:"move"},uo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Or,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Or,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Or,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let m=n.getJointPose(_,i),u=this._getHandJoint(c,_);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),p=.02,x=.005;c.inputState.pinching&&h>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(FE)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new Or;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}};var er=class extends hi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};var bm=new z,zE=new z,HE=new Fe,Li=class{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let s=bm.subVectors(i,n).cross(zE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){let i=e.delta(bm),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||HE.getNormalMatrix(e),s=this.coplanarPoint(bm).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Pr=new lo,GE=new Oe(.5,.5),Yu=new z,Ol=class{constructor(e=new Li,n=new Li,i=new Li,s=new Li,r=new Li,a=new Li){this.planes=[e,n,i,s,r,a]}set(e,n,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ai,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],f=r[4],d=r[5],h=r[6],p=r[7],x=r[8],_=r[9],m=r[10],u=r[11],g=r[12],v=r[13],y=r[14],b=r[15];if(s[0].setComponents(c-a,p-f,u-x,b-g).normalize(),s[1].setComponents(c+a,p+f,u+x,b+g).normalize(),s[2].setComponents(c+o,p+d,u+_,b+v).normalize(),s[3].setComponents(c-o,p-d,u-_,b-v).normalize(),i)s[4].setComponents(l,h,m,y).normalize(),s[5].setComponents(c-l,p-h,u-m,b-y).normalize();else if(s[4].setComponents(c-l,p-h,u-m,b-y).normalize(),n===Ai)s[5].setComponents(c+l,p+h,u+m,b+y).normalize();else if(n===Cl)s[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pr)}intersectsSprite(e){Pr.center.set(0,0,0);let n=GE.distanceTo(e.center);return Pr.radius=.7071067811865476+n,Pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(e){let n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Yu.x=s.normal.x>0?e.max.x:e.min.x,Yu.y=s.normal.y>0?e.max.y:e.min.y,Yu.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Yu)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Hr=class extends Qt{constructor(e,n,i=rr,s,r,a,o=fi,l=fi,c,f=ro,d=1){if(f!==ro&&f!==or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:n,depth:d};super(h,s,r,a,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new oo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},Fl=class extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Gr=class t extends Oi{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};let r=e/2,a=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,f=l+1,d=e/o,h=n/l,p=[],x=[],_=[],m=[];for(let u=0;u<f;u++){let g=u*h-a;for(let v=0;v<c;v++){let y=v*d-r;x.push(y,-g,0),_.push(0,0,1),m.push(v/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){let v=g+c*u,y=g+c*(u+1),b=g+1+c*(u+1),C=g+1+c*u;p.push(v,y,C),p.push(y,b,C)}this.setIndex(p),this.setAttribute("position",new Pi(x,3)),this.setAttribute("normal",new Pi(_,3)),this.setAttribute("uv",new Pi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}};var lf=class extends Ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zi,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},cf=class extends Ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function qu(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function VE(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}var Vr=class{constructor(e,n,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],r=n[i-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=n[++i],e<s)break t}a=n.length;break n}if(!(e>=r)){let o=n[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=n[--i-1],e>=r)break t}a=i,i=0;break n}break e}for(;i<a;){let o=i+a>>>1;e<n[o]?a=o:i=o+1}if(s=n[i],r=n[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)n[a]=i[r+a];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},uf=class extends Vr{constructor(e,n,i,s){super(e,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wm,endingEnd:wm}}intervalChanged_(e,n,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Cm:r=e,o=2*n-i;break;case Rm:r=s.length-2,o=n+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Cm:a=e,l=2*i-n;break;case Rm:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=n}let c=(i-n)*.5,f=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=r*f,this._offsetNext=a*f}interpolate_(e,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,f=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,x=(i-n)/(s-n),_=x*x,m=_*x,u=-h*m+2*h*_-h*x,g=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*x+1,v=(-1-p)*m+(1.5+p)*_+.5*x,y=p*m-p*_;for(let b=0;b!==o;++b)r[b]=u*a[f+b]+g*a[c+b]+v*a[l+b]+y*a[d+b];return r}},ff=class extends Vr{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,f=(i-n)/(s-n),d=1-f;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*f;return r}},hf=class extends Vr{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Qn=class{constructor(e,n,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qu(n,this.TimeBufferType),this.values=qu(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:qu(e.times,Array),values:qu(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new hf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ff(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new uf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let n;switch(e){case bl:n=this.InterpolantFactoryMethodDiscrete;break;case $u:n=this.InterpolantFactoryMethodLinear;break;case Qu:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bl;case this.InterpolantFactoryMethodLinear:return $u;case this.InterpolantFactoryMethodSmooth:return Qu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=e}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=e}return this}trim(e,n){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>n;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&VE(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Qu,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],f=e[o+1];if(c!==f&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*i,h=d-i,p=d+i;for(let x=0;x!==i;++x){let _=n[d+x];if(_!==n[h+x]||_!==n[p+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*i,h=a*i;for(let p=0;p!==i;++p)n[h+p]=n[d+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)n[l+c]=n[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=n.slice(0,a*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,e,n);return s.createInterpolant=this.createInterpolant,s}};Qn.prototype.ValueTypeName="";Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=$u;var tr=class extends Qn{constructor(e,n,i){super(e,n,i)}};tr.prototype.ValueTypeName="bool";tr.prototype.ValueBufferType=Array;tr.prototype.DefaultInterpolation=bl;tr.prototype.InterpolantFactoryMethodLinear=void 0;tr.prototype.InterpolantFactoryMethodSmooth=void 0;var df=class extends Qn{constructor(e,n,i,s){super(e,n,i,s)}};df.prototype.ValueTypeName="color";var pf=class extends Qn{constructor(e,n,i,s){super(e,n,i,s)}};pf.prototype.ValueTypeName="number";var mf=class extends Vr{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=e*o;for(let f=c+o;c!==f;c+=4)ps.slerpFlat(r,0,a,c-o,a,c,l);return r}},zl=class extends Qn{constructor(e,n,i,s){super(e,n,i,s)}InterpolantFactoryMethodLinear(e){return new mf(this.times,this.values,this.getValueSize(),e)}};zl.prototype.ValueTypeName="quaternion";zl.prototype.InterpolantFactoryMethodSmooth=void 0;var nr=class extends Qn{constructor(e,n,i){super(e,n,i)}};nr.prototype.ValueTypeName="string";nr.prototype.ValueBufferType=Array;nr.prototype.DefaultInterpolation=bl;nr.prototype.InterpolantFactoryMethodLinear=void 0;nr.prototype.InterpolantFactoryMethodSmooth=void 0;var gf=class extends Qn{constructor(e,n,i,s){super(e,n,i,s)}};gf.prototype.ValueTypeName="vector";var vf=class{constructor(e,n,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.abortController=new AbortController,this.itemStart=function(f){o++,r===!1&&s.onStart!==void 0&&s.onStart(f,a,o),r=!0},this.itemEnd=function(f){a++,s.onProgress!==void 0&&s.onProgress(f,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,d){return c.push(f,d),this},this.removeHandler=function(f){let d=c.indexOf(f);return d!==-1&&c.splice(d,2),this},this.getHandler=function(f){for(let d=0,h=c.length;d<h;d+=2){let p=c[d],x=c[d+1];if(p.global&&(p.lastIndex=0),p.test(f))return x}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},RA=new vf,xf=class{constructor(e){this.manager=e!==void 0?e:RA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){let i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};xf.DEFAULT_MATERIAL_NAME="__DEFAULT";var ir=class extends Pl{constructor(e=-1,n=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var yf=class extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Hl=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}};var Jm="\\[\\]\\.:\\/",kE=new RegExp("["+Jm+"]","g"),jm="[^"+Jm+"]",WE="[^"+Jm.replace("\\.","")+"]",XE=/((?:WC+[\/:])*)/.source.replace("WC",jm),YE=/(WCOD+)?/.source.replace("WCOD",WE),qE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jm),QE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jm),ZE=new RegExp("^"+XE+YE+qE+QE+"$"),KE=["material","materials","bones","map"],Bm=class{constructor(e,n,i){let s=i||Et.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,s)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},Et=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(kE,"")}static parseTrackName(e){let n=ZE.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);KE.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[n++]=i[s]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,r=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===c){c=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=Bm;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var OR=new Float32Array(1);var xt=class t{constructor(e){this.value=e}clone(){return new t(this.value.clone===void 0?this.value:this.value.clone())}};function $m(t,e,n,i){let s=JE(i);switch(n){case Wm:return t*e;case Ym:return t*e/s.components*s.byteLength;case Bf:return t*e/s.components*s.byteLength;case qm:return t*e*2/s.components*s.byteLength;case If:return t*e*2/s.components*s.byteLength;case Xm:return t*e*3/s.components*s.byteLength;case pi:return t*e*4/s.components*s.byteLength;case Lf:return t*e*4/s.components*s.byteLength;case kl:case Wl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Xl:case Yl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Nf:case Ff:return Math.max(t,16)*Math.max(e,8)/4;case Pf:case Of:return Math.max(t,8)*Math.max(e,8)/2;case zf:case Hf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Gf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Vf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case kf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Wf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Xf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Yf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case qf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Qf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Zf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Kf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Jf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case jf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case $f:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case eh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case th:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case nh:case ih:case sh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case rh:case ah:return Math.ceil(t/4)*Math.ceil(e/4)*8;case oh:case lh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function JE(t){switch(t){case un:case Hm:return{byteLength:1,components:1};case ho:case Gm:case po:return{byteLength:2,components:1};case Df:case Uf:return{byteLength:2,components:4};case rr:case Rf:case di:return{byteLength:4,components:1};case Vm:case km:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function $A(){let t=null,e=!1,n=null,i=null;function s(r,a){n(r,a),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function jE(t){let e=new WeakMap;function n(o,l){let c=o.array,f=o.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,f),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let f=l.array,d=l.updateRanges;if(t.bindBuffer(c,o),d.length===0)t.bufferSubData(c,0,f);else{d.sort((p,x)=>p.start-x.start);let h=0;for(let p=1;p<d.length;p++){let x=d[h],_=d[p];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++h,d[h]=_)}d.length=h+1;for(let p=0,x=d.length;p<x;p++){let _=d[p];t.bufferSubData(c,_.start*f.BYTES_PER_ELEMENT,f,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var $E=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,lT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_T=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,AT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ST=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,MT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ET=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,TT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,RT="gl_FragColor = linearToOutputTexel( gl_FragColor );",DT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,UT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,BT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,IT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,LT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,NT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,FT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,GT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,WT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,XT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,YT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,QT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ZT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,KT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,JT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$T=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,eb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ib=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ab=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ob=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ub=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,db=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_b=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ab=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Eb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Cb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Db=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ub=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ib=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Pb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Nb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ob=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Hb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Jb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,jb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$b=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ew=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,aw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ow=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_w=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Aw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Mw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ew=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ww=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Dw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Uw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:$E,alphahash_pars_fragment:eT,alphamap_fragment:tT,alphamap_pars_fragment:nT,alphatest_fragment:iT,alphatest_pars_fragment:sT,aomap_fragment:rT,aomap_pars_fragment:aT,batching_pars_vertex:oT,batching_vertex:lT,begin_vertex:cT,beginnormal_vertex:uT,bsdfs:fT,iridescence_fragment:hT,bumpmap_pars_fragment:dT,clipping_planes_fragment:pT,clipping_planes_pars_fragment:mT,clipping_planes_pars_vertex:gT,clipping_planes_vertex:vT,color_fragment:xT,color_pars_fragment:yT,color_pars_vertex:_T,color_vertex:AT,common:ST,cube_uv_reflection_fragment:MT,defaultnormal_vertex:ET,displacementmap_pars_vertex:TT,displacementmap_vertex:bT,emissivemap_fragment:wT,emissivemap_pars_fragment:CT,colorspace_fragment:RT,colorspace_pars_fragment:DT,envmap_fragment:UT,envmap_common_pars_fragment:BT,envmap_pars_fragment:IT,envmap_pars_vertex:LT,envmap_physical_pars_fragment:XT,envmap_vertex:PT,fog_vertex:NT,fog_pars_vertex:OT,fog_fragment:FT,fog_pars_fragment:zT,gradientmap_pars_fragment:HT,lightmap_pars_fragment:GT,lights_lambert_fragment:VT,lights_lambert_pars_fragment:kT,lights_pars_begin:WT,lights_toon_fragment:YT,lights_toon_pars_fragment:qT,lights_phong_fragment:QT,lights_phong_pars_fragment:ZT,lights_physical_fragment:KT,lights_physical_pars_fragment:JT,lights_fragment_begin:jT,lights_fragment_maps:$T,lights_fragment_end:eb,logdepthbuf_fragment:tb,logdepthbuf_pars_fragment:nb,logdepthbuf_pars_vertex:ib,logdepthbuf_vertex:sb,map_fragment:rb,map_pars_fragment:ab,map_particle_fragment:ob,map_particle_pars_fragment:lb,metalnessmap_fragment:cb,metalnessmap_pars_fragment:ub,morphinstance_vertex:fb,morphcolor_vertex:hb,morphnormal_vertex:db,morphtarget_pars_vertex:pb,morphtarget_vertex:mb,normal_fragment_begin:gb,normal_fragment_maps:vb,normal_pars_fragment:xb,normal_pars_vertex:yb,normal_vertex:_b,normalmap_pars_fragment:Ab,clearcoat_normal_fragment_begin:Sb,clearcoat_normal_fragment_maps:Mb,clearcoat_pars_fragment:Eb,iridescence_pars_fragment:Tb,opaque_fragment:bb,packing:wb,premultiplied_alpha_fragment:Cb,project_vertex:Rb,dithering_fragment:Db,dithering_pars_fragment:Ub,roughnessmap_fragment:Bb,roughnessmap_pars_fragment:Ib,shadowmap_pars_fragment:Lb,shadowmap_pars_vertex:Pb,shadowmap_vertex:Nb,shadowmask_pars_fragment:Ob,skinbase_vertex:Fb,skinning_pars_vertex:zb,skinning_vertex:Hb,skinnormal_vertex:Gb,specularmap_fragment:Vb,specularmap_pars_fragment:kb,tonemapping_fragment:Wb,tonemapping_pars_fragment:Xb,transmission_fragment:Yb,transmission_pars_fragment:qb,uv_pars_fragment:Qb,uv_pars_vertex:Zb,uv_vertex:Kb,worldpos_vertex:Jb,background_vert:jb,background_frag:$b,backgroundCube_vert:ew,backgroundCube_frag:tw,cube_vert:nw,cube_frag:iw,depth_vert:sw,depth_frag:rw,distanceRGBA_vert:aw,distanceRGBA_frag:ow,equirect_vert:lw,equirect_frag:cw,linedashed_vert:uw,linedashed_frag:fw,meshbasic_vert:hw,meshbasic_frag:dw,meshlambert_vert:pw,meshlambert_frag:mw,meshmatcap_vert:gw,meshmatcap_frag:vw,meshnormal_vert:xw,meshnormal_frag:yw,meshphong_vert:_w,meshphong_frag:Aw,meshphysical_vert:Sw,meshphysical_frag:Mw,meshtoon_vert:Ew,meshtoon_frag:Tw,points_vert:bw,points_frag:ww,shadow_vert:Cw,shadow_frag:Rw,sprite_vert:Dw,sprite_frag:Uw},ce={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Hi={basic:{uniforms:vn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:vn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:vn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:vn([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:vn([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:vn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:vn([ce.points,ce.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:vn([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:vn([ce.common,ce.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:vn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:vn([ce.sprite,ce.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:vn([ce.common,ce.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:vn([ce.lights,ce.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Hi.physical={uniforms:vn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var ch={r:0,b:0,g:0},Yr=new Ni,Bw=new qt;function Iw(t,e,n,i,s,r,a){let o=new Ze(0),l=r===!0?0:1,c,f,d=null,h=0,p=null;function x(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?n:e).get(y)),y}function _(v){let y=!1,b=x(v);b===null?u(o,l):b&&b.isColor&&(u(b,1),y=!0);let C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(v,y){let b=x(y);b&&(b.isCubeTexture||b.mapping===Gl)?(f===void 0&&(f=new gn(new co(1,1,1),new Kt({name:"BackgroundCubeMaterial",uniforms:Xr(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(C,w,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),Yr.copy(y.backgroundRotation),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),f.material.uniforms.envMap.value=b,f.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Bw.makeRotationFromEuler(Yr)),f.material.toneMapped=$e.getTransfer(b.colorSpace)!==ct,(d!==b||h!==b.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,d=b,h=b.version,p=t.toneMapping),f.layers.enableAll(),v.unshift(f,f.geometry,f.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new gn(new Gr(2,2),new Kt({name:"BackgroundMaterial",uniforms:Xr(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=$e.getTransfer(b.colorSpace)!==ct,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||h!==b.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=b,h=b.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function u(v,y){v.getRGB(ch,Km(t)),i.buffers.color.setClear(ch.r,ch.g,ch.b,y,a)}function g(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),l=y,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,u(o,l)},render:_,addToRenderList:m,dispose:g}}function Lw(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,a=!1;function o(E,D,G,k,Y){let O=!1,N=d(k,G,D);r!==N&&(r=N,c(r.object)),O=p(E,k,G,Y),O&&x(E,k,G,Y),Y!==null&&e.update(Y,t.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,y(E,D,G,k),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return t.createVertexArray()}function c(E){return t.bindVertexArray(E)}function f(E){return t.deleteVertexArray(E)}function d(E,D,G){let k=G.wireframe===!0,Y=i[E.id];Y===void 0&&(Y={},i[E.id]=Y);let O=Y[D.id];O===void 0&&(O={},Y[D.id]=O);let N=O[k];return N===void 0&&(N=h(l()),O[k]=N),N}function h(E){let D=[],G=[],k=[];for(let Y=0;Y<n;Y++)D[Y]=0,G[Y]=0,k[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:G,attributeDivisors:k,object:E,attributes:{},index:null}}function p(E,D,G,k){let Y=r.attributes,O=D.attributes,N=0,J=G.getAttributes();for(let V in J)if(J[V].location>=0){let pe=Y[V],Me=O[V];if(Me===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(Me=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(Me=E.instanceColor)),pe===void 0||pe.attribute!==Me||Me&&pe.data!==Me.data)return!0;N++}return r.attributesNum!==N||r.index!==k}function x(E,D,G,k){let Y={},O=D.attributes,N=0,J=G.getAttributes();for(let V in J)if(J[V].location>=0){let pe=O[V];pe===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(pe=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(pe=E.instanceColor));let Me={};Me.attribute=pe,pe&&pe.data&&(Me.data=pe.data),Y[V]=Me,N++}r.attributes=Y,r.attributesNum=N,r.index=k}function _(){let E=r.newAttributes;for(let D=0,G=E.length;D<G;D++)E[D]=0}function m(E){u(E,0)}function u(E,D){let G=r.newAttributes,k=r.enabledAttributes,Y=r.attributeDivisors;G[E]=1,k[E]===0&&(t.enableVertexAttribArray(E),k[E]=1),Y[E]!==D&&(t.vertexAttribDivisor(E,D),Y[E]=D)}function g(){let E=r.newAttributes,D=r.enabledAttributes;for(let G=0,k=D.length;G<k;G++)D[G]!==E[G]&&(t.disableVertexAttribArray(G),D[G]=0)}function v(E,D,G,k,Y,O,N){N===!0?t.vertexAttribIPointer(E,D,G,Y,O):t.vertexAttribPointer(E,D,G,k,Y,O)}function y(E,D,G,k){_();let Y=k.attributes,O=G.getAttributes(),N=D.defaultAttributeValues;for(let J in O){let V=O[J];if(V.location>=0){let se=Y[J];if(se===void 0&&(J==="instanceMatrix"&&E.instanceMatrix&&(se=E.instanceMatrix),J==="instanceColor"&&E.instanceColor&&(se=E.instanceColor)),se!==void 0){let pe=se.normalized,Me=se.itemSize,He=e.get(se);if(He===void 0)continue;let rt=He.buffer,dt=He.type,je=He.bytesPerElement,Q=dt===t.INT||dt===t.UNSIGNED_INT||se.gpuType===Rf;if(se.isInterleavedBufferAttribute){let K=se.data,oe=K.stride,Te=se.offset;if(K.isInstancedInterleavedBuffer){for(let ve=0;ve<V.locationSize;ve++)u(V.location+ve,K.meshPerAttribute);E.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ve=0;ve<V.locationSize;ve++)m(V.location+ve);t.bindBuffer(t.ARRAY_BUFFER,rt);for(let ve=0;ve<V.locationSize;ve++)v(V.location+ve,Me/V.locationSize,dt,pe,oe*je,(Te+Me/V.locationSize*ve)*je,Q)}else{if(se.isInstancedBufferAttribute){for(let K=0;K<V.locationSize;K++)u(V.location+K,se.meshPerAttribute);E.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let K=0;K<V.locationSize;K++)m(V.location+K);t.bindBuffer(t.ARRAY_BUFFER,rt);for(let K=0;K<V.locationSize;K++)v(V.location+K,Me/V.locationSize,dt,pe,Me*je,Me/V.locationSize*K*je,Q)}}else if(N!==void 0){let pe=N[J];if(pe!==void 0)switch(pe.length){case 2:t.vertexAttrib2fv(V.location,pe);break;case 3:t.vertexAttrib3fv(V.location,pe);break;case 4:t.vertexAttrib4fv(V.location,pe);break;default:t.vertexAttrib1fv(V.location,pe)}}}}g()}function b(){U();for(let E in i){let D=i[E];for(let G in D){let k=D[G];for(let Y in k)f(k[Y].object),delete k[Y];delete D[G]}delete i[E]}}function C(E){if(i[E.id]===void 0)return;let D=i[E.id];for(let G in D){let k=D[G];for(let Y in k)f(k[Y].object),delete k[Y];delete D[G]}delete i[E.id]}function w(E){for(let D in i){let G=i[D];if(G[E.id]===void 0)continue;let k=G[E.id];for(let Y in k)f(k[Y].object),delete k[Y];delete G[E.id]}}function U(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:M,dispose:b,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:g}}function Pw(t,e,n){let i;function s(c){i=c}function r(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function a(c,f,d){d!==0&&(t.drawArraysInstanced(i,c,f,d),n.update(f,i,d))}function o(c,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,d);let p=0;for(let x=0;x<d;x++)p+=f[x];n.update(p,i,1)}function l(c,f,d,h){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)a(c[x],f[x],h[x]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,f,0,h,0,d);let x=0;for(let _=0;_<d;_++)x+=f[_]*h[_];n.update(x,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Nw(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==pi&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let U=w===po&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==un&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==di&&!U)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let d=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=x>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:b,maxSamples:C}}function Ow(t){let e=this,n=null,i=0,s=!1,r=!1,a=new Li,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let p=d.length!==0||h||i!==0||s;return s=h,i=d.length,p},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,p){let x=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,u=t.get(d);if(!s||x===null||x.length===0||r&&!m)r?f(null):c();else{let g=r?0:i,v=g*4,y=u.clippingState||null;l.value=y,y=f(x,h,v,p);for(let b=0;b!==v;++b)y[b]=n[b];u.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,p,x){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,x!==!0||m===null){let u=p+_*4,g=h.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let v=0,y=p;v!==_;++v,y+=4)a.copy(d[v]).applyMatrix4(g,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Fw(t){let e=new WeakMap;function n(a,o){return o===bf?a.mapping=kr:o===wf&&(a.mapping=Wr),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===bf||o===wf)if(e.has(a)){let l=e.get(a).texture;return n(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new of(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",s),n(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var go=4,DA=[.125,.215,.35,.446,.526,.582],Zr=20,eg=new ir,UA=new Ze,tg=null,ng=0,ig=0,sg=!1,Qr=(1+Math.sqrt(5))/2,mo=1/Qr,BA=[new z(-Qr,mo,0),new z(Qr,mo,0),new z(-mo,0,Qr),new z(mo,0,Qr),new z(0,Qr,-mo),new z(0,Qr,mo),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],zw=new z,hh=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100,r={}){let{size:a=256,position:o=zw}=r;tg=this._renderer.getRenderTarget(),ng=this._renderer.getActiveCubeFace(),ig=this._renderer.getActiveMipmapLevel(),sg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=PA(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=LA(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tg,ng,ig),this._renderer.xr.enabled=sg,e.scissorTest=!1,uh(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===kr||e.mapping===Wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tg=this._renderer.getRenderTarget(),ng=this._renderer.getActiveCubeFace(),ig=this._renderer.getActiveMipmapLevel(),sg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:po,format:pi,colorSpace:Mi,depthBuffer:!1},s=IA(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=IA(e,n,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hw(r)),this._blurMaterial=Gw(r,e,n)}return s}_compileMaterial(e){let n=new gn(this._lodPlanes[0],e);this._renderer.compile(n,eg)}_sceneToCubeUV(e,n,i,s,r){let l=new pn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(UA),d.toneMapping=ms,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let _=new Bl({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),m=new gn(new co,_),u=!1,g=e.background;g?g.isColor&&(_.color.copy(g),e.background=null,u=!0):(_.color.copy(UA),u=!0);for(let v=0;v<6;v++){let y=v%3;y===0?(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+f[v],r.y,r.z)):y===1?(l.up.set(0,0,c[v]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+f[v],r.z)):(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+f[v]));let b=this._cubeSize;uh(s,y*b,v>2?b:0,b,b),d.setRenderTarget(s),u&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=h,e.background=g}_textureToCubeUV(e,n){let i=this._renderer,s=e.mapping===kr||e.mapping===Wr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=PA()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=LA());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new gn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;uh(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,eg)}_applyPMREM(e){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=BA[(s-r-1)%BA.length];this._blur(e,r-1,r,a,o)}n.autoClear=i}_blur(e,n,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let f=3,d=new gn(this._lodPlanes[s],c),h=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Zr-1),_=r/x,m=isFinite(r)?1+Math.floor(f*_):Zr;m>Zr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zr}`);let u=[],g=0;for(let w=0;w<Zr;++w){let U=w/_,M=Math.exp(-U*U/2);u.push(M),w===0?g+=M:w<m&&(g+=2*M)}for(let w=0;w<u.length;w++)u[w]=u[w]/g;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:v}=this;h.dTheta.value=x,h.mipInt.value=v-i;let y=this._sizeLods[s],b=3*y*(s>v-go?s-v+go:0),C=4*(this._cubeSize-y);uh(n,b,C,3*y,2*y),l.setRenderTarget(n),l.render(d,eg)}};function Hw(t){let e=[],n=[],i=[],s=t,r=t-go+1+DA.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);n.push(o);let l=1/o;a>t-go?l=DA[a-t+go-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,x=6,_=3,m=2,u=1,g=new Float32Array(_*x*p),v=new Float32Array(m*x*p),y=new Float32Array(u*x*p);for(let C=0;C<p;C++){let w=C%3*2/3-1,U=C>2?0:-1,M=[w,U,0,w+2/3,U,0,w+2/3,U+1,0,w,U,0,w+2/3,U+1,0,w,U+1,0];g.set(M,_*x*C),v.set(h,m*x*C);let E=[C,C,C,C,C,C];y.set(E,u*x*C)}let b=new Oi;b.setAttribute("position",new mn(g,_)),b.setAttribute("uv",new mn(v,m)),b.setAttribute("faceIndex",new mn(y,u)),e.push(b),s>go&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function IA(t,e,n){let i=new Zt(t,e,n);return i.texture.mapping=Gl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function uh(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function Gw(t,e,n){let i=new Float32Array(Zr),s=new z(0,1,0);return new Kt({name:"SphericalGaussianBlur",defines:{n:Zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:pg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function LA(){return new Kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function PA(){return new Kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function pg(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Vw(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===bf||l===wf,f=l===kr||l===Wr;if(c||f){let d=e.get(o),h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new hh(t)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return c&&p&&p.height>0||f&&p&&s(p)?(n===null&&(n=new hh(t)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function kw(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&ao("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Ww(t,e,n,i){let s={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",a),delete s[h.id];let p=r.get(h);p&&(e.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,n.memory.geometries++),h}function l(d){let h=d.attributes;for(let p in h)e.update(h[p],t.ARRAY_BUFFER)}function c(d){let h=[],p=d.index,x=d.attributes.position,_=0;if(p!==null){let g=p.array;_=p.version;for(let v=0,y=g.length;v<y;v+=3){let b=g[v+0],C=g[v+1],w=g[v+2];h.push(b,C,C,w,w,b)}}else if(x!==void 0){let g=x.array;_=x.version;for(let v=0,y=g.length/3-1;v<y;v+=3){let b=v+0,C=v+1,w=v+2;h.push(b,C,C,w,w,b)}}else return;let m=new(Zm(h)?Ll:Il)(h,1);m.version=_;let u=r.get(d);u&&e.remove(u),r.set(d,m)}function f(d){let h=r.get(d);if(h){let p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:f}}function Xw(t,e,n){let i;function s(h){i=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,p){t.drawElements(i,p,r,h*a),n.update(p,i,1)}function c(h,p,x){x!==0&&(t.drawElementsInstanced(i,p,r,h*a,x),n.update(p,i,x))}function f(h,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,h,0,x);let m=0;for(let u=0;u<x;u++)m+=p[u];n.update(m,i,1)}function d(h,p,x,_){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<h.length;u++)c(h[u]/a,p[u],_[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,h,0,_,0,x);let u=0;for(let g=0;g<x;g++)u+=p[g]*_[g];n.update(u,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function Yw(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function qw(t,e,n){let i=new WeakMap,s=new It;function r(a,o,l){let c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=f!==void 0?f.length:0,h=i.get(o);if(h===void 0||h.count!==d){let M=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",M)};h!==void 0&&h.texture.dispose();let p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],g=o.morphAttributes.color||[],v=0;p===!0&&(v=1),x===!0&&(v=2),_===!0&&(v=3);let y=o.attributes.position.count*v,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let C=new Float32Array(y*b*4*d),w=new Dl(C,y,b,d);w.type=di,w.needsUpdate=!0;let U=v*4;for(let E=0;E<d;E++){let D=m[E],G=u[E],k=g[E],Y=y*b*4*E;for(let O=0;O<D.count;O++){let N=O*U;p===!0&&(s.fromBufferAttribute(D,O),C[Y+N+0]=s.x,C[Y+N+1]=s.y,C[Y+N+2]=s.z,C[Y+N+3]=0),x===!0&&(s.fromBufferAttribute(G,O),C[Y+N+4]=s.x,C[Y+N+5]=s.y,C[Y+N+6]=s.z,C[Y+N+7]=0),_===!0&&(s.fromBufferAttribute(k,O),C[Y+N+8]=s.x,C[Y+N+9]=s.y,C[Y+N+10]=s.z,C[Y+N+11]=k.itemSize===4?s.w:1)}}h={count:d,texture:w,size:new Oe(y,b)},i.set(o,h),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];let x=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:r}}function Qw(t,e,n,i){let s=new WeakMap;function r(l){let c=i.render.frame,f=l.geometry,d=e.get(l,f);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:a}}var eS=new Qt,NA=new Hr(1,1),tS=new Dl,nS=new sf,iS=new Nl,OA=[],FA=[],zA=new Float32Array(16),HA=new Float32Array(9),GA=new Float32Array(4);function xo(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=OA[s];if(r===void 0&&(r=new Float32Array(s),OA[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(r,o)}return r}function Jt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function jt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function mh(t,e){let n=FA[e];n===void 0&&(n=new Int32Array(e),FA[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Zw(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Kw(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;t.uniform2fv(this.addr,e),jt(n,e)}}function Jw(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Jt(n,e))return;t.uniform3fv(this.addr,e),jt(n,e)}}function jw(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;t.uniform4fv(this.addr,e),jt(n,e)}}function $w(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Jt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),jt(n,e)}else{if(Jt(n,i))return;GA.set(i),t.uniformMatrix2fv(this.addr,!1,GA),jt(n,i)}}function eC(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Jt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),jt(n,e)}else{if(Jt(n,i))return;HA.set(i),t.uniformMatrix3fv(this.addr,!1,HA),jt(n,i)}}function tC(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Jt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),jt(n,e)}else{if(Jt(n,i))return;zA.set(i),t.uniformMatrix4fv(this.addr,!1,zA),jt(n,i)}}function nC(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function iC(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;t.uniform2iv(this.addr,e),jt(n,e)}}function sC(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Jt(n,e))return;t.uniform3iv(this.addr,e),jt(n,e)}}function rC(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;t.uniform4iv(this.addr,e),jt(n,e)}}function aC(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function oC(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;t.uniform2uiv(this.addr,e),jt(n,e)}}function lC(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Jt(n,e))return;t.uniform3uiv(this.addr,e),jt(n,e)}}function cC(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;t.uniform4uiv(this.addr,e),jt(n,e)}}function uC(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(NA.compareFunction=Qm,r=NA):r=eS,n.setTexture2D(e||r,s)}function fC(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||nS,s)}function hC(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||iS,s)}function dC(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||tS,s)}function pC(t){switch(t){case 5126:return Zw;case 35664:return Kw;case 35665:return Jw;case 35666:return jw;case 35674:return $w;case 35675:return eC;case 35676:return tC;case 5124:case 35670:return nC;case 35667:case 35671:return iC;case 35668:case 35672:return sC;case 35669:case 35673:return rC;case 5125:return aC;case 36294:return oC;case 36295:return lC;case 36296:return cC;case 35678:case 36198:case 36298:case 36306:case 35682:return uC;case 35679:case 36299:case 36307:return fC;case 35680:case 36300:case 36308:case 36293:return hC;case 36289:case 36303:case 36311:case 36292:return dC}}function mC(t,e){t.uniform1fv(this.addr,e)}function gC(t,e){let n=xo(e,this.size,2);t.uniform2fv(this.addr,n)}function vC(t,e){let n=xo(e,this.size,3);t.uniform3fv(this.addr,n)}function xC(t,e){let n=xo(e,this.size,4);t.uniform4fv(this.addr,n)}function yC(t,e){let n=xo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function _C(t,e){let n=xo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function AC(t,e){let n=xo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function SC(t,e){t.uniform1iv(this.addr,e)}function MC(t,e){t.uniform2iv(this.addr,e)}function EC(t,e){t.uniform3iv(this.addr,e)}function TC(t,e){t.uniform4iv(this.addr,e)}function bC(t,e){t.uniform1uiv(this.addr,e)}function wC(t,e){t.uniform2uiv(this.addr,e)}function CC(t,e){t.uniform3uiv(this.addr,e)}function RC(t,e){t.uniform4uiv(this.addr,e)}function DC(t,e,n){let i=this.cache,s=e.length,r=mh(n,s);Jt(i,r)||(t.uniform1iv(this.addr,r),jt(i,r));for(let a=0;a!==s;++a)n.setTexture2D(e[a]||eS,r[a])}function UC(t,e,n){let i=this.cache,s=e.length,r=mh(n,s);Jt(i,r)||(t.uniform1iv(this.addr,r),jt(i,r));for(let a=0;a!==s;++a)n.setTexture3D(e[a]||nS,r[a])}function BC(t,e,n){let i=this.cache,s=e.length,r=mh(n,s);Jt(i,r)||(t.uniform1iv(this.addr,r),jt(i,r));for(let a=0;a!==s;++a)n.setTextureCube(e[a]||iS,r[a])}function IC(t,e,n){let i=this.cache,s=e.length,r=mh(n,s);Jt(i,r)||(t.uniform1iv(this.addr,r),jt(i,r));for(let a=0;a!==s;++a)n.setTexture2DArray(e[a]||tS,r[a])}function LC(t){switch(t){case 5126:return mC;case 35664:return gC;case 35665:return vC;case 35666:return xC;case 35674:return yC;case 35675:return _C;case 35676:return AC;case 5124:case 35670:return SC;case 35667:case 35671:return MC;case 35668:case 35672:return EC;case 35669:case 35673:return TC;case 5125:return bC;case 36294:return wC;case 36295:return CC;case 36296:return RC;case 35678:case 36198:case 36298:case 36306:case 35682:return DC;case 35679:case 36299:case 36307:return UC;case 35680:case 36300:case 36308:case 36293:return BC;case 36289:case 36303:case 36311:case 36292:return IC}}var ag=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=pC(n.type)}},og=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=LC(n.type)}},lg=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,n[o.id],i)}}},rg=/(\w+)(\])?(\[|\.)?/g;function VA(t,e){t.seq.push(e),t.map[e.id]=e}function PC(t,e,n){let i=t.name,s=i.length;for(rg.lastIndex=0;;){let r=rg.exec(i),a=rg.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){VA(n,c===void 0?new ag(o,t,e):new og(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new lg(o),VA(n,d)),n=d}}}var vo=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(n,s),a=e.getUniformLocation(n,r.name);PC(r,a,this)}}setValue(e,n,i,s){let r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){let s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,a=n.length;r!==a;++r){let o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,n){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in n&&i.push(a)}return i}};function kA(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var NC=37297,OC=0;function FC(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var WA=new Fe;function zC(t){$e._getMatrix(WA,$e.workingColorSpace,t);let e=`mat3( ${WA.elements.map(n=>n.toFixed(4))} )`;switch($e.getTransfer(t)){case wl:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function XA(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+FC(t.getShaderSource(e),o)}else return r}function HC(t,e){let n=zC(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function GC(t,e){let n;switch(e){case oA:n="Linear";break;case lA:n="Reinhard";break;case cA:n="Cineon";break;case uA:n="ACESFilmic";break;case hA:n="AgX";break;case dA:n="Neutral";break;case fA:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var fh=new z;function VC(){$e.getLuminanceCoefficients(fh);let t=fh.x.toFixed(4),e=fh.y.toFixed(4),n=fh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kC(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zl).join(`
`)}function WC(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function XC(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),a=r.name,o=1;r.type===t.FLOAT_MAT2&&(o=2),r.type===t.FLOAT_MAT3&&(o=3),r.type===t.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Zl(t){return t!==""}function YA(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qA(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var YC=/^[ \t]*#include +<([\w\d./]+)>/gm;function cg(t){return t.replace(YC,QC)}var qC=new Map;function QC(t,e){let n=Ge[e];if(n===void 0){let i=qC.get(e);if(i!==void 0)n=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return cg(n)}var ZC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function QA(t){return t.replace(ZC,KC)}function KC(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ZA(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function JC(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Lm?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===H_?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Fi&&(e="SHADOWMAP_TYPE_VSM"),e}function jC(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case kr:case Wr:e="ENVMAP_TYPE_CUBE";break;case Gl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $C(t){let e="ENVMAP_MODE_REFLECTION";return t.envMap&&t.envMapMode===Wr&&(e="ENVMAP_MODE_REFRACTION"),e}function e2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Fm:e="ENVMAP_BLENDING_MULTIPLY";break;case rA:e="ENVMAP_BLENDING_MIX";break;case aA:e="ENVMAP_BLENDING_ADD";break}return e}function t2(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function n2(t,e,n,i){let s=t.getContext(),r=n.defines,a=n.vertexShader,o=n.fragmentShader,l=JC(n),c=jC(n),f=$C(n),d=e2(n),h=t2(n),p=kC(n),x=WC(r),_=s.createProgram(),m,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Zl).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Zl).join(`
`),u.length>0&&(u+=`
`)):(m=[ZA(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zl).join(`
`),u=[ZA(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ms?"#define TONE_MAPPING":"",n.toneMapping!==ms?Ge.tonemapping_pars_fragment:"",n.toneMapping!==ms?GC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,HC("linearToOutputTexel",n.outputColorSpace),VC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Zl).join(`
`)),a=cg(a),a=YA(a,n),a=qA(a,n),o=cg(o),o=YA(o,n),o=qA(o,n),a=QA(a),o=QA(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let v=g+m+a,y=g+u+o,b=kA(s,s.VERTEX_SHADER,v),C=kA(s,s.FRAGMENT_SHADER,y);s.attachShader(_,b),s.attachShader(_,C),n.index0AttributeName!==void 0?s.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(D){if(t.debug.checkShaderErrors){let G=s.getProgramInfoLog(_)||"",k=s.getShaderInfoLog(b)||"",Y=s.getShaderInfoLog(C)||"",O=G.trim(),N=k.trim(),J=Y.trim(),V=!0,se=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,_,b,C);else{let pe=XA(s,b,"vertex"),Me=XA(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+O+`
`+pe+`
`+Me)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(N===""||J==="")&&(se=!1);se&&(D.diagnostics={runnable:V,programLog:O,vertexShader:{log:N,prefix:m},fragmentShader:{log:J,prefix:u}})}s.deleteShader(b),s.deleteShader(C),U=new vo(s,_),M=XC(s,_)}let U;this.getUniforms=function(){return U===void 0&&w(this),U};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(_,NC)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=OC++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=C,this}var i2=0,ug=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new fg(e),n.set(e,i)),i}},fg=class{constructor(e){this.id=i2++,this.code=e,this.usedTimes=0}};function s2(t,e,n,i,s,r,a){let o=new Ul,l=new ug,c=new Set,f=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures,p=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,E,D,G,k){let Y=G.fog,O=k.geometry,N=M.isMeshStandardMaterial?G.environment:null,J=(M.isMeshStandardMaterial?n:e).get(M.envMap||N),V=J&&J.mapping===Gl?J.image.height:null,se=x[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let pe=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Me=pe!==void 0?pe.length:0,He=0;O.morphAttributes.position!==void 0&&(He=1),O.morphAttributes.normal!==void 0&&(He=2),O.morphAttributes.color!==void 0&&(He=3);let rt,dt,je,Q;if(se){let st=Hi[se];rt=st.vertexShader,dt=st.fragmentShader}else rt=M.vertexShader,dt=M.fragmentShader,l.update(M),je=l.getVertexShaderID(M),Q=l.getFragmentShaderID(M);let K=t.getRenderTarget(),oe=t.state.buffers.depth.getReversed(),Te=k.isInstancedMesh===!0,ve=k.isBatchedMesh===!0,Ve=!!M.map,$t=!!M.matcap,R=!!J,at=!!M.aoMap,Be=!!M.lightMap,le=!!M.bumpMap,re=!!M.normalMap,Je=!!M.displacementMap,de=!!M.emissiveMap,Ie=!!M.metalnessMap,Ot=!!M.roughnessMap,Lt=M.anisotropy>0,T=M.clearcoat>0,A=M.dispersion>0,P=M.iridescence>0,X=M.sheen>0,j=M.transmission>0,W=Lt&&!!M.anisotropyMap,Ee=T&&!!M.clearcoatMap,ie=T&&!!M.clearcoatNormalMap,_e=T&&!!M.clearcoatRoughnessMap,Ae=P&&!!M.iridescenceMap,te=P&&!!M.iridescenceThicknessMap,he=X&&!!M.sheenColorMap,Re=X&&!!M.sheenRoughnessMap,Se=!!M.specularMap,ue=!!M.specularColorMap,ze=!!M.specularIntensityMap,B=j&&!!M.transmissionMap,ne=j&&!!M.thicknessMap,ae=!!M.gradientMap,ge=!!M.alphaMap,$=M.alphaTest>0,Z=!!M.alphaHash,ye=!!M.extensions,Le=ms;M.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Le=t.toneMapping);let gt={shaderID:se,shaderType:M.type,shaderName:M.name,vertexShader:rt,fragmentShader:dt,defines:M.defines,customVertexShaderID:je,customFragmentShaderID:Q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:ve,batchingColor:ve&&k._colorsTexture!==null,instancing:Te,instancingColor:Te&&k.instanceColor!==null,instancingMorph:Te&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:K===null?t.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Mi,alphaToCoverage:!!M.alphaToCoverage,map:Ve,matcap:$t,envMap:R,envMapMode:R&&J.mapping,envMapCubeUVHeight:V,aoMap:at,lightMap:Be,bumpMap:le,normalMap:re,displacementMap:h&&Je,emissiveMap:de,normalMapObjectSpace:re&&M.normalMapType===vA,normalMapTangentSpace:re&&M.normalMapType===gA,metalnessMap:Ie,roughnessMap:Ot,anisotropy:Lt,anisotropyMap:W,clearcoat:T,clearcoatMap:Ee,clearcoatNormalMap:ie,clearcoatRoughnessMap:_e,dispersion:A,iridescence:P,iridescenceMap:Ae,iridescenceThicknessMap:te,sheen:X,sheenColorMap:he,sheenRoughnessMap:Re,specularMap:Se,specularColorMap:ue,specularIntensityMap:ze,transmission:j,transmissionMap:B,thicknessMap:ne,gradientMap:ae,opaque:M.transparent===!1&&M.blending===Fr&&M.alphaToCoverage===!1,alphaMap:ge,alphaTest:$,alphaHash:Z,combine:M.combine,mapUv:Ve&&_(M.map.channel),aoMapUv:at&&_(M.aoMap.channel),lightMapUv:Be&&_(M.lightMap.channel),bumpMapUv:le&&_(M.bumpMap.channel),normalMapUv:re&&_(M.normalMap.channel),displacementMapUv:Je&&_(M.displacementMap.channel),emissiveMapUv:de&&_(M.emissiveMap.channel),metalnessMapUv:Ie&&_(M.metalnessMap.channel),roughnessMapUv:Ot&&_(M.roughnessMap.channel),anisotropyMapUv:W&&_(M.anisotropyMap.channel),clearcoatMapUv:Ee&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:ie&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:te&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:he&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Re&&_(M.sheenRoughnessMap.channel),specularMapUv:Se&&_(M.specularMap.channel),specularColorMapUv:ue&&_(M.specularColorMap.channel),specularIntensityMapUv:ze&&_(M.specularIntensityMap.channel),transmissionMapUv:B&&_(M.transmissionMap.channel),thicknessMapUv:ne&&_(M.thicknessMap.channel),alphaMapUv:ge&&_(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(re||Lt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!O.attributes.uv&&(Ve||ge),fog:!!Y,useFog:M.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:oe,skinning:k.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:He,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:Le,decodeVideoTexture:Ve&&M.map.isVideoTexture===!0&&$e.getTransfer(M.map.colorSpace)===ct,decodeVideoTextureEmissive:de&&M.emissiveMap.isVideoTexture===!0&&$e.getTransfer(M.emissiveMap.colorSpace)===ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Mn,flipSided:M.side===Wt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ye&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&M.extensions.multiDraw===!0||ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return gt.vertexUv1s=c.has(1),gt.vertexUv2s=c.has(2),gt.vertexUv3s=c.has(3),c.clear(),gt}function u(M){let E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(let D in M.defines)E.push(D),E.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(g(E,M),v(E,M),E.push(t.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function g(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function v(M,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),E.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),M.push(o.mask)}function y(M){let E=x[M.type],D;if(E){let G=Hi[E];D=CA.clone(G.uniforms)}else D=M.uniforms;return D}function b(M,E){let D;for(let G=0,k=f.length;G<k;G++){let Y=f[G];if(Y.cacheKey===E){D=Y,++D.usedTimes;break}}return D===void 0&&(D=new n2(t,E,M,r),f.push(D)),D}function C(M){if(--M.usedTimes===0){let E=f.indexOf(M);f[E]=f[f.length-1],f.pop(),M.destroy()}}function w(M){l.remove(M)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:y,acquireProgram:b,releaseProgram:C,releaseShaderCache:w,programs:f,dispose:U}}function r2(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function s(a,o,l){t.get(a)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function a2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function KA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function JA(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function a(d,h,p,x,_,m){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:h,material:p,groupOrder:x,renderOrder:d.renderOrder,z:_,group:m},t[e]=u):(u.id=d.id,u.object=d,u.geometry=h,u.material=p,u.groupOrder=x,u.renderOrder=d.renderOrder,u.z=_,u.group=m),e++,u}function o(d,h,p,x,_,m){let u=a(d,h,p,x,_,m);p.transmission>0?i.push(u):p.transparent===!0?s.push(u):n.push(u)}function l(d,h,p,x,_,m){let u=a(d,h,p,x,_,m);p.transmission>0?i.unshift(u):p.transparent===!0?s.unshift(u):n.unshift(u)}function c(d,h){n.length>1&&n.sort(d||a2),i.length>1&&i.sort(h||KA),s.length>1&&s.sort(h||KA)}function f(){for(let d=e,h=t.length;d<h;d++){let p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:f,sort:c}}function o2(){let t=new WeakMap;function e(i,s){let r=t.get(i),a;return r===void 0?(a=new JA,t.set(i,[a])):s>=r.length?(a=new JA,r.push(a)):a=r[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function l2(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new Ze};break;case"SpotLight":n={position:new z,direction:new z,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function c2(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var u2=0;function f2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function h2(t){let e=new l2,n=c2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);let s=new z,r=new qt,a=new qt;function o(c){let f=0,d=0,h=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,x=0,_=0,m=0,u=0,g=0,v=0,y=0,b=0,C=0,w=0;c.sort(f2);for(let M=0,E=c.length;M<E;M++){let D=c[M],G=D.color,k=D.intensity,Y=D.distance,O=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=G.r*k,d+=G.g*k,h+=G.b*k;else if(D.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(D.sh.coefficients[N],k);w++}else if(D.isDirectionalLight){let N=e.get(D);if(N.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let J=D.shadow,V=n.get(D);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=O,i.directionalShadowMatrix[p]=D.shadow.matrix,g++}i.directional[p]=N,p++}else if(D.isSpotLight){let N=e.get(D);N.position.setFromMatrixPosition(D.matrixWorld),N.color.copy(G).multiplyScalar(k),N.distance=Y,N.coneCos=Math.cos(D.angle),N.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),N.decay=D.decay,i.spot[_]=N;let J=D.shadow;if(D.map&&(i.spotLightMap[b]=D.map,b++,J.updateMatrices(D),D.castShadow&&C++),i.spotLightMatrix[_]=J.matrix,D.castShadow){let V=n.get(D);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=O,y++}_++}else if(D.isRectAreaLight){let N=e.get(D);N.color.copy(G).multiplyScalar(k),N.halfWidth.set(D.width*.5,0,0),N.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=N,m++}else if(D.isPointLight){let N=e.get(D);if(N.color.copy(D.color).multiplyScalar(D.intensity),N.distance=D.distance,N.decay=D.decay,D.castShadow){let J=D.shadow,V=n.get(D);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,V.shadowCameraNear=J.camera.near,V.shadowCameraFar=J.camera.far,i.pointShadow[x]=V,i.pointShadowMap[x]=O,i.pointShadowMatrix[x]=D.shadow.matrix,v++}i.point[x]=N,x++}else if(D.isHemisphereLight){let N=e.get(D);N.skyColor.copy(D.color).multiplyScalar(k),N.groundColor.copy(D.groundColor).multiplyScalar(k),i.hemi[u]=N,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;let U=i.hash;(U.directionalLength!==p||U.pointLength!==x||U.spotLength!==_||U.rectAreaLength!==m||U.hemiLength!==u||U.numDirectionalShadows!==g||U.numPointShadows!==v||U.numSpotShadows!==y||U.numSpotMaps!==b||U.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=x,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+b-C,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=w,U.directionalLength=p,U.pointLength=x,U.spotLength=_,U.rectAreaLength=m,U.hemiLength=u,U.numDirectionalShadows=g,U.numPointShadows=v,U.numSpotShadows=y,U.numSpotMaps=b,U.numLightProbes=w,i.version=u2++)}function l(c,f){let d=0,h=0,p=0,x=0,_=0,m=f.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){let v=c[u];if(v.isDirectionalLight){let y=i.directional[d];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(v.isSpotLight){let y=i.spot[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let y=i.rectArea[x];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){let y=i.point[h];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),h++}else if(v.isHemisphereLight){let y=i.hemi[_];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function jA(t){let e=new h2(t),n=[],i=[];function s(f){c.camera=f,n.length=0,i.length=0}function r(f){n.push(f)}function a(f){i.push(f)}function o(){e.setup(n)}function l(f){e.setupView(n,f)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function d2(t){let e=new WeakMap;function n(s,r=0){let a=e.get(s),o;return a===void 0?(o=new jA(t),e.set(s,[o])):r>=a.length?(o=new jA(t),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:n,dispose:i}}var p2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function g2(t,e,n){let i=new Ol,s=new Oe,r=new Oe,a=new It,o=new lf({depthPacking:mA}),l=new cf,c={},f=n.maxTextureSize,d={[Si]:Wt,[Wt]:Si,[Mn]:Mn},h=new Kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:p2,fragmentShader:m2}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let x=new Oi;x.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new gn(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lm;let u=this.type;this.render=function(C,w,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let M=t.getRenderTarget(),E=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),G=t.state;G.setBlending(Zn),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let k=u!==Fi&&this.type===Fi,Y=u===Fi&&this.type!==Fi;for(let O=0,N=C.length;O<N;O++){let J=C[O],V=J.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let se=V.getFrameExtents();if(s.multiply(se),r.copy(V.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/se.x),s.x=r.x*se.x,V.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/se.y),s.y=r.y*se.y,V.mapSize.y=r.y)),V.map===null||k===!0||Y===!0){let Me=this.type!==Fi?{minFilter:fi,magFilter:fi}:{};V.map!==null&&V.map.dispose(),V.map=new Zt(s.x,s.y,Me),V.map.texture.name=J.name+".shadowMap",V.camera.updateProjectionMatrix()}t.setRenderTarget(V.map),t.clear();let pe=V.getViewportCount();for(let Me=0;Me<pe;Me++){let He=V.getViewport(Me);a.set(r.x*He.x,r.y*He.y,r.x*He.z,r.y*He.w),G.viewport(a),V.updateMatrices(J,Me),i=V.getFrustum(),y(w,U,V.camera,J,this.type)}V.isPointLightShadow!==!0&&this.type===Fi&&g(V,U),V.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(M,E,D)};function g(C,w){let U=e.update(_);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Zt(s.x,s.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(w,null,U,h,_,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(w,null,U,p,_,null)}function v(C,w,U,M){let E=null,D=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)E=D;else if(E=U.isPointLight===!0?l:o,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let G=E.uuid,k=w.uuid,Y=c[G];Y===void 0&&(Y={},c[G]=Y);let O=Y[k];O===void 0&&(O=E.clone(),Y[k]=O,w.addEventListener("dispose",b)),E=O}if(E.visible=w.visible,E.wireframe=w.wireframe,M===Fi?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:d[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,U.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let G=t.properties.get(E);G.light=U}return E}function y(C,w,U,M,E){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&E===Fi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);let k=e.update(C),Y=C.material;if(Array.isArray(Y)){let O=k.groups;for(let N=0,J=O.length;N<J;N++){let V=O[N],se=Y[V.materialIndex];if(se&&se.visible){let pe=v(C,se,M,E);C.onBeforeShadow(t,C,w,U,k,pe,V),t.renderBufferDirect(U,null,k,pe,C,V),C.onAfterShadow(t,C,w,U,k,pe,V)}}}else if(Y.visible){let O=v(C,Y,M,E);C.onBeforeShadow(t,C,w,U,k,O,null),t.renderBufferDirect(U,null,k,O,C,null),C.onAfterShadow(t,C,w,U,k,O,null)}}let G=C.children;for(let k=0,Y=G.length;k<Y;k++)y(G[k],w,U,M,E)}function b(C){C.target.removeEventListener("dispose",b);for(let U in c){let M=c[U],E=C.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}var v2={[_f]:fo,[Af]:Ef,[Sf]:Tf,[zr]:Mf,[fo]:_f,[Ef]:Af,[Tf]:Sf,[Mf]:zr};function x2(t,e){function n(){let B=!1,ne=new It,ae=null,ge=new It(0,0,0,0);return{setMask:function($){ae!==$&&!B&&(t.colorMask($,$,$,$),ae=$)},setLocked:function($){B=$},setClear:function($,Z,ye,Le,gt){gt===!0&&($*=Le,Z*=Le,ye*=Le),ne.set($,Z,ye,Le),ge.equals(ne)===!1&&(t.clearColor($,Z,ye,Le),ge.copy(ne))},reset:function(){B=!1,ae=null,ge.set(-1,0,0,0)}}}function i(){let B=!1,ne=!1,ae=null,ge=null,$=null;return{setReversed:function(Z){if(ne!==Z){let ye=e.get("EXT_clip_control");Z?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),ne=Z;let Le=$;$=null,this.setClear(Le)}},getReversed:function(){return ne},setTest:function(Z){Z?K(t.DEPTH_TEST):oe(t.DEPTH_TEST)},setMask:function(Z){ae!==Z&&!B&&(t.depthMask(Z),ae=Z)},setFunc:function(Z){if(ne&&(Z=v2[Z]),ge!==Z){switch(Z){case _f:t.depthFunc(t.NEVER);break;case fo:t.depthFunc(t.ALWAYS);break;case Af:t.depthFunc(t.LESS);break;case zr:t.depthFunc(t.LEQUAL);break;case Sf:t.depthFunc(t.EQUAL);break;case Mf:t.depthFunc(t.GEQUAL);break;case Ef:t.depthFunc(t.GREATER);break;case Tf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ge=Z}},setLocked:function(Z){B=Z},setClear:function(Z){$!==Z&&(ne&&(Z=1-Z),t.clearDepth(Z),$=Z)},reset:function(){B=!1,ae=null,ge=null,$=null,ne=!1}}}function s(){let B=!1,ne=null,ae=null,ge=null,$=null,Z=null,ye=null,Le=null,gt=null;return{setTest:function(st){B||(st?K(t.STENCIL_TEST):oe(t.STENCIL_TEST))},setMask:function(st){ne!==st&&!B&&(t.stencilMask(st),ne=st)},setFunc:function(st,Gi,Ti){(ae!==st||ge!==Gi||$!==Ti)&&(t.stencilFunc(st,Gi,Ti),ae=st,ge=Gi,$=Ti)},setOp:function(st,Gi,Ti){(Z!==st||ye!==Gi||Le!==Ti)&&(t.stencilOp(st,Gi,Ti),Z=st,ye=Gi,Le=Ti)},setLocked:function(st){B=st},setClear:function(st){gt!==st&&(t.clearStencil(st),gt=st)},reset:function(){B=!1,ne=null,ae=null,ge=null,$=null,Z=null,ye=null,Le=null,gt=null}}}let r=new n,a=new i,o=new s,l=new WeakMap,c=new WeakMap,f={},d={},h=new WeakMap,p=[],x=null,_=!1,m=null,u=null,g=null,v=null,y=null,b=null,C=null,w=new Ze(0,0,0),U=0,M=!1,E=null,D=null,G=null,k=null,Y=null,O=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,J=0,V=t.getParameter(t.VERSION);V.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(V)[1]),N=J>=1):V.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),N=J>=2);let se=null,pe={},Me=t.getParameter(t.SCISSOR_BOX),He=t.getParameter(t.VIEWPORT),rt=new It().fromArray(Me),dt=new It().fromArray(He);function je(B,ne,ae,ge){let $=new Uint8Array(4),Z=t.createTexture();t.bindTexture(B,Z),t.texParameteri(B,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(B,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ye=0;ye<ae;ye++)B===t.TEXTURE_3D||B===t.TEXTURE_2D_ARRAY?t.texImage3D(ne,0,t.RGBA,1,1,ge,0,t.RGBA,t.UNSIGNED_BYTE,$):t.texImage2D(ne+ye,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,$);return Z}let Q={};Q[t.TEXTURE_2D]=je(t.TEXTURE_2D,t.TEXTURE_2D,1),Q[t.TEXTURE_CUBE_MAP]=je(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[t.TEXTURE_2D_ARRAY]=je(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Q[t.TEXTURE_3D]=je(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(t.DEPTH_TEST),a.setFunc(zr),le(!1),re(Im),K(t.CULL_FACE),at(Zn);function K(B){f[B]!==!0&&(t.enable(B),f[B]=!0)}function oe(B){f[B]!==!1&&(t.disable(B),f[B]=!1)}function Te(B,ne){return d[B]!==ne?(t.bindFramebuffer(B,ne),d[B]=ne,B===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ne),B===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ne),!0):!1}function ve(B,ne){let ae=p,ge=!1;if(B){ae=h.get(ne),ae===void 0&&(ae=[],h.set(ne,ae));let $=B.textures;if(ae.length!==$.length||ae[0]!==t.COLOR_ATTACHMENT0){for(let Z=0,ye=$.length;Z<ye;Z++)ae[Z]=t.COLOR_ATTACHMENT0+Z;ae.length=$.length,ge=!0}}else ae[0]!==t.BACK&&(ae[0]=t.BACK,ge=!0);ge&&t.drawBuffers(ae)}function Ve(B){return x!==B?(t.useProgram(B),x=B,!0):!1}let $t={[js]:t.FUNC_ADD,[V_]:t.FUNC_SUBTRACT,[k_]:t.FUNC_REVERSE_SUBTRACT};$t[W_]=t.MIN,$t[X_]=t.MAX;let R={[Y_]:t.ZERO,[q_]:t.ONE,[Q_]:t.SRC_COLOR,[Zu]:t.SRC_ALPHA,[eA]:t.SRC_ALPHA_SATURATE,[j_]:t.DST_COLOR,[K_]:t.DST_ALPHA,[Z_]:t.ONE_MINUS_SRC_COLOR,[Ku]:t.ONE_MINUS_SRC_ALPHA,[$_]:t.ONE_MINUS_DST_COLOR,[J_]:t.ONE_MINUS_DST_ALPHA,[tA]:t.CONSTANT_COLOR,[nA]:t.ONE_MINUS_CONSTANT_COLOR,[iA]:t.CONSTANT_ALPHA,[sA]:t.ONE_MINUS_CONSTANT_ALPHA};function at(B,ne,ae,ge,$,Z,ye,Le,gt,st){if(B===Zn){_===!0&&(oe(t.BLEND),_=!1);return}if(_===!1&&(K(t.BLEND),_=!0),B!==G_){if(B!==m||st!==M){if((u!==js||y!==js)&&(t.blendEquation(t.FUNC_ADD),u=js,y=js),st)switch(B){case Fr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Pm:t.blendFunc(t.ONE,t.ONE);break;case Nm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Om:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Fr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Pm:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Nm:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Om:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}g=null,v=null,b=null,C=null,w.set(0,0,0),U=0,m=B,M=st}return}$=$||ne,Z=Z||ae,ye=ye||ge,(ne!==u||$!==y)&&(t.blendEquationSeparate($t[ne],$t[$]),u=ne,y=$),(ae!==g||ge!==v||Z!==b||ye!==C)&&(t.blendFuncSeparate(R[ae],R[ge],R[Z],R[ye]),g=ae,v=ge,b=Z,C=ye),(Le.equals(w)===!1||gt!==U)&&(t.blendColor(Le.r,Le.g,Le.b,gt),w.copy(Le),U=gt),m=B,M=!1}function Be(B,ne){B.side===Mn?oe(t.CULL_FACE):K(t.CULL_FACE);let ae=B.side===Wt;ne&&(ae=!ae),le(ae),B.blending===Fr&&B.transparent===!1?at(Zn):at(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);let ge=B.stencilWrite;o.setTest(ge),ge&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),de(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?K(t.SAMPLE_ALPHA_TO_COVERAGE):oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function le(B){E!==B&&(B?t.frontFace(t.CW):t.frontFace(t.CCW),E=B)}function re(B){B!==F_?(K(t.CULL_FACE),B!==D&&(B===Im?t.cullFace(t.BACK):B===z_?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):oe(t.CULL_FACE),D=B}function Je(B){B!==G&&(N&&t.lineWidth(B),G=B)}function de(B,ne,ae){B?(K(t.POLYGON_OFFSET_FILL),(k!==ne||Y!==ae)&&(t.polygonOffset(ne,ae),k=ne,Y=ae)):oe(t.POLYGON_OFFSET_FILL)}function Ie(B){B?K(t.SCISSOR_TEST):oe(t.SCISSOR_TEST)}function Ot(B){B===void 0&&(B=t.TEXTURE0+O-1),se!==B&&(t.activeTexture(B),se=B)}function Lt(B,ne,ae){ae===void 0&&(se===null?ae=t.TEXTURE0+O-1:ae=se);let ge=pe[ae];ge===void 0&&(ge={type:void 0,texture:void 0},pe[ae]=ge),(ge.type!==B||ge.texture!==ne)&&(se!==ae&&(t.activeTexture(ae),se=ae),t.bindTexture(B,ne||Q[B]),ge.type=B,ge.texture=ne)}function T(){let B=pe[se];B!==void 0&&B.type!==void 0&&(t.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function A(){try{t.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function P(){try{t.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function X(){try{t.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function j(){try{t.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function W(){try{t.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ee(){try{t.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ie(){try{t.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _e(){try{t.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ae(){try{t.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function te(){try{t.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(B){rt.equals(B)===!1&&(t.scissor(B.x,B.y,B.z,B.w),rt.copy(B))}function Re(B){dt.equals(B)===!1&&(t.viewport(B.x,B.y,B.z,B.w),dt.copy(B))}function Se(B,ne){let ae=c.get(ne);ae===void 0&&(ae=new WeakMap,c.set(ne,ae));let ge=ae.get(B);ge===void 0&&(ge=t.getUniformBlockIndex(ne,B.name),ae.set(B,ge))}function ue(B,ne){let ge=c.get(ne).get(B);l.get(ne)!==ge&&(t.uniformBlockBinding(ne,ge,B.__bindingPointIndex),l.set(ne,ge))}function ze(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},se=null,pe={},d={},h=new WeakMap,p=[],x=null,_=!1,m=null,u=null,g=null,v=null,y=null,b=null,C=null,w=new Ze(0,0,0),U=0,M=!1,E=null,D=null,G=null,k=null,Y=null,rt.set(0,0,t.canvas.width,t.canvas.height),dt.set(0,0,t.canvas.width,t.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:K,disable:oe,bindFramebuffer:Te,drawBuffers:ve,useProgram:Ve,setBlending:at,setMaterial:Be,setFlipSided:le,setCullFace:re,setLineWidth:Je,setPolygonOffset:de,setScissorTest:Ie,activeTexture:Ot,bindTexture:Lt,unbindTexture:T,compressedTexImage2D:A,compressedTexImage3D:P,texImage2D:Ae,texImage3D:te,updateUBOMapping:Se,uniformBlockBinding:ue,texStorage2D:ie,texStorage3D:_e,texSubImage2D:X,texSubImage3D:j,compressedTexSubImage2D:W,compressedTexSubImage3D:Ee,scissor:he,viewport:Re,reset:ze}}function y2(t,e,n,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Oe,f=new WeakMap,d,h=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(T,A){return p?new OffscreenCanvas(T,A):Rl("canvas")}function _(T,A,P){let X=1,j=Lt(T);if((j.width>P||j.height>P)&&(X=P/Math.max(j.width,j.height)),X<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let W=Math.floor(X*j.width),Ee=Math.floor(X*j.height);d===void 0&&(d=x(W,Ee));let ie=A?x(W,Ee):d;return ie.width=W,ie.height=Ee,ie.getContext("2d").drawImage(T,0,0,W,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+W+"x"+Ee+")."),ie}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function m(T){return T.generateMipmaps}function u(T){t.generateMipmap(T)}function g(T){return T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?t.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function v(T,A,P,X,j=!1){if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let W=A;if(A===t.RED&&(P===t.FLOAT&&(W=t.R32F),P===t.HALF_FLOAT&&(W=t.R16F),P===t.UNSIGNED_BYTE&&(W=t.R8)),A===t.RED_INTEGER&&(P===t.UNSIGNED_BYTE&&(W=t.R8UI),P===t.UNSIGNED_SHORT&&(W=t.R16UI),P===t.UNSIGNED_INT&&(W=t.R32UI),P===t.BYTE&&(W=t.R8I),P===t.SHORT&&(W=t.R16I),P===t.INT&&(W=t.R32I)),A===t.RG&&(P===t.FLOAT&&(W=t.RG32F),P===t.HALF_FLOAT&&(W=t.RG16F),P===t.UNSIGNED_BYTE&&(W=t.RG8)),A===t.RG_INTEGER&&(P===t.UNSIGNED_BYTE&&(W=t.RG8UI),P===t.UNSIGNED_SHORT&&(W=t.RG16UI),P===t.UNSIGNED_INT&&(W=t.RG32UI),P===t.BYTE&&(W=t.RG8I),P===t.SHORT&&(W=t.RG16I),P===t.INT&&(W=t.RG32I)),A===t.RGB_INTEGER&&(P===t.UNSIGNED_BYTE&&(W=t.RGB8UI),P===t.UNSIGNED_SHORT&&(W=t.RGB16UI),P===t.UNSIGNED_INT&&(W=t.RGB32UI),P===t.BYTE&&(W=t.RGB8I),P===t.SHORT&&(W=t.RGB16I),P===t.INT&&(W=t.RGB32I)),A===t.RGBA_INTEGER&&(P===t.UNSIGNED_BYTE&&(W=t.RGBA8UI),P===t.UNSIGNED_SHORT&&(W=t.RGBA16UI),P===t.UNSIGNED_INT&&(W=t.RGBA32UI),P===t.BYTE&&(W=t.RGBA8I),P===t.SHORT&&(W=t.RGBA16I),P===t.INT&&(W=t.RGBA32I)),A===t.RGB&&(P===t.UNSIGNED_INT_5_9_9_9_REV&&(W=t.RGB9_E5),P===t.UNSIGNED_INT_10F_11F_11F_REV&&(W=t.R11F_G11F_B10F)),A===t.RGBA){let Ee=j?wl:$e.getTransfer(X);P===t.FLOAT&&(W=t.RGBA32F),P===t.HALF_FLOAT&&(W=t.RGBA16F),P===t.UNSIGNED_BYTE&&(W=Ee===ct?t.SRGB8_ALPHA8:t.RGBA8),P===t.UNSIGNED_SHORT_4_4_4_4&&(W=t.RGBA4),P===t.UNSIGNED_SHORT_5_5_5_1&&(W=t.RGB5_A1)}return(W===t.R16F||W===t.R32F||W===t.RG16F||W===t.RG32F||W===t.RGBA16F||W===t.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function y(T,A){let P;return T?A===null||A===rr||A===ar?P=t.DEPTH24_STENCIL8:A===di?P=t.DEPTH32F_STENCIL8:A===ho&&(P=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===rr||A===ar?P=t.DEPTH_COMPONENT24:A===di?P=t.DEPTH_COMPONENT32F:A===ho&&(P=t.DEPTH_COMPONENT16),P}function b(T,A){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==fi&&T.minFilter!==kt?Math.log2(Math.max(A.width,A.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?A.mipmaps.length:1}function C(T){let A=T.target;A.removeEventListener("dispose",C),U(A),A.isVideoTexture&&f.delete(A)}function w(T){let A=T.target;A.removeEventListener("dispose",w),E(A)}function U(T){let A=i.get(T);if(A.__webglInit===void 0)return;let P=T.source,X=h.get(P);if(X){let j=X[A.__cacheKey];j.usedTimes--,j.usedTimes===0&&M(T),Object.keys(X).length===0&&h.delete(P)}i.remove(T)}function M(T){let A=i.get(T);t.deleteTexture(A.__webglTexture);let P=T.source,X=h.get(P);delete X[A.__cacheKey],a.memory.textures--}function E(T){let A=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(A.__webglFramebuffer[X]))for(let j=0;j<A.__webglFramebuffer[X].length;j++)t.deleteFramebuffer(A.__webglFramebuffer[X][j]);else t.deleteFramebuffer(A.__webglFramebuffer[X]);A.__webglDepthbuffer&&t.deleteRenderbuffer(A.__webglDepthbuffer[X])}else{if(Array.isArray(A.__webglFramebuffer))for(let X=0;X<A.__webglFramebuffer.length;X++)t.deleteFramebuffer(A.__webglFramebuffer[X]);else t.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&t.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&t.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let X=0;X<A.__webglColorRenderbuffer.length;X++)A.__webglColorRenderbuffer[X]&&t.deleteRenderbuffer(A.__webglColorRenderbuffer[X]);A.__webglDepthRenderbuffer&&t.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let P=T.textures;for(let X=0,j=P.length;X<j;X++){let W=i.get(P[X]);W.__webglTexture&&(t.deleteTexture(W.__webglTexture),a.memory.textures--),i.remove(P[X])}i.remove(T)}let D=0;function G(){D=0}function k(){let T=D;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),D+=1,T}function Y(T){let A=[];return A.push(T.wrapS),A.push(T.wrapT),A.push(T.wrapR||0),A.push(T.magFilter),A.push(T.minFilter),A.push(T.anisotropy),A.push(T.internalFormat),A.push(T.format),A.push(T.type),A.push(T.generateMipmaps),A.push(T.premultiplyAlpha),A.push(T.flipY),A.push(T.unpackAlignment),A.push(T.colorSpace),A.join()}function O(T,A){let P=i.get(T);if(T.isVideoTexture&&Ie(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&P.__version!==T.version){let X=T.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(P,T,A);return}}else T.isExternalTexture&&(P.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,P.__webglTexture,t.TEXTURE0+A)}function N(T,A){let P=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&P.__version!==T.version){Q(P,T,A);return}n.bindTexture(t.TEXTURE_2D_ARRAY,P.__webglTexture,t.TEXTURE0+A)}function J(T,A){let P=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&P.__version!==T.version){Q(P,T,A);return}n.bindTexture(t.TEXTURE_3D,P.__webglTexture,t.TEXTURE0+A)}function V(T,A){let P=i.get(T);if(T.version>0&&P.__version!==T.version){K(P,T,A);return}n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+A)}let se={[Ju]:t.REPEAT,[Js]:t.CLAMP_TO_EDGE,[ju]:t.MIRRORED_REPEAT},pe={[fi]:t.NEAREST,[pA]:t.NEAREST_MIPMAP_NEAREST,[Vl]:t.NEAREST_MIPMAP_LINEAR,[kt]:t.LINEAR,[Cf]:t.LINEAR_MIPMAP_NEAREST,[sr]:t.LINEAR_MIPMAP_LINEAR},Me={[xA]:t.NEVER,[EA]:t.ALWAYS,[yA]:t.LESS,[Qm]:t.LEQUAL,[_A]:t.EQUAL,[MA]:t.GEQUAL,[AA]:t.GREATER,[SA]:t.NOTEQUAL};function He(T,A){if(A.type===di&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===kt||A.magFilter===Cf||A.magFilter===Vl||A.magFilter===sr||A.minFilter===kt||A.minFilter===Cf||A.minFilter===Vl||A.minFilter===sr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,se[A.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,se[A.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,se[A.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,pe[A.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,pe[A.minFilter]),A.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,Me[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===fi||A.minFilter!==Vl&&A.minFilter!==sr||A.type===di&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){let P=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function rt(T,A){let P=!1;T.__webglInit===void 0&&(T.__webglInit=!0,A.addEventListener("dispose",C));let X=A.source,j=h.get(X);j===void 0&&(j={},h.set(X,j));let W=Y(A);if(W!==T.__cacheKey){j[W]===void 0&&(j[W]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,P=!0),j[W].usedTimes++;let Ee=j[T.__cacheKey];Ee!==void 0&&(j[T.__cacheKey].usedTimes--,Ee.usedTimes===0&&M(A)),T.__cacheKey=W,T.__webglTexture=j[W].texture}return P}function dt(T,A,P){return Math.floor(Math.floor(T/P)/A)}function je(T,A,P,X){let W=T.updateRanges;if(W.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,A.width,A.height,P,X,A.data);else{W.sort((te,he)=>te.start-he.start);let Ee=0;for(let te=1;te<W.length;te++){let he=W[Ee],Re=W[te],Se=he.start+he.count,ue=dt(Re.start,A.width,4),ze=dt(he.start,A.width,4);Re.start<=Se+1&&ue===ze&&dt(Re.start+Re.count-1,A.width,4)===ue?he.count=Math.max(he.count,Re.start+Re.count-he.start):(++Ee,W[Ee]=Re)}W.length=Ee+1;let ie=t.getParameter(t.UNPACK_ROW_LENGTH),_e=t.getParameter(t.UNPACK_SKIP_PIXELS),Ae=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,A.width);for(let te=0,he=W.length;te<he;te++){let Re=W[te],Se=Math.floor(Re.start/4),ue=Math.ceil(Re.count/4),ze=Se%A.width,B=Math.floor(Se/A.width),ne=ue,ae=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(t.UNPACK_SKIP_ROWS,B),n.texSubImage2D(t.TEXTURE_2D,0,ze,B,ne,ae,P,X,A.data)}T.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ie),t.pixelStorei(t.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ae)}}function Q(T,A,P){let X=t.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(X=t.TEXTURE_2D_ARRAY),A.isData3DTexture&&(X=t.TEXTURE_3D);let j=rt(T,A),W=A.source;n.bindTexture(X,T.__webglTexture,t.TEXTURE0+P);let Ee=i.get(W);if(W.version!==Ee.__version||j===!0){n.activeTexture(t.TEXTURE0+P);let ie=$e.getPrimaries($e.workingColorSpace),_e=A.colorSpace===Kn?null:$e.getPrimaries(A.colorSpace),Ae=A.colorSpace===Kn||ie===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let te=_(A.image,!1,s.maxTextureSize);te=Ot(A,te);let he=r.convert(A.format,A.colorSpace),Re=r.convert(A.type),Se=v(A.internalFormat,he,Re,A.colorSpace,A.isVideoTexture);He(X,A);let ue,ze=A.mipmaps,B=A.isVideoTexture!==!0,ne=Ee.__version===void 0||j===!0,ae=W.dataReady,ge=b(A,te);if(A.isDepthTexture)Se=y(A.format===or,A.type),ne&&(B?n.texStorage2D(t.TEXTURE_2D,1,Se,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,Se,te.width,te.height,0,he,Re,null));else if(A.isDataTexture)if(ze.length>0){B&&ne&&n.texStorage2D(t.TEXTURE_2D,ge,Se,ze[0].width,ze[0].height);for(let $=0,Z=ze.length;$<Z;$++)ue=ze[$],B?ae&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,ue.width,ue.height,he,Re,ue.data):n.texImage2D(t.TEXTURE_2D,$,Se,ue.width,ue.height,0,he,Re,ue.data);A.generateMipmaps=!1}else B?(ne&&n.texStorage2D(t.TEXTURE_2D,ge,Se,te.width,te.height),ae&&je(A,te,he,Re)):n.texImage2D(t.TEXTURE_2D,0,Se,te.width,te.height,0,he,Re,te.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){B&&ne&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,Se,ze[0].width,ze[0].height,te.depth);for(let $=0,Z=ze.length;$<Z;$++)if(ue=ze[$],A.format!==pi)if(he!==null)if(B){if(ae)if(A.layerUpdates.size>0){let ye=$m(ue.width,ue.height,A.format,A.type);for(let Le of A.layerUpdates){let gt=ue.data.subarray(Le*ye/ue.data.BYTES_PER_ELEMENT,(Le+1)*ye/ue.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,Le,ue.width,ue.height,1,he,gt)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,ue.width,ue.height,te.depth,he,ue.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,$,Se,ue.width,ue.height,te.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?ae&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,ue.width,ue.height,te.depth,he,Re,ue.data):n.texImage3D(t.TEXTURE_2D_ARRAY,$,Se,ue.width,ue.height,te.depth,0,he,Re,ue.data)}else{B&&ne&&n.texStorage2D(t.TEXTURE_2D,ge,Se,ze[0].width,ze[0].height);for(let $=0,Z=ze.length;$<Z;$++)ue=ze[$],A.format!==pi?he!==null?B?ae&&n.compressedTexSubImage2D(t.TEXTURE_2D,$,0,0,ue.width,ue.height,he,ue.data):n.compressedTexImage2D(t.TEXTURE_2D,$,Se,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?ae&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,ue.width,ue.height,he,Re,ue.data):n.texImage2D(t.TEXTURE_2D,$,Se,ue.width,ue.height,0,he,Re,ue.data)}else if(A.isDataArrayTexture)if(B){if(ne&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,Se,te.width,te.height,te.depth),ae)if(A.layerUpdates.size>0){let $=$m(te.width,te.height,A.format,A.type);for(let Z of A.layerUpdates){let ye=te.data.subarray(Z*$/te.data.BYTES_PER_ELEMENT,(Z+1)*$/te.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Z,te.width,te.height,1,he,Re,ye)}A.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,he,Re,te.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Se,te.width,te.height,te.depth,0,he,Re,te.data);else if(A.isData3DTexture)B?(ne&&n.texStorage3D(t.TEXTURE_3D,ge,Se,te.width,te.height,te.depth),ae&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,he,Re,te.data)):n.texImage3D(t.TEXTURE_3D,0,Se,te.width,te.height,te.depth,0,he,Re,te.data);else if(A.isFramebufferTexture){if(ne)if(B)n.texStorage2D(t.TEXTURE_2D,ge,Se,te.width,te.height);else{let $=te.width,Z=te.height;for(let ye=0;ye<ge;ye++)n.texImage2D(t.TEXTURE_2D,ye,Se,$,Z,0,he,Re,null),$>>=1,Z>>=1}}else if(ze.length>0){if(B&&ne){let $=Lt(ze[0]);n.texStorage2D(t.TEXTURE_2D,ge,Se,$.width,$.height)}for(let $=0,Z=ze.length;$<Z;$++)ue=ze[$],B?ae&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,he,Re,ue):n.texImage2D(t.TEXTURE_2D,$,Se,he,Re,ue);A.generateMipmaps=!1}else if(B){if(ne){let $=Lt(te);n.texStorage2D(t.TEXTURE_2D,ge,Se,$.width,$.height)}ae&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,he,Re,te)}else n.texImage2D(t.TEXTURE_2D,0,Se,he,Re,te);m(A)&&u(X),Ee.__version=W.version,A.onUpdate&&A.onUpdate(A)}T.__version=A.version}function K(T,A,P){if(A.image.length!==6)return;let X=rt(T,A),j=A.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+P);let W=i.get(j);if(j.version!==W.__version||X===!0){n.activeTexture(t.TEXTURE0+P);let Ee=$e.getPrimaries($e.workingColorSpace),ie=A.colorSpace===Kn?null:$e.getPrimaries(A.colorSpace),_e=A.colorSpace===Kn||Ee===ie?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let Ae=A.isCompressedTexture||A.image[0].isCompressedTexture,te=A.image[0]&&A.image[0].isDataTexture,he=[];for(let Z=0;Z<6;Z++)!Ae&&!te?he[Z]=_(A.image[Z],!0,s.maxCubemapSize):he[Z]=te?A.image[Z].image:A.image[Z],he[Z]=Ot(A,he[Z]);let Re=he[0],Se=r.convert(A.format,A.colorSpace),ue=r.convert(A.type),ze=v(A.internalFormat,Se,ue,A.colorSpace),B=A.isVideoTexture!==!0,ne=W.__version===void 0||X===!0,ae=j.dataReady,ge=b(A,Re);He(t.TEXTURE_CUBE_MAP,A);let $;if(Ae){B&&ne&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,ze,Re.width,Re.height);for(let Z=0;Z<6;Z++){$=he[Z].mipmaps;for(let ye=0;ye<$.length;ye++){let Le=$[ye];A.format!==pi?Se!==null?B?ae&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye,0,0,Le.width,Le.height,Se,Le.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye,ze,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye,0,0,Le.width,Le.height,Se,ue,Le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye,ze,Le.width,Le.height,0,Se,ue,Le.data)}}}else{if($=A.mipmaps,B&&ne){$.length>0&&ge++;let Z=Lt(he[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,ze,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(te){B?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,he[Z].width,he[Z].height,Se,ue,he[Z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ze,he[Z].width,he[Z].height,0,Se,ue,he[Z].data);for(let ye=0;ye<$.length;ye++){let gt=$[ye].image[Z].image;B?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye+1,0,0,gt.width,gt.height,Se,ue,gt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye+1,ze,gt.width,gt.height,0,Se,ue,gt.data)}}else{B?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Se,ue,he[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ze,Se,ue,he[Z]);for(let ye=0;ye<$.length;ye++){let Le=$[ye];B?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye+1,0,0,Se,ue,Le.image[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye+1,ze,Se,ue,Le.image[Z])}}}m(A)&&u(t.TEXTURE_CUBE_MAP),W.__version=j.version,A.onUpdate&&A.onUpdate(A)}T.__version=A.version}function oe(T,A,P,X,j,W){let Ee=r.convert(P.format,P.colorSpace),ie=r.convert(P.type),_e=v(P.internalFormat,Ee,ie,P.colorSpace),Ae=i.get(A),te=i.get(P);if(te.__renderTarget=A,!Ae.__hasExternalTextures){let he=Math.max(1,A.width>>W),Re=Math.max(1,A.height>>W);j===t.TEXTURE_3D||j===t.TEXTURE_2D_ARRAY?n.texImage3D(j,W,_e,he,Re,A.depth,0,Ee,ie,null):n.texImage2D(j,W,_e,he,Re,0,Ee,ie,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),de(A)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,X,j,te.__webglTexture,0,Je(A)):(j===t.TEXTURE_2D||j>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,X,j,te.__webglTexture,W),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Te(T,A,P){if(t.bindRenderbuffer(t.RENDERBUFFER,T),A.depthBuffer){let X=A.depthTexture,j=X&&X.isDepthTexture?X.type:null,W=y(A.stencilBuffer,j),Ee=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=Je(A);de(A)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,W,A.width,A.height):P?t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,W,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,W,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ee,t.RENDERBUFFER,T)}else{let X=A.textures;for(let j=0;j<X.length;j++){let W=X[j],Ee=r.convert(W.format,W.colorSpace),ie=r.convert(W.type),_e=v(W.internalFormat,Ee,ie,W.colorSpace),Ae=Je(A);P&&de(A)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,_e,A.width,A.height):de(A)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ae,_e,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,_e,A.width,A.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ve(T,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let X=i.get(A.depthTexture);X.__renderTarget=A,(!X.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),O(A.depthTexture,0);let j=X.__webglTexture,W=Je(A);if(A.depthTexture.format===ro)de(A)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,j,0,W):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,j,0);else if(A.depthTexture.format===or)de(A)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,j,0,W):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Ve(T){let A=i.get(T),P=T.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==T.depthTexture){let X=T.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),X){let j=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,X.removeEventListener("dispose",j)};X.addEventListener("dispose",j),A.__depthDisposeCallback=j}A.__boundDepthTexture=X}if(T.depthTexture&&!A.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");let X=T.texture.mipmaps;X&&X.length>0?ve(A.__webglFramebuffer[0],T):ve(A.__webglFramebuffer,T)}else if(P){A.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer[X]),A.__webglDepthbuffer[X]===void 0)A.__webglDepthbuffer[X]=t.createRenderbuffer(),Te(A.__webglDepthbuffer[X],T,!1);else{let j=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,W=A.__webglDepthbuffer[X];t.bindRenderbuffer(t.RENDERBUFFER,W),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,W)}}else{let X=T.texture.mipmaps;if(X&&X.length>0?n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=t.createRenderbuffer(),Te(A.__webglDepthbuffer,T,!1);else{let j=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,W=A.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,W),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,W)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function $t(T,A,P){let X=i.get(T);A!==void 0&&oe(X.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),P!==void 0&&Ve(T)}function R(T){let A=T.texture,P=i.get(T),X=i.get(A);T.addEventListener("dispose",w);let j=T.textures,W=T.isWebGLCubeRenderTarget===!0,Ee=j.length>1;if(Ee||(X.__webglTexture===void 0&&(X.__webglTexture=t.createTexture()),X.__version=A.version,a.memory.textures++),W){P.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(A.mipmaps&&A.mipmaps.length>0){P.__webglFramebuffer[ie]=[];for(let _e=0;_e<A.mipmaps.length;_e++)P.__webglFramebuffer[ie][_e]=t.createFramebuffer()}else P.__webglFramebuffer[ie]=t.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){P.__webglFramebuffer=[];for(let ie=0;ie<A.mipmaps.length;ie++)P.__webglFramebuffer[ie]=t.createFramebuffer()}else P.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let ie=0,_e=j.length;ie<_e;ie++){let Ae=i.get(j[ie]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=t.createTexture(),a.memory.textures++)}if(T.samples>0&&de(T)===!1){P.__webglMultisampledFramebuffer=t.createFramebuffer(),P.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let ie=0;ie<j.length;ie++){let _e=j[ie];P.__webglColorRenderbuffer[ie]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,P.__webglColorRenderbuffer[ie]);let Ae=r.convert(_e.format,_e.colorSpace),te=r.convert(_e.type),he=v(_e.internalFormat,Ae,te,_e.colorSpace,T.isXRRenderTarget===!0),Re=Je(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,he,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ie,t.RENDERBUFFER,P.__webglColorRenderbuffer[ie])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(P.__webglDepthRenderbuffer=t.createRenderbuffer(),Te(P.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(W){n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture),He(t.TEXTURE_CUBE_MAP,A);for(let ie=0;ie<6;ie++)if(A.mipmaps&&A.mipmaps.length>0)for(let _e=0;_e<A.mipmaps.length;_e++)oe(P.__webglFramebuffer[ie][_e],T,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,_e);else oe(P.__webglFramebuffer[ie],T,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);m(A)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let ie=0,_e=j.length;ie<_e;ie++){let Ae=j[ie],te=i.get(Ae),he=t.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(he=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,te.__webglTexture),He(he,Ae),oe(P.__webglFramebuffer,T,Ae,t.COLOR_ATTACHMENT0+ie,he,0),m(Ae)&&u(he)}n.unbindTexture()}else{let ie=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ie=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ie,X.__webglTexture),He(ie,A),A.mipmaps&&A.mipmaps.length>0)for(let _e=0;_e<A.mipmaps.length;_e++)oe(P.__webglFramebuffer[_e],T,A,t.COLOR_ATTACHMENT0,ie,_e);else oe(P.__webglFramebuffer,T,A,t.COLOR_ATTACHMENT0,ie,0);m(A)&&u(ie),n.unbindTexture()}T.depthBuffer&&Ve(T)}function at(T){let A=T.textures;for(let P=0,X=A.length;P<X;P++){let j=A[P];if(m(j)){let W=g(T),Ee=i.get(j).__webglTexture;n.bindTexture(W,Ee),u(W),n.unbindTexture()}}}let Be=[],le=[];function re(T){if(T.samples>0){if(de(T)===!1){let A=T.textures,P=T.width,X=T.height,j=t.COLOR_BUFFER_BIT,W=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=i.get(T),ie=A.length>1;if(ie)for(let Ae=0;Ae<A.length;Ae++)n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);let _e=T.texture.mipmaps;_e&&_e.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Ae=0;Ae<A.length;Ae++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=t.STENCIL_BUFFER_BIT)),ie){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ae]);let te=i.get(A[Ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,te,0)}t.blitFramebuffer(0,0,P,X,0,0,P,X,j,t.NEAREST),l===!0&&(Be.length=0,le.length=0,Be.push(t.COLOR_ATTACHMENT0+Ae),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Be.push(W),le.push(W),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,le)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Be))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ie)for(let Ae=0;Ae<A.length;Ae++){n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ae]);let te=i.get(A[Ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,te,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let A=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[A])}}}function Je(T){return Math.min(s.maxSamples,T.samples)}function de(T){let A=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ie(T){let A=a.render.frame;f.get(T)!==A&&(f.set(T,A),T.update())}function Ot(T,A){let P=T.colorSpace,X=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||P!==Mi&&P!==Kn&&($e.getTransfer(P)===ct?(X!==pi||j!==un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),A}function Lt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=G,this.setTexture2D=O,this.setTexture2DArray=N,this.setTexture3D=J,this.setTextureCube=V,this.rebindTextures=$t,this.setupRenderTarget=R,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=de}function _2(t,e){function n(i,s=Kn){let r,a=$e.getTransfer(s);if(i===un)return t.UNSIGNED_BYTE;if(i===Df)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Uf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Vm)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===km)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Hm)return t.BYTE;if(i===Gm)return t.SHORT;if(i===ho)return t.UNSIGNED_SHORT;if(i===Rf)return t.INT;if(i===rr)return t.UNSIGNED_INT;if(i===di)return t.FLOAT;if(i===po)return t.HALF_FLOAT;if(i===Wm)return t.ALPHA;if(i===Xm)return t.RGB;if(i===pi)return t.RGBA;if(i===ro)return t.DEPTH_COMPONENT;if(i===or)return t.DEPTH_STENCIL;if(i===Ym)return t.RED;if(i===Bf)return t.RED_INTEGER;if(i===qm)return t.RG;if(i===If)return t.RG_INTEGER;if(i===Lf)return t.RGBA_INTEGER;if(i===kl||i===Wl||i===Xl||i===Yl)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===kl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Yl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===kl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Yl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Pf||i===Nf||i===Of||i===Ff)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Pf)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Nf)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Of)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ff)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zf||i===Hf||i===Gf)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===zf||i===Hf)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Gf)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Vf||i===kf||i===Wf||i===Xf||i===Yf||i===qf||i===Qf||i===Zf||i===Kf||i===Jf||i===jf||i===$f||i===eh||i===th)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Vf)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===kf)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wf)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xf)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Yf)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qf)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qf)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Zf)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Kf)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jf)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===jf)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$f)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===eh)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===th)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===nh||i===ih||i===sh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===nh)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ih)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rh||i===ah||i===oh||i===lh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===rh)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ah)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===oh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===lh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ar?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}var A2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,S2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,hg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){let i=new Fl(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,i=new Kt({vertexShader:A2,fragmentShader:S2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new gn(new Gr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},dg=class extends qn{constructor(e,n){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,f=null,d=null,h=null,p=null,x=null,_=typeof XRWebGLBinding<"u",m=new hg,u={},g=n.getContextAttributes(),v=null,y=null,b=[],C=[],w=new Oe,U=null,M=new pn;M.viewport=new It;let E=new pn;E.viewport=new It;let D=[M,E],G=new yf,k=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let K=b[Q];return K===void 0&&(K=new uo,b[Q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Q){let K=b[Q];return K===void 0&&(K=new uo,b[Q]=K),K.getGripSpace()},this.getHand=function(Q){let K=b[Q];return K===void 0&&(K=new uo,b[Q]=K),K.getHandSpace()};function O(Q){let K=C.indexOf(Q.inputSource);if(K===-1)return;let oe=b[K];oe!==void 0&&(oe.update(Q.inputSource,Q.frame,c||a),oe.dispatchEvent({type:Q.type,data:Q.inputSource}))}function N(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",J);for(let Q=0;Q<b.length;Q++){let K=C[Q];K!==null&&(C[Q]=null,b[Q].disconnect(K))}k=null,Y=null,m.reset();for(let Q in u)delete u[Q];e.setRenderTarget(v),p=null,h=null,d=null,s=null,y=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",N),s.addEventListener("inputsourceschange",J),g.xrCompatible!==!0&&await n.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Te=null,ve=null;g.depth&&(ve=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,oe=g.stencil?or:ro,Te=g.stencil?ar:rr);let Ve={colorFormat:n.RGBA8,depthFormat:ve,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Ve),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Zt(h.textureWidth,h.textureHeight,{format:pi,type:un,depthTexture:new Hr(h.textureWidth,h.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let oe={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,n,oe),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Zt(p.framebufferWidth,p.framebufferHeight,{format:pi,type:un,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),je.setContext(s),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(Q){for(let K=0;K<Q.removed.length;K++){let oe=Q.removed[K],Te=C.indexOf(oe);Te>=0&&(C[Te]=null,b[Te].disconnect(oe))}for(let K=0;K<Q.added.length;K++){let oe=Q.added[K],Te=C.indexOf(oe);if(Te===-1){for(let Ve=0;Ve<b.length;Ve++)if(Ve>=C.length){C.push(oe),Te=Ve;break}else if(C[Ve]===null){C[Ve]=oe,Te=Ve;break}if(Te===-1)break}let ve=b[Te];ve&&ve.connect(oe)}}let V=new z,se=new z;function pe(Q,K,oe){V.setFromMatrixPosition(K.matrixWorld),se.setFromMatrixPosition(oe.matrixWorld);let Te=V.distanceTo(se),ve=K.projectionMatrix.elements,Ve=oe.projectionMatrix.elements,$t=ve[14]/(ve[10]-1),R=ve[14]/(ve[10]+1),at=(ve[9]+1)/ve[5],Be=(ve[9]-1)/ve[5],le=(ve[8]-1)/ve[0],re=(Ve[8]+1)/Ve[0],Je=$t*le,de=$t*re,Ie=Te/(-le+re),Ot=Ie*-le;if(K.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ot),Q.translateZ(Ie),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),ve[10]===-1)Q.projectionMatrix.copy(K.projectionMatrix),Q.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let Lt=$t+Ie,T=R+Ie,A=Je-Ot,P=de+(Te-Ot),X=at*R/T*Lt,j=Be*R/T*Lt;Q.projectionMatrix.makePerspective(A,P,X,j,Lt,T),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Me(Q,K){K===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(K.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let K=Q.near,oe=Q.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(oe=m.depthFar)),G.near=E.near=M.near=K,G.far=E.far=M.far=oe,(k!==G.near||Y!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),k=G.near,Y=G.far),G.layers.mask=Q.layers.mask|6,M.layers.mask=G.layers.mask&3,E.layers.mask=G.layers.mask&5;let Te=Q.parent,ve=G.cameras;Me(G,Te);for(let Ve=0;Ve<ve.length;Ve++)Me(ve[Ve],Te);ve.length===2?pe(G,M,E):G.projectionMatrix.copy(M.projectionMatrix),He(Q,G,Te)};function He(Q,K,oe){oe===null?Q.matrix.copy(K.matrixWorld):(Q.matrix.copy(oe.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(K.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(K.projectionMatrix),Q.projectionMatrixInverse.copy(K.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ef*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Q){l=Q,h!==null&&(h.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(Q){return u[Q]};let rt=null;function dt(Q,K){if(f=K.getViewerPose(c||a),x=K,f!==null){let oe=f.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Te=!1;oe.length!==G.cameras.length&&(G.cameras.length=0,Te=!0);for(let R=0;R<oe.length;R++){let at=oe[R],Be=null;if(p!==null)Be=p.getViewport(at);else{let re=d.getViewSubImage(h,at);Be=re.viewport,R===0&&(e.setRenderTargetTextures(y,re.colorTexture,re.depthStencilTexture),e.setRenderTarget(y))}let le=D[R];le===void 0&&(le=new pn,le.layers.enable(R),le.viewport=new It,D[R]=le),le.matrix.fromArray(at.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(at.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(Be.x,Be.y,Be.width,Be.height),R===0&&(G.matrix.copy(le.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Te===!0&&G.cameras.push(le)}let ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=i.getBinding();let R=d.getDepthInformation(oe[0]);R&&R.isValid&&R.texture&&m.init(R,s.renderState)}if(ve&&ve.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let R=0;R<oe.length;R++){let at=oe[R].camera;if(at){let Be=u[at];Be||(Be=new Fl,u[at]=Be);let le=d.getCameraImage(at);Be.sourceTexture=le}}}}for(let oe=0;oe<b.length;oe++){let Te=C[oe],ve=b[oe];Te!==null&&ve!==void 0&&ve.update(Te,K,c||a)}rt&&rt(Q,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),x=null}let je=new $A;je.setAnimationLoop(dt),this.setAnimationLoop=function(Q){rt=Q},this.dispose=function(){}}},qr=new Ni,M2=new qt;function E2(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Km(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,g,v,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),d(m,u)):u.isMeshPhongMaterial?(r(m,u),f(m,u)):u.isMeshStandardMaterial?(r(m,u),h(m,u),u.isMeshPhysicalMaterial&&p(m,u,y)):u.isMeshMatcapMaterial?(r(m,u),x(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),_(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,g,v):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Wt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Wt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let g=e.get(u),v=g.envMap,y=g.envMapRotation;v&&(m.envMap.value=v,qr.copy(y),qr.x*=-1,qr.y*=-1,qr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),m.envMapRotation.value.setFromMatrix4(M2.makeRotationFromEuler(qr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,v){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=v*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function f(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Wt&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,u){u.matcap&&(m.matcap.value=u.matcap)}function _(m,u){let g=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function T2(t,e,n,i){let s={},r={},a=[],o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,v){let y=v.program;i.uniformBlockBinding(g,y)}function c(g,v){let y=s[g.id];y===void 0&&(x(g),y=f(g),s[g.id]=y,g.addEventListener("dispose",m));let b=v.program;i.updateUBOMapping(g,b);let C=e.render.frame;r[g.id]!==C&&(h(g),r[g.id]=C)}function f(g){let v=d();g.__bindingPointIndex=v;let y=t.createBuffer(),b=g.__size,C=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,b,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,y),y}function d(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){let v=s[g.id],y=g.uniforms,b=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let C=0,w=y.length;C<w;C++){let U=Array.isArray(y[C])?y[C]:[y[C]];for(let M=0,E=U.length;M<E;M++){let D=U[M];if(p(D,C,M,b)===!0){let G=D.__offset,k=Array.isArray(D.value)?D.value:[D.value],Y=0;for(let O=0;O<k.length;O++){let N=k[O],J=_(N);typeof N=="number"||typeof N=="boolean"?(D.__data[0]=N,t.bufferSubData(t.UNIFORM_BUFFER,G+Y,D.__data)):N.isMatrix3?(D.__data[0]=N.elements[0],D.__data[1]=N.elements[1],D.__data[2]=N.elements[2],D.__data[3]=0,D.__data[4]=N.elements[3],D.__data[5]=N.elements[4],D.__data[6]=N.elements[5],D.__data[7]=0,D.__data[8]=N.elements[6],D.__data[9]=N.elements[7],D.__data[10]=N.elements[8],D.__data[11]=0):(N.toArray(D.__data,Y),Y+=J.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,G,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,v,y,b){let C=g.value,w=v+"_"+y;if(b[w]===void 0)return typeof C=="number"||typeof C=="boolean"?b[w]=C:b[w]=C.clone(),!0;{let U=b[w];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return b[w]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function x(g){let v=g.uniforms,y=0,b=16;for(let w=0,U=v.length;w<U;w++){let M=Array.isArray(v[w])?v[w]:[v[w]];for(let E=0,D=M.length;E<D;E++){let G=M[E],k=Array.isArray(G.value)?G.value:[G.value];for(let Y=0,O=k.length;Y<O;Y++){let N=k[Y],J=_(N),V=y%b,se=V%J.boundary,pe=V+se;y+=se,pe!==0&&b-pe<J.storage&&(y+=b-pe),G.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=y,y+=J.storage}}}let C=y%b;return C>0&&(y+=b-C),g.__size=y,g.__cache={},this}function _(g){let v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function m(g){let v=g.target;v.removeEventListener("dispose",m);let y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),t.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function u(){for(let g in s)t.deleteBuffer(s[g]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}var dh=class{constructor(e={}){let{canvas:n=TA(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let x=new Uint32Array(4),_=new Int32Array(4),m=null,u=null,g=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ms,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,b=!1;this._outputColorSpace=Tt;let C=0,w=0,U=null,M=-1,E=null,D=new It,G=new It,k=null,Y=new Ze(0),O=0,N=n.width,J=n.height,V=1,se=null,pe=null,Me=new It(0,0,N,J),He=new It(0,0,N,J),rt=!1,dt=new Ol,je=!1,Q=!1,K=new qt,oe=new z,Te=new It,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ve=!1;function $t(){return U===null?V:1}let R=i;function at(S,I){return n.getContext(S,I)}try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"180"}`),n.addEventListener("webglcontextlost",ae,!1),n.addEventListener("webglcontextrestored",ge,!1),n.addEventListener("webglcontextcreationerror",$,!1),R===null){let I="webgl2";if(R=at(I,S),R===null)throw at(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Be,le,re,Je,de,Ie,Ot,Lt,T,A,P,X,j,W,Ee,ie,_e,Ae,te,he,Re,Se,ue,ze;function B(){Be=new kw(R),Be.init(),Se=new _2(R,Be),le=new Nw(R,Be,e,Se),re=new x2(R,Be),le.reversedDepthBuffer&&h&&re.buffers.depth.setReversed(!0),Je=new Yw(R),de=new r2,Ie=new y2(R,Be,re,de,le,Se,Je),Ot=new Fw(y),Lt=new Vw(y),T=new jE(R),ue=new Lw(R,T),A=new Ww(R,T,Je,ue),P=new Qw(R,A,T,Je),te=new qw(R,le,Ie),ie=new Ow(de),X=new s2(y,Ot,Lt,Be,le,ue,ie),j=new E2(y,de),W=new o2,Ee=new d2(Be),Ae=new Iw(y,Ot,Lt,re,P,p,l),_e=new g2(y,P,le),ze=new T2(R,Je,le,re),he=new Pw(R,Be,Je),Re=new Xw(R,Be,Je),Je.programs=X.programs,y.capabilities=le,y.extensions=Be,y.properties=de,y.renderLists=W,y.shadowMap=_e,y.state=re,y.info=Je}B();let ne=new dg(y,R);this.xr=ne,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let S=Be.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Be.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(S){S!==void 0&&(V=S,this.setSize(N,J,!1))},this.getSize=function(S){return S.set(N,J)},this.setSize=function(S,I,F=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=S,J=I,n.width=Math.floor(S*V),n.height=Math.floor(I*V),F===!0&&(n.style.width=S+"px",n.style.height=I+"px"),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(N*V,J*V).floor()},this.setDrawingBufferSize=function(S,I,F){N=S,J=I,V=F,n.width=Math.floor(S*F),n.height=Math.floor(I*F),this.setViewport(0,0,S,I)},this.getCurrentViewport=function(S){return S.copy(D)},this.getViewport=function(S){return S.copy(Me)},this.setViewport=function(S,I,F,H){S.isVector4?Me.set(S.x,S.y,S.z,S.w):Me.set(S,I,F,H),re.viewport(D.copy(Me).multiplyScalar(V).round())},this.getScissor=function(S){return S.copy(He)},this.setScissor=function(S,I,F,H){S.isVector4?He.set(S.x,S.y,S.z,S.w):He.set(S,I,F,H),re.scissor(G.copy(He).multiplyScalar(V).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(S){re.setScissorTest(rt=S)},this.setOpaqueSort=function(S){se=S},this.setTransparentSort=function(S){pe=S},this.getClearColor=function(S){return S.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(S=!0,I=!0,F=!0){let H=0;if(S){let L=!1;if(U!==null){let ee=U.texture.format;L=ee===Lf||ee===If||ee===Bf}if(L){let ee=U.texture.type,fe=ee===un||ee===rr||ee===ho||ee===ar||ee===Df||ee===Uf,xe=Ae.getClearColor(),me=Ae.getClearAlpha(),Ce=xe.r,Ue=xe.g,be=xe.b;fe?(x[0]=Ce,x[1]=Ue,x[2]=be,x[3]=me,R.clearBufferuiv(R.COLOR,0,x)):(_[0]=Ce,_[1]=Ue,_[2]=be,_[3]=me,R.clearBufferiv(R.COLOR,0,_))}else H|=R.COLOR_BUFFER_BIT}I&&(H|=R.DEPTH_BUFFER_BIT),F&&(H|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ae,!1),n.removeEventListener("webglcontextrestored",ge,!1),n.removeEventListener("webglcontextcreationerror",$,!1),Ae.dispose(),W.dispose(),Ee.dispose(),de.dispose(),Ot.dispose(),Lt.dispose(),P.dispose(),ue.dispose(),ze.dispose(),X.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Ti),ne.removeEventListener("sessionend",Eg),ur.stop()};function ae(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let S=Je.autoReset,I=_e.enabled,F=_e.autoUpdate,H=_e.needsUpdate,L=_e.type;B(),Je.autoReset=S,_e.enabled=I,_e.autoUpdate=F,_e.needsUpdate=H,_e.type=L}function $(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Z(S){let I=S.target;I.removeEventListener("dispose",Z),ye(I)}function ye(S){Le(S),de.remove(S)}function Le(S){let I=de.get(S).programs;I!==void 0&&(I.forEach(function(F){X.releaseProgram(F)}),S.isShaderMaterial&&X.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,F,H,L,ee){I===null&&(I=ve);let fe=L.isMesh&&L.matrixWorld.determinant()<0,xe=vS(S,I,F,H,L);re.setMaterial(H,fe);let me=F.index,Ce=1;if(H.wireframe===!0){if(me=A.getWireframeAttribute(F),me===void 0)return;Ce=2}let Ue=F.drawRange,be=F.attributes.position,Xe=Ue.start*Ce,ut=(Ue.start+Ue.count)*Ce;ee!==null&&(Xe=Math.max(Xe,ee.start*Ce),ut=Math.min(ut,(ee.start+ee.count)*Ce)),me!==null?(Xe=Math.max(Xe,0),ut=Math.min(ut,me.count)):be!=null&&(Xe=Math.max(Xe,0),ut=Math.min(ut,be.count));let Dt=ut-Xe;if(Dt<0||Dt===1/0)return;ue.setup(L,H,xe,F,me);let yt,pt=he;if(me!==null&&(yt=T.get(me),pt=Re,pt.setIndex(yt)),L.isMesh)H.wireframe===!0?(re.setLineWidth(H.wireframeLinewidth*$t()),pt.setMode(R.LINES)):pt.setMode(R.TRIANGLES);else if(L.isLine){let we=H.linewidth;we===void 0&&(we=1),re.setLineWidth(we*$t()),L.isLineSegments?pt.setMode(R.LINES):L.isLineLoop?pt.setMode(R.LINE_LOOP):pt.setMode(R.LINE_STRIP)}else L.isPoints?pt.setMode(R.POINTS):L.isSprite&&pt.setMode(R.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)ao("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))pt.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{let we=L._multiDrawStarts,Ct=L._multiDrawCounts,et=L._multiDrawCount,In=me?T.get(me).bytesPerElement:1,jr=de.get(H).currentProgram.getUniforms();for(let Ln=0;Ln<et;Ln++)jr.setValue(R,"_gl_DrawID",Ln),pt.render(we[Ln]/In,Ct[Ln])}else if(L.isInstancedMesh)pt.renderInstances(Xe,Dt,L.count);else if(F.isInstancedBufferGeometry){let we=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Ct=Math.min(F.instanceCount,we);pt.renderInstances(Xe,Dt,Ct)}else pt.render(Xe,Dt)};function gt(S,I,F){S.transparent===!0&&S.side===Mn&&S.forceSinglePass===!1?(S.side=Wt,S.needsUpdate=!0,jl(S,I,F),S.side=Si,S.needsUpdate=!0,jl(S,I,F),S.side=Mn):jl(S,I,F)}this.compile=function(S,I,F=null){F===null&&(F=S),u=Ee.get(F),u.init(I),v.push(u),F.traverseVisible(function(L){L.isLight&&L.layers.test(I.layers)&&(u.pushLight(L),L.castShadow&&u.pushShadow(L))}),S!==F&&S.traverseVisible(function(L){L.isLight&&L.layers.test(I.layers)&&(u.pushLight(L),L.castShadow&&u.pushShadow(L))}),u.setupLights();let H=new Set;return S.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;let ee=L.material;if(ee)if(Array.isArray(ee))for(let fe=0;fe<ee.length;fe++){let xe=ee[fe];gt(xe,F,L),H.add(xe)}else gt(ee,F,L),H.add(ee)}),u=v.pop(),H},this.compileAsync=function(S,I,F=null){let H=this.compile(S,I,F);return new Promise(L=>{function ee(){if(H.forEach(function(fe){de.get(fe).currentProgram.isReady()&&H.delete(fe)}),H.size===0){L(S);return}setTimeout(ee,10)}Be.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let st=null;function Gi(S){st&&st(S)}function Ti(){ur.stop()}function Eg(){ur.start()}let ur=new $A;ur.setAnimationLoop(Gi),typeof self<"u"&&ur.setContext(self),this.setAnimationLoop=function(S){st=S,ne.setAnimationLoop(S),S===null?ur.stop():ur.start()},ne.addEventListener("sessionstart",Ti),ne.addEventListener("sessionend",Eg),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(I),I=ne.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,I,U),u=Ee.get(S,v.length),u.init(I),v.push(u),K.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),dt.setFromProjectionMatrix(K,Ai,I.reversedDepth),Q=this.localClippingEnabled,je=ie.init(this.clippingPlanes,Q),m=W.get(S,g.length),m.init(),g.push(m),ne.enabled===!0&&ne.isPresenting===!0){let ee=y.xr.getDepthSensingMesh();ee!==null&&vh(ee,I,-1/0,y.sortObjects)}vh(S,I,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(se,pe),Ve=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Ve&&Ae.addToRenderList(m,S),this.info.render.frame++,je===!0&&ie.beginShadows();let F=u.state.shadowsArray;_e.render(F,S,I),je===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=m.opaque,L=m.transmissive;if(u.setupLights(),I.isArrayCamera){let ee=I.cameras;if(L.length>0)for(let fe=0,xe=ee.length;fe<xe;fe++){let me=ee[fe];bg(H,L,S,me)}Ve&&Ae.render(S);for(let fe=0,xe=ee.length;fe<xe;fe++){let me=ee[fe];Tg(m,S,me,me.viewport)}}else L.length>0&&bg(H,L,S,I),Ve&&Ae.render(S),Tg(m,S,I);U!==null&&w===0&&(Ie.updateMultisampleRenderTarget(U),Ie.updateRenderTargetMipmap(U)),S.isScene===!0&&S.onAfterRender(y,S,I),ue.resetDefaultState(),M=-1,E=null,v.pop(),v.length>0?(u=v[v.length-1],je===!0&&ie.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function vh(S,I,F,H){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)F=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLight)u.pushLight(S),S.castShadow&&u.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||dt.intersectsSprite(S)){H&&Te.setFromMatrixPosition(S.matrixWorld).applyMatrix4(K);let fe=P.update(S),xe=S.material;xe.visible&&m.push(S,fe,xe,F,Te.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||dt.intersectsObject(S))){let fe=P.update(S),xe=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Te.copy(S.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Te.copy(fe.boundingSphere.center)),Te.applyMatrix4(S.matrixWorld).applyMatrix4(K)),Array.isArray(xe)){let me=fe.groups;for(let Ce=0,Ue=me.length;Ce<Ue;Ce++){let be=me[Ce],Xe=xe[be.materialIndex];Xe&&Xe.visible&&m.push(S,fe,Xe,F,Te.z,be)}}else xe.visible&&m.push(S,fe,xe,F,Te.z,null)}}let ee=S.children;for(let fe=0,xe=ee.length;fe<xe;fe++)vh(ee[fe],I,F,H)}function Tg(S,I,F,H){let L=S.opaque,ee=S.transmissive,fe=S.transparent;u.setupLightsView(F),je===!0&&ie.setGlobalState(y.clippingPlanes,F),H&&re.viewport(D.copy(H)),L.length>0&&Jl(L,I,F),ee.length>0&&Jl(ee,I,F),fe.length>0&&Jl(fe,I,F),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function bg(S,I,F,H){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[H.id]===void 0&&(u.state.transmissionRenderTarget[H.id]=new Zt(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?po:un,minFilter:sr,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));let ee=u.state.transmissionRenderTarget[H.id],fe=H.viewport||D;ee.setSize(fe.z*y.transmissionResolutionScale,fe.w*y.transmissionResolutionScale);let xe=y.getRenderTarget(),me=y.getActiveCubeFace(),Ce=y.getActiveMipmapLevel();y.setRenderTarget(ee),y.getClearColor(Y),O=y.getClearAlpha(),O<1&&y.setClearColor(16777215,.5),y.clear(),Ve&&Ae.render(F);let Ue=y.toneMapping;y.toneMapping=ms;let be=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),u.setupLightsView(H),je===!0&&ie.setGlobalState(y.clippingPlanes,H),Jl(S,F,H),Ie.updateMultisampleRenderTarget(ee),Ie.updateRenderTargetMipmap(ee),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let ut=0,Dt=I.length;ut<Dt;ut++){let yt=I[ut],pt=yt.object,we=yt.geometry,Ct=yt.material,et=yt.group;if(Ct.side===Mn&&pt.layers.test(H.layers)){let In=Ct.side;Ct.side=Wt,Ct.needsUpdate=!0,wg(pt,F,H,we,Ct,et),Ct.side=In,Ct.needsUpdate=!0,Xe=!0}}Xe===!0&&(Ie.updateMultisampleRenderTarget(ee),Ie.updateRenderTargetMipmap(ee))}y.setRenderTarget(xe,me,Ce),y.setClearColor(Y,O),be!==void 0&&(H.viewport=be),y.toneMapping=Ue}function Jl(S,I,F){let H=I.isScene===!0?I.overrideMaterial:null;for(let L=0,ee=S.length;L<ee;L++){let fe=S[L],xe=fe.object,me=fe.geometry,Ce=fe.group,Ue=fe.material;Ue.allowOverride===!0&&H!==null&&(Ue=H),xe.layers.test(F.layers)&&wg(xe,I,F,me,Ue,Ce)}}function wg(S,I,F,H,L,ee){S.onBeforeRender(y,I,F,H,L,ee),S.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),L.onBeforeRender(y,I,F,H,S,ee),L.transparent===!0&&L.side===Mn&&L.forceSinglePass===!1?(L.side=Wt,L.needsUpdate=!0,y.renderBufferDirect(F,I,H,L,S,ee),L.side=Si,L.needsUpdate=!0,y.renderBufferDirect(F,I,H,L,S,ee),L.side=Mn):y.renderBufferDirect(F,I,H,L,S,ee),S.onAfterRender(y,I,F,H,L,ee)}function jl(S,I,F){I.isScene!==!0&&(I=ve);let H=de.get(S),L=u.state.lights,ee=u.state.shadowsArray,fe=L.state.version,xe=X.getParameters(S,L.state,ee,I,F),me=X.getProgramCacheKey(xe),Ce=H.programs;H.environment=S.isMeshStandardMaterial?I.environment:null,H.fog=I.fog,H.envMap=(S.isMeshStandardMaterial?Lt:Ot).get(S.envMap||H.environment),H.envMapRotation=H.environment!==null&&S.envMap===null?I.environmentRotation:S.envMapRotation,Ce===void 0&&(S.addEventListener("dispose",Z),Ce=new Map,H.programs=Ce);let Ue=Ce.get(me);if(Ue!==void 0){if(H.currentProgram===Ue&&H.lightsStateVersion===fe)return Rg(S,xe),Ue}else xe.uniforms=X.getUniforms(S),S.onBeforeCompile(xe,y),Ue=X.acquireProgram(xe,me),Ce.set(me,Ue),H.uniforms=xe.uniforms;let be=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(be.clippingPlanes=ie.uniform),Rg(S,xe),H.needsLights=yS(S),H.lightsStateVersion=fe,H.needsLights&&(be.ambientLightColor.value=L.state.ambient,be.lightProbe.value=L.state.probe,be.directionalLights.value=L.state.directional,be.directionalLightShadows.value=L.state.directionalShadow,be.spotLights.value=L.state.spot,be.spotLightShadows.value=L.state.spotShadow,be.rectAreaLights.value=L.state.rectArea,be.ltc_1.value=L.state.rectAreaLTC1,be.ltc_2.value=L.state.rectAreaLTC2,be.pointLights.value=L.state.point,be.pointLightShadows.value=L.state.pointShadow,be.hemisphereLights.value=L.state.hemi,be.directionalShadowMap.value=L.state.directionalShadowMap,be.directionalShadowMatrix.value=L.state.directionalShadowMatrix,be.spotShadowMap.value=L.state.spotShadowMap,be.spotLightMatrix.value=L.state.spotLightMatrix,be.spotLightMap.value=L.state.spotLightMap,be.pointShadowMap.value=L.state.pointShadowMap,be.pointShadowMatrix.value=L.state.pointShadowMatrix),H.currentProgram=Ue,H.uniformsList=null,Ue}function Cg(S){if(S.uniformsList===null){let I=S.currentProgram.getUniforms();S.uniformsList=vo.seqWithValue(I.seq,S.uniforms)}return S.uniformsList}function Rg(S,I){let F=de.get(S);F.outputColorSpace=I.outputColorSpace,F.batching=I.batching,F.batchingColor=I.batchingColor,F.instancing=I.instancing,F.instancingColor=I.instancingColor,F.instancingMorph=I.instancingMorph,F.skinning=I.skinning,F.morphTargets=I.morphTargets,F.morphNormals=I.morphNormals,F.morphColors=I.morphColors,F.morphTargetsCount=I.morphTargetsCount,F.numClippingPlanes=I.numClippingPlanes,F.numIntersection=I.numClipIntersection,F.vertexAlphas=I.vertexAlphas,F.vertexTangents=I.vertexTangents,F.toneMapping=I.toneMapping}function vS(S,I,F,H,L){I.isScene!==!0&&(I=ve),Ie.resetTextureUnits();let ee=I.fog,fe=H.isMeshStandardMaterial?I.environment:null,xe=U===null?y.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Mi,me=(H.isMeshStandardMaterial?Lt:Ot).get(H.envMap||fe),Ce=H.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Ue=!!F.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),be=!!F.morphAttributes.position,Xe=!!F.morphAttributes.normal,ut=!!F.morphAttributes.color,Dt=ms;H.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Dt=y.toneMapping);let yt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,pt=yt!==void 0?yt.length:0,we=de.get(H),Ct=u.state.lights;if(je===!0&&(Q===!0||S!==E)){let yn=S===E&&H.id===M;ie.setState(H,S,yn)}let et=!1;H.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Ct.state.version||we.outputColorSpace!==xe||L.isBatchedMesh&&we.batching===!1||!L.isBatchedMesh&&we.batching===!0||L.isBatchedMesh&&we.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&we.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&we.instancing===!1||!L.isInstancedMesh&&we.instancing===!0||L.isSkinnedMesh&&we.skinning===!1||!L.isSkinnedMesh&&we.skinning===!0||L.isInstancedMesh&&we.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&we.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&we.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&we.instancingMorph===!1&&L.morphTexture!==null||we.envMap!==me||H.fog===!0&&we.fog!==ee||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==ie.numPlanes||we.numIntersection!==ie.numIntersection)||we.vertexAlphas!==Ce||we.vertexTangents!==Ue||we.morphTargets!==be||we.morphNormals!==Xe||we.morphColors!==ut||we.toneMapping!==Dt||we.morphTargetsCount!==pt)&&(et=!0):(et=!0,we.__version=H.version);let In=we.currentProgram;et===!0&&(In=jl(H,I,L));let jr=!1,Ln=!1,yo=!1,Rt=In.getUniforms(),Jn=we.uniforms;if(re.useProgram(In.program)&&(jr=!0,Ln=!0,yo=!0),H.id!==M&&(M=H.id,Ln=!0),jr||E!==S){re.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Rt.setValue(R,"projectionMatrix",S.projectionMatrix),Rt.setValue(R,"viewMatrix",S.matrixWorldInverse);let En=Rt.map.cameraPosition;En!==void 0&&En.setValue(R,oe.setFromMatrixPosition(S.matrixWorld)),le.logarithmicDepthBuffer&&Rt.setValue(R,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Rt.setValue(R,"isOrthographic",S.isOrthographicCamera===!0),E!==S&&(E=S,Ln=!0,yo=!0)}if(L.isSkinnedMesh){Rt.setOptional(R,L,"bindMatrix"),Rt.setOptional(R,L,"bindMatrixInverse");let yn=L.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Rt.setValue(R,"boneTexture",yn.boneTexture,Ie))}L.isBatchedMesh&&(Rt.setOptional(R,L,"batchingTexture"),Rt.setValue(R,"batchingTexture",L._matricesTexture,Ie),Rt.setOptional(R,L,"batchingIdTexture"),Rt.setValue(R,"batchingIdTexture",L._indirectTexture,Ie),Rt.setOptional(R,L,"batchingColorTexture"),L._colorsTexture!==null&&Rt.setValue(R,"batchingColorTexture",L._colorsTexture,Ie));let jn=F.morphAttributes;if((jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0)&&te.update(L,F,In),(Ln||we.receiveShadow!==L.receiveShadow)&&(we.receiveShadow=L.receiveShadow,Rt.setValue(R,"receiveShadow",L.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Jn.envMap.value=me,Jn.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&I.environment!==null&&(Jn.envMapIntensity.value=I.environmentIntensity),Ln&&(Rt.setValue(R,"toneMappingExposure",y.toneMappingExposure),we.needsLights&&xS(Jn,yo),ee&&H.fog===!0&&j.refreshFogUniforms(Jn,ee),j.refreshMaterialUniforms(Jn,H,V,J,u.state.transmissionRenderTarget[S.id]),vo.upload(R,Cg(we),Jn,Ie)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(vo.upload(R,Cg(we),Jn,Ie),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Rt.setValue(R,"center",L.center),Rt.setValue(R,"modelViewMatrix",L.modelViewMatrix),Rt.setValue(R,"normalMatrix",L.normalMatrix),Rt.setValue(R,"modelMatrix",L.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let yn=H.uniformsGroups;for(let En=0,xh=yn.length;En<xh;En++){let fr=yn[En];ze.update(fr,In),ze.bind(fr,In)}}return In}function xS(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function yS(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(S,I,F){let H=de.get(S);H.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),de.get(S.texture).__webglTexture=I,de.get(S.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:F,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,I){let F=de.get(S);F.__webglFramebuffer=I,F.__useDefaultFramebuffer=I===void 0};let _S=R.createFramebuffer();this.setRenderTarget=function(S,I=0,F=0){U=S,C=I,w=F;let H=!0,L=null,ee=!1,fe=!1;if(S){let me=de.get(S);if(me.__useDefaultFramebuffer!==void 0)re.bindFramebuffer(R.FRAMEBUFFER,null),H=!1;else if(me.__webglFramebuffer===void 0)Ie.setupRenderTarget(S);else if(me.__hasExternalTextures)Ie.rebindTextures(S,de.get(S.texture).__webglTexture,de.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let be=S.depthTexture;if(me.__boundDepthTexture!==be){if(be!==null&&de.has(be)&&(S.width!==be.image.width||S.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ie.setupDepthRenderbuffer(S)}}let Ce=S.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(fe=!0);let Ue=de.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ue[I])?L=Ue[I][F]:L=Ue[I],ee=!0):S.samples>0&&Ie.useMultisampledRTT(S)===!1?L=de.get(S).__webglMultisampledFramebuffer:Array.isArray(Ue)?L=Ue[F]:L=Ue,D.copy(S.viewport),G.copy(S.scissor),k=S.scissorTest}else D.copy(Me).multiplyScalar(V).floor(),G.copy(He).multiplyScalar(V).floor(),k=rt;if(F!==0&&(L=_S),re.bindFramebuffer(R.FRAMEBUFFER,L)&&H&&re.drawBuffers(S,L),re.viewport(D),re.scissor(G),re.setScissorTest(k),ee){let me=de.get(S.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+I,me.__webglTexture,F)}else if(fe){let me=I;for(let Ce=0;Ce<S.textures.length;Ce++){let Ue=de.get(S.textures[Ce]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Ce,Ue.__webglTexture,F,me)}}else if(S!==null&&F!==0){let me=de.get(S.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,me.__webglTexture,F)}M=-1},this.readRenderTargetPixels=function(S,I,F,H,L,ee,fe,xe=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=de.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&fe!==void 0&&(me=me[fe]),me){re.bindFramebuffer(R.FRAMEBUFFER,me);try{let Ce=S.textures[xe],Ue=Ce.format,be=Ce.type;if(!le.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-H&&F>=0&&F<=S.height-L&&(S.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+xe),R.readPixels(I,F,H,L,Se.convert(Ue),Se.convert(be),ee))}finally{let Ce=U!==null?de.get(U).__webglFramebuffer:null;re.bindFramebuffer(R.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(S,I,F,H,L,ee,fe,xe=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=de.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&fe!==void 0&&(me=me[fe]),me)if(I>=0&&I<=S.width-H&&F>=0&&F<=S.height-L){re.bindFramebuffer(R.FRAMEBUFFER,me);let Ce=S.textures[xe],Ue=Ce.format,be=Ce.type;if(!le.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Xe=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Xe),R.bufferData(R.PIXEL_PACK_BUFFER,ee.byteLength,R.STREAM_READ),S.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+xe),R.readPixels(I,F,H,L,Se.convert(Ue),Se.convert(be),0);let ut=U!==null?de.get(U).__webglFramebuffer:null;re.bindFramebuffer(R.FRAMEBUFFER,ut);let Dt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await bA(R,Dt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Xe),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ee),R.deleteBuffer(Xe),R.deleteSync(Dt),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,I=null,F=0){let H=Math.pow(2,-F),L=Math.floor(S.image.width*H),ee=Math.floor(S.image.height*H),fe=I!==null?I.x:0,xe=I!==null?I.y:0;Ie.setTexture2D(S,0),R.copyTexSubImage2D(R.TEXTURE_2D,F,0,0,fe,xe,L,ee),re.unbindTexture()};let AS=R.createFramebuffer(),SS=R.createFramebuffer();this.copyTextureToTexture=function(S,I,F=null,H=null,L=0,ee=null){ee===null&&(L!==0?(ao("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=L,L=0):ee=0);let fe,xe,me,Ce,Ue,be,Xe,ut,Dt,yt=S.isCompressedTexture?S.mipmaps[ee]:S.image;if(F!==null)fe=F.max.x-F.min.x,xe=F.max.y-F.min.y,me=F.isBox3?F.max.z-F.min.z:1,Ce=F.min.x,Ue=F.min.y,be=F.isBox3?F.min.z:0;else{let jn=Math.pow(2,-L);fe=Math.floor(yt.width*jn),xe=Math.floor(yt.height*jn),S.isDataArrayTexture?me=yt.depth:S.isData3DTexture?me=Math.floor(yt.depth*jn):me=1,Ce=0,Ue=0,be=0}H!==null?(Xe=H.x,ut=H.y,Dt=H.z):(Xe=0,ut=0,Dt=0);let pt=Se.convert(I.format),we=Se.convert(I.type),Ct;I.isData3DTexture?(Ie.setTexture3D(I,0),Ct=R.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Ie.setTexture2DArray(I,0),Ct=R.TEXTURE_2D_ARRAY):(Ie.setTexture2D(I,0),Ct=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,I.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,I.unpackAlignment);let et=R.getParameter(R.UNPACK_ROW_LENGTH),In=R.getParameter(R.UNPACK_IMAGE_HEIGHT),jr=R.getParameter(R.UNPACK_SKIP_PIXELS),Ln=R.getParameter(R.UNPACK_SKIP_ROWS),yo=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,yt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,yt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ce),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ue),R.pixelStorei(R.UNPACK_SKIP_IMAGES,be);let Rt=S.isDataArrayTexture||S.isData3DTexture,Jn=I.isDataArrayTexture||I.isData3DTexture;if(S.isDepthTexture){let jn=de.get(S),yn=de.get(I),En=de.get(jn.__renderTarget),xh=de.get(yn.__renderTarget);re.bindFramebuffer(R.READ_FRAMEBUFFER,En.__webglFramebuffer),re.bindFramebuffer(R.DRAW_FRAMEBUFFER,xh.__webglFramebuffer);for(let fr=0;fr<me;fr++)Rt&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,de.get(S).__webglTexture,L,be+fr),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,de.get(I).__webglTexture,ee,Dt+fr)),R.blitFramebuffer(Ce,Ue,fe,xe,Xe,ut,fe,xe,R.DEPTH_BUFFER_BIT,R.NEAREST);re.bindFramebuffer(R.READ_FRAMEBUFFER,null),re.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(L!==0||S.isRenderTargetTexture||de.has(S)){let jn=de.get(S),yn=de.get(I);re.bindFramebuffer(R.READ_FRAMEBUFFER,AS),re.bindFramebuffer(R.DRAW_FRAMEBUFFER,SS);for(let En=0;En<me;En++)Rt?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,jn.__webglTexture,L,be+En):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,jn.__webglTexture,L),Jn?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,yn.__webglTexture,ee,Dt+En):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,yn.__webglTexture,ee),L!==0?R.blitFramebuffer(Ce,Ue,fe,xe,Xe,ut,fe,xe,R.COLOR_BUFFER_BIT,R.NEAREST):Jn?R.copyTexSubImage3D(Ct,ee,Xe,ut,Dt+En,Ce,Ue,fe,xe):R.copyTexSubImage2D(Ct,ee,Xe,ut,Ce,Ue,fe,xe);re.bindFramebuffer(R.READ_FRAMEBUFFER,null),re.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Jn?S.isDataTexture||S.isData3DTexture?R.texSubImage3D(Ct,ee,Xe,ut,Dt,fe,xe,me,pt,we,yt.data):I.isCompressedArrayTexture?R.compressedTexSubImage3D(Ct,ee,Xe,ut,Dt,fe,xe,me,pt,yt.data):R.texSubImage3D(Ct,ee,Xe,ut,Dt,fe,xe,me,pt,we,yt):S.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ee,Xe,ut,fe,xe,pt,we,yt.data):S.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ee,Xe,ut,yt.width,yt.height,pt,yt.data):R.texSubImage2D(R.TEXTURE_2D,ee,Xe,ut,fe,xe,pt,we,yt);R.pixelStorei(R.UNPACK_ROW_LENGTH,et),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,In),R.pixelStorei(R.UNPACK_SKIP_PIXELS,jr),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ln),R.pixelStorei(R.UNPACK_SKIP_IMAGES,yo),ee===0&&I.generateMipmaps&&R.generateMipmap(Ct),re.unbindTexture()},this.initRenderTarget=function(S){de.get(S).__webglFramebuffer===void 0&&Ie.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Ie.setTextureCube(S,0):S.isData3DTexture?Ie.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ie.setTexture2DArray(S,0):Ie.setTexture2D(S,0),re.unbindTexture()},this.resetState=function(){C=0,w=0,U=null,re.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),n.unpackColorSpace=$e._getUnpackColorSpace()}};var w2=(()=>{let t=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),n=new Oi;return n.setAttribute("position",new mn(t,3)),n.setAttribute("uv",new mn(e,2)),n})(),lr=class xg{static get fullscreenGeometry(){return w2}constructor(e="Pass",n=new er,i=new ir){this.name=e,this.renderer=null,this.scene=n,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){let n=this.fullscreenMaterial;n!==null&&(n.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let n=this.screen;n!==null?n.material=e:(n=new gn(xg.fullscreenGeometry,e),n.frustumCulled=!1,this.scene===null&&(this.scene=new er),this.scene.add(n),this.screen=n)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,n=zi){}render(e,n,i,s,r){throw new Error("Render method not implemented!")}setSize(e,n){}initialize(e,n,i){}dispose(){for(let e of Object.keys(this)){let n=this[e];(n instanceof Zt||n instanceof Ei||n instanceof Qt||n instanceof xg)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},C2=class extends lr{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(t,e,n,i,s){let r=t.state.buffers.stencil;r.setLocked(!1),r.setTest(!1)}},R2=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,D2="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",U2=class extends Kt{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new xt(null),depthBuffer:new xt(null),channelWeights:new xt(null),opacity:new xt(1)},blending:Zn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:R2,vertexShader:D2}),this.depthFunc=fo}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(t){let e=t!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=t}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(t){let e=t!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=t}set depthPacking(t){this.defines.DEPTH_PACKING=t.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(t){this.colorSpaceConversion!==t&&(t?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(t){t!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=t):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(t){this.uniforms.inputBuffer.value=t}getOpacity(t){return this.uniforms.opacity.value}setOpacity(t){this.uniforms.opacity.value=t}},B2=class extends lr{constructor(t,e=!0){super("CopyPass"),this.fullscreenMaterial=new U2,this.needsSwap=!1,this.renderTarget=t,t===void 0&&(this.renderTarget=new Zt(1,1,{minFilter:kt,magFilter:kt,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(t){this.autoResize=t}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(t){this.autoResize=t}render(t,e,n,i,s){this.fullscreenMaterial.inputBuffer=e.texture,t.setRenderTarget(this.renderToScreen?null:this.renderTarget),t.render(this.scene,this.camera)}setSize(t,e){this.autoResize&&this.renderTarget.setSize(t,e)}initialize(t,e,n){n!==void 0&&(this.renderTarget.texture.type=n,n!==un?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":t!==null&&t.outputColorSpace===Tt&&(this.renderTarget.texture.colorSpace=Tt))}},sS=new Ze,oS=class extends lr{constructor(t=!0,e=!0,n=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=t,this.depth=e,this.stencil=n,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(t,e,n){this.color=t,this.depth=e,this.stencil=n}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(t){this.overrideClearColor=t}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(t){this.overrideClearAlpha=t}render(t,e,n,i,s){let r=this.overrideClearColor,a=this.overrideClearAlpha,o=t.getClearAlpha(),l=r!==null,c=a>=0;l?(t.getClearColor(sS),t.setClearColor(r,c?a:o)):c&&t.setClearAlpha(a),t.setRenderTarget(this.renderToScreen?null:e),t.clear(this.color,this.depth,this.stencil),l?t.setClearColor(sS,o):c&&t.setClearAlpha(o)}},I2=class extends lr{constructor(t,e){super("MaskPass",t,e),this.needsSwap=!1,this.clearPass=new oS(!1,!1,!0),this.inverse=!1}set mainScene(t){this.scene=t}set mainCamera(t){this.camera=t}get inverted(){return this.inverse}set inverted(t){this.inverse=t}get clear(){return this.clearPass.enabled}set clear(t){this.clearPass.enabled=t}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(t){this.inverted=t}render(t,e,n,i,s){let r=t.getContext(),a=t.state.buffers,o=this.scene,l=this.camera,c=this.clearPass,f=this.inverted?0:1,d=1-f;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.stencil.setFunc(r.ALWAYS,f,4294967295),a.stencil.setClear(d),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?c.render(t,null):(c.render(t,e),c.render(t,n))),this.renderToScreen?(t.setRenderTarget(null),t.render(o,l)):(t.setRenderTarget(e),t.render(o,l),t.setRenderTarget(n),t.render(o,l)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(r.EQUAL,1,4294967295),a.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.stencil.setLocked(!0)}},mg=1/1e3,L2=1e3,P2=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(t){typeof document<"u"&&document.hidden!==void 0&&(t?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=t)}get delta(){return this._delta*mg}get fixedDelta(){return this._fixedDelta*mg}set fixedDelta(t){this._fixedDelta=t*L2}get elapsed(){return this._elapsed*mg}update(t){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(t!==void 0?t:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(t){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},yg=class{constructor(t=null,{depthBuffer:e=!0,stencilBuffer:n=!1,multisampling:i=0,frameBufferType:s}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,n,s,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new B2,this.depthRenderTarget=null,this.passes=[],this.timer=new P2,this.autoRenderToScreen=!0,this.setRenderer(t)}get stableDepthTexture(){return this.depthRenderTarget===null?null:this.depthRenderTarget.depthTexture}get multisampling(){return this.inputBuffer.samples}set multisampling(t){this.multisampling!==t&&(this.inputBuffer.samples=t,this.outputBuffer.samples=t,this.inputBuffer.dispose(),this.outputBuffer.dispose())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(t){if(this.renderer=t,t!==null){let e=t.getSize(new Oe),n=t.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===un&&t.outputColorSpace===Tt&&(this.inputBuffer.texture.colorSpace=Tt,this.outputBuffer.texture.colorSpace=Tt,this.inputBuffer.dispose(),this.outputBuffer.dispose()),t.autoClear=!1,this.setSize(e.width,e.height);for(let s of this.passes)s.initialize(t,n,i)}}replaceRenderer(t,e=!0){let n=this.renderer,i=n.domElement.parentNode;return this.setRenderer(t),e&&i!==null&&(i.removeChild(n.domElement),i.appendChild(t.domElement)),n}createDepthTexture(){let t=new Hr;t.name="EffectComposer.InputDepth",this.inputBuffer.stencilBuffer?(t.format=or,t.type=ar):t.type=di;let e=t.clone();e.name="EffectComposer.OutputDepth";let n=t.clone();n.name="EffectComposer.StableDepth",this.inputBuffer.depthTexture=t,this.outputBuffer.depthTexture=e,this.inputBuffer.dispose(),this.outputBuffer.dispose();let{width:i,height:s}=this.inputBuffer;this.depthRenderTarget=new Zt(i,s,{depthBuffer:!0,stencilBuffer:this.inputBuffer.stencilBuffer,depthTexture:n})}blitDepthBuffer(t){let e=this.renderer,n=this.depthRenderTarget,i=e.properties,s=e.getContext();e.setRenderTarget(n);let r=i.get(t).__webglFramebuffer,a=i.get(n).__webglFramebuffer,o=t.stencilBuffer?s.DEPTH_BUFFER_BIT|s.STENCIL_BUFFER_BIT:s.DEPTH_BUFFER_BIT;s.bindFramebuffer(s.READ_FRAMEBUFFER,r),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,a),s.blitFramebuffer(0,0,t.width,t.height,0,0,n.width,n.height,o,s.NEAREST),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),e.setRenderTarget(null)}deleteDepthTexture(){let t=this.stableDepthTexture;for(let e of this.passes)e.getDepthTexture()===t&&e.setDepthTexture(null);this.depthRenderTarget!==null&&(this.depthRenderTarget.dispose(),this.depthRenderTarget=null),this.inputBuffer.depthTexture!==null&&(this.inputBuffer.depthTexture.dispose(),this.inputBuffer.depthTexture=null),this.outputBuffer.depthTexture!==null&&(this.outputBuffer.depthTexture.dispose(),this.outputBuffer.depthTexture=null)}createBuffer(t,e,n,i){let s=this.renderer,r=s===null?new Oe:s.getDrawingBufferSize(new Oe),a=new Zt(r.width,r.height,{minFilter:kt,magFilter:kt,samples:i,stencilBuffer:e,depthBuffer:t,type:n});return n===un&&s!==null&&s.outputColorSpace===Tt&&(a.texture.colorSpace=Tt),a.texture.name="EffectComposer.Buffer",a.texture.generateMipmaps=!1,a}setMainScene(t){for(let e of this.passes)e.mainScene=t}setMainCamera(t){for(let e of this.passes)e.mainCamera=t}addPass(t,e){let n=this.passes,i=this.renderer,s=i.getDrawingBufferSize(new Oe),r=i.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(t.renderer=i,t.setSize(s.width,s.height),t.initialize(i,r,a),this.autoRenderToScreen&&(n.length>0&&(n[n.length-1].renderToScreen=!1),t.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?n.splice(e,0,t):n.push(t),this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!0),t.needsDepthTexture||this.depthRenderTarget!==null)if(this.depthRenderTarget===null){this.createDepthTexture();for(let o of n)o.setDepthTexture(this.stableDepthTexture)}else t.setDepthTexture(this.stableDepthTexture)}removePass(t){let e=this.passes,n=e.indexOf(t);if(n!==-1&&e.splice(n,1).length>0){let r=this.stableDepthTexture;if(r!==null){let a=(l,c)=>l||c.needsDepthTexture;e.reduce(a,!1)||(t.getDepthTexture()===r&&t.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&n===e.length&&(t.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){let t=this.passes;this.deleteDepthTexture(),t.length>0&&(this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!1),this.passes=[])}render(t){let e=this.renderer,n=this.copyPass,i=this.inputBuffer,s=this.outputBuffer,r,a=!1;t===void 0&&(this.timer.update(),t=this.timer.getDelta());for(let o of this.passes)if(o.enabled){if(o.render(e,i,s,t,a),o.needsDepthBlit&&this.depthRenderTarget!==null&&this.blitDepthBuffer(i),o.needsSwap){if(a){n.renderToScreen=o.renderToScreen;let l=e.getContext(),c=e.state.buffers.stencil;c.setFunc(l.NOTEQUAL,1,4294967295),n.render(e,i,s,t,a),c.setFunc(l.EQUAL,1,4294967295)}r=i,i=s,s=r}o instanceof I2?a=!0:o instanceof C2&&(a=!1)}}setSize(t,e,n){let i=this.renderer,s=i.getSize(new Oe);(t===void 0||e===void 0)&&(t=s.width,e=s.height),(s.width!==t||s.height!==e)&&i.setSize(t,e,n);let r=i.getDrawingBufferSize(new Oe);this.inputBuffer.setSize(r.width,r.height),this.outputBuffer.setSize(r.width,r.height),this.depthRenderTarget!==null&&this.depthRenderTarget.setSize(r.width,r.height);for(let a of this.passes)a.setSize(r.width,r.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(let t of this.passes)t.dispose();this.deleteDepthTexture(),this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.copyPass.dispose(),this.timer.dispose(),this.passes=[],lr.fullscreenGeometry.dispose()}},Jr={NONE:0,DEPTH:1,CONVOLUTION:2},tt={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},N2=class{constructor(){this.shaderParts=new Map([[tt.FRAGMENT_HEAD,null],[tt.FRAGMENT_MAIN_UV,null],[tt.FRAGMENT_MAIN_IMAGE,null],[tt.VERTEX_HEAD,null],[tt.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=Jr.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=Mi}};var gg=!1,rS=class{constructor(t=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(t),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let n;if(e.material.flatShading)switch(e.material.side){case Mn:n=this.materialsFlatShadedDoubleSide;break;case Wt:n=this.materialsFlatShadedBackSide;break;default:n=this.materialsFlatShaded;break}else switch(e.material.side){case Mn:n=this.materialsDoubleSide;break;case Wt:n=this.materialsBackSide;break;default:n=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=n[2]:e.isInstancedMesh?e.material=n[1]:e.material=n[0],++this.meshCount}}}cloneMaterial(t){if(!(t instanceof Kt))return t.clone();let e=t.uniforms,n=new Map;for(let s in e){let r=e[s].value;r.isRenderTargetTexture&&(e[s].value=null,n.set(s,r))}let i=t.clone();for(let s of n)e[s[0]].value=s[1],i.uniforms[s[0]].value=s[1];return i}setMaterial(t){if(this.disposeMaterials(),this.material=t,t!==null){let e=this.materials=[this.cloneMaterial(t),this.cloneMaterial(t),this.cloneMaterial(t)];for(let n of e)n.uniforms=Object.assign({},t.uniforms),n.side=Si;e[2].skinning=!0,this.materialsBackSide=e.map(n=>{let i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.side=Wt,i}),this.materialsDoubleSide=e.map(n=>{let i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.side=Mn,i}),this.materialsFlatShaded=e.map(n=>{let i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=e.map(n=>{let i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.flatShading=!0,i.side=Wt,i}),this.materialsFlatShadedDoubleSide=e.map(n=>{let i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.flatShading=!0,i.side=Mn,i})}}render(t,e,n){let i=t.shadowMap.enabled;if(t.shadowMap.enabled=!1,gg){let s=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),t.render(e,n);for(let r of s)r[0].material=r[1];this.meshCount!==s.size&&s.clear()}else{let s=e.overrideMaterial;e.overrideMaterial=this.material,t.render(e,n),e.overrideMaterial=s}t.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){let t=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(let e of t)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return gg}static set workaroundEnabled(t){gg=t}};var Ke={SKIP:9,SET:30,ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},O2="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",F2="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",z2="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",H2="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",G2="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",V2="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",k2="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",W2="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",X2="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Y2="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",q2="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Q2="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Z2="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",K2="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",J2="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",j2="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",$2="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",eR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",tR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",nR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",iR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",sR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",rR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",aR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",oR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",lR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",cR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",uR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",fR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",hR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",dR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",pR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",mR=new Map([[Ke.ADD,O2],[Ke.ALPHA,F2],[Ke.AVERAGE,z2],[Ke.COLOR,H2],[Ke.COLOR_BURN,G2],[Ke.COLOR_DODGE,V2],[Ke.DARKEN,k2],[Ke.DIFFERENCE,W2],[Ke.DIVIDE,X2],[Ke.DST,null],[Ke.EXCLUSION,Y2],[Ke.HARD_LIGHT,q2],[Ke.HARD_MIX,Q2],[Ke.HUE,Z2],[Ke.INVERT,K2],[Ke.INVERT_RGB,J2],[Ke.LIGHTEN,j2],[Ke.LINEAR_BURN,$2],[Ke.LINEAR_DODGE,eR],[Ke.LINEAR_LIGHT,tR],[Ke.LUMINOSITY,nR],[Ke.MULTIPLY,iR],[Ke.NEGATION,sR],[Ke.NORMAL,rR],[Ke.OVERLAY,aR],[Ke.PIN_LIGHT,oR],[Ke.REFLECT,lR],[Ke.SATURATION,cR],[Ke.SCREEN,uR],[Ke.SOFT_LIGHT,fR],[Ke.SRC,hR],[Ke.SUBTRACT,dR],[Ke.VIVID_LIGHT,pR]]),gR=class extends qn{constructor(t,e=1){super(),this._blendFunction=t,this.opacity=new xt(e)}getOpacity(){return this.opacity.value}setOpacity(t){this.opacity.value=t}get blendFunction(){return this._blendFunction}set blendFunction(t){this._blendFunction=t,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(t){this.blendFunction=t}getShaderCode(){return mR.get(this.blendFunction)}};var _g=class extends qn{constructor(t,e,{attributes:n=Jr.NONE,blendFunction:i=Ke.NORMAL,defines:s=new Map,uniforms:r=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=t,this.renderer=null,this.attributes=n,this.fragmentShader=e,this.vertexShader=o,this.defines=s,this.uniforms=r,this.extensions=a,this.blendMode=new gR(i),this.blendMode.addEventListener("change",l=>this.setChanged()),this._inputColorSpace=Mi,this._outputColorSpace=Kn}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(t){this._inputColorSpace=t,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t,this.setChanged()}set mainScene(t){}set mainCamera(t){}getName(){return this.name}setRenderer(t){this.renderer=t}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(t){this.attributes=t,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(t){this.fragmentShader=t,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(t){this.vertexShader=t,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(t,e=zi){}update(t,e,n){}setSize(t,e){}initialize(t,e,n){}dispose(){for(let t of Object.keys(this)){let e=this[t];(e instanceof Zt||e instanceof Ei||e instanceof Qt||e instanceof lr)&&this[t].dispose()}}};var bI=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])];var Ag=class extends lr{constructor(t,e,n=null){super("RenderPass",t,e),this.needsSwap=!1,this.needsDepthBlit=!0,this.clearPass=new oS,this.overrideMaterialManager=n===null?null:new rS(n),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(t){this.scene=t}set mainCamera(t){this.camera=t}get renderToScreen(){return super.renderToScreen}set renderToScreen(t){super.renderToScreen=t,this.clearPass.renderToScreen=t}get overrideMaterial(){let t=this.overrideMaterialManager;return t!==null?t.material:null}set overrideMaterial(t){let e=this.overrideMaterialManager;t!==null?e!==null?e.setMaterial(t):this.overrideMaterialManager=new rS(t):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(t){this.overrideMaterial=t}get clear(){return this.clearPass.enabled}set clear(t){this.clearPass.enabled=t}getSelection(){return this.selection}setSelection(t){this.selection=t}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(t){this.ignoreBackground=t}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(t){this.skipShadowMapUpdate=t}getClearPass(){return this.clearPass}render(t,e,n,i,s){let r=this.scene,a=this.camera,o=this.selection,l=a.layers.mask,c=r.background,f=t.shadowMap.autoUpdate,d=this.renderToScreen?null:e;o!==null&&a.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(t.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(r.background=null),this.clearPass.enabled&&this.clearPass.render(t,e),t.setRenderTarget(d),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(t,r,a):t.render(r,a),a.layers.mask=l,r.background=c,t.shadowMap.autoUpdate=f}};var wI=Math.PI*.5;var vR=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,xR="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",yR=class extends Kt{constructor(t,e,n,i,s=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:"180".replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new xt(null),depthBuffer:new xt(null),resolution:new xt(new Oe),texelSize:new xt(new Oe),cameraNear:new xt(.3),cameraFar:new xt(1e3),aspect:new xt(1),time:new xt(0)},blending:Zn,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:s}),t&&this.setShaderParts(t),e&&this.setDefines(e),n&&this.setUniforms(n),this.copyCameraSettings(i)}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setInputBuffer(t){this.uniforms.inputBuffer.value=t}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(t){this.uniforms.depthBuffer.value=t}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(t){this.defines.DEPTH_PACKING=t.toFixed(0),this.needsUpdate=!0}setDepthBuffer(t,e=zi){this.depthBuffer=t,this.depthPacking=e}setShaderData(t){this.setShaderParts(t.shaderParts),this.setDefines(t.defines),this.setUniforms(t.uniforms),this.setExtensions(t.extensions)}setShaderParts(t){return this.fragmentShader=vR.replace(tt.FRAGMENT_HEAD,t.get(tt.FRAGMENT_HEAD)||"").replace(tt.FRAGMENT_MAIN_UV,t.get(tt.FRAGMENT_MAIN_UV)||"").replace(tt.FRAGMENT_MAIN_IMAGE,t.get(tt.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=xR.replace(tt.VERTEX_HEAD,t.get(tt.VERTEX_HEAD)||"").replace(tt.VERTEX_MAIN_SUPPORT,t.get(tt.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(t){for(let e of t.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(t){for(let e of t.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(t){this.extensions={};for(let e of t)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(t){this.encodeOutput!==t&&(t?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(t){return this.encodeOutput}setOutputEncodingEnabled(t){this.encodeOutput=t}get time(){return this.uniforms.time.value}set time(t){this.uniforms.time.value=t}setDeltaTime(t){this.uniforms.time.value+=t}adoptCameraSettings(t){this.copyCameraSettings(t)}copyCameraSettings(t){t&&(this.uniforms.cameraNear.value=t.near,this.uniforms.cameraFar.value=t.far,t instanceof pn?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(t,e){let n=this.uniforms;n.resolution.value.set(t,e),n.texelSize.value.set(1/t,1/e),n.aspect.value=t/e}static get Section(){return tt}};var RI=Number("180".replace(/\D+/g,"")),Kr=255/256,DI=new Float32Array([Kr/256**3,Kr/256**2,Kr/256,Kr]),UI=new Float32Array([Kr,Kr/256,Kr/256**2,1/256**3]);function aS(t,e,n){for(let i of e){let s="$1"+t+i.charAt(0).toUpperCase()+i.slice(1),r=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(let a of n.entries())a[1]!==null&&n.set(a[0],a[1].replace(r,s))}}function _R(t,e,n){let i=e.getFragmentShader(),s=e.getVertexShader(),r=i!==void 0&&/mainImage/.test(i),a=i!==void 0&&/mainUv/.test(i);if(n.attributes|=e.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(a&&(n.attributes&Jr.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!r&&!a)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{let o=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,l=n.shaderParts,c=l.get(tt.FRAGMENT_HEAD)||"",f=l.get(tt.FRAGMENT_MAIN_UV)||"",d=l.get(tt.FRAGMENT_MAIN_IMAGE)||"",h=l.get(tt.VERTEX_HEAD)||"",p=l.get(tt.VERTEX_MAIN_SUPPORT)||"",x=new Set,_=new Set;if(a&&(f+=`	${t}MainUv(UV);
`,n.uvTransformation=!0),s!==null&&/mainSupport/.test(s)){let g=/mainSupport *\([\w\s]*?uv\s*?\)/.test(s);p+=`	${t}MainSupport(`,p+=g?`vUv);
`:`);
`;for(let v of s.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(let y of v[1].split(/\s*,\s*/))n.varyings.add(y),x.add(y),_.add(y);for(let v of s.matchAll(o))_.add(v[1])}for(let g of i.matchAll(o))_.add(g[1]);for(let g of e.defines.keys())_.add(g.replace(/\([\w\s,]*\)/g,""));for(let g of e.uniforms.keys())_.add(g);_.delete("while"),_.delete("for"),_.delete("if"),e.uniforms.forEach((g,v)=>n.uniforms.set(t+v.charAt(0).toUpperCase()+v.slice(1),g)),e.defines.forEach((g,v)=>n.defines.set(t+v.charAt(0).toUpperCase()+v.slice(1),g));let m=new Map([["fragment",i],["vertex",s]]);aS(t,_,n.defines),aS(t,_,m),i=m.get("fragment"),s=m.get("vertex");let u=e.blendMode;if(n.blendModes.set(u.blendFunction,u),r){e.inputColorSpace!==null&&e.inputColorSpace!==n.colorSpace&&(d+=e.inputColorSpace===Tt?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==Kn?n.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(n.colorSpace=e.inputColorSpace);let g=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;d+=`${t}MainImage(color0, UV, `,(n.attributes&Jr.DEPTH)!==0&&g.test(i)&&(d+="depth, ",n.readDepth=!0),d+=`color1);
	`;let v=t+"BlendOpacity";n.uniforms.set(v,u.opacity),d+=`color0 = blend${u.blendFunction}(color0, color1, ${v});

	`,c+=`uniform float ${v};

`}if(c+=i+`
`,s!==null&&(h+=s+`
`),l.set(tt.FRAGMENT_HEAD,c),l.set(tt.FRAGMENT_MAIN_UV,f),l.set(tt.FRAGMENT_MAIN_IMAGE,d),l.set(tt.VERTEX_HEAD,h),l.set(tt.VERTEX_MAIN_SUPPORT,p),e.extensions!==null)for(let g of e.extensions)n.extensions.add(g)}}var Sg=class extends lr{constructor(t,...e){super("EffectPass"),this.fullscreenMaterial=new yR(null,null,null,t),this.listener=n=>this.handleEvent(n),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(t){for(let e of this.effects)e.mainScene=t}set mainCamera(t){this.fullscreenMaterial.copyCameraSettings(t);for(let e of this.effects)e.mainCamera=t}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(t){this.fullscreenMaterial.encodeOutput=t}get dithering(){return this.fullscreenMaterial.dithering}set dithering(t){let e=this.fullscreenMaterial;e.dithering=t,e.needsUpdate=!0}setEffects(t){for(let e of this.effects)e.removeEventListener("change",this.listener);this.effects=t.sort((e,n)=>n.attributes-e.attributes);for(let e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){let t=new N2,e=0;for(let a of this.effects)if(a.blendMode.blendFunction===Ke.DST)t.attributes|=a.getAttributes()&Jr.DEPTH;else{if((t.attributes&a.getAttributes()&Jr.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${a.name})`);_R("e"+e++,a,t)}let n=t.shaderParts.get(tt.FRAGMENT_HEAD),i=t.shaderParts.get(tt.FRAGMENT_MAIN_IMAGE),s=t.shaderParts.get(tt.FRAGMENT_MAIN_UV),r=/\bblend\b/g;for(let a of t.blendModes.values())n+=a.getShaderCode().replace(r,`blend${a.blendFunction}`)+`
`;(t.attributes&Jr.DEPTH)!==0?(t.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,t.colorSpace===Tt&&(i+=`color0 = sRGBToLinear(color0);
	`),t.uvTransformation?(s=`vec2 transformedUv = vUv;
`+s,t.defines.set("UV","transformedUv")):t.defines.set("UV","vUv"),t.shaderParts.set(tt.FRAGMENT_HEAD,n),t.shaderParts.set(tt.FRAGMENT_MAIN_IMAGE,i),t.shaderParts.set(tt.FRAGMENT_MAIN_UV,s);for(let[a,o]of t.shaderParts)o!==null&&t.shaderParts.set(a,o.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(t)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(t,e=zi){this.fullscreenMaterial.depthBuffer=t,this.fullscreenMaterial.depthPacking=e;for(let n of this.effects)n.setDepthTexture(t,e)}render(t,e,n,i,s){for(let r of this.effects)r.update(t,e,i);if(!this.skipRendering||this.renderToScreen){let r=this.fullscreenMaterial;r.inputBuffer=e.texture,r.time+=i*this.timeScale,t.setRenderTarget(this.renderToScreen?null:n),t.render(this.scene,this.camera)}}setSize(t,e){this.fullscreenMaterial.setSize(t,e);for(let n of this.effects)n.setSize(t,e)}initialize(t,e,n){this.renderer=t;for(let i of this.effects)i.initialize(t,e,n);this.updateMaterial(),n!==void 0&&n!==un&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(let t of this.effects)t.removeEventListener("change",this.listener),t.dispose()}handleEvent(t){t.type==="change"&&this.recompile()}};var II=[new Float32Array(3),new Float32Array(3)],LI=[new Float32Array(3),new Float32Array(3),new Float32Array(3),new Float32Array(3)],PI=[[new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,0,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([1,0,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([0,1,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([0,1,1]),new Float32Array([1,1,1])]];var NI=[new Float32Array(2),new Float32Array(2)];var OI=new Float32Array([0,-.25,.25,-.125,.125,-.375,.375]),FI=[new Float32Array([0,0]),new Float32Array([.25,-.25]),new Float32Array([-.25,.25]),new Float32Array([.125,-.125]),new Float32Array([-.125,.125])],zI=[new Uint8Array([0,0]),new Uint8Array([3,0]),new Uint8Array([0,3]),new Uint8Array([3,3]),new Uint8Array([1,0]),new Uint8Array([4,0]),new Uint8Array([1,3]),new Uint8Array([4,3]),new Uint8Array([0,1]),new Uint8Array([3,1]),new Uint8Array([0,4]),new Uint8Array([3,4]),new Uint8Array([1,1]),new Uint8Array([4,1]),new Uint8Array([1,4]),new Uint8Array([4,4])],HI=[new Uint8Array([0,0]),new Uint8Array([1,0]),new Uint8Array([0,2]),new Uint8Array([1,2]),new Uint8Array([2,0]),new Uint8Array([3,0]),new Uint8Array([2,2]),new Uint8Array([3,2]),new Uint8Array([0,1]),new Uint8Array([1,1]),new Uint8Array([0,3]),new Uint8Array([1,3]),new Uint8Array([2,1]),new Uint8Array([3,1]),new Uint8Array([2,3]),new Uint8Array([3,3])];var GI=new Map([[xn(0,0,0,0),new Float32Array([0,0,0,0])],[xn(0,0,0,1),new Float32Array([0,0,0,1])],[xn(0,0,1,0),new Float32Array([0,0,1,0])],[xn(0,0,1,1),new Float32Array([0,0,1,1])],[xn(0,1,0,0),new Float32Array([0,1,0,0])],[xn(0,1,0,1),new Float32Array([0,1,0,1])],[xn(0,1,1,0),new Float32Array([0,1,1,0])],[xn(0,1,1,1),new Float32Array([0,1,1,1])],[xn(1,0,0,0),new Float32Array([1,0,0,0])],[xn(1,0,0,1),new Float32Array([1,0,0,1])],[xn(1,0,1,0),new Float32Array([1,0,1,0])],[xn(1,0,1,1),new Float32Array([1,0,1,1])],[xn(1,1,0,0),new Float32Array([1,1,0,0])],[xn(1,1,0,1),new Float32Array([1,1,0,1])],[xn(1,1,1,0),new Float32Array([1,1,1,0])],[xn(1,1,1,1),new Float32Array([1,1,1,1])]]);function vg(t,e,n){return t+(e-t)*n}function xn(t,e,n,i){let s=vg(t,e,.75),r=vg(n,i,1-.25);return vg(s,r,1-.125)}var cr=$r(ic(),1);var dS=$r(Kl(),1),MR=()=>{let e=document.createElement("canvas");e.width=64,e.height=64;let n=e.getContext("2d");if(!n)throw new Error("2D context not available");n.fillStyle="black",n.fillRect(0,0,e.width,e.height);let i=new Qt(e);i.minFilter=kt,i.magFilter=kt,i.generateMipmaps=!1;let s=[],r=null,a=64,o=.1*64,l=1/a,c=()=>{n.fillStyle="black",n.fillRect(0,0,e.width,e.height)},f=p=>{let x={x:p.x*64,y:(1-p.y)*64},_=1,m=y=>Math.sin(y*Math.PI/2),u=y=>-y*(y-2);p.age<a*.3?_=m(p.age/(a*.3)):_=u(1-(p.age-a*.3)/(a*.7))||0,_*=p.force;let g=`${(p.vx+1)/2*255}, ${(p.vy+1)/2*255}, ${_*255}`,v=320;n.shadowOffsetX=v,n.shadowOffsetY=v,n.shadowBlur=o,n.shadowColor=`rgba(${g},${.22*_})`,n.beginPath(),n.fillStyle="rgba(255,0,0,1)",n.arc(x.x-v,x.y-v,o,0,Math.PI*2),n.fill()};return{canvas:e,texture:i,addTouch:p=>{let x=0,_=0,m=0;if(r){let u=p.x-r.x,g=p.y-r.y;if(u===0&&g===0)return;let v=u*u+g*g,y=Math.sqrt(v);_=u/(y||1),m=g/(y||1),x=Math.min(v*1e4,1)}r={x:p.x,y:p.y},s.push({x:p.x,y:p.y,age:0,force:x,vx:_,vy:m})},update:()=>{c();for(let p=s.length-1;p>=0;p--){let x=s[p],_=x.force*l*(1-x.age/a);x.x+=x.vx*_,x.y+=x.vy*_,x.age++,x.age>a&&s.splice(p,1)}for(let p=0;p<s.length;p++)f(s[p]);i.needsUpdate=!0},set radiusScale(p){o=.1*64*p},get radiusScale(){return o/(.1*64)},size:64}},ER=(t,e)=>{let n=`
    uniform sampler2D uTexture;
    uniform float uStrength;
    uniform float uTime;
    uniform float uFreq;

    void mainUv(inout vec2 uv) {
      vec4 tex = texture2D(uTexture, uv);
      float vx = tex.r * 2.0 - 1.0;
      float vy = tex.g * 2.0 - 1.0;
      float intensity = tex.b;

      float wave = 0.5 + 0.5 * sin(uTime * uFreq + intensity * 6.2831853);

      float amt = uStrength * intensity * wave;

      uv += vec2(vx, vy) * amt;
    }
    `;return new _g("LiquidEffect",n,{uniforms:new Map([["uTexture",new xt(t)],["uStrength",new xt(e?.strength??.025)],["uTime",new xt(0)],["uFreq",new xt(e?.freq??4.5)]])})},fS={square:0,circle:1,triangle:2,diamond:3},TR=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,bR=`
precision highp float;

uniform vec3  uColor;
uniform vec2  uResolution;
uniform float uTime;
uniform float uPixelSize;
uniform float uScale;
uniform float uDensity;
uniform float uPixelJitter;
uniform int   uEnableRipples;
uniform float uRippleSpeed;
uniform float uRippleThickness;
uniform float uRippleIntensity;
uniform float uEdgeFade;

uniform int   uShapeType;
const int SHAPE_SQUARE   = 0;
const int SHAPE_CIRCLE   = 1;
const int SHAPE_TRIANGLE = 2;
const int SHAPE_DIAMOND  = 3;

const int   MAX_CLICKS = 10;

uniform vec2  uClickPos  [MAX_CLICKS];
uniform float uClickTimes[MAX_CLICKS];

out vec4 fragColor;

float Bayer2(vec2 a) {
  a = floor(a);
  return fract(a.x / 2. + a.y * a.y * .75);
}
#define Bayer4(a) (Bayer2(.5*(a))*0.25 + Bayer2(a))
#define Bayer8(a) (Bayer4(.5*(a))*0.25 + Bayer2(a))

#define FBM_OCTAVES     5
#define FBM_LACUNARITY  1.25
#define FBM_GAIN        1.0

float hash11(float n){ return fract(sin(n)*43758.5453); }

float vnoise(vec3 p){
  vec3 ip = floor(p);
  vec3 fp = fract(p);
  float n000 = hash11(dot(ip + vec3(0.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n100 = hash11(dot(ip + vec3(1.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n010 = hash11(dot(ip + vec3(0.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n110 = hash11(dot(ip + vec3(1.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n001 = hash11(dot(ip + vec3(0.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n101 = hash11(dot(ip + vec3(1.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n011 = hash11(dot(ip + vec3(0.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  float n111 = hash11(dot(ip + vec3(1.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  vec3 w = fp*fp*fp*(fp*(fp*6.0-15.0)+10.0);
  float x00 = mix(n000, n100, w.x);
  float x10 = mix(n010, n110, w.x);
  float x01 = mix(n001, n101, w.x);
  float x11 = mix(n011, n111, w.x);
  float y0  = mix(x00, x10, w.y);
  float y1  = mix(x01, x11, w.y);
  return mix(y0, y1, w.z) * 2.0 - 1.0;
}

float fbm2(vec2 uv, float t){
  vec3 p = vec3(uv * uScale, t);
  float amp = 1.0;
  float freq = 1.0;
  float sum = 1.0;
  for (int i = 0; i < FBM_OCTAVES; ++i){
    sum  += amp * vnoise(p * freq);
    freq *= FBM_LACUNARITY;
    amp  *= FBM_GAIN;
  }
  return sum * 0.5 + 0.5;
}

float maskCircle(vec2 p, float cov){
  float r = sqrt(cov) * .25;
  float d = length(p - 0.5) - r;
  float aa = 0.5 * fwidth(d);
  return cov * (1.0 - smoothstep(-aa, aa, d * 2.0));
}

float maskTriangle(vec2 p, vec2 id, float cov){
  bool flip = mod(id.x + id.y, 2.0) > 0.5;
  if (flip) p.x = 1.0 - p.x;
  float r = sqrt(cov);
  float d  = p.y - r*(1.0 - p.x);
  float aa = fwidth(d);
  return cov * clamp(0.5 - d/aa, 0.0, 1.0);
}

float maskDiamond(vec2 p, float cov){
  float r = sqrt(cov) * 0.564;
  return step(abs(p.x - 0.49) + abs(p.y - 0.49), r);
}

void main(){
  float pixelSize = uPixelSize;
  vec2 fragCoord = gl_FragCoord.xy - uResolution * .5;
  float aspectRatio = uResolution.x / uResolution.y;

  vec2 pixelId = floor(fragCoord / pixelSize);
  vec2 pixelUV = fract(fragCoord / pixelSize);

  float cellPixelSize = 8.0 * pixelSize;
  vec2 cellId = floor(fragCoord / cellPixelSize);
  vec2 cellCoord = cellId * cellPixelSize;
  vec2 uv = cellCoord / uResolution * vec2(aspectRatio, 1.0);

  float base = fbm2(uv, uTime * 0.05);
  base = base * 0.5 - 0.65;

  float feed = base + (uDensity - 0.5) * 0.3;

  float speed     = uRippleSpeed;
  float thickness = uRippleThickness;
  const float dampT     = 1.0;
  const float dampR     = 10.0;

  if (uEnableRipples == 1) {
    for (int i = 0; i < MAX_CLICKS; ++i){
      vec2 pos = uClickPos[i];
      if (pos.x < 0.0) continue;
      float cellPixelSize = 8.0 * pixelSize;
      vec2 cuv = (((pos - uResolution * .5 - cellPixelSize * .5) / (uResolution))) * vec2(aspectRatio, 1.0);
      float t = max(uTime - uClickTimes[i], 0.0);
      float r = distance(uv, cuv);
      float waveR = speed * t;
      float ring  = exp(-pow((r - waveR) / thickness, 2.0));
      float atten = exp(-dampT * t) * exp(-dampR * r);
      feed = max(feed, ring * atten * uRippleIntensity);
    }
  }

  float bayer = Bayer8(fragCoord / uPixelSize) - 0.5;
  float bw = step(0.5, feed + bayer);

  float h = fract(sin(dot(floor(fragCoord / uPixelSize), vec2(127.1, 311.7))) * 43758.5453);
  float jitterScale = 1.0 + (h - 0.5) * uPixelJitter;
  float coverage = bw * jitterScale;
  float M;
  if      (uShapeType == SHAPE_CIRCLE)   M = maskCircle (pixelUV, coverage);
  else if (uShapeType == SHAPE_TRIANGLE) M = maskTriangle(pixelUV, pixelId, coverage);
  else if (uShapeType == SHAPE_DIAMOND)  M = maskDiamond(pixelUV, coverage);
  else                                   M = coverage;

  if (uEdgeFade > 0.0) {
    vec2 norm = gl_FragCoord.xy / uResolution;
    float edge = min(min(norm.x, norm.y), min(1.0 - norm.x, 1.0 - norm.y));
    float fade = smoothstep(0.0, uEdgeFade, edge);
    M *= fade;
  }

  vec3 color = uColor;

  // sRGB gamma correction - convert linear to sRGB for accurate color output
  vec3 srgbColor = mix(
    color * 12.92,
    1.055 * pow(color, vec3(1.0 / 2.4)) - 0.055,
    step(0.0031308, color)
  );

  fragColor = vec4(srgbColor, M);
}
`,Mg=10,wR=({variant:t="square",pixelSize:e=3,color:n="#B497CF",className:i,style:s,antialias:r=!0,patternScale:a=2,patternDensity:o=1,liquid:l=!1,liquidStrength:c=.1,liquidRadius:f=1,pixelSizeJitter:d=0,enableRipples:h=!0,rippleIntensityScale:p=1,rippleThickness:x=.1,rippleSpeed:_=.3,liquidWobbleSpeed:m=4.5,autoPauseOffscreen:u=!0,speed:g=.5,transparent:v=!0,edgeFade:y=.5,noiseAmount:b=0})=>{let C=(0,cr.useRef)(null),w=(0,cr.useRef)({visible:!0}),U=(0,cr.useRef)(g),M=(0,cr.useRef)(null),E=(0,cr.useRef)(null);return(0,cr.useEffect)(()=>{let D=C.current;if(!D)return;U.current=g;let G=["antialias","liquid","noiseAmount"],k={antialias:r,liquid:l,noiseAmount:b},Y=!1;if(!M.current)Y=!0;else if(E.current){for(let O of G)if(E.current[O]!==k[O]){Y=!0;break}}if(Y){if(M.current){let le=M.current;le.resizeObserver?.disconnect(),cancelAnimationFrame(le.raf),le.quad?.geometry.dispose(),le.material.dispose(),le.composer?.dispose(),le.renderer.dispose(),le.renderer.forceContextLoss(),le.renderer.domElement.parentElement===D&&D.removeChild(le.renderer.domElement),M.current=null}let O=document.createElement("canvas"),N=new dh({canvas:O,antialias:r,alpha:!0,powerPreference:"high-performance"});N.domElement.style.width="100%",N.domElement.style.height="100%",N.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),D.appendChild(N.domElement),v?N.setClearAlpha(0):N.setClearColor(0,1);let J={uResolution:{value:new Oe(0,0)},uTime:{value:0},uColor:{value:new Ze(n)},uClickPos:{value:Array.from({length:Mg},()=>new Oe(-1,-1))},uClickTimes:{value:new Float32Array(Mg)},uShapeType:{value:fS[t]??0},uPixelSize:{value:e*N.getPixelRatio()},uScale:{value:a},uDensity:{value:o},uPixelJitter:{value:d},uEnableRipples:{value:h?1:0},uRippleSpeed:{value:_},uRippleThickness:{value:x},uRippleIntensity:{value:p},uEdgeFade:{value:y}},V=new er,se=new ir(-1,1,1,-1,0,1),pe=new Kt({vertexShader:TR,fragmentShader:bR,uniforms:J,transparent:!0,depthTest:!1,depthWrite:!1,glslVersion:ql}),Me=new Gr(2,2),He=new gn(Me,pe);V.add(He);let rt=new Hl,dt=()=>{let le=D.clientWidth||1,re=D.clientHeight||1;N.setSize(le,re,!1),J.uResolution.value.set(N.domElement.width,N.domElement.height),M.current?.composer&&M.current.composer.setSize(N.domElement.width,N.domElement.height),J.uPixelSize.value=e*N.getPixelRatio()};dt();let je=new ResizeObserver(dt);je.observe(D);let K=(()=>{if(typeof window<"u"&&window.crypto?.getRandomValues){let le=new Uint32Array(1);return window.crypto.getRandomValues(le),le[0]/4294967295}return Math.random()})()*1e3,oe,Te,ve;if(l){Te=MR(),Te.radiusScale=f,oe=new yg(N);let le=new Ag(V,se);ve=ER(Te.texture,{strength:c,freq:m});let re=new Sg(se,ve);re.renderToScreen=!0,oe.addPass(le),oe.addPass(re)}if(b>0){oe||(oe=new yg(N),oe.addPass(new Ag(V,se)));let le=new _g("NoiseEffect","uniform float uTime; uniform float uAmount; float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453);} void mainUv(inout vec2 uv){} void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){ float n=hash(floor(uv*vec2(1920.0,1080.0))+floor(uTime*60.0)); float g=(n-0.5)*uAmount; outputColor=inputColor+vec4(vec3(g),0.0);} ",{uniforms:new Map([["uTime",new xt(0)],["uAmount",new xt(b)]])}),re=new Sg(se,le);re.renderToScreen=!0,oe&&oe.passes.length>0&&oe.passes.forEach(Je=>Je.renderToScreen=!1),oe.addPass(re)}oe&&oe.setSize(N.domElement.width,N.domElement.height);let Ve=le=>{let re=N.domElement.getBoundingClientRect(),Je=N.domElement.width/re.width,de=N.domElement.height/re.height,Ie=(le.clientX-re.left)*Je,Ot=(re.height-(le.clientY-re.top))*de;return{fx:Ie,fy:Ot,w:N.domElement.width,h:N.domElement.height}},$t=le=>{let{fx:re,fy:Je}=Ve(le),de=M.current?.clickIx??0;J.uClickPos.value[de].set(re,Je),J.uClickTimes.value[de]=J.uTime.value,M.current&&(M.current.clickIx=(de+1)%Mg)},R=le=>{if(!Te)return;let{fx:re,fy:Je,w:de,h:Ie}=Ve(le);Te.addTouch({x:re/de,y:Je/Ie})};N.domElement.addEventListener("pointerdown",$t,{passive:!0}),N.domElement.addEventListener("pointermove",R,{passive:!0});let at=0,Be=()=>{if(u&&!w.current.visible){at=requestAnimationFrame(Be);return}J.uTime.value=K+rt.getElapsedTime()*U.current,ve&&(ve.uniforms.get("uTime").value=J.uTime.value),oe?(Te&&Te.update(),oe.passes.forEach(le=>{let re=le.effects;re&&re.forEach(Je=>{let de=Je.uniforms?.get("uTime");de&&(de.value=J.uTime.value)})}),oe.render()):N.render(V,se),at=requestAnimationFrame(Be)};at=requestAnimationFrame(Be),M.current={renderer:N,scene:V,camera:se,material:pe,clock:rt,clickIx:0,uniforms:J,resizeObserver:je,raf:at,quad:He,timeOffset:K,composer:oe,touch:Te,liquidEffect:ve}}else{let O=M.current;if(O.uniforms.uShapeType.value=fS[t]??0,O.uniforms.uPixelSize.value=e*O.renderer.getPixelRatio(),O.uniforms.uColor.value.set(n),O.uniforms.uScale.value=a,O.uniforms.uDensity.value=o,O.uniforms.uPixelJitter.value=d,O.uniforms.uEnableRipples.value=h?1:0,O.uniforms.uRippleIntensity.value=p,O.uniforms.uRippleThickness.value=x,O.uniforms.uRippleSpeed.value=_,O.uniforms.uEdgeFade.value=y,v?O.renderer.setClearAlpha(0):O.renderer.setClearColor(0,1),O.liquidEffect){let N=O.liquidEffect;N&&(N.value=c);let J=O.liquidEffect.uniforms.get("uFreq");J&&(J.value=m)}O.touch&&(O.touch.radiusScale=f)}return E.current=k,()=>{if(M.current&&Y||!M.current)return;let O=M.current;O.resizeObserver?.disconnect(),cancelAnimationFrame(O.raf),O.quad?.geometry.dispose(),O.material.dispose(),O.composer?.dispose(),O.renderer.dispose(),O.renderer.forceContextLoss(),O.renderer.domElement.parentElement===D&&D.removeChild(O.renderer.domElement),M.current=null}},[r,l,b,e,a,o,h,p,x,_,d,y,v,c,f,m,u,t,n,g]),(0,dS.jsx)("div",{ref:C,className:`pixel-blast-container ${i??""}`,style:s,"aria-label":"PixelBlast interactive background"})},hS=wR;var gS=$r(Kl(),1),pS=document.getElementById("page-pixel-blast");if(pS){let t=window.matchMedia("(max-width: 767px)").matches,e=window.matchMedia("(prefers-reduced-motion: reduce)").matches;(0,mS.createRoot)(pS).render((0,gS.jsx)(hS,{variant:"square",pixelSize:t?7:6,color:"#18BFA8",patternScale:t?3.5:3,patternDensity:t?.55:.68,pixelSizeJitter:.12,enableRipples:!1,speed:e?0:.3,transparent:!0,edgeFade:.32,autoPauseOffscreen:!0}))}
/*! Bundled license information:

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

postprocessing/build/index.js:
  (**
   * postprocessing v6.39.4 build Mon Jul 27 2026
   * https://github.com/pmndrs/postprocessing
   * Copyright 2015-2026 Raoul van Rüschen
   * @license Zlib
   *)
*/
