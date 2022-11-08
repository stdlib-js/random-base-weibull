// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.0.13-esm/index.mjs";import{factory as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import{isPrimitive as a}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";function u(e,t){return a(e)?a(t)?null:new TypeError(h("0PV7v",t)):new TypeError(h("0PV7u",e))}function c(e,t,s){return s*j(-f(1-e()),1/t)}function g(){var a,j,f,g,b,v;if(0===arguments.length)f=m();else if(1===arguments.length){if(!n(j=arguments[0]))throw new TypeError(h("0PV2h",j));if(i(j,"prng")){if(!r(j.prng))throw new TypeError(h("0PV7M","prng",j.prng));f=j.prng}else f=m(j)}else{if(b=u(a=arguments[1],v=arguments[0]))throw b;if(arguments.length>2){if(!n(j=arguments[2]))throw new TypeError(h("0PV2h",j));if(i(j,"prng")){if(!r(j.prng))throw new TypeError(h("0PV7M","prng",j.prng));f=j.prng}else f=m(j)}else f=m()}return e(g=void 0===a?V:T,"NAME","weibull"),j&&j.prng?(e(g,"seed",null),e(g,"seedLength",null),s(g,"state",o(null),d),e(g,"stateLength",null),e(g,"byteLength",null),e(g,"toJSON",o(null)),e(g,"PRNG",f)):(t(g,"seed",y),t(g,"seedLength",x),s(g,"state",N,P),t(g,"stateLength",w),t(g,"byteLength",L),e(g,"toJSON",E),e(g,"PRNG",f),f=f.normalized),g;function y(){return f.seed}function x(){return f.seedLength}function w(){return f.stateLength}function L(){return f.byteLength}function N(){return f.state}function P(e){f.state=e}function E(){var e={type:"PRNG"};return e.name=g.NAME,e.state=p(f.state),e.params=void 0===v?[]:[v,a],e}function T(){return c(f,v,a)}function V(e,t){return l(e)||l(t)||e<=0||t<=0?NaN:c(f,e,t)}}var b=g();e(b,"factory",g);export{b as default,g as factory};
//# sourceMappingURL=index.mjs.map
