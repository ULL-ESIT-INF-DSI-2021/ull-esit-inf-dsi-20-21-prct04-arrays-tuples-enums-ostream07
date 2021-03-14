/* eslint-disable max-len */

import 'mocha';
import {expect} from 'chai';
import {meshArray} from '../src/exercise-2';

describe('meshArray function tests', () => {
  it('Result of meshArray([ "allow", "lowering", "ringmaster", "terror" ]) es: lowringter', () => {
    expect(meshArray(["allow", "lowering", "ringmaster", "terror"])).to.be.equal(undefined);
  });

  it('Result of meshArray([ "kingdom", "dominator", "notorious", "usual", "allegory" ]) es: Error al encadenar', () => {
    expect(meshArray(["kingdom", "dominator", "notorious", "usual", "allegory"])).to.be.equal(undefined);
  });
});
