export const coerceNumber = (stringValue: string, min: number, max: number): number => {
  if(!stringValue) {
    return undefined;
  }
  const numberAsString = stringValue.replace(/\D/g,'');
  if(!numberAsString || Number.isNaN(numberAsString)) {
    return undefined;
  }
  const value = Number(numberAsString);
  if(value >= min && value <= max) {
    return value;
  }
  return undefined;
}

export const coerceJerseyNumber = (jerseyNumber: string): number => {
  return coerceNumber(jerseyNumber, 1, 99);
}

export const coercePoints = (points: string): number => {
  return coerceNumber(points, 0, 10000);
}

export const coerceMinutes = (minutes: string): number => {
  return coerceNumber(minutes, 0, 10000);
}

export const coerceScore = (minutes: string): number => {
  return coerceNumber(minutes, 0, 99);
}
