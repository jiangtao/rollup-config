/*!
 * rollup-config v1.0.0
 * (c) 2016 Jerret
 * Released under the MIT License.
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.rollupConfig = global.rollupConfig || {})));
}(this, (function (exports) { 'use strict';

function sum() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	return args.reduce(function (pre, cur) {
		return pre + cur;
	}, 0);
}

exports.sum = sum;

Object.defineProperty(exports, '__esModule', { value: true });

})));