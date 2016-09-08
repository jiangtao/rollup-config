/*!
 * rollup-config v0.0.1
 * (c) 2016 Jerret
 * Released under the MIT License.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.rollupConfig = factory());
}(this, (function () { 'use strict';

function say(name) {
  return name;
}

return say;

})));