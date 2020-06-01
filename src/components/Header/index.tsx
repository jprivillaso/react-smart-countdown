import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2'

import * as S from './styled';
import { calculateNewTime } from './interval';

import UserContext from '../../state/context';
import { isInputValid } from '../../commons/validateUserInput';

function Header() {
  // shared state
  const { countdownValue, setCurrentValue } = useContext(UserContext);

  // local state
  const [ started, setStarted ] = useState(false);
  const [ time, setTime ] = useState('');

  useEffect(() => {
    if (!started) return;

    const originalTime = parseInt(time.replace(':', ''));
    const halfTime = originalTime / 2;
    const endTime = 0;

    const interval = setInterval(() => {
      const newTime = calculateNewTime(countdownValue);
      setCurrentValue(newTime);

      // Update countdown visualization style
      const newFormattedTime = parseInt(newTime.replace(':', ''));
      if (newFormattedTime === halfTime) {
        console.log('Half time');
      } else if (newFormattedTime === endTime) {
        // resets everything
        console.log('Times up');
        setStarted(false);
        setCurrentValue('');
        setTime('')
      }

    }, 1000);

    return () => clearInterval(interval);
  }, [ countdownValue, setCurrentValue, started, time ]);

  const startCountdown = () => {
    if (isInputValid(time)) {
      setCurrentValue(time);
      setStarted(true);
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