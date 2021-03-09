import 'mocha';
import {expect} from 'chai';
import {pointsAdd} from '../src/exercise-6';

describe('add function test', () => {
  it('point([1, 7], [3, 1]) returns value 4, 8', () => {
    const array1 = [1, 7];
    const array2 = [3, 1];
    expect(pointsAdd(array1, array2)).to.be.equal(`4, 8`);
  });
});
