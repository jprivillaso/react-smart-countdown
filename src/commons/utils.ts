const MM_SS_REGEX = /^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d))$/;
const NUMBER_REGEX = /\d+/;

const isUnderBoundaries = (currentValue: string) => {
  console.log(currentValue);
  return (
    parseInt(currentValue.split(':')[0], 10) >= 0 &&
    parseInt(currentValue.split(':')[0], 10) <= 59 &&
    parseInt(currentValue.split(':')[1], 10) >= 0 &&
    parseInt(currentValue.split(':')[1], 10) <= 59
  );
};

export const isInputValid = (currentValue: string): boolean =>
  MM_SS_REGEX.test(currentValue) && isUnderBoundaries(currentValue);

export const isNumeric = (expression: string): boolean => NUMBER_REGEX.test(expression);
