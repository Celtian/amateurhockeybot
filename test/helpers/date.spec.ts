import { coerceDate } from '../../lib/helpers/date';

describe('coerceDate', () => {
  describe('match', () => {
    it('should return correct value', () => {
      expect(coerceDate('16.2.2020 8:55', 'match')).toEqual('2020-02-16T07:55:00.000Z');
    });

    it('should return undefined', () => {
      expect(coerceDate('xxx', 'match')).toEqual(undefined);
      expect(coerceDate('', 'match')).toEqual(undefined);
      expect(coerceDate(null, 'match')).toEqual(undefined);
      expect(coerceDate(undefined, 'match')).toEqual(undefined);
    });
  });

  describe('matchlist', () => {
    it('should return correct value', () => {
      expect(coerceDate('2020-02-16 10:45:19', 'matchlist')).toEqual('2020-02-16T09:45:00.000Z');
    });

    it('should return undefined', () => {
      expect(coerceDate('xxx', 'matchlist')).toEqual(undefined);
      expect(coerceDate('', 'matchlist')).toEqual(undefined);
      expect(coerceDate(null, 'matchlist')).toEqual(undefined);
      expect(coerceDate(undefined, 'matchlist')).toEqual(undefined);
    });
  });
});
