import { Status } from './types';

const getSeconds = (expression: string): number => {
  const [min, sec] = expression.split(':');
  return parseInt(sec, 10) + parseInt(min, 10) * 60;
};

const calculateNewTime = (countdownValue: string): string => {
  const [minutes, seconds] = countdownValue.split(':');

  let minInt = parseInt(minutes, 10);
  let secInt = parseInt(seconds, 10);

  if (secInt - 1 >= 0) {
    secInt -= 1;
  } else {
    secInt = 59;
    minInt = Math.max(minInt - 1, 0);
  }

  const newTime = `${`${minInt}`.padStart(2, '0')}:${`${secInt}`.padStart(2, '0')}`;

  return newTime;
};

export const getNewStatusAndTime = ({
  countdownValue,
  countdownStatus,
  time,
}: {
  countdownStatus: Status;
  countdownValue: string;
  time: string;
}) => {
  const halfTime = getSeconds(time) / 2;

  let newTime = calculateNewTime(countdownValue);
  const newTimeInSecs = getSeconds(newTime);
  let newStatus: Status = countdownStatus;

  if (newTimeInSecs === 0) {
    newStatus = Status.Ended;
    newTime = '';
  } else if (newTimeInSecs <= halfTime) {
    newStatus = Status.HalfPassed;
  }

  return {
    newStatus,
    newTime,
  };
};
