"use strict";(("undefined"!=typeof self?self:this).webpackChunk_polkadot_apps=("undefined"!=typeof self?self:this).webpackChunk_polkadot_apps||[]).push([[9065],{69413:(e,t,r)=>{const n=r(31493);e.exports=f;const s=function(){function e(e){return void 0!==e&&e}try{return"undefined"!=typeof globalThis||Object.defineProperty(Object.prototype,"globalThis",{get:function(){return delete Object.prototype.globalThis,this.globalThis=this},configurable:!0}),globalThis}catch(t){return e(self)||e(window)||e(this)||{}}}().console||{},i={mapHttpRequest:p,mapHttpResponse:p,wrapRequestSerializer:m,wrapResponseSerializer:m,wrapErrorSerializer:m,req:p,res:p,err:d,errWithCause:d};function l(e,t){return"silent"===e?1/0:t.levels.values[e]}const o=Symbol("pino.logFuncs"),a=Symbol("pino.hierarchy"),c={error:"log",fatal:"error",warn:"error",info:"log",debug:"log",trace:"log"};function u(e,t){const r={logger:t,parent:e[a]};t[a]=r}function f(e){(e=e||{}).browser=e.browser||{};const t=e.browser.transmit;if(t&&"function"!=typeof t.send)throw Error("pino: transmit option must have a send function");const r=e.browser.write||s;e.browser.write&&(e.browser.asObject=!0);const n=e.serializers||{},i=function(e,t){return Array.isArray(e)?e.filter((function(e){return"!stdSerializers.err"!==e})):!0===e&&Object.keys(t)}(e.browser.serialize,n);let a=e.browser.serialize;Array.isArray(e.browser.serialize)&&e.browser.serialize.indexOf("!stdSerializers.err")>-1&&(a=!1);const d=Object.keys(e.customLevels||{}),p=["error","fatal","warn","info","debug","trace"].concat(d);"function"==typeof r&&p.forEach((function(e){r[e]=r})),(!1===e.enabled||e.browser.disabled)&&(e.level="silent");const m=e.level||"info",y=Object.create(r);y.log||(y.log=w),function(e,t,r){const n={};t.forEach((e=>{n[e]=r[e]?r[e]:s[e]||s[c[e]||"log"]||w})),e[o]=n}(y,p,r),u({},y),Object.defineProperty(y,"levelVal",{get:function(){return l(this.level,this)}}),Object.defineProperty(y,"level",{get:function(){return this._level},set:function(e){if("silent"!==e&&!this.levels.values[e])throw Error("unknown level "+e);this._level=e,h(this,z,y,"error"),h(this,z,y,"fatal"),h(this,z,y,"warn"),h(this,z,y,"info"),h(this,z,y,"debug"),h(this,z,y,"trace"),d.forEach((e=>{h(this,z,y,e)}))}});const z={transmit:t,serialize:i,asObject:e.browser.asObject,formatters:e.browser.formatters,levels:p,timestamp:g(e),messageKey:e.messageKey||"msg",onChild:e.onChild||w};function O(r,s,l){if(!s)throw new Error("missing bindings for child Pino");l=l||{},i&&s.serializers&&(l.serializers=s.serializers);const o=l.serializers;if(i&&o){var a=Object.assign({},n,o),c=!0===e.browser.serialize?Object.keys(a):i;delete s.serializers,v([s],c,a,this._stdErrSerialize)}function f(e){this._childLevel=1+(0|e._childLevel),this.bindings=s,a&&(this.serializers=a,this._serialize=c),t&&(this._logEvent=b([].concat(e._logEvent.bindings,s)))}f.prototype=this;const h=new f(this);return u(this,h),h.child=function(...e){return O.call(this,r,...e)},h.level=l.level||this.level,r.onChild(h),h}return y.levels=function(e){const t=e.customLevels||{};return{values:Object.assign({},f.levels.values,t),labels:Object.assign({},f.levels.labels,function(e){const t={};return Object.keys(e).forEach((function(r){t[e[r]]=r})),t}(t))}}(e),y.level=m,y.setMaxListeners=y.getMaxListeners=y.emit=y.addListener=y.on=y.prependListener=y.once=y.prependOnceListener=y.removeListener=y.removeAllListeners=y.listeners=y.listenerCount=y.eventNames=y.write=y.flush=w,y.serializers=n,y._serialize=i,y._stdErrSerialize=a,y.child=function(...e){return O.call(this,z,...e)},t&&(y._logEvent=b()),y}function h(e,t,r,i){if(Object.defineProperty(e,i,{value:l(e.level,r)>l(i,r)?w:r[o][i],writable:!0,enumerable:!0,configurable:!0}),e[i]===w){if(!t.transmit)return;const n=l(t.transmit.level||e.level,r);if(l(i,r)<n)return}e[i]=function(e,t,r,i){return a=e[o][i],function(){const o=t.timestamp(),c=new Array(arguments.length),u=Object.getPrototypeOf&&Object.getPrototypeOf(this)===s?s:this;for(var f=0;f<c.length;f++)c[f]=arguments[f];var h=!1;if(t.serialize&&(v(c,this._serialize,this.serializers,this._stdErrSerialize),h=!0),t.asObject||t.formatters?a.call(u,function(e,t,r,s,i){const{level:l,log:o=(e=>e)}=i.formatters||{},a=r.slice();let c=a[0];const u={};if(s&&(u.time=s),l){const r=l(t,e.levels.values[t]);Object.assign(u,r)}else u.level=e.levels.values[t];let f=1+(0|e._childLevel);if(f<1&&(f=1),null!==c&&"object"==typeof c){for(;f--&&"object"==typeof a[0];)Object.assign(u,a.shift());c=a.length?n(a.shift(),a):void 0}else"string"==typeof c&&(c=n(a.shift(),a));return void 0!==c&&(u[i.messageKey]=c),o(u)}(this,i,c,o,t)):a.apply(u,c),t.transmit){const n=t.transmit.level||e._level,s=l(n,r),a=l(i,r);if(a<s)return;!function(e,t,r,n=!1){const s=t.send,i=t.ts,l=t.methodLevel,o=t.methodValue,a=t.val,c=e._logEvent.bindings;n||v(r,e._serialize||Object.keys(e.serializers),e.serializers,void 0===e._stdErrSerialize||e._stdErrSerialize),e._logEvent.ts=i,e._logEvent.messages=r.filter((function(e){return-1===c.indexOf(e)})),e._logEvent.level.label=l,e._logEvent.level.value=o,s(l,e._logEvent,a),e._logEvent=b(c)}(this,{ts:o,methodLevel:i,methodValue:a,transmitLevel:n,transmitValue:r.levels.values[t.transmit.level||e._level],send:t.transmit.send,val:l(e._level,r)},c,h)}};var a}(e,t,r,i);const c=function(e){const t=[];e.bindings&&t.push(e.bindings);let r=e[a];for(;r.parent;)r=r.parent,r.logger.bindings&&t.push(r.logger.bindings);return t.reverse()}(e);0!==c.length&&(e[i]=function(e,t){return function(){return t.apply(this,[...e,...arguments])}}(c,e[i]))}function v(e,t,r,n){for(const s in e)if(n&&e[s]instanceof Error)e[s]=f.stdSerializers.err(e[s]);else if("object"==typeof e[s]&&!Array.isArray(e[s])&&t)for(const n in e[s])t.indexOf(n)>-1&&n in r&&(e[s][n]=r[n](e[s][n]))}function b(e){return{ts:0,messages:[],bindings:e||[],level:{label:"",value:0}}}function d(e){const t={type:e.constructor.name,msg:e.message,stack:e.stack};for(const r in e)void 0===t[r]&&(t[r]=e[r]);return t}function g(e){return"function"==typeof e.timestamp?e.timestamp:!1===e.timestamp?y:z}function p(){return{}}function m(e){return e}function w(){}function y(){return!1}function z(){return Date.now()}f.levels={values:{fatal:60,error:50,warn:40,info:30,debug:20,trace:10},labels:{10:"trace",20:"debug",30:"info",40:"warn",50:"error",60:"fatal"}},f.stdSerializers=i,f.stdTimeFunctions=Object.assign({},{nullTime:y,epochTime:z,unixTime:function(){return Math.round(Date.now()/1e3)},isoTime:function(){return new Date(Date.now()).toISOString()}}),e.exports.default=f,e.exports.pino=f}}]);