import {
  coerceJerseyNumber, coerceMinutes, coerceNumber,
  coercePoints, coerceScore
} from '../../lib/helpers/number';

describe('coerceNumber', () => {
  it('should return correct value', () => {
    expect(coerceNumber('1', 1, 99)).toEqual(1);
    expect(coerceNumber('99', 1, 99)).toEqual(99);
    expect(coerceNumber('50', 1, 99)).toEqual(50);
  });

  it('should return undefined', () => {
    expect(coerceNumber('xxx', 1, 99)).toEqual(undefined);
    expect(coerceNumber('', 1, 99)).toEqual(undefined);
    expect(coerceNumber('0', 1, 99)).toEqual(undefined);
    expect(coerceNumber('100', 1, 99)).toEqual(undefined);
    expect(coerceNumber(null, 1, 99)).toEqual(undefined);
    expect(coerceNumber(undefined, 1, 99)).toEqual(undefined);
  });
});

describe('coerceJerseyNumber', () => {
  it('should return correct value', () => {
    expect(coerceJerseyNumber('1')).toEqual(1);
    expect(coerceJerseyNumber('99')).toEqual(99);
    expect(coerceJerseyNumber('50')).toEqual(50);
  });

  it('should return undefined', () => {
    expect(coerceJerseyNumber('xxx')).toEqual(undefined);
    expect(coerceJerseyNumber('')).toEqual(undefined);
    expect(coerceJerseyNumber('0')).toEqual(undefined);
    expect(coerceJerseyNumber('100')).toEqual(undefined);
    expect(coerceJerseyNumber(null)).toEqual(undefined);
    expect(coerceJerseyNumber(undefined)).toEqual(undefined);
  });
});

describe('coercePoints', () => {
  it('should return correct value', () => {
    expect(coercePoints('0')).toEqual(0);
    expect(coercePoints('50')).toEqual(50);
    expect(coercePoints('10000')).toEqual(10000);
  });

  it('should return undefined', () => {
    expect(coercePoints('xxx')).toEqual(undefined);
    expect(coercePoints('')).toEqual(undefined);
    expect(coercePoints('10001')).toEqual(undefined);
    expect(coercePoints(null)).toEqual(undefined);
    expect(coercePoints(undefined)).toEqual(undefined);
  });
});

describe('coerceMinutes', () => {
  it('should return correct value', () => {
    expect(coerceMinutes('0')).toEqual(0);
    expect(coerceMinutes('50')).toEqual(50);
    expect(coerceMinutes('10000')).toEqual(10000);
  });

  it('should return undefined', () => {
    expect(coerceMinutes('xxx')).toEqual(undefined);
    expect(coerceMinutes('')).toEqual(undefined);
    expect(coerceMinutes('10001')).toEqual(undefined);
    expect(coerceMinutes(null)).toEqual(undefined);
    expect(coerceMinutes(undefined)).toEqual(undefined);
  });
});

describe('coerceScore', () => {
  it('should return correct value', () => {
    expect(coerceScore('0')).toEqual(0);
    expect(coerceScore('99')).toEqual(99);
    expect(coerceScore('50')).toEqual(50);
  });

  it('should return undefined', () => {
    expect(coerceScore('xxx')).toEqual(undefined);
    expect(coerceScore('')).toEqual(undefined);
    expect(coerceScore('100')).toEqual(undefined);
    expect(coerceScore(null)).toEqual(undefined);
    expect(coerceScore(undefined)).toEqual(undefined);
  });
});
