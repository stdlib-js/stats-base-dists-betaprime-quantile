"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=c(function(g,s){
var N=require('@stdlib/math-base-special-betaincinv/dist'),u=require('@stdlib/math-base-assert-is-nan/dist');function x(e,r,i){var n;return u(e)||u(r)||u(i)||r<=0||i<=0||e<0||e>1?NaN:(n=N(e,r,i),n/(1-n))}s.exports=x
});var q=c(function(j,o){
var y=require('@stdlib/utils-constant-function/dist'),d=require('@stdlib/math-base-special-betaincinv/dist'),a=require('@stdlib/math-base-assert-is-nan/dist');function m(e,r){if(a(e)||a(r)||e<=0||r<=0)return y(NaN);return i;function i(n){var t;return a(n)||n<0||n>1?NaN:(t=d(n,e,r),t/(1-t))}}o.exports=m
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=v(),O=q();F(f,"factory",O);module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
