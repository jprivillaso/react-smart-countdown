import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import Button from '../Button';
import Input from '../Input';
import Title from '../Title';
import { isInputValid } from '../../commons/utils';
import { getNewStatusAndTime } from '../../commons/timer';
import { Vertical } from '../../commons/styled';
import { Status, ContextType } from '../../commons/types';
import CountdownContext from '../../state/context';
import * as S from './styled';

const isRunning = (status: Status) => [Status.Started, Status.HalfPassed].includes(status);

function Header() {
  const { countdownValue, countdownStatus, countdownSpeed, setCurrentValue, setCurrentStatus } =
    useContext(CountdownContext) as ContextType;

  const [time, setTime] = useState('');

  useEffect(() => {
    if (!isRunning(countdownStatus)) return;

    const interval = setInterval(() => {
      const { newStatus, newTime } = getNewStatusAndTime({
        countdownStatus,
        countdownValue,
        time,
      });

      setCurrentStatus(newStatus);
      setCurrentValue(newTime);
    }, countdownSpeed);

    return () => clearInterval(interval);
  }, [countdownValue, countdownStatus, countdownSpeed, setCurrentStatus, setCurrentValue, time]);

  const startCountdown = () => {
    if (!isInputValid(time)) {
      Swal.fire('Error', 'Please insert a value with the proper format MM:SS', 'error');
      return;
    }

    setCurrentValue(time);
    setCurrentStatus(Status.Started);
  };

  return (
    <S.Header>
      <Vertical>
        <Title>Smart Countdown</Title>
        <div>
          <Input
            placeholder="01:00"
            value={time || ''}
            onChange={(e: React.SyntheticEvent<HTMLInputElement>) =>
              setTime(`${e.currentTarget.value}`)
            }
          ></Input>
          <Button onClick={() => startCountdown()}>{!countdownValue ? 'Start' : 'Reset'}</Button>
        </div>
      </Vertical>
    </S.Header>
  );
}

export default Header;
