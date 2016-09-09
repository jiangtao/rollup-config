export function sum() {
  console.log(arguments);
  return Array.prototype.reduce.call(arguments, function(pre, cur){
    return pre + cur
  }, 0);
}

