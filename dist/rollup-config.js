/*!
 * rollup-config v0.2.1
 * (c) 2016 Jerret
 * Released under the MIT License.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.rollupConfig = global.rollupConfig || {})));
}(this, (function (exports) { 'use strict';

function sum() {
  console.log(arguments);
  return Array.prototype.reduce.call(arguments, function (pre, cur) {
    return pre + cur;
  }, 0);
}

exports.sum = sum;

Object.defineProperty(exports, '__esModule', { value: true });

})));