/* eslint-disable max-len */

import 'mocha';
import {expect} from 'chai';
import {decodeResistor} from '../src/exercise-1';

describe('decodeResistor function test', () => {
  it('decodeResistor(blanco, verde, violeta) returns Código de colores erroneo', () => {
    expect(decodeResistor('blanco, verde, violeta')).to.be.equal(undefined);
  });
});

