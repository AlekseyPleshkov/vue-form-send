!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["vue-form-send"]=t():e["vue-form-send"]=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r={bind(e,t){let n={success:()=>{},fail:()=>{},credentials:!1,auth:{type:"bearer",data:null}};n=Object.assign(n,t.value),e.$onSubmit=(t=>{t.preventDefault();const r=e.action,o=Array.from(t.target);let a="",i={},l=!1;if(o.forEach(e=>{void 0!==e.$validation&&(e.$validation()?(e.$replace(),a+=e.name+"="+e.value+"&",i[e.name]=e.value):(e.$validationError(),l=!0))}),l)n.fail(null,i);else{const e=new("onload"in new XMLHttpRequest?XMLHttpRequest:XDomainRequest);if(e.open("POST",r),e.withCredentials=n.credentials,e.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),null!==n.auth.data){const t=btoa(n.auth.data),r=`${n.auth.type} ${t}`;console.log(r),e.setRequestHeader("Authorization",r)}e.onload=(()=>{n.success(e,i)}),e.onerror=(()=>{n.fail(e,i)}),e.send(a),o.forEach(e=>{e.$clean&&(e.value="")})}}),e.addEventListener("submit",e.$onSubmit)},unbind(e,t){e.removeEventListener("submit",e.$onSubmit),delete e.$onSubmit}},o={bind(e,t){let n={type:"length",timeoutError:1200,changeValidation:!1,replace:[],clean:!0,length:0};n=Object.assign(n,t.value),e.$clean=n.clean,n.changeValidation&&e.addEventListener("input",()=>{e.$validation()||e.$validationError()}),e.$validation=(()=>{let t=e.value;e.classList.remove("error");for(const e of n.replace)t=t.replace(new RegExp(e,"g"),"");return!("length"===n.type&&t.length<n.length||"checked"===n.type&&!e.checked)}),e.$replace=(()=>{let t=e.value;return n.replace.forEach(e=>{t=t.replace(new RegExp(e,"g"),"")}),e.value=t,n.replace.length>0}),e.$validationError=(()=>{e.classList.add("error"),n.timeoutError>0&&setTimeout(()=>{e.classList.remove("error")},n.timeoutError)})},unbind(e,t){delete e.$validation,delete e.$validationError}},a={install:(e,t)=>{e.directive("form-send",r),e.directive("form-input",o)}};t.default=a,"undefined"!=typeof window&&window.Vue&&window.Vue.use(a)}])});