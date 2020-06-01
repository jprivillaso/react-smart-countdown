import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2'

import * as S from './styled';
import UserContext, { CountdownValueContext } from '../../state/context';

const MM_SS_REGEX = /^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d))$/;

function Header() {
  const {
    countdownValue,
    setCurrentValue
  } = useContext(UserContext) as CountdownValueContext;

  const [ started, setStarted ] = useState(false);
  const [ time, setTime ] = useState('');

  const isInputValid = (currentValue: string): boolean =>
    MM_SS_REGEX.test(currentValue) || true

  useEffect(() => {
    if (!started) return;

    const interval = setInterval(() => {
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
    }, 1000);

    return () => clearInterval(interval);
  }, [countdownValue, setCurrentValue, started]);

  const startCountdown = () => {
    if (isInputValid(countdownValue)) {
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
            value={time || ''}
            onChange={
              (e: React.SyntheticEvent<HTMLInputElement>) => setTime(`${e.currentTarget.value}`)
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