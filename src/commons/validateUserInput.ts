const MM_SS_REGEX = /^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d))$/;

const isUnderBoundaries = (currentValue: string) => {
  console.log(currentValue);
  return parseInt(currentValue.split(':')[0]) >= 0 &&
  parseInt(currentValue.split(':')[0]) <= 59 &&
  parseInt(currentValue.split(':')[1]) >= 0 &&
  parseInt(currentValue.split(':')[1]) <= 59
}

export const isInputValid = (currentValue: string): boolean =>
  MM_SS_REGEX.test(currentValue) && isUnderBoundaries(currentValue);
