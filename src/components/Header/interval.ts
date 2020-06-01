export const handleInterval = (
  countdownValue: string,
  setCurrentValue: Function
): void => {
  const [ minutes, seconds ] = countdownValue.split(':');

  let minInt = parseInt(minutes);
  let secInt = parseInt(seconds);

  if (secInt - 1 >= 0) {
    secInt -= 1;
  } else {
    secInt = 59;
    minInt = Math.max(minInt - 1, 0);
  }

  const newTime = `${minInt}`.padStart(2, '0')
    + ':' + `${secInt}`.padStart(2, '0');
  setCurrentValue(newTime);

  if (minInt === 0 && secInt === 0) {
    console.log('Times up');
  }
}