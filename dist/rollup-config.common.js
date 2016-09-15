/*!
 * rollup-config v0.2.1
 * (c) 2016 Jerret
 * Released under the MIT License.
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function sum() {
  console.log(arguments);
  return Array.prototype.reduce.call(arguments, function (pre, cur) {
    return pre + cur;
  }, 0);
}

exports.sum = sum;