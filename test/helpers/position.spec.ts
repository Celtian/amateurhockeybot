import {
  coercePosition
} from '../../lib/helpers/position';
import { AmateurHockeyBotMatchPlayerPosition } from '../../lib/types';

describe('coercePosition', () => {
  it('should return correct value', () => {
    expect(coercePosition('O')).toEqual(AmateurHockeyBotMatchPlayerPosition.DEFENDER);
    expect(coercePosition('U')).toEqual(AmateurHockeyBotMatchPlayerPosition.ATTACKER);
    expect(coercePosition('B')).toEqual(AmateurHockeyBotMatchPlayerPosition.GOALKEEPER);
  });

  it('should return undefined', () => {
    expect(coercePosition('xxx')).toEqual(undefined);
    expect(coercePosition('')).toEqual(undefined);
    expect(coercePosition(null)).toEqual(undefined);
    expect(coercePosition(undefined)).toEqual(undefined);
  });
})
