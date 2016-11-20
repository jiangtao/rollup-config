/*!
 * rollup-config v1.0.0
 * (c) 2016 Jerret
 * Released under the MIT License.
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function sum() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	return args.reduce(function (pre, cur) {
		return pre + cur;
	}, 0);
}

exports.sum = sum;