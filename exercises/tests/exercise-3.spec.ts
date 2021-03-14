/* eslint-disable max-len */

import 'mocha';
import {expect} from 'chai';
import {meanAndConcatenate} from '../src/exercise-3';

describe('meanAndConcatenate function tests', () => {
  it('Result of meanAndConcatenate(["u", 6, "d", 1, "i", "w", 6, "s", "t", 4, "a", 6, "g", 1, 2, "w", 8, "o", 2, 0]) es: [ 3.6, \'udiwstagwo\' ]', () => {
    expect(meanAndConcatenate(['u', 6, 'd', 1, 'i', 'w', 6, 's', 't', 4, 'a', 6, 'g', 1, 2, 'w', 8, 'o', 2, 0])).to.be.eql([3.6, 'udiwstagwo']);
  });

  it('Result of meanAndConcatenate([ "w", "i", "t", "h", "o", "u", "t", "n", "u", "m", "b", "e", "r" ]) es: [ 0, \'withoutnumber\' ]', () => {
    expect(meanAndConcatenate(['w', 'i', 't', 'h', 'o', 'u', 't', 'n', 'u', 'm', 'b', 'e', 'r'])).to.be.eql([NaN, 'withoutnumber']);
  });
});
