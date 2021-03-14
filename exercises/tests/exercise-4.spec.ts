/* eslint-disable max-len */

import 'mocha';
import {expect} from 'chai';
import {moveZeros} from '../src/exercise-4';

describe('moveZeros function tests', () => {
  it('Result of moveZeros([1, 0, 1, 2, 0, 1, 3]) is: [1, 1, 2, 1, 3, 0, 0]', () => {
    expect(moveZeros([1, 0, 1, 2, 0, 1, 3])).to.be.eql([1, 1, 2, 1, 3, 0, 0]);
  });

  it('Result of moveZeros([1, 4, 3, 2, 5]) is: [1, 4, 3, 2, 5]', () => {
    expect(moveZeros([1, 4, 3, 2, 5])).to.be.eql([1, 4, 3, 2, 5]);
  });
});
