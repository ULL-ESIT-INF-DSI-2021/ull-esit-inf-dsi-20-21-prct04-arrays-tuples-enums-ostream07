/* eslint-disable camelcase */
/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */

import 'mocha';
import {expect} from 'chai';
import {pointAdd} from '../src/exercise-6';
import {pointSubstract} from '../src/exercise-6';
import {pointProduct} from '../src/exercise-6';
import {euclideanDistance} from '../src/exercise-6';

describe('Type point functions test', () => {
  it('pointAdd(point1, point2) returns value [3, 11]', () => {
    type Point = {
      x: number,
      y: number,
    };
    const point1: Point = {
      x: 1,
      y: 4,
    };
    const point2: Point = {
      x: 2,
      y: 7,
    };
    const result: Point = {
      x: 3,
      y: 11,
    };
    expect(pointAdd(point1, point2)).to.be.eql(result);
  });
  
  it('pointSubstract(point1, point2) returns value [-1, -3]', () => {
    type Point = {
      x: number,
      y: number,
    };
    const point1: Point = {
      x: 1,
      y: 4,
    };
    const point2: Point = {
      x: 2,
      y: 7,
    };
    const result: Point = {
      x: -1,
      y: -3,
    };
    expect(pointSubstract(point1, point2)).to.be.eql(result);
  });

  it('pointProduct(point1, operator) returns value [5, 20]', () => {
    type Point = {
      x: number,
      y: number,
    };
    const point1: Point = {
      x: 1,
      y: 4,
    };
    const result: Point = {
      x: 5,
      y: 20,
    };
    const operator: number = 5;
    expect(pointProduct(point1, operator)).to.be.eql(result);
  });

  it('euclideanDistance(point1, point2) returns value 3.16', () => {
    type Point = {
      x: number,
      y: number,
    };
    const point1: Point = {
      x: 1,
      y: 4,
    };
    const point2: Point = {
      x: 2,
      y: 7,
    };
    const final_result: number = 3.1622776601683795;
    expect(euclideanDistance(point1, point2)).to.be.eql(final_result);
  });
});
