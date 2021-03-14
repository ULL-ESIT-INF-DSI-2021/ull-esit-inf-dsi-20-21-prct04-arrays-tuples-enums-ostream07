/* eslint-disable max-len */

import 'mocha';
import {expect} from 'chai';
import {nPointsAdd} from '../src/exercise-7';
import {nPointsSubstract} from '../src/exercise-7';
import {nPointsProduct} from '../src/exercise-7';
import {nPointsEuclideanDistance} from '../src/exercise-7';

describe('nPoints functions test', () => {
  type nPoints = [number, number, number, ...number[]];
  const nPoint1: nPoints = [1, 2, 3, 4];
  const nPoint2: nPoints = [10, 8, 9, 7];
  const constante: number = 3;
  it('nPointsAdd(nPoint1, nPoint2) returns [11, 10, 12, 11]', () => {
    const result: nPoints = [11, 10, 12, 11];
    expect(nPointsAdd(nPoint1, nPoint2)).to.be.equal(result);
  });
  it('nPointsSubstract(nPoint1, nPoint2) returns value [-9, -6, -6, -3]', () => {
    const result: nPoints = [-9, -6, -6, -3];
    expect(nPointsSubstract(nPoint1, nPoint2)).to.be.equal(result);
  });
  it('nPointsProduct(nPoint1, constante) returns value [3, 6, 9, 12]', () => {
    const result: nPoints = [3, 6, 9, 12];
    expect(nPointsProduct(nPoint1, constante)).to.be.equal(result);
  });
  it('nPointsEuclideanDistance(nPoint1, nPoint2) returns value 12.73', () => {
    const result: number = 12.727922061357855;
    expect(nPointsEuclideanDistance(nPoint1, nPoint2)).to.be.equal(result);
  });
});

