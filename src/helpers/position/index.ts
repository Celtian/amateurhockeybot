import { AmateurHockeyBotMatchPlayerPosition } from '../../types';

export const coercePosition = (stringValue: string): AmateurHockeyBotMatchPlayerPosition => {
  switch (stringValue) {
    case 'O':
      return AmateurHockeyBotMatchPlayerPosition.DEFENDER;
    case 'U':
      return AmateurHockeyBotMatchPlayerPosition.ATTACKER;
    case 'B':
      return AmateurHockeyBotMatchPlayerPosition.GOALKEEPER;
    default:
      return undefined;
  }
}
