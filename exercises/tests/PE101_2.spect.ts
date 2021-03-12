import 'mocha';
import {expect} from 'chai';
import {complexAdd} from '../src/PE101_2';

describe('complexAdd function test', () => {
  it('complexAdd([1, 7], [3, 1] returns value 4, 8'), () => {
    const array1 = [1, 7];
    const array2 = [3, 1];
    expect(complexAdd(array1, array2)).to.be.equal([4, 8]);
  });
});