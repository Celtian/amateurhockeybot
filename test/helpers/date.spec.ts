import { coerceDate } from '../../src/helpers/date';

describe('coerceDate', () => {
  describe('lnskutec match', () => {
    it('should return correct value', () => {
      expect(coerceDate('16.2.2020 8:55', 'lnskutec-match')).toEqual('2020-02-16T07:55:00.000Z');
    });

    it('should return undefined', () => {
      expect(coerceDate('xxx', 'lnskutec-match')).toEqual(undefined);
      expect(coerceDate('', 'lnskutec-match')).toEqual(undefined);
      expect(coerceDate(null, 'lnskutec-match')).toEqual(undefined);
      expect(coerceDate(undefined, 'lnskutec-match')).toEqual(undefined);
    });
  });

  describe('lnskutec matchlist', () => {
    it('should return correct value', () => {
      expect(coerceDate('2020-02-16 10:45:19', 'lnskutec-matchlist')).toEqual('2020-02-16T09:45:00.000Z');
    });

    it('should return undefined', () => {
      expect(coerceDate('xxx', 'lnskutec-matchlist')).toEqual(undefined);
      expect(coerceDate('', 'lnskutec-matchlist')).toEqual(undefined);
      expect(coerceDate(null, 'lnskutec-matchlist')).toEqual(undefined);
      expect(coerceDate(undefined, 'lnskutec-matchlist')).toEqual(undefined);
    });
  });

  describe('chhl match', () => {
    it('should return correct value', () => {
      expect(coerceDate('24.09.2016 14:30', 'chhl-match')).toEqual('2016-09-24T12:30:00.000Z');
    });

    it('should return undefined', () => {
      expect(coerceDate('xxx', 'chhl-match')).toEqual(undefined);
      expect(coerceDate('', 'chhl-match')).toEqual(undefined);
      expect(coerceDate(null, 'chhl-match')).toEqual(undefined);
      expect(coerceDate(undefined, 'chhl-match')).toEqual(undefined);
    });
  });

  describe('chhl matchlist', () => {
    it('should return correct value', () => {
      expect(coerceDate('16.01.2022	07:15', 'chhl-matchlist')).toEqual('2022-01-16T06:15:00.000Z');
    });

    it('should return undefined', () => {
      expect(coerceDate('xxx', 'chhl-matchlist')).toEqual(undefined);
      expect(coerceDate('', 'chhl-matchlist')).toEqual(undefined);
      expect(coerceDate(null, 'chhl-matchlist')).toEqual(undefined);
      expect(coerceDate(undefined, 'chhl-matchlist')).toEqual(undefined);
    });
  });
});
