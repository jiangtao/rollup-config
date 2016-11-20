export function sum(...args) {
	return args.reduce(function(pre, cur) {
		return pre + cur
	}, 0)
}

