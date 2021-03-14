/* eslint-disable max-len */

import 'mocha';
import {expect} from 'chai';
import {agent} from '../src/exercise-8';

describe('agent function tests', () => {
  it('Resultado de agent(board[0], board[1], initialPoint, finalPoint) es: North, East, East, East]', () => {
    expect(agent(10, 10, [1, 2], [2, 5])).to.be.eql(["North", "East", "East", "East"]);
  });
  it('Resultado de agent(board[0], board[1], initialPoint, finalPoint) es: Error en el rango', () => {
    expect(agent(10, 10, [-2, 7], [11, 6])).to.be.eql(['Error en el rango']);
  });
});
