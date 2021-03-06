import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2'

import * as S from './styled';

import { calculateNewTime } from './interval';
import { isInputValid, getSeconds } from '../../commons/utils';
import {
  Status,
  ContextType,
  UpdateCountdownParams
} from '../../commons/types';

import CountdownContext from '../../state/context';

const isRunning = (status: Status) =>
  [Status.Started, Status.HalfPassed].includes(status);

const getNewStatusAndTime = ({
  countdownValue,
  countdownStatus,
  time
}: { countdownStatus: Status, countdownValue: string, time: string }) => {
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
    newTime
  }
}

const updateCountdown = ({
  countdownValue,
  countdownStatus,
  countdownSpeed,
  setCurrentStatus,
  setCurrentValue,
  time
 }: UpdateCountdownParams) => {
  return setInterval(() => {
    const { newStatus, newTime } = getNewStatusAndTime({
      countdownStatus,
      countdownValue,
      time
    });

    setCurrentStatus(newStatus);
    setCurrentValue(newTime);
  }, countdownSpeed);
}

function Header() {
  const {
    countdownValue,
    countdownStatus,
    countdownSpeed,
    setCurrentValue,
    setCurrentStatus
  } = useContext(CountdownContext) as ContextType;

  const [ time, setTime ] = useState('');

  useEffect(() => {
    if (!isRunning(countdownStatus)) return;

    const interval = updateCountdown({
      countdownValue,
      countdownStatus,
      countdownSpeed,
      setCurrentStatus,
      setCurrentValue,
      time
    });

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ countdownValue, countdownStatus ]);

  const startCountdown = () => {
    if (!isInputValid(time)) {
      Swal.fire(
        'Error',
        'Please insert the value with the proper format MM:SS',
        'error'
      );
      return;
    }

    setCurrentValue(time);
    setCurrentStatus(Status.Started);
  }

  return (
    <S.Header>
      <S.Vertical>
        <S.Text>Smart Countdown</S.Text>
        <div>
          <S.Input
            placeholder="02:30"
            value={ time || '' }
            onChange={
              (e: React.SyntheticEvent<HTMLInputElement>) => setTime(`${ e.currentTarget.value }`)
            }
          ></S.Input>
          <S.Button
            onClick={() => startCountdown()}
          >Start</S.Button>
        </div>
      </S.Vertical>
    </S.Header>
  );
}

export default Header;