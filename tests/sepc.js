'use strict'

let sum = require('../dist/rollup-config.common').sum
console.log(sum)
describe('sum tests', function () {
  it('sum 1 1', function () {
    let ret = sum(1, 1);
    console.log('ret', ret);
    expect(ret).toEqual(2);
  });

  it('sum "1" 2', function () {
    let ret = sum('1', 2);
    expect(ret).toEqual('012');
  });
  it('sum undefined', function () {
    let ret = sum(undefined);
    expect(ret).toBeNaN();
  });
});
