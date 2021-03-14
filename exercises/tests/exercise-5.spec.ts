
import 'mocha';
import {expect} from 'chai';
import {multiplyAll} from '../src/exercise-5';

describe('multiplyAll function tests', () => {
  it('Result of multiplyAll([2, 6, 8])(3) is: [6, 18, 24]', () => {
    expect(multiplyAll([2, 6, 8])(3)).to.be.eql([6, 18, 24]);
  });
});
