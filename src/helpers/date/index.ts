import * as moment from 'moment-timezone';

const appendZeroIfNeeded = (value: number): string => {
  return `${value < 10 ? '0' + value : value}`;
}

const corceDateByRegExp = (date: string, regExp: RegExp, months?: { [key: string]: number }): string => {
  if (!date) {
    return undefined;
  }
  const match = date.match(regExp);
  if (!match) {
    return undefined;
  }
  const year =
    !Number.isNaN(match.groups.year) && Number(match.groups.year) > 1800 && Number(match.groups.year) < 2200
      ? Number(match.groups.year)
      : undefined;
  const month = months ? months[match.groups.month] : (
    !Number.isNaN(match.groups.month) && Number(match.groups.month) > 0 && Number(match.groups.month) <= 12
      ? Number(match.groups.month)
      : undefined
  );
  const day =
    !Number.isNaN(match.groups.day) && Number(match.groups.day) > 0 && Number(match.groups.day) <= 31
      ? Number(match.groups.day)
      : undefined;
  const hour =
    !Number.isNaN(match.groups.hour) && Number(match.groups.hour) >= 0 && Number(match.groups.hour) < 24
      ? Number(match.groups.hour)
      : undefined;
  const minute =
    !Number.isNaN(match.groups.minute) && Number(match.groups.minute) >= 0 && Number(match.groups.minute) < 60
      ? Number(match.groups.minute)
      : undefined;
  const localDate = `${year}-${appendZeroIfNeeded(month)}-${appendZeroIfNeeded(day)}T${appendZeroIfNeeded(hour)}:${appendZeroIfNeeded(minute)}:00`;
  return moment.tz(localDate, 'Europe/Prague').toISOString();
};

export type CoerceDateType =
  'lnskutec-match' |
  'lnskutec-matchlist' |
  'chhl-match' |
  'chhl-matchlist';

export const coerceDate = (date: string, type: CoerceDateType): string => {
  let regExp: RegExp;
  switch (type) {
    case 'lnskutec-match':
      regExp = new RegExp('(?<day>\\d{1,2})\.(?<month>\\d{1,2})\.(?<year>\\d{4})\\s(?<hour>[0-1]?[0-9]|2[0-3]):(?<minute>\\d{1,2})');
      return corceDateByRegExp(date, regExp);
    case 'lnskutec-matchlist':
      regExp = new RegExp('(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})\\s(?<hour>\\d{2}):(?<minute>\\d{2}):\\d{2}');
      return corceDateByRegExp(date, regExp);
    case 'chhl-matchlist':
    case 'chhl-match':
      regExp = new RegExp('(?<day>\\d{2})\\.(?<month>\\d{2})\\.(?<year>\\d{4})\\s(?<hour>\\d{2}):(?<minute>\\d{2})');
      return corceDateByRegExp(date, regExp);
    default:
      return undefined;
  }
}
