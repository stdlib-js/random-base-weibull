// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.2.1-esm/index.mjs";import{factory as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@v0.2.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import{isPrimitive as h}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.2.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.2.1-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.2.1-esm/index.mjs";function u(e,t,n){return n*f(-j(1-e()),1/t)}function c(){var f,j,c,g,v,b;if(0===arguments.length)c=m();else if(1===arguments.length){if(!s(j=arguments[0]))throw new TypeError(a("0pD2V",j));if(i(j,"prng")){if(!r(j.prng))throw new TypeError(a("0pD6u","prng",j.prng));c=j.prng}else c=m(j)}else{if(v=function(e,t){return h(e)?h(t)?null:new TypeError(a("0pD7d",t)):new TypeError(a("0pD7c",e))}(f=arguments[1],b=arguments[0]))throw v;if(arguments.length>2){if(!s(j=arguments[2]))throw new TypeError(a("0pD2V",j));if(i(j,"prng")){if(!r(j.prng))throw new TypeError(a("0pD6u","prng",j.prng));c=j.prng}else c=m(j)}else c=m()}return e(g=void 0===f?function(e,t){if(l(e)||l(t)||e<=0||t<=0)return NaN;return u(c,e,t)}:function(){return u(c,b,f)},"NAME","weibull"),j&&j.prng?(e(g,"seed",null),e(g,"seedLength",null),n(g,"state",o(null),d),e(g,"stateLength",null),e(g,"byteLength",null),e(g,"toJSON",o(null)),e(g,"PRNG",c)):(t(g,"seed",(function(){return c.seed})),t(g,"seedLength",(function(){return c.seedLength})),n(g,"state",(function(){return c.state}),(function(e){c.state=e})),t(g,"stateLength",(function(){return c.stateLength})),t(g,"byteLength",(function(){return c.byteLength})),e(g,"toJSON",(function(){var e={type:"PRNG"};e.name=g.NAME,e.state=p(c.state),e.params=void 0===b?[]:[b,f];return e})),e(g,"PRNG",c),c=c.normalized),g}var g=c();e(g,"factory",c);export{g as default,c as factory};
//# sourceMappingURL=index.mjs.map
