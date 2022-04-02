
import {
  capitalize
} from '../../src/helpers/text';

describe('capitalize', () => {
  it('should return correct value', () => {
    expect(capitalize('DVOŘÁK Karel')).toEqual('Dvořák Karel');
  });

  it('should return undefined', () => {
    expect(capitalize(null)).toEqual(undefined);
    expect(capitalize(undefined)).toEqual(undefined);
  });
})
