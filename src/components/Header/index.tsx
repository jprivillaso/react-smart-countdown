import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2'

import * as S from './styled';

import { calculateNewTime } from './interval';
import { isInputValid, getSeconds } from '../../commons/utils';
import { Status, ContextType } from '../../commons/types';

import CountdownContext from '../../state/context';

function Header() {
  // shared state
  const {
    countdownValue,
    countdownStatus,
    countdownSpeed,
    setCurrentValue,
    setCurrentStatus
  } = useContext(CountdownContext) as ContextType;

  // local state
  const [ time, setTime ] = useState('');
  const [ speed, setSpeed ] = useState(1000);

  useEffect(() => {
    if (
      !countdownStatus ||
      countdownStatus === Status.Ended ||
      countdownStatus === Status.Paused ||
      countdownStatus === Status.Stopped
    ) return;

    const halfTime = getSeconds(time) / 2;
    const endTime = 0;

    if (countdownSpeed !== speed) {
      setSpeed(countdownSpeed);
    }

    const interval = setInterval(() => {
      const newTime = calculateNewTime(countdownValue);
      setCurrentValue(newTime);

      // Update countdown visualization style
      const newTimeInSecs = getSeconds(newTime);
      if (newTimeInSecs === endTime) {
        // resets everything
        setCurrentStatus(Status.Ended);
        setCurrentValue('');
        setTime('')
      } else if (newTimeInSecs <= halfTime) {
        setCurrentStatus(Status.HalfPassed);
      }
    }, speed);

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ countdownValue, countdownStatus, countdownSpeed ]);

  const startCountdown = () => {
    if (isInputValid(time)) {
      setCurrentValue(time);
      setCurrentStatus(Status.Started)
    } else {
      Swal.fire(
        'Error',
        'Please insert the value with the proper format MM:SS',
        'error'
      );
    }
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